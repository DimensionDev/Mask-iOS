//
//  File.swift
//  Maskbook
//
//  Created by yzj on 2021/7/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

 class SheetTransition: Transition {
     override func setup() {
        super.setup()
        completionCurve = .easeOut
    }

    override func transitionDuration(using transitionContext: UIViewControllerContextTransitioning?) -> TimeInterval {
        0.5
    }

     override func animateTransition(using transitionContext: UIViewControllerContextTransitioning) {
        guard let startController = transitionContext.viewController(forKey: .from),
              let endController = transitionContext.viewController(forKey: .to),
              let fromView = startController.view,
              let toView = endController.view else {
                transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
                return
        }

        if self.isPresenting {
            transitionContext.containerView.addSubview(toView)
        }

        let presentVC = isPresenting ? endController : startController
        let presentView = isPresenting ? toView : fromView

        let onScreenFrame: CGRect = transitionContext.finalFrame(for: presentVC)
        let offScreenFrame: CGRect = onScreenFrame.offsetBy(dx: 0, dy: onScreenFrame.size.height)

        let initialFrame: CGRect = isPresenting ? offScreenFrame : onScreenFrame
        let finalFrame: CGRect = isPresenting ? onScreenFrame : offScreenFrame

        presentView.frame = initialFrame

        UIView.animate(
            withDuration: transitionDuration(using: transitionContext),
            delay: 0.0,
            usingSpringWithDamping: 0.85,
            initialSpringVelocity: 0,
            options: [.allowUserInteraction, .beginFromCurrentState, .curveEaseInOut],
            animations: {
                presentView.frame = finalFrame
            },
            completion: { _ in
                if !self.isPresenting && !transitionContext.transitionWasCancelled {
                    fromView.removeFromSuperview()
                }

                transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
            }
        )

//        UIView.animate(
//            withDuration: transitionDuration(using: transitionContext),
//            delay: 0.0,
//            options: [.allowUserInteraction, .beginFromCurrentState, .curveEaseInOut],
//            animations: {
//                presentView.frame = finalFrame
//            }) { _ in
//            if !self.isPresenting && !transitionContext.transitionWasCancelled {
//                fromView.removeFromSuperview()
//            }
//
//            transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
//        }
    }
}
