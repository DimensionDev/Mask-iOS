//
//  RedPacketConfirmView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/13.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI
import Kingfisher
import CoreDataStack

struct RedPacketConfirmView: View {
    @ObservedObject var viewModel: RedPacketConfirmViewModel
    @InjectedProvider(\.mainCoordinator) private var mainCoordinator
   
    var tipsView: some View {
        HStack(spacing: 10) {
            Asset.Images.Scene.Social.connectHintBannerIcon.asImage()
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 24)
            Text(L10n.Plugins.Luckydrop.Confirm.tips)
                .font(FontStyles.rh6.font)
                .foregroundColor(Asset.Colors.Public.info.asColor())
        }
        .frame(maxWidth: .infinity)
        .padding(.horizontal, 16)
        .padding(.vertical, 10)
        .background(Asset.Colors.Public.infoBg.asColor())
        .cornerRadius(12)
    }
    
    var body: some View {
        VStack(spacing: 20) {
            Text(L10n.Plugins.Luckydrop.Confirm.title)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
            VStack(spacing: 16) {
                buildRow(
                    title: L10n.Plugins.Luckydrop.Confirm.walletAccount,
                    value: .plain(viewModel.address)
                )
                buildRow(
                    title: L10n.Plugins.Luckydrop.Confirm.attachedMessage,
                    value: .plain(viewModel.message)
                )
                buildRow(
                    title: L10n.Plugins.Luckydrop.Confirm.splitMode,
                    value: .plain(viewModel.mode.title)
                )
                buildRow(
                    title: L10n.Plugins.Luckydrop.Confirm.share,
                    value: .plain(viewModel.share)
                )
                if viewModel.amountPerShare.isNotEmpty {
                    buildRow(
                        title: L10n.Plugins.Luckydrop.Confirm.amountPerShare,
                        value: .plain(viewModel.amountPerShare)
                    )
                }
                buildRow(
                    title: L10n.Plugins.Luckydrop.Confirm.totalAmount,
                    value: .token(
                        tokenURL: viewModel.tokenIconURL,
                        value: viewModel.totalAmount
                    )
                )
                buildRow(title: L10n.Plugins.Luckydrop.Confirm.transactionFee, value: .gas(viewModel.gasFeeInfo))
                tipsView
            }
            PrimaryButton(title: L10n.Common.Controls.confirm) {
            }
        }
        .padding(.horizontal)
    }
    
    @ViewBuilder
    func buildRow(title: String, value: ValueType) -> some View {
        HStack {
            Text(title)
                .font(FontStyles.rh6.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
            Spacer()
            if case .plain(let title) = value {
                Text(title)
                    .truncationMode(.middle)
                    .font(FontStyles.bh6.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                    .frame(maxWidth: 118)
                    .fixedSize()
            } else if case .token(let tokenURL, let value) = value {
                HStack(spacing: 4) {
                    KFImage(tokenURL)
                        .cancelOnDisappear(true)
                        .loadImmediately()
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 24)
                        .cornerRadius(12)
                    Text(value)
                        .truncationMode(.middle)
                        .font(FontStyles.bh6.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                        .frame(maxWidth: 118)
                        .fixedSize()
                }
            } else if case .gas(let value) = value {
                Button {
                    mainCoordinator.present(
                        scene: .gasFee(
                            delegate: nil,
                            gasLimit: viewModel.gasLimit,
                            viewModel: viewModel.gasFeeViewModel
                        ),
                        transition: .panModel(animated: true)
                    )
                } label: {
                    HStack(spacing: 4) {
                        Text(value)
                            .truncationMode(.middle)
                            .font(FontStyles.bh6.font)
                            .foregroundColor(Asset.Colors.Text.dark.asColor())
                        Asset.Plugins.LuckyDrop.setting.asImage()
                    }
                }
            }
        }
    }
}

extension RedPacketConfirmView {
    enum ValueType {
        case plain(String)
        case token(tokenURL: URL?, value: String)
        case gas(String)
    }
}

struct RedPacketConfirmView_Previews: PreviewProvider {
    static var previews: some View {
        return RedPacketConfirmView(viewModel: RedPacketConfirmViewModelMock())
    }
}
