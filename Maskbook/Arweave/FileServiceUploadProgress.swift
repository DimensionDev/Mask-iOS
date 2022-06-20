//
//  FileServiceUploadProgress.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
struct FileServiceUploadProgress {
    private var filePayloadLength: Double = 0
    private let htmlDownloadLength: Double = 95_973
    private let htmlUploadLength: Double = 95_973
    
    var allStageLength: Double {
        filePayloadLength + htmlDownloadLength + htmlUploadLength
    }
    
    enum Stage {
        case filePayloadUploading(totalBytesSent: Double, totalBytesExpectedToSend: Double)
        case htmlDownloading
        case htmlUploading
        case uploadFinish
    }
    
    mutating func progressForCurrentStage(stage: Stage) -> Double {
        var progress: Double
        switch stage {
        case .filePayloadUploading(let totalBytesSent, let totalBytesExpectedToSend):
            self.filePayloadLength = totalBytesExpectedToSend
            progress = totalBytesSent / allStageLength
        case .htmlDownloading:
            progress = filePayloadLength / allStageLength
        case .htmlUploading:
            progress = (filePayloadLength + htmlDownloadLength) / allStageLength
        case .uploadFinish:
            progress = 1.0
        }
        print("uploading progress \(progress)")
        return progress
    }
}
