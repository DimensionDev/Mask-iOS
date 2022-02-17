import SwiftUI

final class AttributedText: UIViewRepresentable {
    // MARK: Lifecycle
    init(_ attributedString: NSAttributedString) {
        self.attributedString = attributedString
    }

    func makeUIView(context _: UIViewRepresentableContext<AttributedText>) -> UITextView {
        let textView = UITextView(frame: .zero)
        textView.attributedText = attributedString
        textView.isEditable = false
        textView.backgroundColor = .clear
        textView.textAlignment = .center

        textView.isScrollEnabled = false
        textView.textContainerInset = .zero
        textView.textContainer.lineFragmentPadding = 0

        textView.setContentCompressionResistancePriority(.defaultLow, for: .horizontal)
        return textView
    }

    func updateUIView(_ textView: UITextView, context _: UIViewRepresentableContext<AttributedText>) {
        textView.attributedText = attributedString
    }

    // MARK: Internal
    var attributedString: NSAttributedString
}
