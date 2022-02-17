//
//  Presenter.swift
//  Maskbook
//
//  Created by yzj on 2021/7/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

/// a wrapper which implement UIViewControllerTransitioningDelegate
class Presenter: NSObject, UIViewControllerTransitioningDelegate {
    /// use `as` to convert type if needed
    private(set) weak var presentViewController: UIViewController?

    private let presentStyle: PresentStyle
    private(set) var transition: Transition

    init(presentStyle: PresentStyle = .translucent, transition: Transition = Transition()) {
        self.presentStyle = presentStyle
        self.transition = transition
        super.init()
    }

    func bind(to controller: UIViewController) {
        presentViewController = controller
        presentViewController?.transitioningDelegate = self
    }

    // MARK: UIViewControllerTransitioningDelegate

    func animationController(
        forPresented presented: UIViewController,
        presenting: UIViewController,
        source: UIViewController
    ) -> UIViewControllerAnimatedTransitioning? {
        transition.isPresenting = true
        return transition
    }
    
    func animationController(forDismissed dismissed: UIViewController) -> UIViewControllerAnimatedTransitioning? {
        transition.isPresenting = false
        return transition
    }
    
    func interactionControllerForPresentation(
        using animator: UIViewControllerAnimatedTransitioning
    ) -> UIViewControllerInteractiveTransitioning? { nil }
    
    func interactionControllerForDismissal(
        using animator: UIViewControllerAnimatedTransitioning
    ) -> UIViewControllerInteractiveTransitioning? { nil }
    
    func presentationController(
        forPresented presented: UIViewController,
        presenting: UIViewController?,
        source: UIViewController
    ) -> UIPresentationController? {
        preparePresentation(presented: presented, presenting: presenting)
    }

    // MARK: custom builder method

    func preparePresentation(presented: UIViewController, presenting: UIViewController?) -> UIPresentationController? {
        PresentationController(
            presentStyle: presentStyle,
            presentedViewController: presented,
            presenting: presenting
        )
    }
}

extension Presenter {
    static var alert = Presenter(presentStyle: .translucent)
}
