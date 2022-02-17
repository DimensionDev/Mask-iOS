"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8894],{

/***/ 85914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vJ": () => (/* reexport safe */ pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter),
/* harmony export */   "HD": () => (/* binding */ AesCbcProvider),
/* harmony export */   "KH": () => (/* binding */ AesCtrProvider),
/* harmony export */   "mR": () => (/* binding */ AesEcbProvider),
/* harmony export */   "sU": () => (/* binding */ AesGcmProvider),
/* harmony export */   "z1": () => (/* binding */ AesKwProvider),
/* harmony export */   "_R": () => (/* binding */ AlgorithmError),
/* harmony export */   "w1": () => (/* binding */ Crypto),
/* harmony export */   "jw": () => (/* binding */ CryptoError),
/* harmony export */   "$h": () => (/* binding */ CryptoKey),
/* harmony export */   "Sn": () => (/* binding */ DesProvider),
/* harmony export */   "Lo": () => (/* binding */ EcdhProvider),
/* harmony export */   "IJ": () => (/* binding */ EcdsaProvider),
/* harmony export */   "es": () => (/* binding */ EdDsaProvider),
/* harmony export */   "NR": () => (/* binding */ HmacProvider),
/* harmony export */   "un": () => (/* binding */ OperationError),
/* harmony export */   "nk": () => (/* binding */ Pbkdf2Provider),
/* harmony export */   "YG": () => (/* binding */ ProviderCrypto),
/* harmony export */   "PW": () => (/* binding */ RsaOaepProvider),
/* harmony export */   "pj": () => (/* binding */ RsaPssProvider),
/* harmony export */   "bV": () => (/* binding */ RsaSsaProvider),
/* harmony export */   "WD": () => (/* binding */ SubtleCrypto),
/* harmony export */   "sc": () => (/* binding */ index$2),
/* harmony export */   "x": () => (/* binding */ isJWK)
/* harmony export */ });
/* unused harmony exports AesCmacProvider, AesProvider, EcdhEsProvider, EllipticProvider, HkdfProvider, PemConverter, ProviderStorage, RequiredPropertyError, RsaProvider, UnsupportedOperationError, json */
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34987);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pvtsutils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64873);
/* harmony import */ var _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77183);
/* harmony import */ var _peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59377);
/* harmony import */ var asn1js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74269);
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
/**
 * Copyright (c) 2019, Peculiar Ventures, All rights reserved.
 */








class CryptoError extends Error {
}

class AlgorithmError extends CryptoError {
}

class UnsupportedOperationError extends CryptoError {
    constructor(methodName) {
        super(`Unsupported operation: ${methodName ? `${methodName}` : ""}`);
    }
}

class OperationError extends CryptoError {
}

class RequiredPropertyError extends CryptoError {
    constructor(propName) {
        super(`${propName}: Missing required property`);
    }
}

class PemConverter {
    static toArrayBuffer(pem) {
        const base64 = pem
            .replace(/-{5}(BEGIN|END) .*-{5}/g, "")
            .replace("\r", "")
            .replace("\n", "");
        return Convert.FromBase64(base64);
    }
    static toUint8Array(pem) {
        const bytes = this.toArrayBuffer(pem);
        return new Uint8Array(bytes);
    }
    static fromBufferSource(buffer, tag) {
        const base64 = Convert.ToBase64(buffer);
        let sliced;
        let offset = 0;
        const rows = [];
        while (true) {
            sliced = base64.slice(offset, offset = offset + 64);
            if (sliced.length) {
                rows.push(sliced);
                if (sliced.length < 64) {
                    break;
                }
            }
            else {
                break;
            }
        }
        const upperCaseTag = tag.toUpperCase();
        return `-----BEGIN ${upperCaseTag}-----\n${rows.join("\n")}\n-----END ${upperCaseTag}-----`;
    }
    static isPEM(data) {
        return /-----BEGIN .+-----[A-Za-z0-9+\/\+\=\s\n]+-----END .+-----/i.test(data);
    }
    static getTagName(pem) {
        if (!this.isPEM(pem)) {
            throw new Error("Bad parameter. Incoming data is not right PEM");
        }
        const res = /-----BEGIN (.+)-----/.exec(pem);
        if (!res) {
            throw new Error("Cannot get tag from PEM");
        }
        return res[1];
    }
    static hasTagName(pem, tagName) {
        const tag = this.getTagName(pem);
        return tagName.toLowerCase() === tag.toLowerCase();
    }
    static isCertificate(pem) {
        return this.hasTagName(pem, "certificate");
    }
    static isCertificateRequest(pem) {
        return this.hasTagName(pem, "certificate request");
    }
    static isCRL(pem) {
        return this.hasTagName(pem, "x509 crl");
    }
    static isPublicKey(pem) {
        return this.hasTagName(pem, "public key");
    }
}

function isJWK(data) {
    return typeof data === "object" && "kty" in data;
}

