//
//  WalletConnectShowQRCodeViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/9/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import EFQRCode
import Foundation
import UIKit
import UStack

class WalletConnectShowQRCodeViewController: UIViewController {
    var code: String? {
        didSet { generateQRCode() }
    }
    
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
    
    var disposeBag = Set<AnyCancellable>()
    
    let tipsLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH6
        label.textColor = Asset.Colors.Text.main.color
        label.text = L10n.Scene.WalletConnect.qrCodeTips
        label.textAlignment = .center
        label.numberOfLines = 0
        return label
    }()
    
    let copyLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH6
        label.textColor = Asset.Colors.Text.normal.color
        label.text = L10n.Scene.WalletConnect.tapToCopy
        label.textAlignment = .center
        return label
    }()
    
    let qrBackgroundImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.WalletConnect.qrBackground.image
        return imageView
    }()
    
    let qrCodeImageView: UIImageView = {
        let imageView = UIImageView()
        return imageView
    }()
    
    func generateQRCode() {
        guard let code = self.code else {
            return
        }
        DispatchQueue.global().async {
            if let qrcodeCgImage = EFQRCode.generate(
                for: code,
                foregroundColor: Asset.Colors.TokenDetail.background1.color.cgColor) {
                DispatchQueue.main.async {
                    self.qrCodeImageView.image = UIImage(cgImage: qrcodeCgImage)
                }
            }
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        walletConnectClient.connectingUrlSubject
            .sink { [weak self] url in
                self?.code = url
            }
            .store(in: &disposeBag)
        
        qrBackgroundImageView.withSubViews {
            qrCodeImageView
        }
        NSLayoutConstraint.activate([
            qrCodeImageView.topAnchor.constraint(equalTo: qrBackgroundImageView.topAnchor, constant: 18),
            qrCodeImageView.leadingAnchor.constraint(equalTo: qrBackgroundImageView.leadingAnchor, constant: 18),
            qrCodeImageView.trailingAnchor.constraint(equalTo: qrBackgroundImageView.trailingAnchor, constant: -18),
            qrCodeImageView.bottomAnchor.constraint(equalTo: qrBackgroundImageView.bottomAnchor, constant: -18)
        ])
        let vStack = VStackView(
            spacing: 16,
            distribution: .fill,
            alignment: .center) {
                tipsLabel
                qrBackgroundImageView
                    .cv.apply {
                        NSLayoutConstraint.activate([
                            $0.heightAnchor.constraint(equalToConstant: 278),
                            $0.widthAnchor.constraint(equalToConstant: 278)
                        ])
                    }
                copyLabel
                UStack.Spacer()
        }
        vStack.setCustomSpacing(25, after: tipsLabel)
        view.withSubViews {
            vStack
        }
        
        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.topAnchor, constant: 25),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            vStack.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            vStack.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        
        qrBackgroundImageView
            .gesture()
            .sink { [weak self] _ in
                guard let self = self else { return }
                UIPasteboard.general.string = self.code
            }
            .store(in: &disposeBag)
    }
}
