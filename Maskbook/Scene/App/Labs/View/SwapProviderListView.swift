//
//  PluginSettingListView.swift
//  Maskbook
//
//  Created by yzj on 2021/8/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct SwapProviderListView: View {
    @ObservedObject
    private var viewModel: TradeProviderViewModel

    init(viewModel: TradeProviderViewModel) {
        self.viewModel = viewModel
    }

    var body: some View {
        VStack(spacing: 16) {
            HStack {
                Text(L10n.Scene.App.SwapNetworkSource.eth)
                    .font(FontStyles.bh5.font)
                Spacer()
            }
            ForEach(TradeProviderViewModel.Section.eth.items, id: \.self) { item in
                SelectableSheetItemView<TradeProvider>(
                    viewModel: viewModel[item]
                )
            }

            HStack {
                Text(L10n.Scene.App.SwapNetworkSource.poly)
                    .font(FontStyles.bh5.font)
                Spacer()
            }
            ForEach(TradeProviderViewModel.Section.polygon.items, id: \.self) { item in
                SelectableSheetItemView<TradeProvider>(
                    viewModel: viewModel[item]
                )
            }

            HStack {
                Text(L10n.Scene.App.SwapNetworkSource.bsc)
                    .font(FontStyles.bh5.font)
                Spacer()
            }
            ForEach(TradeProviderViewModel.Section.bsc.items, id: \.self) { item in
                SelectableSheetItemView<TradeProvider>(
                    viewModel: viewModel[item]
                )
            }
        }
        .sheetPaddingStyle()
    }
}

extension View {
    func sheetPaddingStyle() -> some View {
        self.padding([.leading, .trailing], 22)
            .padding(.bottom, 24)
            .padding(.top, 21)
            .background(Asset.Colors.Background.normal.asColor())
    }
}

struct SwapProviderListViewPreviews: PreviewProvider {
    static var previews: some View {
        SwapProviderListView(viewModel: TradeProviderViewModel())
    }
}
