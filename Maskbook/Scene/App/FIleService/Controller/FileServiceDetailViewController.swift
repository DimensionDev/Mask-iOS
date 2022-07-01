import SwiftUI
import UIKit

final class FileServiceDetailViewController: BaseViewController {
    let fileServiceItem: FileServiceUploadingItem

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

        let viewModel = FileServiceDetailViewModel(item: fileServiceItem)
        FileServiceDetailView(
            viewModel: viewModel
        )
        .asContent(in: self)
    }
}

struct FileServiceDetailView: View {

    @StateObject
    var viewModel: FileServiceDetailViewModel

    init(viewModel: FileServiceDetailViewModel) {
        _viewModel = .init(wrappedValue: viewModel)
    }

    var body: some View {
        GeometryReader { proxy in
            VStack(spacing: 16) {
                Spacer()
                switch viewModel.state {
                case .downloading:
                    FileServiceDownloadingPreview(item: viewModel.item)
                case .downloadFail:
                    FileServiceDownloadFailPreview(item: viewModel.item)
                case .downloaded:
                    FileServiceGeneralPreview(item: viewModel.item)
                }
                Spacer()

                Button(
                    action: {
                        viewModel.share()
                    },
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
                    action: { viewModel.save() },
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
            viewModel: FileServiceDetailViewModel(item: .uploaded)
        )
    }
}
#endif