class ProviderCrypto {
    async digest(...args) {
        this.checkDigest.apply(this, args);
        return this.onDigest.apply(this, args);
    }
    checkDigest(algorithm, data) {
        this.checkAlgorithmName(algorithm);
    }
    async onDigest(algorithm, data) {
        throw new UnsupportedOperationError("digest");
    }
    async generateKey(...args) {
        this.checkGenerateKey.apply(this, args);
        return this.onGenerateKey.apply(this, args);
    }
    checkGenerateKey(algorithm, extractable, keyUsages, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkGenerateKeyParams(algorithm);
        if (!(keyUsages && keyUsages.length)) {
            throw new TypeError(`Usages cannot be empty when creating a key.`);
        }
        let allowedUsages;
        if (Array.isArray(this.usages)) {
            allowedUsages = this.usages;
        }
        else {
            allowedUsages = this.usages.privateKey.concat(this.usages.publicKey);
        }
        this.checkKeyUsages(keyUsages, allowedUsages);
    }
    checkGenerateKeyParams(algorithm) {
    }
    async onGenerateKey(algorithm, extractable, keyUsages, ...args) {
        throw new UnsupportedOperationError("generateKey");
    }
    async sign(...args) {
        this.checkSign.apply(this, args);
        return this.onSign.apply(this, args);
    }
    checkSign(algorithm, key, data, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkAlgorithmParams(algorithm);
        this.checkCryptoKey(key, "sign");
    }
    async onSign(algorithm, key, data, ...args) {
        throw new UnsupportedOperationError("sign");
    }
    async verify(...args) {
        this.checkVerify.apply(this, args);
        return this.onVerify.apply(this, args);
    }
    checkVerify(algorithm, key, signature, data, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkAlgorithmParams(algorithm);
        this.checkCryptoKey(key, "verify");
    }
    async onVerify(algorithm, key, signature, data, ...args) {
        throw new UnsupportedOperationError("verify");
    }
    async encrypt(...args) {
        this.checkEncrypt.apply(this, args);
        return this.onEncrypt.apply(this, args);
    }
    checkEncrypt(algorithm, key, data, options = {}, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkAlgorithmParams(algorithm);
        this.checkCryptoKey(key, options.keyUsage ? "encrypt" : void 0);
    }
    async onEncrypt(algorithm, key, data, ...args) {
        throw new UnsupportedOperationError("encrypt");
    }
    async decrypt(...args) {
        this.checkDecrypt.apply(this, args);
        return this.onDecrypt.apply(this, args);
    }
    checkDecrypt(algorithm, key, data, options = {}, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkAlgorithmParams(algorithm);
        this.checkCryptoKey(key, options.keyUsage ? "decrypt" : void 0);
    }
    async onDecrypt(algorithm, key, data, ...args) {
        throw new UnsupportedOperationError("decrypt");
    }
    async deriveBits(...args) {
        this.checkDeriveBits.apply(this, args);
        return this.onDeriveBits.apply(this, args);
    }
    checkDeriveBits(algorithm, baseKey, length, options = {}, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkAlgorithmParams(algorithm);
        this.checkCryptoKey(baseKey, options.keyUsage ? "deriveBits" : void 0);
        if (length % 8 !== 0) {
            throw new OperationError("length: Is not multiple of 8");
        }
    }
    async onDeriveBits(algorithm, baseKey, length, ...args) {
        throw new UnsupportedOperationError("deriveBits");
    }
    async exportKey(...args) {
        this.checkExportKey.apply(this, args);
        return this.onExportKey.apply(this, args);
    }
    checkExportKey(format, key, ...args) {
        this.checkKeyFormat(format);
        this.checkCryptoKey(key);
        if (!key.extractable) {
            throw new CryptoError("key: Is not extractable");
        }
    }
    async onExportKey(format, key, ...args) {
        throw new UnsupportedOperationError("exportKey");
    }
    async importKey(...args) {
        this.checkImportKey.apply(this, args);
        return this.onImportKey.apply(this, args);
    }
    checkImportKey(format, keyData, algorithm, extractable, keyUsages, ...args) {
        this.checkKeyFormat(format);
        this.checkKeyData(format, keyData);
        this.checkAlgorithmName(algorithm);
        this.checkImportParams(algorithm);
        if (Array.isArray(this.usages)) {
            this.checkKeyUsages(keyUsages, this.usages);
        }
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages, ...args) {
        throw new UnsupportedOperationError("importKey");
    }
    checkAlgorithmName(algorithm) {
        if (algorithm.name.toLowerCase() !== this.name.toLowerCase()) {
            throw new AlgorithmError("Unrecognized name");
        }
    }
    checkAlgorithmParams(algorithm) {
    }
    checkDerivedKeyParams(algorithm) {
    }
    checkKeyUsages(usages, allowed) {
        for (const usage of usages) {
            if (allowed.indexOf(usage) === -1) {
                throw new TypeError("Cannot create a key using the specified key usages");
            }
        }
    }
    checkCryptoKey(key, keyUsage) {
        this.checkAlgorithmName(key.algorithm);
        if (keyUsage && key.usages.indexOf(keyUsage) === -1) {
            throw new CryptoError(`key does not match that of operation`);
        }
    }
    checkRequiredProperty(data, propName) {
        if (!(propName in data)) {
            throw new RequiredPropertyError(propName);
        }
    }
    checkHashAlgorithm(algorithm, hashAlgorithms) {
        for (const item of hashAlgorithms) {
            if (item.toLowerCase() === algorithm.name.toLowerCase()) {
                return;
            }
        }
        throw new OperationError(`hash: Must be one of ${hashAlgorithms.join(", ")}`);
    }
    checkImportParams(algorithm) {
    }
    checkKeyFormat(format) {
        switch (format) {
            case "raw":
            case "pkcs8":
            case "spki":
            case "jwk":
                break;
            default:
                throw new TypeError("format: Is invalid value. Must be 'jwk', 'raw', 'spki', or 'pkcs8'");
        }
    }
    checkKeyData(format, keyData) {
        if (!keyData) {
            throw new TypeError("keyData: Cannot be empty on empty on key importing");
        }
        if (format === "jwk") {
            if (!isJWK(keyData)) {
                throw new TypeError("keyData: Is not JsonWebToken");
            }
        }
        else if (!pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.isBufferSource(keyData)) {
            throw new TypeError("keyData: Is not ArrayBufferView or ArrayBuffer");
        }
    }
    prepareData(data) {
        return pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toArrayBuffer(data);
    }
}

