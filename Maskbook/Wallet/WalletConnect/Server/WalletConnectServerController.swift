//
//  WalletConnectServerController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation
import WalletConnectSwift

// swiftlint:disable force_unwrapping function_parameter_count line_length unavailable_function implicitly_unwrapped_optional

protocol WalletConnectServerConfirmProcotol: AnyObject {
    func server(_ server: Server, shouldStart session: Session, completion: @escaping (Session.WalletInfo) -> Void)
    
    func noLocalWalletToConnect()
}

class WalletConnectServerController: ServerDelegate {
    fileprivate static let shared = WalletConnectServerController()

    private(set) var server: Server!
    
    @InjectedProvider(\.userDefaultSettings)
    var userSetting

    var sessionsPublisher: FetchedResultsPublisher<WalletConnectSession> = {
        let fetchResultController: NSFetchedResultsController<WalletConnectSession> = {
            let controller = NSFetchedResultsController(
                fetchRequest: WalletConnectSession.withRequest({ fetchRequest in
                    fetchRequest.fetchBatchSize = 20
                    fetchRequest.returnsObjectsAsFaults = false
                }),
                managedObjectContext: AppContext.shared.coreDataStack.persistentContainer.viewContext,
                sectionNameKeyPath: nil,
                cacheName: nil
            )
            return controller
        }()
        return FetchedResultsPublisher(fetchResultController: fetchResultController)
    }()

    private lazy var confirmDelegate = WalletConnectServerConfirmDelegate()

    var connectingSubject = PassthroughSubject<WCURL, Never>()
    var didFailToConnectSubject = PassthroughSubject<WCURL, Never>()
    var didConnectSubject = PassthroughSubject<Session, Never>()
    var didDisconnectSubjuct = PassthroughSubject<Session, Never>()

    init() {
        server = Server(delegate: self)
        server.register(handler: WCRequestsHandler(server: server))
    }

    // MARK: - Session

    func getSession(topic: String) -> Session? {
        guard let wcSession = WalletConnectSession.getSession(byTopic: topic) else { return nil }
        do {
            return try Session.from(wcSession)
        } catch {
            wcSession.delete()
            return nil
        }
    }

    func deleteStoredSession(topic: String) {
        precondition(Thread.isMainThread)
        guard let wcSession = WalletConnectSession.getSession(byTopic: topic) else { return }
        wcSession.delete()
    }

    func update(session: Session) {
        precondition(Thread.isMainThread)
        WalletConnectSession.update(session: session)
    }

    // MARK: connect and disconnect

    func connect(url: String) throws {
        guard let wcurl = WCURL(url) else { throw WalletConnectServerError.invalidWalletConnectURL }
        guard userSetting.defaultAccountAddress != nil else {
            confirmDelegate.noLocalWalletToConnect()
            return
        }
        do {
            try server.connect(to: wcurl)
            connectingSubject.send(wcurl)
        } catch {
            throw WalletConnectServerError.couldNotStartWallectConnectSession
        }
    }

    func disconnect(topic: String) {
        guard let session = getSession(topic: topic) else { return }
        try? server.disconnect(from: session)
        deleteStoredSession(topic: topic)
        didDisconnectSubjuct.send(session)
    }

    // MARK: - ServerDelegate

    func server(_ server: Server, didFailToConnect url: WCURL) {
        DispatchQueue.main.async {
            self.deleteStoredSession(topic: url.topic)
        }
        didFailToConnectSubject.send(url)
    }

    func server(_ server: Server, shouldStart session: Session, completion: @escaping (Session.WalletInfo) -> Void) {
        confirmDelegate.server(server, shouldStart: session, completion: completion)
    }

    func server(_ server: Server, didConnect session: Session) {
        DispatchQueue.main.async {
            self.update(session: session)
            self.didConnectSubject.send(session)
        }
    }

    func server(_ server: Server, didDisconnect session: Session) {
        DispatchQueue.main.async {
            self.deleteStoredSession(topic: session.url.topic)
        }
        didDisconnectSubjuct.send(session)
    }

    func server(_ server: Server, didUpdate session: Session) {
        DispatchQueue.main.async {
            self.update(session: session)
        }
    }

    func denySession(clientMeta: Session.ClientMeta,
                     completion: (Session.WalletInfo) -> Void) {
        let walletInfo = Session.WalletInfo(
            approved: false,
            accounts: [],
            chainId: Int(BlockChainNetwork.eth.networkId),
            peerId: UUID().uuidString,
            peerMeta: clientMeta
        )
        completion(walletInfo)
    }

    func reconnectAllSessions() {
        guard let wcSessions = try? WalletConnectSession.getAllSessions() else { return }

        wcSessions.forEach {
            guard $0.sessionRaw != nil, let session = try? Session.from($0) else {
                // Trying to reconnect a session without handshake process finished.
                // This could happed when the app restarts in the middle of the process.
                $0.delete()
                return
            }

            try? server.reconnect(to: session)
        }
    }
}

extension WalletConnectServerController {
    func handleWalletConnectURL(url: URL) {
        guard let components = NSURLComponents(url: url, resolvingAgainstBaseURL: true) else {
            return
        }
        guard let params = components.queryItems,
              !params.isEmpty,
              let wcURL = params[0].value else {
            return
        }
        try? connect(url: wcURL)
    }

    static func handleWalletConnectURL(url: URL) {
        let walletConnectServer = InjectValues[WalletConnectServerInjectValueKey.self]
        walletConnectServer.handleWalletConnectURL(url: url)
    }
}

enum WalletConnectServerInjectValueKey: InjectValueKey {
    static var defaultInjectValue = WalletConnectServerController.shared
}

extension InjectValues {
    var walletConnectServer: WalletConnectServerController {
        Self[WalletConnectServerInjectValueKey.self]
    }
}
