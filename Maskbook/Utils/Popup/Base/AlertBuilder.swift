//
//  AlertBuilder.swift
//  Maskbook
//
//  Created by yzj on 2021/8/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit
import UStack

@resultBuilder
enum AlertItemBuilder {
    static func buildBlock(_ components: AlertItem...) -> AlertItem {
        var items: [AlertItem] = []

        for item in components {
            switch item {
            case .empty: continue
            case let .container(packedItems): items.append(contentsOf: packedItems)
            default: items.append(item)
            }
        }

        return .container(items)
    }

    static func buildLimitedAvailability(_ component: AlertItem) -> AlertItem {
        component
    }

    static func buildOptional(_ component: AlertItem?) -> AlertItem {
        component ?? .empty
    }

    static func buildEither(first component: AlertItem) -> AlertItem {
        component
    }

    static func buildEither(second component: AlertItem) -> AlertItem {
        component
    }

    static func buildExpression(_ expression: AlertItem) -> AlertItem {
        expression
    }
}

indirect enum AlertItem {
    case image(Image)
    case tipWith(title: String, detail: NSAttributedString, detailAlignment: NSTextAlignment = .left)
    case plainText(title: String, detail: String, detailAlignment: NSTextAlignment = .left)
    case contentText(NSAttributedString, alignment: NSTextAlignment = .center)

    case doneAction(Action)
    case cancelAndConfirm(cancel: Action, confirm: Action)

    case empty
    case container([AlertItem])

    var packedItems: [AlertItem] {
        switch self {
        case let .container(items): return items
        case .empty: return []
        default: return [self]
        }
    }

    enum Image {
        case warning
        case error
        case success

        var imageAsset: ImageAsset {
            switch self {
            case .warning: return Asset.Images.Scene.Alert.warning
            case .error: return Asset.Images.Scene.Alert.error
            case .success: return Asset.Images.Scene.Alert.success
            }
        }
    }

    struct Action {
        let title: String
        let action: () -> Void

        init(title: String, action: @escaping () -> Void = {}) {
            self.title = title
            self.action = action
        }
    }
}

typealias Alert = AlertContainerController<VStackView>
extension AlertContainerController where V == VStackView {
    convenience init(@AlertItemBuilder items: () -> AlertItem) {
        let stack = VStackView(spacing: 20) {}
        self.init {
            stack
        }

        for item in items().packedItems {
            let view: UIView = {
                switch item {
                case let .image(imageWarpper):
                    return HStackView(distribution: .equalCentering) {
                        UIView.spacer()
                        UIImageView(image: imageWarpper.imageAsset.image)
                            .cv.apply {
                                $0.snp.makeConstraints { $0.size.equalTo(60) }
                            }
                        UIView.spacer()
                    }

                case let .tipWith(title, detail, detailAlignment):
                    return VStackView(spacing: 12) {
                        UILabel().cv.apply { titlelabel in
                            titlelabel.textAlignment = .center
                            titlelabel.text = title
                            titlelabel.font = FontStyles.BH4
                            titlelabel.textColor = Asset.Colors.Text.dark.color
                        }
                        UILabel().cv.apply { label in
                            let final = NSMutableAttributedString(attributedString: detail)
                            let paragraphStyle = NSMutableParagraphStyle()
                            paragraphStyle.alignment = detailAlignment
                            paragraphStyle.lineSpacing = 10
                            final.addAttribute(.paragraphStyle,
                                               value: paragraphStyle,
                                               range: NSRange(location: 0, length: detail.string.count))
                            label.attributedText = final
                            label.numberOfLines = 0
                        }
                    }

                case let .plainText(title, detail, detailAlignment):
                    return VStackView(spacing: 12) {
                        UILabel().cv.apply { titlelabel in
                            titlelabel.textAlignment = .center
                            titlelabel.text = title
                            titlelabel.font = FontStyles.BH4
                            titlelabel.textColor = Asset.Colors.Text.dark.color
                            titlelabel.numberOfLines = 0
                        }
                        UILabel().cv.apply { label in
                            let detailString = NSAttributedString(
                                string: detail,
                                attributes: [
                                    .font: FontStyles.MH5,
                                    .foregroundColor: Asset.Colors.Text.normal.color
                                ]
                            )
                            let final = NSMutableAttributedString(attributedString: detailString)
                            let paragraphStyle = NSMutableParagraphStyle()
                            paragraphStyle.alignment = detailAlignment
                            paragraphStyle.lineSpacing = 10
                            final.addAttribute(.paragraphStyle,
                                               value: paragraphStyle,
                                               range: NSRange(location: 0, length: detailString.string.count))
                            label.attributedText = final
                            label.numberOfLines = 0
                        }
                    }

                case let .contentText(attributedString, alignment):
                    return UILabel().cv.apply { label in
                        label.numberOfLines = 0
                        let final = NSMutableAttributedString(attributedString: attributedString)
                        let paragraphStyle = NSMutableParagraphStyle()
                        paragraphStyle.alignment = alignment
                        paragraphStyle.lineSpacing = 10
                        final.addAttribute(.paragraphStyle,
                                           value: paragraphStyle,
                                           range: NSRange(location: 0, length: attributedString.string.count))
                        label.attributedText = final
                    }

                case let .doneAction(done):
                    self.dissmissOnTap = false
                    return UIButton().cv.apply { button in
                        button.setTitle(done.title, for: .normal)
                        button
                            .confirmButtonStyle()
                            .cv.tap()
                            .sink { [weak self] _ in
                                self?.dismissAction = done.action
                                self?.hide()
                            }
                            .store(in: &self.subscriptionSet)
                    }

                case let .cancelAndConfirm(cancel, confirm):
                    self.dissmissOnTap = false
                    return HStackView(spacing: 20, distribution: .fillEqually) {
                        UIButton().cv.apply { button in
                            button.setTitle(cancel.title, for: .normal)
                            button
                                .cancelButtonStyle()
                                .cv.tap()
                                .sink { [weak self] _ in
                                    self?.dismissAction = cancel.action
                                    self?.hide()
                                }
                                .store(in: &self.subscriptionSet)
                        }
                        UIButton().cv.apply { button in
                            button.setTitle(confirm.title, for: .normal)
                            button
                                .confirmButtonStyle()
                                .cv.tap()
                                .sink { [weak self] _ in
                                    self?.dismissAction = confirm.action
                                    self?.hide()
                                }
                                .store(in: &self.subscriptionSet)
                        }
                    }

                default: return UIView.spacer()
                }
            }()
            stack.addArrangedSubview(view)
        }
    }
}

extension UIButton {
    @discardableResult
    func confirmButtonStyle() -> Self {
        self.applyCornerRadius(radius: 8)
        setTitle(L10n.Common.Controls.confirm, for: .normal)

        setTitleColor(Asset.Colors.Public.white.color, for: .normal)
        setTitleColor(Asset.Colors.Text.normal.color, for: .disabled)

        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Public.blue.color), for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.disable.color), for: .disabled)

        snp.makeConstraints { $0.height.equalTo(54) }
        return self
    }

    @discardableResult
    func cancelButtonStyle() -> Self {
        applyCornerRadius(radius: 8)
        backgroundColor = Asset.Colors.Background.blue.color
        setTitle(L10n.Common.Controls.cancel, for: .normal)
        setTitleColor(Asset.Colors.Text.link.color, for: .normal)
        snp.makeConstraints { $0.height.equalTo(54) }
        return self
    }
}
