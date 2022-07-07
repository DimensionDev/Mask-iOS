import SwiftUI

struct BlurView: UIViewRepresentable {
    // MARK: Lifecycle

    init(style: UIBlurEffect.Style) {
        self.style = style
    }

    // MARK: Internal

    let style: UIBlurEffect.Style

    func makeUIView(context: Context) -> UIVisualEffectView {
        UIVisualEffectView(effect: UIBlurEffect(style: context.coordinator.style))
    }

    func updateUIView(_: UIVisualEffectView, context _: Context) {}

    func makeCoordinator() -> Coordinator {
        Coordinator(style: style)
    }
}

extension BlurView {
    // MARK: Internal

    final class Coordinator {
        // MARK: Lifecycle

        init(style: UIBlurEffect.Style) {
            self.style = style
        }

        // MARK: Internal

        let style: UIBlurEffect.Style
    }
}
