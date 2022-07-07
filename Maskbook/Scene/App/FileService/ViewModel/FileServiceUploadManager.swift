import Combine
import Foundation
import CoreDataStack

struct FileServiceInjectKey: InjectValueKey {
    static var defaultInjectValue: FileServiceUploadManager = .shared
}

extension InjectValues {
    var fileServiceUploadManager: FileServiceUploadManager {
        Self[FileServiceInjectKey.self]
    }
}

final class FileServiceUploadManager: ObservableObject {
    @Published
    private(set) var uploadingItems: [FileServiceUploadViewModel] = []

    private(set) var newUploadedItem = PassthroughSubject<FileServiceUploadingItem, Never>()
    private var cancelableStorage: Set<AnyCancellable> = []

    var allowUploading: Bool {
        uploadingItems.filter { $0.item.state != .uploaded }.count < 3
    }

    var isVisible: Bool = false {
        didSet {
            if !isVisible {
                checkAndRemoveUploadedItem()
            }
        }
    }

    fileprivate static let shared = FileServiceUploadManager()
    fileprivate init() {
        Task { @MainActor in
            self.uploadingItems = FileServiceRepository.getRecords(transform: { (file: UploadFile) in
                file.asStructItem()
            })
             .filter { $0.uploadDate.isNone }
             .map {
                 .init(item: $0)
             }
        }
    }

    func tryUploading(
        _ item: FileServiceUploadingItem
    ) -> Bool {
        guard allowUploading else {
            return false
        }

        // if item is duplicated in task queue，move it to the first and done
        if let duplicateItemIndex = uploadingItems.firstIndex(where: { $0.uploadContentEquals(to: item) }) {
            let duplicateViewModel = uploadingItems[duplicateItemIndex]
            if duplicateItemIndex != 0 {
                uploadingItems.remove(at: duplicateItemIndex)
                uploadingItems.insert(duplicateViewModel, at: 0)
            }
            return true
        }

        if uploadingItems.count == 3,
           let uploadedItemIndex = uploadingItems.lastIndex(where: { $0.item.state == .uploaded }) {
            uploadingItems.remove(at: uploadedItemIndex)
        }

        switch item.state {
        case .uploaded:
            let model = FileServiceUploadViewModel(item: item)
            uploadingItems.insert(model, at: 0)

        case .failed, .preparing, .encrypting, .uploading:
            let model = FileServiceUploadViewModel(item: item)
            uploadingItems.insert(model, at: 0)
            model.tryUploading(item)
            model.newUploadedItem
                .sink { [weak self] item in
                    guard let self = self else { return }
                    if self.isVisible {
                        self.newUploadedItem.send(item)
                    } else {
                        self.remove(item)
                    }
                }
                .store(in: &cancelableStorage)
        }

        return true
    }

    func retryUploading(_ item: FileServiceUploadingItem) {
        if let vm = uploadingItems.first(where: { $0.item == item }) {
            vm.tryUploading(item)
        }
    }

    func remove(_ item: FileServiceUploadingItem) {
        uploadingItems.removeAll {
            $0.item == item
        }
    }

    private func checkAndRemoveUploadedItem() {
        var removeItem: [FileServiceUploadingItem] = []
        for vm in uploadingItems {
            if vm.item.state == .uploaded {
                removeItem.append(vm.item)
            }
        }

        removeItem.forEach { remove($0) }
    }
}
