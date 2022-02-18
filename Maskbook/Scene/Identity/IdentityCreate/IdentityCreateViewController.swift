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
    
    private lazy var descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH4
        label.text = L10n.Scene.IdentityCreate.description
        label.numberOfLines = 0
        return label
    }()
    
    private lazy var refreshButton: HitTestExpandedButton = {
        let button = HitTestExpandedButton(type: .custom)
        button.setImage(Asset.Images.Scene.Mnemonic.refresh.image, for: .normal)
        button.setContentHuggingPriority(.required - 1, for: .horizontal)
        return button
    }()
    
    private lazy var collectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.scrollDirection = .vertical
        let view = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = .clear
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.layer.masksToBounds = false

        return view
    }()
    
    private lazy var downloadButton: UIButton = PrimeryButton(title: L10n.Common.Controls.download)
    
    private lazy var skipButton: UIButton = SecondaryButton(title: L10n.Common.Controls.skip)
    
    private lazy var nextButton: UIButton = PrimeryButton(title: L10n.Common.Controls.downloadNext)
    
    private lazy var iconImageView = UIImageView(image: Asset.Images.Scene.Social.connectHintBannerIcon.image)
    
    private lazy var tipsLabel: UILabel = {
        let label = UILabel()
        label.numberOfLines = 0
        label.font = FontStyles.RH7
        label.textColor = Asset.Colors.Public.blue.color
        label.text = L10n.Scene.IdentityCreate.identityTips
        return label
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.largeTitleDisplayMode = .always
        navigationController?.navigationBar.prefersLargeTitles = true
        title = L10n.Scene.IdentityCreate.title
        setupCollectionView()
        viewModel.generateIdentityCode()
        nextButton.isHidden = true
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
        let hstack = HStackView(spacing: 10) {
            iconImageView
                .cv.apply {
                    $0.snp.makeConstraints {
                        $0.height.equalTo(24)
                        $0.width.equalTo(24)
                    }
                }
            tipsLabel
        }
        
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
                .cv.apply {
                    $0.snp.makeConstraints {
                        $0.height.equalTo(240)
                    }
                }
            hstack
            UStack.Spacer()
            downloadButton
            skipButton
            nextButton
        }
        
        downloadButton.snp.makeConstraints { $0.height.equalTo(54) }
        skipButton.snp.makeConstraints { $0.height.equalTo(54) }
        nextButton.snp.makeConstraints { $0.height.equalTo(54) }
        
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
        
        downloadButton.cv.tap()
            .sink { [weak self] _ in
                self?.downloadAction()
            }
            .store(in: &disposeBag)
        
        skipButton.cv.tap()
            .sink { [weak self] _ in
                self?.skipAction()
            }
            .store(in: &disposeBag)
        
        nextButton.cv.tap()
            .sink { [weak self] _ in
                self?.nextAction()
            }
            .store(in: &disposeBag)
          
        viewModel.identity
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
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
    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumInteritemSpacingForSectionAt section: Int) -> CGFloat
    {
        11
    }
    
    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumLineSpacingForSectionAt section: Int) -> CGFloat
    {
        16
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        sizeForItemAt indexPath: IndexPath) -> CGSize
    {
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
    
    func downloadAction() {
        viewModel.personaDownloadHandler = PersonaDownloadHandler(mnemonic: viewModel.identity.value)
        viewModel.personaDownloadHandler?.downloadAction()
        nextButton.isHidden = false
        skipButton.isHidden = true
    }
    
    func nextAction() {
        if let name = viewModel.personaManager.temporaryPersonaName {
            viewModel.personaManager.temporaryPersonaName = nil
            viewModel.personaCreateHandler.createPersona(name: name, mnemonic: viewModel.identity.value.joined(separator: " "))
        }
    }
    
    func skipAction() {
        if let name = viewModel.personaManager.temporaryPersonaName {
            viewModel.personaManager.temporaryPersonaName = nil
            viewModel.personaCreateHandler.createPersona(name: name, mnemonic: viewModel.identity.value.joined(separator: " "))
        }
    }
}
