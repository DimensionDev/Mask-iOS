//
//  RemoteRestoreInfoView.swift
//  Maskbook
//
//  Created by yzj on 2021/8/23.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct RemoteRestoreInfoView: View {
    @ObservedObject
    var viewModel: RemoteRestoreInfoViewModel

    var enabled: Bool {
        !viewModel.remotePassword.isEmpty &&
        viewModel.remoteContent.value != nil &&
        // should disable the button if decryption fails
        viewModel.tip == .none
    }
    
    var cloudPasswordHintView: some View {
        HStack(spacing: 12) {
            Image(uiImage: Asset.Images.Scene.Social.connectHintBannerIcon.image)
                .frame(width: 20, height: 20)
            Text(L10n.Scene.Restore.Tip.cloudBackupPasswordHint)
                .font(FontStyles.rh6.font)
                .foregroundColor(Asset.Colors.Public.info.asColor())
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 10)
        .background(Asset.Colors.Public.infoBg.asColor())
        .cornerRadius(12)
    }
    
    var body: some View {
        ScrollView {
            VStack {
                HStack(spacing: 8) {
                    VStack(alignment: .leading) {
                        Text(viewModel.fileIdentifier)
                            .detailStyle()
                        Text(viewModel.fileUpdateTime)
                            .detailStyle()
                    }

                    Spacer()

                    Text(viewModel.fileSize)
                        .detailStyle()
                }
            }
            .padding([.top, .bottom], 8)
            .padding([.leading, .trailing], 12)
            .background(Asset.Colors.Background.dark.asColor())
            .cornerRadius(12)

            Spacer()
                .frame(height: 16)

            VStack(alignment: .leading, spacing: 8) {
                Text(L10n.Scene.Restore.InputTitle.remoteBackupPassword)
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())

                buildPassword()

                if viewModel.tip.showing {
                    Text(L10n.Scene.Restore.Tip.incorrectBackupPassword)
                        .font(FontStyles.bh6.font)
                        .foregroundColor(Asset.Colors.Public.error.asColor())
                }
            }
            
            Spacer()
                .frame(height: 24)
            
            cloudPasswordHintView
        }
        .padding([.top], 32)
        .padding([.leading, .trailing], 22)

        Spacer()

        Button(
            action: { viewModel.decryptRemoteFile() },
            label: {
                HStack {
                    Spacer()
                    Text(L10n.Scene.Restore.Buttontitles.restore)
                        .font(FontStyles.bh5.font)
                        .foregroundColor(
                            enabled
                                ? Asset.Colors.Text.lighter.asColor()
                                : Asset.Colors.Text.normal.asColor()
                        )
                    Spacer()
                }
            }
        )
        .disabled(!enabled)
        .frame(height: 54)
        .background(
            enabled
                ? Asset.Colors.Public.blue.asColor()
                : Asset.Colors.Background.disable.asColor()
        )
        .cornerRadius(8)
        .shadow(color: Asset.Colors.Shadow.primaryButton.asColor(), radius: 12, y: 6)
        .padding([.leading, .trailing], 22)
        .padding(.bottom, 24)
    }
    
    private func buildPassword() -> some View {
        ZStack {
            if viewModel.showPassword {
                TextField("", text: $viewModel.remotePassword)
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                    .frame(height: 52)
                    .padding([.leading, .trailing], 12)
                    .background(Asset.Colors.Background.dark.asColor())
                    .cornerRadius(8)
            } else {
                SecureField("", text: $viewModel.remotePassword)
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                    .frame(height: 52)
                    .padding([.leading, .trailing], 12)
                    .background(Asset.Colors.Background.dark.asColor())
                    .cornerRadius(8)
            }
            HStack {
                Spacer()
                Button {
                    viewModel.showPassword.toggle()
                } label: {
                    viewModel.showPassword
                    ? Image(uiImage: Asset.Images.Scene.WalletImport.openEyes.image)
                    : Image(uiImage: Asset.Images.Scene.WalletImport.closeEyes.image)
                }
                .padding([.leading, .trailing], 12)
            }
        }
    }
}

private extension Text {
    func detailStyle() -> Text {
        self.font(FontStyles.bh6.font)
            .foregroundColor(Asset.Colors.Text.dark.asColor())
    }
}

struct CloudRestoreVeriftViewPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        RemoteRestoreInfoView(
            viewModel: RemoteRestoreInfoViewModel(
                verifyData: CloudVerifyResult(
                    verify: .email,
                    verifyCode: "",
                    accountContent: "",
                    accountForCypt: ""
                )
            )
        )
    }
}
