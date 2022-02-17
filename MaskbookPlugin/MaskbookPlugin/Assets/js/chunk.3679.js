"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1951],{

/***/ 81951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStorage": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_3__.c),
/* harmony export */   "setStorage": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_3__.p),
/* harmony export */   "resolveTCOLink": () => (/* binding */ resolveTCOLink),
/* harmony export */   "fetch": () => (/* binding */ fetch),
/* harmony export */   "fetchJson": () => (/* binding */ fetchJson),
/* harmony export */   "saveAsFileFromUrl": () => (/* binding */ saveAsFileFromUrl),
/* harmony export */   "saveAsFileFromBuffer": () => (/* binding */ saveAsFileFromBuffer),
/* harmony export */   "requestBrowserPermission": () => (/* binding */ requestBrowserPermission),
/* harmony export */   "queryPermission": () => (/* binding */ queryPermission),
/* harmony export */   "createNewWindowAndPasteShareContent": () => (/* binding */ createNewWindowAndPasteShareContent),
/* harmony export */   "openPopupsWindow": () => (/* binding */ openPopupsWindow),
/* harmony export */   "openInternalPage": () => (/* binding */ openInternalPage)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3679.js
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77287);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43670);
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9950);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62285);
=======
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37186);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45513);
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37146);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4331);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1951.js




const cache = new Map();
const resolveTCOLink = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .memoizePromise */ .J3)(async (u)=>{
    if (!u.startsWith('https://t.co/')) return null;
    if (cache.has(u)) return cache.get(u);
    const res = await globalThis.fetch(u, {
        redirect: 'error',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
    });
    const text = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const dom = doc.querySelector('noscript > meta');
    if (!dom) return null;
    const [, url] = dom.content.split('URL=');
    if (url) cache.set(u, url);
    return url !== null && url !== void 0 ? url : null;
}, (x)=>x
);
function fetch(url) {
    return globalThis.fetch(url).then((x)=>x.blob()
    );
}
function fetchJson(url) {
    return globalThis.fetch(url).then((x)=>x.json()
    );
}
function saveAsFileFromUrl(url, fileName = '') {
    browser.downloads.download({
        url,
        filename: fileName,
        saveAs: true
    });
}
function saveAsFileFromBuffer(file, mimeType, fileName = '') {
    const blob = new Blob([
        file
    ], {
        type: mimeType
    });
    const url = URL.createObjectURL(blob);
    saveAsFileFromUrl(url, fileName);
}
async function requestBrowserPermission(permission) {
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
        url: (0,_popups__WEBPACK_IMPORTED_MODULE_2__/* .constructRequestPermissionURL */ .km)(permission)
    });
    return new Promise((resolve)=>{
        browser.windows.onRemoved.addListener(function listener(windowID) {
            if (windowID === popup.id) {
                resolve(browser.permissions.contains(permission));
                browser.windows.onRemoved.removeListener(listener);
            }
        });
    });
}
function queryPermission(permission) {
    return browser.permissions.contains(permission);
}
async function createNewWindowAndPasteShareContent(SNSIdentifier, post) {
    var _utils, ref;
    const url = (ref = (_utils = (await (0,_social_network__WEBPACK_IMPORTED_MODULE_1__.getNetworkWorker)(SNSIdentifier)).utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, post);
    if (!url) return;
    browser.tabs.create({
        active: true,
        url: url.toString()
    });
}
function openPopupsWindow(route) {
    if (!!navigator.userAgent.match(/Chrome/)) {
        window.open(browser.runtime.getURL(`popups.html#${route !== null && route !== void 0 ? route : _popups__WEBPACK_IMPORTED_MODULE_2__/* .PopupRoutes.Wallet */ .mZ.Wallet}`), '', 'resizable,scrollbars,status,width=310,height=540');
    } else {
        browser.windows.create({
            url: browser.runtime.getURL(`popups.html#${route !== null && route !== void 0 ? route : _popups__WEBPACK_IMPORTED_MODULE_2__/* .PopupRoutes.Wallet */ .mZ.Wallet}`),
            width: 310,
            height: 540,
            type: 'popup'
        });
    }
}
function openInternalPage(path) {
    browser.tabs.create({
        active: true,
        url: browser.runtime.getURL(path)
    });
}


/***/ }),

