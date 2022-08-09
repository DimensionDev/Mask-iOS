//
//  NFTCollectionDetailTableViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2022/1/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import CoreDataStack
import UIKit
import web3swift

class NFTCollectionDetailTableViewCell: UITableViewCell {
    var token: Collectible
    private var collectionInfo: NFTScanCollectionModel?

    private var backView: UIView = {
        let view = UIView()
        view.applyCornerRadius(radius: 20)
        view.backgroundColor = Asset.Colors.Background.selected.color
        return view
    }()

    private var titleLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .left
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH3
        return label
    }()

    private lazy var tokenImageView: CollectibleIconImageView = {
        let view = CollectibleIconImageView()
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()

    private var collectionLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .left
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH5
        return label
    }()

    private var moreButton: UIButton = {
        let button = UIButton(type: .system)
        button.tintColor = Asset.Colors.Text.dark.color
        button.setImage(Asset.Images.Scene.Nft.more.image, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()

    private var lineView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        return view
    }()

    private var priceLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .left
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH7
        return label
    }()

    private var priceETHLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .left
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        return label
    }()

    private var floorPriceLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .right
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH7
        label.text = L10n.Scene.NftDetail.floorPrice

        return label
    }()

    private var floorPriceETHLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .right
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        return label
    }()

    override class func awakeFromNib() {}

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        token = Collectible()
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        initViews()
    }

    required init?(coder: NSCoder) {
        token = Collectible()
        super.init(coder: coder)
        initViews()
    }

    func initViews() {
        selectionStyle = .none
        backgroundColor = .clear
        contentView.addSubview(backView)
        backView.snp.makeConstraints { make in
            make.edges.equalTo(contentView).inset(LayoutConstraints.horizontal)
            make.height.equalTo(160)
        }

        backView.addSubview(titleLabel)
        titleLabel.snp.makeConstraints {
            $0.left.top.equalTo(12)
        }

        backView.addSubview(tokenImageView)
        tokenImageView.snp.makeConstraints {
            $0.left.equalTo(titleLabel)
            $0.top.equalTo(titleLabel.snp.bottom).offset(7)
            $0.height.equalTo(38)
            $0.width.equalTo(38)
        }

        backView.addSubview(moreButton)
        moreButton.snp.makeConstraints {
            $0.right.equalTo(-12)
            $0.top.equalTo(28)
            $0.height.equalTo(24)
            $0.width.equalTo(24)
        }

        backView.addSubview(collectionLabel)
        collectionLabel.snp.makeConstraints {
            $0.left.equalTo(tokenImageView.snp.right).offset(4)
            $0.centerY.equalTo(tokenImageView)
        }

        backView.addSubview(lineView)
        lineView.snp.makeConstraints {
            $0.left.right.equalTo(backView)
            $0.top.equalTo(88)
            $0.height.equalTo(0.5)
        }

        backView.addSubview(priceLabel)
        priceLabel.snp.makeConstraints {
            $0.left.equalTo(titleLabel)
            $0.top.equalTo(lineView.snp.bottom).offset(12)
        }

        backView.addSubview(priceETHLabel)
        priceETHLabel.snp.makeConstraints {
            $0.left.equalTo(titleLabel)
            $0.top.equalTo(priceLabel.snp.bottom).offset(10)
        }

        backView.addSubview(floorPriceLabel)
        floorPriceLabel.snp.makeConstraints {
            $0.right.equalTo(-12)
            $0.top.equalTo(priceLabel)
        }

        backView.addSubview(floorPriceETHLabel)
        floorPriceETHLabel.snp.makeConstraints {
            $0.right.equalTo(floorPriceLabel)
            $0.top.equalTo(priceETHLabel)
        }
        moreButton.addTarget(self, action: #selector(moreButtonDidClick(sender:)), for: .touchUpInside)
    }

    @objc
    private func moreButtonDidClick(sender _: UIButton) {
        
        guard let collectionInfo = collectionInfo else { return }
        
        Coordinator.main.present(scene: .nftAction(nftToken: token, collection: collectionInfo), transition: .panModel(animated: true))
    }

    func setCollectionStauts(collection: NFTScanCollectionModel, token: Collectible) {
        self.token = token
        self.collectionInfo = collection
        titleLabel.text = token.name
        collectionLabel.text = collection.name
        tokenImageView.setImageUrl(collection.logoURL)
        floorPriceLabel.text = L10n.Scene.NftDetail.floorPrice
        if let floorPrice = collection.floorPrice {
            floorPriceETHLabel.text = "\(floorPrice)\(collection.priceSymbol)"

        } else {
            floorPriceETHLabel.text = "-"
        }

        priceLabel.text = L10n.Scene.NftDetail.lastSalePrice

        if let latestTradePrice = token.latestTradePrice {
            priceETHLabel.text = "\(latestTradePrice)\(collection.priceSymbol)"
        } else {
            priceETHLabel.text = "NONE"
        }
    }
}
