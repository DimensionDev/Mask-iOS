//
//  SheetPresenter.swift
//  Maskbook
//
//  Created by yzj on 2021/7/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class SheetPresenter: Presenter {
    override init(presentStyle: PresentStyle, transition: Transition = SheetTransition()) {
        super.init(presentStyle: presentStyle, transition: transition)
    }
    
    override func interactionControllerForDismissal(
        using animator: UIViewControllerAnimatedTransitioning
    ) -> UIViewControllerInteractiveTransitioning? {
        transition.isInteracting ? transition : nil
    }
}
