//
//  UserDefaults.swift
//  Maskbook
//
//  Created by MainasuK Cirno on 2020/3/4.
//  Copyright © 2020 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

enum UserDefaultPublishers {
    // @available(*, deprecated, message: "use UserDefaultSettings.shared.networkPubisher instead")
    static var network: AnyPublisher<BlockChainNetwork, Never> {
        UserDefaultSettings.shared.networkPubisher
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.defaultAccountAddressPublisher instead")
    static var defaultAccountAddress: AnyPublisher<String?, Never> {
        UserDefaultSettings.shared.defaultAccountAddressPublisher
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.currencyPublisher instead")
    static var currency: AnyPublisher<Currency, Never> {
        UserDefaultSettings.shared.currencyPublisher
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.walletAssetProviderTypePublisher instead")
    static var walletAssetProviderType: AnyPublisher<WalletAssetProviderType, Never> {
        UserDefaultSettings.shared.walletAssetProviderTypePublisher
    }

    static var recentlyAddress: AnyPublisher<[RecentlyAddress]?, Never> {
        UserDefaultSettings.shared.recentlyAddressPublisher
    }
}

extension UserDefaults {
    typealias Keys = UserDefaultSettings.Keys

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.removeAll() instead")
    func removeAll() {
        UserDefaultSettings.shared.removeAll()
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.didPresentWizard instead")
    // Indicates whether or not the user has seen the onboarding. Default value is **false**
    var didPresentWizard: Bool {
        get { UserDefaultSettings.shared.didPresentWizard }
        set { UserDefaultSettings.shared.didPresentWizard = newValue }
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.defaultAccountAddress instead")
    var defaultAccountAddress: String? {
        UserDefaultSettings.shared.defaultAccountAddress
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.enableBiometryID instead")
    dynamic var enableBiometryID: Bool {
        get { UserDefaultSettings.shared.enableBiometryID }
        set { UserDefaultSettings.shared.enableBiometryID = newValue }
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.customUserInterfaceStyle instead")
    dynamic var customUserInterfaceStyle: UIUserInterfaceStyle {
        get { UserDefaultSettings.shared.customUserInterfaceStyle }
        set { UserDefaultSettings.shared.customUserInterfaceStyle = newValue }
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.network instead")
    var network: BlockChainNetwork {
        get { UserDefaultSettings.shared.network }
        set { UserDefaultSettings.shared.network = newValue }
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.currency instead")
    /// Indicates the currency used to display the balance. Default value is **usd**
    var currency: Currency {
        get { UserDefaultSettings.shared.currency }
        set { UserDefaultSettings.shared.currency = newValue }
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.walletAssetProviderType instead")
    var walletAssetProviderType: WalletAssetProviderType {
        get { UserDefaultSettings.shared.walletAssetProviderType }
        set { UserDefaultSettings.shared.walletAssetProviderType = newValue }
    }

    // @available(*, deprecated, message: "use UserDefaultSettings.shared.evaluatedPolicyDomainState instead")
    var evaluatedPolicyDomainState: Data? {
        get { UserDefaultSettings.shared.evaluatedPolicyDomainState }
        set { UserDefaultSettings.shared.evaluatedPolicyDomainState = newValue }
    }

    var recentlyAddresses: [RecentlyAddress] {
        get { UserDefaultSettings.shared.recentlyAddresses }
        set { UserDefaultSettings.shared.recentlyAddresses = newValue }
    }

    func addRecentlyAddress(address: RecentlyAddress) {
        UserDefaultSettings.shared.addRecentlyAddress(address)
    }

    var passwordExpiryDate: Date? {
        get { UserDefaultSettings.shared.passwordExpiredDate }
        set { UserDefaultSettings.shared.passwordExpiredDate = newValue }
    }

    func resetPasswordExpiryDate() {
        UserDefaultSettings.shared.resetPasswordExpiredDate()
    }

    func isPasswordExpried() -> Bool {
        UserDefaultSettings.shared.isPasswordExpried()
    }
}
