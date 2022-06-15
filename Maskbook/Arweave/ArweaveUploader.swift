//
//  ArweaveUploader.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class ArweaveUploader {
    
    func upload(fileItem: FileServiceSelectedFileItem) async throws -> Data {
        let attachment = AttachmentOptions(encrypted: false,
                                           type: fileItem.fileExt,
                                           block: fileItem.data,
                                           name: fileItem.fileNameWithoutExt)
        
        var transaction = try attachment.toTransaction()
        try await RemoteSigning.signing(transaction: &transaction)
        let data = try await transaction.commit()
        return data
    }
}
