//
//  ScannerViewController.swift
//  Maskbook
//
//  Created by Cirno MainasuK on 2019-7-23.
//  Copyright © 2019 dimension. All rights reserved.
//

import AVFoundation
import UIKit

protocol ScannerViewControllerDelegate: AnyObject {
    func scannerViewController(_ scannerViewController: ScannerViewController,
                               didOutput readableObjects: [AVMetadataMachineReadableCodeObject],
                               from connection: AVCaptureConnection)
}

class ScannerViewController: UIViewController {
    private(set) var captureSession: AVCaptureSession!
    private(set) var previewView = ScannerPreviewView()
    private var videoDeviceInput: AVCaptureDeviceInput?
    private var scannerSetupResult = SetupResult.success

    private(set) var sessionQueue = DispatchQueue(label: "framework.avfoundation.scanner") // Serial queue
    weak var delegate: ScannerViewControllerDelegate?
    var metadataObjectTypes: [AVMetadataObject.ObjectType] = [.qr]
}

extension ScannerViewController {
    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .lightContent
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = UIColor.black
        captureSession = AVCaptureSession()
        previewView.videoPreviewLayer.session = captureSession
        previewView.videoPreviewLayer.videoGravity = .resizeAspectFill

        previewView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(previewView)
        NSLayoutConstraint.activate([
            previewView.topAnchor.constraint(equalTo: view.topAnchor),
            previewView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            previewView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            previewView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])

        grantCameraAuth()
        sessionQueue.async {
            self.configureSession()
        }
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        setNeedsStatusBarAppearanceUpdate()

        sessionQueue.async {
            switch self.scannerSetupResult {
            case .success:
                self.addObserver()
                self.captureSession.startRunning()

            case .cameraNotAuthorized:
                self.authorizationFail()

            case .captureSessionConfigureFail:
                self.configureFailed()
            }
        }
    }

    override func viewDidDisappear(_ animated: Bool) {
        sessionQueue.async {
            if self.captureSession.isRunning {
                self.captureSession.stopRunning()
            }
        }

        super.viewDidDisappear(animated)
    }

    override func viewWillTransition(to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator) {
        super.viewWillTransition(to: size, with: coordinator)

        coordinator.animate(alongsideTransition: { _ in
            let statusBarOrientation = UIApplication.shared.statusBarOrientation
            if statusBarOrientation != .unknown {
                self.previewView.videoPreviewLayer.connection?.videoOrientation = AVCaptureVideoOrientation(orientation: statusBarOrientation)
            } else {
                assertionFailure()
                // do nothing
            }
        }, completion: nil)
    }
}

extension ScannerViewController {
    enum SetupResult {
        case success
        case cameraNotAuthorized
        case captureSessionConfigureFail
    }
}

extension ScannerViewController {
    func grantCameraAuth() {
        switch AVCaptureDevice.authorizationStatus(for: .video) {
        case .authorized:
            break

        case .notDetermined:
            sessionQueue.suspend()
            AVCaptureDevice.requestAccess(for: .video) { granted in
                guard granted else {
                    self.scannerSetupResult = .cameraNotAuthorized
                    self.authorizationFail()
                    return
                }

                self.sessionQueue.resume()
            }

        case .denied, .restricted:
            fallthrough
        @unknown default:
            scannerSetupResult = .cameraNotAuthorized
            authorizationFail()
        }
    }

