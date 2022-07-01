import Combine
import Introspect
import SwiftUI

struct FileServiceView: View {
    // MARK: Lifecycle

    init(viewModel: FileServiceViewModel) {
        _viewModel = .init(wrappedValue: viewModel)
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
            }
        }
        // keep it here to avoid container size change
        .ignoresSafeArea(.keyboard)
    }

    // MARK: Private

    @StateObject
    private var viewModel: FileServiceViewModel

    @State
    private var textFieldFocused: Bool = false

    @State
    private var items: [FileServiceUploadingItem] = [FileServiceUploadingItem.preparing, .uploading, .uploaded]

    private let buttonSize: CGFloat = 56

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
        .shadow(color: Asset.Colors.Public.s1.asColor(), radius: 12, x: 0, y: 6)
        .offset(x: -20, y: -buttonSize - 35)
    }

    private var cardGradient: some View {
        LinearGradient(
            colors: [
                Asset.Colors.Gradient.f2F8Ff.asColor(),
                Asset.Colors.Gradient._050919.asColor()
            ],
            startPoint: .init(x: 0, y: 0),
            endPoint: .init(x: 0, y: 1)
        )
        .blur(radius: 20)
    }

    private func fileList(with proxy: GeometryProxy) -> some View {
        VStack(spacing: 16) {
            // Textfield can't become first responder when being layouted in
            // scrollview
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(Asset.Colors.Text.light.asColor())

                TextField(
                    L10n.Common.searchPlaceHolder,
                    text: $viewModel.searchText
                )
                .introspectTextField { view in
                    view.publisher(for: \.isFirstResponder)
                        .subscribe(Subscribers.Assign(object: self, keyPath: \.textFieldFocused))
                }

                Image(systemName: "xmark.circle.fill")
                    .opacity(viewModel.searchText.isEmpty ? 0 : 1)
                    .foregroundColor(Asset.Colors.Text.light.asColor())
                    .onTapGesture { viewModel.searchText = "" }
            }
            .whiteRadiusBackgroundView(height: 48)
            .layoutPriority(2)

            ScrollView {
                LazyVStack(
                    alignment: .center,
                    spacing: 16,
                    pinnedViews: [.sectionHeaders],
                    content: {
                        Section {
                            ForEach(viewModel.visibleItems, id: \.self) { item in
                                view(of: item)
                            }
                        }
                    }
                )
            }

            Spacer()
        }
        .padding(.top, 20)
        .padding(.horizontal, 20)
        .overlay(
            uploadingItemList(with: proxy),
            alignment: .bottom
        )
    }

    private func uploadingItemList(with proxy: GeometryProxy) -> some View {
        VStack(spacing: 10) {
            if items.isEmpty {
                Color.clear
                    .frame(height: 0)
            } else {
                ForEach(items, id: \.self) { item in
                    FileServiceUploadingItemView(item) { _ in
                    }
                }
            }
        }
        .padding(.all, items.isEmpty ? 0 : 20)
        .padding(.bottom, proxy.safeAreaInsets.bottom)
        .background(
            cardGradient
        )
        .overlay(
            Group {
                if viewModel.showOnboard || viewModel.isUploading {
                    Color.clear
                } else {
                    uploadButton
                }
            },
            alignment: .topTrailing
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

                if let fileKey = item.tx?.key {
                    Text {
                        Text("File Key: ")
                            .foregroundColor(Asset.Colors.Text.light)

                        Text(fileKey)
                            .foregroundColor(Asset.Colors.Text.normal)
                    }
                    .font(.mh7)
                    .lineLimit(1)
                }
            }

            Image(Asset.Plugins.pluginArrow)
                .foregroundColor(
                    Asset.Colors.Text.normal.asColor()
                )
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
}

struct FileServiceView_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        FileServiceView(viewModel: .init())
            .background(
                Asset.Colors.Background.normal.asColor().ignoresSafeArea()
            )
    }
}
