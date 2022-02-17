//
//  AlertController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import IQKeyboardManagerSwift
import UIKit

class AlertController: UIViewController {
    @InjectedProvider(\.vault)
    private var vault
    
    var disposeBag = Set<AnyCancellable>()
    
    func setAttributeTitle(attrTitle: NSAttributedString) {
        titleLabel.attributedText = attrTitle
    }
    
    func setAttributeMessage(attrMessage: NSAttributedString) {
        descriptionLabel.attributedText = attrMessage
    }
    
    func addTextField(title: String, textFieldPlaceHolder: String, isPasswordTextField: Bool) {
        textFieldTitleLabel.text = title
        textField.attributedPlaceholder = NSAttributedString(string: textFieldPlaceHolder,
                                                             attributes: [.foregroundColor: Asset.Colors.Text.light.color,
                                                                          .font: FontStyles.BH5])
        textField.isPasswordTextField = isPasswordTextField
        textFieldTitleLabel.isHidden = false
        textField.isHidden = false
        
        containerView.gesture()
            .sink { [weak self] _ in
                self?.textField.resignFirstResponder()
            }
            .store(in: &disposeBag)
        
        if isPasswordTextField {
            passwordErrorLabel.isHidden = false
        }
    }

    /// Init Method
    /// - Parameters:
    ///   - title: title  if need AttributedString , Call setAttributeTitle
    ///   - message: message if need AttributedString, Call setAttributeMessage
    ///   - confirmButtonText: confirmButtonText
    ///   - cancelButtonText: cancelButtonText   cancelButton located before or above confirmButton
    ///   - buttonAxis: buttonStackView's axis
    ///   - imageType: imageType if don't need image, use .none
    ///   - confirmButtonClicked: confirmButtonClicked
    ///   - cancelButtonClicked: cancelButtonClicked
    required init(title: String,
                  message: String? = nil,
                  confirmButtonText: String,
                  cancelButtonText: String? = nil,
                  buttonAxis: NSLayoutConstraint.Axis? = .horizontal,
                  imageType: AlertController.ImageType,
                  confirmButtonClicked: ((UIControl) -> Void)? = nil,
                  cancelButtonClicked: ((UIControl) -> Void)? = nil) {
        titleLabel.text = title
        descriptionLabel.text = message
        descriptionLabel.isHidden = message?.isEmpty != false
        confirmButton.setTitle(confirmButtonText, for: .normal)
        if let image = imageType.image() {
            imageView.image = image
        } else {
            imageView.isHidden = true
        }
        
        super.init(nibName: nil, bundle: nil)
        
        textFieldTitleLabel.isHidden = true
        textField.isHidden = true
        passwordErrorLabel.isHidden = true
        
        let axis = buttonAxis!
        buttonStackView.axis = axis
        if axis == .vertical {
            // according to th UI, if button's distribution is vertical, the two buttons should be PrimeryButton
            cancelButton = PrimeryButton(title: "")
        } else {
            cancelButton = SecondaryButton(title: "")
        }
        if let cancelText = cancelButtonText {
            cancelButton.setTitle(cancelText, for: .normal)
        } else {
            cancelButton.isHidden = true
        }
        
        confirmButton.publisher(for: .touchUpInside)
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { [weak self] control in
                guard let self = self else { return }
                guard self.textField.isPasswordTextField else {
                    self.dismiss(animated: false) {
                        confirmButtonClicked?(control)
                    }
                    return
                }
                self.vault.verifyWalletPassword(self.textField.text)
                    .subscribe(on: DispatchQueue.main)
                    .sink(receiveValue: { result in
                        if result {
                            self.dismiss(animated: false) {
                                confirmButtonClicked?(control)
                            }
                        } else {
                            self.passwordErrorLabel.text = L10n.Scene.CreateWallet.passwordError
                            self.textField.shake()
                        }
                    })
                    .store(in: &self.disposeBag)
            })
            .store(in: &disposeBag)
        
