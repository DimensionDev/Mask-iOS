//
//  WallectConnectFloatingView.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/9/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class WallectConnectFloatingView: UIView {
    let walletConnectImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.WalletConnect.walletConnectConnected.image
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()

    init() {
        super.init(frame: .zero)
        setupView()
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    func setupView() {
        addSubview(walletConnectImageView)
        NSLayoutConstraint.activate([
            walletConnectImageView.centerXAnchor.constraint(equalTo: centerXAnchor),
            walletConnectImageView.centerYAnchor.constraint(equalTo: centerYAnchor),
            walletConnectImageView.heightAnchor.constraint(equalToConstant: 38),
            walletConnectImageView.widthAnchor.constraint(equalToConstant: 38)
        ])
    }
}
