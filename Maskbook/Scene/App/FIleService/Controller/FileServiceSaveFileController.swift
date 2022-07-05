import Foundation
import SwiftUI

final class FileServiceSaveFileController: SheetViewController {

    private let viewModel: ViewModel

    init(item: FileServiceDownloadItem) {
        self.viewModel = .init(item: item)
        super.init(presenter: SheetPresenter(
            presentStyle: .translucent,
            transition: KeyboardSheetTransition())
        )
    }

    override func buildContent() {
        super.buildContent()
        ContentView(viewModel: self.viewModel).asSheetContent(in: self)
    }

    override func buildEvent() {
        super.buildEvent()
        viewModel.action = { [weak self] action in
            guard let self = self else { return }
            switch action {
            case .saveToAlbum:
                guard self.viewModel.item.fileType == .image,
                      let data = self.viewModel.item.content,
                      let image = UIImage(data: data) else {
                    return
                }
                UIImageWriteToSavedPhotosAlbum(image, self, #selector(self.albumSave), nil)

            case .saveToFolder: self.selectDestinationFolder()
            }
        }
    }

    private func selectDestinationFolder() {
        let documentPicker: UIDocumentPickerViewController = {
            if #available(iOS 15.0, *) {
                return UIDocumentPickerViewController(forOpeningContentTypes: [.folder])
            } else {
                return UIDocumentPickerViewController(documentTypes: ["public.folder"], in: .open)
            }
        }()
        documentPicker.delegate = self
        present(documentPicker, animated: true, completion: nil)
    }

    @objc
    private func albumSave(
        _ image: UIImage,
        didFinishSavingWithError error: Error?,
        contextInfo: UnsafeMutableRawPointer
    ) {
        if error.isNone {
            self.hide()
        }
    }
}

extension FileServiceSaveFileController: UIDocumentPickerDelegate {
    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentAt url: URL) {
        _ = url.startAccessingSecurityScopedResource()
        defer {
            url.stopAccessingSecurityScopedResource()
        }

        let fileUrl = url.appendingPathComponent(viewModel.item.fileName)
        guard let data = viewModel.item.content else {
            return
        }
        try? data.write(to: fileUrl)

        self.hide()
    }
}

extension FileServiceSaveFileController {
    final class ViewModel: ObservableObject {
        enum Action {
        case saveToAlbum
        case saveToFolder
        }

        let item: FileServiceDownloadItem
        var action: (Action) -> Void = { _ in }

        init(item: FileServiceDownloadItem) {
            self.item = item
        }
    }

    struct ContentView: SwiftUI.View {

        @StateObject
        private var viewModel: ViewModel

        init(viewModel: ViewModel) {
            _viewModel = .init(wrappedValue: viewModel)
        }

        var body: some SwiftUI.View {
            VStack(alignment: .leading, spacing: 16) {
                Button(
                    action: { self.viewModel.action(.saveToAlbum) },
                    label: {
                        Asset.Colors.Background.dark.asColor()
                            .cornerRadius(8)
                            .frame(height: 56)
                            .overlay(
                                Text(L10n.Plugins.FileService.LocalFileSource.saveToAlbum)
                                    .font(.bh5)
                                    .foregroundColor(
                                        Asset.Colors.Text.dark.asColor().opacity(
                                            viewModel.item.fileType == .image
                                            ? 1
                                            : 0.5
                                        )
                                    )
                                    .padding(.horizontal, 12)
                                ,
                                alignment: .leading
                            )
                    }
                )
                .disabled(viewModel.item.fileType == .file)

                Button(
                    action: { self.viewModel.action(.saveToFolder) },
                    label: {
                        Asset.Colors.Background.dark.asColor()
                            .cornerRadius(8)
                            .frame(height: 56)
                            .overlay(
                                Text(L10n.Plugins.FileService.LocalFileSource.saveToFolder)
                                    .font(.bh5)
                                    .foregroundColor(Asset.Colors.Text.dark)
                                    .padding(.horizontal, 12)
                                ,
                                alignment: .leading
                            )
                    }
                )
            }
            .padding(.horizontal, 20)
            .padding(.vertical, 20)
        }
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
import UStack
struct FileServiceSaveFileController_Preview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Preview {
            FileServiceSaveFileController(item: FileServiceUploadingItem.uploaded.toFileServiceDownloadItem()).view
        }
    }
}
#endif
