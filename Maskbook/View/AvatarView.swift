//
//  AvatarView.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit
import Kingfisher

class AvatarView: UIView {
    lazy var label: UILabel = {
        let view = UILabel()
        view.textColor = Asset.Colors.Public.white.color
        return view
    }()
    
    lazy var imageView: UIImageView = {
        let imageView = UIImageView()
        return imageView
    }()
    
    var title: String? {
        set {
            if let first = newValue?.uppercased().first {
                let str = String(first)
                label.text = str
            } else {
                label.text = nil
            }
        }
        
        get {
            label.text
        }
    }
    
    func setNetworkURL(url: String?) {
        if let url = url {
            imageView.setNetworkImage(url: url) { [weak self] result in
                switch result {
                case .success(let result):
                    self?.imageView.image = result.image
                    self?.imageView.isHidden = false
                    
                case .failure(_):
                    self?.imageView.isHidden = true
                }
            }
        } else {
            imageView.kf.cancelDownloadTask()
            imageView.isHidden = true
        }
    }
    
    init() {
        super.init(frame: .zero)
        setupSubviews()
    }
    
    init(title: String?) {
        super.init(frame: .zero)
        setupSubviews()
        self.title = title
    }
    
    func setupSubviews() {
        backgroundColor = Asset.Colors.Public.blue.color
        clipsToBounds = true
        withSubViews {
            label
            imageView
        }
        NSLayoutConstraint.activate([
            label.centerYAnchor.constraint(equalTo: centerYAnchor),
            label.centerXAnchor.constraint(equalTo: centerXAnchor)
        ])
        NSLayoutConstraint.activate([
            imageView.topAnchor.constraint(equalTo: topAnchor),
            imageView.leadingAnchor.constraint(equalTo: leadingAnchor),
            imageView.trailingAnchor.constraint(equalTo: trailingAnchor),
            imageView.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        label.font = .systemFont(ofSize: floor(frame.height * 0.5), weight: .semibold)
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct AvatarViewPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                let view = AvatarView(title: "z")
                
                view.translatesAutoresizingMaskIntoConstraints = false
                NSLayoutConstraint.activate([
                    view.widthAnchor.constraint(equalToConstant: 72),
                    view.heightAnchor.constraint(equalToConstant: 72)
                ])
                return view
            }
            .previewLayout(.fixed(width: 72, height: 72))
            UIViewPreview {
                let view = AvatarView(title: "g")
                
                view.translatesAutoresizingMaskIntoConstraints = false
                NSLayoutConstraint.activate([
                    view.widthAnchor.constraint(equalToConstant: 32),
                    view.heightAnchor.constraint(equalToConstant: 32)
                ])
                return view
            }
            .previewLayout(.fixed(width: 32, height: 32))
        }
    }
}
#endif
