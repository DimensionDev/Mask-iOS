//
//  ShareLuckyDropSelectProfileViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/5/27.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import CoreDataStack
class ShareLuckyDropSelectProfileViewModel {
    let callback: (@MainActor () -> Void)?
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    init(callback: (@MainActor () -> Void)?) {
        self.callback = callback
    }
    
    @MainActor
    func selectProfile(profile: ProfileRecord) {
        personaManager.setProfileSelected(profile: profile)
        if let callback = callback {
            callback()
        }
    }
}
