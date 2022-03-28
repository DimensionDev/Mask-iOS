import Foundation
import UIKit
import UStack

protocol AlertItemRepresentable {
    func makeView(for alert: Alert) -> UIView
}

extension AlertItemRepresentable {
    func makeView(for alert: Alert) -> UIView {
        .spacer()
    }
}
