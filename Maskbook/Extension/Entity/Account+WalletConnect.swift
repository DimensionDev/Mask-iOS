//
//  Account+WalletConnect.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/9/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import Foundation
import WalletConnectSwift

extension Account {
    convenience init(session: Session, address: String) {
        let context = AppContext.shared.coreDataStack.persistentContainer.viewContext
        self.init(context: context)
        self.address = address
        self.chainId = Int64(ChainType.ethereum.rawValue)
        self.sessionData = session.data
        
        if let name = session.walletInfo?.peerMeta.name {
            self.name = name
        } else {
            self.name = "WalletConnect"
        }
        self.derivationPath = ""
        self.extendedPublicKey = ""

        let portfolio = Portfolio(context: context)
        portfolio.chainId = Int64(ChainType.ethereum.rawValue)
        if let networkID = session.walletInfo?.chainId {
            portfolio.networkId = Int64(networkID)
        }
        self.addToPortfolios(portfolio)
    }
}

extension Account {
    var session: Session? {
        if let sessionData = self.sessionData, let session = Session.from(data: sessionData) {
            return session
        } else {
            return nil
        }
    }
    
    var fromWalletConnect: Bool {
        return sessionData != nil
    }
    
    var netwrokIDFromSession: Int? {
        return self.session?.walletInfo?.chainId
    }
}
