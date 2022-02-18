//
//  BalanceCollectiblesCell.swift
//  Maskbook
//
//  Created by Hugo L on 2021/7/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import SnapKit
import UIKit

protocol BalanceCollectiblesCellDelegate: NSObjectProtocol {
    func balanceCollectiblesCellDelegate(nftToken: Collectible)
}

extension BalanceCollectiblesCell {
    enum Section: Hashable {
        case main
    }
    
    typealias Item = Collectible
}

class BalanceCollectiblesCell: UITableViewCell {
    private lazy var container: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.layer.cornerRadius = 12
        return view
    }()
    
    // MARK: - Title
    private lazy var tokenIconImageView: CollectibleIconImageView = {
        let imageView = CollectibleIconImageView()
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.snp.makeConstraints {
            $0.size.equalTo(38)
        }
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
    
    private lazy var arrowButton: UIButton = {
        let button = HitTestExpandedButton()
        button.setImage(Asset.Images.Scene.Balance.expandArrowDown.image, for: .normal)
        button.isUserInteractionEnabled = false
        button.setContentCompressionResistancePriority(.required, for: .horizontal)
        return button
    }()
    
    private lazy var titleStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 8
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0)
        stackView.isLayoutMarginsRelativeArrangement = true
        
        stackView.addArrangedSubview(tokenIconImageView)
        stackView.addArrangedSubview(titleLabel)
        
        let spacer = UIView()
        spacer.setContentHuggingPriority(.defaultLow, for: .horizontal)
        spacer.setContentCompressionResistancePriority(.defaultLow, for: .horizontal)
        stackView.addArrangedSubview(spacer)
        
        stackView.addArrangedSubview(countLabel)
        stackView.addArrangedSubview(arrowButton)
        return stackView
    }()
    
    // MARK: - Content
    private lazy var nameLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH5
        return label
    }()
    
    private static let collectibleItemSpacing: CGFloat = 16
    private static let itemPerRow: CGFloat = 2
    
    private lazy var collectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.minimumLineSpacing = Self.collectibleItemSpacing
        flowLayout.minimumInteritemSpacing = Self.collectibleItemSpacing
        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: flowLayout)
        collectionView.backgroundColor = .clear
        collectionView.isScrollEnabled = false
        collectionView.delegate = self 
        
        collectionView.register(NFTCollectionViewCell.self,
                                forCellWithReuseIdentifier:
                                    String(describing: NFTCollectionViewCell.self))
        return collectionView
    }()
    
    private var collectionViewHeight: NSLayoutConstraint?
    
    // MARK: - Other UI
    private lazy var containerStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.spacing = 16
        stackView.alignment = .fill
        stackView.layoutMargins = UIEdgeInsets(top: 8, left: 0, bottom: 8, right: 0)
        stackView.isLayoutMarginsRelativeArrangement = true
        
        stackView.addArrangedSubview(titleStackView)
        stackView.addArrangedSubview(collectionView)
        return stackView
    }()
    
    // MARK: - Data
    lazy var dataSource: UICollectionViewDiffableDataSource<Section, Item> = {
        return UICollectionViewDiffableDataSource<Section, Item>(collectionView: collectionView) { collectionView, indexPath, item in
            let cell: NFTCollectionViewCell = collectionView.dequeCell(at: indexPath)
            cell.update(collectible: item)
            return cell
        }
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        setupUI()
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    weak var delegate: BalanceCollectiblesCellDelegate?
    
    func update(items: [Collectible], expandedENS: Bool, itemWidth: CGFloat) {
        guard let firstAsset = items.first else { return }
        
        var newSnapshot = NSDiffableDataSourceSnapshot<Section, Item>()
        newSnapshot.appendSections([.main])
        let tokenItems = items
        newSnapshot.appendItems(tokenItems, toSection: .main)
        dataSource.apply(newSnapshot, animatingDifferences: false)
        
        titleLabel.text = firstAsset.collectionName
        countLabel.text = "\(items.count)"
        
        if !expandedENS {
            collectionViewHeight?.isActive = false
            collectionView.isHidden = true
            arrowButton.setImage(Asset.Images.Scene.Balance.expandArrowDown.image, for: .normal)
        } else {
            let count = ceil(CGFloat(items.count) / Self.itemPerRow)
            collectionViewHeight?.constant = itemWidth * count + (count - 1) * Self.collectibleItemSpacing
            collectionViewHeight?.isActive = !items.isEmpty
            collectionView.isHidden = items.isEmpty
            arrowButton.setImage(Asset.Images.Scene.Balance.expandArrowUp.image, for: .normal)
        }
        
        if let assetImageURLString = firstAsset.collectionImage {
            tokenIconImageView.setImageUrl(assetImageURLString, downsamplingSize: CGSize(width: 38, height: 38))
            tokenIconImageView.isHidden = false
        } else {
            tokenIconImageView.isHidden = true
        }
    }
    
    static func calculateItemWidth(collectionViewWidth: CGFloat) -> CGFloat {
        let itemWidth = (collectionViewWidth - Self.collectibleItemSpacing) / 2.0
        return itemWidth
    }
}

extension BalanceCollectiblesCell {
    private func setupUI() {
        selectionStyle = .none
        backgroundColor = .clear
        contentView.addSubview(container)
        
        container.snp.makeConstraints {
            $0.leading.equalTo(contentView.readableContentGuide).offset(2)
            $0.trailing.equalTo(contentView.readableContentGuide).offset(-2)
            $0.top.equalTo(16)
            $0.bottom.equalTo(0)
        }
        
        container.addSubview(containerStackView)
        containerStackView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
        
        collectionViewHeight = collectionView.heightAnchor.constraint(equalToConstant: 0)
        collectionViewHeight?.isActive = false
    }
}

extension BalanceCollectiblesCell: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return }
        delegate?.balanceCollectiblesCellDelegate(nftToken: item)
    }
    
    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        sizeForItemAt indexPath: IndexPath) -> CGSize {
        let itemWidth = Self.calculateItemWidth(collectionViewWidth: collectionView.bounds.width)
        return CGSize(width: itemWidth, height: itemWidth)
    }
}
