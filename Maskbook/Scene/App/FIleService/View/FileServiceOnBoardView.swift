import Combine
import Foundation
import SwiftUI

import Introspect

struct FileServiceOnBoardView: View {
    enum Action {
        case upload
    }
    private let action: (Action) -> Void

    @StateObject
    private var viewModel = TimerViewModel()

    init(action: @escaping (Action) -> Void = { _ in }) {
        self.action = action
    }

    var body: some View {
        GeometryReader { proxy in
            ScrollView(.horizontal) {
                LazyHStack(spacing: 0) {
                    ForEach(viewModel.totalItems, id: \.self) { item in
                        FileServiceOnBoardItemView(item: item.content)
                            .id(item)
                            .frame(width: proxy.size.width, height: proxy.size.height)
                    }
                }
            }
            .introspectScrollView { scrollView in
                scrollView.isDirectionalLockEnabled = true
                scrollView.isPagingEnabled = true
                scrollView.delegate = viewModel

                if !viewModel.scrollViewDidScroll {
                    viewModel.scrollViewDidScroll(scrollView)
                    viewModel.scrollView = scrollView
                    viewModel.scroll(toItem: viewModel.item)
                }
            }
            .frame(width: proxy.size.width, height: proxy.size.height)
            .onChange(of: viewModel.item) { newValue in
                viewModel.scroll(toItem: newValue)
            }
            .overlay(
                Image(Asset.Plugins.FileService.uploadBackground)
                    .resizable()
                    .frame(width: proxy.size.width, height: 138 + proxy.safeAreaInsets.bottom)
                    .overlay(policyView, alignment: .top)
                    .offset(y: proxy.safeAreaInsets.bottom)
                ,
                alignment: .bottom
            )
            .onAppear {
                viewModel.startTimer()
            }
        }
    }

    private var policyText: some View {
        TappableText(
            attributedString: {
                let final = NSMutableAttributedString(
                    string: "\(L10n.Plugins.Policy.reviewed) ",
                    attributes: [
                        .font: FontStyles.mh7.uifont,
                        .foregroundColor:  Asset.Colors.Text.dark.color.withAlphaComponent(0.5)
                    ]
                )

                let policy = NSMutableAttributedString(
                    string: "\(L10n.Plugins.Policy.privacy) ",
                    attributes: [
                        .font: FontStyles.bh7.uifont,
                        .foregroundColor:  Asset.Colors.Text.dark.color,
                        .link: URL(string: "https://legal.mask.io/arweave/file-service/privacy-policy-uploader.html")!
                    ]
                )

                let and = NSAttributedString(
                    string: "\(L10n.Plugins.Policy.and) ",
                    attributes: [
                        .font: FontStyles.mh7.uifont,
                        .foregroundColor:  Asset.Colors.Text.dark.color.withAlphaComponent(0.5)
                    ]
                )

                let service = NSMutableAttributedString(
                    string: L10n.Plugins.Policy.uploadTerms,
                    attributes: [
                        .font: FontStyles.bh7.uifont,
                        .foregroundColor:  Asset.Colors.Text.dark.color,
                        .link: URL(string: "https://legal.mask.io/arweave/file-service/plugin-terms.html")!
                    ]
                )

                final.append(policy)
                final.append(and)
                final.append(service)

                return final
            }
        )
        .offset(y: -3)
        .lineSpacing(3)
        .colorScheme(.dark)
    }

    private var policyAgreeView: some View {
        HStack(alignment: .firstTextBaseline) {
            Group {
                if viewModel.fileServicePolicyAccepted {
                    Color.white
                        .frame(width: 16, height: 16)
                        .cornerRadius(4)
                        .overlay(
                            Image(Asset.Plugins.checkMark)
                        )
                } else {
                    Asset.Images.Scene.WalletList.unchecked.asImage()
                        .resizable()
                        .renderingMode(.template)
                        .foregroundColor(.white)
                        .frame(width: 16, height: 16)
                }
            }
            .onTapGesture {
                viewModel.fileServicePolicyAccepted.toggle()
            }

            policyText

            Spacer()
        }
    }

    private var policyView: some View {
        VStack(spacing: 20) {
            policyAgreeView

            Button(
                action: { action(.upload) },
                label: {
                    Color.white
                        .frame(height: 56)
                        .cornerRadius(8)
                        .opacity(
                            viewModel.fileServicePolicyAccepted
                            ? 1
                            : 0.5
                        )
                        .overlay(
                            Text(L10n.Plugins.Policy.startUpload)
                                .font(.bh5)
                                .foregroundColor(Asset.Colors.Public.blue)
                        )
                }
            )
            .disabled(!viewModel.fileServicePolicyAccepted)

            Spacer()
        }
        .padding(.top, 20)
        .padding(.horizontal, 20)
    }

    private final class TimerViewModel: NSObject, ObservableObject, UIScrollViewDelegate {
        @Published var item: Item
        @Published
        private(set) var totalItems: [Item] = []
        let maxIndex: Int

