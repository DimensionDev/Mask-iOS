import Foundation
import CoreData
import CoreDataStack

enum FileServiceRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext

    static func getRecords<T: NSManagedObject & Managed>(
        pageOption: PageOption? = nil,
        filterBy builder: @escaping @autoclosure () -> NSPredicate? = nil ,
        context: NSManagedObjectContext? = viewContext
    ) -> [T] {
        do {
            let queryContext = context ?? viewContext
            let fetchRequest = T.sortedFetchRequest

            if let predicate = builder() {
                fetchRequest.predicate = predicate
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
        filterBy builder: @escaping @autoclosure () -> NSPredicate? = nil,
        context: NSManagedObjectContext? = viewContext
    ) -> [V] {
        let results: [T] = getRecords(pageOption: pageOption, filterBy: builder(), context: context)
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
        filterBy builder: @escaping @autoclosure () -> NSPredicate,
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
}

extension UploadFile {
    func asStructItem() -> FileServiceUploadingItem {
        .init(
            fileName: name ?? "",
            provider: provider ?? "",
            fileType: FileServiceUploadingItem.ItemType(rawValue: fileType) ?? .image,
            state: .uploaded,
            content: content ?? Data(count: Int(fileSize)),
            uploadedBytes: 0,
            uploadDate: createdAt,
            mime: nil, // use nil as all UploadFile is uploaded
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
        self.fileSize = Double(item.content.count)
        self.content = item.content
    }
}
