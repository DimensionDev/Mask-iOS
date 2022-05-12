//
//  WalletBackupViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import os
import PanModal
import UIKit

class WalletBackupViewController: BaseViewController {
    var keystoreConstraint: NSLayoutConstraint?
    var privateKeyConstraint: NSLayoutConstraint?
    let viewModel = WalletBackupViewModel()
    
    // MARK: - Page view controller
    let keystoreViewController = WalletBackupKeystoreViewController()
    let privateKeyViewController = WalletBackupPrivateKeyViewController()
    lazy var segmentController: SegmentViewController = {
        let exportTypes = viewModel.supportExport
        var items = [String]()
        var viewControllers = [UIViewController]()
        if exportTypes.contains(.keyStoreJson) {
            items.append(L10n.Scene.WalletBackup.tabKeystore)
            viewControllers.append(keystoreViewController)
        }
        if exportTypes.contains(.privateKey) {
            items.append(L10n.Scene.WalletBackup.tabPrivateKey)
            viewControllers.append(privateKeyViewController)
        }
        
        let vc = SegmentViewController(items: items, viewControllers: viewControllers)
        return vc
    }()
    var disposeBag = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.title = L10n.Scene.WalletBackup.title
        setupUI()
    }
}

// MARK: - Private methods
private extension WalletBackupViewController {
    private func setupUI() {
        view.clipsToBounds = true
        view.backgroundColor = Asset.Colors.Background.normal.color
        
        self.addChild(segmentController)
        view.addSubview(segmentController.view)
        segmentController.didMove(toParent: self)

        segmentController.view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            segmentController.view.topAnchor.constraint(equalTo: view.topAnchor),
            segmentController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            view.safeAreaLayoutGuide.bottomAnchor.constraint(equalTo: segmentController.view.bottomAnchor),
            view.trailingAnchor.constraint(equalTo: segmentController.view.trailingAnchor)
        ])
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletBackupViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = WalletBackupViewController()
        let width: CGFloat = 375
        let height: CGFloat = 812
        Group {
            UIViewPreview {
                let view = vc.view!
                NSLayoutConstraint.activate([
                    view.widthAnchor.constraint(equalToConstant: width),
                    view.heightAnchor.constraint(equalToConstant: height)
                ])
                return view
            }
            .previewLayout(.fixed(width: width, height: height))
        }
    }
}
#endif
