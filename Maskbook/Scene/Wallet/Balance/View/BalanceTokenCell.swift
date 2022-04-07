//
//  BalanceTokenCell.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/8.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import UIKit

class BalanceTokenCell: UITableViewCell {
    private var containerView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Public.Background.dark.color
        view.applyCornerRadius(radius: 8)
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private var tokenNameLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var tokenAmountlabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = UIFont.systemFont(ofSize: 14, weight: .medium)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var tokenBalanceLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        label.textAlignment = .right
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var tokenIconImageView: TokenIconImageView = {
        let view = TokenIconImageView()
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private var disposeBag = Set<AnyCancellable>()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        _init()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        _init()
    }
    
    private func _init() {
        selectionStyle = .none
        backgroundColor = .clear
        
        containerView.layoutMargins = UIEdgeInsets(top: 8, left: 12, bottom: 8, right: 12)
        
        contentView.addSubview(containerView)
        containerView.addSubview(tokenIconImageView)
        containerView.addSubview(tokenNameLabel)
        containerView.addSubview(tokenAmountlabel)
        containerView.addSubview(tokenBalanceLabel)
        
        NSLayoutConstraint.activate([
            containerView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: LayoutConstraints.leading),
            containerView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -LayoutConstraints.trailing),
            containerView.topAnchor.constraint(equalTo: contentView.topAnchor,
                                               constant: 6),
            containerView.heightAnchor.constraint(equalToConstant: 63),
            containerView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor,
                                                  constant: -6)
        ])
        
        NSLayoutConstraint.activate([
            tokenIconImageView.leadingAnchor.constraint(equalTo: containerView.layoutMarginsGuide.leadingAnchor),
            tokenIconImageView.topAnchor.constraint(equalTo: containerView.layoutMarginsGuide.topAnchor, constant: 4),
            tokenIconImageView.widthAnchor.constraint(equalToConstant: 49),
            tokenIconImageView.heightAnchor.constraint(equalToConstant: 38)
        ])
        
        tokenNameLabel.setContentCompressionResistancePriority(.required - 1, for: .horizontal)
        tokenNameLabel.setContentHuggingPriority(.required - 1, for: .horizontal)
        NSLayoutConstraint.activate([
            tokenNameLabel.leadingAnchor.constraint(equalTo: tokenIconImageView.trailingAnchor, constant: 8),
            tokenNameLabel.topAnchor.constraint(equalTo: containerView.layoutMarginsGuide.topAnchor),
            tokenNameLabel.heightAnchor.constraint(equalToConstant: 24)
        ])
        
        tokenAmountlabel.setContentCompressionResistancePriority(.required - 1, for: .horizontal)
        NSLayoutConstraint.activate([
            tokenAmountlabel.leadingAnchor.constraint(equalTo: tokenNameLabel.leadingAnchor),
            tokenAmountlabel.bottomAnchor.constraint(equalTo: containerView.layoutMarginsGuide.bottomAnchor),
            tokenAmountlabel.topAnchor.constraint(equalTo: tokenNameLabel.bottomAnchor,
                                                  constant: 2)
        ])
        
        tokenBalanceLabel.setContentCompressionResistancePriority(.required, for: .horizontal)
        tokenBalanceLabel.setContentHuggingPriority(.required, for: .horizontal)
        NSLayoutConstraint.activate([
            tokenBalanceLabel.trailingAnchor.constraint(equalTo: containerView.layoutMarginsGuide.trailingAnchor),
            tokenBalanceLabel.centerYAnchor.constraint(equalTo: tokenIconImageView.centerYAnchor),
            tokenBalanceLabel.heightAnchor.constraint(equalToConstant: 24),
            tokenBalanceLabel.leadingAnchor.constraint(equalTo: tokenNameLabel.trailingAnchor, constant: 16),
            tokenBalanceLabel.leadingAnchor.constraint(greaterThanOrEqualTo: tokenAmountlabel.trailingAnchor, constant: 16)
        ])
    }
    
    func setup(with token: Token) {
        token.publisher(for: \.name)
            .assign(to: \.text, on: tokenNameLabel)
            .store(in: &disposeBag)
        token.publisher(for: \.quantity)
            .map { _ in
                return "\(token.displayQuantity.stringValue.currency) \(token.symbol ?? "")"
            }
            .assign(to: \.text, on: tokenAmountlabel)
            .store(in: &disposeBag)
        
        Publishers.CombineLatest3(token.publisher(for: \.quantity),
                                  token.publisher(for: \.price),
                                  UserDefaultPublishers.currency)
            .map { _, _, currency in
                return "\(currency.symbol)\(token.displayBalance.stringValue.currency)"
            }
            .assign(to: \.text, on: tokenBalanceLabel)
            .store(in: &disposeBag)
        
        Publishers.CombineLatest3(token.publisher(for: \.chainId),
                                  token.publisher(for: \.networkId),
                                  UserDefaultSettings.shared.displayBlockChainPublisher)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] chainId, networkId, displayBlockChain in
                guard let tokenBlockChain = BlockChainNetwork(chainId: Int(chainId),
                                                              networkId: UInt64(networkId)) else {
                    return
                }
                // Token BlockChain icon is only visible when displayBlockChain is **all**
                self?.tokenIconImageView.setBlockchainIcon(blockchain: tokenBlockChain, isHidden: displayBlockChain != .all)
            }
            .store(in: &disposeBag)
        
        token.publisher(for: \.logoUrl)
            .sink { [weak self] url in
                self?.tokenIconImageView.setImage(iconImageUrl: url)
            }
            .store(in: &disposeBag)
    }
    
    override func prepareForReuse() {
        disposeBag.removeAll()
        
        super.prepareForReuse()
    }
    
    override func setHighlighted(_ highlighted: Bool, animated: Bool) {
        super.setHighlighted(highlighted, animated: animated)
        let newColor: UIColor = highlighted ? Asset.Colors.Public.Background.info.color : Asset.Colors.Public.Background.dark.color
        self.containerView.backgroundColor = newColor
    }
}
