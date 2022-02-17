//
//  InjectedValueKeys.swift
//  Maskbook
//
//  Created by yzj on 2021/8/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

extension InjectValues {
    var userDefaults: UserDefaults {
        Self[UserDefaultKey.self]
    }
}

private enum UserDefaultKey: InjectValueKey {
    static var defaultInjectValue: UserDefaults = maskUserDefaults
}
