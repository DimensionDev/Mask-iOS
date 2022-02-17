//
//  WalletConnectFailedViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/10/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit
import UStack

class WalletConnectFailedViewController: BaseViewController {
    var disposeBag = Set<AnyCancellable>()
    
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.WalletConnect.walletConnect
        label.textAlignment = .center
        label.numberOfLines = 0
        return label
    }()
    
    let connectFailLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Public.error.color
        label.text = L10n.Scene.WalletConnect.connectionFail
        label.textAlignment = .center
        return label
    }()
    
    let errorImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Alert.error.image
        return imageView
    }()
    
    let tryButton = PrimeryButton(title: L10n.Common.Controls.tryAgain)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tryButton.addTarget(self, action: #selector(retryAction), for: .touchUpInside)
        setupUI()
    }
    
    func setupUI() {
        let vStack = VStackView(spacing: 15, distribution: .fill, alignment: .center) {
            UStack.Spacer(height: 35, width: nil)
            titleLabel
            UStack.Spacer(height: 160, width: nil)
            errorImageView
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 48),
                        $0.widthAnchor.constraint(equalToConstant: 48)
                    ])
                }
            connectFailLabel
            tryButton
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 40),
                        $0.widthAnchor.constraint(equalToConstant: 155)
                    ])
                }
            UStack.Spacer()
        }
        
        view.withSubViews {
            vStack
        }
        
        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.topAnchor),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            vStack.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            vStack.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
}

extension WalletConnectFailedViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }

    var longFormHeight: PanModalHeight {
        .contentHeight(618)
    }
}

extension WalletConnectFailedViewController {
    @objc
    func retryAction() {
        dismiss(animated: false) {
            Coordinator.main.present(scene: .walletConnectStart,
                                     transition: .panModel(animated: true))
        }
    }
}
