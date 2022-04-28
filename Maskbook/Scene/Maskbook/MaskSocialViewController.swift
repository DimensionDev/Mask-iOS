//
//  MaskSocialViewController.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import SafariServices
import SwiftyJSON
import UIKit
import WebExtension_Shim_Swift
import WebKit

class MaskSocialViewController: BaseViewController {
    var socialPlatform: ProfileSocialPlatform
    
    private var tabId: MaskbookTab.TabID?
    
    @InjectedProvider(\.maskBrowser)
    var maskBrowser: MaskBrowser

    @InjectedProvider(\.tabService)
    private var tabService: MaskbookTabService
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator: Coordinator
    
    @InjectedProvider(\.maskMessageRelay)
    private var maskMessageRelay: MaskMessageRelay
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    private lazy var webViewScrollDelegate = WebViewScrollViewDelegate(navigationController: self.navigationController)
    
    lazy var webPublicApisMessageResolver: WebPublicApiMessageResolver = {
        return WebPublicApiMessageResolver(webView: nil)
    }()
    
    private let decoder = JSONDecoder()
    
//    private var latestDetectedProfile = CurrentValueSubject<SocialProfile?, Never>(nil)
    
//    private var didPresentLoginAlertPopup = false
    private var disposeBag = Set<AnyCancellable>()
    private let viewModel = MaskSocialViewModel()
    
    init(socialPlatform: ProfileSocialPlatform) {
        self.socialPlatform = socialPlatform
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    deinit {
        if let tabId = tabId, let tab = maskBrowser.browser.tabs.remove(id: tabId) {
            tabService.resign(for: tab)
        }
    }
}

extension MaskSocialViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupNavigationBar()
        loadSite(socialPlatform)
        observeNotifications()
        viewModel.backupReminder.sink { [weak self] _ in
            self?.alertBackup()
        }
        .store(in: &disposeBag)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)

        viewModel.checkIfNeedBackup()
    }
    
    func refreshTitle() {
        navigationItem.title = socialPlatform.shortName
    }
    
    private func setupNavigationBar() {
        navigationItem.title = socialPlatform.shortName
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.Social.iconMaskDashboard.image, for: .normal)
        button.addTarget(self, action: #selector(dashboardBarButtonItem), for: .touchUpInside)
        navigationItem.rightBarButtonItems = [.fixedSpace(14),
                                              UIBarButtonItem(customView: button)]
    }
    
    private func observeNotifications() {
        NotificationCenter.default.publisher(for: Notification.Name.connectingViewWillDisappear)
            .sink { [weak self] _ in
                self?.reloadCurrentTab()
            }
            .store(in: &disposeBag)
    }
    
    private func reloadCurrentTab() {
        if let tabId = tabId, let tab = tabService.tabs[tabId] {
            tab.reload()
        }
    }

    @objc
    private func dashboardBarButtonItem() {
        coordinator.present(scene: .mainTab(selectedTab: .personas),
                            transition: .modal(animated: true,
                                               adaptiveDelegate: self))
    }
    
    @objc
    private func refreshBarButtonItemDidClicked() {
        if let tabId = tabId {
            tabService.tabs[tabId]?.reload()
        }
    }
    
    private func loadSite(_ socialPlatform: ProfileSocialPlatform) {
        self.socialPlatform = socialPlatform
        switchTo(socialPlatform: socialPlatform)
    }
    
    private func alertBackup() {
        coordinator.present(
            scene: .backupReminder,
            transition: .panModel(animated: true)
        )
    }
    
    func switchTo(socialPlatform: ProfileSocialPlatform) {
        refreshTitle()
        if let tabId = tabId, let tab = maskBrowser.browser.tabs.remove(id: tabId) {
            tabService.resign(for: tab)
        }
        let platformUrl = socialPlatform.homeUrl

        let tab = maskBrowser.browser.tabs.create(
            options: WebExtension.Browser.Tabs.Create.Options(active: false, url: platformUrl.absoluteString),
            tabDelegate: self,
            tabDownloadDelegate: self)
        let maskbookTab = tabService.register(for: tab)
        tabId = maskbookTab.tabID
        view.addSubview(maskbookTab.containerView)
        maskbookTab.containerView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            maskbookTab.containerView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            maskbookTab.containerView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            maskbookTab.containerView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            maskbookTab.containerView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        
        maskbookTab.maskbookUIDelegateShim.delegate = self
        maskbookTab.maskbookNavigationDelegateShim.delegate = self
        maskbookTab.tab?.webView.scrollView.delegate = webViewScrollDelegate
    }
}

// MARK: - TabDelegate
extension MaskSocialViewController: TabDelegate {
    func uiDelegateShim(for tab: Tab) -> WKUIDelegateShim? {
        let maskbookTab = tabService.register(for: tab)
        maskbookTab.maskbookUIDelegateShim.delegate = self
        return maskbookTab.maskbookUIDelegateShim
    }

    func navigationDelegateShim(for tab: Tab) -> WKNavigationDelegateShim? {
        let maskbookTab = tabService.register(for: tab)
        maskbookTab.maskbookNavigationDelegateShim.delegate = self
        return maskbookTab.maskbookNavigationDelegateShim
    }

