//
//  UIView+Shake.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/23.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

enum ShakeDirection {
    case horizontal
    case vertical
}
// swiftlint:disable function_parameter_count legacy_random multiline_arguments
extension UIView {
    private func degreesToRadians(_ x: CGFloat) -> CGFloat {
        .pi * x / 180.0
    }

    func shakeWhenDelete(duration: Double = 0.25,
                         displacement: CGFloat = 1.0,
                         degreesRotation: CGFloat = 2.0)
    {
        let negativeDisplacement = -1.0 * displacement
        let position = CAKeyframeAnimation(keyPath: "position")
        position.beginTime = 0.8
        position.duration = duration
        position.values = [
            NSValue(cgPoint: CGPoint(x: negativeDisplacement, y: negativeDisplacement)),
            NSValue(cgPoint: CGPoint(x: 0, y: 0)),
            NSValue(cgPoint: CGPoint(x: negativeDisplacement, y: 0)),
            NSValue(cgPoint: CGPoint(x: 0, y: negativeDisplacement)),
            NSValue(cgPoint: CGPoint(x: negativeDisplacement, y: negativeDisplacement))
        ]
        position.calculationMode = CAAnimationCalculationMode.linear
        position.isRemovedOnCompletion = false
        position.repeatCount = Float.greatestFiniteMagnitude
        position.beginTime = CFTimeInterval(Double.random(in: 1 ..< 1_000).truncatingRemainder(dividingBy: Double(25)) / Double(100))
        position.isAdditive = true

        let transform = CAKeyframeAnimation(keyPath: "transform")
        transform.beginTime = 2.6
        transform.duration = duration
        transform.valueFunction = CAValueFunction(name: CAValueFunctionName.rotateZ)
        transform.values = [
            degreesToRadians(-1.0 * degreesRotation),
            degreesToRadians(degreesRotation),
            degreesToRadians(-1.0 * degreesRotation)
        ]
        transform.calculationMode = CAAnimationCalculationMode.linear
        transform.isRemovedOnCompletion = false
        transform.repeatCount = Float.greatestFiniteMagnitude
        transform.isAdditive = true
        transform.beginTime = CFTimeInterval(Double.random(in: 1 ..< 1_000).truncatingRemainder(dividingBy: Double(25)) / Double(100))

        layer.add(position, forKey: "shakePosition")
        layer.add(transform, forKey: "shakeTransform")
    }
    
    func removeShakeWhenDelete() {
        layer.removeAnimation(forKey: "shakePosition")
        layer.removeAnimation(forKey: "shakeTransform")
    }

    func shake() {
        shake(times: 5,
              direction: 1,
              currentTimes: 0,
              delta: 5,
              interval: 0.03,
              shakeDirection: .horizontal,
              handler: {})
    }

    func shake(times: Int,
               direction: Int,
               currentTimes: Int,
               delta: CGFloat,
               interval: TimeInterval,
               shakeDirection: ShakeDirection,
               handler: @escaping () -> Void)
    {
        UIView.animate(withDuration: interval) {
            self.transform = (shakeDirection == .horizontal) ?
                CGAffineTransform(translationX: delta * CGFloat(direction), y: 0) :
                CGAffineTransform(translationX: 0, y: delta * CGFloat(direction))
        } completion: { _ in
            if currentTimes >= times {
                UIView.animate(withDuration: interval) {
                    self.transform = CGAffineTransform.identity
                } completion: { _ in
                    handler()
                }
            }
        }
        shake(times: times,
              direction: direction * -1,
              currentTimes: currentTimes + 1,
              delta: delta,
              interval: interval,
              shakeDirection: shakeDirection,
              handler: handler)
    }
}
