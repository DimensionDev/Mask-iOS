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
        VStack(spacing: 0) {
            Spacer().frame(height: 64)

            VStack(spacing: 16) {
                ForEach(Item.allCases, id: \.self) { item in
                    localFileSourceItemView(item: item)
                }
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

            Text(item.title)
                .font(.bh5)
                .foregroundColor(
                    Asset.Colors.Text.dark.asColor()
                )

            Spacer()
        }
        .padding(.horizontal, 12)
        .frame(height: 56)
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
                .aspectRatio(contentMode: .fit)
                .frame(width: 20, height: 20)

            Text(L10n.Plugins.FileService.LocalFileSource.uploadTips)
                .font(.rh6)
                .foregroundColor(
                    Asset.Colors.Public.info.asColor()
                )

            Spacer()
        }
        .padding(.horizontal, 16)
        .frame(height: 62)
        .background(
            Asset.Colors.Public.infoBg.asColor()
                .clipShape(RoundedRectangle(cornerRadius: 8.0, style: .continuous))
        )
    }
}

struct FileSource_preview: PreviewProvider {
    final class Delegate: FileServiceSelectFileDelegate {
        func didGetFile(fileItem: FileServiceSelectedFileItem) {}
    }

    static var previews: some View {
        Group {
            VStack {
                FileServiceSelectFileSourceView(
                    viewModel: .init(
                        selectFileHandler: .init(delegate: Delegate())
                    )
                )
            }
            .background(Asset.Colors.Background.normal.asColor())

            VStack {
                FileServiceSelectFileSourceView(
                    viewModel: .init(
                        selectFileHandler: .init(delegate: Delegate())
                    )
                )
            }
            .background(Asset.Colors.Background.normal.asColor())
            .colorScheme(.dark)
        }
    }
}
