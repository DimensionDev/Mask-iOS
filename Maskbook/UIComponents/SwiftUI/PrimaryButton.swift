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
        Button(action: action) {
            Text(title).frame(maxWidth: .infinity)
        }
        .font(FontStyles.bh5.font)
        .foregroundColor(Color.white)
        .padding()
        .frame(height: 54)
        .frame(maxWidth: .infinity)
        .background(Asset.Colors.Background.blue.asColor())
        .cornerRadius(8)
    }
}

struct PrimaryButton_Previews: PreviewProvider {
    static var previews: some View {
        PrimaryButton(action: {

        }, title: "Confirm Risk Warning")
    }
}
