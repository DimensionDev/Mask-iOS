import UIKit

extension NSDiffableDataSourceSnapshot {
    init(@SectionPackBuilder builder: () -> SectionPack<SectionIdentifierType, ItemIdentifierType>) {
        self = NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType>()
        let sectionPack = builder()

        switch sectionPack {
        case let .single(source):
            self.appendSections([source.section])
            self.appendItems(source.items, toSection: source.section)

        case let .packed(sources):
            for source in sources {
                self.appendSections([source.section])
                self.appendItems(source.items, toSection: source.section)
            }

        case .empty: break
        }
    }

    init(_ pack: SectionPack<SectionIdentifierType, ItemIdentifierType>) {
        self = NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType>()

        switch pack {
        case let .single(source):
            self.appendSections([source.section])
            self.appendItems(source.items, toSection: source.section)

        case let .packed(sources):
            for source in sources {
                self.appendSections([source.section])
                self.appendItems(source.items, toSection: source.section)
            }

        case .empty: break
        }
    }
}

@resultBuilder
enum SectionPackBuilder {
    static func buildBlock<S: Hashable, V: Hashable>(_ components: SectionPack<S, V>...) -> SectionPack<S, V> {
        var tuples: [SectionPackItem<S, V>] = []

        for sectionPack in components {
            switch sectionPack {
            case .empty: continue
            case let .single(item): tuples.append(item)
            case let .packed(sectionPackTuples): tuples.append(contentsOf: sectionPackTuples)
            }
        }

        return .packed(tuples)
    }

    static func buildLimitedAvailability<S: Hashable, V: Hashable>(
        _ component: SectionPack<S, V>
    ) -> SectionPack<S, V> {
        component
    }

    static func buildOptional<S: Hashable, V: Hashable>(_ component: SectionPack<S, V>?) -> SectionPack<S, V> {
        component ?? .empty
    }

    static func buildEither<S: Hashable, V: Hashable>(first component: SectionPack<S, V>) -> SectionPack<S, V> {
        component
    }

    static func buildEither<S: Hashable, V: Hashable>(second component: SectionPack<S, V>) -> SectionPack<S, V> {
        component
    }

    static func buildExpression<S: Hashable, V: Hashable>(_ expression: SectionPack<S, V>) -> SectionPack<S, V> {
        expression
    }
}

enum SectionPack<S: Hashable, V: Hashable> {
    case empty
    case single(SectionPackItem<S, V>)
    case packed([SectionPackItem<S, V>])
}

struct SectionPackItem<S, V> {
    let section: S
    let items: [V]

    init(section: S, items: [V]) {
        self.section = section
        self.items = items
    }
}