class AesProvider extends ProviderCrypto {
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "length");
        if (typeof algorithm.length !== "number") {
            throw new TypeError("length: Is not of type Number");
        }
        switch (algorithm.length) {
            case 128:
            case 192:
            case 256:
                break;
            default:
                throw new TypeError("length: Must be 128, 192, or 256");
        }
    }
    checkDerivedKeyParams(algorithm) {
        this.checkGenerateKeyParams(algorithm);
    }
}

class AesCbcProvider extends AesProvider {
    constructor() {
        super(...arguments);
        this.name = "AES-CBC";
        this.usages = ["encrypt", "decrypt", "wrapKey", "unwrapKey"];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "iv");
        if (!(algorithm.iv instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.iv))) {
            throw new TypeError("iv: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        if (algorithm.iv.byteLength !== 16) {
            throw new TypeError("iv: Must have length 16 bytes");
        }
    }
}

class AesCmacProvider extends (/* unused pure expression or super */ null && (AesProvider)) {
    constructor() {
        super(...arguments);
        this.name = "AES-CMAC";
        this.usages = ["sign", "verify"];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "length");
        if (typeof algorithm.length !== "number") {
            throw new TypeError("length: Is not a Number");
        }
        if (algorithm.length < 1) {
            throw new OperationError("length: Must be more than 0");
        }
    }
}

class AesCtrProvider extends AesProvider {
    constructor() {
        super(...arguments);
        this.name = "AES-CTR";
        this.usages = ["encrypt", "decrypt", "wrapKey", "unwrapKey"];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "counter");
        if (!(algorithm.counter instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.counter))) {
            throw new TypeError("counter: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        if (algorithm.counter.byteLength !== 16) {
            throw new TypeError("iv: Must have length 16 bytes");
        }
        this.checkRequiredProperty(algorithm, "length");
        if (typeof algorithm.length !== "number") {
            throw new TypeError("length: Is not a Number");
        }
        if (algorithm.length < 1) {
            throw new OperationError("length: Must be more than 0");
        }
    }
}

class AesEcbProvider extends AesProvider {
    constructor() {
        super(...arguments);
        this.name = "AES-ECB";
        this.usages = ["encrypt", "decrypt", "wrapKey", "unwrapKey"];
    }
}

class AesGcmProvider extends AesProvider {
    constructor() {
        super(...arguments);
        this.name = "AES-GCM";
        this.usages = ["encrypt", "decrypt", "wrapKey", "unwrapKey"];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "iv");
        if (!(algorithm.iv instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.iv))) {
            throw new TypeError("iv: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        if (algorithm.iv.byteLength < 1) {
            throw new OperationError("iv: Must have length more than 0 and less than 2^64 - 1");
        }
        if (!("tagLength" in algorithm)) {
            algorithm.tagLength = 128;
        }
        switch (algorithm.tagLength) {
            case 32:
            case 64:
            case 96:
            case 104:
            case 112:
            case 120:
            case 128:
                break;
            default:
                throw new OperationError("tagLength: Must be one of 32, 64, 96, 104, 112, 120 or 128");
        }
    }
}

class AesKwProvider extends AesProvider {
    constructor() {
        super(...arguments);
        this.name = "AES-KW";
        this.usages = ["wrapKey", "unwrapKey"];
    }
}

class DesProvider extends ProviderCrypto {
    constructor() {
        super(...arguments);
        this.usages = ["encrypt", "decrypt", "wrapKey", "unwrapKey"];
    }
    checkAlgorithmParams(algorithm) {
        if (this.ivSize) {
            this.checkRequiredProperty(algorithm, "iv");
            if (!(algorithm.iv instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.iv))) {
                throw new TypeError("iv: Is not of type '(ArrayBuffer or ArrayBufferView)'");
            }
            if (algorithm.iv.byteLength !== this.ivSize) {
                throw new TypeError(`iv: Must have length ${this.ivSize} bytes`);
            }
        }
    }
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "length");
        if (typeof algorithm.length !== "number") {
            throw new TypeError("length: Is not of type Number");
        }
        if (algorithm.length !== this.keySizeBits) {
            throw new OperationError(`algorith.length: Must be ${this.keySizeBits}`);
        }
    }
    checkDerivedKeyParams(algorithm) {
        this.checkGenerateKeyParams(algorithm);
    }
}

