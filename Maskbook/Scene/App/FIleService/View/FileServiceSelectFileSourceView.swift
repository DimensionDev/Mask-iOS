//
//  FileServiceSelectFileTypeView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

enum FileServiceLocalFileSourceItem: CaseIterable {
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

struct FileServiceSelectFileSourceView: View {
    var body: some View {
        VStack(alignment: .leading) {
            Spacer().frame(height: 44)
            ForEach(FileServiceLocalFileSourceItem.allCases, id: \.self) { item in
                    localFileSourceItemView(item: item)
                }
            Spacer().frame(height: 20)
            tipsView()
            Spacer().frame(height: 54)
        }
        .padding(.horizontal, 20)
    }
    
    func localFileSourceItemView(item: FileServiceLocalFileSourceItem) -> some View {
        HStack {
            Image(item.imageName)
                .resizable()
                .frame(width: 32, height: 32)
                .padding(.vertical, 12)
                .padding(.leading, 12)
            Text(item.title)
                .font(.bh5)
                .foregroundColor(
                    Asset.Colors.Text.dark.asColor()
                )
            Spacer()
        }
        .background(
            Asset.Colors.Background.dark.asColor()
                .clipShape(RoundedRectangle(cornerRadius: 8.0, style: .continuous))
        )
    }
    
    func tipsView() -> some View {
        HStack {
            Image(Asset.Plugins.FileService.infoCircle.name)
                .resizable()
                .frame(width: 32, height: 32)
                .padding(.vertical, 12)
                .padding(.leading, 12)
            Text(L10n.Plugins.FileService.LocalFileSource.uploadTips)
                .font(.rh6)
                .foregroundColor(
                    Asset.Colors.Public.info.asColor()
                )
            Spacer()
        }
        .background(
            Asset.Colors.Public.infoBg.asColor().opacity(1)
                .clipShape(RoundedRectangle(cornerRadius: 8.0, style: .continuous))
        )
    }
}

struct FileServiceSelectFileTypeView_Previews: PreviewProvider {
    static var previews: some View {
        FileServiceSelectFileSourceView()
            .background(Asset.Colors.Background.normal.asColor())
    }
}
