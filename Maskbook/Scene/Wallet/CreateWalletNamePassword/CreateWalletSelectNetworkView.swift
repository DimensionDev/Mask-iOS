//
//  CreateWalletSelectNetworkView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/7/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class CreateWalletSelectNetworkView: UIView {
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
        let image = Asset.Icon.Arrows.drop.image
        let view = UIImageView(image: image)
        
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
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupUI()
    }

    func update(coin: SelectNetworkViewModel.Coin) {
        titleLabel.text = coin.name
        subtitleLabel.text = coin.chain
        coinImageView.image = coin.image
    }
    
    private func setupUI() {
        backgroundColor = Asset.Colors.Background.normal.color
        addSubview(bgView)
        addSubview(hStackView0)

        bgView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            bgView.topAnchor.constraint(equalTo: topAnchor, constant: 0),
            bgView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 0),
            bottomAnchor.constraint(equalTo: bgView.bottomAnchor, constant: 0),
            trailingAnchor.constraint(equalTo: bgView.trailingAnchor, constant: 0)
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
