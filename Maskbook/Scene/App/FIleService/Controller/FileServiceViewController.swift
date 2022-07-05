import SwiftUI
import UIKit

final class FileServiceViewController: BaseViewController {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    private lazy var selectFileHandler = FileServiceSelectFileHandler(delegate: self)

    private lazy var viewModel = FileServiceViewModel()
    
    private lazy var shareViewModel = PluginMetaShareViewModel()

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
            case let .viewDetail(value): self?.viewDetail(of: value)
            }
        }
    }

    private func share(_ item: FileServiceUploadResult) {
        shareViewModel.postFileService(fileServiceResult: item)
    }

    private func choseFile() {
        coordinator.present(
            scene: .fileServiceLocalFileSource(selectFileHandler: selectFileHandler),
            transition: .panModel()
        )
    }

    private func viewDetail(of item: FileServiceUploadingItem) {
        coordinator.present(
            scene: .fileServiceDetail(item.toFileServiceDownloadItem()),
            transition: .detail()
        )
    }
}

extension FileServiceViewController: FileServiceSelectFileDelegate {
    func didGetFile(fileItem: FileServiceSelectedFileItem,
                    option: FileServiceUploadOption) {
        viewModel.tryUploading(fileItem, option: option)
    }
}

extension FileServiceViewController {
    @objc
    override func prepareRightNavigationItems() {

        let button = NavigationBarItemView(imageAsset: Asset.Plugins.closeSquare) { [weak self] in
            self?.navigationController?.dismiss(animated: true)
        }

        self.navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: button.asUIView())
        ]
    }
}
