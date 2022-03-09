//
//  RecentlyPasteTableViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2022/3/3.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit

class RecentlyPasteTableViewCell: UITableViewCell {
    lazy var bgView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.layer.cornerRadius = 8
        return view
    }()
    
    private var addressslabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH7
        label.numberOfLines = 0
        return label
    }()

    private var nameLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        return label
    }()
    
    private var pasteImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.SendTransaction.paste.image
        return imageView
    }()
    
    lazy var cellStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .fill
        view.spacing = 0
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 12, left: 12, bottom: 12, right: 65)

        addressslabel.translatesAutoresizingMaskIntoConstraints = false
        nameLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(nameLabel)
        view.addArrangedSubview(addressslabel)
        
        view.setCustomSpacing(2, after: nameLabel)
        return view
    }()
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
        initView()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
        initView()
    }
    
    private func initView() {
        selectionStyle = .none
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        
        contentView.addSubview(bgView)
        contentView.addSubview(cellStackView)
        bgView.addSubview(pasteImageView)
        
        bgView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            bgView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            bgView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 22.5),
            contentView.bottomAnchor.constraint(equalTo: bgView.bottomAnchor, constant: 8),
            contentView.trailingAnchor.constraint(equalTo: bgView.trailingAnchor, constant: 22.5)
        ])

        cellStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            cellStackView.topAnchor.constraint(equalTo: bgView.topAnchor),
            cellStackView.leadingAnchor.constraint(equalTo: bgView.leadingAnchor),
            bgView.bottomAnchor.constraint(equalTo: cellStackView.bottomAnchor),
            bgView.trailingAnchor.constraint(equalTo: cellStackView.trailingAnchor)
        ])
        
        pasteImageView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            pasteImageView.topAnchor.constraint(equalTo: bgView.topAnchor, constant: 12),
            pasteImageView.rightAnchor.constraint(equalTo: bgView.rightAnchor, constant: -12),
            pasteImageView.heightAnchor.constraint(equalToConstant: 24),
            pasteImageView.widthAnchor.constraint(equalToConstant: 24)
        ])
    }
    
    func setModel(name: String?, address: String) {
        addressslabel.text = address
        nameLabel.text = name
        nameLabel.isHidden = false
    }
}
