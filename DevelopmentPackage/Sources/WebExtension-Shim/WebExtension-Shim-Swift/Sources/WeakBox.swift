//
//  WeakBox.swift
//  WebExtension-Shim
//
//  Created by MainasuK Cirno on 2020/2/27.
//

import Foundation

// Ref: https://www.objc.io/blog/2017/12/28/weak-arrays/
final public class WeakBox<A: AnyObject> {
    weak var unbox: A?
    
    init(_ value: A?) {
        unbox = value
    }
}
