//
//  ImportMnemonicViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import RSKPlaceholderTextView
import UIKit

class ImportMnemonicViewController: BaseViewController {
    lazy var textView: UITextView = {
        let view = RSKPlaceholderTextView()
        view.returnKeyType = .done
        view.autocapitalizationType = .none
        view.font = FontStyles.BH5
        view.placeholder = L10n.Scene.WalletMnemonic.placeholder as NSString
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
        btn.isEnabled = false
        btn.addTarget(self, action: #selector(onConfirmClicked(_:)), for: .touchUpInside)
        return btn
    }()
    
    let keyboardExpandView = UIView()
    
    var disposeBag = Set<AnyCancellable>()
    let name: String?
    let password: String
    
    init(name: String?, password: String) {
        self.name = name
        self.password = password
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        title = L10n.Scene.WalletMnemonic.title
        navigationController?.navigationBar.prefersLargeTitles = true
        
        setupUI()
        handleConfirmBtnForKeyboard()
    }
}

// MARK: - Actions

// swiftlint:disable line_length
private extension ImportMnemonicViewController {
    @objc
    func onConfirmClicked(_ sender: UIButton) {
        guard let mnemonic = textView.text?.trimmingCharacters(in: .whitespacesAndNewlines).lowercased() else { return }
        
        Coordinator.main.present(
            scene: .derivationPath(name: name, mnemonic: mnemonic),
            transition: .detail(animated: true))
    }
}
// swiftlint:enable line_length

// MARK: - Private methods

private extension ImportMnemonicViewController {
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(textContainer)
        view.addSubview(confirmButton)
        view.addSubview(keyboardExpandView)
        
        textContainer.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            textContainer.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 10),
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
        
        NotificationCenter.default
            .publisher(for: UITextView.textDidChangeNotification, object: textView)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                if let mnemonic = self.textView.text, !mnemonic.isEmpty, mnemonic.isMnemonicFormat {
                    self.confirmButton.isEnabled = true
                } else {
                    self.confirmButton.isEnabled = false
                }
            }
            .store(in: &disposeBag)
        
        textView.delegate = self
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

extension ImportMnemonicViewController: UITextViewDelegate {
    func textView(_ textView: UITextView, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool {
        if text == "\n" {
            textView.resignFirstResponder()
            return false
        }
        return true
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct ImportMnemonicViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = ImportMnemonicViewController(name: nil, password: "123456")
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
