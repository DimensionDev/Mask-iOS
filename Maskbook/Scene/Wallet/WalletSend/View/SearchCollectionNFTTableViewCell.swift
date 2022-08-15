//
//  SearchCollectionNFTTableViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreDataStack
import SnapKit
import UIKit
import UStack

extension SearchCollectionNFTTableViewCell {
    enum Section: Hashable {
        case main
    }

    typealias Item = Collectible
}

class SearchCollectionNFTTableViewCell: UITableViewCell {
    // MARK: - Title

    private lazy var tokenIconImageView: CollectibleIconImageView = {
        let imageView = CollectibleIconImageView()
        imageView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            imageView.widthAnchor.constraint(equalToConstant: 38),
            imageView.heightAnchor.constraint(equalToConstant: 38),
        ])
        return imageView
    }()

    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        return label
    }()

    private lazy var countLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.setContentCompressionResistancePriority(.required, for: .horizontal)
        return label
    }()

    private lazy var contentStackView = HStackView {
        tokenIconImageView
        Spacer(width: 8)
        titleLabel
        countLabel
    }

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        setupUI()
    }

    @available(*, unavailable)
    required init?(coder _: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    func update(items: [Collectible]) {
        guard let firstAsset = items.first else {
            return
        }
        titleLabel.text = firstAsset.collectionName
        countLabel.text = "\(items.count)"

        if let assetImageURLString = firstAsset.collectionImage {
            tokenIconImageView.setImageUrl(assetImageURLString, downsamplingSize: CGSize(width: 38, height: 38))
            tokenIconImageView.isHidden = false
        } else {
            tokenIconImageView.isHidden = true
        }
    }
}

extension SearchCollectionNFTTableViewCell {
    private func setupUI() {
        selectionStyle = .none
        backgroundColor = .clear
        contentView.addSubview(contentStackView)
        contentStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            contentStackView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 20),
            contentStackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 12),
            contentView.bottomAnchor.constraint(equalTo: contentStackView.bottomAnchor, constant: 20),
            contentView.trailingAnchor.constraint(equalTo: contentStackView.trailingAnchor, constant: 12),
        ])
    }
}
