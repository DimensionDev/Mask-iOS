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
    let animating: Bool
    
    var body: some View {
        Button(action: action) {
            HStack(spacing: 0) {
                Spacer()
                Text(title).font(FontStyles.bh5.font)
                    .foregroundColor(Color.white)
                    .frame(height: 54)
                if animating {
                    Spacer().frame(width: 8)
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle(tint: .white))
                }
                Spacer()
            }
        }
        .background(Asset.Colors.Background.blue.asColor())
        .cornerRadius(8)
    }
}

struct PrimaryButton_Previews: PreviewProvider {
    static var previews: some View {
        PrimaryButton(action: {
            
        }, title: "Confirm Risk Warning", animating: true)
    }
}
