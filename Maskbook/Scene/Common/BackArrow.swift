import SwiftUI

struct NavigationItemView: View {
    let whenTapped: () -> Void

    private let iconName: String

    init(iconName: String, whenTapped: @escaping () -> Void = {}) {
        self.whenTapped = whenTapped
        self.iconName = iconName
    }

    init(imageAsset: ImageAsset, whenTapped: @escaping () -> Void = {}) {
        self.init(iconName: imageAsset.name, whenTapped: whenTapped)
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
            .onTapGesture { whenTapped() }
    }
}

struct BackArrowViewPreview: PreviewProvider {
    static var previews: some View {
        Group {
            NavigationItemView(imageAsset: Asset.Icon.Arrows.backArrow)
                .frame(width: 36, height: 36)
                .colorScheme(.dark)

            NavigationItemView(imageAsset: Asset.Icon.Arrows.backArrow)
                .frame(width: 36, height: 36)
        }
        .background(Color.gray)
        .previewLayout(.fixed(width: 36, height: 36))
    }
}

struct CloseItemPreview: PreviewProvider {
    static var previews: some View {
        Group {
            NavigationItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.close)
                .frame(width: 36, height: 36)
                .colorScheme(.dark)

            NavigationItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.close)
                .frame(width: 36, height: 36)
        }
        .background(Color.gray)
        .previewLayout(.fixed(width: 36, height: 36))
    }
}

struct HistoryItemPreview: PreviewProvider {
    static var previews: some View {
        Group {
            NavigationItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.history)
                .frame(width: 36, height: 36)
                .colorScheme(.dark)

            NavigationItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.history)
                .frame(width: 36, height: 36)
        }
        .background(Color.gray)
        .previewLayout(.fixed(width: 36, height: 36))
    }
}
