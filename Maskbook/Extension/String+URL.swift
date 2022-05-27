//
//  String+URL.swift
//  Maskbook
//
//  Created by Hugo L on 2022/5/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

extension String {
    func urlEncode() -> String? {
        let characterset = NSCharacterSet(charactersIn: " !*'();:@&=+$,/?%#[]\n").inverted
        let encodeUrlString = self.addingPercentEncoding(withAllowedCharacters: characterset)
        return encodeUrlString
    }
     
    func urlDecod() -> String? {
        return self.removingPercentEncoding 
    }
}
