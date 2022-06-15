//
//  ArweaveUploader.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct ArweaveUploadHandler: FileServiceUploadHandler {
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error> {
        // TODO: ArweaveUploadHandler
        .init { continuation in
            Task.detached {
                let attachment = AttachmentOptions(encrypted: false,
                                                   type: item.mime,
                                                   block: item.content,
                                                   name: item.fileName)
                let data = try await makeAttachment(attachment: attachment)
                print(data)
                continuation.finish()
            }
        }
    }
    
    func makeAttachment(attachment: AttachmentOptions) async throws -> Data {
        var transaction = try attachment.toTransaction()
        try await RemoteSigning.signing(transaction: &transaction)
        let response = try await transaction.commit()
        return response.data
    }
}
