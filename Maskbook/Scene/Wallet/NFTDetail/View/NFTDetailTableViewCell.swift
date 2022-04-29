//
//  NFTDetailTableViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import UIKit

class NFTDetailTableViewCell: UITableViewCell {
    typealias EmptyView = NFTCollectionViewCell.EmptyView
    
    private lazy var tokenImageView: CollectibleIconImageView = {
        let view = CollectibleIconImageView()
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()

    private let emptyView: EmptyView = {
        let view = EmptyView()
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        initSubView()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        initSubView()
    }
    
    private func initSubView() {
        selectionStyle = .none
        backgroundColor = .clear
        
        contentView.addSubview(tokenImageView)
        
        NSLayoutConstraint.activate([
            tokenImageView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 24),
            tokenImageView.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor, constant: 6),
            tokenImageView.trailingAnchor.constraint(equalTo: contentView.readableContentGuide.trailingAnchor, constant: -6),
            tokenImageView.heightAnchor.constraint(equalTo: tokenImageView.widthAnchor),
            tokenImageView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -16)
        ])
    }
    
    func setToken(_ token: Collectible) {
        tokenImageView.setImageUrl(token.imageUrl?.absoluteString, token.animationUrl?.absoluteString)
    
        if token.imageUrl?.absoluteString.isEmpty != false {
            emptyView.update(name: token.tokenName, id: token.tokenId)
        }
    }
}
