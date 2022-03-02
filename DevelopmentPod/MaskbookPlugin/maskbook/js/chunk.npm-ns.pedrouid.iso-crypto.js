"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8936],{

/***/ 77533:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.aesCbcDecrypt = exports.aesCbcEncrypt = void 0;
const helpers_1 = __webpack_require__(13989);
function aesCbcEncrypt(iv, key, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        if (helpers_1.isBrowser()) {
            result = yield helpers_1.browserAesEncrypt(iv, key, data);
        }
        else if (helpers_1.isNode()) {
            result = helpers_1.nodeAesEncrypt(iv, key, data);
        }
        else {
            result = helpers_1.fallbackAesEncrypt(iv, key, data);
        }
        return result;
    });
}
exports.aesCbcEncrypt = aesCbcEncrypt;
function aesCbcDecrypt(iv, key, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        if (helpers_1.isBrowser()) {
            result = yield helpers_1.browserAesDecrypt(iv, key, data);
        }
        else if (helpers_1.isNode()) {
            result = helpers_1.nodeAesDecrypt(iv, key, data);
        }
        else {
            result = helpers_1.fallbackAesDecrypt(iv, key, data);
        }
        return result;
    });
}
exports.aesCbcDecrypt = aesCbcDecrypt;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 45548:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(77533), exports);
__exportStar(__webpack_require__(61542), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 61542:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.aesCbcDecryptSync = exports.aesCbcEncryptSync = void 0;
const helpers_1 = __webpack_require__(13989);
function aesCbcEncryptSync(iv, key, data) {
    let result;
    if (helpers_1.isNode()) {
        result = helpers_1.nodeAesEncrypt(iv, key, data);
    }
    else {
        result = helpers_1.fallbackAesEncrypt(iv, key, data);
    }
    return result;
}
exports.aesCbcEncryptSync = aesCbcEncryptSync;
function aesCbcDecryptSync(iv, key, data) {
    let result;
    if (helpers_1.isNode()) {
        result = helpers_1.nodeAesDecrypt(iv, key, data);
    }
    else {
        result = helpers_1.fallbackAesDecrypt(iv, key, data);
    }
    return result;
}
exports.aesCbcDecryptSync = aesCbcDecryptSync;
//# sourceMappingURL=sync.js.map

/***/ }),

