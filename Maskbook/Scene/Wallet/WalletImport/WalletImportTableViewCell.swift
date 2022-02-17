//
//  WalletImportTableViewCell.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class WalletImportTableViewCell: UITableViewCell {
    lazy var iconView: UIImageView = {
        let view = UIImageView()
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
        label.numberOfLines = 0
        return label
    }()
    
    lazy var titleVStack: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.spacing = 4
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        subtitleLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(titleLabel)
        view.addArrangedSubview(subtitleLabel)
        return view
    }()
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fill
        view.layoutMargins = UIEdgeInsets(top: 16, left: 22, bottom: 16, right: 22)
        view.isLayoutMarginsRelativeArrangement = true
        view.spacing = 8
        return view
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func setupUI() {
        backgroundColor = Asset.Colors.Background.normal.color
        selectionStyle = .none
        accessoryType = .disclosureIndicator
        
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        contentView.addSubview(stackView)

        stackView.addArrangedSubview(iconView)
        stackView.addArrangedSubview(titleVStack)

        stackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: contentView.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            contentView.bottomAnchor.constraint(equalTo: stackView.bottomAnchor),
            contentView.trailingAnchor.constraint(equalTo: stackView.trailingAnchor)
        ])

        iconView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            iconView.widthAnchor.constraint(equalToConstant: 32),
            iconView.heightAnchor.constraint(equalToConstant: 32)
        ])
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletImportTableViewCellPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let cell = WalletImportTableViewCell(style: .default, reuseIdentifier: nil)
                cell.iconView.backgroundColor = .red
                cell.titleLabel.text = "Etherum"
                cell.subtitleLabel.text = "change"

                return cell
            }
            .previewLayout(.fixed(width: 375, height: 156))
        }
    }
}
#endif
