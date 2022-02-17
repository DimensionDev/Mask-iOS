//
//  InjectValues.swift
//  Maskbook
//
//  Created by yzj on 2021/7/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

// see also https://www.avanderlee.com/swift/dependency-injection/
// this implementation is like @Environment EnvironmentKey and EnvironmentValue
// but we can use it without depending on SwiftUI

protocol InjectValueKey {
    associatedtype InjectValue
    static var defaultInjectValue: InjectValue { get set }
}

struct InjectValues {
    static var current = InjectValues()

    static subscript<T>(_ keyPath: WritableKeyPath<InjectValues, T>) -> T {
        get { current[keyPath: keyPath] }
        set { current[keyPath: keyPath] = newValue }
    }

    static subscript<T: InjectValueKey>(_ key: T.Type) -> T.InjectValue {
        get { key.defaultInjectValue }
        set { key.defaultInjectValue = newValue }
    }
}

@propertyWrapper
struct InjectedProvider<T> {
    var wrappedValue: T {
        InjectValues.current[keyPath: keyPath]
    }

    private let keyPath: KeyPath<InjectValues, T>
    init(_ keyPath: KeyPath<InjectValues, T>) {
        self.keyPath = keyPath
    }
}
