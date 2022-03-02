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
            switch blockchain {
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
                
            default:
                return nil
            }
        }
    }
    
    var chainBgImage: UIImage? {
        switch self {
        case .all:
            return Asset.Images.Scene.Balance.ChainBg.all.image
            
        case .blockchain(let blockchain):
            switch blockchain {
            case .eth:
                return Asset.Images.Scene.Balance.ChainBg.eth.image
                
            case .bsc:
                return Asset.Images.Scene.Balance.ChainBg.bsc.image
                
            case .polygon:
                return Asset.Images.Scene.Balance.ChainBg.matic.image
                
            case .arbitrum:
                return Asset.Images.Scene.Balance.ChainBg.arbitrium.image
                
            case .xdai:
                return Asset.Images.Scene.Balance.ChainBg.xdai.image
                
            case .optimism:
                return nil
                
            default:
                return nil
            }
        }
    }
    
    var accoundCardBgColors: [CGColor] {
        switch self {
        case .all:
            return [Asset.Colors.AccountCard.Chains.all1.color.cgColor,
                    Asset.Colors.AccountCard.Chains.all2.color.cgColor]
            
        case .blockchain(let blockchain):
            switch blockchain {
            case .eth:
                return [Asset.Colors.AccountCard.Chains.eth1.color.cgColor,
                        Asset.Colors.AccountCard.Chains.eth2.color.cgColor]
                
            case .bsc:
                return [Asset.Colors.AccountCard.Chains.bsc1.color.cgColor,
                        Asset.Colors.AccountCard.Chains.bsc2.color.cgColor]
                
            case .polygon:
                return [Asset.Colors.AccountCard.Chains.matic1.color.cgColor,
                        Asset.Colors.AccountCard.Chains.matic2.color.cgColor]
                
            case .arbitrum:
                return [Asset.Colors.AccountCard.Chains.arbitrum1.color.cgColor,
                        Asset.Colors.AccountCard.Chains.arbitrum2.color.cgColor]
                
            case .xdai:
                return [Asset.Colors.AccountCard.Chains.xdai1.color.cgColor,
                        Asset.Colors.AccountCard.Chains.xdai2.color.cgColor]
                
            case .optimism:
                return [Asset.Colors.AccountCard.Chains.optimism1.color.cgColor,
                        Asset.Colors.AccountCard.Chains.optimism2.color.cgColor]
                
            default:
                return []
            }
        }
    }
    
    var bottomBgColor: CGColor {
        switch self {
        case .all: return Asset.Colors.AccountCard.Chains.all3.color.cgColor
            
        case .blockchain(let blockchain):
            switch blockchain {
            case .eth: return Asset.Colors.AccountCard.Chains.eth3.color.cgColor
            case .bsc: return Asset.Colors.AccountCard.Chains.bsc3.color.cgColor
            case .polygon: return Asset.Colors.AccountCard.Chains.matic3.color.cgColor
            case .arbitrum: return Asset.Colors.AccountCard.Chains.arbitrum3.color.cgColor
            case .xdai: return Asset.Colors.AccountCard.Chains.xdai3.color.cgColor
            case .optimism: return Asset.Colors.AccountCard.Chains.optimism3.color.cgColor
            default: return Asset.Colors.AccountCard.Chains.all3.color.cgColor
            }
        }
    }
    
    var shadowColor: CGColor {
        switch self {
        case .all: return Asset.Colors.Shadow.Card.all.color.cgColor
            
        case .blockchain(let blockchain):
            switch blockchain {
            case .eth: return Asset.Colors.Shadow.Card.eth.color.cgColor
            case .bsc: return Asset.Colors.Shadow.Card.bsc.color.cgColor
            case .polygon: return Asset.Colors.Shadow.Card.matic.color.cgColor
            case .arbitrum: return Asset.Colors.Shadow.Card.arbitrum.color.cgColor
            case .xdai: return Asset.Colors.Shadow.Card.xdai.color.cgColor
            default: return Asset.Colors.Shadow.Card.all.color.cgColor
            }
        }
    }
}
