//
//  BiometryRecognitionViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class BiometryRecognitionViewController: BaseViewController {
    var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.userDefaults)
    private var maskUserDefaults
    
    let viewModel = BiometryRecognitionViewModel()
    
    let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH4
        label.numberOfLines = 0
        return label
    }()
    
    let imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .center
        return imageView
    }()
    
    let enableButton: UIButton = PrimeryButton(title: L10n.Common.Controls.enable)
    
    let noThanksButton: UIButton = SecondaryButton(title: L10n.Common.Controls.noThanks)
    
    @InjectedProvider(\.vault)
    private var vault
}

extension BiometryRecognitionViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.largeTitleDisplayMode = .always
        navigationController?.navigationBar.prefersLargeTitles = true
        setupSubviews()
        
        let type = LocalAuthentication.shared.biometryType()
        if type == .faceID {
            title = L10n.Scene.BiometryRecognition.FaceId.title
            descriptionLabel.text = L10n.Scene.BiometryRecognition.FaceId.description
            imageView.image = Asset.Images.Scene.BiometryRecognition.facialRecognition.image
        } else {
            title = L10n.Scene.BiometryRecognition.TouchId.title
            descriptionLabel.text = L10n.Scene.BiometryRecognition.TouchId.description
            imageView.image = Asset.Images.Scene.BiometryRecognition.touchIDRecognition.image
        }

        viewModel.faceIDValidateResult
            .receive(on: DispatchQueue.main)
            .sink { [weak self] result in
                guard let self = self else { return }
                guard result == true else { return }
                self.faceIDValidateSuccess()
            }
            .store(in: &disposeBag)
    }
    
    func setupSubviews() {
        enableButton.addTarget(self, action: #selector(createWalletAction(_:)), for: .touchUpInside)
        noThanksButton.addTarget(self, action: #selector(noThanksButtonAction(_:)), for: .touchUpInside)
        
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
            stackView.topAnchor.constraint(equalTo: view.layoutMarginsGuide.topAnchor),
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
        
        enableButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(enableButton)
        NSLayoutConstraint.activate([
            enableButton.heightAnchor.constraint(equalToConstant: 48)
        ])
        
        noThanksButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(noThanksButton)
        NSLayoutConstraint.activate([
            noThanksButton.heightAnchor.constraint(equalToConstant: 48)
        ])
    }
    
    func faceIDValidateSuccess() {
        maskUserDefaults.enableBiometryID = true
        let biometryName = LocalAuthentication.shared.biometryName()
        let alertController = AlertController(title: L10n.Common.Alert.BiometryIdActivate.title,
                                              message: L10n.Common.Alert.BiometryIdActivate.description(biometryName),
                                              confirmButtonText: L10n.Common.Controls.done,
                                              imageType: .success,
                                              confirmButtonClicked: { [weak self] _ in
                                                guard let self = self else { return }
                                                switch self.viewModel.walletStartType {
                                                case .byCreate(let name):
                                                    self.createAccount(name: name)
                                                    
                                                case .byImport(let name, let password):
                                                    guard let password = password else { return }
                                                    Coordinator.main.present(scene: .importWallet(name: name ?? "", password: password), transition: .detail(animated: true))
                                                    
                                                case .none, .byWalletConnect:
                                                    break
                                                }
                                              })
        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
    }
    
    @objc func createWalletAction(_ sender: UIButton) {
        viewModel.evaluateBiometryID()
    }
    
    @objc func noThanksButtonAction(_ sender: UIButton) {
        maskUserDefaults.enableBiometryID = false
        switch viewModel.walletStartType {
        case .byCreate(let name):
            createAccount(name: name)

        case .byImport(let name, let password):
            guard let password = password else { return }
            Coordinator.main.present(scene: .importWallet(name: name ?? "", password: password), transition: .detail(animated: true))

        case .none, .byWalletConnect:
            break
        }
    }
    
    private func createAccount(name: String?) {
        if WalletCoreService.shared.isDefaultStoreKeyExisting() {
            self.deriveAccount(name: name)
        } else {
            Coordinator.main.present(scene: .mnemonicWord(name: name), transition: .detail(animated: true))
        }
    }
    
    private func deriveAccount(name: String?) {
        let name = name ?? ""
        let chainType = maskUserDefaults.network.chain
        
        vault.getWalletPassword()
            .receive(on: DispatchQueue.main)
            .sink(
                receiveCompletion: { _ in },
                receiveValue: { password in
                    let result = WalletCoreService.shared.deriveNewAccount(name: name, password: password, chainType: chainType)
                    switch result {
                    case .success:
                        let alertController = AlertController(
                            title: L10n.Common.Alert.WalletCreateSuccess.title,
                            message: L10n.Common.Alert.WalletCreateSuccess.description,
                            confirmButtonText: L10n.Common.Controls.done,
                            imageType: .success,
                            confirmButtonClicked: { _ in
                                Coordinator.main.present(scene: .balance, transition: .replaceCurrentNavigation(tab: .wallet, animated: true))
                            }
                        )
                        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
                        
                    case .failure(let error):
                        let alertController = AlertController(title: error.localizedDescription, message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error)
                        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
                    }
                })
            .store(in: &disposeBag)
    }
}
