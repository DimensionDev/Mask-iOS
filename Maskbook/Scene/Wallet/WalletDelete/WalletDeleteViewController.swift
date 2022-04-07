//
//  WalletDeleteViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import IQKeyboardManagerSwift
import LocalAuthentication
import OSLog
import UIKit

class WalletDeleteViewController: BaseViewController {
    typealias ViewModelType = WalletDeleteViewModel
    
    lazy var vStack: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .fill
        view.spacing = 0
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(
            top: LayoutConstraints.top,
            left: LayoutConstraints.leading,
            bottom: 24,
            right: LayoutConstraints.trailing)
        
        avatarContainer.translatesAutoresizingMaskIntoConstraints = false
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        contentLabel.translatesAutoresizingMaskIntoConstraints = false
        passwordTitleLabel.translatesAutoresizingMaskIntoConstraints = false
        passwordTextField.translatesAutoresizingMaskIntoConstraints = false
        passwordErrorLabel.translatesAutoresizingMaskIntoConstraints = false
        hStack.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(avatarContainer)
        view.addArrangedSubview(titleLabel)
        view.addArrangedSubview(contentLabel)
        view.addArrangedSubview(passwordTitleLabel)
        view.addArrangedSubview(passwordTextField)
        view.addArrangedSubview(passwordErrorLabel)
        view.addArrangedSubview(hStack)
        
        view.setCustomSpacing(20, after: avatarContainer)
        view.setCustomSpacing(12, after: titleLabel)
        view.setCustomSpacing(20, after: contentLabel)
        view.setCustomSpacing(8, after: passwordTitleLabel)
        view.setCustomSpacing(8, after: passwordTextField)
        view.setCustomSpacing(8, after: passwordErrorLabel)

        return view
    }()
    
    lazy var hStack: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fill
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0)
        view.spacing = 20
        
        cancelButton.translatesAutoresizingMaskIntoConstraints = false
        deleteButton.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(cancelButton)
        view.addArrangedSubview(deleteButton)
        
        NSLayoutConstraint.activate([
            cancelButton.heightAnchor.constraint(equalToConstant: 52),
            cancelButton.heightAnchor.constraint(equalTo: deleteButton.heightAnchor),
            cancelButton.widthAnchor.constraint(equalTo: deleteButton.widthAnchor)
        ])
        return view
    }()
    
    lazy var avatarView: AvatarView = {
        let view = AvatarView(title: self.account.displayTitle)
        view.applyCornerRadius(radius: 12, cornerCurve: .circular)
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 72),
            view.heightAnchor.constraint(equalToConstant: 72)
        ])

        return view
    }()
    
    lazy var avatarContainer: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .center
        
        view.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(avatarView)
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.WalletDelete.title
        label.textAlignment = .center
        return label
    }()
    
    lazy var contentLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Text.normal.color
        label.numberOfLines = 0
        label.text = L10n.Scene.WalletDelete.content
        return label
    }()
    
    lazy var passwordTitleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.normal.color
        label.text = L10n.Scene.WalletDelete.password
        return label
    }()
    
    lazy var passwordTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.isPasswordTextField = true
        textField.attributedPlaceholder = NSAttributedString(string: L10n.Scene.CreateWallet.enterPassword,
                                                             attributes: [.foregroundColor: Asset.Colors.Text.light.color,
                                                                          .font: FontStyles.BH5])
        
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
    
    lazy var cancelButton: SecondaryButton = {
        let btn = SecondaryButton(title: L10n.Scene.WalletDelete.btnCancel)
        return btn
    }()
    
    lazy var deleteButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.WalletDelete.btnDelete)
        return btn
    }()
    
    // MAKR: - Data
    @InjectedProvider(\.vault)
    var vault: Vault
    var disposeBag = Set<AnyCancellable>()
    var keyboardManagerEnable = false
    let account: Account
    let viewModel: ViewModelType
    
    init(account: Account) {
        self.viewModel = ViewModelType(account: account)
        self.account = account
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupUI()
        bindAction()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        keyboardManagerEnable = IQKeyboardManager.shared.enable
        IQKeyboardManager.shared.enable = true
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        
        IQKeyboardManager.shared.enable = keyboardManagerEnable
    }
}

private extension WalletDeleteViewController {
    func bindAction() {
        view.gesture().sink { [weak self] _ in
            self?.view.endEditing(true)
        }
        .store(in: &disposeBag)
        
        viewModel.isShowBioIDPage
            .receive(on: DispatchQueue.main)
            .sink { [weak self] isShow in
                self?.setIsShowBioIDPage(isShow: isShow)
            }
            .store(in: &disposeBag)
        
        NotificationCenter.default
            .publisher(for: UITextField.textDidChangeNotification, object: self.passwordTextField)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                if self.viewModel.passwordError.value == true {
                    self.viewModel.passwordError.value = false
                }
                self.viewModel.passwordValidate.value = self.passwordTextField.text?.isValidPasswordFormat ?? false
            }
            .store(in: &disposeBag)
        
