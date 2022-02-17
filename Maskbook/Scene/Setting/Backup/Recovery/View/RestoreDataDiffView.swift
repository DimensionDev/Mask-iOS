//
//  RestoreDataDiffView.swift
//  Maskbook
//
//  Created by yzj on 2021/8/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct RestoreDataDiffView: View {
    @ObservedObject
    var viewModel: RestoreFilePreviewViewModel

    var restoreData: RestorePreviewResult {
        viewModel.restoreFile
    }

    var body: some View {
        ScrollView {
            VStack(spacing: 19) {
                ForEach(restoreData.previewItems, id: \.title) { item in
                    HStack(spacing: 10) {
                        Text(item.title)
                            .font(FontStyles.mh6.font)
                            .foregroundColor(Asset.Colors.Text.dark.asColor())

                        Spacer()

                        Text(item.detail)
                            .font(FontStyles.mh5.font)
                            .foregroundColor(Asset.Colors.Text.dark.asColor())
                    }
                    .frame(height: 21)
                }
                .padding([.leading, .trailing], 16)
            }
            .padding([.top, .bottom], 16)
            .background(Asset.Colors.Background.dark.asColor())
            .cornerRadius(20)
        }
        .padding([.top], 24)
        .padding([.leading, .trailing], 22)

        Spacer()

        Button(
            action: { viewModel.restore() },
            label: {
                HStack {
                    Spacer()
                    Text(L10n.Scene.Restore.Buttontitles.backup)
                        .font(FontStyles.bh5.font)
                        .foregroundColor(
                            viewModel.restoreFile.supportRestore
                                ? Asset.Colors.Text.lighter.asColor()
                                : Asset.Colors.Text.normal.asColor()
                        )
                    Spacer()
                }
            }
        )
        .disabled(!viewModel.restoreFile.supportRestore)
        .frame(height: 54)
        .background(
            viewModel.restoreFile.supportRestore
                ? Asset.Colors.Public.blue.asColor()
                : Asset.Colors.Background.disable.asColor()
        )
        .cornerRadius(8)
        .shadow(color: Asset.Colors.Shadow.primaryButton.asColor(), radius: 12, y: 6)
        .padding([.leading, .trailing], 22)
        
        Spacer(minLength: 16)
    }
}

extension NumberFormatter {
    func string(from value: Int) -> String {
        string(from: NSNumber(value: value)) ?? ""
    }
}