class RsaProvider extends ProviderCrypto {
    constructor() {
        super(...arguments);
        this.hashAlgorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
    }
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
        this.checkRequiredProperty(algorithm, "publicExponent");
        if (!(algorithm.publicExponent && algorithm.publicExponent instanceof Uint8Array)) {
            throw new TypeError("publicExponent: Missing or not a Uint8Array");
        }
        const publicExponent = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.ToBase64(algorithm.publicExponent);
        if (!(publicExponent === "Aw==" || publicExponent === "AQAB")) {
            throw new TypeError("publicExponent: Must be [3] or [1,0,1]");
        }
        this.checkRequiredProperty(algorithm, "modulusLength");
        switch (algorithm.modulusLength) {
            case 1024:
            case 2048:
            case 4096:
                break;
            default:
                throw new TypeError("modulusLength: Must be 1024, 2048, or 4096");
        }
    }
    checkImportParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
    }
}

class RsaSsaProvider extends RsaProvider {
    constructor() {
        super(...arguments);
        this.name = "RSASSA-PKCS1-v1_5";
        this.usages = {
            privateKey: ["sign"],
            publicKey: ["verify"],
        };
    }
}

class RsaPssProvider extends RsaProvider {
    constructor() {
        super(...arguments);
        this.name = "RSA-PSS";
        this.usages = {
            privateKey: ["sign"],
            publicKey: ["verify"],
        };
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "saltLength");
        if (typeof algorithm.saltLength !== "number") {
            throw new TypeError("saltLength: Is not a Number");
        }
        if (algorithm.saltLength < 0) {
            throw new RangeError("saltLength: Must be positive number");
        }
    }
}

class RsaOaepProvider extends RsaProvider {
    constructor() {
        super(...arguments);
        this.name = "RSA-OAEP";
        this.usages = {
            privateKey: ["decrypt", "unwrapKey"],
            publicKey: ["encrypt", "wrapKey"],
        };
    }
    checkAlgorithmParams(algorithm) {
        if (algorithm.label
            && !(algorithm.label instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.label))) {
            throw new TypeError("label: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
    }
}

class EllipticProvider extends ProviderCrypto {
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "namedCurve");
        this.checkNamedCurve(algorithm.namedCurve);
    }
    checkNamedCurve(namedCurve) {
        for (const item of this.namedCurves) {
            if (item.toLowerCase() === namedCurve.toLowerCase()) {
                return;
            }
        }
        throw new OperationError(`namedCurve: Must be one of ${this.namedCurves.join(", ")}`);
    }
}

class EcdsaProvider extends EllipticProvider {
    constructor() {
        super(...arguments);
        this.name = "ECDSA";
        this.hashAlgorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
        this.usages = {
            privateKey: ["sign"],
            publicKey: ["verify"],
        };
        this.namedCurves = ["P-256", "P-384", "P-521", "K-256"];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
    }
}

const KEY_TYPES = ["secret", "private", "public"];
class CryptoKey {
    static create(algorithm, type, extractable, usages) {
        const key = new this();
        key.algorithm = algorithm;
        key.type = type;
        key.extractable = extractable;
        key.usages = usages;
        return key;
    }
    static isKeyType(data) {
        return KEY_TYPES.indexOf(data) !== -1;
    }
    get [Symbol.toStringTag]() {
        return "CryptoKey";
    }
}

class EcdhProvider extends EllipticProvider {
    constructor() {
        super(...arguments);
        this.name = "ECDH";
        this.usages = {
            privateKey: ["deriveBits", "deriveKey"],
            publicKey: [],
        };
        this.namedCurves = ["P-256", "P-384", "P-521", "K-256"];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "public");
        if (!(algorithm.public instanceof CryptoKey)) {
            throw new TypeError("public: Is not a CryptoKey");
        }
        if (algorithm.public.type !== "public") {
            throw new OperationError("public: Is not a public key");
        }
        if (algorithm.public.algorithm.name !== this.name) {
            throw new OperationError(`public: Is not ${this.name} key`);
        }
    }
}

class EcdhEsProvider extends (/* unused pure expression or super */ null && (EcdhProvider)) {
    constructor() {
        super(...arguments);
        this.name = "ECDH-ES";
        this.namedCurves = ["X25519", "X448"];
    }
}

class EdDsaProvider extends EllipticProvider {
    constructor() {
        super(...arguments);
        this.name = "EdDSA";
        this.usages = {
            privateKey: ["sign"],
            publicKey: ["verify"],
        };
        this.namedCurves = ["Ed25519", "Ed448"];
    }
}

class HmacProvider extends ProviderCrypto {
    constructor() {
        super(...arguments);
        this.name = "HMAC";
        this.hashAlgorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
        this.usages = ["sign", "verify"];
    }
    getDefaultLength(algName) {
        switch (algName.toUpperCase()) {
            case "SHA-1":
            case "SHA-256":
            case "SHA-384":
            case "SHA-512":
                return 512;
            default:
                throw new Error(`Unknown algorithm name '${algName}'`);
        }
    }
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
        if ("length" in algorithm) {
            if (typeof algorithm.length !== "number") {
                throw new TypeError("length: Is not a Number");
            }
            if (algorithm.length < 1) {
                throw new RangeError("length: Number is out of range");
            }
        }
    }
    checkImportParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
    }
}

