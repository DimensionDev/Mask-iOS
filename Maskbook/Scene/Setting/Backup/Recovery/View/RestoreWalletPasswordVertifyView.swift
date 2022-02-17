import SwiftUI

struct RestoreWalletPasswordVertifyView: View {
    @ObservedObject
    var viewModel: WalletRestoreVerifyViewModel

    @State
    var secureText = true

    var body: some View {
        VStack(spacing: 20) {
            Text(L10n.Scene.Restore.Titles.verifyWalletPassword)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())

            VStack(spacing: 8) {
                Text(L10n.Scene.Restore.InputTitle.paymentPassword)
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())
                    .horizontallyFilled()

                HStack {
                    CustomTextField(
                        text: $viewModel.paymentPassword,
                        keyboardType: .default,
                        secureText: $secureText,
                        placeHolder: L10n.Scene.SetPassword.inputPaymentPassword,
                        isFirstResponder: true
                    )

                    Image(
                        uiImage: secureText
                        ? Asset.Images.Scene.WalletImport.closeEyes.image
                        : Asset.Images.Scene.WalletImport.openEyes.image
                    )
                    .onTapGesture { secureText.toggle() }
                }
                .font(FontStyles.bh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
                .whiteRadiusBackgroundView()
                .switchShake(attemts: CGFloat(viewModel.errorTime))

                if viewModel.tips.showTipText {
                    Text(viewModel.tips.tipText)
                        .font(FontStyles.bh5.font)
                        .foregroundColor(Asset.Colors.Public.error.asColor())
                        .horizontallyFilled()
                }
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
}

extension View {
    @ViewBuilder
    func switchShake(
        attemts: CGFloat,
        amount: CGFloat = 10,
        shakesPerUnit: Int = 3
    ) -> some View {
        if #available(iOS 15, *) {
            shake(attemts: attemts, amount: amount, shakesPerUnit: shakesPerUnit)
        } else {
            self
        }
    }
}

struct RestoreWalletPasswordVertifyView_Previews: PreviewProvider {
    static var previews: some View {
        RestoreWalletPasswordVertifyView(viewModel: WalletRestoreVerifyViewModel())
    }
}
