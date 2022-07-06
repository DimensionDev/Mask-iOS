//
//  FileServiceSelectServiceViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/5.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class FileServiceSelectServiceViewModel: SelectItemViewModelProtocol {
    typealias Service = FileServiceUploadOption.Service
    
    let service: Service
    let serviceHandler: (Service) -> Void
    init(service: Service, serviceHandler: @escaping (Service) -> Void) {
        self.service = service
        self.serviceHandler = serviceHandler
    }
    
    func titles() -> [String] {
        Service.allCases.map(\.title)
    }
    
    func selectedIndex() -> Int? {
        Service.allCases.firstIndex(of: self.service)
    }
    
    func select(index: Int) {
        let selectServive = Service.allCases[index]
        self.serviceHandler(selectServive)
    }
}
