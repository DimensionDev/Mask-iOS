// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: persona.proto
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

/// Generate a persona
public struct Api_PersonaGenerationParam {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var mnemonic: String = String()

  public var password: String = String()

  public var path: String = String()

  public var curve: Api_PersonaGenerationParam.Curve = .secp256K1

  public var option: Api_EncryptOption {
    get {return _option ?? Api_EncryptOption()}
    set {_option = newValue}
  }
  /// Returns true if `option` has been explicitly set.
  public var hasOption: Bool {return self._option != nil}
  /// Clears the value of `option`. Subsequent reads from it will return its default value.
  public mutating func clearOption() {self._option = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum Curve: SwiftProtobuf.Enum {
    public typealias RawValue = Int
    case secp256K1 // = 0
    case ed25519 // = 1
    case UNRECOGNIZED(Int)

    public init() {
      self = .secp256K1
    }

    public init?(rawValue: Int) {
      switch rawValue {
      case 0: self = .secp256K1
      case 1: self = .ed25519
      default: self = .UNRECOGNIZED(rawValue)
      }
    }

    public var rawValue: Int {
      switch self {
      case .secp256K1: return 0
      case .ed25519: return 1
      case .UNRECOGNIZED(let i): return i
      }
    }

  }

  public init() {}

  fileprivate var _option: Api_EncryptOption? = nil
}

#if swift(>=4.2)

extension Api_PersonaGenerationParam.Curve: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Api_PersonaGenerationParam.Curve] = [
    .secp256K1,
    .ed25519,
  ]
}

#endif  // swift(>=4.2)

public struct Api_PersonaGenerationResp {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var identifier: String {
    get {return _storage._identifier}
    set {_uniqueStorage()._identifier = newValue}
  }

  public var privateKey: Api_JWKResp {
    get {return _storage._privateKey ?? Api_JWKResp()}
    set {_uniqueStorage()._privateKey = newValue}
  }
  /// Returns true if `privateKey` has been explicitly set.
  public var hasPrivateKey: Bool {return _storage._privateKey != nil}
  /// Clears the value of `privateKey`. Subsequent reads from it will return its default value.
  public mutating func clearPrivateKey() {_uniqueStorage()._privateKey = nil}

  public var publicKey: Api_JWKResp {
    get {return _storage._publicKey ?? Api_JWKResp()}
    set {_uniqueStorage()._publicKey = newValue}
  }
  /// Returns true if `publicKey` has been explicitly set.
  public var hasPublicKey: Bool {return _storage._publicKey != nil}
  /// Clears the value of `publicKey`. Subsequent reads from it will return its default value.
  public mutating func clearPublicKey() {_uniqueStorage()._publicKey = nil}

  public var localKey: Api_AesJWKResp {
    get {return _storage._localKey ?? Api_AesJWKResp()}
    set {_uniqueStorage()._localKey = newValue}
  }
  /// Returns true if `localKey` has been explicitly set.
  public var hasLocalKey: Bool {return _storage._localKey != nil}
  /// Clears the value of `localKey`. Subsequent reads from it will return its default value.
  public mutating func clearLocalKey() {_uniqueStorage()._localKey = nil}

  public var option: Api_EncryptOption {
    get {return _storage._option ?? Api_EncryptOption()}
    set {_uniqueStorage()._option = newValue}
  }
  /// Returns true if `option` has been explicitly set.
  public var hasOption: Bool {return _storage._option != nil}
  /// Clears the value of `option`. Subsequent reads from it will return its default value.
  public mutating func clearOption() {_uniqueStorage()._option = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _storage = _StorageClass.defaultInstance
}

public struct Api_JWKResp {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var crv: String = String()

  public var ext: Bool = false

  public var x: String = String()

  public var y: String = String()

  public var keyOps: [String] = []

  public var kty: String = String()

  public var d: String {
    get {return _d ?? String()}
    set {_d = newValue}
  }
  /// Returns true if `d` has been explicitly set.
  public var hasD: Bool {return self._d != nil}
  /// Clears the value of `d`. Subsequent reads from it will return its default value.
  public mutating func clearD() {self._d = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _d: String? = nil
}

public struct Api_AesJWKResp {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var alg: String = String()

