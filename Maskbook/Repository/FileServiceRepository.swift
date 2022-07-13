import CoreData
import CoreDataStack
import Foundation
import SwiftyJSON

enum FileServiceRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    static let backgroundContext = AppContext.shared.backgroundContext
}

// MARK: query, save and delete
extension FileServiceRepository {
    static func getRecords<T: NSManagedObject & Managed>(
        pageOption: PageOption? = nil,
        filterBy builder: @escaping @autoclosure () -> [NSPredicate] = [],
        context: NSManagedObjectContext? = viewContext
    ) -> [T] {
        do {
            let queryContext = context ?? self.viewContext
            let fetchRequest = T.sortedFetchRequest
            let predicates = builder()
            if !predicates.isEmpty {
                fetchRequest.predicate = NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
            }

            if let pageOption = pageOption {
                fetchRequest.fetchLimit = pageOption.pageSize
                fetchRequest.fetchOffset = pageOption.pageOffset
            }

            let records = try queryContext.fetch(fetchRequest)
            return records
        } catch {
            return []
        }
    }

    static func getRecords<T: NSManagedObject & Managed, V>(
        pageOption: PageOption? = nil,
        transform: @escaping (T) -> V,
        filterBy builder: @escaping @autoclosure () -> [NSPredicate] = [],
        context: NSManagedObjectContext? = viewContext
    ) -> [V] {
        let results: [T] = self.getRecords(pageOption: pageOption, filterBy: builder(), context: context)
        return results.map(transform)
    }

    static func updateOrInsertRecord<T: NSManagedObject & Managed>(
        updateBy transform: @escaping (T) -> Void,
        context: NSManagedObjectContext = viewContext
    ) {
        context.performAndWait {
            transform(T(context: context))
            try? context.saveOrRollback()
        }
    }

    static func delete<T: NSManagedObject & Managed>(
        object type: T.Type = T.self,
        filterBy builder: @escaping @autoclosure () -> [NSPredicate],
        context: NSManagedObjectContext = viewContext
    ) {
        context.performAndWait {
            guard let record: T = getRecords(
                pageOption: .init(pageSize: 1, pageOffset: 0),
                filterBy: builder(),
                context: context
            ).first else {
                return
            }

            context.delete(record)
            try? context.saveOrRollback()
        }
    }

    static func deleteAll<T: NSManagedObject & Managed>(
        object type: T.Type = T.self,
        context: NSManagedObjectContext = viewContext
    ) {
        context.performAndWait {
            let records: [T] = getRecords()

            for record in records {
                context.delete(record)
            }
            try? context.saveOrRollback()
        }
    }

    static func getTotalCount<T: NSManagedObject & Managed>(object: T.Type) async -> Int {
        await withCheckedContinuation { continuation in
            let fetchRequest = T.sortedFetchRequest

            var count = 0
            backgroundContext.performAndWait {
                count = (try? backgroundContext.count(for: fetchRequest)) ?? 0
            }
            continuation.resume(returning: count)
        }
    }
}

extension FileServiceRepository {
    static func getFilesCount() async -> Int {
        await getTotalCount(object: UploadFile.self)
    }
    
    static func restoreFromJson(_ json: JSON) throws {
        let plugin = try json.asDictionary()
        let fileServices = plugin[RestoreFile.Plugin.CodingKeys.fileService.stringValue]
            .flatMap { $0 as? [[String: Any]] }?
            .compactMap {
                RestoreFile.FileService(from: $0)
            } ?? []
        var restoreError: Error?

        // 2022-07-07T03:16:06.123Z
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        dateFormatter.timeZone = TimeZone.current

        self.backgroundContext.performAndWait {
            for file in fileServices {
                let uploadFile = UploadFile(context: backgroundContext)
                uploadFile.name = file.name
                uploadFile.provider = file.provider
                uploadFile.createdAt = dateFormatter.date(from: file.createdAt)
                uploadFile.fileType = FileServiceUploadingItem.ItemType.file.rawValue
                uploadFile.id = file.id
                uploadFile.key = file.key.isSome ? file.key : nil
                uploadFile.landingTxID = file.landingTxID
                uploadFile.payloadTxID = file.payloadTxID
                uploadFile.fileSize = Double(file.size)
                uploadFile.content = nil

                // we don't have mime and upload option from back file
                // self.uploadOption = item.option?.asString()
                // self.mime = item.mime

                do {
                    try backgroundContext.saveOrRollback()
                } catch {
                    restoreError = error
                }
            }
        }

        if let restoreError = restoreError {
            throw restoreError
        }
    }
}

extension UploadFile {
    func asStructItem() -> FileServiceUploadingItem {
        .init(
            fileName: name ?? "",
            provider: provider ?? "",
            fileType: FileServiceUploadingItem.ItemType(rawValue: fileType) ?? .image,
            state: createdAt.isSome ? .uploaded : .failed,
            content: content ?? Data(),
            totalBytes: fileSize,
            uploadedBytes: createdAt.isSome ? fileSize : 0,
            uploadDate: createdAt,
            mime: mime ?? "", // use nil as all UploadFile is uploaded
            option: .init(uploadOption ?? ""),
            tx: FileServiceTranscation(
                id: id ?? "",
                key: key ?? "",
                landingTxID: landingTxID ?? "",
                payloadTxID: payloadTxID ?? "",
                progress: 0,
                state: .uploaded
            )
        )
    }

    func update(from item: FileServiceUploadingItem) {
        self.name = item.fileName
        self.provider = item.provider
        self.createdAt = item.uploadDate
        self.fileType = item.fileType.rawValue
        self.id = item.tx?.id
        self.key = item.tx?.key
        self.landingTxID = item.tx?.landingTxID
        self.payloadTxID = item.tx?.payloadTxID
        self.fileSize = item.totalBytes

        self.content = item.state == .uploaded
            ? nil
            : item.content

        self.uploadOption = item.option?.asString()
        self.mime = item.mime
    }
}
