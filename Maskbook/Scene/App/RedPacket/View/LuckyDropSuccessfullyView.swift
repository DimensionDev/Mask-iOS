//
//  LuckyDropSuccessfullyView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/19.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct LuckyDropSuccessfullyView: View {
    @ObservedObject
    var viewModel: LuckyDropSuccessfullyViewModel
    
    var body: some View {
        VStack(alignment: .center, spacing: 0) {
            Asset.Plugins.LuckyDrop.success.asImage()
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 60)
            Spacer().frame(height: 20)
            Text(L10n.Plugins.Luckydrop.ShareSheet.title)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
            Spacer().frame(height: 12)
            Text(L10n.Plugins.Luckydrop.ShareSheet.detail)
                    .font(FontStyles.rh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())
            Spacer().frame(height: 20)
            PrimaryButton(title: L10n.Plugins.Luckydrop.ShareSheet.toSocialMedia) {
                viewModel.callback?()
            }
        }
        .padding(.horizontal)
    }
}

struct LuckyDropSuccessfullyView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropSuccessfullyView(viewModel: LuckyDropSuccessfullyViewModel(callback: nil))
    }
}