  public var ext: Bool = false

  public var k: String = String()

  public var keyOps: [String] = []

  public var kty: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Api_PersonaGenerationParam: @unchecked Sendable {}
extension Api_PersonaGenerationParam.Curve: @unchecked Sendable {}
extension Api_PersonaGenerationResp: @unchecked Sendable {}
extension Api_JWKResp: @unchecked Sendable {}
extension Api_AesJWKResp: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "api"

extension Api_PersonaGenerationParam: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".PersonaGenerationParam"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "mnemonic"),
    2: .same(proto: "password"),
    3: .same(proto: "path"),
    4: .same(proto: "curve"),
    5: .same(proto: "option"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.mnemonic) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.password) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.path) }()
      case 4: try { try decoder.decodeSingularEnumField(value: &self.curve) }()
      case 5: try { try decoder.decodeSingularMessageField(value: &self._option) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    if !self.mnemonic.isEmpty {
      try visitor.visitSingularStringField(value: self.mnemonic, fieldNumber: 1)
    }
    if !self.password.isEmpty {
      try visitor.visitSingularStringField(value: self.password, fieldNumber: 2)
    }
    if !self.path.isEmpty {
      try visitor.visitSingularStringField(value: self.path, fieldNumber: 3)
    }
    if self.curve != .secp256K1 {
      try visitor.visitSingularEnumField(value: self.curve, fieldNumber: 4)
    }
    try { if let v = self._option {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
    } }()
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_PersonaGenerationParam, rhs: Api_PersonaGenerationParam) -> Bool {
    if lhs.mnemonic != rhs.mnemonic {return false}
    if lhs.password != rhs.password {return false}
    if lhs.path != rhs.path {return false}
    if lhs.curve != rhs.curve {return false}
    if lhs._option != rhs._option {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Api_PersonaGenerationParam.Curve: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "Secp256k1"),
    1: .same(proto: "Ed25519"),
  ]
}

