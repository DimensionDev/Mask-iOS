import Combine
import Foundation
import SwiftUI

final class RestoreWalletPasswordVerifyController: SheetAdapitveHostingController<RestoreWalletPasswordVertifyView> {
    private let viewModel: WalletRestoreVerifyViewModel
    private(set) var cancelableStorage: Set<AnyCancellable> = []
    private let completion: () -> Void

    init(completion: @escaping () -> Void) {
        let viewModel = WalletRestoreVerifyViewModel()

        self.viewModel = viewModel
        self.completion = completion
        super.init(
            rootView: SheetAdaptiveContainer(
                gestureInteractor: DefaultSheetGestureInteractor(tapToDismiss: false),
                content: { RestoreWalletPasswordVertifyView(viewModel: viewModel) },
                onDismiss: { viewModel.actionSignal.send(.dismiss) }
            )
        )
    }

    override func buildEvent() {
        super.buildEvent()

        viewModel
            .actionSignal
            .receive(on: DispatchQueue.main)
            .sink { [weak self] action in
                guard let self = self else { return }
                
                switch action {
                case .dismiss:
                    self.dismiss(animated: true, completion: nil)

                case .verifyed:
                    self.dismiss(animated: true, completion: self.completion)
                }
            }
            .store(in: &cancelableStorage)
    }
}
