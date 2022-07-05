//
//  UserDefaults+extension.swift
//  Maskbook
//
//  Created by yzj on 2021/7/14.
//  Copyright © 2021 dimension. All rights reserved.
//

// swiftlint:disable file_length
import Combine
import Foundation
import OSLog
import SwiftUI
import UIKit

// @available(*, deprecated, message: "use UserDefaultSettings.shared to be able to work with Combine")
// swiftlint:disable prefixed_toplevel_constant
let maskUserDefaults = UserDefaults.shared
// swiftlint:enable prefixed_toplevel_constant

private extension UserDefaults {
    static let shared: UserDefaults = {
        if UIApplication.shared.isRunningUnitTest {
            // swiftlint:disable force_unwrapping
            return UserDefaults(suiteName: "io.mask.userDefaultTest11")!
            // swiftlint:enable force_unwrapping
        } else {
            let stand = UserDefaults.standard
            stand.addSuite(named: "group.io.mask")
            return stand
        }
    }()
}

enum UserDefaultSettingsKey: InjectValueKey {
    static var defaultInjectValue = UserDefaultSettings.shared
}

extension InjectValues {
    var userDefaultSettings: UserDefaultSettings {
        Self[UserDefaultSettingsKey.self]
    }
}

final class UserDefaultSettings {
    static let shared = UserDefaultSettings()

    private var userDefaults: UserDefaults
    private init(userDefaults: UserDefaults = UserDefaults.shared) {
        self.userDefaults = userDefaults
    }

    enum Keys: String, CaseIterable {
        case defaultAccountAddress = "mask_wallet_default_account_address"
        case enableBiometryID = "enable_biometry_id"
        case userInterfaceStyle = "user_interface_style"
        case dataProvider = "data_provider"
        case walletAssetProviderType = "wallet_asset_provider_type"
        case network
        case currency
        case personas
        case evaluatedPolicyDomainState = "evaluated_policy_domain_state"
        case recentlyAddress
        case passwordExpiredDate = "password_expired_date"
        case confirmedPluginRiskWarnings
        case hasBackupPassword
        case currentPersonaIdentifier = "current_persona_identifier"
        case currentProfileSocialPlatform = "current_profile_social_platform"
        case appVersion = "Maskbook.appVersion"
        case appBuild = "Maskbook.appBundle"
        case walletConnectSessionData = "wallet_connect_session_data"

        case remoteBackupPhoneNumber = "remote_backup_phoneNumber"
        case remoteBackupEmail = "remote_bacup_email"
        case backupPassword = "backup_password"
        case walletPassword = "wallet_password"
        case backupDate = "backup_date"
        case backupAlertDate = "backup_alert_date"

        case legacyWalletsImported = "legacy_wallets_imported"
        case walletDisplayBlockChain
        
        case indexedDBDataMigrated
        case beAwareOfPluginTip
        case jsResourceIsUsingBundle
        case jsDocumentResourceSelectedCommitHash
        case fileServicePolicyAccepted

        case backupFileDetectDate
        case onBoardFeatures
    }

    func removeAll() {
        Keys.allCases.forEach { userDefaults.removeObject(forKey: $0.rawValue) }

        // Adapt UserDefaultPublishers, currently four cases.
        // May add more cases in the future as demanded.
        currency = .usd
        network = BlockChainNetwork.default()
//        walletConnectAccountAddress = nil
        walletAssetProviderType = .zerion
        hasBackupPassword = false
        currentPesonaIdentifier = nil
        currentProfileSocialPlatform = .twitter
        remoteBackupEmail = nil
        remoteBackupPhoneNumber = nil
        backupPasswordData = nil
        walletPasswordData = nil
        backupDate = nil
        backupAlertDate = nil
        indexedDBDataMigrated = false

        fileServicePolicyAccepted = false
    }

    @OptionalUserDefault(key: .defaultAccountAddress)
    var defaultAccountAddress: String?

    @OptionalUserDefault(key: .backupPassword)
    var backupPasswordData: Data?

    @OptionalUserDefault(key: .walletPassword)
    var walletPasswordData: Data?

    @AssertionUserDefault<Bool, Data>(
        key: .enableBiometryID,
        assertionKey: .evaluatedPolicyDomainState,
        defaultValue: false
    )
    dynamic var enableBiometryID: Bool

