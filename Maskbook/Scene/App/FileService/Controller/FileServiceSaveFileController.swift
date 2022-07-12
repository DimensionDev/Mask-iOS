import Foundation
import SwiftUI

final class FileServiceSaveFileController: SheetViewController {
    private let viewModel: ViewModel

    init(item: FileServiceSelectedFileItem) {
        self.viewModel = .init(item: item)
        super.init(presenter: SheetPresenter(
            presentStyle: .translucent,
            transition: KeyboardSheetTransition()
        )
        )
    }

    override func buildContent() {
        super.buildContent()
        ContentView(viewModel: viewModel).asSheetContent(in: self)
    }

    override func buildEvent() {
        super.buildEvent()
        viewModel.action = { [weak self] action in
            guard let self = self else { return }
            switch action {
            case .saveToAlbum:
                guard self.viewModel.item.mime.mimeIsCanSaveToAlbum else {
                    return
                }
                if self.viewModel.item.mime.mimeIsImage {
                    if let image = UIImage(data: self.viewModel.item.data) {
                        UIImageWriteToSavedPhotosAlbum(image,
                                                       self,
                                                       #selector(self.albumSave),
                                                       nil)
                    }
                }
                if self.viewModel.item.mime.mimeIsVideo {
                    UISaveVideoAtPathToSavedPhotosAlbum(self.viewModel.item.tempURL.path,
                                                        self,
                                                        #selector(self.videoSave),
                                                        nil)
                }
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

    private func saveSuccessAction() {
        dismiss(animated: true) {
            UIApplication.getTopViewController()?
                .makeToast(message: L10n.Common.Toast.saved,
                           image: Asset.Images.Toast.check.image)
        }
    }

    @objc
    private func albumSave(
        _ image: UIImage,
        didFinishSavingWithError error: Error?,
        contextInfo: UnsafeMutableRawPointer
    ) {
        if error.isNone {
            saveSuccessAction()
        }
    }

    @objc
    private func videoSave(
        _ videoPath: String,
        didFinishSavingWithError error: Error?,
        contextInfo: UnsafeMutableRawPointer
    ) {
        if error.isNone {
            saveSuccessAction()
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
        guard !viewModel.item.data.isEmpty else {
            return
        }
        try? viewModel.item.data.write(to: fileUrl)

        saveSuccessAction()
    }
}

extension FileServiceSaveFileController {
    final class ViewModel: ObservableObject {
        enum Action {
            case saveToAlbum
            case saveToFolder
        }

        var item: FileServiceSelectedFileItem
        var action: (Action) -> Void = { _ in }

        init(item: FileServiceSelectedFileItem) {
            self.item = item
        }

        func itemCanSaveToAlbum() -> Bool {
            if item.mime.mimeIsImage {
                return true
            }
            if item.mime.mimeIsVideo {
                return UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(item.tempURL.path)
            }
            return false
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
                                            viewModel.itemCanSaveToAlbum()
                                                ? 1
                                                : 0.5
                                        )
                                    )
                                    .padding(.horizontal, 12),

                                alignment: .leading
                            )
                    }
                )
                .disabled(!viewModel.itemCanSaveToAlbum())

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
                                    .padding(.horizontal, 12),

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
            FileServiceSaveFileController(item: FileServiceUploadingItem.uploaded.toFileServiceDownloadItem().toSelectedFileItem()).view
        }
    }
}
#endif
