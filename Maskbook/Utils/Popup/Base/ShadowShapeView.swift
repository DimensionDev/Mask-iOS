//
//  ShadowShapeView.swift
//  Maskbook
//
//  Created by yzj on 2021/7/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit
import UStack

class ShadowShapeView: UIView {
    private var content: UIView & PathProvider
    private var maskLayer: CAShapeLayer { content.maskLayer }
    private let shadowStyle: ShadowStyle

    private(set) var cancelableStorage: Set<AnyCancellable> = []
    private var shadowPath: CGPath?

    init(shadowStyle: ShadowStyle = .translucent, content: @escaping () -> UIView & PathProvider) {
        self.content = content()
        self.shadowStyle = shadowStyle
        super.init(frame: .zero)
        setup()
    }

    override var backgroundColor: UIColor? {
        get { content.backgroundColor }
        set { content.backgroundColor = newValue }
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("unavailable")
    }

    func setup() {
        withSubViews {
            content
        }
        
        content.snp.makeConstraints { $0.edges.equalToSuperview() }
        setContentHuggingPriority(.required, for: .horizontal)
        setContentCompressionResistancePriority(.required, for: .vertical)

        switch shadowStyle {
        case .blur: blurShadow()
        case .translucent: translucentShadow()
        }

        publisher(for: \.bounds, options: .new)
            .didChange()
            .sink { [weak self] _ in
                guard let self = self else { return }
                let path = self.content.path(of: self.bounds)?.cgPath
                if self.shadowPath != path {
                    self.shadowPath = path
                    self.layer.shadowPath = path
                }
            }
            .store(in: &cancelableStorage)
    }
}

extension ShadowShapeView {
    enum ShadowStyle {
        case blur
        case translucent
    }
}

@propertyWrapper
struct ShadowAndRadiusWrapped<V: UIView> {
   var wrappedValue: V
   private(set) var projectedValue: ShadowShapeView

   let paddings: UIEdgeInsets
   let contentCorner: CGFloat

    init(
        wrappedValue: V,
        shadowStyle: ShadowShapeView.ShadowStyle = .blur,
        paddings: UIEdgeInsets = UIEdgeInsets(all: 20),
        contentCorner: CGFloat = 20
    ) {
        self.wrappedValue = wrappedValue
        self.paddings = paddings
        self.contentCorner = contentCorner

        let roundedView = RoundCornerView()
        roundedView.backgroundColor = Asset.Colors.Background.normal.color
        roundedView.corners = [.allCorners]
        roundedView.cornersSize = CGSize(width: contentCorner, height: contentCorner)
        projectedValue = ShadowShapeView(shadowStyle: shadowStyle) {
            roundedView
        }

        projectedValue.addSubview(wrappedValue)
        wrappedValue.snp.makeConstraints {
            $0.edges.equalToSuperview()
                .inset(paddings)
        }
    }
}

extension UIEdgeInsets {
    init(vertical: CGFloat, horizontal: CGFloat) {
        self.init(top: vertical, left: horizontal, bottom: vertical, right: horizontal)
    }

    init(all margin: CGFloat) {
        self.init(top: margin, left: margin, bottom: margin, right: margin)
    }
}
