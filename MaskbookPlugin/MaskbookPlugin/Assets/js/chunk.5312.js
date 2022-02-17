"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1953],{

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

/***/ 1953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ hmr_sdk)
});

// NAMESPACE OBJECT: ./src/extension/external-sdk/sdk.ts
var sdk_namespaceObject = {};
__webpack_require__.r(sdk_namespaceObject);
__webpack_require__.d(sdk_namespaceObject, {
  "__assertLocalContext": () => (__assertLocalContext),
  "__validateRemoteContext": () => (__validateRemoteContext),
  "getProfile": () => (getProfile),
  "setPayload": () => (setPayload),
  "version": () => (version)
});

// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/extension/background-script/ThirdPartyPlugin/types.ts
var types = __webpack_require__(73021);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/extension/external-sdk/constant.ts
var constant = __webpack_require__(44430);
;// CONCATENATED MODULE: ./src/extension/external-sdk/sdk/context.ts


/** @internal */ async function __assertLocalContext() {
    if (!constant/* currentPopupContext */.XC) throw new Error(constant/* SDKErrors.M1_Lack_context_identifier */.A7.M1_Lack_context_identifier);
}
/** @internal To make sure the remote context still alive */ function __validateRemoteContext() {
    if (isContextDisconnected) return Promise.reject(new Error(constant/* SDKErrors.M2_Context_disconnected */.A7.M2_Context_disconnected));
    return new Promise((resolve, reject)=>{
        if (!constant/* currentPopupContext */.XC) throw onContextDisconnected();
        const challenge = Math.random();
        const f = utils/* MaskMessage.events.thirdPartyPong.on */.yV.events.thirdPartyPong.on((i)=>{
            if (i !== challenge) return;
            resolve(constant/* currentPopupContext */.XC);
            f();
        });
        utils/* MaskMessage.events.thirdPartyPing.sendToContentScripts */.yV.events.thirdPartyPing.sendToContentScripts({
            context: constant/* currentPopupContext */.XC,
            challenge
        });
        setTimeout(()=>reject(onContextDisconnected())
        , 2000);
    });
}
let isContextDisconnected = false;
function onContextDisconnected() {
    isContextDisconnected = true;
    document.dispatchEvent(new Event('mask-sdk-disconnected'));
    return new Error(constant/* SDKErrors.M2_Context_disconnected */.A7.M2_Context_disconnected);
}

;// CONCATENATED MODULE: ./src/extension/external-sdk/sdk.ts
// !! Change existing signature of anything this file exports leads to a breaking change.





/** Version of this SDK */ async function version() {
    return 1;
}

async function getProfile() {
    const granted = await service/* default.ThirdPartyPlugin.requestPermission */.ZP.ThirdPartyPlugin.requestPermission(new URL('./', location.href).toString(), [
        types/* ThirdPartyPluginPermission.DEBUG_Profiles */.V.DEBUG_Profiles, 
    ]);
    if (!granted) throw new Error(constant/* SDKErrors.M3_Permission_denied */.A7.M3_Permission_denied);
    return (await service/* default.Identity.queryProfiles */.ZP.Identity.queryProfiles()).map((x)=>x.identifier.userId
    );
}
async function setPayload(payload, options) {
    const context = await __validateRemoteContext();
    const url = constant/* currentBaseURL.replace */.bx.replace(/^https?:\/\//, '');
    const namespacedPayload = {
    };
    for(const key in payload){
        // plugin:dimensiondev.github.io/Mask-Plugin-Example/@v1
        namespacedPayload[`plugin:${url}@${key}`] = payload[key];
    }
    utils/* MaskMessage.events.thirdPartySetPayload.sendToContentScripts */.yV.events.thirdPartySetPayload.sendToContentScripts({
        payload: namespacedPayload,
        context,
        appendText: options.additionText
    });
}

;// CONCATENATED MODULE: ./src/extension/external-sdk/hmr-sdk.ts

const hmrSDK = {
    ...sdk_namespaceObject
};
/* harmony default export */ const hmr_sdk = (hmrSDK);
if (false) {}


/***/ })

}]);