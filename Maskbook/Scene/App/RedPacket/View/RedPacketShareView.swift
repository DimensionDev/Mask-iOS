import SwiftUI

typealias RedPacketStatus = RedPacketShareViewModel.RedPacketStatus

struct RedPacketShareView: View {
    @ObservedObject
    private var viewModel: RedPacketShareViewModel

    init(viewModel: RedPacketShareViewModel) {
        self.viewModel = viewModel
    }

    @State
    private var shareButtonSize: CGSize = .zero

    var body: some View {
        VStack(alignment: .center, spacing: 22.6) {
            Image(redPacketStatus.imageName)
                .renderingMode(.original)
                .aspectRatio(contentMode: .fit)
                .measureSize(to: $shareButtonSize)
                .overlay(
                    VStack {
                        Spacer()

                        textContent
                            .padding(.leading, 80)
                            .padding(.trailing, 70)

                        if redPacketStatus == .sharable {
                            shareButton
                                .frame(width: max(184, shareButtonSize.width - 69 * 2))
                        }
                    }
                    .offset(y: -offSet)
                )

                Button(
                    action: { viewModel.actionSignal.send(.close) },
                    label: {
                        Image(Asset.Images.Scene.RedPackage.closeSquare.name)
                            .renderingMode(.original)
                    }
                )
        }
    }

    private var offSet: CGFloat {
        switch redPacketStatus {
        case .sharable: return 24
        case .maybeNextTime: return 65
        }
    }

    private var redPacketStatus: RedPacketStatus { viewModel.redPacketStatus }

    @ViewBuilder
    private var textContent: some View {
        VStack(spacing: 10) {
            switch redPacketStatus {
            case .sharable:
                Text(viewModel.claimAmount)
                    .redPacketClaimTextStyle()
                    .lineLimit(1)

                Text(L10n.Scene.App.redPacketClaimed(viewModel.symbol))
                    .redPacketClaimTextStyle()

            case .maybeNextTime:
                Text(L10n.Scene.App.goodLuckNextTime)
                    .redPacketClaimTextStyle()
                    .lineLimit(2)
                    .multilineTextAlignment(.center)
            }
        }
    }

    @ViewBuilder
    private var shareButton: some View {
        ZStack {
            Asset.Colors.RedPackage.shareBackground.asColor()
                .frame(height: 43)
                .cornerRadius(21.5)

            LinearGradient(
                stops: [
                    .init(color: Asset.Colors.RedPackage.shareGradientLeading.asColor(), location: -0.46),
                    .init(color: Asset.Colors.RedPackage.shareGradientTrailing.asColor(), location: 0.977_5)
                ],
                startPoint: .leading,
                endPoint: .trailing
            )
            .frame(height: 43)
            .cornerRadius(21.5)
            .offset(y: -4.78)

            Text(viewModel.actionTitle)
                .font(FontStyles.bh3.font.bold())
                .foregroundColor(Asset.Colors.RedPackage.shareButtonTitle.asColor())
        }
        .onTapGesture { viewModel.share() }
    }
}

private extension RedPacketShareViewModel {
    var actionTitle: String {
        switch redPacketStatus {
        case .sharable: return L10n.Scene.App.Title.redPacketShare
        case .maybeNextTime: return L10n.Common.Controls.ok
        }
    }
}

private extension Text {
    func redPacketClaimTextStyle() -> Text {
        self.font(.system(size: 24))
            .fontWeight(.bold)
            .foregroundColor(Color.white)
    }
}

struct RedPacketShareViewPreviews: PreviewProvider {
    static var previews: some View {
        RedPacketShareView(
            viewModel: .init(
                claimAmount: .init("200000000"),
                payload: nil
            )
        )
        .preferredColorScheme(.dark)
    }
}
