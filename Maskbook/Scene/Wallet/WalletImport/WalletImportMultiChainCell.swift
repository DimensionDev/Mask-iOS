//
//  WalletImportMultiChainCell.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class WalletImportMultiChainCell: UITableViewCell {
    lazy var iconView: UIImageView = {
        let view = UIImageView()
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.CreateWallet.multichainWalletTitle
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        return label
    }()
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fill
        view.layoutMargins = UIEdgeInsets(top: 16, left: LayoutConstraints.leading, bottom: 16, right: LayoutConstraints.trailing)
        view.isLayoutMarginsRelativeArrangement = true
        view.spacing = 8
        return view
    }()
    
    lazy var questionButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.WalletAdd.question.image, for: .normal)
        return button
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
        accessoryView = questionButton
        
        contentView.backgroundColor = Asset.Colors.Background.container.color
        contentView.addSubview(stackView)

        stackView.addArrangedSubview(iconView)
        stackView.addArrangedSubview(titleLabel)

        stackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: contentView.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            contentView.bottomAnchor.constraint(equalTo: stackView.bottomAnchor)
        ])

        iconView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            iconView.widthAnchor.constraint(equalToConstant: 64),
            iconView.heightAnchor.constraint(equalToConstant: 32)
        ])
        
        questionButton.addTarget(self, action: #selector(questionButtonDidClicked), for: .touchUpInside)
    }
    
    @objc
    private func questionButtonDidClicked() {
        Coordinator.main.present(scene: .walletMultichainAlert, transition: .alertController(completion: nil))
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletImportMultiChainCellPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let cell = WalletImportMultiChainCell(style: .default, reuseIdentifier: nil)
                cell.iconView.image = Asset.Images.Scene.WalletAdd.multichainIcon.image
                cell.titleLabel.text = L10n.Scene.CreateWallet.multichainWalletTitle

                return cell
            }
            .previewLayout(.fixed(width: 330, height: 96))
        }
    }
}
#endif
