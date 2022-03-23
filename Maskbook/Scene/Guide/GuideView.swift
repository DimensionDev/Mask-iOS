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
    let dismiss: (() -> Void)?
    
    var isLastOne: Bool {
        guard let pageEnum = GuideItemView.Page.allCases.last else {
            return true
        }
        return pageEnum.rawValue == page
    }
    
    var body: some View {
        let gradientColors = [
            Asset.Colors.Gradient.guide1.asColor(),
            Asset.Colors.Gradient.guide2.asColor()
        ]
        
        return GeometryReader { proxy in
            let contentSize = proxy.size
            buildPageContent(contentSize: contentSize)
                .overlay(buildControls(contentSize: contentSize))
        }
        .background(
            LinearGradient(
                colors: gradientColors,
                startPoint: .init(x: 0.5, y: 0),
                endPoint: .init(x: 0.5, y: 1)
            ).ignoresSafeArea()
        )
    }
    
    var skipSection: some View {
        HStack {
            Spacer()
            Button {
                dismiss?()
            } label: {
                Text(L10n.Scene.Guide.skip)
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Background.lightBlue.asColor())
            }
            .opacity(isLastOne ? 0 : 1)
            .padding(.horizontal, LayoutConstraints.horizontal)
            .padding(.vertical, 8)
            .contentShape(Rectangle())
        }
    }
    
    @ViewBuilder
    private func buildPageContent(contentSize: CGSize) -> some View {
        TabView(selection: $page.animation(.default)) {
            ForEach(GuideItemView.Page.allCases) { page in
                GuideItemView(page: page, contentSize: contentSize) {
                    dismiss?()
                }
                .frame(width: contentSize.width, height: contentSize.height)
            }
        }
        .frame(width: contentSize.width, height: contentSize.height)
        .tabViewStyle(PageTabViewStyle(indexDisplayMode: .never))
    }
    
    @ViewBuilder
    private func buildControls(contentSize: CGSize) -> some View {
        VStack {
            skipSection
            Spacer()
            buildPageIndicator(screenSize: contentSize)
        }.padding(.bottom, 29)
    }
    
    @ViewBuilder
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
        let maxWidth = 7.0 + 10.0
        return maxWidth * CGFloat(page)
    }
}

struct GuideView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            GuideView(dismiss: nil)
            GuideView(dismiss: nil)
                .previewDevice("iPhone 8")
        }
    }
}
