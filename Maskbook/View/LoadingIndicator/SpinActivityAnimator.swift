//
//  SpinActivityAnimator.swift
//  Maskbook
//
//  Created by yzj on 2021/8/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

final class SpinActivityAnimator: LoadingAnimatable {
    var forgroundColor: UIColor { Asset.Colors.Public.blue.color }
    let spinWidth: CGFloat = 12.36
    let spinHeight: CGFloat = 4

    func startAnimation(for view: UIView, layoutIn bounds: CGRect) {
        guard bounds != .zero else {
            return
        }

        let layer = view.layer
        let size = bounds.size
        let translatedX: CGFloat = {
            11.66 * size.width / 48
        }()
        let x = (layer.bounds.size.width - size.width) / 2 + size.width / 2
        let y = (layer.bounds.size.height - size.height) / 2 + size.height / 2 - spinHeight / 2
        let duration: CFTimeInterval = 1.2
        let beginTime = CACurrentMediaTime()
        let beginTimes: [CFTimeInterval] = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1]

        // Scale animation
//        let scaleAnimation = CAKeyframeAnimation(keyPath: "transform.scale")
//
//        scaleAnimation.keyTimes = [0, 0.5, 1]
//        scaleAnimation.values = [1, 0.4, 1]
//        scaleAnimation.duration = duration

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

        // Draw circles
        for i in 0 ..< 12 {
            let width: CGFloat = {
                if i == 5 { return 0 }
                return i < 5 ? spinWidth : spinWidth * CGFloat(i) / CGFloat(12)
            }()
            let offset: CGFloat = spinWidth - width
            let circle = buildSpin(
                angle: CGFloat(Double.pi / 6) * CGFloat(i - 4),
                origin: CGPoint(x: x, y: y),
                width: width,
                offset: offset + translatedX,
                color: forgroundColor
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
        color: UIColor
    ) -> CALayer {
        let circle = CAShapeLayer()
        circle.anchorPoint = CGPoint(x: 0, y: 0.5)
        let frame = CGRect(origin: origin, size: CGSize(width: width, height: spinHeight))

        let rect = CGRect(origin: .zero, size: frame.size)
        let path = UIBezierPath(roundedRect: rect, cornerRadius: 2)
        circle.fillColor = color.cgColor

        circle.backgroundColor = nil
        circle.path = path.cgPath
        circle.frame = frame

        let af = CGAffineTransform(rotationAngle: angle)
            .translatedBy(x: offset, y: 0)
        circle.setAffineTransform(af)

        return circle
    }
}
