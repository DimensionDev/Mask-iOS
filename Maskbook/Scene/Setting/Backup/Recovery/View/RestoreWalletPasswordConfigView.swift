import SwiftUI

struct RestoreWalletPasswordConfigView: View {
    @ObservedObject
    private var viewModel: WalletRestorePasswordConfigViewModel

    @State
    private var passwordSecureText = true

    @State
    private var repeatPasswordSecureText = true

    @State
    private var textFieldFocusState = TextFieldFocusState.password

    init(viewModel: WalletRestorePasswordConfigViewModel) {
        self.viewModel = viewModel
    }

    var body: some View {
        VStack(spacing: 20) {
            Text(L10n.Scene.SetPassword.title)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())

            VStack(spacing: 16) {
                passwordInputView

                repeatPasswordInputView
            }

            Button(
                action: { viewModel.verfityPassword() },
                label: {
                    HStack {
                        Spacer()
                        Text(L10n.Scene.Restore.Buttontitles.next)
                            .font(FontStyles.bh5.font)
                            .foregroundColor(Asset.Colors.Public.white.asColor())
                        Spacer()
                    }
                }
            )
            .frame(height: 54)
            .background(Asset.Colors.Public.blue.asColor())
            .cornerRadius(8)
        }
        .sheetStyleWithPaddingAndBackground()
    }

    private var passwordInputView: some View {
        VStack(spacing: 8) {
            Text(L10n.Scene.Restore.InputTitle.paymentPassword)
                .font(FontStyles.bh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
                .horizontallyFilled()

            HStack {
                CustomTextField(
                    text: $viewModel.password,
                    keyboardType: .default,
                    secureText: $passwordSecureText,
                    placeHolder: L10n.Scene.SetPassword.inputPaymentPassword,
                    isFirstResponder: textFieldFocusState == .password,
                    firstResponderCallBack: { _ in self.textFieldFocusState = .password }
                )

                Image(
                    uiImage: passwordSecureText
                    ? Asset.Icon.secureEye.image
                    : Asset.Icon.insecureEye.image
                )
                .onTapGesture { passwordSecureText.toggle() }
            }
            .font(FontStyles.bh5.font)
            .foregroundColor(Asset.Colors.Text.normal.asColor())
            .whiteRadiusBackgroundView()
            .shake(attemts: CGFloat(passwordTextFieldAttemts()))
        }
    }

    private var repeatPasswordInputView: some View {
        VStack(spacing: 8) {
            Text(L10n.Scene.SetPassword.confirmPaymentPassword)
                .font(FontStyles.bh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
                .horizontallyFilled()

            HStack {
                CustomTextField(
                    text: $viewModel.repeatPassword,
                    keyboardType: .default,
                    secureText: $repeatPasswordSecureText,
                    placeHolder: L10n.Scene.SetPassword.repeatPaymentPassword,
                    isFirstResponder: textFieldFocusState == .repeatPassword,
                    firstResponderCallBack: { _ in self.textFieldFocusState = .repeatPassword }
                )

                Image(
                    uiImage: repeatPasswordSecureText
                    ? Asset.Icon.secureEye.image
                    : Asset.Icon.insecureEye.image
                )
                .onTapGesture { repeatPasswordSecureText.toggle() }
            }
            .font(FontStyles.bh5.font)
            .foregroundColor(Asset.Colors.Text.normal.asColor())
            .whiteRadiusBackgroundView()
            .shake(attemts: CGFloat(self.repeatPasswordTextfieldAttemts()))

            Text(viewModel.tips.text)
                .font(FontStyles.bh5.font)
                .foregroundColor(Asset.Colors.Public.blue.asColor())
                .horizontallyFilled()
        }
    }

    private func repeatPasswordTextfieldAttemts() -> Int {
        switch viewModel.tips {
        case .invalidRepeatPassword, .passwordsUnmatch: return 1
        default: return 0
        }
    }

    private func passwordTextFieldAttemts() -> Int {
        switch viewModel.tips {
        case .invalidPassword: return 1
        default: return 0
        }
    }
}

extension RestoreWalletPasswordConfigView {
    enum TextFieldFocusState: Equatable {
        case password
        case repeatPassword
    }
}

struct RestoreWalletPasswordConfigView_Previews: PreviewProvider {
    static var previews: some View {
        RestoreWalletPasswordConfigView(viewModel: WalletRestorePasswordConfigViewModel())
    }
}
