//
//  SchemeService.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class SchemeService {
    fileprivate static let shared = SchemeService()

    @InjectedProvider(\.walletConnectServer)
    private var walletConnectServer

    private lazy var personaImportHandler = PersonaImportHandler(scene: .userScan)

    func handleURL(url: URL) {
        if url.absoluteString.contains("wc?uri=") {
            walletConnectServer.handleWalletConnectURL(url: url)
            return
        }
    }

    func handleScheme(scheme: String) -> Bool {
        if scheme.hasPrefix("wc:") {
            do {
                try walletConnectServer.connect(url: scheme)
                return true
            } catch {
                print(error)
                return false
            }
        }
        if scheme.hasPrefix("mask:") {
            return handleMaskScheme(scheme: scheme)
        }
        return false
    }

    func handleMaskScheme(scheme: String) -> Bool {
        if scheme.hasPrefix("mask://persona/privatekey") {
            handleMaskPersonaPrivateKey(scheme: scheme)
            return true
        }
        if scheme.hasPrefix("mask://persona/mnemonic") {
            handleMaskPersonaMnemonic(scheme: scheme)
            return true
        }
        return false
    }

    func handleMaskPersonaPrivateKey(scheme: String) {
        if let text = scheme.components(separatedBy: "/").last {
            let personaImportItem = PersonaImportItem(type: .privateKey(privateKey: text))
            personaImportHandler.checkExistAndRestore(from: personaImportItem)
        }
    }

    func handleMaskPersonaMnemonic(scheme: String) {
        guard let url = URL(string: scheme) else { return }
        var nickname: String?
        if let para = url.queryParameters, let name = para["nickname"] {
            nickname = name
        }
        let mnemonic = Data(base64URLEncoded: url.lastPathComponent).flatMap {
            String(data: $0, encoding: .utf8)
        }
        guard let mnemonic = mnemonic else { return }
        let personaImportItem = PersonaImportItem(type: .mnemonic(mnemonic: mnemonic), name: nickname)
        personaImportHandler.checkExistAndRestore(from: personaImportItem)
    }
}

private enum SchemeServiceInjectValueKey: InjectValueKey {
    static var defaultInjectValue = SchemeService.shared
}

extension InjectValues {
    var schemeService: SchemeService {
        Self[SchemeServiceInjectValueKey.self]
    }
}
