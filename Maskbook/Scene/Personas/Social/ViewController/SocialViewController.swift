//
//  SocialViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
import UStack
import CoreDataStack

class SocialViewController: BaseViewController {
    private var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.personaManager)
    private var personaManager
    
    @InjectedProvider(\.userDefaultSettings)
    var userSetting

    @InjectedProvider(\.mainCoordinator)
    private var coordinator: Coordinator

    private lazy var editButton: UIButton = {
        let button = HitTestExpandedButton(type: .custom)
        button.setImage(Asset.Images.Scene.Personas.edit.image, for: .normal)
        button.setImage(Asset.Images.Scene.Personas.done.image, for: .selected)
        NSLayoutConstraint.activate([
            button.heightAnchor.constraint(equalToConstant: 24),
            button.widthAnchor.constraint(equalToConstant: 48)
        ])
        return button
    }()

    lazy var collectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.scrollDirection = .vertical
        let view = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = .clear
        view.translatesAutoresizingMaskIntoConstraints = false
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        return view
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        setupCollectionView()
        subscribeSignal()
    }

    func setupCollectionView() {
        collectionView.delegate = self
        collectionView.dataSource = self
        collectionView.register(SocialAccountCollectionCell.self)
        collectionView.register(SocialAccountAddCollectionCell.self)
        collectionView.allowsMultipleSelection = false
        collectionView.allowsSelectionDuringEditing = false
        let header = headerView()
        view.withSubViews {
            header
            collectionView
        }
        NSLayoutConstraint.activate([
            header.topAnchor.constraint(equalTo: view.topAnchor),
            header.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            header.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            header.heightAnchor.constraint(equalToConstant: 40)
        ])
        NSLayoutConstraint.activate([
            collectionView.topAnchor.constraint(equalTo: header.bottomAnchor, constant: 8),
            collectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            collectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing),
            collectionView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }

    func subscribeSignal() {
        personaManager.currentProfiles
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in
            }) { [weak self] _ in
                self?.refreshWithProfiles()
            }
            .store(in: &disposeBag)
        
        editButton
            .cv.tap()
            .sink { [weak self] _ in
                guard let self = self else { return }
                self.editButton.isSelected = !self.editButton.isSelected
                self.collectionView.isEditing = self.editButton.isSelected
                self.collectionView.reloadData()
            }
            .store(in: &disposeBag)
    }

    func refreshWithProfiles() {
        collectionView.reloadData()
    }

    func headerView() -> UIView {
        let accountLabel: UILabel = {
            let label = UILabel()
            label.font = FontStyles.BH4
            label.textColor = Asset.Colors.Text.dark.color
            label.text = L10n.Scene.PersonaSocial.accounts
            return label
        }()
        let hStack = HStackView(alignment: .center) {
            accountLabel
            Spacer()
            editButton
        }.cv.apply {
            $0.isLayoutMarginsRelativeArrangement = true
            $0.layoutMargins = UIEdgeInsets(top: 0, left: LayoutConstraints.leading, bottom: 0, right: LayoutConstraints.trailing)
        }
        return hStack
    }
}

extension SocialViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        if collectionView.isEditing {
            return
        }
        if indexPath.row == 0 {
            coordinator.present(scene: .connectableSocialList,
                                transition: .panModel(animated: true))
        } else {
            let profileRecord = personaManager.currentProfiles.value[indexPath.row - 1]
            if let profile = Profile(fromRecord: profileRecord) {
                userSetting.currentProfileSocialPlatform = profile.socialPlatform
                dismissMainTabBarController()
            }
        }
    }
}

extension SocialViewController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        personaManager.currentProfiles.value.count + 1
    }

    // swiftlint:disable force_cast
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        if indexPath.row == 0 {
            let cell = collectionView.dequeueReusableCell(
                withReuseIdentifier: String(describing: SocialAccountAddCollectionCell.self),
                for: indexPath) as! SocialAccountAddCollectionCell
            cell.setEditMode(isEditing: collectionView.isEditing)
            return cell
        } else {
            let cell = collectionView.dequeueReusableCell(
                withReuseIdentifier: String(describing: SocialAccountCollectionCell.self),
                for: indexPath) as! SocialAccountCollectionCell
            let profileRecord = personaManager.currentProfiles.value[indexPath.row - 1]
            cell.configWith(profile: profileRecord)
            cell.setEditMode(isEditing: collectionView.isEditing)
            cell.delegate = self
            return cell
        }
    }
}

extension SocialViewController: SocialAccountCollectionCellDelegate {
    func deleteAction(profileIdentifier: String) {
        disConnectAction(profileIdentifier: profileIdentifier)
    }
}

extension SocialViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
        0
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        16
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        sizeForItemAt indexPath: IndexPath) -> CGSize {
        CGSize(width: (view.frame.width - 44) / 3, height: 115)
    }
}

extension SocialViewController {
    func disConnectAction(profileIdentifier: String) {
        guard let profile = ProfileRepository.queryProfile(identifier: profileIdentifier) else { return }
        let alertController = AlertController(
            title: "",
            message: L10n.Common.Alert.DisconnectProfile.description,
            confirmButtonText: L10n.Common.Controls.confirm,
            cancelButtonText: L10n.Common.Controls.cancel,
            buttonAxis: .horizontal,
            imageType: .warning,
            confirmButtonClicked: { _ in
                // toggle edit mode
                self.collectionView.isEditing = false
                self.editButton.isSelected = false
                ProfileRepository.detachProfile(identifier: profile.nonOptionalIdentifier)
            },
            cancelButtonClicked: nil)
        let keywords: String = {
            if let nickname = profile.nickname,
               !nickname.isEmpty {
                return "@\(nickname)"
            } else {
                return profile.socialID
            }
        }()
        let attribute = NSMutableAttributedString(string: L10n.Common.Alert.DisconnectProfile.title(keywords),
                                                  attributes: [.foregroundColor: Asset.Colors.Text.dark.color,
                                                               .font: FontStyles.BH4])
        let paragraphStyle = NSMutableParagraphStyle()
        paragraphStyle.alignment = .center
        paragraphStyle.lineSpacing = 12
        attribute.addAttribute(.paragraphStyle,
                               value: paragraphStyle,
                               range: NSRange(location: 0, length: attribute.string.count))
        attribute.addAttribute(.foregroundColor, value: Asset.Colors.Public.blue.color, keywords: keywords)
        attribute.addAttribute(.font, value: FontStyles.BH3, keywords: keywords)
        alertController.setAttributeTitle(attrTitle: attribute)
        Coordinator.main.present(scene:
            .alertController(alertController: alertController),
                                 transition: .alertController(completion: nil))
    }

    func connectAction(socialPlatform: ProfileSocialPlatform) {
        if let persona = personaManager.currentPersona.value {
            Coordinator.main.present(scene:
                .maskConnectingSocial(socialPlatform: socialPlatform,
                                      personaIdentifier: persona.nonOptionalIdentifier),
                                     transition: .detail(animated: true))
        }
    }
}
