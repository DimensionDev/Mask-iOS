//
//  LuckyDropSegmentView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct LuckyDropSegmentView: View {
    @State var segmentSize: CGSize = .zero
    
    var body: some View {
        HStack(spacing: 0) {
            Text(L10n.Plugins.Luckydrop.token)
                .font(FontStyles.bh5.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
                .frame(width: segmentSize.width / 2 - 8, height: segmentSize.height - 8)
                .background(segmentBackground)
            Text(L10n.Plugins.Luckydrop.nft)
                .font(FontStyles.mh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
                .frame(width: segmentSize.width / 2 - 8, height: segmentSize.height - 8)
                //.background(segmentBackground)
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
}

struct LuckyDropSegmentView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropSegmentView()
    }
}
