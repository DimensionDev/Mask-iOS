//
//  IdentityVerifyViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/8/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

final class IdentityCreateViewModel: NSObject {
    var identity = CurrentValueSubject<[String], Never>([])
    
    var errorNotifier = PassthroughSubject<Error, Never>()
    
    lazy var personaCreateHandler = PersonaCreateHandler()
    
    var personaDownloadHandler: PersonaDownloadHandler?
    
    @InjectedProvider(\.personaManager)
    var personaManager
    
    func generateIdentityCode() {
        let result = WalletCoreHelper.generateMnemonic()
        switch result {
        case let .success(mnemonic):
            let words = mnemonic.components(separatedBy: " ")
            let unique = words.unique.filter { !$0.isEmpty }
            if !words.elementsEqual(unique) {
                generateIdentityCode()
                return
            }
            // make sure mnemonic is unique
            identity.send(Array(mnemonic.components(separatedBy: " ")))

        case let .failure(error):
            errorNotifier.send(error)
        }
    }
}
