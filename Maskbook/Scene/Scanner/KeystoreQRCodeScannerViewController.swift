//
//  KeystoreQRCodeScannerViewController.swift
//  Maskbook
//
//  Created by Cirno MainasuK on 2019-7-23.
//  Copyright © 2019 dimension. All rights reserved.
//

import AVKit
import UIKit
import WebExtension_Shim

final class KeystoreQRCodeScannerViewController: UIViewController {
    // Input
    weak var tab: Tab?
    var id: String?

    lazy var scannerViewController = ScannerViewController()
    lazy var scannerShapeView = ScannerShapeView()
    let hintTextLabel: UILabel = {
        let label = UILabel()
        label.font = .preferredFont(forTextStyle: .body)
        label.textAlignment = .center
        label.text = "Select \"Transfer Data to Another Device\" on the \nother device, and scan the QR code."  // TODO: i18n
        label.numberOfLines = 2
        return label
    }()
}

extension KeystoreQRCodeScannerViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        title = "Import"    // TODO: i18n
        view.backgroundColor = Asset.backgroundGray.color
        navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .done, target: self, action: #selector(KeystoreQRCodeScannerViewController.doneBarButtonItemPressed(_:)))
        scannerViewController.delegate = self

        addChild(scannerViewController)
        view.addSubview(scannerViewController.view)
        scannerViewController.didMove(toParent: self)

        scannerViewController.view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            scannerViewController.view.topAnchor.constraint(equalTo: view.layoutMarginsGuide.topAnchor, constant: 30),
            scannerViewController.view.leadingAnchor.constraint(equalTo: view.layoutMarginsGuide.leadingAnchor, constant: 16),
            view.layoutMarginsGuide.trailingAnchor.constraint(equalTo: scannerViewController.view.trailingAnchor, constant: 16),
            scannerViewController.view.widthAnchor.constraint(equalTo: scannerViewController.view.heightAnchor, multiplier: 1.0)
        ])

        scannerViewController.view.layer.masksToBounds = true
        scannerViewController.view.layer.cornerRadius = 10

        scannerShapeView.translatesAutoresizingMaskIntoConstraints = false
        scannerViewController.view.addSubview(scannerShapeView)
        NSLayoutConstraint.activate([
            scannerShapeView.topAnchor.constraint(equalTo: scannerViewController.view.topAnchor),
            scannerShapeView.leadingAnchor.constraint(equalTo: scannerViewController.view.leadingAnchor),
            scannerShapeView.trailingAnchor.constraint(equalTo: scannerViewController.view.trailingAnchor),
            scannerShapeView.bottomAnchor.constraint(equalTo: scannerViewController.view.bottomAnchor)
        ])
        scannerShapeView.backgroundColor = .clear
        scannerShapeView.isUserInteractionEnabled = false

        hintTextLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(hintTextLabel)
        NSLayoutConstraint.activate([
            hintTextLabel.topAnchor.constraint(equalTo: scannerViewController.view.bottomAnchor, constant: 30),
            hintTextLabel.leadingAnchor.constraint(equalTo: view.layoutMarginsGuide.leadingAnchor),
            hintTextLabel.trailingAnchor.constraint(equalTo: view.layoutMarginsGuide.trailingAnchor)
        ])
    }
}

extension KeystoreQRCodeScannerViewController {
    @objc private func doneBarButtonItemPressed(_ sender: UIBarButtonItem) {
        if let webView = tab?.webView, let id = id {
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.serverError)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: nil)
        }

        dismiss(animated: true, completion: nil)
    }
}

// MARK: - ScannerViewControllerDelegate
extension KeystoreQRCodeScannerViewController: ScannerViewControllerDelegate {
    func scannerViewController(_ scannerViewController: ScannerViewController, didOutput readableObjects: [AVMetadataMachineReadableCodeObject], from connection: AVCaptureConnection) {
        // FIXME: due to stupid XCode issue :https://developer.apple.com/forums/thread/658471 , we have to disable following code block in simulator env
        #if !targetEnvironment(simulator)
        print(readableObjects)

        guard let rawCode = readableObjects.first,
        let code = scannerViewController.previewView.videoPreviewLayer.transformedMetadataObject(for: rawCode) as? AVMetadataMachineReadableCodeObject else {
            scannerShapeView.set(corners: [])
            return
        }

        let corners = code.corners.map { point in
            return scannerViewController.previewView.convert(point, to: scannerShapeView)
        }
        scannerShapeView.set(corners: corners)

        let feedbackGenerator = UIImpactFeedbackGenerator(style: .light)
        feedbackGenerator.impactOccurred()

        print(code.stringValue ?? "")
        scannerViewController.captureSession.stopRunning()

        if let _ = code.stringValue, let webView = tab?.webView, let id = id {
            let response = HoloflowsRPC.Response(result: code.stringValue, id: id)
            HoloflowsRPC.dispatchResponse(webView: webView, name: "maskbookjsonrpc", id: id, result: .success(response), completionHandler: nil)
        }
        #endif
        dismiss(animated: true, completion: nil)
    }
}
