//
//  LuckyDropView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import ResponderChain
import SwiftUI

struct LuckyDropView: View {
    // MARK: Internal

    @State
    private var isNFTEditing = false

    @EnvironmentObject var chain: ResponderChain
    @ObservedObject var viewModel: LuckyDropViewModel
    @State var currentHeight: CGFloat = 0
    @State var safeArea: EdgeInsets = .init()

    var body: some View {
        GeometryReader { geometry in
            VStack(spacing: 0) {
                Spacer()
                    .frame(height: 24)

                SegmentControl(selection: $viewModel.selection)
                    .frame(height: 48)
                    .padding(.horizontal, 20)

                switch viewModel.selection {
                case .token: tokenContentView
                case .nft: nftContentView
                }

                WalletBottomWidgetView(viewModel: viewModel.walletBottomViewModel)
                    .padding(.bottom, safeArea.bottom)
                    .background(Asset.Colors.Background.blur.asColor())
            }
            .ignoresSafeArea(.all, edges: .bottom)
            .background(Asset.Colors.Background.normal.asColor())
            .onAppear {
                safeArea = geometry.safeAreaInsets
            }
            .onTapGesture {
                chain.firstResponder = nil
            }
        }
        .ignoresSafeArea(.keyboard, edges: .bottom)
    }

    @ViewBuilder
    var tokensRow: some View {
        LuckyDropTokens(viewModel: viewModel)
    }

    // MARK: Private

    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    private let idOfBottomViewToScroll = "idOfBottomViewToScroll"

    private var tokenContentView: some View {
        ScrollViewReader { scrollView in
            ScrollView {
                LazyVStack(spacing: 0) {
                    tokensRow

                    confirmButton
                        .id(idOfBottomViewToScroll)
                }
                .padding(.horizontal, LayoutConstraints.horizontal)
            }
            .padding(.bottom, self.currentHeight)
            .onAppear(perform: {
                NotificationCenter.Publisher(
                    center: NotificationCenter.default, name: UIResponder.keyboardWillShowNotification
                )
                .merge(with: NotificationCenter.Publisher(
                    center: NotificationCenter.default, name: UIResponder.keyboardWillChangeFrameNotification
                )
                )
                .compactMap { notification in
                    withAnimation(.easeOut(duration: 0.16)) {
                        notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect
                    }
                }
                .map { rect in
                    // To make sure that the animation play normally.
                    DispatchQueue.main.async {
                        if chain.firstResponder == LuckyDropTokens.TextFieldTag.message {
                            withAnimation(.easeOut(duration: 0.16)) {
                                scrollView.scrollTo(idOfBottomViewToScroll)
                            }
                        }
                    }

                    return rect.height
                    - safeArea.bottom
                    - 60.5 // wallet bottom view
                    + 20 // padding from bottom of confirm button to top of the keyboar
                }
                .subscribe(Subscribers.Assign(object: self, keyPath: \.currentHeight))

                NotificationCenter.Publisher(center: NotificationCenter.default, name: UIResponder.keyboardWillHideNotification)
                    .compactMap { _ in
                        CGFloat.zero
                    }
                    .subscribe(Subscribers.Assign(object: self, keyPath: \.currentHeight))
            })
        }
    }

    private var confirmButton: some View {
        PrimaryButton(
            title: viewModel.confirmTitle,
            animating: viewModel.buttonAnimating,
            isEnable: viewModel.confirmEnable
        ) {
            chain.firstResponder = nil
            switch viewModel.buttonType {
            case .unlock:
                Coordinator.main.present(
                    scene: .walletUnlock(cancellable: true) { error in
                        guard error == nil else { return }
                        viewModel.checkParam()
                    },
                    transition: .modal(animated: true, adaptiveDelegate: nil)
                )

            case .riskWarning:
                let pluginID = PluginStorageRepository.PluginID.redPackage.rawValue
                mainCoordinator.present(scene: .pluginRiskWarning(pluginID: pluginID), transition: .popup)

            case .unlockToken: viewModel.approveToken()
            case .send: viewModel.send()
            default: break
            }
        }
    }
}

extension LuckyDropView {
    private var nftContentView: some View {
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
                        KeyBoardObservingModifier($isNFTEditing)
                    )

                collectibleGroupView

                if showCollectible {
                    colloctiableListView
                }

                Spacer()
            }
        }
        .onTapGesture {
            guard isNFTEditing else {
                return
            }
            forceResignKeyboard()
        }
        .padding(.horizontal, 20)
        .overlay(
            nftConfirmActionView
                .offset(y: -18),
            alignment: .bottom
        )
    }

    private var nftEnabled: Bool { true }
    private var nftSelected: Bool { true }
    private var showCollectible: Bool { false }

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
                            Circle()
                                .frame(width: 24, height: 24)
                                .clipShape(Circle())

                            // TODO: collectible group name
                            Text("Doodle Gutter Cat ")
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
            action: {},
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
            if showCollectible {
                HStack(spacing: 8) {
                    Text(L10n.Plugins.Luckydrop.transactionFee)
                        .font(.mh5)
                        .foregroundColor(Asset.Colors.Text.normal)

                    Spacer()

                    // TODO: gas fee and transaction time
                    Text("$18.8 (~32s)")
                        .font(.bh6)
                        .foregroundColor(Asset.Colors.Text.dark)

                    Image(Asset.Plugins.LuckyDrop.setting)
                }
                .frame(height: 24)
            }

            Button(
                action: {},
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
                    )
                ],
                alignment: .leading,
                spacing: 12
            ) {
                ForEach(0 ..< 5) { _ in
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
                            minHeight: 96
                        )
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

struct LuckyDropView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropView(
            viewModel: LuckyDropViewModel(source: .lab)
        )
        .environmentObject(ResponderChain(forWindow: .init()))
    }
}
