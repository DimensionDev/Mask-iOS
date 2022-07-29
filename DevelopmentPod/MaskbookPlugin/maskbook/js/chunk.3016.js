"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3016],{

/***/ 83016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25064);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96121);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19877);



const dashboard = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init (signal, context) {
        const Web3State = (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .createWeb3State */ .s)(context);
        dashboard.Web3State = Web3State;
        _settings__WEBPACK_IMPORTED_MODULE_1__/* .Web3StateSettings.value */ .o.value = Web3State;
        _settings__WEBPACK_IMPORTED_MODULE_1__/* .SharedContextSettings.value */ .J.value = context;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboard);


/***/ })

}]);