"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3813],{

/***/ 33813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "enableSDK": () => (/* binding */ enableSDK),
  "fetchManifest": () => (/* binding */ fetchManifest),
  "grantPermission": () => (/* binding */ grantPermission),
  "hasPermission": () => (/* binding */ hasPermission),
  "isSDKEnabled": () => (/* binding */ isSDKEnabled),
  "openPluginPopup": () => (/* binding */ openPluginPopup),
  "requestPermission": () => (/* binding */ requestPermission)
});

// EXTERNAL MODULE: ./src/extension/popups/index.tsx + 2 modules
var popups = __webpack_require__(37146);
;// CONCATENATED MODULE: ./src/extension/popups/ThirdPartyRequestPermission/utils.ts

function constructThirdPartyRequestPermissionURL(pluginManifestURL, permissions) {
    const params = new URLSearchParams();
    params.set('plugin', pluginManifestURL);
    for (const x of permissions)params.append('permission', String(x));
    return (0,popups/* getRouteURLWithNoParam */.WQ)(popups/* PopupRoutes.ThirdPartyRequestPermission */.mZ.ThirdPartyRequestPermission) + '?' + params.toString();
}

// EXTERNAL MODULE: ./src/extension/background-script/ThirdPartyPlugin/types.ts
var types = __webpack_require__(73021);
;// CONCATENATED MODULE: ./src/extension/background-script/ThirdPartyPlugin/index.ts


async function fetchManifest(addr) {
    const response = await fetch(addr + 'mask-manifest.json');
    const json = await response.text().then(JSONC);
    // TODO: verify manifest
    return JSON.parse(json);
    function JSONC(x) {
        return x.split('\n').filter((x1)=>!x1.match(/^ +\/\//)
        ).join('\n');
    }
}
async function openPluginPopup(url) {
    new URL(url) // it must be a full qualified URL otherwise throws
    ;
    const { id: windowID  } = await browser.windows.create({
        type: 'popup',
        width: 350,
        height: 600,
        url
    });
    return new Promise((resolve)=>{
        browser.windows.onRemoved.addListener(function listener(id) {
            if (id !== windowID) return;
            browser.windows.onRemoved.removeListener(listener);
            resolve();
        });
    });
}
async function isSDKEnabled(baseURL) {
    return hasPermission(baseURL, [
        types/* ThirdPartyPluginPermission.SDKEnabled */.V.SDKEnabled
    ]);
}
async function enableSDK(baseURL) {
    return grantPermission(baseURL, [
        types/* ThirdPartyPluginPermission.SDKEnabled */.V.SDKEnabled
    ]);
}
/**
 * Check if the given URL has the permissions.
 */ async function hasPermission(baseURL, permissions) {
    return permissions.every((p)=>hasPermissionInternal(baseURL, p)
    );
}
/**
 * Request permission for the given URL.
 *
 */ async function requestPermission(baseURL, permissions) {
    if (await hasPermission(baseURL, permissions)) return true;
    await openPluginPopup(constructThirdPartyRequestPermissionURL(baseURL, permissions));
    return hasPermission(baseURL, permissions);
}
/**
 * DO NOT call this in the SDK. It should be called in the popups.
 *
 * Notice: In this demo implementation, all permissions are stored in the sessionStorage and will lost after the plugin refresh.
 */ async function grantPermission(baseURL, permissions) {
    for (const permission of permissions)sessionStorage.setItem(`plugin:${types/* ThirdPartyPluginPermission */.V[permission]}:${baseURL}`, '1');
}
/** @internal Do not export */ function hasPermissionInternal(baseURL, permission) {
    return !!sessionStorage.getItem(`plugin:${types/* ThirdPartyPluginPermission */.V[permission]}:${baseURL}`);
}


/***/ }),

/***/ 73021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ThirdPartyPluginPermission)
/* harmony export */ });
var ThirdPartyPluginPermission;
(function(ThirdPartyPluginPermission1) {
    ThirdPartyPluginPermission1[ThirdPartyPluginPermission1[/**
     * This is the internal permission that used to indicate if we should inject
     * sdk into a content script.
     *
     * This permission will be automatically granted when user interact with the plugin in the SNS.
     *
     * This permission should be revoked once the popup has closed.
     */ "SDKEnabled"] = 0] = "SDKEnabled";
    ThirdPartyPluginPermission1[ThirdPartyPluginPermission1["DEBUG_Profiles"] = 1] = "DEBUG_Profiles";
})(ThirdPartyPluginPermission || (ThirdPartyPluginPermission = {
}));


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