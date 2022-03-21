//
//  LuckyDropTokens.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct LuckyDropTokens: View {
    @State private var totalAmountStr: String = ""
    @State private var quantityStr: String = ""
    @State private var message: String = ""
    
    var body: some View {
        VStack(spacing: 0) {
            VStack(spacing: 0) {
                tokenRow
                Spacer().frame(height: 16)
                quantityRow
                Spacer().frame(height: 16)
                messageRow
                Spacer().frame(height: 12)
                transactionView
            }
            .padding(.horizontal, 16)
        }
    }
    
    @ViewBuilder
    var tokenRow: some View {
        HStack(spacing: 0) {
            Asset.Images.Scene.WalletList.Coins.ethSelected.asImage()
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 24)
            Spacer().frame(width: 8)
            Text("ETH").foregroundColor(Asset.Colors.Text.dark.asColor())
                .font(FontStyles.bh5.font)
            Spacer().frame(width: 4)
            Asset.Icon.Arrows.down1.asImage()
            Text(L10n.Plugins.Luckydrop.max).padding(.horizontal, 5.5)
                .frame(height: 24)
                .background(Asset.Colors.Background.infoBg.asColor().cornerRadius(4))
            Spacer()
            TextField(L10n.Plugins.Luckydrop.totalAmount, text: $totalAmountStr)
                .multilineTextAlignment(.trailing)
                .frame(maxHeight: .infinity)
        }
        .frame(height: 52)
        .background(Asset.Colors.Background.dark.asColor().cornerRadius(8))
    }
    
    @ViewBuilder
    var quantityRow: some View {
        HStack(spacing: 0) {
            Asset.Plugins.LuckyDrop.redPacket.asImage()
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 24)
            Spacer().frame(width: 8)
            Text("ETH").foregroundColor(Asset.Colors.Text.dark.asColor())
                .font(FontStyles.bh5.font)
            Spacer()
            TextField(L10n.Plugins.Luckydrop.enterQuantity, text: $quantityStr)
                .multilineTextAlignment(.trailing)
                .frame(maxHeight: .infinity)
        }
        .frame(height: 52)
        .background(Asset.Colors.Background.dark.asColor().cornerRadius(8))
    }
    
    @ViewBuilder
    var messageRow: some View {
        HStack(spacing: 0) {
            TextField(L10n.Plugins.Luckydrop.enterMessage, text: $message)
                .frame(maxHeight: .infinity)
        }
        .frame(height: 52)
        .background(Asset.Colors.Background.dark.asColor().cornerRadius(8))
    }
    
    @ViewBuilder
    var transactionView: some View {
        VStack(spacing: 0) {
            HStack(spacing: 0) {
                Text(L10n.Plugins.Luckydrop.transactionFee)
                    .font(FontStyles.mh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())
                Spacer()
                Text("$18.8 (~32s)")
                    .font(FontStyles.bh6.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                Spacer().frame(width: 8)
                Asset.Plugins.LuckyDrop.setting.asImage()
            }
            HStack(spacing: 4) {
                Text("10").font(FontStyles.bh1.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                Asset.Images.Scene.WalletList.Coins.ethSelected.asImage()
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 32)
            }
            .padding(.vertical, 32)
        }
    }
}

struct LuckyDropTokens_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropTokens()
    }
}
