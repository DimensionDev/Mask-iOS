//
//  MaskbookUIDelegateShim.swift
//  Maskbook
//
//  Created by MainasuK Cirno on 2020/3/5.
//  Copyright © 2020 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim_Swift
import WebKit

protocol MaskbookUIDelegateShimDelegate: AnyObject {
    func maskbookViewController() -> UIViewController?
}

final class MaskbookUIDelegateShim: WKUIDelegateShim {
    weak var delegate: MaskbookUIDelegateShimDelegate?
}

// MARK: - WKUIDelegate

extension MaskbookUIDelegateShim {
    func webView(
        _ webView: WKWebView,
        runJavaScriptAlertPanelWithMessage message: String,
        initiatedByFrame frame: WKFrameInfo,
        completionHandler: @escaping () -> Void
    ) {
        let alertController = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        let okAction = UIAlertAction(title: "OK", style: .default) { _ in
            completionHandler()
        }
        alertController.addAction(okAction)
        delegate?.maskbookViewController()?.present(alertController, animated: true, completion: nil)
    }

    func webView(
        _ webView: WKWebView,
        runJavaScriptTextInputPanelWithPrompt prompt: String,
        defaultText: String?,
        initiatedByFrame frame: WKFrameInfo,
        completionHandler: @escaping (String?) -> Void
    ) {
        let alertController = UIAlertController(title: prompt, message: defaultText, preferredStyle: .alert)
        let cancelAction = UIAlertAction(title: "Cancel", style: .cancel) { _ in
            completionHandler(nil)
        }
        alertController.addAction(cancelAction)
        let copyAction = UIAlertAction(title: "Copy", style: .default) { _ in
            UIPasteboard.general.string = defaultText
            completionHandler(prompt)
        }
        alertController.addAction(copyAction)
        delegate?.maskbookViewController()?.present(alertController, animated: true, completion: nil)
    }

    func webView(
        _ webView: WKWebView,
        runJavaScriptConfirmPanelWithMessage message: String,
        initiatedByFrame frame: WKFrameInfo,
        completionHandler: @escaping (Bool) -> Void
    ) {
        let alertController = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        let confirmAction = UIAlertAction(title: "Confirm", style: .default) { _ in
            completionHandler(true)
        }
        alertController.addAction(confirmAction)
        let cancelAction = UIAlertAction(title: "Cancel", style: .cancel) { _ in
            completionHandler(false)
        }
        alertController.addAction(cancelAction)
        delegate?.maskbookViewController()?.present(alertController, animated: true, completion: nil)
    }
}
// swiftlint:enable line_length
