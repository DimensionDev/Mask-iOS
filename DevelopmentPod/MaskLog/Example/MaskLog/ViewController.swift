//
//  ViewController.swift
//  MaskLog
//
//  Created by cythb on 01/29/2022.
//  Copyright (c) 2022 cythb. All rights reserved.
//

import MaskLog
import UIKit

class ViewController: UIViewController {
    var log = Logger(label: "io.maskbook.maskbook.logging")
    
    func setUp() {
        LoggingSystem.bootstrap(LoggingOSLog.init)
        log.logLevel = .debug
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setUp()
        
        log.info("setup logging")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

