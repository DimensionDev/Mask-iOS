//
//  FileServiceDetailViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreDataStack
import Foundation

class FileServiceDetailViewModel: ObservableObject {
    var item: FileServiceDownloadItem

    init(item: FileServiceDownloadItem) {
        self.item = item
        startDownload()
    }

    var useCDN = true

    @Published
    var state: DownloadState = .downloading

    func startDownload() {
        typealias Service = FileServiceUploadOption.Service
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
                let data = try await FileService.getAttachment(payloadID: tx.payloadTxID,
                                                               provider: item.provider,
                                                               key: tx.key,
                                                               useCDN: useCDN)
                item.content = data
                FileServiceLargeFileStorage.save(data,
                                                 id: tx.id,
                                                 fileName: item.fileName)
                state = .downloaded
            } catch let e {
                log.debug("\(e)")
                if let service = Service(rawValue: item.provider),
                   service == .arweave,
                   useCDN == true
                {
                    // arweave can try without cdn
                    useCDN = false
                    startDownload()
                } else {
                    state = .downloadFail
                }
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
