import Foundation

import BigInt
import web3swift

extension LuckyDropHistoryViewModel {
    struct TokenPayload {
        let checkAvailability: HappyRedPacketV4.CheckAvailabilityResult?
        let payload: RedPacketPayload

        var id: String {
            payload.basic?.txid ?? ""
        }
    }

    @MaskGroupActor
    func fetchTokenRedPacketHistory() async throws -> [TokenPayload] {
        // first get explore url, if return nil
        // display empty state
        guard let params = await self.getFetchParams() else {
            return []
        }
        let (urlString, contractAddress, provider, address, networkName) = params

        guard let baseURL = URL(string: urlString) else {
            return []
        }

        // get endBlock
        let block = try await provider.blockNumber()
        let startBlock = await self.startBlock
        let apiKey = await self.apiKey

        // build request
        guard let urlComponents = baseURL.buildURLComponents(apiKey: apiKey, address: address, startBlock: startBlock, endBlock: block),
              let url = urlComponents.url else {
            return []
        }

        let urlRequest = try URLRequest(url: url, method: .get)
        try Task.checkCancellation()
        let (data, _)  = try await provider.provider.session.data(for: urlRequest)
        guard !Task.isCancelled else {
            return []
        }

        let decoder = JSONDecoder()

        let payloads = try data.parseRedpacketPayload(
            contract: contract,
            decoding: decoder,
            address: address,
            networkName: networkName ?? ""
        )

        let ethAddress = EthereumAddress(contractAddress)

        struct SuccessEvent {
            let id: String
            let creation_time: BigUInt

            init?(json: [String: Any]) {
                guard let data = json["id"] as? Data,
                      let time = json["creation_time"] as? BigUInt else {
                    return nil
                }

                self.id = data.toHexString()
                self.creation_time = time
            }
        }

        return await withTaskGroup(
            of: TokenPayload?.self,
            returning: [TokenPayload].self
        ) { taskGroup in
            for payload in payloads[0 ..< 6] {
                taskGroup.addTask {
                    // mark @MaskGroupActor for the closure to make it works
                    async let task = Task.detached { @MaskGroupActor () -> TokenPayload? in
                        var payload = payload
                        // here txid is a garantee value
                        let txid = payload.basic?.txid ?? ""

                        // TODO: reimplement getTransactionReceipt and ReadTransaction.call with async/await
                        // getTransactionReceipt adn tx.call is the bottle neck
                        // it will wait to get log on a queue to cause uneffeciency compare to the async/await
                        // if use the down follow code to request eventlog, it is ok, but the checkAvailability will get stuck
                        // when the payloads is too much.

//                        let request = JSONRPCRequestFabric.prepareRequest(.getTransactionReceipt, parameters: [txid])
//                        let result: JSONRPCresponse? = try? await provider.post(request)
//                        let transactionResult: TransactionReceipt? = result?.getValue()
//                        guard let log = transactionResult?.logs.first(where: { $0.address == ethAddress }) else {
//                            return nil
//                        }

                        guard let transactionResult = try? provider.eth.getTransactionReceipt(txid),
                              let log = transactionResult.logs.first(where: { $0.address == ethAddress }) else {
                            return nil
                        }

                        let json = self.contract.parse(eventlog: log, filter: .creationSuccess)
                        guard let eventParam = SuccessEvent(json: json) else {
                            return nil
                        }

                        payload.basic?.rpid = eventParam.id
                        payload.basic?.creationTime = eventParam.creation_time.asDouble() ?? 0

                        let checkAvailability = await self.contract.checkAvailability(redPackageId: eventParam.id)
                        payload.payload?.claimers = checkAvailability?.claimed
                            .flatMap { $0.asInt() }
                            .map { (0..<$0).map { _ in RedPacket.Claimer.init(address: "", name: "") } }
                        payload.payload?.totalRemaining = checkAvailability?.balance.flatMap { String($0, radix: 10) }

                        return TokenPayload.init(checkAvailability: checkAvailability, payload: payload)
                    }

                    return await task.value
                }
            }

            var results: [TokenPayload] = []
            guard !taskGroup.isCancelled else {
                return results
            }

            while let result = await taskGroup.next() {
                if let value = result {
                    results.append(value)
                }
            }

            return results
        }
    }
}

fileprivate extension Data {
    func parseRedpacketPayload(
        contract: HappyRedPacketV4,
        decoding decoder: JSONDecoder,
        address: String,
        networkName: String
    ) throws -> [RedPacketPayload] {
        do {
            let payload = try decoder.decode(AnyscanListOf<RedPacketHistoryInfo>.self, from: self)
            let lowcaseAddres = address.lowercased()

            return payload.result.compactMap { next in
                guard next.from.lowercased() == lowcaseAddres else {
                    return nil
                }

                guard !next.hash.isEmpty else {
                    return nil
                }

                let kvpair = contract.parse(input: next.input, for: .createRedPacket)
                let redpacketInfo = RedPacketHistoryInfo.CreateRedpacketParam(json: kvpair)

                guard let info = redpacketInfo else { return nil }

                let basic = RedPacket.Basic(
                    contractAddress: next.contractAddress,
                    rpid: "",
                    txid: next.hash,
                    password: "",
                    shares: info.number.asInt() ?? 0,
                    isRandom: info.ifrandom,
                    total: info.total_tokens.description,
                    creationTime: 0,
                    duration: info.duration.asDouble() ?? 0,
                    blockNumber: Int(next.blockNumber)
                )

                let packetPayload = RedPacket.RedPacketPayload.Payload.init(
                    sender: .init(address: address, name: info.name, message: info.message),
                    contractVersion: 4,
                    network: networkName,
                    tokenType: info.token_type.asInt().flatMap { .init(rawValue: $0) },
                    token: nil,
                    tokenAddress: info.token_addr,
                    claimers: [],
                    totalRemaining: nil
                )

                return RedPacketPayload.init(basic: basic, payload: packetPayload)
            }

        } catch {
            throw error
        }
    }
}

fileprivate extension URL {
    func buildURLComponents(apiKey: String?, address: String, page: Int = 0, offset: Int = 0, startBlock: Int?, endBlock: BigUInt?) -> URLComponents? {
        guard var url = URLComponents(url: self, resolvingAgainstBaseURL: false) else {
            return nil
        }

        url.queryItems = [
            .init(name: "apikey", value: apiKey),
            .init(name: "action", value: "txlist"),
            .init(name: "module", value: "account"),
            .init(name: "sort", value: "desc"),
            .init(name: "address", value: address),
            .init(name: "startblock", value: startBlock.flatMap { "\($0)" }),
            .init(name: "endblock", value: endBlock.flatMap { String.init($0) }),
//            .init(name: "page", value: "\(page)"),
//            .init(name: "offset", value: "\(offset)")
        ]

        return url
    }
}
