//
//  BalanceTokenRowView.swift
//  Test
//
//  Created by Hugo L on 2022/2/18.
//

import CoreData
import CoreDataStack
import Kingfisher
import SwiftUI

struct BalanceTokenRowView: View {
    @ObservedObject var viewModel: BalanceTokenRowViewModel
    
    var body: some View {
        HStack {
            BalanceTokenView(viewModel: viewModel)
            Spacer().frame(width: 16)
            VStack {
                HStack {
                    Text(viewModel.name)
                        .font(FontStyles.bh5.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                    Spacer()
                    Text(viewModel.balance)
                        .font(FontStyles.rh6.font)
                        .foregroundColor(Asset.Colors.Text.normal.asColor())
                }
                HStack {
                    Text(viewModel.displayQuantity)
                        .font(FontStyles.bh5.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                    Spacer()
                    Text("+1.00%")
                        .font(FontStyles.rh6.font)
                        .foregroundColor(Asset.Colors.Public.success.asColor())
                        .opacity(0)
                }
            }
        }
        .padding(.all, 12)
        .background(Asset.Colors.Background.dark.asColor())
        .cornerRadius(8)
    }
    
    init(token: Token) {
        self.viewModel = BalanceTokenRowViewModel(token: token)
    }
}

struct BalanceTokenView: View {
    @ObservedObject var viewModel: BalanceTokenRowViewModel
    
    var token: Token {
        viewModel.token
    }
    
    var chain: BlockChainNetwork? {
        viewModel.chain
    }
    
    var borderColor: Color {
        Asset.Colors.Background.dark.asColor()
    }
    
    var defaultTokenImage: Image {
        Asset.Images.Scene.Balance.tokenIconPlaceholder.asImage()
    }
    
    var body: some View {
        let url = token.logoUrl
        let processor = GifRoundCornerImageProcessor(cornerRadius: 19, targetSize: CGSize(width: 38, height: 38))
        let tokenImage = KFImage.url(URL(string: url ?? ""))
            .scaleFactor(UIScreen.main.scale)
            .setProcessor(processor)
            .serialize(by: FormatIndicatedCacheSerializer.gif)
            .placeholder({ defaultTokenImage })
            .resizable()
            .frame(width: 38, height: 38)
            .cornerRadius(19)
        
        if let selecedIcon = chain?.selectedIcon {
            return AnyView(tokenImage.overlay(
                selecedIcon.asImage()
                    .resizable()
                    .frame(width: 16, height: 16)
                    .clipShape(Circle())
                    .overlay(Circle().stroke(borderColor, lineWidth: 1))
                    .offset(x: 8, y: 0)
                ,
                alignment: .bottomTrailing)
            )
        } else {
            return AnyView(tokenImage)
        }
    }
}