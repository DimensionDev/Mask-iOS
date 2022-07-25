import Foundation
import SwiftUI

struct TappableText: UIViewRepresentable {
    let preferredContentSize: (CGSize) -> Void

    init(
        preferredContentSize: @escaping (CGSize) -> Void,
        attributedString: @escaping () -> NSAttributedString
    ) {
        self.attributedString = attributedString()
        self.preferredContentSize = preferredContentSize
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

    func updateUIView(_ uiView: UITextView, context: Context) {
        // trying to fix an issue on iOS Mini 14.2
        // that will not dispaly attributedString properly
        DispatchQueue.main.async {
            uiView.attributedText = context.coordinator.attributedString
            self.preferredContentSize(uiView.contentSize)
        }
    }

    func makeUIView(context: Context) -> UITextView {
        let textView = TappableTextView()
        textView.textAlignment = .left
        textView.isEditable = false
        textView.showsVerticalScrollIndicator = false
        textView.backgroundColor = .clear

        // hide default blue link color
        textView.linkTextAttributes = [:]

        textView.setContentCompressionResistancePriority(.defaultLow, for: .vertical)
        textView.setContentHuggingPriority(.defaultLow, for: .vertical)

        textView.delegate = context.coordinator

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
