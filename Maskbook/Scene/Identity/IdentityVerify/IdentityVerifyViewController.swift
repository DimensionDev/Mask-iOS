//
//  IdentityVerifyViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/9.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class IdentityVerifyViewController: BaseViewController {
    static let flowItemSize = CGSize(width: 180, height: 120)

    private var vaultSubsription = Set<AnyCancellable>()
    
    var disposeBag = Set<AnyCancellable>()
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    let viewModel = IdentityVerifyViewModel()
    
    let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH4
        label.text = L10n.Scene.IdentifyVerify.description
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
        label.text = L10n.Scene.IdentifyVerify.identityError
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

extension IdentityVerifyViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        title = L10n.Scene.IdentifyVerify.title
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
            progressStackView.centerYAnchor.constraint(equalTo: horizontalCollectionView.frameLayoutGuide.centerYAnchor, constant: IdentityVerifyViewController.flowItemSize.height / 2 + 24)
        ])
        
        progressLabel.translatesAutoresizingMaskIntoConstraints = false
        progressStackView.addArrangedSubview(progressLabel)
        
        totalCountLabel.translatesAutoresizingMaskIntoConstraints = false
        progressStackView.addArrangedSubview(totalCountLabel)
        
        mnemonicPromptLabel.translatesAutoresizingMaskIntoConstraints = false
        horizontalCollectionView.addSubview(mnemonicPromptLabel)
        NSLayoutConstraint.activate([
            mnemonicPromptLabel.centerXAnchor.constraint(equalTo: horizontalCollectionView.frameLayoutGuide.centerXAnchor),
            mnemonicPromptLabel.centerYAnchor.constraint(equalTo: horizontalCollectionView.frameLayoutGuide.centerYAnchor, constant: IdentityVerifyViewController.flowItemSize.height / 2 + 58)
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
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: 22.5, bottom: 32, right: 22.5)
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

extension IdentityVerifyViewController {
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
        saveIdentity()
    }

    private func saveIdentity() {
        if let name = personaManager.temporaryPersonaName {
            PersonaManager.createPersona(nickname: name, mnemonic: self.viewModel.words.joined(separator: " "))
                .fireAndIgnore()
                .store(in: &disposeBag)
        }
        let alertController = AlertController(
            title: L10n.Common.Alert.IdentityCreate.title,
            message: L10n.Common.Alert.IdentityCreate.description,
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .success,
            confirmButtonClicked: { [weak self] _ in
                guard let self = self else { return }
                self.gotoNextPage()
            }
        )
        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
    }
    
    private func gotoNextPage() {
        if personaManager.temporaryPersonaName != nil {
            self.personaManager.temporaryPersonaName = nil
            self.navigationController?.popToRootViewController(animated: true)
        } else {
            Coordinator.main.present(scene: .personaWelcome(words: self.viewModel.words), transition: .detail(animated: true))
        }
    }
}
