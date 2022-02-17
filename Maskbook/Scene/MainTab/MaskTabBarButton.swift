//
//  MaskTabBarButton.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class MaskTabBarButton: UIControl {
    static let dotSize: CGFloat = 5.0

    let tabImage: UIImageView = {
        let imageView = UIImageView()
        imageView.tintColor = Asset.Colors.Text.light.color
        return imageView
    }()

    let tabLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Public.blue.color
        return label
    }()

    let dotView: UIView = {
        let dotView = UIView()
        dotView.layer.cornerRadius = MaskTabBarButton.dotSize / 2.0
        dotView.layer.shouldRasterize = true
        dotView.layer.rasterizationScale = UIScreen.main.scale
        dotView.isHidden = true
        dotView.backgroundColor = Asset.Colors.Public.blue.color
        return dotView
    }()

    override var isSelected: Bool {
        didSet(newValue) {
            if newValue {
                select()
            } else {
                deselect()
            }
        }
    }

    override init(frame: CGRect) {
        super.init(frame: frame)
        configureSubviews()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        configureSubviews()
    }

    init(item: UITabBarItem) {
        super.init(frame: .zero)
        configureSubviews()
        defer {
            self.item = item
        }
    }

    var item: UITabBarItem? {
        didSet {
            tabImage.image = item?.image?.withRenderingMode(.alwaysTemplate)
            tabLabel.text = item?.title
        }
    }

    private func configureSubviews() {
        tabLabel.translatesAutoresizingMaskIntoConstraints = false
        addSubview(tabLabel)
        NSLayoutConstraint.activate([
            tabLabel.centerXAnchor.constraint(equalTo: centerXAnchor),
            tabLabel.topAnchor.constraint(equalTo: topAnchor, constant: 10.5)
        ])

        tabImage.translatesAutoresizingMaskIntoConstraints = false
        addSubview(tabImage)
        NSLayoutConstraint.activate([
            tabImage.centerXAnchor.constraint(equalTo: centerXAnchor),
            tabImage.topAnchor.constraint(equalTo: topAnchor, constant: 16)
        ])

        dotView.translatesAutoresizingMaskIntoConstraints = false
        addSubview(dotView)
        NSLayoutConstraint.activate([
            dotView.centerXAnchor.constraint(equalTo: centerXAnchor),
            dotView.topAnchor.constraint(equalTo: topAnchor, constant: 38.5),
            dotView.heightAnchor.constraint(equalToConstant: MaskTabBarButton.dotSize),
            dotView.widthAnchor.constraint(equalToConstant: MaskTabBarButton.dotSize)
        ])

        tabImage.contentMode = .center
    }

    func setSelected(_ selected: Bool) {
        if selected {
            select()
        } else {
            deselect()
        }
    }

    func select() {
        tabLabel.isHidden = false
        tabImage.isHidden = true
        dotView.isHidden = false
    }

    func deselect() {
        tabLabel.isHidden = true
        tabImage.isHidden = false
        dotView.isHidden = true
    }
}
