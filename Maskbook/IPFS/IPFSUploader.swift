//
//  IPFSUploader.swift
//  Maskbook
//
//  Created by caiyu on 2022/6/13.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import IpfsLiteApi


class IPFSUploader {
    init() {
        let fileManager = FileManager.default
        let documentsPath = fileManager.urls(for: .documentDirectory, in: .userDomainMask)[0].appendingPathComponent("ipfs-lite")
        let exist = fileManager.fileExists(atPath: documentsPath.path)

        if !exist {
            try! fileManager.createDirectory(atPath: documentsPath.path,

                                             withIntermediateDirectories: true, attributes: nil)
        }
        do {
            let success = try IpfsLiteApi.launch(documentsPath.path, debug: false, lowMem: true)
        } catch {
            print(error)
        }
    }
    
    @MainActor
    func makeAttachment(fileItem: FileServiceUploadFileItem) async throws -> String {
        let attachment = AttachmentOptions(encrypted: false,
                                           type: fileItem.fileExt,
                                           block: fileItem.data,
                                           name: fileItem.fileNameWithoutExt)
        
        let encryptData = try attachment.encryptedData()
        return await withCheckedContinuation({ continuation in
            IpfsLiteApi.instance().addFile(fromInput: InputStream(data: encryptData), params: TTEAddParams()) { callback, error in
                if let callback = callback {
                    continuation.resume(returning: callback.block.cid)
                } else {
                    continuation.resume(returning: "")
                }
            }
        })
    }
    
    
}

