//
//  PasswordFormItemView.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import OSLog
import UIKit
import UITextField_Shake

class PasswordFormItemView: UIView {
    lazy var passwordTitleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH5
        label.textColor = Asset.Colors.Text.normal.color
        label.text = L10n.Scene.ChangePassword.password
        return label
    }()
    
    lazy var passwordTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.isPasswordTextField = true
        textField.attributedPlaceholder = NSAttributedString(
            string: L10n.Scene.ChangePassword.password,
            attributes: [
                .foregroundColor: Asset.Colors.Text.light.color,
                .font: FontStyles.BH5
            ]
        )
        
        textField.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            textField.heightAnchor.constraint(equalToConstant: 52)
        ])
        
        return textField
    }()
    
    let passwordErrorLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.error.color
        label.font = FontStyles.MH6
        label.text = L10n.Scene.CreateWallet.passwordError
        label.numberOfLines = 0
        return label
    }()
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .fill
        view.spacing = 8
        
        passwordTitleLabel.translatesAutoresizingMaskIntoConstraints = false
        passwordTextField.translatesAutoresizingMaskIntoConstraints = false
        passwordErrorLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(passwordTitleLabel)
        view.addArrangedSubview(passwordTextField)
        view.addArrangedSubview(passwordErrorLabel)
        return view
    }()
    
    // MARK: - Data
    let viewModel: PasswordFormItemViewModel
    var disposeBag = Set<AnyCancellable>()
    private let autoVerify: Bool
    private let errorShaking: Bool
    private(set) var verifySignal = PassthroughSubject<Void, Never>()
    
    init(viewModel: PasswordFormItemViewModel, autoVerify: Bool = false, errorShaking: Bool = false) {
        self.viewModel = viewModel
        self.autoVerify = autoVerify
        self.errorShaking = errorShaking
        super.init(frame: .zero)
        
        setupUI()
        bindViewModel()

        if autoVerify {
            verifySignal
                .debounce(for: 0.1, scheduler: DispatchQueue.main, options: nil)
                .sink { [weak self] _ in
                    guard let self = self else { return }
                    self.verify()
                }
                .store(in: &disposeBag)
            
            NotificationCenter.default
                .publisher(for: UITextField.textDidChangeNotification, object: passwordTextField)
                .sink { [weak self] _ in
                    guard let self = self else { return }
                    self.verify()
                }
                .store(in: &disposeBag)
        }
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func verify(success: @escaping () -> Void = {}) {
        viewModel.verifyPassword(password: passwordTextField.text, success: success)
    }

    var passwordVerifyed: Bool { viewModel.passwordError.value.isVerifyed }
}

extension PasswordFormItemView {
    private func setupUI() {
        self.addSubview(stackView)
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: self.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            self.bottomAnchor.constraint(equalTo: stackView.bottomAnchor),
            self.trailingAnchor.constraint(equalTo: stackView.trailingAnchor)
        ])
    }
    
    private func bindViewModel() {
        viewModel.passwordError
            .receive(on: DispatchQueue.main)
            .sink { [weak self] errorState in
                switch errorState {
                case .initial:
                    self?.passwordErrorLabel.text = nil

                case .empty:
                    if self?.errorShaking ?? false {
                        self?.passwordTextField.shake()
                    }
                    self?.passwordErrorLabel.text = L10n.Scene.CreateWallet.enterPassword

                case let .verifyed(hasError):
                    guard hasError else {
                        self?.passwordErrorLabel.text = nil
                        return
                    }
                    if self?.errorShaking ?? false {
                        self?.passwordTextField.shake()
                    }
                    self?.passwordErrorLabel.text = L10n.Scene.CreateWallet.passwordError
                }
            }
            .store(in: &disposeBag)
    }
}

enum PasswordState {
    case initial
    case empty
    case verifyed(hasError: Bool)

    var isVerifyed: Bool {
        switch self {
        case .initial, .empty: return false
        case let .verifyed(hasError): return !hasError
        }
    }
}

protocol PasswordFormItemViewModel {
    var passwordError: CurrentValueSubject<PasswordState, Never> { get }
    func verifyPassword(password: String?, success: @escaping () -> Void)
}

class PaymentFormItemViewModel: PasswordFormItemViewModel {
    // Input
    // Output
    let passwordError = CurrentValueSubject<PasswordState, Never>(.initial)
    @InjectedProvider(\.vault)
    var vault
    var disposeBag = Set<AnyCancellable>()
    
    func verifyPassword(password: String?, success: @escaping () -> Void) {
        vault.verifyWalletPassword(password)
            .subscribe(on: DispatchQueue.main)
            .sink { result in
                if result {
                    success()
                }
                guard let pwd = password, !pwd.isEmpty else {
                    self.passwordError.accept(.empty)
                    return
                }

                self.passwordError.value = .verifyed(hasError: !result)
            }
            .store(in: &disposeBag)
    }
}

class BackupFormItemViewModel: PasswordFormItemViewModel {
    // Input
    // Output
    let passwordError = CurrentValueSubject<PasswordState, Never>(.initial)
    
    var disposeBag = Set<AnyCancellable>()
    
    @InjectedProvider(\.vault)
    private var vault
    
    func verifyPassword(password: String?, success: @escaping () -> Void) {
        vault.getValue(for: .backupPassword)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] pwd in
                guard let self = self else {
                    return
                }
                guard let psword = password, !psword.isEmpty else {
                    self.passwordError.accept(.empty)
                    return
                }

                guard let pwd = pwd else {
                    self.passwordError.value = .verifyed(hasError: true)
                    return
                }
                
                if password == pwd {
                    success()
                }
                self.passwordError.value = .verifyed(hasError: password != pwd)
            }
            .store(in: &disposeBag)
    }
}

enum PasswordFormItemFactory {
    static func createPaymentFormItem(autoVerify: Bool = false) -> PasswordFormItemView {
        let viewModel = PaymentFormItemViewModel()
        let formItem = PasswordFormItemView(viewModel: viewModel, autoVerify: autoVerify)
        return formItem
    }
    
    static func createBackupFormItem(autoVerify: Bool = false) -> PasswordFormItemView {
        let viewModel = BackupFormItemViewModel()
        let formItem = PasswordFormItemView(viewModel: viewModel, autoVerify: autoVerify)
        formItem.passwordTitleLabel.text = L10n.Scene.BackupPasswordVerify.title
        formItem.passwordTextField.attributedPlaceholder = NSAttributedString(
            string: L10n.Scene.BackupPasswordVerify.title,
            attributes: [
                .foregroundColor: Asset.Colors.Text.light.color,
                .font: FontStyles.BH5
            ]
        )
        return formItem
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct PasswordFormItemViewPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let view = PasswordFormItemFactory.createPaymentFormItem()
                return view
            }
            .previewLayout(.fixed(width: 375, height: 117))
        }
    }
}
#endif
