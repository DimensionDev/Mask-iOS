//
//  ScannerLineViewController.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import AVFoundation
import Foundation
import UIKit

public protocol ScannerLineViewControllerDelegate: NSObjectProtocol {
     func scanFinished(scanResult: ScanResult?, error: String?)
}

class ScannerLineViewController: UIViewController {
    weak var scanResultDelegate: ScannerLineViewControllerDelegate?
    var scanHandler: ScannerHandler?
    
    lazy var qRScanView: ScannerBackView = {
        let view = ScannerBackView(frame: view.frame)
        return view
    }()

    var arrayCodeType: [AVMetadataObject.ObjectType]?

    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = UIColor.black
        edgesForExtendedLayout = .all
        view.addSubview(qRScanView)
        NSLayoutConstraint.activate([
            qRScanView.topAnchor.constraint(equalTo: view.topAnchor)
        ])
        startScan()
    }

    func startScan() {
       if scanHandler == nil {
            scanHandler = ScannerHandler(videoPreView: view,
                                         completion: { [weak self] arrayResult in
                                         guard let self = self else { return }
                                         self.handleScanningResults(arrayResult)
            })
        }
        
        qRScanView.startScanAnimation()
        scanHandler?.startRunning()
    }
    
    func handleScanningResults(_ results: [ScanResult]) {
        guard let delegate = scanResultDelegate else {
            fatalError("you must set scanResultDelegate or override this method without super keyword")
        }
                
        if let result = results.first {
            delegate.scanFinished(scanResult: result, error: nil)
        } else {
            delegate.scanFinished(scanResult: nil, error: "no scan result")
        }
        
        navigationController?.popViewController(animated: true)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        navigationController?.navigationBar.subviews.first?.alpha = 0
        navigationController?.navigationBar.isTranslucent = true
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)

        navigationController?.navigationBar.subviews.first?.alpha = 1
        navigationController?.navigationBar.isTranslucent = false
        
        NSObject.cancelPreviousPerformRequests(withTarget: self)
        qRScanView.stopScanAnimation()
        scanHandler?.stopRunning()
    }
}
