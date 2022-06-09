//
//  AppViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import SwiftUI
import UIKit

final class LabsViewController: BaseViewController {
    private lazy var viewModel = LabsPluginViewModel()
    private(set) var cancelableStorage: Set<AnyCancellable> = []

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func buildContent() {
        super.buildContent()
        let controller = UIHostingController(rootView: LabsListView(viewModel: viewModel))
        self.addChild(controller)
        self.view.addSubview(controller.view)
        controller.view.snp.makeConstraints { $0.edges.equalToSuperview() }
        controller.view.backgroundColor = Asset.Colors.Background.normal.color

        title = L10n.Tab.labs
    }

    override func  buildEvent() {
        super.buildEvent()

        viewModel.pluginSignal
            .asDriver()
            .sink { [weak self] plugin in
                guard let self = self else { return }
                switch plugin {
                case .transaction: self.handleTransak()
                case .luckyDrop:
                    self.coordinator.present(
                        scene: .luckyDrop(source: .lab, callback: nil),
                        transition: .modal(animated: true)
                    )
                case .fileService:
                    self.coordinator.present(
                        scene: .fileService,
                        transition: .detail()
                    )
                default: break
                }
            }
            .store(in: &cancelableStorage)
    }

    private func handleTransak() {
        self.coordinator.present(scene: .showTransakIntegration, transition: .modal())
    }

    fileprivate func configPluginSettings() {
        self.coordinator.present(scene: .pluginConfiguration, transition: .detail())
    }
}

extension LabsViewController {
    @objc
    override func prepareRightNavigationItems() {
        let button = NavigationBarItemView(imageAsset: Asset.Plugins.setting) {
            self.configPluginSettings()
        }

        self.navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: button.asUIView())
        ]
    }
}
