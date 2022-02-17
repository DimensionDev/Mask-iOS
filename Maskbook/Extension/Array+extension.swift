//
//  Array+extension.swift
//  Maskbook
//
//  Created by yzj on 2021/7/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

extension Array {
    func element(at index: Int) -> Element? {
        if index < 0 {
            return nil
        }

        guard self.count > index else {
            return nil
        }

        return self[index]
    }
}

public extension Array where Element: Equatable {
   func removeDuplicate() -> Array {
      return self.enumerated().filter { index, value -> Bool in
           return self.firstIndex(of: value) == index
      }.map { _, value in
           value
      }
   }
}
