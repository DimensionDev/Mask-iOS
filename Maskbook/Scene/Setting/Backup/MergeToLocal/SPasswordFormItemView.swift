//
//  SPasswordFormItemView.swift
//  Maskbook
//
//  Created by Hugo L on 2021/10/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import SwiftUI

struct SUIPasswordFormItemView: UIViewRepresentable {
    @Binding var password: String
    
    func updateUIView(_ uiView: PasswordFormItemView, context: Context) {
    }
    
    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }
    
    func makeUIView(context: Context) -> PasswordFormItemView {
        let v = PasswordFormItemFactory.createBackupFormItem()
        v.passwordTextField
            .textPublisher()
            .sink { password in
                context.coordinator.formItem.password = password
            }
            .store(in: &context.coordinator.disposeBag)
        return v
    }
    
    class Coordinator: NSObject {
        var formItem: SUIPasswordFormItemView
        var disposeBag = Set<AnyCancellable>()
        
        init(_ formItem: SUIPasswordFormItemView) {
            self.formItem = formItem
        }
    }
}
