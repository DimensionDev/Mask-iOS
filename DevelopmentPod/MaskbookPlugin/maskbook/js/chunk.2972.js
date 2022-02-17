"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2972],{

/***/ 32857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18317);
/* harmony import */ var _UI_InvestDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8631);



const dashboard = {
    ..._base__WEBPACK_IMPORTED_MODULE_1__/* .base */ .u,
    init (signal) {},
    GlobalInjection: function Component() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UI_InvestDialog__WEBPACK_IMPORTED_MODULE_2__/* .InvestDialog */ .V, {}));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboard);


/***/ }),

/***/ 67908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "Sf": () => (/* binding */ isMinds),
/* harmony export */   "fy": () => (/* binding */ mindsWorkerBase)
/* harmony export */ });
const MINDS_ID = 'minds.com';
const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const mindsBase = {
    networkIdentifier: MINDS_ID,
    name: 'minds',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('minds.com');
    }
};
function isMinds(ui) {
    return ui.networkIdentifier === MINDS_ID;
}
const mindsWorkerBase = {
    ...mindsBase,
    gunNetworkHint: 'minds-'
};


/***/ })

}]);