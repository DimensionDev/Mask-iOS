"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7968],{

/***/ 54494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ __deprecated__getStorage),
/* harmony export */   "X": () => (/* binding */ __deprecated__setStorage)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9084);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);


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
                    const stored = await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .timeout */ .Vs)(browser.storage.local.get(key), 3000, `Get ${key} timeout.`);
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
                    await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .timeout */ .Vs)(browser.storage.local.set({
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
    if (options.howToUpdate === 'merge') value = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(await storage.getStorage(key) ?? {}, value);
    return storage.setStorage(key, value);
}


/***/ }),

/***/ 67968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__deprecated__getStorage": () => (/* reexport */ deprecated_storage/* __deprecated__getStorage */.$),
  "__deprecated__setStorage": () => (/* reexport */ deprecated_storage/* __deprecated__setStorage */.X),
  "fetch": () => (/* reexport */ fetch),
  "fetchJSON": () => (/* reexport */ fetchJSON),
  "openDashboard": () => (/* reexport */ popup_opener/* openDashboard */.f8),
  "openPopupWindow": () => (/* reexport */ popup_opener/* openPopupWindow */.lU),
  "queryExtensionPermission": () => (/* reexport */ request_permission/* queryExtensionPermission */.W0),
  "r2d2Fetch": () => (/* reexport */ r2d2Fetch),
  "removePopupWindow": () => (/* reexport */ popup_opener/* removePopupWindow */.Y8),
  "requestExtensionPermission": () => (/* reexport */ request_permission/* requestExtensionPermission */.rc),
  "resolveTCOLink": () => (/* reexport */ resolveTCOLink),
  "saveFileFromBuffer": () => (/* reexport */ download/* saveFileFromBuffer */.d)
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
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

// EXTERNAL MODULE: ./background/services/helper/popup-opener.ts
var popup_opener = __webpack_require__(31118);
// EXTERNAL MODULE: ./background/services/helper/deprecated-storage.ts
var deprecated_storage = __webpack_require__(54494);
// EXTERNAL MODULE: ./background/services/helper/request-permission.ts
var request_permission = __webpack_require__(39126);
// EXTERNAL MODULE: ./shared/helpers/download.ts
var download = __webpack_require__(42886);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./background/services/helper/r2d2Fetch.ts

const r2d2URL = 'r2d2.to';
var R2d2Workers;
(function(R2d2Workers) {
    R2d2Workers["opensea"] = 'opensea-proxy';
    R2d2Workers["gitcoin"] = 'gitcoin-agent';
    R2d2Workers["coinMarketCap"] = 'coinmarketcap-agent';
    R2d2Workers["goPlusLabs"] = 'gopluslabs';
})(R2d2Workers || (R2d2Workers = {}));
const matchers = [
    [
        'https://api.opensea.io',
        R2d2Workers.opensea
    ],
    [
        'https://gitcoin.co',
        R2d2Workers.gitcoin
    ],
    [
        'https://web-api.coinmarketcap.com',
        R2d2Workers.coinMarketCap
    ],
    [
        'https://api.gopluslabs.io',
        R2d2Workers.goPlusLabs
    ], 
];
/**
 * Why use r2d2 fetch: some third api provider will be block in Firefox and protect api key
 * @returns fetch response
 * @param input
 * @param init
 */ async function r2d2Fetch(input, init) {
    const url = init instanceof Request ? init.url : input;
    // ipfs
    if (url.startsWith('ipfs://')) return globalThis.fetch(dist_default()('https://cors.r2d2.to?https://coldcdn.com/api/cdn/mipfsygtms/ipfs/:ipfs', {
        ipfs: url.replace('ipfs://', '')
    }), init);
    // r2d2
    if (url.includes('r2d2.to')) return globalThis.fetch(input, init);
    // r2d2 worker
    const r2deWorkerType = matchers.find((x)=>url.startsWith(x[0])
    )?.[1];
    if (r2deWorkerType) return globalThis.fetch(url.replace(new URL(url).origin, `https://${r2deWorkerType}.${r2d2URL}`), init);
    // fallback
    return globalThis.fetch(input, init);
}

;// CONCATENATED MODULE: ./background/services/helper/index.ts









