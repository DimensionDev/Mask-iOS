import Foundation
import CoreData


extension UploadFile {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<UploadFile> {
        return NSFetchRequest<UploadFile>(entityName: "UploadFile")
    }

    @NSManaged public var name: String?
    @NSManaged public var content: Data?
    @NSManaged public var uploadedDate: Date?
    @NSManaged public var uploadState: Int64

}

extension UploadFile : Identifiable {}