        viewModel.passwordError
            .receive(on: DispatchQueue.main)
            .sink { [weak self] hasError in
                if hasError {
                    self?.passwordTextField.shake()
                    self?.passwordErrorLabel.text = L10n.Scene.CreateWallet.passwordError
                } else {
                    self?.passwordErrorLabel.text = " "
                }
            }
            .store(in: &disposeBag)
        
        viewModel.passwordValidate
            .receive(on: DispatchQueue.main)
            .sink { [weak self] validate in
                self?.deleteButton.isEnabled = validate
            }
            .store(in: &disposeBag)
        
        passwordTextField.addTarget(self, action: #selector(onReturn), for: .primaryActionTriggered)
        
        cancelButton.addTarget(self, action: #selector(onCancelBtnClicked), for: .touchUpInside)
        deleteButton.addTarget(self, action: #selector(onDeleteAccountClicked), for: .touchUpInside)
    }
    
    func setIsShowBioIDPage(isShow: Bool) {
        if !maskUserDefaults.isPasswordExpried() {
            passwordTitleLabel.isHidden = true
            passwordTextField.isHidden = true
            
            deleteButton.setImage(nil, for: .normal)
            viewModel.passwordValidate.value = true
        } else if isShow {
            passwordTitleLabel.isHidden = true
            passwordTextField.isHidden = true
            
            deleteButton.setImage(LocalAuthentication.shared.bioIDButtonImage(), for: .normal)
            viewModel.passwordValidate.value = true
        } else {
            passwordTitleLabel.isHidden = false
            passwordTextField.isHidden = false
            
            deleteButton.setImage(nil, for: .normal)
            viewModel.passwordValidate.value = true
        }
        deleteButton.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
    }
    
    func setupUI() {
        view.layer.cornerRadius = 12
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(vStack)
        
        vStack.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.topAnchor),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            view.trailingAnchor.constraint(equalTo: vStack.trailingAnchor),
            view.bottomAnchor.constraint(equalTo: vStack.bottomAnchor)
        ])
        
        setIsShowBioIDPage(isShow: viewModel.isShowBioIDPage.value)
    }
    
    private func handleConfirmClicked() {
        vault.getWalletPassword()
            .sink(receiveCompletion: { _ in }) { [weak self] password in
                guard let self = self else { return }
                let result = self.viewModel.deleteAccount(password: password)
                switch result {
                case .success:
                    self.dismiss(animated: true, completion: nil)
                    
                    if WalletCoreService.shared.getAllAccounts().isEmpty {
                        Coordinator.main.present(scene: .emptyWallet, transition: .replaceCurrentNavigation(tab: .wallet, animated: true))
                    }
                    maskUserDefaults.resetPasswordExpiryDate()

                default:
                    break
                }
            }
            .store(in: &disposeBag)
    }
    
    private func verifyWithFaceId() {
        LocalAuthentication.shared.evaluateBiometryID { [weak self] result, _ in
            guard let self = self else { return }
            if result {
                DispatchQueue.main.async {
                    self.handleConfirmClicked()
                    maskUserDefaults.resetPasswordExpiryDate()
                }
            } else {
                self.viewModel.isShowBioIDPage.value = false
            }
        }
    }
    
    @objc
    func onReturn() {
        view.endEditing(true)
    }
    
    @objc
    func onCancelBtnClicked() {
        self.dismiss(animated: true, completion: nil)
    }
    
    @objc
    func onDeleteAccountClicked() {
        guard maskUserDefaults.isPasswordExpried() else {
            self.handleConfirmClicked()
            os_log("%{public}s[%{public}ld], %{public}s: [payment-password] %@",
                   ((#file as NSString).lastPathComponent),
                   #line,
                   #function,
                   "The payment password is valid.")
            return
        }
        guard !self.viewModel.isShowBioIDPage.value else {
            self.verifyWithFaceId()
            return
        }
        
        vault.verifyWalletPassword(self.passwordTextField.text)
            .sink { result in
                if result {
                    self.handleConfirmClicked()
                } else {
                    self.viewModel.passwordError.value = true
                }
            }
            .store(in: &disposeBag)
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletDeleteViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let account = Account(context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
        let vc = WalletDeleteViewController(account: account)
        let width: CGFloat = 330
        let height: CGFloat = 473
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
