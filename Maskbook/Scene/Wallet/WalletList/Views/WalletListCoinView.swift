//
//  WalletListCoinView.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/4.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class WalletListCoinView: UIView {
    var isSelected = false {
        didSet {
            backgroundView.isHidden = isSelected
            imageView.image = isSelected ? selectedImage : unselectedImage
        }
    }

    var topRounder: Bool
    var bottomRounder: Bool
    var selectedImage: UIImage?
    var unselectedImage: UIImage?
    
    lazy var backgroundView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.selected.color
        return view
    }()
    
    lazy var imageView: UIImageView = {
        let view = UIImageView()
        return view
    }()
    
    override func draw(_ rect: CGRect) {
        super.draw(rect)
        
        var corners: UIRectCorner = []
        if bottomRounder && topRounder {
            corners = [.bottomRight, .topRight]
        } else if bottomRounder {
            corners = [.bottomRight]
        } else if topRounder {
            corners = [.topRight]
        }

        let maskPath = UIBezierPath(
            roundedRect: self.backgroundView.bounds,
            byRoundingCorners: corners,
            cornerRadii: CGSize(width: 32 / 2, height: 32 / 2)
        )
        let maskLayer = CAShapeLayer()
        maskLayer.frame = self.backgroundView.bounds
        maskLayer.path = maskPath.cgPath
        self.backgroundView.layer.mask = maskLayer
    }
    
    init(topRounder: Bool = false, bottomRounder: Bool = false, selectedImage: UIImage? = nil, unselectedImage: UIImage? = nil) {
        self.topRounder = topRounder
        self.bottomRounder = bottomRounder
        self.selectedImage = selectedImage
        self.unselectedImage = unselectedImage

        super.init(frame: .zero)

        self.backgroundColor = Asset.Colors.Background.normal.color
        imageView.image = unselectedImage
        
        self.addSubview(backgroundView)
        self.addSubview(imageView)

        self.translatesAutoresizingMaskIntoConstraints = false
        backgroundView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            backgroundView.widthAnchor.constraint(equalToConstant: 64),
            backgroundView.heightAnchor.constraint(equalToConstant: 56),
            backgroundView.topAnchor.constraint(equalTo: self.topAnchor),
            backgroundView.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            backgroundView.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            backgroundView.trailingAnchor.constraint(equalTo: self.trailingAnchor)
        ])

        imageView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            imageView.widthAnchor.constraint(equalToConstant: 32),
            imageView.heightAnchor.constraint(equalToConstant: 32),
            imageView.centerXAnchor.constraint(equalTo: self.centerXAnchor),
            imageView.centerYAnchor.constraint(equalTo: self.centerYAnchor)
        ])
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletListCoinViewPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let selected = Asset.Images.Scene.WalletList.Coins.bscSelected.image
                let unselected = Asset.Images.Scene.WalletList.Coins.bscUnselected.image
                let view = WalletListCoinView(
                    topRounder: true,
                    bottomRounder: false,
                    selectedImage: selected,
                    unselectedImage: unselected
                )
                return view
            }
            .previewLayout(.fixed(width: 64, height: 56))

            UIViewPreview {
                let selected = Asset.Images.Scene.WalletList.Coins.bscSelected.image
                let unselected = Asset.Images.Scene.WalletList.Coins.bscUnselected.image
                let view = WalletListCoinView(
                    topRounder: false,
                    bottomRounder: false,
                    selectedImage: selected,
                    unselectedImage: unselected
                )
                view.isSelected = true
                return view
            }
            .previewLayout(.fixed(width: 64, height: 56))

            UIViewPreview {
                let selected = Asset.Images.Scene.WalletList.Coins.bscSelected.image
                let unselected = Asset.Images.Scene.WalletList.Coins.bscUnselected.image
                let view = WalletListCoinView(
                    topRounder: false,
                    bottomRounder: true,
                    selectedImage: selected,
                    unselectedImage: unselected
                )
                return view
            }
            .previewLayout(.fixed(width: 64, height: 56))
        }
    }
}
#endif
