//
//  SetPasswordStep1ViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/18.
//  Copyright © 2021 dimension. All rights reserved.
//
//  same as ChangePasswordViewController.swift

import Combine
import Foundation
import IQKeyboardManagerSwift
import PanModal
import UIKit

class ChangePasswordStep1ViewController: UIViewController {
    var disposeBag = Set<AnyCancellable>()
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    var keyboardHeight: CGFloat?
    
    let stackView = UIStackView()
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH4
        label.text = L10n.Scene.ChangePassword.title
        label.textAlignment = .center
        return label
    }()
    
    let subtitleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH5
        label.text = L10n.Scene.ChangePassword.subTitle
        label.textAlignment = .left
        label.numberOfLines = 0
        return label
    }()
    
    let passwordItemView: PasswordFormItemView = {
        let view = PasswordFormItemFactory.createPaymentFormItem(autoVerify: true)
        view.passwordTextField.returnKeyType = .done
        view.passwordTitleLabel.text = L10n.Scene.ChangePassword.password
        return view
    }()
    
    let confirmButton: UIButton = PrimeryButton(title: L10n.Common.Controls.next)
    
    lazy var buttonsRow: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.spacing = 20
        view.distribution = .fillEqually
        
        view.addArrangedSubview(confirmButton)
        
        return view
    }()
}

extension ChangePasswordStep1ViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Asset.Colors.Background.normal.color
        setupSubviews()
        subscribeSignal()
        bindActions()
        bindViewModel()
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
        subtitleLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(subtitleLabel)
        passwordItemView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(passwordItemView)
        
        stackView.addArrangedSubview(buttonsRow)
        
        NSLayoutConstraint.activate([
            confirmButton.heightAnchor.constraint(equalToConstant: 52)
        ])
        
        stackView.setCustomSpacing(12, after: titleLabel)
        stackView.setCustomSpacing(20, after: subtitleLabel)
        stackView.setCustomSpacing(20, after: passwordItemView)
        
        view.gesture()
            .sink { [weak self] _ in
                self?.textFieldResignFirstResponder()
            }
            .store(in: &disposeBag)
    }
    
    func subscribeSignal() {
        passwordItemView.viewModel.passwordError.map { state in
            state.isVerifyed
        }
        .assign(to: \.isEnabled, on: confirmButton)
        .store(in: &disposeBag)
    }
    
    func textFieldResignFirstResponder() {
        passwordItemView.resignFirstResponder()
        view.endEditing(true)
    }
    
    private func bindActions() {
        confirmButton.cv.publisher(on: .touchUpInside).sink { [weak self] _ in
            self?.dismiss(animated: false) {
                self?.coordinator.present(
                    scene: .changePasswordStep2,
                    transition: .panModel()
                )
            }
        }.store(in: &disposeBag)
    }
        
    private func bindViewModel() {
    }
}

extension ChangePasswordStep1ViewController: KeyboardHandlerContent {
    func keyboardHandlerWillShowKeyboard(
        _ sender: KeyboardHandlerViewController,
        scrollView: UIScrollView,
        keyboardFrame: CGRect,
        firstResponder: UIView?) {
            scrollView.scrollToBottom()
        }
}
