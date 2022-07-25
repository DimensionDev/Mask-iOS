import Combine
import Introspect
import SwiftUI

private struct ScrollOffsetKey: PreferenceKey {
    static var defaultValue: CGFloat?

    static func reduce(value: inout CGFloat?, nextValue: () -> CGFloat?) {
        value = nextValue()
    }
}

struct FileServiceView: View {
    // MARK: Lifecycle

    init(viewModel: FileServiceViewModel) {
        _viewModel = .init(wrappedValue: viewModel)
        UIScrollView.appearance().keyboardDismissMode = .onDrag
    }

    // MARK: Internal

    enum FoldState {
        case fold
        case unfold

        // MARK: Internal

        mutating func toggle() {
            switch self {
            case .fold: self = .unfold
            case .unfold: self = .fold
            }
        }
    }

    var body: some View {
        GeometryReader { proxy in
            if viewModel.showOnboard {
                FileServiceOnBoardView { action in
                    switch action {
                    case .upload: viewModel.actionSignal(.choseFile)
                    }
                }
            } else {
                // file list view
                fileList(with: proxy)
                    .ignoresSafeArea(.container, edges: .bottom)
                    .onAppear {
                        viewModel.isVisible = true
                    }
            }
        }
        // keep it here to avoid container size change
        // and keep uploadingItemList's position
        .ignoresSafeArea(.keyboard)
    }

    // MARK: Private

    @StateObject
    private var viewModel: FileServiceViewModel

    private let buttonSize: CGFloat = 56

    @State
    private var listFoldState = FoldState.fold

    @State
    private var scrollOffset: CGFloat?

    @Environment(\.colorScheme)
    private var theme

    @State
    private var uploadingSize = CGSize.zero

    @Namespace
    private var uploadingAnimation
    private let floatingViewID = "floatingItem"

    private var cardGradient: some View {
        BlurView(
            style: theme == .dark
                ? .systemUltraThinMaterialDark
                : .systemUltraThinMaterialLight
        )
        .ignoresSafeArea()
        .opacity(
            listFoldState == .unfold
                ? 1
                : 0
        )
    }

    private var uploadButton: some View {
        Button(
            action: { viewModel.actionSignal(.choseFile) },
            label: {
                LinearGradient(
                    stops: [
                        .init(
                            color: Asset.Colors.Gradient.blue2.asColor(),
                            location: 0.093
                        ),
                        .init(
                            color: Asset.Colors.Gradient.blur.asColor(),
                            location: 0.9214
                        )
                    ],
                    startPoint: .init(x: 0, y: 0),
                    endPoint: .init(x: 0, y: 1)
                )
                .rotationEffect(.init(degrees: 337.55))
                .frame(width: buttonSize, height: buttonSize)
                .cornerRadius(buttonSize / 2)
                .overlay(
                    Image(Asset.Plugins.FileService.sendFile)
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                        .frame(width: 37.33, height: 37.33)
                        .foregroundColor(.white)
                )
            }
        )
        .opacity(
            viewModel.allowUploading ? 1 : 0.5
        )
        .disabled(!viewModel.allowUploading)
        .shadow(
            color: Asset.Colors.Public.s1.asColor(),
            radius: 12,
            x: 0,
            y: 6
        )
    }

    private var foldingText: String {
        let uploadingCount = viewModel.uploadingItems.filter {
            $0.item.state != .uploaded
        }
        .count

        return "uploading ・ \(uploadingCount)"
    }

    private var foldingView: some View {
        HStack(spacing: 23) {
            Spacer()

            uploadButton
        }
        .overlay(
            foldUploadItemView,
            alignment: .center
        )
        .padding(.horizontal, 20)
        .offset(y: -buttonSize)
    }

