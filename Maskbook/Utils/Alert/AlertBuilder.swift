import UIKit
import UStack

@resultBuilder
enum AlertBuilder {
    public static func buildExpression(_ expression: AlertItemRepresentable) -> [AlertItemRepresentable] {
        [expression]
    }

    public static func buildExpression(_ expression: AlertItemRepresentable?) -> [AlertItemRepresentable] {
        guard let view = expression else { return [] }
        return [view]
    }

    public static func buildExpression(_ expression: [AlertItemRepresentable]) -> [AlertItemRepresentable] {
        expression
    }

    public static func buildBlock(_ components: [AlertItemRepresentable]...) -> [AlertItemRepresentable] {
        components.flatMap { $0 }
    }

    public static func buildOptional(_ component: [AlertItemRepresentable]?) -> [AlertItemRepresentable] {
        guard let view = component else { return [] }
        return view
    }

    public static func buildEither(first component: [AlertItemRepresentable]) -> [AlertItemRepresentable] {
        component
    }

    public static func buildEither(second component: [AlertItemRepresentable]) -> [AlertItemRepresentable] {
        component
    }
}

enum AlertItem {
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
extension Alert {
    convenience init(@AlertBuilder items: () -> [AlertItemRepresentable]) {
        let stack = VStackView(spacing: 20) {}
        self.init(stack)

        for item in items() {
            let view = item.makeView(for: self)
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
