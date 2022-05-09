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
    
    let dataStore = WKWebsiteDataStore.default()
    
    func saveOldCookieToCurrentProfile() async {
        if let profile = personaManager.currentProfile.value, !needReloadWebView {
           await saveOldCookieToProfile(profileIdentifier: profile.nonOptionalIdentifier)
        }
    }
    
    func saveOldCookieToProfile(profileIdentifier: String) async {
        let cookiesInDataStore =  await dataStore.httpCookieStore.allCookies()
        ProfileRepository.updateProfileCookies(identifier: profileIdentifier, cookies: cookiesInDataStore)
    }
    
    func setNewCookies() async {
        if let cookies = personaManager.currentProfile.value?
                    .cookiesData?.toCookies()
        {
            await CookieSwitcher.cleanAllCookies()
            await CookieSwitcher.setCookieToWebsiteDataStore(cookies: cookies)
        }
    }
    
    @MainActor
    static func cleanAllCookies() async {
        HTTPCookieStorage.shared.removeCookies(since: Date.distantPast)

        let records = await dataStore.dataRecords(ofTypes: WKWebsiteDataStore.allWebsiteDataTypes())
        for record in records {
            await dataStore.removeData(ofTypes: record.dataTypes, for: [record])
        }
    }
}

extension CookieSwitcher {
    
    @MainActor
    private static func setCookieToWebsiteDataStore(cookies: [HTTPCookie]) async {
        let dataStore = WKWebsiteDataStore.default()
        for cookie in cookies {
           await dataStore.httpCookieStore.setCookie(cookie)
        }
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
