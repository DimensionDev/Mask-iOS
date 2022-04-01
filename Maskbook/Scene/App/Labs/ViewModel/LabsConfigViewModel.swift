import Combine
import Foundation

struct PluginStatus {
    let plugin: PluginType
    let isEnabled: Bool
}

final class LabsConfigViewModel: ObservableObject {
    private let pluginMaps: [PluginType: PluginViewModel]

    private(set) var settingSignal = PassthroughSubject<PluginType, Never>()
    private(set) var exploreSignal = PassthroughSubject<PluginType, Never>()
    private var enabledSignal = PassthroughSubject<PluginStatus, Never>()

    private(set) var subscriptionSet = Set<AnyCancellable>()

    @InjectedProvider(\.userDefaultSettings)
    private var userSetting

    private var pluginAlreadEnabled = false

    /// The first plugin user attempt to enable
    private var cachedEnablePlugin: PluginStatus?

    @Published
    private(set) var beAwareOfPluginTip: Bool

    init() {

        @InjectedProvider(\.userDefaultSettings)
        var localSettings

        self.beAwareOfPluginTip = localSettings.beAwareOfPluginTip

        pluginMaps = PluginType.allCases.reduce(into: [:]) {
            let viewModel = PluginViewModel(plugin: $1, enabled: false)
            $0[$1] = viewModel
        }
        buildPluginExploreAndEnableEvent()
        buildPluginCachEnableEventStream()
        buildPluginRiskWarningEventStream()
    }

    private func buildPluginExploreAndEnableEvent() {
        let settingSignals = pluginMaps.values.map { $0.settingSignal }
        Publishers.MergeMany(settingSignals)
            .eraseToAnyPublisher()
            .bind(to: \.settingSignal, on: self)
            .store(in: &subscriptionSet)

        let explorSignals = pluginMaps.values.map(\.explorSignal)
        Publishers.MergeMany(explorSignals)
            .eraseToAnyPublisher()
            .bind(to: \.exploreSignal, on: self)
            .store(in: &subscriptionSet)

        let enableSignals = pluginMaps.values.map { $0.enabledSignal }
        Publishers.MergeMany(enableSignals)
            .eraseToAnyPublisher()
            .bind(to: \.enabledSignal, on: self)
            .store(in: &subscriptionSet)
    }

    private func buildPluginCachEnableEventStream() {
        enabledSignal
            .asDriver()
            .sink { [weak self] enabledPlugin in
                guard let self = self,
                      enabledPlugin.isEnabled,
                      !self.pluginAlreadEnabled else { return }
                // record plugin user is attempting to enable
                self.cachedEnablePlugin = enabledPlugin
//                self.mainCoordinator.present(scene: .pluginRiskWarning, transition: .popup)
            }
            .store(in: &subscriptionSet)
    }

    private func buildPluginRiskWarningEventStream() {
        let riskWarningSignal = userSetting.$pluginRiskWarningAwared
            .compactMap { [weak self] accounts -> Bool in
                // Avoiding to use `hasRiskConfirmed`.
                // If use `hasRiskConfirmed` here will cause a crash as accessing `pluginRiskWarningAwared` simultaneously.
                guard let self = self else { return false }
                guard let address = self.userSetting.defaultAccountAddress else {
                    return false
                }
                return accounts.contains(address)
            }
            .asDriver()
            .share()

        riskWarningSignal
            .assign(to: \.pluginAlreadEnabled, on: self)
            .store(in: &subscriptionSet)

        riskWarningSignal
            .sink { [weak self] awared in
                guard let self = self else { return }

                guard awared,
                      let pluginInfo = self.cachedEnablePlugin else {
                    return
                }
                // if user confirmed, enable the cachedPlugin
                self[pluginInfo.plugin].enabled = true
            }
            .store(in: &subscriptionSet)


    }

    func pluginTipBeViewed() {
        beAwareOfPluginTip = true
        userSetting.beAwareOfPluginTip = true
    }

    subscript(plugin: PluginType) -> PluginViewModel {
        pluginMaps[plugin] ?? PluginViewModel(plugin: .fileService, enabled: false)
    }
}
