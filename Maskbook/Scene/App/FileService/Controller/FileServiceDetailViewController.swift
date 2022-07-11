import SwiftUI
import UIKit

final class FileServiceDetailViewController: BaseViewController {
    let fileServiceItem: FileServiceDownloadItem

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    private lazy var shareViewModel = PluginMetaShareViewModel()

    init(item: FileServiceDownloadItem) {
        self.fileServiceItem = item
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        title = fileServiceItem.fileName

        let viewModel = FileServiceDetailViewModel(item: fileServiceItem)
        FileServiceDetailView(
            viewModel: viewModel,
            action: { [weak self] action in
                guard let self = self else { return }
                switch action {
                case .share: self.share()
                case .save: self.save()
                }
            }
        )
        .asContent(in: self)
    }

    @MainActor
    func share() {
        guard let shareItem = FileServiceUploadResult.from(fileServiceItem) else {
            log.info("FileServiceUploadResult get a nil value")
            return
        }
        shareViewModel.postFileService(fileServiceResult: shareItem)
    }

    @MainActor
    func save() {
        guard let _ = fileServiceItem.content else {
            return
        }
        let controller = FileServiceSaveFileController(item: fileServiceItem.toSelectedFileItem())
        controller.dismissAction = {
            UIApplication.getTopViewController()?
                .makeToast(message: L10n.Common.Toast.saved,
                           image: Asset.Images.Toast.check.image)
        }
        coordinator.topViewController?.present(controller, animated: true)
    }
}

struct FileServiceDetailView: View {
    enum Action {
        case save
        case share
    }

    private let actionSignal: (Action) -> Void

    @StateObject
    var viewModel: FileServiceDetailViewModel

    init(viewModel: FileServiceDetailViewModel, action: @escaping (Action) -> Void) {
        _viewModel = .init(wrappedValue: viewModel)
        self.actionSignal = action
    }

    var body: some View {
        GeometryReader { _ in
            VStack(spacing: 16) {
                Spacer()
                switch viewModel.state {
                case .downloading:
                    FileServiceDownloadingPreview(item: viewModel.item)
                case .downloadFail:
                    FileServiceDownloadFailPreview(item: viewModel.item)
                case .downloaded:
                    FileServiceGeneralPreview(item: viewModel.item.toSelectedFileItem())
                }
                Spacer()

                Button(
                    action: { actionSignal(.share) },
                    label: {
                        Asset.Colors.Public.blue.asColor()
                            .cornerRadius(8)
                            .frame(height: 54)
                            .overlay(
                                Text(L10n.Common.Controls.postToTwitter)
                                    .font(.bh5)
                                    .foregroundColor(.white)
                            )
                    }
                )

                Button(
                    action: { actionSignal(.save) },
                    label: {
                        Asset.Colors.Public.blue.asColor()
                            .cornerRadius(8)
                            .frame(height: 54)
                            .overlay(
                                Text(L10n.Common.Controls.save)
                                    .font(.bh5)
                                    .foregroundColor(.white)
                            )
                    }
                )
            }
            .padding(.horizontal, 20)
            .padding(.bottom, 20)
        }
    }
}

#if DEBUG
struct FileServiceDetailView_Preview: PreviewProvider {
    static var previews: some View {
        FileServiceDetailView(
            viewModel: FileServiceDetailViewModel(item: FileServiceUploadingItem.uploaded.toFileServiceDownloadItem()), action: { _ in }
        )
    }
}
#endif
