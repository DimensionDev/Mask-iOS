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
                let updatedField = String(
                    field
                        .enumerated()
                        .filter { $0.offset < maxLength }
                        .map { $0.element }
                )
                
                if updatedField != field {
                    field = updatedField
                }
            })
    }
}

extension View {
    func limitText(_ field: Binding<String>, maxLength: Int) -> some View {
        modifier(TextLengthModifier(field: field, maxLength: maxLength))
    }
}
