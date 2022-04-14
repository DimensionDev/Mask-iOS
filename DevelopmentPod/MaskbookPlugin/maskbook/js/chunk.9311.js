"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9311],{

/***/ 98648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$B": () => (/* binding */ MinInt256),
/* harmony export */   "Bz": () => (/* binding */ MaxUint256),
/* harmony export */   "Ce": () => (/* binding */ WeiPerEther),
/* harmony export */   "PS": () => (/* binding */ MaxInt256),
/* harmony export */   "Py": () => (/* binding */ Two),
/* harmony export */   "_Y": () => (/* binding */ Zero),
/* harmony export */   "fh": () => (/* binding */ One),
/* harmony export */   "tL": () => (/* binding */ NegativeOne)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84757);

const NegativeOne = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(-1));
const Zero = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(0));
const One = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(1));
const Two = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(2));
const WeiPerEther = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("1000000000000000000"));
const MaxUint256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
const MinInt256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("-0x8000000000000000000000000000000000000000000000000000000000000000"));
const MaxInt256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));

//# sourceMappingURL=bignumbers.js.map

/***/ }),

/***/ 39125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": () => (/* binding */ id)
/* harmony export */ });
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42716);


function id(text) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .w)((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(text));
}
//# sourceMappingURL=id.js.map

/***/ }),

/***/ 27930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dk": () => (/* binding */ Description),
  "uj": () => (/* binding */ checkProperties),
  "p$": () => (/* binding */ deepCopy),
  "zG": () => (/* binding */ defineReadOnly),
  "tu": () => (/* binding */ getStatic),
  "mE": () => (/* binding */ resolveProperties),
  "DC": () => (/* binding */ shallowCopy)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.5.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(89930);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/_version.js
const version = "properties/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const logger = new lib_esm/* Logger */.Yd(version);
function defineReadOnly(object, name, value) {
    Object.defineProperty(object, name, {
        enumerable: true,
        value: value,
        writable: false,
    });
}
// Crawl up the constructor chain to find a static method
function getStatic(ctor, key) {
    for (let i = 0; i < 32; i++) {
        if (ctor[key]) {
            return ctor[key];
        }
        if (!ctor.prototype || typeof (ctor.prototype) !== "object") {
            break;
        }
        ctor = Object.getPrototypeOf(ctor.prototype).constructor;
    }
    return null;
}
function resolveProperties(object) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = Object.keys(object).map((key) => {
            const value = object[key];
            return Promise.resolve(value).then((v) => ({ key: key, value: v }));
        });
        const results = yield Promise.all(promises);
        return results.reduce((accum, result) => {
            accum[(result.key)] = result.value;
            return accum;
        }, {});
    });
}
function checkProperties(object, properties) {
    if (!object || typeof (object) !== "object") {
        logger.throwArgumentError("invalid object", "object", object);
    }
    Object.keys(object).forEach((key) => {
        if (!properties[key]) {
            logger.throwArgumentError("invalid object key - " + key, "transaction:" + key, object);
        }
    });
}
function shallowCopy(object) {
    const result = {};
    for (const key in object) {
        result[key] = object[key];
    }
    return result;
}
const opaque = { bigint: true, boolean: true, "function": true, number: true, string: true };
function _isFrozen(object) {
    // Opaque objects are not mutable, so safe to copy by assignment
    if (object === undefined || object === null || opaque[typeof (object)]) {
        return true;
    }
    if (Array.isArray(object) || typeof (object) === "object") {
        if (!Object.isFrozen(object)) {
            return false;
        }
        const keys = Object.keys(object);
        for (let i = 0; i < keys.length; i++) {
            if (!_isFrozen(object[keys[i]])) {
                return false;
            }
        }
        return true;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
// Returns a new copy of object, such that no properties may be replaced.
// New properties may be added only to objects.
function _deepCopy(object) {
    if (_isFrozen(object)) {
        return object;
    }
    // Arrays are mutable, so we need to create a copy
    if (Array.isArray(object)) {
        return Object.freeze(object.map((item) => deepCopy(item)));
    }
    if (typeof (object) === "object") {
        const result = {};
        for (const key in object) {
            const value = object[key];
            if (value === undefined) {
                continue;
            }
            defineReadOnly(result, key, deepCopy(value));
        }
        return result;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
function deepCopy(object) {
    return _deepCopy(object);
}
class Description {
    constructor(info) {
        for (const key in info) {
            this[key] = deepCopy(info[key]);
        }
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 71252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gy": () => (/* binding */ computeHmac),
  "JQ": () => (/* binding */ sha256)
});

// UNUSED EXPORTS: ripemd160, sha512

// EXTERNAL MODULE: ../../node_modules/.pnpm/hash.js@1.1.7/node_modules/hash.js/lib/hash.js
var lib_hash = __webpack_require__(45370);
var hash_default = /*#__PURE__*/__webpack_require__.n(lib_hash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.5.0/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(61115);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.4.0/node_modules/@ethersproject/sha2/lib.esm/types.js
var SupportedAlgorithm;
(function (SupportedAlgorithm) {
    SupportedAlgorithm["sha256"] = "sha256";
    SupportedAlgorithm["sha512"] = "sha512";
})(SupportedAlgorithm || (SupportedAlgorithm = {}));
;
//# sourceMappingURL=types.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.4.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(281);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.4.0/node_modules/@ethersproject/sha2/lib.esm/_version.js
const version = "sha2/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.4.0/node_modules/@ethersproject/sha2/lib.esm/sha2.js


//const _ripemd160 = _hash.ripemd160;




const logger = new logger_lib_esm/* Logger */.Yd(version);
function ripemd160(data) {
    return "0x" + (hash.ripemd160().update(arrayify(data)).digest("hex"));
}
function sha256(data) {
    return "0x" + (hash_default().sha256().update((0,lib_esm/* arrayify */.lE)(data)).digest("hex"));
}
function sha512(data) {
    return "0x" + (hash.sha512().update(arrayify(data)).digest("hex"));
}
function computeHmac(algorithm, key, data) {
    if (!SupportedAlgorithm[algorithm]) {
        logger.throwError("unsupported algorithm " + algorithm, logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
            operation: "hmac",
            algorithm: algorithm
        });
    }
    return "0x" + hash_default().hmac((hash_default())[algorithm], (0,lib_esm/* arrayify */.lE)(key)).update((0,lib_esm/* arrayify */.lE)(data)).digest("hex");
}
//# sourceMappingURL=sha2.js.map

/***/ }),

/***/ 85396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keccak256": () => (/* binding */ keccak256),
/* harmony export */   "pack": () => (/* binding */ pack),
/* harmony export */   "sha256": () => (/* binding */ sha256)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84757);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5241);
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_sha2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71252);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42716);






const regexBytes = new RegExp("^bytes([0-9]+)$");
const regexNumber = new RegExp("^(u?int)([0-9]*)$");
const regexArray = new RegExp("^(.*)\\[([0-9]*)\\]$");
const Zeros = "0000000000000000000000000000000000000000000000000000000000000000";
function _pack(type, value, isArray) {
    switch (type) {
        case "address":
            if (isArray) {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.zeroPad)(value, 32);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(value);
        case "string":
            return (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(value);
        case "bytes":
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(value);
        case "bool":
            value = (value ? "0x01" : "0x00");
            if (isArray) {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.zeroPad)(value, 32);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(value);
    }
    let match = type.match(regexNumber);
    if (match) {
        //let signed = (match[1] === "int")
        let size = parseInt(match[2] || "256");
        if ((match[2] && String(size) !== match[2]) || (size % 8 !== 0) || size === 0 || size > 256) {
            throw new Error("invalid number type - " + type);
        }
        if (isArray) {
            size = 256;
        }
        value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber.from */ .O$.from(value).toTwos(size);
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.zeroPad)(value, size / 8);
    }
    match = type.match(regexBytes);
    if (match) {
        const size = parseInt(match[1]);
        if (String(size) !== match[1] || size === 0 || size > 32) {
            throw new Error("invalid bytes type - " + type);
        }
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(value).byteLength !== size) {
            throw new Error("invalid value for " + type);
        }
        if (isArray) {
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)((value + Zeros).substring(0, 66));
        }
        return value;
    }
    match = type.match(regexArray);
    if (match && Array.isArray(value)) {
        const baseType = match[1];
        const count = parseInt(match[2] || String(value.length));
        if (count != value.length) {
            throw new Error("invalid value for " + type);
        }
        const result = [];
        value.forEach(function (value) {
            result.push(_pack(baseType, value, true));
        });
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.concat)(result);
    }
    throw new Error("invalid type - " + type);
}
// @TODO: Array Enum
function pack(types, values) {
    if (types.length != values.length) {
        throw new Error("type/value count mismatch");
    }
    const tight = [];
    types.forEach(function (type, index) {
        tight.push(_pack(type, values[index]));
    });
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.concat)(tight));
}
function keccak256(types, values) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__/* .keccak256 */ .w)(pack(types, values));
}
function sha256(types, values) {
    return (0,_ethersproject_sha2__WEBPACK_IMPORTED_MODULE_4__/* .sha256 */ .JQ)(pack(types, values));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 90475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ useExchangeProxyContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/ExchangeProxy.json
const ExchangeProxy_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_weth","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountIn","type":"uint256"},{"internalType":"uint256","name":"minTotalAmountOut","type":"uint256"}],"name":"batchSwapExactIn","outputs":[{"internalType":"uint256","name":"totalAmountOut","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"maxTotalAmountIn","type":"uint256"}],"name":"batchSwapExactOut","outputs":[{"internalType":"uint256","name":"totalAmountIn","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[][]","name":"swapSequences","type":"tuple[][]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountIn","type":"uint256"},{"internalType":"uint256","name":"minTotalAmountOut","type":"uint256"}],"name":"multihopBatchSwapExactIn","outputs":[{"internalType":"uint256","name":"totalAmountOut","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[][]","name":"swapSequences","type":"tuple[][]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"maxTotalAmountIn","type":"uint256"}],"name":"multihopBatchSwapExactOut","outputs":[{"internalType":"uint256","name":"totalAmountIn","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_registry","type":"address"}],"name":"setRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountIn","type":"uint256"},{"internalType":"uint256","name":"minTotalAmountOut","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"smartSwapExactIn","outputs":[{"internalType":"uint256","name":"totalAmountOut","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxTotalAmountIn","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"smartSwapExactOut","outputs":[{"internalType":"uint256","name":"totalAmountIn","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"viewSplitExactIn","outputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"uint256","name":"totalOutput","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"viewSplitExactOut","outputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"uint256","name":"totalOutput","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/balancer/useExchangeProxyContract.ts


function useExchangeProxyContract(chainId) {
    const { BALANCER_EXCHANGE_PROXY_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(chainId);
    return (0,useContract/* useContract */.cq)(BALANCER_EXCHANGE_PROXY_ADDRESS, ExchangeProxy_namespaceObject, chainId);
}


/***/ }),

/***/ 25100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Mw": () => (/* reexport */ getPairAddress),
  "fU": () => (/* reexport */ isNativeTokenWrapper),
  "_B": () => (/* reexport */ isTradeBetter),
  "Jc": () => (/* reexport */ swapErrorToUserReadableMessage),
  "SG": () => (/* reexport */ toBips),
  "t6": () => (/* reexport */ toUniswapCurrency),
  "rn": () => (/* reexport */ toUniswapCurrencyAmount),
  "Su": () => (/* reexport */ toUniswapPercent),
  "_y": () => (/* reexport */ toUniswapToken),
  "nz": () => (/* reexport */ uniswapCurrencyAmountTo),
  "jX": () => (/* reexport */ uniswapPercentTo),
  "Cw": () => (/* reexport */ uniswapPriceTo),
  "kf": () => (/* reexport */ uniswapTokenTo)
});

// UNUSED EXPORTS: ExtendedEther, toUniswapChainId, uniswapChainIdTo

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+address@5.4.0/node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(99747);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+solidity@5.4.0/node_modules/@ethersproject/solidity/lib.esm/index.js
var solidity_lib_esm = __webpack_require__(85396);
;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/pair.ts


const map = new Map();
// This is a dynamically version of address generate algorithm borrowed from the Pair class of uniswap-skd
function getPairAddress(factoryAddress, initCodeHash, tokenA, tokenB) {
    if (!tokenA || !tokenB) return '';
    const tokens = tokenA.sortsBefore(tokenB) ? [
        tokenA,
        tokenB
    ] : [
        tokenB,
        tokenA
    ] // does safety checks
    ;
    let cache = map.get(initCodeHash);
    const token0Addr = tokens[0].address;
    const token1Addr = tokens[1].address;
    if (cache?.[token0Addr]?.[token1Addr] === undefined) {
        cache = {
            ...cache,
            [token0Addr]: {
                ...cache?.[token0Addr],
                [token1Addr]: (0,lib_esm.getCreate2Address)(factoryAddress, (0,solidity_lib_esm.keccak256)([
                    'bytes'
                ], [
                    (0,solidity_lib_esm.pack)([
                        'address',
                        'address'
                    ], [
                        token0Addr,
                        token1Addr
                    ])
                ]), initCodeHash)
            }
        };
        map.set(initCodeHash, cache);
    }
    return cache[token0Addr][token1Addr];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/jsbi@3.1.4/node_modules/jsbi/dist/jsbi-umd.js
var jsbi_umd = __webpack_require__(24994);
var jsbi_umd_default = /*#__PURE__*/__webpack_require__.n(jsbi_umd);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(77184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+sdk-core@3.0.1/node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js
var sdk_core_esm = __webpack_require__(59800);
// EXTERNAL MODULE: ../web3-shared/evm/constants/tokens.ts
var tokens = __webpack_require__(10466);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(89260);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts + 2 modules
var constants = __webpack_require__(22684);
;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/uniswap.ts







function swapErrorToUserReadableMessage(error) {
    let reason;
    while(error){
        reason = (error.reason ?? error.message) ?? reason;
        error = error.error ?? error.data?.originalError;
    }
    if (reason?.startsWith('execution reverted: ')) reason = reason.substr('execution reverted: '.length);
    switch(reason){
        case 'UniswapV2Router: EXPIRED':
            return 'The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.';
        case 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT':
        case 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT':
            return 'This transaction will not succeed either due to price movement or fee on transfer.';
        case 'TransferHelper: TRANSFER_FROM_FAILED':
            return 'The input token cannot be transferred. There may be an issue with the input token.';
        case 'UniswapV2: TRANSFER_FAILED':
            return 'The output token cannot be transferred. There may be an issue with the output token.';
        case 'UniswapV2: K':
            return 'The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.';
        case 'Too little received':
        case 'Too much requested':
        case 'STF':
            return 'This transaction will not succeed due to price movement.';
        case 'TF':
            return 'The output token cannot be transferred. There may be an issue with the output token.';
        default:
            if (reason?.includes('undefined is not an object')) {
                console.error(error, reason);
                return 'An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.';
            }
            return `Unknown error${reason ? `: "${reason}"` : ''}.`;
    }
}
function toUniswapChainId(chainId) {
    return chainId;
}
function toUniswapPercent(numerator, denominator) {
    return new sdk_core_esm.Percent(jsbi_umd_default().BigInt(numerator), jsbi_umd_default().BigInt(denominator));
}
function toUniswapCurrency(chainId, token) {
    try {
        if (!token) return;
        const extendedEther = ExtendedEther.onChain(chainId);
        const weth = toUniswapToken(chainId, tokens/* WNATIVE */.FX[chainId]);
        if (weth && (0,address/* isSameAddress */.Wr)(token.address, weth.address)) return weth;
        return token.type === types/* EthereumTokenType.Native */.Dr.Native ? extendedEther : toUniswapToken(chainId, token);
    } catch  {
        return;
    }
}
function toUniswapToken(chainId, token) {
    return new sdk_core_esm.Token(toUniswapChainId(chainId), (0,formatter/* formatEthereumAddress */.j8)(token.address), token.decimals, token.symbol, token.name);
}
function toUniswapCurrencyAmount(chainId, token, amount) {
    if (!token || !amount) return;
    const currency = toUniswapCurrency(chainId, token);
    if (!currency) return;
    try {
        if ((0,src/* isGreaterThan */.T1)(amount, 0)) return sdk_core_esm.CurrencyAmount.fromRawAmount(currency, jsbi_umd_default().BigInt(amount));
    } catch  {
        return;
    }
    return;
}
function uniswapChainIdTo(chainId) {
    return chainId;
}
function uniswapPercentTo(percent) {
    return new (bignumber_default())(percent.toFixed(2)).dividedBy(100);
}
function uniswapPriceTo(price) {
    return new (bignumber_default())(price.scalar.numerator.toString()).dividedBy(price.scalar.denominator.toString());
}
function uniswapTokenTo(token) {
    return {
        type: [
            'eth',
            'matic',
            'bnb'
        ].includes(token.name?.toLowerCase() ?? '') ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20,
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
        address: (0,formatter/* formatEthereumAddress */.j8)(token.address),
        chainId: uniswapChainIdTo(token.chainId)
    };
}
function uniswapCurrencyAmountTo(currencyAmount) {
    return (0,src/* pow10 */.wA)(currencyAmount.currency.decimals).multipliedBy(currencyAmount.toFixed());
}
function isTradeBetter(tradeA, tradeB, minimumDelta = constants/* ZERO_PERCENT */.fI) {
    if (tradeA && !tradeB) return false;
    if (tradeB && !tradeA) return true;
    if (!tradeA || !tradeB) return undefined;
    if (tradeA.tradeType !== tradeB.tradeType || !tradeA.inputAmount.currency.equals(tradeB.inputAmount.currency) || !tradeB.outputAmount.currency.equals(tradeB.outputAmount.currency)) {
        throw new Error('Comparing incomparable trades');
    }
    if (minimumDelta.equalTo(constants/* ZERO_PERCENT */.fI)) {
        return tradeA.executionPrice.lessThan(tradeB.executionPrice);
    } else {
        return tradeA.executionPrice.asFraction.multiply(minimumDelta.add(constants/* ONE_HUNDRED_PERCENT */.yC)).lessThan(tradeB.executionPrice);
    }
}
class ExtendedEther extends sdk_core_esm.Ether {
    get wrapped() {
        if (this.chainId in tokens/* WNATIVE */.FX) return ExtendedEther.wrapEther(this.chainId);
        throw new Error('Unsupported chain ID');
    }
    static onChain(chainId) {
        return this._cachedEther[chainId] ?? (this._cachedEther[chainId] = new ExtendedEther(chainId));
    }
}
ExtendedEther._cachedEther = {};
ExtendedEther.wrapEther = (0,memoize/* default */.Z)((chainId)=>toUniswapToken(chainId, tokens/* WNATIVE */.FX[chainId])
);

;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/trader.ts


function toBips(bips) {
    return new (bignumber_default())(bips).dividedBy(constants/* BIPS_BASE */.PM);
}
function isNativeTokenWrapper(trade) {
    const trade_ = trade;
    return trade_?.trade_?.isNativeTokenWrapper ?? false;
}

;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/index.ts





/***/ }),

/***/ 61486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22684);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(3758), __webpack_require__.e(187), __webpack_require__.e(444), __webpack_require__.e(1851), __webpack_require__.e(211), __webpack_require__.e(7604), __webpack_require__.e(3375), __webpack_require__.e(1626), __webpack_require__.e(5256)]).then(__webpack_require__.bind(__webpack_require__, 96031))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 64065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DG": () => (/* binding */ currentSingleHopOnlySettings),
/* harmony export */   "It": () => (/* binding */ currentSlippageSettings),
/* harmony export */   "Lc": () => (/* binding */ getCurrentPreferredCoinIdSettings),
/* harmony export */   "dm": () => (/* binding */ approvedTokensFromUniswap),
/* harmony export */   "gG": () => (/* binding */ currentDataProviderSettings)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24646);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22684);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97096);




