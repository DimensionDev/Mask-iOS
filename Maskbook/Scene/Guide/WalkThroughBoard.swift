import SwiftUI

private struct TransformRectKey: PreferenceKey {
    static var defaultValue: ScrollOffset?

    static func reduce(value: inout ScrollOffset?, nextValue: () -> ScrollOffset?) {
        value = nextValue()
    }
}

private struct ScrollOffset: Equatable {
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

struct WalkThroughBoard<V: SplashItemView & View>: View {
    @State
    private var pageItem: V.Item

    private let totalCount: CGFloat

    init(startItem: V.Item) {
        _pageItem = .init(initialValue: startItem)
        totalCount = CGFloat(V.Item.allCases.count)
    }

    var body: some View {
        TabView(selection: $pageItem) {
            ForEach(V.Item.allCases, id: \.self) { item in
                V(item: item)
                    .overlay(
                        GeometryReader { proxy in
                            Color.clear
                                .preference(
                                    key: TransformRectKey.self,
                                    value: .init(proxy.frame(in: .global), item.index)
                                )
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
        }
        .tabViewStyle(.page(indexDisplayMode: .never))
        .withBlueGradient(radius: 0, colorDecorator: .guideGradient)
        .ignoresSafeArea()
        .colorScheme(.light)
        .overlay(
            // indicator control
            VStack {
                Spacer()
                HStack(spacing: indicatorSpacing) {
                    ForEach(V.Item.allCases.indices) { index in
                        Capsule()
                            .fill(Asset.Colors.Background.lightBlue.asColor())
                            .frame(width: self.index == index ? capsuleWidth : indicatorWidth, height: indicatorHeight)
                    }
                }
                .overlay(
                    Capsule()
                        .fill(Asset.Colors.Background.lightBlue.asColor())
                        .frame(width: capsuleWidth, height: indicatorHeight)
                        .offset(x: calculatedOffset),
                    alignment: .leading
                )
            }
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

extension GuideItemView.Page: SplashItem {
    var isFirst: Bool {
        self == .one
    }

    var index: Int { rawValue }
}

struct ItemView: View, SplashItemView {
    typealias Item = GuideItemView.Page
    let item: Item

    init(item: GuideItemView.Page) {
        self.item = item
    }

    var body: some View {
        VStack(alignment: .center) {
            item.guideImage
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(maxWidth: .infinity)

            Text(item.title)
                .font(FontStyles.mh4.font)
                .foregroundColor(Asset.Colors.Text.lighter.asColor())
                .multilineTextAlignment(.center)

            if self.item == .four {
                Spacer().frame(height: 24)
                Button {
                    ()
                } label: {
                    Text(L10n.Scene.Guide.letsStart)
                        .font(FontStyles.bh5.font)
                        .foregroundColor(Asset.Colors.Public.blue.asColor())
                }
                .padding(.horizontal, 29)
                .padding(.vertical, 16)
                .background(Asset.Colors.Background.dark.asColor())
                .cornerRadius(8)
            }

            Spacer()
        }
        .background(
            VStack(spacing: 0) {
                Asset.Images.Scene.Guide.net.asImage().resizable().aspectRatio(contentMode: .fit)
                Spacer()
            }
        )
        .colorScheme(.light)
        .background(
            Color.clear.ignoresSafeArea()
        )
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct SplashBoardPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        WalkThroughBoard<ItemView>(startItem: .one)
    }
}
#endif
