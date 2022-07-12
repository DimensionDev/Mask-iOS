"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7077],{

/***/ 17077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44371);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22730);


const worker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init () {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ }),

/***/ 22730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PluginPetRPC),
/* harmony export */   "s": () => (/* binding */ PluginPetMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21252);



if (false) {}
const PluginPetMessages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PetsPluginID */ .Dt, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const PluginPetRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PetsPluginID */ .Dt, ()=>__webpack_require__.e(/* import() */ 9324).then(__webpack_require__.bind(__webpack_require__, 9324))
, PluginPetMessages.events.rpc);


/***/ })

}]);