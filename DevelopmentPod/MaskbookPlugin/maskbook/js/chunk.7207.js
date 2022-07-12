"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7207],{

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

/***/ 87207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fetchManifest": () => (/* binding */ fetchManifest),
  "getHostedMeta": () => (/* binding */ getHostedMeta),
  "grantPermission": () => (/* binding */ grantPermission),
  "hasPermission": () => (/* binding */ hasPermission),
  "openPluginPopup": () => (/* binding */ openPluginPopup),
  "requestPermission": () => (/* binding */ requestPermission)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ./shared/definitions/routes.ts
var routes = __webpack_require__(38372);
;// CONCATENATED MODULE: ./src/extension/popups/index.tsx


function PermissionAwareRedirectOf(url, context) {
    return getPopupRouteURLWithNoParam(PopupRoutes.PermissionAwareRedirect) + `?url=${encodeURIComponent(url)}&context=${context}`;
}


;// CONCATENATED MODULE: ./src/extension/popups/ThirdPartyRequestPermission/utils.ts


function constructThirdPartyRequestPermissionURL(pluginManifestURL, permissions) {
    const params = new URLSearchParams();
    params.set('plugin', pluginManifestURL);
    for (const x of permissions)params.append('permission', String(x));
    return (0,routes/* getPopupRouteURLWithNoParam */.y)(src/* PopupRoutes.ThirdPartyRequestPermission */.mZ.ThirdPartyRequestPermission) + '?' + params.toString();
}

// EXTERNAL MODULE: ./src/extension/background-script/ThirdPartyPlugin/types.ts
var types = __webpack_require__(28047);
;// CONCATENATED MODULE: ./src/extension/background-script/ThirdPartyPlugin/index.ts


async function fetchManifest(addr) {
    const response = await fetch(addr + 'mask-manifest.json');
    const json = await response.text().then(JSONC);
    // TODO: verify manifest
    return JSON.parse(json);
    function JSONC(x1) {
        return x1.split('\n').filter((x)=>!x.match(/^ +\/\//)
        ).join('\n');
    }
}
const hostedMeta = new Map();
async function getHostedMeta(context) {
    return hostedMeta.get(context);
}
async function openPluginPopup(url, meta) {
    new URL(url) // it must be a full qualified URL otherwise throws
    ;
    if (meta) hostedMeta.set(meta[0], [
        meta[1],
        meta[2]
    ]);
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

/***/ 28047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ThirdPartyPluginPermission)
/* harmony export */ });
var ThirdPartyPluginPermission;
(function(ThirdPartyPluginPermission) {
    ThirdPartyPluginPermission[ThirdPartyPluginPermission["DEBUG_Profiles"] = 1] = "DEBUG_Profiles";
})(ThirdPartyPluginPermission || (ThirdPartyPluginPermission = {}));


/***/ })

}]);