    @ReactiveUserDefault(
        key: .userInterfaceStyle,
        defaultValue: UIUserInterfaceStyle.unspecified.rawValue
    )
    var customInterface: Int
    dynamic var customUserInterfaceStyle: UIUserInterfaceStyle {
        get { UIUserInterfaceStyle(rawValue: customInterface) ?? .unspecified }
        set { customInterface = newValue.rawValue }
    }

    @ReactiveUserDefault(
        key: .dataProvider,
        defaultValue: DataProvider.coinGecko.rawValue
    )
    var dataProviderValue: Int
    var dataProvider: DataProvider {
        get { DataProvider(rawValue: dataProviderValue) ?? .coinGecko }
        set { dataProviderValue = newValue.rawValue }
    }

    @OptionalUserDefault(key: .network)
    var networkData: Data?
    var network: BlockChainNetwork {
        get {
            guard let networkData = networkData,
                  let decodedData = try? JSONDecoder().decode(BlockChainNetwork.self, from: networkData)
            else {
                return BlockChainNetwork.default()
            }
            return decodedData
        }
        set {
            guard let value = try? JSONEncoder().encode(newValue) else {
                return
            }
            networkData = value
        }
    }

    /// Indicates the currency used to display the balance. Default value is **usd**
    var currency: Currency {
        get { Currency(rawValue: currencyString) ?? .usd }
        set { currencyString = newValue.rawValue }
    }

    @ReactiveUserDefault(key: .indexedDBDataMigrated, defaultValue: false)
    var indexedDBDataMigrated: Bool
    
    @ReactiveUserDefault(key: .currency, defaultValue: Currency.usd.rawValue)
    private var currencyString: String

    var walletAssetProviderType: WalletAssetProviderType {
        get { WalletAssetProviderType(rawValue: walletProvider) ?? .zerion }
        set { walletProvider = newValue.rawValue }
    }

    @ReactiveUserDefault(
        key: .walletAssetProviderType,
        defaultValue: WalletAssetProviderType.zerion.rawValue
    )
    var walletProvider: String

    @OptionalUserDefault(key: .evaluatedPolicyDomainState)
    var evaluatedPolicyDomainState: Data?

    @OptionalUserDefault(key: .recentlyAddress)
    var recentlyAddressData: Data?
    var recentlyAddresses: [RecentlyAddress] {
        get {
            guard let data = recentlyAddressData,
                  let datas = try? JSONDecoder().decode([RecentlyAddress]?.self, from: data)
            else {
                return []
            }
            return datas
        }
        set {
            if newValue.isEmpty {
                recentlyAddressData = nil
                return
            }
            if let data = try? JSONEncoder().encode(newValue) {
                recentlyAddressData = data
            } else {
                recentlyAddressData = nil
            }
        }
    }

    @ReactiveUserDefault(
        key: .beAwareOfPluginTip,
        defaultValue: false
    )
    var beAwareOfPluginTip: Bool

    func addRecentlyAddress(_ address: RecentlyAddress) {
        var recentlyAddresses = self.recentlyAddresses

        if recentlyAddresses.isEmpty {
            self.recentlyAddresses = [address]
            return
        }

        if recentlyAddresses.contains(address) {
            return
        }
        recentlyAddresses.append(address)
        self.recentlyAddresses = recentlyAddresses
    }

    @ReactiveUserDefault(key: .passwordExpiredDate, defaultValue: nil)
    var passwordExpiredDate: Date? {
        didSet {
            os_log(.debug, "[wallet-password] current expired date is: %s", passwordExpiredDate?.description ?? "nil")
        }
    }

    func resetPasswordExpiredDate() {
        passwordExpiredDate = Date().addingTimeInterval(30 * 60)
        os_log(.debug, "[wallet-password] reset wallet password expired date %s", passwordExpiredDate?.description ?? "nil")
    }
    
    func isPasswordExpried(_ expiredDate: Date? = nil) -> Bool {
        // fixed: Simultaneous accesses to 0x1068319f0, but modification requires exclusive access.
        guard let expiredDate = expiredDate ?? passwordExpiredDate else {
            // No payment password means it will not expire.
            // An expiration date will be set once the payment password is set.
            // For example, if you connect via wallet connect without a payment password, the payment password will not expire.
            return false
        }

        return expiredDate < Date()
    }