/***/ 6325:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERROR_BAD_MAC = exports.EMPTY_UINT_ARRAY = exports.MAX_MSG_LENGTH = exports.MAX_KEY_LENGTH = exports.PREFIXED_KEY_LENGTH = exports.MAC_LENGTH = exports.IV_LENGTH = exports.KEY_LENGTH = exports.PREFIX_LENGTH = exports.RIPEMD160_NODE_ALGO = exports.SHA512_NODE_ALGO = exports.SHA256_NODE_ALGO = exports.HMAC_NODE_ALGO = exports.AES_NODE_ALGO = exports.SHA512_BROWSER_ALGO = exports.SHA256_BROWSER_ALGO = exports.HMAC_BROWSER = exports.HMAC_BROWSER_ALGO = exports.AES_BROWSER_ALGO = exports.HMAC_LENGTH = exports.AES_LENGTH = exports.LENGTH_1024 = exports.LENGTH_512 = exports.LENGTH_256 = exports.LENGTH_128 = exports.LENGTH_64 = exports.LENGTH_32 = exports.LENGTH_16 = exports.LENGTH_1 = exports.LENGTH_0 = exports.VERIFY_OP = exports.SIGN_OP = exports.DECRYPT_OP = exports.ENCRYPT_OP = exports.UTF8_ENC = exports.HEX_ENC = void 0;
exports.HEX_ENC = 'hex';
exports.UTF8_ENC = 'utf8';
exports.ENCRYPT_OP = 'encrypt';
exports.DECRYPT_OP = 'decrypt';
exports.SIGN_OP = 'sign';
exports.VERIFY_OP = 'verify';
exports.LENGTH_0 = 0;
exports.LENGTH_1 = 1;
exports.LENGTH_16 = 16;
exports.LENGTH_32 = 32;
exports.LENGTH_64 = 64;
exports.LENGTH_128 = 128;
exports.LENGTH_256 = 256;
exports.LENGTH_512 = 512;
exports.LENGTH_1024 = 1024;
exports.AES_LENGTH = exports.LENGTH_256;
exports.HMAC_LENGTH = exports.LENGTH_256;
exports.AES_BROWSER_ALGO = 'AES-CBC';
exports.HMAC_BROWSER_ALGO = `SHA-${exports.AES_LENGTH}`;
exports.HMAC_BROWSER = 'HMAC';
exports.SHA256_BROWSER_ALGO = 'SHA-256';
exports.SHA512_BROWSER_ALGO = 'SHA-512';
exports.AES_NODE_ALGO = `aes-${exports.AES_LENGTH}-cbc`;
exports.HMAC_NODE_ALGO = `sha${exports.HMAC_LENGTH}`;
exports.SHA256_NODE_ALGO = 'sha256';
exports.SHA512_NODE_ALGO = 'sha512';
exports.RIPEMD160_NODE_ALGO = 'ripemd160';
exports.PREFIX_LENGTH = exports.LENGTH_1;
exports.KEY_LENGTH = exports.LENGTH_32;
exports.IV_LENGTH = exports.LENGTH_16;
exports.MAC_LENGTH = exports.LENGTH_32;
exports.PREFIXED_KEY_LENGTH = exports.KEY_LENGTH + exports.PREFIX_LENGTH;
exports.MAX_KEY_LENGTH = exports.LENGTH_1024;
exports.MAX_MSG_LENGTH = exports.LENGTH_32;
exports.EMPTY_UINT_ARRAY = new Uint8Array(exports.LENGTH_0);
exports.ERROR_BAD_MAC = 'Bad MAC';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 20474:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.browserSha512 = exports.browserSha256 = exports.browserHmacSha512Sign = exports.browserHmacSha256Sign = exports.browserAesDecrypt = exports.browserAesEncrypt = exports.browserImportKey = exports.browserExportKey = exports.getOps = exports.getAlgo = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
const constants_1 = __webpack_require__(6325);
function getBrowerCrypto() {
    return (__webpack_require__.g === null || __webpack_require__.g === void 0 ? void 0 : __webpack_require__.g.crypto) || (__webpack_require__.g === null || __webpack_require__.g === void 0 ? void 0 : __webpack_require__.g.msCrypto) || {};
}
exports.getBrowerCrypto = getBrowerCrypto;
function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
}
exports.getSubtleCrypto = getSubtleCrypto;
function getAlgo(type) {
    return type === constants_1.AES_BROWSER_ALGO
        ? { length: constants_1.AES_LENGTH, name: constants_1.AES_BROWSER_ALGO }
        : {
            hash: { name: constants_1.HMAC_BROWSER_ALGO },
            name: constants_1.HMAC_BROWSER,
        };
}
exports.getAlgo = getAlgo;
function getOps(type) {
    return type === constants_1.AES_BROWSER_ALGO
        ? [constants_1.ENCRYPT_OP, constants_1.DECRYPT_OP]
        : [constants_1.SIGN_OP, constants_1.VERIFY_OP];
}
exports.getOps = getOps;
function browserExportKey(cryptoKey, type = constants_1.AES_BROWSER_ALGO) {
    return __awaiter(this, void 0, void 0, function* () {
        const subtle = getSubtleCrypto();
        return new Uint8Array(yield subtle.exportKey('raw', cryptoKey));
    });
}
exports.browserExportKey = browserExportKey;
function browserImportKey(buffer, type = constants_1.AES_BROWSER_ALGO) {
    return __awaiter(this, void 0, void 0, function* () {
        return getSubtleCrypto().importKey('raw', buffer, getAlgo(type), true, getOps(type));
    });
}
exports.browserImportKey = browserImportKey;
function browserAesEncrypt(iv, key, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const subtle = getSubtleCrypto();
        const cryptoKey = yield browserImportKey(key, constants_1.AES_BROWSER_ALGO);
        const result = yield subtle.encrypt({
            iv,
            name: constants_1.AES_BROWSER_ALGO,
        }, cryptoKey, data);
        return new Uint8Array(result);
    });
}
exports.browserAesEncrypt = browserAesEncrypt;
function browserAesDecrypt(iv, key, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const subtle = getSubtleCrypto();
        const cryptoKey = yield browserImportKey(key, constants_1.AES_BROWSER_ALGO);
        const result = yield subtle.decrypt({
            iv,
            name: constants_1.AES_BROWSER_ALGO,
        }, cryptoKey, data);
        return new Uint8Array(result);
    });
}
exports.browserAesDecrypt = browserAesDecrypt;
function browserHmacSha256Sign(key, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const subtle = getSubtleCrypto();
        const cryptoKey = yield browserImportKey(key, constants_1.HMAC_BROWSER);
        const signature = yield subtle.sign({
            length: constants_1.HMAC_LENGTH,
            name: constants_1.HMAC_BROWSER,
        }, cryptoKey, data);
        return new Uint8Array(signature);
    });
}
exports.browserHmacSha256Sign = browserHmacSha256Sign;
function browserHmacSha512Sign(key, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const subtle = getSubtleCrypto();
        const cryptoKey = yield browserImportKey(key, constants_1.HMAC_BROWSER);
        const signature = yield subtle.sign({
            length: constants_1.LENGTH_512,
            name: constants_1.HMAC_BROWSER,
        }, cryptoKey, data);
        return new Uint8Array(signature);
    });
}
exports.browserHmacSha512Sign = browserHmacSha512Sign;
function browserSha256(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const subtle = getSubtleCrypto();
        const result = yield subtle.digest({
            name: constants_1.SHA256_BROWSER_ALGO,
        }, data);
        return new Uint8Array(result);
    });
}
exports.browserSha256 = browserSha256;
function browserSha512(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const subtle = getSubtleCrypto();
        const result = yield subtle.digest({
            name: constants_1.SHA512_BROWSER_ALGO,
        }, data);
        return new Uint8Array(result);
    });
}
exports.browserSha512 = browserSha512;
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 93147:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fallbackRipemd160 = exports.fallbackSha512 = exports.fallbackSha256 = exports.fallbackHmacSha512Sign = exports.fallbackHmacSha256Sign = exports.fallbackAesDecrypt = exports.fallbackAesEncrypt = void 0;
const aes_js_1 = __importDefault(__webpack_require__(95974));
const hash = __importStar(__webpack_require__(45370));
const enc_utils_1 = __webpack_require__(18147);
const constants_1 = __webpack_require__(6325);
const index_1 = __webpack_require__(13989);
function fallbackAesEncrypt(iv, key, data) {
    const aesCbc = new aes_js_1.default.ModeOfOperation.cbc(key, iv);
    const padded = index_1.pkcs7.pad(data);
    const encryptedBytes = aesCbc.encrypt(padded);
    return new Uint8Array(encryptedBytes);
}
exports.fallbackAesEncrypt = fallbackAesEncrypt;
function fallbackAesDecrypt(iv, key, data) {
    const aesCbc = new aes_js_1.default.ModeOfOperation.cbc(key, iv);
    const encryptedBytes = aesCbc.decrypt(data);
    const padded = new Uint8Array(encryptedBytes);
    const result = index_1.pkcs7.unpad(padded);
    return result;
}
exports.fallbackAesDecrypt = fallbackAesDecrypt;
function fallbackHmacSha256Sign(key, data) {
    const result = hash
        .hmac(hash[constants_1.SHA256_NODE_ALGO], key)
        .update(data)
        .digest(constants_1.HEX_ENC);
    return enc_utils_1.hexToArray(result);
}
exports.fallbackHmacSha256Sign = fallbackHmacSha256Sign;
function fallbackHmacSha512Sign(key, data) {
    const result = hash
        .hmac(hash[constants_1.SHA512_NODE_ALGO], key)
        .update(data)
        .digest(constants_1.HEX_ENC);
    return enc_utils_1.hexToArray(result);
}
exports.fallbackHmacSha512Sign = fallbackHmacSha512Sign;
function fallbackSha256(msg) {
    const result = hash
        .sha256()
        .update(msg)
        .digest(constants_1.HEX_ENC);
    return enc_utils_1.hexToArray(result);
}
exports.fallbackSha256 = fallbackSha256;
function fallbackSha512(msg) {
    const result = hash
        .sha512()
        .update(msg)
        .digest(constants_1.HEX_ENC);
    return enc_utils_1.hexToArray(result);
}
exports.fallbackSha512 = fallbackSha512;
function fallbackRipemd160(msg) {
    const result = hash
        .ripemd160()
        .update(msg)
        .digest(constants_1.HEX_ENC);
    return enc_utils_1.hexToArray(result);
}
exports.fallbackRipemd160 = fallbackRipemd160;
//# sourceMappingURL=fallback.js.map

