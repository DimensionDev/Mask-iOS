//
//  WalletConnectServerConfirmViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/7.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WalletConnectSwift

final class WalletConnectServerConfirmViewModel {
    var connectAction: ((String, Int) -> Void)?
    var cancelAction: (() -> Void)?
    var dappInfo: Session.ClientMeta
    
    @InjectedProvider(\.walletConnectServer)
    var walletConnectServer
    
    init(dappInfo: Session.ClientMeta) {
        self.dappInfo = dappInfo
    }
}
