//
//  WebExtension+Eval.swift
//  Alamofire
//
//  Created by Cirno MainasuK on 2020-5-25.
//

import Foundation
import SwiftyJSON

extension WebExtension {
    
    public struct Eval: WebExtension.ClientRequest {
        public static let method: String = "eval"
        
        public let extensionID: String
        public let string: String
        
        
        public init(extensionID: String, string: String) {
            self.extensionID = extensionID
            self.string = string
        }
    }
    
}

extension WebExtension.Eval {
    
    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()
        
        extensionID = try container.decode(String.self)
        string = try container.decode(String.self)
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()
        
        try container.encode(extensionID)
        try container.encode(string)
    }
    
}
