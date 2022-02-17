import SwiftUI

struct MoveFromBottomModifier: ViewModifier {
    @Binding var showing: Bool
    func body(content: Content) -> some View {
        Group {
            if showing {
                content
                    .transition(
                        .asymmetric(
                            insertion: .move(edge: .bottom),
                            removal: .move(edge: .bottom)
                        )
                    )
            }
        }
        .onAppear(perform: {
            withAnimation {
                showing = true
            }
        })
    }
}

extension View {
    func appearFromBottom(appear: Binding<Bool> = .constant(false)) -> some View {
        modifier(MoveFromBottomModifier(showing: appear))
    }
}
