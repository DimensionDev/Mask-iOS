//
//  CustomTextField.swift
//  Maskbook
//
//  Created by yzj on 2021/8/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct CustomTextField: UIViewRepresentable {
    class Coordinator: NSObject, UITextFieldDelegate {
        @Binding var text: String
        var didBecomeFirstResponder = false

        var firstResponderCallBack: (Bool) -> Void
        private(set) var keyboardType: UIKeyboardType
        private let textLimit: Int?

        init(
            text: Binding<String>,
            keyboardType: UIKeyboardType,
            textLimit: Int? = nil,
            firstResponderCallBack: @escaping (Bool) -> Void = { _ in }
        ) {
            _text = text
            self.keyboardType = keyboardType
            self.textLimit = textLimit
            self.firstResponderCallBack = firstResponderCallBack
        }

        func textFieldDidChangeSelection(_ textField: UITextField) {
            text = textField.text ?? ""
        }

        func textField(
            _ textField: UITextField,
            shouldChangeCharactersIn range: NSRange,
            replacementString string: String
        ) -> Bool {
            guard let limit = textLimit else {
                return true
            }

            if string.trimmingCharacters(in: .whitespaces).isEmpty, range.location + range.length > limit {
                return false
            }

            guard var text = textField.text else {
                return string.count <= limit
            }

            guard let indexRange = Range<String.Index>(range, in: text) else {
                return true
            }

            text.replaceSubrange(indexRange, with: string)
            return  text.count <= limit
        }

        func textFieldDidBeginEditing(_ textField: UITextField) {
            didBecomeFirstResponder = true
            firstResponderCallBack(true)
        }
    }

    @Binding var text: String
    @Binding var isSecureTextEntry: Bool
    var keyboardType: UIKeyboardType
    var isFirstResponder = false
    var firstResponderCallBack: (Bool) -> Void
    private let textLimit: Int?
    private let placeHolder: String?

    init(
        text: Binding<String>,
        keyboardType: UIKeyboardType,
        secureText: Binding<Bool> = .constant(false),
        textLimit: Int? = nil,
        placeHolder: String? = nil,
        isFirstResponder: Bool = false,
        firstResponderCallBack: @escaping (Bool) -> Void = { _ in }
    ) {
        _text = text
        _isSecureTextEntry = secureText

        self.keyboardType = keyboardType
        self.textLimit = textLimit
        self.placeHolder = placeHolder
        self.isFirstResponder = isFirstResponder
        self.firstResponderCallBack = firstResponderCallBack
    }

    func makeUIView(context: Context) -> UITextField {
        let textField = UITextField(frame: .zero)
        textField.delegate = context.coordinator
        textField.keyboardType = context.coordinator.keyboardType
        textField.placeholder = placeHolder
        textField.isSecureTextEntry = isSecureTextEntry
        textField.setContentCompressionResistancePriority(.defaultLow, for: .horizontal)
        return textField
    }

    func makeCoordinator() -> Coordinator {
        Coordinator(
            text: $text,
            keyboardType: keyboardType,
            textLimit: textLimit,
            firstResponderCallBack: firstResponderCallBack
        )
    }

    func updateUIView(_ uiView: UITextField, context: Context) {
        uiView.text = text
        uiView.isSecureTextEntry = isSecureTextEntry
        
        if isFirstResponder && !context.coordinator.didBecomeFirstResponder {
            uiView.becomeFirstResponder()
            context.coordinator.didBecomeFirstResponder = true
        }
    }
}
