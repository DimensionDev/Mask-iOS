//
//  FileServiceDetailViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import CoreDataStack

class FileServiceDetailViewModel : ObservableObject {
    var item: FileServiceDownloadItem
    
    init(item: FileServiceDownloadItem) {
        self.item = item
        startDownload()
    }
    
    @Published
    var state: DownloadState = .downloading
    
    func startDownload() {
        if item.content != nil {
            state = .downloaded
            return
        }
        guard let tx = item.tx else {
            state = .downloadFail
            return
        }
        Task { @MainActor in
            do {
                let data = try await FileService.getAttachment(payloadID: tx.payloadTxID, provider: item.provider, key: tx.key)
                item.content = data
                FileServiceRepository.updateOrInsertRecord(
                    updateBy: { (uploadFile: UploadFile) in
                        uploadFile.update(from: self.item)
                    }
                )
                state = .downloaded
            } catch(let e) {
                log.debug("\(e)")
                state = .downloadFail
            }
        }
    }
}

extension FileServiceDetailViewModel {
    enum DownloadState {
        case downloading
        case downloaded
        case downloadFail
    }
}