(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4581],{

/***/ 8202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Sg": () => (/* binding */ ForkEvent),
  "zt": () => (/* binding */ Provider)
});

// UNUSED EXPORTS: BlockForkEvent, TransactionForkEvent, TransactionOrderForkEvent

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bignumber@5.4.1/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js + 1 modules
var bignumber = __webpack_require__(84757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(27930);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.4.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(281);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abstract-provider@5.4.0/node_modules/@ethersproject/abstract-provider/lib.esm/_version.js
const version = "abstract-provider/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abstract-provider@5.4.0/node_modules/@ethersproject/abstract-provider/lib.esm/index.js

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const logger = new logger_lib_esm/* Logger */.Yd(version);
;
;
//export type CallTransactionable = {
//    call(transaction: TransactionRequest): Promise<TransactionResponse>;
//};
class ForkEvent extends lib_esm/* Description */.dk {
    static isForkEvent(value) {
        return !!(value && value._isForkEvent);
    }
}
class BlockForkEvent extends (/* unused pure expression or super */ null && (ForkEvent)) {
    constructor(blockHash, expiry) {
        if (!isHexString(blockHash, 32)) {
            logger.throwArgumentError("invalid blockHash", "blockHash", blockHash);
        }
        super({
            _isForkEvent: true,
            _isBlockForkEvent: true,
            expiry: (expiry || 0),
            blockHash: blockHash
        });
    }
}
class TransactionForkEvent extends (/* unused pure expression or super */ null && (ForkEvent)) {
    constructor(hash, expiry) {
        if (!isHexString(hash, 32)) {
            logger.throwArgumentError("invalid transaction hash", "hash", hash);
        }
        super({
            _isForkEvent: true,
            _isTransactionForkEvent: true,
            expiry: (expiry || 0),
            hash: hash
        });
    }
}
class TransactionOrderForkEvent extends (/* unused pure expression or super */ null && (ForkEvent)) {
    constructor(beforeHash, afterHash, expiry) {
        if (!isHexString(beforeHash, 32)) {
            logger.throwArgumentError("invalid transaction hash", "beforeHash", beforeHash);
        }
        if (!isHexString(afterHash, 32)) {
            logger.throwArgumentError("invalid transaction hash", "afterHash", afterHash);
        }
        super({
            _isForkEvent: true,
            _isTransactionOrderForkEvent: true,
            expiry: (expiry || 0),
            beforeHash: beforeHash,
            afterHash: afterHash
        });
    }
}
///////////////////////////////
// Exported Abstracts
class Provider {
    constructor() {
        logger.checkAbstract(new.target, Provider);
        (0,lib_esm/* defineReadOnly */.zG)(this, "_isProvider", true);
    }
    getFeeData() {
        return __awaiter(this, void 0, void 0, function* () {
            const { block, gasPrice } = yield (0,lib_esm/* resolveProperties */.mE)({
                block: this.getBlock("latest"),
                gasPrice: this.getGasPrice().catch((error) => {
                    // @TODO: Why is this now failing on Calaveras?
                    //console.log(error);
                    return null;
                })
            });
            let maxFeePerGas = null, maxPriorityFeePerGas = null;
            if (block && block.baseFeePerGas) {
                // We may want to compute this more accurately in the future,
                // using the formula "check if the base fee is correct".
                // See: https://eips.ethereum.org/EIPS/eip-1559
                maxPriorityFeePerGas = bignumber/* BigNumber.from */.O$.from("1000000000");
                maxFeePerGas = block.baseFeePerGas.mul(2).add(maxPriorityFeePerGas);
            }
            return { maxFeePerGas, maxPriorityFeePerGas, gasPrice };
        });
    }
    // Alias for "on"
    addListener(eventName, listener) {
        return this.on(eventName, listener);
    }
    // Alias for "off"
    removeListener(eventName, listener) {
        return this.off(eventName, listener);
    }
    static isProvider(value) {
        return !!(value && value._isProvider);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 48733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eU": () => (/* binding */ Base58)
/* harmony export */ });
/* unused harmony exports BaseX, Base32 */
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61115);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27930);
/**
 * var basex = require("base-x");
 *
 * This implementation is heavily based on base-x. The main reason to
 * deviate was to prevent the dependency of Buffer.
 *
 * Contributors:
 *
 * base-x encoding
 * Forked from https://github.com/cryptocoinjs/bs58
 * Originally written by Mike Hearn for BitcoinJ
 * Copyright (c) 2011 Google Inc
 * Ported to JavaScript by Stefan Thomas
 * Merged Buffer refactorings from base58-native by Stephen Pair
 * Copyright (c) 2013 BitPay Inc
 *
 * The MIT License (MIT)
 *
 * Copyright base-x contributors (c) 2016
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 */


class BaseX {
    constructor(alphabet) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__/* .defineReadOnly */ .zG)(this, "alphabet", alphabet);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__/* .defineReadOnly */ .zG)(this, "base", alphabet.length);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__/* .defineReadOnly */ .zG)(this, "_alphabetMap", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__/* .defineReadOnly */ .zG)(this, "_leader", alphabet.charAt(0));
        // pre-compute lookup table
        for (let i = 0; i < alphabet.length; i++) {
            this._alphabetMap[alphabet.charAt(i)] = i;
        }
    }
    encode(value) {
        let source = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__/* .arrayify */ .lE)(value);
        if (source.length === 0) {
            return "";
        }
        let digits = [0];
        for (let i = 0; i < source.length; ++i) {
            let carry = source[i];
            for (let j = 0; j < digits.length; ++j) {
                carry += digits[j] << 8;
                digits[j] = carry % this.base;
                carry = (carry / this.base) | 0;
            }
            while (carry > 0) {
                digits.push(carry % this.base);
                carry = (carry / this.base) | 0;
            }
        }
        let string = "";
        // deal with leading zeros
        for (let k = 0; source[k] === 0 && k < source.length - 1; ++k) {
            string += this._leader;
        }
        // convert digits to a string
        for (let q = digits.length - 1; q >= 0; --q) {
            string += this.alphabet[digits[q]];
        }
        return string;
    }
    decode(value) {
        if (typeof (value) !== "string") {
            throw new TypeError("Expected String");
        }
        let bytes = [];
        if (value.length === 0) {
            return new Uint8Array(bytes);
        }
        bytes.push(0);
        for (let i = 0; i < value.length; i++) {
            let byte = this._alphabetMap[value[i]];
            if (byte === undefined) {
                throw new Error("Non-base" + this.base + " character");
            }
            let carry = byte;
            for (let j = 0; j < bytes.length; ++j) {
                carry += bytes[j] * this.base;
                bytes[j] = carry & 0xff;
                carry >>= 8;
            }
            while (carry > 0) {
                bytes.push(carry & 0xff);
                carry >>= 8;
            }
        }
        // deal with leading zeros
        for (let k = 0; value[k] === this._leader && k < value.length - 1; ++k) {
            bytes.push(0);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__/* .arrayify */ .lE)(new Uint8Array(bytes.reverse()));
    }
}
const Base32 = new BaseX("abcdefghijklmnopqrstuvwxyz234567");
const Base58 = new BaseX("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");

//console.log(Base58.decode("Qmd2V777o5XvJbYMeMb8k2nU5f8d3ciUQ5YpYuWhzv8iDj"))
//console.log(Base58.encode(Base58.decode("Qmd2V777o5XvJbYMeMb8k2nU5f8d3ciUQ5YpYuWhzv8iDj")))
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 32704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ AddressZero)
/* harmony export */ });
const AddressZero = "0x0000000000000000000000000000000000000000";
//# sourceMappingURL=addresses.js.map

/***/ }),

/***/ 76360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ HashZero)
/* harmony export */ });
const HashZero = "0x0000000000000000000000000000000000000000000000000000000000000000";
//# sourceMappingURL=hashes.js.map

/***/ }),

/***/ 24769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AddressZero": () => (/* reexport */ addresses/* AddressZero */.d),
  "EtherSymbol": () => (/* reexport */ EtherSymbol),
  "HashZero": () => (/* reexport */ hashes/* HashZero */.R),
  "MaxInt256": () => (/* reexport */ bignumbers/* MaxInt256 */.PS),
  "MaxUint256": () => (/* reexport */ bignumbers/* MaxUint256 */.Bz),
  "MinInt256": () => (/* reexport */ bignumbers/* MinInt256 */.$B),
  "NegativeOne": () => (/* reexport */ bignumbers/* NegativeOne */.tL),
  "One": () => (/* reexport */ bignumbers/* One */.fh),
  "Two": () => (/* reexport */ bignumbers/* Two */.Py),
  "WeiPerEther": () => (/* reexport */ bignumbers/* WeiPerEther */.Ce),
  "Zero": () => (/* reexport */ bignumbers/* Zero */._Y)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/addresses.js
var addresses = __webpack_require__(32704);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/bignumbers.js
var bignumbers = __webpack_require__(98648);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/hashes.js
var hashes = __webpack_require__(76360);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/strings.js
// NFKC (composed)             // (decomposed)
const EtherSymbol = "\u039e"; // "\uD835\uDF63";
//# sourceMappingURL=strings.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/index.js





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 43069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ version)
/* harmony export */ });
const version = "hash/5.4.0";
//# sourceMappingURL=_version.js.map

/***/ }),

/***/ 39125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 82190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ namehash)
/* harmony export */ });
/* unused harmony export isValidName */
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61115);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42716);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39813);
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89930);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43069);





const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .Yd(_version__WEBPACK_IMPORTED_MODULE_1__/* .version */ .i);
const Zeros = new Uint8Array(32);
Zeros.fill(0);
const Partition = new RegExp("^((.*)\\.)?([^.]+)$");
function isValidName(name) {
    try {
        const comps = name.split(".");
        for (let i = 0; i < comps.length; i++) {
            if (nameprep(comps[i]).length === 0) {
                throw new Error("empty");
            }
        }
        return true;
    }
    catch (error) { }
    return false;
}
function namehash(name) {
    /* istanbul ignore if */
    if (typeof (name) !== "string") {
        logger.throwArgumentError("invalid ENS name; not a string", "name", name);
    }
    let current = name;
    let result = Zeros;
    while (current.length) {
        const partition = current.match(Partition);
        if (partition == null || partition[2] === "") {
            logger.throwArgumentError("invalid ENS address; missing component", "name", name);
        }
        const label = (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_2__/* .toUtf8Bytes */ .Y0)((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_3__/* .nameprep */ .Ll)(partition[3]));
        result = (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_4__/* .keccak256 */ .w)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__/* .concat */ .zo)([result, (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_4__/* .keccak256 */ .w)(label)]));
        current = partition[2] || "";
    }
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__/* .hexlify */ .Dv)(result);
}
//# sourceMappingURL=namehash.js.map

/***/ }),

/***/ 31921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ TypedDataEncoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99747);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84757);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61115);
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27930);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89930);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43069);
/* harmony import */ var _id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39125);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .Yd(_version__WEBPACK_IMPORTED_MODULE_1__/* .version */ .i);

