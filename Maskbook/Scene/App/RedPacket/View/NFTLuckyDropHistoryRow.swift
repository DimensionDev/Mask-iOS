//
//  NFTLuckyDropHistoryRow.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/8/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI
import Introspect
import Kingfisher
import Pika

struct NFTLuckyDropHistoryRow: View {
    private let indicatorSize = CGSize(width: 16, height: 16)

    @ObservedObject private var viewModel: NFTLuckyDropHistoryTokenItemViewModel

    init(item: NftRedPacketSubgraph) {
        _viewModel = ObservedObject(
            initialValue: .init(
                luckyDrop: item
            )
        )
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(alignment: .top, spacing: 10) {
                VStack(alignment: .leading, spacing: 2) {
                    Text(
                        viewModel.luckyDrop.message.isEmpty
                            ? L10n.Plugins.Luckydrop.pluginRedPacketBestWishes
                            : viewModel.luckyDrop.message
                    )
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                    .horizontallyFilled()

                    Text(viewModel.createdDateInfo + " \(L10n.Plugins.Luckydrop.created)")
                        .font(FontStyles.rh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                }

                if viewModel.luckyDropState.showActionButton {
                    Button {
                        switch viewModel.luckyDropState {
                        case .sharable: viewModel.share()
                        default: break
                        }

                    } label: {
                        loadingText
                            .frame(width: 84, height: 32)
                    }
                    .disabled(!viewModel.luckyDropState.enabled || viewModel.loading)
                    .background(
                        viewModel.luckyDropState.enabled
                            ? Asset.Colors.Background.blue.asColor()
                            : Asset.Colors.Background.disable.asColor()
                    )
                    .cornerRadius(8)
                }
            }

            VStack(alignment: .leading, spacing: 3) {
                HStack(spacing: 4) {
                    Text(L10n.Plugins.Luckydrop.claimed)
                        .font(FontStyles.rh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                        .layoutPriority(1)

                    Text(viewModel.claimedDetail)
                        .font(FontStyles.mh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                }
                .horizontallyFilled()

                HStack(alignment: .center, spacing: 4) {
                    Text(viewModel.claimedDetail)
                        .lineLimit(1)
                        .font(FontStyles.mh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                        .layoutPriority(1)

                    Text(viewModel.symbol)
                        .font(FontStyles.mh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                        .layoutPriority(1)

//                    KFImage.url(
//                        URL(string: viewModel.luckyDrop.payload?.token?.logoURL ?? ""),
//                        cacheKey: viewModel.luckyDrop.payload?.token?.logoURL ?? ""
//                    )
//                    .cancelOnDisappear(true)
//                    .resizable()
//                    .cornerRadius(10)
//                    .frame(width: 20, height: 20)
                }
            }
        }
        .padding(.all, 12)
        .background(Asset.Colors.Background.dark.asColor())
        .cornerRadius(8)
    }

    @ViewBuilder
    private var loadingText: some View {
        ZStack {
            Text(viewModel.loading ? "" : viewModel.luckyDropState.title)
                .font(.bh6)
                .foregroundColor(.white)
                .zIndex(1)

            if viewModel.loading {
                LoadingIndicator(loading: viewModel.loading, preferredSize: indicatorSize)
                    .frame(width: indicatorSize.width, height: indicatorSize.height)
                    .colorScheme(.dark)
                    .zIndex(2)
            }
        }
    }
}
