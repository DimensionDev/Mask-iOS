//
//  TermsOfServiceViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class TermsOfServiceViewController: BaseViewController {
    @InjectedProvider(\.vault)
    var vault: Vault
    var walletStartType: WalletStartType
    
    private var disposeBag = Set<AnyCancellable>()
    
    required init(walletStartType: WalletStartType) {
        self.walletStartType = walletStartType
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH4
        label.text = L10n.Scene.TermsOfService.description
        label.numberOfLines = 0
        return label
    }()
    
    let imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.TermsOfService.legal.image
        imageView.contentMode = .center
        return imageView
    }()
    
    let serviceAgreementButton: UIButton = {
        let button = UIButton(type: .custom)
        button .addTarget(self, action: #selector(serviceAgreementClick(_:)), for: .touchUpInside)
        return button
    }()

    let serviceAgreementLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.TermsOfService.serviceAgreement
        return label
    }()
    
    let serviceAgreementArrow: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Icon.Arrows.celllRight.image
        return imageView
    }()
    
    let acceptButton: UIButton = PrimeryButton(title: L10n.Common.Controls.accept)
}

extension TermsOfServiceViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        self.title = L10n.Scene.TermsOfService.title
        self.navigationController?.navigationBar.prefersLargeTitles = true
        acceptButton.addTarget(self, action: #selector(TermsOfServiceViewController.acceptAction(_:)), for: .touchUpInside)
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: LayoutConstraints.leading, bottom: 32, right: LayoutConstraints.trailing)
        stackView.spacing = 16
        stackView.distribution = .fill
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(stackView)
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
        
        descriptionLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(descriptionLabel)
        descriptionLabel.setContentHuggingPriority(.required - 1, for: .vertical)
        
        imageView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(imageView)
        imageView.setContentHuggingPriority(.defaultLow, for: .vertical)
        
        addServiceAgreementView(stackView: stackView)
        
        stackView.setCustomSpacing(24, after: serviceAgreementButton)
        acceptButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(acceptButton)
        
        NSLayoutConstraint.activate([
            acceptButton.heightAnchor.constraint(equalToConstant: 48)
        ])
    }
    
    func addServiceAgreementView(stackView: UIStackView) {
        serviceAgreementButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(serviceAgreementButton)
        NSLayoutConstraint.activate([
            serviceAgreementButton.heightAnchor.constraint(equalToConstant: 48)
        ])
        serviceAgreementLabel.translatesAutoresizingMaskIntoConstraints = false
        serviceAgreementButton.addSubview(serviceAgreementLabel)
        NSLayoutConstraint.activate([
            serviceAgreementLabel.leadingAnchor.constraint(equalTo: serviceAgreementButton.leadingAnchor),
            serviceAgreementLabel.centerYAnchor.constraint(equalTo: serviceAgreementButton.centerYAnchor)
        ])
        
        serviceAgreementArrow.translatesAutoresizingMaskIntoConstraints = false
        serviceAgreementButton.addSubview(serviceAgreementArrow)
        NSLayoutConstraint.activate([
            serviceAgreementArrow.trailingAnchor.constraint(equalTo: serviceAgreementButton.trailingAnchor),
            serviceAgreementArrow.centerYAnchor.constraint(equalTo: serviceAgreementButton.centerYAnchor)
        ])
    }
    
    @objc
    func acceptAction(_ sender: UIButton) {
        // pass `nil` to confirm that return `true` means didn't set wallet password.
        switch self.walletStartType {
        case .byWalletConnect:
            Coordinator.main.present(scene: .walletConnectStart, transition: .panModel(animated: true))
            return

        default:
            break
        }

        if !vault.hasSetWalletPassword() {
            Coordinator.main.present(
                scene: .setPassword,
                transition: .panModel(animated: true)
            )
        } else {
            Coordinator.main.present(scene: .createWalletWithName(walletStartType: self.walletStartType),
                                     transition: .detail(animated: true))
        }
    }
    
    @objc
    func serviceAgreementClick(_ sender: UIButton) {
        Coordinator.main.present(scene: .safariView(url: URL(string: "https://legal.mask.io/maskbook/privacy-policy-ios.html")!), transition: .modal(animated: true))
    }
}
