import Kingfisher
import SwiftUI

struct NFTDropView: View {
    // MARK: Lifecycle

    init(_ viewModel: LuckyDropViewModel) {
        _viewModel = .init(wrappedValue: viewModel)
    }

    // MARK: Internal

    var body: some View {
        ScrollView {
            Spacer()
                .frame(height: 20)

            VStack(spacing: 16) {
                TextField(L10n.Plugins.Luckydrop.nftMessagePlaceholder, text: $viewModel.message)
                    .font(FontStyles.mh5.font)
                    .frame(height: 52)
                    .padding(.horizontal, 12)
                    .background(Asset.Colors.Background.dark.asColor())
                    .cornerRadius(8)
                    .modifier(
                        KeyBoardObservingModifier(\.isNFTDropEditing, on: viewModel.nftViewModel)
                    )

                collectibleGroupView

                if showCollectible {
                    colloctiableListView
                }

                Spacer()
            }
            .padding(.horizontal, 20)
        }
        .onTapGesture {
            guard viewModel.nftViewModel.isNFTDropEditing else {
                return
            }
            forceResignKeyboard()
        }
        .overlay(
            nftConfirmActionView,
            alignment: .bottom
        )
    }

    // MARK: Private

    @StateObject
    private var viewModel: LuckyDropViewModel

    private let bottomOffsetY: CGFloat = 18

    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator

    private var nftEnabled: Bool { viewModel.nftViewModel.actionState.isActionEnabled }

    private var nftSelected: Bool { true }

    private var showCollectible: Bool {
        viewModel.nftViewModel.showCollectible
    }

    private var nftConfirmTitle: String {
        nftEnabled
            ? L10n.Scene.WalletUnlock.title
            : L10n.Plugins.Luckydrop.Buttons.selectNfts
    }

    private var nftConfirmButtonColor: Color {
        nftEnabled
            ? Asset.Colors.Background.blue.asColor()
            : Asset.Colors.Background.disable.asColor()
    }

    private var nftConfirmTitleColor: Color {
        nftEnabled
            ? Asset.Colors.Public.white.asColor()
            : Asset.Colors.Text.normal.asColor()
    }

    @ViewBuilder
    private var collectibleGroupView: some View {
        if showCollectible {
            collectibleGroupInfoView
        } else {
            collectibleSelectView
        }
    }

    private var collectibleGroupInfoView: some View {
        Button(
            action: { viewModel.nftViewModel.switchCollectibleGroup() },
            label: {
                Asset.Colors.Background.dark.asColor()
                    .cornerRadius(8)
                    .frame(height: 52)
                    .overlay(
                        HStack(spacing: 8) {
                            KFImage(viewModel.nftViewModel.groupIconURL)
                                .placeholder {
                                    Image(Asset.Icon.Logo.largeMask)
                                        .resizable()
                                        .frame(width: 24, height: 24)
                                        .overlay(
                                            Asset.Colors.Public.white.asColor()
                                                .opacity(0.5)
                                        )
                                        .clipShape(Circle())
                                }
                                .frame(width: 24, height: 24)
                                .clipShape(Circle())

                            Text(viewModel.nftViewModel.groupName ?? "")
                                .font(.bh5)
                                .foregroundColor(Asset.Colors.Text.dark)

                            Spacer()

                            Image(Asset.Icon.Arrows.down1)
                                .resizable()
                                .frame(width: 20, height: 20)
                        }
                        .padding(.horizontal, 16)
                    )
            }
        )
    }

    private var collectibleSelectView: some View {
        Button(
            action: { viewModel.nftViewModel.switchCollectibleGroup() },
            label: {
                Asset.Colors.Background.blue.asColor()
                    .frame(height: 56)
                    .cornerRadius(8)
                    .overlay(
                        HStack(spacing: 8) {
                            Text(L10n.Plugins.Luckydrop.Buttons.selectNftCollection)
                                .font(.rh5)
                                .foregroundColor(Asset.Colors.Text.lighter)

                            Spacer()

                            Image(Asset.Icon.Arrows.drop)
                                .renderingMode(.template)
                                .resizable()
                                .frame(width: 20, height: 20)
                                .foregroundColor(Asset.Colors.Text.lighter.asColor())
                        }
                        .padding(.all, 12)
                        .padding(.horizontal, 8)
                    )
                    .preferredColorScheme(.light)
            }
        )
    }

