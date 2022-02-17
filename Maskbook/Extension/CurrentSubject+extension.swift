//
//  CurrentSubject+extension.swift
//  Maskbook
//
//  Created by yzj on 2021/7/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

extension CurrentValueSubject {
    func accept(_ value: Output) {
        self.value = value
    }
}

extension Publisher {
    func asDriver() -> AnyPublisher<Output, Failure> {
        receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
}
