//
//  MaskTabBar.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

protocol MaskTabBarDelegate: UITabBarDelegate {
    func tabBar(_ tabBar: MaskTabBar, shouldSelctedAt: Int) -> Bool
}

class MaskTabBar: UITabBar {
    override init(frame: CGRect) {
        super.init(frame: frame)
        let appearance = UITabBarAppearance()
        appearance.configureWithDefaultBackground()
        appearance.shadowColor = .clear
        appearance.backgroundColor = Asset.Colors.Background.blur.color
//        appearance.backgroundEffect = nil
        standardAppearance = appearance
        if #available(iOS 15, *) {
            scrollEdgeAppearance = appearance
        }
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private var buttons: [MaskTabBarButton] = []

    override var selectedItem: UITabBarItem? {
        willSet {
            guard let newValue = newValue else {
                buttons.forEach { $0.setSelected(false) }
                return
            }
            guard let index = items?.firstIndex(of: newValue),
                  index != NSNotFound
            else {
                return
            }

            select(itemAt: index, animated: false)
        }
    }

    override var items: [UITabBarItem]? {
        didSet {
            reloadViews()
        }
    }

    override func setItems(_ items: [UITabBarItem]?, animated: Bool) {
        super.setItems(items, animated: animated)
        reloadViews()
    }

    let barHeight: CGFloat = 62

    override func sizeThatFits(_ size: CGSize) -> CGSize {
        var sizeThatFits = super.sizeThatFits(size)
        sizeThatFits.height = barHeight
        sizeThatFits.height += safeAreaInsets.bottom
        return sizeThatFits
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        let margin = CGFloat(32)
        let btnWidth = (bounds.width - margin * 2) / CGFloat(buttons.count)
        var btnHeight = bounds.height
        btnHeight -= safeAreaInsets.bottom

        for (index, button) in buttons.enumerated() {
            button.frame = CGRect(x: margin + btnWidth * CGFloat(index), y: 0, width: btnWidth, height: btnHeight)
            button.setNeedsLayout()
        }
        
        // bugfix: Logging out the unique `persona` may cause the tabbar to have a redundant `UITabBarButton`.
        subviews.filter { String(describing: type(of: $0)) == "UITabBarButton" }.forEach { $0.removeFromSuperview() }
    }

    func reloadViews() {
        subviews.filter { String(describing: type(of: $0)) == "UITabBarButton" }.forEach { $0.removeFromSuperview() }
        buttons.forEach { $0.removeFromSuperview() }
        buttons = items?.map { self.button(forItem: $0) } ?? []
        setNeedsLayout()
    }

    private func button(forItem item: UITabBarItem) -> MaskTabBarButton {
        let button = MaskTabBarButton(item: item)
        button.tintColor = tintColor
        button.addTarget(self, action: #selector(btnPressed), for: .touchUpInside)
        if selectedItem != nil, item === selectedItem {
            button.select()
        }
        addSubview(button)
        return button
    }

    @objc private func btnPressed(sender: MaskTabBarButton) {
        guard let index = buttons.firstIndex(of: sender),
              index != NSNotFound,
              let item = items?[index]
        else {
            return
        }
        guard (delegate as? MaskTabBarDelegate)?.tabBar(self, shouldSelctedAt: index) == true else {
            return
        }
        
        buttons.forEach { button in
            guard button != sender else {
                return
            }
            button.setSelected(false)
        }
        sender.setSelected(true)
        delegate?.tabBar?(self, didSelect: item)
    }

    func select(itemAt index: Int, animated: Bool = false) {
        guard index < buttons.count else {
            return
        }
        let selectedbutton = buttons[index]
        buttons.forEach { button in
            guard button != selectedbutton else {
                return
            }
            button.setSelected(false)
        }
        selectedbutton.setSelected(true)
    }
}
