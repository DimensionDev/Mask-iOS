"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3021],{

/***/ 63021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10503);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93455);
/* harmony import */ var _database_Plugin_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26436);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91788);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60364);





const worker = {
    ..._masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .base */ .ue,
    init (signal, context) {
        (0,_database_Plugin_db__WEBPACK_IMPORTED_MODULE_4__/* .setupDatabase */ .k)(context.getDatabaseStorage());
        _utils__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.wallet_is_locked.on */ .ql.events.wallet_is_locked.on(async ([type])=>{
            if (type === 'request') {
                _utils__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.wallet_is_locked.sendToLocal */ .ql.events.wallet_is_locked.sendToLocal([
                    'response',
                    await (0,_services__WEBPACK_IMPORTED_MODULE_3__.isLocked)()
                ]);
            }
        }, {
            signal
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ })

}]);