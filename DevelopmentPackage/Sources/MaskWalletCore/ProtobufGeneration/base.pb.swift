// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: base.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that you are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

public enum Api_Coin: SwiftProtobuf.Enum {
  public typealias RawValue = Int
  case ethereum // = 0
  case polkadot // = 1
  case solana // = 2
  case UNRECOGNIZED(Int)

  public init() {
    self = .ethereum
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .ethereum
    case 1: self = .polkadot
    case 2: self = .solana
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public var rawValue: Int {
    switch self {
    case .ethereum: return 0
    case .polkadot: return 1
    case .solana: return 2
    case .UNRECOGNIZED(let i): return i
    }
  }

}

#if swift(>=4.2)

extension Api_Coin: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Api_Coin] = [
    .ethereum,
    .polkadot,
    .solana,
  ]
}

#endif  // swift(>=4.2)

public enum Api_StoredKeyType: SwiftProtobuf.Enum {
  public typealias RawValue = Int
  case privateKey // = 0
  case mnemonic // = 1
  case UNRECOGNIZED(Int)

  public init() {
    self = .privateKey
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .privateKey
    case 1: self = .mnemonic
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public var rawValue: Int {
    switch self {
    case .privateKey: return 0
    case .mnemonic: return 1
    case .UNRECOGNIZED(let i): return i
    }
  }

}

#if swift(>=4.2)

extension Api_StoredKeyType: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Api_StoredKeyType] = [
    .privateKey,
    .mnemonic,
  ]
}

#endif  // swift(>=4.2)

public enum Api_StoredKeyImportType: SwiftProtobuf.Enum {
  public typealias RawValue = Int
  case privateKeyImportType // = 0
  case mnemonicImportType // = 1
  case keyStoreJsonimportType // = 2
  case UNRECOGNIZED(Int)

  public init() {
    self = .privateKeyImportType
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .privateKeyImportType
    case 1: self = .mnemonicImportType
    case 2: self = .keyStoreJsonimportType
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public var rawValue: Int {
    switch self {
    case .privateKeyImportType: return 0
    case .mnemonicImportType: return 1
    case .keyStoreJsonimportType: return 2
    case .UNRECOGNIZED(let i): return i
    }
  }

}

#if swift(>=4.2)

extension Api_StoredKeyImportType: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Api_StoredKeyImportType] = [
    .privateKeyImportType,
    .mnemonicImportType,
    .keyStoreJsonimportType,
  ]
}

#endif  // swift(>=4.2)

public enum Api_StoredKeyExportType: SwiftProtobuf.Enum {
  public typealias RawValue = Int
  case privateKeyExportType // = 0
  case mnemonicExportType // = 1
  case keyStoreJsonexportType // = 2
  case UNRECOGNIZED(Int)

  public init() {
    self = .privateKeyExportType
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .privateKeyExportType
    case 1: self = .mnemonicExportType
    case 2: self = .keyStoreJsonexportType
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public var rawValue: Int {
    switch self {
    case .privateKeyExportType: return 0
    case .mnemonicExportType: return 1
    case .keyStoreJsonexportType: return 2
    case .UNRECOGNIZED(let i): return i
    }
  }

}

#if swift(>=4.2)

extension Api_StoredKeyExportType: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Api_StoredKeyExportType] = [
    .privateKeyExportType,
    .mnemonicExportType,
    .keyStoreJsonexportType,
  ]
}

#endif  // swift(>=4.2)

public struct Api_StoredKeyInfo {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var id: String = String()

  /// The unique hash of the StoredKey, users could check whether two StoredKeys are same by comparing the hashes
  public var hash: String = String()

  public var type: Api_StoredKeyType = .privateKey

  /// Raw data of the StoredKey, used in requests required an existing StoredKey
  public var data: Data = Data()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Api_StoredKeyAccountInfo {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var address: String = String()

  public var name: String = String()

  public var derivationPath: String = String()

  /// Coin id
  public var coin: String = String()

  public var extendedPublicKey: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Api_Coin: @unchecked Sendable {}
extension Api_StoredKeyType: @unchecked Sendable {}
extension Api_StoredKeyImportType: @unchecked Sendable {}
extension Api_StoredKeyExportType: @unchecked Sendable {}
extension Api_StoredKeyInfo: @unchecked Sendable {}
extension Api_StoredKeyAccountInfo: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "api"

extension Api_Coin: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "Ethereum"),
    1: .same(proto: "Polkadot"),
    2: .same(proto: "Solana"),
  ]
}

extension Api_StoredKeyType: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "PrivateKey"),
    1: .same(proto: "Mnemonic"),
  ]
}

extension Api_StoredKeyImportType: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "PrivateKeyImportType"),
    1: .same(proto: "MnemonicImportType"),
    2: .same(proto: "KeyStoreJSONImportType"),
  ]
}

extension Api_StoredKeyExportType: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "PrivateKeyExportType"),
    1: .same(proto: "MnemonicExportType"),
    2: .same(proto: "KeyStoreJSONExportType"),
  ]
}

extension Api_StoredKeyInfo: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".StoredKeyInfo"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "id"),
    2: .same(proto: "hash"),
    3: .same(proto: "type"),
    4: .same(proto: "data"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.id) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.hash) }()
      case 3: try { try decoder.decodeSingularEnumField(value: &self.type) }()
      case 4: try { try decoder.decodeSingularBytesField(value: &self.data) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.id.isEmpty {
      try visitor.visitSingularStringField(value: self.id, fieldNumber: 1)
    }
    if !self.hash.isEmpty {
      try visitor.visitSingularStringField(value: self.hash, fieldNumber: 2)
    }
    if self.type != .privateKey {
      try visitor.visitSingularEnumField(value: self.type, fieldNumber: 3)
    }
    if !self.data.isEmpty {
      try visitor.visitSingularBytesField(value: self.data, fieldNumber: 4)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_StoredKeyInfo, rhs: Api_StoredKeyInfo) -> Bool {
    if lhs.id != rhs.id {return false}
    if lhs.hash != rhs.hash {return false}
    if lhs.type != rhs.type {return false}
    if lhs.data != rhs.data {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Api_StoredKeyAccountInfo: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".StoredKeyAccountInfo"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "address"),
    2: .same(proto: "name"),
    3: .same(proto: "derivationPath"),
    4: .same(proto: "coin"),
    5: .same(proto: "extendedPublicKey"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.address) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.name) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.derivationPath) }()
      case 4: try { try decoder.decodeSingularStringField(value: &self.coin) }()
      case 5: try { try decoder.decodeSingularStringField(value: &self.extendedPublicKey) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.address.isEmpty {
      try visitor.visitSingularStringField(value: self.address, fieldNumber: 1)
    }
    if !self.name.isEmpty {
      try visitor.visitSingularStringField(value: self.name, fieldNumber: 2)
    }
    if !self.derivationPath.isEmpty {
      try visitor.visitSingularStringField(value: self.derivationPath, fieldNumber: 3)
    }
    if !self.coin.isEmpty {
      try visitor.visitSingularStringField(value: self.coin, fieldNumber: 4)
    }
    if !self.extendedPublicKey.isEmpty {
      try visitor.visitSingularStringField(value: self.extendedPublicKey, fieldNumber: 5)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_StoredKeyAccountInfo, rhs: Api_StoredKeyAccountInfo) -> Bool {
    if lhs.address != rhs.address {return false}
    if lhs.name != rhs.name {return false}
    if lhs.derivationPath != rhs.derivationPath {return false}
    if lhs.coin != rhs.coin {return false}
    if lhs.extendedPublicKey != rhs.extendedPublicKey {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}