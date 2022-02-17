"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[537],{

/***/ 30537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getTweetData": () => (/* reexport */ getTweetData)
});

// EXTERNAL MODULE: ./src/plugins/VCent/constants.ts
var constants = __webpack_require__(89406);
;// CONCATENATED MODULE: ./src/plugins/VCent/apis/index.ts

async function getTweetData(tweetAddress) {
    const url = constants/* TWEET_BASE_URL */.Y + tweetAddress;
    const response = await fetch(url);
    const tweetResponse = await response.json();
    return tweetResponse.results;
}

;// CONCATENATED MODULE: ./src/plugins/VCent/services.ts



/***/ })

}]);