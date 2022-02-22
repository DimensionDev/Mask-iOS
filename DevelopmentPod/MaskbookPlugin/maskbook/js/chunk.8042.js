"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8042],{

/***/ 58042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "connectSocialNetwork": () => (/* binding */ connectSocialNetwork),
  "getDefinedSocialNetworkUIs": () => (/* binding */ getDefinedSocialNetworkUIs),
  "getDesignatedAutoStartPluginID": () => (/* binding */ getDesignatedAutoStartPluginID),
  "openProfilePage": () => (/* binding */ openProfilePage),
  "openSNSAndActivatePlugin": () => (/* binding */ openSNSAndActivatePlugin),
  "openShareLink": () => (/* binding */ openShareLink)
});

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared = __webpack_require__(28615);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
;// CONCATENATED MODULE: ./src/social-network/utils/permissions.ts

function requestSNSAdaptorPermission(ui) {
    var ref;
    const req = (ref = ui.permission) === null || ref === void 0 ? void 0 : ref.request();
    if (req) return req;
    return service/* default.Helper.requestExtensionPermission */.ZP.Helper.requestExtensionPermission({
        origins: [
            ...ui.declarativePermissions.origins
        ]
    });
}

// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(3087);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./src/components/InjectedComponents/SetupGuide.tsx
var SetupGuide = __webpack_require__(24513);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
;// CONCATENATED MODULE: ./src/extension/background-script/SocialNetworkService.ts







async function getDefinedSocialNetworkUIs() {
    return [
        ...social_network/* definedSocialNetworkUIs.values */.LB.values()
    ].map(({ networkIdentifier  })=>{
        return {
            networkIdentifier
        };
    });
}
async function connectSocialNetwork(identifier, network) {
    var _utils, ref;
    const ui = await (0,social_network/* loadSocialNetworkUI */.gE)(network);
    const home = (ref = (_utils = ui.utils).getHomePage) === null || ref === void 0 ? void 0 : ref.call(_utils);
    if (!shared/* Flags.no_web_extension_dynamic_permission_request */.vU.no_web_extension_dynamic_permission_request) {
        if (!await requestSNSAdaptorPermission(ui)) return;
    }
    settings/* currentSetupGuideStatus */.AI[network].value = json_stable_stringify_default()({
        status: SetupGuide/* SetupGuideStep.FindUsername */.s.FindUsername,
        persona: identifier.toText()
    });
    await (0,src/* delay */.gw)(100);
    home && browser.tabs.create({
        active: true,
        url: home
    });
}
async function openProfilePage(network, userId) {
    var _utils, ref;
    const ui = await (0,social_network/* loadSocialNetworkUI */.gE)(network);
    const profile = (ref = (_utils = ui.utils).getProfilePage) === null || ref === void 0 ? void 0 : ref.call(_utils, userId);
    if (!shared/* Flags.no_web_extension_dynamic_permission_request */.vU.no_web_extension_dynamic_permission_request) {
        if (!await requestSNSAdaptorPermission(ui)) return;
    }
    await (0,src/* delay */.gw)(100);
    profile && browser.tabs.create({
        active: true,
        url: profile
    });
}
async function openShareLink(SNSIdentifier, post) {
    var _utils, ref;
    const url = (ref = (_utils = (await (0,social_network/* getNetworkWorker */.C8)(SNSIdentifier)).utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, post);
    if (!url) return;
    browser.tabs.create({
        active: true,
        url: url.toString()
    });
}
const key = 'openSNSAndActivatePlugin';
/**
 * This function will open a new web page, then open the composition dialog and activate the composition entry of the given plugin.
 * @param url URL to open
 * @param pluginID Plugin to activate
 */ async function openSNSAndActivatePlugin(url, pluginID) {
    await browser.tabs.create({
        active: true,
        url
    });
    sessionStorage.setItem(key, pluginID);
}
async function getDesignatedAutoStartPluginID() {
    const val = sessionStorage.getItem(key);
    sessionStorage.removeItem(key);
    return val;
}


/***/ })

}]);