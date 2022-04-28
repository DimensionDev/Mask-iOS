//
//  WebExtension.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

/// Every RPC request in holoflowsKit is JSON object and should have extension ID field
public protocol WebExtensionClientRequest {
    static var method: String { get }
    
    var extensionID: String { get }
}

public protocol WebExtensionServerRequest {
    static var method: String { get }
    // not require extensionID
}

public enum WebExtension {

    // App as RPC server. Browser as RPC Client
    public typealias ClientRequest = WebExtensionClientRequest & Codable
    public typealias ServerRequest = WebExtensionServerRequest & Codable

}

extension WebExtension {

    public enum URL { }
    public enum WebSocket { }
    public enum ExtensionTypes { }

    public enum Browser {
        public enum Runtime { }
        public enum WebNavigation { }
        public enum Tabs { }
        public enum Storage {
            public enum Local { }
        }
        public enum Downloads { }
    }

    public enum API: CaseIterable {
        case _echo
        case eval
        case sendMessage
        case fetch
        case urlCreateObjectURL
        case browserDownloadsDownload
        case browserRuntimeGetURL
        case browserTabsExecuteScript
        case browserTabsCreate
        case browserTabsRemove
        case browserTabsQuery
        case browserTabsUpdate
        case browserStorageLocalGet
        case browserStorageLocalSet
        case browserStorageLocalRemove
        case browserStorageLocalClear
        /*
        case websocketCreate
        case websocketClose
        case websocketSend
         */

        public init?(method: String) {
            guard let api = API.allCases.first(where: { $0.method == method }) else {
                return nil
            }

            self = api
        }

        public var method: String {
            switch self {
            case ._echo:                            return WebExtension._Echo.method
            case .eval:                             return WebExtension.Eval.method
            case .sendMessage:                      return WebExtension.SendMessage.method
            case .fetch:                            return WebExtension.Fetch.method
            case .urlCreateObjectURL:               return WebExtension.URL.CreateObjectURL.method
            case .browserDownloadsDownload:         return WebExtension.Browser.Downloads.Download.method
            case .browserRuntimeGetURL:             return WebExtension.Browser.Runtime.GetURL.method
            case .browserTabsExecuteScript:         return WebExtension.Browser.Tabs.ExecuteScript.method
            case .browserTabsCreate:                return WebExtension.Browser.Tabs.Create.method
            case .browserTabsRemove:                return WebExtension.Browser.Tabs.Remove.method
            case .browserTabsQuery:                 return WebExtension.Browser.Tabs.Query.method
            case .browserTabsUpdate:                return WebExtension.Browser.Tabs.Update.method
            case .browserStorageLocalGet:           return WebExtension.Browser.Storage.Local.Get.method
            case .browserStorageLocalSet:           return WebExtension.Browser.Storage.Local.Set.method
            case .browserStorageLocalRemove:        return WebExtension.Browser.Storage.Local.Remove.method
            case .browserStorageLocalClear:         return WebExtension.Browser.Storage.Local.Clear.method
            /*
            case .websocketCreate:                  return WebExtension.WebSocket.Create.method
            case .websocketClose:                   return WebExtension.WebSocket.Close.method
            case .websocketSend:                    return WebExtension.WebSocket.Send.method
             */
            }
        }


    }

}
