//
//  SocialProfileTableViewCell.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/23.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit
import UStack

class SocialProfileTableViewCell: UITableViewCell {
    var disposeBag = Set<AnyCancellable>()
    
    private var avatarView: AvatarView = {
        let view = AvatarView(title: "")
        view.applyCornerRadius(radius: 19)
        view.backgroundColor = Asset.Colors.Public.blue.color
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 38),
            view.heightAnchor.constraint(equalToConstant: 38)
        ])

        return view
    }()
    
    private let headerImageView: UIImageView = {
        let imageView = UIImageView()
        NSLayoutConstraint.activate([
            imageView.heightAnchor.constraint(equalToConstant: 38),
            imageView.widthAnchor.constraint(equalToConstant: 38)
        ])
        return imageView
    }()
    
    private let socialIcon: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Icon.Logo.littleMask.image
        NSLayoutConstraint.activate([
            imageView.heightAnchor.constraint(equalToConstant: 19),
            imageView.widthAnchor.constraint(equalToConstant: 19)
        ])
        return imageView
    }()
    
    private lazy var headerView: UIView = {
        let view = UIView()
        view.withSubViews {
            avatarView
            socialIcon
        }
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 47),
            view.widthAnchor.constraint(equalToConstant: 47)
        ])
        NSLayoutConstraint.activate([
            avatarView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            avatarView.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            socialIcon.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            socialIcon.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        return view
    }()
    
    private var nicknameLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        return label
    }()
    
    let disconnectButton: UIButton = {
        let button = UIButton(type: .system)
        button.tintColor = Asset.Colors.Public.blue.color
        button.setTitle(L10n.Scene.PersonaSocial.disconnect, for: .normal)
        button.titleLabel?.font = FontStyles.MH5
        return button
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        disposeBag.removeAll()
    }
    
    func config(profile: Profile) {
        nicknameLabel.text = profile.nickname ?? profile.socialID
        avatarView.title = String(profile.socialID.dropFirst())
        socialIcon.image = UIImage(named: profile.socialPlatform.iconName)
    }

    private func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        let hStack = HStackView(spacing: 8,
                                alignment: .center) {
            headerView
            nicknameLabel
            Spacer()
            disconnectButton
        }.cv.apply {
            $0.isLayoutMarginsRelativeArrangement = true
            $0.layoutMargins = UIEdgeInsets(top: 0, left: 23, bottom: 0, right: 23)
        }
        contentView.withSubViews {
            hStack
        }
        NSLayoutConstraint.activate([
            hStack.topAnchor.constraint(equalTo: contentView.topAnchor),
            hStack.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            hStack.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            hStack.bottomAnchor.constraint(equalTo: contentView.bottomAnchor)
        ])
    }
}
