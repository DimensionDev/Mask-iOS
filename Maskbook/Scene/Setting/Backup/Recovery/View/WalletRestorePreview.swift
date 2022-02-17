import SwiftUI

struct WalletRestoreInfoView: View {
    @ObservedObject
    private var viewModel: WalletRestoreInfoViewModel

    init(viewModel: WalletRestoreInfoViewModel) {
        self.viewModel = viewModel
    }

    var body: some View {
        VStack(spacing: 20) {
            Text(L10n.Scene.Restore.Titles.nativeWallets)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())

            ScrollView {
                ForEach(viewModel.items, id: \.address) { item in
                    VStack(spacing: 8) {
                        Text(item.walletName)
                            .font(FontStyles.bh7.font)
                            .foregroundColor(Asset.Colors.Text.normal.asColor())
                            .horizontallyFilled()

                        Text(item.address)
                            .font(FontStyles.bh7.font)
                            .foregroundColor(Asset.Colors.Public.blue.asColor())
                            .horizontallyFilled()

                        Spacer()
                            .frame(height: 12)
                    }
                }
            }
            .frame(maxHeight: min(400, viewModel.itemCount * 50 + max(viewModel.itemCount - 1, 0) * 20))

            Button(
                action: { viewModel.actionSignal.send(.dismiss) },
                label: {
                    HStack {
                        Spacer()
                        Text(L10n.Scene.Restore.Buttontitles.next)
                            .font(FontStyles.bh5.font)
                            .foregroundColor(Asset.Colors.Public.white.asColor())
                        Spacer()
                    }
                }
            )
            .frame(height: 54)
            .background(Asset.Colors.Public.blue.asColor())
            .cornerRadius(8)
        }
        .sheetStyleWithPaddingAndBackground()
    }
}

struct WalletRestoreInfoView_Previews: PreviewProvider {
    static var previews: some View {
        WalletRestoreInfoView(
            viewModel: WalletRestoreInfoViewModel(items: [
                .init(name: "wad", address: "0x0d09dC9a840B1b4ea25194998fD90bB50fC2008A", exist: false),
                .init(name: "dad1", address: "0x0d09dC9a840B1b4ea25194998fD90bB50fC2008A", exist: false),
                .init(name: "wad222", address: "0x0d09dC9a840B1b4ea25194998fD90bB50fC2008A", exist: true)
            ])
        )
    }
}
