//
//  PersonaAvatarActionViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class PersonaAvatarActionViewModel: SelectActionViewModelProtocol {
    var dismissSignal = PassthroughSubject<(() -> Void)?, Never>()
    
    var title: String? = nil
    
    var actionTitles: [String] = PersonaAvatarActionViewModel.Action.allCases.map(\.title)
    
    var actionIcons: [UIImage] = PersonaAvatarActionViewModel.Action.allCases.map(\.image)
    
    func select(index: Int) {
        @InjectedProvider(\.mainCoordinator)
        var coordinator
        guard let item = PersonaAvatarActionViewModel.Action(rawValue: index) else {
            assertionFailure()
            return
        }
        switch item {
        case .setAvatar:
            dismissSignal.send {
                coordinator.present(scene: .personaAvatar, transition: .detail(animated: true))
            }
        
        case .removeAvatar:
            @InjectedProvider(\.personaManager)
            var personaManager
            guard let identifier = personaManager.currentPersona.value?.identifier else {
                return
            }
            PersonaRepository.updatePersonaAvatarData(identifier: identifier, avatarData: nil)
            dismissSignal.send(nil)
        }
    }
}

extension PersonaAvatarActionViewModel {
    enum Action: Int, CaseIterable {
        case setAvatar = 0
        case removeAvatar

        var title: String {
            switch self {
            case .setAvatar:
                return L10n.Scene.PersonaAvatar.title
                
            case .removeAvatar:
                return L10n.Scene.PersonaAvatar.removeAvatar
            }
        }

        var image: UIImage {
            switch self {
            case .setAvatar:
                return Asset.Images.Scene.Personas.setAvatar.image
                
            case .removeAvatar:
                return Asset.Images.Scene.Personas.removeAvatar.image
            }
        }
    }
}
