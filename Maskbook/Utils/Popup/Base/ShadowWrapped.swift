//
//  ShadowWrapped.swift
//  Maskbook
//
//  Created by yzj on 2021/8/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class ShadowContainerView<V: UIView>: UIView {
    let content: V
    init(shadowStyle: ShadowShapeView.ShadowStyle = .translucent, content: @escaping () -> V) {
        self.content = content()
        super.init(frame: .zero)

        self.addSubview(self.content)
        self.content.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

@propertyWrapper
struct ShadowWrapped<V: UIView> {
    var wrappedValue: V

    private(set) var projectedValue: ShadowContainerView<V>

    init(wrappedValue: V, shadowStyle: ShadowShapeView.ShadowStyle = .translucent) {
        self.wrappedValue = wrappedValue
        self.projectedValue = ShadowContainerView(shadowStyle: shadowStyle) {
            wrappedValue
        }
    }
}
