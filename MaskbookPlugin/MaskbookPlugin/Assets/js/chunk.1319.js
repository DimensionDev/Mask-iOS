"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1404],{

/***/ 51404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeImage": () => (/* binding */ encodeImage),
/* harmony export */   "decodeImage": () => (/* binding */ decodeImage),
/* harmony export */   "decodeImageUrl": () => (/* binding */ decodeImageUrl)
/* harmony export */ });
/* harmony import */ var _dimensiondev_stego_js_cjs_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50710);
/* harmony import */ var _dimensiondev_stego_js_cjs_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_stego_js_cjs_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_stego_js_cjs_grayscale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34523);
/* harmony import */ var _dimensiondev_stego_js_cjs_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84140);
/* harmony import */ var _dimensiondev_stego_js_cjs_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_stego_js_cjs_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96578);
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59935);
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38266);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11494);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__);








(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__.Environment.ManifestBackground);
const dimensionPreset = [
    {
        width: 1024,
        height: 1240,
        mask: 'v1'
    },
    {
        width: 1200,
        height: 681,
        mask: 'v2'
    },
    {
        width: 1200,
        height: 680,
        mask: 'transparent'
    },
    {
        width: 1000,
        height: 558,
        mask: 'transparent'
    },
    {
        width: 1000,
        height: 560,
        mask: 'v4'
    }, 
];
const defaultOptions = {
    size: 8,
    narrow: 0,
    copies: 3,
    tolerance: 128
};
const isSameDimension = (dimension, otherDimension)=>dimension.width === otherDimension.width && dimension.height === otherDimension.height
;
const images = {
    v1: new URL(/* asset import */ __webpack_require__(93894), __webpack_require__.b).toString(),
    v2: new URL(/* asset import */ __webpack_require__(86348), __webpack_require__.b).toString(),
    v4: new URL(/* asset import */ __webpack_require__(486), __webpack_require__.b).toString(),
    transparent: new URL(/* asset import */ __webpack_require__(16760), __webpack_require__.b).toString()
};
const getMaskBuf = (0,_utils_memoize__WEBPACK_IMPORTED_MODULE_4__/* .memoizePromise */ .J)(async (type)=>(0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__/* .blobToArrayBuffer */ .vZ)(await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .downloadUrl */ .GR)(images[type]))
, void 0);
async function encodeImage(buf, options) {
    const { template  } = options;
    const _buf = typeof buf === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__/* .decodeArrayBuffer */ .xe)(buf) : buf;
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__/* .encodeArrayBuffer */ .ll)(await (0,_dimensiondev_stego_js_cjs_dom__WEBPACK_IMPORTED_MODULE_0__.encode)(_buf, await getMaskBuf(template === 'v2' || template === 'v4' ? template : 'transparent'), {
        ...defaultOptions,
        fakeMaskPixels: false,
        cropEdgePixels: template !== 'v2' && template !== 'v3' && template !== 'v4',
        exhaustPixels: true,
        grayscaleAlgorithm: template === 'v3' ? _dimensiondev_stego_js_cjs_grayscale__WEBPACK_IMPORTED_MODULE_1__.GrayscaleAlgorithm.LUMINANCE : _dimensiondev_stego_js_cjs_grayscale__WEBPACK_IMPORTED_MODULE_1__.GrayscaleAlgorithm.NONE,
        transformAlgorithm: _dimensiondev_stego_js_cjs_transform__WEBPACK_IMPORTED_MODULE_2__.TransformAlgorithm.FFT1D,
        ...options
    }));
}
async function decodeImage(buf, options) {
    const _buf = typeof buf === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__/* .decodeArrayBuffer */ .xe)(buf) : buf;
    const _dimension = (0,_utils_image__WEBPACK_IMPORTED_MODULE_5__/* .getDimension */ .F)(_buf);
    const preset = dimensionPreset.find((d)=>isSameDimension(d, _dimension)
    );
    if (!preset) return '';
    return (0,_dimensiondev_stego_js_cjs_dom__WEBPACK_IMPORTED_MODULE_0__.decode)(_buf, await getMaskBuf(preset.mask), {
        ...defaultOptions,
        transformAlgorithm: _dimensiondev_stego_js_cjs_transform__WEBPACK_IMPORTED_MODULE_2__.TransformAlgorithm.FFT1D,
        ...options
    });
}
async function decodeImageUrl(url, options) {
    return decodeImage(await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__/* .blobToArrayBuffer */ .vZ)(await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .downloadUrl */ .GR)(url)), options);
}


