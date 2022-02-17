import SwiftUI

extension NavigationLink where Label == EmptyView {
    init?<Value>(
        _ binding: Binding<Value?>,
        @ViewBuilder destination: (Value) -> Destination
    ) {
        guard let value = binding.wrappedValue else {
            return nil
        }

        let isActive = Binding(
            get: { true },
            set: { if !$0 { binding.wrappedValue = nil } }
        )

        self.init(
            destination: destination(value),
            isActive: isActive,
            label: EmptyView.init
        )
    }
}

extension View {
    @ViewBuilder
    func navigate<Value, Destination: View>(
        using binding: Binding<Value?>,
        @ViewBuilder destination: (Value) -> Destination
    ) -> some View {
        background(NavigationLink(binding, destination: destination))
    }
}

struct PluginBlockView: View {
    @ObservedObject
    private var pluginViewModel: PluginViewModel

    private var plugin: PluginType {
        pluginViewModel.plugin
    }

    private var enabled: Bool {
        pluginViewModel.enabled
    }

    init(viewModel: PluginViewModel) {
        self.pluginViewModel = viewModel
    }

    var body: some View {
        HStack(spacing: 12) {
            PluginIconView(plugin: plugin, enabled: enabled)

            Text(plugin.name)
                .font(FontStyles.bh5.font)
                .foregroundColor(
                    enabled
                    ? Color(Asset.Colors.Text.dark)
                    : Color(Asset.Colors.Text.normal)
                )
                .horizontallyFilled()

            SwitchButton(enabled: $pluginViewModel.enabled)
        }
        .padding(.vertical, 16)
        .padding(.horizontal, 12)
        .background(
            enabled
                ? Color(Asset.Colors.Background.dark)
                : Color(Asset.Colors.Background.selected)
        )
        .cornerRadius(8)
        .animation(.spring())
    }
}

struct PluginBlockView_Previews: PreviewProvider {
    static var previews: some View {
        VStack {
            VStack {
                PluginBlockView(viewModel: PluginViewModel(plugin: .transaction, enabled: false))
                PluginBlockView(viewModel: PluginViewModel(plugin: .marketTrend, enabled: true))
            }
            VStack {
                PluginBlockView(viewModel: PluginViewModel(plugin: .marketTrend, enabled: false))
                PluginBlockView(viewModel: PluginViewModel(plugin: .transaction, enabled: true))
            }
            .colorScheme(.dark)
        }
    }
}
