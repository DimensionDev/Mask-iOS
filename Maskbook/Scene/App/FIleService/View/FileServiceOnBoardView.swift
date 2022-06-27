import Combine
import Foundation
import SwiftUI

import Introspect

struct FileServiceOnBoardView: View {
    enum Action {
        case upload
        case showPolicy
    }
    private let action: (Action) -> Void

    @StateObject
    private var viewModel = TimerViewModel()

    init(action: @escaping (Action) -> Void = { _ in }) {
        self.action = action
    }

    @GestureState
    var offset: CGPoint = .zero

    var body: some View {
        GeometryReader { proxy in
            ScrollViewReader { scrollProxy in
                ScrollView(.horizontal) {
                    LazyHStack(spacing: 0) {
                        ForEach(FileServiceOnBoardItem.allCases, id: \.self) { item in
                            FileServiceOnBoardItemView(item: item)
                                .id(item)
                                .frame(width: proxy.size.width, height: proxy.size.height)
                        }
                    }
                }
                .introspectScrollView { scrollView in
                    scrollView.decelerationRate = .fast
                    scrollView.isDirectionalLockEnabled = true
                    scrollView.isPagingEnabled = true
                }
                .frame(width: proxy.size.width, height: proxy.size.height)
                .onChange(of: viewModel.item) { newValue in
                    withAnimation(.easeInOut(duration: 1)) {
                        scrollProxy.scrollTo(newValue, anchor: .center)
                    }
                }
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
        Text {
            Text("\(L10n.Plugins.Policy.reviewed) ")
                .font(.mh7)
                .foregroundColor(
                    Asset.Colors.Text.dark.asColor().opacity(0.5)
                )
            
            Text("\(L10n.Plugins.Policy.privacy) ")
                .font(.bh7)
                .foregroundColor(
                    Asset.Colors.Text.dark.asColor()
                )

            Text("\(L10n.Plugins.Policy.and) ")
                .font(.mh7)
                .foregroundColor(
                    Asset.Colors.Text.dark.asColor().opacity(0.5)
                )

            Text("\(L10n.Plugins.Policy.uploadTerms)")
                .font(.bh7)
                .foregroundColor(
                    Asset.Colors.Text.dark.asColor()
                )
        }
        .lineSpacing(3)
        .colorScheme(.dark)
    }

    private var policyView: some View {
        VStack(spacing: 20) {
            HStack(alignment: .top) {
                Group {
                    if viewModel.checkBoxSelected {
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
                    viewModel.checkBoxSelected.toggle()
                }

                policyText
                    .onTapGesture { action(.showPolicy) }

                Spacer()
            }

            Button(
                action: { action(.upload) },
                label: {
                    Color.white
                        .frame(height: 56)
                        .cornerRadius(8)
                        .opacity(
                            viewModel.checkBoxSelected
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
            .disabled(!viewModel.checkBoxSelected)

            Spacer()
        }
        .padding(.top, 20)
        .padding(.horizontal, 20)
    }

    final class TimerViewModel: ObservableObject {
        @Published var item = FileServiceOnBoardItem.one
        @Published var checkBoxSelected = false
        private(set) var cancelableStorage: Set<AnyCancellable> = []

        init() {}

        func startTimer() {
            cancelableStorage = []
            Timer.publish(every: 2, on: .main, in: .common)
                .autoconnect()
                .receive(on: RunLoop.main)
                .sink { [weak self] _ in
                    guard let self = self else { return }
                    self.item = self.item.next
                }
                .store(in: &cancelableStorage)
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
