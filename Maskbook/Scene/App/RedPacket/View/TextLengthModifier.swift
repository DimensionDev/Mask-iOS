//
//  TextLengthModifier.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/30.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftUI
import Combine

struct TextLengthModifier: ViewModifier {
    @Binding var field: String
    let maxLength: Int
    
    func body(content: Content) -> some View {
        content
            .onReceive(Just(field), perform: { text in
                guard text.lengthOfBytes(using: .utf8) > maxLength else {
                    return
                }
                field  = String(text.prefix(maxLength))
            })
    }
}

extension View {
    func limitText(_ field: Binding<String>, maxLength: Int) -> some View {
        modifier(TextLengthModifier(field: field, maxLength: maxLength))
    }
}
