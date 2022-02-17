//
//  SelectActionTableViewCell.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class SelectActionTableViewCell: UITableViewCell {
    lazy var bgView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.layer.cornerRadius = 12
        view.clipsToBounds = true
        return view
    }()
    
    lazy var iconImageView: UIImageView = {
        let view = UIImageView()
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 32),
            view.heightAnchor.constraint(equalToConstant: 32)
        ])
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        return label
    }()
    
    lazy var hStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fill
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: 12, bottom: 0, right: 12)
        view.spacing = 8
        return view
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
    }
    
    func config(title: String, icon: UIImage) {
        titleLabel.text = title
        iconImageView.image = icon
    }
    
    private func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        contentView.addSubview(bgView)
        contentView.addSubview(hStackView)

        bgView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            bgView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            bgView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 22.5),
            contentView.bottomAnchor.constraint(equalTo: bgView.bottomAnchor, constant: 8),
            contentView.trailingAnchor.constraint(equalTo: bgView.trailingAnchor, constant: 22.5)
        ])
        
        hStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            hStackView.topAnchor.constraint(equalTo: bgView.topAnchor),
            hStackView.leadingAnchor.constraint(equalTo: bgView.leadingAnchor),
            bgView.bottomAnchor.constraint(equalTo: hStackView.bottomAnchor),
            bgView.trailingAnchor.constraint(equalTo: hStackView.trailingAnchor)
        ])
        
        iconImageView.translatesAutoresizingMaskIntoConstraints = false
        hStackView.addArrangedSubview(iconImageView)
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        hStackView.addArrangedSubview(titleLabel)
    }
}
