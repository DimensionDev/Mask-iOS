//
//  ConnetToSocialViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
import UStack

class ConnectableSocialListViewController: BaseViewController {
    private var disposeBag = Set<AnyCancellable>()
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSettings
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH2
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.PersonaSocial.connectSocialAccounts
        label.textAlignment = .left
        return label
    }()
    
    private lazy var connectTipsLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.RH5
        label.textColor = Asset.Colors.Text.normal.color
        label.text = L10n.Scene.PersonaSocial.connectTips
        label.textAlignment = .left
        return label
    }()
    
    private func tapToConnect(view: UIView, socialPlatform: ProfileSocialPlatform) {
        view.cv.tapGesture()
            .sink { [weak self] _ in
                if let persona = self?.personaManager.currentPersona.value {
                    Coordinator.main.present(scene:
                        .maskConnectingSocial(socialPlatform: socialPlatform,
                                              personaIdentifier: persona.nonOptionalIdentifier),
                        transition: .detail(animated: true))
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
            ConnectableSocialListViewController.SocialView()
                .cv.apply {
                    $0.configWith(socialPlatform: .instagram)
                        .withViewEnabled(enabled: false)
                        .addSelfConstraints()
                }
        }
        let hStack2 = HStackView {
            ConnectableSocialListViewController.SocialView()
                .cv.apply {
                    $0.configWith(socialPlatform: .minds)
                        .withViewEnabled(enabled: false)
                        .addSelfConstraints()
                }
            UStack.Spacer()
        }
        let vStack = VStackView {
            titleLabel
            connectTipsLabel
            hStack1
            hStack2
            UStack.Spacer()
        }
        vStack.setCustomSpacing(25, after: hStack1)
        vStack.setCustomSpacing(12, after: titleLabel)
        vStack.setCustomSpacing(24, after: connectTipsLabel)
        
        view.withSubViews {
            vStack
        }
        
        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.topAnchor, constant: 0),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            vStack.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing),
            vStack.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -22)
        ])
    }
}