    // Risk warning moved out from plugins view, temporarily set this default to true
    @ReactiveUserDefault(key: .confirmedPluginRiskWarnings, defaultValue: [])
    var confirmedPluginRiskWarnings: [String]

    @ReactiveUserDefault(key: .hasBackupPassword, defaultValue: false)
    var hasBackupPassword: Bool

    @OptionalUserDefault(key: .currentPersonaIdentifier, defaultValue: nil)
    var currentPesonaIdentifier: String?

    @ReactiveUserDefault(
        key: .currentProfileSocialPlatform,
        defaultValue: ProfileSocialPlatform.twitter.rawValue
    )
    var currentProfileSocialPlatformString: Int

    var currentProfileSocialPlatform: ProfileSocialPlatform {
        get { ProfileSocialPlatform(rawValue: currentProfileSocialPlatformString) ?? .twitter }
        set { currentProfileSocialPlatformString = newValue.rawValue }
    }

    @OptionalUserDefault(key: .appVersion)
    var appVersion: String?

    @OptionalUserDefault(key: .appBuild)
    var appBuild: String?

    @OptionalUserDefault(key: .remoteBackupEmail)
    var remoteBackupEmail: String?

    @OptionalUserDefault(key: .remoteBackupPhoneNumber)
    var remoteBackupPhoneNumber: String?

    @OptionalUserDefault(key: .backupDate)
    var backupDate: Date?

    @OptionalUserDefault(key: .backupAlertDate)
    var backupAlertDate: Date?

    // Does the app have imported the legacy JS wallets
    @ReactiveUserDefault(key: .legacyWalletsImported, defaultValue: false)
    var legacyWalletsImported: Bool

    @OptionalUserDefault(key: .walletDisplayBlockChain)
    var walletDisplayBlockchainString: String?
    var walletDisplayBlockchain: WalletDisplayBlockChainType {
        get {
            guard let rawValueString = walletDisplayBlockchainString,
                  let displayBlockchain = WalletDisplayBlockChainType(rawValue: rawValueString)
            else {
                return WalletDisplayBlockChainType.all
            }
            return displayBlockchain
        }
        set {
            walletDisplayBlockchainString = newValue.rawValue
        }
    }
    
    @ReactiveUserDefault(key: .jsDocumentResourceSelectedCommitHash, defaultValue: "")
    var jsDocumentResourceSelectedCommitHash: String
    
    @ReactiveUserDefault(key: .jsResourceIsUsingBundle, defaultValue: true)
    var jsResourceIsUsingBundle: Bool
    
    @OptionalUserDefault(key: .backupFileDetectDate)
    var backupFileDetectDate: Date?

    @ReactiveUserDefault(key: .fileServicePolicyAccepted, defaultValue: false)
    var fileServicePolicyAccepted: Bool

    @ReactiveUserDefault(key: .onBoardFeatures, defaultValue: "")
    var onBoardFeatures: String
}

extension UserDefaultSettings {
    func changeNetwork(network: BlockChainNetwork, address: String?) {
        defaultAccountAddress = address
        self.network = network
        if self.walletDisplayBlockchain != .all {
            self.walletDisplayBlockchain = .blockchain(network)
        }
    }

    func checkOnboardFeature(_ feature: OnboardFeature) {
        guard !onBoardFeatures.contains("\(feature.rawValue)") else {
            return
        }
        onBoardFeatures.append("\(feature.rawValue),")
    }

    var networkPubisher: AnyPublisher<BlockChainNetwork, Never> {
        $networkData
            .compactMap { $0 }
            .decode(type: BlockChainNetwork?.self, decoder: JSONDecoder())
            .replaceError(with: nil)
            .compactMap { $0 }
            .share()
            .eraseToAnyPublisher()
    }

    var displayBlockChainPublisher: AnyPublisher<WalletDisplayBlockChainType, Never> {
        $walletDisplayBlockchainString
            .map {
                guard let blockchainString = $0,
                      let blockchain = WalletDisplayBlockChainType(rawValue: blockchainString)
                else {
                    return WalletDisplayBlockChainType.all
                }
                return blockchain
            }
            .share()
            .eraseToAnyPublisher()
    }

