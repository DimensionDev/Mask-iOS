import BigInt
import Combine
import SwiftUI
import SnapKit
import UIKit
import UStack

protocol RedPacketShareDelegate: AnyObject {
    func share(_ payload: RedPacketInteractivePayload)
}

final class RedPacketShareSheet: PopupViewController {
    private weak var redPacketShareDelegate: RedPacketShareDelegate?
    private(set) var cancelableStorage: Set<AnyCancellable> = []

    private var viewModel: RedPacketShareViewModel

    init(
        claimedAmount: BigUInt?,
        payload: RedPacketInteractivePayload?,
        shareDelegate: RedPacketShareDelegate?
    ) {
        self.viewModel = RedPacketShareViewModel(
            claimAmount: claimedAmount,
            payload: payload
        )
        self.redPacketShareDelegate = shareDelegate

        super.init(
            presenter: Presenter(
                presentStyle: .customContainer(color: Asset.Colors.Background.twitterMask.color),
                transition: ScaleTransition()
            )
        )
    }

    override func buildEvent() {
        super.buildEvent()
        viewModel.actionSignal
            .asDriver()
            .sink { [weak self] action in
                guard let self = self else { return }
                switch action {
                case let .share(payload): self.share(payload)
                case .close: self.hide()
                }
            }
            .store(in: &cancelableStorage)
    }

    private func share(_ payload: RedPacketInteractivePayload) {
        self.dismissAction = { [weak self] in
            self?.redPacketShareDelegate?.share(payload)
        }
        self.hide()
    }

    override func buildContent() {
        super.buildContent()
        dissmissOnTap = false
        hideWhenRotate = false

        let view = RedPacketShareView(viewModel: viewModel).asUIView()
        self.view.addSubview(view)
        view.snp.makeConstraints { make in
            make.edges.equalToSuperview()
        }
    }
}

extension RedPacketShareSheet {
    final class ScaleTransition: Transition {
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

            let initialScale: CGFloat = isPresenting ? 0 : 1.0
            let finalScale: CGFloat = isPresenting ? 1 : 0

            if isPresenting {
                presentView.transform = CGAffineTransform(scaleX: initialScale, y: initialScale)
            }

            UIView.animate(
                withDuration: transitionDuration(using: transitionContext),
                delay: 0.0,
                usingSpringWithDamping: 0.7,
                initialSpringVelocity: 0.3,
                options: [.curveEaseInOut],
                animations: {
                    presentView.transform = CGAffineTransform(scaleX: finalScale, y: finalScale)
                }) { _ in
                    if !self.isPresenting {
                        fromView.removeFromSuperview()
                    }
                    transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
                }
        }
    }
}
