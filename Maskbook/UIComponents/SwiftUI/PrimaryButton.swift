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
    let isEnable: Bool
    
    var backgroundColor: Color {
        if isEnable {
            return Asset.Colors.Background.blue.asColor()
        } else {
            return Asset.Colors.Background.disable.asColor()
        }
    }
    
    var titleColor: Color {
        if isEnable {
            return Color.white
        } else {
            return Asset.Colors.Text.normal.asColor()
        }
    }
    
    var body: some View {
        Button(action: action) {
            HStack(spacing: 0) {
                Spacer()
                Text(title).font(FontStyles.bh5.font)
                    .foregroundColor(titleColor)
                    .frame(height: 54)
                if animating {
                    Spacer().frame(width: 8)
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle(tint: .white))
                }
                Spacer()
            }
        }
        .background(backgroundColor)
        .disabled(!isEnable)
        .cornerRadius(8)
    }
}

struct PrimaryButton_Previews: PreviewProvider {
    static var previews: some View {
        PrimaryButton(action: {
            
        }, title: "Confirm Risk Warning", animating: true, isEnable: true)
    }
}
