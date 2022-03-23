//
//  TokenListTableViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import UIKit

class TokenListTableViewCell: UITableViewCell {
    private var containerView: UIView = {
        let view = UIView()
        view.applyCornerRadius(radius: 12)
        view.backgroundColor = Asset.Colors.Background.dark.color
        return view
    }()
    
    private var tokenNameLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH6
        return label
    }()
    
    private var tokenAmountlabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH6
        return label
    }()
    
    private var tokenBalanceLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH6
        label.textAlignment = .right
        return label
    }()
    
    private var tokenIconImageView: CollectibleIconImageView = {
        let imageView = CollectibleIconImageView()
        return imageView
    }()

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        initView()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        initView()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
    var subscriptions: Set<AnyCancellable> = []
        
    private func initView() {
        selectionStyle = .none
        backgroundColor = .clear
        
        contentView.addSubview(containerView)
        containerView.snp.makeConstraints { make in
            make.edges.equalTo(contentView).inset(UIEdgeInsets(top: 8, left: LayoutConstraints.leading, bottom: 8, right: LayoutConstraints.trailing))
        }
        
        containerView.addSubview(tokenIconImageView)
        containerView.addSubview(tokenNameLabel)
        containerView.addSubview(tokenAmountlabel)
        containerView.addSubview(tokenBalanceLabel)
        
        tokenIconImageView.snp.makeConstraints { make in
            make.left.equalTo(12)
            make.centerY.equalTo(containerView)
            make.size.equalTo(CGSize(width: 38, height: 38))
        }
        
        tokenNameLabel.snp.makeConstraints { make in
            make.top.equalTo(tokenIconImageView)
            make.left.equalTo(tokenIconImageView.snp.right).offset(8)
        }
        
        tokenAmountlabel.snp.makeConstraints { make in
            make.top.equalTo(tokenNameLabel.snp.bottom)
            make.left.equalTo(tokenNameLabel)
        }
        
        tokenBalanceLabel.snp.makeConstraints { make in
            make.centerY.equalTo(containerView)
            make.right.equalTo(-12)
        }
    }
    func setModel(with token: Token) {
        token.publisher(for: \.name)
            .assign(to: \.text, on: tokenNameLabel)
            .store(in: &subscriptions)
        
        token.publisher(for: \.quantity)
            .map { _ in
                token.displayQuantity.stringValue
            }.assign(to: \.text, on: tokenAmountlabel)
            .store(in: &subscriptions)
        
        Publishers.CombineLatest(token.publisher(for: \.quantity),
                                 UserDefaultPublishers.currency)
            .map { _, currency in
                return "≈ \(currency.symbol)\(token.displayBalance.stringValue)"
            }
            .assign(to: \.text, on: tokenBalanceLabel)
            .store(in: &subscriptions)
        
        token.publisher(for: \.logoUrl)
            .sink { [weak self] url in
                self?.tokenIconImageView.setImageUrl(url)
            }
            .store(in: &subscriptions)
    }
    
    func setNFTModel(with token: Collectible) {
        token.publisher(for: \.tokenSymbol)
            .assign(to: \.text, on: tokenNameLabel)
            .store(in: &subscriptions)
        
        // wait symbol
        token.publisher(for: \.name)
            .assign(to: \.text, on: tokenAmountlabel)
            .store(in: &subscriptions)

        token.publisher(for: \.logoUrl)
            .sink { [weak self] url in
                guard let url = url else { return }
                self?.tokenIconImageView.setImageUrl(url)
            }
            .store(in: &subscriptions)
    }
    
    override func prepareForReuse() {
        subscriptions.forEach { $0.cancel() }
        super.prepareForReuse()
    }
}
