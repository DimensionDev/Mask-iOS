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
    let rect: CGRect
    let index: Int

    init(_ rect: CGRect, _ index: Int) {
        self.rect = rect
        self.index = index
    }

    func calculatedOffset() -> CGFloat {
        let width = rect.width
        return -(rect.minX - CGFloat(index) * width)
    }
}

struct LayouConfiguration {
    let indicatorOffset: CGPoint
    let indicatorColor: ColorAsset
    let showIndicator: Bool

    init(
        showIndicator: Bool = true,
        indicatorOffset: CGPoint = .zero,
        indicatorColor: ColorAsset = Asset.Colors.Background.lightBlue
    ) {
        self.indicatorOffset = indicatorOffset
        self.indicatorColor = indicatorColor
        self.showIndicator = showIndicator
    }
}

struct WalkThroughBoard<V: OnBoardItemView & View>: View {
    @State
    private var pageItem: V.Item
    private let totalCount: CGFloat

    @State
    private var bottomPadding: CGFloat = 0

    @Binding var configuration: LayouConfiguration

    init(
        startItem: V.Item,
        configuration: Binding<LayouConfiguration> = .constant(.init())
    ) {
        _pageItem = .init(initialValue: startItem)
        totalCount = CGFloat(V.Item.allCases.count)
        _configuration = configuration
    }

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
                        capsuleIndicator
                    }
                }
                // use to move indicator
                .offset(y: -bottomPadding)
                ,
                alignment: .bottom
            )
        }
    }

    private var capsuleIndicator: some View {
        // indicator control
        HStack(spacing: indicatorSpacing) {
            ForEach(V.Item.allCases.indices) { index in
                Capsule()
                    .fill(
                        self.index == index
                        ? configuration.indicatorColor.asColor()
                        : Asset.Colors.Background.lightBlue.asColor()
                    )
                    .frame(
                        width: self.index == index
                        ? capsuleWidth
                        : indicatorWidth,
                        height: indicatorHeight
                    )
            }
        }
        .overlay(
            Capsule()
                .fill(configuration.indicatorColor.asColor())
                .frame(width: capsuleWidth, height: indicatorHeight)
                .offset(x: calculatedOffset)
            ,
            alignment: .leading
        )
    }

    private let capsuleWidth: CGFloat = 20
    private let indicatorWidth: CGFloat = 10
    private let indicatorHeight: CGFloat = 6
    private let indicatorSpacing: CGFloat = 7

    var index: Int {
        guard !totalCount.isZero else {
            return 0
        }
        let progress = round(scrollOffset / contentWidth)
        let index = max(0, min(progress, totalCount - 1))

        let value = Int(index)

        return value
    }

    var calculatedOffset: CGFloat {
        guard !contentWidth.isZero else {
            return 0
        }
        let progress = scrollOffset / contentWidth
        let maxWidth = indicatorWidth + indicatorSpacing
        let value = progress * maxWidth

        return value
    }

    @State
    private var scrollOffset: CGFloat = 0

    @State
    private var contentWidth: CGFloat = 0
}

infix operator <| : AdditionPrecedence
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
