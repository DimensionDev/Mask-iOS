//
//  MaskScanViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import AVKit
import UIKit

enum RestrictedScanType {
    case onlyPersona
    case common
}

final class MaskScanViewController: UIViewController {
    init(restrictedScanType: RestrictedScanType) {
        self.restrictedScanType = restrictedScanType
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @InjectedProvider(\.schemeService)
    private var schemeService

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    var restrictedScanType: RestrictedScanType
    
    lazy var scannerViewController = ScannerViewController()

    private lazy var scanBorderView: UIImageView = {
        let view = UIImageView()
        view.image = Asset.Images.Scene.WalletConnect.scanBorder.image
        return view
    }()

    private lazy var scannerView: UIImageView = {
        let view = UIImageView()
        view.contentMode = .center
        view.clipsToBounds = false
        view.image = Asset.Images.Scene.WalletConnect.scanner.image
        return view
    }()

    private lazy var hintTextLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH6
        label.textColor = Asset.Colors.Text.lighter.color
        label.textAlignment = .center
        label.text = L10n.Scene.WalletConnect.scan
        return label
    }()
}

extension MaskScanViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = UIColor.gray
        scannerViewController.delegate = self

        addChild(scannerViewController)
        view.addSubview(scannerViewController.view)
        scannerViewController.didMove(toParent: self)

        scannerViewController.view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            scannerViewController.view.topAnchor.constraint(equalTo: view.topAnchor),
            scannerViewController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            scannerViewController.view.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            scannerViewController.view.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])

        let shapeLayer = CAShapeLayer()
        shapeLayer.opacity = 0.5
        shapeLayer.fillColor = UIColor.gray.cgColor
        let centerframe = CGRect(
            origin: CGPoint(x: UIScreen.main.bounds.size.width / 2 - 142, y: UIScreen.main.bounds.size.height / 2 - 200),
            size: CGSize(width: 284, height: 284))
        shapeLayer.frame = view.bounds
        let path = UIBezierPath(roundedRect: centerframe, cornerRadius: 3).reversing()
        let screenPath = UIBezierPath(roundedRect: view.bounds, cornerRadius: 0)
        screenPath.append(path)
        shapeLayer.path = screenPath.cgPath
        scannerViewController.view.layer.addSublayer(shapeLayer)

        view.addSubview(scanBorderView)
        scanBorderView.layer.borderColor = CGColor.white()
        scanBorderView.layer.borderWidth = 1
        scanBorderView.applyCornerRadius(radius: 3)
        scanBorderView.frame = centerframe

        scannerView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(scannerView)
        NSLayoutConstraint.activate([
            scannerView.topAnchor.constraint(equalTo: scanBorderView.topAnchor, constant: 2),
            scannerView.leadingAnchor.constraint(equalTo: scanBorderView.leadingAnchor),
            scannerView.trailingAnchor.constraint(equalTo: scanBorderView.trailingAnchor),
            scannerView.heightAnchor.constraint(equalToConstant: 2)
        ])

        hintTextLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(hintTextLabel)
        NSLayoutConstraint.activate([
            hintTextLabel.topAnchor.constraint(equalTo: view.topAnchor, constant: centerframe.maxY + 24),
            hintTextLabel.leadingAnchor.constraint(equalTo: view.layoutMarginsGuide.leadingAnchor),
            hintTextLabel.trailingAnchor.constraint(equalTo: view.layoutMarginsGuide.trailingAnchor)
        ])
    }

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        scannerView.layer.removeAllAnimations()
        let anim = CABasicAnimation(keyPath: "transform.translation.y")
        anim.fromValue = 0
        anim.toValue = scanBorderView.frame.height
        anim.duration = 1.5
        anim.repeatCount = .infinity
        scannerView.layer.add(anim, forKey: "transform.translation.y")
    }
}

// MARK: - ScannerViewControllerDelegate

extension MaskScanViewController: ScannerViewControllerDelegate {
    func scannerViewController(_ scannerViewController: ScannerViewController,

                               didOutput readableObjects: [AVMetadataMachineReadableCodeObject],
                               from connection: AVCaptureConnection) {
        #if !targetEnvironment(simulator)
        guard let rawCode = readableObjects.first,
              let code = scannerViewController.previewView.videoPreviewLayer
              .transformedMetadataObject(for: rawCode)
              as? AVMetadataMachineReadableCodeObject
        else {
            return
        }

        let feedbackGenerator = UIImpactFeedbackGenerator(style: .light)
        feedbackGenerator.impactOccurred()

        if let url = code.stringValue {
            dismiss(animated: true) {
                switch self.restrictedScanType {
                case .onlyPersona:
                    let success = self.schemeService.handleMaskPersonaScheme(scheme: url)
                    if !success {
                        self.showOnlyScanPersonaAlert()
                    }
                case .common:
                    let success = self.schemeService.handleScheme(scheme: url)
                    if !success {
                        self.showScanFailedAlert()
                    }
                }
            }
        }
        scannerViewController.captureSession.stopRunning()
        #endif
        dismiss(animated: true, completion: nil)
    }
}

extension MaskScanViewController {
    private func showOnlyScanPersonaAlert() {
        let alertController = AlertController(
            title: L10n.Common.Alert.OnlyScanPersona.title,
            message: L10n.Common.Alert.OnlyScanPersona.description,
            confirmButtonText: L10n.Common.Controls.ok,
            imageType: .error,
            confirmButtonClicked:nil,
            cancelButtonClicked: nil)
        coordinator.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil))
    }
    
    private func showScanFailedAlert() {
        let alertController = AlertController(
            title: L10n.Common.Alert.ScanFailed.title,
            message: L10n.Common.Alert.ScanFailed.description,
            confirmButtonText: L10n.Common.Controls.tryAgain,
            cancelButtonText: L10n.Common.Controls.cancel,
            imageType: .error,
            confirmButtonClicked: { _ in
                self.coordinator.present(scene: .commonScan(type: .common), transition: .modal(animated: true))
            },
            cancelButtonClicked: nil)
        coordinator.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil))
    }
}
