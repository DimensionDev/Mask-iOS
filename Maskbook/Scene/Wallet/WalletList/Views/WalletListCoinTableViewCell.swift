//
//  WalletListCoinTableViewCell.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/4.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class WalletListCoinTableViewCell: UITableViewCell {
    static let reuseIdentifier = "WalletListCoinTableViewCell"
    let coinView = WalletListCoinView()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func update(topRounder: Bool, bottomRounder: Bool, selectImage: UIImage?, unselectImage: UIImage?, isSelected: Bool) {
        coinView.topRounder = topRounder
        coinView.bottomRounder = bottomRounder
        coinView.selectedImage = selectImage
        coinView.unselectedImage = unselectImage
        coinView.isSelected = isSelected
        
        coinView.setNeedsDisplay()
    }
}

private extension WalletListCoinTableViewCell {
    func setupUI() {
        contentView.addSubview(coinView)
        
        coinView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            coinView.topAnchor.constraint(equalTo: contentView.topAnchor),
            coinView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            contentView.bottomAnchor.constraint(equalTo: coinView.bottomAnchor),
            contentView.trailingAnchor.constraint(equalTo: coinView.trailingAnchor)
        ])
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletListCoinTableViewCellPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let selected = Asset.Images.Scene.WalletList.Coins.bscSelected.image
                let unselected = Asset.Images.Scene.WalletList.Coins.bscUnselected.image
                let cell = WalletListCoinTableViewCell(style: .default, reuseIdentifier: nil)
                cell.update(topRounder: true, bottomRounder: false, selectImage: selected, unselectImage: unselected, isSelected: false)
                cell.backgroundColor = .red
                return cell
            }
            .previewLayout(.fixed(width: 64, height: 56))
        }
    }
}
#endif
