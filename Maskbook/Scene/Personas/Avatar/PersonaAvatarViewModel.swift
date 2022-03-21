//
//  PersonaAvatarViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/14.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

class PersonaAvatarViewModel {
    static func saveImageForCurrentPersona(image: UIImage) {
        @InjectedProvider(\.personaManager)
        var personaManager
        guard let identifier = personaManager.currentPersona.value?.identifier,
              let data = image.pngData()
        else {
            return
        }
        PersonaRepository.updatePersonaAvatarData(identifier: identifier, avatarData: data)
    }

    static func removeAvatarForCurrentPersona() {
        @InjectedProvider(\.personaManager)
        var personaManager
        guard let identifier = personaManager.currentPersona.value?.identifier
        else {
            return
        }
        PersonaRepository.updatePersonaAvatarData(identifier: identifier, avatarData: nil)
    }
}
