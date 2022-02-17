//
//  PopupController.swift
//  Maskbook
//
//  Created by yzj on 2021/7/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit

class PopupViewController: UIViewController {
//    weak var presentingVC: UIViewController?

    var dissmissOnTap = true
    var canRotate = false
    var hideWhenRotate = true
    var dismissAction: (() -> Void)?

    lazy var subscriptionSet = Set<AnyCancellable>()
    private(set) var presenter: Presenter

    init(presenter: Presenter) {
        self.presenter = presenter
        super.init(nibName: nil, bundle: nil)
        setup()
    }

    func tapDismiss() {
        dismiss(animated: true) {
            self.dismissAction?()
        }
    }

    @available(*, unavailable)
    required init?(coder aDecoder: NSCoder) {
        fatalError("shoud not be called")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .clear
        buildContent()
        buildLayout()
        buildEvent()
    }

    func buildContent() {}
    func buildLayout() {}
    func buildEvent() {}

    func setup() {
        modalPresentationStyle = .custom
        presenter.bind(to: self)
    }

    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        guard dissmissOnTap,
              touches.count == 1,
              let touch = touches.first,
              let view = touch.view else {
            return
        }

        switch view {
        case self.view: hide()
        default: break
        }
    }

    override var shouldAutorotate: Bool { self.canRotate }

    override func viewWillTransition(to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator) {
        super.viewWillTransition(to: size, with: coordinator)

        if hideWhenRotate {
            hide()
        }
    }
}

extension PopupViewController {
    func show(by vc: UIViewController? = UIApplication.getTopViewController(), completion: (() -> Void)? = nil) {
//        self.presentingVC = vc
        var controller: UIViewController? = vc
        while controller != nil, controller?.isBeingDismissed == true {
            controller = controller?.presentingViewController
        }

        controller?.present(self, animated: true, completion: {
            completion?()
        })
    }

    func hide() {
        dismiss(animated: true) { [weak self] in self?.dismissAction?() }
    }

    override func dismiss(animated flag: Bool, completion: (() -> Void)? = nil) {
        super.dismiss(animated: flag) {
            completion?()
        }
    }
}
