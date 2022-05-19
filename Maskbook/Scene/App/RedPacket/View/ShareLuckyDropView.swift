//
//  ShareLuckyDropView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct ShareLuckyDropView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Text(L10n.Plugins.Luckydrop.shareTitle)
                .frame(maxWidth: .infinity)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
            Spacer().frame(height: 13)
            Text(L10n.Plugins.Luckydrop.shareCreatePersona)
                .font(FontStyles.rh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
            Spacer().frame(height: 20)
            PrimaryButton(
                title: L10n.Plugins.Luckydrop.Buttons.createPersona,
                animating: false,
                isEnable: true) {}
            Spacer().frame(height: 20)
            PrimaryButton(
                title: L10n.Plugins.Luckydrop.Buttons.recoverPersona,
                animating: false,
                isEnable: true) {}
        }
        .padding(.horizontal, 20)
    }
}

struct ShareLuckyDropView_Previews: PreviewProvider {
    static var previews: some View {
        ShareLuckyDropView()
    }
}
