//
//  LuckyDropView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct LuckyDropView: View {
    @State var segmentSize: CGSize = .zero
    
    var body: some View {
        VStack {
            Spacer().frame(height: LayoutConstraints.top)
            LazyVStack {
                segmentRow
                tokensRow
                confirmRiskRow
            }
        }.padding(.horizontal, LayoutConstraints.horizontal)
    }
    
    @ViewBuilder
    var segmentRow: some View {
        HStack {
            Text("Tokens")
                .frame(width: segmentSize.width / 2 - 8, height: segmentSize.height - 8)
                .background(segmentBackground)
            Text("NFTs")
                .frame(width: segmentSize.width / 2 - 8, height: segmentSize.height - 8)
                .background(segmentBackground)
        }
        .frame(maxWidth: .infinity)
        .frame(height: 48)
        .background(Asset.Colors.Background.selected.asColor().cornerRadius(8))
        .measureSize(to: $segmentSize)
    }
    
    @ViewBuilder
    var segmentBackground: some View {
        Asset.Colors.Background.tab.asColor().cornerRadius(8)
    }
    
    @ViewBuilder
    var tokensRow: some View {
        Color.red.overlay(
            Text("tokens row")
        ).frame(height: 60)
    }
    
    @ViewBuilder
    var nftsRow: some View {
        Color.red.overlay(
            Text("nfts row")
        ).frame(height: 60)
    }
    
    @ViewBuilder
    var confirmRiskRow: some View {
        Color.red.overlay(
            Text("confirm risk row")
        ).frame(height: 60)
    }
}

struct LuckyDropView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropView()
    }
}
