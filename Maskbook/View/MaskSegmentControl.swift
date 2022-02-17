//
//  MaskSegmentControl.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

protocol MaskSegmentControlDelegate: AnyObject {
    func didSelectedIndex(_ index: Int)
}

final class MaskSegmentControl: UIView {
    var disposeBag = Set<AnyCancellable>()
    
    weak var delegate: MaskSegmentControlDelegate?
    
    let selectedIndex = CurrentValueSubject<Int, Never>(0)
    
    let maskTintColor = Asset.Colors.Public.blue.color
    
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

extension MaskSegmentControl {
    private func _init() {
        self.backgroundColor = Asset.Colors.Background.normal.color
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.axis = .horizontal
        stackView.distribution = .fillEqually
        addSubview(stackView)
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: topAnchor),
            stackView.leadingAnchor.constraint(equalTo: leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
        
        indicatorView.backgroundColor = maskTintColor
        indicatorView.layer.cornerRadius = 1.5
        indicatorView.layer.cornerCurve = .continuous
        indicatorView.clipsToBounds = true
        indicatorView.translatesAutoresizingMaskIntoConstraints = false
        addSubview(indicatorView)
        indicatorLeading = indicatorView.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 0)
        NSLayoutConstraint.activate([
            indicatorView.heightAnchor.constraint(equalToConstant: 3),
            indicatorView.widthAnchor.constraint(equalToConstant: 18),
            indicatorView.bottomAnchor.constraint(equalTo: self.bottomAnchor, constant: -9.5),
            indicatorLeading
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
                indicatorLeading.isActive = false
                indicatorLeading = self.indicatorView.centerXAnchor.constraint(equalTo: label.centerXAnchor)
                indicatorLeading.isActive = true
                
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
    
//    func didScrollToIndex(index: Int) {
//        for (_index, label) in labels.enumerated() {
//            if _index == index {
//                label.font = FontStyles.BH5
//                label.textColor = maskTintColor
//                indicatorLeading.isActive = false
//                UIView.animate(withDuration: 0.3) {
//                    self.indicatorLeading = self.indicatorView.centerXAnchor.constraint(equalTo: label.centerXAnchor)
//                    self.indicatorLeading.isActive = true
//                    self.layoutIfNeeded()
//                }
//            } else {
//                label.font = FontStyles.BH6
//                label.textColor = Asset.Colors.Text.normal.color
//            }
//        }
//    }
}
