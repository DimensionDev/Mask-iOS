//
//  PresentationController.swift
//  Maskbook
//
//  Created by yzj on 2021/7/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class PresentationController: UIPresentationController {
    private(set) var dimmingContainerView = UIView()
    private(set) var dimmingView = UIVisualEffectView(effect: nil)
    private let presentStyle: PresentStyle

    init(
        presentStyle: PresentStyle,
        presentedViewController: UIViewController,
        presenting presentingViewController: UIViewController?
    ) {
        self.presentStyle = presentStyle
        super.init(presentedViewController: presentedViewController, presenting: presentingViewController)
        setup()
    }

    func setup() {}

    func prepareBlurEffect() -> UIBlurEffect? {
        switch presentStyle {
        case .blur:
            return traitCollection.userInterfaceStyle == .dark
                ? UIBlurEffect(style: .dark)
                : UIBlurEffect(style: .systemThinMaterial)

        default: return nil
        }
    }

    override func presentationTransitionWillBegin() {
        guard let containerView = self.containerView else {
            return
        }

        dimmingContainerView.frame = containerView.bounds
        dimmingView.frame = containerView.bounds

        dimmingContainerView.insertSubview(dimmingView, at: 0)
        containerView.insertSubview(dimmingContainerView, at: 0)

        dimmingContainerView.alpha = 0.0

        // dimmingContainerView represent the backgroundColor of the popup
        switch self.presentStyle {
        case .transparent: break

        case .translucent:
            dimmingContainerView.backgroundColor = Asset.Colors.Background.mask.color

        case let .customContainer(color):
            dimmingContainerView.backgroundColor = color

        case .blur:
            let effect = prepareBlurEffect()
            if dimmingView.effect != effect {
                dimmingView.effect = effect
            }
        }

        // only when the blureffect get value
        // this dimmingView will be visible
        // usually it is invisible
        dimmingView.isOpaque = false
        dimmingView.backgroundColor = .clear
        dimmingView.alpha = 0

        self.presentedViewController.transitionCoordinator?.animate(
            alongsideTransition: { _ in
                self.dimmingView.alpha = 0.9
                self.dimmingContainerView.alpha = 1
            },
            completion: nil
        )
    }

    override func dismissalTransitionWillBegin() {
        presentedViewController.transitionCoordinator?.animate(
            alongsideTransition: { _ in
                self.dimmingView.backgroundColor = .clear
                self.dimmingView.effect = nil
                self.dimmingContainerView.alpha = 0.0
            },
            completion: nil
        )
    }

    override func containerViewWillLayoutSubviews() {
        guard let presentedView = self.presentedView,
              let containerView = self.containerView else {
            return
        }
        dimmingContainerView.frame = containerView.bounds
        dimmingView.frame = containerView.bounds
        presentedView.frame = containerView.bounds
    }

    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        // here will be called before presentationTransitionWillBegin
        dimmingView.effect = prepareBlurEffect()
    }

    override func presentationTransitionDidEnd(_ completed: Bool) {}
    override func dismissalTransitionDidEnd(_ completed: Bool) {}
    override func containerViewDidLayoutSubviews() {}

    override var shouldPresentInFullscreen: Bool { true }
    override var shouldRemovePresentersView: Bool { false }
    override var adaptivePresentationStyle: UIModalPresentationStyle { .custom }
}
