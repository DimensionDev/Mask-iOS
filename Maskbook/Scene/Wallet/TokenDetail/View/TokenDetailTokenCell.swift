//
//  TokenDetailTokenCell.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import UIKit

class TokenDetailTokenCell: UITableViewCell {
    let tokenCardView = TokenCardView()
    
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
        
        tokenCardView.translatesAutoresizingMaskIntoConstraints = false
        
        contentView.addSubview(tokenCardView)
        NSLayoutConstraint.activate([
            tokenCardView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 24),
            tokenCardView.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor, constant: 6),
            tokenCardView.trailingAnchor.constraint(equalTo: contentView.readableContentGuide.trailingAnchor, constant: -6),
            tokenCardView.heightAnchor.constraint(equalToConstant: 80),
            tokenCardView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -16)
        ])
    }
    
    func setToken(_ token: MaskToken) {
        tokenCardView.updateInfo(token: token)
    }
}
