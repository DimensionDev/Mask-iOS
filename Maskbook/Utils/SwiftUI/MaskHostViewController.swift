//
//  MaskHostViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftUI
import UIKit

class MaskHostViewController<Content: View>: UIHostingController<Content> {
    var statusBarStyle: UIStatusBarStyle = .lightContent
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        statusBarStyle
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        self.view.invalidateIntrinsicContentSize()
    }
}

/// An adapter for `SheetView`. The distance between `content` and the gray pan indicator is 25 pt. The distance between `content` and `safeArea.bottom` is 20 pt.
/// ** You need to subtract `safeArea.bottom` (34) in the design documents. **
struct SheetViewAdapterView<Content: View>: View {
    let rootView: Content
    
    var body: some View {
        rootView
            .padding(.top, 23)
            .padding(.bottom, 20)
    }
}

class SheetViewAdapterViewController<Content: View>: SheetViewController {
    let hostViewController: MaskHostViewController<SheetViewAdapterView<Content>>
    
    init(rootView: Content) {
        let viewAdapted = SheetViewAdapterView(rootView: rootView)
        hostViewController = MaskHostViewController(rootView: viewAdapted)
        
        super.init(presenter: SheetPresenter(presentStyle: .translucent))
    }
    
    override func buildContent() {
        super.buildContent()
        
        addChild(hostViewController)
        contentView.addSubview(hostViewController.view)
    }
    
    override func buildLayout() {
        super.buildLayout()
        
        hostViewController.view.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        self.view.invalidateIntrinsicContentSize()
    }
}
