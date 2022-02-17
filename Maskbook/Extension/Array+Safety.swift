//
//  Array+Safety.swift
//  Maskbook
//
//  Created by Hugo L on 2021/7/30.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

extension Array {
    /* split them into chunks of a size you specify */
    func chunked(into size: Int) -> [[Element]] {
        return stride(from: 0, to: count, by: size).map {
            Array(self[$0 ..< Swift.min($0 + size, count)])
        }
    }
    
    /*
     * using a custom subscript to make array access safer
     * will return optional value
     * https://stackoverflow.com/questions/25329186/safe-bounds-checked-array-lookup-in-swift-through-optional-bindings
     */
    public subscript(safeIndex index: Int) -> Element? {
        return indices.contains(index) ? self[index] : nil
    }
}

extension Array where Element: Hashable {
    var unique: [Element] {
        var uniq = Set<Element>()
        uniq.reserveCapacity(self.count)
        return self.filter {
            return uniq.insert($0).inserted
        }
    }
}
