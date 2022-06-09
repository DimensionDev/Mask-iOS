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
     func horizontallyFilled(alignment: HorizontalAlignment = .leading) -> some View {
         HStack(spacing: 0) {
             switch alignment {
             case .trailing:
                 Spacer()
                 self

             case .center:
                 Spacer()
                 self
                 Spacer()

             default:
                 self
                 Spacer()
             }
         }
     }

    func horizontallyCenterred() -> some View {
        horizontallyFilled(alignment: .center)
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
