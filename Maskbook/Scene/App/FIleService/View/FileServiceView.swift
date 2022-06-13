import Combine
import SwiftUI

struct FileServiceView: View {
    @ObservedObject
    private var viewModel: FileServiceViewModel

    init(viewModel: FileServiceViewModel) {
        self.viewModel = viewModel
    }

    var body: some View {
        VStack {
            if viewModel.showOnboard {
                FileServiceOnBoardView {
                    // start uploading
                    viewModel.actionSignal(.choseFile)
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
                .rotationEffect(.init(degrees: 180))
                .frame(width: 48, height: 48)
                .cornerRadius(24)
                .overlay(
                    Image(systemName: "plus")
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                        .frame(width: 24, height: 24)
                        .foregroundColor(.white)
                )
            }
        )
        .offset(x: -20)
    }
}

extension FileServiceView {
    struct UploadFileList: View {
        @ObservedObject
        private var viewModel: FileServiceViewModel

        init(viewModel: FileServiceViewModel) {
            _viewModel = .init(initialValue: viewModel)
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
                }
                .whiteRadiusBackgroundView(height: 48)
                .layoutPriority(2)

                ScrollView {
                    list
                }

                Spacer()
                    .layoutPriority(0)
            }
            .padding(.top, 20)
            .padding(.horizontal, 20)
        }

        private var list: some View {
            LazyVGrid(
                columns: [.init(.flexible(), spacing: 16, alignment: .center)],
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
                                        self.viewModel.remove(item)
                                    },
                                    onShare: { item in
                                        self.viewModel.share(item)
                                    }
                                )

                            case let .archive(value):
                                HStack(spacing: 8) {
                                    Asset.Plugins.FileService.folder.asImage()

                                    Text(value.fileName)
                                        .font(.bh5)
                                        .foregroundColor(Asset.Colors.Text.dark)
                                        .horizontallyFilled()

                                    Image(systemName: "chevron.right")
                                        .foregroundColor(
                                            Asset.Colors.Text.normal.asColor()
                                        )
                                }
                                .whiteRadiusBackgroundView(height: 48)
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