/**
 * The slippage tolerance of trader
 */ const currentSlippageSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+slippageTolerance`, _constants__WEBPACK_IMPORTED_MODULE_2__/* .SLIPPAGE_DEFAULT */ .Nd);
/**
 * Single Hop
 */ const currentSingleHopOnlySettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+singleHopOnly`, false);
/**
 * The default data provider
 */ const currentDataProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+dataProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO);
// #region the user preferred coin id
const coinGeckoPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+currentCoinGeckoPreferredCoinId`, '{}');
const coinMarketCapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+currentCoinMarketCapPreferredCoinId`, '{}');
const coinUniswapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+currentCoinUniswapPreferredCoinId`, '{}');
function getCurrentPreferredCoinIdSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapPreferredCoinId;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
// #endregion
/**
 * The approved tokens from uniswap
 */ const approvedTokensFromUniswap = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+approvedTokens`, '[]');


/***/ }),

/***/ 42493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ SUPPORTED_CHAIN_ID_LIST)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65506);

const SUPPORTED_CHAIN_ID_LIST = [
    _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_.Mainnet,
    _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_.BSC,
    _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_.Matic
];


/***/ }),

/***/ 23680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useTradeAmount)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89260);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86248);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22684);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5115);





function useTradeAmount(trade, allowedSlippage = _constants__WEBPACK_IMPORTED_MODULE_3__/* .SLIPPAGE_DEFAULT */ .Nd) {
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!trade) return _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ZERO */ .xE;
        return trade.strategy === _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeStrategy.ExactIn */ .tB.ExactIn ? trade.outputAmount.dividedBy(_constants__WEBPACK_IMPORTED_MODULE_3__/* .ONE_BIPS.multipliedBy */ .IS.multipliedBy(allowedSlippage).plus(1)).integerValue((bignumber_js__WEBPACK_IMPORTED_MODULE_1___default().ROUND_DOWN)) : trade.inputAmount.times(_constants__WEBPACK_IMPORTED_MODULE_3__/* .ONE_BIPS.multipliedBy */ .IS.multipliedBy(allowedSlippage).plus(1).integerValue((bignumber_js__WEBPACK_IMPORTED_MODULE_1___default().ROUND_DOWN)));
    }, [
        trade
    ]);
}


/***/ }),

