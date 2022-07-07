//
//  String+URL.swift
//  Maskbook
//
//  Created by Hugo L on 2022/5/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

extension String {
    func URLEncoded() -> String? {
        let characterset = NSCharacterSet(charactersIn: " !*'();:@&=+$,/?%#[]\n").inverted
        let encodeUrlString = self.addingPercentEncoding(withAllowedCharacters: characterset)
        return encodeUrlString
    }
     
    func URLDecoded() -> String? {
        return self.removingPercentEncoding 
    }
}
