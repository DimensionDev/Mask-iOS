//
//  FileServiceSelectFileTypeView.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI

struct FileServiceSelectFileSourceView: View {
    typealias Item = FileServiceSelectFileSourceViewModel.LocalFileSourceItem
    
    let viewModel: FileServiceSelectFileSourceViewModel

    var body: some View {
        VStack {
            Spacer().frame(height: 64)
            ForEach(Item.allCases, id: \.self) { item in
                localFileSourceItemView(item: item)
            }
            Spacer().frame(height: 20)
            tipsView()
            Spacer().frame(height: 54)
        }
        .padding(.horizontal, 20)
    }

    func localFileSourceItemView(item: Item) -> some View {
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
        .onTapGesture {
            viewModel.select(item: item)
        }
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
            Asset.Colors.Public.infoBg.asColor()
                .clipShape(RoundedRectangle(cornerRadius: 8.0, style: .continuous))
        )
    }
}
