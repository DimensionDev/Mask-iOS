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
    var page: Page
    var contentSize: CGSize
    var dismiss: (() -> Void)?
    
    var isLastOne: Bool {
        page == Page.allCases.last
    }
    
    var pageControlSection: some View {
        VStack(alignment: .center) {
            page.pageControl.resizable().frame(width: 71, height: 6)
        }
    }
    
    var topSpace: CGFloat {
        0.131 * contentSize.height
    }
    
    var textTopSpace: CGFloat {
        0.113 * contentSize.height
    }
    
    var padding: CGFloat {
        0.096 * contentSize.width
    }
    
    var netPaddingTop: CGFloat {
        0.090 * contentSize.width
    }
    
    var content: some View {
        VStack(alignment: .center) {
            Spacer().frame(height: topSpace)
            page.guideImage.resizable().aspectRatio(contentMode: .fit).frame(maxWidth: .infinity)
            Spacer().frame(height: textTopSpace)
            Text(page.title)
                .font(FontStyles.mh4.font)
                .foregroundColor(Asset.Colors.Text.lighter.asColor())
                .multilineTextAlignment(.center)
            if isLastOne {
                Spacer().frame(height: 24)
                Button {
                    dismiss?()
                } label: {
                    Text(L10n.Scene.Guide.letsStart)
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
        .padding(.horizontal, padding)
        .background(
            VStack(spacing: 0) {
                Spacer().frame(height: netPaddingTop)
                Asset.Images.Scene.Guide.net.asImage().resizable().aspectRatio(contentMode: .fit)//.background(Color.red)
                Spacer()
            }
        )
    }
    
    var body: some View {
        content.ignoresSafeArea().background(Color.clear)
    }
}

extension GuideItemView {
    enum Page: Int, CaseIterable, Identifiable {
        var id: Int {
            return rawValue
        }
        
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
            case .one: return L10n.Scene.Guide.description1
            case .two: return L10n.Scene.Guide.description2
            case .three: return L10n.Scene.Guide.description3
            case .four: return  L10n.Scene.Guide.description4
            }
        }
    }
}

struct GuideItemView_Previews: PreviewProvider {
    static var previews: some View {
        GuideView()
    }
}
