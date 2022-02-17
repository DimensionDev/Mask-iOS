//
//  KeyboardResponderService.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit

final class KeyboardResponderService {
    var disposeBag = Set<AnyCancellable>()
    
    // MARK: - Singleton
    static let shared = KeyboardResponderService()
    
    // output
    let isShow = CurrentValueSubject<Bool, Never>(false)
    let state = CurrentValueSubject<KeyboardState, Never>(.none)
    let endFrame = CurrentValueSubject<CGRect, Never>(.zero)

    private init() {
        NotificationCenter.default.publisher(for: UIResponder.keyboardWillShowNotification, object: nil)
            .sink { notification in
                self.isShow.value = true
                self.updateInternalStatus(notification: notification)
            }
            .store(in: &disposeBag)
        
        NotificationCenter.default.publisher(for: UIResponder.keyboardDidHideNotification, object: nil)
            .sink { notification in
                self.isShow.value = false
                self.updateInternalStatus(notification: notification)
            }
            .store(in: &disposeBag)
        
        NotificationCenter.default.publisher(for: UIResponder.keyboardDidChangeFrameNotification, object: nil)
            .sink { notification in
                self.updateInternalStatus(notification: notification)
            }
            .store(in: &disposeBag)
        NotificationCenter.default.publisher(for: UIResponder.keyboardWillChangeFrameNotification, object: nil)
            .sink { notification in
                self.updateInternalStatus(notification: notification)
            }
            .store(in: &disposeBag)
    }
}

extension KeyboardResponderService {
    private func updateInternalStatus(notification: Notification) {
        guard let isLocal = notification.userInfo?[UIWindow.keyboardIsLocalUserInfoKey] as? Bool,
            let endFrame = notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect else {
                return
        }
        
        self.endFrame.value = endFrame

        guard isLocal else {
            self.state.value = .notLocal
            return
        }
        
        // check if floating
        guard endFrame.width == UIScreen.main.bounds.width else {
            self.state.value = .floating
            return
        }
        
        // check if undock | split
        let intersects = UIScreen.main.bounds.intersects(endFrame)
        if !intersects {
            self.state.value = .notDock
        } else {
            self.state.value = .dock
        }
    }
}

extension KeyboardResponderService {
    enum KeyboardState {
        case none
        case notLocal
        case notDock        // undock | split
        case floating       // iPhone size floating
        case dock
    }
}
