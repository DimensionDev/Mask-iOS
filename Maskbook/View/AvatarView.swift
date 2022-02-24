//
//  AvatarView.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class AvatarView: UIView {
    lazy var label: UILabel = {
        let view = UILabel()
        view.textColor = Asset.Colors.Public.white.color
        return view
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
            return label.text
        }
    }
    
    init(title: String?) {
        super.init(frame: .zero)
        
        self.backgroundColor = Asset.Colors.Public.blue.color
        self.addSubview(label)
        
        self.title = title
        
        label.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            label.centerYAnchor.constraint(equalTo: self.centerYAnchor),
            label.centerXAnchor.constraint(equalTo: self.centerXAnchor)
        ])
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        self.label.font = .systemFont(ofSize: floor(self.frame.height * 0.5), weight: .semibold)
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
