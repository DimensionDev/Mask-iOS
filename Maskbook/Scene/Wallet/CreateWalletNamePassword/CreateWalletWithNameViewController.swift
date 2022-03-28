//
//  CreateWalletWithNameViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation
import UIKit

class CreateWalletWithNameViewController: BaseViewController {
    var disposeBag = Set<AnyCancellable>()
    
    let viewModel = CreateWalletWithNameViewModel()
    
    let headerView = UIView()
    
    let roundedView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Public.blue.color
        view.layer.cornerRadius = 36
        view.layer.cornerCurve = .continuous
        view.clipsToBounds = true
        return view
    }()
    
    let firstNamelabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.white.color
        label.font = FontStyles.BH1
        return label
    }()
    
    let walletNameLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.CreateWallet.walletName
        return label
    }()
    
    let walletNameTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.attributedPlaceholder = NSAttributedString(string: L10n.Scene.CreateWallet.walletNamePlaceholder,
                                                             attributes: [.foregroundColor: Asset.Colors.Text.light.color,
                                                                          .font: FontStyles.BH5])
        return textField
    }()
    
    let multichainView: CreateWalletMultichainView = {
        let view = CreateWalletMultichainView()
        return view
    }()
    
    lazy var confirmButton: UIButton = {
        let btn = PrimeryButton(title: L10n.Common.Controls.next)
        btn.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        btn.isEnabled = false
        return btn
    }()
    
    @InjectedProvider(\.vault)
    private var vault
}

