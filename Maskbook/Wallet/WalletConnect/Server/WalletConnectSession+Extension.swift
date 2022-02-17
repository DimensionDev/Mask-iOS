//
//  WalletConnectSession+Extension.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import Foundation
import WalletConnectSwift

extension WalletConnectSession {
    static func getAllSessions() throws -> [WalletConnectSession] {
        do {
            let context = AppContext.shared.coreDataStack.persistentContainer.viewContext
            let fetchRequest = WalletConnectSession.sortedFetchRequest
            let sessions = try context.fetch(fetchRequest)
            return sessions
        } catch {
            return []
        }
    }

    static func getSession(byTopic topic: String) -> WalletConnectSession? {
        let context = AppContext.shared.coreDataStack.persistentContainer.viewContext
        let fetchRequest = WalletConnectSession.sortedFetchRequest
        fetchRequest.predicate = WalletConnectSession.predicate(topic: topic)
        fetchRequest.fetchLimit = 1
        return try? context.fetch(fetchRequest).first
    }

    static func update(session: Session) {
        dispatchPrecondition(condition: .onQueue(.main))
        let context = AppContext.shared.coreDataStack.persistentContainer.viewContext
        let fetchRequest = WalletConnectSession.sortedFetchRequest
        fetchRequest.predicate = WalletConnectSession.predicate(topic: session.url.topic)
        fetchRequest.fetchLimit = 1
        guard let wcSession = try? context.fetch(fetchRequest).first ?? WalletConnectSession(context: context) else { return }
        wcSession.topic = session.url.topic
        wcSession.sessionRaw = try? JSONEncoder().encode(session)
        try? context.saveOrRollback()
    }

    func delete() {
        dispatchPrecondition(condition: .onQueue(.main))
        let context = AppContext.shared.coreDataStack.persistentContainer.viewContext
        context.delete(self)
        try? context.saveOrRollback()
    }
}

extension Session {
    static func from(_ wcSession: WalletConnectSession) throws -> Self {
        let decoder = JSONDecoder()
        return try decoder.decode(Session.self, from: wcSession.sessionRaw!)
    }
}
