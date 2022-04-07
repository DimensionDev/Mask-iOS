//
//  MaskConnectingSocialViewController.swift
//  Maskbook
//
//  Created by BradGao on 2021/9/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import SafariServices
import SwiftyJSON
import UIKit
import WebExtension_Shim
import WebKit

// swiftlint:disable file_length
class MaskConnectingSocialViewController: BaseViewController {
    var personaIdentifier: String?
    var socialPlatform: ProfileSocialPlatform
    
    private var tabId: MaskbookTab.TabID?
    
    @InjectedProvider(\.maskBrowser)
    private var maskBrowser: MaskBrowser

    @InjectedProvider(\.tabService)
    private var tabService: MaskbookTabService
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator: Coordinator
    
    @InjectedProvider(\.maskMessageRelay)
    private var maskMessageRelay: MaskMessageRelay
    
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    private let decoder = JSONDecoder()
    
    private lazy var webViewScrollDelegate = WebViewScrollViewDelegate(navigationController: self.navigationController)
    
    private var disposeBag = Set<AnyCancellable>()
    
    private var containerViewTopConstraint: NSLayoutConstraint?
    private var containerView: UIView?
    
    // Begin of Connecting related properties
    class ConnectViewModel {
        weak var socialViewController: MaskConnectingSocialViewController?
        var latestDetectedProfile = CurrentValueSubject<[SocialProfile]?, Never>(nil)
        
        private var didPresentLoginAlertPopup = false
        
        private var disposeBag = Set<AnyCancellable>()
        
        var hintBannerView: UIView?
        var hintTextLabel: UILabel?
        
        func createConnectHintBannerView(socialPlatform: ProfileSocialPlatform) -> UIView {
            if let view = hintBannerView {
                return view
            }
            let banner = UIView()
            banner.translatesAutoresizingMaskIntoConstraints = false
            banner.backgroundColor = Asset.Colors.Social.connectHintBannerBg.color
            
            let hintLabel = UILabel()
            hintLabel.translatesAutoresizingMaskIntoConstraints = false
            hintLabel.numberOfLines = 0
            hintLabel.font = FontStyles.BH6
            hintLabel.textColor = Asset.Colors.Social.connectHintText.color
            hintTextLabel = hintLabel
            
            updateHintLabelNotLoggedIn(socialPlatform: socialPlatform)

            let closeButton = UIButton()
            closeButton.translatesAutoresizingMaskIntoConstraints = false
            closeButton.setImage(Asset.Images.Scene.Social.connectHintBannerClose.image.withRenderingMode(.alwaysTemplate), for: .normal)
            closeButton.tintColor = Asset.Colors.Social.connectHintText.color
            closeButton.addTarget(self, action: #selector(closeButtonDidClicked), for: .touchUpInside)
            
            banner.addSubview(hintLabel)
            banner.addSubview(closeButton)
            NSLayoutConstraint.activate([
                closeButton.widthAnchor.constraint(equalToConstant: 24),
                closeButton.heightAnchor.constraint(equalToConstant: 24),
                closeButton.trailingAnchor.constraint(equalTo: banner.trailingAnchor, constant: -LayoutConstraints.trailing),
                closeButton.centerYAnchor.constraint(equalTo: banner.centerYAnchor)
            ])
            
            NSLayoutConstraint.activate([
                hintLabel.leadingAnchor.constraint(equalTo: banner.leadingAnchor, constant: LayoutConstraints.leading),
                hintLabel.trailingAnchor.constraint(equalTo: closeButton.leadingAnchor, constant: -20),
                hintLabel.topAnchor.constraint(equalTo: banner.topAnchor, constant: 12),
                hintLabel.bottomAnchor.constraint(equalTo: banner.bottomAnchor, constant: -12)
            ])
            
            hintBannerView = banner
            return banner
        }
        
        @objc
        private func closeButtonDidClicked() {
            if let viewController = socialViewController,
                let topConstraint = viewController.containerViewTopConstraint,
               let containerView = viewController.containerView {
                NSLayoutConstraint.deactivate([topConstraint])
                let newTopConstraint = containerView.topAnchor.constraint(equalTo: viewController.view!.safeAreaLayoutGuide.topAnchor)
                socialViewController?.containerViewTopConstraint = newTopConstraint
                NSLayoutConstraint.activate([
                    newTopConstraint
                ])
            }
            
            hintBannerView?.removeFromSuperview()
            hintBannerView = nil
            hintTextLabel = nil
            
            socialViewController?.view.layoutIfNeeded()
        }
        
        func updateHintLabelNotLoggedIn(socialPlatform: ProfileSocialPlatform) {
            hintTextLabel?.text = L10n.Scene.Social.connectHint(socialPlatform.title)
        }
        
        func updateHintLabelConnected(profiles: [SocialProfile]) {
            let accountNames = profiles
                .map { "@\($0.userId)" }
                .joined(separator: " ")
            let text = L10n.Scene.Social.connectHintLoggedIn(accountNames)
            let paragraphStyle = NSMutableParagraphStyle()
            paragraphStyle.lineHeightMultiple = 1.07
            let normalAttributes: [NSAttributedString.Key: Any] = [
                .paragraphStyle: paragraphStyle
            ]
            let hintText = NSAttributedString(string: text, attributes: normalAttributes)
            hintTextLabel?.attributedText = hintText
        }
    }
    
