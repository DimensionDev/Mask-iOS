import Combine
import Foundation
import SwiftUI

import Introspect

struct InfinityCycleView<V: OnBoardItemView & View>: View {
    // MARK: Lifecycle

    init(
        configuration: LayouConfiguration = .init(),
        geoProxy: GeometryProxy,
        @ViewBuilder build: @escaping (Item<V.Item>) -> V
    ) {
        self.configuration = configuration
        self.proxy = geoProxy
        self.content = build
    }

    // MARK: Internal

    struct Item<V: OnBoardItem>: Hashable, Identifiable {
        let index: Int
        let animated: Bool
        let content: V

        var id: String {
            "\(index)\(content)"
        }
    }

    let content: (Item<V.Item>) -> V

    var body: some View {
        ScrollView(.horizontal) {
            LazyHStack(spacing: 0) {
                ForEach(viewModel.totalItems, id: \.self) { item in
                    content(item)
                        .id(item)
                        .frame(width: proxy.size.width, height: proxy.size.height)
                }
            }
            .onPreferenceChange(IndicatorOffsetKey.self) { value in
                if let offset = value {
                    // offset stands for text position + safeareatopEdge
                    // onfiguration.indicatorOffset.y stans for spacing between indicator and text
                    indicatorOffsetY <| (offset - proxy.safeAreaInsets.top + configuration.indicatorOffset.y)
                }
            }
        }
        .introspectScrollView { scrollView in
            scrollView.isDirectionalLockEnabled = true
            scrollView.isPagingEnabled = true
            scrollView.delegate = viewModel

            if !viewModel.scrollViewDidScroll {
                viewModel.contentSize = scrollView.frame.size
                viewModel.scrollViewDidScroll(scrollView)
                viewModel.scrollView = scrollView
                viewModel.scroll(toItem: viewModel.item)
            }
        }
        .onChange(of: viewModel.item) { newValue in
            viewModel.scroll(toItem: newValue)
        }
        .onAppear {
            viewModel.startTimer()
        }
        .overlay(
            Group {
                if configuration.showIndicator {
                    CapsuleIndicator(
                        configuration: configuration,
                        totalCount: CGFloat(V.Item.allCases.count),
                        count: V.Item.allCases.count,
                        scrollOffset: $viewModel.scrolloffsetX,
                        contentWidth: $viewModel.contentSize.width
                    )
                }
            }
            .offset(y: indicatorOffsetY),
            alignment: .top
        )
    }

    // MARK: Private

    private final class TimerViewModel<V: OnBoardItem>: NSObject, ObservableObject, UIScrollViewDelegate {
        // MARK: Lifecycle

        override init() {
            let groupItemCount = V.allCases.count
            let maxIndex = dupilcateGroups * groupItemCount
            let startIndex: Int = {
                var middle = maxIndex / 2
                while middle > 0 {
                    switch middle % groupItemCount {
                    case 0: return middle
                    default: middle -= 1
                    }
                }

                return 0
            }()
            let content = V(index: startIndex)
            self.item = .init(index: startIndex, animated: false, content: content)
            self.maxIndex = maxIndex

            super.init()
            self.totalItems = (0 ..< maxIndex).map {
                Item(index: $0, animated: true, content: V(index: $0))
            }
        }

        // MARK: Internal

        @Published var item: Item<V>

        @Published
        private(set) var totalItems: [Item<V>] = []
        let maxIndex: Int

        @Published
        var contentSize: CGSize = .zero

        @Published
        var scrolloffsetX: CGFloat = 0

        weak var scrollView: UIScrollView?
        private(set) var scrollViewDidScroll = false

        func startTimer() {
            cancelableStorage = []
            Timer.publish(every: 2, on: .main, in: .common)
                .autoconnect()
                .receive(on: RunLoop.main)
                .sink { [weak self] _ in
                    guard let self = self else { return }
                    let targetIndex = self.item.index + 1
                    let targetValue = Item<V>.init(index: targetIndex, animated: true, content: .init(index: targetIndex))
                    self.item = targetValue

                    withAnimation {
                        self.scrolloffsetX = CGFloat(targetValue.index % V.allCases.count) * self.contentSize.width
                    }

                    // as `onChange(of:)` modifier will merge the change of `self.item`
                    // only trigger the last scroll, we delay the check for 0.1 s
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) {
                        self.timerCheckIfNeedToUpdateTargetIndex(targetIndex)
                    }
                }
                .store(in: &cancelableStorage)
        }

