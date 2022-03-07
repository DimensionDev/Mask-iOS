//
//  SpinWheelAnimator.swift
//  Maskbook
//
//  Created by yzj on 2022/3/2.
//  Copyright © 2022 dimension. All rights reserved.
//
import UIKit

final class SpinWheelAnimator: LoadingAnimatable {
    var forgroundColor: ColorAsset { Asset.Colors.Text.dark }

    let spinWidth: CGFloat = 6.82
    let spinHeight: CGFloat = 1.86

    private var spinWidthRatio: CGFloat { spinWidth / 26.67 }
    private var spinHeightRatio: CGFloat { spinHeight / 26.67 }

    func startAnimation(for view: UIView, layoutIn bounds: CGRect) {
        guard bounds != .zero else {
            return
        }

        let layer = view.layer
        let size = bounds.size
        let translatedX: CGFloat = {
            6.515 * size.width / 26.67
        }()
        let x = (layer.bounds.size.width - size.width) / 2 + size.width / 2
        let y = (layer.bounds.size.height - size.height) / 2 + size.height / 2 - spinHeight / 2
        let duration: CFTimeInterval = 1.2
        let beginTime = CACurrentMediaTime()
        let beginTimes: [CFTimeInterval] = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1]

        // Opacity animation
        let opacityAnimaton = CAKeyframeAnimation(keyPath: "opacity")

        opacityAnimaton.keyTimes = [0, 0.6, 1.2]
        opacityAnimaton.values = [1, 0.3, 1]
        opacityAnimaton.duration = duration

        // Animation
        let animation = CAAnimationGroup()

        animation.animations = [opacityAnimaton]
        animation.timingFunction = CAMediaTimingFunction(name: .linear)
        animation.duration = duration
        animation.repeatCount = HUGE
        animation.isRemovedOnCompletion = false

        let width = {
            size.width * spinWidthRatio
        }()
        // Draw wheels
        for i in 0 ..< 8 {
            let circle = buildSpin(
                angle: 2 * CGFloat.pi / 8 * CGFloat(i),
                origin: CGPoint(x: x, y: y),
                width: width,
                offset: translatedX,
                colorAsset: forgroundColor
            )

            animation.beginTime = beginTime + beginTimes[i]
            circle.add(animation, forKey: "animation")
            layer.addSublayer(circle)
        }
    }

    private func buildSpin(
        angle: CGFloat,
        origin: CGPoint,
        width: CGFloat,
        offset: CGFloat,
        colorAsset: ColorAsset
    ) -> CALayer {
        let circle = CAShapeLayer()
        circle.anchorPoint = CGPoint(x: 0, y: 0.5)
        let frame = CGRect(origin: origin, size: CGSize(width: width, height: spinHeight))

        let rect = CGRect(origin: .zero, size: frame.size)
        let path = UIBezierPath(roundedRect: rect, cornerRadius: 2)
        circle.fillColor = colorAsset.color.cgColor

        circle.backgroundColor = nil
        circle.path = path.cgPath
        circle.frame = frame

        let af = CGAffineTransform(rotationAngle: angle)
            .translatedBy(x: offset, y: 0)
        circle.setAffineTransform(af)

        return circle
    }
}

extension LoadingAnimatable where Self == SpinWheelAnimator {
    static var spinWheel: Self { SpinWheelAnimator() }
}
