import SwiftUI

struct PluginConfigListView: View {
    @State
    private var contentSize = CGSize.zero

    @ObservedObject
    var viewModel: LabsConfigViewModel

    @Environment(\.colorScheme)
    private var colorTheme

    var body: some View {
        GeometryReader { proxy in
            ScrollView(.vertical) {
                Spacer()
                    .frame(height: 24)

                LazyVStack(spacing: 12) {
                    ForEach(columnItems) { item in
                        PluginBlockView(viewModel: viewModel[item])
                            .padding(.horizontal, LayoutConstraints.horizontal)
                    }
                }

                Spacer()
                    .frame(height: 24)
            }
            .background(Color(Asset.Colors.Background.normal))
            .overlay(
                Group {
                    if viewModel.beAwareOfPluginTip {
                        Color.clear
                    } else {
                        VStack {
                            Spacer()

                            LinearGradient(
                                colors: backgroundColors,
                                startPoint: .init(x: 0.5, y: 0),
                                endPoint: .init(x: 0.5, y: 1)
                            )
                            .frame(
                                width: proxy.size.width,
                                height: contentSize.height + 24 * 2 + proxy.safeAreaInsets.bottom
                            )
                            .overlay(
                                pluginTipsView
                                    .frame(width: proxy.size.width - 45)
                                    .measureSize(to: $contentSize)
                                    .position(x: proxy.size.width / 2, y: contentSize.height / 2 + 24)
                            )
                        }
                    }
                }
                .ignoresSafeArea(edges: .bottom)
            )
        }
    }

    private var shadowColor: Color {
        Asset.Colors.Public.gradientBlue.asColor().opacity(0.07)
    }

    private var backgroundColors: [Color] {
        switch colorTheme {
        case .dark:
            return [
                Asset.Colors.Background.normal.asColor().opacity(0),
                Asset.Colors.Background.gradient.asColor()
            ]

        default:
            return [
                Asset.Colors.Background.gradient.asColor().opacity(0),
                Asset.Colors.Background.gradient.asColor()
            ]
        }
    }

    private var pluginTipsView: some View {
        HStack(alignment: .center, spacing: 10) {
            Text(L10n.Scene.App.pluginTip)
                .foregroundColor(Color.white)
                .font(FontStyles.rh6.font)
                .lineSpacing(3)
                .horizontallyFilled()
                .layoutPriority(1)

            Image(Asset.Images.Scene.Social.connectHintBannerClose.name)
                .renderingMode(.template)
                .foregroundColor(Color.white)
                .frame(width: 24, height: 24)
                .onTapGesture { viewModel.pluginTipBeViewed() }
        }
        .padding(.vertical, 10)
        .padding(.horizontal, 16)
        .withBlueGradient(radius: 12)
        .shadow(
            color: shadowColor,
            radius: 14,
            x: 0,
            y: 4
        )
    }

    private var columnItems: [PluginType] {
        [
            .fileService,
            .ito,
            .luckyDrop,
            .transaction,
            .snapshot,
            .dhedge,
            .gitcoin,
            .marketTrend,
            .collectibles,
            .valuables
        ]
    }

    private var secondeColumnItems: [PluginType] {
        [.ito, .swap, .snapshot, .dhedge, .collectibles]
    }
}

struct PluginConfigListView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            PluginConfigListView(viewModel: LabsConfigViewModel())
            PluginConfigListView(viewModel: LabsConfigViewModel())
                .preferredColorScheme(.dark)
        }
    }
}
