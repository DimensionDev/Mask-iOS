//
//  SearchSingleNFTCollectionViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreDataStack
import SnapKit
import UIKit
import UStack
import WebKit

class SearchSingleNFTCollectionViewCell: UICollectionViewCell {
    static let itemSize = CGSize(width: 104, height: 140)

    private lazy var imageView: CollectibleIconImageView = {
        let view = CollectibleIconImageView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.applyCornerRadius(radius: 12)
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 104),
            view.heightAnchor.constraint(equalToConstant: 104),
        ])
        return view
    }()

    private lazy var tokenIDLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.RH6
        label.textColor = Asset.Colors.Text.dark.color
        NSLayoutConstraint.activate([
            label.heightAnchor.constraint(equalToConstant: 20),
        ])
        return label
    }()

    lazy var checkImageView: UIImageView = {
        let image = Asset.Icon.Cell.cellUncheck.image
        let view = UIImageView(image: image)
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 24),
            view.heightAnchor.constraint(equalToConstant: 24),
        ])
        return view
    }()

    private lazy var vStackView = VStackView(spacing: 14) {
        imageView
        tokenIDLabel
    }

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupUI()
    }

    @available(*, unavailable)
    required init?(coder _: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func prepareForReuse() {
        super.prepareForReuse()

        imageView.setImageUrl(nil)
    }

    private func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color

        contentView.addSubview(vStackView)
        vStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            vStackView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 12),
            vStackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            vStackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -12),
            vStackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
        ])

        imageView.addSubview(checkImageView)
        NSLayoutConstraint.activate([
            checkImageView.topAnchor.constraint(equalTo: imageView.topAnchor, constant: 8),
            checkImageView.trailingAnchor.constraint(equalTo: imageView.trailingAnchor, constant: -8),
        ])
    }

    func update(collectible: Collectible, selectedCollectible: [Collectible]) {
        imageView.setImageUrl(collectible.imageUrl?.absoluteString)
        tokenIDLabel.text = collectible.tokenId

        if selectedCollectible.contains(collectible) {
            checkImageView.image = Asset.Icon.Cell.cellCheck.image
        } else {
            checkImageView.image = Asset.Icon.Cell.cellUncheck.image
        }
    }
}
