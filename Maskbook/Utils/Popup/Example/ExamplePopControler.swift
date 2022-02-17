import Combine
import UIKit
import UStack

final class ExamplePopController: SheetViewController {
    private lazy var stack = VStackView(spacing: 10) {
        buildButton(on: .warning)
        buildButton(on: .recovery)
        buildButton(on: .pluginWarning)
        buildButton(on: .lodingIndicator)
    }

    override func buildContent() {
        super.buildContent()
        contentView.withSubViews {
            stack
        }
    }

    override func buildLayout() {
        super.buildLayout()

        stack.snp.makeConstraints {
            $0.top.bottom.equalToSuperview()
                .inset(25)
            $0.leading.trailing.equalToSuperview()
                .inset(22.5)
        }
    }

    private func buildButton(on example: Example) -> UIButton {
        let button = UIButton()
        button.setTitle(example.rawValue, for: .normal)
        button.titleLabel?.font = FontStyles.BH5
        button.backgroundColor = Asset.Colors.Public.blue.color
        button.setTitleColor(.white, for: .normal)
        button.layer.cornerRadius = 8
        button.snp.makeConstraints { $0.height.equalTo(54) }
        button.translucentShadow()

        button.cv.tap()
            .sink { [weak self] in
                guard let self = self else { return }
                let popup: PopupViewController = {
                    switch example {
                    case .warning: return WariningPopupController(presenter: .alert)
                    case .recovery: return RecoverySheetController(presenter: SheetPresenter(presentStyle: .translucent))
                    case .pluginWarning: return PluginAlertViewController()
                    case .lodingIndicator: return LoadingIndicatorController()
                    }
                }()

                self.dismiss(animated: true) {
                    guard let topController = UIApplication.getTopViewController() else {
                        return
                    }
                    popup.show(by: topController)
                }
            }
            .store(in: &subscriptionSet)

        return button
    }
}

extension ExamplePopController {
    enum Example: String, CaseIterable {
        case warning
        case recovery
        case pluginWarning
        case lodingIndicator
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
struct ExamplePopControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            ExamplePopController(
                presenter: SheetPresenter(presentStyle: .translucent)
            ).view
        }
    }
}
#endif
