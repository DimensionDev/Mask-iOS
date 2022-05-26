//
//  ShareLuckyDropPersonaView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct ShareLuckyDropPersonaView: View {
    @InjectedProvider(\.mainCoordinator)
    var coordinator
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
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
                    .onTapGesture {
                        didClick(platform: .twitter)
                    }
                Spacer()
                SocialPlatformView(platform: .facebook)
                    .onTapGesture {
                        didClick(platform: .facebook)
                    }
                Spacer()
                SocialPlatformView(platform: .instagram)
                    .onTapGesture {
                        didClick(platform: .instagram)
                    }
            }
        }
        .padding(.horizontal, 20)
    }
    
    func didClick(platform: ProfileSocialPlatform) {
        guard let persona = personaManager.currentPersona.value else {
            return
        }
        coordinator.present(
            scene: .maskConnectingSocial(
                socialPlatform: platform, personaIdentifier: persona.nonOptionalIdentifier
            ),
            transition: .modal(wapperNav: true, animated: true)
        )
    }
}

struct SocialPlatformView: View {
    let platform: ProfileSocialPlatform
    
    var body: some View {
        VStack(spacing: 6) {
            platform.iconImage
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 64)
            Text(platform.shortName)
                .font(FontStyles.mh7.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
        }
        .frame(width: 100, height: 100, alignment: .center)
    }
}

struct ShareLuckyDropPersonaView_Previews: PreviewProvider {
    static var previews: some View {
        ShareLuckyDropPersonaView()
    }
}
