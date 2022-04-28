"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8796],{

/***/ 88796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Worker)
});

// EXTERNAL MODULE: ./src/plugins/Savings/base.ts
var base = __webpack_require__(95163);
// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(79936);
// EXTERNAL MODULE: ./src/plugins/Savings/constants.ts
var constants = __webpack_require__(51397);
;// CONCATENATED MODULE: ./src/plugins/Savings/messages.ts


if (false) {}
const PluginSavingsMessages = (0,entry/* createPluginMessage */.I4)(constants/* SAVINGS_PLUGIN_ID */.SE);
const PluginSavingsRPC = (0,entry/* createPluginRPC */.V8)(constants/* SAVINGS_PLUGIN_ID */.SE, ()=>__webpack_require__.e(/* import() */ 3250).then(__webpack_require__.bind(__webpack_require__, 20755))
, PluginSavingsMessages.rpc);

;// CONCATENATED MODULE: ./src/plugins/Savings/Worker/index.ts


const worker = {
    ...base/* base */.u,
    init (signal) {}
};
/* harmony default export */ const Worker = (worker);


/***/ })

}]);