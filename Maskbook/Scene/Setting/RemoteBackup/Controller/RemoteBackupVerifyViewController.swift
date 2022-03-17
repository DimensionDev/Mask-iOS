import Combine
import SwiftUI
import UIKit

final class RemoteBackupVerifyViewController: SheetViewController {
    private(set) var disposeBag: Set<AnyCancellable> = []
    private var viewModel: RemoteBackupVerifyViewModel?

    @InjectedProvider(\.userDefaultSettings)
    private var userSettings
    
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator

    init() {
        super.init(presenter: SheetPresenter(
            presentStyle: .translucent,
            transition: KeyboardSheetTransition())
        )
        
        if userSettings.remoteBackupEmail?.isEmpty == false &&
            userSettings.remoteBackupPhoneNumber?.isMnemonicFormat == false {
            viewModel = RemoteBackupVerifyViewModel(.all)
        } else if userSettings.remoteBackupEmail?.isEmpty == false {
            viewModel = RemoteBackupVerifyViewModel(.email)
        } else {
            viewModel = RemoteBackupVerifyViewModel(.phone)
        }
    }

    override func buildContent() {
        super.buildContent()
        
        if let viewModel = viewModel {        
            RemoteBackupVerifyView(viewModel: viewModel)
                .asSheetContent(in: self)
        }
    }

    override func buildEvent() {
        super.buildEvent()
        
        viewModel?.$confirmAction.sink(receiveValue: { [weak self] action in
            guard let self = self else { return }
            guard let action = action else { return }
            switch action {
            case let .preview(result):
                self.dismiss(animated: true) {
                    self.mainCoordinator.present(
                        scene: .localBackup(type: .remote, cloudVerifyResult: result),
                        transition: .detail())
                }
                
            case let .chooseOperations(result, data):
                guard let data = data else { return }
                let vm = RemoteBackupActionsViewModel(
                    remoteBackupPreview: data,
                    cloudVerifyResult: result
                )
                self.dismiss(animated: true) {
                    Coordinator.main.present(
                        scene: .remoteBackupActions(viewModel: vm),
                        transition: .popup
                    )
                }
            }
        }).store(in: &disposeBag)
    }
    
    private func showError(error: Error) {
        Alert {
            ImageItem(.error)
            WithTipItem(
                title: "",
                detail: NSAttributedString(
                    string: error.localizedDescription,
                    attributes: [
                        .font: FontStyles.BH5,
                        .foregroundColor: Asset.Colors.Text.normal.color
                    ]
                )
            )
            DoneActionItem(
                .init(
                    title: L10n.Common.Controls.ok,
                    action: { [weak self] in
                        self?.navigationController?.popViewController(animated: true)
                    }
                )
            )
        }
        .show()
    }
}
