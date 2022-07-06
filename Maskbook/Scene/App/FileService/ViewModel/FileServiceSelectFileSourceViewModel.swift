//
//  FileServiceSelectFileSourceViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/9.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class FileServiceSelectFileSourceViewModel {
    init(selectFileHandler: FileServiceSelectFileHandler) {
        self.selectFileHandler = selectFileHandler
    }
    
    
    let selectFileHandler: FileServiceSelectFileHandler
    
    func select(item: LocalFileSourceItem) {
        selectFileHandler.select(item: item)
    }
}

extension FileServiceSelectFileSourceViewModel {
    enum LocalFileSourceItem: CaseIterable {
        case camera
        case photo
        case file

        var imageName: String {
            switch self {
            case .camera: return Asset.Plugins.FileService.uplodaCamera.name
            case .photo: return Asset.Plugins.FileService.uplodaPhotos.name
            case .file: return Asset.Plugins.FileService.uploadFile.name
            }
        }

        var title: String {
            switch self {
            case .camera: return L10n.Plugins.FileService.LocalFileSource.takePhotos
            case .photo: return L10n.Plugins.FileService.LocalFileSource.uploadPhotos
            case .file: return L10n.Plugins.FileService.LocalFileSource.uploadFile
            }
        }
    }
}