/***/ }),

/***/ 30668:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(20474), exports);
__exportStar(__webpack_require__(93147), exports);
__exportStar(__webpack_require__(74538), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 74538:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nodeRipemd160 = exports.nodeSha512 = exports.nodeSha256 = exports.nodeHmacSha512Sign = exports.nodeHmacSha256Sign = exports.nodeAesDecrypt = exports.nodeAesEncrypt = void 0;
const crypto_1 = __importDefault(__webpack_require__(69678));
const enc_utils_1 = __webpack_require__(18147);
const constants_1 = __webpack_require__(6325);
function nodeAesEncrypt(iv, key, data) {
    const cipher = crypto_1.default.createCipheriv(constants_1.AES_NODE_ALGO, key, iv);
    return enc_utils_1.bufferToArray(enc_utils_1.concatBuffers(cipher.update(data), cipher.final()));
}
exports.nodeAesEncrypt = nodeAesEncrypt;
function nodeAesDecrypt(iv, key, data) {
    const decipher = crypto_1.default.createDecipheriv(constants_1.AES_NODE_ALGO, key, iv);
    return enc_utils_1.bufferToArray(enc_utils_1.concatBuffers(decipher.update(data), decipher.final()));
}
exports.nodeAesDecrypt = nodeAesDecrypt;
function nodeHmacSha256Sign(key, data) {
    const buf = crypto_1.default
        .createHmac(constants_1.HMAC_NODE_ALGO, new Uint8Array(key))
        .update(data)
        .digest();
    return enc_utils_1.bufferToArray(buf);
}
exports.nodeHmacSha256Sign = nodeHmacSha256Sign;
function nodeHmacSha512Sign(key, data) {
    const buf = crypto_1.default
        .createHmac(constants_1.SHA512_NODE_ALGO, new Uint8Array(key))
        .update(data)
        .digest();
    return enc_utils_1.bufferToArray(buf);
}
exports.nodeHmacSha512Sign = nodeHmacSha512Sign;
function nodeSha256(data) {
    const buf = crypto_1.default
        .createHash(constants_1.SHA256_NODE_ALGO)
        .update(data)
        .digest();
    return enc_utils_1.bufferToArray(buf);
}
exports.nodeSha256 = nodeSha256;
function nodeSha512(data) {
    const buf = crypto_1.default
        .createHash(constants_1.SHA512_NODE_ALGO)
        .update(data)
        .digest();
    return enc_utils_1.bufferToArray(buf);
}
exports.nodeSha512 = nodeSha512;
function nodeRipemd160(data) {
    const buf = crypto_1.default
        .createHash(constants_1.RIPEMD160_NODE_ALGO)
        .update(data)
        .digest();
    return enc_utils_1.bufferToArray(buf);
}
exports.nodeRipemd160 = nodeRipemd160;
//# sourceMappingURL=node.js.map

/***/ }),

