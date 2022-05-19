import SwiftUI

extension Text {
    func subtitleStyle() -> Text {
        self.font(FontStyles.bh5.font)
            .foregroundColor(Asset.Colors.Text.normal.asColor())
    }

    init(@TextCombine builder: () -> [Text]) {
        self = builder().reduce(into: Text(""), { $0 = $0 + $1 })
    }

    func font(_ fontStyle: FontStyles) -> Text {
        self.font(fontStyle.font)
    }

    func foregroundColor(_ colorAsset: ColorAsset) -> Text {
        self.foregroundColor(colorAsset.asColor())
    }
}

extension View {
    func horizontallyFilled() -> some View {
        HStack(spacing: 0) {
            self
            Spacer()
        }
    }

    func horizontallyCenterred() -> some View {
        HStack(spacing: 0) {
            Spacer()
            self
            Spacer()
        }
    }
}

@resultBuilder
enum TextCombine {
    static func buildBlock(_ components: Text...) -> [Text] {
        return components
    }
}

extension View {
    func applying<V: View>(@ViewBuilder _ builder: (Self) -> V) -> some View {
        builder(self)
    }
}
