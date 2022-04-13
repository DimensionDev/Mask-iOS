//
//  WalletBottomWidgetView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct WalletBottomWidgetView: View {
    @ObservedObject
    var viewModel: WalletBottomWidgetViewModel
    
    var safeBottomArea: CGFloat {
        UIApplication.shared.windows.first?.safeAreaInsets.bottom ?? 0
    }
    
    var body: some View {
        HStack(spacing: 0) {
            Button {
                viewModel.switchAccount()
            } label: {
                Asset.Icon.Logo.largeMask.asImage()
                    .resizable()
                    .frame(width: 32, height: 32)
                    .overlay(
                        Asset.Images.Scene.WalletList.Coins.ethSelected.asImage()
                            .resizable()
                            .aspectRatio(contentMode: .fit)
                            .frame(width: 13.47)
                            .overlay(
                                Capsule(style: .circular)
                                    .stroke(Color.white, style: StrokeStyle(lineWidth: 1))
                            )
                            .offset(x: 16, y: 9.265)
                    )
                Spacer().frame(width: 12)
                VStack(alignment: .leading, spacing: 4) {
                    Text(L10n.Plugins.Luckydrop.account)
                            .font(FontStyles.bh5.font)
                            .foregroundColor(Asset.Colors.Text.dark.asColor())
                    HStack {
                        Text(viewModel.stateDescription)
                            .lineLimit(1)
                            .truncationMode(.middle)
                            .frame(maxWidth: 92)
                            .font(FontStyles.rh6.font)
                            .foregroundColor(viewModel.state.stateColor)
                        if viewModel.isLocked {
                            Asset.Plugins.LuckyDrop.lock.asImage()
                        }
                    }
                }
                Asset.Icon.Arrows.down1.asImage()
            }
            Spacer()
            if case .balance(let balance) = viewModel.detailType {
                Text(balance)
                    .font(FontStyles.bh4.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
            } else if case .transactionURL(let url) = viewModel.detailType, let url = url {
                Button {
                    Coordinator.main.present(scene: .safariView(url: url), transition: .modal(animated: true))
                } label: {
                    Asset.Plugins.LuckyDrop.share.asImage()
                        .frame(width: 24, height: 24)
                }
            }
        }
        .padding(.vertical, 9.5)
        .padding(.bottom, safeBottomArea)
        .background(Asset.Colors.Background.normal.asColor())
    }
}

struct WalletBottomWidgetView_Previews: PreviewProvider {
    static var previews: some View {
        WalletBottomWidgetView(viewModel: WalletBottomWidgetViewModel())
    }
}
