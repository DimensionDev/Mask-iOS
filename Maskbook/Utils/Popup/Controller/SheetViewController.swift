//
//  SheetViewController.swift
//  Maskbook
//
//  Created by yzj on 2021/7/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CombineEvent
import UIKit

class SheetViewController: PopupViewController {
    private let cornerView: RoundCornerView

    @KeyboardHandled
    private(set) var shadowView: ShadowShapeView

    private lazy var grayIndicatorView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.disable.color
        view.layer.cornerRadius = 2
        view.snp.makeConstraints {
            $0.width.equalTo(40)
            $0.height.equalTo(4)
        }
        return view
    }()

    private(set) var contentView = UIView()
    private let pangestrue = UIPanGestureRecognizer()
    /// threshold stands for finish progress of interactive transition
    var completeThreshold: CGFloat { 0.15 }

    override init(presenter: Presenter) {
        let cornerView = RoundCornerView()
        cornerView.cornersSize = CGSize(width: 20, height: 20)
        cornerView.corners = [.topLeft, .topRight]
        cornerView.backgroundColor = Asset.Colors.Background.normal.color
        cornerView.setContentCompressionResistancePriority(.defaultHigh, for: .vertical)
        self.cornerView = cornerView
        let shadowView = ShadowShapeView(shadowStyle: .translucent) {
            cornerView
        }
        self.shadowView = shadowView
        super.init(presenter: presenter)
    }

    override func buildContent() {
        view.withSubViews {
            shadowView
        }

        cornerView.withSubViews {
            grayIndicatorView
            contentView
        }
    }

    override func buildLayout() {
        grayIndicatorView.snp.makeConstraints {
            $0.top.equalToSuperview()
                .offset(18)
            $0.centerX.equalToSuperview()
        }
        grayIndicatorView.setContentCompressionResistancePriority(.required, for: .vertical)

        cornerView.snp.makeConstraints { $0.edges.equalToSuperview() }
        shadowView.snp.makeConstraints {
            $0.leading.trailing.equalToSuperview()
            $0.bottom.equalToSuperview().offset(0)
        }

        contentView.setContentCompressionResistancePriority(.defaultHigh, for: .vertical)
        contentView.snp.makeConstraints {
            $0.bottom.leading.trailing.equalToSuperview()
            $0.top.equalTo(grayIndicatorView.snp.bottom)
                .offset(2)
        }
    }

    override func buildEvent() {
        preparePanIneraction()
    }

    private func preparePanIneraction() {
        shadowView.cv.gesture(pangestrue)
            .sink { [weak self] gesture in
                guard let self = self else { return }

                let offset = gesture.translation(in: self.shadowView)
                let progress = min(1, max(0.0, offset.y / self.shadowView.bounds.height))
                let finalProgress = progress / 4

                switch gesture.state {
                case .began:
                    self.view.endEditing(true)
                    self.presenter.transition.isInteracting = true
                    self.presenter.transition.isPresenting = false
                    self.dismiss(animated: true)

                case .changed:
                    self.presenter.transition.isInteracting = true
                    self.presenter.transition.isPresenting = false
                    self.presenter.transition.update(finalProgress)

                case .ended, .cancelled:
                    self.presenter.transition.isInteracting = false
                    self.presenter.transition.isPresenting = false

                    // if progress is more than completeThreshold
                    // then just finish the animation
                    if finalProgress > self.completeThreshold {
                        self.presenter.transition.finish()
                        self.dismissAction?()
                    } else {
                        self.presenter.transition.cancel()
                    }

                default:
                    self.presenter.transition.isPresenting = false
                    self.presenter.transition.isInteracting = false
                }
            }
            .store(in: &subscriptionSet)
    }
}

extension SheetViewController {
    @propertyWrapper
    final class KeyboardHandled<T: UIView> {
        var wrappedValue: T

        private lazy var topController = UIApplication.getTopViewController()
        private var subscriptionSet = Set<AnyCancellable>()

        init(wrappedValue: T) {
            self.wrappedValue = wrappedValue
            registerKeyboardEvent()
        }

        private func registerKeyboardEvent() {
            Publishers.Merge(
                NotificationCenter.default.publisher(for: UIResponder.keyboardWillChangeFrameNotification)
                    .map { (info: $0.userInfo, name: $0.name) },
                NotificationCenter.default.publisher(for: UIResponder.keyboardWillHideNotification)
                    .map { (info: $0.userInfo, name: $0.name) }
            )
            .receive(on: DispatchQueue.main)
            .sink { [weak self] userInfo, name in
                guard let self = self else { return }

                guard let frame = userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect,
                      let duration = userInfo?[UIResponder.keyboardAnimationDurationUserInfoKey] as? TimeInterval,
                      let curve = userInfo?[UIResponder.keyboardAnimationCurveUserInfoKey] as? NSNumber else {
                    return
                }

                switch name {
                case UIResponder.keyboardWillHideNotification:
                    self.wrappedValue.snp.updateConstraints {
                        $0.bottom.equalToSuperview().offset(0)
                    }

                case UIResponder.keyboardWillChangeFrameNotification:
                    self.wrappedValue.snp.updateConstraints {
                        $0.bottom.equalToSuperview().offset(-frame.height)
                    }

                default: break
                }

                UIView.animate(
                    withDuration: duration,
                    delay: 0,
                    options: [
                        UIView.AnimationOptions(rawValue: curve.uintValue),
                        UIView.AnimationOptions.beginFromCurrentState
                    ],
                    animations: {
                        self.wrappedValue.layoutIfNeeded()
                    })
            }
            .store(in: &subscriptionSet)
        }
    }
}
