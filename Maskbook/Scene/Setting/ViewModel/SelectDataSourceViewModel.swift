//
//  SelectDataSourceViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/3.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class SelectDataSourceViewModel: SelectItemViewModelProtocol {
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    private var disposeBag = Set<AnyCancellable>()
    
    static let DataSources: [DataProvider] = [.coinGecko, .coinMarketCap, .uniswapInfo]

    func titles() -> [String] {
        return SelectDataSourceViewModel.DataSources.map({ $0.title })
    }
    
    func selectedIndex() -> Int? {
        SelectDataSourceViewModel.DataSources.firstIndex(of: settings.dataProvider)
    }
    
    func currentValue() -> String? {
        return settings.dataProvider.title
    }
    
    func select(index: Int) {
        let selectedItem = SelectDataSourceViewModel.DataSources[index]
        SetTrendingDataSourceMWEMessage.withPayload {
            .init(provider: selectedItem)
        }
        .eraseToAnyPublisher()
        .sink(receiveCompletion: { _ in
        }) { [weak self] _ in
            self?.settings.dataProvider = selectedItem
        }
        .store(in: &disposeBag)
    }
}