const padding = new Uint8Array(32);
padding.fill(0);
const NegativeOne = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber.from */ .O$.from(-1);
const Zero = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber.from */ .O$.from(0);
const One = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber.from */ .O$.from(1);
const MaxUint256 = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber.from */ .O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function hexPadRight(value) {
    const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .arrayify */ .lE)(value);
    const padOffset = bytes.length % 32;
    if (padOffset) {
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexConcat */ .xs)([bytes, padding.slice(padOffset)]);
    }
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexlify */ .Dv)(bytes);
}
const hexTrue = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexZeroPad */ .$m)(One.toHexString(), 32);
const hexFalse = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexZeroPad */ .$m)(Zero.toHexString(), 32);
const domainFieldTypes = {
    name: "string",
    version: "string",
    chainId: "uint256",
    verifyingContract: "address",
    salt: "bytes32"
};
const domainFieldNames = [
    "name", "version", "chainId", "verifyingContract", "salt"
];
function checkString(key) {
    return function (value) {
        if (typeof (value) !== "string") {
            logger.throwArgumentError(`invalid domain value for ${JSON.stringify(key)}`, `domain.${key}`, value);
        }
        return value;
    };
}
const domainChecks = {
    name: checkString("name"),
    version: checkString("version"),
    chainId: function (value) {
        try {
            return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber.from */ .O$.from(value).toString();
        }
        catch (error) { }
        return logger.throwArgumentError(`invalid domain value for "chainId"`, "domain.chainId", value);
    },
    verifyingContract: function (value) {
        try {
            return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_4__.getAddress)(value).toLowerCase();
        }
        catch (error) { }
        return logger.throwArgumentError(`invalid domain value "verifyingContract"`, "domain.verifyingContract", value);
    },
    salt: function (value) {
        try {
            const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .arrayify */ .lE)(value);
            if (bytes.length !== 32) {
                throw new Error("bad length");
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexlify */ .Dv)(bytes);
        }
        catch (error) { }
        return logger.throwArgumentError(`invalid domain value "salt"`, "domain.salt", value);
    }
};
function getBaseEncoder(type) {
    // intXX and uintXX
    {
        const match = type.match(/^(u?)int(\d*)$/);
        if (match) {
            const signed = (match[1] === "");
            const width = parseInt(match[2] || "256");
            if (width % 8 !== 0 || width > 256 || (match[2] && match[2] !== String(width))) {
                logger.throwArgumentError("invalid numeric width", "type", type);
            }
            const boundsUpper = MaxUint256.mask(signed ? (width - 1) : width);
            const boundsLower = signed ? boundsUpper.add(One).mul(NegativeOne) : Zero;
            return function (value) {
                const v = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber.from */ .O$.from(value);
                if (v.lt(boundsLower) || v.gt(boundsUpper)) {
                    logger.throwArgumentError(`value out-of-bounds for ${type}`, "value", value);
                }
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexZeroPad */ .$m)(v.toTwos(256).toHexString(), 32);
            };
        }
    }
    // bytesXX
    {
        const match = type.match(/^bytes(\d+)$/);
        if (match) {
            const width = parseInt(match[1]);
            if (width === 0 || width > 32 || match[1] !== String(width)) {
                logger.throwArgumentError("invalid bytes width", "type", type);
            }
            return function (value) {
                const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .arrayify */ .lE)(value);
                if (bytes.length !== width) {
                    logger.throwArgumentError(`invalid length for ${type}`, "value", value);
                }
                return hexPadRight(value);
            };
        }
    }
    switch (type) {
        case "address": return function (value) {
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexZeroPad */ .$m)((0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_4__.getAddress)(value), 32);
        };
        case "bool": return function (value) {
            return ((!value) ? hexFalse : hexTrue);
        };
        case "bytes": return function (value) {
            return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__/* .keccak256 */ .w)(value);
        };
        case "string": return function (value) {
            return (0,_id__WEBPACK_IMPORTED_MODULE_6__.id)(value);
        };
    }
    return null;
}
function encodeType(name, fields) {
    return `${name}(${fields.map(({ name, type }) => (type + " " + name)).join(",")})`;
}
class TypedDataEncoder {
    constructor(types) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__/* .defineReadOnly */ .zG)(this, "types", Object.freeze((0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__/* .deepCopy */ .p$)(types)));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__/* .defineReadOnly */ .zG)(this, "_encoderCache", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__/* .defineReadOnly */ .zG)(this, "_types", {});
        // Link struct types to their direct child structs
        const links = {};
        // Link structs to structs which contain them as a child
        const parents = {};
        // Link all subtypes within a given struct
        const subtypes = {};
        Object.keys(types).forEach((type) => {
            links[type] = {};
            parents[type] = [];
            subtypes[type] = {};
        });
        for (const name in types) {
            const uniqueNames = {};
            types[name].forEach((field) => {
                // Check each field has a unique name
                if (uniqueNames[field.name]) {
                    logger.throwArgumentError(`duplicate variable name ${JSON.stringify(field.name)} in ${JSON.stringify(name)}`, "types", types);
                }
                uniqueNames[field.name] = true;
                // Get the base type (drop any array specifiers)
                const baseType = field.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                if (baseType === name) {
                    logger.throwArgumentError(`circular type reference to ${JSON.stringify(baseType)}`, "types", types);
                }
                // Is this a base encoding type?
                const encoder = getBaseEncoder(baseType);
                if (encoder) {
                    return;
                }
                if (!parents[baseType]) {
                    logger.throwArgumentError(`unknown type ${JSON.stringify(baseType)}`, "types", types);
                }
                // Add linkage
                parents[baseType].push(name);
                links[name][baseType] = true;
            });
        }
        // Deduce the primary type
        const primaryTypes = Object.keys(parents).filter((n) => (parents[n].length === 0));
        if (primaryTypes.length === 0) {
            logger.throwArgumentError("missing primary type", "types", types);
        }
        else if (primaryTypes.length > 1) {
            logger.throwArgumentError(`ambiguous primary types or unused types: ${primaryTypes.map((t) => (JSON.stringify(t))).join(", ")}`, "types", types);
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__/* .defineReadOnly */ .zG)(this, "primaryType", primaryTypes[0]);
        // Check for circular type references
        function checkCircular(type, found) {
            if (found[type]) {
                logger.throwArgumentError(`circular type reference to ${JSON.stringify(type)}`, "types", types);
            }
            found[type] = true;
            Object.keys(links[type]).forEach((child) => {
                if (!parents[child]) {
                    return;
                }
                // Recursively check children
                checkCircular(child, found);
                // Mark all ancestors as having this decendant
                Object.keys(found).forEach((subtype) => {
                    subtypes[subtype][child] = true;
                });
            });
            delete found[type];
        }
        checkCircular(this.primaryType, {});
        // Compute each fully describe type
        for (const name in subtypes) {
            const st = Object.keys(subtypes[name]);
            st.sort();
            this._types[name] = encodeType(name, types[name]) + st.map((t) => encodeType(t, types[t])).join("");
        }
    }
    getEncoder(type) {
        let encoder = this._encoderCache[type];
        if (!encoder) {
            encoder = this._encoderCache[type] = this._getEncoder(type);
        }
        return encoder;
    }
    _getEncoder(type) {
        // Basic encoder type (address, bool, uint256, etc)
        {
            const encoder = getBaseEncoder(type);
            if (encoder) {
                return encoder;
            }
        }
        // Array
        const match = type.match(/^(.*)(\x5b(\d*)\x5d)$/);
        if (match) {
            const subtype = match[1];
            const subEncoder = this.getEncoder(subtype);
            const length = parseInt(match[3]);
            return (value) => {
                if (length >= 0 && value.length !== length) {
                    logger.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", value);
                }
                let result = value.map(subEncoder);
                if (this._types[subtype]) {
                    result = result.map(_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__/* .keccak256 */ .w);
                }
                return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__/* .keccak256 */ .w)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexConcat */ .xs)(result));
            };
        }
        // Struct
        const fields = this.types[type];
        if (fields) {
            const encodedType = (0,_id__WEBPACK_IMPORTED_MODULE_6__.id)(this._types[type]);
            return (value) => {
                const values = fields.map(({ name, type }) => {
                    const result = this.getEncoder(type)(value[name]);
                    if (this._types[type]) {
                        return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__/* .keccak256 */ .w)(result);
                    }
                    return result;
                });
                values.unshift(encodedType);
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexConcat */ .xs)(values);
            };
        }
        return logger.throwArgumentError(`unknown type: ${type}`, "type", type);
    }
    encodeType(name) {
        const result = this._types[name];
        if (!result) {
            logger.throwArgumentError(`unknown type: ${JSON.stringify(name)}`, "name", name);
        }
        return result;
    }
    encodeData(type, value) {
        return this.getEncoder(type)(value);
    }
    hashStruct(name, value) {
        return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__/* .keccak256 */ .w)(this.encodeData(name, value));
    }
    encode(value) {
        return this.encodeData(this.primaryType, value);
    }
    hash(value) {
        return this.hashStruct(this.primaryType, value);
    }
    _visit(type, value, callback) {
        // Basic encoder type (address, bool, uint256, etc)
        {
            const encoder = getBaseEncoder(type);
            if (encoder) {
                return callback(type, value);
            }
        }
        // Array
        const match = type.match(/^(.*)(\x5b(\d*)\x5d)$/);
        if (match) {
            const subtype = match[1];
            const length = parseInt(match[3]);
            if (length >= 0 && value.length !== length) {
                logger.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", value);
            }
            return value.map((v) => this._visit(subtype, v, callback));
        }
        // Struct
        const fields = this.types[type];
        if (fields) {
            return fields.reduce((accum, { name, type }) => {
                accum[name] = this._visit(type, value[name], callback);
                return accum;
            }, {});
        }
        return logger.throwArgumentError(`unknown type: ${type}`, "type", type);
    }
    visit(value, callback) {
        return this._visit(this.primaryType, value, callback);
    }
    static from(types) {
        return new TypedDataEncoder(types);
    }
    static getPrimaryType(types) {
        return TypedDataEncoder.from(types).primaryType;
    }
    static hashStruct(name, types, value) {
        return TypedDataEncoder.from(types).hashStruct(name, value);
    }
    static hashDomain(domain) {
        const domainFields = [];
        for (const name in domain) {
            const type = domainFieldTypes[name];
            if (!type) {
                logger.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(name)}`, "domain", domain);
            }
            domainFields.push({ name, type });
        }
        domainFields.sort((a, b) => {
            return domainFieldNames.indexOf(a.name) - domainFieldNames.indexOf(b.name);
        });
        return TypedDataEncoder.hashStruct("EIP712Domain", { EIP712Domain: domainFields }, domain);
    }
    static encode(domain, types, value) {
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexConcat */ .xs)([
            "0x1901",
            TypedDataEncoder.hashDomain(domain),
            TypedDataEncoder.from(types).hash(value)
        ]);
    }
    static hash(domain, types, value) {
        return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__/* .keccak256 */ .w)(TypedDataEncoder.encode(domain, types, value));
    }
    // Replaces all address types with ENS names with their looked up address
    static resolveNames(domain, types, value, resolveName) {
        return __awaiter(this, void 0, void 0, function* () {
            // Make a copy to isolate it from the object passed in
            domain = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__/* .shallowCopy */ .DC)(domain);
            // Look up all ENS names
            const ensCache = {};
            // Do we need to look up the domain's verifyingContract?
            if (domain.verifyingContract && !(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .isHexString */ .A7)(domain.verifyingContract, 20)) {
                ensCache[domain.verifyingContract] = "0x";
            }
            // We are going to use the encoder to visit all the base values
            const encoder = TypedDataEncoder.from(types);
            // Get a list of all the addresses
            encoder.visit(value, (type, value) => {
                if (type === "address" && !(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .isHexString */ .A7)(value, 20)) {
                    ensCache[value] = "0x";
                }
                return value;
            });
            // Lookup each name
            for (const name in ensCache) {
                ensCache[name] = yield resolveName(name);
            }
            // Replace the domain verifyingContract if needed
            if (domain.verifyingContract && ensCache[domain.verifyingContract]) {
                domain.verifyingContract = ensCache[domain.verifyingContract];
            }
            // Replace all ENS names with their address
            value = encoder.visit(value, (type, value) => {
                if (type === "address" && ensCache[value]) {
                    return ensCache[value];
                }
                return value;
            });
            return { domain, value };
        });
    }
    static getPayload(domain, types, value) {
        // Validate the domain fields
        TypedDataEncoder.hashDomain(domain);
        // Derive the EIP712Domain Struct reference type
        const domainValues = {};
        const domainTypes = [];
        domainFieldNames.forEach((name) => {
            const value = domain[name];
            if (value == null) {
                return;
            }
            domainValues[name] = domainChecks[name](value);
            domainTypes.push({ name, type: domainFieldTypes[name] });
        });
        const encoder = TypedDataEncoder.from(types);
        const typesWithDomain = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__/* .shallowCopy */ .DC)(types);
        if (typesWithDomain.EIP712Domain) {
            logger.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", types);
        }
        else {
            typesWithDomain.EIP712Domain = domainTypes;
        }
        // Validate the data structures and types
        encoder.encode(value);
        return {
            types: typesWithDomain,
            domain: domainValues,
            primaryType: encoder.primaryType,
            message: encoder.visit(value, (type, value) => {
                // bytes
                if (type.match(/^bytes(\d*)/)) {
                    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .hexlify */ .Dv)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__/* .arrayify */ .lE)(value));
                }
                // uint or int
                if (type.match(/^u?int/)) {
                    return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber.from */ .O$.from(value).toString();
                }
                switch (type) {
                    case "address":
                        return value.toLowerCase();
                    case "bool":
                        return !!value;
                    case "string":
                        if (typeof (value) !== "string") {
                            logger.throwArgumentError(`invalid string`, "value", value);
                        }
                        return value;
                }
                return logger.throwArgumentError("unsupported type", "type", type);
            })
        };
    }
}
//# sourceMappingURL=typed-data.js.map

/***/ }),

/***/ 88562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ getNetwork)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.4.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(281);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+networks@5.4.1/node_modules/@ethersproject/networks/lib.esm/_version.js
const version = "networks/5.4.1";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+networks@5.4.1/node_modules/@ethersproject/networks/lib.esm/index.js



const logger = new lib_esm/* Logger */.Yd(version);
;
function isRenetworkable(value) {
    return (value && typeof (value.renetwork) === "function");
}
function ethDefaultProvider(network) {
    const func = function (providers, options) {
        if (options == null) {
            options = {};
        }
        const providerList = [];
        if (providers.InfuraProvider) {
            try {
                providerList.push(new providers.InfuraProvider(network, options.infura));
            }
            catch (error) { }
        }
        if (providers.EtherscanProvider) {
            //try {
            //    providerList.push(new providers.EtherscanProvider(network, options.etherscan));
            //} catch(error) { }
            // These networks are currently faulty on this provider
            // @TODO: This goes away once they have fixed their nodes
            const skip = ["ropsten"];
            try {
                const provider = new providers.EtherscanProvider(network);
                if (provider.network && skip.indexOf(provider.network.name) === -1) {
                    providerList.push(provider);
                }
            }
            catch (error) { }
        }
        if (providers.AlchemyProvider) {
            try {
                providerList.push(new providers.AlchemyProvider(network, options.alchemy));
            }
            catch (error) { }
        }
        if (providers.PocketProvider) {
            // These networks are currently faulty on Pocket as their
            // network does not handle the Berlin hardfork, which is
            // live on these ones.
            // @TODO: This goes away once Pocket has upgraded their nodes
            const skip = ["goerli", "ropsten", "rinkeby"];
            try {
                const provider = new providers.PocketProvider(network);
                if (provider.network && skip.indexOf(provider.network.name) === -1) {
                    providerList.push(provider);
                }
            }
            catch (error) { }
        }
        if (providers.CloudflareProvider) {
            try {
                providerList.push(new providers.CloudflareProvider(network));
            }
            catch (error) { }
        }
        if (providerList.length === 0) {
            return null;
        }
        if (providers.FallbackProvider) {
            let quorum = 1;
            if (options.quorum != null) {
                quorum = options.quorum;
            }
            else if (network === "homestead") {
                quorum = 2;
            }
            return new providers.FallbackProvider(providerList, quorum);
        }
        return providerList[0];
    };
    func.renetwork = function (network) {
        return ethDefaultProvider(network);
    };
    return func;
}
function etcDefaultProvider(url, network) {
    const func = function (providers, options) {
        if (providers.JsonRpcProvider) {
            return new providers.JsonRpcProvider(url, network);
        }
        return null;
    };
    func.renetwork = function (network) {
        return etcDefaultProvider(url, network);
    };
    return func;
}
const homestead = {
    chainId: 1,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: "homestead",
    _defaultProvider: ethDefaultProvider("homestead")
};
const ropsten = {
    chainId: 3,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: "ropsten",
    _defaultProvider: ethDefaultProvider("ropsten")
};
const classicMordor = {
    chainId: 63,
    name: "classicMordor",
    _defaultProvider: etcDefaultProvider("https://www.ethercluster.com/mordor", "classicMordor")
};
const networks = {
    unspecified: { chainId: 0, name: "unspecified" },
    homestead: homestead,
    mainnet: homestead,
    morden: { chainId: 2, name: "morden" },
    ropsten: ropsten,
    testnet: ropsten,
    rinkeby: {
        chainId: 4,
        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        name: "rinkeby",
        _defaultProvider: ethDefaultProvider("rinkeby")
    },
    kovan: {
        chainId: 42,
        name: "kovan",
        _defaultProvider: ethDefaultProvider("kovan")
    },
    goerli: {
        chainId: 5,
        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        name: "goerli",
        _defaultProvider: ethDefaultProvider("goerli")
    },
    // ETC (See: #351)
    classic: {
        chainId: 61,
        name: "classic",
        _defaultProvider: etcDefaultProvider("https:/\/www.ethercluster.com/etc", "classic")
    },
    classicMorden: { chainId: 62, name: "classicMorden" },
    classicMordor: classicMordor,
    classicTestnet: classicMordor,
    classicKotti: {
        chainId: 6,
        name: "classicKotti",
        _defaultProvider: etcDefaultProvider("https:/\/www.ethercluster.com/kotti", "classicKotti")
    },
    xdai: { chainId: 100, name: "xdai" },
    matic: { chainId: 137, name: "matic" },
    maticmum: { chainId: 80001, name: "maticmum" },
    bnb: { chainId: 56, name: "bnb" },
    bnbt: { chainId: 97, name: "bnbt" },
};
/**
 *  getNetwork
 *
 *  Converts a named common networks or chain ID (network ID) to a Network
 *  and verifies a network is a valid Network..
 */
function getNetwork(network) {
    // No network (null)
    if (network == null) {
        return null;
    }
    if (typeof (network) === "number") {
        for (const name in networks) {
            const standard = networks[name];
            if (standard.chainId === network) {
                return {
                    name: standard.name,
                    chainId: standard.chainId,
                    ensAddress: (standard.ensAddress || null),
                    _defaultProvider: (standard._defaultProvider || null)
                };
            }
        }
        return {
            chainId: network,
            name: "unknown"
        };
    }
    if (typeof (network) === "string") {
        const standard = networks[network];
        if (standard == null) {
            return null;
        }
        return {
            name: standard.name,
            chainId: standard.chainId,
            ensAddress: standard.ensAddress,
            _defaultProvider: (standard._defaultProvider || null)
        };
    }
    const standard = networks[network.name];
    // Not a standard network; check that it is a valid network in general
    if (!standard) {
        if (typeof (network.chainId) !== "number") {
            logger.throwArgumentError("invalid network chainId", "network", network);
        }
        return network;
    }
    // Make sure the chainId matches the expected network chainId (or is 0; disable EIP-155)
    if (network.chainId !== 0 && network.chainId !== standard.chainId) {
        logger.throwArgumentError("network chainId mismatch", "network", network);
    }
    // @TODO: In the next major version add an attach function to a defaultProvider
    // class and move the _defaultProvider internal to this file (extend Network)
    let defaultProvider = network._defaultProvider || null;
    if (defaultProvider == null && standard._defaultProvider) {
        if (isRenetworkable(standard._defaultProvider)) {
            defaultProvider = standard._defaultProvider.renetwork(network);
        }
        else {
            defaultProvider = standard._defaultProvider;
        }
    }
    // Standard Network (allow overriding the ENS address)
    return {
        name: network.name,
        chainId: standard.chainId,
        ensAddress: (network.ensAddress || standard.ensAddress || null),
        _defaultProvider: defaultProvider
    };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 71252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
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

/***/ 90382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rd": () => (/* binding */ fetchJson),
  "$l": () => (/* binding */ poll)
});

// UNUSED EXPORTS: _fetchData

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.4.0/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(5241);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+base64@5.4.0/node_modules/@ethersproject/base64/lib.esm/base64.js


function decode(textData) {
    textData = atob(textData);
    const data = [];
    for (let i = 0; i < textData.length; i++) {
        data.push(textData.charCodeAt(i));
    }
    return arrayify(data);
}
function encode(data) {
    data = (0,lib_esm.arrayify)(data);
    let textData = "";
    for (let i = 0; i < data.length; i++) {
        textData += String.fromCharCode(data[i]);
    }
    return btoa(textData);
}
//# sourceMappingURL=base64.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.5.0/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var bytes_lib_esm = __webpack_require__(61115);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js + 1 modules
var properties_lib_esm = __webpack_require__(27930);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+strings@5.4.0/node_modules/@ethersproject/strings/lib.esm/utf8.js + 1 modules
var utf8 = __webpack_require__(42716);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.4.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(281);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+web@5.4.0/node_modules/@ethersproject/web/lib.esm/_version.js
const version = "web/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+web@5.4.0/node_modules/@ethersproject/web/lib.esm/geturl.js

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function getUrl(href, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (options == null) {
            options = {};
        }
        const request = {
            method: (options.method || "GET"),
            headers: (options.headers || {}),
            body: (options.body || undefined),
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "follow",
            referrer: "client", // no-referrer, *client
        };
        const response = yield fetch(href, request);
        const body = yield response.arrayBuffer();
        const headers = {};
        if (response.headers.forEach) {
            response.headers.forEach((value, key) => {
                headers[key.toLowerCase()] = value;
            });
        }
        else {
            ((response.headers).keys)().forEach((key) => {
                headers[key.toLowerCase()] = response.headers.get(key);
            });
        }
        return {
            headers: headers,
            statusCode: response.status,
            statusMessage: response.statusText,
            body: (0,bytes_lib_esm/* arrayify */.lE)(new Uint8Array(body)),
        };
    });
}
//# sourceMappingURL=geturl.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+web@5.4.0/node_modules/@ethersproject/web/lib.esm/index.js

var lib_esm_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const logger = new logger_lib_esm/* Logger */.Yd(version);

function staller(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}
function bodyify(value, type) {
    if (value == null) {
        return null;
    }
    if (typeof (value) === "string") {
        return value;
    }
    if ((0,bytes_lib_esm/* isBytesLike */.Zq)(value)) {
        if (type && (type.split("/")[0] === "text" || type.split(";")[0].trim() === "application/json")) {
            try {
                return (0,utf8/* toUtf8String */.ZN)(value);
            }
            catch (error) { }
            ;
        }
        return (0,bytes_lib_esm/* hexlify */.Dv)(value);
    }
    return value;
}
// This API is still a work in progress; the future changes will likely be:
// - ConnectionInfo => FetchDataRequest<T = any>
// - FetchDataRequest.body? = string | Uint8Array | { contentType: string, data: string | Uint8Array }
//   - If string => text/plain, Uint8Array => application/octet-stream (if content-type unspecified)
// - FetchDataRequest.processFunc = (body: Uint8Array, response: FetchDataResponse) => T
// For this reason, it should be considered internal until the API is finalized
function _fetchData(connection, body, processFunc) {
    // How many times to retry in the event of a throttle
    const attemptLimit = (typeof (connection) === "object" && connection.throttleLimit != null) ? connection.throttleLimit : 12;
    logger.assertArgument((attemptLimit > 0 && (attemptLimit % 1) === 0), "invalid connection throttle limit", "connection.throttleLimit", attemptLimit);
    const throttleCallback = ((typeof (connection) === "object") ? connection.throttleCallback : null);
    const throttleSlotInterval = ((typeof (connection) === "object" && typeof (connection.throttleSlotInterval) === "number") ? connection.throttleSlotInterval : 100);
    logger.assertArgument((throttleSlotInterval > 0 && (throttleSlotInterval % 1) === 0), "invalid connection throttle slot interval", "connection.throttleSlotInterval", throttleSlotInterval);
    const headers = {};
    let url = null;
    // @TODO: Allow ConnectionInfo to override some of these values
    const options = {
        method: "GET",
    };
    let allow304 = false;
    let timeout = 2 * 60 * 1000;
    if (typeof (connection) === "string") {
        url = connection;
    }
    else if (typeof (connection) === "object") {
        if (connection == null || connection.url == null) {
            logger.throwArgumentError("missing URL", "connection.url", connection);
        }
        url = connection.url;
        if (typeof (connection.timeout) === "number" && connection.timeout > 0) {
            timeout = connection.timeout;
        }
        if (connection.headers) {
            for (const key in connection.headers) {
                headers[key.toLowerCase()] = { key: key, value: String(connection.headers[key]) };
                if (["if-none-match", "if-modified-since"].indexOf(key.toLowerCase()) >= 0) {
                    allow304 = true;
                }
            }
        }
        options.allowGzip = !!connection.allowGzip;
        if (connection.user != null && connection.password != null) {
            if (url.substring(0, 6) !== "https:" && connection.allowInsecureAuthentication !== true) {
                logger.throwError("basic authentication requires a secure https url", logger_lib_esm/* Logger.errors.INVALID_ARGUMENT */.Yd.errors.INVALID_ARGUMENT, { argument: "url", url: url, user: connection.user, password: "[REDACTED]" });
            }
            const authorization = connection.user + ":" + connection.password;
            headers["authorization"] = {
                key: "Authorization",
                value: "Basic " + encode((0,utf8/* toUtf8Bytes */.Y0)(authorization))
            };
        }
    }
    if (body) {
        options.method = "POST";
        options.body = body;
        if (headers["content-type"] == null) {
            headers["content-type"] = { key: "Content-Type", value: "application/octet-stream" };
        }
        if (headers["content-length"] == null) {
            headers["content-length"] = { key: "Content-Length", value: String(body.length) };
        }
    }
    const flatHeaders = {};
    Object.keys(headers).forEach((key) => {
        const header = headers[key];
        flatHeaders[header.key] = header.value;
    });
    options.headers = flatHeaders;
    const runningTimeout = (function () {
        let timer = null;
        const promise = new Promise(function (resolve, reject) {
            if (timeout) {
                timer = setTimeout(() => {
                    if (timer == null) {
                        return;
                    }
                    timer = null;
                    reject(logger.makeError("timeout", logger_lib_esm/* Logger.errors.TIMEOUT */.Yd.errors.TIMEOUT, {
                        requestBody: bodyify(options.body, flatHeaders["content-type"]),
                        requestMethod: options.method,
                        timeout: timeout,
                        url: url
                    }));
                }, timeout);
            }
        });
        const cancel = function () {
            if (timer == null) {
                return;
            }
            clearTimeout(timer);
            timer = null;
        };
        return { promise, cancel };
    })();
    const runningFetch = (function () {
        return lib_esm_awaiter(this, void 0, void 0, function* () {
            for (let attempt = 0; attempt < attemptLimit; attempt++) {
                let response = null;
                try {
                    response = yield getUrl(url, options);
                    // Exponential back-off throttling
                    if (response.statusCode === 429 && attempt < attemptLimit) {
                        let tryAgain = true;
                        if (throttleCallback) {
                            tryAgain = yield throttleCallback(attempt, url);
                        }
                        if (tryAgain) {
                            let stall = 0;
                            const retryAfter = response.headers["retry-after"];
                            if (typeof (retryAfter) === "string" && retryAfter.match(/^[1-9][0-9]*$/)) {
                                stall = parseInt(retryAfter) * 1000;
                            }
                            else {
                                stall = throttleSlotInterval * parseInt(String(Math.random() * Math.pow(2, attempt)));
                            }
                            //console.log("Stalling 429");
                            yield staller(stall);
                            continue;
                        }
                    }
                }
                catch (error) {
                    response = error.response;
                    if (response == null) {
                        runningTimeout.cancel();
                        logger.throwError("missing response", logger_lib_esm/* Logger.errors.SERVER_ERROR */.Yd.errors.SERVER_ERROR, {
                            requestBody: bodyify(options.body, flatHeaders["content-type"]),
                            requestMethod: options.method,
                            serverError: error,
                            url: url
                        });
                    }
                }
                let body = response.body;
                if (allow304 && response.statusCode === 304) {
                    body = null;
                }
                else if (response.statusCode < 200 || response.statusCode >= 300) {
                    runningTimeout.cancel();
                    logger.throwError("bad response", logger_lib_esm/* Logger.errors.SERVER_ERROR */.Yd.errors.SERVER_ERROR, {
                        status: response.statusCode,
                        headers: response.headers,
                        body: bodyify(body, ((response.headers) ? response.headers["content-type"] : null)),
                        requestBody: bodyify(options.body, flatHeaders["content-type"]),
                        requestMethod: options.method,
                        url: url
                    });
                }
                if (processFunc) {
                    try {
                        const result = yield processFunc(body, response);
                        runningTimeout.cancel();
                        return result;
                    }
                    catch (error) {
                        // Allow the processFunc to trigger a throttle
                        if (error.throttleRetry && attempt < attemptLimit) {
                            let tryAgain = true;
                            if (throttleCallback) {
                                tryAgain = yield throttleCallback(attempt, url);
                            }
                            if (tryAgain) {
                                const timeout = throttleSlotInterval * parseInt(String(Math.random() * Math.pow(2, attempt)));
                                //console.log("Stalling callback");
                                yield staller(timeout);
                                continue;
                            }
                        }
                        runningTimeout.cancel();
                        logger.throwError("processing response error", logger_lib_esm/* Logger.errors.SERVER_ERROR */.Yd.errors.SERVER_ERROR, {
                            body: bodyify(body, ((response.headers) ? response.headers["content-type"] : null)),
                            error: error,
                            requestBody: bodyify(options.body, flatHeaders["content-type"]),
                            requestMethod: options.method,
                            url: url
                        });
                    }
                }
                runningTimeout.cancel();
                // If we had a processFunc, it eitehr returned a T or threw above.
                // The "body" is now a Uint8Array.
                return body;
            }
            return logger.throwError("failed response", logger_lib_esm/* Logger.errors.SERVER_ERROR */.Yd.errors.SERVER_ERROR, {
                requestBody: bodyify(options.body, flatHeaders["content-type"]),
                requestMethod: options.method,
                url: url
            });
        });
    })();
    return Promise.race([runningTimeout.promise, runningFetch]);
}
function fetchJson(connection, json, processFunc) {
    let processJsonFunc = (value, response) => {
        let result = null;
        if (value != null) {
            try {
                result = JSON.parse((0,utf8/* toUtf8String */.ZN)(value));
            }
            catch (error) {
                logger.throwError("invalid JSON", logger_lib_esm/* Logger.errors.SERVER_ERROR */.Yd.errors.SERVER_ERROR, {
                    body: value,
                    error: error
                });
            }
        }
        if (processFunc) {
            result = processFunc(result, response);
        }
        return result;
    };
    // If we have json to send, we must
    // - add content-type of application/json (unless already overridden)
    // - convert the json to bytes
    let body = null;
    if (json != null) {
        body = (0,utf8/* toUtf8Bytes */.Y0)(json);
        // Create a connection with the content-type set for JSON
        const updated = (typeof (connection) === "string") ? ({ url: connection }) : (0,properties_lib_esm/* shallowCopy */.DC)(connection);
        if (updated.headers) {
            const hasContentType = (Object.keys(updated.headers).filter((k) => (k.toLowerCase() === "content-type")).length) !== 0;
            if (!hasContentType) {
                updated.headers = (0,properties_lib_esm/* shallowCopy */.DC)(updated.headers);
                updated.headers["content-type"] = "application/json";
            }
        }
        else {
            updated.headers = { "content-type": "application/json" };
        }
        connection = updated;
    }
    return _fetchData(connection, body, processJsonFunc);
}
function poll(func, options) {
    if (!options) {
        options = {};
    }
    options = (0,properties_lib_esm/* shallowCopy */.DC)(options);
    if (options.floor == null) {
        options.floor = 0;
    }
    if (options.ceiling == null) {
        options.ceiling = 10000;
    }
    if (options.interval == null) {
        options.interval = 250;
    }
    return new Promise(function (resolve, reject) {
        let timer = null;
        let done = false;
        // Returns true if cancel was successful. Unsuccessful cancel means we're already done.
        const cancel = () => {
            if (done) {
                return false;
            }
            done = true;
            if (timer) {
                clearTimeout(timer);
            }
            return true;
        };
        if (options.timeout) {
            timer = setTimeout(() => {
                if (cancel()) {
                    reject(new Error("timeout"));
                }
            }, options.timeout);
        }
        const retryLimit = options.retryLimit;
        let attempt = 0;
        function check() {
            return func().then(function (result) {
                // If we have a result, or are allowed null then we're done
                if (result !== undefined) {
                    if (cancel()) {
                        resolve(result);
                    }
                }
                else if (options.oncePoll) {
                    options.oncePoll.once("poll", check);
                }
                else if (options.onceBlock) {
                    options.onceBlock.once("block", check);
                    // Otherwise, exponential back-off (up to 10s) our next request
                }
                else if (!done) {
                    attempt++;
                    if (attempt > retryLimit) {
                        if (cancel()) {
                            reject(new Error("retry limit reached"));
                        }
                        return;
                    }
                    let timeout = options.interval * parseInt(String(Math.random() * Math.pow(2, attempt)));
                    if (timeout < options.floor) {
                        timeout = options.floor;
                    }
                    if (timeout > options.ceiling) {
                        timeout = options.ceiling;
                    }
                    setTimeout(check, timeout);
                }
                return null;
            }, function (error) {
                if (cancel()) {
                    reject(error);
                }
            });
        }
        check();
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 37092:
/***/ ((module) => {

"use strict";

var ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'

// pre-compute lookup table
var ALPHABET_MAP = {}
for (var z = 0; z < ALPHABET.length; z++) {
  var x = ALPHABET.charAt(z)

  if (ALPHABET_MAP[x] !== undefined) throw new TypeError(x + ' is ambiguous')
  ALPHABET_MAP[x] = z
}

function polymodStep (pre) {
  var b = pre >> 25
  return ((pre & 0x1FFFFFF) << 5) ^
    (-((b >> 0) & 1) & 0x3b6a57b2) ^
    (-((b >> 1) & 1) & 0x26508e6d) ^
    (-((b >> 2) & 1) & 0x1ea119fa) ^
    (-((b >> 3) & 1) & 0x3d4233dd) ^
    (-((b >> 4) & 1) & 0x2a1462b3)
}

function prefixChk (prefix) {
  var chk = 1
  for (var i = 0; i < prefix.length; ++i) {
    var c = prefix.charCodeAt(i)
    if (c < 33 || c > 126) return 'Invalid prefix (' + prefix + ')'

    chk = polymodStep(chk) ^ (c >> 5)
  }
  chk = polymodStep(chk)

  for (i = 0; i < prefix.length; ++i) {
    var v = prefix.charCodeAt(i)
    chk = polymodStep(chk) ^ (v & 0x1f)
  }
  return chk
}

function encode (prefix, words, LIMIT) {
  LIMIT = LIMIT || 90
  if ((prefix.length + 7 + words.length) > LIMIT) throw new TypeError('Exceeds length limit')

  prefix = prefix.toLowerCase()

  // determine chk mod
  var chk = prefixChk(prefix)
  if (typeof chk === 'string') throw new Error(chk)

  var result = prefix + '1'
  for (var i = 0; i < words.length; ++i) {
    var x = words[i]
    if ((x >> 5) !== 0) throw new Error('Non 5-bit word')

    chk = polymodStep(chk) ^ x
    result += ALPHABET.charAt(x)
  }

  for (i = 0; i < 6; ++i) {
    chk = polymodStep(chk)
  }
  chk ^= 1

  for (i = 0; i < 6; ++i) {
    var v = (chk >> ((5 - i) * 5)) & 0x1f
    result += ALPHABET.charAt(v)
  }

  return result
}

function __decode (str, LIMIT) {
  LIMIT = LIMIT || 90
  if (str.length < 8) return str + ' too short'
  if (str.length > LIMIT) return 'Exceeds length limit'

  // don't allow mixed case
  var lowered = str.toLowerCase()
  var uppered = str.toUpperCase()
  if (str !== lowered && str !== uppered) return 'Mixed-case string ' + str
  str = lowered

  var split = str.lastIndexOf('1')
  if (split === -1) return 'No separator character for ' + str
  if (split === 0) return 'Missing prefix for ' + str

  var prefix = str.slice(0, split)
  var wordChars = str.slice(split + 1)
  if (wordChars.length < 6) return 'Data too short'

  var chk = prefixChk(prefix)
  if (typeof chk === 'string') return chk

  var words = []
  for (var i = 0; i < wordChars.length; ++i) {
    var c = wordChars.charAt(i)
    var v = ALPHABET_MAP[c]
    if (v === undefined) return 'Unknown character ' + c
    chk = polymodStep(chk) ^ v

    // not in the checksum?
    if (i + 6 >= wordChars.length) continue
    words.push(v)
  }

  if (chk !== 1) return 'Invalid checksum for ' + str
  return { prefix: prefix, words: words }
}

function decodeUnsafe () {
  var res = __decode.apply(null, arguments)
  if (typeof res === 'object') return res
}

function decode (str) {
  var res = __decode.apply(null, arguments)
  if (typeof res === 'object') return res

  throw new Error(res)
}

function convert (data, inBits, outBits, pad) {
  var value = 0
  var bits = 0
  var maxV = (1 << outBits) - 1

  var result = []
  for (var i = 0; i < data.length; ++i) {
    value = (value << inBits) | data[i]
    bits += inBits

    while (bits >= outBits) {
      bits -= outBits
      result.push((value >> bits) & maxV)
    }
  }

  if (pad) {
    if (bits > 0) {
      result.push((value << (outBits - bits)) & maxV)
    }
  } else {
    if (bits >= inBits) return 'Excess padding'
    if ((value << (outBits - bits)) & maxV) return 'Non-zero padding'
  }

  return result
}

function toWordsUnsafe (bytes) {
  var res = convert(bytes, 8, 5, true)
  if (Array.isArray(res)) return res
}

function toWords (bytes) {
  var res = convert(bytes, 8, 5, true)
  if (Array.isArray(res)) return res

  throw new Error(res)
}

function fromWordsUnsafe (words) {
  var res = convert(words, 5, 8, false)
  if (Array.isArray(res)) return res
}

function fromWords (words) {
  var res = convert(words, 5, 8, false)
  if (Array.isArray(res)) return res

  throw new Error(res)
}

module.exports = {
  decodeUnsafe: decodeUnsafe,
  decode: decode,
  encode: encode,
  toWordsUnsafe: toWordsUnsafe,
  toWords: toWords,
  fromWordsUnsafe: fromWordsUnsafe,
  fromWords: fromWords
}


/***/ }),

/***/ 39060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(8686);
module.exports = self.fetch.bind(self);


/***/ }),

/***/ 92304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(81758);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),

/***/ 81758:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.parse = __webpack_require__(65812);
exports.stringify = __webpack_require__(98079);


/***/ }),

/***/ 65812:
/***/ ((module) => {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),

/***/ 98079:
/***/ ((module) => {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }),

/***/ 25534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PriceChartDaysControl),
/* harmony export */   "h": () => (/* binding */ Days)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86377);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74491);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21957);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            top: 0,
            right: 0,
            padding: theme.spacing(1, 2),
            position: 'absolute'
        },
        link: {
            cursor: 'pointer',
            marginRight: theme.spacing(1),
            '&:last-child': {
                marginRight: 0
            }
        },
        text: {
            fontSize: 10,
            fontWeight: 300
        }
    })
);
var Days;
(function(Days) {
    Days[Days["MAX"] = 0] = "MAX";
    Days[Days["ONE_DAY"] = 1] = "ONE_DAY";
    Days[Days["ONE_WEEK"] = 7] = "ONE_WEEK";
    Days[Days["TWO_WEEKS"] = 14] = "TWO_WEEKS";
    Days[Days["ONE_MONTH"] = 30] = "ONE_MONTH";
    Days[Days["THREE_MONTHS"] = 90] = "THREE_MONTHS";
    Days[Days["ONE_YEAR"] = 365] = "ONE_YEAR";
})(Days || (Days = {}));
function PriceChartDaysControl(props) {
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: [
            Days.ONE_DAY,
            Days.ONE_WEEK,
            Days.TWO_WEEKS,
            Days.ONE_MONTH,
            Days.THREE_MONTHS,
            Days.ONE_YEAR,
            Days.MAX, 
        ].map((days)=>{
            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: classes.link,
                onClick: ()=>{
                    var ref;
                    return (ref = props.onDaysChange) === null || ref === void 0 ? void 0 : ref.call(props, days);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classes.text,
                    component: "span",
                    color: props.days === days ? 'primary' : 'textSecondary',
                    children: (0,_pipes__WEBPACK_IMPORTED_MODULE_2__/* .resolveDaysName */ .xo)(days)
                })
            }, days);
        })
    }));
}


/***/ }),

/***/ 21957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName)
/* harmony export */ });
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48476);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88486);


const resolveDataProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'CoinGecko',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'CoinMarketCap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'Uniswap Info'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveDataProviderLink = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'https://www.coingecko.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'https://coinmarketcap.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'https://info.uniswap.org/'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveTradeProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2]: 'Uniswap V2',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3]: 'Uniswap V3',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.ZRX */ .z4.ZRX]: '0x',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP]: 'SushiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP]: 'SashimiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.BALANCER */ .z4.BALANCER]: 'Balancer',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP]: 'QuickSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP]: 'PancakeSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.DODO */ .z4.DODO]: 'DODO',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.BANCOR */ .z4.BANCOR]: 'Bancor',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.OPENOCEAN */ .z4.OPENOCEAN]: 'OpenOcean',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.TRADERJOE */ .z4.TRADERJOE]: 'TraderJoe',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.PANGOLIN */ .z4.PANGOLIN]: 'PangolinDex',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.TRISOLARIS */ .z4.TRISOLARIS]: 'Trisolaris',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.WANNASWAP */ .z4.WANNASWAP]: 'WannaSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.MDEX */ .z4.MDEX]: 'Mdex'
}, (tradeProvider)=>{
    throw new Error(`Unknown provider type: ${tradeProvider}`);
});
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}y`;
    if (days >= 30) return `${Math.floor(days / 30)}m`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    return `${days}d`;
}


/***/ }),

