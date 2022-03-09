//
//  Dismissable.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/9.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit
import SwiftUI

protocol Dismissable {
    var topViewController: UIViewController? { get }
    var presentationMode: Binding<PresentationMode> { get }
    func dismiss()
}

extension Dismissable {
    var topViewController: UIViewController? {
        UIApplication.getTopViewController()
    }
    
    func dismiss() {
        if #available(iOS 15, *) {
            presentationMode.wrappedValue.dismiss()
        } else {
            topViewController?.dismiss(animated: true, completion: nil)
        }
    }
}
