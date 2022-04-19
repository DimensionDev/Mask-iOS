"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6631],{

/***/ 86631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__deprecated__getStorage": () => (/* reexport */ __deprecated__getStorage),
  "__deprecated__setStorage": () => (/* reexport */ __deprecated__setStorage),
  "fetch": () => (/* reexport */ fetch),
  "fetchJSON": () => (/* reexport */ fetchJSON),
  "openPopupWindow": () => (/* reexport */ openPopupWindow),
  "queryExtensionPermission": () => (/* reexport */ queryExtensionPermission),
  "removePopupWindow": () => (/* reexport */ removePopupWindow),
  "requestExtensionPermission": () => (/* reexport */ requestExtensionPermission),
  "resolveTCOLink": () => (/* reexport */ resolveTCOLink)
});

;// CONCATENATED MODULE: ./background/services/helper/fetch.ts
async function fetch(url) {
    const res = await globalThis.fetch(url);
    return res.blob();
}
/** @deprecated */ async function fetchJSON(url) {
    const res = await globalThis.fetch(url);
    return res.json();
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
;// CONCATENATED MODULE: ./background/services/helper/short-link-resolver.ts

const cache = new Map();
async function resolver(u) {
    if (!u.startsWith('https://t.co/')) return null;
    if (cache.has(u)) return cache.get(u);
    const res = await globalThis.fetch(u, {
        redirect: 'error',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
    });
    const text = await res.text();
    const url = text.match(/URL=(.+).><\/noscript/)?.[1];
    if (url) cache.set(u, url);
    return url ?? null;
}
/** Resolve a https://t.co/ link to it's real address. */ const resolveTCOLink = (0,esm/* memoizePromise */.J3)(resolver, (x)=>x
);

// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
;// CONCATENATED MODULE: ./background/services/helper/popup-opener.ts



let currentPopupWindowId = 0;
function isLocked() {
    return new Promise((resolve)=>{
        const off = shared/* MaskMessages.events.wallet_is_locked.on */.ql.events.wallet_is_locked.on(([type, value])=>{
            if (type === 'request') return;
            off();
            resolve(value);
            // in case something went wrong
            setTimeout(()=>resolve(false)
            , 200);
        });
        shared/* MaskMessages.events.wallet_is_locked.sendToLocal */.ql.events.wallet_is_locked.sendToLocal([
            'request'
        ]);
    });
}
const exclusionDetectLocked = [
    src/* PopupRoutes.PersonaSignRequest */.mZ.PersonaSignRequest
];
async function openPopupWindow(route, params) {
    const windows = await browser.windows.getAll();
    const popup = windows.find((win)=>win && win.type === 'popup' && win.id === currentPopupWindowId
    );
    // Focus on the pop-up window if it already exists
    if (popup) {
        await browser.windows.update(currentPopupWindowId, {
            focused: true
        });
    } else {
        const locked = await isLocked();
        const shouldUnlockWallet = locked && !exclusionDetectLocked.includes(route ?? src/* PopupRoutes.Wallet */.mZ.Wallet);
        const url = dist_default()('popups.html#', shouldUnlockWallet ? src/* PopupRoutes.Unlock */.mZ.Unlock : route ?? src/* PopupRoutes.Wallet */.mZ.Wallet, {
            toBeClose: 1,
            from: locked && route ? route : null,
            ...params
        });
        let left;
        let top;
        try {
            const lastFocused = await browser.windows.getLastFocused();
            // Position window in top right corner of lastFocused window.
            top = lastFocused.top ?? 0;
            left = (lastFocused.left ?? 0) + (lastFocused.width ?? 0) - 350;
        } catch (error_) {
            // The following properties are more than likely 0, due to being
            // opened from the background chrome process for the extension that
            // has no physical dimensions
            const { screenX , screenY , outerWidth  } = window;
            top = Math.max(screenY, 0);
            left = Math.max(screenX + (outerWidth - 350), 0);
        }
        const { id  } = await browser.windows.create({
            url: browser.runtime.getURL(url),
            width: 350,
            height: 640,
            type: 'popup',
            state: 'normal',
            left,
            top
        });
        // update currentPopupWindowId and clean event
        if (id) {
            currentPopupWindowId = id;
            browser.windows.onRemoved.addListener(function listener(windowID) {
                if (windowID === id) {
                    currentPopupWindowId = 0;
                }
            });
            // firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1271047
            if (false) {}
        }
    }
}
async function removePopupWindow() {
    if (!currentPopupWindowId) return;
    browser.windows.remove(currentPopupWindowId);
    currentPopupWindowId = 0;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js + 6 modules
var merge = __webpack_require__(9084);
;// CONCATENATED MODULE: ./background/services/helper/deprecated-storage.ts


/**
 * Make sure that the storage is used serially.
 */ class MutexStorage {
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }
    async continue() {
        if (!this.locked) this.tasks.shift()?.();
    }
    async getStorage(key) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e, storage1)=>{
                if (e) reject(e);
                else resolve(storage1);
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    const stored = await (0,esm/* timeout */.Vs)(browser.storage.local.get(key), 3000, `Get ${key} timeout.`);
                    callback(null, stored?.[key]);
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    async setStorage(key, value) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e)=>{
                if (e) reject(e);
                else resolve();
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    await (0,esm/* timeout */.Vs)(browser.storage.local.set({
                        [key]: value
                    }), 3000, `Set ${key} to ${value} timeout.`);
                    callback(null);
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    constructor(){
        this.tasks = [];
        this.locked = false;
    }
}
const storage = new MutexStorage();
/** Avoid using this. */ async function __deprecated__getStorage(key) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    const value = await storage.getStorage(key);
    return value;
}
/** Avoid using this. */ async function __deprecated__setStorage(key, value, options = {
    howToUpdate: 'replace'
}) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    if (options.howToUpdate === 'merge') value = (0,merge/* default */.Z)(await storage.getStorage(key) ?? {}, value);
    return storage.setStorage(key, value);
}