/***/ 90850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "checkAvailabilityOnDataProvider": () => (/* reexport */ checkAvailabilityOnDataProvider),
  "fetchBlockNumberByTimestamp": () => (/* reexport */ fetchBlockNumberByTimestamp),
  "fetchBlockNumbersByTimestamps": () => (/* reexport */ fetchBlockNumbersByTimestamps),
  "fetchBlockNumbersObjectByTimestamps": () => (/* reexport */ fetchBlockNumbersObjectByTimestamps),
  "fetchLBP_PoolTokenPrices": () => (/* reexport */ fetchLBP_PoolTokenPrices),
  "fetchLBP_PoolTokens": () => (/* reexport */ fetchLBP_PoolTokens),
  "fetchLBP_PoolsByTokenAddress": () => (/* reexport */ fetchLBP_PoolsByTokenAddress),
  "fetchPoolTokens": () => (/* reexport */ fetchPoolTokens),
  "fetchTokenPrices": () => (/* reexport */ fetchTokenPrices),
  "getAvailableCoins": () => (/* reexport */ getAvailableCoins),
  "getAvailableDataProviders": () => (/* reexport */ getAvailableDataProviders),
  "getAvailableTraderProviders": () => (/* reexport */ getAvailableTraderProviders),
  "getCoinTrendingById": () => (/* reexport */ getCoinTrendingById),
  "getCoinTrendingByKeyword": () => (/* reexport */ getCoinTrendingByKeyword),
  "getCoins": () => (/* reexport */ getCoins),
  "getCurrencies": () => (/* reexport */ getCurrencies),
  "getPriceStats": () => (/* reexport */ trending_getPriceStats),
  "getSwaps": () => (/* reexport */ getSwaps),
  "swapBancor": () => (/* reexport */ swapBancor),
  "swapOO": () => (/* reexport */ swapOO),
  "swapQuote": () => (/* reexport */ swapQuote),
  "swapRoute": () => (/* reexport */ swapRoute),
  "swapTransactionBancor": () => (/* reexport */ swapTransactionBancor),
  "updatePools": () => (/* reexport */ updatePools)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts + 2 modules