        cancelButton.publisher(for: .touchUpInside)
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { [weak self] control in
                self?.dismiss(animated: false) {
                    cancelButtonClicked?(control)
                }
            })
            .store(in: &disposeBag)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private let containerView: UIView = {
        let container = UIView()
        container.backgroundColor = Asset.Colors.Background.normal.color
        container.layer.cornerRadius = 20
        container.clipsToBounds = true
        return container
    }()

    private let titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH4
        label.numberOfLines = 0
        label.textAlignment = .center
        return label
    }()
    
    private let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH5
        label.numberOfLines = 0
        label.textAlignment = .left
        return label
    }()
    
    private let imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .center
        return imageView
    }()
    
    private let textFieldTitleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        return label
    }()
    
    let textField = MaskTextField()
    
    let passwordErrorLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Public.error.color
        label.font = FontStyles.MH6
        label.text = " "
        label.numberOfLines = 0
        return label
    }()
    
    private let buttonStackView = UIStackView()
    private let confirmButton = PrimeryButton(title: L10n.Common.Controls.enable)
    private var cancelButton: UIButton!
}

extension AlertController {
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Asset.Colors.Background.mask.color
        
        containerView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(containerView)
        NSLayoutConstraint.activate([
            containerView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            containerView.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            containerView.widthAnchor.constraint(equalTo: view.widthAnchor, constant: -44)
        ])
        
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 32, left: 16, bottom: 32, right: 16)
        stackView.spacing = 16
        stackView.distribution = .fill
        view.addSubview(stackView)

        stackView.translatesAutoresizingMaskIntoConstraints = false
        containerView.addSubview(stackView)
        
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: containerView.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: containerView.leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: containerView.trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: containerView.bottomAnchor)
        ])
        
        imageView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(imageView)
        imageView.setContentHuggingPriority(.defaultLow, for: .vertical)
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(titleLabel)
        titleLabel.setContentHuggingPriority(.required - 1, for: .vertical)
        
        descriptionLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(descriptionLabel)
        descriptionLabel.setContentHuggingPriority(.required - 1, for: .vertical)
        
        textFieldTitleLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(textFieldTitleLabel)
        textFieldTitleLabel.setContentHuggingPriority(.required - 1, for: .vertical)
        
        textField.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(textField)
        textField.setContentHuggingPriority(.required - 1, for: .vertical)
        
        passwordErrorLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(passwordErrorLabel)
        passwordErrorLabel.setContentHuggingPriority(.required - 1, for: .vertical)
        
        stackView.setCustomSpacing(8, after: textField)
        stackView.setCustomSpacing(8, after: passwordErrorLabel)
        
        buttonStackView.distribution = .fillEqually
        buttonStackView.spacing = 12
        buttonStackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(buttonStackView)
        
        cancelButton.translatesAutoresizingMaskIntoConstraints = false
        buttonStackView.addArrangedSubview(cancelButton)
        NSLayoutConstraint.activate([
            cancelButton.heightAnchor.constraint(equalToConstant: 48)
        ])
        
        confirmButton.translatesAutoresizingMaskIntoConstraints = false
        buttonStackView.addArrangedSubview(confirmButton)
        NSLayoutConstraint.activate([
            confirmButton.heightAnchor.constraint(equalToConstant: 48),
            textField.heightAnchor.constraint(equalToConstant: 52)
        ])
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        if !textField.isHidden {
            IQKeyboardManager.shared.enable = true
        }
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        if !textField.isHidden {
            IQKeyboardManager.shared.enable = false
        }
    }
}

extension AlertController {
    public enum ImageType {
        case warning
        case success
        case error
        case noImage
        
        func image() -> UIImage? {
            switch self {
            case .warning:
                return Asset.Images.Scene.Alert.warning.image

            case .error:
                return Asset.Images.Scene.Alert.error.image

            case .success:
                return Asset.Images.Scene.Alert.success.image

            case .noImage:
                return nil
            }
        }
    }
}
