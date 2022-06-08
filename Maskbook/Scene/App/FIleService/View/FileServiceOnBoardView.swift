import Foundation
import SwiftUI

struct FileServiceOnBoardView: View {
    private let uploadAction: () -> Void
    init(uploacAction: @escaping () -> Void = {}) {
        self.uploadAction = uploacAction
    }

    var body: some View {
        let config = LayouConfiguration(
            indicatorOffset: .init(x: 0, y: 45),
            indicatorColor: Asset.Colors.Public.blue
        )

        GeometryReader { proxy in
            WalkThroughBoard<FileServiceOnBoardItemView>(
                startItem: .one,
                configuration: .constant(config)
            )
            .overlay(
                Image(Asset.Plugins.FileService.uploadBackground)
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(width: proxy.size.width, height: 100 + proxy.safeAreaInsets.bottom)
                    .overlay(policyView.offset(y: -proxy.safeAreaInsets.bottom / 2), alignment: .center)
                    .offset(y: proxy.safeAreaInsets.bottom)
                    .onTapGesture { uploadAction() }
                ,
                alignment: .bottom
            )
        }
    }

    private var policyText: some View {
        Text {
            Text("\(L10n.Plugins.Policy.reviewed) ")
                .font(.mh7)
                .foregroundColor(
                    Asset.Colors.Text.dark.asColor().opacity(0.5)
                )
            
            Text("\(L10n.Plugins.Policy.privacy) ")
                .font(.bh7)
                .foregroundColor(
                    Asset.Colors.Text.dark.asColor()
                )

            Text("\(L10n.Plugins.Policy.and) ")
                .font(.mh7)
                .foregroundColor(
                    Asset.Colors.Text.dark.asColor().opacity(0.5)
                )

            Text("\(L10n.Plugins.Policy.uploadTerms)")
                .font(.bh7)
                .foregroundColor(
                    Asset.Colors.Text.dark.asColor()
                )
        }
        .lineSpacing(3)
        .colorScheme(.dark)
    }

    private var policyView: some View {
        HStack {
            policyText
            Spacer()
            Image(Asset.Icon.Arrows.backArrowSmall)
                .rotationEffect(.init(degrees: 180))
        }
        .padding(.horizontal, 20)
    }
}

struct FileServiceOnBoardView_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        FileServiceOnBoardView()
    }
}
