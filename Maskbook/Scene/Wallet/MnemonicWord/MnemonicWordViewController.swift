//
//  MnemonicViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class MnemonicViewController: BaseViewController {
    var disposeBag = Set<AnyCancellable>()
    
    let viewModel = MnemonicViewModel()
    
    let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH4
        label.text = L10n.Scene.MnemonicWord.description
        label.numberOfLines = 0
        return label
    }()
    
    let refreshButton: HitTestExpandedButton = {
        let button = HitTestExpandedButton(type: .custom)
        button.setImage(Asset.Images.Scene.Mnemonic.refresh.image, for: .normal)
        return button
    }()
    
    let collectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.scrollDirection = .vertical
        let view = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = .clear
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.layer.masksToBounds = false

        return view
    }()
    
    let verifyButton: UIButton = PrimeryButton(title: L10n.Common.Controls.verify)
}

extension MnemonicViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.largeTitleDisplayMode = .always
        navigationController?.navigationBar.prefersLargeTitles = true
        title = L10n.Scene.MnemonicWord.title
        setupCollectionView()
        
        verifyButton.addTarget(self, action: #selector(verifyAction(_:)), for: .touchUpInside)
        
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: 22.5, bottom: 32, right: 22.5)
        stackView.spacing = 26
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
        
        let horizontalStackView = UIStackView()
        horizontalStackView.axis = .horizontal
        horizontalStackView.alignment = .center
        horizontalStackView.distribution = .fill
        
        descriptionLabel.translatesAutoresizingMaskIntoConstraints = false
        horizontalStackView.addArrangedSubview(descriptionLabel)
        
        refreshButton.translatesAutoresizingMaskIntoConstraints = false
        horizontalStackView.addArrangedSubview(refreshButton)
        refreshButton.setContentHuggingPriority(.required - 1, for: .horizontal)
        
        stackView.addArrangedSubview(horizontalStackView)
        
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(collectionView)
        
        verifyButton.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(verifyButton)
        NSLayoutConstraint.activate([
            verifyButton.heightAnchor.constraint(equalToConstant: 48)
        ])
        
        refreshButton.addTarget(self, action: #selector(refreshMnemonic(_:)), for: .touchUpInside)
        
        viewModel.mnemonic
            .receive(on: DispatchQueue.main)
            .sink { [weak self] mnemonic in
                self?.verifyButton.isEnabled = !mnemonic.isEmpty
                self?.collectionView.reloadData()
            }
            .store(in: &disposeBag)
        
        viewModel.errorNotifier
            .receive(on: DispatchQueue.main)
            .sink { [weak self] error in
                self?.showErrorAlert(error: error)
            }
            .store(in: &disposeBag)

        viewModel.generateNewStoredKey()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        let alertController = AlertController(
            title: L10n.Common.Alert.RecoveryKeyTips.title,
            message: L10n.Common.Alert.RecoveryKeyTips.description,
            confirmButtonText: L10n.Common.Controls.ok,
            imageType: .warning
        )
        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
    }
    
    func setupCollectionView() {
        collectionView.delegate = self
        collectionView.dataSource = self
        collectionView.register(MnemonicWordCollectionCell.self)
    }
}

extension MnemonicViewController: UICollectionViewDelegate {}

extension MnemonicViewController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        viewModel.mnemonic.value.count
    }

    // swiftlint:disable force_cast
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: String(describing: MnemonicWordCollectionCell.self), for: indexPath) as! MnemonicWordCollectionCell
        cell.orderLabel.text = String(indexPath.row + 1)
        cell.wordLabel.text = viewModel.mnemonic.value[indexPath.row]
        return cell
    }
    // swiftlint:enable force_cast
}

extension MnemonicViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
        11
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        16
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        CGSize(width: (view.frame.width - 68) / 3, height: 48)
    }
}

extension MnemonicViewController {
    @objc func refreshMnemonic(_ sender: UIButton) {
        viewModel.generateNewStoredKey()
    }

    // swiftlint:disable force_cast
    @objc func verifyAction(_ sender: UIButton) {
        Coordinator.main.present(scene: .mnemonicVerify(name: viewModel.name, words: viewModel.mnemonic.value), transition: .detail(animated: true))
    }

    // swiftlint:enable force_cast
    
    func showErrorAlert(error: Error) {
        // FIXME: Present idiometic error infomration
        let alertController = AlertController(
            title: "Error",
            message: error.localizedDescription,
            confirmButtonText: L10n.Common.Controls.ok,
            imageType: .error
        )
        
        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
    }
    
    func showScreenShotWarning() {
        let alertController = AlertController(
            title: L10n.Common.Alert.RecoveryKeyWarning.title,
            message: L10n.Common.Alert.RecoveryKeyWarning.description,
            confirmButtonText: L10n.Common.Controls.iUnderstand,
            imageType: .warning
        )
        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
    }
}
