//
//  WebExtension+ExtensionTypes.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension WebExtension.ExtensionTypes {

    public enum RunAt: String, Codable {
        case documentStart = "document_start"
        case documentEnd = "document_end"
        case documentIdle = "document_idle"

        public static let `default` = RunAt.documentIdle
    }
    
}
