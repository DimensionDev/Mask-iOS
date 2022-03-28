//
//  MnemonicVerifyViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class MnemonicVerifyViewController: BaseViewController {
    static let flowItemSize = CGSize(width: 180, height: 120)

    @InjectedProvider(\.vault)
    private var vault
    private var vaultSubsription = Set<AnyCancellable>()
    
    var disposeBag = Set<AnyCancellable>()
    
    let viewModel = MnemonicVerifyViewModel()
    
    let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH4
        label.text = L10n.Scene.MnemonicVerify.description
        label.numberOfLines = 0
        return label
    }()

    let horizontalCollectionView: UICollectionView = {
        let flowLayout = MnemonicVerifyCollectionFlowLayout()
        flowLayout.scrollDirection = .horizontal
        let view = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = .clear
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.layer.masksToBounds = false
        view.clipsToBounds = true
        return view
    }()
    
    lazy var horizontalDataSource: MnemonicVerifyFlowCollectionDataSource = {
        let dataSource = MnemonicVerifyFlowCollectionDataSource(viewModel: viewModel)
        return dataSource
    }()
    
    let progressLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Public.blue.color
        label.textAlignment = .right
        return label
    }()
    
    let totalCountLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        return label
    }()

    let mnemonicPromptLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Public.error.color
        label.text = L10n.Scene.MnemonicVerify.mnemonicError
        label.textAlignment = .center
        return label
    }()
    
    let wordTitleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.MnemonicVerify.wordsTitle
        return label
    }()
    
    let wordsCollectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.scrollDirection = .vertical
        let view = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = .clear
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.layer.masksToBounds = false

        return view
    }()
    
    lazy var wordsCollectionViewDataSource: MnemonicVerifyWordCollectionDataSource = {
        let dataSource = MnemonicVerifyWordCollectionDataSource(viewModel: viewModel)
        return dataSource
    }()
    
    let confirmButton: UIButton = PrimeryButton(title: L10n.Common.Controls.confirm)
    
    let clearButton: UIButton = SecondaryButton(title: L10n.Common.Controls.clear)
}

