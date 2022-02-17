//
//  MaskWrapper.swift
//  Maskbook
//
//  Created by yzj on 2021/8/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import CombineEvent

extension CombineEvent.Combine where Base: AnyObject {
    func apply(_ configuration: @escaping (Base) -> Void) -> Base {
        configuration(base)
        return base
    }
}