    func customScriptMessageHandlerNames(for tab: Tab) -> [String] {
        return [MaskBrowser.maskbookJsonRPCScheme]
    }

    func tab(_ tab: Tab, shouldOpenExternallyForURL url: URL) -> Bool {
        guard let plugin = tab.plugin else { return false }
        switch plugin.openMode(for: url) {
        case .default:
            let request = URLRequest(url: url)
            tab.webView.load(request)
            return false

        case .externalWebView:
            let safariViewController = SFSafariViewController(url: url)
            view.window?.rootViewController?.present(safariViewController, animated: true, completion: nil)
            return true

        case .application:
            if UIApplication.shared.canOpenURL(url) {
                UIApplication.shared.open(url) { [weak self] result in
                    #warning("L10n")
                    if !result {
                        let alertController = UIAlertController(title: nil, message: "Fail to open the link", preferredStyle: .alert)
                        let okAction = UIAlertAction(title: "OK", style: .default) { _ in
                        }
                        alertController.addAction(okAction)
                        self?.view.window?.rootViewController?.present(alertController, animated: true, completion: nil)
                    }
                }
            } else {
                let alertController = UIAlertController(title: nil, message: "No available app to handle the request", preferredStyle: .alert)
                let okAction = UIAlertAction(title: "OK", style: .default) { _ in }
                alertController.addAction(okAction)
                view.window?.rootViewController?.present(alertController, animated: true, completion: nil)
            }
            return true
        }
    }

    func tab(_ tab: Tab, userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if WebPublicApiMessageResolver.canResolve(message: message) {
            webPublicApisMessageResolver.resolve(message: message)
            return
        }
        guard let messageBody = JSON(rawValue: message.body)?.rawString() else { return }
        guard let messageData = messageBody.data(using: .utf8),
              let result = try? decoder.decode(MaskWebMessageResult.self, from: messageData) else { return }
        maskMessageRelay.resolve(id: result.id, result: result)
    }

    func tab(_ tab: Tab, shouldActive: Bool) {
        guard shouldActive else { return }
        if tabId == nil {
            tabId = tab.id
        }
//        tabService.active(tab: tab)
    }

    func tab(_ tab: Tab, webViewWillRemoveFromSuperview webView: WKWebView) {
        tabService.resign(for: tab)
    }

    func tab(_ tab: Tab, localStorageManagerForExtension id: String) -> LocalStorageManager? {
        return LocalStorageManager(delegate: AppContext.shared.webExtensionCoreDataStackBridge, extensionID: id)
    }

    func tab(_ tab: Tab, pluginResourceProviderForURL url: URL) -> PluginResourceProvider? {
        switch url.scheme {
        case "holoflows-extension": return maskBrowser.jsResourceManager
        case "holoflows-blob":      return maskBrowser.blobResourceManager
        default:                    return nil
        }
    }
}

// MARK: - TabDownloadsDelegate
extension MaskSocialViewController: TabDownloadsDelegate {
    func tab(_ tab: Tab, didDownloadBlobWithOptions options: WebExtension.Browser.Downloads.Download.Options, result: Result<(Data, URLResponse), Error>) {
        guard let (data, _) = try? result.get() else {
            return
        }

        let temporaryDirectory = FileManager.default.temporaryDirectory
        let fileURL = temporaryDirectory.appendingPathComponent(options.filename ?? "\(options.url).json")
        do {
            try FileManager.default.createDirectory(at: temporaryDirectory, withIntermediateDirectories: true, attributes: nil)
            try data.write(to: fileURL)
        } catch {
            assertionFailure(error.localizedDescription)
            return
        }

        let activityViewController = UIActivityViewController(activityItems: [fileURL], applicationActivities: nil)
        if let presenter = activityViewController.popoverPresentationController {
            presenter.sourceView = view
            presenter.sourceRect = CGRect(origin: view.center, size: .zero)
            presenter.permittedArrowDirections = []
        }
        present(activityViewController, animated: true, completion: nil)
    }
}

// MARK: - MaskbookUIDelegateShimDelegate
extension MaskSocialViewController: MaskbookUIDelegateShimDelegate {
    func maskbookViewController() -> UIViewController? {
        self
    }

    func navigationDidChange(url: URL?) { }
}

// MARK: - MaskbookNavigationDelegateShimDelegate
extension MaskSocialViewController: MaskbookNavigationDelegateShimDelegate {
    func contentPlugin() -> Plugin {
        maskBrowser.contentScriptPlugin
    }
    
    func navigationDidFinish(_ webView: WKWebView, navigation: WKNavigation) { }
}

extension MaskSocialViewController: UIAdaptivePresentationControllerDelegate {
    func presentationControllerWillDismiss(_ presentationController: UIPresentationController) {
        guard settings.currentProfileSocialPlatform != socialPlatform else { return }
        socialPlatform = settings.currentProfileSocialPlatform
        switchTo(socialPlatform: settings.currentProfileSocialPlatform )
    }
    
    func adaptivePresentationStyle(for controller: UIPresentationController,
                                   traitCollection: UITraitCollection)
    -> UIModalPresentationStyle {
        return .overFullScreen
    }
}

extension MaskSocialViewController {
    // remove backButton on this controller in any scene
    @objc
    override func prepareLeftNavigationItems() {
        self.navigationItem.leftBarButtonItems = []
    }
}
