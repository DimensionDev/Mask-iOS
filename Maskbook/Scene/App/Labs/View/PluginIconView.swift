import SwiftUI

struct PluginIconView: View {
    let plugin: PluginType
    let enabled: Bool

    @State private var totalSize: CGSize = .zero

    @Environment(\.colorScheme)
    private var colorScheme

    var body: some View {
        switch plugin {
        case .valuables:
            Image(plugin.icon)
                .renderingMode(.template)
                .foregroundColor(forgroundColor)
                .opacity(enabled ? 1 : 0.5)

        default:
            Image(plugin.icon)
                .renderingMode(.original)
                .opacity(enabled ? 1 : 0.5)
        }
    }

    private var forgroundColor: Color {
        switch colorScheme {
        case .dark: return .white
        default: return .black
        }
    }
}

struct PluginIconView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            ForEach(PluginType.allCases) { plugin in
                HStack {
                    PluginIconView(plugin: plugin, enabled: false)
                    PluginIconView(plugin: plugin, enabled: true)
                }
                .previewLayout(.fixed(width: 96, height: 48))
            }
        }
    }
}
