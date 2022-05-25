//
//  String+Contains.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/30.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

extension String {
    func containsIgnoreCase(string: String) -> Bool {
        lowercased().contains(string.lowercased())
    }
    
    public func replaceFirst(of pattern:String,
                             with replacement:String) -> String {
      if let range = self.range(of: pattern){
        return self.replacingCharacters(in: range, with: replacement)
      }else{
        return self
      }
    }
}
