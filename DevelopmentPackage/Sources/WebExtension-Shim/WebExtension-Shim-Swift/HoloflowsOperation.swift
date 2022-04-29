//
//  HoloflowsOperation.swift
//  WebExtension-Shim
//
//  Created by BradGao on 2021/7/2.
//

import UIKit
import WebKit

class HoloflowsOperation: Operation {
    let script: String
    weak var webView: WKWebView?
    
    private var _finished = false
    private var _executing = false
    
    init(script: String, webView: WKWebView) {
        self.script = script
        self.webView = webView
    }
    
    override var isFinished: Bool {
        return _finished
    }
    
    override var isExecuting: Bool {
        return _executing
    }
    
    override func start() {
        if isCancelled {
            completeOperation()
            return
        }
        willChangeValue(for: \.isExecuting)
        Thread.detachNewThreadSelector(#selector(main), toTarget: self, with: nil)
        _executing = true
        didChangeValue(for: \.isExecuting)
    }
    
    override func main() {
        guard !isCancelled else { return }
        DispatchQueue.main.async { [weak self] in
            guard let `self` = self, let webView = self.webView else {
                self?.completeOperation()
                return
            }
            webView.evaluateJavaScript(self.script) { data, error in
                self.completeOperation()
            }
        }
    }
    
    private func completeOperation() {
        willChangeValue(for: \.isFinished)
        _finished = true
        didChangeValue(for: \.isFinished)
    }
}
