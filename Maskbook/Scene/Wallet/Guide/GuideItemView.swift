//
//  GuideItemView.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftUI

struct GuideItemView: View {
    @Environment(\.viewController) var viewController
    
    var page: Page
    
    var isLastOne: Bool {
        page == Page.allCases.last
    }
    
    var skipSection: some View {
        HStack {
            Spacer()
            Button {
                viewController.value?.dismiss(animated: true, completion: nil)
            } label: {
                Text("Skip")
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Background.blue.asColor())
            }
            .opacity(isLastOne ? 0 : 1)
        }
        .padding(.horizontal, 22.5)
    }
    
    var pageControlSection: some View {
        VStack(alignment: .center) {
            page.pageControl.resizable().frame(width: 71, height: 6)
        }
    }
    
    var topSpace: CGFloat {
        0.11_453_202 * UIScreen.main.bounds.height
    }
    
    var content: some View {
        VStack(alignment: .center) {
            Spacer().frame(height: topSpace)
            page.guideImage.resizable().frame(height: 291)
            Spacer()
            Text(page.title)
                .fontWeight(.heavy)
                .font(FontStyles.mh4.font)
                .foregroundColor(Asset.Colors.Text.lighter.asColor())
                .multilineTextAlignment(.center)
            if isLastOne {
                Spacer().frame(height: 24)
                Button {
                    viewController.value?.dismiss(animated: true, completion: nil)
                } label: {
                    Text("Let’s start")
                        .font(FontStyles.bh5.font)
                        .foregroundColor(Asset.Colors.Public.blue.asColor())
                }
                .padding(.horizontal, 29)
                .padding(.vertical, 16)
                .background(Asset.Colors.Background.dark.asColor())
                .cornerRadius(8)
            }
            Spacer()
        }
        .padding(.horizontal, 36)
    }
    
    var body: some View {
        ZStack {
            LinearGradient(
                colors: [
                    Asset.Colors.Gradient.guide1.asColor(),
                    Asset.Colors.Gradient.guide2.asColor()
                ],
                startPoint: .init(x: 0.5, y: 0),
                endPoint: .init(x: 0.5, y: 1)
            ).ignoresSafeArea()
            VStack {
                skipSection
                content
                pageControlSection
                Spacer().frame(height: 24)
            }
        }
    }
}

extension GuideItemView {
    enum Page: CaseIterable {
        case one
        case two
        case three
        case four
        
        var pageControl: Image {
            switch self {
            case .one: return Asset.Images.Scene.Guide.guidePage1.asImage()
            case .two: return Asset.Images.Scene.Guide.guidePage2.asImage()
            case .three: return Asset.Images.Scene.Guide.guidePage3.asImage()
            case .four: return Asset.Images.Scene.Guide.guidePage4.asImage()
            }
        }
        
        var guideImage: Image {
            switch self {
            case .one: return Asset.Images.Scene.Guide.guide1.asImage()
            case .two: return Asset.Images.Scene.Guide.guide2.asImage()
            case .three: return Asset.Images.Scene.Guide.guide3.asImage()
            case .four: return Asset.Images.Scene.Guide.guide4.asImage()
            }
        }
        
        var title: String {
            switch self {
            case .one: return "Your Portal to the New, Open Internet"
            case .two: return "Send encrypted messages on social media with persona"
            case .three: return "Multi-Chain wallet, compatible with WalletConnect"
            case .four: return "Back up in time, with cloud / local backup"
            }
        }
    }
}

struct GuideItemView_Previews: PreviewProvider {
    static var previews: some View {
        GuideItemView(page: .one)
        GuideItemView(page: .four)
    }
}
