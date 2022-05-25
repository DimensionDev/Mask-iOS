//
//  SearchPersonaViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/5/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit
import CoreDataStack
import Combine


class personaContact{
    var contactInfo: ProfileRecord
    var isSelected: Bool
    init(contactInfo: ProfileRecord, isSelected: Bool) {
        self.contactInfo = contactInfo
        self.isSelected = isSelected
    }
}


class SearchPersonaViewModel: NSObject {

    public var contactList: CurrentValueSubject<[personaContact], Never> = CurrentValueSubject([])
    
    override init() {
        
        let squares = PersonaManager.shared.currentProfiles.value.map {
            personaContact(contactInfo: $0, isSelected: false)
        }
        self.contactList.send(squares)
    }
}