/***/ }),

/***/ 31118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y8": () => (/* binding */ removePopupWindow),
/* harmony export */   "f8": () => (/* binding */ openDashboard),
/* harmony export */   "lU": () => (/* binding */ openPopupWindow)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94670);



let currentPopupWindowId = 0;
function isLocked() {
    return new Promise((resolve)=>{
        const off = _shared__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.wallet_is_locked.on */ .ql.events.wallet_is_locked.on(([type, value])=>{
            if (type === 'request') return;
            off();
            resolve(value);
            // in case something went wrong
            setTimeout(()=>resolve(false)
            , 200);
        });
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.wallet_is_locked.sendToLocal */ .ql.events.wallet_is_locked.sendToLocal([
            'request'
        ]);
    });
}
const exclusionDetectLocked = [
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.PersonaSignRequest */ .mZ.PersonaSignRequest,
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.Unlock */ .mZ.Unlock,
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.ConnectWallet */ .mZ.ConnectWallet
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
        const shouldUnlockWallet = locked && !exclusionDetectLocked.includes(route ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.Wallet */ .mZ.Wallet);
        const url = urlcat__WEBPACK_IMPORTED_MODULE_1___default()('popups.html#', shouldUnlockWallet ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.Unlock */ .mZ.Unlock : route ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PopupRoutes.Wallet */ .mZ.Wallet, {
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
async function openDashboard(route, search) {
    return browser.tabs.create({
        active: true,
        url: browser.runtime.getURL(`/dashboard.html#${route}${search ? `?${search}` : ''}`)
    });
}


/***/ }),

/***/ 39126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BN": () => (/* binding */ requestSiteAdaptorsPermission),
/* harmony export */   "W0": () => (/* binding */ queryExtensionPermission),
/* harmony export */   "Xm": () => (/* binding */ requestHostPermission),
/* harmony export */   "rc": () => (/* binding */ requestExtensionPermission)
/* harmony export */ });
/* harmony import */ var _shared_definitions_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38372);
/* harmony import */ var _shared_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39820);


async function requestExtensionPermission(permission) {
    if (_shared_flags__WEBPACK_IMPORTED_MODULE_1__/* .Flags.no_web_extension_dynamic_permission_request */ .vU.no_web_extension_dynamic_permission_request) return true;
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
        url: (0,_shared_definitions_routes__WEBPACK_IMPORTED_MODULE_0__/* .getPermissionRequestURL */ .r)(permission)
    });
    return new Promise((resolve)=>{
        browser.windows.onRemoved.addListener(function listener(windowID) {
            if (windowID !== popup.id) return;
            resolve(browser.permissions.contains(permission));
            browser.windows.onRemoved.removeListener(listener);
        });
    });
}
async function requestHostPermission(origins) {
    const currentOrigins = (await browser.permissions.getAll()).origins || [];
    const extra = origins.filter((i)=>!currentOrigins?.includes(i)
    );
    if (!extra.length) return true;
    return requestExtensionPermission({
        origins: extra
    });
}
function queryExtensionPermission(permission) {
    return browser.permissions.contains(permission);
}
/** @internal */ function requestSiteAdaptorsPermission(defines) {
    return requestExtensionPermission({
        origins: defines.map((x)=>x.declarativePermissions.origins
        ).flat()
    });
}


/***/ }),

/***/ 38372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ getPermissionRequestURL),
/* harmony export */   "y": () => (/* binding */ getPopupRouteURLWithNoParam)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);

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


/***/ }),

/***/ 42886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ saveFileFromBuffer),
/* harmony export */   "r": () => (/* binding */ saveFileFromUrl)
/* harmony export */ });
// TODO: maybe fallback to normal HTML save file?
async function saveFileFromUrl(url, fileName) {
    await browser.downloads.download({
        url,
        filename: fileName,
        saveAs: true
    });
}
async function saveFileFromBuffer(options) {
    const blob = new Blob([
        options.fileContent
    ], {
        type: options.mimeType
    });
    const url = URL.createObjectURL(blob);
    await browser.downloads.download({
        url,
        filename: options.fileName,
        saveAs: true
    });
}


/***/ })

}]);