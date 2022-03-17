import Foundation
import UIKit

struct DoneActionItem {
    typealias Action = AlertItem.Action

    let wrapper: Action
    init(_ action: Action) {
        self.wrapper = action
    }
}

extension DoneActionItem: AlertItemRepresentable {
    func makeView(for alert: Alert) -> UIView {
        alert.dissmissOnTap = false
        return UIButton().cv.apply { button in
            button
                .confirmButtonStyle()
                .cv.tap()
                .sink { [weak alert] _ in
                    alert?.dismissAction = self.wrapper.action
                    alert?.hide()
                }
                .store(in: &alert.subscriptionSet)
            button.setTitle(wrapper.title, for: .normal)
        }
    }
}
