"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[766],{

/***/ 50766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Worker)
});

// EXTERNAL MODULE: ../plugins/Flow/src/base.ts + 7 modules
var base = __webpack_require__(95261);
// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(79936);
// EXTERNAL MODULE: ../plugins/Flow/src/constants.ts
var constants = __webpack_require__(47517);
;// CONCATENATED MODULE: ../plugins/Flow/src/messages.ts


if (false) {}
const FlowMessage = (0,entry/* createPluginMessage */.I4)(constants/* PLUGIN_ID */.Uu);
const FlowRPC = (0,entry/* createPluginRPC */.V8)(constants/* PLUGIN_ID */.Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(5815), __webpack_require__.e(6813), __webpack_require__.e(9239), __webpack_require__.e(6982), __webpack_require__.e(9997), __webpack_require__.e(8177)]).then(__webpack_require__.bind(__webpack_require__, 68177))
, FlowMessage.rpc);

;// CONCATENATED MODULE: ../plugins/Flow/src/Worker/index.ts


const worker = {
    ...base/* base */.u,
    init (signal) {}
};
/* harmony default export */ const Worker = (worker);


/***/ })

}]);