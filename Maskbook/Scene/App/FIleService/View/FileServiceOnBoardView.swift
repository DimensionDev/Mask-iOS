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
    private var viewModel = ViewModel()

    init(action: @escaping (Action) -> Void = { _ in }) {
        self.action = action
    }

    var body: some View {
        GeometryReader { proxy in
            InfinityCycleView(
                configuration: .init(
                    indicatorOffset: .init(x: 0, y: 20),
                    indicatorColor: Asset.Colors.Public.blue
                ),
                geoProxy: proxy
            ) { item in
                FileServiceOnBoardItemView(item: item.content)
            }
            .frame(width: proxy.size.width, height: proxy.size.height)
            .overlay(
                Image(Asset.Plugins.FileService.uploadBackground)
                    .resizable()
                    .frame(width: proxy.size.width, height: 138 + proxy.safeAreaInsets.bottom)
                    .overlay(policyView, alignment: .top)
                    .offset(y: proxy.safeAreaInsets.bottom)
                ,
                alignment: .bottom
            )
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

    private final class ViewModel: NSObject, ObservableObject, UIScrollViewDelegate {
        private var combineStorage: Set<AnyCancellable> = []

        //  AppStorage is a little delay for check box action
        // so we use fileServicePolicyAccepted instead
        var fileServicePolicyAccepted: Bool {
            get { setting.fileServicePolicyAccepted }
            set { setting.fileServicePolicyAccepted = newValue }
        }

        @InjectedProvider(\.userDefaultSettings)
        private var setting

        override init() {
            super.init()
            setting.$fileServicePolicyAccepted
                .receive(on: DispatchQueue.main)
                .sink { [weak self] _ in
                    self?.objectWillChange.send()
                }
                .store(in: &combineStorage)
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
