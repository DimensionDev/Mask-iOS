import CoreData

extension NSManagedObjectContext {
    func fetchByTemplate<T: NSManagedObject>(
        templateName: String,
        variables: [String: Any] = [:],
        _ configRequest: @escaping (NSFetchRequest<T>?) -> Void
    ) -> NSFetchRequest<T>? {
        let request: NSFetchRequest<T>? = {
            persistentStoreCoordinator?
                .managedObjectModel
                .fetchRequestFromTemplate(
                    withName: templateName,
                    substitutionVariables: variables
                ) as? NSFetchRequest<T>
        }()
        configRequest(request)

        return request
    }

    func fetchByType<T: NSManagedObject>(
        _ configRequest: @escaping (NSFetchRequest<T>?) -> Void = { _ in }
    ) -> NSFetchRequest<T> {
        let request = NSFetchRequest<T>(entityName: String(describing: T.self))
        configRequest(request)
        return request
    }

    func insert<T: NSManagedObject>() -> T? {
        NSEntityDescription.insertNewObject(
            forEntityName: String(describing: T.self),
            into: self
        ) as? T
    }

    func provideData<T: NSManagedObject>() throws -> [T] {
        let request: NSFetchRequest<T>? = fetchByType()

        guard let finalRequest = request else {
            return []
        }

        return try self.fetch(finalRequest)
    }
}
