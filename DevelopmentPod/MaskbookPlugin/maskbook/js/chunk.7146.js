"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7146],{

/***/ 23042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Worker)
});

// EXTERNAL MODULE: ./src/plugins/FindTruman/base.ts
var base = __webpack_require__(60688);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(89729);
// EXTERNAL MODULE: ./src/plugins/FindTruman/constants.ts + 1 modules
var constants = __webpack_require__(30395);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/messages.ts


if (false) {}
const PluginFindTrumanMessages = (0,src/* createPluginMessage */.I4)(constants/* FIND_TRUMAN_PLUGIN_ID */.h4);
const PluginFindTrumanRPC = (0,src/* createPluginRPC */.V8)(constants/* FIND_TRUMAN_PLUGIN_ID */.h4, ()=>__webpack_require__.e(/* import() */ 6294).then(__webpack_require__.bind(__webpack_require__, 36294))
, PluginFindTrumanMessages.rpc);

;// CONCATENATED MODULE: ./src/plugins/FindTruman/Worker/index.ts


const worker = {
    ...base/* base */.u,
    init (signal) {}
};
/* harmony default export */ const Worker = (worker);


/***/ })

}]);