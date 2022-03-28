//
//  SettingTableViewCell.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/31.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

enum SettingCellStyle {
    case rightArrow
    case rightSwitch(isOn: Bool)
}

final class SettingTableViewCell: UITableViewCell {
    var disposeBag = Set<AnyCancellable>()
    
    let icon: UIImageView = {
        let imageView = UIImageView()
        imageView.applyCornerRadius(radius: 16)
        return imageView
    }()
    
    lazy var hTitleStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.addArrangedSubview(contentStackView)
        stackView.addArrangedSubview(subTitleLabel)
        return stackView
    }()
    
    lazy var contentStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.addArrangedSubview(titleLabel)
        stackView.addArrangedSubview(hintTitleLabel)
        return stackView
    }()
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        return label
    }()
    
    let subTitleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH5
        return label
    }()
    
    let hintTitleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH6
        return label
    }()
    
    let currentValueLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH7
        label.textAlignment = .right
        return label
    }()
    
    let rightArrow: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Icon.Arrows.celllRight.image
        return imageView
    }()
    
    let rightSwitch = UISwitch()
    
    let roundBackgroundView = UIView().cv.apply { view in
        view.backgroundColor = Asset.Colors.Background.dark.color
    }
    
    let bottomSeperatorLine = UIView().cv.apply { view in
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.snp.makeConstraints { make in
            make.height.equalTo(0.5)
        }
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        disposeBag.removeAll()
        hintTitleLabel.text = nil
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        _init()
    }
    
    override func setHighlighted(_ highlighted: Bool, animated: Bool) {
        super.setHighlighted(highlighted, animated: animated)
        
        if highlighted {
            contentView.backgroundColor = Asset.Colors.Background.selected.color
        } else {
            contentView.backgroundColor = Asset.Colors.Background.blurred.color
        }
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        _init()
    }
}

extension SettingTableViewCell {
    private func _init() {
        separatorInset = UIEdgeInsets(all: .zero)
        
        contentView.addSubview(roundBackgroundView)
        roundBackgroundView.snp.makeConstraints { make in
            make.edges.equalTo(UIEdgeInsets(vertical: 0, horizontal: LayoutConstraints.horizontal))
        }
        
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fill
        stackView.alignment = .center
        stackView.spacing = 8
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 12, left: LayoutConstraints.leading + 12, bottom: 12, right: LayoutConstraints.trailing + 22)
        stackView.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(stackView)
        
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: contentView.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor)
        ])
        
        NSLayoutConstraint.activate([
            icon.heightAnchor.constraint(equalToConstant: 32),
            icon.widthAnchor.constraint(equalToConstant: 32)
        ])
        
        icon.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(icon)
        
        hTitleStackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(hTitleStackView)
        
        currentValueLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(currentValueLabel)
        currentValueLabel.setContentHuggingPriority(.defaultLow - 1, for: .horizontal)
        
        rightArrow.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(rightArrow)
        
        rightSwitch.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(rightSwitch)
        
        rightArrow.image = Asset.Icon.Arrows.celllRight.image

        contentView.addSubview(bottomSeperatorLine)
        bottomSeperatorLine.snp.makeConstraints { make in
            make.bottom.equalToSuperview()
            make.leading.trailing.equalTo(roundBackgroundView)
        }
    }
    
    func setStyle(style: SettingCellStyle) {
        switch style {
        case .rightArrow:
            rightSwitch.isHidden = true
            rightArrow.isHidden = false
            selectionStyle = .default

        case .rightSwitch(let isOn):
            rightSwitch.isHidden = false
            rightSwitch.isOn = isOn
            rightArrow.isHidden = true
            selectionStyle = .none
        }
    }
    
    func update(item: SettingViewModel.Item) {
        titleLabel.text = item.title()
        switch item {
        case let .email(value), let .phoneNumber(value):
            hintTitleLabel.text = value
            
        case .backUpPassword:
            hintTitleLabel.text = L10n.Scene.Setting.BackupRecovery.backUpPasswordEmpty
            
        default:
            hintTitleLabel.text = nil
        }
        icon.image = item.iconImage()
        currentValueLabel.text = item.currentValue()
        setStyle(style: item.style())
    }
}
