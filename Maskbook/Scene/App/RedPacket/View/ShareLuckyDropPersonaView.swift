//
//  ShareLuckyDropPersonaView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct ShareLuckyDropPersonaView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Text(L10n.Plugins.Luckydrop.shareTitle)
                .frame(maxWidth: .infinity)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
            Spacer().frame(height: 13)
            Text(L10n.Plugins.Luckydrop.shareConnectPersona)
                .font(FontStyles.rh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
            Spacer().frame(height: 20)
            HStack(spacing: 0) {
                SocialPlatformView(platform: .twitter)
                Spacer()
                SocialPlatformView(platform: .twitter)
                Spacer()
                SocialPlatformView(platform: .twitter)
            }
        }
        .padding(.horizontal, 20)
    }
}

struct SocialPlatformView: View {
    let platform: ProfileSocialPlatform
    
    var body: some View {
        VStack(spacing: 6) {
            platform.iconName
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 48)
            Text(platform.shortName)
                .font(FontStyles.mh7.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 12)
    }
}

struct ShareLuckyDropPersonaView_Previews: PreviewProvider {
    static var previews: some View {
        ShareLuckyDropPersonaView()
    }
}
