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

    var item: FileServiceSelectedFileItem
    var player: AVPlayer?

    init(item: FileServiceSelectedFileItem) {
        self.item = item
        let cacheUrl = self.item.tempURL
        self.player = AVPlayer(url: cacheUrl)
    }

    var body: some View {
        VStack {
            switch item.specificFileType {
            case .video:
                VideoPlayer(player: self.player).cornerRadius(8)
            case .image:
                Image(uiImage: UIImage(data: item.data)!)
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
        }.horizontallyCenterred()
    }
}
