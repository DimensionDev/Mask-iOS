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
        case file
    }

    let item: FileServiceUploadingItem
    var player: AVPlayer?

    init(item: FileServiceUploadingItem) {
        self.item = item
        let cacheUrl = getUrlFromData(item: item)
        self.player = AVPlayer(url: cacheUrl)
    }

    var body: some View {
        switch getFileTypeFromMime(item: item) {
        case .video:
            VideoPlayer(player: self.player).cornerRadius(8)
        case .image:
            Image(uiImage: UIImage(data: item.content)!)
                .aspectRatio(contentMode: .fit)
                .cornerRadius(8)
        case .file:
            Image(Asset.Plugins.FileService.filePlaceholder)
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

struct FileServiceGeneralPreview_Previews: PreviewProvider {
    static var previews: some View {
        FileServiceGeneralPreview(item: .uploaded)
    }
}

extension FileServiceGeneralPreview {
    func getUrlFromData(item: FileServiceUploadingItem) -> URL {
        let cacheURL = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask).first!.appendingPathComponent(item.fileName)

        do {
            try item.content.write(to: cacheURL, options: .atomicWrite)
        } catch let err {
            print("Failed with error:", err.localizedDescription)
        }
        return cacheURL
    }

    func getFileTypeFromMime(item: FileServiceUploadingItem) -> FileType {
        guard let mime = item.mime else { return .file }
        if mime.containsIgnoreCase(string: "image") {
            return .image
        } else if mime.containsIgnoreCase(string: "video") || mime.containsIgnoreCase(string: "audio") {
            return .video
        } else {
            return .file
        }
    }
}