class Pbkdf2Provider extends ProviderCrypto {
    constructor() {
        super(...arguments);
        this.name = "PBKDF2";
        this.hashAlgorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
        this.usages = ["deriveBits", "deriveKey"];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
        this.checkRequiredProperty(algorithm, "salt");
        if (!(algorithm.salt instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.salt))) {
            throw new TypeError("salt: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        this.checkRequiredProperty(algorithm, "iterations");
        if (typeof algorithm.iterations !== "number") {
            throw new TypeError("iterations: Is not a Number");
        }
        if (algorithm.iterations < 1) {
            throw new TypeError("iterations: Is less than 1");
        }
    }
    checkImportKey(format, keyData, algorithm, extractable, keyUsages, ...args) {
        super.checkImportKey(format, keyData, algorithm, extractable, keyUsages);
        if (extractable) {
            throw new SyntaxError("extractable: Must be 'false'");
        }
    }
}

class HkdfProvider extends (/* unused pure expression or super */ null && (ProviderCrypto)) {
    constructor() {
        super(...arguments);
        this.name = "HKDF";
        this.hashAlgorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
        this.usages = ["deriveKey", "deriveBits"];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
        this.checkRequiredProperty(algorithm, "salt");
        if (!BufferSourceConverter.isBufferSource(algorithm.salt)) {
            throw new TypeError("salt: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        this.checkRequiredProperty(algorithm, "info");
        if (!BufferSourceConverter.isBufferSource(algorithm.info)) {
            throw new TypeError("salt: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
    }
    checkImportKey(format, keyData, algorithm, extractable, keyUsages, ...args) {
        super.checkImportKey(format, keyData, algorithm, extractable, keyUsages);
        if (extractable) {
            throw new SyntaxError("extractable: Must be 'false'");
        }
    }
}

class Crypto {
    get [Symbol.toStringTag]() {
        return "Crypto";
    }
}

class ProviderStorage {
    constructor() {
        this.items = {};
    }
    get(algorithmName) {
        return this.items[algorithmName.toLowerCase()] || null;
    }
    set(provider) {
        this.items[provider.name.toLowerCase()] = provider;
    }
    removeAt(algorithmName) {
        const provider = this.get(algorithmName.toLowerCase());
        if (provider) {
            delete this.items[algorithmName];
        }
        return provider;
    }
    has(name) {
        return !!this.get(name);
    }
    get length() {
        return Object.keys(this.items).length;
    }
    get algorithms() {
        const algorithms = [];
        for (const key in this.items) {
            const provider = this.items[key];
            algorithms.push(provider.name);
        }
        return algorithms.sort();
    }
}

class SubtleCrypto {
    constructor() {
        this.providers = new ProviderStorage();
    }
    static isHashedAlgorithm(data) {
        return data
            && typeof data === "object"
            && "name" in data
            && "hash" in data
            ? true
            : false;
    }
    get [Symbol.toStringTag]() {
        return "SubtleCrypto";
    }
    async digest(...args) {
        this.checkRequiredArguments(args, 2, "digest");
        const [algorithm, data, ...params] = args;
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const preparedData = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toArrayBuffer(data);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.digest(preparedAlgorithm, preparedData, ...params);
        return result;
    }
    async generateKey(...args) {
        this.checkRequiredArguments(args, 3, "generateKey");
        const [algorithm, extractable, keyUsages, ...params] = args;
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.generateKey({ ...preparedAlgorithm, name: provider.name }, extractable, keyUsages, ...params);
        return result;
    }
    async sign(...args) {
        this.checkRequiredArguments(args, 3, "sign");
        const [algorithm, key, data, ...params] = args;
        this.checkCryptoKey(key);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const preparedData = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toArrayBuffer(data);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.sign({ ...preparedAlgorithm, name: provider.name }, key, preparedData, ...params);
        return result;
    }
    async verify(...args) {
        this.checkRequiredArguments(args, 4, "verify");
        const [algorithm, key, signature, data, ...params] = args;
        this.checkCryptoKey(key);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const preparedData = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toArrayBuffer(data);
        const preparedSignature = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toArrayBuffer(signature);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.verify({ ...preparedAlgorithm, name: provider.name }, key, preparedSignature, preparedData, ...params);
        return result;
    }
    async encrypt(...args) {
        this.checkRequiredArguments(args, 3, "encrypt");
        const [algorithm, key, data, ...params] = args;
        this.checkCryptoKey(key);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const preparedData = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toArrayBuffer(data);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.encrypt({ ...preparedAlgorithm, name: provider.name }, key, preparedData, { keyUsage: true }, ...params);
        return result;
    }
    async decrypt(...args) {
        this.checkRequiredArguments(args, 3, "decrypt");
        const [algorithm, key, data, ...params] = args;
        this.checkCryptoKey(key);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const preparedData = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toArrayBuffer(data);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.decrypt({ ...preparedAlgorithm, name: provider.name }, key, preparedData, { keyUsage: true }, ...params);
        return result;
    }
    async deriveBits(...args) {
        this.checkRequiredArguments(args, 3, "deriveBits");
        const [algorithm, baseKey, length, ...params] = args;
        this.checkCryptoKey(baseKey);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.deriveBits({ ...preparedAlgorithm, name: provider.name }, baseKey, length, { keyUsage: true }, ...params);
        return result;
    }
    async deriveKey(...args) {
        this.checkRequiredArguments(args, 5, "deriveKey");
        const [algorithm, baseKey, derivedKeyType, extractable, keyUsages, ...params] = args;
        const preparedDerivedKeyType = this.prepareAlgorithm(derivedKeyType);
        const importProvider = this.getProvider(preparedDerivedKeyType.name);
        importProvider.checkDerivedKeyParams(preparedDerivedKeyType);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const provider = this.getProvider(preparedAlgorithm.name);
        provider.checkCryptoKey(baseKey, "deriveKey");
        const derivedBits = await provider.deriveBits({ ...preparedAlgorithm, name: provider.name }, baseKey, derivedKeyType.length || 512, { keyUsage: false }, ...params);
        return this.importKey("raw", derivedBits, derivedKeyType, extractable, keyUsages, ...params);
    }
    async exportKey(...args) {
        this.checkRequiredArguments(args, 2, "exportKey");
        const [format, key, ...params] = args;
        this.checkCryptoKey(key);
        const provider = this.getProvider(key.algorithm.name);
        const result = await provider.exportKey(format, key, ...params);
        return result;
    }
    async importKey(...args) {
        this.checkRequiredArguments(args, 5, "importKey");
        const [format, keyData, algorithm, extractable, keyUsages, ...params] = args;
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const provider = this.getProvider(preparedAlgorithm.name);
        if (["pkcs8", "spki", "raw"].indexOf(format) !== -1) {
            const preparedData = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toArrayBuffer(keyData);
            return provider.importKey(format, preparedData, { ...preparedAlgorithm, name: provider.name }, extractable, keyUsages, ...params);
        }
        else {
            if (!keyData.kty) {
                throw new TypeError("keyData: Is not JSON");
            }
        }
        return provider.importKey(format, keyData, { ...preparedAlgorithm, name: provider.name }, extractable, keyUsages, ...params);
    }
    async wrapKey(format, key, wrappingKey, wrapAlgorithm, ...args) {
        let keyData = await this.exportKey(format, key, ...args);
        if (format === "jwk") {
            const json = JSON.stringify(keyData);
            keyData = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.FromUtf8String(json);
        }
        const preparedAlgorithm = this.prepareAlgorithm(wrapAlgorithm);
        const preparedData = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toArrayBuffer(keyData);
        const provider = this.getProvider(preparedAlgorithm.name);
        return provider.encrypt({ ...preparedAlgorithm, name: provider.name }, wrappingKey, preparedData, { keyUsage: false }, ...args);
    }
    async unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages, ...args) {
        const preparedAlgorithm = this.prepareAlgorithm(unwrapAlgorithm);
        const preparedData = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toArrayBuffer(wrappedKey);
        const provider = this.getProvider(preparedAlgorithm.name);
        let keyData = await provider.decrypt({ ...preparedAlgorithm, name: provider.name }, unwrappingKey, preparedData, { keyUsage: false }, ...args);
        if (format === "jwk") {
            try {
                keyData = JSON.parse(pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.ToUtf8String(keyData));
            }
            catch (e) {
                const error = new TypeError("wrappedKey: Is not a JSON");
                error.internal = e;
                throw error;
            }
        }
        return this.importKey(format, keyData, unwrappedKeyAlgorithm, extractable, keyUsages, ...args);
    }
    checkRequiredArguments(args, size, methodName) {
        if (args.length < size) {
            throw new TypeError(`Failed to execute '${methodName}' on 'SubtleCrypto': ${size} arguments required, but only ${args.length} present`);
        }
    }
    prepareAlgorithm(algorithm) {
        if (typeof algorithm === "string") {
            return {
                name: algorithm,
            };
        }
        if (SubtleCrypto.isHashedAlgorithm(algorithm)) {
            const preparedAlgorithm = { ...algorithm };
            preparedAlgorithm.hash = this.prepareAlgorithm(algorithm.hash);
            return preparedAlgorithm;
        }
        return { ...algorithm };
    }
    getProvider(name) {
        const provider = this.providers.get(name);
        if (!provider) {
            throw new AlgorithmError("Unrecognized name");
        }
        return provider;
    }
    checkCryptoKey(key) {
        if (!(key instanceof CryptoKey)) {
            throw new TypeError(`Key is not of type 'CryptoKey'`);
        }
    }
}

let ObjectIdentifier = class ObjectIdentifier {
    constructor(value) {
        if (value) {
            this.value = value;
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.ObjectIdentifier */ .gZ.ObjectIdentifier })
], ObjectIdentifier.prototype, "value", void 0);
ObjectIdentifier = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnType */ .Ve)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnTypeTypes.Choice */ .cN.Choice })
], ObjectIdentifier);

