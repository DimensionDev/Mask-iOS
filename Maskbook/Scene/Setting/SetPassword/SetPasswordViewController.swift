//
//  SetPasswordViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/7/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal

class SetPasswordViewController: UIViewController {
    var disposeBag = Set<AnyCancellable>()
    
    let viewModel = SetPasswordViewModel()
    
    var keyboardHeight: CGFloat?
    
    let stackView = UIStackView()
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH4
        label.text = L10n.Scene.SetPassword.title
        label.textAlignment = .center
        return label
    }()
    
    let newPasswordLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.SetPassword.paymentPassword
        return label
    }()
    
    let newPasswordTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.isPasswordTextField = true
        textField.attributedPlaceholder = NSAttributedString(
            string: L10n.Scene.ChangePassword.newPassword,
            attributes: [.foregroundColor: Asset.Colors.Text.light.color, .font: FontStyles.BH5])
        textField.returnKeyType = .next
        return textField
    }()
    
    let confirmPasswordLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.SetPassword.repeatPaymentPassword
        return label
    }()
    
    let confirmPasswordTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.isPasswordTextField = true
        textField.attributedPlaceholder = NSAttributedString(
            string: L10n.Scene.ChangePassword.confirmPassword,
            attributes: [.foregroundColor: Asset.Colors.Text.light.color, .font: FontStyles.BH5])
        return textField
    }()
    
    let passwordErrorLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.blue.color
        label.font = FontStyles.RH6
        label.text = L10n.Scene.SetPassword.passwordInvalid
        label.numberOfLines = 0
        return label
    }()
    
    let confirmButton: UIButton = PrimeryButton(title: L10n.Common.Controls.next)
}

extension SetPasswordViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Asset.Colors.Background.normal.color
        viewModel.viewController = self
        setupSubviews()
        subscribeSignal()
        newPasswordTextField.delegate = self
        confirmPasswordTextField.delegate = self
        confirmButton.addTarget(self, action: #selector(confirmAction(_:)), for: .touchUpInside)
        confirmButton.isEnabled = false
    }
    
    func setupSubviews() {
        stackView.axis = .vertical
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: LayoutConstraints.leading, bottom: 24, right: LayoutConstraints.trailing)
        stackView.spacing = 8
        stackView.distribution = .fill
        
        view.addSubview(stackView)
        stackView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(titleLabel)
        
        newPasswordLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(newPasswordLabel)
        newPasswordTextField.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(newPasswordTextField)
        
        confirmPasswordLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(confirmPasswordLabel)
        confirmPasswordTextField.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(confirmPasswordTextField)
 
        passwordErrorLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(passwordErrorLabel)
        
        confirmButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(confirmButton)
        
        NSLayoutConstraint.activate([
            confirmButton.heightAnchor.constraint(equalToConstant: 54),
            newPasswordTextField.heightAnchor.constraint(equalToConstant: 52),
            confirmPasswordTextField.heightAnchor.constraint(equalToConstant: 52)
        ])
        
        stackView.setCustomSpacing(20, after: titleLabel)
        stackView.setCustomSpacing(20, after: newPasswordTextField)
        stackView.setCustomSpacing(8, after: confirmPasswordTextField)
        stackView.setCustomSpacing(20, after: passwordErrorLabel)
        
        view.gesture()
            .sink { [weak self] _ in
                self?.textFieldResignFirstResponder()
            }
            .store(in: &disposeBag)
    }
    
    func subscribeSignal() {
        NotificationCenter.default
            .publisher(for: UITextField.textDidChangeNotification, object: newPasswordTextField)
            .sink { [weak self] _ in
                guard let self = self else { return }
                self.viewModel.newPassword.value = self.newPasswordTextField.text
                _ = self.viewModel.checkPasswordValid(password: self.newPasswordTextField.text)
            }
            .store(in: &disposeBag)
        
        NotificationCenter.default
            .publisher(for: UITextField.textDidChangeNotification, object: confirmPasswordTextField)
            .sink { [weak self] _ in
                guard let self = self else { return }
                self.viewModel.confirmPassword.value = self.confirmPasswordTextField.text
                _ = self.viewModel.checkPasswordValid(password: self.confirmPasswordTextField.text)
            }
            .store(in: &disposeBag)
        
        viewModel.changePasswordError
            .receive(on: DispatchQueue.main)
            .sink { [weak self] errorString in
                guard let self = self else { return }
                self.confirmButton.isEnabled = self.viewModel.shouldEnablConfrimButton
                guard errorString != nil else {
                    self.passwordErrorLabel.text = L10n.Scene.SetPassword.passwordInvalid
                    self.passwordErrorLabel.textColor = Asset.Colors.Public.blue.color
                    return
                }
                self.passwordErrorLabel.text = errorString
                self.passwordErrorLabel.textColor = Asset.Colors.Public.error.color
            }
            .store(in: &disposeBag)
    }
    
    func textFieldResignFirstResponder() {
        newPasswordTextField.resignFirstResponder()
        confirmPasswordLabel.resignFirstResponder()
        view.endEditing(true)
    }
}

extension SetPasswordViewController {
    @objc
    func confirmAction(_ sender: UIButton) {
        viewModel.confirmAction()
    }
}

extension SetPasswordViewController: UITextFieldDelegate {
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        switch textField {
        case newPasswordTextField:
            confirmPasswordTextField.becomeFirstResponder()

        case confirmPasswordTextField:
            confirmPasswordTextField.resignFirstResponder()

        default:
            break
        }
        return true
    }
}

extension SetPasswordViewController: KeyboardHandlerContent {
    func keyboardHandlerWillShowKeyboard(
        _ sender: KeyboardHandlerViewController,
        scrollView: UIScrollView,
        keyboardFrame: CGRect,
        firstResponder: UIView?) {
            guard firstResponder == confirmPasswordTextField else { return }
            scrollView.scrollToBottom()
        }
}
