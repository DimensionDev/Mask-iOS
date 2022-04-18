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
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    @State var currentHeight: CGFloat = 0
    @State var safeArea: EdgeInsets = EdgeInsets()
    @StateObject var viewModel = LuckyDropViewModel()
    let idOfBottomViewToScroll = "idOfBottomViewToScroll"
    
    var body: some View {
        GeometryReader { geometry in
            VStack(spacing: 0) {
                contentView()
                
                WalletBottomWidgetView(viewModel: viewModel.walletBottomViewModel)
                    .padding(.horizontal, 16)
            }
            .edgesIgnoringSafeArea(.bottom)
            .background(Asset.Colors.Background.normal.asColor())
            .onAppear {
                safeArea = geometry.safeAreaInsets
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
                    Spacer().frame(height: LayoutConstraints.top)
                    LuckyDropSegmentView()
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
                        withAnimation(.easeOut(duration: 0.16)) {
                            scrollView.scrollTo(idOfBottomViewToScroll)
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
                    mainCoordinator.present(scene: .pluginRiskWarning, transition: .popup)
                    
                case .unlockToken: viewModel.approveToken()
                case .send: viewModel.send()
                default: break
                }
            }
    }
}

struct LuckyDropView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropView()
    }
}
