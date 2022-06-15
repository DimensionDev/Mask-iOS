import Foundation
import CoreData


extension UploadFile {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<UploadFile> {
        return NSFetchRequest<UploadFile>(entityName: "UploadFile")
    }

    @NSManaged public var fileType: Int64

    @NSManaged public var name: String?
    @NSManaged public var createdAt: Date?
    @NSManaged public var id: String?
    @NSManaged public var key: String?
    @NSManaged public var landingTxID: String?
    @NSManaged public var payloadTxID: String?
    @NSManaged public var provider: String?
}

extension UploadFile : Identifiable {}
