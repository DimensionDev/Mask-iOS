//
//  PluginViewModel.swift
//  Maskbook
//
//  Created by yzj on 2021/8/9.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

final class PluginViewModel: ObservableObject {
    let plugin: PluginType

    private(set) var settingSignal = PassthroughSubject<PluginType, Never>()
    private(set) var explorSignal = PassthroughSubject<PluginType, Never>()
    private(set) var enabledSignal = PassthroughSubject<PluginStatus, Never>()

    @Published
    var enabled: Bool {
        didSet {
            if syncing { return }
            if rollBacked { return }
            syncPluginEnableStatus()
        }
    }

    /// This is flag marked as syncing data with js
    private var syncing = false
    /// This is flag when risk warning is unconfirmed, should fallback enabled value to false
    private var rollBacked = false

    private var subscription = Set<AnyCancellable>()

    @InjectedProvider(\.userDefaultSettings)
    private var userSetting

    init(plugin: PluginType, enabled: Bool) {
        self.plugin = plugin
        self.enabled = enabled
        queryPluginEnableStatus()
    }

    private func queryPluginEnableStatus() {
        subscription.removeAll()
        GetPluginStatusMWEMessage.withPayload {
            .init(pluginID: self.plugin.jsPluginId)
        }
        .eraseToAnyPublisher()
        .compactMap { $0.result?.bool }
        .asDriver()
        .sink(receiveCompletion: { _ in
        }) { [weak self] enabled in
            self?.syncing = true
            if self?.enabled != enabled {
                self?.enabled = enabled
            }
            self?.syncing = false
        }
        .store(in: &subscription)
    }

    private func updatePluginStatus() {
        subscription.removeAll()
        SetPluginStatusMWEMessage.withPayload {
            .init(pluginID: self.plugin.jsPluginId, enabled: self.enabled)
        }
        .eraseToAnyPublisher()
        .asDriver()
        .fireAndIgnore()
        .store(in: &subscription)
    }

    private func syncPluginEnableStatus() {
        if userSetting.hasRiskConfirmed {
            // if risk is awared, just need to notify js
            updatePluginStatus()
            return
        }

        // if risk is unawared, enabled need to be set to fasle
        rollBacked = true
        // now enabled is true, need to display risk warning alert
        let info = PluginStatus(plugin: plugin, isEnabled: enabled)
        enabledSignal.send(info)
        enabled = false
        rollBacked = false
        updatePluginStatus()
    }
}
