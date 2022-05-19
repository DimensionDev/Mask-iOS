//
//  MaskLoadingIndicator.swift
//  Maskbook
//
//  Created by yzj on 2021/8/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit
import UStack
import SwiftUI

final class MaskLoadingIndicator: NiblessView {
    private let animator: LoadingAnimatable

    private(set) var isAnimating = false
    private(set) var padding: CGFloat = 0

    init(
        animator: LoadingAnimatable = .spinWheel,
        padding: CGFloat = 0
    ) {
        self.animator = animator
        self.padding = padding
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

    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        stopAnimation()
        startAnimation()
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

struct LoadingIndicator: UIViewRepresentable {
    final class Coordinator {
        var loading: Bool
        var preferredSize: CGSize
        var animator: LoadingAnimatable

        init(
            loading: Bool,
            preferredSize: CGSize,
            animator: LoadingAnimatable = .spinWheel
        ) {
            self.loading = loading
            self.preferredSize = preferredSize
            self.animator = animator
        }
    }

    var loading: Bool
    var preferredSize: CGSize
    var animator: LoadingAnimatable

    init(
        loading: Bool,
        preferredSize: CGSize,
        animator: LoadingAnimatable = .spinWheel
    ) {
        self.loading = loading
        self.preferredSize = preferredSize
        self.animator = animator
    }

    func makeUIView(context: Context) -> MaskLoadingIndicator {
        let uiView = MaskLoadingIndicator(animator: context.coordinator.animator)

        if uiView.bounds.size != context.coordinator.preferredSize {
            var bounds = uiView.bounds
            bounds.size = context.coordinator.preferredSize
            uiView.bounds = bounds
        }

        return uiView
    }

    func updateUIView(_ uiView: MaskLoadingIndicator, context: Context) {
        if uiView.bounds.size != context.coordinator.preferredSize {
            var bounds = uiView.bounds
            bounds.size = context.coordinator.preferredSize
            uiView.bounds = bounds
        }

        context.coordinator.loading
        ? uiView.startAnimation()
        : uiView.stopAnimation()
    }

    func makeCoordinator() -> Coordinator {
        Coordinator(loading: loading, preferredSize: preferredSize, animator: animator)
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct MaskLoadingIndicatorPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            MaskLoadingIndicator(padding: 2.665).cv.apply {
                $0.startAnimation()
                $0.bounds = CGRect(origin: .zero, size: CGSize(width: 32, height: 32))
            }
        }
        .previewLayout(.fixed(width: 32, height: 32))
    }
}
#endif