    var defaultAccountAddressPublisher: AnyPublisher<String?, Never> {
        // syntx of callAsFunction
        // _defaultAccountAddress refers to OptionalUserDefault<String>
        $defaultAccountAddress
            .share()
            .eraseToAnyPublisher()
    }

    var currencyPublisher: AnyPublisher<Currency, Never> {
        // syntx of propertyWrapper
        // $ + `variableName` refers to projectedValue of the propertyWrapper
        $currencyString
            .compactMap { Currency(rawValue: $0) }
            .share()
            .eraseToAnyPublisher()
    }

    var walletAssetProviderTypePublisher: AnyPublisher<WalletAssetProviderType, Never> {
        $walletProvider
            .compactMap { WalletAssetProviderType(rawValue: $0) }
            .share()
            .eraseToAnyPublisher()
    }

    var recentlyAddressPublisher: AnyPublisher<[RecentlyAddress]?, Never> {
        $recentlyAddressData
            .compactMap { $0 }
            .decode(type: [RecentlyAddress]?.self, decoder: JSONDecoder())
            .replaceError(with: nil)
            .share()
            .eraseToAnyPublisher()
    }

    var currentPersonaIdentifierPublisher: AnyPublisher<String?, Never> {
        $currentPesonaIdentifier
            .share()
            .eraseToAnyPublisher()
    }

    var currentProfileSocialPlatformPublisher: AnyPublisher<ProfileSocialPlatform, Never> {
        $currentProfileSocialPlatformString
            .compactMap { ProfileSocialPlatform(rawValue: $0) }
            .removeDuplicates()
            .share()
            .eraseToAnyPublisher()
    }
    
    var hasRiskConfirmed: Bool {
        get {
            guard let address = defaultAccountAddress else { return false }
            return confirmedPluginRiskWarnings.contains(address)
        }
    }
    
    func confirmRiskWarning(address: String, pluginId: String?) {
        defer {
            DAppService.sendRiskWarningConfirm(address: address, pluginId: pluginId)
        }
        
        guard !confirmedPluginRiskWarnings.contains(address) else { return }
        confirmedPluginRiskWarnings.append(address)
    }
}

/// As for access control, the following propertyWrappers must be kept in this file

@propertyWrapper
@dynamicMemberLookup
struct OptionalUserDefault<T: Equatable> {
    private let key: String
    private var userDefaults: UserDefaults

    private(set) var projectedValue: CurrentValueSubject<T?, Never>
    var wrappedValue: T? {
        get { projectedValue.value }

        set {
            projectedValue.value = newValue
            guard newValue != nil else {
                userDefaults.removeObject(forKey: key)
                return
            }
            userDefaults.set(newValue, forKey: key)
        }
    }

    // swiftlint:disable function_default_parameter_at_end
    /// OptionalUserDefault initializer
    /// - Parameters:
    ///   - wrappedValue: hookedValue
    ///   - key: storeKey
    ///   - defaultValue: defaultValue
    ///   - userDefaults: usually use UserDefaults.shared, except when running tests
    init(
        wrappedValue: T? = nil,
        key: String,
        defaultValue: T? = nil,
        userDefaults: UserDefaults = .shared
    ) {
        let cachedValue = userDefaults.value(forKey: key) as? T
        let value: T? = wrappedValue ?? cachedValue ?? defaultValue
        self.projectedValue = CurrentValueSubject(value)
        self.key = key
        self.userDefaults = userDefaults
    }

    init(
        wrappedValue: T? = nil,
        key: UserDefaultSettings.Keys,
        defaultValue: T? = nil,
        userDefaults: UserDefaults = .shared
    ) {
        self.init(wrappedValue: wrappedValue, key: key.rawValue, defaultValue: defaultValue, userDefaults: userDefaults)
    }

    // swiftlint:enable function_default_parameter_at_end

    // in case needs to observe some value of T
    // implement callAsFunction and dynamicMemberLookup
    subscript<Value>(dynamicMember keyPath: KeyPath<T?, Value>) -> AnyPublisher<Value, Never> {
        projectedValue
            .map(keyPath)
            .eraseToAnyPublisher()
    }

    func callAsFunction<Value>(_ keyPath: KeyPath<T?, Value>) -> AnyPublisher<Value, Never> {
        self[dynamicMember: keyPath]
    }
}

@propertyWrapper
@dynamicMemberLookup
struct ReactiveUserDefault<T: Equatable> {
    private let key: String
    private var userDefaults: UserDefaults