/***/ 13989:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6325), exports);
__exportStar(__webpack_require__(30668), exports);
__exportStar(__webpack_require__(38065), exports);
__exportStar(__webpack_require__(9273), exports);
__exportStar(__webpack_require__(38393), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 38065:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pkcs7 = void 0;
let PADDING = [
    [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
    [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
    [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [8, 8, 8, 8, 8, 8, 8, 8],
    [7, 7, 7, 7, 7, 7, 7],
    [6, 6, 6, 6, 6, 6],
    [5, 5, 5, 5, 5],
    [4, 4, 4, 4],
    [3, 3, 3],
    [2, 2],
    [1],
];
exports.pkcs7 = {
    pad(plaintext) {
        const padding = PADDING[plaintext.byteLength % 16 || 0];
        const result = new Uint8Array(plaintext.byteLength + padding.length);
        result.set(plaintext);
        result.set(padding, plaintext.byteLength);
        return result;
    },
    unpad(padded) {
        return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
    },
};
//# sourceMappingURL=pkcs7.js.map

/***/ }),

/***/ 9273:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 38393:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isConstantTime = exports.isNode = exports.isBrowser = exports.assert = void 0;
const env_1 = __webpack_require__(30668);
function assert(condition, message) {
    if (!condition) {
        throw new Error(message || 'Assertion failed');
    }
}
exports.assert = assert;
function isBrowser() {
    return !!env_1.getBrowerCrypto() && !!env_1.getSubtleCrypto();
}
exports.isBrowser = isBrowser;
function isNode() {
    return (typeof process !== 'undefined' &&
        typeof process.versions !== 'undefined' &&
        typeof process.versions.node !== 'undefined');
}
exports.isNode = isNode;
function isConstantTime(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let res = 0;
    for (let i = 0; i < arr1.length; i++) {
        res |= arr1[i] ^ arr2[i];
    }
    return res === 0;
}
exports.isConstantTime = isConstantTime;
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ 7692:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hmacSha512Verify = exports.hmacSha512Sign = exports.hmacSha256Verify = exports.hmacSha256Sign = void 0;
const helpers_1 = __webpack_require__(13989);
function hmacSha256Sign(key, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        if (helpers_1.isBrowser()) {
            result = yield helpers_1.browserHmacSha256Sign(key, msg);
        }
        else if (helpers_1.isNode()) {
            result = helpers_1.nodeHmacSha256Sign(key, msg);
        }
        else {
            result = helpers_1.fallbackHmacSha256Sign(key, msg);
        }
        return result;
    });
}
exports.hmacSha256Sign = hmacSha256Sign;
function hmacSha256Verify(key, msg, sig) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        if (helpers_1.isBrowser()) {
            const expectedSig = yield helpers_1.browserHmacSha256Sign(key, msg);
            result = helpers_1.isConstantTime(expectedSig, sig);
        }
        else if (helpers_1.isNode()) {
            const expectedSig = helpers_1.nodeHmacSha256Sign(key, msg);
            result = helpers_1.isConstantTime(expectedSig, sig);
        }
        else {
            const expectedSig = helpers_1.fallbackHmacSha256Sign(key, msg);
            result = helpers_1.isConstantTime(expectedSig, sig);
        }
        return result;
    });
}
exports.hmacSha256Verify = hmacSha256Verify;
function hmacSha512Sign(key, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        if (helpers_1.isBrowser()) {
            result = yield helpers_1.browserHmacSha512Sign(key, msg);
        }
        else if (helpers_1.isNode()) {
            result = helpers_1.nodeHmacSha512Sign(key, msg);
        }
        else {
            result = helpers_1.fallbackHmacSha512Sign(key, msg);
        }
        return result;
    });
}
exports.hmacSha512Sign = hmacSha512Sign;
function hmacSha512Verify(key, msg, sig) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        if (helpers_1.isNode()) {
            const expectedSig = helpers_1.nodeHmacSha512Sign(key, msg);
            result = helpers_1.isConstantTime(expectedSig, sig);
        }
        else {
            const expectedSig = helpers_1.fallbackHmacSha512Sign(key, msg);
            result = helpers_1.isConstantTime(expectedSig, sig);
        }
        return result;
    });
}
exports.hmacSha512Verify = hmacSha512Verify;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 53623:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7692), exports);
__exportStar(__webpack_require__(70528), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 70528:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hmacSha512VerifySync = exports.hmacSha512SignSync = exports.hmacSha256VerifySync = exports.hmacSha256SignSync = void 0;
const helpers_1 = __webpack_require__(13989);
function hmacSha256SignSync(key, msg) {
    let result;
    if (helpers_1.isNode()) {
        result = helpers_1.nodeHmacSha256Sign(key, msg);
    }
    else {
        result = helpers_1.fallbackHmacSha256Sign(key, msg);
    }
    return result;
}
exports.hmacSha256SignSync = hmacSha256SignSync;
function hmacSha256VerifySync(key, msg, sig) {
    let result;
    if (helpers_1.isNode()) {
        const expectedSig = helpers_1.nodeHmacSha256Sign(key, msg);
        result = helpers_1.isConstantTime(expectedSig, sig);
    }
    else {
        const expectedSig = helpers_1.fallbackHmacSha256Sign(key, msg);
        result = helpers_1.isConstantTime(expectedSig, sig);
    }
    return result;
}
exports.hmacSha256VerifySync = hmacSha256VerifySync;
function hmacSha512SignSync(key, msg) {
    let result;
    if (helpers_1.isNode()) {
        result = helpers_1.nodeHmacSha512Sign(key, msg);
    }
    else {
        result = helpers_1.fallbackHmacSha512Sign(key, msg);
    }
    return result;
}
exports.hmacSha512SignSync = hmacSha512SignSync;
function hmacSha512VerifySync(key, msg, sig) {
    let result;
    if (helpers_1.isNode()) {
        const expectedSig = helpers_1.nodeHmacSha512Sign(key, msg);
        result = helpers_1.isConstantTime(expectedSig, sig);
    }
    else {
        const expectedSig = helpers_1.fallbackHmacSha512Sign(key, msg);
        result = helpers_1.isConstantTime(expectedSig, sig);
    }
    return result;
}
exports.hmacSha512VerifySync = hmacSha512VerifySync;
//# sourceMappingURL=sync.js.map

/***/ }),

