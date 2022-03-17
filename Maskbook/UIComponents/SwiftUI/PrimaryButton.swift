//
//  PrimaryButton.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct PrimaryButton: View {
    let action: () -> Void
    let title: String
    
    var body: some View {
        Asset.Colors.Background.blue.asColor()
            .frame(height: 54)
            .cornerRadius(8)
            .overlay(
                Button(action: action) {
                    Text(title).font(FontStyles.bh5.font)
                        .foregroundColor(Color.white)
                }
            )
    }
}

struct PrimaryButton_Previews: PreviewProvider {
    static var previews: some View {
        PrimaryButton(action: {
            
        }, title: "Confirm Risk Warning")
    }
}
