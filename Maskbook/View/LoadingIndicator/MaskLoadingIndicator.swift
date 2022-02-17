//
//  MaskLoadingIndicator.swift
//  Maskbook
//
//  Created by yzj on 2021/8/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit
import UStack

final class MaskLoadingIndicator: NiblessView {
    private let animator: LoadingAnimatable

    private(set) var isAnimating = false
    private(set) var padding: CGFloat = 0

    init(
        animator: LoadingAnimatable = SpinActivityAnimator(),
        padding: CGFloat = 0
    ) {
        self.animator = animator
        super.init()
        prepareAnimation()
    }

    override var bounds: CGRect {
        didSet {
            guard oldValue != bounds && isAnimating else {
                return
            }
            prepareAnimation()
        }
    }

    override var intrinsicContentSize: CGSize { bounds.size }

    func startAnimation() {
        if isAnimating { return }
        isAnimating = true
        isHidden = false
        layer.speed = 1
        prepareAnimation()
    }

    func stopAnimation() {
        guard isAnimating else {
            return
        }
        isAnimating = false
        isHidden = true
        layer.sublayers?.forEach { $0.removeFromSuperlayer() }
        layer.sublayers = nil
    }

    private func prepareAnimation() {
        layer.sublayers?.forEach { $0.removeFromSuperlayer() }
        layer.sublayers = nil
        let bounds = padding.isZero
            ? frame
            : frame.inset(by: UIEdgeInsets(top: padding, left: padding, bottom: padding, right: padding))

        animator.startAnimation(for: self, layoutIn: bounds)
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct MaskLoadingIndicatorPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            MaskLoadingIndicator(animator: SpinActivityAnimator()).cv.apply {
                $0.startAnimation()
                $0.bounds = CGRect(origin: .zero, size: CGSize(width: 100, height: 100))
            }
        }
        .previewLayout(.fixed(width: 100, height: 100))
        .colorScheme(.dark)
    }
}
#endif
