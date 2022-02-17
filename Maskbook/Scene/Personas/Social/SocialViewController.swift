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

class SocialViewController: BaseViewController {
    private var disposeBag = Set<AnyCancellable>()

    private let viewModel = SocialViewModel()

    @InjectedProvider(\.personaManager)
    private var personaManager

    @InjectedProvider(\.personaCacheManager)
    private var personaCacheManager

    @InjectedProvider(\.userDefaultSettings)
    private var settings

    private lazy var profileTableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 72
        view.rowHeight = 72
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.dataSource = self
        view.register(SocialProfileTableViewCell.self)
        return view
    }()

    private lazy var emptyTableView: ControlContainableTableView = {
        let view = ControlContainableTableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 56
        view.rowHeight = 56
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.dataSource = self
        view.register(ConnectSocialTableViewCell.self)
        return view
    }()

    private let twitterButton = SocialSegmentButton(title: ProfileSocialPlatform.twitter.title)
    private let facebookButton = SocialSegmentButton(title: ProfileSocialPlatform.facebook.title)
    private let mindsButton = SocialSegmentButton(title: ProfileSocialPlatform.minds.title)
    private lazy var socialSegmentView: UIStackView = {
        let width: CGFloat = 96
        let hStack = HStackView(spacing: 12) {
            twitterButton
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 36),
                        $0.widthAnchor.constraint(equalToConstant: width),
                    ])
                }
            facebookButton
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 36),
                        $0.widthAnchor.constraint(equalToConstant: width),
                    ])
                }
//            mindsButton
//                .cv.apply {
//                    NSLayoutConstraint.activate([
//                        $0.heightAnchor.constraint(equalToConstant: 36),
//                        $0.widthAnchor.constraint(equalToConstant: 74)
//                    ])
//                }
        }
        .cv.apply {
            $0.isLayoutMarginsRelativeArrangement = true
            $0.layoutMargins = UIEdgeInsets(top: 24, left: 23, bottom: 24, right: 0)
        }
        return hStack
    }()

    let plusButton: UIButton = {
        let button = HitTestExpandedButton(type: .custom)
        button.setImage(Asset.Images.Scene.Personas.plus.image, for: .normal)
        NSLayoutConstraint.activate([
            button.heightAnchor.constraint(equalToConstant: 24),
            button.widthAnchor.constraint(equalToConstant: 24),
        ])
        return button
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        addSegmentView()
        setupEmptyView()
        setupTableView()
        subscribeSignal()
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        getProfiles()
    }

    func addSegmentView() {
        view.withSubViews {
            socialSegmentView
        }
        NSLayoutConstraint.activate([
            socialSegmentView.topAnchor.constraint(equalTo: view.layoutMarginsGuide.topAnchor),
            socialSegmentView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
        ])
    }

    func setupEmptyView() {
        view.withSubViews {
            emptyTableView
        }
        NSLayoutConstraint.activate([
            emptyTableView.topAnchor.constraint(equalTo: socialSegmentView.bottomAnchor),
            emptyTableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            emptyTableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            emptyTableView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor),
        ])
    }

    func setupTableView() {
        view.withSubViews {
            profileTableView
        }
        profileTableView.tableHeaderView = tableHeader()
        NSLayoutConstraint.activate([
            profileTableView.topAnchor.constraint(equalTo: socialSegmentView.bottomAnchor),
            profileTableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            profileTableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            profileTableView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor),
        ])
    }

    func getProfiles() {
        guard let persona = personaCacheManager.realCurrentPersonaOrCachedCurrentPersona() else {
            DispatchQueue.main.async {
                self.refreshWithProfiles(profiles: [])
            }
            return
        }
        let platform = viewModel.selectedSocialPlatform.value
        if let profiles = personaCacheManager.getCacheSocial(platform: platform, identifier: persona.identifier) {
            refreshWithProfiles(profiles: profiles)
        }
        SocialViewModel.getProfilesPublisher(socialPlatform: viewModel.selectedSocialPlatform.value,
                                             personaIdentifier: persona.identifier)
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in
            }) { [weak self] profiles in
                self?.personaCacheManager.setCacheSocial(profile: profiles,
                                                         platform: platform,
                                                         identifier: persona.identifier)
                self?.refreshWithProfiles(profiles: profiles)
            }
            .store(in: &disposeBag)
    }

    func subscribeSignal() {
        viewModel.selectedSocialPlatform
            .receive(on: DispatchQueue.main)
            .sink { [weak self] profileSocialPlatform in
                guard let self = self else { return }
                switch profileSocialPlatform {
                case .twitter:
                    self.twitterButton.isSelected = true
                    self.facebookButton.isSelected = false
                    self.mindsButton.isSelected = false

                case .facebook:
                    self.twitterButton.isSelected = false
                    self.facebookButton.isSelected = true
                    self.mindsButton.isSelected = false

                case .minds:
                    self.twitterButton.isSelected = false
                    self.facebookButton.isSelected = false
                    self.mindsButton.isSelected = true

                default:
                    print(profileSocialPlatform)
                }
                self.settings.currentProfileSocialPlatform = profileSocialPlatform
                self.getProfiles()
                self.emptyTableView.reloadData()
            }
            .store(in: &disposeBag)

        twitterButton
            .cv.tap()
            .sink { [weak self] _ in
                self?.viewModel.selectedSocialPlatform.value = .twitter
            }
            .store(in: &disposeBag)

        facebookButton
            .cv.tap()
            .sink { [weak self] _ in
                self?.viewModel.selectedSocialPlatform.value = .facebook
            }
            .store(in: &disposeBag)

        mindsButton
            .cv.tap()
            .sink { [weak self] _ in
                self?.viewModel.selectedSocialPlatform.value = .minds
            }
            .store(in: &disposeBag)

        plusButton
            .cv.tap()
            .sink { [weak self] _ in
                guard let self = self else { return }
                let socialPlatform = self.viewModel.selectedSocialPlatform.value
                self.connectAction(socialPlatform: socialPlatform)
            }
            .store(in: &disposeBag)

        personaManager.currentPersona
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { [weak self] _ in
                self?.getProfiles()
            })
            .store(in: &disposeBag)
    }

    func refreshWithProfiles(profiles: [Profile]) {
        viewModel.profiles = profiles
        // if no persona, hide all tableviews.
        if personaCacheManager.realCurrentPersonaOrCachedCurrentPersona() == nil {
            emptyTableView.isHidden = true
            profileTableView.isHidden = true
        } else if !profiles.isEmpty {
            emptyTableView.isHidden = true
            profileTableView.isHidden = false
        } else {
            emptyTableView.isHidden = false
            profileTableView.isHidden = true
        }
        profileTableView.reloadData()
    }

    func showAppropriateTableView() {
        refreshWithProfiles(profiles: viewModel.profiles)
    }

    func tableHeader() -> UIView {
        let accountLabel: UILabel = {
            let label = UILabel()
            label.font = FontStyles.BH4
            label.textColor = Asset.Colors.Text.dark.color
            label.text = L10n.Scene.PersonaSocial.accounts
            return label
        }()
        let hStack = HStackView(spacing: 8,
                                alignment: .center) {
            accountLabel
            Spacer()
            plusButton
        }.cv.apply {
            $0.isLayoutMarginsRelativeArrangement = true
            $0.layoutMargins = UIEdgeInsets(top: 0, left: 23, bottom: 16, right: 23)
        }
        hStack.translatesAutoresizingMaskIntoConstraints = true
        hStack.frame.size.height = 40
        return hStack
    }
}