var constants = __webpack_require__(43545);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/0x/index.ts




async function swapQuote(request, networkType) {
    var ref, ref1;
    const params = {};
    Object.entries(request).map(([key, value])=>{
        params[key] = value;
    });
    if (request.slippagePercentage) params.slippagePercentage = new (bignumber_default())(request.slippagePercentage).dividedBy(constants/* BIPS_BASE */.PM).toFixed();
    if (request.buyTokenPercentageFee) params.buyTokenPercentageFee = new (bignumber_default())(request.buyTokenPercentageFee).dividedBy(100).toFixed();
    const response = await fetch(dist_default()(constants/* ZRX_BASE_URL */.qN[networkType], 'swap/v1/quote', params));
    const response_ = await response.json();
    const validationErrorResponse = response_;
    var ref2;
    if (validationErrorResponse.code) throw new Error((ref2 = (ref = (0,head/* default */.Z)(validationErrorResponse.validationErrors)) === null || ref === void 0 ? void 0 : ref.reason) !== null && ref2 !== void 0 ? ref2 : 'Unknown Error');
    const serverErrorResponse = response_;
    if (serverErrorResponse.reason) throw new Error(((ref1 = (0,head/* default */.Z)(validationErrorResponse.validationErrors)) === null || ref1 === void 0 ? void 0 : ref1.reason) || 'Unknown Error');
    const successResponse = response_;
    return successResponse;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@balancer-labs+sor@1.0.0/node_modules/@balancer-labs/sor/dist/index.js
var sor_dist = __webpack_require__(15092);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+providers@5.4.2/node_modules/@ethersproject/providers/lib.esm/json-rpc-provider.js + 3 modules
var json_rpc_provider = __webpack_require__(34110);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants_constants = __webpack_require__(24403);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(26618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(77184);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(63361);
;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/blocks.ts
function getPastTimestamps(start, duration, size = 50) {
    // the smallest timestamp size is 10 minutes
    const step = Math.max(Math.floor(duration / size), 600);
    const timestamps = [];
    for(let i = 1; i <= size; i += 1){
        const timestamp = start - i * step;
        if (timestamp > 0) timestamps.push(timestamp);
        else break;
    }
    return timestamps.reverse();
}
function getFutureTimestamps(start, duration, size = 50) {
    // the smallest timestamp size is 10 minutes
    const step = Math.max(Math.floor(duration / size), 600);
    const timestamps = [];
    for(let i = 0; i < size; i += 1){
        const timestamp = start + i * step;
        timestamps.push(timestamp);
    }
    return timestamps;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/chunk.js
var chunk = __webpack_require__(530);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(62517);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/blocks/index.ts




async function fetchFromEthereumBlocksSubgraph(query) {
    const subgraphURL = (0,constants_constants/* getTrendingConstants */.$o)(settings/* currentChainIdSettings.value */.wU.value).ETHEREUM_BLOCKS_SUBGRAPH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        mode: 'cors',
        body: json_stable_stringify_default()({
            query
        })
    });
    const { data  } = await response.json();
    return data;
}
/**
 * Fetches the block number near the given timestamp.
 * @param timestamp
 */ async function fetchBlockNumberByTimestamp(timestamp) {
    var ref;
    const data = await fetchFromEthereumBlocksSubgraph(`
    {
        blocks (
            first: 1,
            orderBy: timestamp,
            where: {
                timestamp_gt: ${timestamp},
                timestamp_lt: ${timestamp + 600}
            }
        ) {
            number
        }
    }
    `);
    return (ref = (0,head/* default */.Z)(data === null || data === void 0 ? void 0 : data.blocks)) === null || ref === void 0 ? void 0 : ref.number;
}
/**
 * Fetches block numbers near the given timestamps.
 * @param timestamps
 * @param skipCount
 */ async function fetchBlockNumbersByTimestamps(timestamps, skipCount = 100) {
    // avoiding request entity too large
    const chunkTimestamps = (0,chunk/* default */.Z)(timestamps, skipCount);
    const data = await Promise.all(chunkTimestamps.map(async (chunk1)=>{
        const queries = chunk1.map((x)=>{
            return `
                    t${x}: blocks(
                        first: 1,
                        orderBy: timestamp,
                        orderDirection: desc,
                        where: {
                            timestamp_gt: ${x},
                            timestamp_lt: ${x + 600}
                        }
                    ) {
                        number
                    }
                `;
        });
        return fetchFromEthereumBlocksSubgraph(`
                query blocks {
                    ${queries}
                }
            `);
    }));
    return (0,flatten/* default */.Z)(data.filter(Boolean).map((result)=>Object.keys(result).map((x)=>({
                timestamp: Number(x.split('t')[1]),
                // @ts-ignore
                blockNumber: (0,head/* default */.Z)(result[x]).number
            })
        )
    ));
}
/**
 * fetches block number near the given timestamp, the return will be a object, like { t{timestamp}: blockNumber }
 * the timestamps can't have too much item
 * @param timestamps
 */ async function fetchBlockNumbersObjectByTimestamps(timestamps) {
    const queries = timestamps.map((x)=>{
        return `
            t${x}: blocks(
                first: 1,
                orderBy: timestamp,
                where: {
                    timestamp_gt: ${x},
                    timestamp_lt: ${x + 600}
                }
            ) {
                number
            }
        `;
    });
    const data = await fetchFromEthereumBlocksSubgraph(`
        query blocks {
            ${queries}
        }
    `);
    const result = {};
    if (!data) return result;
    Object.keys(data).map((key)=>{
        var ref;
        result[key] = (ref = (0,head/* default */.Z)(data[key])) === null || ref === void 0 ? void 0 : ref.number;
    });
    return result;
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/LBP/index.ts



async function fetchFromBalancerPoolSubgraph(query) {
    const subgraphURL = (0,constants_constants/* getLBPConstants */.Hk)(settings/* currentChainIdSettings.value */.wU.value).BALANCER_POOLS_SUBGRAPH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        mode: 'cors',
        body: json_stable_stringify_default()({
            query
        })
    });
    const { data  } = await response.json();
    return data;
}
async function fetchLBP_PoolsByTokenAddress(address) {
    const data = await fetchFromBalancerPoolSubgraph(`
    {
        pools(
            orderBy: swapsCount,
            orderDirection: desc,
            where: {
                rights_contains: ["canChangeWeights"],
                tokensList_contains: ["${address.toLowerCase()}"]
            }
        ) {
          id
          createTime
        }
    }`);
    if (!(data === null || data === void 0 ? void 0 : data.pools)) throw new Error('Failed to load pools.');
    return data.pools;
}
async function fetchLBP_PoolTokenPrices(poolId, address, blockNumbers) {
    const queries = blockNumbers.map((x)=>`
        b${x}: tokenPrices (
            where: { poolTokenId: "${poolId.toLowerCase()}-${address.toLowerCase()}" },
            block: {
                number: ${x}
            }
        ) {
            price
        }
    `
    );
    const data = await fetchFromBalancerPoolSubgraph(`
        query tokenPrices {
            ${queries.join('\n')}
        }
    `);
    if (!data) return [];
    var ref;
    return Object.keys(data).map((x)=>{
        var ref1;
        return {
            price: (ref = (ref1 = data[x][0]) === null || ref1 === void 0 ? void 0 : ref1.price) !== null && ref !== void 0 ? ref : '0',
            blockNumber: x.slice(1)
        };
    }).sort((a, z)=>Number.parseInt(a.blockNumber, 10) - Number.parseInt(z.blockNumber, 10)
    );
}
async function fetchLBP_PoolTokens(poolId, blockNumbers) {
    const queries = blockNumbers.map((x)=>`
        b${x}: pools (
            where: {
                id: "${poolId.toLowerCase()}"
            },
            block: {
                number: ${x}
            }
        ) {
            tokens {
                address
                balance
                denormWeight
            }
        }`
    );
    const data = await fetchFromBalancerPoolSubgraph(`
        query poolTokens {
            ${queries.join('\n')}
        }
    `);
    if (!data) return [];
    return Object.keys(data).map((x)=>({
            tokens: data[x].tokens,
            blockNumber: x.slice(1)
        })
    );
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/balancer/index.ts











// #region create cached SOR
const createSOR_ = (0,memoize/* default */.Z)((chainId)=>{
    const { RPC  } = (0,constants_constants/* getRPCConstants */.t0)(chainId);
    const providerURL = (0,head/* default */.Z)(RPC);
    if (!providerURL) throw new Error('Unknown chain id.');
    return new sor_dist.SOR(// we choose a fixed provider cause it's only used here.
    new json_rpc_provider/* JsonRpcProvider */.r(providerURL), constants/* BALANCER_SOR_GAS_PRICE */.L4, constants/* BALANCER_MAX_NO_POOLS */.r2, chainId, '');
}, (chainId)=>String(chainId)
);
function createSOR(chainId) {
    const sor = createSOR_(chainId);
    // update pools url when sor object was created or reused
    sor.poolsUrl = `${(0,constants_constants/* getTraderConstants */.Gr)(chainId).BALANCER_POOLS_URL}?timestamp=${Date.now()}`;
    return sor;
}
// #endregion
async function updatePools(force = false, chainId) {
    const currentChainId = chainId !== null && chainId !== void 0 ? chainId : settings/* currentChainIdSettings.value */.wU.value;
    const sor = createSOR(currentChainId);
    // this fetches all pools list from URL in constructor then onChain balances using Multicall
    if (!sor.isAllFetched || force) {
        sor.poolsUrl = `${(0,constants_constants/* getTraderConstants */.Gr)(currentChainId).BALANCER_POOLS_URL}?timestamp=${Date.now()}`;
        await sor.fetchPools();
    }
}
async function getSwaps(tokenIn1, tokenOut1, swapType, amount, targetChainId) {
    const chainId = targetChainId !== null && targetChainId !== void 0 ? targetChainId : settings/* currentChainIdSettings.value */.wU.value;
    const sor = createSOR(chainId);
    // this calculates the cost to make a swap which is used as an input to sor to allow it to make gas efficient recommendations.
    // can be set once and will be used for further swap calculations.
    // defaults to 0 if not called or can be set manually using: await sor.setCostOutputToken(tokenOut, manualPriceBn)
    await sor.setCostOutputToken(tokenOut1);
    // update pools if necessary
    updatePools();
    // get swaps from chain
    const [swaps, tradeAmount, spotPrice] = await sor.getSwaps(tokenIn1, tokenOut1, swapType, new (bignumber_default())(amount));
    // compose routes
    // learn more: https://github.com/balancer-labs/balancer-frontend/blob/develop/src/components/swap/Routing.vue
    const totalSwapAmount = swaps.reduce((total, rawHops)=>{
        var ref;
        return total.plus(((ref = (0,head/* default */.Z)(rawHops)) === null || ref === void 0 ? void 0 : ref.swapAmount) || '0');
    }, src/* ZERO */.xE);
    const pools = sor.onChainCache.pools;
    const routes = swaps.map((rawHops)=>{
        var ref;
        const swapAmount1 = new (bignumber_default())(((ref = (0,head/* default */.Z)(rawHops)) === null || ref === void 0 ? void 0 : ref.swapAmount) || '0');
        const share1 = swapAmount1.div(totalSwapAmount).toNumber();
        const hops = rawHops.map((rawHop)=>{
            const { swapAmount  } = rawHop;
            const tokenIn = rawHop.tokenIn;
            const tokenOut = rawHop.tokenOut;
            const rawPool = pools.find((pool)=>pool.id === rawHop.pool
            );
            if (!rawPool) return {};
            const totalWeight = new (bignumber_default())(rawPool.totalWeight);
            const pool1 = {
                address: rawPool.id,
                tokens: rawPool.tokens.map((token)=>{
                    const address = token.address;
                    const weight = new (bignumber_default())(token.denormWeight);
                    const share = weight.div(totalWeight).toNumber();
                    return {
                        address,
                        share
                    };
                }).sort((a, b)=>{
                    if ((0,address/* isSameAddress */.Wr)(a.address, tokenIn) || (0,address/* isSameAddress */.Wr)(b.address, tokenOut)) return -1;
                    if ((0,address/* isSameAddress */.Wr)(a.address, tokenOut) || (0,address/* isSameAddress */.Wr)(b.address, tokenIn)) return 1;
                    return a.share - b.share;
                }).filter((token, index, tokens)=>{
                    // Show first 2 and last 2 tokens
                    return index < 2 || index > tokens.length - 3;
                })
            };
            return {
                pool: pool1,
                tokenIn,
                tokenOut,
                swapAmount
            };
        });
        return {
            share: share1,
            hops
        };
    });
    return {
        swaps: [
            swaps,
            tradeAmount,
            spotPrice
        ],
        routes
    };
}
async function fetchTokenPrices(address, duration, size) {
    // use the first pool sorted by swap count (desc)
    const pools = await fetchLBP_PoolsByTokenAddress(address);
    const pool = (0,head/* default */.Z)(pools);
    if (!pool) return [];
    // create timestamps by given duration and size
    const timestamps = getFutureTimestamps(pool.createTime, duration, size);
    // expand timestamps to block numbers
    const blockNumbers = await fetchBlockNumbersByTimestamps(timestamps);
    if (!blockNumbers.length) return [];
    // fetch the token prices in the pool
    const prices = await fetchLBP_PoolTokenPrices(pool.id, address, blockNumbers.map((x)=>x.blockNumber
    ));
    // compose the result as timestamp and price pairs
    return prices.map((x, i)=>({
            timestamp: timestamps[i],
            blockNumber: x.blockNumber,
            price: Number.parseFloat(x.price)
        })
    );
}
async function fetchPoolTokens(address, duration, size) {
    // use the first pool sorted by swap count (desc)
    const pools = await fetchLBP_PoolsByTokenAddress(address);
    const pool = (0,head/* default */.Z)(pools);
    if (!pool) return [];
    // create timestamps by given duration and size
    const timestamps = getFutureTimestamps(pool.createTime, duration, size);
    // expand timestamps to block numbers
    const blockNumbers = await fetchBlockNumbersByTimestamps(timestamps);
    if (!blockNumbers.length) return [];
    const poolTokens = await fetchLBP_PoolTokens(pool.id, blockNumbers.map((x)=>x.blockNumber
    ));
    return [];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(48476);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(22229);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trader/index.ts



async function getAvailableTraderProviders(chainId) {
    const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(chainId);
    if (!networkType) return [];
    switch(networkType){
        case types/* NetworkType.Ethereum */.td.Ethereum:
            return [
                public_api_src/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2,
                public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3,
                public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
                public_api_src/* TradeProvider.SASHIMISWAP */.z4.SASHIMISWAP,
                public_api_src/* TradeProvider.ZRX */.z4.ZRX,
                public_api_src/* TradeProvider.BALANCER */.z4.BALANCER,
                public_api_src/* TradeProvider.DODO */.z4.DODO,
                public_api_src/* TradeProvider.BANCOR */.z4.BANCOR,
                public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN,
                public_api_src/* TradeProvider.MDEX */.z4.MDEX, 
            ];
        case types/* NetworkType.Polygon */.td.Polygon:
            return [
                public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3,
                public_api_src/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP,
                public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
                public_api_src/* TradeProvider.DODO */.z4.DODO,
                public_api_src/* TradeProvider.ZRX */.z4.ZRX,
                public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN,
                public_api_src/* TradeProvider.TRISOLARIS */.z4.TRISOLARIS, 
            ];
        case types/* NetworkType.Binance */.td.Binance:
            return [
                public_api_src/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP,
                public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
                public_api_src/* TradeProvider.DODO */.z4.DODO,
                public_api_src/* TradeProvider.ZRX */.z4.ZRX,
                public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN,
                public_api_src/* TradeProvider.MDEX */.z4.MDEX, 
            ];
        case types/* NetworkType.Arbitrum */.td.Arbitrum:
            return [
                public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3,
                public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN,
                public_api_src/* TradeProvider.DODO */.z4.DODO
            ];
        case types/* NetworkType.xDai */.td.xDai:
            return [
                public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
                public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN
            ];
        case types/* NetworkType.Avalanche */.td.Avalanche:
            return [
                public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
                public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN,
                public_api_src/* TradeProvider.TRADERJOE */.z4.TRADERJOE,
                public_api_src/* TradeProvider.PANGOLIN */.z4.PANGOLIN
            ];
        case types/* NetworkType.xDai */.td.xDai:
            return [
                public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
                public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN
            ];
        case types/* NetworkType.Celo */.td.Celo:
            return [
                public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP
            ];
        case types/* NetworkType.Fantom */.td.Fantom:
            return [
                public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP
            ];
        case types/* NetworkType.Aurora */.td.Aurora:
            return [
                public_api_src/* TradeProvider.DODO */.z4.DODO,
                public_api_src/* TradeProvider.WANNASWAP */.z4.WANNASWAP,
                public_api_src/* TradeProvider.TRISOLARIS */.z4.TRISOLARIS
            ];
        case types/* NetworkType.Boba */.td.Boba:
        case types/* NetworkType.Fuse */.td.Fuse:
        case types/* NetworkType.Metis */.td.Metis:
        case types/* NetworkType.Optimistic */.td.Optimistic:
            console.error('To be implement network: ', networkType);
            return [];
        default:
            (0,esm/* safeUnreachable */.P)(networkType);
            return [];
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/groupBy.js + 3 modules
var groupBy = __webpack_require__(70688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/coingecko/index.ts


// #region get currency
async function getAllCurrencies() {
    const response = await fetch(`${constants/* COIN_GECKO_BASE_URL */.hb}/simple/supported_vs_currencies`, {
        cache: 'force-cache'
    });
    return response.json();
}
async function getAllCoins() {
    const response = await fetch(`${constants/* COIN_GECKO_BASE_URL */.hb}/coins/list`, {
        cache: 'force-cache'
    });
    return response.json();
}
async function getCoinInfo(coinId) {
    const response = await fetch(`${constants/* COIN_GECKO_BASE_URL */.hb}/coins/${coinId}?developer_data=false&community_data=false&tickers=true`, {
        cache: shared/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
    });
    return response.json();
}
async function getPriceStats(coinId, currencyId, days) {
    const params = new URLSearchParams();
    params.append('vs_currency', currencyId);
    params.append('days', String(days));
    const response = await fetch(`${constants/* COIN_GECKO_BASE_URL */.hb}/coins/${coinId}/market_chart?${params.toString()}`, {
        cache: shared/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
    });
    return response.json();
} // #endregion

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/getUnixTime/index.js + 1 modules
var getUnixTime = __webpack_require__(4975);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/coinmarketcap/index.ts



// #region get all currency
function coinmarketcap_getAllCurrencies() {
    return [];
}
async function coinmarketcap_getAllCoins() {
    const response = await fetch(`${constants/* CMC_V1_BASE_URL */.V1}/cryptocurrency/map?aux=status,platform&listing_status=active,untracked&sort=cmc_rank`, {
        cache: 'force-cache'
    });
    return response.json();
}
async function getQuotesInfo(id, currency) {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('convert', currency);
    try {
        const response = await fetch(`${constants/* THIRD_PARTY_V1_BASE_URL */.NU}/cryptocurrency/widget?${params.toString()}`, {
            cache: shared/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
        });
        return response.json();
    } catch  {
        return {
            data: null
        };
    }
}
async function coinmarketcap_getCoinInfo(id) {
    const params = new URLSearchParams('aux=urls,logo,description,tags,platform,date_added,notice,status');
    params.append('id', id);
    const response_ = await fetch(`${constants/* CMC_V1_BASE_URL */.V1}/cryptocurrency/info?${params.toString()}`, {
        cache: shared/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
    });
    const response = await response_.json();
    return {
        data: response.data[id],
        status: response.status
    };
}
async function getHistorical(id, currency, startDate, endDate, interval = '1d') {
    const params = new URLSearchParams('format=chart_crypto_details');
    params.append('convert', currency);
    params.append('id', id);
    params.append('interval', interval);
    params.append('time_end', (0,getUnixTime/* default */.Z)(endDate).toString());
    params.append('time_start', (0,getUnixTime/* default */.Z)(startDate).toString());
    const response = await fetch(`${constants/* CMC_V1_BASE_URL */.V1}/cryptocurrency/quotes/historical?${params.toString()}`, {
        cache: shared/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
    });
    return response.json();
}
async function getLatestMarketPairs(id, currency) {
    const params = new URLSearchParams('aux=num_market_pairs,market_url,price_quote,effective_liquidity,market_score,market_reputation&limit=40&sort=cmc_rank&start=1');
    params.append('convert', currency);
    params.append('id', id);
    try {
        const response = await fetch(`${constants/* CMC_V1_BASE_URL */.V1}/cryptocurrency/market-pairs/latest?${params.toString()}`, {
            cache: shared/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
        });
        return response.json();
    } catch  {
        return {
            data: {
                id,
                market_pairs: [],
                num_market_pairs: 0
            }
        };
    }
} // #endregion

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/uniswap-v2-subgraph/index.ts




const TokenFields = `
  fragment TokenFields on Token {
    id
    name
    symbol
    derivedETH
    tradeVolume
    tradeVolumeUSD
    untrackedVolumeUSD
    totalLiquidity
    txCount
  }
`;
const PairFields = `
  fragment PairFields on Pair {
    id
    txCount
    token0 {
      id
      symbol
      name
      totalLiquidity
      derivedETH
    }
    token1 {
      id
      symbol
      name
      totalLiquidity
      derivedETH
    }
    reserve0
    reserve1
    reserveUSD
    totalSupply
    trackedReserveETH
    reserveETH
    volumeUSD
    untrackedVolumeUSD
    token0Price
    token1Price
    createdAtTimestamp
  }
`;
async function fetchFromUniswapV2Subgraph(query) {
    const subgraphURL = (0,constants_constants/* getTrendingConstants */.$o)(settings/* currentChainIdSettings.value */.wU.value).UNISWAP_V2_SUBGRAPH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        mode: 'cors',
        body: json_stable_stringify_default()({
            query
        })
    });
    const { data  } = await response.json();
    return data;
}
/**
 * Fetch Ether price of given block
 * @param blockNumber if don't give, will return latest price
 */ async function fetchEtherPriceByBlockNumber(blockNumber) {
    var ref;
    const data = await fetchFromUniswapV2Subgraph(`
        query bundles {
            bundles(where: { id: 1 } ${blockNumber ? `block: { number: ${blockNumber} }` : ''}) {
                ethPrice
            }
        }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.bundles)) return;
    return (ref = (0,head/* default */.Z)(data.bundles)) === null || ref === void 0 ? void 0 : ref.ethPrice;
}
/**
 * Fetch Ether price of list of blocks
 * @param blockNumbers
 */ async function fetchEtherPricesByBlockNumbers(blockNumbers) {
    const queries = blockNumbers.map((x)=>{
        return `
            b${x}: bundle(id: "1", ${x ? `block: { number: ${x} }` : ''}) {
                ethPrice
            }
        `;
    });
    const data = await fetchFromUniswapV2Subgraph(`
        query bundles {
            ${queries.join('\n')}
        }
    `);
    const result = {};
    if (!data) return result;
    Object.keys(data).map((key)=>{
        var ref;
        result[key] = (ref = data[key]) === null || ref === void 0 ? void 0 : ref.ethPrice;
    });
    return result;
}
/**
 * Fetches tokens for an array of symbols (case-sensitive).
 * @param keyword
 */ async function fetchTokensByKeyword(keyword) {
    // thegraph does not support case-insensitive searching
    // so cased keywords will be added too
    const listOfKeywords = [
        keyword,
        keyword.toLowerCase(),
        keyword.toUpperCase()
    ];
    const data = await fetchFromUniswapV2Subgraph(`
        query tokens {
            tokens (where: { symbol_in: ${json_stable_stringify_default()(listOfKeywords)} }, orderBy: tradeVolume, orderDirection: desc) {
                id
                name
                symbol
                decimals
            }
        }
    `);
    var ref;
    return (ref = data === null || data === void 0 ? void 0 : data.tokens) !== null && ref !== void 0 ? ref : [];
}
/**
 * Fetch the daily token data.
 */ async function fetchTokenDayData(address, date) {
    const utcTimestamp = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    const data = await fetchFromUniswapV2Subgraph(`
        {
            tokenDayDatas(first: 1000, orderBy: date, date: ${utcTimestamp}, where: { token: ${address} }) {
                id
                date
                priceUSD
                totalLiquidityToken
                totalLiquidityUSD
                totalLiquidityETH
                dailyVolumeETH
                dailyVolumeToken
                dailyVolumeUSD
            }
        }
    `);
    return first(data === null || data === void 0 ? void 0 : data.data.tokenDayData);
}
/**
 * Fetch the token data
 * @param address
 * @param blockNumber
 */ async function fetchTokenData(address, blockNumber) {
    var ref;
    const data = await fetchFromUniswapV2Subgraph(`
        ${TokenFields}
        ${PairFields}
        query tokens {
            tokens(${blockNumber ? `block : {number: ${blockNumber}}` : ''} where: {id:"${address}"}) {
                ...TokenFields
            }
            pairs0: pairs(where: {token0: "${address}"}, first: 50, orderBy: reserveUSD, orderDirection: desc) {
                ...PairFields
            }
            pairs1: pairs(where: {token1: "${address}"}, first: 50, orderBy: reserveUSD, orderDirection: desc) {
                ...PairFields
            }
        }
    `);
    var ref1;
    return {
        token: (0,head/* default */.Z)(data === null || data === void 0 ? void 0 : data.tokens),
        allPairs: (ref1 = data === null || data === void 0 ? void 0 : (ref = data.pairs0) === null || ref === void 0 ? void 0 : ref.concat(data.pairs1)) !== null && ref1 !== void 0 ? ref1 : []
    };
}
/**
 * fetch pairs bulk data
 * @param pairList
 */ async function fetchPairsBulk(pairList) {
    const data = await fetchFromUniswapV2Subgraph(`
           ${PairFields}
           query pairs {
                pairs(first: 500, where: { id_in: ${json_stable_stringify_default()(pairList)} }, orderBy: trackedReserveETH, orderDirection: desc ) {
                    ...PairFields
                }
           }
        `);
    var ref;
    return (ref = data === null || data === void 0 ? void 0 : data.pairs) !== null && ref !== void 0 ? ref : [];
}
/**
 * fetch pairs historical bulk data
 * @param pairs
 * @param blockNumber
 */ async function fetchPairsHistoricalBulk(pairs, blockNumber) {
    const data = await fetchFromUniswapV2Subgraph(`
            ${PairFields}
            query pairs {
                pairs(first: 200, where: { id_in: ${json_stable_stringify_default()(pairs)} }, block: { number: ${blockNumber} }, orderBy: trackedReserveETH, orderDirection: desc) {
                    ...PairFields
                }
            }
    `);
    var ref;
    return (ref = data === null || data === void 0 ? void 0 : data.pairs) !== null && ref !== void 0 ? ref : [];
}
/**
 * fetch pair data
 * @param pairAddress
 * @param blockNumber
 */ async function fetchPairData(pairAddress, blockNumber) {
    const data = await fetchFromUniswapV2Subgraph(`
         ${PairFields}
         query pairs {
            pairs(${blockNumber ? `block : {number: ${blockNumber}}` : ''} where: { id: "${pairAddress}"} ) {
                ...PairFields
            }
        }
    `);
    return (0,head/* default */.Z)(data === null || data === void 0 ? void 0 : data.pairs);
}
/**
 * fetch price info by token address, blocks
 * @param tokenAddress
 * @param blocks
 * @param skipCount
 */ async function fetchPricesByBlocks(tokenAddress, blocks, skipCount = 50) {
    // avoiding request entity too large
    const chunkBlocks = (0,chunk/* default */.Z)(blocks, skipCount);
    const data = await Promise.all(chunkBlocks.map(async (chunk1)=>{
        const queries = chunk1.map((block)=>`
                    t${block.timestamp}: token(id:"${tokenAddress}", blocks: { number: ${block.blockNumber} }) {
                        derivedETH
                    }
                `
        );
        const blockQueries = chunk1.map((block)=>`
                b${block.timestamp}: bundle(id: "1", block: { number: ${block.blockNumber} }) {
                    ethPrice
                }
            `
        );
        return fetchFromUniswapV2Subgraph(`
                query blocks {
                    ${queries}
                    ${blockQueries}
                }
            `);
    }));
    return (0,flatten/* default */.Z)(data.map((result)=>{
        if (result) {
            const keys = Object.keys(result).filter((key)=>key.startsWith('t')
            );
            return keys.map((x)=>{
                var ref;
                const timestamp = x.split('t')[1];
                return {
                    timestamp: Number(timestamp) * 1000,
                    derivedETH: result[x].derivedETH,
                    ethPrice: (ref = result[`b${timestamp}`]) === null || ref === void 0 ? void 0 : ref.ethPrice
                };
            });
        }
        return [];
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/uniswap-health/index.ts




async function fetchFromUniswapV2Health(query) {
    const subgraphURL = (0,constants_constants/* getTrendingConstants */.$o)(settings/* currentChainIdSettings.value */.wU.value).UNISWAP_V2_HEALTH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        mode: 'cors',
        body: json_stable_stringify_default()({
            query
        })
    });
    const { data  } = await response.json();
    return data;
}
async function fetchLatestBlocks() {
    var ref, ref1;
    const response = await fetchFromUniswapV2Health(`
      query health {
        indexingStatusForCurrentVersion(subgraphName: "uniswap/uniswap-v2") {
          synced
          health
          chains {
            chainHeadBlock {
              number
            }
            latestBlock {
              number
            }
          }
        }
      }
    `);
    const latestBlock = (ref = (0,head/* default */.Z)(response === null || response === void 0 ? void 0 : response.indexingStatusForCurrentVersion.chains)) === null || ref === void 0 ? void 0 : ref.latestBlock.number;
    const headBlock = (ref1 = (0,head/* default */.Z)(response === null || response === void 0 ? void 0 : response.indexingStatusForCurrentVersion.chains)) === null || ref1 === void 0 ? void 0 : ref1.chainHeadBlock.number;
    return [
        latestBlock,
        headBlock
    ];
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/uniswap/index.ts





/**
 * get standard percent change between two values
 * @param valueNow
 * @param value24HoursAgo
 */ const getPercentChange = (valueNow, value24HoursAgo)=>{
    const adjustedPercentChange = new (bignumber_default())(valueNow !== null && valueNow !== void 0 ? valueNow : 0).minus(value24HoursAgo !== null && value24HoursAgo !== void 0 ? value24HoursAgo : 0).dividedBy(value24HoursAgo !== null && value24HoursAgo !== void 0 ? value24HoursAgo : 0).multipliedBy(100);
    if (adjustedPercentChange.isNaN() || !adjustedPercentChange.isFinite()) {
        return 0;
    }
    return adjustedPercentChange.toNumber();
};
/**
 * Get timestamp from current, one hour ago, one day ago, a week ago
 */ function getTimestampForChanges() {
    const currentTime = new Date();
    const utcOneHourBack = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), currentTime.getUTCHours() - 1, currentTime.getUTCMinutes());
    const utcOneDayBack = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate() - 1, currentTime.getUTCHours(), currentTime.getUTCMinutes());
    const utcWeekBack = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate() - 7, currentTime.getUTCHours(), currentTime.getUTCMinutes());
    const utcTwoWeekBack = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate() - 14, currentTime.getUTCHours(), currentTime.getUTCMinutes());
    const utcOneMonthBack = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth() - 1, currentTime.getUTCDate(), currentTime.getUTCHours(), currentTime.getUTCMinutes());
    const utcOneYearBack = Date.UTC(currentTime.getUTCFullYear() - 1, currentTime.getUTCMonth(), currentTime.getUTCDate(), currentTime.getUTCHours(), currentTime.getUTCMinutes());
    return {
        utcOneHourBack: Math.floor(utcOneHourBack / 1000),
        utcOneDayBack: Math.floor(utcOneDayBack / 1000),
        utcWeekBack: Math.floor(utcWeekBack / 1000),
        utcTwoWeekBack: Math.floor(utcTwoWeekBack / 1000),
        utcOneMonthBack: Math.floor(utcOneMonthBack / 1000),
        utcOneYearBack: Math.floor(utcOneYearBack / 1000)
    };
}
/**
 * For uniswap all coins should be treated as available
 * Please use getCoinInfo directly
 */ function uniswap_getAllCoins() {
    throw new Error('For uniswap all coins are available by default.');
}
async function getAllCoinsByKeyword(keyword) {
    keyword = keyword.toLowerCase();
    if (keyword === 'mask') {
        return [
            {
                decimals: 18,
                address: '0x69af81e73a73b40adf4f3d4223cd9b1ece623074',
                id: '0x69af81e73a73b40adf4f3d4223cd9b1ece623074',
                name: 'Mask Network',
                symbol: 'MASK',
                contract_address: '0x69af81e73a73b40adf4f3d4223cd9b1ece623074'
            }, 
        ];
    }
    const tokens = await fetchTokensByKeyword(keyword);
    const coins = tokens.map((x)=>({
            ...x,
            address: x.id,
            contract_address: x.id
        })
    );
    if (keyword === 'eth') {
        coins.unshift({
            id: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            name: 'ETHer (Wrapped)',
            contract_address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            symbol: 'eth',
            decimals: 18
        });
    } else if (keyword === 'nrge') {
        coins.unshift({
            id: '0x1416946162b1c2c871a73b07e932d2fb6c932069',
            address: '0x1416946162b1c2c871a73b07e932d2fb6c932069',
            name: 'Energi',
            contract_address: '0x1416946162b1c2c871a73b07e932d2fb6c932069',
            symbol: 'NRGT',
            decimals: 18
        });
    }
    return coins;
}
/**
 * Get coin info by id
 * @param id the token address
 */ async function uniswap_getCoinInfo(id1) {
    // #region get timestamps from one hour ago, ,one day ago, a week ago
    const { utcOneHourBack , utcOneDayBack , utcWeekBack , utcTwoWeekBack , utcOneMonthBack , utcOneYearBack  } = getTimestampForChanges();
    // #endregion
    // #region get block from one hour ago, one day ago, a week ago
    const { [`t${utcOneHourBack}`]: oneHourBlock , [`t${utcOneDayBack}`]: oneDayBlock , [`t${utcWeekBack}`]: weekBlock , [`t${utcTwoWeekBack}`]: twoWeekBlock , [`t${utcOneMonthBack}`]: oneMonthBlock , [`t${utcOneYearBack}`]: oneYearBlock ,  } = await fetchBlockNumbersObjectByTimestamps([
        utcOneHourBack,
        utcOneDayBack,
        utcWeekBack,
        utcTwoWeekBack,
        utcOneMonthBack,
        utcOneYearBack, 
    ]);
    // #region
    // #region get ether price
    const ethPrice = await fetchEtherPriceByBlockNumber();
    const { [`b${oneHourBlock}`]: oneHourBackEthPrice , [`b${oneDayBlock}`]: oneDayBackEthPrice , [`b${weekBlock}`]: weekBackEthPrice , [`b${twoWeekBlock}`]: twoWeekBackEthPrice , [`b${oneMonthBlock}`]: oneMonthBackEthPrice , [`b${oneYearBlock}`]: oneYearBackEthPrice ,  } = await fetchEtherPricesByBlockNumbers([
        oneHourBlock,
        oneDayBlock,
        weekBlock,
        twoWeekBlock,
        oneMonthBlock,
        oneYearBlock, 
    ]);
    // #endregion
    // #region get tokenData
    const [{ token , allPairs  }, { token: oneHourToken  }, { token: oneDayToken  }, { token: weekToken  }, { token: twoWeekToken  }, { token: oneMonthToken  }, { token: oneYearToken  }, ] = await Promise.all([
        fetchTokenData(id1),
        fetchTokenData(id1, oneHourBlock),
        fetchTokenData(id1, oneDayBlock),
        fetchTokenData(id1, weekBlock),
        fetchTokenData(id1, twoWeekBlock),
        fetchTokenData(id1, oneMonthBlock),
        fetchTokenData(id1, oneYearBlock), 
    ]);
    var ref, ref1;
    // #endregion
    // #region calculate the trade volume and the untracked volume before day ago
    const oneDayVolumeUSD = new (bignumber_default())((ref = token === null || token === void 0 ? void 0 : token.tradeVolumeUSD) !== null && ref !== void 0 ? ref : 0).minus((ref1 = oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.tradeVolumeUSD) !== null && ref1 !== void 0 ? ref1 : 0).toNumber();
    var ref2, ref3;
    const oneDayVolumeUT = new (bignumber_default())((ref2 = token === null || token === void 0 ? void 0 : token.untrackedVolumeUSD) !== null && ref2 !== void 0 ? ref2 : 0).minus((ref3 = oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.untrackedVolumeUSD) !== null && ref3 !== void 0 ? ref3 : 0).toNumber();
    var ref4;
    // #endregion
    // #region calculate the current price and price percent before one hour ago, one day ago, a week ago.
    const currentPrice = new (bignumber_default())((ref4 = token === null || token === void 0 ? void 0 : token.derivedETH) !== null && ref4 !== void 0 ? ref4 : 0).multipliedBy(ethPrice !== null && ethPrice !== void 0 ? ethPrice : 0);
    var ref5;
    const price_change_percentage_1h = getPercentChange(currentPrice, new (bignumber_default())((ref5 = oneHourToken === null || oneHourToken === void 0 ? void 0 : oneHourToken.derivedETH) !== null && ref5 !== void 0 ? ref5 : 0).multipliedBy(oneHourBackEthPrice !== null && oneHourBackEthPrice !== void 0 ? oneHourBackEthPrice : 0));
    var ref6;
    const price_change_percentage_24h = getPercentChange(currentPrice, new (bignumber_default())((ref6 = oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.derivedETH) !== null && ref6 !== void 0 ? ref6 : 0).multipliedBy(oneDayBackEthPrice !== null && oneDayBackEthPrice !== void 0 ? oneDayBackEthPrice : 0));
    var ref7;
    const price_change_percentage_7d_in_currency = getPercentChange(currentPrice, new (bignumber_default())((ref7 = weekToken === null || weekToken === void 0 ? void 0 : weekToken.derivedETH) !== null && ref7 !== void 0 ? ref7 : 0).multipliedBy(weekBackEthPrice !== null && weekBackEthPrice !== void 0 ? weekBackEthPrice : 0));
    var ref8;
    const price_change_percentage_14d_in_currency = getPercentChange(currentPrice, new (bignumber_default())((ref8 = twoWeekToken === null || twoWeekToken === void 0 ? void 0 : twoWeekToken.derivedETH) !== null && ref8 !== void 0 ? ref8 : 0).multipliedBy(twoWeekBackEthPrice !== null && twoWeekBackEthPrice !== void 0 ? twoWeekBackEthPrice : 0));
    var ref9;
    const price_change_percentage_30d_in_currency = getPercentChange(currentPrice, new (bignumber_default())((ref9 = oneMonthToken === null || oneMonthToken === void 0 ? void 0 : oneMonthToken.derivedETH) !== null && ref9 !== void 0 ? ref9 : 0).multipliedBy(oneMonthBackEthPrice !== null && oneMonthBackEthPrice !== void 0 ? oneMonthBackEthPrice : 0));
    var ref10;
    const price_change_percentage_1y_in_currency = getPercentChange(currentPrice, new (bignumber_default())((ref10 = oneYearToken === null || oneYearToken === void 0 ? void 0 : oneYearToken.derivedETH) !== null && ref10 !== void 0 ? ref10 : 0).multipliedBy(oneYearBackEthPrice !== null && oneYearBackEthPrice !== void 0 ? oneYearBackEthPrice : 0));
    // #endregion
    // #region get pairs data
    const pairsData = await getBulkPairData(allPairs === null || allPairs === void 0 ? void 0 : allPairs.map(({ id  })=>id
    ));
    // #endregion
    return {
        token,
        marketInfo: {
            current_price: currentPrice.toNumber(),
            price_change_percentage_1h,
            price_change_percentage_24h,
            price_change_percentage_7d_in_currency,
            price_change_percentage_14d_in_currency,
            price_change_percentage_30d_in_currency,
            price_change_percentage_1y_in_currency,
            price_change_percentage_1h_in_currency: price_change_percentage_1h,
            price_change_percentage_24h_in_currency: price_change_percentage_24h,
            total_volume: new (bignumber_default())(oneDayVolumeUSD ? oneDayVolumeUSD : oneDayVolumeUT).toNumber()
        },
        tickersInfo: Object.entries(pairsData).sort(([, a], [, z])=>{
            return z.oneDayVolumeUSD - a.oneDayVolumeUSD;
        }).map(([pairAddress, pairData])=>{
            return {
                logo_url: 'https://raw.githubusercontent.com/dimensiondev/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
                trade_url: `https://info.uniswap.org/pair/${pairAddress}`,
                market_name: 'Uniswap (V2)',
                base_name: pairData.token0.symbol,
                target_name: pairData.token1.symbol,
                volume: pairData.oneDayVolumeUSD === 0 && pairData.oneDayVolumeUntracked ? pairData.oneDayVolumeUntracked : pairData.oneDayVolumeUSD,
                updated: new Date()
            };
        }).slice(0, 30)
    };
}
async function getBulkPairData(pairList) {
    const { utcOneDayBack  } = getTimestampForChanges();
    const oneDayBlock = await fetchBlockNumberByTimestamp(utcOneDayBack);
    const current = await fetchPairsBulk(pairList);
    const oneDayResult = await fetchPairsHistoricalBulk(pairList, oneDayBlock);
    const oneDayData = oneDayResult.reduce((obj, cur)=>({
            ...obj,
            [cur.id]: cur
        })
    , {});
    const pairsData = await Promise.all(current === null || current === void 0 ? void 0 : current.map(async (pair)=>{
        let oneDayHistory = oneDayData[pair.id];
        if (!oneDayHistory) {
            oneDayHistory = await fetchPairData(pair.id, oneDayBlock);
        }
        var ref;
        const oneDayVolumeUSD = new (bignumber_default())(pair.volumeUSD).minus((ref = oneDayHistory === null || oneDayHistory === void 0 ? void 0 : oneDayHistory.volumeUSD) !== null && ref !== void 0 ? ref : 0).toNumber();
        var ref11;
        const oneDayVolumeUntracked = new (bignumber_default())(pair.untrackedVolumeUSD).minus((ref11 = oneDayHistory === null || oneDayHistory === void 0 ? void 0 : oneDayHistory.untrackedVolumeUSD) !== null && ref11 !== void 0 ? ref11 : 0).toNumber();
        const result = {
            ...pair,
            oneDayVolumeUSD,
            oneDayVolumeUntracked
        };
        if (!oneDayHistory && pair && (0,src/* isGreaterThan */.T1)(pair.createdAtBlockNumber, oneDayBlock !== null && oneDayBlock !== void 0 ? oneDayBlock : 0)) {
            result.oneDayVolumeUSD = new (bignumber_default())(pair.volumeUSD).toNumber();
        }
        if (!oneDayHistory && pair) {
            result.oneDayVolumeUSD = new (bignumber_default())(pair.volumeUSD).toNumber();
        }
        return result;
    }));
    return pairsData.reduce((obj, cur)=>({
            ...obj,
            [cur.id]: cur
        })
    , {});
}
async function uniswap_getPriceStats(id, currency, interval, startTime, endTime) {
    const [latestBlock] = await fetchLatestBlocks();
    // create an array of hour start times until we reach current hour
    // buffer by half your to catch case where graph isn't to latest block
    const timestamps = [];
    let time = startTime;
    while(time < endTime){
        timestamps.push(time);
        time += interval;
    }
    if (timestamps.length === 0) {
        return [];
    }
    let blocks = await fetchBlockNumbersByTimestamps(timestamps);
    if (!blocks || blocks.length === 0) {
        return [];
    }
    if (latestBlock) {
        blocks = blocks.filter((block)=>{
            return block.blockNumber && (0,src/* isLessThanOrEqualTo */.PW)(block === null || block === void 0 ? void 0 : block.blockNumber, latestBlock);
        });
    }
    const prices = await fetchPricesByBlocks(id, blocks);
    return prices.map(({ timestamp , derivedETH , ethPrice  })=>{
        return [
            timestamp,
            new (bignumber_default())(ethPrice !== null && ethPrice !== void 0 ? ethPrice : 0).multipliedBy(derivedETH !== null && derivedETH !== void 0 ? derivedETH : 0).toNumber()
        ];
    });
}

// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
var Trader_types = __webpack_require__(41391);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/mirrored_tokens.json
const mirrored_tokens_namespaceObject = JSON.parse('[{"id":"0x21ca39943e91d704678f5d00b6616650f066fd63","name":"Wrapped Mirror TSLA Token","symbol":"mTSLA","decimals":18,"contract_address":"0x21ca39943e91d704678f5d00b6616650f066fd63"},{"id":"0xd36932143f6ebdedd872d5fb0651f4b72fd15a84","name":"Wrapped Mirror mAAPL Token","symbol":"mAAPL","decimals":18,"contract_address":"0xd36932143f6ebdedd872d5fb0651f4b72fd15a84"},{"id":"0x41bbedd7286daab5910a1f15d12cbda839852bd7","name":"Wrapped Mirror mMSFT Token","symbol":"mMSFT","decimals":18,"contract_address":"0x41bbedd7286daab5910a1f15d12cbda839852bd7"},{"id":"0x13b02c8de71680e71f0820c996e4be43c2f57d15","name":"Wrapped Mirror mQQQ Token","symbol":"mQQQ","decimals":18,"contract_address":"0x13b02c8de71680e71f0820c996e4be43c2f57d15"},{"id":"0x0cae9e4d663793c2a2a0b211c1cf4bbca2b9caa7","name":"Wrapped Mirror mAMZN Token","symbol":"mAMZN","decimals":18,"contract_address":"0x0cae9e4d663793c2a2a0b211c1cf4bbca2b9caa7"},{"id":"0x1d350417d9787e000cc1b95d70e9536dcd91f373","name":"Wrapped Mirror mIAU Token","symbol":"mIAU","decimals":18,"contract_address":"0x1d350417d9787e000cc1b95d70e9536dcd91f373"},{"id":"0x56aa298a19c93c6801fdde870fa63ef75cc0af72","name":"Wrapped Mirror mBABA Token","symbol":"mBABA","decimals":18,"contract_address":"0x56aa298a19c93c6801fdde870fa63ef75cc0af72"},{"id":"0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676","name":"Wrapped Mirror mSLV Token","symbol":"mSLV","decimals":18,"contract_address":"0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676"},{"id":"0x31c63146a635eb7465e5853020b39713ac356991","name":"Wrapped Mirror mUSO Token","symbol":"mUSO","decimals":18,"contract_address":"0x31c63146a635eb7465e5853020b39713ac356991"},{"id":"0xc8d674114bac90148d11d3c1d33c61835a0f9dcd","name":"Wrapped Mirror mNFLX Token","symbol":"mNFLX","decimals":18,"contract_address":"0xc8d674114bac90148d11d3c1d33c61835a0f9dcd"},{"id":"0xedb0414627e6f1e3f082de65cd4f9c693d78cca9","name":"Wrapped Mirror mTWTR Token","symbol":"mTWTR","decimals":18,"contract_address":"0xedb0414627e6f1e3f082de65cd4f9c693d78cca9"},{"id":"0xf72fcd9dcf0190923fadd44811e240ef4533fc86","name":"Wrapped Mirror mVIXY Token","symbol":"mVIXY","decimals":18,"contract_address":"0xf72fcd9dcf0190923fadd44811e240ef4533fc86"},{"id":"0x59a921db27dd6d4d974745b7ffc5c33932653442","name":"Wrapped Mirror mGOOGL Token","symbol":"mGOOGL","decimals":18,"contract_address":"0x59a921db27dd6d4d974745b7ffc5c33932653442"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/stocks.json
const stocks_namespaceObject = JSON.parse('["AAPL","CMG","GPS","NDX","SPY","TSLA","V","VIX","NIO","GME","HP","JOBS"]');
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/cashtag.json
const cashtag_namespaceObject = JSON.parse('["BMW","DEFI","EQ","GOLF","GUN","ITI","NFT","OK","SHELL","SUM","TOKEN"]');
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/hashtag.json
const hashtag_namespaceObject = JSON.parse('["ALEX","ARPA","ATOM","BAND","BASH","BLACK","BMW","BOA","BOT","BTW","BURGER","COCOS","COIN","CPI","CREAM","DAPP","DATA","DEFI","DF","DICE","DNA","DOS","EARN","EDO","ELF","ENG","EQ","FARM","FETCH","FOG","FUN","FX","GAME","GAS","GN","GOLF","GUN","HOT","HUB","ICE","IQ","ITI","KAN","KING","LOOM","MAID","MATH","MEME","META","MIX","MOON","NEST","NEW","NFT","OCEAN","OK","OMG","ONE","OPEN","PAI","PEARL","PICKLE","PLAY","POLY","POWER","RING","SALT","SHELL","STAKE","SUM","SUN","SUSHI","SYS","TITAN","TOMO","TON","TRADE","TRUE","WAVES","WING","YOU","TOKEN"]');
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/hotfix.ts









const BLACKLIST_MAP = {
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: {
        [types/* NetworkType.Ethereum */.td.Ethereum]: [
            '8410'
        ]
    },
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: {
        [types/* NetworkType.Ethereum */.td.Ethereum]: [
            'swaptoken',
            'nftx-hashmasks-index'
        ]
    },
    // use token address as id and all letters should be lower-case
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: {
        [types/* NetworkType.Ethereum */.td.Ethereum]: []
    }
};
const KEYWORD_ALIAS_MAP = {
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: {
        [types/* NetworkType.Ethereum */.td.Ethereum]: {
            NYFI: 'n0031'
        }
    },
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: {
        [types/* NetworkType.Ethereum */.td.Ethereum]: {
            NYFI: 'n0031'
        }
    },
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: {}
};
const KEYWORD_ID_MAP = {
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: {
        [types/* NetworkType.Ethereum */.td.Ethereum]: {
            UNI: '7083',
            YAM: '7131'
        }
    },
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: {
        [types/* NetworkType.Ethereum */.td.Ethereum]: {
            UNI: 'uniswap'
        }
    },
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: {}
};
const ID_ADDRESS_MAP = {
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: {
        [types/* NetworkType.Ethereum */.td.Ethereum]: {
            '6747': '0x32a7c02e79c4ea1008dd6564b35f131428673c41',
            '8536': '0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074'
        },
        [types/* NetworkType.Polygon */.td.Polygon]: {
            '8536': '0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7'
        }
    },
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: {
        [types/* NetworkType.Ethereum */.td.Ethereum]: {
            'crust-network': '0x32a7c02e79c4ea1008dd6564b35f131428673c41'
        },
        [types/* NetworkType.Polygon */.td.Polygon]: {
            'mask-network': '0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7'
        }
    },
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: {}
};
const NETWORK_ID_MAP = {
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: {},
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: {},
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: {}
};
(0,esm/* getEnumAsArray */.Yl)(types/* NetworkType */.td).map(({ value: networkType  })=>{
    const chainId = (0,chainDetailed/* getChainIdFromNetworkType */.EP)(networkType);
    var _PLATFORM_ID;
    NETWORK_ID_MAP[public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO][networkType] = (_PLATFORM_ID = (0,constants_constants/* getCoinGeckoConstants */.V6)(chainId).PLATFORM_ID) !== null && _PLATFORM_ID !== void 0 ? _PLATFORM_ID : '';
    var _CHAIN_ID;
    NETWORK_ID_MAP[public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP][networkType] = (_CHAIN_ID = (0,constants_constants/* getCoinMarketCapConstants */.fN)(chainId).CHAIN_ID) !== null && _CHAIN_ID !== void 0 ? _CHAIN_ID : '';
});
function resolveAlias(keyword, dataProvider) {
    var ref;
    if (dataProvider === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) return keyword;
    var ref1;
    return (ref1 = (ref = KEYWORD_ALIAS_MAP[dataProvider][settings/* currentNetworkSettings.value */.fX.value]) === null || ref === void 0 ? void 0 : ref[keyword.toUpperCase()]) !== null && ref1 !== void 0 ? ref1 : keyword;
}
function resolveCoinId(keyword, dataProvider) {
    var ref;
    return (ref = KEYWORD_ID_MAP[dataProvider][settings/* currentNetworkSettings.value */.fX.value]) === null || ref === void 0 ? void 0 : ref[keyword.toUpperCase()];
}
function resolveCoinAddress(id, dataProvider) {
    var ref;
    return (ref = ID_ADDRESS_MAP[dataProvider][settings/* currentNetworkSettings.value */.fX.value]) === null || ref === void 0 ? void 0 : ref[id];
}
function resolveNetworkType(id, dataProvider) {
    var ref;
    if (dataProvider === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) return types/* NetworkType.Ethereum */.td.Ethereum;
    const networks = NETWORK_ID_MAP[dataProvider];
    return (ref = Object.entries(networks).find(([_, key])=>key === id
    )) === null || ref === void 0 ? void 0 : ref[0];
}
function isBlockedId(id, dataProvider) {
    var ref;
    return (ref = BLACKLIST_MAP[dataProvider][settings/* currentNetworkSettings.value */.fX.value]) === null || ref === void 0 ? void 0 : ref.includes(id);
}
function isBlockedKeyword(type, keyword) {
    const search = keyword.toUpperCase();
    if (stocks_namespaceObject.includes(search)) return true;
    if (type === Trader_types/* TagType.HASH */.Qy.HASH) return hashtag_namespaceObject.includes(search);
    if (type === Trader_types/* TagType.CASH */.Qy.CASH) return cashtag_namespaceObject.includes(search);
    return true;
}
function isMirroredKeyword(symbol) {
    return mirrored_tokens_namespaceObject.map((x)=>x.symbol
    ).some((x)=>x.toUpperCase() === symbol.toUpperCase()
    );
}

// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trending/PriceChartDaysControl.tsx
var PriceChartDaysControl = __webpack_require__(25534);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/index.ts











/**
 * Get supported currencies of specific data provider
 * @param dataProvider
 */ async function getCurrencies(dataProvider) {
    switch(dataProvider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            const currencies = await getAllCurrencies();
            return currencies.map((x)=>({
                    id: x,
                    name: x.toUpperCase()
                })
            );
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            return Object.values(coinmarketcap_getAllCurrencies()).map((x)=>({
                    id: String(x.id),
                    name: x.symbol.toUpperCase(),
                    symbol: x.token,
                    description: x.name
                })
            );
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            return [
                {
                    id: 'usd',
                    name: 'USD',
                    symbol: '$',
                    description: 'Unite State Dollar'
                }, 
            ];
        default:
            (0,esm/* unreachable */.t1)(dataProvider);
    }
}
async function getCoins(dataProvider) {
    switch(dataProvider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            return getAllCoins();
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            const { data: cmcCoins  } = await coinmarketcap_getAllCoins();
            return cmcCoins.filter((x)=>x.status === 'active'
            ).map((x)=>{
                var ref;
                return {
                    id: String(x.id),
                    name: x.name,
                    symbol: x.symbol,
                    contract_address: ((ref = x.platform) === null || ref === void 0 ? void 0 : ref.name) === 'Ethereum' ? x.platform.token_address : undefined
                };
            });
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            // the uniswap has got huge tokens based (more than 2.2k) since we fetch coin info dynamically
            return [];
        default:
            (0,esm/* unreachable */.t1)(dataProvider);
    }
}
// #region check a specific coin is available on specific data provider
const coinNamespace = new Map();
async function updateCache(dataProvider, keyword) {
    try {
        // uniswap update cache with keyword
        if (dataProvider === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) {
            if (!keyword) return;
            if (!coinNamespace.has(dataProvider)) coinNamespace.set(dataProvider, {
                supportedSymbolsSet: new Set(),
                supportedSymbolIdsMap: new Map(),
                lastUpdated: new Date()
            });
            const cache = coinNamespace.get(dataProvider);
            const coins = (await getAllCoinsByKeyword(keyword)).filter((x)=>!isBlockedId(x.id, dataProvider)
            );
            if (coins.length) {
                cache.supportedSymbolsSet.add(keyword.toLowerCase());
                cache.supportedSymbolIdsMap.set(keyword.toLowerCase(), coins);
                cache.lastUpdated = new Date();
            }
            return;
        }
        // other providers fetch all of supported coins
        const coins1 = (await getCoins(dataProvider)).filter((x)=>!isBlockedId(x.id, dataProvider)
        );
        const coinsGrouped = (0,groupBy/* default */.Z)(coins1, (x)=>x.symbol.toLowerCase()
        );
        coinNamespace.set(dataProvider, {
            supportedSymbolsSet: new Set(Object.keys(coinsGrouped)),
            supportedSymbolIdsMap: new Map(Object.entries(coinsGrouped).map(([symbol, coins])=>[
                    symbol,
                    coins
                ]
            )),
            lastUpdated: new Date()
        });
    } catch  {
        console.error('failed to update cache');
    }
}
function isCacheExpired(dataProvider) {
    var ref;
    var ref1;
    const lastUpdated = (ref1 = (ref = coinNamespace.get(dataProvider)) === null || ref === void 0 ? void 0 : ref.lastUpdated.getTime()) !== null && ref1 !== void 0 ? ref1 : 0;
    return Date.now() - lastUpdated > constants/* CRYPTOCURRENCY_MAP_EXPIRES_AT */.Ey;
}
async function checkAvailabilityOnDataProvider(keyword, type, dataProvider) {
    var ref;
    if (isBlockedKeyword(type, keyword)) return false;
    // for uniswap we check availability by fetching token info dynamically
    if (dataProvider === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) await updateCache(dataProvider, keyword);
    else if (!coinNamespace.has(dataProvider)) await updateCache(dataProvider);
    else if (isCacheExpired(dataProvider)) updateCache(dataProvider);
    const symbols = (ref = coinNamespace.get(dataProvider)) === null || ref === void 0 ? void 0 : ref.supportedSymbolsSet;
    var ref2;
    return (ref2 = symbols === null || symbols === void 0 ? void 0 : symbols.has(resolveAlias(keyword, dataProvider).toLowerCase())) !== null && ref2 !== void 0 ? ref2 : false;
}
async function getAvailableDataProviders(type, keyword) {
    const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(settings/* currentChainIdSettings.value */.wU.value);
    if (!networkType) return [];
    if (!type || !keyword) return (0,esm/* getEnumAsArray */.Yl)(public_api_src/* DataProvider */.FW).filter((x)=>networkType === types/* NetworkType.Ethereum */.td.Ethereum ? true : x.value !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO
    ).map((y)=>y.value
    );
    const checked = await Promise.all((0,esm/* getEnumAsArray */.Yl)(public_api_src/* DataProvider */.FW).filter((x)=>x.value === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? networkType === types/* NetworkType.Ethereum */.td.Ethereum : true
    ).map(async (x)=>[
            x.value,
            await checkAvailabilityOnDataProvider(resolveAlias(keyword, x.value), type, x.value), 
        ]
    ));
    return checked.filter(([, y])=>y
    ).map(([x])=>x
    );
}
async function getAvailableCoins(keyword, type, dataProvider) {
    var ref;
    if (!await checkAvailabilityOnDataProvider(keyword, type, dataProvider)) return [];
    const ids = (ref = coinNamespace.get(dataProvider)) === null || ref === void 0 ? void 0 : ref.supportedSymbolIdsMap;
    var ref3;
    return (ref3 = ids === null || ids === void 0 ? void 0 : ids.get(resolveAlias(keyword, dataProvider).toLowerCase())) !== null && ref3 !== void 0 ? ref3 : [];
}
// #endregion
// #region get trending info
async function getCoinTrending(id, currency, dataProvider) {
    switch(dataProvider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            const info = await getCoinInfo(id);
            const platform_url = `https://www.coingecko.com/en/coins/${info.id}`;
            const twitter_url = info.links.twitter_screen_name ? `https://twitter.com/${info.links.twitter_screen_name}` : '';
            const facebook_url = info.links.facebook_username ? `https://t.me/${info.links.facebook_username}` : '';
            const telegram_url = info.links.telegram_channel_identifier ? `https://t.me/${info.links.telegram_channel_identifier}` : '';
            var ref, ref4;
            return {
                lastUpdated: info.last_updated,
                dataProvider,
                currency,
                coin: {
                    id,
                    name: info.name,
                    symbol: info.symbol.toUpperCase(),
                    is_mirrored: isMirroredKeyword(info.symbol),
                    // TODO:
                    // use current language setting
                    description: info.description.en,
                    market_cap_rank: info.market_cap_rank,
                    image_url: info.image.small,
                    tags: info.categories.filter(Boolean),
                    announcement_urls: info.links.announcement_url.filter(Boolean),
                    community_urls: [
                        twitter_url,
                        facebook_url,
                        telegram_url,
                        info.links.subreddit_url,
                        ...info.links.chat_url,
                        ...info.links.official_forum_url, 
                    ].filter(Boolean),
                    source_code_urls: Object.values(info.links.repos_url).flatMap((x)=>x
                    ),
                    home_urls: info.links.homepage.filter(Boolean),
                    blockchain_urls: (0,uniq/* default */.Z)([
                        platform_url,
                        ...info.links.blockchain_site
                    ].filter(Boolean).map((url)=>url.toLowerCase()
                    )),
                    platform_url,
                    facebook_url,
                    twitter_url,
                    telegram_url,
                    contract_address: (ref4 = resolveCoinAddress(id, public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO)) !== null && ref4 !== void 0 ? ref4 : info.platforms[(ref = Object.keys(info.platforms).find((x)=>resolveNetworkType(x, public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO) === settings/* currentNetworkSettings.value */.fX.value
                    )) !== null && ref !== void 0 ? ref : '']
                },
                market: Object.entries(info.market_data).reduce((accumulated, [key, value])=>{
                    var _id;
                    if (value && typeof value === 'object') accumulated[key] = (_id = value[currency.id]) !== null && _id !== void 0 ? _id : 0;
                    else accumulated[key] = value;
                    return accumulated;
                }, {}),
                tickers: info.tickers.slice(0, 30).map((x)=>({
                        logo_url: x.market.logo,
                        trade_url: x.trade_url,
                        market_name: x.market.name,
                        base_name: x.base,
                        target_name: x.target,
                        price: x.converted_last.usd,
                        volume: x.converted_volume.usd,
                        score: x.trust_score,
                        updated: new Date(x.timestamp)
                    })
                )
            };
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            var ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13;
            const currencyName = currency.name.toUpperCase();
            const [{ data: coinInfo , status  }, { data: quotesInfo  }, { data: market  }] = await Promise.all([
                coinmarketcap_getCoinInfo(id),
                getQuotesInfo(id, currencyName),
                getLatestMarketPairs(id, currencyName), 
            ]);
            var _twitter, _reddit, _chat, _explorer, _tags, ref14;
            const trending = {
                lastUpdated: status.timestamp,
                platform: coinInfo.platform,
                coin: {
                    id,
                    name: coinInfo.name,
                    symbol: coinInfo.symbol,
                    is_mirrored: isMirroredKeyword(coinInfo.symbol),
                    announcement_urls: (ref5 = coinInfo.urls.announcement) === null || ref5 === void 0 ? void 0 : ref5.filter(Boolean),
                    tech_docs_urls: (ref6 = coinInfo.urls.technical_doc) === null || ref6 === void 0 ? void 0 : ref6.filter(Boolean),
                    message_board_urls: (ref7 = coinInfo.urls.message_board) === null || ref7 === void 0 ? void 0 : ref7.filter(Boolean),
                    source_code_urls: (ref8 = coinInfo.urls.source_code) === null || ref8 === void 0 ? void 0 : ref8.filter(Boolean),
                    community_urls: [
                        ...(_twitter = coinInfo.urls.twitter) !== null && _twitter !== void 0 ? _twitter : [],
                        ...(_reddit = coinInfo.urls.reddit) !== null && _reddit !== void 0 ? _reddit : [],
                        ...(_chat = coinInfo.urls.chat) !== null && _chat !== void 0 ? _chat : [], 
                    ].filter(Boolean),
                    home_urls: (ref9 = coinInfo.urls.website) === null || ref9 === void 0 ? void 0 : ref9.filter(Boolean),
                    blockchain_urls: [
                        `https://coinmarketcap.com/currencies/${coinInfo.slug}/`,
                        ...(_explorer = coinInfo.urls.explorer) !== null && _explorer !== void 0 ? _explorer : [], 
                    ].filter(Boolean),
                    tags: (_tags = coinInfo.tags) !== null && _tags !== void 0 ? _tags : void 0,
                    image_url: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`,
                    platform_url: `https://coinmarketcap.com/currencies/${coinInfo.slug}/`,
                    twitter_url: (ref10 = coinInfo.urls.twitter) === null || ref10 === void 0 ? void 0 : ref10.find((x)=>x.includes('twitter')
                    ),
                    telegram_url: (ref11 = coinInfo.urls.chat) === null || ref11 === void 0 ? void 0 : ref11.find((x)=>x.includes('telegram')
                    ),
                    market_cap_rank: quotesInfo === null || quotesInfo === void 0 ? void 0 : (ref12 = quotesInfo[id]) === null || ref12 === void 0 ? void 0 : ref12.cmc_rank,
                    description: coinInfo.description,
                    contract_address: (ref14 = resolveCoinAddress(id, public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP)) !== null && ref14 !== void 0 ? ref14 : (ref13 = coinInfo.contract_address.find((x)=>resolveNetworkType(x.platform.coin.id, public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP) === settings/* currentNetworkSettings.value */.fX.value
                    )) === null || ref13 === void 0 ? void 0 : ref13.contract_address
                },
                currency,
                dataProvider,
                tickers: market.market_pairs.map((pair)=>({
                        logo_url: `https://s2.coinmarketcap.com/static/img/exchanges/32x32/${pair.exchange.id}.png`,
                        trade_url: pair.market_url,
                        market_name: pair.exchange.name,
                        market_reputation: pair.market_reputation,
                        base_name: pair.market_pair_base.exchange_symbol,
                        target_name: pair.market_pair_quote.exchange_symbol,
                        price: pair.market_pair_base.currency_id === market.id ? pair.quote[currencyName].price : pair.quote[currencyName].price_quote,
                        volume: pair.quote[currencyName].volume_24h,
                        score: String(pair.market_score),
                        updated: new Date(pair.quote[currencyName].last_updated)
                    })
                ).sort((a, z)=>{
                    if (a.market_reputation !== z.market_reputation) return z.market_reputation - a.market_reputation // reputation from high to low
                    ;
                    if (a.price.toFixed(2) !== z.price.toFixed(2)) return z.price - a.price // price from high to low
                    ;
                    return z.volume - a.volume // volume from high to low
                    ;
                })
            };
            const quotesInfo_ = quotesInfo === null || quotesInfo === void 0 ? void 0 : quotesInfo[id];
            var _total_supply, _total_supply1, _max_supply;
            if (quotesInfo_) trending.market = {
                circulating_supply: (_total_supply = quotesInfo_.total_supply) !== null && _total_supply !== void 0 ? _total_supply : void 0,
                total_supply: (_total_supply1 = quotesInfo_.total_supply) !== null && _total_supply1 !== void 0 ? _total_supply1 : void 0,
                max_supply: (_max_supply = quotesInfo_.max_supply) !== null && _max_supply !== void 0 ? _max_supply : void 0,
                market_cap: quotesInfo_.quote[currencyName].market_cap,
                current_price: quotesInfo_.quote[currencyName].price,
                total_volume: quotesInfo_.quote[currencyName].volume_24h,
                price_change_percentage_1h: quotesInfo_.quote[currencyName].percent_change_1h,
                price_change_percentage_24h: quotesInfo_.quote[currencyName].percent_change_24h,
                price_change_percentage_1h_in_currency: quotesInfo_.quote[currencyName].percent_change_1h,
                price_change_percentage_24h_in_currency: quotesInfo_.quote[currencyName].percent_change_24h,
                price_change_percentage_7d_in_currency: quotesInfo_.quote[currencyName].percent_change_7d
            };
            return trending;
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            const { token , marketInfo , tickersInfo  } = await uniswap_getCoinInfo(id);
            return {
                currency,
                dataProvider: public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO,
                market: marketInfo,
                coin: {
                    id,
                    name: (token === null || token === void 0 ? void 0 : token.name) || '',
                    symbol: (token === null || token === void 0 ? void 0 : token.symbol) || '',
                    decimals: Number((token === null || token === void 0 ? void 0 : token.decimals) || '0'),
                    is_mirrored: isMirroredKeyword((token === null || token === void 0 ? void 0 : token.symbol) || ''),
                    blockchain_urls: [
                        `https://info.uniswap.org/token/${id}`,
                        `https://etherscan.io/address/${id}`
                    ],
                    image_url: `https://raw.githubusercontent.com/dimensiondev/assets/master/blockchains/ethereum/assets/${id}/logo.png`,
                    platform_url: `https://info.uniswap.org/token/${id}`,
                    contract_address: id
                },
                tickers: tickersInfo,
                lastUpdated: ''
            };
        default:
            (0,esm/* unreachable */.t1)(dataProvider);
    }
}
async function getCoinTrendingById(id, currency, dataProvider) {
    return getCoinTrending(id, currency, dataProvider);
}
async function getCoinTrendingByKeyword(keyword, tagType, currency, dataProvider) {
    // check if the keyword is supported by given data provider
    const coins = await getAvailableCoins(keyword, tagType, dataProvider);
    if (!coins.length) return null;
    var ref;
    // prefer coins on the ethereum network
    const coin = (ref = coins.find((x)=>x.contract_address
    )) !== null && ref !== void 0 ? ref : (0,head/* default */.Z)(coins);
    if (!coin) return null;
    var ref15;
    return getCoinTrendingById((ref15 = resolveCoinId(resolveAlias(keyword, dataProvider), dataProvider)) !== null && ref15 !== void 0 ? ref15 : coin.id, currency, dataProvider);
}
// #endregion
// #region get price stats info
async function trending_getPriceStats(id, currency, days, dataProvider) {
    switch(dataProvider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            return (await getPriceStats(id, currency.id, days === PriceChartDaysControl/* Days.MAX */.h.MAX ? 11430 : days)).prices;
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            const interval = (()=>{
                if (days === 0) return '1d' // max
                ;
                if (days > 365) return '1d' // 1y
                ;
                if (days > 90) return '2h' // 3m
                ;
                if (days > 30) return '1h' // 1m
                ;
                if (days > 7) return '15m' // 1w
                ;
                return '5m';
            })();
            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - days);
            const stats = await getHistorical(id, currency.name.toUpperCase(), days === PriceChartDaysControl/* Days.MAX */.h.MAX ? constants/* BTC_FIRST_LEGER_DATE */.zl : startDate, endDate, interval);
            if (stats.data.is_active === 0) return [];
            return Object.entries(stats.data).map(([date, x])=>[
                    date,
                    x[currency.name.toUpperCase()][0]
                ]
            );
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            const endTime = new Date();
            const startTime = new Date();
            startTime.setDate(endTime.getDate() - days);
            const uniswap_interval = (()=>{
                if (days === 0 || days > 365) return 86400 // max
                ;
                if (days > 90) return 7200 // 1y
                ;
                if (days > 30) return 3600 // 3m
                ;
                if (days > 7) return 900 // 1w
                ;
                return 300 // 5m
                ;
            })();
            return uniswap_getPriceStats(id, currency, uniswap_interval, Math.floor((days === PriceChartDaysControl/* Days.MAX */.h.MAX ? constants/* BTC_FIRST_LEGER_DATE.getTime */.zl.getTime() : startTime.getTime()) / 1000), Math.floor(endTime.getTime() / 1000));
        default:
            return [];
    }
} // #endregion

