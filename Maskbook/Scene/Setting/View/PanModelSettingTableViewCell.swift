//
//  PanModelSettingTableViewCell.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/1.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class PanModelSettingTableViewCell: UITableViewCell {
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
    
    lazy var checkImageView: UIImageView = {
        let image = Asset.Icon.Cell.cellCheck.image
        let view = UIImageView(image: image)
        view.isHidden = true
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 24),
            view.heightAnchor.constraint(equalToConstant: 24)
        ])
        return view
    }()
    
    lazy var addImageView: UIImageView = {
        let image = Asset.Images.Scene.WalletAdd.add.image
        let view = UIImageView(image: image)
        view.isHidden = true
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 30),
            view.heightAnchor.constraint(equalToConstant: 30)
        ])
        return view
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
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        checkImageView.isHidden = true
    }
    
    func update(title: String, selected: Bool) {
        titleLabel.text = title
        bgView.isHidden = !selected
        checkImageView.isHidden = !selected
        addImageView.isHidden = true
    }
    
    func setAddIcon(title: String) {
        checkImageView.isHidden = true
        addImageView.isHidden = false
        bgView.isHidden = true
        titleLabel.text = title
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
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        hStackView.addArrangedSubview(titleLabel)
        
        checkImageView.translatesAutoresizingMaskIntoConstraints = false
        hStackView.addArrangedSubview(checkImageView)
        
        addImageView.translatesAutoresizingMaskIntoConstraints = false
        hStackView.addArrangedSubview(addImageView)
    }
}
