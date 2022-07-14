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
        of object: T.Type = T.self,
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

            return try queryContext.fetch(fetchRequest)
        } catch {
            return []
        }
    }

    static func getRecords<T: NSManagedObject & Managed, V>(
        of object: T.Type = T.self,
        pageOption: PageOption? = nil,
        transform: @escaping (T) -> V,
        filterBy builder: @escaping @autoclosure () -> [NSPredicate] = [],
        context: NSManagedObjectContext? = viewContext
    ) -> [V] {
        let results: [T] = self.getRecords(of: T.self, pageOption: pageOption, filterBy: builder(), context: context)
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

    static func getTotalCount<T: NSManagedObject & Managed>(
        of object: T.Type,
        filterBy builder: @escaping @autoclosure () -> [NSPredicate] = []
    ) async -> Int {
        await withCheckedContinuation { continuation in
            let fetchRequest = T.sortedFetchRequest

            let filter = builder()
            if !filter.isEmpty {
                fetchRequest.predicate = NSCompoundPredicate(andPredicateWithSubpredicates: filter)
            }

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
        await self.getTotalCount(
            of: UploadFile.self,
            filterBy: [
                \UploadFile.createdAt != .none
            ]
        )
    }

    static func getFileserviceBackup() async -> JSON {
        await withCheckedContinuation { continuation in
            var files: [JSON] = []
            let fetchRequest = UploadFile.sortedFetchRequest
            fetchRequest.predicate = NSCompoundPredicate(andPredicateWithSubpredicates: [
                \UploadFile.createdAt != .none
            ])

            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
            dateFormatter.timeZone = TimeZone.current

            backgroundContext.performAndWait {
                if let fileRecords = try? backgroundContext.fetch(fetchRequest) {
                    files = fileRecords.compactMap { $0.asBackJSON(dateFormatter) }
                }
            }

            continuation.resume(returning: JSON([RestoreFile.Plugin.CodingKeys.fileService.stringValue: files]))
        }
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

                // uploadFile.uploadOption = item.option?.asString()

                let url = URL(string: file.name)
                uploadFile.mime = url?.mimeType()

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

    func asBackJSON(_ dateFormatter: DateFormatter) -> JSON? {
        typealias Keys = RestoreFile.FileService.CodingKeys

        guard let date = createdAt,
              let payloadTxID = payloadTxID,
              let name = name,
              let provider = provider,
              let id = id,
              let landingTxID = landingTxID
        else {
            return nil
        }

        var json: [String: Any] = [
            Keys.payloadTxID.stringValue: payloadTxID,
            Keys.createdAt.stringValue: dateFormatter.string(from: date),
            Keys.size.stringValue: UInt64(fileSize),
            Keys.name.stringValue: name,
            Keys.provider.stringValue: provider,
            Keys.id.stringValue: id,
            Keys.type.stringValue: "file",
            Keys.landingTxID.stringValue: landingTxID
        ]

        if let key = self.key, !key.isEmpty {
            json[Keys.key.stringValue] = key
        }

        return JSON(json)
    }
}
