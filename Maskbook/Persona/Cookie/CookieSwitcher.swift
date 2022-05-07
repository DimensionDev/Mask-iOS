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

    fileprivate static let shared = CookieSwitcher()
    
    var needReloadWebView = false
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    func saveOldCookieToCurrentProfile() async {
        if let profile = personaManager.currentProfile.value, !needReloadWebView {
           await saveOldCookieToProfile(profileIdentifier: profile.nonOptionalIdentifier)
        }
    }
    
    func saveOldCookieToProfile(profileIdentifier: String) async {
        let cookiesInDataStore =  await WKWebsiteDataStore.default().httpCookieStore.allCookies()
        ProfileRepository.updateProfileCookies(identifier: profileIdentifier, cookies: cookiesInDataStore)
    }
    
    func setNewCookies() async {
        if let cookies = personaManager.currentProfile.value?
                    .cookiesData?.toCookies()
        {
            await CookieSwitcher.cleanAllCookies()
            _ = await CookieSwitcher.configurationWithCookie(cookies: cookies)
        }
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
}

extension CookieSwitcher {
    
    @MainActor
    private static func configurationWithCookie(cookies: [HTTPCookie]) async -> Int {
        return await withCheckedContinuation { continuation in
            let dataStore = WKWebsiteDataStore.default()
            let waitGroup = DispatchGroup()
            for cookie in cookies {
                waitGroup.enter()
                dataStore.httpCookieStore.setCookie(cookie) { waitGroup.leave() }
            }
            waitGroup.notify(queue: DispatchQueue.main) {
                continuation.resume(returning: 0)
            }
        }
    }
    
    @MainActor
    static func newConfiguration() -> WKWebViewConfiguration {
        let config = WKWebViewConfiguration()
        config.processPool = WKProcessPool()
        return config
    }
}

private enum CookieSwitcherInjectValueKey: InjectValueKey {
    static var defaultInjectValue = CookieSwitcher.shared
}

extension InjectValues {
    var cookieSwitcher: CookieSwitcher {
        Self[CookieSwitcherInjectValueKey.self]
    }
}
