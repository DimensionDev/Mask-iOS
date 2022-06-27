import Combine
import SwiftUI

struct FileServiceView: View {
    @StateObject
    private var viewModel: FileServiceViewModel

    init(viewModel: FileServiceViewModel) {
        _viewModel = .init(wrappedValue: viewModel)
    }

    var body: some View {
        VStack {
            if viewModel.showOnboard {
                FileServiceOnBoardView { action in
                    switch action {
                    case .upload: viewModel.actionSignal(.choseFile)
                    }
                }
            } else {
                // file list view
                UploadFileList(viewModel: viewModel)
                    .ignoresSafeArea(.container, edges: .bottom)
            }
        }
        .overlay(
            Group {
                if viewModel.showOnboard || viewModel.isUploading {
                    Color.clear
                } else {
                    uploadButton
                }
            },
            alignment: .bottomTrailing
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
                .frame(width: 56, height: 56)
                .cornerRadius(28)
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
        .offset(x: -20, y: -20)
    }
}

extension FileServiceView {
    struct UploadFileList: View {
        @StateObject
        private var viewModel: FileServiceViewModel

        init(viewModel: FileServiceViewModel) {
            _viewModel = .init(wrappedValue: viewModel)
        }

        var body: some View {
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

                    Image(systemName: "xmark.circle.fill")
                        .opacity(viewModel.searchText.isEmpty ? 0 : 1)
                        .foregroundColor(Asset.Colors.Text.light.asColor())
                        .onTapGesture { viewModel.searchText = "" }
                }
                .whiteRadiusBackgroundView(height: 48)
                .layoutPriority(2)

                ScrollView {
                    list
                }

                Spacer()
            }
            .padding(.top, 20)
            .padding(.horizontal, 20)
        }

        private var list: some View {
            LazyVStack(
                alignment: .center,
                spacing: 16,
                pinnedViews: [.sectionHeaders],
                content: {
                    Section {
                        ForEach(viewModel.visibleItems, id: \.self) { item in
                            switch item {
                            case let .draft(value):
                                FileServiceUploadingItemView(
                                    value,
                                    onDelete: { item in
                                        self.viewModel.draftItem = nil
                                    },
                                    onShare: { item in
                                        self.viewModel.share(item)
                                    }
                                )

                            case let .archive(value):
                                HStack(spacing: 8) {
                                    Asset.Plugins.FileService.folder.asImage()

                                    VStack(alignment: .leading, spacing: 0) {
                                        Text(value.fileName)
                                            .font(.bh5)
                                            .foregroundColor(Asset.Colors.Text.dark)
                                            .lineLimit(1)
                                            .horizontallyFilled()

                                        Text(value.uploadDateText.split(separator: " ").first ?? "")
                                            .font(.mh7)
                                            .foregroundColor(Asset.Colors.Text.normal)
                                            .lineLimit(1)
                                    }

                                    Image(Asset.Plugins.pluginArrow)
                                        .foregroundColor(
                                            Asset.Colors.Text.normal.asColor()
                                        )
                                }
                                .whiteRadiusBackgroundView(height: 56)
                                .onTapGesture {
                                    guard let tx = value.tx, tx.isFinished else {
                                        return
                                    }
                                    viewModel.actionSignal(.viewDetail(value))
                                }
                            }
                        }
                    }
                }
            )
        }
    }
}

struct FileServiceView_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        FileServiceView(viewModel: .init())
    }
}
