import SwiftUI

struct RemoteBackupVerifyView: View {
    @ObservedObject
    var viewModel: RemoteBackupVerifyViewModel

    init(viewModel: RemoteBackupVerifyViewModel) {
        self.viewModel = viewModel
    }

    var body: some View {
        VStack(spacing: 16) {
            Spacer()
                .frame(height: 9)
            HStack {
                // title
                Text(viewModel.strategyModel.title)
                    .font(FontStyles.bh4.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
            }
            
            // inputpart for email or mobile validation code
            VStack(alignment: .leading) {
                HStack {
                    Text(L10n.Scene.Backup.validationCode)
                        .font(FontStyles.mh5.font)
                        .foregroundColor(Asset.Colors.Text.normal.asColor())
                    Spacer()
                }
                HStack(spacing: 8) {
                    CustomTextField(
                        text: $viewModel.strategyModel.verificationCode,
                        keyboardType: .numberPad,
                        textLimit: 6,
                        isFirstResponder: true
                    )
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())
                    .whiteRadiusBackgroundView()

                    Button(
                        action: {
                            viewModel.requestValidationCode()
                        },
                        label: {
                            Text(viewModel.resendButtonTitle)
                                .font(FontStyles.bh5.font)
                                .foregroundColor(Asset.Colors.Public.white.asColor())
                        }
                    )
                    .frame(width: 104, height: 52)
                    .buttongStyle(viewModel.isResendEnabled)
                }
            }
            
            if let error = viewModel.error {
                errorView(message: error.localizedDescription)
            }
            
            // tips
            tipsView()
            
            // buttons
            verifyActionView()
            
            // switch between email and mobile number
            if viewModel.showSwitchButton {
                stateSwitchView()
            }
        }
        .sheetStyleWithPaddingAndBackground()
    }
    
    @ViewBuilder
    private func verifyActionView() -> some View {
        Button(
            action: {
                viewModel.requestBackupInfo()
            },
            label: {
                HStack {
                    Spacer()
                    Text(L10n.Common.Controls.confirm)
                        .font(FontStyles.bh5.font)
                    Spacer()
                }
            }
        )
        .frame(height: 54)
        .buttongStyle(viewModel.isConfirmEnabled)
    }
    
    @ViewBuilder
    private func stateSwitchView() -> some View {
        Button(
            action: {
                viewModel.switchType()
            },
            label: {
                Text(viewModel.switchTitle)
                    .font(FontStyles.mh6.font)
                    .foregroundColor(Asset.Colors.Public.blue.asColor())
            }
        )
        .padding([.bottom], 24)
    }
    
    private func tipsView() -> some View {
        let combine = Text(viewModel.tips)
            .foregroundColor(Asset.Colors.Text.dark.asColor()) +
        Text("\(viewModel.strategyModel.verificationIdentifier.textContent)")
            .foregroundColor(Asset.Colors.Public.blue.asColor())
        
        return VStack(alignment: .leading) {
            HStack {
                combine.font(FontStyles.mh6.font)
                    .multilineTextAlignment(.leading)
                Spacer()
            }
        }
    }
    
    private func errorView(message: String) -> some View {
        HStack {
            Text(message)
                .font(FontStyles.mh6.font)
                .foregroundColor(Asset.Colors.Public.error.asColor())
                .lineLimit(2)
            Spacer()
        }
    }
}

struct RemoteBackupVerifyView_Previews: PreviewProvider {
    static var viewModel: RemoteBackupVerifyViewModel {
        let vm = RemoteBackupVerifyViewModel(.email)
        vm.strategyModel.verificationIdentifier.updateEmail("mask@mask.io")
        return vm
    }
    
    static var previews: some View {
        RemoteBackupVerifyView(
            viewModel: viewModel
        )
    }
}
