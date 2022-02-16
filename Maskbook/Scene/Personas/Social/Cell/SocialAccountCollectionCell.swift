//
//  SocialAccountCollectionCell.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
import CoreDataStack

protocol SocialAccountCollectionCellDelegate: AnyObject {
    func deleteAction(profileIdentifier: String)
}

class SocialAccountCollectionCell: UICollectionViewCell { 
    weak var delegate: SocialAccountCollectionCellDelegate?
    
    private lazy var deleteImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Personas.delete.image
        NSLayoutConstraint.activate([
            imageView.heightAnchor.constraint(equalToConstant: 20),
            imageView.widthAnchor.constraint(equalToConstant: 20)
        ])
        return imageView
    }()
    
    private var disposeBag = Set<AnyCancellable>()
    
    private var avatarView: AvatarView = {
        let view = AvatarView(title: "")
        view.applyCornerRadius(radius: 32, cornerCurve: .circular)
        view.backgroundColor = Asset.Colors.Public.blue.color
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 64),
            view.heightAnchor.constraint(equalToConstant: 64)
        ])

        return view
    }()
    
    private lazy var platformView: UIImageView = {
        let view = UIImageView()
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 22),
            view.widthAnchor.constraint(equalToConstant: 22)
        ])
        view.applyCornerRadius(radius: 11)
        view.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
        view.layer.borderWidth = 1
        return view
    }()
    
    private var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH7
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .center
        label.lineBreakMode = .byTruncatingTail
        return label
    }()
    
    override func prepareForReuse() {
        super.prepareForReuse()
        disposeBag.removeAll()
    }
    
    override init(frame: CGRect) {
        super.init(frame: .zero)
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupUI()
    }
    
    func setupUI() {
        contentView.withSubViews {
            avatarView
            platformView
            titleLabel
            deleteImageView
        }
        NSLayoutConstraint.activate([
            avatarView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            platformView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor, constant: 28),
            titleLabel.centerXAnchor.constraint(equalTo: contentView.centerXAnchor)
        ])
        
        NSLayoutConstraint.activate([
            avatarView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 12),
            platformView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 56)
        ])
        
        NSLayoutConstraint.activate([
            titleLabel.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 82),
            titleLabel.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 12),
            titleLabel.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -12)
        ])
        
        NSLayoutConstraint.activate([
            deleteImageView.topAnchor.constraint(equalTo: avatarView.topAnchor),
            deleteImageView.leadingAnchor.constraint(equalTo: avatarView.leadingAnchor)
        ])
    }
    
    func configWith(profile: ProfileRecord) {
        titleLabel.text = profile.socialID
        avatarView.title = String(profile.socialID.dropFirst())
        avatarView.setNetworkURL(url: profile.avatar)
        platformView.image = profile.socialPlatform.icon
        deleteImageView
            .cv.tapGesture()
            .sink { [weak self] _ in
                self?.deleteAction(profileIdentifier: profile.nonOptionalIdentifier)
            }
            .store(in: &disposeBag)
    }
    
    func setEditMode(isEditing: Bool) {
        deleteImageView.isHidden = !isEditing
    }
    
    func deleteAction(profileIdentifier: String) {
        delegate?.deleteAction(profileIdentifier: profileIdentifier)
    }
}

extension SocialAccountCollectionCell {
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        platformView.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
    }
}
