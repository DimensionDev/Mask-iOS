import Combine
import SwiftUI

import CoreDataStack

struct FileServiceView: View {
    @ObservedObject
    private var viewModel = FileServiceOnboardViewModel()

    var body: some View {
        VStack {
            if viewModel.showOnboard {
                FileServiceOnBoardView {
                    // start upload
                    viewModel.addRandomItem()
                }
            } else {
                // file list view
                UploadFileList(viewModel: viewModel)
                    .ignoresSafeArea(.container, edges: .bottom)
            }
        }
        .overlay(
            Group {
                if !viewModel.showOnboard {
                    uploadButton
                }
            },
            alignment: .bottomTrailing
        )
    }

    private var uploadButton: some View {
        Button(
            action: { viewModel.addRandomItem() },
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
        private var viewModel: FileServiceOnboardViewModel

        init(viewModel: FileServiceOnboardViewModel) {
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

                ScrollView {
                    list
                }

                Spacer()
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
                            HStack(spacing: 8) {
                                Asset.Plugins.FileService.folder.asImage()

                                Text(item)
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
            )
        }
    }
}

final class FileServiceOnboardViewModel: ObservableObject {
    @Published
    var items: [String] = []

    @Published
    var searchText: String = ""

    @Published
    var uploadingItem: FileServiceUploadingItem?

    var showOnboard: Bool { items.isEmpty }

    var visibleItems: [String] {
        if searchText.isEmpty {
            return items
        } else {
            return items.filter { $0.contains(searchText) }
        }
    }

    private var cancelableStorage: Set<AnyCancellable> = []

    init() {
        let records: [UploadFile] = FileServiceRepository.getRecords()

        $uploadingItem
            .compactMap { $0 }
            .removeAllDuplicates()
            .filter(\.state.isUploaded)
            .receive(on: DispatchQueue.main)
            .sink { value in
                FileServiceRepository.updateOrInsertRecord(
                    filterBy: \UploadFile.name == value.fileName,
                    updateBy: { (item: UploadFile) in
                        item.name = value.fileName
                        item.uploadState = value.state.rawValue
                        item.uploadedDate = value.uploadDate
//                        item.fileType =
//                        item.content
                    }
                )
            }
            .store(in: &cancelableStorage)
    }

    func addRandomItem() {
        let alongText = "Some file to upload, and arweave, and ipfs"
        let range = 0 ..<  Int.random(in: 0 ... 4)

        let newItems: [String] = range.compactMap { _ in
            alongText
                .randomElement()
                .flatMap { String($0) }
        }
            .filter { !$0.isEmpty }

        items = Set(newItems)
            .union(items)
            .map { $0 }
    }

    func remove(_ item: FileServiceUploadingItem) {
        FileServiceRepository.delete(
            object: UploadFile.self,
            filterBy: \UploadFile.name == item.fileName
        )
    }
}

struct FileServiceView_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        FileServiceView()
    }
}
