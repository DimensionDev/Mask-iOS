import Foundation

import CoreDataStack

import web3swift

struct FungibleTokenBuilder {
    func buildToken(for address: String, networkId: Int) async -> RedPacket.FungibleToken? {
        guard let chain = RedPacket.ChainId(rawValue: networkId) else {
            return nil
        }
        
        var tokenType: RedPacket.EthereumToken {
            chain.nativeTokenAddress == address ? .native : .erc20
        }

        switch tokenType {
        case .native:
            guard let currency = chain.nativeCurrency else {
                return nil
            }
            return .nativeToken(
                .init(
                    type: .native,
                    address: address,
                    chainId: chain,
                    name: currency.name,
                    symbol: currency.symbol,
                    decimals: currency.decimals,
                    logoURI: .either(currency.logoURL))
            )
        case .erc20:
            let token = await getTokenAsset(by: networkId, address: address)
            return .erc20Token(
                .init(
                    type: .erc20,
                    address: address,
                    chainId: chain,
                    name: token?.name,
                    symbol: token?.symbol,
                    decimals: Int(token?.decimal ?? 18),
                    logoURI: .either(token?.logoUrl ?? "")
                )
            )
            
        default: return nil
        }
    }
    
    @MainActor
    func getTokenAsset(by networkdId: Int, address: String) async -> Token? {
        do {
            let fetchRequest = Token.sortedFetchRequest
            let context = AppContext.shared.coreDataStack.persistentContainer.viewContext
            fetchRequest.predicate = NSCompoundPredicate(andPredicateWithSubpredicates: [
                \Token.contractAddress == address.lowercased(),
                \Token.networkId == Int64(networkdId)
            ])
            
            fetchRequest.fetchLimit = 1
            fetchRequest.returnsObjectsAsFaults = false
            let tokens = try context.fetch(fetchRequest)
            return tokens.first
        } catch {
            return nil
        }
    }
}

extension RedPacket.ChainId {
    struct NativeCurrency {
        let name: String
        let symbol: String
        let decimals: Int
        let logoURL: String
    }
    
    var nativeCurrency: NativeCurrency? {
        switch self {
        case .mainnet:
            return .init(
                name: "Ethereum Mainnet",
                symbol: "ETH",
                decimals: 18,
                logoURL: "https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png"
            )
            
        case .bsc:
            return .init(
                name: "BNB Chain Mainnet",
                symbol: "BSC",
                decimals: 18,
                logoURL: "https://static.debank.com/image/bsc_token/logo_url/bsc/8bfdeaa46fe9be8f5cd43a53b8d1eea1.png"
            )
            
        case .matic:
            return .init(
                name: "Matic Mainnet",
                symbol: "MATIC",
                decimals: 18,
                logoURL: "https://static.debank.com/image/matic_token/logo_url/matic/e5a8a2860ba5cf740a474dcab796dc63.png"
            )
            
        case .arbitrum:
            return .init(
                name: "Arbitrum Ether",
                symbol: "ARETH",
                decimals: 18,
                logoURL: "https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png"
            )
            
        case .xDai:
            return .init(
                name: "Gnosis Chain",
                symbol: "xDai",
                decimals: 18,
                logoURL: "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/xdai/assets/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/logo.png"
            )
            
        default: return nil
        }
    }
}
