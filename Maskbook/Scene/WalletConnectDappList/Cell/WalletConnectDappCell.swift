//
//  WalletConnectDappCell.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
import WalletConnectSwift

class WalletConnectDappCell: UITableViewCell {
    var disposeBag = Set<AnyCancellable>()
    private lazy var icon: CollectibleIconImageView = {
        let imageView = CollectibleIconImageView()
        imageView.applyCornerRadius(radius: 16)
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    private lazy var titleStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.addArrangedSubview(titleLabel)
        stackView.addArrangedSubview(subTitleLabel)
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH6
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    let subTitleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH6
        label.translatesAutoresizingMaskIntoConstraints = false
        label.lineBreakMode = .byTruncatingMiddle
        return label
    }()
    
    lazy var disconnectButton: UIButton = {
        let button = UIButton()
        button.setTitleColor(Asset.Colors.Public.blue.color, for: .normal)
        button.titleLabel?.font = FontStyles.BH5
        button.setTitle(L10n.Scene.WalletConnect.disconnect, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    override func prepareForReuse() {
        super.prepareForReuse()
        disposeBag.removeAll()
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        _init()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        _init()
    }
}

extension WalletConnectDappCell {
    private func _init() {
        separatorInset = UIEdgeInsets(all: .zero)
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fill
        stackView.alignment = .center
        stackView.spacing = 8
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: 12, bottom: 0, right: 12)
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.backgroundColor = Asset.Colors.Background.dark.color
        stackView.applyCornerRadius(radius: 12)
        contentView.addSubview(stackView)
        
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            stackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 22),
            stackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -22),
            stackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -8)
        ])
        
        NSLayoutConstraint.activate([
            icon.heightAnchor.constraint(equalToConstant: 32),
            icon.widthAnchor.constraint(equalToConstant: 32)
        ])
        
        stackView.addArrangedSubview(icon)
        
        stackView.addArrangedSubview(titleStackView)
        
        NSLayoutConstraint.activate([
            disconnectButton.widthAnchor.constraint(equalToConstant: 91)
        ])

        stackView.addArrangedSubview(disconnectButton)
    }
    
    func configWith(session: Session) {
        if let url = session.dAppInfo.peerMeta.icons.first {
            icon.setImageUrl(url.absoluteString)
        }
        if let chainId = session.walletInfo?.chainId {
            let network = BlockChainNetwork(chain: .ethereum, networkId: UInt64(chainId))
            titleLabel.text = session.dAppInfo.peerMeta.name + " " + network.name
        }
        subTitleLabel.text = session.walletInfo?.accounts.first
    }
}
