//
//  LuckyDropView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct LuckyDropView: View {
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    @StateObject var viewModel = LuckyDropViewModel()
    
    var body: some View {
        VStack(spacing: 0) {
            ScrollView {
                LazyVStack(spacing: 0) {
                    Spacer().frame(height: LayoutConstraints.top)
                    LuckyDropSegmentView()
                    tokensRow
                    PrimaryButton(
                        action: {
                            switch viewModel.buttonType {
                            case .unlock:
                                Coordinator.main.present(
                                    scene: .walletUnlock(cancellable: true) { error in
                                        viewModel.removeButtonType(type: .unlock)
                                    },
                                    transition: .modal(animated: true, adaptiveDelegate: nil)
                                )
                                
                            case .riskWarning:
                                mainCoordinator.present(scene: .pluginRiskWarning, transition: .popup)
                                viewModel.removeButtonType(type: .riskWarning)
                                
                            case .unlockToken: viewModel.approveToken()
                            case .send: viewModel.send()
                            default: break
                            }
                        },
                        title: viewModel.confirmTitle,
                        animating: viewModel.buttonAnimating,
                        isEnable: viewModel.confirmEnable
                    )
                }
                .padding(.horizontal, LayoutConstraints.horizontal)
            }
            
            WalletBottomWidgetView()
                .padding(.horizontal, 16)
        }
        .edgesIgnoringSafeArea(.bottom)
        .background(Asset.Colors.Background.normal.asColor())
    }
    
    @ViewBuilder
    var tokensRow: some View {
        LuckyDropTokens(viewModel: viewModel)
    }
}

struct LuckyDropView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropView()
    }
}
