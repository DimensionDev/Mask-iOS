// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: Ethereum.proto
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

/// Input data necessary to create a signed transaction.
public struct Ethereum_SignInput {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var chainID: UInt64 = 0

  /// hex encoded nonce number
  public var nonce: String = String()

  /// hex encoded gas_price number
  /// If > 0, legacy fee scheme is used; if 0, EIP1559 fee scheme is used
  public var gasPrice: String = String()

  /// hex encoded gas_limit number
  public var gasLimit: String = String()

  /// hex encoded maxinmum optional inclusion fee (aka tip) (256-bit number)
  /// used only for EIP1559 fee, disregarded for legacy
  public var maxInclusionFeePerGas: String = String()

  /// hex encoded maxinmum fee (256-bit number)
  /// used only for EIP1559 fee, disregarded for legacy
  public var maxFeePerGas: String = String()

  /// hex encoded amount number
  public var amount: String = String()

  /// Recipient's address.
  public var toAddress: String = String()

  /// payload data
  public var payload: Data = Data()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Transaction signing output.
public struct Ethereum_SignOutput {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// Signed and encoded transaction bytes.
  public var encoded: Data = Data()

  public var v: UInt32 = 0

  public var r: Data = Data()

  public var s: Data = Data()

  /// The payload part, supplied in the input or assembled from input parameters
  public var data: Data = Data()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Ethereum_SignInput: @unchecked Sendable {}
extension Ethereum_SignOutput: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "ethereum"

extension Ethereum_SignInput: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".SignInput"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "chain_id"),
    2: .same(proto: "nonce"),
    3: .standard(proto: "gas_price"),
    4: .standard(proto: "gas_limit"),
    5: .standard(proto: "max_inclusion_fee_per_gas"),
    6: .standard(proto: "max_fee_per_gas"),
    7: .same(proto: "amount"),
    8: .standard(proto: "to_address"),
    9: .same(proto: "payload"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularUInt64Field(value: &self.chainID) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.nonce) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.gasPrice) }()
      case 4: try { try decoder.decodeSingularStringField(value: &self.gasLimit) }()
      case 5: try { try decoder.decodeSingularStringField(value: &self.maxInclusionFeePerGas) }()
      case 6: try { try decoder.decodeSingularStringField(value: &self.maxFeePerGas) }()
      case 7: try { try decoder.decodeSingularStringField(value: &self.amount) }()
      case 8: try { try decoder.decodeSingularStringField(value: &self.toAddress) }()
      case 9: try { try decoder.decodeSingularBytesField(value: &self.payload) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.chainID != 0 {
      try visitor.visitSingularUInt64Field(value: self.chainID, fieldNumber: 1)
    }
    if !self.nonce.isEmpty {
      try visitor.visitSingularStringField(value: self.nonce, fieldNumber: 2)
    }
    if !self.gasPrice.isEmpty {
      try visitor.visitSingularStringField(value: self.gasPrice, fieldNumber: 3)
    }
    if !self.gasLimit.isEmpty {
      try visitor.visitSingularStringField(value: self.gasLimit, fieldNumber: 4)
    }
    if !self.maxInclusionFeePerGas.isEmpty {
      try visitor.visitSingularStringField(value: self.maxInclusionFeePerGas, fieldNumber: 5)
    }
    if !self.maxFeePerGas.isEmpty {
      try visitor.visitSingularStringField(value: self.maxFeePerGas, fieldNumber: 6)
    }
    if !self.amount.isEmpty {
      try visitor.visitSingularStringField(value: self.amount, fieldNumber: 7)
    }
    if !self.toAddress.isEmpty {
      try visitor.visitSingularStringField(value: self.toAddress, fieldNumber: 8)
    }
    if !self.payload.isEmpty {
      try visitor.visitSingularBytesField(value: self.payload, fieldNumber: 9)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Ethereum_SignInput, rhs: Ethereum_SignInput) -> Bool {
    if lhs.chainID != rhs.chainID {return false}
    if lhs.nonce != rhs.nonce {return false}
    if lhs.gasPrice != rhs.gasPrice {return false}
    if lhs.gasLimit != rhs.gasLimit {return false}
    if lhs.maxInclusionFeePerGas != rhs.maxInclusionFeePerGas {return false}
    if lhs.maxFeePerGas != rhs.maxFeePerGas {return false}
    if lhs.amount != rhs.amount {return false}
    if lhs.toAddress != rhs.toAddress {return false}
    if lhs.payload != rhs.payload {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Ethereum_SignOutput: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".SignOutput"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "encoded"),
    2: .same(proto: "v"),
    3: .same(proto: "r"),
    4: .same(proto: "s"),
    5: .same(proto: "data"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularBytesField(value: &self.encoded) }()
      case 2: try { try decoder.decodeSingularUInt32Field(value: &self.v) }()
      case 3: try { try decoder.decodeSingularBytesField(value: &self.r) }()
      case 4: try { try decoder.decodeSingularBytesField(value: &self.s) }()
      case 5: try { try decoder.decodeSingularBytesField(value: &self.data) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.encoded.isEmpty {
      try visitor.visitSingularBytesField(value: self.encoded, fieldNumber: 1)
    }
    if self.v != 0 {
      try visitor.visitSingularUInt32Field(value: self.v, fieldNumber: 2)
    }
    if !self.r.isEmpty {
      try visitor.visitSingularBytesField(value: self.r, fieldNumber: 3)
    }
    if !self.s.isEmpty {
      try visitor.visitSingularBytesField(value: self.s, fieldNumber: 4)
    }
    if !self.data.isEmpty {
      try visitor.visitSingularBytesField(value: self.data, fieldNumber: 5)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Ethereum_SignOutput, rhs: Ethereum_SignOutput) -> Bool {
    if lhs.encoded != rhs.encoded {return false}
    if lhs.v != rhs.v {return false}
    if lhs.r != rhs.r {return false}
    if lhs.s != rhs.s {return false}
    if lhs.data != rhs.data {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
