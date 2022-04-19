import Foundation

struct RedpacketStatus {
    let isClaimed: Bool
    let isEmpty: Bool
    let isRefunded: Bool
    let isExpired: Bool
    
    let canClaim: Bool
    let canRefund: Bool
    let canSend: Bool
    let isPasswordValid: Bool
}

struct RedPacketInteractivePayload: Codable {
    private static let passwordInvalid = "PASSWORD INVALID"
    let redpacketPayload: EitherOr<RedPacketPayload, NftRedPacketPayload>
    var availability: RedPacketAvailability
    let postLink: EitherOr<String, URL>
    
    var rpId: String? {
        switch redpacketPayload {
        case .either(let redPacketPayload):
            return redPacketPayload.basic?.rpid
            
        case .or(let nftRedPacketPayload):
            return nil
        }
    }
}

extension RedPacketInteractivePayload {
    
    var decimals: Int? {
        switch redpacketPayload {
        case .either(let tokenPayload):
            return tokenPayload.payload?.token?.token.decimals
            
        case .or(let nftPayload):
            return nil
        }
    }
    
    var redpacketId: String? {
        switch redpacketPayload {
        case .either(let tokenPayload):
            return tokenPayload.basic?.rpid
            
        case .or(let nftPayload):
            // TODO: nft payload
            return nil
        }
    }
    
    var blockchainNetwork: BlockChainNetwork? {
        let network: String?
        switch redpacketPayload {
        case .either(let tokenPayload):
            network = tokenPayload.payload?.network
            
        case .or(let nftPayload):
            // TODO: nft redpacket check
            network = nil
        }
        guard let network = network else {
            return nil
        }
        return BlockChainNetwork.allCases.first { blockchainNetwork in
            if let fullName = blockchainNetwork.fullEvmName?.lowercased(),
               fullName.contains(network.lowercased()) {
                return true
            }
            return false
        }
    }
    
    func parseStatus(accountAddress: String,
                     network: BlockChainNetwork) -> RedpacketStatus {
        let isClaimed: Bool = {
            if let claimedAmount = availability.claimedAmount {
                return claimedAmount != "0"
            }
            return false
        }()
        let isEmpty = availability.balance == "0"
        let isExpired = availability.expired
        let isRefunded: Bool = {
            var claimedLargeThanTotal = false
            if let claimedIntValue = Int(availability.claimed),
               let totalIntValue = Int(availability.total) {
                if claimedIntValue == 0,
                   totalIntValue == 0 {
                    claimedLargeThanTotal = true
                } else {
                    claimedLargeThanTotal = claimedIntValue < totalIntValue
                }
            }
            return isEmpty && claimedLargeThanTotal
        }()
        let isCreator: Bool = {
            let senderAddress: String?
            switch redpacketPayload {
            case .either(let tokenPayload):
                senderAddress = tokenPayload.payload?.sender.address
                
            case .or(let nftPayload):
                senderAddress = nftPayload.senderName
            }
            guard let senderAddress = senderAddress else {
                return false
            }
            return senderAddress.stripHexPrefix().caseInsensitiveCompare(accountAddress.stripHexPrefix()) == .orderedSame
        }()
        let isPasswordValid: Bool = {
            let password: String?
            switch redpacketPayload {
            case .either(let tokenPayload):
                password = tokenPayload.basic?.password
                
            case .or(let nftPayload):
                // TODO: nft redpacket password check
                password = nil
            }
            guard let password = password else {
                return false
            }
            return password.caseInsensitiveCompare(Self.passwordInvalid) != .orderedSame
        }()
        
        let isOnSameBlockchainNetwork = blockchainNetwork == network
        
        let canClaim = !isExpired && !isEmpty && !isClaimed && isPasswordValid && isOnSameBlockchainNetwork
        let canRefund = isExpired && !isEmpty && isCreator && isOnSameBlockchainNetwork
        let canSend = !isEmpty && !isExpired && !isRefunded && isCreator && isOnSameBlockchainNetwork
        return RedpacketStatus(isClaimed: isClaimed,
                               isEmpty: isEmpty,
                               isRefunded: isRefunded,
                               isExpired: isExpired,
                               canClaim: canClaim,
                               canRefund: canRefund,
                               canSend: canSend,
                               isPasswordValid: isPasswordValid)
    }
}
