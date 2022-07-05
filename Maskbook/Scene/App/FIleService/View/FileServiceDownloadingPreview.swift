//
//  FileServiceDownloadingPreview.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct FileServiceDownloadingPreview: View {
    
    let item: FileServiceDownloadItem
    
    init(item: FileServiceDownloadItem) {
        self.item = item
    }
    
    var body: some View {
        VStack {
            ProgressView()
                .scaleEffect(x: 2, y: 2, anchor: .center)
            Spacer().frame(height: 84)
            Text(item.fileName)
                .font(.bh4)
                .foregroundColor(Asset.Colors.Text.dark)
            Text(item.totalBytes.fileSizeText)
                .font(.mh7)
                .foregroundColor(Asset.Colors.Text.normal)
        }
    }
}
