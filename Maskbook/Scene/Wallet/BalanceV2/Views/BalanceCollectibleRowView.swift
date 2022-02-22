//
//  BalanceCollectibleRowView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/22.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI
import Kingfisher

struct BalanceCollectibleRowView: View {
    var collectibleImage: some View {
        KFImage.url(nil, cornerRadius: 19, fitSize: CGSize(width: 38, height: 38))
            .frame(width: 38, height: 38)
            .cornerRadius(19)
    }
    
    var body: some View {
        VStack {
            HStack {
                BalanceTokenView(tokenImageURL: nil, chain: nil)
                Spacer().frame(width: 16)
                Text("Mask")
                Spacer()
                Text("1")
                Asset.Images.Scene.Balance.expandArrowRight.asImage()
            }
        }
        .padding(.all, 12)
        .background(Asset.Colors.Background.dark.asColor())
        .cornerRadius(8)
    }
}

struct BalanceCollectibleRowView_Previews: PreviewProvider {
    static var previews: some View {
        BalanceCollectibleRowView()
    }
}
