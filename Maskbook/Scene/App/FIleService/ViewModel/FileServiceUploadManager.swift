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
        uploadingItems.count < 3
    }

    var isVisible: Bool = false

    static let shared = FileServiceUploadManager()
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
        guard uploadingItems.count < 3 else {
            return false
        }

        if !uploadingItems.contains(where: { $0.item.content == item.content }) {
            let model = FileServiceUploadViewModel(item: item)
            uploadingItems.insert(model, at: 0)
            if item.state != .failed {
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

        return false
    }

    func retryUploading(_ item: FileServiceUploadingItem) {
        if let vm = uploadingItems.first(where: { $0.item == item }) {
            vm.tryUploading(item)
        }
    }

    func remove(_ item: FileServiceUploadingItem) {
        uploadingItems.removeAll(where: {
            $0.item == item
        })
    }
}