    @ViewBuilder
    private var foldUploadItemView: some View {
        if listFoldState == .fold {
            Button {
                unfold()
            } label: {
                HStack(spacing: 4) {
                    Asset.Plugins.FileService.folder.asImage()
                        .frame(width: 32, height: 32)

                    Text(foldingText)
                        .font(.bh5)
                        .foregroundColor(Asset.Colors.Public.white)
                }
                .padding(.vertical, 8)
                .padding(.horizontal, 16)
                .background(
                    LinearGradient(
                        stops: [
                            .init(
                                color: Asset.Colors.Gradient.blue2.asColor(),
                                location: 0.093
                            ),
                            .init(
                                color: Asset.Colors.Gradient.blur.asColor(),
                                location: 0.9214
                            )
                        ],
                        startPoint: .init(x: 0, y: 0),
                        endPoint: .init(x: 0, y: 1)
                    )
                    .rotationEffect(.init(degrees: 337.55))
                    .frame(
                        width: uploadingSize.width,
                        height: uploadingSize.width
                    )
                )
                .cornerRadius(40)
                .disabled(listFoldState == .unfold)
                .opacity(
                    listFoldState == .fold
                        ? 1
                        : 0
                )
                .measureSize(to: $uploadingSize)
                .shadow(
                    color: Asset.Colors.Gradient.blur.asColor().opacity(0.15),
                    radius: 12,
                    x: 0,
                    y: 6
                )
                .preferredColorScheme(.light)
                .matchedGeometryEffect(
                    id: floatingViewID,
                    in: uploadingAnimation,
                    properties: .size,
                    isSource: false
                )
            }
        }
    }

    private var emptyPlaceholder: some View {
        VStack(spacing: 12) {
            if viewModel.searchText.isEmpty {
                Image(Asset.Images.Scene.Empty.emptyBox)

                Text(L10n.Plugins.FileService.listEmpty)
                    .font(.mh6)
                    .foregroundColor(Asset.Colors.Text.light)
            } else {
                Image(Asset.Images.Scene.Personas.search)

                Text(L10n.Plugins.FileService.searchEmpty)
                    .font(.mh6)
                    .foregroundColor(Asset.Colors.Text.light)
            }

            Spacer()
        }
        .padding(.top, 110)
    }

    private var foldUploadingList: Bool {
        if listFoldState == .fold {
            return true
        }

        return viewModel.uploadingItems.isEmpty
    }

