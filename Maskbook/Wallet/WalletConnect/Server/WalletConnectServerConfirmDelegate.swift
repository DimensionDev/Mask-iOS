//
//  WalletConnectServerConfirmDelegate.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/9.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WalletConnectSwift

class WalletConnectServerConfirmDelegate: WalletConnectServerConfirmProcotol {
    @InjectedProvider(\.userDefaultSettings)
    var userSetting
    
    @InjectedProvider(\.walletConnectServer)
    private var walletConnectServer
    
    @InjectedProvider(\.mainCoordinator)
    var mainCoordinator
    
    func server(_ server: Server, shouldStart session: Session, completion: @escaping (Session.WalletInfo) -> Void) {
        let walletMeta = Session.ClientMeta.maskWalletMeta
        guard let _ = userSetting.defaultAccountAddress
        else {
            // we can't get address or network in the local database, we're closing connection.
            walletConnectServer.denySession(clientMeta: walletMeta, completion: completion)
            return
        }

        let viewModel = WalletConnectServerConfirmViewModel(dappInfo: session.dAppInfo.peerMeta)
        viewModel.connectAction = { address, networkId in
            let walletInfo = Session.WalletInfo(
                approved: true,
                accounts: [address],
                chainId: Int(networkId),
                peerId: UUID().uuidString,
                peerMeta: walletMeta)
            completion(walletInfo)
        }
        viewModel.cancelAction = { [weak self] in
            self?.walletConnectServer.denySession(clientMeta: walletMeta, completion: completion)
        }
        DispatchQueue.main.async {
            self.mainCoordinator.present(scene: .walletConnectServerConfirm(viewModel: viewModel), transition: .panModel(animated: true))
        }
    }
    
    func noLocalWalletToConnect() {
        let alertController = AlertController(
            title: L10n.Common.Alert.NoLocalWalletForWalletconnect.title,
            message: L10n.Common.Alert.NoLocalWalletForWalletconnect.description,
            confirmButtonText: L10n.Common.Controls.ok,
            imageType: .error,
            confirmButtonClicked:nil,
            cancelButtonClicked: nil)
        mainCoordinator.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil))

    }
}
