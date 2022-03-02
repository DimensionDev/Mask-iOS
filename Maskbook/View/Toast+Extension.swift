//
//  Toast+Extension.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/2.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

extension UIViewController {
    func makeToast(message: String? = nil,
                   duration: TimeInterval = ToastManager.shared.duration,
                   position: ToastPosition = ToastManager.shared.position,
                   image: UIImage? = nil,
                   style: ToastStyle = ToastManager.shared.style,
                   completion: ((_ didTap: Bool) -> Void)? = nil)
    {
        view.makeToast(message: message,
                       duration: duration,
                       position: position,
                       image: image,
                       style: style,
                       completion: completion)
    }
}
