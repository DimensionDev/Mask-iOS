import SwiftUI

struct NormalButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some SwiftUI.View {
        Asset.Colors.Background.blue.asColor()
            .overlay(
                configuration.label
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.lighter.asColor())
            )
            .opacity(configuration.isPressed ? 0.5 : 1)
            .cornerRadius(8)
            .frame(height: 54)
    }
}

extension ButtonStyle where Self == NormalButtonStyle {
    static var normalButton: NormalButtonStyle { .init() }
}
