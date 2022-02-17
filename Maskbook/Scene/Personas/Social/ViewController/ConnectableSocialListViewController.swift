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
    
    private lazy var connectTipsView = ConnectableSocialListViewController.ConnectTipsView()
    
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
            hStack1
            hStack2
            UStack.Spacer()
            if !userSettings.connectTipsDidShown {
                connectTipsView
                    .cv.apply {
                        NSLayoutConstraint.activate([
                            $0.heightAnchor.constraint(equalToConstant: 83)
                        ])
                        $0.cv.tapGesture()
                            .sink { [weak self] _ in
                                self?.connectTipsView.isHidden = true
                                self?.userSettings.connectTipsDidShown = true
                            }
                            .store(in: &self.disposeBag)
                    }
            }
        }
        vStack.setCustomSpacing(25, after: hStack1)
        vStack.setCustomSpacing(26, after: titleLabel)
        view.withSubViews {
            vStack
        }
        
        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.topAnchor, constant: 26),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 22),
            vStack.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -22),
            vStack.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -22)
        ])
    }
}
