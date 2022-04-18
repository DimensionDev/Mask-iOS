import Foundation

import BigInt
import web3swift

/// Restful response for etherscan.io/bscscan.com/...
struct AnyscanResponse<T: Codable>: Codable {
    let status: String
    let message: String
    let result: T
}

struct RedPacketHistoryInfo: Codable {
    let blockNumber: String
    let timeStamp: String
    let hash: String
    let nonce: String
    let blockHash: String
    let transactionIndex: String
    let from: String
    let to: String
    let value: String
    let gas: String
    let gasPrice: String
    let isError: String
    let txreceipt_status: String?
    let input: String
    let contractAddress: String
    let cumulativeGasUsed: String
    let gasUsed: String
    let confirmations: String
}

typealias AnyscanListOf<T: Codable> = AnyscanResponse<[T]>

extension Encodable {
    func asDictionary() throws -> [String: Any] {
        let data = try JSONEncoder().encode(self)
        let dictionary = try JSONSerialization.jsonObject(with: data, options: .allowFragments)
        return dictionary as? [String: Any] ?? [:]
    }
}



extension RedPacketHistoryInfo {
    struct CreateRedpacketParam {
        let duration: BigUInt
        let ifrandom: Bool
        let message: String
        let name: String
        let number: BigUInt
        //        let public_key: String
        //        let seed: String
        let token_addr: String
        let token_type: BigUInt
        let total_tokens: BigUInt

        init?(json: [String: Any]) {
            // _seed is Data
            guard let duration = json["_duration"] as? BigUInt,
                  let ifrandom = json["_ifrandom"] as? Bool,
                  let message = json["_message"] as? String,
                  let name = json["_name"] as? String,
                  let number = json["_number"] as? BigUInt,
                  let token_addr = json["_token_addr"] as? EthereumAddress,
                  let totoal_tokens = json["_total_tokens"] as? BigUInt,
                  let token_type = json["_token_type"] as? BigUInt else {
                return nil
            }

            self.duration = duration
            self.ifrandom = ifrandom
            self.message = message
            self.name = name
            self.token_addr = token_addr.address
            self.total_tokens = totoal_tokens
            self.number = number
            self.token_type = token_type
        }
    }
}