    func configureSession() {
        guard scannerSetupResult == .success else {
            return
        }

        captureSession.beginConfiguration()
        guard let videoCaptureDevice = AVCaptureDevice.default(for: .video) else {
            assertionFailure()
            return
        }

        do {
            try videoCaptureDevice.lockForConfiguration()
            videoCaptureDevice.videoZoomFactor = 1.75
            videoCaptureDevice.unlockForConfiguration()
        } catch {
            // do nothing
        }

        let videoInput: AVCaptureDeviceInput
        do {
            videoInput = try AVCaptureDeviceInput(device: videoCaptureDevice)
        } catch {
            return
        }

        // Add video input
        if captureSession.canAddInput(videoInput) {
            captureSession.addInput(videoInput)
            videoDeviceInput = videoInput
            DispatchQueue.main.async {
                let statusBarOrientation = UIApplication.shared.statusBarOrientation
                var initialVideoOrientation = AVCaptureVideoOrientation.portrait
                if statusBarOrientation != .unknown {
                    initialVideoOrientation = AVCaptureVideoOrientation(orientation: statusBarOrientation)
                }
                self.previewView.videoPreviewLayer.connection?.videoOrientation = initialVideoOrientation
            }
        } else {
            configureFailed()
            scannerSetupResult = .captureSessionConfigureFail
            captureSession.commitConfiguration()
            return
        }

        // Add metadata output
        let metadataOutput = AVCaptureMetadataOutput()
        if captureSession.canAddOutput(metadataOutput) {
            captureSession.addOutput(metadataOutput)

            metadataOutput.setMetadataObjectsDelegate(self, queue: DispatchQueue.main)
            metadataOutput.metadataObjectTypes = metadataObjectTypes
        } else {
            configureFailed()
            scannerSetupResult = .captureSessionConfigureFail
            captureSession.commitConfiguration()
            return
        }

        captureSession.commitConfiguration()
    }
}

extension ScannerViewController {
    private func focus(with focusMode: AVCaptureDevice.FocusMode, exposureMode: AVCaptureDevice.ExposureMode, atDevicePoint point: CGPoint, monitorSubjectAreaChange: Bool) {
        sessionQueue.async {
            guard let device = self.videoDeviceInput?.device else { return }
            do {
                try device.lockForConfiguration()

                if device.isFocusPointOfInterestSupported, device.isFocusModeSupported(focusMode) {
                    device.focusPointOfInterest = point
                    device.focusMode = focusMode
                }

                if device.isExposurePointOfInterestSupported, device.isExposureModeSupported(exposureMode) {
                    device.exposurePointOfInterest = point
                    device.exposureMode = exposureMode
                }

                device.isSubjectAreaChangeMonitoringEnabled = monitorSubjectAreaChange
                device.unlockForConfiguration()
            } catch {
                assertionFailure(error.localizedDescription)
            }
        }
    }
}

// MARK: - AVCaptureMetadataOutputObjectsDelegate

extension ScannerViewController: AVCaptureMetadataOutputObjectsDelegate {
    func metadataOutput(_ output: AVCaptureMetadataOutput, didOutput metadataObjects: [AVMetadataObject], from connection: AVCaptureConnection) {
        let readableObjects = metadataObjects.compactMap { $0 as? AVMetadataMachineReadableCodeObject }
        delegate?.scannerViewController(self, didOutput: readableObjects, from: connection)
    }
}

extension ScannerViewController {
    private func authorizationFail() {
        let title = NSLocalizedString("No camera permission", comment: "")
        let messaage = NSLocalizedString("Doesn't have permission to use the camera, please change privacy settings", comment: "Alert message when the user has denied access to the camera")
        let alertController = UIAlertController(title: title, message: messaage, preferredStyle: .alert)

        let okTitle = NSLocalizedString("OK", comment: "")
        let okAction = UIAlertAction(title: okTitle, style: .cancel, handler: nil)
        alertController.addAction(okAction)

        let settingsTitle = NSLocalizedString("Settings", comment: "")
        let settingsAction = UIAlertAction(title: settingsTitle, style: .default) { _ in
            let url = URL(string: UIApplication.openSettingsURLString)!
            UIApplication.shared.open(url, options: [:], completionHandler: nil)
        }
        alertController.addAction(settingsAction)

        present(alertController, animated: true, completion: nil)
    }

    private func configureFailed() {
        DispatchQueue.main.async {
            let title = NSLocalizedString("Scanning not supported", comment: "")
            let message = NSLocalizedString("Your device does not support scanning a code from an item. Please use a device with a camera.", comment: "")
            let alertController = UIAlertController(title: title, message: message, preferredStyle: .alert)

            let okTitle = NSLocalizedString("OK", comment: "")
            let okAction = UIAlertAction(title: okTitle, style: .default)
            alertController.addAction(okAction)
            self.present(alertController, animated: true)
        }
        // captureSession = nil
    }
}

