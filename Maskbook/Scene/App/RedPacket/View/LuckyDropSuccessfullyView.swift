//
//  LuckyDropSuccessfullyView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/19.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct LuckyDropSuccessfullyView: View {
    @StateObject private var viewModel = LuckyDropSuccessfullyViewModel()
    
    var body: some View {
        VStack(alignment: .center, spacing: 0) {
            Asset.Plugins.LuckyDrop.success.asImage()
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 60)
            Spacer().frame(height: 20)
            Text("Luck Drop Successfully Created! ")
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
            Spacer().frame(height: 12)
            Text("You can now see your Lucky Drop in History Tab. To let people claim it, share to your social media.")
                    .font(FontStyles.rh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())
            Spacer().frame(height: 20)
            PrimaryButton(title: "Share to social media") {
                
            }
        }
        .padding(.horizontal)
    }
}

struct LuckyDropSuccessfullyView_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropSuccessfullyView()
    }
}
