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
    private lazy var viewModel = LuckyDropViewModel()
    private(set) var cancelableStorage: Set<AnyCancellable> = []

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func buildContent() {
        super.buildContent()
        let luckyView = LuckyDropView().withResponderChainForCurrentWindow()
        let controller = UIHostingController(rootView: luckyView)
        self.addChild(controller)
        self.view.addSubview(controller.view)
        controller.view.snp.makeConstraints { $0.edges.equalToSuperview() }
        controller.view.backgroundColor = Asset.Colors.Background.normal.color

        title = L10n.Tab.labs
    }

    override func  buildEvent() {
        super.buildEvent()
    }

    @objc
    fileprivate func onClose() {
        dismiss(animated: true)
    }
    
    @objc
    fileprivate func onShowHistory() {
        self.navigationController?.pushViewController(LuckDropHistoryController(), animated: true)
    }
}

extension LuckyDropViewController {
    @objc
    override func prepareRightNavigationItems() {
        let closeButton = NavigationItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.close) {
            self.onClose()
        }
        let historyButton = NavigationItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.history) {
            self.onShowHistory()
        }
        self.navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: closeButton.asUIView())
        ]
        self.navigationItem.leftBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: historyButton.asUIView())
        ]
    }
}
