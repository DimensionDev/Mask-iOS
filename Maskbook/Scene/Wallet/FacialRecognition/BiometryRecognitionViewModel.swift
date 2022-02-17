//
//  BiometryRecognitionViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import LocalAuthentication

class BiometryRecognitionViewModel {
    var walletStartType: WalletStartType!
    
    var faceIDValidateResult = CurrentValueSubject<Bool?, Never>(nil)
    
    func evaluateBiometryID() {
        LocalAuthentication.shared.openBiometryID { [weak self] result, _ in
            guard let self = self else { return }
            self.faceIDValidateResult.send(result)
        }
    }
}
