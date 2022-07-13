//
//  File.swift
//  Maskbook
//
//  Created by yzj on 2022/7/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

final class FileServiceUploadViewModel: ObservableObject {
    // MARK: Lifecycle

    init(item: FileServiceUploadingItem) {
        self.item = item
    }

    // MARK: Internal

    @Published
    private(set) var item: FileServiceUploadingItem
    private(set) var newUploadedItem = PassthroughSubject<FileServiceUploadingItem, Never>()

    func uploadContentEquals(to item: FileServiceUploadingItem) -> Bool {
        self.item.fileNameAndOptionEquals(to: item)
    }

    func tryUploading(
        _ item: FileServiceUploadingItem
    ) {
        guard let uploadOption = item.option else {
            return
        }
        let uploader = chooseUploader(by: uploadOption)
        let stream = uploader.upload(item, option: uploadOption)

        Task(priority: .high) { @MainActor in
            var uploadedBytes: Double = 0
            do {
                for try await value in stream {
                    let didFinish = value.state == .uploaded
                    uploadedBytes = value.progress * item.totalBytes
                    let item = FileServiceUploadingItem(
                        fileName: item.fileName,
                        provider: item.provider,
                        fileType: item.fileType,
                        state: value.state,
                        content: item.content,
                        totalBytes: item.totalBytes,
                        uploadedBytes: uploadedBytes,
                        uploadDate: didFinish ? Date() : nil,
                        mime: item.mime,
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
                    provider: item.provider,
                    fileType: item.fileType,
                    state: .failed,
                    content: item.content,
                    totalBytes: item.totalBytes,
                    uploadedBytes: uploadedBytes,
                    mime: item.mime,
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

extension FileServiceUploadViewModel: Equatable {
    static func == (lhs: FileServiceUploadViewModel, rhs: FileServiceUploadViewModel) -> Bool {
        lhs.item == rhs.item
    }
}
