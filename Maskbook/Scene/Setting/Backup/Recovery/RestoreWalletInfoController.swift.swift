import Combine
import SwiftUI
import UIKit

final class RestoreWalletInfoController: SheetAdapitveHostingController<WalletRestoreInfoView> {
    private let viewModel: WalletRestoreInfoViewModel
    private(set) var cancelableStorage: Set<AnyCancellable> = []
    private let confirmAction: () -> Void

    init(items: [RestoreWalletItem], confirmAction: @escaping () -> Void = {}) {
        let viewModel = WalletRestoreInfoViewModel(items: items)
        self.viewModel = viewModel
        self.confirmAction = confirmAction
        
        super.init(
            rootView: SheetAdaptiveContainer(
                gestureInteractor: DefaultSheetGestureInteractor(tapToDismiss: false, translateWhenSwiping: false),
                embedWithInput: false,
                content: { WalletRestoreInfoView(viewModel: viewModel) },
                onDismiss: {}
            )
        )
    }

    override func buildEvent() {
        super.buildEvent()

        viewModel.actionSignal
            .sink { [weak self] action in
                switch action {
                case .dismiss:
                    self?.dismiss(animated: true, completion: { self?.confirmAction() })
                }
            }
            .store(in: &cancelableStorage)
    }
}
