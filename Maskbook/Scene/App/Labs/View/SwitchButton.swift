//
//  SwitchButton.swift
//  Maskbook
//
//  Created by yzj on 2021/7/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct SwitchButton: View {
    @Binding var enabled: Bool

    private let totalWidth: CGFloat = 40
    private let preferedHeight: CGFloat = 24
    private let circleRadius: CGFloat = 16
    private let margin: CGFloat = 4
    private var offsetMargin: CGFloat {
        totalWidth / 2 - (circleRadius / 2 + margin)
    }

    var body: some View {
        Color(
            enabled
            ? Asset.Colors.Public.systemGreen
            : Asset.Colors.Background.disable
        )
        .frame(width: totalWidth, height: preferedHeight)
        .cornerRadius(preferedHeight / 2)
        .overlay(
            Circle()
                .fill(
                    enabled
                    ? Color.white
                    : Color(Asset.Plugins.switchDisabled)
                )
                .frame(width: circleRadius, height: circleRadius)
                .cornerRadius(circleRadius / 2)
                .offset(x: enabled ? offsetMargin : -offsetMargin)
        )
        .onTapGesture { enabled.toggle() }
        .animation(.spring(), value: enabled)
    }
}

struct SwitchButton_Previews: PreviewProvider {
    static var previews: some View {
        VStack {
            VStack {
                SwitchButton(enabled: .constant(false))
                SwitchButton(enabled: .constant(true))
            }
            .colorScheme(.light)
            VStack {
                SwitchButton(enabled: .constant(false))
                SwitchButton(enabled: .constant(true))
            }
            .colorScheme(.dark)
        }
    }
}