// EXTERNAL MODULE: ./src/plugins/Trader/constants/dodo.ts
var dodo = __webpack_require__(20376);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/dodo/index.ts



async function swapRoute(request) {
    var ref, ref1;
    const response = await fetch(// cspell:disable-next-line
    dist_default()(dodo/* DODO_BASE_URL */.Z, '/dodoapi/getdodoroute', {
        chainId: request.chainId,
        slippage: request.slippage,
        fromTokenAddress: (ref = request.fromToken) === null || ref === void 0 ? void 0 : ref.address,
        fromTokenDecimals: request.fromToken.decimals,
        toTokenAddress: (ref1 = request.toToken) === null || ref1 === void 0 ? void 0 : ref1.address,
        toTokenDecimals: request.toToken.decimals,
        fromAmount: request.fromAmount,
        userAddr: request.userAddr,
        rpc: request.rpc
    }));
    const payload = await response.json();
    if (payload.status !== 200) {
        var _data;
        throw new Error((_data = payload.data) !== null && _data !== void 0 ? _data : 'Unknown Error');
    }
    return {
        ...payload.data,
        fromAmount: (0,src/* leftShift */.w5)(request.fromAmount, request.fromToken.decimals).toNumber(),
        value: request.isNativeSellToken ? request.fromAmount : '0',
        slippage: request.slippage,
        fromTokenSymbol: request.fromToken.symbol,
        toTokenSymbol: request.toToken.symbol
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/bancor/calculateMinimumReturn.ts



const calculateMinimumReturn = ({ toToken , toAmount , slippage  })=>{
    const toWei = (0,src/* rightShift */.pu)(toAmount || '0', toToken.decimals);
    const slippageWei = new (bignumber_default())(slippage).dividedBy(constants/* BIPS_BASE */.PM);
    const minReturnWei = toWei.times(src/* ONE.minus */.ry.minus(slippageWei));
    return (0,src/* leftShift */.w5)(minReturnWei, toToken.decimals).toFixed();
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/bancor/index.ts





const roundDecimal = (value, decimals)=>{
    return Math.round(Number(value || 0) * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
const getTargetAmount = async (request)=>{
    var ref, ref1;
    const baseUrl = constants/* BANCOR_API_BASE_URL */.WS[request.chainId];
    const url = dist_default()(baseUrl, '/pricing/target-amount', {
        source_dlt_type: 'ethereum',
        source_dlt_id: (ref = request.fromToken) === null || ref === void 0 ? void 0 : ref.address,
        target_dlt_type: 'ethereum',
        target_dlt_id: (ref1 = request.toToken) === null || ref1 === void 0 ? void 0 : ref1.address,
        amount: roundDecimal(request.fromAmount, request.fromToken.decimals)
    });
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
const getSourceAmount = async (request)=>{
    var ref, ref2;
    const baseUrl = constants/* BANCOR_API_BASE_URL */.WS[request.chainId];
    const url = dist_default()(baseUrl, '/pricing/source-amount', {
        source_dlt_type: 'ethereum',
        source_dlt_id: (0,lib.toChecksumAddress)((ref = request.fromToken) === null || ref === void 0 ? void 0 : ref.address),
        target_dlt_type: 'ethereum',
        target_dlt_id: (ref2 = request.toToken) === null || ref2 === void 0 ? void 0 : ref2.address,
        amount: roundDecimal(request.toAmount, request.toToken.decimals)
    });
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
const swapTransactionBancor = async (request)=>{
    const baseUrl = constants/* BANCOR_API_BASE_URL */.WS[request.chainId];
    const url = dist_default()(baseUrl, '/transactions/swap', {
        source_dlt_type: 'ethereum',
        source_dlt_id: (0,lib.toChecksumAddress)(request.fromToken.address),
        target_dlt_type: 'ethereum',
        target_dlt_id: (0,lib.toChecksumAddress)(request.toToken.address),
        amount: roundDecimal(request.fromAmount, request.fromToken.decimals),
        min_return: roundDecimal(request.minimumReceived, request.toToken.decimals),
        user_source_dlt_id: request.user
    });
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return [
            data,
            null
        ];
    }
    const error = await response.json();
    return [
        null,
        error
    ];
};
async function swapBancor(request) {
    const { fromToken , toToken , slippage , strategy  } = request;
    const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
    const response = isExactIn ? await getTargetAmount(request) : await getSourceAmount(request);
    const validationErrorResponse = response;
    if (validationErrorResponse.error) {
        var ref, ref3;
        throw new Error(((ref = validationErrorResponse.error) === null || ref === void 0 ? void 0 : (ref3 = ref.messages) === null || ref3 === void 0 ? void 0 : ref3[0]) || 'Unknown Error');
    }
    const { amount  } = response;
    const toAmount = isExactIn ? amount : request.toAmount;
    const fromAmount = isExactIn ? request.fromAmount : amount;
    return {
        ...request,
        toAmount,
        fromAmount,
        minimumReceived: calculateMinimumReturn({
            toToken,
            toAmount,
            slippage
        }),
        fromTokenSymbol: fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol,
        toTokenSymbol: toToken === null || toToken === void 0 ? void 0 : toToken.symbol
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/constants/openocean.ts

const OPENOCEAN_BASE_URL = 'https://ethapi.openocean.finance/v2/';
const networkNames = {
    [types/* NetworkType.Ethereum */.td.Ethereum]: 'eth',
    [types/* NetworkType.Binance */.td.Binance]: 'bsc',
    [types/* NetworkType.Polygon */.td.Polygon]: 'polygon',
    [types/* NetworkType.Arbitrum */.td.Arbitrum]: 'arbitrum',
    [types/* NetworkType.xDai */.td.xDai]: 'xdai',
    [types/* NetworkType.Celo */.td.Celo]: 'celo',
    [types/* NetworkType.Fantom */.td.Fantom]: 'fantom',
    [types/* NetworkType.Avalanche */.td.Avalanche]: 'avalanche',
    [types/* NetworkType.Aurora */.td.Aurora]: 'aurora',
    [types/* NetworkType.Boba */.td.Boba]: '',
    [types/* NetworkType.Fuse */.td.Fuse]: '',
    [types/* NetworkType.Metis */.td.Metis]: '',
    [types/* NetworkType.Optimistic */.td.Optimistic]: ''
};

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/openocean/index.ts




async function swapOO(request) {
    var ref, ref1, ref2, ref3, ref4;
    const response = await fetch(dist_default()(OPENOCEAN_BASE_URL, `/${request.chainId}/swap`, {
        inTokenSymbol: (ref = request.toToken) === null || ref === void 0 ? void 0 : ref.symbol,
        inTokenAddress: (ref1 = request.fromToken) === null || ref1 === void 0 ? void 0 : ref1.address,
        outTokenSymbol: (ref2 = request.toToken) === null || ref2 === void 0 ? void 0 : ref2.symbol,
        outTokenAddress: (ref3 = request.toToken) === null || ref3 === void 0 ? void 0 : ref3.address,
        amount: request.fromAmount,
        gasPrice: 5000000000,
        slippage: request.slippage,
        disabledDexIds: '',
        account: request.userAddr,
        referrer: (ref4 = (0,constants_constants/* getOpenOceanConstants */.hc)(request.chainId).REFERRER_ADDRESS) === null || ref4 === void 0 ? void 0 : ref4.toLowerCase()
    }));
    const payload = await response.json();
    const { data , outAmount , minOutAmount , to , value , estimatedGas  } = payload;
    const _resAmount = (0,src/* leftShift */.w5)(outAmount, request.toToken.decimals).toNumber();
    const _fromAmount = (0,src/* leftShift */.w5)(request.fromAmount, request.fromToken.decimals).toNumber();
    return {
        data,
        estimatedGas,
        targetApproveAddr: request.fromToken.address,
        targetDecimals: request.fromToken.decimals,
        resAmount: _resAmount,
        fromAmount: _fromAmount,
        resPricePerFromToken: +(_fromAmount / _resAmount).toFixed(8),
        resPricePerToToken: +(_resAmount / _fromAmount).toFixed(8),
        to,
        value,
        slippage: request.slippage,
        fromTokenSymbol: request.fromToken.symbol,
        toTokenSymbol: request.toToken.symbol,
        minOutAmount
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/index.ts










;// CONCATENATED MODULE: ./src/plugins/Trader/services.ts



/***/ }),

/***/ 41391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 8686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMException": () => (/* binding */ DOMException),
/* harmony export */   "Headers": () => (/* binding */ Headers),
/* harmony export */   "Request": () => (/* binding */ Request),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "fetch": () => (/* binding */ fetch)
/* harmony export */ });
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ })

}]);