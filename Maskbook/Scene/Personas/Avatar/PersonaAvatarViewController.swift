//
//  PersonaAvatarViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/14.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import PhotosUI
import UIKit
import UStack

class PersonaAvatarViewController: BaseViewController {
    private var disposeBag = Set<AnyCancellable>()
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    private lazy var avatarImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFill
        imageView.image = Asset.Images.Scene.Personas.personaDefault.image
        NSLayoutConstraint.activate([
            imageView.widthAnchor.constraint(equalTo: imageView.heightAnchor)
        ])
        return imageView
    }()
    
    private lazy var imageContainer: UIView = {
        let view = UIView()
        view.withSubViews {
            avatarImageView
        }
        NSLayoutConstraint.activate([
            avatarImageView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            avatarImageView.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])
        return view
    }()
    
    private lazy var selectPhotoButton = PrimeryButton(title: L10n.Common.Controls.selectFromPhoto)
    
    private lazy var takePhotoButton = PrimeryButton(title: L10n.Common.Controls.takePhoto)
    
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
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = L10n.Scene.PersonaAvatar.title
        let stack = VStackView(spacing: 13) {
            imageContainer
            selectPhotoButton
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 46)
                    ])
                }
            takePhotoButton
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 46)
                    ])
                }
        }
        
        view.withSubViews {
            stack
        }
        NSLayoutConstraint.activate([
            stack.topAnchor.constraint(equalTo: view.topAnchor, constant: 0),
            stack.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 22.5),
            stack.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -22.5),
            stack.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -57),
            avatarImageView.widthAnchor.constraint(equalTo: stack.widthAnchor)
        ])
        avatarImageView.applyCornerRadius(radius: (UIScreen.main.bounds.width - 22.5 * 2) / 2.0, cornerCurve: .circular)
        selectPhotoButton.addTarget(self, action: #selector(selectFromPhotosAction), for: .touchUpInside)
        takePhotoButton.addTarget(self, action: #selector(takePhotoAction), for: .touchUpInside)
    }
    
    private func cropImage(image: UIImage, pickerViewController: UIViewController) {
        coordinator.present(scene: .cropImage(image: image),
                            transition: .detail(animated: true))
    }
}

extension PersonaAvatarViewController: PHPickerViewControllerDelegate {
    func picker(_ picker: PHPickerViewController, didFinishPicking results: [PHPickerResult]) {
        picker.dismiss(animated: true, completion: {})
        guard let itemProvider = results.first?.itemProvider, itemProvider.canLoadObject(ofClass: UIImage.self) else {
            return
        }
        itemProvider.loadObject(ofClass: UIImage.self) { [weak self] image, error in
            guard let self = self else { return }
            guard let image = image as? UIImage else {
                DispatchQueue.main.async {
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
                }
                return
            }
            
            self.cropImage(image: image, pickerViewController: picker)
        }
    }
}

extension PersonaAvatarViewController: UIImagePickerControllerDelegate & UINavigationControllerDelegate {
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey: Any]) {
        picker.dismiss(animated: true, completion: nil)

        guard let image = info[.originalImage] as? UIImage else { return }

        cropImage(image: image, pickerViewController: picker)
    }

    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        picker.dismiss(animated: true, completion: nil)
    }
}

extension PersonaAvatarViewController: CropImageViewControllerDelegate {
    public func cropViewController(_ cropViewController: CropImageViewController, didCropToImage image: UIImage) {
        PersonaAvatarViewModel.saveImage(image: image)
        cropViewController.dismiss(animated: true, completion: nil)
    }
}

extension PersonaAvatarViewController {
    @objc
    func selectFromPhotosAction() {
        present(imagePicker, animated: true, completion: nil)
    }
    
    @objc
    func takePhotoAction() {
        present(cameraController, animated: true, completion: nil)
    }
}
