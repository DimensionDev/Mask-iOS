"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6680],{

/***/ 6680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fetchGrant": () => (/* reexport */ fetchGrant)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./src/plugins/Gitcoin/constants.ts
var constants = __webpack_require__(86424);
;// CONCATENATED MODULE: ./src/plugins/Gitcoin/apis/index.ts


async function fetchGrant(id) {
    if (!/\d+/.test(id)) return;
    const response = await fetch(dist_default()(constants/* GITCOIN_API_GRANTS_V1 */.tq, {
        id
    }));
    const { grants  } = await response.json();
    return grants;
}

;// CONCATENATED MODULE: ./src/plugins/Gitcoin/services.ts



/***/ })

}]);