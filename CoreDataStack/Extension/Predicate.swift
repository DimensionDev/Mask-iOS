import Foundation


public final class Predicate<S>: NSCompoundPredicate {
    fileprivate init(from predicate: NSPredicate) {
        super.init(type: .and, subpredicates: [predicate])
    }

    override public init(type: NSCompoundPredicate.LogicalType, subpredicates: [NSPredicate]) {
        super.init(type: type, subpredicates: subpredicates)
    }

    @available(*, unavailable)
    public required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

/// Only use for NSManagedObject as we use NSExpression to make it work
/// stable Types: Date, String, Int
/// optional work types: Date, String

public func == <S, E: Equatable>(lhs: KeyPath<S, E>, rhs: E) -> Predicate<S> {
    let predicate = NSComparisonPredicate(
        leftExpression: NSExpression(forKeyPath: lhs),
        rightExpression: NSExpression(forConstantValue: rhs),
        modifier: .direct,
        type: .equalTo,
        options: []
    )

    return Predicate<S>(from: predicate)
}

public func == <S, E: Equatable>(lhs: KeyPath<S, E?>, rhs: E?) -> Predicate<S> {
    let predicate = NSComparisonPredicate(
        leftExpression: NSExpression(forKeyPath: lhs),
        rightExpression: NSExpression(forConstantValue: rhs),
        modifier: .direct,
        type: .equalTo,
        options: [])

    return Predicate<S>(from: predicate)
}

public func != <S, E: Equatable>(lhs: KeyPath<S, E>, rhs: E) -> Predicate<S> {
    let predicate = NSComparisonPredicate(
        leftExpression: NSExpression(forKeyPath: lhs),
        rightExpression: NSExpression(forConstantValue: rhs),
        modifier: .direct,
        type: .notEqualTo,
        options: []
    )

    return Predicate<S>(from: predicate)
}

public func != <S, E: Equatable>(lhs: KeyPath<S, E?>, rhs: E?) -> Predicate<S> {
    let predicate = NSComparisonPredicate(
        leftExpression: NSExpression(forKeyPath: lhs),
        rightExpression: NSExpression(forConstantValue: rhs),
        modifier: .direct,
        type: .notEqualTo,
        options: []
    )

    return Predicate<S>(from: predicate)
}

public func > <S, C: Comparable>(lhs: KeyPath<S, C>, rhs: C) -> Predicate<S> {
    let predicate = NSComparisonPredicate(
        leftExpression: NSExpression(forKeyPath: lhs),
        rightExpression: NSExpression(forConstantValue: rhs),
        modifier: .direct,
        type: .greaterThan,
        options: []
    )

    return Predicate<S>(from: predicate)
}

public func > <S, C: Comparable>(lhs: KeyPath<S, C?>, rhs: C?) -> Predicate<S> {
    let predicate = NSComparisonPredicate(
        leftExpression: NSExpression(forKeyPath: lhs),
        rightExpression: NSExpression(forConstantValue: rhs),
        modifier: .direct,
        type: .greaterThan,
        options: []
    )

    return Predicate<S>(from: predicate)
}

infix operator -->: AdditionPrecedence
public func --> <S, E: Hashable>(lhs: KeyPath<S, E>, rhs: Set<E>) -> Predicate<S> {
    let predicate = NSComparisonPredicate(
        leftExpression: NSExpression(forKeyPath: lhs),
        rightExpression: NSExpression(forConstantValue: rhs),
        modifier: .direct,
        type: .in,
        options: []
    )

    return Predicate<S>(from: predicate)
}
