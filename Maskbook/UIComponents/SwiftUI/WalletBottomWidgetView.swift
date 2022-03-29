//
//  WalletBottomWidgetView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct WalletBottomWidgetView: View {
    var safeBottomArea: CGFloat {
        UIApplication.shared.windows.first?.safeAreaInsets.bottom ?? 0
    }
    
    var body: some View {
        HStack(spacing: 0) {
            Asset.Icon.Logo.largeMask.asImage()
                .resizable()
                .frame(width: 32, height: 32)
                .overlay(
                    Asset.Images.Scene.WalletList.Coins.ethSelected.asImage()
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 13.47)
                        .overlay(
                            Capsule(style: .circular)
                                .stroke(Color.white, style: StrokeStyle(lineWidth: 1))
                        )
                        .offset(x: 16, y: 9.265)
                )
            Spacer().frame(width: 12)
            VStack(alignment: .leading, spacing: 4) {
                Text("Account")
                HStack {
                    Text("0x78er...7893")
                    Asset.Plugins.LuckyDrop.lock.asImage()
                }
            }
            Asset.Icon.Arrows.down1.asImage()
            Spacer()
            Text("0.22 ETH").font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
        }
        .padding(.vertical, 9.5)
        .padding(.bottom, safeBottomArea)
        .background(Asset.Colors.Background.normal.asColor())
    }
}

struct WalletBottomWidgetView_Previews: PreviewProvider {
    static var previews: some View {
        WalletBottomWidgetView()
    }
}
