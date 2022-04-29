//
//  IdentityImportViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/11.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import RSKPlaceholderTextView
import UIKit

class IdentityMnemonicImportViewController: BaseViewController {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    lazy var textView: UITextView = {
        let view = RSKPlaceholderTextView()
        view.font = FontStyles.BH5
        view.autocapitalizationType = .none
        view.placeholder = L10n.Scene.IdentityMnemonicImport.placeholder as NSString
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
    
    lazy var confirmButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.WalletMnemonic.btnConfirm)
        btn.addTarget(self, action: #selector(onConfirmClicked(_:)), for: .touchUpInside)
        return btn
    }()
    
    let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH4
        label.text = L10n.Scene.IdentityMnemonicImport.description
        label.numberOfLines = 0
        return label
    }()
    
    let keyboardExpandView = UIView()
    
    var disposeBag = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        title = L10n.Scene.IdentityMnemonicImport.title
        navigationItem.largeTitleDisplayMode = .always
        navigationController?.navigationBar.prefersLargeTitles = true
        
        setupUI()
        handleConfirmBtnForKeyboard()
    }
}

// MARK: - Actions

private extension IdentityMnemonicImportViewController {
    @objc
    func onConfirmClicked(_ sender: UIButton) {
        guard let text = textView.text else {
            return
        }
        if text.isEmpty {
            return
        }
        let result = PersonaManager.createPersona(nickname: nil, mnemonic: text)
        switch result {
        case .success:
            restoreSuccess()
        case let .failure(error):
            restoreFailed(errorMessage: error.localizedDescription)
        }
    }
    
    func restoreSuccess() {
        coordinator.present(scene: .persona,
                            transition: .replaceCurrentNavigation(tab: .personas, animated: true),
                            from: nil)
        {
            let alertController = AlertController(title: L10n.Scene.Restore.Titles.restoreSucceed,
                                                  message: L10n.Scene.IdentityRestoreSigninSuccess.title,
                                                  confirmButtonText: L10n.Common.Controls.done,
                                                  imageType: .success)
            self.coordinator.present(scene: .alertController(alertController: alertController),
                                     transition: .alertController(completion: nil))
        }
    }
    
    func restoreFailed(errorMessage: String?) {
        if let errorMessage = errorMessage {
            let alertController = AlertController(title: errorMessage,
                                                  message: "",
                                                  confirmButtonText: L10n.Common.Controls.done,
                                                  imageType: .error)
            coordinator.present(scene: .alertController(alertController: alertController),
                                transition: .alertController(completion: nil))
        }
    }
}

// MARK: - Private methods

private extension IdentityMnemonicImportViewController {
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(descriptionLabel)
        view.addSubview(textContainer)
        view.addSubview(confirmButton)
        view.addSubview(keyboardExpandView)
        
        descriptionLabel.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            descriptionLabel.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 12),
            descriptionLabel.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            view.trailingAnchor.constraint(equalTo: descriptionLabel.trailingAnchor, constant: LayoutConstraints.trailing)
        ])
        
        textContainer.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            textContainer.topAnchor.constraint(equalTo: descriptionLabel.bottomAnchor, constant: 20),
            textContainer.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            view.trailingAnchor.constraint(equalTo: textContainer.trailingAnchor, constant: LayoutConstraints.trailing)
        ])
        
        confirmButton.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            confirmButton.heightAnchor.constraint(equalToConstant: 52),
            confirmButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            view.trailingAnchor.constraint(equalTo: confirmButton.trailingAnchor, constant: LayoutConstraints.trailing)
        ])
        
        keyboardExpandView.snp.makeConstraints { make in
            make.top.equalTo(confirmButton.snp.bottom).offset(16)
            make.leading.trailing.equalToSuperview()
            make.bottom.equalTo(view.safeAreaLayoutGuide.snp.bottom)
            make.height.equalTo(0)
        }
        
        view.gesture()
            .sink { [weak self] _ in
                self?.view.endEditing(true)
            }
            .store(in: &disposeBag)
    }
    
    func handleConfirmBtnForKeyboard() {
        let endFrame = KeyboardResponderService.shared.endFrame.removeDuplicates()
        let willShow = NotificationCenter.default.publisher(for: UIResponder.keyboardWillShowNotification, object: nil)
        let willHide = NotificationCenter.default.publisher(for: UIResponder.keyboardWillHideNotification, object: nil)
        Publishers.CombineLatest(willShow, endFrame).sink { notification, _ in
            guard let duration = notification.userInfo?[UIResponder.keyboardAnimationDurationUserInfoKey] as? Double else {
                return
            }
            guard let endFrame = notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect else {
                return
            }
            UIView.animate(
                withDuration: duration,
                delay: 0,
                options: .curveEaseIn)
            {
                    self.keyboardExpandView.snp.remakeConstraints { make in
                        make.top.equalTo(self.confirmButton.snp.bottom).offset(16)
                        make.leading.trailing.equalToSuperview()
                        make.bottom.equalTo(self.view.safeAreaLayoutGuide.snp.bottom)
                        make.height.equalTo(endFrame.height)
                        self.confirmButton.layoutIfNeeded()
                    }
                }
            self.view.layoutIfNeeded()
        }.store(in: &disposeBag)
        
        Publishers.CombineLatest(willHide, endFrame).sink { notification, _ in
            guard let duration = notification.userInfo?[UIResponder.keyboardAnimationDurationUserInfoKey] as? Double else {
                return
            }
            UIView.animate(
                withDuration: duration,
                delay: 0,
                options: .curveEaseIn)
            {
                    self.keyboardExpandView.snp.remakeConstraints { make in
                        make.top.equalTo(self.confirmButton.snp.bottom).offset(16)
                        make.leading.trailing.equalToSuperview()
                        make.bottom.equalTo(self.view.safeAreaLayoutGuide.snp.bottom)
                        make.height.equalTo(0)
                    }
                }
            self.view.layoutIfNeeded()
        }.store(in: &disposeBag)
    }
}
