//
//  SchemeService.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import CoreDataStack

class SchemeService {
    fileprivate static let shared = SchemeService()
    
    static let personaPrivateKeyPrefix = "mask://persona/privatekey"
    static let personaMenmonicPrefix = "mask://persona/mnemonic"
    static let nikenameKey = "nickname"

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
        if scheme.hasPrefix(Self.personaPrivateKeyPrefix) {
            handleMaskPersonaPrivateKey(scheme: scheme)
            return true
        }
        if scheme.hasPrefix(Self.personaMenmonicPrefix) {
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
        let url: URL? = {
            if let url = URL(string: scheme) {
                return url
            } else {
                let string = personaMnemonicURLEscaped(string: scheme)
                return URL(string: string)
            }
        }()
        guard let url = url else { return }
        var nickname: String?
        if let para = url.queryParameters, let name = para[Self.nikenameKey] {
            nickname = name
        }
        let mnemonic = Data(base64URLEncoded: url.lastPathComponent).flatMap {
            String(data: $0, encoding: .utf8)
        }
        guard let mnemonic = mnemonic else { return }
        let personaImportItem = PersonaImportItem(type: .mnemonic(mnemonic: mnemonic), name: nickname)
        personaImportHandler.checkExistAndRestore(from: personaImportItem)
    }
    
    func personaMnemonicURLEscaped(string: String) -> String {
        var nicknameString: String?
        let prefix: String? = {
            if string.contains("?") {
                let array = string.split(separator: "?").map({String($0)})
                nicknameString = array.last?.split(separator: "=").map({String($0)}).last
                return array.first
            } else {
                return string
            }
        }()
        if let prefix = prefix {
            let mnemonic = prefix.replacingOccurrences(of: Self.personaMenmonicPrefix + "/", with: "")
            let reconstructString = PersonaRecord.qrCodeMnemonic(mnemonicBase64: mnemonic)
            if let nicknameString = nicknameString?.urlEncode() {
                return reconstructString + "?" + Self.nikenameKey + "=" + nicknameString
            } else {
                return reconstructString
            }
        } else {
            return string
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
