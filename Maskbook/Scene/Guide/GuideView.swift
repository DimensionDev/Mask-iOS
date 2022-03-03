//
//  GuideView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct GuideView: View {
    @Environment(\.presentationMode) var presentationMode
    @State private var page: Int = 0
    @State private var offset: CGFloat = 0
    
    var isLastOne: Bool {
        guard let pageEnum = GuideItemView.Page.allCases.last else {
            return true
        }
        
        return pageEnum.rawValue == page
    }
    
    var body: some View {
        GeometryReader { proxy in
            let contentSize = proxy.size
            ZStack {
                buildPageContent(contentSize: contentSize)
                buildControls(contentSize: contentSize)
            }
        }
    }
    
    var skipSection: some View {
        HStack {
            Spacer()
            Button {
                presentationMode.wrappedValue.dismiss()
            } label: {
                Text(L10n.Scene.Guide.skip)
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Background.lightBlue.asColor())
            }
            .opacity(isLastOne ? 0 : 1)
        }
        .padding(.horizontal, 22.5)
    }
    
    private func buildPageContent(contentSize: CGSize) -> some View {
        let gradientDecorator = BlueGradientDecorator(
            selectedColors: [],
            normalColors: [
                Asset.Colors.Gradient.guide1.asColor(),
                Asset.Colors.Gradient.guide2.asColor()
            ])
        return PagerView(contentSize: contentSize, page: $page, offset: $offset) {
            HStack(spacing: 0) {
                ForEach(GuideItemView.Page.allCases) {
                    GuideItemView(page: $0, contentSize: contentSize) {
                        presentationMode.wrappedValue.dismiss()
                    }
                    .frame(width: contentSize.width, height: contentSize.height)
                }
            }
        }
        .withBlueGradient(radius: 0, colorDecorator: gradientDecorator)
        .ignoresSafeArea()
    }
    
    private func buildControls(contentSize: CGSize) -> some View {
        VStack {
            skipSection
            Spacer()
            buildPageIndicator(screenSize: contentSize)
        }.padding(.bottom, 29)
    }
    
    private func buildPageIndicator(screenSize: CGSize) -> some View {
        HStack(spacing: 7) {
            ForEach(GuideItemView.Page.allCases.indices) { index in
                Capsule()
                    .fill(Asset.Colors.Background.lightBlue.asColor())
                    .frame(width: page == index ? 20 : 10, height: 6)
            }
        }
        .overlay(
            Capsule()
                .fill(Asset.Colors.Background.lightBlue.asColor())
                .frame(width: 20, height: 6)
                .offset(x: getIndicatorOffset(screenSize: screenSize)),
            alignment: .leading
        )
    }
    
    private func getIndicatorOffset(screenSize: CGSize) -> CGFloat {
        let progress = offset / screenSize.width
        let maxWidth = 7.0 + 10.0
        return maxWidth * progress
    }
}

struct GuideView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            GuideView()
            GuideView()
                .previewDevice("iPhone 8")
        }
    }
}
