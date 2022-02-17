//
//  AVCaptureVideoOrientation.swift
//  Maskbook
//
//  Created by Cirno MainasuK on 2019-7-23.
//  Copyright © 2019 dimension. All rights reserved.
//

import AVKit
import UIKit

extension AVCaptureVideoOrientation {
    var uiInterfaceOrientation: UIInterfaceOrientation {
        switch self {
        case .landscapeLeft:        return .landscapeLeft
        case .landscapeRight:       return .landscapeRight
        case .portrait:             return .portrait
        case .portraitUpsideDown:   return .portraitUpsideDown
        @unknown default:           return .portrait
        }
    }

    init(orientation: UIInterfaceOrientation) {
        switch orientation {
        case .landscapeRight:       self = .landscapeRight
        case .landscapeLeft:        self = .landscapeLeft
        case .portrait:             self = .portrait
        case .portraitUpsideDown:   self = .portraitUpsideDown
        default:                    self = .portrait
        }
    }
}
