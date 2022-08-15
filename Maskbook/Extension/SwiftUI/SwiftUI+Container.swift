import SwiftUI

private struct ContainerSizeFixedModifier<S: Shape>: ViewModifier {
    let shape: S

    func body(content: Content) -> some View {
        Color.clear
            .background(
                content
            )
            .aspectRatio(contentMode: .fill)
            .clipShape(shape)
    }
}

private struct SizeDebugModeifier: ViewModifier {

    @State
    private var size: CGSize = . zero

    func body(content: Content) -> some View {
        content
            .background(
                GeometryReader { proxy in
                    sizeView(for: proxy.size)
                }
            )
            .overlay(
                Text(
                    "width: \(size.width)\nheight: \(size.height)"
                )
            )
    }

    private func sizeView(for size: CGSize) -> some View {
        DispatchQueue.main.async {
            if self.size != size {
                self.size = size
            }
        }

        return Color.clear
    }
}

extension View {
    func sizeFitContainer<S: Shape>(shape: S) -> some View {
        modifier(ContainerSizeFixedModifier(shape: shape))
    }

    func displaySize() -> some View {
        modifier(SizeDebugModeifier())
    }
}
