//
//  CloudRestoreVerifyView.swift
//  Maskbook
//
//  Created by yzj on 2021/8/23.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

struct RemoteRestoreVerifyView: View {
    @State
    private var zoneNumberSize = CGSize.zero

    @ObservedObject
    var viewModel: RemoteRestoreVerifyViewModel

    var verifyState: VerifyState { viewModel.verifyState }

    var body: some View {
        VStack(spacing: 20) {
            // title
            Text(verifyState.title)
                .font(FontStyles.bh4.font)
                .foregroundColor(Asset.Colors.Text.dark.asColor())

            // input content
            VStack(alignment: .leading, spacing: 8) {
                Text(verifyState.verifyTitle)
                    .detailStyle()
                    .horizontallyFilled()
                // inputpart for email, mobile number or validation code
                inputView()

                // tips
                if viewModel.tips.showing {
                    tipsView()
                }
            }

            VStack(spacing: 16) {
                // send button or next action button
                verifyActionView()
                // switch between email and mobile number
                stateSwitchView()
            }
        }
        .padding(.horizontal, LayoutConstraints.horizontal)
        .background(Asset.Colors.Background.normal.asColor())
    }

    @ViewBuilder
    private func inputView() -> some View {
        switch verifyState {
        case .email:
            HStack(spacing: 8) {
                HStack {
                    CustomTextField(
                        text: $viewModel.email,
                        keyboardType: .emailAddress,
                        placeHolder: L10n.Scene.Restore.InputPlaceholder.email,
                        isFirstResponder: verifyState == .email
                    )
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())

                    Spacer()
                }
                .whiteRadiusBackgroundView()
            }

        case .mobile, .mobileZone:
            HStack(spacing: 8) {
                CustomTextField(
                    text: $viewModel.zoneNumber,
                    keyboardType: .phonePad,
                    isFirstResponder: verifyState == .mobileZone
                )
                .background(
                    Text(viewModel.zoneNumber)
                        .detailStyle()
                        .measureSize(to: $zoneNumberSize)
                        .hidden()
                )
                .font(FontStyles.bh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
                .withRegionCodeWidth(zoneNumberSize.width)
                .whiteRadiusBackgroundView()

                HStack {
                    CustomTextField(
                        text: $viewModel.mobileNumber,
                        keyboardType: .phonePad,
                        isFirstResponder: verifyState == .mobile,
                        firstResponderCallBack: { _ in viewModel.verifyState = .mobile }
                    )
                    .font(FontStyles.bh5.font)
                    .foregroundColor(Asset.Colors.Text.normal.asColor())

                    Spacer()
                }
                .whiteRadiusBackgroundView()
            }

        case .emailCode, .mobileCode:
            HStack(spacing: 8) {
                CustomTextField(
                    text: $viewModel.validationCode,
                    keyboardType: .numberPad,
                    textLimit: 6,
                    isFirstResponder: verifyState == .emailCode || verifyState == .mobileCode
                )
                .font(FontStyles.bh5.font)
                .foregroundColor(Asset.Colors.Text.normal.asColor())
                .whiteRadiusBackgroundView()

                Button(
                    action: { viewModel.requestValidationCode() },
                    label: {
                        Text(resendButtonTitle)
                            .font(FontStyles.bh5.font)
                    }
                )
                .frame(width: 104, height: 52)
                .buttongStyle(viewModel.isResendEnabled)
            }
        }
    }

    @ViewBuilder
    private func tipsView() -> some View {
        switch viewModel.tips {
        case .invalidEmailAddress,
             .invalidMobileNumber,
             .invalidEmailCode,
             .invalideMobileCode:
            Text(viewModel.tips.description)
                .font(FontStyles.mh6.font)
                .foregroundColor(Asset.Colors.Public.error.asColor())
                .lineLimit(2)

        case .emailValidationCode, .mobileValidationCode:
            VStack(alignment: .leading) {
                Text(viewModel.tips.description)
                    .font(FontStyles.mh6.font)
                    .foregroundColor(Asset.Colors.Text.dark.asColor())
                    .frame(height: 21)
                Text(viewModel.veriftyTipContent)
                    .font(FontStyles.mh6.font)
                    .foregroundColor(Asset.Colors.Public.blue.asColor())
                    .frame(height: 21)
            }
            
        case let .customError(message):
            Text(message)
                .font(FontStyles.mh6.font)
                .foregroundColor(Asset.Colors.Public.error.asColor())
                .lineLimit(2)
            
        default: Spacer()
        }
    }

    @ViewBuilder
    private func stateSwitchView() -> some View {
        switch verifyState {
        case .email, .mobile, .mobileZone:
            Button(
                action: { viewModel.switchToNextState() },
                label: {
                    Text(verifyState.switchActionTitle)
                        .font(FontStyles.mh6.font)
                        .foregroundColor(Asset.Colors.Public.blue.asColor())
                }
            )

        default:
            Spacer()
                .frame(height: 8)
        }
    }

    private var actionButtonTitle: String {
        switch verifyState {
        case .email, .mobile, .mobileZone:
            return L10n.Scene.Restore.Buttontitles.next

        case .emailCode, .mobileCode:
            return L10n.Scene.Restore.Buttontitles.confirm
        }
    }

    private var resendButtonTitle: String {
        viewModel.isResendEnabled
            ? L10n.Scene.Restore.Buttontitles.resend
            : viewModel.countingText
    }

    @ViewBuilder
    private func verifyActionView() -> some View {
        Button(
            action: {
                switch verifyState {
                case .email, .mobileZone, .mobile:
                    viewModel.requestValidationCode()

                case .mobileCode, .emailCode:
                    viewModel.finishValidation()
                }
            },
            label: {
                HStack {
                    Spacer()
                    Text(actionButtonTitle)
                        .font(FontStyles.bh5.font)
                    Spacer()
                }
            }
        )
        .frame(height: 54)
        .buttongStyle(viewModel.validationState.isEnabled)
    }
}

private extension Text {
    func detailStyle() -> Text {
        self.font(FontStyles.bh5.font)
            .foregroundColor(Asset.Colors.Text.normal.asColor())
    }
}

struct CloudRestoreVerifyView_Previews: PreviewProvider {
    static var previews: some View {
        RemoteRestoreVerifyView(viewModel: RemoteRestoreVerifyViewModel())
    }
}
