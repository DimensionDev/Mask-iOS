//
//  Transition.swift
//  Maskbook
//
//  Created by yzj on 2021/7/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

/// Provide transition animation
class Transition: UIPercentDrivenInteractiveTransition {
    var isPresenting = false
    var isInteracting = false

    override init() {
        super.init()
    }

    func setup() {}
    override func finish() {
        completionSpeed = (1.0 - percentComplete)
        super.finish()
    }
    
    override func cancel() {
        completionSpeed = percentComplete
        super.cancel()
    }
}

extension Transition: UIViewControllerAnimatedTransitioning {
    func animationEnded(_ transitionCompleted: Bool) {}
    func transitionDuration(using transitionContext: UIViewControllerContextTransitioning?) -> TimeInterval { 0.25 }
    func animateTransition(using transitionContext: UIViewControllerContextTransitioning) {
        guard let startController = transitionContext.viewController(forKey: .from),
              let endController = transitionContext.viewController(forKey: .to),
              let fromView = startController.view,
              let toView = endController.view else {
            transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
            return
        }
        
        if isPresenting {
            transitionContext.containerView.addSubview(toView)
        }
        
        let presentView = isPresenting ? toView : fromView
        
        let initialAlpha: CGFloat = isPresenting ? 0.0 : 1.0
        let finalAlpha: CGFloat = isPresenting ? 1.0 : 0.0
        
        presentView.alpha = initialAlpha
        presentView.frame = fromView.bounds
        
        UIView.animate(
            withDuration: transitionDuration(using: transitionContext),
            delay: 0.0,
            options: [.beginFromCurrentState, .curveEaseInOut],
            animations: {
                presentView.alpha = finalAlpha
            }) { finished in
            if !self.isPresenting && finished {
                fromView.removeFromSuperview()
            }
            
            transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
        }
    }
}

extension Transition {
    static var alert: Transition = AlertTransition()
}

final class AlertTransition: Transition {
    override func animateTransition(using transitionContext: UIViewControllerContextTransitioning) {
        guard let startController = transitionContext.viewController(forKey: .from),
              let endController = transitionContext.viewController(forKey: .to),
              let fromView = startController.view,
              let toView = endController.view else {
            transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
            return
        }
        
        if isPresenting {
            transitionContext.containerView.addSubview(toView)
        }
        
        let presentView = isPresenting ? toView : fromView
        
        let initialAlpha: CGFloat = isPresenting ? 0.0 : 1.0
        let finalAlpha: CGFloat = isPresenting ? 1.0 : 0.0
        
        let initialScale: CGFloat = isPresenting ? 1.0 : 1.0
        let finalScale: CGFloat = 1.0
        
        presentView.alpha = initialAlpha
        presentView.transform = CGAffineTransform(scaleX: initialScale, y: initialScale)
        
        UIView.animate(
            withDuration: transitionDuration(using: transitionContext),
            delay: 0.0,
            options: [.allowUserInteraction, .beginFromCurrentState, .curveEaseInOut],
            animations: {
                presentView.alpha = finalAlpha
                presentView.transform = CGAffineTransform(scaleX: finalScale, y: finalScale)
            }) { _ in
            if !self.isPresenting {
                fromView.removeFromSuperview()
            }
            
            transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
        }
    }
}
