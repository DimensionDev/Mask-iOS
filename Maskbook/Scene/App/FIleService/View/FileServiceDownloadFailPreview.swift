//
//  FileServiceDownloadFailPreview.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct FileServiceDownloadFailPreview: View {
    let item: FileServiceDownloadItem
    
    init(item: FileServiceDownloadItem) {
        self.item = item
    }
    
    var body: some View {
        VStack {
            
            Image(Asset.Plugins.FileService.downloadFail)
                .aspectRatio(contentMode: .fit)
            Spacer().frame(height: 46)
            Text(item.fileName)
                .font(.bh4)
                .foregroundColor(Asset.Colors.Text.dark)
            Text(item.uploadDateText)
                .font(.mh7)
                .foregroundColor(Asset.Colors.Text.normal)
        }
    }
}
