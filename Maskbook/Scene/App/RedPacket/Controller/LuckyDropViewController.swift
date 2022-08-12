//
//  LuckyDropViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/19.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import SwiftUI

class LuckyDropViewController: BaseViewController {
    private let viewModel: LuckyDropViewModel
    private(set) var cancelableStorage: Set<AnyCancellable> = []

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    let luckyView: LuckyDropView

    init(source: LuckyDropViewModel.Source) {
        viewModel = LuckyDropViewModel(source: source)
        luckyView = LuckyDropView(viewModel: viewModel)
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder _: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.title = L10n.Plugins.Luckydrop.title
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.navigationBar.setAppearance()
    }

    override func buildContent() {
        super.buildContent()
        let controller = UIHostingController(rootView: luckyView)
        addChild(controller)
        view.addSubview(controller.view)
        controller.view.snp.makeConstraints { $0.edges.equalToSuperview() }
        controller.view.backgroundColor = Asset.Colors.Background.normal.color

        title = L10n.Tab.labs
    }

    override func buildEvent() {
        super.buildEvent()
        viewModel.nftViewModel.action = { [weak self, viewModel] action in
            guard let self = self else {
                return
            }
            switch action {
            case .selectCollectibleGroup:
                // collection
//                self.coordinator.present(
//                    scene: .luckydropSearchCollection(delegate: self.viewModel.nftViewModel),
//                    transition: .detail(animated: true)
//                )
                //nft
                self.coordinator.present(
                    scene: .luckydropSearchNFT(delegate: self.viewModel.nftViewModel, contractAddress: "0xe7ce9069063e738d3bca9990bf09894ab907c48e"),
                    transition: .detail(animated: true)
                )
  
                break

            case let .addCollectibles(groupName, contractAddress, selectedIdentifiers):
                // TODO: Select Collectibles
                break

            case .confirmRisk:
                let pluginID = PluginStorageRepository.PluginID.redPackage.rawValue
                self.coordinator.present(scene: .pluginRiskWarning(pluginID: pluginID), transition: .popup)

            case let .createNFTLuckyDrop(draft, gasFeeViewModel):
                NFTLuckyDropCreationFlow.createNFTLuckyDrop(
                    draft: draft,
                    txObserver: viewModel.walletBottomViewModel,
                    gasFeeViewModel: gasFeeViewModel
                )

            case .unlockWallet: self.unlockWallet()

            case let .unlockNFT(contractAddress, gasItem):
                // TODO: unlock nft permission
                break
            }
        }
    }

    private func unlockWallet() {
        coordinator.present(
            scene: .walletUnlock(cancellable: true) { [weak self] error in
                guard let self = self else {
                    return
                }
                guard error == nil else {
                    return
                }
                self.viewModel.nftViewModel.updateState()
            },
            transition: .modal()
        )
    }

    @objc
    fileprivate func onClose() {
        dismiss(animated: true)
    }

    @objc
    fileprivate func onShowHistory() {
        show(LuckDropHistoryController(), sender: self)
    }
}

extension LuckyDropViewController {
    @objc
    override func prepareRightNavigationItems() {
        let closeButton = NavigationBarItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.close) { [weak self] in
            self?.onClose()
        }
        let historyButton = NavigationBarItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.history) { [weak self] in
            self?.onShowHistory()
        }
        navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: closeButton.asUIView()),
        ]
        navigationItem.leftBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: historyButton.asUIView()),
        ]
    }
}
