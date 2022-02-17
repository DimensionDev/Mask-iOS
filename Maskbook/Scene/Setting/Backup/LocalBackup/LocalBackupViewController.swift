//
//  LocalBackupViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CombineEvent
import Foundation
import IQKeyboardManagerSwift
import OSLog
import UIKit
import UStack

class LocalBackupViewController: BaseViewController {
    typealias ViewModelType = LocalBackupViewModel
    
    @InjectedProvider(\.vault)
    private var vault
    
    lazy var scrollView: UIScrollView = {
        let view = UIScrollView()
        view.addSubview(vStack)
        view.alwaysBounceVertical = true
        
        vStack.snp.makeConstraints {
            $0.edges.equalToSuperview()
            $0.width.equalTo(view)
        }
        return view
    }()
    
    lazy var vStack: UIStackView = {
        let view = UIStackView()
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 24, left: 22, bottom: 16, right: 22)
        view.axis = .vertical
        view.spacing = 16
        view.alignment = .fill
        
        view.addArrangedSubview(infoStackView)
        view.addArrangedSubview(localWalletStackView)
        view.addArrangedSubview(backupPasswordFormItem)
        view.addArrangedSubview(paymentPasswordFormItem)

        return view
    }()
    
    // MARK: infomation
    lazy var infoStackView: UIStackView = {
        let view = UIStackView()
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = .init(all: 16)
        view.axis = .vertical
        view.spacing = 16
        view.alignment = .fill
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.applyCornerRadius(radius: 20)
        
        return view
    }()
    
    // MARK: local wallet
    private lazy var localWalletStackView = HStackView(spacing: 10, alignment: .center) {
        checkbox
        localWalletLabel
        walletNumLabel
    }

    lazy var checkbox: UIButton = {
        let button = HitTestExpandedButton()
        button.setImage(Asset.Images.Scene.WalletList.unchecked.image, for: .normal)
        button.setImage(Asset.Images.Scene.WalletList.check.image, for: .selected)

        button.snp.makeConstraints {
            $0.size.equalTo(24)
        }
        return button
    }()

    lazy var localWalletLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.Setting.LocalBackup.localWallet
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        label.setContentCompressionResistancePriority(.defaultLow, for: .horizontal)
        label.setContentCompressionResistancePriority(.required, for: .vertical)
        return label
    }()

    fileprivate var walletNumLabel = UILabel().cv.apply { label in
        label.font = FontStyles.BH6
        label.textColor = Asset.Colors.Text.dark.color
        label.setContentCompressionResistancePriority(.required, for: .horizontal)
    }
    
    // MARK: backup password
    lazy var backupPasswordFormItem: PasswordFormItemView = {
        let view = PasswordFormItemFactory.createBackupFormItem()
        return view
    }()

    lazy var paymentPasswordFormItem: PasswordFormItemView = {
        let view = PasswordFormItemFactory.createPaymentFormItem()
        view.passwordTitleLabel.text = L10n.Scene.SetPassword.paymentPassword
        return view
    }()
    
    // MARK: backup button
    lazy var backupButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Common.Controls.backUp)
        btn.snp.makeConstraints {
            $0.height.equalTo(54)
        }
        return btn
    }()
    
    let loadingViewController = LoadingWithTextController(title: nil)
    
    // MARK: Data
    var disposeBag = Set<AnyCancellable>()
    let viewModel: ViewModelType
    var keyboardManagerEnabled = IQKeyboardManager.shared.enable
    
    @InjectedProvider(\.userDefaultSettings)
    var settings

    private let localBackupURL = PassthroughSubject<URL, Never>()
    
    init(type: ViewModelType.BackupType, cloudVerifyResult: CloudVerifyResult?) {
        viewModel = ViewModelType(type: type, cloudVerifyResult: cloudVerifyResult)
        
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

extension LocalBackupViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.title = viewModel.backupType.title
        self.navigationController?.navigationBar.prefersLargeTitles = true
        
        setupUI()
        bindActions()
        bindViewModel()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        if !backupPasswordFormItem.passwordTextField.isHidden {
            IQKeyboardManager.shared.enable = true
        }
        self.navigationController?.navigationBar.prefersLargeTitles = false
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        if !backupPasswordFormItem.passwordTextField.isHidden {
            IQKeyboardManager.shared.enable = keyboardManagerEnabled
        }
    }
    
    private func setupUI() {
        view.addSubview(scrollView)
        view.addSubview(backupButton)
        
        let safeBottom = view.safeAreaInsets.bottom
        scrollView.contentInset = UIEdgeInsets(top: 0, left: 0, bottom: 54 + 24 + safeBottom, right: 0)
        scrollView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
        
        backupButton.snp.makeConstraints {
            $0.bottom.equalTo(-24)
            $0.leading.equalTo(22)
            $0.trailing.equalTo(-22)
        }
        
        view.addSubview(loadingViewController.view)
        loadingViewController.view.snp.makeConstraints { make in
            make.edges.equalToSuperview()
        }
        loadingViewController.view.isHidden = true
        loadingViewController.dissmissOnTap = false
    }
    
    private func buildInfoRow(title: String, value: String) -> UIStackView {
        let row = UIStackView()
        row.axis = .horizontal
        row.distribution = .equalCentering
        
        let titleLabel = UILabel()
        titleLabel.font = FontStyles.MH6
        titleLabel.textColor = Asset.Colors.Text.dark.color
        titleLabel.text = title
        titleLabel.setContentCompressionResistancePriority(.defaultLow, for: .horizontal)
        titleLabel.setContentHuggingPriority(.defaultLow, for: .horizontal)
        
        let valueLabel = UILabel()
        valueLabel.font = FontStyles.BH5
        valueLabel.textColor = Asset.Colors.Text.dark.color
        valueLabel.text = value
        valueLabel.lineBreakMode = .byTruncatingMiddle
        
        row.addArrangedSubview(titleLabel)
        row.addArrangedSubview(valueLabel)
        
        return row
    }
    
    private func bindActions() {
        backupButton.publisher(for: .touchUpInside)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else {
                    return
                }
                // ensure both backup password and payment password get verifyed
                self.ensurePasswordsVerified()
            }
            .store(in: &disposeBag)

       let backPasswordSignal = backupPasswordFormItem
            .viewModel
            .passwordError
            .map { $0.isVerifyed }

        let walletPasswordSignal = paymentPasswordFormItem
            .viewModel
            .passwordError
            .map { $0.isVerifyed }

        Publishers.CombineLatest(
            backPasswordSignal,
            walletPasswordSignal
        )
        .asDriver()
        .throttle(for: 0.3, scheduler: DispatchQueue.main, latest: true)
        .map { [weak self] backupVerified, paymentVerified -> Bool in
            guard let self = self else { return false }
            if self.viewModel.backupWallet {
                return backupVerified && paymentVerified
            } else {
                return backupVerified
            }
        }
        .sink { [weak self] verified in
            guard let self = self else { return }
            guard verified else {
                return
            }
            self.backup()
        }
        .store(in: &disposeBag)

        view.gesture()
            .sink { [weak self] _ in
                self?.view.endEditing(true)
            }
            .store(in: &disposeBag)

        checkbox.cv.publisher(on: .touchUpInside)
            .sink { [weak self] button in
                guard let self = self else { return }
                if !button.isSelected {
                    guard self.viewModel.hasPaymentpassword() else {
                        Coordinator.main.present(
                            scene: .setPassword,
                            transition: .panModel()
                        )
                        return
                    }
                    button.isSelected.toggle()
                } else {
                    button.isSelected.toggle()
                }
            }
            .store(in: &disposeBag)

        checkbox.publisher(for: \.isSelected)
            .sink { [weak self] walletInfoSelected in
                guard let self = self else { return }
                var backupData = self.viewModel.backupData.value
                backupData.walletsSelected = walletInfoSelected
                self.viewModel.backupData.accept(backupData)
            }
            .store(in: &disposeBag)

        backupPasswordFormItem.passwordTextField.addTarget(self, action: #selector(onReturn), for: .primaryActionTriggered)
    }
    
    @objc
    func onReturn() {
        view.endEditing(true)
    }

    private func ensurePasswordsVerified() {
        self.backupPasswordFormItem.verify {}
        // verify paymentpassword when wallet is selected
        if self.viewModel.backupData.value.walletsSelected {
            self.paymentPasswordFormItem.verify {}
        }
    }

    private func backup() {
        switch self.viewModel.backupType {
        case .local: self.selectDestinationFolder()
        // get the code first then upload backup data to the server
        case .remote: self.backupRemotely()
        }
    }
    
    private func bindViewModel() {
        viewModel.prepareBackup()
        viewModel.previewPublisher.sink { [weak self] result in
            guard let previewJSON = result?.result?.dictionary else { return }
            let util = BackupPreviewFormatter()
            let items = util.previewItems(of: previewJSON)
            for item in items {
                if let item = self?.buildInfoRow(title: item.0, value: item.1) {
                    self?.infoStackView.addArrangedSubview(item)
                }
            }
        }
        .store(in: &disposeBag)
        
        viewModel.$loading
            .receive(on: DispatchQueue.main)
            .sink { [weak self] state in
                switch state {
                case .loading(text: let text):
                    self?.loadingViewController.textLabel.text = text
                    self?.loadingViewController.view.isHidden = false

                case .idle:
                    self?.loadingViewController.view.isHidden = true
                }
            }
            .store(in: &disposeBag)

        prepareBackupDataSignal()

        paymentPasswordFormItem
            .passwordTextField
            .cv.textPublisher()
            .bind(to: \.viewModel.paymentPassword, on: self)
            .store(in: &disposeBag)

        bindWritingDataToLocalSignal()
    }

    private func prepareBackupDataSignal() {
        let backData = viewModel
            .backupData
            .share()

        backData
            .map { $0.isWalletEmpty }
            .receive(on: DispatchQueue.main)
            .sink { [weak self] hideWallets in
                self?.localWalletStackView.isHidden = hideWallets
            }
            .store(in: &disposeBag)

        backData
            .map { !$0.walletsSelected }
            .receive(on: DispatchQueue.main)
            .assign(to: \.paymentPasswordFormItem.isHidden, on: self)
            .store(in: &disposeBag)

        backData
            .map { "\($0.nativeWalletsCount)" }
            .receive(on: DispatchQueue.main)
            .assign(to: \.walletNumLabel.text, on: self)
            .store(in: &disposeBag)
    }

    private func bindWritingDataToLocalSignal() {
        localBackupURL
            .compactMap { $0 }
            .eraseToAnyPublisher()
            .receive(on: DispatchQueue.global())
            .map { url -> (URL, URL) in
                let formatter = DateFormatter()
                formatter.dateFormat = "yyyy-MM-dd"
                let date = formatter.string(from: Date())
                let fileName = "maskbook-keystore-backup-\(date).bin"
                let destURL = url.appendingPathComponent(fileName)
                return (url, destURL)
            }
            .flatMap { [weak self] originURL, fileURL -> AnyPublisher<(Result<Void, Error>, URL), Never> in
                guard let self = self else {
                    return Empty().eraseToAnyPublisher()
                }
                return Publishers.CombineLatest(
                    self.viewModel.writeDataTo(url: fileURL)
                        .map { Result<Void, Error>.success($0) }
                        .replaceError(with: .failure(LocalBackupViewModel.WriteBackupError.fail)),
                    Just(originURL)
                )
                .map { ($0, $1) }
                .eraseToAnyPublisher()
            }
            .receive(on: DispatchQueue.main)
            .sink { [weak self] result, url in
                defer {
                    url.stopAccessingSecurityScopedResource()
                    self?.viewModel.loading = .idle
                }

                switch result {
                case .success: self?.showSuccess()
                case let .failure(error): self?.showFailure(error: error)
                }
            }
            .store(in: &disposeBag)
    }

    private func selectDestinationFolder() {
        // Create a document picker for directories.
        let documentPicker: UIDocumentPickerViewController = {
            if #available(iOS 15.0, *) {
                return UIDocumentPickerViewController(forOpeningContentTypes: [.folder])
            } else {
                return UIDocumentPickerViewController(documentTypes: ["public.folder"], in: .open)
            }
        }()
        documentPicker.delegate = self
        present(documentPicker, animated: true, completion: nil)
    }

    private func canBackup() -> Bool {
        // start back up when backuppassword is verifyed
        // when wallet box is selected check payment password
        // otherwise only check backup password
        viewModel.backupWallet
        ? paymentPasswordFormItem.passwordVerifyed && backupPasswordFormItem.passwordVerifyed
        : backupPasswordFormItem.passwordVerifyed
    }
    
    private func showSuccess() {
        let alertController = AlertController(
            title: L10n.Common.Alert.LocalBackup.backupCompleted,
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .success,
            confirmButtonClicked: { [weak self] _ in
                self?.navigationController?.popViewController(animated: true)
            }
        )
        
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
        
        settings.backupDate = Date()
    }
    
    private func showFailure(error: Error) {
        let alertController = AlertController(
            title: L10n.Common.Alert.LocalBackup.backupFailed,
            confirmButtonText: L10n.Common.Controls.ok,
            imageType: .error
        )
        
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }
    
    private func backupRemotely() {
        self.viewModel.loading = .loading(text: L10n.Scene.Setting.LocalBackup.loadingText)
        self.viewModel.backupRemotely()
            .receive(on: RunLoop.main)
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.viewModel.loading = .idle
                    switch completion {
                    case .finished: self?.showSuccess()
                    case let .failure(error): self?.showFailure(error: error)
                    }
                },
                receiveValue: {}
            )
            .store(in: &self.disposeBag)
    }
}

extension LocalBackupViewController: UIDocumentPickerDelegate {
    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentAt url: URL) {
        // Start accessing a security-scoped resource.
        guard url.startAccessingSecurityScopedResource() else {
            // Handle the failure here.
            return
        }
        
        // Make sure you release the security-scoped resource when you finish.
        defer {
            viewModel.loading = .loading(text: L10n.Scene.Setting.LocalBackup.loadingText)
        }

        // avoid heavy work here
        // just trigger url signal to excute the rest logic
        localBackupURL.send(url)
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct LocalBackupViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let vc = LocalBackupViewController(type: .local, cloudVerifyResult: nil)
                return vc.view ?? UIView()
            }
            .previewLayout(.fixed(width: 375, height: 812))
        }
    }
}
#endif