        func scroll<V: OnBoardItem>(toItem item: Item<V>) {
            guard let scrollView = scrollView else {
                return
            }

            func contentOffset(for item: Item<V>) -> CGPoint {
                guard scrollView.frame != .zero,
                      scrollView.contentSize != .zero
                else {
                    return .zero
                }

                return CGPoint(x: scrollView.frame.width * CGFloat(item.index), y: 0)
            }

            let offset = contentOffset(for: item)
            scrollView.setContentOffset(offset, animated: item.animated)
        }

        // MARK: UIScrollViewDelegate

        func scrollViewDidScroll(_ scrollView: UIScrollView) {
            scrollViewDidScroll = true
            // now it is dragging, and the rest funcs in UIScrollDelegate only be triggered by user interaction
            if cancelableStorage.isEmpty {
                let totalCount = V.allCases.count
                let index = item.index / totalCount

                let scrolloffset = (scrollView.contentOffset.x - CGFloat(index) * contentSize.width * CGFloat(totalCount))
                scrolloffsetX = scrolloffset
            }
        }

        func scrollViewWillBeginDragging(_ scrollView: UIScrollView) {
            self.scrollView <| scrollView
            stopTimer()
        }

        func scrollViewDidEndDragging(_ scrollView: UIScrollView, willDecelerate decelerate: Bool) {
            self.scrollView <| scrollView
        }

        func scrollViewDidEndDecelerating(_ scrollView: UIScrollView) {
            self.scrollView <| scrollView
            guard scrollView.frame.width > 0 else {
                return
            }
            let frameWidth = scrollView.frame.width
            let index = Int(scrollView.contentOffset.x / frameWidth)

            updateTargetItem(currentIndex: index)
            startTimer()
        }

        // MARK: Private

        private let dupilcateGroups = 3
        private let groupItemCount = V.allCases.count

        private var cancelableStorage: Set<AnyCancellable> = []

        private func restartItem() -> Item<V> {
            let index = restartIndex()
            let content = V(index: index)
            return .init(index: index, animated: false, content: content)
        }

        private func updateTargetItem(currentIndex: Int, animateFlag: Bool? = nil) {
            switch currentIndex {
            case (maxIndex - 1)...:
                let restartIndex = restartIndex() + groupItemCount - 1
                let targetValue = Item<V>.init(index: restartIndex, animated: false, content: .init(index: restartIndex))
                item <| targetValue

            case ...0:
                let restartIndex = restartIndex()
                let targetValue = Item<V>.init(index: restartIndex, animated: false, content: .init(index: restartIndex))
                item <| targetValue

            default:
                let targetValue = Item<V>(index: currentIndex, animated: true, content: .init(index: currentIndex))
                item <| targetValue
            }

            withAnimation {
                self.scrolloffsetX = CGFloat(item.index % V.allCases.count) * self.contentSize.width
            }
        }

        private func timerCheckIfNeedToUpdateTargetIndex(_ targetIndex: Int) {
            switch targetIndex {
            case (maxIndex - 1)...:
                let restartIndex = restartIndex() + groupItemCount - 1
                let targetValue = Item<V>.init(index: restartIndex, animated: false, content: .init(index: restartIndex))
                item = targetValue
            // normaly this case will not happen and is being handled in `func scrollViewDidEndDecelerating(_:)`
            case ...0: break
            default: break
            }
        }

        private func restartIndex() -> Int {
            var middle = maxIndex / 2
            while middle > 0 {
                switch middle % groupItemCount {
                case 0: return middle
                default: middle -= 1
                }
            }

            return 0
        }

        private func stopTimer() {
            cancelableStorage = []
        }
    }

    @State
    private var indicatorOffsetY: CGFloat = 0

    private let configuration: LayouConfiguration
    private let proxy: GeometryProxy
    @StateObject
    private var viewModel = TimerViewModel<V.Item>()
}
