//
//  BalanceSegmentView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

protocol BalanceSegmentViewDelegate: AnyObject {
    func didSelectedIndex(at index: Int)
}

final class BalanceSegmentView: UIView {
    var disposeBag = Set<AnyCancellable>()
    
    weak var delegate: BalanceSegmentViewDelegate?
    
    let selectedIndex = CurrentValueSubject<Int, Never>(0)
    
    let maskTintColor = Asset.Colors.Text.dark.color
    
    var indicatorLeading: NSLayoutConstraint!
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        _init()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        _init()
    }
    
    let stackView = UIStackView()
    
    let indicatorView = UIView()
    
    private var labels: [UILabel] = [UILabel]()
}

extension BalanceSegmentView {
    private func _init() {
        self.backgroundColor = Asset.Colors.Background.normal.color
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.axis = .horizontal
        stackView.distribution = .equalSpacing
        stackView.alignment = .top
        stackView.spacing = 24
        addSubview(stackView)
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: topAnchor),
            stackView.leadingAnchor.constraint(equalTo: leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
        
        indicatorView.backgroundColor = Asset.Colors.Public.blue.color
        indicatorView.layer.cornerRadius = 1.5
        indicatorView.layer.cornerCurve = .continuous
        indicatorView.clipsToBounds = true
        indicatorView.translatesAutoresizingMaskIntoConstraints = false
        addSubview(indicatorView)
        indicatorLeading = indicatorView.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 0)
        NSLayoutConstraint.activate([
            indicatorView.heightAnchor.constraint(equalToConstant: 3),
            indicatorView.widthAnchor.constraint(equalToConstant: 18),
            indicatorView.bottomAnchor.constraint(equalTo: self.bottomAnchor, constant: -5.5),
            indicatorLeading
        ])
    }
    
    func setItems(items: [String]) {
        for (index, item) in items.enumerated() {
            let clickView = UIView()
            clickView.backgroundColor = .clear
            clickView.translatesAutoresizingMaskIntoConstraints = false
            let label = UILabel()
            label.text = item
            label.textAlignment = .center
            label.translatesAutoresizingMaskIntoConstraints = false
            
            NSLayoutConstraint.activate([
                clickView.heightAnchor.constraint(equalToConstant: 40)
            ])
            clickView.addSubview(label)
            NSLayoutConstraint.activate([
                label.topAnchor.constraint(equalTo: clickView.topAnchor,
                                           constant: 5.5),
                label.leadingAnchor.constraint(equalTo: clickView.leadingAnchor),
                label.trailingAnchor.constraint(equalTo: clickView.trailingAnchor),
                label.heightAnchor.constraint(equalToConstant: 22)
            ])
            
            clickView.gesture()
                .receive(on: DispatchQueue.main)
                .sink { [weak self] _ in
                    self?.selectedIndex(index: index, animated: true)
                }
                .store(in: &disposeBag)
            
            labels.append(label)
            stackView.addArrangedSubview(clickView)
        }
        setNeedsLayout()
    }
    
    func selectedIndex(index: Int, animated: Bool) {
        for (_index, label) in labels.enumerated() {
            if _index == index {
                label.font = UIFont.systemFont(ofSize: 18, weight: .semibold)
                label.textColor = maskTintColor
                indicatorLeading.isActive = false
                indicatorLeading = self.indicatorView.centerXAnchor.constraint(equalTo: label.centerXAnchor)
                indicatorLeading.isActive = true
            } else {
                label.font = UIFont.systemFont(ofSize: 14, weight: .bold)
                label.textColor = Asset.Colors.Text.normal.color
            }
            if animated {
                UIView.animate(withDuration: 0.3) {
                    self.layoutIfNeeded()
                }
            } else {
                layoutIfNeeded()
            }
        }
        selectedIndex.value = index
        self.delegate?.didSelectedIndex(at: index)
    }
}
