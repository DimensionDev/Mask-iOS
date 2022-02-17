//
//  DerivationPath.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

/// Represents a hierarchical determinisic derivation path.
public struct DerivationPath: Codable, CustomStringConvertible {
    private(set) var indexCount = 5

    /// List of indices in the derivation path.
    public private(set) var indices = [Index]()

    /// Address purpose, each coin will have a different value.
    public var purpose: UInt32 {
        get {
            return indices[0].value
        }
        set {
            indices[0] = Index(newValue, hardened: true)
        }
    }

    /// Coin type distinguishes between main net, test net, and forks.
    public var coinType: UInt32 {
        get {
            return indices[1].value
        }
        set {
            indices[1] = Index(newValue, hardened: true)
        }
    }

    /// Account number.
    public var account: UInt32 {
        get {
            return indices[2].value
        }
        set {
            indices[2] = Index(newValue, hardened: true)
        }
    }

    /// Change or private addresses will set this to 1.
    public var change: UInt32 {
        get {
            return indices[3].value
        }
        set {
            indices[3] = Index(newValue, hardened: false)
        }
    }

    /// Address number
    public var address: UInt32 {
        get {
            return indices[4].value
        }
        set {
            indices[4] = Index(newValue, hardened: false)
        }
    }

    init(indices: [Index]) {
        precondition(indices.count == indexCount, "Not enough indices")
        self.indices = indices
    }

    /// Creates a `DerivationPath` by components.
    public init(purpose: UInt32, coin: UInt32, account: UInt32 = 0, change: UInt32 = 0, address: UInt32 = 0) {
        self.indices = [Index](repeating: Index(0), count: indexCount)
        self.purpose = purpose
        self.coinType = coin
        self.account = account
        self.change = change
        self.address = address
    }

    /// Creates a derivation path with a string description like `m/10/0/2'/3`
    public init?(_ string: String) {
        let components = string.split(separator: "/")
        for component in components {
            if component == "m" {
                continue
            }
            if component.hasSuffix("'") {
                guard let index = UInt32(component.dropLast()) else {
                    return nil
                }
                indices.append(Index(index, hardened: true))
            } else {
                guard let index = UInt32(component) else {
                    return nil
                }
                indices.append(Index(index, hardened: false))
            }
        }
        guard indices.count == indexCount else {
            return nil
        }
    }

    /// String representation.
    public var description: String {
        return "m/" + indices.map({ $0.description }).joined(separator: "/")
    }

    public static func == (lhs: DerivationPath, rhs: DerivationPath) -> Bool {
        return lhs.indices == rhs.indices
    }
}

extension DerivationPath {
    /// Derivation path index.
    public struct Index: Codable, Hashable, CustomStringConvertible {
        /// Index value.
        public var value: UInt32

        /// Whether the index is hardened.
        public var hardened: Bool

        /// The derivation index.
        public var derivationIndex: UInt32 {
            if hardened {
                return UInt32(value) | 0x80000000
            } else {
                return UInt32(value)
            }
        }

        public init(_ value: UInt32, hardened: Bool = true) {
            self.value = value
            self.hardened = hardened
        }

        public static func == (lhs: Index, rhs: Index) -> Bool {
            return lhs.value == rhs.value && lhs.hardened == rhs.hardened
        }

        public var description: String {
            if hardened {
                return "\(value)'"
            } else {
                return value.description
            }
        }
    }
}

extension DerivationPath: Equatable {}
