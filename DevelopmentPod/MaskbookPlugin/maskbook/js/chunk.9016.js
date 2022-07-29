"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9016],{

/***/ 29016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57670);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47879);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90038);



const dashboard = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init (signal, context) {
        const Web3State = (0,_state__WEBPACK_IMPORTED_MODULE_1__/* .createWeb3State */ .s)(context);
        dashboard.Web3State = Web3State;
        _settings__WEBPACK_IMPORTED_MODULE_2__/* .Web3StateSettings.value */ .o.value = Web3State;
        _settings__WEBPACK_IMPORTED_MODULE_2__/* .SharedContextSettings.value */ .J.value = context;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboard);


/***/ })

}]);