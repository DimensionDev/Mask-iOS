//
//  NewNewMaskSegmentControl.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/9.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

final class GroupMaskSegmentControl: UIView {
    var disposeBag = Set<AnyCancellable>()
    
    weak var delegate: MaskSegmentControlDelegate?
    
    let selectedIndex = CurrentValueSubject<Int, Never>(0)
    
    let groupColor = Asset.Colors.Background.tab.color
    
    var groupViewLeading: NSLayoutConstraint!
    var groupViewWidth: NSLayoutConstraint!
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        _init()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        _init()
    }
    
    let stackView = UIStackView()
    
    let groupView = UIView()
    
    let backgroundView = UIView()
    
    private var labels: [UILabel] = [UILabel]()
}

extension GroupMaskSegmentControl {
    private func _init() {
        backgroundColor = .clear
        
        backgroundView.backgroundColor = Asset.Colors.Background.selected.color
        backgroundView.layer.cornerRadius = 8
        backgroundView.clipsToBounds = true
        backgroundView.translatesAutoresizingMaskIntoConstraints = false
        addSubview(backgroundView)
        NSLayoutConstraint.activate([
            backgroundView.topAnchor.constraint(equalTo: topAnchor, constant: 1),
            backgroundView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: LayoutConstraints.leading),
            backgroundView.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -LayoutConstraints.trailing),
            backgroundView.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -11)
        ])
        
        groupView.backgroundColor = groupColor
        groupView.layer.cornerRadius = 8
        groupView.layer.cornerCurve = .continuous
        groupView.translatesAutoresizingMaskIntoConstraints = false
        addSubview(groupView)
        groupViewLeading = groupView.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 0)
        groupViewWidth = groupView.widthAnchor.constraint(equalToConstant: 100)
        NSLayoutConstraint.activate([
            groupView.topAnchor.constraint(equalTo: self.topAnchor, constant: 4),
            groupView.bottomAnchor.constraint(equalTo: self.bottomAnchor, constant: -15),
            groupViewLeading,
            groupViewWidth
        ])
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.axis = .horizontal
        stackView.distribution = .fillEqually
        addSubview(stackView)
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: topAnchor, constant: 1),
            stackView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: LayoutConstraints.leading),
            stackView.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -LayoutConstraints.trailing),
            stackView.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -11)
        ])
    }
    
    func setItems(items: [String]) {
        for (index, item) in items.enumerated() {
            let label = UILabel()
            label.text = item
            label.textAlignment = .center
            label.translatesAutoresizingMaskIntoConstraints = false
            label.gesture()
                .receive(on: DispatchQueue.main)
                .sink { [weak self] _ in
                    self?.selectedIndex(at: index, animated: true)
                }
                .store(in: &disposeBag)
            labels.append(label)
            stackView.addArrangedSubview(label)
        }
        setNeedsLayout()
        DispatchQueue.main.async {
            self.selectedIndex(at: 0, animated: false)
        }
    }
    
    func selectedIndex(at index: Int, animated: Bool) {
        for (_index, label) in labels.enumerated() {
            if _index == index {
                label.font = FontStyles.BH5
                label.textColor = Asset.Colors.Text.dark.color
                groupViewLeading.isActive = false
                groupViewLeading = self.groupView.centerXAnchor.constraint(equalTo: label.centerXAnchor)
                groupViewLeading.isActive = true
                
                groupViewWidth.isActive = false
                groupViewWidth = self.groupView.widthAnchor.constraint(equalTo: label.widthAnchor, constant: -8)
                groupViewWidth.isActive = true
                
                if animated {
                    UIView.animate(withDuration: 0.3) {
                        self.layoutIfNeeded()
                    }
                } else {
                    layoutIfNeeded()
                }
            } else {
                label.font = FontStyles.BH6
                label.textColor = Asset.Colors.Text.normal.color
            }
        }
        selectedIndex.value = index
        self.delegate?.didSelectedIndex(index)
    }
}

extension GroupMaskSegmentControl: MaskSegmentControl {}
