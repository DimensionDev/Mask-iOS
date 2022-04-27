//
//  PluginEnableAlertController.swift
//  Maskbook
//
//  Created by yzj on 2021/8/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CombineEvent
import UIKit
import UStack

final class PluginAlertViewController: AlertPopupController {
    typealias Spacer = UStack.Spacer

    private let buttongCorner: CGFloat = 8
    private let textContentSpacing: CGFloat = 12
    private let contentSpacing: CGFloat = 20
    private let buttonHeight: CGFloat = 54
    private let contentEdge = UIEdgeInsets(top: 24, left: 16, bottom: 24, right: 16)
    private let textEdge = UIEdgeInsets(top: 12, left: 16, bottom: 12, right: 16)
    private let maxTextContentHeight: CGFloat = 318
    private let iconSize: CGFloat = 60
    private let pluginId: String?

    @InjectedProvider(\.userDefaultSettings)
    private var userSettings

    private var walletAddress: String {
        userSettings.defaultAccountAddress ?? ""
    }

    init(pluginId: String?) {
        self.pluginId = pluginId
        super.init(presenter: .alert)
    }

    private lazy var warningIcon = UIImageView(image: Asset.Images.Scene.Alert.redWarning.image).cv.apply { view in
        view.snp.makeConstraints { $0.size.equalTo(self.iconSize) }
    }
    private lazy var iconSpacerOne = Spacer()
    private lazy var iconSpacerTwo = Spacer()

    private lazy var titleLabel = UILabel().cv.apply { label in
        label.text = L10n.Scene.App.riskwarningTitle
        label.font = FontStyles.BH4
        label.textAlignment = .center
        label.textColor = Asset.Colors.Public.error.color
    }

    private lazy var warningTextView = UITextView().cv.apply { view in
        view.text = L10n.Scene.App.riskwarning
        view.font = FontStyles.MH6
        view.textColor = Asset.Colors.Public.error.color
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.textContainerInset = self.textEdge
        view.isEditable = false
        view.layoutManager.delegate = self
        view.applyCornerRadius(radius: 12)

        view.snp.makeConstraints {
            $0.height.equalTo(self.maxTextContentHeight)
        }
    }

    private lazy var walletAddressTitleLabel = UILabel().cv.apply { label in
        label.textColor = Asset.Colors.Text.normal.color
        label.textAlignment = .left
        label.text = L10n.Scene.App.walletAddress
        label.font = FontStyles.BH5
    }

    private lazy var walletAddressLabel = UILabel().cv.apply { label in
        label.textColor = Asset.Colors.Public.blue.color
        label.numberOfLines = 2
        label.font = FontStyles.BH7
        label.text = self.walletAddress
    }

    private lazy var cancelButton = UIButton().cv.apply { button in
        button.applyCornerRadius(radius: self.buttongCorner)
        button.backgroundColor = Asset.Colors.Background.blue1.color
        button.setTitle(L10n.Common.Controls.cancel, for: .normal)
        button.setTitleColor(Asset.Colors.Text.link.color, for: .normal)
        button.snp.makeConstraints { $0.height.equalTo(self.buttonHeight) }
    }

    private lazy var confirmButton = UIButton().cv.apply { button in
        button.applyCornerRadius(radius: self.buttongCorner)
        button.setTitle(L10n.Common.Controls.confirm, for: .normal)
        button.isEnabled = false

        button.setTitleColor(Asset.Colors.Public.white.color, for: .normal)
        button.setTitleColor(Asset.Colors.Text.normal.color, for: .disabled)

        button.setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Public.blue.color), for: .normal)
        button.setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.disable.color), for: .disabled)

        button.snp.makeConstraints { $0.height.equalTo(self.buttonHeight) }
    }

    private lazy var buttonStack = HStackView(spacing: contentSpacing) {
        cancelButton
        confirmButton
    }

    private lazy var contentStack = VStackView(spacing: contentSpacing) {
        HStackView(alignment: .center) {
            iconSpacerOne
            warningIcon
            iconSpacerTwo
        }
        titleLabel
        warningTextView
        if self.walletAddress.isNotEmpty {
            VStackView(spacing: 8) {
                walletAddressTitleLabel
                walletAddressLabel
            }
        }
        buttonStack
    }

    override func buildContent() {
        super.buildContent()

        contentView.withSubViews {
            contentStack
        }
        contentStack.setCustomSpacing(textContentSpacing, after: titleLabel)
        contentStack.setCustomSpacing(textContentSpacing, after: warningTextView)
    }

    override func buildLayout() {
        super.buildLayout()
        iconSpacerOne.snp.makeConstraints {
            $0.size.equalTo(iconSpacerTwo)
        }

        cancelButton.snp.makeConstraints {
            $0.size.equalTo(confirmButton)
        }

        contentStack.snp.makeConstraints {
            $0.edges.equalToSuperview()
                .inset(contentEdge)
        }
    }

    override func buildEvent() {
        super.buildEvent()
        dissmissOnTap = false

        cancelButton.cv.tap()
            .sink { [weak self] _ in
                self?.hide()
            }
            .store(in: &subscriptionSet)

        confirmButton.cv.tap()
            .sink { [weak self] _ in
                defer { self?.hide() }
                guard let address = self?.userSettings.defaultAccountAddress else {
                    return
                }
                self?.userSettings.confirmRiskWarning(address: address, pluginId: self?.pluginId)
            }
            .store(in: &subscriptionSet)

        warningTextView
            .publisher(for: \.contentOffset)
            .map { [weak self] offset -> Bool in
                guard let self = self else { return false }
                let limitSize = self.warningTextView.contentSize.height - self.warningTextView.frame.height
                guard limitSize > 0 else {
                    return false
                }
                return offset.y >= limitSize
            }
            .sink { [weak self] value in
                guard let self = self else { return }
                if self.confirmButton.isEnabled { return }
                self.confirmButton.isEnabled = value
            }
            .store(in: &subscriptionSet)
    }
}

extension PluginAlertViewController: NSLayoutManagerDelegate {
    func layoutManager(
        _ layoutManager: NSLayoutManager,
        lineSpacingAfterGlyphAt glyphIndex: Int,
        withProposedLineFragmentRect rect: CGRect
    ) -> CGFloat {
        return 5
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct PluginAlertViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            PluginAlertViewController(pluginId: nil).view
        }
    }
}
#endif
