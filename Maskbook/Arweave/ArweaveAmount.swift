import Foundation

public struct ArweaveAmount: Equatable {
    
    @NonNegative public var value: Double
    public var unit: Unit
    
    public init(value: Double, unit: ArweaveAmount.Unit) {
        self.value = value
        self.unit = unit
    }
    
    public func converted(to targetUnit: Unit) -> ArweaveAmount {
        
        guard unit != targetUnit else { return self }
        
        switch targetUnit {
        case .AR:
            return ArweaveAmount(value: value / 1e12, unit: .AR)
        case .winston:
            return ArweaveAmount(value: value * 1e12, unit: .winston)
        }
    }
}

public extension ArweaveAmount {
    enum Unit: Equatable {
        case AR
        case winston
    }
}

extension ArweaveAmount: CustomStringConvertible {
    public var description: String {
        return String(format: "%.f", converted(to: .winston).value)
    }
}
