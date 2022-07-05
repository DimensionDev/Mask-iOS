import SwiftUI

final class FileServiceConfirmViewController: BaseViewController {
    typealias Service = FileServiceUploadOption.Service

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    let fileServiceItem: FileServiceSelectedFileItem
    private let optionHandler: (FileServiceUploadOption) -> Void

    init(item: FileServiceSelectedFileItem, optionHandler: @escaping (FileServiceUploadOption) -> Void) {
        self.fileServiceItem = item
        self.optionHandler = optionHandler
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        title = L10n.Plugins.FileService.settingTitle

        FileServiceConfirmView(fileServiceItem, action: { action in
            switch action {
            case let .confirm(option):
                self.navigationController?.popViewController(animated: true)
                self.optionHandler(option)
            case .faq:
                self.fileServiceFAQ()
            case let .selectService(service, serviceHandler):
                self.selectService(service: service, serviceHandler: serviceHandler)
            }
        })
        .asContent(in: self)
    }

    func fileServiceFAQ() {
        coordinator.present(scene: .fileServiceFAQ, transition: .detail())
    }

    func selectService(service: Service, serviceHandler: @escaping (Service) -> Void) {
        let viewModel = FileServiceSelectServiceViewModel(service: service, serviceHandler: serviceHandler)
        coordinator.present(scene: .selectItemViewController(viewModel: viewModel), transition: .panModel())
    }
}

extension FileServiceConfirmViewController {
    @objc
    override func prepareRightNavigationItems() {}
}