    private var nftConfirmActionView: some View {
        VStack(spacing: 20) {
            HStack(spacing: 8) {
                Text(L10n.Plugins.Luckydrop.transactionFee)
                    .font(.mh5)
                    .foregroundColor(Asset.Colors.Text.normal)

                Spacer()

                Text(viewModel.gasFeeInfo)
                    .font(.bh6)
                    .foregroundColor(Asset.Colors.Text.dark)

                Image(Asset.Plugins.LuckyDrop.setting)
                    .onTapGesture {
                        mainCoordinator.present(
                            scene: .gasFee(
                                delegate: nil,
                                gasLimit: viewModel.gasLimit,
                                viewModel: viewModel.gasFeeViewModel
                            ),
                            transition: .panModel()
                        )
                    }
            }
            .frame(height: 24)

            Button(
                action: {
                    viewModel.nftViewModel.confirmAction()
                },
                label: {
                    nftConfirmButtonColor
                        .frame(height: 54)
                        .cornerRadius(8)
                        .overlay(
                            Text(nftConfirmTitle)
                                .font(.bh5)
                                .foregroundColor(nftConfirmTitleColor),
                            alignment: .center
                        )
                        .frame(height: 54)
                }
            )
            .disabled(!nftEnabled)
        }
        .padding(.horizontal, 20)
        .padding(.top, 16)
        .padding(.bottom, bottomOffsetY)
        .background(Asset.Colors.Background.normal.asColor())
    }

    private var colloctiableListView: some View {
        VStack {
            Text("\(L10n.Plugins.Luckydrop.nftSelected) (\(viewModel.nftViewModel.collectibleCountInfo)）")
                .font(.bh5)
                .foregroundColor(Asset.Colors.Text.dark)
                .horizontallyFilled()

            LazyVGrid(
                columns: [
                    .init(
                        .adaptive(minimum: 80),
                        spacing: 11.5,
                        alignment: .leading
                    ),
                    .init(
                        .adaptive(minimum: 80),
                        spacing: 11.5,
                        alignment: .leading
                    ),
                    .init(
                        .adaptive(minimum: 80),
                        spacing: 11.5,
                        alignment: .leading
                    )
                ],
                alignment: .leading,
                spacing: 12
            ) {
                Section {
                    ForEach(viewModel.nftViewModel.items) { item in
                        collectibleView(of: item)
                            .frame(
                                minWidth: 80,
                                maxWidth: .infinity,
                                minHeight: 96,
                                maxHeight: .infinity
                            )

                    }
                }
            }
        }
        .padding(.top, 16)
        .padding(.horizontal, 12)
        .padding(.bottom, 12)
        .background(Asset.Colors.Background.dark.asColor())
        .cornerRadius(8)
    }

    @ViewBuilder
    private func collectibleView(of item: NftLuckyDropViewModel.CollectibleItem) -> some View {
        switch item {
        case .add:
            Asset.Colors.Background.normal.asColor()
                .overlay(
                    Image(Asset.Images.Scene.WalletAdd.add)
                        .renderingMode(.template)
                        .resizable()
                        .frame(width: 30, height: 30)
                        .foregroundColor(Asset.Colors.Text.normal.asColor())
                )
                .cornerRadius(8)
                .onTapGesture {
                    viewModel.nftViewModel.addMoreCollectibles()
                }

        case let .normal(value):
            NFTItemView(url: value.previewUrl)

        case let .all(value):
            NFTAllItemView(url: value.previewUrl)
        }
    }
}

struct NFTItemView: View {
    let url: URL?

    var body: some View {
        KFImage(url)
            .placeholder {
                Asset.Colors.Background.normal.asColor()
                    .overlay(
                        placeHolderIcon
                    )
            }
            .cornerRadius(8)
            .overlay(
                Asset.Icon.Cell.checkSquare
                    .asImage()
                    .preferredColorScheme(.light)
                    .offset(x: -8, y: 8)
                ,
                alignment: .topTrailing
            )
    }

    private var placeHolderIcon: some View {
        Image(Asset.Icon.Logo.largeMask)
            .resizable()
            .frame(width: 38, height: 38)
            .overlay(
                Asset.Colors.Background.normal.asColor()
                    .opacity(0.5)
            )
            .clipShape(Circle())
    }
}

struct AddNFTItemView: View {
    var body: some View {
        Asset.Colors.Background.normal.asColor()
            .overlay(
                Image(Asset.Images.Scene.WalletAdd.add)
                    .renderingMode(.template)
                    .resizable()
                    .frame(width: 30, height: 30)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())
            )
            .cornerRadius(8)
    }
}

struct NFTAllItemView: View {
    let url: URL?

    var body: some View {
        KFImage(url)
            .placeholder {
                Asset.Colors.Background.normal.asColor()
                    .overlay(
                        placeHolderIcon
                    )
            }
            .overlay(
                maskView
            )
            .cornerRadius(8)
    }

    private var placeHolderIcon: some View {
        Image(Asset.Icon.Logo.largeMask)
            .resizable()
            .frame(width: 38, height: 38)
            .overlay(
                Asset.Colors.Background.normal.asColor()
                    .opacity(0.5)
            )
            .clipShape(Circle())
    }

    private var maskView: some View {
        Asset.Colors.Background.mask.asColor()
            .overlay(
                Text("ALL")
                    .font(.bh6)
                    .foregroundColor(Asset.Colors.Public.white)
            )
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct NFTItemViewPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        VStack(spacing: 20) {
            AddNFTItemView()
                .frame(width: 96, height: 96)

            NFTItemView(url: nil)
                .frame(width: 96, height: 96)


            NFTAllItemView(url: nil)
                .frame(width: 96, height: 96)
        }
        .colorScheme(.dark)
    }
}
#endif