    var connectViewModel = ConnectViewModel()
    
    // End of Connecting related properties
    
    init(socialPlatform: ProfileSocialPlatform, personaIdentifier: String?) {
        self.socialPlatform = socialPlatform
        self.personaIdentifier = personaIdentifier
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

extension MaskConnectingSocialViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupNavigationBar()
        
        bindEvents()
        
        connectViewModel.socialViewController = self
        if connectViewModel.hintBannerView == nil {
            let banner = connectViewModel.createConnectHintBannerView(socialPlatform: socialPlatform)
            view.addSubview(banner)
            NSLayoutConstraint.activate([
                banner.leadingAnchor.constraint(equalTo: view.leadingAnchor),
                banner.trailingAnchor.constraint(equalTo: view.trailingAnchor),
                banner.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor)
            ])
            view.layoutIfNeeded()
        }
        
        loadSite(socialPlatform)
    }
    
    private func setupNavigationBar() {
        navigationItem.title = socialPlatform.shortName
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.Social.iconMaskDashboard.image, for: .normal)
        button.addTarget(self, action: #selector(dashboardBarButtonItem), for: .touchUpInside)
        navigationItem.rightBarButtonItems = [.fixedSpace(14),
                                              UIBarButtonItem(customView: button)]
    }

    private func loadSite(_ socialPlatform: ProfileSocialPlatform) {
        switchTo(socialPlatform: socialPlatform)
    }
    
    private func switchTo(socialPlatform: ProfileSocialPlatform) {
        let platformUrl = socialPlatform.homeUrl

        let tab = maskBrowser.browser.tabs.create(
            options: WebExtension.Browser.Tabs.Create.Options(active: false, url: platformUrl.absoluteString),
            tabDelegate: self,
            tabDownloadDelegate: self)
        let maskbookTab = tabService.register(for: tab)
        tabId = maskbookTab.tabID
        containerView = maskbookTab.containerView
        view.addSubview(maskbookTab.containerView)
        maskbookTab.containerView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            maskbookTab.containerView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            maskbookTab.containerView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            maskbookTab.containerView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        
        if let banner = connectViewModel.hintBannerView {
            containerViewTopConstraint = maskbookTab.containerView.topAnchor.constraint(equalTo: banner.bottomAnchor)
        } else {
            containerViewTopConstraint = maskbookTab.containerView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor)
        }
        
        NSLayoutConstraint.activate([
            containerViewTopConstraint!
        ])
        
