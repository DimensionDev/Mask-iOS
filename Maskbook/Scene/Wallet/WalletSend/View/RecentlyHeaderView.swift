//
//  RecentlyHeaderView.swift
//  Maskbook
//
//  Created by caiyu on 2022/3/3.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit

class RecentlyHeaderView: UITableViewHeaderFooterView {
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        return label
    }()
    
    lazy var headImageView: UIImageView = {
        let view = UIImageView()
        return view
    }()
    
    lazy var headStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .fill
        view.spacing = 0
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 20, left: LayoutConstraints.leading, bottom: 0, right: LayoutConstraints.trailing)

        headImageView.translatesAutoresizingMaskIntoConstraints = false
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(headImageView)
        view.addArrangedSubview(titleLabel)
        
        view.setCustomSpacing(8, after: headImageView)
        return view
    }()
    
    override init(reuseIdentifier: String?) {
        super.init(reuseIdentifier: reuseIdentifier)
        _init()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func _init() {
        contentView.addSubview(headStackView)
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        
        headStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            contentView.topAnchor.constraint(equalTo: headStackView.topAnchor),
            contentView.leadingAnchor.constraint(equalTo: headStackView.leadingAnchor),
            contentView.bottomAnchor.constraint(equalTo: headStackView.bottomAnchor),
            contentView.trailingAnchor.constraint(equalTo: headStackView.trailingAnchor)
        ])
    }
    
    func setContent(text: String, image: UIImage){
        headImageView.image = image
        titleLabel.text = text
    }
}
