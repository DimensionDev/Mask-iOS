//
//  AsyncPublisher.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/3/31.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine

extension Publisher {
    func asyncMap<T>(
        _ transform: @escaping (Output) async throws -> T
    ) -> Publishers.FlatMap<Future<T, Error>,
                            Publishers.SetFailureType<Self, Error>> {
        flatMap { value in
            Future { promise in
                Task {
                    do {
                        let output = try await transform(value)
                        promise(.success(output))
                    } catch {
                        promise(.failure(error))
                    }
                }
            }
        }
    }
}
