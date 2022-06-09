import Foundation
import CoreData
import CoreDataStack

enum FileServiceRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext

    static func getRecords<T: NSManagedObject & Managed>(
        pageOption: PageOption = .init(pageSize: 20, pageOffset: 0),
        filterBy builder: @escaping @autoclosure () -> NSPredicate? = nil ,
        context: NSManagedObjectContext? = viewContext
    ) -> [T] {
        do {
            let queryContext = context ?? viewContext
            let fetchRequest = T.sortedFetchRequest

            if let predicate = builder() {
                fetchRequest.predicate = predicate
            }

            fetchRequest.fetchLimit = pageOption.pageSize
            fetchRequest.fetchOffset = pageOption.pageOffset

            let records = try queryContext.fetch(fetchRequest)
            return records
        } catch {
            return []
        }
    }

    static func updateOrInsertRecord<T: NSManagedObject & Managed>(
        filterBy builder: @escaping @autoclosure () -> NSPredicate,
        updateBy transform: @escaping (T) -> Void,
        context: NSManagedObjectContext = viewContext
    ) {
        context.performAndWait {
            let record: T = getRecords(
                pageOption: .init(pageSize: 1, pageOffset: 0),
                filterBy: builder()
            ).first ?? T(context: context)

            transform(record)

            try? viewContext.saveOrRollback()
        }
    }

    static func predicate(byName name: String) -> NSPredicate {
        \UploadFile.name == name
    }
}
