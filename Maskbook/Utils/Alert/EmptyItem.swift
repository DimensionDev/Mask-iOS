import Foundation

extension AlertItemRepresentable where Self == EmptyItem {
    static var empty: EmptyItem { .init() }
}

struct EmptyItem: AlertItemRepresentable {}
