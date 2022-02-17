//
//  DerivationPathTableViewCell.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/5.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit

class DerivationPathTableViewCell: UITableViewCell {
    var disposeBag = Set<AnyCancellable>()
    
    lazy var addressLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.lineBreakMode = .byTruncatingMiddle
        return label
    }()
    
    lazy var balanceLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .right
        return label
    }()
    
    lazy var operationButton: UIButton = {
        let button = HitTestExpandedButton()
        button.titleLabel?.font = FontStyles.BH5
        button.setTitleColor(Asset.Colors.Public.blue.color, for: .normal)
        button.setTitleColor(Asset.Colors.Text.light.color, for: .selected)
        
        let normalTitle = L10n.Scene.WalletDerivationPath.operationAdd
        let selectedTitle = L10n.Scene.WalletDerivationPath.operationAdded
        button.setTitle(normalTitle, for: .normal)
        button.setTitle(selectedTitle, for: .selected)
        return button
    }()
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.distribution = .fillEqually
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 8, left: 22, bottom: 8, right: 22)
        
        let addressView = buildColumn(addressLabel, alignRight: false)
        let balanceView = buildColumn(balanceLabel, alignRight: false)
        let operationView = buildColumn(operationButton, alignRight: true)
        
        view.addArrangedSubview(addressView)
        view.addArrangedSubview(balanceView)
        view.addArrangedSubview(operationView)
        return view
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        
        disposeBag = Set<AnyCancellable>()
        operationButton.isSelected = false
    }
    
    func update(item: DerivationPathsViewModel.Item) {
        addressLabel.text = item.address
        balanceLabel.text = item.balance?.stringValue
        operationButton.isSelected = item.isAdded
    }
    
    private func setupUI() {
        backgroundColor = .clear
        selectionStyle = .none
        contentView.addSubview(stackView)
        
        stackView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }
    
    private func buildColumn(_ view: UIView, alignRight: Bool) -> UIView {
        let container = UIView()
        container.addSubview(view)
        
        let width = (UIScreen.main.bounds.width - 22 * 2) / 3
        view.snp.makeConstraints {
            if !alignRight {
                $0.edges.equalToSuperview()
            } else {
                $0.bottom.trailing.top.equalToSuperview()
            }
        }
        container.snp.makeConstraints {
            $0.width.equalTo(width)
        }
        return container
    }
}

#if canImport(SwiftUI) && DEBUG
// swiftlint:disable type_name
import SwiftUI
@available(iOS 13.0, *)
struct DerivationPathTableViewCell_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let item = DerivationPathsViewModel.Item(
                    pathIndex: 1,
                    address: "0xD5C2c5f2E10802846bbD86C5Fd8438b7CA4Ff83A",
                    balance: 0,
                    isAdded: false)
                
                let view = DerivationPathTableViewCell(style: .default, reuseIdentifier: nil)
                view.update(item: item)
                return view
            }
            .previewLayout(.fixed(width: 375, height: 40))
        }
    }
}
#endif
// swiftlint:enable type_name
