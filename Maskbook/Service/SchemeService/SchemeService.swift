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
        if let item = personaImportItem(forPersonaScheme: scheme) {
            switchSelected(tab: .personas)
            personaImportHandler.checkExistAndRestore(from: item)
            return true
        }
        return false
    }

    func switchSelected(tab: MainTabBarController.Tab) {
        MainTabBarController.currentTabBarController()?.selectedIndex = tab.rawValue
    }

    func parseContentAndNickname(string: String) -> (String?, String?) {
        let seperator = "?" + Self.nikenameKey + "="
        var nickname: String?
        let contentBase64: String? = {
            if string.contains(seperator) {
                let slices = string.components(separatedBy: seperator)
                nickname = slices.last.flatMap { String($0) }
                return slices.first.flatMap { String($0) }
            } else {
                return string
            }
        }()
        return (contentBase64, nickname)
    }

    func personaImportItem(forPersonaScheme personaScheme: String) -> PersonaImportItem? {
        if personaScheme.contains(Self.personaPrivateKeyPrefix) {
            return personaImportItem(forPrivateKey: personaScheme)
        }

        if personaScheme.contains(Self.personaMenmonicPrefix) {
            return personaImportItem(forMnemonic: personaScheme)
        }
        return nil
    }

    func personaImportItem(forPrivateKey scheme: String) -> PersonaImportItem? {
        let string = scheme.replacingOccurrences(of: Self.personaPrivateKeyPrefix + "/", with: "")
        let (privateKey, name) = parseContentAndNickname(string: string)
        guard let privateKey = privateKey else { return nil }
        return PersonaImportItem(type: .privateKey(privateKey: privateKey), name: name)
    }

    func personaImportItem(forMnemonic scheme: String) -> PersonaImportItem? {
        let string = scheme.replacingOccurrences(of: Self.personaMenmonicPrefix + "/", with: "")
        let (mnemonicBase64, name) = parseContentAndNickname(string: string)
        let mnemonic = mnemonicBase64.flatMap {
            Data(base64URLEncoded: $0)
        }
        .flatMap {
            String(data: $0, encoding: .utf8)
        }
        guard let mnemonic = mnemonic else {
            return nil
        }

        return PersonaImportItem(type: .mnemonic(mnemonic: mnemonic), name: name)
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
