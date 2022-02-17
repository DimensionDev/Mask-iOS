//
//  WalletDisplayBlockChainType.swift
//  Maskbook
//
//  Created by BradGao on 2021/11/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

enum WalletDisplayBlockChainType: Hashable, RawRepresentable {
    case all
    case blockchain(BlockChainNetwork)
    
    var rawValue: String {
        switch self {
        case .all:
            return "all"
        
        case .blockchain(let blockChain):
            return blockChain.rawValue
        }
    }
    
    init?(rawValue: String) {
        switch rawValue {
        case "all":
            self = .all
            
        default:
            if let blockChain = BlockChainNetwork(rawValue: rawValue) {
                self = .blockchain(blockChain)
            } else {
                return nil
            }
        }
    }
}

extension WalletDisplayBlockChainType: Equatable {
    static var supportDisplayBlockChainTypes: [Self] {
        [
            .all,
            .blockchain(.eth),
            .blockchain(.bsc),
            .blockchain(.polygon),
            .blockchain(.arbitrum),
            .blockchain(.xdai)
        ]
    }
    
    var accountViewImage: UIImage? {
        switch self {
        case .all:
            return Asset.Images.Scene.Balance.Chain.all.image
            
        case .blockchain(let blockchain):
            switch blockchain.rawValue {
            case .eth:
                return Asset.Images.Scene.Balance.Chain.eth.image
                
            case .bsc:
                return Asset.Images.Scene.Balance.Chain.bsc.image
                
            case .polygon:
                return Asset.Images.Scene.Balance.Chain.matic.image
                
            case .arbitrum:
                return Asset.Images.Scene.Balance.Chain.arbitrium.image
                
            case .xdai:
                return Asset.Images.Scene.Balance.Chain.xdai.image
                
            case .optimism:
                return nil
                
            case .polkd:
                return nil
                
            default:
                return nil
            }
        }
    }
}
