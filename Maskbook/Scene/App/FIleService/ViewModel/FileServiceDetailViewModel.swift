//
//  FileServiceDetailViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
class FileServiceDetailViewModel : ObservableObject {
    var item: FileServiceUploadingItem
    
    init(item: FileServiceUploadingItem) {
        self.item = item
        startDownload()
    }
    
    @Published
    var state: DownloadState = .downloading
    
    private lazy var shareViewModel = PluginMetaShareViewModel()
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    @MainActor
    func share() {
        guard let shareItem = FileServiceUploadResult.from(item) else {
            log.info("FileServiceUploadResult get a nil value")
            return
        }
        shareViewModel.postFileService(fileServiceResult: shareItem)
    }
    
    @MainActor
    func save() {
        guard let content = item.contentDownloadFromTX else {
            return
        }
        let controller = FileServiceSaveFileController(item: item)
        coordinator.topViewController?.present(controller, animated: true)
    }
    
    func startDownload() {
        guard let tx = item.tx else {
            state = .downloadFail
            return
        }
        Task {
            do {
                let data = try await FileService.getAttachment(payloadID: tx.payloadTxID, provider: item.provider, key: tx.key)
                item.contentDownloadFromTX = data
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
