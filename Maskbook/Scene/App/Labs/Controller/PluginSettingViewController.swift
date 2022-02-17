import Combine
import SwiftUI
import UIKit

final class PluginSettingViewController: BaseViewController {
    private var subscriptionSet = Set<AnyCancellable>()
    private lazy var viewModel = LabsConfigViewModel()

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    override func viewDidLoad() {
        super.viewDidLoad()
        title = L10n.Scene.App.Title.pluginsSetting
    }

    override func buildContent() {
        super.buildContent()
        let controller = UIHostingController(rootView: PluginConfigListView(viewModel: viewModel))
        self.addChild(controller)
        self.view.addSubview(controller.view)
        controller.view.snp.makeConstraints { $0.edges.equalToSuperview() }
        controller.view.backgroundColor = Asset.Colors.Background.normal.color
    }

    override func buildEvent() {
        super.buildEvent()
        viewModel.exploreSignal
            .asDriver()
            .sink { [weak self] plugin in
                switch plugin {
                case .transaction: self?.handleTransak()
                default: break
                }
            }
            .store(in: &subscriptionSet)

        viewModel.settingSignal
            .asDriver()
            .flatMap { [weak self] in
                self?.handlePluginSetting($0) ?? Empty().eraseToAnyPublisher()
            }
            .fireAndIgnore()
            .store(in: &subscriptionSet)
    }

    private func handleTransak() {
        self.coordinator.present(scene: .showTransakIntegration, transition: .modal())
    }

    private func handlePluginSetting(_ plugin: PluginType) -> AnyPublisher<Void, Never> {
        switch plugin {
        case .swap:
            return LazyFuture { [weak self] promise in
                guard let self = self else {
                    promise(.voidSuccess)
                    return
                }
                let controller = TradeProviderSheet()
                controller.dismissAction = {
                    promise(.voidSuccess)
                }
                controller.show(by: self)
            }
            .eraseToAnyPublisher()

        case .marketTrend:
            return LazyFuture { [weak self] promise in
                guard let self = self else {
                    promise(.voidSuccess)
                    return
                }
                let controller = MarketDataproviderSheet()
                controller.dismissAction = {
                    promise(.voidSuccess)
                }
                controller.show(by: self)
            }
            .eraseToAnyPublisher()

        default: return Empty().eraseToAnyPublisher()
        }
    }
}
