"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3262],{

/***/ 94651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* reexport */ getMaskBoxMetadata),
  "g": () => (/* reexport */ getMerkleProof)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/rss3-next@0.6.17_typescript@4.6.1-rc/node_modules/rss3-next/dist/browser/RSS3.js
var RSS3 = __webpack_require__(6351);
var RSS3_default = /*#__PURE__*/__webpack_require__.n(RSS3);
// EXTERNAL MODULE: ./src/plugins/MaskBox/constants.ts
var constants = __webpack_require__(42731);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/rss3.ts


async function createRSS(address) {
    return new (RSS3_default())({
        endpoint: constants/* RSS3_ENDPOINT */.Py,
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/merkleProof.ts


async function getMerkleProof(leaf, root) {
    try {
        const response = await fetch(dist_default()(constants/* MERKLE_PROOF_ENDPOINT */.mN, {
            leaf,
            root: root.replace(/^0x/, '')
        }));
        return await response.json();
    } catch (err) {
        throw new Error(Reflect.get(Object(err), 'message'));
    }
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/index.ts




/***/ }),

/***/ 73262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMaskBoxMetadata": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   "getMerkleProof": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.g)
/* harmony export */ });
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94651);



/***/ })

}]);