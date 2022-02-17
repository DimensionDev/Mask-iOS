//
//  UnlockViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

class UnlockViewModel {
    // Input
    // Output
    let isShowBioIDPage = CurrentValueSubject<Bool, Never>(maskUserDefaults.enableBiometryID)
}
