//
//  CookieSwitcher.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/5/6.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import WebKit

@MainActor
class CookieSwitcher {

    static let shared = CookieSwitcher()
    
    var needReloadWebView = false
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    func saveOldCookieToCurrentProfile() async {
        if let profile = personaManager.currentProfile.value, !needReloadWebView {
           await saveOldCookieToProfile(profileIdentifier: profile.nonOptionalIdentifier)
        }
    }
    
    func saveOldCookieToProfile(profileIdentifier: String) async {
//        var cookies = HTTPCookieStorage.shared.cookies ?? []
        let cookiesInDataStore =  await WKWebsiteDataStore.default().httpCookieStore.allCookies()
//        cookies.append(contentsOf: cookiesInDataStore)
        ProfileRepository.updateProfileCookies(identifier: profileIdentifier, cookies: cookiesInDataStore)
    }
    
    func setNewCookies() async -> WKWebViewConfiguration? {
        if let cookies = personaManager.currentProfile.value?
                    .cookiesData?.toCookies()
        {
            await CookieSwitcher.switchToCookie(cookies: cookies)
            return await CookieSwitcher.configurationWithCookie()
        }
        return nil
    }
    
    @MainActor
    static func cleanAllCookies() async {
        HTTPCookieStorage.shared.removeCookies(since: Date.distantPast)
        print("All cookies deleted")

        let records = await WKWebsiteDataStore.default().dataRecords(ofTypes: WKWebsiteDataStore.allWebsiteDataTypes())
        for record in records {
            await WKWebsiteDataStore.default().removeData(ofTypes: record.dataTypes, for: [record])
        }
    }
    
    private static func switchToCookie(cookies: [HTTPCookie]) async {
        await cleanAllCookies()
        for cookie in cookies {
            HTTPCookieStorage.shared.setCookie(cookie)
        }
    }
}

extension CookieSwitcher {
    
    @MainActor
    private static func configurationWithCookie() async -> WKWebViewConfiguration {
        let config = WKWebViewConfiguration()
        config.processPool = WKProcessPool()
        guard let cookies = HTTPCookieStorage.shared.cookies else {
            return config
        }
        
        return await withCheckedContinuation { continuation in
            let dataStore = WKWebsiteDataStore.default()
            let waitGroup = DispatchGroup()
            for cookie in cookies {
                waitGroup.enter()
                dataStore.httpCookieStore.setCookie(cookie) { waitGroup.leave() }
            }
            waitGroup.notify(queue: DispatchQueue.main) {
                config.websiteDataStore = dataStore
            }
            continuation.resume(returning: config)
        }
    }
    
    @MainActor
    static func newConfiguration() -> WKWebViewConfiguration {
        let config = WKWebViewConfiguration()
        config.processPool = WKProcessPool()
        return config
    }
}