/***/ 17342:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(45548), exports);
__exportStar(__webpack_require__(13989), exports);
__exportStar(__webpack_require__(53623), exports);
__exportStar(__webpack_require__(89136), exports);
__exportStar(__webpack_require__(73347), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 89136:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomBytes = void 0;
const isoRandom = __importStar(__webpack_require__(29615));
function randomBytes(length) {
    return isoRandom.randomBytes(length);
}
exports.randomBytes = randomBytes;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 39745:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ripemd160 = exports.sha512 = exports.sha256 = void 0;
const helpers_1 = __webpack_require__(13989);
function sha256(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = helpers_1.EMPTY_UINT_ARRAY;
        if (helpers_1.isBrowser()) {
            result = yield helpers_1.browserSha256(msg);
        }
        else if (helpers_1.isNode()) {
            result = helpers_1.nodeSha256(msg);
        }
        else {
            result = helpers_1.fallbackSha256(msg);
        }
        return result;
    });
}
exports.sha256 = sha256;
function sha512(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = helpers_1.EMPTY_UINT_ARRAY;
        if (helpers_1.isBrowser()) {
            result = yield helpers_1.browserSha512(msg);
        }
        else if (helpers_1.isNode()) {
            result = helpers_1.nodeSha512(msg);
        }
        else {
            result = helpers_1.fallbackSha512(msg);
        }
        return result;
    });
}
exports.sha512 = sha512;
function ripemd160(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = helpers_1.EMPTY_UINT_ARRAY;
        if (helpers_1.isNode()) {
            result = helpers_1.nodeRipemd160(msg);
        }
        else {
            result = helpers_1.fallbackRipemd160(msg);
        }
        return result;
    });
}
exports.ripemd160 = ripemd160;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 73347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(39745), exports);
__exportStar(__webpack_require__(78767), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 78767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ripemd160Sync = exports.sha512Sync = exports.sha256Sync = void 0;
const helpers_1 = __webpack_require__(13989);
function sha256Sync(msg) {
    let result = helpers_1.EMPTY_UINT_ARRAY;
    if (helpers_1.isNode()) {
        result = helpers_1.nodeSha256(msg);
    }
    else {
        result = helpers_1.fallbackSha256(msg);
    }
    return result;
}
exports.sha256Sync = sha256Sync;
function sha512Sync(msg) {
    let result = helpers_1.EMPTY_UINT_ARRAY;
    if (helpers_1.isNode()) {
        result = helpers_1.nodeSha512(msg);
    }
    else {
        result = helpers_1.fallbackSha512(msg);
    }
    return result;
}
exports.sha512Sync = sha512Sync;
function ripemd160Sync(msg) {
    let result = helpers_1.EMPTY_UINT_ARRAY;
    if (helpers_1.isNode()) {
        result = helpers_1.nodeRipemd160(msg);
    }
    else {
        result = helpers_1.fallbackRipemd160(msg);
    }
    return result;
}
exports.ripemd160Sync = ripemd160Sync;
//# sourceMappingURL=sync.js.map

/***/ })

}]);