/***/ 87183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ useSwapParameters)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/jsbi@3.1.4/node_modules/jsbi/dist/jsbi-umd.js
var jsbi_umd = __webpack_require__(24994);
var jsbi_umd_default = /*#__PURE__*/__webpack_require__.n(jsbi_umd);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+sdk-core@3.0.1/node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js
var sdk_core_esm = __webpack_require__(59800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+v2-sdk@3.0.0-alpha.2/node_modules/@uniswap/v2-sdk/dist/v2-sdk.esm.js
var v2_sdk_esm = __webpack_require__(72054);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts + 2 modules
var constants = __webpack_require__(22684);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+v3-sdk@3.3.2/node_modules/@uniswap/v3-sdk/dist/index.js
var dist = __webpack_require__(48314);
// EXTERNAL MODULE: ../web3-contracts/abis/RouterV2.json
var RouterV2 = __webpack_require__(50092);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/useRouterV2Contract.ts


function useRouterV2Contract(address, chainId) {
    return (0,useContract/* useContract */.cq)(address, RouterV2, chainId);
}

// EXTERNAL MODULE: ../web3-contracts/abis/SwapRouter.json
var SwapRouter = __webpack_require__(75517);
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/useSwapRouterContract.ts


function useSwapRouterContract(address, chainId) {
    return (0,useContract/* useContract */.cq)(address, SwapRouter, chainId);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useMulticallContract.ts + 1 modules
var useMulticallContract = __webpack_require__(61114);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useCurrentBlockTimestamp.ts




function useCurrentBlockTimestamp(targetChainId) {
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const chainId = targetChainId ?? currentChainId;
    const multicallContract = (0,useMulticallContract/* useMulticallContract */.g)(chainId);
    return (0,useAsyncRetry/* default */.Z)(async ()=>multicallContract?.methods.getCurrentBlockTimestamp().call({
            chainId: (0,lib.numberToHex)(chainId)
        })
    , [
        multicallContract,
        chainId
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(32925);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTransactionDeadline.ts





function useTransactionDeadline() {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { value: timestamp  } = useCurrentBlockTimestamp(chainId);
    return (0,react.useMemo)(()=>{
        if (!timestamp) return;
        const timestamp_ = new (bignumber_default())(timestamp ?? '0');
        return timestamp_.plus(types/* ChainId.Mainnet */.a_.Mainnet === chainId ? constants/* DEFAULT_TRANSACTION_DEADLINE */.ag : constants/* L2_TRANSACTION_DEADLINE */.rV);
    }, [
        chainId,
        timestamp
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/useGetTradeContext.ts
var useGetTradeContext = __webpack_require__(70935);
// EXTERNAL MODULE: ../public-api/src/index.ts
var src = __webpack_require__(97096);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeParameters.ts













const UNISWAP_BIPS_BASE = jsbi_umd_default().BigInt(10_000);
const swapCallParameters = (trade, options, tradeProvider)=>{
    const parameters = v2_sdk_esm/* Router.swapCallParameters */.F0.swapCallParameters(trade, options);
    if (tradeProvider === src/* TradeProvider.PANGOLIN */.z4.PANGOLIN || tradeProvider === src/* TradeProvider.TRADERJOE */.z4.TRADERJOE) {
        switch(parameters.methodName){
            case 'WETH':
                parameters.methodName = 'WAVAX';
                break;
            case 'swapTokensForExactETH':
                parameters.methodName = 'swapTokensForExactAVAX';
                break;
            case 'swapExactTokensForETHSupportingFeeOnTransferTokens':
                parameters.methodName = 'swapExactTokensForAVAXSupportingFeeOnTransferTokens';
                break;
            case 'swapExactTokensForETH':
                parameters.methodName = 'swapExactTokensForAVAX';
                break;
            case 'swapExactETHForTokensSupportingFeeOnTransferTokens':
                parameters.methodName = 'swapExactAVAXForTokensSupportingFeeOnTransferTokens';
                break;
            case 'swapExactETHForTokens':
                parameters.methodName = 'swapExactAVAXForTokens';
                break;
        }
    }
    return parameters;
};
/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param tradeProvider
 */ function useSwapParameters(trade, tradeProvider, allowedSlippage = constants/* SLIPPAGE_DEFAULT */.Nd) {
    const account = (0,useAccount/* useAccount */.m)();
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(tradeProvider);
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const deadline = useTransactionDeadline();
    const routerV2Contract = useRouterV2Contract(context?.ROUTER_CONTRACT_ADDRESS, targetChainId);
    const swapRouterContract = useSwapRouterContract(context?.ROUTER_CONTRACT_ADDRESS, targetChainId);
    return (0,react.useMemo)(()=>{
        if (!account || !trade?.trade_ || !deadline) return [];
        const { trade_  } = trade;
        const allowedSlippage_ = new sdk_core_esm.Percent(jsbi_umd_default().BigInt(allowedSlippage), UNISWAP_BIPS_BASE);
        if (trade_ instanceof v2_sdk_esm/* Trade */.ho) {
            if (!routerV2Contract) return [];
            const parameters = [
                swapCallParameters(trade_, {
                    feeOnTransfer: false,
                    allowedSlippage: allowedSlippage_,
                    recipient: account,
                    ttl: deadline.toNumber()
                }, tradeProvider), 
            ];
            if (trade_.tradeType === sdk_core_esm.TradeType.EXACT_INPUT) parameters.push(swapCallParameters(trade_, {
                feeOnTransfer: true,
                allowedSlippage: allowedSlippage_,
                recipient: account,
                ttl: deadline.toNumber()
            }, tradeProvider));
            return parameters.map(({ methodName , args , value  })=>{
                return {
                    address: routerV2Contract.options.address,
                    calldata: routerV2Contract.methods[methodName](// @ts-ignore
                    ...args).encodeABI(),
                    value
                };
            });
        } else {
            if (!swapRouterContract) return [];
            const { value , calldata  } = dist.SwapRouter.swapCallParameters(trade_, {
                recipient: account,
                slippageTolerance: allowedSlippage_,
                deadline: deadline.toNumber()
            });
            return [
                {
                    address: swapRouterContract.options.address,
                    calldata,
                    value
                }, 
            ];
        }
    }, [
        account,
        allowedSlippage,
        deadline,
        trade,
        routerV2Contract,
        swapRouterContract
    ]);
}


/***/ }),

/***/ 39850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AF": () => (/* binding */ AllProviderTradeActionType),
  "TX": () => (/* binding */ AllProviderTradeContext)
});

// UNUSED EXPORTS: useAllProviderTradeContext

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(32925);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/native/useTrade.ts



function useTrade(inputToken, outputToken) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(targetChainId);
    // to mimic the same interface with other trade providers
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!inputToken || !outputToken) return false;
        // none of the tokens is native token
        if (inputToken.type !== types/* EthereumTokenType.Native */.Dr.Native && outputToken.type !== types/* EthereumTokenType.Native */.Dr.Native) return false;
        // none of the tokens is wrapped native token
        if (!(0,address/* isSameAddress */.Wr)(inputToken.address, WNATIVE_ADDRESS) && !(0,address/* isSameAddress */.Wr)(outputToken.address, WNATIVE_ADDRESS)) return false;
        return true;
    }, [
        WNATIVE_ADDRESS,
        inputToken,
        outputToken
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
var Trader_types = __webpack_require__(5115);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/native/useTradeComputed.ts





function useTradeComputed(isNativeTokenWrapper, strategy, inputAmount, outputAmount, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!isNativeTokenWrapper) return null;
        // the trade amount follows trade strategy
        const tradeAmount = new (bignumber_default())(strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn ? inputAmount || '0' : outputAmount || '0');
        // skip to render 0s
        if (tradeAmount.isZero()) return null;
        return {
            strategy,
            inputToken,
            outputToken,
            inputAmount: tradeAmount,
            outputAmount: tradeAmount,
            executionPrice: base_src/* ZERO */.xE,
            maximumSold: base_src/* ZERO */.xE,
            minimumReceived: tradeAmount,
            priceImpact: base_src/* ZERO */.xE,
            fee: base_src/* ZERO */.xE,
            trade_: {
                isWrap: strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn && inputToken?.type === types/* EthereumTokenType.Native */.Dr.Native || strategy === Trader_types/* TradeStrategy.ExactOut */.tB.ExactOut && outputToken?.type === types/* EthereumTokenType.Native */.Dr.Native,
                isNativeTokenWrapper
            }
        };
    }, [
        isNativeTokenWrapper,
        strategy,
        inputAmount,
        outputAmount,
        inputToken,
        outputToken
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/helpers/index.ts + 3 modules
var helpers = __webpack_require__(25100);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+v2-sdk@3.0.0-alpha.2/node_modules/@uniswap/v2-sdk/dist/v2-sdk.esm.js
var v2_sdk_esm = __webpack_require__(72054);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatMap.js
var flatMap = __webpack_require__(16571);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+sdk-core@3.0.1/node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js
var sdk_core_esm = __webpack_require__(59800);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useMulticall.ts
var useMulticall = __webpack_require__(89650);
;// CONCATENATED MODULE: ../web3-contracts/abis/Pair.json
const Pair_namespaceObject = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var hooks_useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/usePairContract.ts


function usePairContract(address, chainId) {
    return useContract(address, PairABI, chainId);
}
function usePairContracts(listOfAddress, chainId) {
    return (0,hooks_useContract/* useContracts */.GP)(listOfAddress, Pair_namespaceObject, chainId);
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/useGetTradeContext.ts
var useGetTradeContext = __webpack_require__(70935);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(46140);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTargetBlockNumber.ts


function useTargetBlockNumber(targetChainId) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId
    });
    return (0,useAsync/* default */.Z)(async ()=>{
        if (targetChainId === chainId) return undefined;
        return web3.eth.getBlockNumber();
    }, [
        targetChainId,
        chainId,
        web3
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/usePairs.ts












var PairState;
(function(PairState) {
    PairState[PairState["NOT_EXISTS"] = 0] = "NOT_EXISTS";
    PairState[PairState["EXISTS"] = 1] = "EXISTS";
    PairState[PairState["INVALID"] = 2] = "INVALID";
})(PairState || (PairState = {}));
function usePairs(tradeProvider, tokenPairs) {
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(tradeProvider);
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const listOfPairAddress = (0,react.useMemo)(()=>{
        if (!context) return src/* EMPTY_LIST */.rP;
        const { FACTORY_CONTRACT_ADDRESS , INIT_CODE_HASH  } = context;
        if (!FACTORY_CONTRACT_ADDRESS || !INIT_CODE_HASH) return src/* EMPTY_LIST */.rP;
        return tokenPairs.map(([tokenA, tokenB])=>tokenA && tokenB && !tokenA.equals(tokenB) ? (0,helpers/* getPairAddress */.Mw)(FACTORY_CONTRACT_ADDRESS, INIT_CODE_HASH, tokenA, tokenB) : undefined
        );
    }, [
        context,
        tokenPairs
    ]);
    const { value: targetBlockNumber  } = useTargetBlockNumber(targetChainId);
    // get reserves for each pair
    const contracts = usePairContracts([
        ...new Set(listOfPairAddress.filter(Boolean))
    ], targetChainId);
    const [results, calls, _, callback] = (0,useMulticall/* useMultipleContractSingleData */._Y)(contracts, Array.from({
        length: contracts.length
    }).fill('getReserves'), [], targetChainId, targetBlockNumber);
    const asyncResults = (0,useAsyncRetry/* default */.Z)(()=>callback(calls, {
            chainId: (0,lib.numberToHex)(targetChainId)
        })
    , [
        calls,
        callback,
        targetChainId
    ]);
    // compose reserves from multicall results
    const listOfReserves = (0,react.useMemo)(()=>{
        return results.map((x, i)=>{
            if (x.error || !x.value) return undefined;
            return {
                id: contracts[i].options.address,
                reserve0: x.value._reserve0,
                reserve1: x.value._reserve1
            };
        }).filter((value)=>value !== undefined
        );
    }, [
        results,
        contracts
    ]);
    // compose pairs from list of reserves
    const pairs = (0,react.useMemo)(()=>{
        return listOfPairAddress.map((address, i)=>{
            try {
                const tokenA = tokenPairs[i][0];
                const tokenB = tokenPairs[i][1];
                if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [
                    PairState.INVALID,
                    null
                ];
                const { reserve0 , reserve1  } = listOfReserves.find((x)=>x.id.toLowerCase() === address?.toLowerCase()
                ) ?? {};
                if (!reserve0 || !reserve1) return [
                    PairState.NOT_EXISTS,
                    null
                ];
                const [token0, token1] = tokenA.sortsBefore(tokenB) ? [
                    tokenA,
                    tokenB
                ] : [
                    tokenB,
                    tokenA
                ];
                return [
                    PairState.EXISTS,
                    new v2_sdk_esm/* Pair */.sO(sdk_core_esm.CurrencyAmount.fromRawAmount(token0, reserve0), sdk_core_esm.CurrencyAmount.fromRawAmount(token1, reserve1)), 
                ];
            } catch  {
                return [];
            }
        });
    }, [
        listOfPairAddress,
        listOfReserves,
        tokenPairs
    ]);
    return {
        ...asyncResults,
        value: pairs
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useAllCommonPairs.ts







function useAllCurrencyCombinations(tradeProvider, currencyA, currencyB) {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const chainIdValid = (0,chainDetailed/* isChainIdValid */.Ji)(chainId);
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(tradeProvider);
    const [tokenA1, tokenB1] = chainIdValid ? [
        currencyA?.wrapped,
        currencyB?.wrapped
    ] : [
        undefined,
        undefined
    ];
    const bases = (0,react.useMemo)(()=>{
        if (!chainIdValid) return [];
        const common = context?.AGAINST_TOKENS?.[chainId] ?? [];
        const additionalA = tokenA1 ? context?.ADDITIONAL_TOKENS?.[chainId]?.[tokenA1.address] ?? [] : [];
        const additionalB = tokenB1 ? context?.ADDITIONAL_TOKENS?.[chainId]?.[tokenB1.address] ?? [] : [];
        return [
            ...common,
            ...additionalA,
            ...additionalB
        ].map((x)=>(0,helpers/* toUniswapToken */._y)(chainId, x)
        );
    }, [
        chainId,
        chainIdValid,
        tokenA1?.address,
        tokenB1?.address
    ]);
    const basePairs = (0,react.useMemo)(()=>(0,flatMap/* default */.Z)(bases, (base)=>bases.map((otherBase)=>[
                    base,
                    otherBase
                ]
            )
        )
    , [
        bases
    ]);
    return (0,react.useMemo)(()=>{
        if (!tokenA1 || !tokenB1) return [];
        return [
            // the direct pair
            [
                tokenA1,
                tokenB1
            ],
            // token A against all bases
            ...bases.map((base)=>[
                    tokenA1,
                    base
                ]
            ),
            // token B against all bases
            ...bases.map((base)=>[
                    tokenB1,
                    base
                ]
            ),
            // each base against all bases
            ...basePairs, 
        ].filter((tokens)=>Boolean(tokens[0] && tokens[1])
        ).filter(([t0, t1])=>t0.address !== t1.address
        ).filter(([tokenA, tokenB])=>{
            if (!chainIdValid) return true;
            const customBases = context?.CUSTOM_TOKENS?.[chainId];
            const customBasesA = customBases?.[tokenA.address]?.map((x)=>(0,helpers/* toUniswapToken */._y)(chainId, x)
            );
            const customBasesB = customBases?.[tokenB.address]?.map((x)=>(0,helpers/* toUniswapToken */._y)(chainId, x)
            );
            if (!customBasesA && !customBasesB) return true;
            if (customBasesA && !customBasesA.find((base)=>tokenB.equals(base)
            )) return false;
            if (customBasesB && !customBasesB.find((base)=>tokenA.equals(base)
            )) return false;
            return true;
        });
    }, [
        tokenA1?.address,
        tokenB1?.address,
        bases,
        basePairs,
        chainId,
        chainIdValid
    ]);
}
function useAllCommonPairs(tradeProvider, currencyA, currencyB) {
    const allCurrencyCombinations = useAllCurrencyCombinations(tradeProvider, currencyA, currencyB);
    const { value: allPairs , ...asyncResult } = usePairs(tradeProvider, allCurrencyCombinations);
    // only pass along valid pairs, non-duplicated pairs
    const allPairs_ = (0,react.useMemo)(()=>Object.values(allPairs// filter out invalid pairs
        .filter((result)=>Boolean(result[0] === PairState.EXISTS && result[1])
        )// filter out duplicated pairs
        .reduce((memo, [, current])=>{
            memo[current.liquidityToken.address] = memo[current.liquidityToken.address] ?? current;
            return memo;
        }, {}))
    , [
        allPairs
    ]);
    return {
        ...asyncResult,
        value: allPairs_
    };
}

// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts + 2 modules
var Trader_constants = __webpack_require__(22684);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useV2BestTrade.ts





function useV2BestTradeExactIn(tradeProvider, currencyAmountIn, currencyOut, { maxHops =Trader_constants/* MAX_HOP */.s9  } = {}) {
    const { value: allowedPairs = [] , ...asyncResult } = useAllCommonPairs(tradeProvider, currencyAmountIn?.currency, currencyOut);
    const bestTrade = (0,react.useMemo)(()=>{
        if (currencyAmountIn && currencyOut && allowedPairs.length > 0) {
            if (maxHops === 1) {
                return v2_sdk_esm/* Trade.bestTradeExactIn */.ho.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, {
                    maxHops: 1,
                    maxNumResults: 1
                })[0] ?? null;
            }
            // search through trades with varying hops, find best trade out of them
            let bestTradeSoFar = null;
            for(let i = 1; i <= maxHops; i += 1){
                const currentTrade = v2_sdk_esm/* Trade.bestTradeExactIn */.ho.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, {
                    maxHops: i,
                    maxNumResults: 1
                })[0] ?? null;
                // if current trade is best yet, save it
                if ((0,helpers/* isTradeBetter */._B)(bestTradeSoFar, currentTrade, Trader_constants/* BETTER_TRADE_LESS_HOPS_THRESHOLD */.Ru)) {
                    bestTradeSoFar = currentTrade;
                }
            }
            return bestTradeSoFar;
        }
        return null;
    }, [
        allowedPairs,
        currencyAmountIn,
        currencyOut,
        maxHops
    ]);
    return {
        ...asyncResult,
        // override the trade type from @uniswap/v2-sdk
        value: bestTrade
    };
}
function useV2BestTradeExactOut(tradeProvider, currencyIn, currencyAmountOut, { maxHops =Trader_constants/* MAX_HOP */.s9  } = {}) {
    const { value: allowedPairs = [] , ...asyncResult } = useAllCommonPairs(tradeProvider, currencyIn, currencyAmountOut?.currency);
    const bestTrade = (0,react.useMemo)(()=>{
        if (currencyIn && currencyAmountOut && allowedPairs.length > 0) {
            if (maxHops === 1) {
                return v2_sdk_esm/* Trade.bestTradeExactOut */.ho.bestTradeExactOut(allowedPairs, currencyIn, currencyAmountOut, {
                    maxHops: 1,
                    maxNumResults: 1
                })[0] ?? null;
            }
            // search through trades with varying hops, find best trade out of them
            let bestTradeSoFar = null;
            for(let i = 1; i <= maxHops; i += 1){
                const currentTrade = v2_sdk_esm/* Trade.bestTradeExactOut */.ho.bestTradeExactOut(allowedPairs, currencyIn, currencyAmountOut, {
                    maxHops: i,
                    maxNumResults: 1
                })[0] ?? null;
                if ((0,helpers/* isTradeBetter */._B)(bestTradeSoFar, currentTrade, Trader_constants/* BETTER_TRADE_LESS_HOPS_THRESHOLD */.Ru)) {
                    bestTradeSoFar = currentTrade;
                }
            }
            return bestTradeSoFar;
        }
        return null;
    }, [
        currencyIn,
        currencyAmountOut,
        allowedPairs,
        maxHops
    ]);
    return {
        ...asyncResult,
        // override the trade type from @uniswap/v2-sdk
        value: bestTrade
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+v3-sdk@3.3.2/node_modules/@uniswap/v3-sdk/dist/index.js
var dist = __webpack_require__(48314);
;// CONCATENATED MODULE: ../web3-contracts/abis/Quoter.json
const Quoter_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH9","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH9","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"quoteExactInput","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"name":"quoteExactInputSingle","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"uint256","name":"amountOut","type":"uint256"}],"name":"quoteExactOutput","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"name":"quoteExactOutputSingle","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"path","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/useQuoterContract.ts


function useQuoterContract(chainId) {
    const { UNISWAP_V3_QUOTER_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(chainId);
    return (0,hooks_useContract/* useContract */.cq)(UNISWAP_V3_QUOTER_ADDRESS, Quoter_namespaceObject, chainId);
}

;// CONCATENATED MODULE: ../web3-contracts/abis/PoolStateV3.json
const PoolStateV3_namespaceObject = JSON.parse('[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/usePoolContract.ts


function usePoolContract(address) {
    return useContract(address, PoolStateV3ABI);
}
function usePoolContracts(listOfAddress, chainId) {
    return (0,hooks_useContract/* useContracts */.GP)(listOfAddress, PoolStateV3_namespaceObject, chainId);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/usePools.ts









var PoolState;
(function(PoolState) {
    PoolState[PoolState["LOADING"] = 0] = "LOADING";
    PoolState[PoolState["NOT_EXISTS"] = 1] = "NOT_EXISTS";
    PoolState[PoolState["EXISTS"] = 2] = "EXISTS";
    PoolState[PoolState["INVALID"] = 3] = "INVALID";
})(PoolState || (PoolState = {}));
function usePools(tradeProvider, poolKeys) {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(tradeProvider);
    const transformed = (0,react.useMemo)(()=>{
        return poolKeys.map(([currencyA, currencyB, feeAmount])=>{
            if (!chainId || !currencyA || !currencyB || !feeAmount) return null;
            const tokenA = currencyA?.wrapped;
            const tokenB = currencyB?.wrapped;
            if (!tokenA || !tokenB || tokenA.equals(tokenB)) return null;
            const [token0, token1] = tokenA.sortsBefore(tokenB) ? [
                tokenA,
                tokenB
            ] : [
                tokenB,
                tokenA
            ];
            return [
                token0,
                token1,
                feeAmount
            ];
        });
    }, [
        chainId,
        poolKeys
    ]);
    const poolAddresses = (0,react.useMemo)(()=>{
        try {
            return transformed.map((value)=>{
                if (!context?.IS_UNISWAP_V3_LIKE) return '';
                if (!context?.FACTORY_CONTRACT_ADDRESS || !value) return '';
                return (0,dist.computePoolAddress)({
                    factoryAddress: context.FACTORY_CONTRACT_ADDRESS,
                    tokenA: value[0],
                    tokenB: value[1],
                    fee: value[2]
                });
            });
        } catch  {
            return [];
        }
    }, [
        chainId,
        transformed,
        context?.FACTORY_CONTRACT_ADDRESS
    ]);
    const poolContracts = usePoolContracts(poolAddresses, chainId);
    const { value: targetBlockNumber  } = useTargetBlockNumber(chainId);
    const [slot0s, slot0sCalls, slot0sState, slot0sCallback] = (0,useMulticall/* useMultipleContractSingleData */._Y)(poolContracts, Array.from({
        length: poolContracts.length
    }).fill('slot0'), [], chainId, targetBlockNumber);
    const [liquidities, liquiditiesCalls, liquiditiesState, liquiditiesCallback] = (0,useMulticall/* useMultipleContractSingleData */._Y)(poolContracts, Array.from({
        length: poolContracts.length
    }).fill('liquidity'), [], chainId, targetBlockNumber);
    (0,useAsyncRetry/* default */.Z)(()=>slot0sCallback(slot0sCalls)
    , [
        slot0sCallback,
        slot0sCalls
    ]);
    (0,useAsyncRetry/* default */.Z)(()=>liquiditiesCallback(liquiditiesCalls)
    , [
        liquiditiesCallback,
        liquiditiesCalls
    ]);
    return (0,react.useMemo)(()=>{
        return poolKeys.map((_key, index)=>{
            const [token0, token1, fee] = transformed[index] ?? [];
            if (!token0 || !token1 || !fee) return [
                PoolState.INVALID,
                null
            ];
            const { value: slot0 , error: slot0Error  } = slot0s[index] ?? {};
            const { value: liquidity , error: liquidityError  } = liquidities[index] ?? {};
            const slot0Loading = slot0sState.type === useMulticall/* MulticallStateType.PENDING */.F_.PENDING;
            const liquiditiesLoading = liquiditiesState.type === useMulticall/* MulticallStateType.PENDING */.F_.PENDING;
            if (slot0Error || liquidityError) return [
                PoolState.INVALID,
                null
            ];
            if (slot0Loading || liquiditiesLoading) return [
                PoolState.LOADING,
                null
            ];
            if (!slot0 || !liquidity) return [
                PoolState.NOT_EXISTS,
                null
            ];
            if ((0,base_src/* isZero */.Fr)(slot0.sqrtPriceX96 ?? 0)) return [
                PoolState.NOT_EXISTS,
                null
            ];
            try {
                return [
                    PoolState.EXISTS,
                    new dist.Pool(token0, token1, fee, slot0.sqrtPriceX96, liquidity[0], Number.parseInt(slot0.tick, 10)), 
                ];
            } catch (error) {
                console.error('Error when constructing the pool', error);
                return [
                    PoolState.NOT_EXISTS,
                    null
                ];
            }
        });
    }, [
        slot0s,
        liquidities,
        slot0sState.type,
        liquiditiesState.type,
        poolKeys,
        transformed
    ]);
}
function usePool(tradeProvider, currencyA, currencyB, feeAmount) {
    const poolKeys = useMemo(()=>[
            [
                currencyA,
                currencyB,
                feeAmount
            ]
        ]
    , [
        currencyA,
        currencyB,
        feeAmount
    ]);
    return usePools(tradeProvider, poolKeys)[0];
}

// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(97096);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useV3SwapPools.ts





/**
 * Returns all the existing pools that should be considered for swapping between an input currency and an output currency
 * @param currencyIn the input currency
 * @param currencyOut the output currency
 */ function useV3SwapPools(currencyIn, currencyOut) {
    const allCurrencyCombinations = useAllCurrencyCombinations(public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3, currencyIn, currencyOut);
    const allCurrencyCombinationsWithAllFees = (0,react.useMemo)(()=>allCurrencyCombinations.reduce((list, [tokenA, tokenB])=>{
            return list.concat([
                [
                    tokenA,
                    tokenB,
                    dist.FeeAmount.LOW
                ],
                [
                    tokenA,
                    tokenB,
                    dist.FeeAmount.MEDIUM
                ],
                [
                    tokenA,
                    tokenB,
                    dist.FeeAmount.HIGH
                ], 
            ]);
        }, [])
    , [
        allCurrencyCombinations
    ]);
    const pools = usePools(public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3, allCurrencyCombinationsWithAllFees);
    return (0,react.useMemo)(()=>{
        return {
            pools: pools.filter((tuple)=>{
                return tuple[0] === PoolState.EXISTS && tuple[1] !== null;
            }).map(([, pool])=>pool
            ),
            loading: pools.some(([state])=>state === PoolState.LOADING
            )
        };
    }, [
        pools
    ]);
}

// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var settings = __webpack_require__(64065);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useSingleHopOnly.ts


function useSingleHopOnly() {
    const singleHopOnly = (0,shared_base_ui_src/* useValueRef */.E)(settings/* currentSingleHopOnlySettings */.DG);
    return singleHopOnly;
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useAllV3Routes.ts





function computeAllRoutes(currencyIn, currencyOut, pools, chainId, currentPath = [], allPaths = [], startCurrencyIn = currencyIn, maxHops = 2) {
    const tokenIn = currencyIn?.wrapped;
    const tokenOut = currencyOut?.wrapped;
    if (!tokenIn || !tokenOut) throw new Error('Missing tokenIn/tokenOut');
    try {
        for (const pool of pools){
            if (currentPath.includes(pool) || !pool.involvesToken(tokenIn)) continue;
            const outputToken = pool.token0.equals(tokenIn) ? pool.token1 : pool.token0;
            if (outputToken.equals(tokenOut)) {
                allPaths.push(new dist.Route([
                    ...currentPath,
                    pool
                ], startCurrencyIn, currencyOut));
            } else if (maxHops > 1) {
                computeAllRoutes(outputToken, currencyOut, pools, chainId, [
                    ...currentPath,
                    pool
                ], allPaths, startCurrencyIn, maxHops - 1);
            }
        }
    } catch  {
        return [];
    }
    return allPaths;
}
/**
 * Returns all the routes from an input currency to an output currency
 * @param currencyIn the input currency
 * @param currencyOut the output currency
 */ function useAllV3Routes(currencyIn, currencyOut) {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { pools , loading: poolsLoading  } = useV3SwapPools(currencyIn, currencyOut);
    const singleHopOnly = useSingleHopOnly();
    return (0,react.useMemo)(()=>{
        if (poolsLoading || !chainId || !pools || !currencyIn || !currencyOut) return {
            loading: true,
            routes: []
        };
        const routes = computeAllRoutes(currencyIn, currencyOut, pools, chainId, [], [], currencyIn, singleHopOnly ? 1 : 2);
        return {
            loading: false,
            routes
        };
    }, [
        chainId,
        currencyIn?.wrapped.address,
        currencyOut?.wrapped.address,
        pools,
        poolsLoading,
        singleHopOnly
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useV3BestTrade.ts











var V3TradeState;
(function(V3TradeState) {
    V3TradeState[V3TradeState["LOADING"] = 0] = "LOADING";
    V3TradeState[V3TradeState["INVALID"] = 1] = "INVALID";
    V3TradeState[V3TradeState["NO_ROUTE_FOUND"] = 2] = "NO_ROUTE_FOUND";
    V3TradeState[V3TradeState["VALID"] = 3] = "VALID";
    V3TradeState[V3TradeState["SYNCING"] = 4] = "SYNCING";
})(V3TradeState || (V3TradeState = {}));
/**
 * Returns the best v3 trade for a desired exact input swap
 * @param amountIn the amount to swap in
 * @param currencyOut the desired output currency
 */ function useV3BestTradeExactIn(amountIn, currencyOut) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const quoterContract = useQuoterContract(targetChainId);
    const { routes , loading: routesLoading  } = useAllV3Routes(amountIn?.currency, currencyOut);
    const quoteExactInInputs = (0,react.useMemo)(()=>{
        try {
            return routes.map((route)=>[
                    (0,dist.encodeRouteToPath)(route, false),
                    amountIn ? `0x${amountIn.quotient.toString(16)}` : undefined
                ]
            );
        } catch  {
            return [];
        }
    }, [
        amountIn,
        routes
    ]);
    const { value: blockNumber  } = useTargetBlockNumber(targetChainId);
    const [quotesResults, quotesCalls, , quotesCallback] = (0,useMulticall/* useSingleContractMultipleData */.es)(quoterContract, Array.from({
        length: quoteExactInInputs.length
    }).fill('quoteExactInput'), quoteExactInInputs, Trader_constants/* DEFAULT_MULTICALL_GAS_LIMIT */.jg, targetChainId, blockNumber);
    const { loading: quotesLoading , error: quotesError , retry: quotesRetry ,  } = (0,useAsyncRetry/* default */.Z)(()=>quotesCallback(quotesCalls)
    , [
        quoterContract,
        quotesCalls.map((x)=>x.join()
        ).join()
    ]);
    const asyncBestTrade = (()=>{
        if (!amountIn || !currencyOut) {
            return {
                value: undefined,
                loading: false,
                error: new Error('Invalid trade info.')
            };
        }
        if (routesLoading || quotesLoading || routes.length && !quotesResults.length && !quotesError) {
            return {
                value: undefined,
                loading: true,
                error: undefined
            };
        }
        const { bestRoute , amountOut  } = quotesResults.filter((x)=>x.succeed
        ).reduce((currentBest, { value  }, i)=>{
            if (!value) return currentBest;
            if (currentBest.amountOut === null) {
                return {
                    bestRoute: routes[i],
                    amountOut: value
                };
            } else if (new (bignumber_default())(currentBest.amountOut).lt(value)) {
                return {
                    bestRoute: routes[i],
                    amountOut: value
                };
            }
            return currentBest;
        }, {
            bestRoute: null,
            amountOut: null
        });
        if (!bestRoute || !amountOut) {
            return {
                value: undefined,
                loading: false,
                error: new Error('No route found.')
            };
        }
        try {
            return {
                value: dist.Trade.createUncheckedTrade({
                    route: bestRoute,
                    tradeType: sdk_core_esm.TradeType.EXACT_INPUT,
                    inputAmount: amountIn,
                    outputAmount: sdk_core_esm.CurrencyAmount.fromRawAmount(currencyOut, amountOut)
                }),
                loading: false,
                error: undefined
            };
        } catch  {
            return {
                value: undefined,
                loading: false,
                error: new Error('Uniswap SDK Error')
            };
        }
    })();
    return {
        ...asyncBestTrade,
        retry: quotesRetry
    };
}
/**
 * Returns the best v3 trade for a desired exact output swap
 * @param currencyIn the desired input currency
 * @param amountOut the amount to swap out
 */ function useV3BestTradeExactOut(currencyIn, amountOut) {
    const { routes , loading: routesLoading  } = useAllV3Routes(currencyIn, amountOut?.currency);
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const quoterContract = useQuoterContract(targetChainId);
    const quoteExactOutInputs = (0,react.useMemo)(()=>{
        try {
            return routes.map((route)=>[
                    (0,dist.encodeRouteToPath)(route, true),
                    amountOut ? `0x${amountOut.quotient.toString(16)}` : undefined, 
                ]
            );
        } catch  {
            return [];
        }
    }, [
        amountOut,
        routes
    ]);
    const { value: blockNumber  } = useTargetBlockNumber(targetChainId);
    const [quotesResults, quotesCalls, , quotesCallback] = (0,useMulticall/* useSingleContractMultipleData */.es)(quoterContract, Array.from({
        length: quoteExactOutInputs.length
    }).fill('quoteExactOutput'), quoteExactOutInputs, Trader_constants/* DEFAULT_MULTICALL_GAS_LIMIT */.jg, targetChainId, blockNumber);
    const { loading: quotesLoading , error: quotesError , retry: quotesRetry ,  } = (0,useAsyncRetry/* default */.Z)(()=>quotesCallback(quotesCalls)
    , [
        quotesCallback,
        quotesCalls.map((x)=>x.join()
        ).join()
    ]);
    const asyncBestTrade = (()=>{
        if (!amountOut || !currencyIn || quotesResults.some(({ error  })=>!!error
        )) {
            return {
                value: undefined,
                loading: false,
                error: new Error('Invalid trade info.')
            };
        }
        if (routesLoading || quotesLoading || routes.length && !quotesResults.length && !quotesError) {
            return {
                value: undefined,
                loading: true,
                error: undefined
            };
        }
        const { bestRoute , amountIn  } = quotesResults.filter((x)=>x.succeed
        ).reduce((currentBest, { value  }, i)=>{
            if (!value) return currentBest;
            if (currentBest.amountIn === null) {
                return {
                    bestRoute: routes[i],
                    amountIn: value
                };
            } else if (new (bignumber_default())(currentBest.amountIn).gt(value)) {
                return {
                    bestRoute: routes[i],
                    amountIn: value
                };
            }
            return currentBest;
        }, {
            bestRoute: null,
            amountIn: null
        });
        if (!bestRoute || !amountIn) {
            return {
                value: undefined,
                loading: false,
                error: new Error('No route found.')
            };
        }
        try {
            return {
                value: dist.Trade.createUncheckedTrade({
                    route: bestRoute,
                    tradeType: sdk_core_esm.TradeType.EXACT_OUTPUT,
                    inputAmount: sdk_core_esm.CurrencyAmount.fromRawAmount(currencyIn, amountIn),
                    outputAmount: amountOut
                }),
                loading: false,
                error: undefined
            };
        } catch  {
            return {
                value: undefined,
                loading: false,
                error: new Error('Uniswap SDK Error.')
            };
        }
    })();
    return {
        ...asyncBestTrade,
        retry: quotesRetry
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTrade.ts






function useTrade_useTrade(strategy = Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount, outputAmount, inputToken, outputToken) {
    const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
    const isTradable = !(0,base_src/* isZero */.Fr)(inputAmount) || !(0,base_src/* isZero */.Fr)(outputAmount);
    const isNotAvailable = !isTradable || !inputToken || !outputToken || inputAmount === '0' && isExactIn || outputAmount === '0' && !isExactIn;
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const inputCurrency = (0,helpers/* toUniswapCurrency */.t6)(chainId, inputToken);
    const outputCurrency = (0,helpers/* toUniswapCurrency */.t6)(chainId, outputToken);
    const tradeAmount = (0,helpers/* toUniswapCurrencyAmount */.rn)(chainId, isExactIn ? inputToken : outputToken, isExactIn ? inputAmount : outputAmount);
    return {
        isNotAvailable,
        isExactIn,
        tradeAmount,
        inputCurrency,
        outputCurrency
    };
}
function useV2Trade(tradeProvider, strategy = Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount, outputAmount, inputToken, outputToken) {
    const { isNotAvailable , isExactIn , tradeAmount , inputCurrency , outputCurrency  } = useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken);
    // #region v2
    const v2BestTradeExactIn = useV2BestTradeExactIn(tradeProvider, isExactIn ? tradeAmount : undefined, outputCurrency);
    const v2BestTradeExactOut = useV2BestTradeExactOut(tradeProvider, inputCurrency, !isExactIn ? tradeAmount : undefined);
    // #endregion
    const v2Trade = isExactIn ? v2BestTradeExactIn : v2BestTradeExactOut;
    if (isNotAvailable) return {
        ...v2Trade,
        error: undefined,
        loading: false,
        value: null
    };
    return {
        ...v2Trade,
        value: v2Trade.value
    };
}
function useV3Trade(strategy = Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount, outputAmount, inputToken, outputToken) {
    const { isNotAvailable , isExactIn , tradeAmount , inputCurrency , outputCurrency  } = useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken);
    // #region v3
    const v3BestTradeExactIn = useV3BestTradeExactIn(isExactIn ? tradeAmount : undefined, outputCurrency);
    const v3BestTradeExactOut = useV3BestTradeExactOut(inputCurrency, !isExactIn ? tradeAmount : undefined);
    // #endregion
    const v3Trade = isExactIn ? v3BestTradeExactIn : v3BestTradeExactOut;
    if (isNotAvailable) return {
        ...v3Trade,
        error: undefined,
        loading: false,
        value: null
    };
    return {
        ...v3Trade,
        value: v3Trade.value ?? null
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clamp.js
var clamp = __webpack_require__(8218);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useSlippageTolerance.ts





function useSlippageTolerance() {
    const slippage_ = (0,shared_base_ui_src/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    const slippage = (0,clamp/* default */.Z)(slippage_, Trader_constants/* SLIPPAGE_MIN */.Bq, Trader_constants/* SLIPPAGE_MAX */.Q9);
    return (0,helpers/* toUniswapPercent */.Su)(slippage, 10000);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/jsbi@3.1.4/node_modules/jsbi/dist/jsbi-umd.js
var jsbi_umd = __webpack_require__(24994);
var jsbi_umd_default = /*#__PURE__*/__webpack_require__.n(jsbi_umd);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeBreakdown.ts




const BASE_FEE = new sdk_core_esm.Percent(jsbi_umd_default().BigInt(30), jsbi_umd_default().BigInt(10000));
const ONE_HUNDRED_PERCENT = new sdk_core_esm.Percent(jsbi_umd_default().BigInt(10000), jsbi_umd_default().BigInt(10000));
const INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(BASE_FEE);
// computes realized lp fee as a percent
function computeRealizedLPFeePercent(trade) {
    if (trade instanceof v2_sdk_esm/* Trade */.ho) {
        // for each hop in our trade, take away the x*y=k price impact from 0.3% fees
        // e.g. for 3 tokens/2 hops: 1 - ((1 - .03) * (1-.03))
        const percent = ONE_HUNDRED_PERCENT.subtract(trade.route.pairs.reduce((currentFee)=>currentFee.multiply(INPUT_FRACTION_AFTER_FEE)
        , ONE_HUNDRED_PERCENT));
        return new sdk_core_esm.Percent(percent.numerator, percent.denominator);
    } else {
        const percent = ONE_HUNDRED_PERCENT.subtract(trade.route.pools.reduce((currentFee, pool)=>currentFee.multiply(ONE_HUNDRED_PERCENT.subtract(new sdk_core_esm.Fraction(pool.fee, 1_000_000)))
        , ONE_HUNDRED_PERCENT));
        return new sdk_core_esm.Percent(percent.numerator, percent.denominator);
    }
}
// computes price breakdown for the trade
function computeRealizedLPFeeAmount(trade) {
    try {
        if (trade) {
            const realizedLPFee = computeRealizedLPFeePercent(trade);
            // the amount of the input that accrues to LPs
            return sdk_core_esm.CurrencyAmount.fromRawAmount(trade.inputAmount.currency, trade.inputAmount.multiply(realizedLPFee).quotient);
        }
        return undefined;
    } catch  {
        return undefined;
    }
}
function useTradeBreakdown(trade) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        const realizedLPFeePercent = computeRealizedLPFeePercent(trade);
        const realizedLPFeeAmount = computeRealizedLPFeeAmount(trade);
        return {
            realizedLPFeePercent,
            realizedLPFeeAmount,
            // different ver of @uniswap/sdk-core were used by @uniswap/v2-sdk and @uniswap/v3-sdk
            realizedLPFee: trade.inputAmount.multiply(realizedLPFeePercent),
            priceImpact: trade.priceImpact.subtract(realizedLPFeePercent)
        };
    }, [
        trade
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeComputed.ts







function useTradeComputed_useTradeComputed(trade, inputToken, outputToken, temporarySlippage) {
    const slippageSetting = useSlippageTolerance();
    const breakdown = useTradeBreakdown(trade);
    const slippage = temporarySlippage ? (0,helpers/* toUniswapPercent */.Su)(temporarySlippage, 10000) : slippageSetting;
    if (!trade) return null;
    return {
        strategy: trade.tradeType === sdk_core_esm.TradeType.EXACT_INPUT ? Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn : Trader_types/* TradeStrategy.ExactOut */.tB.ExactOut,
        inputToken,
        outputToken,
        inputAmount: (0,helpers/* uniswapCurrencyAmountTo */.nz)(trade.inputAmount),
        outputAmount: (0,helpers/* uniswapCurrencyAmountTo */.nz)(trade.outputAmount),
        // @ts-ignore
        executionPrice: (0,helpers/* uniswapPriceTo */.Cw)(trade.executionPrice),
        priceImpact: (0,helpers/* uniswapPercentTo */.jX)(breakdown?.priceImpact ?? trade.priceImpact),
        path: trade instanceof v2_sdk_esm/* Trade */.ho ? trade.route.path.map((x)=>[
                (0,helpers/* uniswapTokenTo */.kf)(x)
            ]
        ) : [],
        maximumSold: (0,helpers/* uniswapCurrencyAmountTo */.nz)(trade.maximumAmountIn(slippage)),
        minimumReceived: (0,helpers/* uniswapCurrencyAmountTo */.nz)(trade.minimumAmountOut(slippage)),
        fee: breakdown?.realizedLPFee ? (0,helpers/* uniswapCurrencyAmountTo */.nz)(breakdown.realizedLPFee) : base_src/* ZERO */.xE,
        trade_: trade
    };
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/uniswap/useTradeParameters.ts + 4 modules
var useTradeParameters = __webpack_require__(87183);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeGasLimit.ts







function useTradeGasLimit(trade, tradeProvider) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const tradeParameters = (0,useTradeParameters/* useSwapParameters */.C)(trade, tradeProvider);
    return (0,useAsync/* default */.Z)(async ()=>{
        // step 1: estimate each trade parameter
        const estimatedCalls = await Promise.all(tradeParameters.map(async (x)=>{
            const { address , calldata , value  } = x;
            const config = {
                from: account,
                to: address,
                data: calldata,
                ...!value || /^0x0*$/.test(value) ? {} : {
                    value: (0,lib.toHex)(value)
                }
            };
            return web3.eth.estimateGas(config).then((gasEstimate)=>{
                return {
                    call: x,
                    gasEstimate: new (bignumber_default())(gasEstimate)
                };
            }).catch((error1)=>{
                return web3.eth.call(config).then(()=>{
                    return {
                        call: x,
                        error: new Error('Gas estimate failed.')
                    };
                }).catch((error)=>{
                    return {
                        call: x,
                        error: new Error((0,helpers/* swapErrorToUserReadableMessage */.Jc)(error))
                    };
                });
            });
        }));
        // a successful estimation is a bignumber gas estimate and the next call is also a bignumber gas estimate
        let bestCallOption = estimatedCalls.find((el, ix, list)=>'gasEstimate' in el && (ix === list.length - 1 || 'gasEstimate' in list[ix + 1])
        );
        // check if any calls errored with a recognizable error
        if (!bestCallOption) {
            const errorCalls = estimatedCalls.filter((call)=>'error' in call
            );
            if (errorCalls.length > 0) {
                return;
            }
            const firstNoErrorCall = estimatedCalls.find((call)=>!('error' in call)
            );
            if (!firstNoErrorCall) {
                return;
            }
            bestCallOption = firstNoErrorCall;
        }
        return 'gasEstimate' in bestCallOption ? bestCallOption.gasEstimate.toNumber() : 0;
    }, [
        tradeParameters.length
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useUniswapV2Like.ts




function useUniswapV2Like(tradeProviders, traderProvider, inputAmount_, inputToken, outputToken) {
    const isTrader = tradeProviders.some((x)=>x === traderProvider
    );
    const trader_ = useV2Trade(traderProvider, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', isTrader ? inputToken : undefined, isTrader ? outputToken : undefined);
    const trader = useTradeComputed_useTradeComputed(trader_.value, inputToken, outputToken);
    const traderEstimateGas = useTradeGasLimit(trader, traderProvider);
    return {
        trader_,
        trader,
        traderEstimateGas
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(61486);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useSlippageTolerance.ts




function useSlippageTolerance_useSlippageTolerance() {
    const slippage_ = (0,shared_base_ui_src/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    return (0,clamp/* default */.Z)(slippage_, Trader_constants/* SLIPPAGE_MIN */.Bq, Trader_constants/* SLIPPAGE_MAX */.Q9);
}

// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var Wallet_settings = __webpack_require__(94232);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useTrade.ts









const NATIVE_TOKEN_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
function getNativeTokenLabel(networkType) {
    switch(networkType){
        case types/* NetworkType.Ethereum */.td.Ethereum:
            return 'ETH';
        case types/* NetworkType.Binance */.td.Binance:
        case types/* NetworkType.Polygon */.td.Polygon:
        case types/* NetworkType.Arbitrum */.td.Arbitrum:
        case types/* NetworkType.xDai */.td.xDai:
        case types/* NetworkType.Celo */.td.Celo:
        case types/* NetworkType.Fantom */.td.Fantom:
        case types/* NetworkType.Aurora */.td.Aurora:
        case types/* NetworkType.Boba */.td.Boba:
        case types/* NetworkType.Fuse */.td.Fuse:
        case types/* NetworkType.Metis */.td.Metis:
        case types/* NetworkType.Avalanche */.td.Avalanche:
        case types/* NetworkType.Optimistic */.td.Optimistic:
        case types/* NetworkType.Conflux */.td.Conflux:
            return NATIVE_TOKEN_ADDRESS;
        default:
            (0,esm/* safeUnreachable */.P)(networkType);
            return '';
    }
}
function _0x_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken, temporarySlippage) {
    const account = (0,useAccount/* useAccount */.m)();
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { NATIVE_TOKEN_ADDRESS: NATIVE_TOKEN_ADDRESS1  } = (0,constants/* useTokenConstants */.kd)(targetChainId);
    const slippageSetting = useSlippageTolerance_useSlippageTolerance();
    const slippage = temporarySlippage || slippageSetting;
    return (0,entry_web3/* useDoubleBlockBeatRetry */.Yn)(async ()=>{
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (inputAmount === '0' && isExactIn) return null;
        if (outputAmount === '0' && !isExactIn) return null;
        const sellToken = (0,address/* isNativeTokenAddress */.qw)(inputToken) ? getNativeTokenLabel((0,chainDetailed/* getNetworkTypeFromChainId */._T)(targetChainId) ?? Wallet_settings/* currentNetworkSettings.value */.fX.value) : inputToken.address;
        const buyToken = (0,address/* isNativeTokenAddress */.qw)(outputToken) ? getNativeTokenLabel((0,chainDetailed/* getNetworkTypeFromChainId */._T)(targetChainId) ?? Wallet_settings/* currentNetworkSettings.value */.fX.value) : outputToken.address;
        return messages/* PluginTraderRPC.swapQuote */.V.swapQuote({
            sellToken,
            buyToken,
            takerAddress: account,
            sellAmount: isExactIn ? inputAmount : void 0,
            buyAmount: isExactIn ? void 0 : outputAmount,
            skipValidation: true,
            slippagePercentage: slippage,
            affiliateAddress: Trader_constants/* ZRX_AFFILIATE_ADDRESS */.ku
        }, (0,chainDetailed/* getNetworkTypeFromChainId */._T)(targetChainId) ?? Wallet_settings/* currentNetworkSettings.value */.fX.value);
    }, [
        NATIVE_TOKEN_ADDRESS1,
        account,
        strategy,
        inputAmount,
        outputAmount,
        inputToken?.address,
        outputToken?.address,
        slippage, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useTradeComputed.ts



function _0x_useTradeComputed_useTradeComputed(trade, strategy, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const inputAmount = new (bignumber_default())(trade.sellAmount);
        const outputAmount = new (bignumber_default())(trade.buyAmount);
        return {
            strategy,
            inputToken,
            outputToken,
            inputAmount,
            outputAmount,
            executionPrice: new (bignumber_default())(trade.price),
            fee: new (bignumber_default())(trade.minimumProtocolFee),
            maximumSold: new (bignumber_default())(trade.sellAmount),
            minimumReceived: outputAmount,
            // minimumProtocolFee
            priceImpact: base_src/* ZERO */.xE,
            trade_: {
                ...trade,
                buyAmount: outputAmount.toFixed()
            }
        };
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/0x/constants.ts
var _0x_constants = __webpack_require__(42493);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 1 modules
var pick = __webpack_require__(46428);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useTradeGasLimit.ts






function useTradeGasLimit_useTradeGasLimit(tradeComputed) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const config = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_) return null;
        return {
            from: account,
            ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                'to',
                'data',
                'value'
            ])
        };
    }, [
        account,
        tradeComputed
    ]);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!tradeComputed?.trade_ || !_0x_constants/* SUPPORTED_CHAIN_ID_LIST.includes */.E.includes(targetChainId) || !config) return 0;
        return web3.eth.estimateGas(config);
    }, [
        targetChainId,
        tradeComputed,
        config,
        web3
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTrade.ts






function balancer_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(targetChainId);
    return (0,entry_web3/* useDoubleBlockBeatRetry */.Yn)(async ()=>{
        if (!WNATIVE_ADDRESS) return null;
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (inputAmount === '0' && isExactIn) return null;
        if (outputAmount === '0' && !isExactIn) return null;
        // the WETH address is used for looking for available pools
        const sellToken = (0,address/* isNativeTokenAddress */.qw)(inputToken) ? WNATIVE_ADDRESS : inputToken.address;
        const buyToken = (0,address/* isNativeTokenAddress */.qw)(outputToken) ? WNATIVE_ADDRESS : outputToken.address;
        const { swaps , routes  } = await messages/* PluginTraderRPC.getSwaps */.V.getSwaps(sellToken, buyToken, isExactIn ? Trader_constants/* BALANCER_SWAP_TYPE.EXACT_IN */.qT.EXACT_IN : Trader_constants/* BALANCER_SWAP_TYPE.EXACT_OUT */.qT.EXACT_OUT, isExactIn ? inputAmount : outputAmount, targetChainId);
        // no pool found
        if (!swaps[0].length) return null;
        return {
            swaps,
            routes
        };
    }, [
        WNATIVE_ADDRESS,
        strategy,
        targetChainId,
        inputAmount,
        outputAmount,
        inputToken?.address,
        outputToken?.address
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTradeComputed.ts




const MIN_VALUE = new (bignumber_default())('1e-5');
function balancer_useTradeComputed_useTradeComputed(trade, strategy, inputAmount, outputAmount, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const { swaps: swaps_ , routes  } = trade;
        const [swaps, tradeAmount, spotPrice] = swaps_;
        const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
        let priceImpact = isExactIn ? new (bignumber_default())(inputAmount).div(tradeAmount) : new (bignumber_default())(tradeAmount).div(outputAmount);
        priceImpact = priceImpact.times('1e18').div(spotPrice).minus(1);
        return {
            strategy,
            inputAmount: new (bignumber_default())(isExactIn ? inputAmount : tradeAmount),
            outputAmount: new (bignumber_default())(!isExactIn ? outputAmount : tradeAmount),
            inputToken,
            outputToken,
            executionPrice: new (bignumber_default())(spotPrice),
            priceImpact: priceImpact.isNegative() ? MIN_VALUE : priceImpact,
            maximumSold: new (bignumber_default())(tradeAmount),
            minimumReceived: new (bignumber_default())(tradeAmount),
            path: [],
            fee: base_src/* ZERO */.xE,
            trade_: trade
        };
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/contracts/balancer/useExchangeProxyContract.ts + 1 modules
var useExchangeProxyContract = __webpack_require__(90475);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/balancer/useTradeAmount.ts
var useTradeAmount = __webpack_require__(23680);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTradeGasLimit.ts







function balancer_useTradeGasLimit_useTradeGasLimit(trade) {
    const account = (0,useAccount/* useAccount */.m)();
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const exchangeProxyContract = (0,useExchangeProxyContract/* useExchangeProxyContract */.L)(targetChainId);
    const { BALANCER_ETH_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(targetChainId);
    const tradeAmount = (0,useTradeAmount/* useTradeAmount */.i)(trade, Trader_constants/* SLIPPAGE_DEFAULT */.Nd);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!trade || !trade.inputToken || !trade.outputToken || !exchangeProxyContract || !BALANCER_ETH_ADDRESS) return 0;
        const { swaps: [swaps] ,  } = trade.trade_;
        // cast the type to ignore the different type which was generated by typechain
        const swap_ = swaps.map((x)=>x.map((y)=>[
                    y.pool,
                    y.tokenIn,
                    y.tokenOut,
                    y.swapAmount,
                    y.limitReturnAmount,
                    y.maxPrice
                ]
            )
        );
        const inputTokenAddress = trade.inputToken.type === types/* EthereumTokenType.Native */.Dr.Native ? BALANCER_ETH_ADDRESS : trade.inputToken.address;
        const outputTokenAddress = trade.outputToken.type === types/* EthereumTokenType.Native */.Dr.Native ? BALANCER_ETH_ADDRESS : trade.outputToken.address;
        // trade with the native token
        let transactionValue = '0';
        if (trade.strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn && trade.inputToken.type === types/* EthereumTokenType.Native */.Dr.Native) transactionValue = trade.inputAmount.toFixed();
        else if (trade.strategy === Trader_types/* TradeStrategy.ExactOut */.tB.ExactOut && trade.outputToken.type === types/* EthereumTokenType.Native */.Dr.Native) transactionValue = trade.outputAmount.toFixed();
        const tx = trade.strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn ? exchangeProxyContract.methods.multihopBatchSwapExactIn(swap_, inputTokenAddress, outputTokenAddress, trade.inputAmount.toFixed(), tradeAmount.toFixed()) : exchangeProxyContract.methods.multihopBatchSwapExactOut(swap_, inputTokenAddress, outputTokenAddress, tradeAmount.toFixed());
        return tx.estimateGas({
            from: account,
            value: transactionValue
        });
    }, [
        trade,
        exchangeProxyContract,
        BALANCER_ETH_ADDRESS,
        tradeAmount,
        account
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useSlippageTolerance.ts




function dodo_useSlippageTolerance_useSlippageTolerance() {
    const slippage_ = (0,shared_base_ui_src/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    return (0,clamp/* default */.Z)(slippage_, Trader_constants/* SLIPPAGE_MIN */.Bq, Trader_constants/* SLIPPAGE_MAX */.Q9);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useTrade.ts






function dodo_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken, temporarySlippage) {
    const slippageSetting = dodo_useSlippageTolerance_useSlippageTolerance();
    const slippage = temporarySlippage || slippageSetting;
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(chainId);
    const { RPC  } = (0,constants/* useRPCConstants */.j8)(chainId);
    const providerURL = (0,head/* default */.Z)(RPC);
    const { DODO_ETH_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(chainId);
    const account = (0,useAccount/* useAccount */.m)();
    return (0,entry_web3/* useDoubleBlockBeatRetry */.Yn)(async ()=>{
        if (!inputToken || !outputToken) return null;
        if (inputAmount === '0') return null;
        const sellToken = (0,address/* isNativeTokenAddress */.qw)(inputToken) ? {
            ...inputToken,
            address: DODO_ETH_ADDRESS ?? ''
        } : inputToken;
        const buyToken = (0,address/* isNativeTokenAddress */.qw)(outputToken) ? {
            ...outputToken,
            address: DODO_ETH_ADDRESS ?? ''
        } : outputToken;
        return messages/* PluginTraderRPC.swapRoute */.V.swapRoute({
            isNativeSellToken: (0,address/* isNativeTokenAddress */.qw)(inputToken),
            fromToken: sellToken,
            toToken: buyToken,
            fromAmount: inputAmount,
            slippage: slippage / 100,
            userAddr: account,
            rpc: providerURL,
            chainId
        });
    }, [
        NATIVE_TOKEN_ADDRESS,
        strategy,
        inputAmount,
        outputAmount,
        inputToken?.address,
        outputToken?.address,
        slippage,
        account,
        providerURL,
        chainId, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useTradeComputed.ts




function dodo_useTradeComputed_useTradeComputed(trade, strategy, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (!isExactIn) return null;
        const inputAmount = (0,base_src/* rightShift */.pu)(trade.fromAmount, inputToken.decimals).integerValue();
        const executionPrice = new (bignumber_default())(trade.resPricePerToToken);
        const outputAmount = (0,base_src/* rightShift */.pu)(trade.resAmount, outputToken.decimals).integerValue();
        const priceImpact = new (bignumber_default())(trade.priceImpact);
        return {
            strategy,
            inputToken,
            outputToken,
            inputAmount,
            outputAmount,
            executionPrice,
            fee: base_src/* ZERO */.xE,
            maximumSold: inputAmount,
            minimumReceived: new (bignumber_default())(trade.fromAmount).multipliedBy(trade.resPricePerFromToken).multipliedBy(1 - trade.slippage / 100).shiftedBy(outputToken.decimals),
            // minimumProtocolFee
            priceImpact,
            trade_: {
                ...trade
            }
        };
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useTradeGasLimit.ts





function dodo_useTradeGasLimit_useTradeGasLimit(tradeComputed) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const config = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_) return null;
        return {
            from: account,
            ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                'to',
                'data',
                'value'
            ])
        };
    }, [
        account,
        tradeComputed
    ]);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!config) return 0;
        return web3.eth.estimateGas(config);
    }, [
        config,
        web3
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/bancor/useSlippageTolerance.ts




function bancor_useSlippageTolerance_useSlippageTolerance() {
    const slippage_ = (0,shared_base_ui_src/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    return (0,clamp/* default */.Z)(slippage_, Trader_constants/* SLIPPAGE_MIN */.Bq, Trader_constants/* SLIPPAGE_MAX */.Q9);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/bancor/useTrade.ts







function bancor_useTrade_useTrade(strategy, inputAmountWei, outputAmountWei, inputToken, outputToken, temporarySlippage) {
    const slippageSetting = bancor_useSlippageTolerance_useSlippageTolerance();
    const slippage = temporarySlippage || slippageSetting;
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(chainId);
    const { BANCOR_ETH_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(chainId);
    const user = (0,useAccount/* useAccount */.m)();
    const inputAmount = (0,base_src/* leftShift */.w5)(inputAmountWei, inputToken?.decimals).toFixed();
    const outputAmount = (0,base_src/* leftShift */.w5)(outputAmountWei, outputToken?.decimals).toFixed();
    const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
    return (0,entry_web3/* useDoubleBlockBeatRetry */.Yn)(async ()=>{
        if (!inputToken || !outputToken) return null;
        if (inputAmountWei === '0' && isExactIn) return null;
        if (outputAmountWei === '0' && !isExactIn) return null;
        if (![
            types/* ChainId.Mainnet */.a_.Mainnet,
            types/* ChainId.Ropsten */.a_.Ropsten
        ].includes(chainId)) return null;
        const fromToken = (0,address/* isNativeTokenAddress */.qw)(inputToken) ? {
            ...inputToken,
            address: BANCOR_ETH_ADDRESS ?? ''
        } : inputToken;
        const toToken = (0,address/* isNativeTokenAddress */.qw)(outputToken) ? {
            ...outputToken,
            address: BANCOR_ETH_ADDRESS ?? ''
        } : outputToken;
        return messages/* PluginTraderRPC.swapBancor */.V.swapBancor({
            strategy,
            fromToken,
            toToken,
            fromAmount: isExactIn ? inputAmount : void 0,
            toAmount: isExactIn ? void 0 : outputAmount,
            slippage,
            user,
            chainId: chainId,
            minimumReceived: ''
        });
    }, [
        NATIVE_TOKEN_ADDRESS,
        strategy,
        inputAmountWei,
        outputAmountWei,
        inputToken?.address,
        outputToken?.address,
        slippage,
        user,
        chainId, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/bancor/useTradeComputed.ts


function bancor_useTradeComputed_useTradeComputed(trade, strategy, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const inputAmountWei = (0,base_src/* rightShift */.pu)(trade.fromAmount || '0', inputToken.decimals);
        const outputAmountWei = (0,base_src/* rightShift */.pu)(trade.toAmount || '0', outputToken.decimals);
        const minimumReceivedWei = (0,base_src/* rightShift */.pu)(trade.minimumReceived, outputToken.decimals);
        const tradeComputed = {
            strategy,
            inputToken,
            outputToken,
            inputAmount: inputAmountWei,
            outputAmount: outputAmountWei,
            executionPrice: base_src/* ZERO */.xE,
            fee: base_src/* ZERO */.xE,
            maximumSold: inputAmountWei,
            minimumReceived: minimumReceivedWei,
            priceImpact: base_src/* ZERO */.xE,
            trade_: {
                ...trade
            }
        };
        return tradeComputed;
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/bancor/useTradeGasLimit.ts






function bancor_useTradeGasLimit_useTradeGasLimit(tradeComputed) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const account = (0,useAccount/* useAccount */.m)();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const trade = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_) return null;
        return tradeComputed.trade_;
    }, [
        account,
        tradeComputed
    ]);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!account || !trade) return 0;
        const [data, err] = await messages/* PluginTraderRPC.swapTransactionBancor */.V.swapTransactionBancor(trade);
        if (err) return 0;
        // Note that if approval is required, the API will also return the necessary approval transaction.
        const tradeTransaction = data.length === 1 ? data[0] : data[1];
        return web3.eth.estimateGas((0,pick/* default */.Z)(tradeTransaction.transaction, [
            'to',
            'data',
            'value',
            'from'
        ]));
    }, [
        trade,
        account,
        web3
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/useTradeComputed.ts




function openocean_useTradeComputed_useTradeComputed(trade, strategy, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (!isExactIn) return null;
        const inputAmount = new (bignumber_default())(trade.fromAmount).multipliedBy((0,base_src/* pow10 */.wA)(inputToken.decimals)).integerValue();
        const executionPrice = new (bignumber_default())(trade.resPricePerToToken);
        const outputAmount = new (bignumber_default())(trade.resAmount).multipliedBy((0,base_src/* pow10 */.wA)(outputToken.decimals)).integerValue();
        const priceImpact = new (bignumber_default())(trade.priceImpact ?? 0);
        return {
            strategy,
            inputToken,
            outputToken,
            inputAmount,
            outputAmount,
            executionPrice,
            fee: base_src/* ZERO */.xE,
            maximumSold: inputAmount,
            minimumReceived: new (bignumber_default())(trade.minOutAmount),
            // minimumProtocolFee
            priceImpact,
            trade_: {
                ...trade
            }
        };
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/useSlippageTolerance.ts




function openocean_useSlippageTolerance_useSlippageTolerance() {
    const slippage_ = (0,shared_base_ui_src/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    return (0,clamp/* default */.Z)(slippage_, Trader_constants/* SLIPPAGE_MIN */.Bq, Trader_constants/* SLIPPAGE_MAX */.Q9);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/constants.ts

// https://docs.openocean.finance/api/openocean-dex-api-2.0
const OPENOCEAN_SUPPORTED_CHAINS = [
    types/* ChainId.Mainnet */.a_.Mainnet,
    types/* ChainId.BSC */.a_.BSC,
    types/* ChainId.xDai */.a_.xDai,
    types/* ChainId.Matic */.a_.Matic,
    types/* ChainId.Fantom */.a_.Fantom,
    types/* ChainId.Arbitrum */.a_.Arbitrum,
    types/* ChainId.Avalanche */.a_.Avalanche, 
];

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/useTrade.ts







function openocean_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken, temporarySlippage) {
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const slippageSetting = openocean_useSlippageTolerance_useSlippageTolerance();
    const slippage = temporarySlippage || slippageSetting;
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { RPC  } = (0,constants/* useRPCConstants */.j8)(targetChainId);
    const providerURL = (0,head/* default */.Z)(RPC);
    const { OPENOCEAN_ETH_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(targetChainId);
    const account = (0,useAccount/* useAccount */.m)();
    return (0,entry_web3/* useDoubleBlockBeatRetry */.Yn)(async ()=>{
        if (!OPENOCEAN_SUPPORTED_CHAINS.includes(targetChainId)) return null;
        if (!inputToken || !outputToken) return null;
        if (inputAmount === '0') return null;
        const sellToken = (0,address/* isNativeTokenAddress */.qw)(inputToken.address) ? {
            ...inputToken,
            address: OPENOCEAN_ETH_ADDRESS ?? ''
        } : inputToken;
        const buyToken = (0,address/* isNativeTokenAddress */.qw)(outputToken.address) ? {
            ...outputToken,
            address: OPENOCEAN_ETH_ADDRESS ?? ''
        } : outputToken;
        return messages/* PluginTraderRPC.swapOO */.V.swapOO({
            isNativeSellToken: (0,address/* isNativeTokenAddress */.qw)(inputToken.address),
            fromToken: sellToken,
            toToken: buyToken,
            fromAmount: inputAmount,
            slippage,
            userAddr: account,
            rpc: providerURL,
            chainId: targetChainId
        });
    }, [
        NATIVE_TOKEN_ADDRESS,
        strategy,
        inputAmount,
        outputAmount,
        inputToken?.address,
        outputToken?.address,
        slippage,
        account,
        providerURL,
        targetChainId, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/useTradeGasLimit.ts






function openocean_useTradeGasLimit_useTradeGasLimit(tradeComputed) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const config = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_) return null;
        return {
            from: account,
            ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                'to',
                'data',
                'value'
            ])
        };
    }, [
        account,
        tradeComputed
    ]);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (tradeComputed?.trade_?.estimatedGas) return new (bignumber_default())(tradeComputed.trade_.estimatedGas).toNumber();
        if (!config) return 0;
        return web3.eth.estimateGas(config);
    }, [
        config,
        web3,
        tradeComputed?.trade_?.estimatedGas
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useAvailableTraderProviders.ts



function useAvailableTraderProviders(type, keyword, targetChainId) {
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const chainId = targetChainId ?? currentChainId;
    return (0,useAsync/* default */.Z)(async ()=>{
        return messages/* PluginTraderRPC.getAvailableTraderProviders */.V.getAvailableTraderProviders(chainId);
    }, [
        chainId,
        type,
        keyword
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/contracts/useWrappedEtherContract.ts + 1 modules
var useWrappedEtherContract = __webpack_require__(55420);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useNativeTradeGasLimit.ts



function useNativeTradeGasLimit(trade, chainId) {
    const account = (0,useAccount/* useAccount */.m)();
    const wrapperContract = (0,useWrappedEtherContract/* useNativeTokenWrapperContract */.W)(chainId);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!trade?.trade_?.isNativeTokenWrapper || !trade.inputToken || !trade.outputToken) return 0;
        const tradeAmount = trade.inputAmount.toFixed();
        if (!tradeAmount || !wrapperContract) return 0;
        if (trade.strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn && trade.inputToken.type === types/* EthereumTokenType.Native */.Dr.Native || trade.strategy === Trader_types/* TradeStrategy.ExactOut */.tB.ExactOut && trade.outputToken.type === types/* EthereumTokenType.Native */.Dr.Native) {
            return wrapperContract.methods.deposit().estimateGas({
                from: account,
                value: tradeAmount
            });
        }
        return 0;
    }, [
        account,
        wrapperContract,
        trade
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useAllTradeComputed.ts




























function useAllTradeComputed(inputAmount, inputToken, outputToken, temporarySlippage) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const inputTokenProduct = (0,base_src/* pow10 */.wA)(inputToken?.decimals ?? 0);
    const inputAmount_ = (0,base_src/* multipliedBy */.$q)(inputAmount || '0', inputTokenProduct).integerValue().toFixed();
    const { value: tradeProviders = src/* EMPTY_LIST */.rP  } = useAvailableTraderProviders(Trader_types/* TagType.CASH */.Qy.CASH, 'MASK', targetChainId);
    // NATIVE-WNATIVE pair
    const nativeToken_ = useTrade(inputToken, outputToken);
    const nativeToken = useTradeComputed(nativeToken_.value ?? false, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', inputToken, outputToken);
    const nativeTradeGasLimit = useNativeTradeGasLimit(nativeToken, targetChainId);
    // uniswap-v2
    const { trader_: uniswapV2_ , trader: uniswapV2 , traderEstimateGas: uniswapV2EstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2, inputAmount_, inputToken, outputToken);
    // sushi swap
    const { trader_: sushiSwap_ , trader: sushiSwap , traderEstimateGas: sushiSwapEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP, inputAmount_, inputToken, outputToken);
    // sashimi swap
    const { trader_: sashimiSwap_ , trader: sashimiSwap , traderEstimateGas: sashimiSwapEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.SASHIMISWAP */.z4.SASHIMISWAP, inputAmount_, inputToken, outputToken);
    // quick swap
    const { trader_: quickSwap_ , trader: quickSwap , traderEstimateGas: quickSwapEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP, inputAmount_, inputToken, outputToken);
    // pancake swap
    const { trader_: pancakeSwap_ , trader: pancakeSwap , traderEstimateGas: pancakeSwapEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP, inputAmount_, inputToken, outputToken);
    // uniswap-v3 like providers
    const uniswapV3_ = useV3Trade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', tradeProviders.some((x)=>x === public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3
    ) ? inputToken : undefined, tradeProviders.some((x)=>x === public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3
    ) ? outputToken : undefined);
    const uniswapV3 = useTradeComputed_useTradeComputed(uniswapV3_.value, inputToken, outputToken, temporarySlippage);
    const uniswapV3SwapEstimateGas = useTradeGasLimit(uniswapV3, public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3);
    // zrx
    const zrx_ = _0x_useTrade_useTrade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', tradeProviders.some((x)=>x === public_api_src/* TradeProvider.ZRX */.z4.ZRX
    ) ? inputToken : undefined, tradeProviders.some((x)=>x === public_api_src/* TradeProvider.ZRX */.z4.ZRX
    ) ? outputToken : undefined);
    const zrx = _0x_useTradeComputed_useTradeComputed(zrx_.value ?? null, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputToken, outputToken);
    const zrxSwapEstimateGas = useTradeGasLimit_useTradeGasLimit(zrx);
    // balancer
    const balancer_ = balancer_useTrade_useTrade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', tradeProviders.some((x)=>x === public_api_src/* TradeProvider.BALANCER */.z4.BALANCER
    ) ? inputToken : undefined, tradeProviders.some((x)=>x === public_api_src/* TradeProvider.BALANCER */.z4.BALANCER
    ) ? outputToken : undefined);
    const balancer = balancer_useTradeComputed_useTradeComputed(balancer_.value ?? null, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', inputToken, outputToken);
    const balancerSwapEstimateGas = balancer_useTradeGasLimit_useTradeGasLimit(balancer);
    // dodo
    const dodo_ = dodo_useTrade_useTrade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', tradeProviders.some((x)=>x === public_api_src/* TradeProvider.DODO */.z4.DODO
    ) ? inputToken : undefined, tradeProviders.some((x)=>x === public_api_src/* TradeProvider.DODO */.z4.DODO
    ) ? outputToken : undefined, temporarySlippage);
    const dodo = dodo_useTradeComputed_useTradeComputed(dodo_.value ?? null, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputToken, outputToken);
    const dodoSwapEstimateGas = dodo_useTradeGasLimit_useTradeGasLimit(dodo);
    // bancor
    const bancor_ = bancor_useTrade_useTrade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', tradeProviders.some((x)=>x === public_api_src/* TradeProvider.BANCOR */.z4.BANCOR
    ) ? inputToken : undefined, tradeProviders.some((x)=>x === public_api_src/* TradeProvider.BANCOR */.z4.BANCOR
    ) ? outputToken : undefined, temporarySlippage);
    const bancor = bancor_useTradeComputed_useTradeComputed(bancor_.value ?? null, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputToken, outputToken);
    const bancorSwapEstimateGas = bancor_useTradeGasLimit_useTradeGasLimit(bancor);
    // traderjoe
    const { trader_: traderJoe_ , trader: traderJoe , traderEstimateGas: traderJoeEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.TRADERJOE */.z4.TRADERJOE, inputAmount_, inputToken, outputToken);
    // pangolindex
    const { trader_: pangolindex_ , trader: pangolindex , traderEstimateGas: pangolinEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.PANGOLIN */.z4.PANGOLIN, inputAmount_, inputToken, outputToken);
    // openocean
    const openocean_ = openocean_useTrade_useTrade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', inputToken, outputToken, temporarySlippage);
    const openocean = openocean_useTradeComputed_useTradeComputed(openocean_.value ?? null, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputToken, outputToken);
    const openoceanSwapEstimateGas = openocean_useTradeGasLimit_useTradeGasLimit(openocean);
    // trisolaris
    const { trader_: trisolaris_ , trader: trisolaris , traderEstimateGas: trisolarisEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.TRISOLARIS */.z4.TRISOLARIS, inputAmount_, inputToken, outputToken);
    // WannaSwap
    const { trader_: wannaswap_ , trader: wannaswap , traderEstimateGas: wannaSwapEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.WANNASWAP */.z4.WANNASWAP, inputAmount_, inputToken, outputToken);
    // Mdex
    const { trader_: mdex_ , trader: mdex , traderEstimateGas: mdexEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.MDEX */.z4.MDEX, inputAmount_, inputToken, outputToken);
    const allTradeResult = [
        {
            provider: public_api_src/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2,
            ...uniswapV2_,
            value: uniswapV2,
            gas: uniswapV2EstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
            ...sushiSwap_,
            value: sushiSwap,
            gas: sushiSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.SASHIMISWAP */.z4.SASHIMISWAP,
            ...sashimiSwap_,
            value: sashimiSwap,
            gas: sashimiSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP,
            ...quickSwap_,
            value: quickSwap,
            gas: quickSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP,
            ...pancakeSwap_,
            value: pancakeSwap,
            gas: pancakeSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3,
            ...uniswapV3_,
            value: uniswapV3,
            gas: uniswapV3SwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.ZRX */.z4.ZRX,
            ...zrx_,
            value: zrx,
            gas: zrxSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.BALANCER */.z4.BALANCER,
            ...balancer_,
            value: balancer,
            gas: balancerSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.DODO */.z4.DODO,
            ...dodo_,
            value: dodo,
            gas: dodoSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.BANCOR */.z4.BANCOR,
            ...bancor_,
            value: bancor,
            gas: bancorSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.TRADERJOE */.z4.TRADERJOE,
            ...traderJoe_,
            value: traderJoe,
            gas: traderJoeEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.PANGOLIN */.z4.PANGOLIN,
            ...pangolindex_,
            value: pangolindex,
            gas: pangolinEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN,
            ...openocean_,
            value: openocean,
            gas: openoceanSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.WANNASWAP */.z4.WANNASWAP,
            ...wannaswap_,
            value: wannaswap,
            gas: wannaSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.TRISOLARIS */.z4.TRISOLARIS,
            ...trisolaris_,
            value: trisolaris,
            gas: trisolarisEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.MDEX */.z4.MDEX,
            ...mdex_,
            value: mdex,
            gas: mdexEstimateGas
        }, 
    ];
    return nativeToken_.value ? tradeProviders.map((item)=>({
            provider: item,
            ...nativeToken_,
            value: nativeToken,
            gas: nativeTradeGasLimit
        })
    ) : allTradeResult.filter((item)=>tradeProviders.some((provider)=>item.provider === provider
        )
    );
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts



var AllProviderTradeActionType;
(function(AllProviderTradeActionType) {
    AllProviderTradeActionType[AllProviderTradeActionType["UPDATE_INPUT_TOKEN"] = 0] = "UPDATE_INPUT_TOKEN";
    AllProviderTradeActionType[AllProviderTradeActionType["UPDATE_OUTPUT_TOKEN"] = 1] = "UPDATE_OUTPUT_TOKEN";
    AllProviderTradeActionType[AllProviderTradeActionType["UPDATE_INPUT_AMOUNT"] = 2] = "UPDATE_INPUT_AMOUNT";
    AllProviderTradeActionType[AllProviderTradeActionType["UPDATE_INPUT_TOKEN_BALANCE"] = 3] = "UPDATE_INPUT_TOKEN_BALANCE";
    AllProviderTradeActionType[AllProviderTradeActionType["UPDATE_OUTPUT_TOKEN_BALANCE"] = 4] = "UPDATE_OUTPUT_TOKEN_BALANCE";
})(AllProviderTradeActionType || (AllProviderTradeActionType = {}));
function reducer(state, action) {
    switch(action.type){
        case AllProviderTradeActionType.UPDATE_INPUT_TOKEN:
            return {
                ...state,
                inputToken: action.token
            };
        case AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN:
            return {
                ...state,
                outputToken: action.token
            };
        case AllProviderTradeActionType.UPDATE_INPUT_AMOUNT:
            return {
                ...state,
                inputAmount: action.amount
            };
        case AllProviderTradeActionType.UPDATE_INPUT_TOKEN_BALANCE:
            return {
                ...state,
                inputTokenBalance: action.balance
            };
        case AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN_BALANCE:
            return {
                ...state,
                outputTokenBalance: action.balance
            };
    }
}
function useAllProviderTradeContext() {
    const [tradeStore, dispatchTradeStore] = (0,react.useReducer)(reducer, {
        inputAmount: '',
        inputTokenBalance: '0',
        outputTokenBalance: '0'
    });
    const [temporarySlippage, setTemporarySlippage] = (0,react.useState)();
    const { inputAmount , inputToken , outputToken  } = tradeStore;
    const allTradeComputed = useAllTradeComputed(inputAmount, inputToken, outputToken, temporarySlippage);
    return {
        tradeState: [
            tradeStore,
            dispatchTradeStore
        ],
        temporarySlippage,
        setTemporarySlippage,
        allTradeComputed
    };
}
const AllProviderTradeContext = (0,unstated_next/* createContainer */.f)(useAllProviderTradeContext);


/***/ }),

/***/ 70935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useGetTradeContext)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97096);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22684);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28807);
/* harmony import */ var _useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32925);






function useGetTradeContext(tradeProvider) {
    const { targetChainId: chainId  } = _useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_4__/* .TargetChainIdContext.useContainer */ .Z.useContainer();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const DEX_TRADE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getTraderConstants */ .Gr)(chainId);
        switch(tradeProvider){
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.UNISWAP_V2_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.UNISWAP_V2_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_V2_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_V2_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .UNISWAP_BASE_AGAINST_TOKENS */ .u7,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .UNISWAP_CUSTOM_BASES */ .QQ
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V3_LIKE: true,
                    GRAPH_API: DEX_TRADE.UNISWAP_V3_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.UNISWAP_V3_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_SWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_V3_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .UNISWAP_BASE_AGAINST_TOKENS */ .u7,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .UNISWAP_CUSTOM_BASES */ .QQ
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.SUSHISWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.SUSHISWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.SUSHISWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.SUSHISWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SUSHISWAP_BASE_AGAINST_TOKENS */ .S5,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SUSHISWAP_CUSTOM_BASES */ .vZ
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.SASHIMISWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.SASHIMISWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.SASHIMISWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.SASHIMISWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SASHIMISWAP_BASE_AGAINST_TOKENS */ .yo,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SASHIMISWAP_CUSTOM_BASES */ .D9
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.QUICKSWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.QUICKSWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.QUICKSWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.QUICKSWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .QUICKSWAP_BASE_AGAINST_TOKENS */ .PE,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .QUICKSWAP_CUSTOM_BASES */ .jM
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.PANCAKESWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.PANCAKESWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.PANCAKESWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.PANCAKESWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PANCAKESWAP_BASE_AGAINST_TOKENS */ .Dh,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PANCAKESWAP_CUSTOM_BASES */ .tm
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.TRADERJOE */ .z4.TRADERJOE:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.TRADERJOE_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.TRADERJOE_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.TRADERJOE_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.TRADERJOE_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .TRADERJOE_BASE_AGAINST_TOKENS */ .Xt,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .TRADERJOE_CUSTOM_BASES */ .bQ
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANGOLIN */ .z4.PANGOLIN:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.PANGOLIN_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.PANGOLIN_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.PANGOLIN_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.PANGOLIN_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PANGOLIN_BASE_AGAINST_TOKENS */ .h9,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PANGOLIN_CUSTOM_BASES */ .Gt
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.WANNASWAP */ .z4.WANNASWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.WANNASWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.WANNASWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.WANNASWAP_ROUTER_V2_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.WANNASWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .WANNASWAP_BASE_AGAINST_TOKENS */ .NV,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .WANNASWAP_CUSTOM_BASES */ .zE
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.TRISOLARIS */ .z4.TRISOLARIS:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.TRISOLARIS_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.TRISOLARIS_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.TRISOLARIS_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.TRISOLARIS_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .TRISOLARIS_BASE_AGAINST_TOKENS */ .mG,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .TRISOLARIS_CUSTOM_BASES */ .cp
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.MDEX */ .z4.MDEX:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.MDEX_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.MDEX_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.MDEX_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.MDEX_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .MDEX_BASE_AGAINST_TOKENS */ .R8,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .MDEX_CUSTOM_BASES */ .Pz
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX:
                return {
                    TYPE: tradeProvider
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER:
                return {
                    TYPE: tradeProvider,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.BALANCER_EXCHANGE_PROXY_ADDRESS
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO:
                return {
                    TYPE: tradeProvider,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.DODO_EXCHANGE_PROXY_ADDRESS
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BANCOR */ .z4.BANCOR:
                return {
                    TYPE: tradeProvider,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.BANCOR_EXCHANGE_PROXY_ADDRESS
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.OPENOCEAN */ .z4.OPENOCEAN:
                return {
                    TYPE: tradeProvider,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.BANCOR_EXCHANGE_PROXY_ADDRESS
                };
            default:
                if (tradeProvider) (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .unreachable */ .t1)(tradeProvider);
                return null;
        }
    }, [
        chainId,
        tradeProvider
    ]);
}


/***/ }),

/***/ 32925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TargetChainIdContext)
/* harmony export */ });
/* unused harmony export useTargetChainIdContext */
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31174);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44737);



function useTargetChainIdContext() {
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const [targetChainId, setTargetChainId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(chainId);
    return {
        targetChainId,
        setTargetChainId
    };
}
const TargetChainIdContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_2__/* .createContainer */ .f)(useTargetChainIdContext);


/***/ }),

/***/ 5115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qy": () => (/* reexport */ TagType),
  "Vo": () => (/* reexport */ TokenPanelType),
  "tB": () => (/* reexport */ TradeStrategy)
});

// UNUSED EXPORTS: WarningLevel, ZrxTradePool

;// CONCATENATED MODULE: ./src/plugins/Trader/types/trader.ts
var WarningLevel;
(function(WarningLevel) {
    WarningLevel[WarningLevel["LOW"] = 1] = "LOW";
    WarningLevel[WarningLevel["MEDIUM"] = 2] = "MEDIUM";
    WarningLevel[WarningLevel["HIGH"] = 3] = "HIGH";
    WarningLevel[WarningLevel["CONFIRMATION_REQUIRED"] = 4] = "CONFIRMATION_REQUIRED";
    WarningLevel[WarningLevel["BLOCKED"] = 5] = "BLOCKED";
})(WarningLevel || (WarningLevel = {}));
var ZrxTradePool;
(function(ZrxTradePool) {
    ZrxTradePool["ZRX"] = '0x';
    ZrxTradePool["ACryptoS"] = "ACryptoS";
    ZrxTradePool["ApeSwap"] = "ApeSwap";
    ZrxTradePool["BakerySwap"] = "BakerySwap";
    ZrxTradePool["Balancer"] = "Balancer";
    ZrxTradePool["BalancerV2"] = 'Balancer_V2';
    ZrxTradePool["Bancor"] = "Bancor";
    ZrxTradePool["Belt"] = "Belt";
    ZrxTradePool["CafeSwap"] = "CafeSwap";
    ZrxTradePool["CheeseSwap"] = "CheeseSwap";
    ZrxTradePool["ComethSwap"] = "ComethSwap";
    ZrxTradePool["Component"] = "Component";
    ZrxTradePool["Cream"] = 'CREAM';
    ZrxTradePool["CryptoCom"] = "CryptoCom";
    ZrxTradePool["Curve"] = "Curve";
    ZrxTradePool["CurveV2"] = 'Curve_V2';
    ZrxTradePool["Dfyn"] = "Dfyn";
    ZrxTradePool["Dodo"] = 'DODO';
    ZrxTradePool["DodoV2"] = 'DODO_V2';
    ZrxTradePool["Ellipsis"] = "Ellipsis";
    ZrxTradePool["Eth2Dai"] = "Eth2Dai";
    ZrxTradePool["FirebirdOneSwap"] = "FirebirdOneSwap";
    ZrxTradePool["IronSwap"] = "IronSwap";
    ZrxTradePool["JetSwap"] = "JetSwap";
    ZrxTradePool["JulSwap"] = "JulSwap";
    ZrxTradePool["Kyber"] = "Kyber";
    ZrxTradePool["KyberDMM"] = "KyberDMM";
    ZrxTradePool["Lido"] = "Lido";
    ZrxTradePool["Linkswap"] = "Linkswap";
    ZrxTradePool["LiquidityProvider"] = "LiquidityProvider";
    ZrxTradePool["MStable"] = 'mStable';
    ZrxTradePool["MakerPsm"] = "MakerPsm";
    ZrxTradePool["Mesh"] = "Mesh";
    ZrxTradePool["Mooniswap"] = "Mooniswap";
    ZrxTradePool["MultiBridge"] = "MultiBridge";
    ZrxTradePool["MultiHop"] = "MultiHop";
    ZrxTradePool["Native"] = "Native";
    ZrxTradePool["Nerve"] = "Nerve";
    ZrxTradePool["Oasis"] = "Oasis";
    ZrxTradePool["PancakeSwap"] = "PancakeSwap";
    ZrxTradePool["PancakeSwapV2"] = 'PancakeSwap_V2';
    ZrxTradePool["QuickSwap"] = "QuickSwap";
    ZrxTradePool["Saddle"] = "Saddle";
    ZrxTradePool["Shell"] = "Shell";
    ZrxTradePool["Smoothy"] = "Smoothy";
    ZrxTradePool["SnowSwap"] = "SnowSwap";
    ZrxTradePool["SushiSwap"] = "SushiSwap";
    ZrxTradePool["Swerve"] = "Swerve";
    ZrxTradePool["Uniswap"] = "Uniswap";
    ZrxTradePool["UniswapV2"] = 'Uniswap_V2';
    ZrxTradePool["UniswapV3"] = 'Uniswap_V3';
    ZrxTradePool["WaultSwap"] = "WaultSwap";
    ZrxTradePool["xSigma"] = "xSigma";
    ZrxTradePool["TraderJoe"] = "TraderJoe";
    ZrxTradePool["PangolinDex"] = "PangolinDex";
    ZrxTradePool["Trisolaris"] = "Trisolaris";
    ZrxTradePool["WannaSwap"] = "WannaSwap";
    ZrxTradePool["Mdex"] = "Mdex";
})(ZrxTradePool || (ZrxTradePool = {}));
var TradeStrategy;
(function(TradeStrategy) {
    TradeStrategy[TradeStrategy["ExactIn"] = 0] = "ExactIn";
    TradeStrategy[TradeStrategy["ExactOut"] = 1] = "ExactOut";
})(TradeStrategy || (TradeStrategy = {}));
var TokenPanelType;
(function(TokenPanelType) {
    TokenPanelType[TokenPanelType["Input"] = 0] = "Input";
    TokenPanelType[TokenPanelType["Output"] = 1] = "Output";
})(TokenPanelType || (TokenPanelType = {}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/trending.ts
var TagType;
(function(TagType) {
    TagType[TagType["CASH"] = 1] = "CASH";
    TagType[TagType["HASH"] = 2] = "HASH";
})(TagType || (TagType = {}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/index.ts










/***/ }),

/***/ 41106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useNativeTokenPrice),
/* harmony export */   "p": () => (/* binding */ useTokenPrice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19841);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84797);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94232);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65506);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80526);






const task = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .pollingTask */ .s_)(async ()=>{
    await _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.kickToUpdateTokenPrices */ .V.kickToUpdateTokenPrices();
    return false;
}, {
    autoStart: false,
    delay: _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_CHAIN_STATE_DELAY */ .js
});
function useTokenPrice(chainId, contractAddress, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    let platformId = undefined;
    let coinId = undefined;
    if (chainId) {
        platformId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoPlatformId */ .AQ)(chainId);
        coinId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoCoinId */ .vM)(chainId);
    }
    const category = (contractAddress || coinId)?.toLowerCase();
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // start the polling task
        task.reset();
        return ()=>task.cancel()
        ;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!category) return;
        if (contractAddress && platformId) {
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trackContract */ .V.trackContract(platformId, contractAddress);
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateTokenPrices */ .V.updateTokenPrices();
        }
        if (!contractAddress) {
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trackNativeToken */ .V.trackNativeToken(category);
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateNativeTokenPrices */ .V.updateNativeTokenPrices();
        }
        return _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.addListener */ .JC.addListener((newVal)=>{
            const value = newVal[category]?.[currencyType] ?? 0;
            setPrice(value);
        });
    }, [
        platformId,
        category,
        contractAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!category) return;
        const currentTokenPrices = _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.value */ .JC.value;
        setPrice(currentTokenPrices[category]?.[currencyType] ?? 0);
    }, [
        category,
        currencyType
    ]);
    if (!category) return 0;
    return price;
}
function useNativeTokenPrice(chainId, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    return useTokenPrice(chainId, undefined, currencyType);
}


