//
//  RestoreDataPickerController.swift
//  Maskbook
//
//  Created by yzj on 2021/8/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import os.log
import UIKit
import UStack

final class RestoreDataPickerController: UIDocumentPickerViewController {
    enum Result {
        case fileData(URL)
        case canceled
        case unsupportedFile
    }

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    private let destination: RestoreDataPreviewController.Destination
    private var cancelableStorage: Set<AnyCancellable> = []
    private weak var sender: UIView?

    init(destination: RestoreDataPreviewController.Destination, sender: UIView? = nil) {
        self.destination = destination
        self.sender = sender
        if #available(iOS 15.0, *) {
            // will crash on iOS 14.1
            super.init(forOpeningContentTypes: [.plainText, .text, .content, .data, .archive], asCopy: true)
        } else {
            super.init(
                documentTypes: [
                    "public.plain-text",
                    "public.text",
                    "public.content",
                    "public.data",
                    "public.archive"
                ],
                in: .open
            )
        }
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        self.delegate = self
    }

    private func navigate(by fileURL: URL) {
        guard let fileType = fileURL.lastPathComponent.components(separatedBy: ".").last else {
            return
        }

        switch fileType {
        case RestoreDataFileType.json: unencryptedDataNavigation(use: fileURL)
        case RestoreDataFileType.bin: enctyptedDataNavigation(use: fileURL)
        default: showUnsupportedBackupAlert()
        }
    }

    private func showUnsupportedBackupAlert() {
        let warningDetail = NSAttributedString(
            string: L10n.Scene.Restore.checkUnsupportData,
            attributes: [
                .font: FontStyles.MH5,
                .foregroundColor: Asset.Colors.Text.normal.color
            ]
        )
        Alert(items: {
            AlertItem.image(.warning)
            AlertItem.tipWith(
                title: L10n.Scene.Restore.Titles.unsupportRestoreData,
                detail: warningDetail,
                detailAlignment: .left
            )
            AlertItem.doneAction(
                .init(title: L10n.Common.Controls.ok)
            )
        })
        .show()
    }

    private func unencryptedDataNavigation(use fileURL: URL) {
        dismiss(animated: true) {
            self.coordinator.present(
                scene: .localRestore(fileURL, destination: self.destination),
                transition: .detail())
        }
    }

    private func enctyptedDataNavigation(use fileURL: URL) {
        dismiss(animated: true) {
            self.coordinator.present(
                scene: .inputBackupPassword(completion: { password in
                    self.coordinator.present(
                        scene: .localRestoreEncryptBackup(fileURL, decryptSeed: password, destination: self.destination),
                        transition: .detail())
                }),
                transition: .panModel(animated: true)
            )
        }
    }
}

extension RestoreDataPickerController: UIDocumentPickerDelegate {
    // cancelled will automaticlly dismiss
    func documentPickerWasCancelled(_ controller: UIDocumentPickerViewController) {}

    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
        guard let fileURL = urls.first else {
            return
        }

        navigate(by: fileURL)
    }
}

struct RestoreDataFileType: RawRepresentable {
    let rawValue: String

    init?(rawValue: String) {
        self.rawValue = rawValue
    }
}

extension RestoreDataFileType {
    static var json: String { .init("json") }
    static var bin: String { .init("bin") }

    static func ~= (lhs: Self, rhs: Self) -> Bool {
        return lhs.rawValue == rhs.rawValue
    }

    static func ~= (lhs: String, rhs: Self) -> Bool {
        return lhs == rhs.rawValue
    }
}
