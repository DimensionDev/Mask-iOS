//
//  RecentlyAddressTableViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2021/7/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class RecentlyAddressTableViewCell: UITableViewCell {
    static let reuseIdentifier = "RecentlyAddressTableViewCell"

    private var addressslabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH7
        return label
    }()

    private var nameLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        return label
    }()
    
    lazy var cellStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.alignment = .fill
        view.spacing = 0
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 8, left: 23, bottom: 8, right: 23)

        addressslabel.translatesAutoresizingMaskIntoConstraints = false
        nameLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(addressslabel)
        view.addArrangedSubview(nameLabel)
        
        view.setCustomSpacing(2, after: addressslabel)
        return view
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
        
    private func initView() {
        selectionStyle = .none
        backgroundColor = .clear
        
        contentView.addSubview(cellStackView)
        cellStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            cellStackView.topAnchor.constraint(equalTo: contentView.topAnchor),
            cellStackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            cellStackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            cellStackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor)
        ])
    }
    func setModel(name: String?, address: String) {
        addressslabel.text = address
        if  name != nil {
            nameLabel.text = name
            nameLabel.isHidden = false
        } else {
            nameLabel.isHidden = true
        }
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
    }
}
