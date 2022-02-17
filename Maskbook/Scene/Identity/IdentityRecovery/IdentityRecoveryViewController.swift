//
//  IdentityRecoveryViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/8/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CombineEvent
import UIKit
import UStack

final class IdentityRecoveryViewController: BaseViewController {
    private var disposeBag = Set<AnyCancellable>()

    private var restoreSignalStorage = Set<AnyCancellable>()

    @InjectedProvider(\.vault)
    private var vault

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    private lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.dataSource = self
        view.delegate = self
        view.translatesAutoresizingMaskIntoConstraints = false
        view.register(GroupStyleTableViewCell.self)
        return view
    }()

    let from: From

    init(from: From) {
        self.from = from
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.largeTitleDisplayMode = .always
        navigationController?.navigationBar.prefersLargeTitles = true
        title = L10n.Scene.IdentityRecovery.title
    }

    override func buildContent() {
        view.withSubViews {
            tableView
        }
        tableView.snp.makeConstraints {
            $0.top.equalTo(view.snp.top)
            $0.leading.equalTo(view.snp.leading)
            $0.trailing.equalTo(view.snp.trailing)
            $0.bottom.equalTo(view.readableContentGuide)
        }
    }

    private func localRecovery() {
        var scene: Coordinator.Scene
        switch from {
        case .initilisation:
            scene = .pickLocalRestoreDataInInit(sender: nil)

        case .settings:
            scene = .pickLocalRestoreDataInSetting(sender: nil)
        }

        Coordinator.main.present(
            scene: scene,
            transition: .modal()
        )
    }
}

extension IdentityRecoveryViewController {
    enum From: Codable {
        case initilisation
        case settings
    }
}

extension IdentityRecoveryViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let item = IdentityRecoveryViewModel.Item.allCases[indexPath.row]
        switch item {
        case .identityCode:
            coordinator.present(scene: .identityMnemonicImport, transition: .detail(animated: true))

        case .privateKey:
            coordinator.present(scene: .identityPrivateKeyImport, transition: .detail(animated: true))

        case .localBackupRecovery:
            localRecovery()

        case .cloudBackupRecovery:
            coordinator.present(scene: .remoteResotreVerify, transition: .modal())
        }
    }
}

extension IdentityRecoveryViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        IdentityRecoveryViewModel.Item.allCases.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: GroupStyleTableViewCell = tableView.dequeCell(at: indexPath)
        let item = IdentityRecoveryViewModel.Item.allCases[indexPath.row]
        cell.update(title: item.title, subTitle: item.description, iconName: item.iconName, iconSize: 36)
        return cell
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct IdentityRecoveryViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            IdentityRecoveryViewController(from: .initilisation).view
        }
    }
}
#endif
