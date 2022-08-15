//
//  UnlockNFTView.swift
//  Maskbook
//
//  Created by caiyu on 2022/7/22.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct UnlockNFTView: View {
    @ObservedObject var viewModel: UnlockNFTViewModel
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
            Text(L10n.Scene.WalletUnlock.button + viewModel.tokenName)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())

            VStack(spacing: 8) {
                if let ensName = viewModel.ensName {
                    Text(ensName)
                        .font(FontStyles.bh5.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                    HStack(spacing: 4) {
                        Text(viewModel.address)
                            .truncationMode(.middle)
                            .font(FontStyles.rh7.font)
                            .foregroundColor(Asset.Colors.Text.dark.asColor())
                            .frame(maxWidth: 118)
                            .fixedSize()
                        Asset.Plugins.LuckyDrop.share.asImage()
                            .frame(width: 20, height: 20)
                    }
                } else {
                    HStack(spacing: 4) {
                        Text(viewModel.address)
                            .font(FontStyles.bh5.font)
                            .foregroundColor(Asset.Colors.Text.dark.asColor())
                        Asset.Plugins.LuckyDrop.share.asImage()
                            .frame(width: 20, height: 20)
                    }
                }
            }

            VStack(spacing: 16) {
                buildRow(
                    title: L10n.Plugins.Luckydrop.Confirm.walletAccount,
                    value: .address(viewModel.address)
                )
                buildRow(
                    title: L10n.Plugins.Luckydrop.Confirm.walletAccount,
                    value: .address(viewModel.contractAddress)
                )
                buildRow(
                    title: L10n.Plugins.Luckydrop.transactionFee,
                    value: .gas(viewModel.gasFeeInfo)
                )
                buildRow(
                    title: L10n.Plugins.Luckydrop.Confirm.totalAmount,
                    value: .plain("\(viewModel.totalAmount)")
                )
                tipsView
            }
            PrimaryButton(
                title: L10n.Common.Controls.confirm,
                animating: viewModel.isSending,
                isEnable: !viewModel.isSending
            ) {
                viewModel.onConfirm()
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
            if case let .plain(title) = value {
                Text(title)
                    .truncationMode(.middle)
                    .font(FontStyles.bh6.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                    .frame(maxWidth: 118)
                    .fixedSize()
            } else if case let .address(value) = value {
                Button {
                    mainCoordinator.present(scene: .safariView(url: viewModel.operatorUrl), transition: .modal(animated: true))
                } label: {
                    HStack(spacing: 4) {
                        Text(value)
                            .truncationMode(.middle)
                            .font(FontStyles.bh6.font)
                            .foregroundColor(Asset.Colors.Text.dark.asColor())
                            .frame(maxWidth: 118)
                            .fixedSize()
                        Asset.Plugins.LuckyDrop.share.asImage()
                            .frame(width: 20, height: 20)
                    }
                }
            } else if case let .gas(value) = value {
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

extension UnlockNFTView {
    enum ValueType {
        case plain(String)
        case address(String)
        case gas(String)
    }
}

// struct UnlockNFTView_Previews: PreviewProvider {
//    static var previews: some View {
//        UnlockNFTView()
//    }
// }
