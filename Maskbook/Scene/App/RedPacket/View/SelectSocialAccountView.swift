//
//  SelectSocialAccountView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct SelectSocialAccountView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Text(L10n.Plugins.Luckydrop.selectSocialTitle)
                .frame(maxWidth: .infinity)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
            Spacer().frame(height: 13)
            Text(L10n.Plugins.Luckydrop.selectSocialDescription)
                .font(FontStyles.rh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
            Spacer().frame(height: 20)
            HStack(spacing: 0) {
                SocialAccountView()
                Spacer()
                SocialAccountView()
                Spacer()
                SocialAccountView()
            }
        }
        .padding(.horizontal, 20)
    }
}

struct SocialAccountView: View {
    var body: some View {
        VStack(spacing: 6) {
            Asset.Icon.Logo.largeMask.asImage().resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 64)
                .overlay(
                    Asset.Images.Scene.WalletList.Coins.ethSelected.asImage()
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 20)
                        .overlay(
                            Capsule(style: .circular)
                                .stroke(Color.white, style: StrokeStyle(lineWidth: 1))
                        )
                        .offset(x: 32, y: 22)
                )
            Text("JayJay").font(FontStyles.mh7.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 12)
    }
}

struct SelectSocialAccountView_Previews: PreviewProvider {
    static var previews: some View {
        SelectSocialAccountView()
    }
}
