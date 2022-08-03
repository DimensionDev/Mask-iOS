import SwiftUI

struct NftRedpacketShareView: View {

    init(_ viewModel: NftRedpacketShareViewModel) {
        _viewModel = .init(wrappedValue: viewModel)
    }

    @StateObject
    private var viewModel: NftRedpacketShareViewModel

    var body: some View {
        VStack(spacing: 20) {
            AlertItem.Image.success.imageAsset.asImage()
                .frame(width: 60, height: 60)

            VStack(spacing: 13) {
                Text(L10n.Plugins.Luckydrop.ShareSheet.title)
                    .font(.bh4)
                    .foregroundColor(Asset.Colors.Text.dark)

                Text(L10n.Plugins.Luckydrop.ShareSheet.detail)
                    .font(.rh5)
                    .foregroundColor(Asset.Colors.Text.normal)
                    .lineSpacing(3)

                Button(L10n.Plugins.Luckydrop.ShareSheet.toTwitter) {
                    viewModel.actionSignal.send(.share)
                }
                .buttonStyle(.normalButton)
            }
        }
        .padding(.top, 24)
        .padding(.horizontal, 20)
        .padding(.bottom, 20)
    }
}
