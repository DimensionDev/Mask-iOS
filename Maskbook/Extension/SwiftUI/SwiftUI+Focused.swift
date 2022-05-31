import SwiftUI
import Introspect

extension View {
    func focusTextView(
        when condition: @escaping @autoclosure () -> Bool = { true }()
    ) -> some View {
        introspect(selector: TargetViewSelector.siblingContaining) { (view: UITextView) in
            let shouldBecomeFirstResponder = condition()

            if shouldBecomeFirstResponder {
                if !view.isFirstResponder {
                    view.becomeFirstResponder()
                }
            } else {
                if view.isFirstResponder {
                    view.resignFirstResponder()
                }
            }
        }
    }

    func focusTextField(
        when condition: @escaping @autoclosure () -> Bool = { true }()
    ) -> some View {
        introspect(selector: TargetViewSelector.siblingContaining) { (view: UITextField) in
            let shouldBecomeFirstResponder = condition()

            if shouldBecomeFirstResponder {
                if !view.isFirstResponder {
                    view.becomeFirstResponder()
                }
            } else {
                if view.isFirstResponder {
                    view.resignFirstResponder()
                }
            }
        }
    }
}