/***/ }),

/***/ 61114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ useMulticallContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/Multicall.json
const Multicall_namespaceObject = JSON.parse('[{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Call[]","name":"calls","type":"tuple[]"}],"name":"multicall","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"uint256","name":"gasUsed","type":"uint256"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ../web3-shared/evm/contracts/useMulticallContract.ts



function useMulticallContract(chainId) {
    const { MULTICALL_ADDRESS  } = (0,constants/* useEthereumConstants */.HV)(chainId);
    return (0,useContract/* useContract */.cq)(MULTICALL_ADDRESS, Multicall_namespaceObject);
}


/***/ }),

/***/ 55420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ useNativeTokenWrapperContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/WETH.json
const WETH_namespaceObject = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]');
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ../web3-shared/evm/contracts/useWrappedEtherContract.ts



function useNativeTokenWrapperContract(chainId) {
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(chainId);
    return (0,useContract/* useContract */.cq)(WNATIVE_ADDRESS, WETH_namespaceObject);
}


/***/ }),

/***/ 89650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F_": () => (/* binding */ MulticallStateType),
/* harmony export */   "_Y": () => (/* binding */ useMultipleContractSingleData),
/* harmony export */   "es": () => (/* binding */ useSingleContractMultipleData)
/* harmony export */ });
/* unused harmony exports useMulticallCallback, useMulticallStateDecoded, useMultipleContractMultipleData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61114);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33690);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46140);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93328);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31174);






// conservative, hard-coded estimate of the current block gas limit
const CONSERVATIVE_BLOCK_GAS_LIMIT = 10_000_000;
// the default value for calls that don't specify gasRequired
const DEFAULT_GAS_REQUIRED = 200_000;
const DEFAULT_GAS_LIMIT = 1_000_000;
// #endregion
// #region cached results
const cachedResults = {};
function toCallKey(call) {
    return call.join('-');
}
function getCallResult(call, chainId, blockNumber) {
    const cache = cachedResults[chainId];
    const blockNumber_ = cache?.blockNumber ?? 0;
    if (blockNumber_ < blockNumber) return;
    return cache.results[toCallKey(call)];
}
function setCallResult(call, result, chainId, blockNumber) {
    const cache = cachedResults[chainId] ?? {
        results: [],
        blockNumber: 0
    };
    const blockNumber_ = cache.blockNumber;
    if (blockNumber_ > blockNumber) return;
    if (blockNumber_ < blockNumber) cache.blockNumber = blockNumber;
    cache.results[toCallKey(call)] = result;
    cachedResults[chainId] = cache;
}
// evenly distributes items among the chunks
function chunkArray(items, gasLimit = CONSERVATIVE_BLOCK_GAS_LIMIT * 10) {
    const chunks = [];
    let currentChunk = [];
    let currentChunkCumulativeGas = 0;
    for (const item of items){
        // calculate the gas required by the current item
        const gasRequired = item[1] ?? DEFAULT_GAS_REQUIRED;
        // if the current chunk is empty, or the current item wouldn't push it over the gas limit,
        // append the current item and increment the cumulative gas
        if (currentChunk.length === 0 || currentChunkCumulativeGas + gasRequired < gasLimit) {
            currentChunk.push(item);
            currentChunkCumulativeGas += gasRequired;
        } else {
            // otherwise, push the current chunk and create a new chunk
            chunks.push(currentChunk);
            currentChunk = [
                item
            ];
            currentChunkCumulativeGas = gasRequired;
        }
    }
    if (currentChunk.length > 0) chunks.push(currentChunk);
    return chunks;
}
var MulticallStateType;
(function(MulticallStateType) {
    MulticallStateType[MulticallStateType["UNKNOWN"] = 0] = "UNKNOWN";
    MulticallStateType[MulticallStateType[/** Wait for tx call */ "PENDING"] = 1] = "PENDING";
    MulticallStateType[MulticallStateType[/** Tx call resolved */ "SUCCEED"] = 2] = "SUCCEED";
    MulticallStateType[MulticallStateType[/** Tx call rejected */ "FAILED"] = 3] = "FAILED";
})(MulticallStateType || (MulticallStateType = {}));
/**
 * The basic hook for fetching data from the Multicall contract
 * @param calls
 */ function useMulticallCallback(targetChainId, targetBlockNumber) {
    const currentChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const chainId = targetChainId ?? currentChainId;
    const { value: defaultBlockNumber = 0  } = (0,_useBlockNumber__WEBPACK_IMPORTED_MODULE_2__/* .useBlockNumber */ .O)();
    const blockNumber = targetBlockNumber ?? defaultBlockNumber;
    const multicallContract = (0,_contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_3__/* .useMulticallContract */ .g)(chainId);
    const [multicallState, setMulticallState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        type: MulticallStateType.UNKNOWN
    });
    const multicallCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (calls, overrides)=>{
        if (calls.length === 0 || !multicallContract) {
            setMulticallState({
                type: MulticallStateType.UNKNOWN
            });
            return;
        }
        try {
            setMulticallState({
                type: MulticallStateType.PENDING
            });
            // filter out cached calls
            const unresolvedCalls = calls.filter((call_)=>!getCallResult(call_, chainId, blockNumber)
            );
            // resolve the calls by chunks
            if (unresolvedCalls.length) {
                await Promise.all(chunkArray(unresolvedCalls).map(async (chunk)=>{
                    // we don't mind the actual block number of the current call
                    const { returnData  } = await multicallContract.methods.multicall(chunk).call(overrides);
                    returnData.forEach((result, index)=>setCallResult(chunk[index], result, chainId, blockNumber)
                    );
                }));
            }
            setMulticallState({
                type: MulticallStateType.SUCCEED,
                results: calls.map((call)=>getCallResult(call, chainId, blockNumber) ?? [
                        false,
                        '0x0',
                        '0x0'
                    ]
                )
            });
        } catch (error) {
            if (error instanceof Error) {
                setMulticallState({
                    type: MulticallStateType.FAILED,
                    error
                });
            }
            throw error;
        }
    }, [
        chainId,
        blockNumber,
        multicallContract
    ]);
    return [
        multicallState,
        multicallCallback
    ];
}
// #endregion
// #region useMulticallStateDecoded
function useMulticallStateDecoded(contracts, names, state, chainId) {
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3 */ .$)({
        chainId
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (state.type !== MulticallStateType.SUCCEED) return [];
        if (contracts.length !== state.results.length) return [];
        return state.results.map(([succeed, gasUsed, result], index)=>{
            // the ignore formatter for better reading
            // prettier-ignore
            const outputs = contracts[index].options.jsonInterface.find(({ type , name  })=>type === 'function' && name === names[index]
            )?.outputs ?? [];
            try {
                const value = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .decodeOutputString */ .mO)(web3, outputs, result);
                return {
                    succeed,
                    gasUsed,
                    value,
                    error: null
                };
            } catch (error) {
                return {
                    succeed: false,
                    gasUsed,
                    value: null,
                    error
                };
            }
        });
    }, [
        web3,
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        state
    ]);
}
// #endregion
function useSingleContractMultipleData(contract, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT, chainId, blockNumber) {
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!contract) return [];
        return callDatas.map((data, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...data).encodeABI(), 
            ]
        );
    }, [
        contract?.options.address,
        names.join(),
        callDatas.flatMap((x)=>x
        ).join()
    ]);
    const [state, callback] = useMulticallCallback(chainId, blockNumber);
    const results = useMulticallStateDecoded(Array.from({
        length: calls.length
    }).fill(contract), names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMultipleContractSingleData(contracts, names, callData, chainId, blockNumber, gasLimit = DEFAULT_GAS_LIMIT) {
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...callData).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callData.join()
    ]);
    const [state, callback] = useMulticallCallback(chainId, blockNumber);
    const results = useMulticallStateDecoded(contracts, names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMultipleContractMultipleData(contracts, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT, chainId) {
    const calls = useMemo(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](callDatas[i]).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callDatas.flatMap((x)=>x
        ).join(),
        gasLimit
    ]);
    const [state, callback] = useMulticallCallback(chainId);
    const results = useMulticallStateDecoded(contracts, names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}


/***/ })

}]);