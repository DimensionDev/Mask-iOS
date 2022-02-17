//
//  IdentityPriviteKeyImportViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/11.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import OSLog
import RSKPlaceholderTextView
import UIKit

class IdentityPrivateKeyImportViewController: BaseViewController {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    private var personaImportPrivateKeyHandle = PersonaImportPrivateKeyHandler(scene: .userInput)
    
    lazy var textView: UITextView = {
        let view = RSKPlaceholderTextView()
        view.font = FontStyles.BH5
        view.placeholder = L10n.Scene.IdentityPrivatekeyImport.placeholder as NSString
        view.textColor = Asset.Colors.Text.dark.color
        view.backgroundColor = .clear
        view.placeholderColor = Asset.Colors.Control.TextView.placeholderColor.color
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 186)
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
        let btn = PrimeryButton(title: L10n.Scene.WalletPrivateKey.btnConfirm)
        btn.addTarget(self, action: #selector(onConfirmClicked(_:)), for: .touchUpInside)
        return btn
    }()
    
    let keyboardExpandView = UIView()
    
    let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH4
        label.text = L10n.Scene.IdentityPrivatekeyImport.description
        label.numberOfLines = 0
        return label
    }()
    
    var disposeBag = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        title = L10n.Scene.WalletPrivateKey.title
        navigationController?.navigationBar.prefersLargeTitles = true
        
        setupUI()
        handleConfirmBtnForKeyboard()
    }
}

// MARK: - Actions

private extension IdentityPrivateKeyImportViewController {
    @objc
    func onConfirmClicked(_ sender: UIButton) {
        guard let text = textView.text else {
            return
        }
        if text.isEmpty {
            return
        }
        personaImportPrivateKeyHandle.restoreFromPrivateKey(text: text)
    }
}

// MARK: - Private methods

private extension IdentityPrivateKeyImportViewController {
    func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(descriptionLabel)
        view.addSubview(textContainer)
        view.addSubview(confirmButton)
        view.addSubview(keyboardExpandView)
        
        descriptionLabel.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            descriptionLabel.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 12),
            descriptionLabel.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 22),
            view.trailingAnchor.constraint(equalTo: descriptionLabel.trailingAnchor, constant: 22)
        ])
        
        textContainer.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            textContainer.topAnchor.constraint(equalTo: descriptionLabel.bottomAnchor, constant: 20),
            textContainer.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 22),
            view.trailingAnchor.constraint(equalTo: textContainer.trailingAnchor, constant: 22)
        ])
        
        confirmButton.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            confirmButton.heightAnchor.constraint(equalToConstant: 52),
            confirmButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 22),
            view.trailingAnchor.constraint(equalTo: confirmButton.trailingAnchor, constant: 22)
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
                options: .curveEaseIn) {
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
                options: .curveEaseIn) {
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
