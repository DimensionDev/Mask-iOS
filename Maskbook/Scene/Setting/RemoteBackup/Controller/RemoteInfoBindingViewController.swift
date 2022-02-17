import Combine
import SwiftUI
import UIKit

final class RemoteInfoBindingViewController: SheetAdapitveHostingController<BindRemoteBackupInfoView> {
    enum Strategy {
        case setupEmail
        case updateEmail
        case setupPhoneNumber
        case updatePhoneNumber

        var alertTitle: String {
            switch self {
            case .setupEmail: return L10n.Scene.Setting.BindRemoteInfo.setupEmailTitle
            case .updateEmail: return  L10n.Scene.Setting.BindRemoteInfo.changeEmailTitle
            case .setupPhoneNumber: return  L10n.Scene.Setting.BindRemoteInfo.setupPhoneNumberTitle
            case .updatePhoneNumber: return  L10n.Scene.Setting.BindRemoteInfo.changePhoneNumberTitle
            }
        }

        var alertDetail: String {
            switch self {
            case .setupEmail: return  L10n.Scene.Setting.BindRemoteInfo.setupEmailDetail
            case .updateEmail: return  L10n.Scene.Setting.BindRemoteInfo.changeEmailDetail
            case .setupPhoneNumber: return  L10n.Scene.Setting.BindRemoteInfo.setupPhoneNumberDetail
            case .updatePhoneNumber: return  L10n.Scene.Setting.BindRemoteInfo.changePhoneNumberDetail
            }
        }
    }

    private var viewModel: BindRemoteBackupInfoViewModel
    private(set) var cancelableStorage: Set<AnyCancellable> = []

    @InjectedProvider(\.userDefaultSettings)
    private var userSettings

    private var strategy: Strategy

    init(strategy: Strategy = .setupEmail) {
        self.strategy = strategy
        let viewModelStrategy: RemoteBackpVerifyStrategy = {
            switch strategy {
            case .setupEmail: return .setEmail
            case .updateEmail: return .changeEmail
            case .setupPhoneNumber: return .setPhoneNumer
            case .updatePhoneNumber: return .changePhoneNumber
            }
        }()
        let viewModel = BindRemoteBackupInfoViewModel(
            strategy: viewModelStrategy,
            validateBeforeChange: strategy == .updateEmail || strategy == .updatePhoneNumber
        )
        self.viewModel = viewModel
        super.init(
            rootView: SheetAdaptiveContainer(
                content: { BindRemoteBackupInfoView(viewModel: viewModel) },
                onDismiss: { viewModel.sceneSignal.send(.dismiss) }
            )
        )
    }

    @available(*, unavailable)
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func buildEvent() {
        viewModel.sceneSignal
            .eraseToAnyPublisher()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] value in
                switch value {
                case .bindingSucceed:
                    self?.showBindingSucceedAlert()

                case .errorResponse:
                    self?.showErrorAlert()

                case .dismiss:
                    self?.dismiss(animated: true, completion: nil)
                }
            }
            .store(in: &cancelableStorage)
    }

    private func showErrorAlert() {
        Alert(items: {
            AlertItem.image(.warning)
            AlertItem.plainText(
                title: L10n.Common.Alert.BindRemoteInfo.title,
                detail: L10n.Common.Alert.BindRemoteInfo.detail
            )
            AlertItem.doneAction(.init(title: L10n.Common.Controls.ok))
        })
        .show()
    }

    private func showBindingSucceedAlert() {
        let strategy = self.strategy
        self.dismiss(animated: true) {
            Alert(items: {
                AlertItem.image(.success)
                AlertItem.plainText(
                    title: strategy.alertTitle,
                    detail: strategy.alertDetail
                )
                AlertItem.doneAction(.init(title: L10n.Common.Controls.done))
            })
            .show()
        }
    }
}
