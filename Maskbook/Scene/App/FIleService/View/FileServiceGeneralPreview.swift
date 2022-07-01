//
//  FileServiceGeneralPreview.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct FileServiceGeneralPreview: View {
    let item: FileServiceUploadingItem
    
    init(item: FileServiceUploadingItem) {
        self.item = item
    }
    
    var body: some View {
        Text(/*@START_MENU_TOKEN@*/"Hello, World!"/*@END_MENU_TOKEN@*/)
    }
}

struct FileServiceGeneralPreview_Previews: PreviewProvider {
    static var previews: some View {
        FileServiceGeneralPreview(item: .uploaded)
    }
}
