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
        let segmentVC = SegmentViewController(items: items, viewControllers: viewControllers, style: .group)
        socialViewController = segmentVC.viewControllers.first as? SocialViewController
        return segmentVC
    }()

    lazy var connectTOSocialVC = ConnectableSocialListViewController()

    let scanButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.Balance.walletConnectScan.image, for: .normal)
        return button
    }()

    private lazy var personaCollectionView: UICollectionView = {
        let flowLayout = MnemonicVerifyCollectionFlowLayout()
        flowLayout.itemSize = PersonaCollectionDataSource.itemSize
        flowLayout.scrollDirection = .horizontal
        flowLayout.sideItemScale = 0.9
        let view = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = .clear
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.layer.masksToBounds = false
        view.clipsToBounds = true
        return view
    }()

    lazy var horizontalDataSource = PersonaCollectionDataSource()

    override func viewDidLoad() {
        super.viewDidLoad()
        setupNavigationItems()
        setupPersonaCollectionView()
        setupSegmentViewController()
        setupConnectViewController()
        subscribeSignals()
        updateWithPersonaProfileState()
        scrollToCurrentPersona()
    }

    func setupPersonaCollectionView() {
        personaCollectionView.delegate = horizontalDataSource
        personaCollectionView.dataSource = horizontalDataSource
        personaCollectionView.register(PersonaCollectionCell.self)
        personaCollectionView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(personaCollectionView)
        NSLayoutConstraint.activate([
            personaCollectionView.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor, constant: 24),
            personaCollectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            personaCollectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            personaCollectionView.heightAnchor.constraint(equalToConstant: 102)
        ])
    }

    func setupNavigationItems() {
        title = L10n.Scene.Personas.personas
        navigationItem.largeTitleDisplayMode = .never
        var leftBarButtonItems = [.fixedSpace(14),
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
            segmentView.topAnchor.constraint(equalTo: personaCollectionView.bottomAnchor, constant: 20),
            segmentView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            segmentView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            segmentView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
    }

    func setupConnectViewController() {
        addChild(connectTOSocialVC)
        let subView = connectTOSocialVC.view!
        subView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(subView)
        segmentViewController.didMove(toParent: self)
        NSLayoutConstraint.activate([
            subView.topAnchor.constraint(equalTo: personaCollectionView.bottomAnchor, constant: 20),
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

        scanButton
            .cv.tap()
            .sink { [weak self] in
                self?.scanAction()
            }
            .store(in: &disposeBag)
    }

    func updateWithPersonaProfileState() {
        connectTOSocialVC.view.isHidden = !personaManager.currentProfiles.value.isEmpty
    }

    func scrollToCurrentPersona() {
        guard let persona = personaManager.currentPersona.value else { return }
        let personas = personaManager.personaRecordsSubject.value
        guard let index = personas.firstIndex(of: persona) else { return }
        DispatchQueue.main.async {
            self.personaCollectionView.scrollToItem(at: IndexPath(row: index, section: 0), at: .left, animated: false)
        }
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

    func scanAction() {
        coordinator.present(scene: .commonScan, transition: .modal(animated: true))
    }
}
