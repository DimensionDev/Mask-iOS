//
//  WalletConnectPanelButton.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/9.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class WalletConnectPanelButton: UIButton {
    static let height: CGFloat = 56
    static let extraWidth: CGFloat = 12

    private lazy var walletConnectIcon: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.WalletConnect.walletConnectServer.image
        return imageView
    }()

    private lazy var numberLabel: UILabel = {
        let label = UILabel()
        label.backgroundColor = Asset.Colors.Public.blue.color
        label.textColor = Asset.Colors.Text.lighter.color
        label.applyCornerRadius(radius: 11)
        label.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
        label.layer.borderWidth = 1
        label.textAlignment = .center
        label.text = "2"
        label.font = FontStyles.MH7
        return label
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupUI()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        setupUI()
    }

    func setNumber(number: Int) {
        numberLabel.text = "\(number)"
    }

    private func setupUI() {
        backgroundColor = Asset.Colors.Background.walletConnect.color
        translatesAutoresizingMaskIntoConstraints = false
        clipsToBounds = true
        setupCorners()
        addSubviews()
    }

    private func addSubviews() {
        walletConnectIcon.translatesAutoresizingMaskIntoConstraints = false
        addSubview(walletConnectIcon)
        NSLayoutConstraint.activate([
            walletConnectIcon.centerYAnchor.constraint(equalTo: centerYAnchor),
            walletConnectIcon.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 8),
            walletConnectIcon.widthAnchor.constraint(equalToConstant: 40),
            walletConnectIcon.heightAnchor.constraint(equalToConstant: 40)
        ])

        numberLabel.translatesAutoresizingMaskIntoConstraints = false
        addSubview(numberLabel)
        NSLayoutConstraint.activate([
            numberLabel.bottomAnchor.constraint(equalTo: walletConnectIcon.bottomAnchor),
            numberLabel.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -10),
            numberLabel.widthAnchor.constraint(equalToConstant: 22),
            numberLabel.heightAnchor.constraint(equalToConstant: 22)
        ])
    }

    private func setupCorners() {
        let rect = CGRect(origin: .zero,
                          size: CGSize(width: WalletConnectPanelButton.height + WalletConnectPanelButton.extraWidth,
                                       height: WalletConnectPanelButton.height))
        let corners: UIRectCorner = [.topLeft, .bottomLeft]
        let path = UIBezierPath(roundedRect: rect,
                                byRoundingCorners: corners,
                                cornerRadii: CGSize(width: WalletConnectPanelButton.height,
                                                    height: WalletConnectPanelButton.height))
        let maskLayer = CAShapeLayer()
        layer.mask = maskLayer
        maskLayer.frame = rect
        maskLayer.path = path.cgPath
    }
}
