import Foundation
import SwiftUI

final class FileServiceSaveFileController: SheetViewController {
    struct File {
        let fileType: FileServiceUploadingItem.ItemType
        let content: Data
    }

    private let viewModel: ViewModel

    init(file: File) {
        self.viewModel = .init(file: file)
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
                guard self.viewModel.file.fileType == .image,
                      let image = UIImage(data: self.viewModel.file.content) else {
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

        try? self.viewModel.file.content.write(to: url)

        self.hide()
    }
}

extension FileServiceSaveFileController {
    final class ViewModel: ObservableObject {
        enum Action {
        case saveToAlbum
        case saveToFolder
        }

        let file: File
        var action: (Action) -> Void = { _ in }

        init(file: File) {
            self.file = file
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
                                            viewModel.file.fileType == .image
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
                .disabled(viewModel.file.fileType == .file)

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
            FileServiceSaveFileController(file: .init(fileType: .file, content: Data())).view
        }
    }
}
#endif