        private let dupilcateGroups = 25
        private let groupItemCount = FileServiceOnBoardItem.allCases.count

        weak var scrollView: UIScrollView?
        private(set) var cancelableStorage: Set<AnyCancellable> = []
        private var combineStorage: Set<AnyCancellable> = []

        //  AppStorage is a little delay for check box action
        // so we use fileServicePolicyAccepted instead
        var fileServicePolicyAccepted: Bool {
            get { setting.fileServicePolicyAccepted }
            set { setting.fileServicePolicyAccepted = newValue }
        }


        @InjectedProvider(\.userDefaultSettings)
        private var setting

        private(set) var scrollViewDidScroll = false

        struct Item: Hashable, Identifiable {
            let index: Int
            let animated: Bool
            let content: FileServiceOnBoardItem

            var id: String {
                "\(index)\(content)"
            }
        }

        override init() {
            let groupItemCount = FileServiceOnBoardItem.allCases.count
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
            let content = FileServiceOnBoardItem(index: startIndex)
            item = .init(index: startIndex, animated: false, content: content)
            self.maxIndex = maxIndex

            super.init()
            self.totalItems = (0 ..< maxIndex).map {
                Item(index: $0, animated: true, content: FileServiceOnBoardItem(index: $0))
            }

            setting.$fileServicePolicyAccepted
                .receive(on: DispatchQueue.main)
                .sink { [weak self] _ in
                    self?.objectWillChange.send()
                }
                .store(in: &combineStorage)
        }

        func startTimer() {
            cancelableStorage = []
            Timer.publish(every: 2, on: .main, in: .common)
                .autoconnect()
                .receive(on: RunLoop.main)
                .sink { [weak self] _ in
                    guard let self = self else { return }
                    let targetIndex =  self.item.index + 1
                    let targetValue = Item.init(index: targetIndex, animated: true, content: .init(index: targetIndex))
                    self.item = targetValue

                    // as `onChange(of:)` modifier will merge the change of `self.item`
                    // only trigger the last scroll, we delay the check for 0.25 s
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.25) {
                        self.timerCheckIfNeedToUpdateTargetIndex(targetIndex)
                    }
                }
                .store(in: &cancelableStorage)
        }

        func restartItem() -> Item {
            let index = restartIndex()
            let content = FileServiceOnBoardItem(index: index)
            return .init(index: index, animated: false, content: content)
        }

        private func timerCheckIfNeedToUpdateTargetIndex(_ targetIndex: Int) {
            switch targetIndex {
            case (maxIndex - 1)... :
                let restartIndex = restartIndex() + groupItemCount - 1
                let targetValue = Item.init(index: restartIndex, animated: false, content: .init(index: restartIndex))
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

        func updateTargetItem(currentIndex: Int, animateFlag: Bool? = nil) {
            switch currentIndex {
            case (maxIndex - 1)... :
                let restartIndex = restartIndex() + groupItemCount - 1
                let targetValue = Item.init(index: restartIndex, animated: false, content: .init(index: restartIndex))
                item = targetValue

            case ...0:
                let restartIndex = restartIndex()
                let targetValue = Item.init(index: restartIndex, animated: false, content: .init(index: restartIndex))
                item = targetValue

            default:
                let targetValue = Item(index: currentIndex, animated: true, content: .init(index: currentIndex))
                item = targetValue
            }
        }

        func scroll(toItem item: Item) {
            func contentOffset(for item: Item) -> CGPoint {
                guard let scrollView = self.scrollView,
                      scrollView.frame != .zero,
                      scrollView.contentSize != .zero else {
                    return .zero
                }

                return CGPoint(x: scrollView.frame.width * CGFloat(item.index), y: 0)
            }

            let offset = contentOffset(for: item)
            scrollView?.setContentOffset(offset, animated: item.animated)
        }

        private func stopTimer() {
            cancelableStorage = []
        }

        func scrollViewDidScroll(_ scrollView: UIScrollView) {
            scrollViewDidScroll = true
        }

        func scrollViewWillBeginDragging(_ scrollView: UIScrollView) {
            self.scrollView <| scrollView
            stopTimer()
        }

        func scrollViewDidEndDragging(_ scrollView: UIScrollView, willDecelerate decelerate: Bool) {
            self.scrollView <| scrollView
            startTimer()
        }

        func scrollViewDidEndDecelerating(_ scrollView: UIScrollView) {
            self.scrollView <| scrollView
            guard scrollView.frame.width > 0 else {
                return
            }
            let frameWidth = scrollView.frame.width
            let index = Int(scrollView.contentOffset.x / frameWidth)

            updateTargetItem(currentIndex: index)
        }
    }
}

extension FileServiceOnBoardItem {
    var next: Self {
        switch self {
        case .one: return .two
        case .two: return .three
        case .three: return .four
        case .four: return .one
        }
    }
}

struct FileServiceOnBoardView_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        FileServiceOnBoardView()
    }
}
