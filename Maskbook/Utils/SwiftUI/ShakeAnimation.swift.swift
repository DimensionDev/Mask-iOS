import SwiftUI

struct Shake: GeometryEffect {
    var amount: CGFloat = 10
    var shakesPerUnit = 3
    var animatableData: CGFloat

    func effectValue(size: CGSize) -> ProjectionTransform {
        ProjectionTransform(
            CGAffineTransform(
                translationX: animatableData == 0
                ? 0
                : amount * sin(animatableData * .pi * CGFloat(shakesPerUnit)),
                y: 0
            )
        )
    }
}

extension View {
    func shake(
        attemts: CGFloat,
        amount: CGFloat = 10,
        shakesPerUnit: Int = 3
    ) -> some View {
        modifier(Shake(amount: amount, shakesPerUnit: shakesPerUnit, animatableData: attemts))
    }
}
