//
//  AppDelegate.swift
//  Maskbook
//
//  Created by Cirno MainasuK on 2019-6-26.
//  Copyright © 2019 dimension. All rights reserved.
//

import AlamofireNetworkActivityLogger
import Combine
import ConsolePrint
import Firebase
import IQKeyboardManagerSwift
import os
import UIKit
import WebExtension_Shim

#if TouchPreview
import EUMTouchPointView
#endif

#if DEBUG
import MaskWalletCore
#endif

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?
    
    let extensionTabDidFinishLoad = CurrentValueSubject<Bool, Never>(false)

    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator

    @InjectedProvider(\.maskBrowser)
    private var maskBrowser
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager
    
    @InjectedProvider(\.vault)
    private var vault
    
    @InjectedProvider(\.userDefaultSettings)
    private var userDefaultSettings
    
    @InjectedProvider(\.maskMessageRelay)
    private var messageRelay
    
    @InjectedProvider(\.walletConnectServer)
    private var walletConnectServer
    
    @InjectedProvider(\.schemeService)
    private var schemeService
    
    @InjectedProvider(\.backupFileDetectService)
    private var backupFileDetectService
    
    var disposeBag = Set<AnyCancellable>()
    
    var isFisrtLaunch: Bool = false
    
    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        // logging
        setupLogging()
        
        // Window setup
        // use touch window fo scheme Msakbook - TouchPreview

        let window: UIWindow = {
            #if TouchPreview
            return EUMShowTouchWindow(frame: UIScreen.main.bounds)
            #else
            return UIWindow(frame: UIScreen.main.bounds)
            #endif
        }()
        self.window = window
        self.window?.backgroundColor = .black
        self.window?.becomeKey()
        
        if #available(iOS 15.0, *) {
            // Disable section header padding on iOS 15
            UITableView.appearance().sectionHeaderTopPadding = 0
        }
        
        _ = AppContext.shared
        walletAssetManager.connect()
        
        initilizeUserDefault()
        
        // Coordinate to root
        #if DEBUG
        // use XCODE_RUNNING_FOR_PREVIEWS to detect preview proccess
        // skip complex logic for window to ensure preview work as expected
        if ProcessInfo.processInfo.environment["XCODE_RUNNING_FOR_PREVIEWS"] != "1" {
            mainCoordinator.setup(window: window)
        }
        #else
        mainCoordinator.setup(window: window)
        #endif

        // Enable orientation notification for QR scaner
        UIDevice.current.beginGeneratingDeviceOrientationNotifications()
        
        observeExtensionTabDidFinished()
        let tab = maskBrowser.browser.tabs.backgroundTab
        tab.webView.backgroundColor = .clear
        self.window?.addSubview(tab.webView)
        tab.webView.snp.makeConstraints {
            $0.leading.equalTo(-1)
            $0.top.equalTo(-1)
            $0.size.equalTo(1)
        }
        
        #if DEBUG
        NetworkActivityLogger.shared.level = .debug
        NetworkActivityLogger.shared.startLogging()
        #endif

        log.info("App launched")

        let overrideUIStyle = maskUserDefaults.customUserInterfaceStyle
        self.window?.overrideUserInterfaceStyle = overrideUIStyle
        let statusBarStyle: UIStatusBarStyle = overrideUIStyle == .dark
        ? .lightContent
        : .darkContent
        UIApplication.shared.statusBarStyle = statusBarStyle
        
        walletConnectServer.reconnectAllSessions()
        // setup IQKeyboardManager
        IQKeyboardManager.shared.enableAutoToolbar = false
        if let launchOptions = launchOptions {
            if let url = launchOptions[UIApplication.LaunchOptionsKey.url] as? URL {
                handleOpenURL(url: url)
            }
        }
        
        FirebaseApp.configure()
        return true
    }
    
    func applicationDidBecomeActive(_ application: UIApplication) {
        let request = WebExtension.Setting.AppResumeMessage()
        messageRelay.request(request)
    }

    func applicationWillTerminate(_ application: UIApplication) {
        UIDevice.current.endGeneratingDeviceOrientationNotifications()
        let request = WebExtension.Setting.AppSuspendedMessage()
        messageRelay.request(request)
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
        UIDevice.current.beginGeneratingDeviceOrientationNotifications()
        let request = WebExtension.Setting.AppResumeMessage()
        messageRelay.request(request)
        backupFileDetectService.detectBackupFiles()
    }
    
    func applicationWillResignActive(_ application: UIApplication) {
        let request = WebExtension.Setting.AppSuspendedMessage()
        messageRelay.request(request)
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        UIDevice.current.endGeneratingDeviceOrientationNotifications()
        let request = WebExtension.Setting.AppSuspendedMessage()
        messageRelay.request(request)
    }
    
    func application(_ application: UIApplication, handleOpen url: URL) -> Bool {
        handleOpenURL(url: url)
        return true
    }
    
    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        handleOpenURL(url: url)
        return true
    }
    
    func handleOpenURL(url: URL) {
        schemeService.handleURL(url: url)
    }
    
    private func observeExtensionTabDidFinished() {
        NotificationCenter.default.publisher(for: Notification.Name.extensionTabDidFinishLoad)
            .compactMap({ _ in true })
            .bind(to: \.extensionTabDidFinishLoad, on: self)
            .store(in: &disposeBag)
    }
}

extension AppDelegate {
    private func initilizeUserDefault() {
        if userDefaultSettings.appVersion == "2.0.0" {
            isFisrtLaunch = true
        }
        userDefaultSettings.appVersion = UIApplication.appVersion()
        userDefaultSettings.appBuild = UIApplication.appBuild()
        
        vault.getValue(for: .backupPassword)
            .map { $0?.isEmpty == false }
            .receive(on: DispatchQueue.main)
            .sink { [weak self] hasBackupPassword in
                self?.userDefaultSettings.hasBackupPassword = hasBackupPassword
            }
            .store(in: &disposeBag)
    }
}

#if DEBUG
extension UIWindow {
    override open func motionEnded(_ motion: UIEvent.EventSubtype, with event: UIEvent?) {
        super.motionEnded(motion, with: event)

        switch motion {
        case .motionShake:
            guard let topController = UIApplication.getTopViewController() else {
                return
            }
            ExamplePopController(presenter: SheetPresenter(presentStyle: .translucent)).show(by: topController)

        default:
            break
        }
    }
}
#endif
