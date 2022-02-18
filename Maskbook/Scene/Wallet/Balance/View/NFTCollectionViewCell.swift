//
//  NFTCollectionViewCell.swift
//  Maskbook
//
//  Created by Hugo L on 2021/7/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import SnapKit
import UIKit
import WebKit

class NFTCollectionViewCell: UICollectionViewCell {
    private lazy var imageView: CollectibleIconImageView = {
        let view = CollectibleIconImageView()
        view.placeholder = .view(emptyView)
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private let emptyView: EmptyView = {
        let view = EmptyView()
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        setupUI()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        
        imageView.setImageUrl(nil)
    }
    
    func update(collectible: Collectible) {
        imageView.setImageUrl(collectible.imageUrl?.absoluteString)
        if collectible.imageUrl?.absoluteString.isEmpty != false {
            emptyView.update(name: collectible.tokenName, id: collectible.tokenId)
        }
    }
    
    deinit {
        log.debug("deinit", source: "collection-image-deinit")
    }
}

extension NFTCollectionViewCell {
    private func setupUI() {
        contentView.addSubview(imageView)
        NSLayoutConstraint.activate([
            imageView.topAnchor.constraint(equalTo: contentView.topAnchor),
            imageView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor),
            imageView.widthAnchor.constraint(equalTo: imageView.heightAnchor),
            imageView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor)
        ])
    }
}

extension NFTCollectionViewCell {
    class EmptyView: UIView {
        private lazy var stackView: UIStackView = {
            let stack = UIStackView()
            stack.axis = .vertical
            stack.spacing = 8
            stack.alignment = .center
            stack.isLayoutMarginsRelativeArrangement = true
            stack.layoutMargins = UIEdgeInsets(top: 8, left: 8, bottom: 8, right: 8)
            
            stack.addArrangedSubview(imageView)
            stack.addArrangedSubview(nameLabel)
            stack.addArrangedSubview(idLabel)
            return stack
        }()
        
        private lazy var imageView: UIImageView = {
            let view = UIImageView()
            view.image = Asset.Images.Scene.Balance.tokenIconPlaceholder.image
            view.snp.makeConstraints { make in
                make.width.equalTo(view.snp.height)
            }
            return view
        }()
        
        private lazy var nameLabel: UILabel = {
            let label = UILabel()
            label.setContentHuggingPriority(.required, for: .vertical)
            label.font = FontStyles.MH6
            label.textColor = Asset.Colors.Text.normal.color
            return label
        }()
        
        private lazy var idLabel: UILabel = {
            let label = UILabel()
            label.setContentHuggingPriority(.required, for: .vertical)
            label.font = FontStyles.MH6
            label.textColor = Asset.Colors.Text.normal.color
            return label
        }()
        
        override init(frame: CGRect) {
            super.init(frame: frame)
            addSubview(stackView)
            stackView.snp.makeConstraints { make in
                make.edges.equalToSuperview()
            }
            
            backgroundColor = Asset.Colors.Background.selected.color
            applyCornerRadius(radius: 8)
        }
        
        @available(*, unavailable)
        required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
        }
        
        func update(name: String?, id: String?) {
            nameLabel.text = name
            idLabel.text = "#\(id ?? "")"
        }
    }
}
