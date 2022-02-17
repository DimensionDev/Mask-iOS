//
//  WelcomeViewController.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import SnapKit
import UIKit
import WebExtension_Shim

class WelcomeViewController: BaseViewController {
    private(set) var indicatorView = MaskLoadingIndicator()

    @InjectedProvider(\.maskMessageRelay)
    private var maskMessageRelay: MaskMessageRelay
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    private var subscriptionSet = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        modalPresentationStyle = .fullScreen

        view.addSubview(indicatorView)
        indicatorView.snp.makeConstraints {
            $0.centerX.equalToSuperview()
            $0.centerY.equalToSuperview().offset(-15)
            $0.size.equalTo(27)
        }
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        indicatorView.startAnimation()
        
        // If all data (legacy wallets info and indexedDB data) has migrated to
        // native side, we do not need to wait for the extension JS scripts to
        // finish executing
        let needToWaitExtensionFinishLoaded =
        !settings.legacyWalletsImported || !settings.indexedDBDataMigrated
        
        if needToWaitExtensionFinishLoaded {
            NotificationCenter.default.publisher(for: Notification.Name.extensionTabDidFinishLoad)
                .flatMap { [weak self] _ -> AnyPublisher<[LegacyWalletInfo], Error> in
                    if self?.settings.legacyWalletsImported == false {
                        return WebExtension.Wallet.GetLegacyWallets()
                            .eraseToAnyPublisher()
                            .compactMap {
                                guard let json = $0.result else {
                                    return [LegacyWalletInfo]()
                                }
                                return LegacyWalletInfo.legacyWallets(fromJson: json)
                            }
                            .handleEvents(receiveOutput: { legacyWallets in
                                WalletCoreService.shared.importLegacyWallets(legacyWallets)
                                self?.settings.legacyWalletsImported = true
                            })
                            .eraseToAnyPublisher()
                    } else {
                        return Just([]).setFailureType(to: Error.self).eraseToAnyPublisher()
                    }
                }
                .flatMap { [weak self] _ -> AnyPublisher<IndexedDBAllRecord?, Error> in
                    if self?.settings.indexedDBDataMigrated == false {
                        return WebExtension.Setting.GetIndexedDBRecordsMessage()
                            .eraseToAnyPublisher()
                            .compactMap {
                                guard let json = $0.result,
                                      let jsonStringData = json.rawString()?.data(using: .utf8),
                                      let record = try? JSONDecoder().decode(IndexedDBAllRecord.self,
                                                                             from: jsonStringData) else {
                                    return nil
                                }
                                IndexedDBDataMigrator.migrateToCoreData(record)
                                self?.settings.indexedDBDataMigrated = true
                                return record
                            }
                            .eraseToAnyPublisher()
                    } else {
                        return Just(nil).setFailureType(to: Error.self).eraseToAnyPublisher()
                    }
                }
                .replaceError(with: nil)
                .receive(on: DispatchQueue.main)
                .sink { _ in
                    self.dismiss(animated: false, completion: nil)
                }
                .store(in: &subscriptionSet)
        } else {
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                self.dismiss(animated: false, completion: nil)
            }
        }
    }
}
