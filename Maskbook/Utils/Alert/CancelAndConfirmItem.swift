import Foundation
import UIKit
import UStack

struct CancelAndConfirmItem {
    typealias Action = AlertItem.Action

    let cancelWrapper: Action
    let confirmWrapper: Action
    init(cancel: Action, confirm: Action) {
        self.cancelWrapper = cancel
        self.confirmWrapper = confirm
    }
}

extension CancelAndConfirmItem: AlertItemRepresentable {
    func makeView(for alert: Alert) -> UIView {
        alert.dissmissOnTap = false
        return HStackView(spacing: 20, distribution: .fillEqually) {
            UIButton().cv.apply { button in
                button
                    .cancelButtonStyle()
                    .cv.tap()
                    .sink { [weak alert] _ in
                        alert?.dismissAction = cancelWrapper.action
                        alert?.hide()
                    }
                    .store(in: &alert.subscriptionSet)
                button.setTitle(cancelWrapper.title, for: .normal)
            }
            UIButton().cv.apply { button in
                button
                    .confirmButtonStyle()
                    .cv.tap()
                    .sink { [weak alert] _ in
                        alert?.dismissAction = confirmWrapper.action
                        alert?.hide()
                    }
                    .store(in: &alert.subscriptionSet)
                button.setTitle(confirmWrapper.title, for: .normal)
            }
        }
    }
}
