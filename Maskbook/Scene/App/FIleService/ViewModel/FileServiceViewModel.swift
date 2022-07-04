import Combine
import Foundation
import SwiftUI

import CoreDataStack

final class FileServiceViewModel: ObservableObject {
    // MARK: Lifecycle

    init() {
        FileServiceRepository.deleteAll(object: UploadFile.self)

        @InjectedProvider(\.fileServiceUploadManager)
        var manager;
        _uploadManager = .init(initialValue: manager)

        settings.fileServicePolicyAccepted = false
        settings.onBoardFeatures = ""
        refreshList()

        Publishers
            .CombineLatest(
                settings.$fileServicePolicyAccepted,
                settings.$onBoardFeatures
                    .map { $0.contains("\(OnBoardFeature.fileService.rawValue)") }
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
    }

    deinit {
        if settings.fileServicePolicyAccepted {
            settings.checkOnBoardFeature(.fileService)
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
            .filter { searchText.isEmpty || $0.fileName.contains(searchText) }
    }

    var uploadingItems: [FileServiceUploadViewModel] {
        uploadManager.uploadingItems
    }

    func configActionSignal(_ actionSignal: @escaping (Action) -> Void) {
        self.actionSignal = actionSignal
    }

    // MARK: Private

    private var uploadOption = CurrentValueSubject<FileServiceUploadOption, Never>(.default)

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

    func tryUploading(_ fileItem: FileServiceSelectedFileItem) {
        // TODO: if fileItem.option is encrypted
        // use  state: .encrypting, otherwise  state: .preparing,
        let item: FileServiceUploadingItem = .init(
            fileName: fileItem.fileName,
            provider: uploadOption.value.service.rawValue.lowercased(),
            fileType: fileItem.fileType,
            state: .encrypting,
            content: fileItem.data,
            uploadedBytes: Double(fileItem.data.bytes.count) * 0.5,
            mime: fileItem.mime,
            option: .init()
        )
        // TODO: Merge Code
        if uploadManager.tryUploading(item) {
            settings.checkOnBoardFeature(.fileService)
            objectWillChange.send()
        }
    }
}
