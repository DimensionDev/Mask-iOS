//
//  MergeToLocalView.swift
//  Maskbook
//
//  Created by Hugo L on 2021/10/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct MergeToLocalView: View {
    @ObservedObject
    var viewModel: MergeToLocalViewModel
    
    @State var password: String = ""
    
    var body: some View {
        VStack(spacing: 0) {
            Text(L10n.Scene.Backup.MergeToLocal.title)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
            Spacer().frame(height: 20)
            remoteFileInfo
            Spacer().frame(height: 16)
            SUIPasswordFormItemView(password: $password)
                .frame(height: 84)
            Spacer().frame(height: 20)
            actionButton
        }
        .sheetStyleWithPaddingAndBackground()
    }
    
    var remoteFileInfo: some View {
        HStack {
            VStack(alignment: .leading, spacing: 2) {
                Text(viewModel.actionsViewModel.remoteBackupPreview.abstract ?? "")
                    .font(FontStyles.bh6.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                Text(viewModel.actionsViewModel.uploadedTime)
                    .font(FontStyles.bh6.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
            }
            Spacer()
            Text(viewModel.actionsViewModel.fileSize)
                .font(FontStyles.bh6.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
        }
        .padding(EdgeInsets(top: 8, leading: 12, bottom: 8, trailing: 12))
        .background(Asset.Colors.Background.dark.asColor())
        .cornerRadius(12)
    }
    
    var actionButton: some View {
        Button(
            action: {
                viewModel.mergeToLocal(password: password)
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
    }
}

struct MergeToLocalView_Previews: PreviewProvider {
    static var previews: some View {
        let preview = RemoteBackupPreview(
            downloadUrl: URL(string: "https://mask.io")!,
            size: 1_000,
            uploadedTime: 0,
            abstract: "mask",
            message: nil
        )
        
        let actionVM = RemoteBackupActionsViewModel(
            remoteBackupPreview: preview,
            cloudVerifyResult: CloudVerifyResult(verify: .email, verifyCode: "", accountContent: "", accountForCypt: "")
        )
        let vm = MergeToLocalViewModel(actionsViewModel: actionVM)
        return MergeToLocalView(viewModel: vm)
    }
}