class AlgorithmIdentifier {
    constructor(params) {
        Object.assign(this, params);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({
        type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.ObjectIdentifier */ .gZ.ObjectIdentifier,
    })
], AlgorithmIdentifier.prototype, "algorithm", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({
        type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Any */ .gZ.Any,
        optional: true,
    })
], AlgorithmIdentifier.prototype, "parameters", void 0);

class PrivateKeyInfo {
    constructor() {
        this.version = 0;
        this.privateKeyAlgorithm = new AlgorithmIdentifier();
        this.privateKey = new ArrayBuffer(0);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer })
], PrivateKeyInfo.prototype, "version", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: AlgorithmIdentifier })
], PrivateKeyInfo.prototype, "privateKeyAlgorithm", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.OctetString */ .gZ.OctetString })
], PrivateKeyInfo.prototype, "privateKey", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Any */ .gZ.Any, optional: true })
], PrivateKeyInfo.prototype, "attributes", void 0);

class PublicKeyInfo {
    constructor() {
        this.publicKeyAlgorithm = new AlgorithmIdentifier();
        this.publicKey = new ArrayBuffer(0);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: AlgorithmIdentifier })
], PublicKeyInfo.prototype, "publicKeyAlgorithm", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.BitString */ .gZ.BitString })
], PublicKeyInfo.prototype, "publicKey", void 0);