extension SocialViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection _: Int) -> Int {
        switch tableView {
        case emptyTableView:
            return 1

        case tableView:
            return viewModel.profiles.count

        default:
            return 0
        }
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        switch tableView {
        case emptyTableView:
            let cell: ConnectSocialTableViewCell = tableView.dequeCell(at: indexPath)
            let socialPlatform = viewModel.selectedSocialPlatform.value
            cell.config(viewModel: socialPlatform)
            cell.cv.tapGesture()
                .sink { [weak self] _ in
                    guard let self = self else { return }
                    let socialPlatform = self.viewModel.selectedSocialPlatform.value
                    self.connectAction(socialPlatform: socialPlatform)
                }
                .store(in: &disposeBag)
            return cell

        case profileTableView:
            let cell: SocialProfileTableViewCell = tableView.dequeCell(at: indexPath)
            let profile = viewModel.profiles[safeIndex: indexPath.row]
            if let profile = profile {
                cell.config(profile: profile)
                cell.disconnectButton
                    .cv.tap()
                    .sink { [weak self] _ in
                        self?.disConnectAction(profile: profile)
                    }
                    .store(in: &cell.disposeBag)
            } else {
                return UITableViewCell()
            }
            return cell

        default:
            return UITableViewCell()
        }
    }
}

extension SocialViewController {
    func removeProfilesCache() {
        guard let persona = personaCacheManager.realCurrentPersonaOrCachedCurrentPersona() else {
            return
        }
        let platform = viewModel.selectedSocialPlatform.value
        personaCacheManager.setCacheSocial(profile: [],
                                           platform: platform,
                                           identifier: persona.identifier)
    }

    func disConnectAction(profile: Profile) {
        let alertController = AlertController(
            title: "",
            message: nil,
            confirmButtonText: L10n.Common.Controls.confirm,
            cancelButtonText: L10n.Common.Controls.cancel,
            buttonAxis: .horizontal,
            imageType: .warning,
            confirmButtonClicked: { _ in
                // remove cache
                self.removeProfilesCache()
                ProfileRepository.detachProfile(identifier: profile.identifier)
                self.getProfiles()
            },
            cancelButtonClicked: nil
        )
        let keywords: String
        if let nickname = profile.nickname, !nickname.isEmpty {
            keywords = "@\(profile.nickname)"
        } else {
            keywords = profile.socialID
        }
        let attribute = NSMutableAttributedString(string: L10n.Common.Alert.DisconnectProfile.title(profile.socialPlatform.title, keywords),
                                                  attributes: [.foregroundColor: Asset.Colors.Text.normal.color,
                                                               .font: FontStyles.BH4])

        attribute.addAttribute(color: Asset.Colors.Public.blue.color, keywords: keywords)
        alertController.setAttributeTitle(attrTitle: attribute)

        Coordinator.main.present(scene:
            .alertController(alertController: alertController),
            transition: .alertController(completion: nil))
    }

    func connectAction(socialPlatform: ProfileSocialPlatform) {
        if let persona = personaManager.currentPersona.value {
            Coordinator.main.present(scene:
                .maskConnectingSocial(socialPlatform: socialPlatform,
                                      persona: persona),
                transition: .detail(animated: true))
        }
    }
}
