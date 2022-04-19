//
//  SchemeService.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreDataStack
import Foundation

class SchemeService {
    fileprivate static let shared = SchemeService()

    static let personaPrivateKeyPrefix = "mask://persona/privatekey"
    static let personaMenmonicPrefix = "mask://persona/mnemonic"
    static let nikenameKey = "nickname"

    @InjectedProvider(\.walletConnectServer)
    private var walletConnectServer

    @InjectedProvider(\.mainCoordinator)
    var mainCoordinator

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
                switchSelected(tab: .wallet)
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
        if scheme.hasPrefix("mask://persona") {
            return handleMaskPersonaScheme(scheme: scheme)
        }
        return false
    }

    func handleMaskPersonaScheme(scheme: String) -> Bool {
        if scheme.hasPrefix(Self.personaPrivateKeyPrefix) {
            switchSelected(tab: .personas)
            handleMaskPersonaPrivateKey(scheme: scheme)
            return true
        }
        if scheme.hasPrefix(Self.personaMenmonicPrefix) {
            switchSelected(tab: .personas)
            handleMaskPersonaMnemonic(scheme: scheme)
            return true
        }
        return false
    }

    func switchSelected(tab: MainTabBarController.Tab) {
        MainTabBarController.currentTabBarController()?.selectedIndex = tab.rawValue
    }

    func handleMaskPersonaPrivateKey(scheme: String) {
        if let text = scheme.components(separatedBy: "/").last {
            let personaImportItem = PersonaImportItem(type: .privateKey(privateKey: text))
            personaImportHandler.checkExistAndRestore(from: personaImportItem)
        }
    }

    func handleMaskPersonaMnemonic(scheme: String) {
        let string = scheme.replacingOccurrences(of: Self.personaMenmonicPrefix + "/", with: "")
        let seperator = "?" + Self.nikenameKey + "="
        var nickname: String?
        let mnemonicBase64: String? = {
            if string.contains(seperator) {
                let slices = string.components(separatedBy: seperator)
                nickname = slices.last.flatMap { String($0) }
                return slices.first.flatMap { String($0) }
            } else {
                return string
            }
        }()
        let mnemonic = mnemonicBase64.flatMap {
            Data(base64URLEncoded: $0)
        }
        .flatMap {
            String(data: $0, encoding: .utf8)
        }
        guard let mnemonic = mnemonic else {
            return
        }

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
