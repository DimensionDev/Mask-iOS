//
//  ImportPrivateKeyViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import OSLog
import RSKPlaceholderTextView
import UIKit

class ImportPrivateKeyViewController: BaseViewController {
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    lazy var textView: UITextView = {
        let view = RSKPlaceholderTextView()
        view.returnKeyType = .done
        view.font = FontStyles.BH5
        view.placeholder = L10n.Scene.WalletPrivateKey.placeholder as NSString
        view.textColor = Asset.Colors.Text.dark.color
        view.backgroundColor = .clear
        view.placeholderColor = Asset.Colors.Control.TextView.placeholderColor.color
        view.translatesAutoresizingMaskIntoConstraints = false
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
        let btn = PrimeryButton(title: L10n.Scene.WalletPrivateKey.btnConfirm)
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
        
        self.title = L10n.Scene.WalletPrivateKey.title
        self.navigationController?.navigationBar.prefersLargeTitles = true
        
        setupUI()
        handleConfirmBtnForKeyboard()
    }
}

// MARK: - Actions
private extension ImportPrivateKeyViewController {
    @objc
    func onConfirmClicked(_ sender: UIButton) {
        guard let privateKey = textView.text?.trimmingCharacters(in: .whitespacesAndNewlines) else { return }
        
        DispatchQueue.main.async {
            let chainType = self.userSetting.network.chain
            let result = WalletCoreService.shared.createAccount(
                param: .privateKey(privateKey: privateKey.stripHexPrefix()),
                name: self.name ?? "",
                password: self.password,
                chainType: chainType,
                isImported: true)

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

// MARK: - Private methods
private extension ImportPrivateKeyViewController {
    func setupUI() {
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
                if let privatekey = self.textView.text, !privatekey.isEmpty {
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
            message: "",
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .success,
            confirmButtonClicked: { _ in
                let walletListVC = self.navigationController?.viewControllers.first(where: { vc in
                    return vc.isKind(of: WalletListViewController.self)
                })
                guard walletListVC == nil else {
                    self.navigationController?.popToViewController(walletListVC!, animated: true)
                    return
                }
                
                Coordinator.main.present(scene: .balance, transition: .replaceCurrentNavigation(tab: .wallet, animated: true))            
            }
        )
        
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }
    
    func showError(error: Error) {
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

extension ImportPrivateKeyViewController: UITextViewDelegate {
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
struct ImportPrivateKeyViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = ImportPrivateKeyViewController(name: nil, password: "123456")
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
