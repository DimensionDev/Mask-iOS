//
//  SetBackupPasswordViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import IQKeyboardManagerSwift
import PanModal
import UIKit

class SetBackupPasswordViewController: UIViewController {
    var disposeBag = Set<AnyCancellable>()
    
    let viewModel = SetBackupPasswordViewModel()
    
    let stackView = UIStackView()
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH4
        label.text = L10n.Scene.SetBackupPassword.title
        label.textAlignment = .center
        return label
    }()
    
    let newPasswordLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.SetBackupPassword.backupPassword
        return label
    }()
    
    let newPasswordTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.isPasswordTextField = true
        textField.attributedPlaceholder = NSAttributedString(
            string: L10n.Scene.SetBackupPassword.backupPassword,
            attributes: [.foregroundColor: Asset.Colors.Text.light.color,
                         .font: FontStyles.BH5])
        textField.returnKeyType = .next
        return textField
    }()
    
    let confirmPasswordLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.SetBackupPassword.confirmBackupPassword
        return label
    }()
    
    let confirmPasswordTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.isPasswordTextField = true
        textField.attributedPlaceholder = NSAttributedString(
            string: L10n.Scene.SetBackupPassword.confirmBackupPassword,
            attributes: [.foregroundColor: Asset.Colors.Text.light.color,
                         .font: FontStyles.BH5])
        return textField
    }()
    
    let passwordErrorLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.blue.color
        label.font = FontStyles.RH6
        label.text = L10n.Scene.SetBackupPassword.tips
        label.numberOfLines = 0
        return label
    }()
    
    let confirmButton: UIButton = PrimeryButton(title: L10n.Common.Controls.confirm)
    
    let contentHeight: CGFloat = 440
    
    init() {
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

extension SetBackupPasswordViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Asset.Colors.Background.normal.color
        setupSubviews()
        subscribeSignal()
        newPasswordTextField.delegate = self
        confirmPasswordTextField.delegate = self
        confirmButton.addTarget(self, action: #selector(confirmAction(_:)), for: .touchUpInside)
        bindViewModel()
        confirmButton.isEnabled = false
    }
    
    func setupSubviews() {
        stackView.axis = .vertical
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: 22, bottom: 24, right: 22)
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
            confirmButton.heightAnchor.constraint(equalToConstant: 52),
            newPasswordTextField.heightAnchor.constraint(equalToConstant: 52),
            confirmPasswordTextField.heightAnchor.constraint(equalToConstant: 52)
        ])
        
        stackView.setCustomSpacing(12, after: titleLabel)
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
                    self.passwordErrorLabel.text = L10n.Scene.SetBackupPassword.tips
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
    
    private func bindViewModel() {
        viewModel.dismissSignal
            .receive(on: DispatchQueue.main)
            .sink { [weak self] error in
                guard let self = self else { return }
                guard error != nil else {
                    self.dismiss(animated: true, completion: {
                        let alertController = AlertController(
                            title: L10n.Common.Alert.SetupBackupPassword.title,
                            message: L10n.Common.Alert.SetupBackupPassword.description,
                            confirmButtonText: L10n.Common.Controls.done,
                            imageType: .success
                        )
                        Coordinator.main.present(
                            scene: .alertController(alertController: alertController),
                            transition: .alertController(completion: nil)
                        )
                    })
                    return
                }
                
                self.dismiss(animated: true, completion: {
                    let alertController = AlertController(
                        title: L10n.Common.Alert.SetupBackupPasswordFailed.title,
                        message: "",
                        confirmButtonText: L10n.Common.Controls.done,
                        imageType: .error)
                    Coordinator.main.present(
                        scene: .alertController(alertController: alertController),
                        transition: .alertController(completion: nil))
                })
            }.store(in: &disposeBag)
    }
}

extension SetBackupPasswordViewController {
    @objc
    func confirmAction(_ sender: UIButton) {
        viewModel.confirmAction()
    }
}

extension SetBackupPasswordViewController: UITextFieldDelegate {
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

extension SetBackupPasswordViewController: KeyboardHandlerContent {
    func keyboardHandlerWillShowKeyboard(
        _ sender: KeyboardHandlerViewController,
        scrollView: UIScrollView,
        keyboardFrame: CGRect,
        firstResponder: UIView?) {
            guard firstResponder == confirmPasswordTextField else { return }
            scrollView.scrollToBottom()
        }
}
