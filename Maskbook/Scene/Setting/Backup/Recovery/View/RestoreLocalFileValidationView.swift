import SwiftUI

struct RestoreLocalFileValidationView: View {
    @ObservedObject
    private var viewModel: RestoreLocalFileValidationViewModel

    init(viewModel: RestoreLocalFileValidationViewModel) {
        self.viewModel = viewModel
    }

    @State
    private var passwordSecureText = true
    
    var body: some View {
        VStack(spacing: 20) {
            VStack(spacing: 8) {
                Text(L10n.Scene.BackupPasswordVerify.title)
                    .font(FontStyles.mh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())
                    .horizontallyFilled()

                // input
                HStack {
                    CustomTextField(
                        text: $viewModel.decryptSeed,
                        keyboardType: .default,
                        secureText: $passwordSecureText,
                        isFirstResponder: true
                    )

                    Image(
                        passwordSecureText
                        ? Asset.Icon.secureEye.name
                        : Asset.Icon.insecureEye.name
                    )
                    .renderingMode(.template)
                    .onTapGesture { passwordSecureText.toggle() }
                }
                .font(FontStyles.bh5.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
                .whiteRadiusBackgroundView()

                // tips
                Text(L10n.Scene.Setting.BackupRecovery.backUpPasswordValidationTip)
                    .font(FontStyles.rh6.font)
                    .lineSpacing(2)
                    .foregroundColor(
                        viewModel.validationState.isInValid
                        ? Asset.Colors.Public.error.asColor()
                        : Asset.Colors.Text.dark.asColor()
                    )
            }

            Button(
                action: { viewModel.startValidating() },
                label: {
                    Text(viewModel.validationState.title)
                        .font(FontStyles.bh5.font)
                        .foregroundColor(
                            viewModel.validationState.isInValid
                            ? Asset.Colors.Text.normal.asColor()
                            : Asset.Colors.Public.white.asColor()
                        )
                        .horizontallyCenterred()
                }
            )
            .frame(height: 54)
            .background(
                viewModel.validationState.isInValid
                ? Asset.Colors.Background.disable.asColor()
                : Asset.Colors.Public.blue.asColor()
            )
            .disabled(viewModel.validationState.isInValid)
            .cornerRadius(8)
            .overlay(
                Group {
                    if viewModel.validationState == .validating {
                        IndicatorView()
                            .foregroundColor(.white)
                    } else {
                        Color.clear
                    }
                }
            )
        }
        // bottom padding will be add in SheetAdapitiveContainer
        .sheetStyleWithPaddingAndBackground(bottomPadding: 0)
    }
}

struct RestoreLocalFileValidationViewPreview: PreviewProvider {
    static var previews: some View {
        Group {
            Group {
                if let url = URL(string: "https://mask.io") {
                    RestoreLocalFileValidationView(viewModel: .init(url))
                } else {
                    Text("")
                }
            }

            Group {
                if let url = URL(string: "https://mask.io") {
                    RestoreLocalFileValidationView(viewModel: .init(url))
                } else {
                    Text("")
                }
            }
            .preferredColorScheme(.dark)
        }
    }
}

private struct IndicatorView: UIViewRepresentable {
    class Coordinator {}

    init() {}

    func makeUIView(context: Context) -> UIActivityIndicatorView {
        .init().cv.apply { view in
            view.color = .white.withAlphaComponent(0.8)
        }
    }

    func makeCoordinator() -> Coordinator {
        Coordinator()
    }

    func updateUIView(_ uiView: UIActivityIndicatorView, context: Context) {
        if !uiView.isAnimating {
            uiView.startAnimating()
        }
    }
}
