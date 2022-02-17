import SwiftUI

extension View {
    func whiteRadiusBackgroundView() -> some View {
        self.frame(height: 52)
            .padding(.horizontal, 12)
            .background(Asset.Colors.Background.dark.asColor())
            .cornerRadius(8)
    }

    func buttongStyle(_ isEnabled: Bool, radius: CGFloat = 8) -> some View {
        self.disabled(!isEnabled)
            .foregroundColor(
                isEnabled
                    ? Asset.Colors.Text.lighter.asColor()
                    : Asset.Colors.Text.normal.asColor()
            )
            .background(
                isEnabled
                    ? Asset.Colors.Public.blue.asColor()
                    : Asset.Colors.Background.disable.asColor()
            )
            .cornerRadius(radius)
    }

    func sheetStyleWithPaddingAndBackground() -> some View {
        self.padding(.horizontal, 22.5)
            .padding(.bottom, 24)
            .background(Asset.Colors.Background.normal.asColor())
    }

    func withRegionCodeWidth(_ width: CGFloat) -> some View {
        frame(width: min(120, max(40, width)))
    }
}

extension View {
    func blueGradient(
        radius: CGFloat,
        isSelected: Bool = false,
        colorDecorator: BlueGradientDecorator = .blueGradient
    ) -> some View {
        self
            .background(
                LinearGradient(
                    colors:
                    isSelected
                    ? colorDecorator.selectedColors
                    : colorDecorator.normalColors,
                    startPoint: .init(x: 0.5, y: 0),
                    endPoint: .init(x: 0.5, y: 1)
                )
            )
            .cornerRadius(radius)
    }

    func withBlueGradient(
        radius: CGFloat,
        colorDecorator: BlueGradientDecorator = .blueGradient
    ) -> some View {
        self
            .background(
                LinearGradient(
                    colors: colorDecorator.normalColors,
                    startPoint: .init(x: 0.5, y: 0),
                    endPoint: .init(x: 0.5, y: 1)
                )
            )
            .cornerRadius(radius)
    }
}

struct BlueGradientDecorator {
    let selectedColors: [Color]
    let normalColors: [Color]
}

extension BlueGradientDecorator {
    static var blueGradient: BlueGradientDecorator {
        .init(
            selectedColors: [],
            normalColors: [
                Asset.Colors.Public.blue.asColor(),
                Asset.Colors.Public.gradientBlue.asColor()
            ]
        )
    }
}
