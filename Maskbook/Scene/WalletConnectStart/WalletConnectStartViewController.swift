//
//  WalletConnectStartViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/9/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit

class WalletConnectStartViewController: BaseViewController {
    var disposeBag = Set<AnyCancellable>()

    let viewControllers = [
        WalletConnectSelectWalletViewController(),
        WalletConnectShowQRCodeViewController()
    ]
    let items = [
        L10n.Scene.WalletConnect.selectWallet,
        L10n.Scene.WalletConnect.scanQRCode
    ]

    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient

    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.WalletConnect.walletConnect
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()

    lazy var segmentViewController: SegmentViewController = {
        let segmentVC = SegmentViewController(items: items, viewControllers: viewControllers)
        return segmentVC
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        view.addSubview(titleLabel)
        NSLayoutConstraint.activate([
            titleLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            titleLabel.topAnchor.constraint(equalTo: view.topAnchor, constant: 48)
        ])
        setupSegmentViewController()
        _ = walletConnectClient.connect()
    }

    func setupSegmentViewController() {
        addChild(segmentViewController)
        guard let segmentView = segmentViewController.view else { return }
        segmentView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(segmentView)
        segmentView.translatesAutoresizingMaskIntoConstraints = false
        segmentViewController.scrollView.isScrollEnabled = false
        segmentViewController.didMove(toParent: self)
        NSLayoutConstraint.activate([
            segmentView.topAnchor.constraint(equalTo: view.topAnchor, constant: 86),
            segmentView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            segmentView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            segmentView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor)
        ])
    }
}

extension WalletConnectStartViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }

    var longFormHeight: PanModalHeight {
        .intrinsicHeight
    }
}
