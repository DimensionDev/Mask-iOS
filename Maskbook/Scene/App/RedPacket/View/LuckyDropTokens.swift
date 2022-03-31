//
//  LuckyDropTokens.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import SwiftUI
import Combine
import Kingfisher

typealias RedPacketType = RedPacket.RedPacketType

struct LuckyDropTokens: View {
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    @ObservedObject var viewModel: LuckyDropViewModel
    
    var maxColor: Color {
        viewModel.maxButtonEnable ?
         Asset.Colors.Public.blue.asColor() :
         Asset.Colors.Text.normal.asColor()
    }
    
    var body: some View {
        VStack(spacing: 0) {
            typeRow
            Spacer().frame(height: 12)
            quantityRow
            Spacer().frame(height: 16)
            tokenRow
            Spacer().frame(height: 16)
            messageRow
            Spacer().frame(height: 12)
            transactionView
        }
        .padding(.top, 24)
        .background(Asset.Colors.Background.normal.asColor())
    }
    
    @ViewBuilder
    var typeRow: some View {
        HStack {
            buildGroupButton(.average)
            buildGroupButton(.random)
        }
        .frame(height: 32)
    }
    
    @ViewBuilder
    var tokenRow: some View {
        HStack(spacing: 0) {
            Button {
                Coordinator.main.present(
                    scene: .sendTransacationTokenlist(delegate: viewModel, isNftList: false),
                    transition: .detail(animated: true)
                )
            } label: {
                if let url = viewModel.tokenURL {
                    KFImage(url)
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 24)
                        .cornerRadius(12)
                }
                Spacer().frame(width: 8)
                Text(viewModel.tokenStr).foregroundColor(Asset.Colors.Text.dark.asColor())
                    .font(FontStyles.bh5.font)
                Spacer().frame(width: 4)
                Asset.Icon.Arrows.down1.asImage()
            }
            
            Button {
                viewModel.maxAmount()
            } label: {
                Text(L10n.Plugins.Luckydrop.max).padding(.horizontal, 5.5)
                    .font(FontStyles.mh6.font)
                    .foregroundColor(maxColor)
                    .frame(height: 24)
                    .background(Asset.Colors.Background.infoBg.asColor().cornerRadius(4))
            }
            .disabled(!viewModel.maxButtonEnable)
            Spacer()
            if viewModel.mode == .average {
                TextField(L10n.Plugins.Luckydrop.totalAmount, text: $viewModel.amountPerShareStr)
                    .keyboardType(.numbersAndPunctuation)
                    .multilineTextAlignment(.trailing)
                    .frame(maxHeight: .infinity)
            } else {
                TextField(L10n.Plugins.Luckydrop.totalAmount, text: $viewModel.amountTotalShareStr)
                    .keyboardType(.numbersAndPunctuation)
                    .multilineTextAlignment(.trailing)
                    .frame(maxHeight: .infinity)
            }
        }
        .frame(height: 52)
        .padding(.horizontal, 16)
        .background(Asset.Colors.Background.dark.asColor().cornerRadius(8))
    }
    
    @ViewBuilder
    var quantityRow: some View {
        HStack(spacing: 0) {
            Asset.Plugins.LuckyDrop.redPacket.asImage()
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 24)
            Spacer().frame(width: 8)
            Text(L10n.Plugins.Luckydrop.quantity).foregroundColor(Asset.Colors.Text.dark.asColor())
                .font(FontStyles.bh5.font)
            Spacer()
            TextField(L10n.Plugins.Luckydrop.enterQuantity, text: $viewModel.quantityStr)
                .keyboardType(.numberPad)
                .multilineTextAlignment(.trailing)
                .frame(maxHeight: .infinity)
        }
        .frame(height: 52)
        .padding(.horizontal, 16)
        .background(Asset.Colors.Background.dark.asColor().cornerRadius(8))
    }
    
    @ViewBuilder
    var messageRow: some View {
        HStack(spacing: 0) {
            TextField(L10n.Plugins.Luckydrop.enterMessage, text: $viewModel.message)
                .limitText($viewModel.message, maxLength: 30)
                .frame(maxHeight: .infinity)
        }
        .frame(height: 52)
        .padding(.horizontal, 16)
        .background(Asset.Colors.Background.dark.asColor().cornerRadius(8))
    }
    
    @ViewBuilder
    var transactionView: some View {
        VStack(spacing: 0) {
            HStack(spacing: 0) {
                Text(L10n.Plugins.Luckydrop.transactionFee)
                    .font(FontStyles.mh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())
                Spacer()
                
                Button {
                    mainCoordinator.present(
                        scene: .gasFee(
                            delegate: viewModel,
                            gasLimit: viewModel.gasLimit,
                            viewModel: viewModel.gasFeeViewModel
                        ),
                        transition: .panModel(animated: true)
                    )
                } label: {
                    Text(viewModel.gasFeeInfo)
                        .font(FontStyles.bh6.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                    Spacer().frame(width: 8)
                    Asset.Plugins.LuckyDrop.setting.asImage()
                }
            }
            HStack(spacing: 4) {
                Text(viewModel.totalQuantity).font(FontStyles.bh1.font)
                    .foregroundColor(viewModel.totalQuantityColor)
                Asset.Images.Scene.WalletList.Coins.ethSelected.asImage()
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 32)
            }
            .padding(.vertical, 32)
        }
    }
    
    @ViewBuilder
    func buildGroupButton(_ mode: RedPacketType) -> some View {
        Button {
            viewModel.mode = mode
        } label: {
            HStack(spacing: 10) {
                if viewModel.mode == mode {
                    Asset.Icon.Cell.cellCheck.asImage()
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 24)
                } else {
                    Asset.Icon.Cell.cellUncheck.asImage()
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 24)
                }
                Text(mode.title)
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                Spacer()
            }
        }
    }
}

struct LuckyDropTokens_Previews: PreviewProvider {
    static var previews: some View {
        LuckyDropView()
    }
}
