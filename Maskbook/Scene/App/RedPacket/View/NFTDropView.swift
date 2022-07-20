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
                TextField(L10n.Plugins.Luckydrop.nftMessagePlaceholder, text: .constant(""))
                    .font(FontStyles.mh5.font)
                    .frame(height: 52)
                    .padding(.horizontal, 12)
                    .background(Asset.Colors.Background.dark.asColor())
                    .cornerRadius(8)
                    .modifier(
                        KeyBoardObservingModifier(\.isNFTDropEditing, on: viewModel)
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
            guard viewModel.isNFTDropEditing else {
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

    private var nftEnabled: Bool { true }
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
            action: {},
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
            action: {
                viewModel.nftViewModel.selectCollectible(
                    groupName: "Daqqqd",
                    groupIconURL: nil
                )
            },
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
            // TODO: selected/total number
            Text("\(L10n.Plugins.Luckydrop.nftSelected) (99/120）")
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
                    ForEach(0 ..< 6) { _ in
                        Asset.Colors.Background.normal.asColor()
                            .overlay(
                                Image(Asset.Images.Scene.WalletAdd.add)
                                    .renderingMode(.template)
                                    .resizable()
                                    .frame(width: 30, height: 30)
                                    .foregroundColor(Asset.Colors.Text.normal.asColor())
                            )
                            .cornerRadius(8)
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
}
