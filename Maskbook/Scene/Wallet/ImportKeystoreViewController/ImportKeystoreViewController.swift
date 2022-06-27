//
//  ImportKeystoreViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import RSKPlaceholderTextView
import UIKit

class ImportKeystoreViewController: BaseViewController {
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    lazy var textView: UITextView = {
        let view = RSKPlaceholderTextView()
        view.returnKeyType = .next
        view.font = FontStyles.BH5
        view.placeholder = L10n.Scene.WalletKeystore.keystorePlaceholder as NSString
        view.translatesAutoresizingMaskIntoConstraints = false
        view.textColor = Asset.Colors.Text.dark.color
        view.backgroundColor = .clear
        view.placeholderColor = Asset.Colors.Control.TextView.placeholderColor.color
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 124)
        ])
        return view
    }()
    
    lazy var textContainer: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.applyCornerRadius(radius: 8)
        view.addSubview(textView)
        
        textView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            textView.topAnchor.constraint(equalTo: view.topAnchor, constant: 12),
            textView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 12),
            view.bottomAnchor.constraint(equalTo: textView.bottomAnchor, constant: 12),
            view.trailingAnchor.constraint(equalTo: textView.trailingAnchor, constant: 12)
        ])
        return view
    }()
    
    lazy var passwordTitleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.normal.color
        label.text = L10n.Scene.WalletDelete.password
        return label
    }()
    
    lazy var passwordTextField: MaskTextField = {
        let view = MaskTextField()
        view.font = FontStyles.BH5
        view.placeholder = L10n.Scene.WalletKeystore.passwordPlaceholder
        view.isPasswordTextField = true
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 52)
        ])
        
        return view
    }()
    
    lazy var vStack: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .fill
        view.spacing = 0
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(
            top: 32,
            left: LayoutConstraints.leading,
            bottom: 16,
            right: LayoutConstraints.trailing)
        
        textContainer.translatesAutoresizingMaskIntoConstraints = false
        passwordTitleLabel.translatesAutoresizingMaskIntoConstraints = false
        passwordTextField.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(textContainer)
        view.addArrangedSubview(passwordTitleLabel)
        view.addArrangedSubview(passwordTextField)
        
        let spacer = UIView()
        spacer.setContentHuggingPriority(.defaultLow, for: .vertical)
        spacer.setContentCompressionResistancePriority(.defaultLow, for: .vertical)
        spacer.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(spacer)
        
        confirmButton.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(confirmButton)
        
        view.setCustomSpacing(16, after: textContainer)
        view.setCustomSpacing(8, after: passwordTitleLabel)
        return view
    }()
    
    lazy var confirmButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.WalletKeystore.btnConfirm)
        btn.isEnabled = false
        btn.addTarget(self, action: #selector(onConfirmClicked(_:)), for: .touchUpInside)
        
        btn.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            btn.heightAnchor.constraint(equalToConstant: 52)
        ])
        return btn
    }()
    
    var disposeBag = Set<AnyCancellable>()
    let name: String?
    let password: String
    
    init(name: String?, password: String) {
        self.name = name
        self.password = password
        
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        title = L10n.Scene.WalletKeystore.title
        navigationController?.navigationBar.prefersLargeTitles = true
        
        setupUI()
    }
}

// MARK: - Actions

// swiftlint:disable line_length
private extension ImportKeystoreViewController {
    @objc
    func onConfirmClicked(_ sender: UIButton) {
        guard let json = textView.text else { return }
        guard let jsonPassword = passwordTextField.text else { return }
        DispatchQueue.main.async {
            let chainType = self.userSetting.network.chain
            let result = WalletCoreService.shared.createAccount(param: .keyStoreJson(keyStoreJson: json, keyStoreJsonPassword: jsonPassword), name: self.name ?? "", password: self.password, chainType: chainType, isImported: true)
            switch result {
            case .success(let account):
                self.userSetting.defaultAccountAddress = account.address
                self.showSuccess()

            case .failure(let error):
                self.showError(error: error)
            }
        }
    }
}
// swiftlint:enable line_length

// MARK: - Private methods

private extension ImportKeystoreViewController {
    func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(vStack)
        
        vStack.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            view.safeAreaLayoutGuide.bottomAnchor.constraint(equalTo: vStack.bottomAnchor),
            view.trailingAnchor.constraint(equalTo: vStack.trailingAnchor)
        ])
        
        view.gesture()
            .sink { [weak self] _ in
                self?.view.endEditing(true)
            }
            .store(in: &disposeBag)
        
        NotificationCenter.default
            .publisher(for: UITextView.textDidChangeNotification, object: textView)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                if let keystoreJson = self.textView.text, !keystoreJson.isEmpty {
                    self.confirmButton.isEnabled = true
                } else {
                    self.confirmButton.isEnabled = false
                }
            }
            .store(in: &disposeBag)
        
        textView.delegate = self
    }
    
    func showSuccess() {
        let alertController = AlertController(
            title: L10n.Common.Alert.WalletImport.alertTitleSuccess,
            message: L10n.Common.Alert.RecoveryKeyWarning.description,
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .success,
            confirmButtonClicked: { _ in                
                Coordinator.main.present(scene: .balance, transition: .replaceCurrentNavigation(tab: .wallet, animated: true))
            }
        )
        
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }
    
    func showError(error: Error) {
        // FIXME: Present idiometic error infomration
        let alertController = AlertController(
            title: L10n.Common.Alert.WalletImport.alertTitleFail,
            message: error.localizedDescription,
            confirmButtonText: L10n.Common.Controls.ok,
            imageType: .error
        )
        
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }
}

extension ImportKeystoreViewController: UITextViewDelegate {
    func textView(_ textView: UITextView, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool {
        if text == "\n" {
            passwordTextField.becomeFirstResponder()
            return false
        }
        return true
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct ImportKeystoreViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = ImportKeystoreViewController(name: nil, password: "123456")
        let width: CGFloat = 375
        let height: CGFloat = 812
        Group {
            UIViewPreview {
                let view = vc.view!
                view.translatesAutoresizingMaskIntoConstraints = false
                NSLayoutConstraint.activate([
                    view.widthAnchor.constraint(equalToConstant: width),
                    view.heightAnchor.constraint(equalToConstant: height)
                ])
                return view
            }
            .previewLayout(.fixed(width: width, height: height))
        }
    }
}
#endif
