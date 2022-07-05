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
        Task(priority: .high) { @MainActor in
            uiView.attributedText <| context.coordinator.attributedString
            self.preferredContentSize(uiView.contentSize)
        }
    }

    func makeUIView(context: Context) -> UITextView {
        let textView = TappableTextView()
        textView.textAlignment = .left
        textView.isEditable = false
        textView.showsVerticalScrollIndicator = false

        textView.attributedText = context.coordinator.attributedString
        textView.delegate = context.coordinator
        textView.backgroundColor = .clear
        // hide default blue link color
        textView.linkTextAttributes = [:]

        textView.setContentCompressionResistancePriority(.defaultLow, for: .vertical)
        textView.setContentHuggingPriority(.defaultLow, for: .vertical)

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
