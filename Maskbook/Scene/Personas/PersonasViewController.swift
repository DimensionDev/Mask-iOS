//
//  PersonasViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import IQKeyboardManagerSwift
import UIKit

enum PersonaSubViewController: CaseIterable {
    case social
    case contacts

    var title: String {
        switch self {
        case .social:
            return L10n.Scene.Personas.Tabs.social

        case .contacts:
            return L10n.Scene.Personas.Tabs.contacts
        }
    }

    var viewController: UIViewController {
        switch self {
        case .social:
            return SocialViewController()

        case .contacts:
            return ContactsViewController()
        }
    }
}

class PersonasViewController: BaseViewController {
    var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    @InjectedProvider(\.personaManager)
    private var personaManager

    let items = PersonaSubViewController.allCases.map(\.title)

    let viewControllers = PersonaSubViewController.allCases.map(\.viewController)
    weak var socialViewController: SocialViewController?

    lazy var segmentViewController: SegmentViewController = {
        let segmentVC = SegmentViewController(items: items, viewControllers: viewControllers)
        socialViewController = segmentVC.viewControllers.first as? SocialViewController
        return segmentVC
    }()

    lazy var connectTOSocialVC = ConnectableSocialListViewController()

    lazy var titleStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 9
        let imageView = UIImageView(image: Asset.Icon.Arrows.drop.image.withRenderingMode(.alwaysTemplate))
        imageView.tintColor = Asset.Colors.Text.dark.color
        imageView.contentMode = .scaleAspectFit
        stackView.addArrangedSubview(titleLabel)
        stackView.addArrangedSubview(imageView)
        return stackView
    }()

    let titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    let scanButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.Balance.walletConnectScan.image, for: .normal)
        return button
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        setupNavigationItems()
        setupSegmentViewController()
        setupConnectViewController()
        subscribeSignals()
        updateWithPersonaProfileState()
    }

    func setupNavigationItems() {
        navigationItem.largeTitleDisplayMode = .never
        var leftBarButtonItems = [ .fixedSpace(14),
                                   UIBarButtonItem(customView: scanButton)]
        if DebugControl.isDebugEntryEnable {
            let debugEntryButton = UIBarButtonItem(customView: DebugEntryView())
            leftBarButtonItems.append(debugEntryButton)
        }
        navigationItem.leftBarButtonItems = leftBarButtonItems
        addSocialPlatformBackBarButtonItem()
    }

    func setupSegmentViewController() {
        addChild(segmentViewController)
        let segmentView = segmentViewController.view!
        segmentView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(segmentView)
        segmentViewController.didMove(toParent: self)
        NSLayoutConstraint.activate([
            segmentView.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor),
            segmentView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            segmentView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            segmentView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
        segmentViewController.segments.backgroundColor = Asset.Colors.Background.bar.color
    }

    func setupConnectViewController() {
        addChild(connectTOSocialVC)
        let subView = connectTOSocialVC.view!
        subView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(subView)
        segmentViewController.didMove(toParent: self)
        NSLayoutConstraint.activate([
            subView.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor),
            subView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            subView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            subView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
    }

    func subscribeSignals() {
        personaManager.currentProfiles
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.updateWithPersonaProfileState()
            }
            .store(in: &disposeBag)

        titleStackView.gesture()
            .sink { [weak self] _ in
                self?.titleViewClicked()
            }
            .store(in: &disposeBag)
        
        scanButton
            .cv.tap()
            .sink { [weak self] in
                self?.scanAction()
            }
            .store(in: &disposeBag)
    }

    func updateWithPersonaProfileState() {
        if let persona = personaManager.currentPersona.value {
            addTitleView(title: persona.nickname ?? persona.nonOptionalIdentifier)
        }
        connectTOSocialVC.view.isHidden = !personaManager.currentProfiles.value.isEmpty
    }

    func addTitleView(title: String) {
        navigationItem.titleView = titleStackView
        titleLabel.text = title
    }

    func removeTitleView() {
        navigationItem.titleView = nil
    }
}

extension PersonasViewController {
    func personaNicknameDuplicated() {
        let alertController = AlertController(
            title: L10n.Common.Alert.PersonaNameDuplicated.title,
            message: "",
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .error
        )
        coordinator.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }

    func createPersonaSuccess() { }

    func createPersonaFailed(result: MaskWebMessageResult) {
        if let errorMessage = result.error?.message {
            let alertController = AlertController(title: errorMessage, message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error)
            coordinator.present(
                scene: .alertController(alertController: alertController),
                transition: .alertController(completion: nil)
            )
        }
    }

    func titleViewClicked() {
        coordinator.present(
            scene: .personaAction(viewModel: PersonasActionViewModel()),
            transition: .detail(animated: true)
        )
    }
    
    func scanAction() {
        coordinator.present(scene: .commonScan, transition: .modal(animated: true))
    }
}
