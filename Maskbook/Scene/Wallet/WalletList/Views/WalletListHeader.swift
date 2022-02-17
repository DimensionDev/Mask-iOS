//
//  WalletListHeader.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/5.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class WalletListHeader: UIView {
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        return label
    }()
    
    lazy var addButton: UIButton = {
        let btn = HitTestExpandedButton()
        btn.setImage(Asset.Images.Scene.WalletList.buttonAdd.image, for: .normal)
        return btn
    }()
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.distribution = .equalCentering
        view.alignment = .center
        view.isLayoutMarginsRelativeArrangement = true
        
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
    
    init() {
        super.init(frame: .zero)
        
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func update(title: String) {
        titleLabel.text = title
    }
}

private extension WalletListHeader {
    func setupUI() {
        addSubview(stackView)
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: self.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            self.bottomAnchor.constraint(equalTo: stackView.bottomAnchor),
            self.trailingAnchor.constraint(equalTo: stackView.trailingAnchor)
        ])
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletListHeaderPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let view = WalletListHeader()
                view.update(title: "Ethereum")
                
                view.translatesAutoresizingMaskIntoConstraints = false
                NSLayoutConstraint.activate([
                    view.widthAnchor.constraint(equalToConstant: 375),
                    view.heightAnchor.constraint(equalToConstant: 52)
                ])
                return view
            }
            .previewLayout(.fixed(width: 375, height: 52))
        }
    }
}
#endif
