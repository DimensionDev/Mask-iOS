//
//  File.swift
//  Maskbook
//
//  Created by yzj on 2022/7/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import CoreDataStack

final class FileServiceUploadViewModel: ObservableObject {
    @Published
    private(set) var item: FileServiceUploadingItem
    private(set) var newUploadedItem = PassthroughSubject<FileServiceUploadingItem, Never>()

    init(item: FileServiceUploadingItem) {
        self.item = item
    }

    func tryUploading(
        _ item: FileServiceUploadingItem
    ) {
        let uploadOption = item.option
        let uploader = chooseUploader(by: uploadOption)
        let stream = uploader.upload(item, option: uploadOption)

        Task { @MainActor in
            do {
                for try await value in stream {
                    let didFinish = value.state == .uploaded
                    let item = FileServiceUploadingItem(
                        fileName: item.fileName,
                        provider: uploadOption.service.rawValue.lowercased(),
                        fileType: item.fileType,
                        state: value.state,
                        content: item.content,
                        uploadedBytes: value.progress * item.totalBytes,
                        uploadDate: didFinish ? Date() : nil,
                        option: uploadOption,
                        tx: value
                    )

                    self.updateUploadingState(for: item)
                    if didFinish {
                        self.newUploadedItem.send(item)
                    }
                }
            } catch {
                let item = FileServiceUploadingItem(
                    fileName: item.fileName,
                    provider: uploadOption.service.rawValue.lowercased(),
                    fileType: item.fileType,
                    state: .failed,
                    content: item.content,
                    uploadedBytes: self.item.progress * item.totalBytes,
                    option: uploadOption
                )
                self.updateUploadingState(for: item)
            }
        }
    }

    private func updateUploadingState(for item: FileServiceUploadingItem) {
        self.item = item
        FileServiceRepository.updateOrInsertRecord { (file: UploadFile) in
            file.update(from: item)
        }
    }

    private func chooseUploader(by option: FileServiceUploadOption) -> any FileServiceUploadHandler {
        switch option.service {
        case .arweave: return ArweaveUploadHandler()
        case .ipfs: return IPFSUploadHandler()
        }
    }
}
