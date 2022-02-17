"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2951],{

/***/ 62951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90141);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33324);


const worker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init (signal) {
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ }),

/***/ 33324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ RedPacketRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90254);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);


if (false) {}
const RedPacketMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .RedPacketPluginID */ .jY);
const RedPacketRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .RedPacketPluginID */ .jY, ()=>Promise.all(/* import() */[__webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(6739), __webpack_require__.e(8369)]).then(__webpack_require__.bind(__webpack_require__, 38369))
, RedPacketMessage.rpc);


/***/ })

}]);