/***/ 4331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ getStorage),
/* harmony export */   "p": () => (/* binding */ setStorage)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28532);


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
        var _obj, ref;
        if (!this.locked) (ref = _obj = this.tasks.shift()) === null || ref === void 0 ? void 0 : ref.call(_obj);
    }
    async getStorage(key) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e, storage)=>{
                if (e) reject(e);
                else resolve(storage);
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    const stored = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .timeout */ .Vs)(browser.storage.local.get(key), 3000, `Get ${key} timeout.`);
                    callback(null, (stored !== null && stored !== void 0 ? stored : {
                    })[key]);
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
                    await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .timeout */ .Vs)(browser.storage.local.set({
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
async function getStorage(key) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    const value = await storage.getStorage(key);
    return value;
}
async function setStorage(key, value, options = {
    howToUpdate: 'replace'
}) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    var ref;
    if (options.howToUpdate === 'merge') value = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.merge)((ref = await storage.getStorage(key)) !== null && ref !== void 0 ? ref : {
    }, value);
    return storage.setStorage(key, value);
}


/***/ }),

/***/ 37146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uE": () => (/* binding */ PermissionAwareRedirectOf),
  "mZ": () => (/* binding */ PopupRoutes),
  "km": () => (/* reexport */ constructRequestPermissionURL),
  "qy": () => (/* reexport */ constructSignRequestURL),
  "WQ": () => (/* binding */ getRouteURLWithNoParam)
});

;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/utils.ts

function constructRequestPermissionURL(permission) {
    const { origins =[] , permissions =[]  } = permission;
    const params = new URLSearchParams();
    for (const each of origins)params.append('origins', each);
    for (const each1 of permissions)params.append('permissions', each1);
    return `${getRouteURLWithNoParam(PopupRoutes.RequestPermission)}?${params.toString()}`;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/extension/popups/SignRequest/utils.ts


function constructSignRequestURL(request) {
    return dist_default()(getRouteURLWithNoParam(PopupRoutes.SignRequest), {
        message: request.message,
        id: request.requestID
    });
}

;// CONCATENATED MODULE: ./src/extension/popups/index.tsx
var PopupRoutes;
(function(PopupRoutes1) {
    PopupRoutes1["Root"] = '/';
    PopupRoutes1["Wallet"] = '/wallet';
    PopupRoutes1["ImportWallet"] = '/wallet/import';
    PopupRoutes1["AddDeriveWallet"] = '/wallet/addDerive';
    PopupRoutes1["WalletSettings"] = '/wallet/settings';
    PopupRoutes1["WalletRename"] = '/wallet/rename';
    PopupRoutes1["DeleteWallet"] = '/wallet/delete';
    PopupRoutes1["CreateWallet"] = '/wallet/create';
    PopupRoutes1["SelectWallet"] = '/wallet/select';
    PopupRoutes1["BackupWallet"] = '/wallet/backup';
    PopupRoutes1["AddToken"] = '/wallet/addToken';
    PopupRoutes1["WalletSignRequest"] = '/wallet/sign';
    PopupRoutes1["GasSetting"] = '/wallet/gas';
    PopupRoutes1["TokenDetail"] = '/wallet/tokenDetail';
    PopupRoutes1["Personas"] = '/personas';
    PopupRoutes1["PermissionAwareRedirect"] = '/redirect';
    PopupRoutes1["RequestPermission"] = '/request-permission';
    PopupRoutes1["ThirdPartyRequestPermission"] = '/3rd-request-permission';
    PopupRoutes1["SignRequest"] = '/sign-request';
})(PopupRoutes || (PopupRoutes = {
}));
function getRouteURLWithNoParam(kind) {
    return browser.runtime.getURL(`/popups.html#${kind}`);
}
function PermissionAwareRedirectOf(url, context) {
    return getRouteURLWithNoParam(PopupRoutes.PermissionAwareRedirect) + `?url=${encodeURIComponent(url)}&context=${context}`;
}




/***/ })

}]);