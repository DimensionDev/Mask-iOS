//
//  FileServiceSelectFileSourceViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/9.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import PhotosUI
import UIKit

class FileServiceSelectFileSourceViewModel: NSObject {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    private(set) lazy var imagePicker: PHPickerViewController = {
        var configuration = PHPickerConfiguration()
        configuration.filter = .images
        configuration.selectionLimit = 1

        let imagePicker = PHPickerViewController(configuration: configuration)
        imagePicker.delegate = self
        return imagePicker
    }()

    private(set) lazy var cameraController: UIImagePickerController = {
        let imagePickerController = UIImagePickerController()
        imagePickerController.sourceType = .camera
        imagePickerController.delegate = self
        return imagePickerController
    }()

    private(set) lazy var documentPicker: UIDocumentPickerViewController = {
        if #available(iOS 15.0, *) {
            return UIDocumentPickerViewController(forOpeningContentTypes: [.data])
        } else {
            return UIDocumentPickerViewController(documentTypes: ["public.data"], in: .open)
        }
    }()

    func select(item: LocalFileSourceItem) {
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

    func didGetImage(image: UIImage) {
        print(image)
    }

    func didGetFile(url: URL) {
        print(url)
    }
}

extension FileServiceSelectFileSourceViewModel: PHPickerViewControllerDelegate {
    func picker(_ picker: PHPickerViewController, didFinishPicking results: [PHPickerResult]) {
        DispatchQueue.main.async {
            guard let itemProvider = results.first?.itemProvider, itemProvider.canLoadObject(ofClass: UIImage.self) else {
                picker.dismiss(animated: true, completion: {})
                return
            }
            itemProvider.loadObject(ofClass: UIImage.self) { [weak self] image, error in
                guard let self = self else { return }
                DispatchQueue.main.async {
                    guard let image = image as? UIImage else {
                        picker.dismiss(animated: true, completion: {
                            if let errorDescription = error?.localizedDescription {
                                let alertController = AlertController(
                                    title: errorDescription,
                                    message: "",
                                    confirmButtonText: L10n.Common.Controls.done,
                                    imageType: .error)
                                self.coordinator.present(
                                    scene: .alertController(alertController: alertController),
                                    transition: .alertController(completion: nil))
                            }
                        })
                        return
                    }
                    picker.dismiss(animated: true, completion: {
                        self.didGetImage(image: image)
                    })
                }
            }
        }
    }
}

extension FileServiceSelectFileSourceViewModel: UIImagePickerControllerDelegate & UINavigationControllerDelegate {
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

extension FileServiceSelectFileSourceViewModel: UIDocumentPickerDelegate {
    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentAt url: URL) {
        // Start accessing a security-scoped resource.
        guard url.startAccessingSecurityScopedResource() else {
            // Handle the failure here.
            return
        }
//        defer {
//            url.stopAccessingSecurityScopedResource()
//        }
        didGetFile(url: url)
    }
}

extension FileServiceSelectFileSourceViewModel {
    func selectFromPhotosAction() {
        coordinator.present(scene: .viewController(viewController: imagePicker),
                            transition: .modal(wapperNav: false,
                                               animated: true))
    }

    func takePhotoAction() {
        ScannerPermission.authorizeCameraWith { [weak self] isAuthorize in
            guard let self = self else { return }
            if isAuthorize {
                self.coordinator.present(scene: .viewController(viewController: self.cameraController),
                                         transition: .modal(wapperNav: false,
                                                            animated: true))
            } else {
                ScannerPermission.showCameraAccessAlert(coordinator: self.coordinator)
            }
        }
    }

    func selectFormFilesAction() {
        documentPicker.delegate = self
        coordinator.present(scene: .viewController(viewController: documentPicker),
                            transition: .modal(wapperNav: false,
                                               animated: true))
    }
}

extension FileServiceSelectFileSourceViewModel {
    enum LocalFileSourceItem: CaseIterable {
        case camera
        case photo
        case file

        var imageName: String {
            switch self {
            case .camera: return Asset.Plugins.FileService.uplodaCamera.name
            case .photo: return Asset.Plugins.FileService.uplodaPhotos.name
            case .file: return Asset.Plugins.FileService.uploadFile.name
            }
        }

        var title: String {
            switch self {
            case .camera: return L10n.Plugins.FileService.LocalFileSource.takePhotos
            case .photo: return L10n.Plugins.FileService.LocalFileSource.uploadPhotos
            case .file: return L10n.Plugins.FileService.LocalFileSource.uploadFile
            }
        }
    }
}