extension CreateWalletWithNameViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Asset.Colors.Background.normal.color
        navigationItem.largeTitleDisplayMode = .never
        setupHeaderView()
        setupSubviews()
        subscribeSignal()
        confirmButton.addTarget(self, action: #selector(confirmAction(_:)), for: .touchUpInside)
    }
    
    func setupHeaderView() {
        roundedView.translatesAutoresizingMaskIntoConstraints = false
        headerView.addSubview(roundedView)
        NSLayoutConstraint.activate([
            roundedView.heightAnchor.constraint(equalToConstant: 72),
            roundedView.widthAnchor.constraint(equalToConstant: 72),
            roundedView.centerXAnchor.constraint(equalTo: headerView.centerXAnchor),
            roundedView.centerYAnchor.constraint(equalTo: headerView.centerYAnchor),
            roundedView.topAnchor.constraint(equalTo: headerView.topAnchor),
            roundedView.bottomAnchor.constraint(equalTo: headerView.bottomAnchor)
        ])
        
        firstNamelabel.translatesAutoresizingMaskIntoConstraints = false
        headerView.addSubview(firstNamelabel)
        NSLayoutConstraint.activate([
            firstNamelabel.centerXAnchor.constraint(equalTo: headerView.centerXAnchor),
            firstNamelabel.centerYAnchor.constraint(equalTo: headerView.centerYAnchor)
        ])
        
        NSLayoutConstraint.activate([
            multichainView.heightAnchor.constraint(equalToConstant: 96)
        ])
    }
    
    func setupSubviews() {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 24, left: LayoutConstraints.leading, bottom: 24, right: LayoutConstraints.trailing)
        stackView.spacing = 8
        stackView.distribution = .fill
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(stackView)
        
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: view.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        
        headerView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(headerView)
        
        stackView.addArrangedSubview(multichainView)
        
        walletNameLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(walletNameLabel)
        
        walletNameTextField.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(walletNameTextField)
        
        let resizeView = UIView()
        resizeView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(resizeView)
        resizeView.setContentHuggingPriority(.defaultLow - 1, for: .vertical)
        
        confirmButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(confirmButton)
        
        NSLayoutConstraint.activate([
            confirmButton.heightAnchor.constraint(equalToConstant: 52),
            walletNameTextField.heightAnchor.constraint(equalToConstant: 52)
        ])
        
        stackView.setCustomSpacing(24, after: headerView)
        stackView.setCustomSpacing(16, after: multichainView)
        stackView.setCustomSpacing(16, after: walletNameTextField)
    
        stackView.setCustomSpacing(4, after: resizeView)
    }
    
    func subscribeSignal() {
        view.gesture()
            .sink { [weak self] _ in
                self?.walletNameTextField.resignFirstResponder()
            }
            .store(in: &disposeBag)
        
        NotificationCenter.default
            .publisher(for: UITextField.textDidChangeNotification, object: walletNameTextField)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                guard self.walletNameTextField.markedTextRange == nil else { return }
                self.walletNameTextField.text = String(self.walletNameTextField.text?.prefix(12) ?? "")
                if let walletName = self.walletNameTextField.text, !walletName.isEmpty {
                    self.confirmButton.isEnabled = true
                } else {
                    self.confirmButton.isEnabled = false
                }
                
                guard let firstChar = self.walletNameTextField.text?.prefix(1) else { return }
                self.firstNamelabel.text = String(firstChar).uppercased()
            }
            .store(in: &disposeBag)
    }
    
    private func handleConfirmClicked(password: String) {
        // to show `facialRecognition` only when:
        // - not enable facial recognition
        // - support facial recognition
        if !maskUserDefaults.enableBiometryID, LocalAuthentication.shared.isBiometricsAvailable() {
            if case .byImport = self.viewModel.walletStartType {
                let type = WalletStartType.byImport(name: self.walletNameTextField.text, password: password)
                Coordinator.main.present(scene: .biometryRecognition(walletStartType: type),
                                         transition: .detail(animated: true))
            } else {
                let type = WalletStartType.byCreate(name: self.walletNameTextField.text)
                Coordinator.main.present(scene: .biometryRecognition(walletStartType: type),
                                         transition: .detail(animated: true))
            }
        } else {
            switch self.viewModel.walletStartType {
            case .byCreate:
                if WalletCoreService.shared.isDefaultStoreKeyExisting() {
                    self.deriveAccount()
                } else {
                    Coordinator.main.present(scene: .mnemonicWord(name: self.walletNameTextField.text),
                                             transition: .detail(animated: true))
                }
                
            case .byImport:
                Coordinator.main.present(
                    scene: .importWallet(name: self.walletNameTextField.text ?? "", password: password),
                    transition: .detail(animated: true)
                )
                
            case .none, .byWalletConnect:
                break
            }
        }
    }
    
    private func deriveAccount() {
        let name = self.walletNameTextField.text ?? ""
        let chainType = maskUserDefaults.network.chain
        vault.getWalletPassword()
            .sink(receiveCompletion: { _ in }) { password in
                let result = WalletCoreService.shared.deriveNewAccount(name: name,
                                                                       password: password,
                                                                       chainType: chainType)
                switch result {
                case .success:
                    let alertController = AlertController(
                        title: L10n.Common.Alert.WalletDeriveSuccess.title,
                        message: L10n.Common.Alert.WalletDeriveSuccess.description,
                        confirmButtonText: L10n.Common.Controls.done,
                        imageType: .success,
                        confirmButtonClicked: { _ in
                            Coordinator.main.present(scene: .balance,
                                                     transition: .replaceCurrentNavigation(tab: .wallet, animated: true))
                        }
                    )
                    Coordinator.main.present(scene: .alertController(alertController: alertController),
                                             transition: .alertController(completion: nil))
                    
                case .failure(let error):
                    let alertController = AlertController(title: error.localizedDescription,
                                                          message: "",
                                                          confirmButtonText: L10n.Common.Controls.done,
                                                          imageType: .error
                    )
                    Coordinator.main.present(scene: .alertController(alertController: alertController),
                                             transition: .alertController(completion: nil))
                }
            }
            .store(in: &disposeBag)
    }
}

extension CreateWalletWithNameViewController {
    @objc
    func confirmAction(_ sender: UIButton) {
        if vault.hasSetWalletPassword() {
            vault.getWalletPassword().sink(receiveCompletion: { _ in }) { [weak self] password in
                guard let self = self else { return }
                self.handleConfirmClicked(password: password)
            }.store(in: &disposeBag)
        } else {
            Coordinator.main.present(
                scene: .setPassword,
                transition: .panModel(animated: true)
            )
        }
    }
}

extension CreateWalletWithNameViewController: KeyboardHandlerContent {
    func keyboardHandlerWillShowKeyboard(
        _ sender: KeyboardHandlerViewController,
        scrollView: UIScrollView,
        keyboardFrame: CGRect,
        firstResponder: UIView?) {
            scrollView.scrollToBottom()
        }
}
