//
//  DataProviderViewModel.swift
//  Maskbook
//
//  Created by yzj on 2021/8/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import WebExtension_Shim

final class DataProviderViewModel: ObservableObject {
    typealias DataProvider = WebExtension.Setting.DataProvider

    private var subModelMap: [DataProvider: ProviderViewModel<DataProvider>] = [:]
    private var subscriptionSet = Set<AnyCancellable>()
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings

    let dismissSignal = PassthroughSubject<Void, Never>()

    init() {
        let items: [DataProvider] = [
            .coinGecko,
            .coinMarketCap,
            .uniswapInfo
        ]

        for item in items {
            let subModel = ProviderViewModel(item: item, isSelected: false)
            subModel.selectedSignal
                .receive(on: DispatchQueue.main)
                .sink { [weak self] value in
                    self?.selectItem(value)
                }
                .store(in: &subscriptionSet)
            subModelMap[item] = subModel
        }

        publisherOfTrendingDataSource()
            .sink(receiveCompletion: { _ in
            }) { [weak self] dataprovider in
                self?.subModelMap[dataprovider]?.syncSelected(true)
                self?.settings.dataProvider = dataprovider
            }
            .store(in: &subscriptionSet)
    }

    private func publisherOfTrendingDataSource() -> AnyPublisher<DataProvider, Error> {
        GetTrendingDataSourceMWEMessage()
            .eraseToAnyPublisher()
            .compactMap { $0.dataSource }
            .eraseToAnyPublisher()
    }

    private func selectItem(_ item: DataProvider) {
        for model in subModelMap.values where model.item != item {
            model.syncSelected(false)
        }

        SetTrendingDataSourceMWEMessage.withPayload {
            .init(provider: item)
        }
        .eraseToAnyPublisher()
        .sink(receiveCompletion: { _ in
        }) { [weak self] _ in
            self?.settings.dataProvider = item
        }
        .store(in: &subscriptionSet)
        dismissSignal.send(())
    }

    subscript(_ dataProvider: DataProvider) -> ProviderViewModel<DataProvider> {
        get { subModelMap[dataProvider] ?? ProviderViewModel(item: .coinMarketCap, isSelected: false) }
        set { subModelMap[dataProvider] = newValue }
    }
}

extension MaskWebMessageResult {
    var dataSource: DataProvider? {
        guard let rawValue = result?.int,
              let provider = DataProvider(rawValue: rawValue) else { return nil }
        return provider
    }
}
