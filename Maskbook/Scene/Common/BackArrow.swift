import SwiftUI

struct NavigationBarItemView: View {
    let tapped: () -> Void

    private let iconName: String

    init(iconName: String, when tapped: @escaping () -> Void = {}) {
        self.tapped = tapped
        self.iconName = iconName
    }

    init(imageAsset: ImageAsset, when tapped: @escaping () -> Void = {}) {
        self.init(iconName: imageAsset.name, when: tapped)
    }

    var body: some View {
        Asset.Colors.Background.dark.asColor()
            .frame(width: 36, height: 36)
            .cornerRadius(8)
            .overlay(
                Image(iconName)
                    .renderingMode(.template)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
            )
            .onTapGesture { tapped() }
    }
}

struct BackArrowViewPreview: PreviewProvider {
    static var previews: some View {
        Group {
            NavigationBarItemView(imageAsset: Asset.Icon.Arrows.backArrow)
                .frame(width: 36, height: 36)
                .colorScheme(.dark)

            NavigationBarItemView(imageAsset: Asset.Icon.Arrows.backArrow)
                .frame(width: 36, height: 36)
        }
        .background(Color.gray)
        .previewLayout(.fixed(width: 36, height: 36))
    }
}

struct CloseItemPreview: PreviewProvider {
    static var previews: some View {
        Group {
            NavigationBarItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.close)
                .frame(width: 36, height: 36)
                .colorScheme(.dark)

            NavigationBarItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.close)
                .frame(width: 36, height: 36)
        }
        .background(Color.gray)
        .previewLayout(.fixed(width: 36, height: 36))
    }
}

struct HistoryItemPreview: PreviewProvider {
    static var previews: some View {
        Group {
            NavigationBarItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.history)
                .frame(width: 36, height: 36)
                .colorScheme(.dark)

            NavigationBarItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.history)
                .frame(width: 36, height: 36)
        }
        .background(Color.gray)
        .previewLayout(.fixed(width: 36, height: 36))
    }
}
