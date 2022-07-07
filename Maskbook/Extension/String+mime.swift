//
//  String+mime.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

extension String {
    var mimeIsCanSaveToAlbum: Bool {
        mimeIsImage ||
        mimeIsVideo
    }
    
    var mimeIsVideo: Bool {
        containsIgnoreCase(string: "video")
    }
    
    var mimeIsImage: Bool {
        containsIgnoreCase(string: "image")
    }
}
