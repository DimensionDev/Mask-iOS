//
//  WalletMultiChainCell.swift
//  Maskbook
//
//  Created by BradGao on 2021/11/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class WalletMultiChainCell: UICollectionViewCell {
    lazy var iconView: UIImageView = {
        let view = UIImageView()
        view.contentMode = .scaleAspectFit
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.RH7
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .center
        return label
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func setupUI() {
        backgroundColor = .clear
        contentView.backgroundColor = .clear
        
        contentView.addSubview(iconView)
        contentView.addSubview(titleLabel)

        iconView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            iconView.widthAnchor.constraint(equalToConstant: 48),
            iconView.heightAnchor.constraint(equalToConstant: 48),
            iconView.topAnchor.constraint(equalTo: contentView.topAnchor),
            iconView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor)
        ])
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            titleLabel.widthAnchor.constraint(equalTo: contentView.widthAnchor),
            titleLabel.heightAnchor.constraint(equalToConstant: 19),
            titleLabel.bottomAnchor.constraint(equalTo: contentView.bottomAnchor),
            titleLabel.centerXAnchor.constraint(equalTo: contentView.centerXAnchor)
        ])
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletMultiChainCellPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let cell = WalletMultiChainCell(frame: .zero)
                cell.iconView.image = Asset.Images.Scene.WalletList.Coins.ethSelected.image
                cell.titleLabel.text = "Etherum"

                return cell
            }
            .previewLayout(.fixed(width: 64, height: 78))
        }
    }
}
#endif
