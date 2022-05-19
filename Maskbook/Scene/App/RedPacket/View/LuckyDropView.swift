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
    @EnvironmentObject var chain: ResponderChain
    @ObservedObject var viewModel = LuckyDropViewModel()
    @State var currentHeight: CGFloat = 0
    @State var safeArea: EdgeInsets = EdgeInsets()
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    private let idOfBottomViewToScroll = "idOfBottomViewToScroll"
    
    var body: some View {
        GeometryReader { geometry in
            VStack(spacing: 0) {
                contentView()
                
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
    }
    
    @ViewBuilder
    var tokensRow: some View {
        LuckyDropTokens(viewModel: viewModel)
    }
    
    private func contentView() -> some View {
        ScrollViewReader { scrollView in
            ScrollView {
                LazyVStack(spacing: 0) {
//                    Spacer().frame(height: LayoutConstraints.top)
                    
//                    SegmentControl(selection: $viewModel.selection) {
//                    }
//                    .frame(height: 48)
                    
                    tokensRow
                    
                    confirmButton().id(idOfBottomViewToScroll)
                }
                .padding(.horizontal, LayoutConstraints.horizontal)
            }
            .padding(.bottom, self.currentHeight)
            .onAppear(perform: {
                NotificationCenter.Publisher(
                    center: NotificationCenter.default, name: UIResponder.keyboardWillShowNotification
                )
                .merge(with: NotificationCenter.Publisher(
                    center: NotificationCenter.default, name: UIResponder.keyboardWillChangeFrameNotification)
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
                    .compactMap { notification in
                        CGFloat.zero
                }
                .subscribe(Subscribers.Assign(object: self, keyPath: \.currentHeight))
            })
        }
    }
    
    private func confirmButton() -> PrimaryButton {
        PrimaryButton(
            title: viewModel.confirmTitle,
            animating: viewModel.buttonAnimating,
            isEnable: viewModel.confirmEnable) {
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
                    let pluginId = PluginStorageRepository.PluginID.redPackage.rawValue
                    mainCoordinator.present(scene: .pluginRiskWarning(pluginId: pluginId), transition: .popup)
                    
                case .unlockToken: viewModel.approveToken()
                case .send: viewModel.send()
                default: break
                }
            }
    }
}

struct LuckyDropView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropView(viewModel: LuckyDropViewModel())
    }
}
