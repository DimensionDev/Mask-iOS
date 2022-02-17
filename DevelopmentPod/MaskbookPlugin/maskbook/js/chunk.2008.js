"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2008],{

/***/ 72008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getMaskBoxMetadata": () => (/* reexport */ getMaskBoxMetadata)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/rss3-next@0.6.17/node_modules/rss3-next/dist/browser/RSS3.js
var RSS3 = __webpack_require__(42303);
var RSS3_default = /*#__PURE__*/__webpack_require__.n(RSS3);
// EXTERNAL MODULE: ./src/plugins/MaskBox/constants.ts
var constants = __webpack_require__(43017);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/rss3.ts


async function createRSS(address) {
    return new (RSS3_default())({
        endpoint: constants/* RSS3_ENDPOINT */.P,
        address,
        sign: async (message)=>{
            throw new Error('Not supported.');
        }
    });
}
async function getMaskBoxMetadata(boxId, creator) {
    var ref;
    const rss = await createRSS(creator);
    const file = await rss.files.get(rss.account.address);
    if (!file) throw new Error('The account was not found.');
    const boxes = (ref = Object.getOwnPropertyDescriptor(file, '_box')) === null || ref === void 0 ? void 0 : ref.value;
    return boxes === null || boxes === void 0 ? void 0 : boxes[boxId];
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/index.ts


;// CONCATENATED MODULE: ./src/plugins/MaskBox/services.ts



/***/ })

}]);