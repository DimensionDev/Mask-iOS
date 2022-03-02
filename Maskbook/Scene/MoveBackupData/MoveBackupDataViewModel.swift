//
//  MoveBackupDataViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/2.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class MoveBackupDataViewModel {
    func detectBackupFiles() {
        let fileManager = FileManager.default
        let enumerator = fileManager.enumerator(atPath: URL.documents.relativePath)
        guard let enumerator = enumerator else {
            return
        }

        for case let fileURL as URL in enumerator {
            print(fileURL.path)
        }
    }
}
