//
//  LuckyDropSuccessfullyViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/19.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class LuckyDropSuccessfullyViewModel: ObservableObject {
    let callback: (@MainActor () -> Void)?
    
    init(callback: (@MainActor () -> Void)?) {
        self.callback = callback
    }
}
