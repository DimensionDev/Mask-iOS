//
//  SelectNetworkTableViewCell.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class SelectNetworkTableViewCell: UITableViewCell {
    lazy var bgView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.layer.cornerRadius = 12
        view.clipsToBounds = true
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        return label
    }()
    
    lazy var subtitleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Text.dark.color
        return label
    }()
    
    lazy var checkImageView: UIImageView = {
        let image = Asset.Images.Scene.WalletList.check.image
        let view = UIImageView(image: image)
        view.isHidden = true
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 24),
            view.heightAnchor.constraint(equalToConstant: 24)
        ])
        return view
    }()
    
    lazy var coinImageView: UIImageView = {
        let view = UIImageView()
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 32),
            view.heightAnchor.constraint(equalToConstant: 32)
        ])
        return view
    }()
    
    lazy var hStackView0: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fill
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 12, left: 16, bottom: 12, right: 16)
        view.spacing = 8
        
        vStackView1.translatesAutoresizingMaskIntoConstraints = false
        hStackView2.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(coinImageView)
        view.addArrangedSubview(vStackView1)
        view.addArrangedSubview(hStackView2)
        return view
    }()
    
    lazy var vStackView1: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .leading
        view.spacing = 8
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        subtitleLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(titleLabel)
        view.addArrangedSubview(subtitleLabel)
        return view
    }()
    
    lazy var hStackView2: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        
        checkImageView.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(checkImageView)
        return view
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        checkImageView.isHidden = true
    }
    
    func update(coin: SelectNetworkViewModel.Coin) {
        titleLabel.text = coin.name
        subtitleLabel.text = coin.chain
        checkImageView.isHidden = !coin.isSelected
        coinImageView.image = coin.image
        bgView.isHidden = !coin.isSelected
    }
    
    private func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        contentView.addSubview(bgView)
        contentView.addSubview(hStackView0)

        bgView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            bgView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            bgView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: LayoutConstraints.leading),
            contentView.bottomAnchor.constraint(equalTo: bgView.bottomAnchor, constant: 8),
            contentView.trailingAnchor.constraint(equalTo: bgView.trailingAnchor, constant: LayoutConstraints.trailing)
        ])
        
        hStackView0.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            hStackView0.topAnchor.constraint(equalTo: bgView.topAnchor),
            hStackView0.leadingAnchor.constraint(equalTo: bgView.leadingAnchor),
            bgView.bottomAnchor.constraint(equalTo: hStackView0.bottomAnchor),
            bgView.trailingAnchor.constraint(equalTo: hStackView0.trailingAnchor)
        ])
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct SelectNetworkTableViewCellPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let cell = SelectNetworkTableViewCell(style: .default, reuseIdentifier: nil)
                let item = WalletCoreStorage.getCurrentNetwork()
                let eth = SelectNetworkViewModel.Coin(network: item, isSelected: true)
                cell.update(coin: eth)
                return cell
            }
            .previewLayout(.fixed(width: 375, height: 85))
        }
    }
}
#endif
