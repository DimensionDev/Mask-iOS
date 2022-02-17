"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2269],{

/***/ 82269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefinedSocialNetworkUIs": () => (/* binding */ getDefinedSocialNetworkUIs),
/* harmony export */   "connectSocialNetwork": () => (/* binding */ connectSocialNetwork)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45513);
/* harmony import */ var _utils_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _social_network_utils_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28630);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96578);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71299);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(317);







async function getDefinedSocialNetworkUIs() {
    return [
        ..._social_network__WEBPACK_IMPORTED_MODULE_0__.definedSocialNetworkUIs.values()
    ].map(({ networkIdentifier  })=>{
        return {
            networkIdentifier
        };
    });
}
async function connectSocialNetwork(identifier, network) {
    var _utils, ref;
    const ui = await (0,_social_network__WEBPACK_IMPORTED_MODULE_0__.loadSocialNetworkUI)(network);
    const home = (ref = (_utils = ui.utils).getHomePage) === null || ref === void 0 ? void 0 : ref.call(_utils);
    if (!_utils_flags__WEBPACK_IMPORTED_MODULE_1__/* .Flags.no_web_extension_dynamic_permission_request */ .vU.no_web_extension_dynamic_permission_request) {
        // TODO: requesting permission need a popup in Firefox.
        if (!await (0,_social_network_utils_permissions__WEBPACK_IMPORTED_MODULE_6__/* .requestSNSAdaptorPermission */ .S)(ui)) return;
    }
    _settings_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentSetupGuideStatus */ .AI[network].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_4___default()({
        status: _components_InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_5__/* .SetupGuideStep.FindUsername */ .s.FindUsername,
        persona: identifier.toText()
    });
    await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .delay */ .gw)(100);
    home && browser.tabs.create({
        active: true,
        url: home
    });
}


/***/ }),

/***/ 28630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ requestSNSAdaptorPermission),
/* harmony export */   "K": () => (/* binding */ hasSNSAdaptorPermission)
/* harmony export */ });
function requestSNSAdaptorPermission(ui) {
    var ref;
    var ref1;
    return (ref1 = (ref = ui.permission) === null || ref === void 0 ? void 0 : ref.request()) !== null && ref1 !== void 0 ? ref1 : browser.permissions.request({
        origins: [
            ...ui.declarativePermissions.origins
        ]
    });
}
function hasSNSAdaptorPermission(ui) {
    var ref;
    var ref1;
    return (ref1 = (ref = ui.permission) === null || ref === void 0 ? void 0 : ref.has()) !== null && ref1 !== void 0 ? ref1 : browser.permissions.contains({
        origins: [
            ...ui.declarativePermissions.origins
        ]
    });
}


/***/ })

}]);