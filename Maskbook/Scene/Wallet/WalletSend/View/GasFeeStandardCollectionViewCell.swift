//
//  GasFeeStandardCollectionViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class GasFeeStandardCollectionViewCell: UICollectionViewCell {
    private var backView: UIView = {
        let view = UIView()
        view.applyCornerRadius(radius: 8)
        view.backgroundColor = Asset.Colors.Background.selected.color
        return view
    }()
    
    private var styleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Text.normal.color
        label.textAlignment = .center
        return label
    }()
    
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
            make.edges.equalTo(contentView).inset(UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0))
        }
        
        backView.addSubview(styleLabel)
        styleLabel.snp.makeConstraints { make in
            make.centerX.centerY.equalTo(backView)
        }
    }
    
    func setGas(gasFeeSelectedItem: GasFeeCellItem, gasFeeCurrentItem: GasFeeCellItem) {
        styleLabel.text = String(describing: gasFeeSelectedItem.type).uppercased()
        if  gasFeeSelectedItem.type == gasFeeCurrentItem.type {
            backView.backgroundColor = Asset.Colors.Public.blue.color
            styleLabel.textColor = Asset.Colors.Public.white.color
        }else {
            backView.backgroundColor = Asset.Colors.Background.selected.color
            styleLabel.textColor = Asset.Colors.Text.normal.color
        }
    }
}
