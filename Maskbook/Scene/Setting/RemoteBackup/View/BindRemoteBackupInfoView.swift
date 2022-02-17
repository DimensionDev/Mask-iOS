import SwiftUI

struct BindRemoteBackupInfoView: View {
    @ObservedObject
    var viewModel: BindRemoteBackupInfoViewModel

    init(viewModel: BindRemoteBackupInfoViewModel) {
        self.viewModel = viewModel
    }

    @State
    private var zoneNumberSize = CGSize.zero

    @State
    private var mobileFocus = MobileFocusState.region

    var body: some View {
        VStack(spacing: 20) {
            Text(viewModel.strategyModel.title)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())

            inputView

            Button(
                action: {
                    switch viewModel.state {
                    case .updatingIdentifier:
                        viewModel.requestValidationCode()

                    case .validatingCode:
                        viewModel.validate()

                    case .validatingBeforeChange:
                        viewModel.validate()
                    }
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
            .buttongStyle(viewModel.confirmEnabled)
        }
        .padding(.horizontal, 22.5)
        .background(Asset.Colors.Background.normal.asColor())
    }

    @ViewBuilder
    private var updatingIdentifierInputView: some View {
        switch viewModel.strategyModel.verificationIdentifier {
        case .email:
            CustomTextField(
                text: $viewModel.email,
                keyboardType: .emailAddress,
                isFirstResponder: true
            )
            .font(FontStyles.bh5.font)
            .foregroundColor(Asset.Colors.Text.normal.asColor())
            .whiteRadiusBackgroundView()

            if !viewModel.email.isValidEmailAddress && viewModel.email.isNotEmpty {
                Text(L10n.Scene.Restore.Tip.invalidEmailAddress)
                    .font(FontStyles.mh6.font)
                    .horizontallyFilled()
                    .foregroundColor(Asset.Colors.Public.error.asColor())
            }

        case .phoneNumber:
            HStack(spacing: 8) {
                CustomTextField(
                    text: $viewModel.mobileRegionCode,
                    keyboardType: .phonePad,
                    isFirstResponder: mobileFocus == .region
                )
                .background(
                    Text(viewModel.strategyModel.verificationIdentifier.regionCode)
                        .detailStyle()
                        .measureSize(to: $zoneNumberSize)
                        .hidden()
                )
                .font(FontStyles.bh5.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())
                .withRegionCodeWidth(zoneNumberSize.width)
                .whiteRadiusBackgroundView()

                HStack {
                    CustomTextField(
                        text: $viewModel.mobileNumber,
                        keyboardType: .phonePad,
                        isFirstResponder: mobileFocus == .phoneNumber,
                        firstResponderCallBack: { _ in mobileFocus = .phoneNumber }
                    )
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())

                    Spacer()
                }
                .whiteRadiusBackgroundView()
            }

            if viewModel.mobileRegionCode.isNotEmpty &&
               viewModel.mobileNumber.isNotEmpty &&
               !viewModel.strategyModel.verificationIdentifier.isValidContent {
                Text(L10n.Scene.Restore.Tip.invalidMobileNumber)
                    .font(FontStyles.mh6.font)
                    .horizontallyFilled()
                    .foregroundColor(Asset.Colors.Public.error.asColor())
            }
        }
    }

    @ViewBuilder
    private var inputView: some View {
        switch viewModel.state {
        case .updatingIdentifier:
            VStack {
                Text(viewModel.strategyModel.stratetyTitle)
                    .subtitleStyle()
                    .horizontallyFilled()

                updatingIdentifierInputView
            }

        case .validatingCode, .validatingBeforeChange:
            VStack(spacing: 8) {
                if viewModel.state == .validatingBeforeChange {
                    VStack(alignment: .leading, spacing: 0) {
                        Text(viewModel.strategyModel.tips)
                            .font(FontStyles.mh5.font)
                            .foregroundColor(Asset.Colors.Text.normal.asColor())
                            .horizontallyFilled()
                            .lineLimit(nil)
                            .multilineTextAlignment(.leading)

                        Spacer().frame(height: 12)
                    }
                }

                Text(L10n.Scene.Restore.InputTitle.validationcode)
                    .subtitleStyle()
                    .horizontallyFilled()

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
                        action: { viewModel.requestValidationCode() },
                        label: {
                            Text(viewModel.resendButtonTitle)
                                .font(FontStyles.bh5.font)
                        }
                    )
                    .frame(width: 104, height: 52)
                    .buttongStyle(viewModel.isResendEnabled)
                }

                if viewModel.validateCodeMismatch {
                    Text(L10n.Scene.Setting.validationCodeMismatch)
                        .font(FontStyles.mh6.font)
                        .foregroundColor(Asset.Colors.Public.error.asColor())
                        .horizontallyFilled()
                        .multilineTextAlignment(.leading)
                } else {
                    Text {
                        Text("\(viewModel.strategyModel.verificationTip) ")
                         .font(FontStyles.mh6.font)
                         .foregroundColor(Asset.Colors.Text.normal.asColor())
                        Text(viewModel.strategyModel.verificationIdentifier.textContent)
                         .font(FontStyles.mh6.font)
                         .foregroundColor(Asset.Colors.Public.blue.asColor())
                    }
                    .horizontallyFilled()
                    .multilineTextAlignment(.leading)
                }
            }
        }
    }
}

private extension Text {
    func detailStyle() -> Text {
        self.font(FontStyles.bh5.font)
            .foregroundColor(Asset.Colors.Text.dark.asColor())
    }
}

extension BindRemoteBackupInfoView {
    enum MobileFocusState {
        case region
        case phoneNumber
    }
}
