import Combine
import Foundation
import SwiftUI
import UStack

final class RestoreLocalFileValidationController: SheetAdapitveHostingController<RestoreLocalFileValidationView> {
    private let viewModel: RestoreLocalFileValidationViewModel
    private var cancelableStorage: Set<AnyCancellable> = []

    private let completion: ((Data) -> Void)?

    init(fileURL: URL, completion: @escaping (Data) -> Void) {
        let viewModel = RestoreLocalFileValidationViewModel(fileURL)

        self.viewModel = viewModel
        self.completion = completion

        super.init(
            rootView: SheetAdaptiveContainer(
                content: { RestoreLocalFileValidationView(viewModel: viewModel) },
                onDismiss: { viewModel.sceneSignal.send(.dismiss) }
            )
        )
    }

    override func buildEvent() {
        super.buildEvent()

        viewModel
            .sceneSignal
            .asDriver()
            .sink { [weak self] action in
                guard let self = self else { return }

                switch action {
                case .dismiss:
                    self.dismiss(animated: true, completion: nil)

                case let .startRestoring(data):
                    self.dismiss(animated: true) {
                        self.completion?(data)
                    }
                }
            }
            .store(in: &cancelableStorage)
    }
}
