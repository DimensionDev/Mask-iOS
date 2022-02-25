//
//  GuideView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct GuideView: View {
    var body: some View {
        let gradientDecorator = BlueGradientDecorator(
            selectedColors: [],
            normalColors: [
                Asset.Colors.Gradient.guide1.asColor(),
                Asset.Colors.Gradient.guide2.asColor()
            ])
        return Pages {
            GuideItemView(page: .one)
            GuideItemView(page: .two)
            GuideItemView(page: .three)
            GuideItemView(page: .four)
        }
        .hideDots(true)
        .withBlueGradient(radius: 0, colorDecorator: gradientDecorator)
        .ignoresSafeArea()
        .colorScheme(.light)
    }
}

struct GuideView_Previews: PreviewProvider {
    static var previews: some View {
        GuideView()
    }
}
