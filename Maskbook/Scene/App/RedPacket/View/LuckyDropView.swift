//
//  LuckyDropView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import SwiftUI

struct LuckyDropView: View {
    // MARK: Internal

    @ObservedObject var viewModel: LuckyDropViewModel

    var body: some View {
        GeometryReader { geometry in
            VStack(spacing: 0) {
                Spacer()
                     .frame(height: 24)

                 SegmentControl(selection: $viewModel.selection)
                     .frame(height: 48)
                     .padding(.horizontal, 20)

                switch viewModel.selection {
                case .token: contentView(geometry)
                case .nft: NFTDropView(viewModel)
                }

                WalletBottomWidgetView(viewModel: viewModel.walletBottomViewModel)
                    .padding(.bottom, geometry.safeAreaInsets.bottom)
                    .background(Asset.Colors.Background.blur.asColor())
            }
            .ignoresSafeArea(.all, edges: .bottom)
            .background(Asset.Colors.Background.normal.asColor())
            .onTapGesture {
                endEditing()
            }
        }
        .ignoresSafeArea(.keyboard, edges: .bottom)
    }

    // MARK: Private

    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    private let tokenConfirmButtonID = "idOfBottomViewToScroll"

    private var tokensRow: some View {
        LuckyDropTokens(viewModel: viewModel)
    }

    private func contentView(_ proxy: GeometryProxy) -> some View {
        ScrollViewReader { scrollView in
            ScrollView {
                LazyVStack(spacing: 0) {
                    tokensRow

                    confirmButton
                        .id(tokenConfirmButtonID)
                }
                .padding(.horizontal, LayoutConstraints.horizontal)
            }
            .padding(.bottom, viewModel.keyboardHeight)
            .onAppear(perform: {
                NotificationCenter.Publisher(
                    center: NotificationCenter.default, name: UIResponder.keyboardWillShowNotification
                )
                .merge(
                    with: NotificationCenter.Publisher(
                        center: NotificationCenter.default, name: UIResponder.keyboardWillChangeFrameNotification
                    )
                )
                .compactMap { notification in
                    notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect
                }
                .map { rect in
                    rect.height
                    - proxy.safeAreaInsets.bottom
                    - 60.5 // wallet bottom view
                    + 20 // padding from bottom of confirm button to top of the keyboar
                }
                .assign(to: &viewModel.$keyboardHeight)

                NotificationCenter.Publisher(center: NotificationCenter.default, name: UIResponder.keyboardWillHideNotification)
                    .compactMap { _ in
                        CGFloat.zero
                    }
                    .assign(to: &viewModel.$keyboardHeight)
            })
            .onChange(of: viewModel.keyboardHeight) { newValue in
                if viewModel.editingResponder == LuckyDropTokens.TextFieldTag.message {
                    DispatchQueue.main.async {
                        withAnimation(.easeOut(duration: 0.16)) {
                            scrollView.scrollTo(tokenConfirmButtonID)
                        }
                    }
                }
            }
        }
    }

    private func endEditing() {
        if viewModel.editingResponder.isSome {
            forceResignKeyboard()
        }
    }

    private var confirmButton: some View  {
        PrimaryButton(
            title: viewModel.confirmTitle,
            animating: viewModel.buttonAnimating,
            isEnable: viewModel.confirmEnable
        ) {
            endEditing()
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

struct LuckyDropView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropView(viewModel: LuckyDropViewModel(source: .lab))
    }
}
