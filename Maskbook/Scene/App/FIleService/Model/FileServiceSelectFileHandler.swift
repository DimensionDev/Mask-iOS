//
//  FileServiceSelectFileDelegate.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/9.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import PhotosUI
import UIKit
import WebExtension_Shim

protocol FileServiceSelectFileDelegate {
    func didGetFile(fileItem: FileServiceSelectedFileItem)
}

struct FileServiceSelectedFileItem {
    let data: Data
    let fileName: String
    let fileType: FileServiceUploadingItem.ItemType
    let mime: String

    var fileNameWithoutExt: String {
        fileName.components(separatedBy: ".").first ?? fileName
    }
}

class FileServiceSelectFileHandler: NSObject {
    typealias Item = FileServiceSelectFileSourceViewModel.LocalFileSourceItem

    init(delegate: FileServiceSelectFileDelegate) {
        self.delegate = delegate
    }

    let fileSizeLimit = 11_010_048
    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    var delegate: FileServiceSelectFileDelegate
    private(set) lazy var imagePicker: PHPickerViewController = {
        var configuration = PHPickerConfiguration()
        configuration.filter = .images
        configuration.selectionLimit = 1

        let imagePicker = PHPickerViewController(configuration: configuration)
        imagePicker.delegate = self
        imagePicker.modalPresentationStyle = .fullScreen
        return imagePicker
    }()

    private(set) lazy var cameraController: UIImagePickerController = {
        let imagePickerController = UIImagePickerController()
        imagePickerController.sourceType = .camera
        imagePickerController.delegate = self
        imagePickerController.modalPresentationStyle = .fullScreen
        return imagePickerController
    }()

    private(set) lazy var documentPicker: UIDocumentPickerViewController = {
        let picker: UIDocumentPickerViewController = {
            if #available(iOS 15.0, *) {
                return UIDocumentPickerViewController(forOpeningContentTypes: [.text, .data, .item, .jpeg, .pdf, .png])
            } else {
                return UIDocumentPickerViewController(documentTypes: ["public.data"], in: .open)
            }
        }()
        picker.modalPresentationStyle = .fullScreen
        return picker
    }()

    func select(item: Item) {
        coordinator.dismissTopViewController(animated: false) {
            switch item {
            case .camera:
                self.takePhotoAction()
            case .photo:
                self.selectFromPhotosAction()
            case .file:
                self.selectFormFilesAction()
            }
        }
    }

    func randomNameForImage() -> String {
        let randomString = UUID().uuidString
        return "IMG" + String(randomString.prefix(5)) + ".jpg"
    }

    func didGetImage(image: UIImage) {
        if let pngData = image.jpeg(UIImage.JPEGQuality.high), !pngData.isEmpty {
            if Int64(pngData.count) > fileSizeLimit {
                showFileTooLargeAlert()
                return
            }
            let fileName = randomNameForImage()
            let fileItem = FileServiceSelectedFileItem(data: pngData,
                                                       fileName: fileName,
                                                       fileType: .image,
                                                       mime: "image/jpeg")
            delegate.didGetFile(fileItem: fileItem)
        } else {
            assertionFailure("can't get jpeg data from image")
        }
    }

    func showFileTooLargeAlert() {
        let alertController = AlertController(title: L10n.Common.Alert.FileServiceFileTooLarge.title,
                                              message: L10n.Common.Alert.FileServiceFileTooLarge.description,
                                              confirmButtonText: L10n.Common.Controls.ok,
                                              imageType: .error)
        coordinator.present(scene: .alertController(alertController: alertController),
                            transition: .alertController(completion: nil))
    }

    func didGetFile(url: URL) {
        let data = try? Data(contentsOf: url)
        guard let data = data else { return }
        if Int64(data.count) > fileSizeLimit {
            showFileTooLargeAlert()
            return
        }

        let fileItem = FileServiceSelectedFileItem(data: data,
                                                   fileName: url.lastPathComponent,
                                                   fileType: url.containsImage ? .image : .file,
                                                   mime: url.mimeType())
        delegate.didGetFile(fileItem: fileItem)
    }
    
    func loadImage(result: PHPickerResult) async -> Result<UIImage, Error> {
        let itemProvider = result.itemProvider
        guard itemProvider.canLoadObject(ofClass: UIImage.self) else {
            return Result.failure(ImageLoadError.cannotLoad)
        }
        return await withCheckedContinuation { continuation in
            itemProvider.loadObject(ofClass: UIImage.self) { image, error in
                if let image = image as? UIImage {
                    continuation.resume(returning: Result.success(image))
                } else {
                    continuation.resume(returning: Result.failure(error ?? ImageLoadError.cannotLoad))
                }
            }
        }
    }
}

enum ImageLoadError: Error {
    case cannotLoad
}

extension ImageLoadError: LocalizedError {
    public var errorDescription: String? {
        switch self {
        case .cannotLoad:
            return "Cannot load image"
        }
    }
}

extension FileServiceSelectFileHandler: PHPickerViewControllerDelegate {
    func picker(_ picker: PHPickerViewController, didFinishPicking results: [PHPickerResult]) {
        Task { @MainActor in
            guard let pickerResult = results.first else {
                picker.dismiss(animated: true, completion: nil)
                return
            }
            let imageResult = await Task.detached {
                await self.loadImage(result: pickerResult)
            }.value

            switch imageResult {
            case let .success(image):
                self.didGetImage(image: image)
                picker.dismiss(animated: true, completion: nil)
            case let .failure(error):
                picker.dismiss(animated: true, completion: {
                    let alertController = AlertController(
                        title: error.localizedDescription,
                        message: "",
                        confirmButtonText: L10n.Common.Controls.done,
                        imageType: .error)
                    self.coordinator.present(
                        scene: .alertController(alertController: alertController),
                        transition: .alertController(completion: nil))
                })
            }
        }
    }
}

extension FileServiceSelectFileHandler: UIImagePickerControllerDelegate & UINavigationControllerDelegate {
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey: Any]) {
        picker.dismiss(animated: true) {
            guard let image = info[.originalImage] as? UIImage else { return }
            self.didGetImage(image: image)
        }
    }

    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        picker.dismiss(animated: true, completion: nil)
    }
}

extension FileServiceSelectFileHandler: UIDocumentPickerDelegate {
    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentAt url: URL) {
        // Start accessing a security-scoped resource.
        guard url.startAccessingSecurityScopedResource() else {
            // Handle the failure here.
            return
        }
        defer {
            url.stopAccessingSecurityScopedResource()
        }
        didGetFile(url: url)
    }
}

extension FileServiceSelectFileHandler {
    func selectFromPhotosAction() {
        coordinator.topViewController?.present(imagePicker, animated: true)
    }

    func takePhotoAction() {
        ScannerPermission.authorizeCameraWith { [weak self] isAuthorize in
            guard let self = self else { return }
            if isAuthorize {
                self.coordinator.topViewController?.present(self.cameraController, animated: true)
            } else {
                ScannerPermission.showCameraAccessAlert(coordinator: self.coordinator)
            }
        }
    }

    func selectFormFilesAction() {
        documentPicker.delegate = self
        coordinator.topViewController?.present(documentPicker, animated: true)
    }
}
