//
//  ConnectSocialView.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
extension ConnectableSocialListViewController {
    class SocialView: UIView {
        let imageView: UIImageView = {
            let imageView = UIImageView()
            return imageView
        }()
    
        let titleLabel: UILabel = {
            let label = UILabel()
            label.font = FontStyles.MH7
            label.textColor = Asset.Colors.Text.dark.color
            label.text = L10n.Scene.PersonaSocial.connectSocialAccounts
            return label
        }()
    
        init() {
            super.init(frame: .zero)
            withSubViews {
                imageView
                titleLabel
            }
            NSLayoutConstraint.activate([
                imageView.widthAnchor.constraint(equalToConstant: 48),
                imageView.heightAnchor.constraint(equalToConstant: 48),
                imageView.centerXAnchor.constraint(equalTo: centerXAnchor),
                imageView.topAnchor.constraint(equalTo: topAnchor, constant: 12)
            ])
            NSLayoutConstraint.activate([
                titleLabel.topAnchor.constraint(equalTo: imageView.bottomAnchor, constant: 6),
                titleLabel.centerXAnchor.constraint(equalTo: centerXAnchor)
            ])
        }

        @available(*, unavailable)
        required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
        }
    
        func withViewEnabled(enabled: Bool) -> Self {
            alpha = enabled ? 1 : 0.5
            return self
        }
    
        func addSelfConstraints() {
            let width = (UIScreen.main.bounds.width - 45) / 3
            NSLayoutConstraint.activate([
                heightAnchor.constraint(equalToConstant: 100),
                widthAnchor.constraint(equalToConstant: width)
            ])
        }
    
        func configWith(socialPlatform: ProfileSocialPlatform) -> Self {
            imageView.image = socialPlatform.icon
            titleLabel.text = socialPlatform.shortName

            return self
        }
    }
}
