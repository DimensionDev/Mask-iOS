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
    
    @State var segmentSize: CGSize = .zero
    
    var body: some View {
        VStack(spacing: 0) {
            VStack(spacing: 0) {
                Spacer().frame(height: LayoutConstraints.top)
                LazyVStack(spacing: 0) {
                    LuckyDropSegmentView()
                    tokensRow
                    PrimaryButton(action: {
                        mainCoordinator.present(scene: .pluginRiskWarning, transition: .popup)
                    }, title: "Confirm Risk Warning")
                }
            }.padding(.horizontal, LayoutConstraints.horizontal)
            Spacer()
            WalletBottomWidgetView()
                .padding(.horizontal, 16)
        }
        .edgesIgnoringSafeArea(.bottom)
    }
    
    @ViewBuilder
    var tokensRow: some View {
        LuckyDropTokens()
    }
    
    @ViewBuilder
    var nftsRow: some View {
        Color.red.overlay(
            Text("nfts row")
        ).frame(height: 60)
    }
}

struct LuckyDropView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropView()
    }
}
