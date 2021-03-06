// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: account.proto
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

/// Create a new account to the StoredKey at specific derivation path. Fail if the StoredKey is not a Hd StoredKey
public struct Api_CreateStoredKeyNewAccountAtPathParam {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var storedKeyData: Data = Data()

  public var name: String = String()

  public var coin: Api_Coin = .ethereum

  public var derivationPath: String = String()

  public var password: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Api_CreateStoredKeyNewAccountAtPathResp {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var account: Api_StoredKeyAccountInfo {
    get {return _account ?? Api_StoredKeyAccountInfo()}
    set {_account = newValue}
  }
  /// Returns true if `account` has been explicitly set.
  public var hasAccount: Bool {return self._account != nil}
  /// Clears the value of `account`. Subsequent reads from it will return its default value.
  public mutating func clearAccount() {self._account = nil}

  public var storedKey: Api_StoredKeyInfo {
    get {return _storedKey ?? Api_StoredKeyInfo()}
    set {_storedKey = newValue}
  }
  /// Returns true if `storedKey` has been explicitly set.
  public var hasStoredKey: Bool {return self._storedKey != nil}
  /// Clears the value of `storedKey`. Subsequent reads from it will return its default value.
  public mutating func clearStoredKey() {self._storedKey = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _account: Api_StoredKeyAccountInfo? = nil
  fileprivate var _storedKey: Api_StoredKeyInfo? = nil
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Api_CreateStoredKeyNewAccountAtPathParam: @unchecked Sendable {}
extension Api_CreateStoredKeyNewAccountAtPathResp: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "api"

extension Api_CreateStoredKeyNewAccountAtPathParam: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".CreateStoredKeyNewAccountAtPathParam"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "StoredKeyData"),
    2: .same(proto: "name"),
    3: .same(proto: "coin"),
    4: .same(proto: "derivationPath"),
    5: .same(proto: "password"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularBytesField(value: &self.storedKeyData) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.name) }()
      case 3: try { try decoder.decodeSingularEnumField(value: &self.coin) }()
      case 4: try { try decoder.decodeSingularStringField(value: &self.derivationPath) }()
      case 5: try { try decoder.decodeSingularStringField(value: &self.password) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.storedKeyData.isEmpty {
      try visitor.visitSingularBytesField(value: self.storedKeyData, fieldNumber: 1)
    }
    if !self.name.isEmpty {
      try visitor.visitSingularStringField(value: self.name, fieldNumber: 2)
    }
    if self.coin != .ethereum {
      try visitor.visitSingularEnumField(value: self.coin, fieldNumber: 3)
    }
    if !self.derivationPath.isEmpty {
      try visitor.visitSingularStringField(value: self.derivationPath, fieldNumber: 4)
    }
    if !self.password.isEmpty {
      try visitor.visitSingularStringField(value: self.password, fieldNumber: 5)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_CreateStoredKeyNewAccountAtPathParam, rhs: Api_CreateStoredKeyNewAccountAtPathParam) -> Bool {
    if lhs.storedKeyData != rhs.storedKeyData {return false}
    if lhs.name != rhs.name {return false}
    if lhs.coin != rhs.coin {return false}
    if lhs.derivationPath != rhs.derivationPath {return false}
    if lhs.password != rhs.password {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Api_CreateStoredKeyNewAccountAtPathResp: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".CreateStoredKeyNewAccountAtPathResp"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "account"),
    2: .same(proto: "storedKey"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularMessageField(value: &self._account) }()
      case 2: try { try decoder.decodeSingularMessageField(value: &self._storedKey) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    try { if let v = self._account {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    } }()
    try { if let v = self._storedKey {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    } }()
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_CreateStoredKeyNewAccountAtPathResp, rhs: Api_CreateStoredKeyNewAccountAtPathResp) -> Bool {
    if lhs._account != rhs._account {return false}
    if lhs._storedKey != rhs._storedKey {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