extension ScannerViewController {
    private func addObserver() {
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(ScannerViewController.subjectAreaDidChange(_:)),
            name: Notification.Name.AVCaptureDeviceSubjectAreaDidChange,
            object: videoDeviceInput?.device
        )
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(ScannerViewController.sessionRuntimeError(_:)),
            name: NSNotification.Name.AVCaptureSessionRuntimeError,
            object: captureSession
        )
        // Session interrupt handler (iPad split view edge case)
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(ScannerViewController.sessionWasInterrupted(_:)),
            name: NSNotification.Name.AVCaptureSessionWasInterrupted,
            object: captureSession
        )
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(ScannerViewController.sessionInterruptionEnded(_:)),
            name: NSNotification.Name.AVCaptureSessionInterruptionEnded,
            object: captureSession
        )
    }

    @objc private func sessionRuntimeError(_ notification: Notification) {
        sessionQueue.async {
            self.captureSession.startRunning()
        }
    }

    @objc private func subjectAreaDidChange(_ notification: Notification) {
        let center = CGPoint(x: 0.5, y: 0.5)
        focus(with: .autoFocus, exposureMode: .autoExpose, atDevicePoint: center, monitorSubjectAreaChange: false)
    }

    @objc private func sessionWasInterrupted(_ notification: Notification) {}

    @objc private func sessionInterruptionEnded(_ notification: Notification) {}
}

// swiftlint:disable force_cast
final class ScannerPreviewView: UIView {
    var videoPreviewLayer: AVCaptureVideoPreviewLayer {
        return layer as! AVCaptureVideoPreviewLayer
    }

    var session: AVCaptureSession! {
        return videoPreviewLayer.session!
    }

    override class var layerClass: AnyClass {
        return AVCaptureVideoPreviewLayer.self
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        layer.frame = bounds
    }
}

// swiftlint:enable force_cast

final class ScannerShapeView: UIView {
    let shapeLayer = CAShapeLayer()
    let darkView = UIView()

    override init(frame: CGRect) {
        super.init(frame: frame)
        _init()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        _init()
    }

    private func _init() {
        shapeLayer.strokeColor = UIColor.white.cgColor
        shapeLayer.lineWidth = 2.0
        shapeLayer.lineJoin = .round
        shapeLayer.fillColor = UIColor.clear.cgColor
        layer.addSublayer(shapeLayer)

        darkView.translatesAutoresizingMaskIntoConstraints = false
        addSubview(darkView)
        NSLayoutConstraint.activate([
            darkView.topAnchor.constraint(equalTo: topAnchor),
            darkView.leadingAnchor.constraint(equalTo: leadingAnchor),
            darkView.trailingAnchor.constraint(equalTo: trailingAnchor),
            darkView.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])

        darkView.isHidden = true
        darkView.backgroundColor = UIColor.black.withAlphaComponent(0.5)
        darkView.isUserInteractionEnabled = false
    }
}

extension ScannerShapeView {
    func set(corners: [CGPoint]) {
        guard corners.count >= 3 else {
            shapeLayer.path = nil
            darkView.isHidden = true
            return
        }
        shapeLayer.path = {
            let path = UIBezierPath()

            path.move(to: corners.first!)
            corners.dropFirst().forEach {
                path.addLine(to: $0)
            }
            path.close()

            return path.cgPath
        }()
        darkView.isHidden = false
        darkView.layer.mask = {
            let maskLayer = CAShapeLayer()
            maskLayer.frame = darkView.bounds

            let cutoutPath = UIBezierPath(rect: maskLayer.bounds)
            cutoutPath.append(UIBezierPath(cgPath: shapeLayer.path!))

            maskLayer.fillRule = .evenOdd
            maskLayer.lineJoin = .round
            maskLayer.path = cutoutPath.cgPath

            return maskLayer
        }()
    }
}