const JsonBase64UrlArrayBufferConverter = {
    fromJSON: (value) => pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.FromBase64Url(value),
    toJSON: (value) => pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.ToBase64Url(new Uint8Array(value)),
};

const AsnIntegerArrayBufferConverter = {
    fromASN: (value) => {
        const valueHex = value.valueBlock.valueHex;
        return !(new Uint8Array(valueHex)[0])
            ? value.valueBlock.valueHex.slice(1)
            : value.valueBlock.valueHex;
    },
    toASN: (value) => {
        const valueHex = new Uint8Array(value)[0] > 127
            ? Buffer.concat([Buffer.from([0]), Buffer.from(value)])
            : Buffer.from(value);
        return new asn1js__WEBPACK_IMPORTED_MODULE_3__.Integer({ valueHex: new Uint8Array(valueHex).buffer });
    },
};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  JsonBase64UrlArrayBufferConverter: JsonBase64UrlArrayBufferConverter,
  AsnIntegerArrayBufferConverter: AsnIntegerArrayBufferConverter
});

class RsaPrivateKey {
    constructor() {
        this.version = 0;
        this.modulus = new ArrayBuffer(0);
        this.publicExponent = new ArrayBuffer(0);
        this.privateExponent = new ArrayBuffer(0);
        this.prime1 = new ArrayBuffer(0);
        this.prime2 = new ArrayBuffer(0);
        this.exponent1 = new ArrayBuffer(0);
        this.exponent2 = new ArrayBuffer(0);
        this.coefficient = new ArrayBuffer(0);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnIntegerConverter */ .A6 })
], RsaPrivateKey.prototype, "version", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerArrayBufferConverter }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ name: "n", converter: JsonBase64UrlArrayBufferConverter })
], RsaPrivateKey.prototype, "modulus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerArrayBufferConverter }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ name: "e", converter: JsonBase64UrlArrayBufferConverter })
], RsaPrivateKey.prototype, "publicExponent", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerArrayBufferConverter }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ name: "d", converter: JsonBase64UrlArrayBufferConverter })
], RsaPrivateKey.prototype, "privateExponent", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerArrayBufferConverter }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ name: "p", converter: JsonBase64UrlArrayBufferConverter })
], RsaPrivateKey.prototype, "prime1", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerArrayBufferConverter }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ name: "q", converter: JsonBase64UrlArrayBufferConverter })
], RsaPrivateKey.prototype, "prime2", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerArrayBufferConverter }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ name: "dp", converter: JsonBase64UrlArrayBufferConverter })
], RsaPrivateKey.prototype, "exponent1", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerArrayBufferConverter }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ name: "dq", converter: JsonBase64UrlArrayBufferConverter })
], RsaPrivateKey.prototype, "exponent2", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerArrayBufferConverter }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ name: "qi", converter: JsonBase64UrlArrayBufferConverter })
], RsaPrivateKey.prototype, "coefficient", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Any */ .gZ.Any, optional: true })
], RsaPrivateKey.prototype, "otherPrimeInfos", void 0);

class RsaPublicKey {
    constructor() {
        this.modulus = new ArrayBuffer(0);
        this.publicExponent = new ArrayBuffer(0);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerArrayBufferConverter }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ name: "n", converter: JsonBase64UrlArrayBufferConverter })
], RsaPublicKey.prototype, "modulus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerArrayBufferConverter }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ name: "e", converter: JsonBase64UrlArrayBufferConverter })
], RsaPublicKey.prototype, "publicExponent", void 0);

let EcPublicKey = class EcPublicKey {
    constructor(value) {
        this.value = new ArrayBuffer(0);
        if (value) {
            this.value = value;
        }
    }
    toJSON() {
        let bytes = new Uint8Array(this.value);
        if (bytes[0] !== 0x04) {
            throw new CryptoError("Wrong ECPoint. Current version supports only Uncompressed (0x04) point");
        }
        bytes = new Uint8Array(this.value.slice(1));
        const size = bytes.length / 2;
        const offset = 0;
        const json = {
            x: pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.ToBase64Url(bytes.buffer.slice(offset, offset + size)),
            y: pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.ToBase64Url(bytes.buffer.slice(offset + size, offset + size + size)),
        };
        return json;
    }
    fromJSON(json) {
        if (!("x" in json)) {
            throw new Error("x: Missing required property");
        }
        if (!("y" in json)) {
            throw new Error("y: Missing required property");
        }
        const x = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.FromBase64Url(json.x);
        const y = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.FromBase64Url(json.y);
        const value = Buffer.concat([
            new Uint8Array([0x04]),
            new Uint8Array(x),
            new Uint8Array(y),
        ]);
        this.value = new Uint8Array(value).buffer;
        return this;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.OctetString */ .gZ.OctetString })
], EcPublicKey.prototype, "value", void 0);
EcPublicKey = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnType */ .Ve)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnTypeTypes.Choice */ .cN.Choice })
], EcPublicKey);

