//
//  ShareLuckyDropViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2022/5/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class ShareLuckyDropViewViewModel: ObservableObject {
    @InjectedProvider(\.mainCoordinator)
    var coordinator
    
    let callback: (@MainActor () -> Void)?
    
    init(callback: (@MainActor () -> Void)?) {
        self.callback = callback
    }
}
