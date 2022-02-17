//
//  WalletConnectClientAlertDelegate.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class WalletConnectClientUIDelegate {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    weak var walletConnectClient: WalletConnectClient?
    
    init(walletConnectClient: WalletConnectClient) {
        self.walletConnectClient = walletConnectClient
    }
    
    func showChangeNetworkAlert(networkFromSession: BlockChainNetwork, address: String) {
        DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(1_000)) {
            let keyword1 = "(\(self.walletConnectClient?.userSetting.network.name ?? ""))"
            let keyword2 = "(\(networkFromSession.name))"
            let keyword3 = " \(networkFromSession.name) "
            let words = L10n.Scene.WalletConnect.networkNotMatch(keyword1, keyword2, keyword3)
            let attributeString = NSMutableAttributedString()
            let attribute = NSAttributedString(string: words,
                                               attributes: [.foregroundColor: Asset.Colors.Text.dark.color,
                                                            .font: FontStyles.BH4])
            attributeString.append(attribute)
            attributeString.addAttributes(attributes: [
                keyword1: Asset.Colors.Public.blue.color,
                keyword2: Asset.Colors.Public.blue.color,
                keyword3: Asset.Colors.Public.blue.color
            ])
            let alertController = AlertController(
                title: words,
                message: nil,
                confirmButtonText: L10n.Common.Controls.ok,
                cancelButtonText: L10n.Common.Controls.cancel,
                imageType: .error,
                confirmButtonClicked: { [weak self] _ in
                    self?.walletConnectClient?
                        .setWalletConnectAccountToDefaultAccount(network: networkFromSession,
                                                                 address: address)
                }
            )
            alertController.setAttributeTitle(attrTitle: attributeString)
            self.coordinator.present(scene: .alertController(alertController: alertController),
                                     transition: .alertController(completion: nil))
        }
    }
   
    func showNotSupportNetworkAlertWithName(name: String?) {
        var alertController: AlertController
        if let name = name {
            let keyword = "(\(name))"
            let words = L10n.Scene.WalletConnect.networkNotSupport(keyword)
            alertController = AlertController(
                title: words,
                message: nil,
                confirmButtonText: L10n.Common.Controls.ok,
                imageType: .error,
                confirmButtonClicked: { _ in }
            )
            let attributeString = NSMutableAttributedString()
            let attribute = NSAttributedString(string: words,
                                               attributes: [.foregroundColor: Asset.Colors.Text.dark.color,
                                                            .font: FontStyles.BH4])
            attributeString.append(attribute)
            attributeString.addAttribute(color: Asset.Colors.Public.blue.color, keywords: keyword)
            alertController.setAttributeTitle(attrTitle: attributeString)
        } else {
            let words = L10n.Scene.WalletConnect.networkNotSupport("")
            alertController = AlertController(
                title: words,
                message: nil,
                confirmButtonText: L10n.Common.Controls.ok,
                imageType: .error,
                confirmButtonClicked: { _ in }
            )
        }
        coordinator.present(scene: .alertController(alertController: alertController),
                            transition: .alertController(completion: nil))
    }
    
    func replaceCurrentNavigationWithEmptyWallet() {
        coordinator.present(scene: .emptyWallet,
                            transition: .replaceCurrentNavigation(tab: .wallet, animated: true))
    }
    
    func showTheWalletAddressAlreadyExistsAlert() {
        let alertController = AlertController(
            title: L10n.Scene.WalletConnect.addressExist,
            message: nil,
            confirmButtonText: L10n.Common.Controls.ok,
            imageType: .warning,
            confirmButtonClicked: { _ in
            }
        )
        coordinator.present(scene: .alertController(alertController: alertController),
                            transition: .alertController(completion: nil))
    }
    
    func showReplaceWalletConnectWalletAlert() {
        let alertController = AlertController(
            title: L10n.Scene.WalletConnect.replaceWalletConnectWallet,
            message: nil,
            confirmButtonText: L10n.Common.Controls.ok,
            imageType: .warning,
            confirmButtonClicked: { _ in
            }
        )
        coordinator.present(scene: .alertController(alertController: alertController),
                            transition: .alertController(completion: nil))
    }
}