extension MnemonicVerifyViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        title = L10n.Scene.MnemonicVerify.title
        setupWordCollectionView()
        setupHorizontalCollectionView()
        setupSubviews()
        subscribeViewModel()
        confirmButton.addTarget(self, action: #selector(confirmAction(_:)), for: .touchUpInside)
        clearButton.addTarget(self, action: #selector(clearAction(_:)), for: .touchUpInside)
        totalCountLabel.text = "/\(viewModel.words.count)"
    }
    
    func subscribeViewModel() {
        viewModel.selectedWords
            .receive(on: DispatchQueue.main)
            .sink { [weak self] words in
                guard let self = self else { return }
                self.wordsCollectionView.reloadData()
                self.horizontalCollectionView.reloadData()
                let index = max(words.count - 1, 0)
                self.progressLabel.text = "\(words.count)"
                let indexPath = IndexPath(row: index, section: 0)
                self.horizontalCollectionView.scrollToItem(at: indexPath, at: .centeredHorizontally, animated: true)
                if words.count == self.viewModel.words.count {
                    self.wordsCollectionView.isHidden = true
                    self.confirmButton.isHidden = false
                    self.clearButton.isHidden = false
                } else {
                    self.wordsCollectionView.isHidden = false
                    self.confirmButton.isHidden = true
                    self.clearButton.isHidden = true
                }
            }
            .store(in: &disposeBag)
        
        viewModel.mnemonicError
            .receive(on: DispatchQueue.main)
            .sink { [weak self] mnemonicError in
                guard let self = self else { return }
                if mnemonicError == true {
                    self.confirmButton.isEnabled = false
                    self.mnemonicPromptLabel.text = L10n.Scene.MnemonicVerify.mnemonicError
                    self.mnemonicPromptLabel.textColor = Asset.Colors.Public.error.color
                } else {
                    self.confirmButton.isEnabled = true
                    self.mnemonicPromptLabel.text = L10n.Scene.MnemonicVerify.mnemonicPrompt
                    self.mnemonicPromptLabel.textColor = Asset.Colors.Public.warnings.color
                }
            }
            .store(in: &disposeBag)
    }

    func setupHorizontalCollectionView() {
        horizontalCollectionView.delegate = horizontalDataSource
        horizontalCollectionView.dataSource = horizontalDataSource
        horizontalCollectionView.register(MnemonicVerifyFlowCollectionCell.self)
        
        let progressStackView = UIStackView()
        progressStackView.axis = .horizontal
        progressStackView.distribution = .fillEqually
        progressStackView.translatesAutoresizingMaskIntoConstraints = false
        horizontalCollectionView.addSubview(progressStackView)
        NSLayoutConstraint.activate([
            progressStackView.centerXAnchor.constraint(equalTo: horizontalCollectionView.frameLayoutGuide.centerXAnchor),
            progressStackView.centerYAnchor.constraint(equalTo: horizontalCollectionView.frameLayoutGuide.centerYAnchor, constant: MnemonicVerifyViewController.flowItemSize.height / 2 + 24)
        ])
        
        progressLabel.translatesAutoresizingMaskIntoConstraints = false
        progressStackView.addArrangedSubview(progressLabel)
        
        totalCountLabel.translatesAutoresizingMaskIntoConstraints = false
        progressStackView.addArrangedSubview(totalCountLabel)
        
        mnemonicPromptLabel.translatesAutoresizingMaskIntoConstraints = false
        horizontalCollectionView.addSubview(mnemonicPromptLabel)
        NSLayoutConstraint.activate([
            mnemonicPromptLabel.centerXAnchor.constraint(equalTo: horizontalCollectionView.frameLayoutGuide.centerXAnchor),
            mnemonicPromptLabel.centerYAnchor.constraint(equalTo: horizontalCollectionView.frameLayoutGuide.centerYAnchor, constant: MnemonicVerifyViewController.flowItemSize.height / 2 + 58)
        ])
    }
    
    func setupWordCollectionView() {
        wordsCollectionView.delegate = wordsCollectionViewDataSource
        wordsCollectionView.dataSource = wordsCollectionViewDataSource
        wordsCollectionView.register(MnemonicVerifyWordCollectionCell.self, forCellWithReuseIdentifier: String(describing: MnemonicVerifyWordCollectionCell.self))
    }
    
    func setupSubviews() {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: LayoutConstraints.leading, bottom: 32, right: LayoutConstraints.trailing)
        stackView.spacing = 24
        stackView.distribution = .fill
        view.addSubview(stackView)
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(stackView)
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: view.layoutMarginsGuide.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
        
        descriptionLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(descriptionLabel)
        descriptionLabel.setContentHuggingPriority(.required - 1, for: .vertical)

        horizontalCollectionView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(horizontalCollectionView)

        wordTitleLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(wordTitleLabel)
        
        wordsCollectionView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(wordsCollectionView)
        NSLayoutConstraint.activate([
            wordsCollectionView.heightAnchor.constraint(equalToConstant: 124).priority(.defaultLow)
        ])
        
        confirmButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(confirmButton)
        confirmButton.isHidden = true
        
        stackView.setCustomSpacing(16, after: confirmButton)
        
        clearButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(clearButton)
        clearButton.isHidden = true
        
        NSLayoutConstraint.activate([
            confirmButton.heightAnchor.constraint(equalToConstant: 54),
            clearButton.heightAnchor.constraint(equalToConstant: 54)
        ])
    }
}

extension MnemonicVerifyViewController {
    @objc
    func clearAction(_ sender: UIButton) {
        viewModel.selectedWords.value = [String]()
        viewModel.mnemonicError.value = false
    }

    @objc
    func confirmAction(_ sender: UIButton) {
        viewModel.validateSelectedWords()
        guard !viewModel.mnemonicError.value else {
            return
        }
        vaultSubsription.removeAll()
        vault.getWalletPassword()
            .compactMap { $0 }
            .sink(receiveCompletion: { _ in }) { [weak self] password in
                self?.createAccount(with: password)
            }
            .store(in: &vaultSubsription)
    }

    private func createAccount(with password: String) {
        let result = WalletCoreService.shared.createAccount(
            param: .mnemonic(mnemonic: self.viewModel.words.joined(separator: " ").lowercased(), pathIndex: 0),
            name: self.viewModel.name ?? "",
            password: password,
            chainType: maskUserDefaults.network.chain,
            isImported: false
        )
        switch result {
        case .success:
            let alertController = AlertController(
                title: L10n.Common.Alert.WalletCreateSuccess.title,
                message: L10n.Common.Alert.WalletCreateSuccess.description,
                confirmButtonText: L10n.Common.Controls.done,
                imageType: .success,
                confirmButtonClicked: { _ in
                    Coordinator.main.present(scene: .balance, transition: .replaceCurrentNavigation(tab: .wallet, animated: true))
                }
            )
            Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))

        case .failure(let error):
            let alertController = AlertController(title: error.localizedDescription, message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error)
            Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
        }
    }
}

enum VaultInjectValueKey: InjectValueKey {
    static var defaultInjectValue = Vault.shared
}

extension InjectValues {
    var vault: Vault {
        Self[VaultInjectValueKey.self]
    }
}
