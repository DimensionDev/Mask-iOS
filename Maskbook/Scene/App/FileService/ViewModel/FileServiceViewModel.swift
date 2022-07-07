import Combine
import Foundation
import SwiftUI

import CoreDataStack

final class FileServiceViewModel: ObservableObject {
    // MARK: Lifecycle

    init() {
        @InjectedProvider(\.fileServiceUploadManager)
        var manager;
        _uploadManager = .init(initialValue: manager)

        Publishers
            .CombineLatest(
                settings.$fileServicePolicyAccepted,
                settings.$onBoardFeatures
                    .map { $0.contains("\(OnboardFeature.fileService.rawValue)") }
            )
            .receive(on: DispatchQueue.main)
            .map {  !($0 && $1) }
            .assign(to: \.showOnboard, on: self)
            .store(in: &cancelableStorage)

        uploadManager
            .newUploadedItem
            .receive(on: DispatchQueue.main)
            .sink { [weak self] item in
                self?.items.insert(item, at: 0)
            }
            .store(in: &cancelableStorage)

        refreshList()
    }

    deinit {
        if settings.fileServicePolicyAccepted {
            settings.checkOnboardFeature(.fileService)
        }

        uploadManager.isVisible = false
    }

    var isVisible: Bool {
        get { uploadManager.isVisible }
        set { uploadManager.isVisible = newValue }
    }

    // MARK: Internal

    enum Action {
        case choseFile
        case share(FileServiceUploadResult)
        case viewDetail(FileServiceUploadingItem)
    }

    @Published
    var items: [FileServiceUploadingItem] = []

    @Published
    var searchText: String = ""

    @Published
    var showOnboard: Bool = false

    private(set) var actionSignal: (Action) -> Void = { _ in }

    var allowUploading: Bool {
        uploadManager.allowUploading && settings.fileServicePolicyAccepted
    }

    var visibleItems: [FileServiceUploadingItem] {
        items
            .filter { searchText.isEmpty || $0.fileName.lowercased().contains(searchText.lowercased()) }
    }

    var uploadingItems: [FileServiceUploadViewModel] {
        uploadManager.uploadingItems
    }

    func configActionSignal(_ actionSignal: @escaping (Action) -> Void) {
        self.actionSignal = actionSignal
    }

    // MARK: Private

    private var cancelableStorage: Set<AnyCancellable> = []

    @InjectedProvider(\.userDefaultSettings)
    private var settings

    @Published
    private var uploadManager: FileServiceUploadManager

    private func refreshList() {
        items = FileServiceRepository
            .getRecords(
                transform: { (file: UploadFile) in
                    file.asStructItem()
                }
            )
            .filter { $0.uploadDate.isSome }
    }
}

// MARK: Uploading

extension FileServiceViewModel {
    func remove(_ item: FileServiceUploadingItem) {
        uploadManager.remove(item)
        objectWillChange.send()
    }

    func share(_ item: FileServiceUploadingItem) {
        guard let value = FileServiceUploadResult.from(item) else {
            return
        }
        actionSignal(.share(value))
    }

    func retryUploading(_ item: FileServiceUploadingItem) {
        uploadManager.retryUploading(item)
    }

    private func isDuplicateItem(_ fileItem: FileServiceSelectedFileItem) -> Bool {
        if uploadManager.uploadingItems.contains(where: { $0.item.content == fileItem.data }) {
            return true
        }

        if items.contains(where: { $0.content == fileItem.data }) {
            return true
        }

        return false
    }

    func tryUploading(_ fileItem: FileServiceSelectedFileItem, option: FileServiceUploadOption) {
//        if isDuplicateItem(fileItem) {
//            // show warnning
//            return
//        }

        // use  state: .encrypting, otherwise  state: .preparing,
        let item: FileServiceUploadingItem = .init(
            fileName: fileItem.fileName,
            provider: option.service.rawValue.lowercased(),
            fileType: fileItem.fileType,
            state: option.encrypted ? .encrypting : .preparing,
            content: fileItem.data,
            totalBytes: Double(fileItem.data.count),
            uploadedBytes: 0,
            mime: fileItem.mime,
            option: option
        )

        if uploadManager.tryUploading(item) {
            settings.checkOnboardFeature(.fileService)
            objectWillChange.send()
        }
    }
}
