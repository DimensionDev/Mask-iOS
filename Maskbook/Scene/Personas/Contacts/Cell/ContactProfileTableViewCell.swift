//
//  ContactTableViewCell.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/8/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit
import UStack

class ContactProfileTableViewCell: UITableViewCell {
    private var avatarView: AvatarView = {
        let view = AvatarView(title: "")
        view.applyCornerRadius(radius: 19, cornerCurve: .circular)
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
    
    private let platformIcon: UIImageView = {
        let imageView = UIImageView()
        NSLayoutConstraint.activate([
            imageView.heightAnchor.constraint(equalToConstant: 18),
            imageView.widthAnchor.constraint(equalToConstant: 18)
        ])
        imageView.applyRadius(radius: 9)
        imageView.layer.borderColor = Asset.Colors.Background.dark.color.cgColor
        imageView.layer.borderWidth = 1.5
        return imageView
    }()
    
    private let maskIcon: UIImageView = {
        let imageView = UIImageView()
        NSLayoutConstraint.activate([
            imageView.heightAnchor.constraint(equalToConstant: 20),
            imageView.widthAnchor.constraint(equalToConstant: 20)
        ])
        imageView.image = Asset.Icon.Logo.littleMask.image
        imageView.applyRadius(radius: 10)
        return imageView
    }()
    
    private lazy var headerView: UIView = {
        let view = UIView()
        view.withSubViews {
            avatarView
            platformIcon
        }
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 37),
            view.widthAnchor.constraint(equalToConstant: 45)
        ])
        NSLayoutConstraint.activate([
            avatarView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            avatarView.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            platformIcon.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            platformIcon.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        return view
    }()
    
    private var nicknameLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        return label
    }()
    
    private var socialIDLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.RH6
        label.textColor = Asset.Colors.Text.normal.color
        return label
    }()
    
    let inviteButton: PrimeryButton = {
        let button = PrimeryButton(title: L10n.Common.Controls.invite)
        NSLayoutConstraint.activate([
            button.heightAnchor.constraint(equalToConstant: 32),
            button.widthAnchor.constraint(equalToConstant: 72)
        ])
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
    }
    
    func config(profile: Profile) {
        socialIDLabel.text = profile.socialID
        avatarView.title = profile.nickname ?? profile.identifier.components(separatedBy: "/").last
        platformIcon.image = profile.socialPlatform.icon
        if profile.linkedPersona != nil {
            inviteButton.isHidden = true
            platformIcon.isHidden = false
            nicknameLabel.text = profile.nickname
                ?? profile.socialID
            maskIcon.isHidden = false
        } else {
            inviteButton.isHidden = false
            platformIcon.isHidden = true
            nicknameLabel.text = profile.nickname
                ?? profile.socialID
            maskIcon.isHidden = true
        }
    }

    private func setupUI() {
        backgroundColor = .clear
        selectionStyle = .none
        let vStack = VStackView(spacing: 4) {
            HStackView(spacing: 4) {
                nicknameLabel
                maskIcon
                Spacer()
            }
            socialIDLabel
        }
        
        let hStack = HStackView(spacing: 12,
                                alignment: .center) {
            headerView
            vStack
                .cv.apply {
                    $0.setContentHuggingPriority(.defaultLow, for: .horizontal)
                }
            inviteButton
        }
        hStack.backgroundColor = Asset.Colors.Background.dark.color
        hStack.layer.cornerRadius = 12
        hStack.clipsToBounds = true
        hStack.setContentHuggingPriority(.required - 1, for: .vertical)
        hStack.isLayoutMarginsRelativeArrangement = true
        hStack.layoutMargins = UIEdgeInsets(top: 12, left: 13, bottom: 12, right: 13)
        contentView.withSubViews {
            hStack
        }
        NSLayoutConstraint.activate([
            hStack.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            hStack.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 22.5),
            hStack.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -22.5),
            hStack.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -8)
        ])
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
            platformIcon.layer.borderColor = Asset.Colors.Background.dark.color.cgColor
    }
}
