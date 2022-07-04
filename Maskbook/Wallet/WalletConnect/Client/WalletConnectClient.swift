//
//  WalletConnectClient.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/9/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import WalletConnectSwift

// swiftlint:disable force_unwrapping function_parameter_count line_length
class WalletConnectClient {
    static let bridgeURL = URL(string: "https://safe-walletconnect.gnosis.io")!
    static func iconURLForWallet(id: String) -> String {
        "https://registry.walletconnect.org/logo/md/\(id).jpeg"
    }
    
    static let chainListURL = URL(string: "https://chainid.network/chains.json")!
    
    static let safeKeyPrefix = "gnosissafe".data(using: .utf8)!.toHexString()
    
    static func connectWithInstalledWallet(_ installedWallet: InstalledWallet) {
        let link = installedWallet.universalLink.isEmpty ? installedWallet.scheme : installedWallet.universalLink
        let connectionURL = Self.shared.connectToWallet(link: link)
        
        // we need a delay so that WalletConnectClient can send handshake request
        DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(1_000)) {
            UIApplication.shared.open(connectionURL, options: [:], completionHandler: nil)
        }
    }
    
    static let shared = WalletConnectClient()
    
    lazy var delegate = WalletConnectClientUIDelegate(walletConnectClient: self)
    
    let didFailToConnectSubject = PassthroughSubject<(client: Client, url: WCURL), Never>()
    let didConnectSubject = PassthroughSubject<(client: Client, session: Session), Never>()
    let didDisconnectSubject = PassthroughSubject<(client: Client, session: Session), Never>()
    
    @InjectedProvider(\.userDefaultSettings)
    var userSetting
    
    var client: Client?
    var session: Session?
    
    var disposeBag = Set<AnyCancellable>()
    
    let currentSelectedBlockchainNetworkSubject = CurrentValueSubject<BlockChainNetwork, Never>(.eth)
    var connectingUrlSubject = CurrentValueSubject<String?, Never>(nil)
    
    var isStartingNewConnection = false
    
    init() {
        userSetting.defaultAccountAddressPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.reconnectIfNeeded()
            }
            .store(in: &disposeBag)
    }
    
    func disconnect(session: Session) {
        try? client?.disconnect(from: session)
        self.session = nil
        removeAccountFromSession(session: session)
    }
    
    func connect() -> WCURL {
        let randomKey: String = {
            if let key = try? self.randomKey() {
                return key
                    .replacingCharacters(in: ..<Self.safeKeyPrefix.endIndex, with: Self.safeKeyPrefix)
            } else {
                return self.randomString(length: 32)
                    .replacingCharacters(in: ..<Self.safeKeyPrefix.endIndex, with: Self.safeKeyPrefix)
            }
        }()
        let wcUrl = WCURL(topic: UUID().uuidString,
                          bridgeURL: WalletConnectClient.bridgeURL,
                          key: randomKey)
        let clientMeta = Session.ClientMeta.maskWalletMeta
        let chainID = currentSelectedBlockchainNetworkSubject.value.networkId
        let dAppInfo = Session.DAppInfo(peerId: UUID().uuidString, peerMeta: clientMeta, chainId: Int(chainID))
        client = Client(delegate: self, dAppInfo: dAppInfo)
        
        try? client?.connect(to: wcUrl)
        isStartingNewConnection = true
        connectingUrlSubject.value = wcUrl.absoluteString
        return wcUrl
    }
    
    /// https://docs.walletconnect.org/mobile-linking#for-ios
    func connectToWallet(link: String) -> URL {
        let wcUrl = connect()
        let uri = wcUrl.fullyPercentEncodedStr
        var delimiter: String
        if link.contains("http") {
            delimiter = "/"
        } else {
            delimiter = "//"
        }
        let urlStr = "\(link)\(delimiter)wc?uri=\(uri)"
        return URL(string: urlStr)!
    }
    
    func reconnectIfNeeded() {
        guard let account = WalletCoreService.shared.getCurrentAccount() else { return }
        guard let session = account.session else { return }
        if isActiveSession(session) {
            return
        }
        client = Client(delegate: self, dAppInfo: session.dAppInfo)
        try? client?.reconnect(to: session)
    }
    
    func isActiveSession(_ session: Session) -> Bool {
        self.session?.dAppInfo.peerId == session.dAppInfo.peerId
    }
}

extension WalletConnectClient: ClientDelegate {
    func client(_ client: Client, didFailToConnect url: WCURL) {
        DispatchQueue.main.async {
            self._client(client, didFailToConnect: url)
        }
    }
    
    func client(_ client: Client, didConnect url: WCURL) {
        // do nothing
    }
    
    func client(_ client: Client, didConnect session: Session) {
        DispatchQueue.main.async {
            self._client(client, didConnect: session)
        }
    }
    
    func client(_ client: Client, didDisconnect session: Session) {
        DispatchQueue.main.async {
            self.didDisconnectSubject.send((client: client, session: session))
            self.session = nil
            self.removeAccountFromSession(session: session)
        }
    }
    
    func client(_ client: Client, didUpdate session: Session) {
        // This doc says `wc_sessionUpdate` will be called when the session is killed by the Wallet, when it provides new accounts or when it changes the active chain id.
        // https://docs.walletconnect.com/tech-spec#session-update
        // Method `didDisconnect` will be called if wallet disconnect.
        log.debug("didUpdate \(session)", source: "WC:wallet-connect")
    }
    
