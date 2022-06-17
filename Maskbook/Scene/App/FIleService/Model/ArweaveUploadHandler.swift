//
//  ArweaveUploader.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct ArweaveUploadHandler: FileServiceUploadHandler {
    func upload(_ item: FileServiceUploadingItem,
                option: FileServiceUploadOption) -> AsyncThrowingStream<FileServiceTranscation, Error>
    {
        .init { continuation in
            Task.detached {
                let uploader = ArweaveUploader(item: item,
                                               option: option,
                                               continuation: continuation)
                try await uploader.startUpload()
            }
        }
    }
}
