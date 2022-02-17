//
//  GasFeeCustomCollectionViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class GasFeeCustomCollectionViewCell: UICollectionViewCell {
    private var backView: UIView = {
        let view = UIView()
        view.applyCornerRadius(radius: 8)
        view.backgroundColor = Asset.Colors.Background.selected.color
        return view
    }()
    
    private var titleLabel: UILabel = {
       let label = UILabel()
        label.textAlignment = .center
        label.textColor = Asset.Colors.Text.normal.color
        label.text = L10n.Scene.Sendtransaction.Gasprice.custom
        return label
    }()
    
    override class func awakeFromNib() {
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        initViews()
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        initViews()
    }
    
    func initViews() {
        backgroundColor = .clear
        contentView.addSubview(backView)
        backView.snp.makeConstraints { make in
            make.edges.equalTo(contentView).inset(UIEdgeInsets(top: 5, left: 9, bottom: 5, right: 9))
        }
        
        backView.addSubview(titleLabel)
        titleLabel.snp.makeConstraints { make in
            make.left.right.equalToSuperview()
            make.centerY.equalToSuperview()
        }
    }
    
    func updateCellStatus(selected: Bool) {
        if selected {
            backView.backgroundColor = Asset.Colors.Public.blue.color
            titleLabel.textColor = Asset.Colors.Public.white.color
        } else {
            backView.backgroundColor = Asset.Colors.Background.selected.color
            titleLabel.textColor = Asset.Colors.Text.normal.color
        }
    }
}
