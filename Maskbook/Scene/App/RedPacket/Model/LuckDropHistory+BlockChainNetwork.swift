import Foundation

import BigInt

extension BlockChainNetwork {
    var startBlock: BigUInt? {
        switch self {
        case .eth: return 12939427
        case .bsc: return 9657240
        case .polygon: return 17494774
        case .arbitrum: return 909051
        case .xdai: return 18101937
        default: return nil
        }
    }

    var explorAddress: String? {
        switch self {
        case .eth: return "https://api.etherscan.io/api"
        case .bsc: return "https://api.bscscan.com/api"
        case .polygon: return "https://api.polygonscan.com/api"
        case .arbitrum: return "https://api.arbiscan.io/api"
        case .xdai: return "https://blockscout.com/xdai/mainnet/api"
        default: return nil
        }
    }

    var redPacketAddressV4: String? {
        switch self {
        case .eth: return "0xaBBe1101FD8fa5847c452A6D70C8655532B03C33"
        case .bsc: return "0x0ca42C178e14c618c81B8438043F27d9D38145f6"
        case .polygon: return "0x93e0b87A0aD0C991dc1B5176ddCD850c9a78aabb"
        case .arbitrum: return "0x83D6b366f21e413f214EB077D5378478e71a5eD2"
        case .xdai: return "0x54a0A221C25Fc0a347EC929cFC5db0be17fA2a2B"
        default: return nil
        }
    }
    
    var nativeTokenAddress: String {
        "0x0000000000000000000000000000000000000000"
    }

    var apiKey: String? {
        APIKey.keys[self]
    }
}
