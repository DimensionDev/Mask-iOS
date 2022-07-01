import Combine
import Foundation
import SwiftUI

import CoreDataStack

final class FileServiceViewModel: ObservableObject {
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
    var draftItem: FileServiceUploadingItem? {
        didSet {
            // update list when starting uploading a new item
            if oldValue != nil, draftItem != nil {
                refreshList()
            }
        }
    }

    private var uploadOption = CurrentValueSubject<FileServiceUploadOption, Never>(.default)

    var showOnboard: Bool { items.isEmpty && draftItem.isNone }

    // there can be only a single uploading item
    // so when uploading, use this flag to hide the plus button
    var isUploading: Bool {
        guard let item = draftItem,
              item.state != .uploaded else {
            return false
        }

        return true
    }

    var visibleItems: [Item] {
        let allItems: [Item] = {
            if let item = draftItem {
                return [.draft(item)] + items.map { .archive($0) }
            } else {
                return items.map { .archive($0) }
            }
        }()

        return allItems
            .filter { searchText.isEmpty || $0.fileName.contains(searchText) }
    }

    private var cancelableStorage: Set<AnyCancellable> = []

    private(set) var actionSignal: (Action) -> Void = { _ in }

    init() {
        refreshList()
        let drafeSignal = $draftItem
            .compactMap { $0 }
            .removeDuplicates()
            .filter { $0.state == .uploaded }
            .receive(on: DispatchQueue.main)
            .share()

            drafeSignal
            .sink { (value: FileServiceUploadingItem) in
                FileServiceRepository.updateOrInsertRecord(
                    updateBy: { (item: UploadFile) in
                        item.update(from: value)
                    }
                )
            }
            .store(in: &cancelableStorage)

        drafeSignal
            .delay(for: .seconds(5), scheduler: DispatchQueue.main)
            .sink { [weak self] uploadItem in
                guard let self = self else { return }
                guard let item = self.draftItem else {
                    return
                }

                // in case there is a new uploading
                guard let txid = uploadItem.tx?.id,
                      let itemID = item.tx?.id,
                      txid == itemID else {
                    return
                }


                if item.state == .uploaded {
                    self.draftItem = nil
                    self.refreshList()
                }
            }
            .store(in: &cancelableStorage)

        @InjectedProvider(\.userDefaultSettings)
        var settings;

        settings
            .fileServiceUploadOptionPublisher
            .receive(on: DispatchQueue.main)
            .bind(to: \.uploadOption, on: self)
            .store(in: &cancelableStorage)
    }

    private func refreshList() {
        items = FileServiceRepository
            .getRecords(
                transform: { (file: UploadFile) in
                    file.asStructItem()
                }
            )
    }

    func configActionSignal(_ actionSignal: @escaping (Action) -> Void) {
        self.actionSignal = actionSignal
    }

    func remove(_ item: FileServiceUploadingItem) {
        FileServiceRepository.delete(
            object: UploadFile.self,
            filterBy: \UploadFile.name == item.fileName
        )
    }

    func share(_ item: FileServiceUploadingItem) {
        guard let value = FileServiceUploadResult.from(item) else {
            return
        }
        self.actionSignal(.share(value))
    }

    func tryUploading(_ fileItem: FileServiceSelectedFileItem) {
        draftItem = .init(
            fileName: fileItem.fileName,
            provider: uploadOption.value.service.rawValue.lowercased(),
            fileType: fileItem.fileType,
            state: .preparing,
            content: fileItem.data,
            totalBytes: Double(fileItem.data.count),
            uploadedBytes: 0,
            mime: fileItem.mime
        )
        uploadDraft()
    }

    private func uploadDraft() {
        guard let item = self.draftItem else {
            return
        }
        let option = uploadOption.value
        let uploader = chooseUploader(by: option)
        let stream = uploader.upload(item, option: option)

        Task { @MainActor in
            do {
                for try await value in stream {
                    let didFinish = value.progress == 1
                    let state: FileServiceUploadingItem.State = {
                        if value.progress == 0 {
                            return .preparing
                        } else {
                            return didFinish ? .uploaded : .uploading
                        }
                    }()
                    self.draftItem = .init(
                        fileName: item.fileName,
                        provider: option.service.rawValue.lowercased(),
                        fileType: item.fileType,
                        state: state,
                        content: item.content,
                        totalBytes: Double(item.content.count),
                        uploadedBytes: value.progress * item.totalBytes,
                        uploadDate: didFinish ? Date() : nil,
                        tx: value
                    )
                }
            } catch {
                self.draftItem = .init(
                    fileName: item.fileName,
                    provider: option.service.rawValue.lowercased(),
                    fileType: item.fileType,
                    state: .failed,
                    content: item.content,
                    totalBytes: Double(item.content.count),
                    uploadedBytes: 0
                )
            }
        }
    }

    private func chooseUploader(by option: FileServiceUploadOption) -> any FileServiceUploadHandler {
        switch option.service {
        case .arweave: return ArweaveUploadHandler()
        case .ipfs: return IPFSUploadHandler()
        }
    }
}

extension FileServiceViewModel {
    enum Item: Identifiable, Hashable {
        case draft(FileServiceUploadingItem)
        case archive(FileServiceUploadingItem)

        var id: String {
            switch self {
            case let .archive(item): return item.fileName
            case let .draft(item): return item.fileName
            }
        }

        var fileName: String {
            switch self {
            case let .archive(item): return item.fileName
            case let .draft(item): return item.fileName
            }
        }

        var isArchive: Bool {
            switch self {
            case .archive: return true
            default: return false
            }
        }

        var rawValue: FileServiceUploadingItem {
            switch self {
            case let .draft(value): return value
            case let .archive(value): return value
            }
        }
    }
}
