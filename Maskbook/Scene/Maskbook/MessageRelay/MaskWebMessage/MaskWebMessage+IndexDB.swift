//
//  MaskWebMessage+IndexDB.swift
//  Maskbook
//
//  Created by BradGao on 2021/11/4.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim

extension WebExtension.Setting {
    struct AppSuspendedMessage: MWEMessage {
        static let method: String = "app_suspended"
        typealias Payload = String
        init(payload: String? = nil) {}
    }
    
    struct AppResumeMessage: MWEMessage {
        static let method: String = "app_resume"
        typealias Payload = String
        init(payload: String? = nil) {}
    }
    
    struct GetIndexedDBRecordsMessage: MWEMessage {
        static let method: String = "get_all_indexedDB_records"
        typealias Payload = String
        init(payload: String? = nil) {}
    }
}
