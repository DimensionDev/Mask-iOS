//
//  DerivationPathHeaderView.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/5.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class DerivationPathHeaderView: UITableViewHeaderFooterView {
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.distribution = .fillEqually
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 8, left: 22, bottom: 8, right: 22)
        
        let address = L10n.Scene.WalletDerivationPath.headerAddress
        let balance = L10n.Scene.WalletDerivationPath.headerBalance(maskUserDefaults.network.mainToken?.symbol ?? "")
        let operation = L10n.Scene.WalletDerivationPath.headerOperation
        
        let addressLabel = buildLabel(title: address)
        let balanceLabel = buildLabel(title: balance)
        let operationLabel = buildLabel(title: operation)
        
        balanceLabel.textAlignment = .right
        operationLabel.textAlignment = .right
        
        view.addArrangedSubview(addressLabel)
        view.addArrangedSubview(balanceLabel)
        view.addArrangedSubview(operationLabel)
        return view
    }()
    
    override init(reuseIdentifier: String?) {
        super.init(reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func buildLabel(title: String) -> UILabel {
        let label = UILabel()
        label.font = FontStyles.BH6
        label.textColor = Asset.Colors.Text.normal.color
        label.text = title
        
        label.translatesAutoresizingMaskIntoConstraints = false
        let width = (UIScreen.main.bounds.width - 22 * 2) / 3
        NSLayoutConstraint.activate([
            label.widthAnchor.constraint(equalToConstant: width)
        ])
        return label
    }
    
    private func setupUI() {
        backgroundView = UIView()
        backgroundView?.backgroundColor = Asset.Colors.Background.normal.color
        self.addSubview(stackView)
        
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
// swiftlint:disable type_name
import SwiftUI
@available(iOS 13.0, *)
struct DerivationPathHeaderView_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let view = DerivationPathHeaderView(reuseIdentifier: "")
                view.backgroundColor = .red
                return view
            }
            .previewLayout(.fixed(width: 375, height: 37))
        }
    }
}
#endif
// swiftlint:enable type_name
