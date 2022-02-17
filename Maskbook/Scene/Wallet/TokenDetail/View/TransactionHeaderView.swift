//
//  TransactionHeaderView.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import UIKit

class TransactionHeaderView: UITableViewHeaderFooterView {
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH3
        label.textColor = Asset.Colors.Text.dark.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    override init(reuseIdentifier: String?) {
        super.init(reuseIdentifier: reuseIdentifier)
        _init()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func _init() {
        contentView.addSubview(titleLabel)
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        
        titleLabel.setContentCompressionResistancePriority(.required - 1, for: .horizontal)
        NSLayoutConstraint.activate([
            titleLabel.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor, constant: 6),
            titleLabel.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8)
        ])
    }
    
    func setDate(_ date: Date) {
        var dateText: String
        if date.isInToday {
            dateText = L10n.Scene.WalletBalance.dateToday
        } else if date.isInYesterday {
            dateText = L10n.Scene.WalletBalance.dateYestoday
        } else if date.isInThisMonth {
            dateText = L10n.Scene.WalletBalance.dateThismonth
        } else {
            let calendar = Calendar.current
            let lastMonthDate = calendar.date(byAdding: .month, value: -1, to: Date())!
            if lastMonthDate.isInSameMonth(as: date) {
                dateText = L10n.Scene.WalletBalance.dateLastmonth
            } else {
                let format = "yMMMM"
                let dateString = DateFormatter.dateFormat(fromTemplate: format, options: 0, locale: Locale.current)
                let formatter = DateFormatter()
                formatter.setLocalizedDateFormatFromTemplate(dateString!)
                dateText = formatter.string(from: date)
            }
        }
        titleLabel.text = dateText
    }
}
