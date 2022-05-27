//
//  SelectSocialAccountView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI
import CoreDataStack
import Kingfisher

struct SelectSocialAccountView: View {
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    var viewModel: ShareLuckyDropSelectProfileViewModel
    
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
            
            ScrollView {
                HStack(spacing: 16) {
                    ForEach(personaManager.currentTwitterProfiles) { profile in
                        SocialAccountView(profile: profile)
                            .onTapGesture {
                                viewModel.selectProfile(profile: profile)
                            }
                    }
                }
            }
        }
        .padding(.horizontal, 20)
    }
}

struct SocialAccountView: View {
    
    var profile: ProfileRecord
    var body: some View {
        VStack(alignment: .center, spacing: 6) {
            KFImage.url(
                URL(string: profile.avatar ?? ""),
                cacheKey: profile.avatar ?? ""
            )
            .placeholder({
                Asset.Icon.Logo.largeMask.asImage()
            })
            .resizable()
            .aspectRatio(contentMode: .fit)
                .frame(width: 64)
                .clipShape(Circle())
                .overlay(
                    Image(ProfileSocialPlatform.twitter.iconName)
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 20)
                        .overlay(
                            Capsule(style: .circular)
                                .stroke(Color.white, style: StrokeStyle(lineWidth: 1))
                        )
                        .offset(x: 32, y: 22)
                )
            Text(profile.nickname ?? profile.socialID).font(FontStyles.mh7.font)
                .lineLimit(1)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
        }
        .frame(width: (UIScreen.main.bounds.size.width - 40 - 32)/3, height: 115)
    }
    

}

struct SelectSocialAccountView_Previews: PreviewProvider {
    static var previews: some View {
        SelectSocialAccountView(viewModel: ShareLuckyDropSelectProfileViewModel(callback: nil))
    }
}
