//
//  PersonaListViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import UIKit

class PersonaListViewModel {
    @InjectedProvider(\.personaManager)
    private var personaManager

    @InjectedProvider(\.userDefaultSettings)
    private var settings

    var myPersonas: [PersonaRecord] {
        personaManager.personaRecordsSubject.value
    }

    var titles: [String] {
        var titles = myPersonas.compactMap(\.nickname)
        titles.append(L10n.Scene.Personas.addPersona)
        return titles
    }

    var selectedIndex: Int? {
        guard let currentPersona = personaManager.currentPersona.value else {
            return nil
        }
        return myPersonas.firstIndex(of: currentPersona)
    }

    func changeCurrentPersona(to index: Int) {
        guard let persona = myPersonas[safeIndex: index] else {
            return
        }
        settings.currentPesonaIdentifier = persona.identifier
    }
}
