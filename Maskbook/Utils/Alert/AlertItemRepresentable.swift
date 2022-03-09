import Foundation
import UIKit
import UStack

protocol AlertItemRepresentable {
    var itemPack: [AlertItemRepresentable] { get }
    func makeView(for alert: Alert) -> UIView
}

extension AlertItemRepresentable {
    func makeView(for alert: Alert) -> UIView {
        .spacer()
    }
}
