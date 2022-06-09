import Foundation
import CoreData
import CoreDataStack

enum FileServiceRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext

    static func getRecords<T: NSManagedObject & Managed>(
        pageOption: PageOption = .init(pageSize: 20, pageOffset: 0),
        predicateBuilder builder: @escaping @autoclosure () -> NSPredicate? = nil ,
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

    static func updateRecord<T: NSManagedObject & Managed>(
        predicateBuilder builder: @escaping @autoclosure () -> NSPredicate,
        updateBy transform: @escaping (T) -> Void,
        context: NSManagedObjectContext = viewContext
    ) {
        context.performAndWait {
            guard let record: T = getRecords(
                pageOption: .init(pageSize: 1, pageOffset: 0),
                predicateBuilder: builder()
            ).first else {
                return
            }

            transform(record)

            try? viewContext.saveOrRollback()
        }
    }

    static func predicate(byName name: String) -> NSPredicate {
        \UploadFile.name == name
    }
}
