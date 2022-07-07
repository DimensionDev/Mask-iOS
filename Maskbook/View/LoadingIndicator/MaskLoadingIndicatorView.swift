//
//  MaskLoadingIndicatorView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI
import UIKit

struct MaskLoadingIndicatorView: UIViewRepresentable {
    var isAnimating: Bool
    
    func makeUIView(context: Context) -> MaskLoadingIndicator {
        let v = MaskLoadingIndicator()
        return v
    }
    
    func updateUIView(_ uiView: MaskLoadingIndicator, context: Context) {
        if isAnimating {
            uiView.startAnimation()
        } else {
            uiView.stopAnimation()
        }
    }
}
