//
//  ConnectToSocialPanModelController.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit
import UStack

class ConnectableSocialListPanModelController: BaseViewController {
    private var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.personaManager)
    private var personaManager

    @InjectedProvider(\.mainCoordinator)
    private var coordinator: Coordinator

    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.PersonaSocial.connectSocialAccounts
        label.textAlignment = .center
        return label
    }()

    private func tapToConnect(view: UIView, socialPlatform: ProfileSocialPlatform) {
        view.cv.tapGesture()
            .sink { [weak self] _ in
                guard let self = self else { return }
                if let persona = self.personaManager.currentPersona.value {
                    self.dismiss(animated: true) {
                        self.coordinator.present(scene:
                            .maskConnectingSocial(socialPlatform: socialPlatform,
                                                  personaIdentifier: persona.nonOptionalIdentifier),
                            transition: .detail(animated: true))
                    }
                }
            }
            .store(in: &disposeBag)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        let hStack1 = HStackView {
            ConnectableSocialListViewController.SocialView()
                .cv.apply {
                    $0.configWith(socialPlatform: .twitter)
                        .withViewEnabled(enabled: true)
                        .addSelfConstraints()
                    self.tapToConnect(view: $0, socialPlatform: .twitter)
                }
            ConnectableSocialListViewController.SocialView()
                .cv.apply {
                    $0.configWith(socialPlatform: .facebook)
                        .withViewEnabled(enabled: true)
                        .addSelfConstraints()
                    self.tapToConnect(view: $0, socialPlatform: .facebook)
                }
            UStack.Spacer()
        }
        let vStack = VStackView {
            titleLabel
            hStack1
        }
        vStack.setCustomSpacing(24, after: titleLabel)
        view.withSubViews {
            vStack
        }

        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.topAnchor, constant: 49),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 22),
            vStack.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -22)
        ])
    }
}

extension ConnectableSocialListPanModelController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }

    var longFormHeight: PanModalHeight {
        .contentHeight(215)
    }
}
