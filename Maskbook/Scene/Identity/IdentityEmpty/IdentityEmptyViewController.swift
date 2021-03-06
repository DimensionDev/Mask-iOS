//
//  IdentityEmptyViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/8/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CombineEvent
import UIKit
import UStack

final class IdentityEmptyViewController: BaseViewController {
    typealias Spacer = UStack.Spacer
    
    override var interactivePopGestureRecognizerEnabled: Bool {
        false
    }

    private var subscriptionSet = Set<AnyCancellable>()
    private var restoreSignalStorage = Set<AnyCancellable>()

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    @InjectedProvider(\.vault)
    private var vault

    private lazy var scanButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.Balance.walletConnectScan.image, for: .normal)
        return button
    }()

    private lazy var logoView: UIView = {
        let logoView = UIImageView()
        logoView.image = Asset.Images.Scene.Personas.emptyPersona.image
        logoView.contentMode = .scaleAspectFit
        logoView.snp.makeConstraints {
            $0.height.equalTo(136)
            $0.width.equalTo(214)
        }
        return logoView
    }()

    private lazy var logoContainer: UIView = {
        let view = UIView()
        return view
    }()

    private lazy var createButton = PrimeryButton(title: L10n.Scene.IdentityEmpty.createAnIdentity)

    private lazy var recovertyOrSignInButton = PrimeryButton(title: L10n.Scene.IdentityEmpty.recoverySignIn)

    override func viewDidLoad() {
        super.viewDidLoad()
        title = L10n.Scene.IdentityEmpty.title
        navigationItem.leftBarButtonItems = [.fixedSpace(14),
                                             UIBarButtonItem(customView: scanButton)]
        navigationItem.largeTitleDisplayMode = .never
    }

    override func buildContent() {
        createButton.snp.makeConstraints { $0.height.equalTo(54) }
        recovertyOrSignInButton.snp.makeConstraints { $0.height.equalTo(54) }
        buildLogoContainer()

        let contentStack = VStackView(
            spacing: 16
        ) {
            logoContainer
            createButton
            recovertyOrSignInButton
        }

        view.withSubViews {
            contentStack
        }

        contentStack.isLayoutMarginsRelativeArrangement = true
        contentStack.layoutMargins = UIEdgeInsets(top: 10, left: LayoutConstraints.leading, bottom: 32, right: LayoutConstraints.trailing)
        contentStack.snp.makeConstraints {
            $0.top.equalTo(view.layoutMarginsGuide)
            $0.leading.equalTo(view.snp.leading)
            $0.trailing.equalTo(view.snp.trailing)
            $0.bottom.equalTo(view.readableContentGuide)
        }
    }

    func buildLogoContainer() {
        logoContainer.withSubViews {
            logoView
        }
        logoView.snp.makeConstraints { $0.center.equalTo(logoContainer.snp.center) }
    }

    override func buildEvent() {
        createButton.cv.tap()
            .sink { [weak self] _ in
                self?.coordinator.present(scene: .personaWelcome,
                                          transition: .detail(animated: true))
            }
            .store(in: &subscriptionSet)

        recovertyOrSignInButton.cv.tap()
            .sink { [weak self] _ in
                self?.coordinator.present(scene: .identityRecovery(from: .initilisation),
                                          transition: .detail(animated: true))
            }
            .store(in: &subscriptionSet)

        scanButton
            .cv.tap()
            .sink { [weak self] in
                self?.scanAction()
            }
            .store(in: &subscriptionSet)
    }

    private func scanAction() {
        ScannerPermission.authorizeCameraWith { [weak self] isAuthorize in
            guard let self = self else { return }
            if isAuthorize {
                self.coordinator.present(scene: .commonScan, transition: .modal(animated: true))
            } else {
                ScannerPermission.showCameraAccessAlert(coordinator: self.coordinator)
            }
        }
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct TestPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            IdentityEmptyViewController().view
        }
    }
}
#endif
