//
//  PersonaExportPrivateKeyViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

final class PersonaExportPrivateKeyViewModel {
    init(personaIdentifier: String) {
        self.personaIdentifier = personaIdentifier
    }

    let personaIdentifier: String
    
    @InjectedProvider(\.personaManager)
    private var personaManager

    var privateKeyPublisher: AnyPublisher<String, Error> {
        PersonaManager.backupPrivateKey(identifier: personaIdentifier)
    }
}
