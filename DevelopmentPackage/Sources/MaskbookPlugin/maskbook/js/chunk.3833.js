"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3833],{

/***/ 33833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Worker)
});

// EXTERNAL MODULE: ./src/plugins/FindTruman/base.ts
var base = __webpack_require__(29676);
// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(79936);
// EXTERNAL MODULE: ./src/plugins/FindTruman/constants.ts + 1 modules
var constants = __webpack_require__(64188);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/messages.ts


if (false) {}
const PluginFindTrumanMessages = (0,entry/* createPluginMessage */.I4)(constants/* FIND_TRUMAN_PLUGIN_ID */.h4);
const PluginFindTrumanRPC = (0,entry/* createPluginRPC */.V8)(constants/* FIND_TRUMAN_PLUGIN_ID */.h4, ()=>__webpack_require__.e(/* import() */ 7013).then(__webpack_require__.bind(__webpack_require__, 57013))
, PluginFindTrumanMessages.rpc);

;// CONCATENATED MODULE: ./src/plugins/FindTruman/Worker/index.ts


const worker = {
    ...base/* base */.u,
    init (signal) {}
};
/* harmony default export */ const Worker = (worker);


/***/ })

}]);