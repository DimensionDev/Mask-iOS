//
//  NetworkError.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

enum NetworkError: Error {
    case timeout
    case serverError
    case invalidResponse
    case other(Error)
    
    static func map(_ error: Error) -> NetworkError {
      return (error as? NetworkError) ?? .other(error)
    }
}
