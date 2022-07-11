import Combine
import Introspect
import SwiftUI

struct FileServiceView: View {
    // MARK: Lifecycle

    init(viewModel: FileServiceViewModel) {
        _viewModel = .init(wrappedValue: viewModel)
        UIScrollView.appearance().keyboardDismissMode = .onDrag
    }

    // MARK: Internal

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

    private var cardGradient: some View {
        BlurView(style: .prominent)
            .ignoresSafeArea()
            .overlay(
                LinearGradient(
                    colors: [
                        Asset.Colors.Gradient.f2F8Ff.asColor(),
                        Asset.Colors.Gradient._050919.asColor()
                    ],
                    startPoint: .init(x: 0, y: 0),
                    endPoint: .init(x: 0, y: 1)
                )
                .blur(radius: 40)
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
        .opacity(viewModel.allowUploading ? 1 : 0.5)
        .disabled(!viewModel.allowUploading)
        .shadow(color: Asset.Colors.Public.s1.asColor(), radius: 12, x: 0, y: 6)
        .offset(x: -20, y: -buttonSize - 24)
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
                        }
                    )
                    .padding(.horizontal, 20)
                }

                Spacer()
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
            if viewModel.uploadingItems.isEmpty {
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
        .padding(.all, viewModel.uploadingItems.isEmpty ? 0 : 20)
        .padding(.bottom, viewModel.uploadingItems.isEmpty ? 0 : proxy.safeAreaInsets.bottom)
        .background(cardGradient)
        .overlay(
            uploadButton,
            alignment: .topTrailing
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
