import SwiftUI

struct TransformRectKey: PreferenceKey {
    static var defaultValue: ScrollOffset?

    static func reduce(value: inout ScrollOffset?, nextValue: () -> ScrollOffset?) {
        value = nextValue()
    }
}

struct IndicatorOffsetKey: PreferenceKey {
    static var defaultValue: CGFloat?

    static func reduce(value: inout CGFloat?, nextValue: () -> CGFloat?) {
        value = nextValue()
    }
}

struct ScrollOffset: Equatable {
    // MARK: Lifecycle

    init(_ rect: CGRect, _ index: Int) {
        self.rect = rect
        self.index = index
    }

    // MARK: Internal

    let rect: CGRect
    let index: Int

    func calculatedOffset() -> CGFloat {
        let width = rect.width
        return -(rect.minX - CGFloat(index) * width)
    }
}

struct LayouConfiguration {
    // MARK: Lifecycle

    init(
        showIndicator: Bool = true,
        indicatorOffset: CGPoint = .zero,
        indicatorColor: ColorAsset = Asset.Colors.Background.lightBlue
    ) {
        self.indicatorOffset = indicatorOffset
        self.indicatorColor = indicatorColor
        self.showIndicator = showIndicator
    }

    // MARK: Internal

    let indicatorOffset: CGPoint
    let indicatorColor: ColorAsset
    let showIndicator: Bool
}

struct WalkThroughBoard<V: OnBoardItemView & View>: View {
    // MARK: Lifecycle

    init(
        startItem: V.Item,
        configuration: Binding<LayouConfiguration> = .constant(.init())
    ) {
        _pageItem = .init(initialValue: startItem)
        totalCount = CGFloat(V.Item.allCases.count)
        _configuration = configuration
    }

    // MARK: Internal

    @Binding var configuration: LayouConfiguration

    var body: some View {
        GeometryReader { totalLayoutProxy in
            let frame = totalLayoutProxy.size
            TabView(selection: $pageItem) {
                ForEach(V.Item.allCases, id: \.self) { item in
                    V(item: item)
                        .frame(width: frame.width, height: frame.height)
                        .overlay(
                            GeometryReader { proxy in
                                Color.clear
                                    .preference(
                                        key: TransformRectKey.self,
                                        value: .init(proxy.frame(in: .global), item.index)
                                    )
                                    .frame(width: frame.width)
                            }
                        )
                        .tag(item)
                }
                .onPreferenceChange(TransformRectKey.self, perform: { value in
                    guard let value = value else { return }
                    // in case there is a reuse pool, just gather the current page's data
                    guard value.index == pageItem.index else { return }
                    self.contentWidth <| value.rect.width
                    self.scrollOffset <| value.calculatedOffset()
                })
                .onPreferenceChange(IndicatorOffsetKey.self, perform: { value in
                    guard let value = value else {
                        return
                    }

                    guard configuration.indicatorOffset.y != 0 else {
                        return
                    }

                    let totalHeight = totalLayoutProxy.frame(in: .local).maxY
                    let offset = totalHeight - value - configuration.indicatorOffset.y - totalLayoutProxy.safeAreaInsets.bottom
                    bottomPadding <| offset
                })
            }
            .tabViewStyle(.page(indexDisplayMode: .never))
            .overlay(
                Group {
                    if configuration.showIndicator {
                        CapsuleIndicator(
                            configuration: configuration,
                            totalCount: totalCount,
                            count: V.Item.allCases.count,
                            scrollOffset: $scrollOffset,
                            contentWidth: $contentWidth
                        )
                    }
                }
                // use to move indicator
                .offset(y: -bottomPadding),

                alignment: .bottom
            )
        }
    }

    // MARK: Private

    @State
    private var pageItem: V.Item
    private let totalCount: CGFloat

    @State
    private var bottomPadding: CGFloat = 0

    @State
    private var scrollOffset: CGFloat = 0

    @State
    private var contentWidth: CGFloat = 0
}

infix operator <|: AdditionPrecedence
extension Equatable {
    static func <| (lhs: inout Self, rhs: Self) {
        if lhs != rhs {
            lhs = rhs
        }
    }
}

extension Int: Identifiable {
    public var id: Int { self }
}