        maskbookTab.maskbookUIDelegateShim.delegate = self
        maskbookTab.maskbookNavigationDelegateShim.delegate = self
        maskbookTab.tab?.webView.scrollView.delegate = webViewScrollDelegate
    }
    
    private func bindEvents() {
        maskBrowser.webPublicApisMessageResolver.delegate = self
        connectViewModel.latestDetectedProfile
            .removeDuplicates()
            .compactMap { $0 }
            .eraseToAnyPublisher()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] profiles in
                guard let personaIdentifier = self?.personaIdentifier else { return }
                self?.presentConnectPopupIfNeeded(profiles: profiles, personaIdentifier: personaIdentifier)
            }
            .store(in: &disposeBag)
    }
}

extension MaskConnectingSocialViewController {
    func presentConnectPopupIfNeeded(profiles: [SocialProfile], personaIdentifier: String) {
        if profiles.first?.connected == true {
            connectViewModel.updateHintLabelConnected(profiles: profiles)
        } else {
            connectViewModel.updateHintLabelNotLoggedIn(socialPlatform: socialPlatform)
            view.layoutIfNeeded()
        }
        if profiles.contains(where: { $0.connected == false }) {
            coordinator.present(
                scene: .detectProfiles(profiles: profiles, personaIdentifier: personaIdentifier, delegate: self),
                transition: .panModel(animated: true)
            )
        }
    }
}

// MARK: - SocialProfileDetectViewControllerDelegate
extension MaskConnectingSocialViewController: SocialProfileDetectViewControllerDelegate {
    func socialProfileDetectViewController(_ controller: SocialProfileDetectViewController, didConnect profiles: [SocialProfile]) {
        controller.dismiss(animated: true, completion: nil)
        guard let personaIdentifier = personaIdentifier else { return }
        DispatchQueue.main.async {
            profiles.forEach {
                PersonaManager.attachProfile(personaIdentifier: personaIdentifier,
                                             profileIdentifier: $0.identifier)
            }
            guard let tabId = self.tabId else { return }
            self.tabService.tabs[tabId]?.reload()
            self.connectViewModel.updateHintLabelConnected(profiles: profiles)
        }
    }
}

// MARK: - TabDelegate
extension MaskConnectingSocialViewController: TabDelegate {
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
extension MaskConnectingSocialViewController: TabDownloadsDelegate {
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
extension MaskConnectingSocialViewController: MaskbookUIDelegateShimDelegate {
    func maskbookViewController() -> UIViewController? {
        self
    }

    func navigationDidChange(url: URL?) { }
}

// MARK: - MaskbookNavigationDelegateShimDelegate
extension MaskConnectingSocialViewController: MaskbookNavigationDelegateShimDelegate {
    func contentPlugin() -> Plugin {
        maskBrowser.contentScriptPlugin
    }
    
    func navigationDidFinish(_ webView: WKWebView, navigation: WKNavigation) { }
}
// swiftlint:enable file_length

extension MaskConnectingSocialViewController {
    @objc
    override func prepareLeftNavigationItems() {
        self.navigationItem.leftBarButtonItems = [
            .fixedSpace(14)
        ]
    }
    
    @objc
    private func dashboardBarButtonItem() {
        navigationController?.popViewController(animated: true)
    }
}

extension MaskConnectingSocialViewController: WebMessageResolverDelegate {
    func webPublicApiMessageResolver(resolver: WebPublicApiMessageResolver,
                                     profilesDetect profileIdentifiers: [String]) {
        guard let personaRecord = personaManager.currentPersona.value else {
            return
        }
        guard let persona = Persona(fromRecord: personaRecord) else { return }

        let profiles = profileIdentifiers.compactMap { detectIdentifier -> SocialProfile? in
            guard var profile = SocialProfile(profileIdentifier: detectIdentifier)
            else { return nil }
            if persona.linkedProfiles.contains(where: { identifier, details in
                identifier == detectIdentifier &&
                details.connectionConfirmState == .confirmed
            }) {
                profile.connected = true
            }
            return profile
        }
        connectViewModel.latestDetectedProfile.accept(profiles)
    }
}
