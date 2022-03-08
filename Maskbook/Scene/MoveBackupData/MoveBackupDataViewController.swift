//
//  MoveBackupDataViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/2.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import PanModal
import UIKit
import UStack

class MoveBackupDataViewController: BaseViewController {
    private lazy var viewModel = MoveBackupDataViewModel()
    
    private lazy var imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Alert.warning.image
        imageView.contentMode = .center
        NSLayoutConstraint.activate([
            imageView.heightAnchor.constraint(equalToConstant: 60)
        ])
        return imageView
    }()
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.MoveBackupData.title
        label.textAlignment = .left
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH1
        return label
    }()

    private lazy var description1Label: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.MoveBackupData.description1
        label.textAlignment = .left
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH5
        label.numberOfLines = 0
        return label
    }()
    
    private lazy var description2Label: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.MoveBackupData.description2
        label.textAlignment = .left
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH5
        label.numberOfLines = 0
        return label
    }()
    
    private lazy var description3Label: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.MoveBackupData.description3
        label.textAlignment = .left
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH5
        label.numberOfLines = 0
        return label
    }()

    lazy var moveButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Common.Controls.moveDataNow)
        NSLayoutConstraint.activate([
            btn.heightAnchor.constraint(equalToConstant: 54)
        ])
        btn.addTarget(self, action: #selector(moveAction), for: .touchUpInside)
        return btn
    }()
    
    lazy var laterButton: SecondaryButton = {
        let btn = SecondaryButton(title: L10n.Common.Controls.remindMeLater)
        NSLayoutConstraint.activate([
            btn.heightAnchor.constraint(equalToConstant: 54)
        ])
        btn.addTarget(self, action: #selector(laterAction), for: .touchUpInside)
        return btn
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let stack = VStackView(spacing: 20) {
            imageView
            titleLabel
            description1Label
            description2Label
            description3Label
            moveButton
            laterButton
        }
        view.withSubViews {
            stack
        }
        stack.setCustomSpacing(12, after: imageView)
        stack.setCustomSpacing(12, after: titleLabel)
        stack.setCustomSpacing(24, after: description1Label)
        stack.setCustomSpacing(24, after: description2Label)
        stack.setCustomSpacing(16, after: moveButton)
        NSLayoutConstraint.activate([
            stack.topAnchor.constraint(equalTo: view.topAnchor, constant: 48),
            stack.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 22.5),
            stack.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -22.5),
            stack.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -58)
        ])
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
}

extension MoveBackupDataViewController {
    @objc
    func moveAction() {
        selectDestinationFolder()
        viewModel.detectBackupFiles()
    }
    
    @objc
    func laterAction() {
        dismiss(animated: true, completion: nil)
    }
}

extension MoveBackupDataViewController: UIDocumentPickerDelegate {
    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentAt url: URL) {
        // Start accessing a security-scoped resource.
        guard url.startAccessingSecurityScopedResource() else {
            // Handle the failure here.
            return
        }
        defer {
            url.stopAccessingSecurityScopedResource()
        }
        guard BackupFolderCheckService.checkAndAlert(url) else {
            return
        }
        let result = viewModel.moveToNewDirectory(directory: url)
        if result {
            dismiss(animated: true) {
                UIApplication.getTopViewController()?
                    .makeToast(message: L10n.Common.Toast.saved,
                               image: Asset.Images.Toast.check.image)
            }
        }
    }
}

extension MoveBackupDataViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }

    var longFormHeight: PanModalHeight {
        .intrinsicHeight
    }
}