    private(set) var projectedValue: CurrentValueSubject<T, Never>
    var wrappedValue: T {
        get { projectedValue.value }
        set {
            projectedValue.value = newValue
            userDefaults.set(newValue, forKey: key)
        }
    }

    /// ReactiveUserDefault initializer
    /// - Parameters:
    ///   - key: storeKey
    ///   - defaultValue: defaultValue
    ///   - userDefaults: usually use UserDefaults.shared, except when running tests
    init(
        key: String,
        defaultValue: T,
        userDefaults: UserDefaults = .shared
    ) {
        let value: T = {
            let cachedValue = userDefaults.value(forKey: key) as? T
            return cachedValue ?? defaultValue
        }()
        self.projectedValue = CurrentValueSubject(value)
        self.key = key
        self.userDefaults = userDefaults
    }

    init(
        key: UserDefaultSettings.Keys,
        defaultValue: T,
        userDefaults: UserDefaults = .shared
    ) {
        self.init(key: key.rawValue, defaultValue: defaultValue, userDefaults: userDefaults)
    }

    // in case needs to observe some value of T
    // implement callAsFunction and dynamicMemberLookup
    subscript<Value>(dynamicMember keyPath: KeyPath<T, Value>) -> AnyPublisher<Value, Never> {
        projectedValue
            .map(keyPath)
            .eraseToAnyPublisher()
    }

    func callAsFunction<Value>(_ keyPath: KeyPath<T, Value>) -> AnyPublisher<Value, Never> {
        self[dynamicMember: keyPath]
    }
}

@propertyWrapper
struct AssertionUserDefault<T: Equatable, V> {
    private let key: String
    private let assertionKey: String
    private let defaultValue: T
    private var userDefaults: UserDefaults

    private(set) var projectedValue: CurrentValueSubject<T, Never>
    var wrappedValue: T {
        get {
            // will be removed when adapted maskUserDefaults singleton
            // keep getter only return value
            if useDefaultValue {
                if defaultValue != projectedValue.value {
                    projectedValue.value = defaultValue
                }
                return defaultValue
            }
            return projectedValue.value
        }
        set {
            if useDefaultValue {
                if projectedValue.value != defaultValue {
                    projectedValue.value = defaultValue
                }
                return
            }
            projectedValue.value = newValue
            userDefaults.set(newValue, forKey: key)
        }
    }

    private var useDefaultValue: Bool {
        let assertValue = userDefaults.value(forKey: assertionKey) as? V
        return assertValue == nil
    }

    /// ReactiveUserDefault initializer
    /// - Parameters:
    ///   - key: storeKey
    ///   - defaultValue: defaultValue
    ///   - userDefaults: usually use UserDefaults.shared, except when running tests
    init(
        key: String,
        assertionKey: String,
        defaultValue: T,
        userDefaults: UserDefaults = .shared
    ) {
        self.key = key
        self.assertionKey = assertionKey
        self.userDefaults = userDefaults
        self.defaultValue = defaultValue
        let useDefaultValue: Bool = {
            let assertValue = userDefaults.value(forKey: assertionKey) as? V
            return assertValue == nil
        }()
        let value: T = {
            if useDefaultValue {
                return defaultValue
            }
            let cachedValue = userDefaults.value(forKey: key) as? T
            return cachedValue ?? defaultValue
        }()

        projectedValue = CurrentValueSubject(value)
    }

    init(
        key: UserDefaultSettings.Keys,
        assertionKey: UserDefaultSettings.Keys,
        defaultValue: T,
        userDefaults: UserDefaults = .shared
    ) {
        self.init(
            key: key.rawValue,
            assertionKey: assertionKey.rawValue,
            defaultValue: defaultValue,
            userDefaults: userDefaults
        )
    }
    // in case needs to observe some value of T
    // implement callAsFunction and dynamicMemberLookup
    subscript<Value>(dynamicMember keyPath: KeyPath<T, Value>) -> AnyPublisher<Value, Never> {
        projectedValue
            .map(keyPath)
            .eraseToAnyPublisher()
    }

    func callAsFunction<Value>(_ keyPath: KeyPath<T, Value>) -> AnyPublisher<Value, Never> {
        self[dynamicMember: keyPath]
    }
}

// swiftlint:enable file_length
