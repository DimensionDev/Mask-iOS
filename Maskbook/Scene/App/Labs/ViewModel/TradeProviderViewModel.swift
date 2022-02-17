import Combine
import SwiftUI
import WebExtension_Shim

final class TradeProviderViewModel: ObservableObject {
    typealias TradeProvider = WebExtension.Setting.TradeProvider

    private var subViewModelMap: [TradeProvider: ProviderViewModel<TradeProvider>] = [:]
    private var sectionModelMap: [Section: [ProviderViewModel<TradeProvider>]] = [:]
    private var subscriptionSet = Set<AnyCancellable>()

    let dismissSignal = PassthroughSubject<Void, Never>()

    init() {
        for section in Section.allCases {
            var subModels: [ProviderViewModel<TradeProvider>] = []
            for item in section.items {
                let viewModel = ProviderViewModel(item: item, isSelected: false)
                viewModel.selectedSignal
                    .receive(on: DispatchQueue.main)
                    .sink { [weak self] value in
                        self?.selectItem(value)
                    }
                    .store(in: &subscriptionSet)
                
                subViewModelMap[item] = viewModel
                subModels.append(viewModel)
            }
            sectionModelMap[section] = subModels
        }

        publisherOfNetworkTypes()
            .sink(receiveCompletion: { _ in
            }) { [weak self] eth, poly, bsc in
                [eth, poly, bsc].forEach {
                    self?.subViewModelMap[$0]?.syncSelected(true)
                }
            }
            .store(in: &subscriptionSet)
    }

    private func selectItem(_ item: TradeProvider) {
        guard let identifier = item.sectionIndetifier,
              let subModels = sectionModelMap[identifier] else { return }
        for model in subModels where model.item != item {
            model.syncSelected(false)
        }

        SetNetworkTraderProviderMWEMessage.withPayload {
            .init(
                network: item.networkType,
                provider: item
            )
        }
        .eraseToAnyPublisher()
        .fireAndIgnore()
        .store(in: &subscriptionSet)
        dismissSignal.send(())
    }

    typealias NetworkTuple = (
        WebExtension.Setting.TradeProvider,
        WebExtension.Setting.TradeProvider,
        WebExtension.Setting.TradeProvider
    )

    private func publisherOfNetworkTypes() -> AnyPublisher<NetworkTuple, Error> {
        let ethRequest = GetNetworkTraderProviderMWEMessage.withPayload {
            .init(network: .ethereum)
        }
        let polyRequest = GetNetworkTraderProviderMWEMessage.withPayload {
            .init(network: .polygon)
        }
        let bscRequest = GetNetworkTraderProviderMWEMessage.withPayload {
            .init(network: .binance)
        }
        return Publishers.CombineLatest3(
            ethRequest.eraseToAnyPublisher().compactMap { $0.tradeProvider },
            polyRequest.eraseToAnyPublisher().compactMap { $0.tradeProvider },
            bscRequest.eraseToAnyPublisher().compactMap { $0.tradeProvider }
        )
        .eraseToAnyPublisher()
    }

    subscript(_ tradeProvider: WebExtension.Setting.TradeProvider) -> ProviderViewModel<TradeProvider> {
        get { subViewModelMap[tradeProvider] ?? ProviderViewModel(item: .uniswap, isSelected: false) }
        set { subViewModelMap[tradeProvider] = newValue }
    }
}

extension TradeProviderViewModel {
    enum Section: String, CaseIterable {
        case eth = "ETH"
        case polygon
        case bsc

        var items: [WebExtension.Setting.TradeProvider] {
            switch self {
            case .eth: return [
                .uniswap,
                .sushiswap,
                .zrx
            ]

            case .polygon: return [.quickswap]
            case .bsc: return [.pancakeswap]
            }
        }
    }
}

fileprivate extension MaskWebMessageResult {
    var tradeProvider: WebExtension.Setting.TradeProvider? {
        guard let rawValue = result?.int,
              let tradeProvider = WebExtension.Setting.TradeProvider(rawValue: rawValue) else {
            return nil
        }
        return tradeProvider
    }
}

fileprivate extension WebExtension.Setting.TradeProvider {
    var sectionIndetifier: TradeProviderViewModel.Section? {
        switch self {
        case .uniswap,
             .sushiswap,
             .zrx:
            return .eth

        case .quickswap: return .polygon
        case .pancakeswap: return .bsc
        default: return nil
        }
    }

    var networkType: WebExtension.Setting.NetworkType {
        switch self {
        case .uniswap,
             .sushiswap,
             .zrx:
            return .ethereum

        case .quickswap: return .polygon
        case .pancakeswap: return .binance
        default: return .ethereum
        }
    }
}
