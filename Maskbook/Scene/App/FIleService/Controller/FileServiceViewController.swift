import SwiftUI
import UIKit

final class FileServiceViewController: BaseViewController {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    private lazy var selectFileHandler = FileServiceSelectFileHandler(delegate: self)

    private lazy var viewModel = FileServiceViewModel()

    override func viewDidLoad() {
        super.viewDidLoad()
        title = L10n.Scene.App.Plugins.fileService
        FileServiceView(viewModel: viewModel).asContent(in: self)
    }

    override func buildEvent() {
        super.buildEvent()
        viewModel.configActionSignal { [weak self] action in
            switch action {
            case .choseFile: self?.choseFile()
            case let .share(value): self?.share(value)
            }
        }
    }

    private func share(_ item: FileServiceUploadResult) {
        coordinator.present(scene: .messageCompose(.fileService(item)), transition: .modal())
    }

    private func choseFile() {
        coordinator.present(scene: .fileServiceLocalFileSource(selectFileHandler: selectFileHandler), transition: .panModel())
    }

    private func configUploadOption() {
        coordinator.present(
            scene: .fileServiceOptions,
            transition: .detail()
        )
    }
}

extension FileServiceViewController: FileServiceSelectFileDelegate {
    func didGetFile(fileItem: FileServiceSelectedFileItem) {
        viewModel.tryUploading(fileItem)
    }
}

extension FileServiceViewController {
    @objc
    override func prepareRightNavigationItems() {
        let settings = NavigationBarItemView(imageAsset: Asset.Plugins.LuckyDrop.setting) { [weak self] in
            self?.configUploadOption()
        }

        self.navigationItem.leftBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: settings.asUIView())
        ]

        let button = NavigationBarItemView(imageAsset: Asset.Plugins.closeSquare) { [weak self] in
            self?.navigationController?.dismiss(animated: true)
        }

        self.navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: button.asUIView())
        ]
    }
}
