//
//  MaskbookTab.swift
//  Maskbook
//
//  Created by MainasuK Cirno on 2020/3/5.
//  Copyright © 2020 dimension. All rights reserved.
//

import Combine
import os
import UIKit
import WebExtension_Shim
import WebKit

final class MaskbookTab: NSObject {
    typealias TabID = Int
    
    private(set) var disposeBag = Set<AnyCancellable>()
    let viewModel = MaskbookTabViewModel()
    
    weak var tab: Tab?
    let tabID: TabID
    
    let containerView = UIView(frame: CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height))
    
    private(set) lazy var webViewNavigationFailureDescriptionView: WebViewNavigationFailureDescriptionView = {
        let view = WebViewNavigationFailureDescriptionView()
        view.delegate = self
        return view
    }()
    let activityIndicatorView = UIActivityIndicatorView(style: .medium)
    let progressView = UIProgressView(progressViewStyle: .bar)

    let maskbookUIDelegateShim: MaskbookUIDelegateShim
    let maskbookNavigationDelegateShim: MaskbookNavigationDelegateShim
    
    init(tab: Tab) {
        self.tab = tab
        self.tabID = tab.id
        self.maskbookUIDelegateShim = MaskbookUIDelegateShim(tab: tab)
        self.maskbookNavigationDelegateShim = MaskbookNavigationDelegateShim(tab: tab)
        containerView.tag = tab.id

        super.init()
        
        containerView.addSubview(tab.webView)
        tab.webView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tab.webView.topAnchor.constraint(equalTo: containerView.topAnchor),
            tab.webView.leadingAnchor.constraint(equalTo: containerView.leadingAnchor),
            tab.webView.trailingAnchor.constraint(equalTo: containerView.trailingAnchor),
            tab.webView.bottomAnchor.constraint(equalTo: containerView.bottomAnchor)
        ])

        tab.webView.allowsBackForwardNavigationGestures = true
        
        // pin activity indicator to center
        activityIndicatorView.translatesAutoresizingMaskIntoConstraints = false
        containerView.addSubview(activityIndicatorView)
        NSLayoutConstraint.activate([
            activityIndicatorView.centerXAnchor.constraint(equalTo: containerView.centerXAnchor),
            activityIndicatorView.centerYAnchor.constraint(equalTo: containerView.centerYAnchor)
        ])
        activityIndicatorView.hidesWhenStopped = true
        activityIndicatorView.startAnimating()

        // add error page behind progress view
        webViewNavigationFailureDescriptionView.translatesAutoresizingMaskIntoConstraints = false
        containerView.addSubview(webViewNavigationFailureDescriptionView)
        NSLayoutConstraint.activate([
            webViewNavigationFailureDescriptionView.topAnchor.constraint(equalTo: containerView.topAnchor),
            webViewNavigationFailureDescriptionView.leadingAnchor.constraint(equalTo: containerView.leadingAnchor),
            webViewNavigationFailureDescriptionView.trailingAnchor.constraint(equalTo: containerView.trailingAnchor),
            webViewNavigationFailureDescriptionView.bottomAnchor.constraint(equalTo: containerView.bottomAnchor)
        ])
        
        // pin progress view to top
        progressView.translatesAutoresizingMaskIntoConstraints = false
        containerView.addSubview(progressView)
        NSLayoutConstraint.activate([
            progressView.topAnchor.constraint(equalTo: containerView.topAnchor),
            progressView.leadingAnchor.constraint(equalTo: containerView.leadingAnchor),
            progressView.trailingAnchor.constraint(equalTo: containerView.trailingAnchor)
        ])

        // setup observer
        tab.webView.addObserver(self, forKeyPath: #keyPath(WKWebView.estimatedProgress), options: [.initial, .new, .old], context: nil)
        
        viewModel.requestURLString
            .assign(to: \.requestURLLabel.text, on: webViewNavigationFailureDescriptionView)
            .store(in: &disposeBag)

        viewModel.errorDescription.asDriver()
            .assign(to: \.errorDescriptionLabel.text, on: webViewNavigationFailureDescriptionView)
            .store(in: &disposeBag)

        viewModel.shouldFailureDescriptionHidden.asDriver()
            .assign(to: \.isHidden, on: webViewNavigationFailureDescriptionView)
            .store(in: &disposeBag)
    }
    
    deinit {
        for subView in containerView.subviews {
            if let webView = subView as? WKWebView {
                webView.removeObserver(self, forKeyPath: #keyPath(WKWebView.estimatedProgress))
            }
            subView.removeFromSuperview()
        }
        
        containerView.removeFromSuperview()
    }
}

// MARK: - KVO
extension MaskbookTab {
    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey: Any]?, context: UnsafeMutableRawPointer?) {
        guard keyPath == #keyPath(WKWebView.estimatedProgress) else { return }
        guard let tab = tab else { return }

        let progress = Float(tab.webView.estimatedProgress)
        progressView.setProgress(progress, animated: progress >= self.progressView.progress)
        print(tab.webView.url?.absoluteURL)
        if progress == 1 {
            UIView.animate(withDuration: 0.3) { [weak self] in
                self?.progressView.alpha = 0.0
            }
        } else {
            self.progressView.alpha = 1.0
        }
    }
}

// MARK: - WebViewNavigationFailureDescriptionViewDelegate
extension MaskbookTab: WebViewNavigationFailureDescriptionViewDelegate {
    func webViewNavigationFailureDescriptionView(
        _ descriptionView: WebViewNavigationFailureDescriptionView,
        retryButtonPressed button: UIButton
    ) {
        guard let request = viewModel.navigationFailure.value?.navigationAction.request else { return }
        tab?.webView.load(request)
    }

    func webViewNavigationFailureDescriptionView(
        _ descriptionView: WebViewNavigationFailureDescriptionView,
        backButtonPressed button: UIButton
    ) {
        if tab?.webView.canGoBack == true {
            tab?.webView.goBack()
        }
    }
    
    func webViewNavigationFailureDescriptionView(
        _ descriptionView: WebViewNavigationFailureDescriptionView,
        timelineButtonPressed button: UIButton
    ) {
        guard let url = URL(string: "https://m.facebook.com") else {
            return
        }
        let request = URLRequest(url: url)
        tab?.webView.load(request)
    }
}

// MARK: - WebvView Navigation
extension MaskbookTab {
    func goBack() {
        guard let tabWebView = tab?.webView else { return }
        if tabWebView.canGoBack {
            tabWebView.goBack()
        }
    }

    func canGoBack() -> Bool {
        guard let tabWebView = tab?.webView else { return false }
        return tabWebView.canGoBack
    }
    
    func reload() {
        guard let tabWebView = tab?.webView else { return }
        tabWebView.reload()
    }
}