class EcPrivateKey {
    constructor() {
        this.version = 1;
        this.privateKey = new ArrayBuffer(0);
    }
    fromJSON(json) {
        if (!("d" in json)) {
            throw new Error("d: Missing required property");
        }
        this.privateKey = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.FromBase64Url(json.d);
        if ("x" in json) {
            const publicKey = new EcPublicKey();
            publicKey.fromJSON(json);
            this.publicKey = _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnSerializer.toASN */ .xg.toASN(publicKey).valueBlock.valueHex;
        }
        return this;
    }
    toJSON() {
        const jwk = {};
        jwk.d = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.ToBase64Url(this.privateKey);
        if (this.publicKey) {
            Object.assign(jwk, new EcPublicKey(this.publicKey).toJSON());
        }
        return jwk;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnIntegerConverter */ .A6 })
], EcPrivateKey.prototype, "version", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.OctetString */ .gZ.OctetString })
], EcPrivateKey.prototype, "privateKey", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ context: 0, type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Any */ .gZ.Any, optional: true })
], EcPrivateKey.prototype, "parameters", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ context: 1, type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.BitString */ .gZ.BitString, optional: true })
], EcPrivateKey.prototype, "publicKey", void 0);

const AsnIntegerWithoutPaddingConverter = {
    fromASN: (value) => {
        const bytes = new Uint8Array(value.valueBlock.valueHex);
        return (bytes[0] === 0)
            ? bytes.buffer.slice(1)
            : bytes.buffer;
    },
    toASN: (value) => {
        const bytes = new Uint8Array(value);
        if (bytes[0] > 127) {
            const newValue = new Uint8Array(bytes.length + 1);
            newValue.set(bytes, 1);
            return new asn1js__WEBPACK_IMPORTED_MODULE_3__.Integer({ valueHex: newValue.buffer });
        }
        return new asn1js__WEBPACK_IMPORTED_MODULE_3__.Integer({ valueHex: value });
    },
};

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AsnIntegerWithoutPaddingConverter: AsnIntegerWithoutPaddingConverter
});

class EcDsaSignature {
    constructor() {
        this.r = new ArrayBuffer(0);
        this.s = new ArrayBuffer(0);
    }
    static fromWebCryptoSignature(value) {
        const wcSignature = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toUint8Array(value);
        const pointSize = wcSignature.byteLength / 2;
        const ecSignature = new this();
        ecSignature.r = ecSignature.removePadding(wcSignature.slice(0, pointSize));
        ecSignature.s = ecSignature.removePadding(wcSignature.slice(pointSize, pointSize * 2));
        return ecSignature;
    }
    toWebCryptoSignature(pointSize) {
        pointSize = this.getPointSize();
        const r = this.addPadding(pointSize, pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toUint8Array(this.r));
        const s = this.addPadding(pointSize, pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toUint8Array(this.s));
        const wcSignature = new Uint8Array(r.byteLength + s.byteLength);
        wcSignature.set(r, 0);
        wcSignature.set(s, r.length);
        return wcSignature.buffer;
    }
    getPointSize() {
        const size = Math.max(this.r.byteLength, this.s.byteLength);
        switch (size) {
            case 31:
            case 32:
                return 32;
            case 47:
            case 48:
                return 48;
            case 65:
            case 66:
                return 66;
        }
        throw new Error("Unsupported EC point size");
    }
    addPadding(pointSize, bytes) {
        const res = new Uint8Array(pointSize);
        const uint8Array = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toUint8Array(bytes);
        res.set(uint8Array, pointSize - uint8Array.length);
        return res;
    }
    removePadding(bytes) {
        const uint8Array = pvtsutils__WEBPACK_IMPORTED_MODULE_0__.BufferSourceConverter.toUint8Array(bytes);
        for (let i = 0; i < uint8Array.length; i++) {
            if (!uint8Array[i]) {
                continue;
            }
            return uint8Array.slice(i);
        }
        return new Uint8Array(0);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerWithoutPaddingConverter })
], EcDsaSignature.prototype, "r", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.Integer */ .gZ.Integer, converter: AsnIntegerWithoutPaddingConverter })
], EcDsaSignature.prototype, "s", void 0);

let CurvePrivateKey = class CurvePrivateKey {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnProp */ .qw)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnPropTypes.OctetString */ .gZ.OctetString }),
    (0,_peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonProp */ .uj)({ type: _peculiar_json_schema__WEBPACK_IMPORTED_MODULE_2__/* .JsonPropTypes.String */ .bx.String, converter: JsonBase64UrlArrayBufferConverter })
], CurvePrivateKey.prototype, "d", void 0);
CurvePrivateKey = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnType */ .Ve)({ type: _peculiar_asn1_schema__WEBPACK_IMPORTED_MODULE_1__/* .AsnTypeTypes.Choice */ .cN.Choice })
], CurvePrivateKey);

const idX25519 = "1.3.101.110";
const idX448 = "1.3.101.111";
const idEd25519 = "1.3.101.112";
const idEd448 = "1.3.101.113";

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  converters: index$1,
  get ObjectIdentifier () { return ObjectIdentifier; },
  AlgorithmIdentifier: AlgorithmIdentifier,
  PrivateKeyInfo: PrivateKeyInfo,
  PublicKeyInfo: PublicKeyInfo,
  RsaPrivateKey: RsaPrivateKey,
  RsaPublicKey: RsaPublicKey,
  EcPrivateKey: EcPrivateKey,
  get EcPublicKey () { return EcPublicKey; },
  EcDsaSignature: EcDsaSignature,
  get CurvePrivateKey () { return CurvePrivateKey; },
  idX25519: idX25519,
  idX448: idX448,
  idEd25519: idEd25519,
  idEd448: idEd448
});

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  converters: index
});




/***/ })

}]);