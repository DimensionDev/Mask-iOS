"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6872],{

/***/ 56872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43128);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18829);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23085);
/* harmony import */ var _Web3State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22591);
/* harmony import */ var _Web3UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92980);





const sns = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    async init (signal, context) {
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__/* .setupStorage */ .tX)(context.createKVStorage('memory', _storage__WEBPACK_IMPORTED_MODULE_1__/* .StorageDefaultValue */ .WQ));
        sns.Web3State = (0,_Web3State__WEBPACK_IMPORTED_MODULE_3__/* .createWeb3State */ .s)(signal);
        await (0,_wallet__WEBPACK_IMPORTED_MODULE_2__/* .connectWallet */ .UP)(true);
        await (0,_wallet__WEBPACK_IMPORTED_MODULE_2__/* .watchAccount */ .uH)();
    },
    Web3UI: _Web3UI__WEBPACK_IMPORTED_MODULE_4__/* .Web3UI */ ._
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sns);


/***/ })

}]);