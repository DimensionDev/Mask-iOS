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
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
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
                        $0.heightAnchor.constraint(equalToConstant: 48)
                    ])
                }
            takePhotoButton
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 48)
                    ])
                }
        }
        
        view.withSubViews {
            stack
        }
        NSLayoutConstraint.activate([
            stack.topAnchor.constraint(equalTo: view.topAnchor, constant: 0),
            stack.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            stack.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing),
            stack.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -57),
            avatarImageView.widthAnchor.constraint(equalTo: stack.widthAnchor)
        ])
        avatarImageView.applyCornerRadius(radius: (UIScreen.main.bounds.width - LayoutConstraints.horizontal * 2) / 2.0, cornerCurve: .circular)
        selectPhotoButton.addTarget(self, action: #selector(selectFromPhotosAction), for: .touchUpInside)
        takePhotoButton.addTarget(self, action: #selector(takePhotoAction), for: .touchUpInside)
        
        personaManager.currentPersona
            .receive(on: DispatchQueue.main)
            .sink { [weak self] persona in
                if let self = self,
                      let data = persona?.avatarData,
                      let image = UIImage(data: data)
                {
                    self.avatarImageView.image = image
                }
            }
            .store(in: &disposeBag)
    }
    
    private func cropImage(image: UIImage, pickerViewController: UIViewController) {
        DispatchQueue.main.async {
            self.coordinator.present(scene: .cropImage(image: image),
                                     transition: .detail(animated: true))
        }
    }
}

extension PersonaAvatarViewController: PHPickerViewControllerDelegate {
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
                        self.cropImage(image: image, pickerViewController: picker)
                    })
                }
            }
        }
    }
}

extension PersonaAvatarViewController: UIImagePickerControllerDelegate & UINavigationControllerDelegate {
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey: Any]) {
        picker.dismiss(animated: true) {
            guard let image = info[.originalImage] as? UIImage else { return }
            self.cropImage(image: image, pickerViewController: picker)
        }
    }

    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        picker.dismiss(animated: true, completion: nil)
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
