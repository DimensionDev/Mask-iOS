import Foundation
import SwiftyJSON

struct DappScriptPayload<T: Codable>: Decodable {
    private(set) var callback: Int?
    
    @BooleanConverted
    private var print: Bool?

    let parameters: T?
    let action: DappScriptMethod?

    var printable: Bool {
        print ?? false
    }
}

extension DappScriptPayload: JSONProvider {
    var json: JSON? {
        guard let data = try? JSONEncoder().encode(parameters) else {
            return nil
        }
        return try? JSON(data: data)
    }
}

extension JSONProvider where Self == DappScriptPayload<JSON> {
    var json: JSON? { self.parameters }
}

protocol JSONProvider {
    var json: JSON? { get }
}

struct EmptyWrapper: Codable {}

@propertyWrapper
struct BooleanConverted: Codable {
    var wrappedValue: Bool?

    enum BooleanWrapper {
        case int
        case double
        case string
        case bool
    }

    private var boolWrapper = BooleanWrapper.bool

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let stringValue = try? container.decode(String.self) {
            self.boolWrapper = .string
            switch stringValue.lowercased() {
            case "false", "no", "0": wrappedValue = false
            case "true", "yes", "1": wrappedValue = true

            default:
                throw DecodingError.dataCorruptedError(
                    in: container,
                    debugDescription: "Expect true/false, yes/no or 0/1 but`\(stringValue)` instead"
                )
            }
        } else if let intValue = try? container.decode(Int.self) {
            self.boolWrapper = .int
            switch intValue {
            case 0: wrappedValue = false
            case 1: wrappedValue = true

            default:
                throw DecodingError.dataCorruptedError(
                    in: container,
                    debugDescription: "Expect `0` or `1` but found `\(intValue)` instead"
                )
            }
        } else if let doubleValue = try? container.decode(Double.self) {
            self.boolWrapper = .double
            switch doubleValue {
            case 0: wrappedValue = false
            case 1: wrappedValue = true

            default:
                throw DecodingError.dataCorruptedError(
                    in: container,
                    debugDescription: "Expect `0` or `1` but found `\(doubleValue)` instead"
                )
            }
        } else {
            self.boolWrapper = .bool
            wrappedValue = try container.decode(Bool.self)
        }
    }

    func encode(to encoder: Encoder) throws {
        guard let rawValue = self.wrappedValue else {
            return
        }
        var container = encoder.singleValueContainer()

        switch self.boolWrapper {
        case .bool: try container.encode(rawValue)
        case .double: try container.encode(rawValue ? Double(1) : 0.0)
        case .int: try container.encode(rawValue ? Int(1) : 0)
        case .string: try container.encode(rawValue ? "1" : "0")
        }
    }
}


@propertyWrapper
struct BoolConvertedWithInt: Codable {
    var wrappedValue: Bool?

    enum BooleanWrapper {
        case int
        case double
        case string
        case bool
    }

    private var boolWrapper = BooleanWrapper.bool

    init(json: [String: Any], key: String) {
        wrappedValue = json[key]
            .flatMap { withPassword in
                if let value = withPassword as? Int {
                    return value == 1
                } else if let value = withPassword as? Bool {
                    return value
                } else {
                    return nil
                }
            }
    }

    init(_ value: Bool) {
        wrappedValue = value
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let stringValue = try? container.decode(String.self) {
            self.boolWrapper = .string
            switch stringValue.lowercased() {
            case "false", "no", "0": wrappedValue = false
            case "true", "yes", "1": wrappedValue = true

            default:
                throw DecodingError.dataCorruptedError(
                    in: container,
                    debugDescription: "Expect true/false, yes/no or 0/1 but`\(stringValue)` instead"
                )
            }
        } else if let intValue = try? container.decode(Int.self) {
            self.boolWrapper = .int
            switch intValue {
            case 0: wrappedValue = false
            case 1: wrappedValue = true

            default:
                throw DecodingError.dataCorruptedError(
                    in: container,
                    debugDescription: "Expect `0` or `1` but found `\(intValue)` instead"
                )
            }
        } else if let doubleValue = try? container.decode(Double.self) {
            self.boolWrapper = .double
            switch doubleValue {
            case 0: wrappedValue = false
            case 1: wrappedValue = true

            default:
                throw DecodingError.dataCorruptedError(
                    in: container,
                    debugDescription: "Expect `0` or `1` but found `\(doubleValue)` instead"
                )
            }
        } else {
            self.boolWrapper = .bool
            wrappedValue = try container.decode(Bool.self)
        }
    }

    func encode(to encoder: Encoder) throws {
        guard let rawValue = self.wrappedValue else {
            return
        }
        var container = encoder.singleValueContainer()
        try container.encode(rawValue ? Int(1) : 0)
    }
}