// EXTERNAL MODULE: ./shared/definitions/routes.ts
var routes = __webpack_require__(58043);
;// CONCATENATED MODULE: ./background/services/helper/request-permission.ts

async function requestExtensionPermission(permission) {
    if (await browser.permissions.contains(permission)) return true;
    try {
        return await browser.permissions.request(permission);
    } catch  {
    // which means we're on Firefox.
    // Chrome allows permission request from the background.
    }
    const popup = await browser.windows.create({
        height: 600,
        width: 350,
        type: 'popup',
        url: (0,routes/* getPermissionRequestURL */.r)(permission)
    });
    return new Promise((resolve)=>{
        browser.windows.onRemoved.addListener(function listener(windowID) {
            if (windowID !== popup.id) return;
            resolve(browser.permissions.contains(permission));
            browser.windows.onRemoved.removeListener(listener);
        });
    });
}
function queryExtensionPermission(permission) {
    return browser.permissions.contains(permission);
}

;// CONCATENATED MODULE: ./background/services/helper/index.ts







/***/ }),

/***/ 58043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ getPermissionRequestURL),
/* harmony export */   "y": () => (/* binding */ getPopupRouteURLWithNoParam)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);

function getPopupRouteURLWithNoParam(kind) {
    return browser.runtime.getURL(`/popups.html#${kind}`);
}
function getPermissionRequestURL(permission) {
    const { origins =[] , permissions =[]  } = permission;
    const params = new URLSearchParams();
    for (const each of origins)params.append('origins', each);
    for (const each1 of permissions)params.append('permissions', each1);
    return `${getPopupRouteURLWithNoParam(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.RequestPermission */ .mZ.RequestPermission)}?${params.toString()}`;
}


/***/ })

}]);