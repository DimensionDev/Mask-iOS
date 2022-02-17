"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4144],{

/***/ 74144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Worker)
});

// EXTERNAL MODULE: ./src/plugins/Savings/base.ts
var base = __webpack_require__(10961);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(94531);
// EXTERNAL MODULE: ./src/plugins/Savings/constants.ts
var constants = __webpack_require__(35761);
;// CONCATENATED MODULE: ./src/plugins/Savings/messages.ts


if (false) {}
const PluginSavingsMessages = (0,src/* createPluginMessage */.I4)(constants/* SAVINGS_PLUGIN_ID */.S);
const PluginSavingsRPC = (0,src/* createPluginRPC */.V8)(constants/* SAVINGS_PLUGIN_ID */.S, ()=>__webpack_require__.e(/* import() */ 4279).then(__webpack_require__.bind(__webpack_require__, 32752))
, PluginSavingsMessages.rpc);

;// CONCATENATED MODULE: ./src/plugins/Savings/Worker/index.ts


const worker = {
    ...base/* base */.u,
    init (signal) {}
};
/* harmony default export */ const Worker = (worker);


/***/ })

}]);