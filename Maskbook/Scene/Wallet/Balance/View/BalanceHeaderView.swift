//
//  BalanceHeaderView.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import UIKit

class BalanceHeaderView: UITableViewHeaderFooterView {
    enum BalanceHeaderType: CaseIterable {
        case tokens
        case collectibles
        
        var title: String {
            switch self {
            case .tokens:
                return L10n.Scene.WalletBalance.headerTitleTokens

            case .collectibles:
                return L10n.Scene.WalletBalance.headerTitleCollectibles
            }
        }
    }
    
    let segments = BalanceSegmentView().cv.apply { view in
        view.indicatorView.backgroundColor = Asset.Colors.Background.blue.color
    }
    
    override init(reuseIdentifier: String?) {
        super.init(reuseIdentifier: reuseIdentifier)
        _init()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func _init() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        
        contentView.addSubview(segments)
        segments.backgroundColor = .clear
        segments.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            segments.topAnchor.constraint(equalTo: contentView.topAnchor),
            segments.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor),
            segments.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -10)
        ])
        
        segments.setItems(items: BalanceHeaderType.allCases.map(\.title))
    }
    
    func setupType(_ type: BalanceHeaderType) {
        switch type {
        case .tokens:
            segments.selectedIndex(index: 0, animated: true)
            
        case .collectibles:
            segments.selectedIndex(index: 1, animated: true)
        }
    }
}
