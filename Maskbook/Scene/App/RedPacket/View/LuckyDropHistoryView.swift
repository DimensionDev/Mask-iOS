//
//  LuckyDropHistoryView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI
import PullRefresh

struct LuckyDropHistoryView: View {
    @ObservedObject var viewModel: LuckyDropHistoryViewModel

    init(viewModel: LuckyDropHistoryViewModel) {
        _viewModel = ObservedObject(initialValue: viewModel)
    }

    private let segmentHeight: CGFloat = 48
    private let rowSpacing: CGFloat = 16
    private let spinnerSize: CGFloat = 26.67
    private let pullSpinnerSize: CGFloat = 20

    func emptySpace(by proxy: GeometryProxy) -> CGFloat {
        max(0, proxy.frame(in: .local).height - LayoutConstraints.top - rowSpacing - segmentHeight)
    }
    
    var body: some View {
        GeometryReader { proxy in
            let emptyHeight = self.emptySpace(by: proxy)
            LazyVStack(spacing: rowSpacing, pinnedViews: [.sectionHeaders]) {
                Section {
                    switch viewModel.state {
                    case .empty:
                            VStack(alignment: .center, spacing: 12) {
                                Spacer()
                                Asset.Images.Scene.Empty.emptyBox.asImage()
                                Text(L10n.Common.empty)
                                    .font(.rh6)
                                    .foregroundColor(Asset.Colors.Text.light)
                                Spacer()
                            }
                            .frame(height: emptyHeight)

                    case .loading:
                            VStack(alignment: .center) {
                                Spacer()
                                LoadingIndicator(
                                    loading: true,
                                    preferredSize: .init(width: spinnerSize, height: spinnerSize)
                                )
                                .frame(width: spinnerSize, height: spinnerSize)
                                Spacer()
                            }
                            .frame(height: emptyHeight)

                    case .idle: listContent
                    }
                } header: {
                    SegmentControl(selection: $viewModel.selection) {
                        viewModel.displayData()
                    }
                    .frame(height: 48)
                }
            }
            .padding(.horizontal, LayoutConstraints.horizontal)
            .onRefresh(
                pullthreshold: 32,
                pullProgress: $viewModel.pullState,
                onRefresh: { done in
                    Task { @MainActor in
                        await self.viewModel.loadData()
                        done()
                    }
                },
                pullAnimationView: {
                    LoadingIndicator(
                        loading: true,
                        preferredSize: .init(width: pullSpinnerSize, height: pullSpinnerSize)
                    )
                    .frame(width: pullSpinnerSize, height: pullSpinnerSize)
            })
            .padding(.top, LayoutConstraints.top)
            .background(Asset.Colors.Background.normal.asColor().ignoresSafeArea())
        }
        .onAppear {
            viewModel.displayData()
        }
    }

    @ViewBuilder
    private var listContent: some View {
        switch viewModel.selection {
        case .token:
            ForEach(viewModel.tokenPayloads, id: \.id) { item in
                LuckyDropHistoryRow(item: item)
//                    .redacted(reason: .placeholder)
            }
        case .nft:
            VStack {
                Color.clear
                Spacer()
            }
        }
    }
}

struct LuckyDropHistoryRow: View {
    @State var loading = false

    private let indicatorSize = CGSize.init(width: 16, height: 16)

    @ObservedObject private var viewModel: LuckyDropHistoryTokenItemViewModel

    init(item: LuckyDropHistoryViewModel.TokenPayload) {
        _viewModel = ObservedObject(
            initialValue: .init(
                luckyDrop: item.payload,
                checkAvailbility: item.checkAvailability
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

                    Text(viewModel.createdDate + " \(L10n.Scene.OpenRedPackage.created)")
                        .font(FontStyles.rh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                }

                Button {
                    // TODO: refund or share
                    loading.toggle()
                } label: {
                    loadingText
                    .frame(width: 84, height: 32)
                }
                .disabled(false)
                .background(
                    true
                    ? Asset.Colors.Background.blue.asColor()
                    : Asset.Colors.Background.disable.asColor()
                )
                .cornerRadius(8)
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

                HStack(spacing: 4) {
                    Text(viewModel.totalRemain)
                        .lineLimit(1)
                        .font(FontStyles.mh7.font)
                        .foregroundColor(Asset.Colors.Text.dark.asColor())
                        .layoutPriority(1)

                    if let symbol = viewModel.token?.symbol {
                        Text(symbol)
                            .font(FontStyles.mh7.font)
                            .foregroundColor(Asset.Colors.Text.dark.asColor())
                            .layoutPriority(1)
                    }

                    // TODO: icon

                    //                    if let icon = viewModel.icon {
                    //                        Asset.Images.Scene.Balance.Chain.eth.asImage()
                    //                            .resizable()
                    //                            .aspectRatio(contentMode: .fit)
                    //                            .frame(width: 20, height: 20)
                    //                            .layoutPriority(1)
                    //                    }
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
            Text(loading ? "" : L10n.Plugins.Luckydrop.refund)
                .font(.bh6)
                .foregroundColor(.white)
                .zIndex(1)

            if loading {
                LoadingIndicator(loading: loading, preferredSize: indicatorSize)
                    .frame(width: indicatorSize.width, height: indicatorSize.height)
                    .colorScheme(.dark)
                    .zIndex(2)
            }
        }
    }
}

struct LuckyDropHistoryView_Previews: PreviewProvider {
    static var previews: some View {
        //        LuckyDropHistoryRow(
        //            item: .init(
        //                checkAvailability: nil,
        //                payload: .init(
        //                    basic: .mock,
        //                    payload: .mock
        //                )
        //            )
        //        )
        LoadingIndicator(loading: true, preferredSize: .init(width: 32, height: 32))
            .frame(width: 32, height: 32)
        //        VStack {
        //            Asset.Images.Scene.Empty.emptyBox.asImage()
        //            Text(L10n.Common.empty)
        //                .font(.rh6)
        //                .foregroundColor(Asset.Colors.Text.light)
        //        }
    }
}