    private func fileList(with proxy: GeometryProxy) -> some View {
        VStack(spacing: 16) {
            // Textfield can't become first responder when being layouted in
            // scrollview
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(Asset.Colors.Text.light.asColor())

                TextField(
                    L10n.Common.searchPlaceholder,
                    text: $viewModel.searchText
                )
                .modifier(
                    KeyBoardObservingModifier(
                        \.isEditing,
                        on: viewModel
                    )
                )

                Image(systemName: "xmark.circle.fill")
                    .opacity(viewModel.searchText.isEmpty ? 0 : 1)
                    .foregroundColor(Asset.Colors.Text.light.asColor())
                    .onTapGesture { viewModel.searchText = "" }
            }
            .whiteRadiusBackgroundView(height: 48)
            .padding(.horizontal, 20)
            .layoutPriority(2)

            VStack {
                ScrollView {
                    LazyVStack(
                        alignment: .center,
                        spacing: 16,
                        pinnedViews: [.sectionHeaders],
                        content: {
                            Section {
                                if viewModel.visibleItems.isEmpty {
                                    emptyPlaceholder
                                } else {
                                    ForEach(viewModel.visibleItems, id: \.self) { item in
                                        view(of: item)
                                    }

                                    Spacer()
                                        .frame(height: 4)
                                }
                            }
                            .background(
                                GeometryReader { innerProxy in
                                    Color.clear
                                        .frame(height: 0)
                                        .preference(
                                            key: ScrollOffsetKey.self,
                                            value: innerProxy.frame(in: .global).minY
                                        )
                                }
                            )
                        }
                    )
                    .padding(.horizontal, 20)
                }

                Spacer()
            }
            .onChange(of: viewModel.uploadingItems, perform: { _ in
                // item only be removed on unfold state
                // this modifier will be triggerd by adding new uploading item
                unfold()
            })
            .onPreferenceChange(ScrollOffsetKey.self) { value in
                // if there is no uploading item we skip this
                if viewModel.uploadingItems.isEmpty {
                    unfold()
                    return
                }

                switch (value, scrollOffset) {
                // initial state, maybe will not happen
                case (nil, nil): break

                case (let .some(offset), nil):
                    scrollOffset = offset
                    fold()

                case let (.some(newValue), .some(_)):
                    scrollOffset = newValue
                    fold()

                case (nil, .some):
                    scrollOffset = nil
                    fold()
                }
            }
            .onTapGesture {
                guard viewModel.isEditing else {
                    return
                }
                self.forceResignKeyboard()
            }
        }
        .padding(.top, 20)
        .overlay(
            uploadingItemList(with: proxy),
            alignment: .bottom
        )
    }

    private func unfold() {
        if listFoldState != .unfold {
            withAnimation {
                listFoldState = .unfold
            }
        }
    }

    private func fold() {
        guard listFoldState != .fold else {
            return
        }

        guard !viewModel.uploadingItems.isEmpty else {
            return
        }

        withAnimation {
            listFoldState = .fold
        }
    }

    private func view(of item: FileServiceUploadingItem) -> some View {
        HStack(spacing: 8) {
            Asset.Plugins.FileService.folder.asImage()
                .frame(width: 32, height: 32)

            VStack(alignment: .leading, spacing: 0) {
                Text(item.fileName)
                    .font(.bh5)
                    .foregroundColor(Asset.Colors.Text.dark)
                    .lineLimit(1)
                    .horizontallyFilled()

                Text(item.totalBytes.fileSizeText)
                    .font(.mh7)
                    .foregroundColor(Asset.Colors.Text.normal)
                    .lineLimit(1)

                if let fileKey = item.tx?.key, !fileKey.isEmpty {
                    Text {
                        Text("\(L10n.Plugins.FileService.fileKey): ")
                            .foregroundColor(Asset.Colors.Text.light)

                        Text(fileKey)
                            .foregroundColor(Asset.Colors.Text.normal)
                    }
                    .font(.mh7)
                    .lineLimit(1)
                } else {
                    Spacer()
                }
            }

            Image(Asset.Plugins.pluginArrow)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
        }
        .padding(.all, 12)
        .background(Asset.Colors.Background.dark.asColor())
        .cornerRadius(8)
        .onTapGesture {
            guard let tx = item.tx, tx.isFinished else {
                return
            }
            viewModel.actionSignal(.viewDetail(item))
        }
    }

    private func uploadingItemList(with proxy: GeometryProxy) -> some View {
        VStack(spacing: 10) {
            if foldUploadingList {
                Color.clear
                    .frame(height: 0)
            } else {
                ForEach(viewModel.uploadingItems, id: \.item) { vm in
                    FileServiceUploadingItemView(vm) { event in
                        switch event {
                        case let .share(item): self.viewModel.share(item)
                        case let .retry(item): self.viewModel.retryUploading(item)
                        case let .remove(item): self.viewModel.remove(item)
                        }
                    }
                }
            }
        }
        .padding(.all, foldUploadingList ? 0 : 20)
        .padding(.bottom, foldUploadingList ? 0 : proxy.safeAreaInsets.bottom)
        .background(cardGradient)
        .overlay(
            foldingView
                .offset(
                    y: foldUploadingList ? -20 - proxy.safeAreaInsets.bottom : -20
                ),
            alignment: .topTrailing
        )
        .matchedGeometryEffect(
            id: floatingViewID,
            in: uploadingAnimation,
            properties: .size,
            isSource: true
        )
    }
}

struct FileServiceView_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        FileServiceView(viewModel: .init())
            .background(
                Asset.Colors.Background.normal.asColor().ignoresSafeArea()
            )
            .preferredColorScheme(.dark)
    }
}
