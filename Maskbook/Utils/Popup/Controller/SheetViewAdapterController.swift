//
//  SheetViewAdapterController.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/19.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import SwiftUI
import UIKit
import CoreDataStack
import web3swift

final class SheetViewAdapterController<Content: View>: SheetViewController {
    let rootView: Content
    
    init(rootView: Content) {
        self.rootView = rootView
        super.init(presenter: SheetPresenter(
            presentStyle: .translucent,
            transition: KeyboardSheetTransition())
        )
    }
    
    override func buildContent() {
        super.buildContent()
        
        rootView.asSheetContent(in: self)
    }

    override func buildEvent() {
        super.buildEvent()
    }
}