extension Api_PersonaGenerationResp: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".PersonaGenerationResp"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "identifier"),
    2: .same(proto: "privateKey"),
    3: .same(proto: "publicKey"),
    4: .same(proto: "localKey"),
    5: .same(proto: "option"),
  ]

  fileprivate class _StorageClass {
    var _identifier: String = String()
    var _privateKey: Api_JWKResp? = nil
    var _publicKey: Api_JWKResp? = nil
    var _localKey: Api_AesJWKResp? = nil
    var _option: Api_EncryptOption? = nil

    static let defaultInstance = _StorageClass()

    private init() {}

    init(copying source: _StorageClass) {
      _identifier = source._identifier
      _privateKey = source._privateKey
      _publicKey = source._publicKey
      _localKey = source._localKey
      _option = source._option
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        // The use of inline closures is to circumvent an issue where the compiler
        // allocates stack space for every case branch when no optimizations are
        // enabled. https://github.com/apple/swift-protobuf/issues/1034
        switch fieldNumber {
        case 1: try { try decoder.decodeSingularStringField(value: &_storage._identifier) }()
        case 2: try { try decoder.decodeSingularMessageField(value: &_storage._privateKey) }()
        case 3: try { try decoder.decodeSingularMessageField(value: &_storage._publicKey) }()
        case 4: try { try decoder.decodeSingularMessageField(value: &_storage._localKey) }()
        case 5: try { try decoder.decodeSingularMessageField(value: &_storage._option) }()
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every if/case branch local when no optimizations
      // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
      // https://github.com/apple/swift-protobuf/issues/1182
      if !_storage._identifier.isEmpty {
        try visitor.visitSingularStringField(value: _storage._identifier, fieldNumber: 1)
      }
      try { if let v = _storage._privateKey {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
      } }()
      try { if let v = _storage._publicKey {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
      } }()
      try { if let v = _storage._localKey {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
      } }()
      try { if let v = _storage._option {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
      } }()
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_PersonaGenerationResp, rhs: Api_PersonaGenerationResp) -> Bool {
    if lhs._storage !== rhs._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((lhs._storage, rhs._storage)) { (_args: (_StorageClass, _StorageClass)) in
        let _storage = _args.0
        let rhs_storage = _args.1
        if _storage._identifier != rhs_storage._identifier {return false}
        if _storage._privateKey != rhs_storage._privateKey {return false}
        if _storage._publicKey != rhs_storage._publicKey {return false}
        if _storage._localKey != rhs_storage._localKey {return false}
        if _storage._option != rhs_storage._option {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Api_JWKResp: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".JWKResp"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "crv"),
    3: .same(proto: "ext"),
    4: .same(proto: "x"),
    5: .same(proto: "y"),
    6: .standard(proto: "key_ops"),
    7: .same(proto: "kty"),
    8: .same(proto: "d"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.crv) }()
      case 3: try { try decoder.decodeSingularBoolField(value: &self.ext) }()
      case 4: try { try decoder.decodeSingularStringField(value: &self.x) }()
      case 5: try { try decoder.decodeSingularStringField(value: &self.y) }()
      case 6: try { try decoder.decodeRepeatedStringField(value: &self.keyOps) }()
      case 7: try { try decoder.decodeSingularStringField(value: &self.kty) }()
      case 8: try { try decoder.decodeSingularStringField(value: &self._d) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    if !self.crv.isEmpty {
      try visitor.visitSingularStringField(value: self.crv, fieldNumber: 1)
    }
    if self.ext != false {
      try visitor.visitSingularBoolField(value: self.ext, fieldNumber: 3)
    }
    if !self.x.isEmpty {
      try visitor.visitSingularStringField(value: self.x, fieldNumber: 4)
    }
    if !self.y.isEmpty {
      try visitor.visitSingularStringField(value: self.y, fieldNumber: 5)
    }
    if !self.keyOps.isEmpty {
      try visitor.visitRepeatedStringField(value: self.keyOps, fieldNumber: 6)
    }
    if !self.kty.isEmpty {
      try visitor.visitSingularStringField(value: self.kty, fieldNumber: 7)
    }
    try { if let v = self._d {
      try visitor.visitSingularStringField(value: v, fieldNumber: 8)
    } }()
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_JWKResp, rhs: Api_JWKResp) -> Bool {
    if lhs.crv != rhs.crv {return false}
    if lhs.ext != rhs.ext {return false}
    if lhs.x != rhs.x {return false}
    if lhs.y != rhs.y {return false}
    if lhs.keyOps != rhs.keyOps {return false}
    if lhs.kty != rhs.kty {return false}
    if lhs._d != rhs._d {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Api_AesJWKResp: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".AesJWKResp"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "alg"),
    2: .same(proto: "ext"),
    3: .same(proto: "k"),
    4: .standard(proto: "key_ops"),
    5: .same(proto: "kty"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.alg) }()
      case 2: try { try decoder.decodeSingularBoolField(value: &self.ext) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.k) }()
      case 4: try { try decoder.decodeRepeatedStringField(value: &self.keyOps) }()
      case 5: try { try decoder.decodeSingularStringField(value: &self.kty) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.alg.isEmpty {
      try visitor.visitSingularStringField(value: self.alg, fieldNumber: 1)
    }
    if self.ext != false {
      try visitor.visitSingularBoolField(value: self.ext, fieldNumber: 2)
    }
    if !self.k.isEmpty {
      try visitor.visitSingularStringField(value: self.k, fieldNumber: 3)
    }
    if !self.keyOps.isEmpty {
      try visitor.visitRepeatedStringField(value: self.keyOps, fieldNumber: 4)
    }
    if !self.kty.isEmpty {
      try visitor.visitSingularStringField(value: self.kty, fieldNumber: 5)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Api_AesJWKResp, rhs: Api_AesJWKResp) -> Bool {
    if lhs.alg != rhs.alg {return false}
    if lhs.ext != rhs.ext {return false}
    if lhs.k != rhs.k {return false}
    if lhs.keyOps != rhs.keyOps {return false}
    if lhs.kty != rhs.kty {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
