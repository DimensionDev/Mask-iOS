//
//  Result+extension.swift
//  Maskbook
//
//  Created by yzj on 2021/9/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

extension Result where Success == Void {
    static var voidSuccess: Result { .success(()) }
}
