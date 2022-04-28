//
//  PluginResourceProvider.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-7-12.
//

import Foundation

public protocol PluginResourceProvider: AnyObject {
    func data(from url: URL, handler: @escaping (Result<(Data, URLResponse), Error>) -> Void)
}
