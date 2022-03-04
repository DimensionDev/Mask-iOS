//
//  Token+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/10/13.
//  Copyright © 2021 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension Token {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Token> {
        return NSFetchRequest<Token>(entityName: "Token")
    }

    @NSManaged public var chainId: Int64
    @NSManaged public var createdAt: Date?
    @NSManaged public var currency: String?
    @NSManaged public var decimal: Int16
    @NSManaged public var identifier: String?
    @NSManaged public var lastModifiedDate: Date?
    @NSManaged public var logoUrl: String?
    @NSManaged public var name: String?
    @NSManaged public var networkId: Int64
    @NSManaged public var price: NSDecimalNumber?
    @NSManaged public var quantity: NSDecimalNumber?
    @NSManaged public var symbol: String?
    @NSManaged public var type: String?
    @NSManaged public var contractAddress: String?
    @NSManaged public var account: Account?

}

extension Token : Identifiable {
    
}
