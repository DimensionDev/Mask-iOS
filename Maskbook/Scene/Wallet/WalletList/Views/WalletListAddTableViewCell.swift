//
//  WalletListAddTableViewCell.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class WalletListAddTableViewCell: UITableViewCell {
    lazy var selectBackgroudView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.layer.cornerRadius = 12
        view.clipsToBounds = true
        
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 69)
        ])
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.WalletList.walletsItemsAdd
        return label
    }()
    
    lazy var addButton: UIButton = {
        let btn = HitTestExpandedButton()
        btn.setImage(Asset.Images.Scene.WalletList.buttonAdd.image, for: .normal)
        btn.isUserInteractionEnabled = false
        return btn
    }()
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.spacing = 10
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(titleLabel)
        
        addButton.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            addButton.widthAnchor.constraint(equalToConstant: 24),
            addButton.heightAnchor.constraint(equalToConstant: 24)
        ])
        view.addArrangedSubview(addButton)
        return view
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

private extension WalletListAddTableViewCell {
    func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        
        contentView.addSubview(selectBackgroudView)
        contentView.addSubview(stackView)
        
        selectBackgroudView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            selectBackgroudView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            selectBackgroudView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            contentView.bottomAnchor.constraint(equalTo: selectBackgroudView.bottomAnchor, constant: 8),
            contentView.trailingAnchor.constraint(equalTo: selectBackgroudView.trailingAnchor)
        ])
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            stackView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            stackView.centerYAnchor.constraint(equalTo: contentView.centerYAnchor)
        ])
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletListAddTableViewCellPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let view = WalletListAddTableViewCell(style: .default, reuseIdentifier: nil)
                
                view.frame = CGRect(x: 0, y: 0, width: 375, height: 85)
                view.contentView.backgroundColor = .red
                return view
            }
            .previewLayout(.fixed(width: 375, height: 85))
        }
    }
}
#endif
