//
//  ContactEmptyView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/4/6.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit
import UStack
import CombineEvent

class ContactEmptyView: StackView {
    
    func setSearchMode(isSearching: Bool) {
        if isSearching {
            emptyImageView.image = Asset.Images.Scene.Personas.search.image
            emptyTipsLabel.text = L10n.Scene.PersonaContacts.searchContactTips
        } else {
            emptyImageView.image = Asset.Images.Scene.Personas.emptyContact.image
            emptyTipsLabel.text = L10n.Scene.PersonaContacts.emptyContactsTips
        }
        inviteButton.isHidden = isSearching
    }
    
    init() {
        super.init(frame: .zero)
        backgroundColor = .clear
        setupSubViews()
    }
    
    required init(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func setupSubViews() {
        withSubViews {
            emptyView
        }
        NSLayoutConstraint.activate([
            emptyView.topAnchor.constraint(equalTo: topAnchor),
            emptyView.leadingAnchor.constraint(equalTo: leadingAnchor),
            emptyView.trailingAnchor.constraint(equalTo: trailingAnchor),
            emptyView.bottomAnchor.constraint(equalTo: bottomAnchor),
        ])
    }
    
    lazy var emptyView: UIStackView = VStackView(spacing: 24,
                                                 distribution: StackView.Distribution.fill,
                                                 alignment: StackView.Alignment.center) {
        emptyImageView
        emptyTipsLabel
        inviteButton.cv.apply {
            NSLayoutConstraint.activate([
                $0.heightAnchor.constraint(equalToConstant: 40),
                $0.widthAnchor.constraint(equalToConstant: 128)
            ])
        }
    }

    private lazy var emptyImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        return imageView
    }()

    private lazy var emptyTipsLabel: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.PersonaContacts.emptyContactsTips
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH6
        label.numberOfLines = 0
        label.textAlignment = .center
        return label
    }()

    private lazy var inviteButton: PrimeryButton = {
        let button = PrimeryButton(title: L10n.Common.Controls.invite)
        button.addTarget(self, action: #selector(shareAction(sender:)), for: .touchUpInside)
        return button
    }()
}

extension ContactEmptyView {
    @objc
    func shareAction(sender: UIView) {
        guard let url = URL(string: "https://mask.io/download-links/") else { return }

        let activityViewController = UIActivityViewController(
            activityItems: [url],
            applicationActivities: [DownloadMaskActivity(url: url)]
        )
        Coordinator.main.present(scene: .activityViewController(
            activityViewController: activityViewController,
            sourceView: nil,
            barButtonItem: nil
        ),
        transition: .presentActivity(animated: true, from: sender, completion: nil))
    }
}