    func _client(_ client: Client, didFailToConnect url: WCURL) {
        if isStartingNewConnection {
            didFailToConnectSubject.send((client: client, url: url))
            isStartingNewConnection = false
        }
    }
    
    func _client(_ client: Client, didConnect session: Session) {
        self.session = session
        
        guard let approved = session.walletInfo?.approved else {
            disconnect(session: session)
            return
        }
        guard approved == true else {
            disconnect(session: session)
            return
        }
        guard let networkID = session.walletInfo?.chainId else {
            disconnect(session: session)
            return
        }
        guard let address = session.walletInfo?.accounts[safeIndex: 0] else {
            disconnect(session: session)
            return
        }
        let networkFromSession = BlockChainNetwork(chain: .ethereum, networkId: UInt64(networkID))
        guard BlockChainNetwork.supportedNetwork.contains(networkFromSession) else {
            showNotSupportNetworkAlert(networkFromSession: networkFromSession)
            didFailToConnectSubject.send((client: client, url: session.url))
            disconnect(session: session)
            return
        }
         
        if let account = WalletCoreService.shared.getAccount(address: address),
           !account.fromWalletConnect {
            delegate.showTheWalletAddressAlreadyExistsAlert()
            disconnect(session: session)
            return
        }
        
        saveAccount(session: session, address: address, network: networkFromSession)
        didConnectSubject.send((client: client, session: session))
        let isAddressSame = userSetting.defaultAccountAddress == address
        let isNetworkSame = networkID == userSetting.network.networkId
        if isNetworkSame {
            if isAddressSame {
                // connecting current walletconnect wallet, do nothing
                return
            }
            // set current new conneting wallet to default wallet
            setWalletConnectAccountToDefaultAccount(network: networkFromSession, address: address)
        } else {
            if isAddressSame {
                setWalletConnectAccountToDefaultAccount(network: networkFromSession, address: address)
            }
        }
    }
    
    func showNotSupportNetworkAlert(networkFromSession: BlockChainNetwork) {
        WalletConnectClient.chainListPublisher()
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { [weak self] completion in
                switch completion {
                case .failure:
                    self?.delegate.showNotSupportNetworkAlertWithName(name: nil)
                    
                default: break
                }
            }, receiveValue: { [weak self] chainList in
                let name = chainList.first { chain in
                    chain.networkId == networkFromSession.networkId
                }?.name
                self?.delegate.showNotSupportNetworkAlertWithName(name: name)
            })
            .store(in: &disposeBag)
    }
    
    func saveAccount(session: Session, address: String, network: BlockChainNetwork) {
        AppContext.shared.coreDataStack.persistentContainer.viewContext.perform {
            if let accounts = session.walletInfo?.accounts {
                for account in accounts {
                    let isNewAccount = WalletCoreStorage.addWalletConnectAccount(session: session, address: account)
                    if isNewAccount, network.networkId != self.userSetting.network.networkId {
                        self.delegate.showChangeNetworkAlert(networkFromSession: network, address: address)
                    }
                }
            }
        }
    }
    
    func removeAccountFromSession(session: Session) {
        guard let address = session.walletInfo?.accounts[0] else { return }
        AppContext.shared.coreDataStack.persistentContainer.viewContext.perform {
            if let account = WalletCoreStorage.getAccount(address: address) {
                guard account.fromWalletConnect else { return }
                WalletCoreStorage.deleteAccount(account)
                if address == self.userSetting.defaultAccountAddress {
                    WalletCoreService.shared.setDefaultAccountAddressAfterAccountDeleted()
                }
                if WalletCoreService.shared.getAllAccounts().isEmpty {
                    DispatchQueue.main.async {
                        self.delegate.replaceCurrentNavigationWithEmptyWallet()
                    }
                }
            }
        }
    }
    
    func setWalletConnectAccountToDefaultAccount(network: BlockChainNetwork, address: String?) {
        guard let address = address else {
            return
        }
        userSetting.defaultAccountAddress = address
        userSetting.network = network
    }
    
    func checkIfWalletConnectWalletHasBeenRepleaced(address: String) {
        if let account = WalletCoreService.shared.getAccount(address: address),
           account.fromWalletConnect {
            DispatchQueue.main.async {
                self.delegate.showReplaceWalletConnectWalletAlert()
            }
        }
    }
}

extension WalletConnectClient {
    // https://developer.apple.com/documentation/security/1399291-secrandomcopybytes
    private func randomKey() throws -> String {
        var bytes = [Int8](repeating: 0, count: 32)
        let status = SecRandomCopyBytes(kSecRandomDefault, bytes.count, &bytes)
        if status == errSecSuccess {
            return Data(bytes: bytes, count: 32).toHexString()
        } else {
            enum TestError: Error {
                case unknown
            }
            throw TestError.unknown
        }
    }
    
    private func randomString(length: Int) -> String {
        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        return String((0 ..< length).map { _ in letters.randomElement()! })
    }
}

enum WalletConnectClientInjectValueKey: InjectValueKey {
    static var defaultInjectValue = WalletConnectClient.shared
}

extension InjectValues {
    var walletConnectClient: WalletConnectClient {
        Self[WalletConnectClientInjectValueKey.self]
    }
}
