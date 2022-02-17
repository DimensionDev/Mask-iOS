import SwiftUI

struct LabsListView: View {
    @ObservedObject
    var viewModel: LabsPluginViewModel

    var body: some View {
        ScrollView {
            Spacer()
                .frame(height: 24)
            
            LazyVStack(spacing: 16) {
                ForEach(plugins) { plugin in
                    ItemView(
                        plugin: plugin,
                        enabled: plugin == .transaction,
                        whenTapped: { plugin in
                            viewModel.pluginSignal.send(plugin)
                        }
                    )
                    .padding(.horizontal, 22.5)
                }
            }
        }
        .background(Asset.Colors.Background.normal.asColor())
    }

    private var plugins: [PluginType] {
        [
            .transaction,
            .ito,
            .luckyDrop,
            .swap,
            .fileService
        ]
    }
}

struct LabsListView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            LabsListView(viewModel: LabsPluginViewModel())
            LabsListView(viewModel: LabsPluginViewModel())
                .colorScheme(.dark)
        }
    }
}

extension LabsListView {
    struct ItemView: View {
        let plugin: PluginType
        let enabled: Bool

        @Environment(\.colorScheme)
        var colorScheme

        let whenTapped: (PluginType) -> Void

        var body: some View {
            HStack(alignment: .center, spacing: 12) {
                PluginIconView(plugin: plugin, enabled: enabled)
                    .frame(width: 40, height: 40)

                VStack(spacing: 4) {
                    Text(plugin.name)
                        .font(FontStyles.bh5.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                        .horizontallyFilled()
                        .opacity(enabled ? 1 : 0.5)

                    Text(plugin.introduction)
                        .font(FontStyles.rh7.font)
                        .foregroundColor(Asset.Colors.Text.normal.asColor())
                        .lineSpacing(2)
                        .lineLimit(2)
                        .multilineTextAlignment(.leading)
                        .horizontallyFilled()
                }

                Image(Asset.Plugins.pluginArrow.name)
                    .renderingMode(.template)
                    .foregroundColor(arrowColor)
            }
            .padding(.vertical, 8)
            .padding(.horizontal, 12)
            .frame(minHeight: 86)
            .background(Asset.Colors.Background.dark.asColor())
            .opacity(enabled ? 1 : 0.4)
            .cornerRadius(12)
            .onTapGesture {
                whenTapped(self.plugin)
            }
        }

        private var arrowColor: Color {
            switch self.colorScheme {
            case .light: return Asset.Colors.Text.normal.asColor()
            default: return Asset.Colors.Text.normal.asColor().opacity(0.4)
            }
        }
    }
}
