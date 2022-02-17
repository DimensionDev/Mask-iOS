//
//  RemoteBackupActionsView.swift
//  Maskbook
//
//  Created by Hugo L on 2021/10/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct RemoteBackupActionsView: View {
    @ObservedObject
    var viewModel: RemoteBackupActionsViewModel
    
    var body: some View {
        VStack(spacing: 0) {
            Image(uiImage: Asset.Images.Scene.Alert.warning.image)
            Spacer().frame(height: 20)
            VStack(alignment: .leading, spacing: 0) {
                remoteFileInfo
                Spacer().frame(height: 8)
                tipsView
                Spacer().frame(height: 20)
                buttons
            }
        }
        .sheetStyleWithPaddingAndBackground()
    }
    
    var remoteFileInfo: some View {
        HStack {
            VStack(alignment: .leading, spacing: 2) {
                Text(viewModel.remoteBackupPreview.abstract ?? "")
                    .font(FontStyles.bh6.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                Text(viewModel.uploadedTime)
                    .font(FontStyles.bh6.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
            }
            Spacer()
            Text(viewModel.fileSize)
                .font(FontStyles.bh6.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
        }
        .padding(EdgeInsets(top: 8, leading: 12, bottom: 8, trailing: 12))
        .background(Asset.Colors.Background.dark.asColor())
        .cornerRadius(12)
    }
    
    var tipsView: some View {
        Text(L10n.Scene.Backup.RemoteBackupActionsView.tips)
            .multilineTextAlignment(.leading)
            .font(FontStyles.mh6.font)
            .foregroundColor(Asset.Colors.Public.blue.asColor())
    }
    
    var buttons: some View {
        VStack(spacing: 16) {
            Button(
                action: {
                    viewModel.performAction = .mergeToLocal
                },
                label: {
                    HStack {
                        Spacer()
                        Text(L10n.Common.Controls.mergeAndBackUp)
                            .font(FontStyles.bh5.font)
                        Spacer()
                    }
                }
            )
            .frame(height: 54)
            .buttongStyle(true)
            
            Button(
                action: {
                    viewModel.performAction = .backup
                },
                label: {
                    HStack {
                        Spacer()
                        Text(L10n.Common.Controls.backUp)
                            .font(FontStyles.bh5.font)
                        Spacer()
                    }
                }
            )
            .frame(height: 54)
            .buttongStyle(true)
        }
    }
}

struct RemoteBackupActionsView_Previews: PreviewProvider {
    static var previews: some View {
        let preview = RemoteBackupPreview(
            downloadUrl: URL(string: "https://mask.io")!,
            size: 1_000,
            uploadedTime: 0,
            abstract: "mask",
            message: nil
        )
        let vm = RemoteBackupActionsViewModel(
            remoteBackupPreview: preview,
            cloudVerifyResult: CloudVerifyResult(verify: .email, verifyCode: "", accountContent: "", accountForCypt: "")
        )
        return RemoteBackupActionsView(viewModel: vm)
    }
}
