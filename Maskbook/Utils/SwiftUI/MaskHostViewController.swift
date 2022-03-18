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

class SheetHostViewController<Content: View>: SheetViewController {
    let hostViewController: MaskHostViewController<Content>
    
    init(rootView: Content) {
        hostViewController = MaskHostViewController(rootView: rootView)
        
        super.init(presenter: SheetPresenter(presentStyle: .translucent))
    }
    
    override func buildContent() {
        super.buildContent()
        
        addChild(hostViewController)
        contentView.addSubview(hostViewController.view)
        hostViewController.view.snp.makeConstraints { make in
            make.edges.equalToSuperview()
        }
    }
    
    override func buildLayout() {
        super.buildLayout()
        
        hostViewController.view.snp.makeConstraints {
            $0.top.bottom.equalToSuperview()
            $0.leading.trailing.equalToSuperview()
        }
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        self.view.invalidateIntrinsicContentSize()
    }
}
