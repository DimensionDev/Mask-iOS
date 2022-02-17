//
//  DownloadMaskActivity.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class DownloadMaskActivity: UIActivity {
    var url: URL
    
    init(url: URL) {
        self.url = url
    }

    override var activityType: UIActivity.ActivityType? {
        return UIActivity.ActivityType("com.maskbook.safari-activity")
    }
    
    override var activityTitle: String? {
        return L10n.Scene.Share.sharelink
    }
    
    override var activityImage: UIImage? {
        return UIImage(systemName: "safari")
    }

    override func canPerform(withActivityItems activityItems: [Any]) -> Bool {
        return true
    }
    
    override var activityViewController: UIViewController? {
        return nil
    }
    
    override func perform() {
        Coordinator.main.present(scene: .safariView(url: url as URL), transition: .modal(animated: true))
        activityDidFinish(true)
    }
}
