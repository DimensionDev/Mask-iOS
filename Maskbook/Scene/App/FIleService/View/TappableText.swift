import Foundation
import SwiftUI

struct TappableText: UIViewRepresentable {
    init(attributedString: @escaping () -> NSAttributedString) {
        self.attributedString = attributedString()
    }

    final class Coordinator: NSObject, UITextViewDelegate {
        let attributedString: NSAttributedString

        init(
            attributedString: NSAttributedString
        ) {
            self.attributedString = attributedString
        }

        func textView(_ textView: UITextView, shouldInteractWith URL: URL, in characterRange: NSRange, interaction: UITextItemInteraction) -> Bool {
            return true
        }
    }

    func updateUIView(_ uiView: UITextView, context: Context) {}

    func makeUIView(context: Context) -> UITextView {
        let textView = TappableTextView()
        textView.textAlignment = .left
        textView.isEditable = false
        textView.showsVerticalScrollIndicator = false

        textView.attributedText = context.coordinator.attributedString
        textView.delegate = context.coordinator
        textView.backgroundColor = .clear
        textView.linkTextAttributes = [:]
        return textView
    }

    let attributedString: NSAttributedString

    func makeCoordinator() -> Coordinator {
        .init(attributedString: attributedString)
    }

    final class TappableTextView: UITextView {
        // hide copy, past ...
        override var canBecomeFirstResponder: Bool {
            false
        }
    }
}
