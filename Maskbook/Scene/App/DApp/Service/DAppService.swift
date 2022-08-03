//
//  DAppService.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/22.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

enum DAppService {
    enum CloudHost {
        case production
        case development
        
        var url: URL {
            switch self {
            case .production:
                return URL(string: "https://backup.mask.io/api")!
            case .development:
                return URL(string: "https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api")!
            }
        }
    }
    
    static func sendRiskWarningConfirm(address: String, pluginID: String? = nil) {
#if DEBUG
        let host = CloudHost.development.url
#else
        let host = CloudHost.production.url
#endif
        let encoder = JSONEncoder()
        let params = [
            "address": address,
            "plugin_id": pluginID ?? ""
        ]
        guard let requestData = try? encoder.encode(params) else {
            return
        }
        
        Task {
            let url = host.appendingPathComponent("v1/risk_warning/confirm")
            var urlRequest = URLRequest(url: url, cachePolicy: .reloadIgnoringCacheData)
            urlRequest.httpMethod = "POST"
            urlRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
            urlRequest.setValue("application/json", forHTTPHeaderField: "Accept")
            urlRequest.httpBody = requestData
            
            let config = URLSessionConfiguration.default
            let urlSession = URLSession(configuration: config)
            
            let (data, _) = try await urlSession.data(for: urlRequest)
            log.debug("\(String(data: data, encoding: .utf8) ?? "")", source: "lucky drop")
        }
    }
}
