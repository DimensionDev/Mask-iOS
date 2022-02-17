//
//  UITableView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/1.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

extension UITableView {
    func deselectRow(with transitionCoordinator: UIViewControllerTransitionCoordinator?, animated: Bool) {
        guard let indexPathForSelectedRow = indexPathForSelectedRow else { return }
        
        guard let transitionCoordinator = transitionCoordinator else {
            deselectRow(at: indexPathForSelectedRow, animated: animated)
            return
        }
        
        transitionCoordinator.animate(alongsideTransition: { _ in
            self.deselectRow(at: indexPathForSelectedRow, animated: animated)
        }, completion: { context in
            if context.isCancelled {
                self.selectRow(at: indexPathForSelectedRow, animated: animated, scrollPosition: .none)
            }
        })
    }
}
