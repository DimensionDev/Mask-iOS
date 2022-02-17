// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: validation.proto
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

public struct Api_PasswordValidationParam {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var storedKeyData: Data = Data()

  public var password: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Api_AddressValidationParam {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var address: String = String()

  public var coin: Api_Coin = .ethereum

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Get the version code of MaskWalletCore library
public struct Api_ValidateParam {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var input: Api_ValidateParam.OneOf_Input? = nil

  public var privateKey: String {
    get {
      if case .privateKey(let v)? = input {return v}
      return String()
    }
    set {input = .privateKey(newValue)}
  }

  public var mnemonic: String {
    get {
      if case .mnemonic(let v)? = input {return v}
      return String()
    }
    set {input = .mnemonic(newValue)}
  }

  public var keyStoreJson: String {
    get {
      if case .keyStoreJson(let v)? = input {return v}
      return String()
    }
    set {input = .keyStoreJson(newValue)}
  }

  public var storedKeyPassword: Api_PasswordValidationParam {
    get {
      if case .storedKeyPassword(let v)? = input {return v}
      return Api_PasswordValidationParam()
    }
    set {input = .storedKeyPassword(newValue)}
  }

  public var addressValidationParam: Api_AddressValidationParam {
    get {
      if case .addressValidationParam(let v)? = input {return v}
      return Api_AddressValidationParam()
    }
    set {input = .addressValidationParam(newValue)}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum OneOf_Input: Equatable {
    case privateKey(String)
    case mnemonic(String)
    case keyStoreJson(String)
    case storedKeyPassword(Api_PasswordValidationParam)
    case addressValidationParam(Api_AddressValidationParam)

  #if !swift(>=4.1)
    public static func ==(lhs: Api_ValidateParam.OneOf_Input, rhs: Api_ValidateParam.OneOf_Input) -> Bool {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch (lhs, rhs) {
      case (.privateKey, .privateKey): return {
        guard case .privateKey(let l) = lhs, case .privateKey(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.mnemonic, .mnemonic): return {
        guard case .mnemonic(let l) = lhs, case .mnemonic(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.keyStoreJson, .keyStoreJson): return {
        guard case .keyStoreJson(let l) = lhs, case .keyStoreJson(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.storedKeyPassword, .storedKeyPassword): return {
        guard case .storedKeyPassword(let l) = lhs, case .storedKeyPassword(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.addressValidationParam, .addressValidationParam): return {
        guard case .addressValidationParam(let l) = lhs, case .addressValidationParam(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      default: return false
      }
    }
  #endif
  }

  public init() {}
}

public struct Api_ValidateResp {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var valid: Bool = false

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "api"

extension Api_PasswordValidationParam: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".PasswordValidationParam"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "storedKeyData"),
    2: .same(proto: "password"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularBytesField(value: &self.storedKeyData) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.password) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.storedKeyData.isEmpty {
      try visitor.visitSingularBytesField(value: self.storedKeyData, fieldNumber: 1)
    }
    if !self.password.isEmpty {
      try visitor.visitSingularStringField(value: self.password, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_PasswordValidationParam, rhs: Api_PasswordValidationParam) -> Bool {
    if lhs.storedKeyData != rhs.storedKeyData {return false}
    if lhs.password != rhs.password {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Api_AddressValidationParam: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".AddressValidationParam"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "address"),
    2: .same(proto: "coin"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.address) }()
      case 2: try { try decoder.decodeSingularEnumField(value: &self.coin) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.address.isEmpty {
      try visitor.visitSingularStringField(value: self.address, fieldNumber: 1)
    }
    if self.coin != .ethereum {
      try visitor.visitSingularEnumField(value: self.coin, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_AddressValidationParam, rhs: Api_AddressValidationParam) -> Bool {
    if lhs.address != rhs.address {return false}
    if lhs.coin != rhs.coin {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Api_ValidateParam: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".ValidateParam"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "privateKey"),
    2: .same(proto: "mnemonic"),
    3: .same(proto: "keyStoreJSON"),
    4: .same(proto: "storedKeyPassword"),
    5: .same(proto: "addressValidationParam"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try {
        if self.input != nil {try decoder.handleConflictingOneOf()}
        var v: String?
        try decoder.decodeSingularStringField(value: &v)
        if let v = v {self.input = .privateKey(v)}
      }()
      case 2: try {
        if self.input != nil {try decoder.handleConflictingOneOf()}
        var v: String?
        try decoder.decodeSingularStringField(value: &v)
        if let v = v {self.input = .mnemonic(v)}
      }()
      case 3: try {
        if self.input != nil {try decoder.handleConflictingOneOf()}
        var v: String?
        try decoder.decodeSingularStringField(value: &v)
        if let v = v {self.input = .keyStoreJson(v)}
      }()
      case 4: try {
        var v: Api_PasswordValidationParam?
        if let current = self.input {
          try decoder.handleConflictingOneOf()
          if case .storedKeyPassword(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.input = .storedKeyPassword(v)}
      }()
      case 5: try {
        var v: Api_AddressValidationParam?
        if let current = self.input {
          try decoder.handleConflictingOneOf()
          if case .addressValidationParam(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.input = .addressValidationParam(v)}
      }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every case branch when no optimizations are
    // enabled. https://github.com/apple/swift-protobuf/issues/1034
    switch self.input {
    case .privateKey?: try {
      guard case .privateKey(let v)? = self.input else { preconditionFailure() }
      try visitor.visitSingularStringField(value: v, fieldNumber: 1)
    }()
    case .mnemonic?: try {
      guard case .mnemonic(let v)? = self.input else { preconditionFailure() }
      try visitor.visitSingularStringField(value: v, fieldNumber: 2)
    }()
    case .keyStoreJson?: try {
      guard case .keyStoreJson(let v)? = self.input else { preconditionFailure() }
      try visitor.visitSingularStringField(value: v, fieldNumber: 3)
    }()
    case .storedKeyPassword?: try {
      guard case .storedKeyPassword(let v)? = self.input else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
    }()
    case .addressValidationParam?: try {
      guard case .addressValidationParam(let v)? = self.input else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
    }()
    case nil: break
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_ValidateParam, rhs: Api_ValidateParam) -> Bool {
    if lhs.input != rhs.input {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Api_ValidateResp: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".ValidateResp"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "valid"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularBoolField(value: &self.valid) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.valid != false {
      try visitor.visitSingularBoolField(value: self.valid, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_ValidateResp, rhs: Api_ValidateResp) -> Bool {
    if lhs.valid != rhs.valid {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
