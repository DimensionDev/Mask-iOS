//
//  MarketTrendProviderView.swift
//  Maskbook
//
//  Created by yzj on 2021/8/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct MarketTrendProviderView: View {
    @ObservedObject
    private var viewModel: DataProviderViewModel

    init(viewModel: DataProviderViewModel) {
        self.viewModel = viewModel
    }

    private var items: [DataProvider] {
        return [
            .coinGecko,
            .coinMarketCap,
            .uniswapInfo
        ]
    }

    var body: some View {
        VStack(spacing: 16) {
            ForEach(items, id: \.self) { item in
                SelectableSheetItemView(viewModel: viewModel[item])
            }
        }
        .sheetPaddingStyle()
    }
}

struct MarketTrendProviderViewPreviews: PreviewProvider {
    static var previews: some View {
        MarketTrendProviderView(viewModel: DataProviderViewModel())
    }
}
