//
//  ScannerHandler.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import AVFoundation
import UIKit

public struct ScanResult {
    enum ScanType {
        case string
        case walletConnect
        case otherProtocol
    }
    
    var scanContent: String?
    var strCodeType: ScanType
}

class ScannerHandler: NSObject, AVCaptureMetadataOutputObjectsDelegate {
    let device = AVCaptureDevice.default(for: AVMediaType.video)
    var input: AVCaptureDeviceInput?
    var output: AVCaptureMetadataOutput
    var previewLayer: AVCaptureVideoPreviewLayer?

    let session = AVCaptureSession()
    var arrayResult = [ScanResult]()

    var completionBlock: ([ScanResult]) -> Void
    
    init(videoPreView: UIView,
         completion: @escaping (([ScanResult]) -> Void)) {
         completionBlock = completion
         output = AVCaptureMetadataOutput()

        super.init()
        
        guard let device = device else {
            return
        }
        do {
            input = try AVCaptureDeviceInput(device: device)
        } catch let error as NSError {
            print("AVCaptureDeviceInput(): \(error)")
        }
        guard let input = input else {
            return
        }
        
        if session.canAddInput(input) {
            session.addInput(input)
        }

        if session.canAddOutput(output) {
            session.addOutput(output)
        }
        
        session.sessionPreset = AVCaptureSession.Preset.high

        output.setMetadataObjectsDelegate(self, queue: DispatchQueue.main)

        output.metadataObjectTypes = [.qr, .code128, .code39, .code93, .code39Mod43, .ean8, .ean13, .upce, .pdf417, .aztec]

        previewLayer = AVCaptureVideoPreviewLayer(session: session)
        previewLayer?.videoGravity = AVLayerVideoGravity.resizeAspectFill

        var frame: CGRect = videoPreView.frame
        frame.origin = CGPoint.zero
        previewLayer?.frame = frame
        videoPreView.layer.insertSublayer(previewLayer!, at: 0)

        if device.isFocusPointOfInterestSupported && device.isFocusModeSupported(.continuousAutoFocus) {
            do {
                try input.device.lockForConfiguration()
                input.device.focusMode = AVCaptureDevice.FocusMode.continuousAutoFocus
                input.device.unlockForConfiguration()
            } catch let error as NSError {
                print("device.lockForConfiguration(): \(error)")
            }
        }
    }

    public func metadataOutput(_ output: AVCaptureMetadataOutput,
                               didOutput metadataObjects: [AVMetadataObject],
                               from connection: AVCaptureConnection) {
        captureOutput(output, didOutputMetadataObjects: metadataObjects, from: connection)
    }
    
    func startRunning() {
        if !session.isRunning {
            session.startRunning()
        }
    }
    
    func stopRunning() {
        if session.isRunning {
            session.stopRunning()
        }
    }
    
    open func captureOutput(_ captureOutput: AVCaptureOutput,
                            didOutputMetadataObjects metadataObjects: [Any],
                            from connection: AVCaptureConnection!) {
        for current in metadataObjects {
            guard let code = current as? AVMetadataMachineReadableCodeObject else {
                continue
            }
            
            let resultStr = code.stringValue
           
            // todo :More types can be supported
            
            #if !targetEnvironment(simulator)
            
            arrayResult.append(ScanResult(scanContent: resultStr,
                                          strCodeType: .string))
            #endif
            
            if !arrayResult.isEmpty {
                stopRunning()
                completionBlock(arrayResult)
            }
        }
    }
}
