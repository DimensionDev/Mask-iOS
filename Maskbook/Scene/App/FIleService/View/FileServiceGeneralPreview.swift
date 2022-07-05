//
//  FileServiceGeneralPreview.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import AVKit
import SwiftUI

struct FileServiceGeneralPreview: View {
    enum FileType {
        case video
        case image
        case text
        case application
    }

    let item: FileServiceSelectedFileItem
    var player: AVPlayer?

    init(item: FileServiceSelectedFileItem) {
        self.item = item
        let cacheUrl = getUrlFromData(item: item)
        self.player = AVPlayer(url: cacheUrl)
    }

    var body: some View {
        switch getFileTypeFromMime(item: item) {
        case .video:
            VideoPlayer(player: self.player).cornerRadius(8)
        case .image:
            Image(uiImage: UIImage(data: item.data)!)
                .aspectRatio(contentMode: .fit)
                .cornerRadius(8)
        case .text:
            Image(Asset.Plugins.FileService.textPlaceholder)
                .aspectRatio(contentMode: .fit)
        case .application:
            Image(Asset.Plugins.FileService.applicationPlaceholder)
                .aspectRatio(contentMode: .fit)
        }

        Spacer().frame(height: 18)
        Text(item.fileName)
            .font(.bh4)
            .foregroundColor(Asset.Colors.Text.dark)
        Text(item.totalBytes.fileSizeText)
            .font(.mh7)
            .foregroundColor(Asset.Colors.Text.normal)
    }
}

extension FileServiceGeneralPreview {
    func getUrlFromData(item: FileServiceSelectedFileItem) -> URL {
        let cacheURL = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask).first!.appendingPathComponent(item.fileName)
        do {
            try item.data.write(to: cacheURL, options: .atomicWrite)
        } catch let err {
            print("Failed with error:", err.localizedDescription)
        }
        return cacheURL
    }

    func getFileTypeFromMime(item: FileServiceSelectedFileItem) -> FileType {
        if item.mime.containsIgnoreCase(string: "image") {
            return .image
        } else if item.mime.containsIgnoreCase(string: "video") || item.mime.containsIgnoreCase(string: "audio") {
            return .video
        } else if item.mime.containsIgnoreCase(string: "text") {
            return .text
        } else {
            return .application
        }
    }
}
