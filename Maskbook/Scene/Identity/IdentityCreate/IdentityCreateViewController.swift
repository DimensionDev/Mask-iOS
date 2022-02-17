//
//  IdentityVerifyViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/8/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
import UStack

final class IdentityCreateViewController: BaseViewController {
    var disposeBag = Set<AnyCancellable>()
    private var viewModel = IdentityCreateViewModel()
    
    let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH4
        label.text = L10n.Scene.IdentityCreate.description
        label.numberOfLines = 0
        return label
    }()
    
    let refreshButton: HitTestExpandedButton = {
        let button = HitTestExpandedButton(type: .custom)
        button.setImage(Asset.Images.Scene.Mnemonic.refresh.image, for: .normal)
        button.setContentHuggingPriority(.required - 1, for: .horizontal)
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
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.largeTitleDisplayMode = .always
        navigationController?.navigationBar.prefersLargeTitles = true
        title = L10n.Scene.IdentityCreate.title
        setupCollectionView()
        viewModel.generateIdentityCode()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        let alertController = AlertController(
            title: L10n.Common.Alert.IdentityPhrase.title,
            message: L10n.Common.Alert.IdentityPhrase.description,
            confirmButtonText: L10n.Common.Controls.ok,
            imageType: .warning
        )
        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
    }
    
    override func buildContent() {
        let stackView = VStackView(
            spacing: 16
        ) {
            HStackView(
                distribution: .fill,
                alignment: .center
            ) {
                descriptionLabel
                refreshButton
            }
            collectionView
            verifyButton
        }
        
        verifyButton.snp.makeConstraints { $0.height.equalTo(54) }
        
        view.withSubViews {
            stackView
        }
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: 22.5, bottom: 32, right: 22.5)
        stackView.snp.makeConstraints {
            $0.top.equalTo(view.layoutMarginsGuide)
            $0.leading.equalTo(view.snp.leading)
            $0.trailing.equalTo(view.snp.trailing)
            $0.bottom.equalTo(view.readableContentGuide)
        }
    }
    
    override func buildEvent() {
        refreshButton.cv.tap()
            .sink { [weak self] _ in
                self?.viewModel.generateIdentityCode()
            }
            .store(in: &disposeBag)
        
        verifyButton.cv.tap()
            .sink { [weak self] _ in
                self?.verifyAction()
            }
            .store(in: &disposeBag)
        
        viewModel.identity
            .receive(on: DispatchQueue.main)
            .sink { [weak self] identity in
                self?.verifyButton.isEnabled = !identity.isEmpty
                self?.collectionView.reloadData()
            }
            .store(in: &disposeBag)
        
        viewModel.errorNotifier
            .receive(on: DispatchQueue.main)
            .sink { [weak self] error in
                self?.showErrorAlert(error: error)
            }
            .store(in: &disposeBag)
    }
    
    func setupCollectionView() {
        collectionView.delegate = self
        collectionView.dataSource = self
        collectionView.register(MnemonicWordCollectionCell.self)
    }
}

extension IdentityCreateViewController: UICollectionViewDelegate {}

extension IdentityCreateViewController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        viewModel.identity.value.count
    }

    // swiftlint:disable force_cast
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: String(describing: MnemonicWordCollectionCell.self), for: indexPath) as! MnemonicWordCollectionCell
        cell.orderLabel.text = String(indexPath.row + 1)
        cell.wordLabel.text = viewModel.identity.value[indexPath.row]
        return cell
    }
}

extension IdentityCreateViewController: UICollectionViewDelegateFlowLayout {
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

extension IdentityCreateViewController {
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
            title: L10n.Common.Alert.IdentifyCodeScreenshotWarning.title,
            message: L10n.Common.Alert.IdentifyCodeScreenshotWarning.description,
            confirmButtonText: L10n.Common.Controls.iUnderstand,
            imageType: .warning
        )
        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
    }

    func verifyAction() {
        Coordinator.main.present(scene: .identityVerify(words: viewModel.identity.value), transition: .detail(animated: true))
    }
}