/***/ }),

/***/ 38266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getDimension)
/* harmony export */ });
/* harmony import */ var _dimensiondev_stego_js_cjs_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4023);
/* eslint-disable no-bitwise */ 
function getDimension(buf) {
    const fallback = {
        width: 0,
        height: 0
    };
    switch((0,_dimensiondev_stego_js_cjs_helper__WEBPACK_IMPORTED_MODULE_0__.imgType)(new Uint8Array(buf))){
        case 'image/jpeg':
            var ref;
            return (ref = getDimensionAsJPEG(buf)) !== null && ref !== void 0 ? ref : fallback;
        case 'image/png':
            return getDimensionAsPNG(buf);
        default:
            return fallback;
    }
}
function getDimensionAsPNG(buf) {
    const dataView = new DataView(buf, 0, 28);
    return {
        width: dataView.getInt32(16),
        height: dataView.getInt32(20)
    };
}
/**
 * Get dimension of a JPEG image
 *
 * @see http://vip.sugovica.hu/Sardi/kepnezo/JPEG%20File%20Layout%20and%20Format.htm
 */ function getDimensionAsJPEG(buf) {
    const dataView = new DataView(buf);
    let i = 0;
    if (dataView.getUint8(i) === 255 && dataView.getUint8(i + 1) === 216 && dataView.getUint8(i + 2) === 255 && dataView.getUint8(i + 3) === 224 // APP0 marker
    ) {
        i += 4;
        if (dataView.getUint8(i + 2) === 'J'.charCodeAt(0) && dataView.getUint8(i + 3) === 'F'.charCodeAt(0) && dataView.getUint8(i + 4) === 'I'.charCodeAt(0) && dataView.getUint8(i + 5) === 'F'.charCodeAt(0) && dataView.getUint8(i + 6) === 0) {
            let block_length = dataView.getUint8(i) * 256 + dataView.getUint8(i + 1);
            while(i < dataView.byteLength){
                i += block_length;
                if (i >= dataView.byteLength) return;
                if (dataView.getUint8(i) !== 255) return;
                if (dataView.getUint8(i + 1) === 192 || dataView.getUint8(i + 1) === 194 // SOF2 marker
                ) {
                    return {
                        height: dataView.getUint8(i + 5) * 256 + dataView.getUint8(i + 6),
                        width: dataView.getUint8(i + 7) * 256 + dataView.getUint8(i + 8)
                    };
                } else {
                    i += 2;
                    block_length = dataView.getUint8(i) * 256 + dataView.getUint8(i + 1);
                }
            }
        }
    }
    return;
}


/***/ }),

/***/ 59935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ memoizePromise)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The promise version of lodash-es/memoize
 * @param f An async function
 * @param resolver If the function has 1 param, it can be undefined
 * as `x => x`. If it has more than 1 param, you must specify a function
 * to map the param the memoize key.
 */ function memoizePromise(f, resolver) {
    if (resolver === undefined) resolver = (x)=>x
    ;
    const memorizedFunction = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.memoize)(async function(...args) {
        try {
            // ? DO NOT remove "await" here
            return await f(...args);
        } catch (error) {
            memorizedFunction.cache.delete(resolver(...args));
            throw error;
        }
    }, resolver);
    return memorizedFunction;
}


/***/ }),

/***/ 16760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59099de55fb0e5132fb9.png";

/***/ }),

/***/ 93894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6f6f6a9e71495dcb147.png";

/***/ }),

/***/ 86348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05b047fd9a2685c83493.png";

/***/ }),

/***/ 486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ce52a3440dbeb9d55ef.png";

/***/ })

}]);