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
    
    private lazy var personaImportPrivateKeyHandle = PersonaImportPrivateKeyHandler(scene: .userScan)

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
        return false
    }
    
    func handleMaskPersonaPrivateKey(scheme: String) {
        if let text = scheme.components(separatedBy: "/").last {
            personaImportPrivateKeyHandle.restoreFromPrivateKey(text: text)
        }
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
