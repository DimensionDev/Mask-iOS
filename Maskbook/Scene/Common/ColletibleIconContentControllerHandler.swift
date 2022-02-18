//
//  ColletibleIconContentControllerHandler.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import WebKit

class ColletibleIconContentControllerHandler: NSObject, WKScriptMessageHandler {
    weak var imageView: UIImageView?
    
    init(_ imageView: UIImageView?) {
        self.imageView = imageView
        super.init()
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if message.name == CollectibleIconImageView.webProgressMessage,
           let progress: NSNumber = message.body as? NSNumber,
           progress.intValue == 1 {
            imageView?.isHidden = true
        }
    }
}
