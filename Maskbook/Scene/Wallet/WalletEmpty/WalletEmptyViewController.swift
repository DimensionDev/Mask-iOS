//
//  WalletEmptyViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class WalletEmptyViewController: BaseViewController {
    @InjectedProvider(\.vault)
    var vault: Vault
    
    override var navigationBarHidden: Bool {
        false
    }
    
    let imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.WalletEntry.walletEntry.image
        imageView.contentMode = .center
        return imageView
    }()
    
    let createButton: UIButton = PrimeryButton(title: L10n.Common.Controls.createWallet)
    
    let importButton: UIButton = SecondaryButton(title: L10n.Common.Controls.importWallet)
    
    let walletConnectButton: UIButton = SecondaryButton(title: L10n.Scene.WalletConnect.walletConnect)
}

extension WalletEmptyViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        createButton.addTarget(self,
                               action: #selector(WalletEmptyViewController.createWalletAction(_:)),
                               for: .touchUpInside)
        importButton.addTarget(self,
                               action: #selector(WalletEmptyViewController.importWalletAction(_:)),
                               for: .touchUpInside)
        walletConnectButton.addTarget(self,
                                      action: #selector(WalletEmptyViewController.walletConnectAction(_:)),
                                      for: .touchUpInside)
        
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: LayoutConstraints.leading, bottom: 32, right: LayoutConstraints.trailing)
        stackView.spacing = 16
        stackView.distribution = .fill
        view.addSubview(stackView)

        stackView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(stackView)
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
        
        NSLayoutConstraint.activate([
            createButton.heightAnchor.constraint(equalToConstant: 54),
            importButton.heightAnchor.constraint(equalToConstant: 54),
            walletConnectButton.heightAnchor.constraint(equalToConstant: 54)
        ])
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.layoutMargins = UIEdgeInsets(top: 0, left: 49, bottom: 0, right: 49)
        stackView.addArrangedSubview(imageView)
        
        createButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(createButton)
        
        importButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(importButton)
        
        walletConnectButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(walletConnectButton)
    }
    
    @objc
    func createWalletAction(_ sender: UIButton) {
        Coordinator.main.present(scene: .termsOfService(walletStartType: .byCreate(name: nil)),
                                 transition: .detail(animated: true))
    }
    
    @objc
    func importWalletAction(_ sender: UIButton) {
        Coordinator.main.present(scene: .termsOfService(walletStartType: .byImport(name: nil, password: nil)),
                                 transition: .detail(animated: true))
    }
    
    @objc
    func walletConnectAction(_ sender: UIButton) {
        Coordinator.main.present(scene: .termsOfService(walletStartType: .byWalletConnect),
                                 transition: .detail(animated: true))
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletEmptyViewControllerPreview: PreviewProvider {
    static var previews: some View {
        UIViewControllerPreview {
            let viewController = WalletEmptyViewController()
            return viewController
        }
        .previewLayout(.fixed(width: 375, height: 800))
    }
}
#endif
