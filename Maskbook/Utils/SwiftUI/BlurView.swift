import SwiftUI

struct BlurView: UIViewRepresentable {
    let style: UIBlurEffect.Style

    init(style: UIBlurEffect.Style) {
        self.style = style
    }

    func makeUIView(context: Context) -> UIVisualEffectView {
        UIVisualEffectView(effect: UIBlurEffect(style: context.coordinator.style))
    }

    func updateUIView(_ uiView: UIVisualEffectView, context: Context) {}

    func makeCoordinator() -> Coordinator {
        Coordinator.init(style: style)
    }

    final class Coordinator {
        let style: UIBlurEffect.Style
        init(style: UIBlurEffect.Style) {
            self.style = style
        }
    }
}
