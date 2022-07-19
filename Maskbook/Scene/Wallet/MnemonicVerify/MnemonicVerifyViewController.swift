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
import UStack

class MnemonicVerifyViewController: BaseViewController {

    @InjectedProvider(\.vault)
    private var vault
    private var vaultSubsription = Set<AnyCancellable>()
    
    private var disposeBag = Set<AnyCancellable>()
    
    let viewModel = MnemonicVerifyViewModel()
    
    private lazy var mnemonicPromptLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Public.error.color
        label.text = L10n.Scene.MnemonicVerify.mnemonicError
        label.textAlignment = .left
        return label
    }()
    
    private lazy var wordTitleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.RH4
        label.textColor = Asset.Colors.Text.normal.color
        label.text = L10n.Scene.MnemonicVerify.wordsTitle
        label.textAlignment = .left
        return label
    }()
    
    private lazy var wordsCollectionContainer: UIView = {
        let view = UIView()
        view.layer.addSublayer(backgroundLayer)
        view.withSubViews {
            wordsCollectionView
        }
        view.applyCornerRadius(radius: 8)
        NSLayoutConstraint.activate([
            wordsCollectionView.topAnchor.constraint(equalTo: view.topAnchor, constant: 16),
            wordsCollectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            wordsCollectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
            wordsCollectionView.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -16),
        ])
        return view
    }()
    
    private lazy var wordsCollectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.scrollDirection = .vertical
        let view = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = .clear
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.layer.masksToBounds = false

        return view
    }()
    
    lazy var wordsCollectionViewDataSource = MnemonicVerifyWordCollectionDataSource(viewModel: viewModel)
    
    private lazy var verifyCollectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.scrollDirection = .vertical
        let view = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = .clear
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.layer.masksToBounds = false

        return view
    }()
    
    lazy var verifyCollectionViewDataSource = MnemonicNeedVerifyDataSource(viewModel: viewModel)
    
    private lazy var confirmButton: UIButton = PrimeryButton(title: L10n.Common.Controls.confirm)
    
    
    private lazy var backgroundLayer: CAGradientLayer = {
        let layer = CAGradientLayer()
        layer.colors = [
            Asset.Colors.Gradient.mnemonicVerify1.color.cgColor,
//            Asset.Colors.Gradient.mnemonicVerify2.color.cgColor,
//            Asset.Colors.Gradient.mnemonicVerify3.color.cgColor,
            Asset.Colors.Gradient.mnemonicVerify4.color.cgColor,
        ]
        layer.locations = [0, 1]
        layer.startPoint = CGPoint(x: 0, y: 0)
        layer.endPoint = CGPoint(x: 1, y: 1)
        return layer
    }()
}

extension MnemonicVerifyViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        title = L10n.Scene.MnemonicVerify.title
        setupCollectionView()
        setupSubviews()
        subscribeViewModel()
        confirmButton.addTarget(self, action: #selector(confirmAction(_:)), for: .touchUpInside)
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        backgroundLayer.frame = wordsCollectionContainer.bounds
    }
    
    func subscribeViewModel() {

        viewModel.mnemonicError
            .receive(on: DispatchQueue.main)
            .sink { [weak self] mnemonicError in
                guard let self = self else { return }
                if mnemonicError {
                    self.viewModel.selectedWords.value = []
                }
                self.mnemonicPromptLabel.alpha = mnemonicError ? 1 : 0
            }
            .store(in: &disposeBag)
        
        viewModel.selectedWords
            .receive(on: DispatchQueue.main)
            .sink { [weak self] words in
                self?.confirmButton.isEnabled = words.count == 3
                self?.wordsCollectionView.reloadData()
                self?.verifyCollectionView.reloadData()
            }
            .store(in: &disposeBag)
    }
    
    func setupCollectionView() {
        wordsCollectionView.delegate = wordsCollectionViewDataSource
        wordsCollectionView.dataSource = wordsCollectionViewDataSource
        wordsCollectionView.register(MnemonicVerifyWordCollectionCell.self)
        
        verifyCollectionView.delegate = verifyCollectionViewDataSource
        verifyCollectionView.dataSource = verifyCollectionViewDataSource
        verifyCollectionView.register(MnemonicVerifyWordCollectionCell.self)
    }
    
    func setupSubviews() {
        let stackView = VStackView(spacing: 12,
                                   distribution: .fill,
                                   alignment: .fill) {
            wordTitleLabel
            UStack.Spacer(height: 80, width: nil)
            wordsCollectionContainer
            mnemonicPromptLabel
            verifyCollectionView
            UStack.Spacer()
            confirmButton
        }
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 0,
                                               left: LayoutConstraints.leading,
                                               bottom: 32,
                                               right: LayoutConstraints.trailing)
        view.withSubViews {
            stackView
        }
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
        NSLayoutConstraint.activate([
            wordsCollectionContainer.heightAnchor.constraint(equalToConstant: 190),
            confirmButton.heightAnchor.constraint(equalToConstant: 54)
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
