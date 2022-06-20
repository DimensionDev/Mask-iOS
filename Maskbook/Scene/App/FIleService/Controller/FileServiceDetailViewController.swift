import SwiftUI
import UIKit
import WebExtension_Shim

final class FileServiceDetailViewController: BaseViewController {
    let fileServiceItem: FileServiceUploadingItem

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    init(item: FileServiceUploadingItem) {
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

        FileServiceDetailView(
            item: fileServiceItem,
            action: { [weak self] action in
                guard let self = self else { return }
                switch action {
                case .share: self.share()
                case .download:
                    break
                }
            }
        )
        .asContent(in: self)
    }

    private func share() {
        guard let shareItem = FileServiceUploadResult.from(fileServiceItem) else {
            log.info("FileServiceUploadResult get a nil value")
            return
        }

        coordinator.present(
            scene: .messageCompose(.fileService(shareItem)),
            transition: .modal()
        )
    }

    private func download() {
        typealias Service = FileServiceUploadOption.Service
        let urlPrefixs: [Service: String] = [
            .arweave: "https://arweave.net",
            .ipfs: "https://infura-ipfs.io/ipfs"
        ]
        guard let landingId = fileServiceItem.tx?.landingTxID,
              let service = Service.init(rawValue: fileServiceItem.provider),
              let baseurl = urlPrefixs[service] else {
            return
        }

        let key = fileServiceItem.tx?.key ?? ""
        let url = key.isEmpty
        ? "\(baseurl)/\(landingId)"
        : "\(baseurl)/\(landingId)#\(key)"

        guard let url = URL.init(string: url) else {
            return
        }
        coordinator.present(
            scene: .safariView(url: url),
            transition: .detail()
        )
    }
}

struct FileServiceDetailView: View {
    enum Action {
        case download
        case share
    }

    let item: FileServiceUploadingItem

    let actionSignal: (Action) -> Void

    init(item: FileServiceUploadingItem, action: @escaping (Action) -> Void) {
        self.item = item
        self.actionSignal = action
    }

    var body: some View {
        VStack(spacing: 16) {
            Spacer()

            VStack {
                switch item.fileType {
                case .image:
                    Image(Asset.Plugins.FileService.imagePlaceholder)

                case .file:
                    Image(Asset.Plugins.FileService.folder)
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 134, height: 134)
                }

                Text(item.fileName)
                    .font(.bh4)
                    .foregroundColor(Asset.Colors.Text.dark)

                Text(item.uploadDateText)
                    .font(.mh7)
                    .foregroundColor(Asset.Colors.Text.normal)
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
                action: { actionSignal(.download) },
                label: {
                    Asset.Colors.Public.blue.asColor()
                        .cornerRadius(8)
                        .frame(height: 54)
                        .overlay(
                            Text(L10n.Common.Controls.download)
                                .font(.bh5)
                                .foregroundColor(.white)
                        )
                }
            )
        }
        .padding(.horizontal, 20)
    }
}

struct FileServiceDetailView_Preview: PreviewProvider {
    static var previews: some View {
        FileServiceDetailView(
            item: .uploaded,
            action: { _ in }
        )
    }
}