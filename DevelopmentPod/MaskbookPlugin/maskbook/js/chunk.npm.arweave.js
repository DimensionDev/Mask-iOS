"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3850],{

/***/ 92413:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const bignumber_js_1 = __webpack_require__(42895);
class Ar {
    constructor() {
        // Configure and assign the constructor function for the bignumber library.
        this.BigNum = (value, decimals) => {
            let instance = bignumber_js_1.BigNumber.clone({ DECIMAL_PLACES: decimals });
            return new instance(value);
        };
    }
    winstonToAr(winstonString, { formatted = false, decimals = 12, trim = true } = {}) {
        let number = this.stringToBigNum(winstonString, decimals).shiftedBy(-12);
        return formatted ? number.toFormat(decimals) : number.toFixed(decimals);
    }
    arToWinston(arString, { formatted = false } = {}) {
        let number = this.stringToBigNum(arString).shiftedBy(12);
        return formatted ? number.toFormat() : number.toFixed(0);
    }
    compare(winstonStringA, winstonStringB) {
        let a = this.stringToBigNum(winstonStringA);
        let b = this.stringToBigNum(winstonStringB);
        return a.comparedTo(b);
    }
    isEqual(winstonStringA, winstonStringB) {
        return this.compare(winstonStringA, winstonStringB) === 0;
    }
    isLessThan(winstonStringA, winstonStringB) {
        let a = this.stringToBigNum(winstonStringA);
        let b = this.stringToBigNum(winstonStringB);
        return a.isLessThan(b);
    }
    isGreaterThan(winstonStringA, winstonStringB) {
        let a = this.stringToBigNum(winstonStringA);
        let b = this.stringToBigNum(winstonStringB);
        return a.isGreaterThan(b);
    }
    add(winstonStringA, winstonStringB) {
        let a = this.stringToBigNum(winstonStringA);
        let b = this.stringToBigNum(winstonStringB);
        return a.plus(winstonStringB).toFixed(0);
    }
    sub(winstonStringA, winstonStringB) {
        let a = this.stringToBigNum(winstonStringA);
        let b = this.stringToBigNum(winstonStringB);
        return a.minus(winstonStringB).toFixed(0);
    }
    stringToBigNum(stringValue, decimalPlaces = 12) {
        return this.BigNum(stringValue, decimalPlaces);
    }
}
exports["default"] = Ar;
//# sourceMappingURL=ar.js.map

/***/ }),

/***/ 19115:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const error_1 = __webpack_require__(78503);
const ArweaveUtils = __webpack_require__(94509);
class Chunks {
    constructor(api) {
        this.api = api;
    }
    async getTransactionOffset(id) {
        const resp = await this.api.get(`tx/${id}/offset`);
        if (resp.status === 200) {
            return resp.data;
        }
        throw new Error(`Unable to get transaction offset: ${error_1.getError(resp)}`);
    }
    async getChunk(offset) {
        const resp = await this.api.get(`chunk/${offset}`);
        if (resp.status === 200) {
            return resp.data;
        }
        throw new Error(`Unable to get chunk: ${error_1.getError(resp)}`);
    }
    async getChunkData(offset) {
        const chunk = await this.getChunk(offset);
        const buf = ArweaveUtils.b64UrlToBuffer(chunk.chunk);
        return buf;
    }
    firstChunkOffset(offsetResponse) {
        return parseInt(offsetResponse.offset) - parseInt(offsetResponse.size) + 1;
    }
    async downloadChunkedData(id) {
        const offsetResponse = await this.getTransactionOffset(id);
        const size = parseInt(offsetResponse.size);
        const endOffset = parseInt(offsetResponse.offset);
        const startOffset = endOffset - size + 1;
        const data = new Uint8Array(size);
        let byte = 0;
        while (startOffset + byte < endOffset) {
            const chunkData = await this.getChunkData(startOffset + byte);
            data.set(chunkData, byte);
            byte += chunkData.length;
        }
        return data;
    }
}
exports["default"] = Chunks;
//# sourceMappingURL=chunks.js.map

/***/ }),

/***/ 73240:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ar_1 = __webpack_require__(92413);
const api_1 = __webpack_require__(95720);
const network_1 = __webpack_require__(40372);
const transactions_1 = __webpack_require__(75699);
const wallets_1 = __webpack_require__(68179);
const transaction_1 = __webpack_require__(24129);
const ArweaveUtils = __webpack_require__(94509);
const silo_1 = __webpack_require__(91942);
const chunks_1 = __webpack_require__(19115);
class Arweave {
    constructor(apiConfig) {
        this.api = new api_1.default(apiConfig);
        this.wallets = new wallets_1.default(this.api, Arweave.crypto);
        this.chunks = new chunks_1.default(this.api);
        this.transactions = new transactions_1.default(this.api, Arweave.crypto, this.chunks);
        this.silo = new silo_1.default(this.api, this.crypto, this.transactions);
        this.network = new network_1.default(this.api);
        this.ar = new ar_1.default();
    }
    /** @deprecated */
    get crypto() {
        return Arweave.crypto;
    }
    /** @deprecated */
    get utils() {
        return Arweave.utils;
    }
    getConfig() {
        return {
            api: this.api.getConfig(),
            crypto: null,
        };
    }
    async createTransaction(attributes, jwk) {
        const transaction = {};
        Object.assign(transaction, attributes);
        if (!attributes.data && !(attributes.target && attributes.quantity)) {
            throw new Error(`A new Arweave transaction must have a 'data' value, or 'target' and 'quantity' values.`);
        }
        if (attributes.owner == undefined) {
            if (jwk && jwk !== "use_wallet") {
                transaction.owner = jwk.n;
            }
        }
        if (attributes.last_tx == undefined) {
            transaction.last_tx = await this.transactions.getTransactionAnchor();
        }
        if (typeof attributes.data === "string") {
            attributes.data = ArweaveUtils.stringToBuffer(attributes.data);
        }
        if (attributes.data instanceof ArrayBuffer) {
            attributes.data = new Uint8Array(attributes.data);
        }
        if (attributes.data && !(attributes.data instanceof Uint8Array)) {
            throw new Error("Expected data to be a string, Uint8Array or ArrayBuffer");
        }
        if (attributes.reward == undefined) {
            const length = attributes.data ? attributes.data.byteLength : 0;
            transaction.reward = await this.transactions.getPrice(length, transaction.target);
        }
        // here we should call prepare chunk
        transaction.data_root = "";
        transaction.data_size = attributes.data
            ? attributes.data.byteLength.toString()
            : "0";
        transaction.data = attributes.data || new Uint8Array(0);
        const createdTransaction = new transaction_1.default(transaction);
        await createdTransaction.getSignatureData();
        return createdTransaction;
    }
    async createSiloTransaction(attributes, jwk, siloUri) {
        const transaction = {};
        Object.assign(transaction, attributes);
        if (!attributes.data) {
            throw new Error(`Silo transactions must have a 'data' value`);
        }
        if (!siloUri) {
            throw new Error(`No Silo URI specified.`);
        }
        if (attributes.target || attributes.quantity) {
            throw new Error(`Silo transactions can only be used for storing data, sending AR to other wallets isn't supported.`);
        }
        if (attributes.owner == undefined) {
            if (!jwk || !jwk.n) {
                throw new Error(`A new Arweave transaction must either have an 'owner' attribute, or you must provide the jwk parameter.`);
            }
            transaction.owner = jwk.n;
        }
        if (attributes.last_tx == undefined) {
            transaction.last_tx = await this.transactions.getTransactionAnchor();
        }
        const siloResource = await this.silo.parseUri(siloUri);
        if (typeof attributes.data == "string") {
            const encrypted = await this.crypto.encrypt(ArweaveUtils.stringToBuffer(attributes.data), siloResource.getEncryptionKey());
            transaction.reward = await this.transactions.getPrice(encrypted.byteLength);
            transaction.data = ArweaveUtils.bufferTob64Url(encrypted);
        }
        if (attributes.data instanceof Uint8Array) {
            const encrypted = await this.crypto.encrypt(attributes.data, siloResource.getEncryptionKey());
            transaction.reward = await this.transactions.getPrice(encrypted.byteLength);
            transaction.data = ArweaveUtils.bufferTob64Url(encrypted);
        }
        const siloTransaction = new transaction_1.default(transaction);
        siloTransaction.addTag("Silo-Name", siloResource.getAccessKey());
        siloTransaction.addTag("Silo-Version", `0.1.0`);
        return siloTransaction;
    }
    arql(query) {
        return this.api
            .post("/arql", query)
            .then((response) => response.data || []);
    }
}
exports["default"] = Arweave;
Arweave.utils = ArweaveUtils;
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 48383:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(73240);
const webcrypto_driver_1 = __webpack_require__(95164);
common_1.default.crypto = new webcrypto_driver_1.default();
common_1.default.init = function (apiConfig = {}) {
    function getDefaultConfig() {
        const defaults = {
            host: "arweave.net",
            port: 443,
            protocol: "https",
        };
        if (!window ||
            !window.location ||
            !window.location.protocol ||
            !window.location.hostname) {
            return defaults;
        }
        // window.location.protocol has a trailing colon (http:, https:, file: etc)
        const currentProtocol = window.location.protocol.replace(":", "");
        const currentHost = window.location.hostname;
        const currentPort = window.location.port
            ? parseInt(window.location.port)
            : currentProtocol == "https"
                ? 443
                : 80;
        const isLocal = ["localhost", "127.0.0.1"].includes(currentHost) ||
            currentProtocol == "file";
        // If we're running in what looks like a local dev environment
        // then default to using arweave.net
        if (isLocal) {
            return defaults;
        }
        return {
            host: currentHost,
            port: currentPort,
            protocol: currentProtocol,
        };
    }
    const defaultConfig = getDefaultConfig();
    const protocol = apiConfig.protocol || defaultConfig.protocol;
    const host = apiConfig.host || defaultConfig.host;
    const port = apiConfig.port || defaultConfig.port;
    return new common_1.default(Object.assign(Object.assign({}, apiConfig), { host,
        protocol,
        port }));
};
window.Arweave = common_1.default;
__exportStar(__webpack_require__(73240), exports);
exports["default"] = common_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 95720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const axios_1 = __webpack_require__(44186);
class Api {
    constructor(config) {
        this.METHOD_GET = "GET";
        this.METHOD_POST = "POST";
        this.applyConfig(config);
    }
    applyConfig(config) {
        this.config = this.mergeDefaults(config);
    }
    getConfig() {
        return this.config;
    }
    mergeDefaults(config) {
        const protocol = config.protocol || "http";
        const port = config.port || (protocol === "https" ? 443 : 80);
        return {
            host: config.host || "127.0.0.1",
            protocol,
            port,
            timeout: config.timeout || 20000,
            logging: config.logging || false,
            logger: config.logger || console.log,
        };
    }
    async get(endpoint, config) {
        try {
            return await this.request().get(endpoint, config);
        }
        catch (error) {
            if (error.response && error.response.status) {
                return error.response;
            }
            throw error;
        }
    }
    async post(endpoint, body, config) {
        try {
            return await this.request().post(endpoint, body, config);
        }
        catch (error) {
            if (error.response && error.response.status) {
                return error.response;
            }
            throw error;
        }
    }
    /**
     * Get an AxiosInstance with the base configuration setup to fire off
     * a request to the network.
     */
    request() {
        let instance = axios_1.default.create({
            baseURL: `${this.config.protocol}://${this.config.host}:${this.config.port}`,
            timeout: this.config.timeout,
            maxContentLength: 1024 * 1024 * 512,
        });
        if (this.config.logging) {
            instance.interceptors.request.use((request) => {
                this.config.logger(`Requesting: ${request.baseURL}/${request.url}`);
                return request;
            });
            instance.interceptors.response.use((response) => {
                this.config.logger(`Response:   ${response.config.url} - ${response.status}`);
                return response;
            });
        }
        return instance;
    }
}
exports["default"] = Api;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ 95164:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ArweaveUtils = __webpack_require__(94509);
class WebCryptoDriver {
    constructor() {
        this.keyLength = 4096;
        this.publicExponent = 0x10001;
        this.hashAlgorithm = "sha256";
        if (!this.detectWebCrypto()) {
            throw new Error("SubtleCrypto not available!");
        }
        this.driver = crypto.subtle;
    }
    async generateJWK() {
        let cryptoKey = await this.driver.generateKey({
            name: "RSA-PSS",
            modulusLength: 4096,
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            hash: {
                name: "SHA-256",
            },
        }, true, ["sign"]);
        let jwk = await this.driver.exportKey("jwk", cryptoKey.privateKey);
        return {
            kty: jwk.kty,
            e: jwk.e,
            n: jwk.n,
            d: jwk.d,
            p: jwk.p,
            q: jwk.q,
            dp: jwk.dp,
            dq: jwk.dq,
            qi: jwk.qi,
        };
    }
    async sign(jwk, data, { saltLength } = {}) {
        let signature = await this.driver.sign({
            name: "RSA-PSS",
            saltLength: 32,
        }, await this.jwkToCryptoKey(jwk), data);
        return new Uint8Array(signature);
    }
    async hash(data, algorithm = "SHA-256") {
        let digest = await this.driver.digest(algorithm, data);
        return new Uint8Array(digest);
    }
    async verify(publicModulus, data, signature) {
        const publicKey = {
            kty: "RSA",
            e: "AQAB",
            n: publicModulus,
        };
        const key = await this.jwkToPublicCryptoKey(publicKey);
        const verifyWith32 = this.driver.verify({
            name: "RSA-PSS",
            saltLength: 32,
        }, key, signature, data);
        const verifyWith0 = this.driver.verify({
            name: "RSA-PSS",
            saltLength: 0,
        }, key, signature, data);
        return verifyWith32 || verifyWith0;
    }
    async jwkToCryptoKey(jwk) {
        return this.driver.importKey("jwk", jwk, {
            name: "RSA-PSS",
            hash: {
                name: "SHA-256",
            },
        }, false, ["sign"]);
    }
    async jwkToPublicCryptoKey(publicJwk) {
        return this.driver.importKey("jwk", publicJwk, {
            name: "RSA-PSS",
            hash: {
                name: "SHA-256",
            },
        }, false, ["verify"]);
    }
    detectWebCrypto() {
        if (typeof crypto === "undefined") {
            return false;
        }
        const subtle = crypto === null || crypto === void 0 ? void 0 : crypto.subtle;
        if (subtle === undefined) {
            return false;
        }
        const names = [
            "generateKey",
            "importKey",
            "exportKey",
            "digest",
            "sign",
        ];
        return names.every((name) => typeof subtle[name] === "function");
    }
    async encrypt(data, key, salt) {
        const initialKey = await this.driver.importKey("raw", typeof key == "string" ? ArweaveUtils.stringToBuffer(key) : key, {
            name: "PBKDF2",
            length: 32,
        }, false, ["deriveKey"]);
        // const salt = ArweaveUtils.stringToBuffer("salt");
        // create a random string for deriving the key
        // const salt = this.driver.randomBytes(16).toString('hex');
        const derivedkey = await this.driver.deriveKey({
            name: "PBKDF2",
            salt: salt
                ? ArweaveUtils.stringToBuffer(salt)
                : ArweaveUtils.stringToBuffer("salt"),
            iterations: 100000,
            hash: "SHA-256",
        }, initialKey, {
            name: "AES-CBC",
            length: 256,
        }, false, ["encrypt", "decrypt"]);
        const iv = new Uint8Array(16);
        crypto.getRandomValues(iv);
        const encryptedData = await this.driver.encrypt({
            name: "AES-CBC",
            iv: iv,
        }, derivedkey, data);
        return ArweaveUtils.concatBuffers([iv, encryptedData]);
    }
    async decrypt(encrypted, key, salt) {
        const initialKey = await this.driver.importKey("raw", typeof key == "string" ? ArweaveUtils.stringToBuffer(key) : key, {
            name: "PBKDF2",
            length: 32,
        }, false, ["deriveKey"]);
        // const salt = ArweaveUtils.stringToBuffer("pepper");
        const derivedkey = await this.driver.deriveKey({
            name: "PBKDF2",
            salt: salt
                ? ArweaveUtils.stringToBuffer(salt)
                : ArweaveUtils.stringToBuffer("salt"),
            iterations: 100000,
            hash: "SHA-256",
        }, initialKey, {
            name: "AES-CBC",
            length: 256,
        }, false, ["encrypt", "decrypt"]);
        const iv = encrypted.slice(0, 16);
        const data = await this.driver.decrypt({
            name: "AES-CBC",
            iv: iv,
        }, derivedkey, encrypted.slice(16));
        // We're just using concat to convert from an array buffer to uint8array
        return ArweaveUtils.concatBuffers([data]);
    }
}
exports["default"] = WebCryptoDriver;
//# sourceMappingURL=webcrypto-driver.js.map

/***/ }),

/***/ 98884:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(73240);
async function deepHash(data) {
    if (Array.isArray(data)) {
        const tag = common_1.default.utils.concatBuffers([
            common_1.default.utils.stringToBuffer("list"),
            common_1.default.utils.stringToBuffer(data.length.toString()),
        ]);
        return await deepHashChunks(data, await common_1.default.crypto.hash(tag, "SHA-384"));
    }
    const tag = common_1.default.utils.concatBuffers([
        common_1.default.utils.stringToBuffer("blob"),
        common_1.default.utils.stringToBuffer(data.byteLength.toString()),
    ]);
    const taggedHash = common_1.default.utils.concatBuffers([
        await common_1.default.crypto.hash(tag, "SHA-384"),
        await common_1.default.crypto.hash(data, "SHA-384"),
    ]);
    return await common_1.default.crypto.hash(taggedHash, "SHA-384");
}
exports["default"] = deepHash;
async function deepHashChunks(chunks, acc) {
    if (chunks.length < 1) {
        return acc;
    }
    const hashPair = common_1.default.utils.concatBuffers([
        acc,
        await deepHash(chunks[0]),
    ]);
    const newAcc = await common_1.default.crypto.hash(hashPair, "SHA-384");
    return await deepHashChunks(chunks.slice(1), newAcc);
}
//# sourceMappingURL=deepHash.js.map

/***/ }),

/***/ 78503:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getError = void 0;
class ArweaveError extends Error {
    constructor(type, optional = {}) {
        if (optional.message) {
            super(optional.message);
        }
        else {
            super();
        }
        this.type = type;
        this.response = optional.response;
    }
    getType() {
        return this.type;
    }
}
exports["default"] = ArweaveError;
// Safely get error string
// from an axios response, falling back to
// resp.data, statusText or 'unknown'.
// Note: a wrongly set content-type can
// cause what is a json response to be interepted
// as a string or Buffer, so we handle that too.
function getError(resp) {
    let data = resp.data;
    if (typeof resp.data === "string") {
        try {
            data = JSON.parse(resp.data);
        }
        catch (e) { }
    }
    if (resp.data instanceof ArrayBuffer || resp.data instanceof Uint8Array) {
        try {
            data = JSON.parse(data.toString());
        }
        catch (e) { }
    }
    return data ? data.error || data : resp.statusText || "unknown";
}
exports.getError = getError;
//# sourceMappingURL=error.js.map

/***/ }),

/***/ 77093:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.debug = exports.validatePath = exports.arrayCompare = exports.bufferToInt = exports.intToBuffer = exports.arrayFlatten = exports.generateProofs = exports.buildLayers = exports.generateTransactionChunks = exports.generateTree = exports.computeRootHash = exports.generateLeaves = exports.chunkData = exports.MIN_CHUNK_SIZE = exports.MAX_CHUNK_SIZE = void 0;
/**
 * @see {@link https://github.com/ArweaveTeam/arweave/blob/fbc381e0e36efffa45d13f2faa6199d3766edaa2/apps/arweave/src/ar_merkle.erl}
 */
const common_1 = __webpack_require__(73240);
const utils_1 = __webpack_require__(94509);
const util_1 = __webpack_require__(65754);
exports.MAX_CHUNK_SIZE = 256 * 1024;
exports.MIN_CHUNK_SIZE = 32 * 1024;
const NOTE_SIZE = 32;
const HASH_SIZE = 32;
/**
 * Takes the input data and chunks it into (mostly) equal sized chunks.
 * The last chunk will be a bit smaller as it contains the remainder
 * from the chunking process.
 */
async function chunkData(data) {
    let chunks = [];
    let rest = data;
    let cursor = 0;
    while (rest.byteLength >= exports.MAX_CHUNK_SIZE) {
        let chunkSize = exports.MAX_CHUNK_SIZE;
        // If the total bytes left will produce a chunk < MIN_CHUNK_SIZE,
        // then adjust the amount we put in this 2nd last chunk.
        let nextChunkSize = rest.byteLength - exports.MAX_CHUNK_SIZE;
        if (nextChunkSize > 0 && nextChunkSize < exports.MIN_CHUNK_SIZE) {
            chunkSize = Math.ceil(rest.byteLength / 2);
            // console.log(`Last chunk will be: ${nextChunkSize} which is below ${MIN_CHUNK_SIZE}, adjusting current to ${chunkSize} with ${rest.byteLength} left.`)
        }
        const chunk = rest.slice(0, chunkSize);
        const dataHash = await common_1.default.crypto.hash(chunk);
        cursor += chunk.byteLength;
        chunks.push({
            dataHash,
            minByteRange: cursor - chunk.byteLength,
            maxByteRange: cursor,
        });
        rest = rest.slice(chunkSize);
    }
    chunks.push({
        dataHash: await common_1.default.crypto.hash(rest),
        minByteRange: cursor,
        maxByteRange: cursor + rest.byteLength,
    });
    return chunks;
}
exports.chunkData = chunkData;
async function generateLeaves(chunks) {
    return Promise.all(chunks.map(async ({ dataHash, minByteRange, maxByteRange }) => {
        return {
            type: "leaf",
            id: await hash(await Promise.all([hash(dataHash), hash(intToBuffer(maxByteRange))])),
            dataHash: dataHash,
            minByteRange,
            maxByteRange,
        };
    }));
}
exports.generateLeaves = generateLeaves;
/**
 * Builds an arweave merkle tree and gets the root hash for the given input.
 */
async function computeRootHash(data) {
    const rootNode = await generateTree(data);
    return rootNode.id;
}
exports.computeRootHash = computeRootHash;
async function generateTree(data) {
    const rootNode = await buildLayers(await generateLeaves(await chunkData(data)));
    return rootNode;
}
exports.generateTree = generateTree;
/**
 * Generates the data_root, chunks & proofs
 * needed for a transaction.
 *
 * This also checks if the last chunk is a zero-length
 * chunk and discards that chunk and proof if so.
 * (we do not need to upload this zero length chunk)
 *
 * @param data
 */
async function generateTransactionChunks(data) {
    const chunks = await chunkData(data);
    const leaves = await generateLeaves(chunks);
    const root = await buildLayers(leaves);
    const proofs = await generateProofs(root);
    // Discard the last chunk & proof if it's zero length.
    const lastChunk = chunks.slice(-1)[0];
    if (lastChunk.maxByteRange - lastChunk.minByteRange === 0) {
        chunks.splice(chunks.length - 1, 1);
        proofs.splice(proofs.length - 1, 1);
    }
    return {
        data_root: root.id,
        chunks,
        proofs,
    };
}
exports.generateTransactionChunks = generateTransactionChunks;
/**
 * Starting with the bottom layer of leaf nodes, hash every second pair
 * into a new branch node, push those branch nodes onto a new layer,
 * and then recurse, building up the tree to it's root, where the
 * layer only consists of two items.
 */
async function buildLayers(nodes, level = 0) {
    // If there are only 2 nodes left, this is going to be the root node
    if (nodes.length < 2) {
        const root = await hashBranch(nodes[0], nodes[1]);
        // console.log("Root layer", root);
        return root;
    }
    const nextLayer = [];
    for (let i = 0; i < nodes.length; i += 2) {
        nextLayer.push(await hashBranch(nodes[i], nodes[i + 1]));
    }
    // console.log("Layer", nextLayer);
    return buildLayers(nextLayer, level + 1);
}
exports.buildLayers = buildLayers;
/**
 * Recursively search through all branches of the tree,
 * and generate a proof for each leaf node.
 */
function generateProofs(root) {
    const proofs = resolveBranchProofs(root);
    if (!Array.isArray(proofs)) {
        return [proofs];
    }
    return arrayFlatten(proofs);
}
exports.generateProofs = generateProofs;
function resolveBranchProofs(node, proof = new Uint8Array(), depth = 0) {
    if (node.type == "leaf") {
        return {
            offset: node.maxByteRange - 1,
            proof: utils_1.concatBuffers([
                proof,
                node.dataHash,
                intToBuffer(node.maxByteRange),
            ]),
        };
    }
    if (node.type == "branch") {
        const partialProof = utils_1.concatBuffers([
            proof,
            node.leftChild.id,
            node.rightChild.id,
            intToBuffer(node.byteRange),
        ]);
        return [
            resolveBranchProofs(node.leftChild, partialProof, depth + 1),
            resolveBranchProofs(node.rightChild, partialProof, depth + 1),
        ];
    }
    throw new Error(`Unexpected node type`);
}
function arrayFlatten(input) {
    const flat = [];
    input.forEach((item) => {
        if (Array.isArray(item)) {
            flat.push(...arrayFlatten(item));
        }
        else {
            flat.push(item);
        }
    });
    return flat;
}
exports.arrayFlatten = arrayFlatten;
async function hashBranch(left, right) {
    if (!right) {
        return left;
    }
    let branch = {
        type: "branch",
        id: await hash([
            await hash(left.id),
            await hash(right.id),
            await hash(intToBuffer(left.maxByteRange)),
        ]),
        byteRange: left.maxByteRange,
        maxByteRange: right.maxByteRange,
        leftChild: left,
        rightChild: right,
    };
    return branch;
}
async function hash(data) {
    if (Array.isArray(data)) {
        data = common_1.default.utils.concatBuffers(data);
    }
    return new Uint8Array(await common_1.default.crypto.hash(data));
}
function intToBuffer(note) {
    const buffer = new Uint8Array(NOTE_SIZE);
    for (var i = buffer.length - 1; i >= 0; i--) {
        var byte = note % 256;
        buffer[i] = byte;
        note = (note - byte) / 256;
    }
    return buffer;
}
exports.intToBuffer = intToBuffer;
function bufferToInt(buffer) {
    let value = 0;
    for (var i = 0; i < buffer.length; i++) {
        value *= 256;
        value += buffer[i];
    }
    return value;
}
exports.bufferToInt = bufferToInt;
const arrayCompare = (a, b) => a.every((value, index) => b[index] === value);
exports.arrayCompare = arrayCompare;
async function validatePath(id, dest, leftBound, rightBound, path) {
    if (rightBound <= 0) {
        return false;
    }
    if (dest >= rightBound) {
        return validatePath(id, 0, rightBound - 1, rightBound, path);
    }
    if (dest < 0) {
        return validatePath(id, 0, 0, rightBound, path);
    }
    if (path.length == HASH_SIZE + NOTE_SIZE) {
        const pathData = path.slice(0, HASH_SIZE);
        const endOffsetBuffer = path.slice(pathData.length, pathData.length + NOTE_SIZE);
        const pathDataHash = await hash([
            await hash(pathData),
            await hash(endOffsetBuffer),
        ]);
        let result = exports.arrayCompare(id, pathDataHash);
        if (result) {
            return {
                offset: rightBound - 1,
                leftBound: leftBound,
                rightBound: rightBound,
                chunkSize: rightBound - leftBound,
            };
        }
        return false;
    }
    const left = path.slice(0, HASH_SIZE);
    const right = path.slice(left.length, left.length + HASH_SIZE);
    const offsetBuffer = path.slice(left.length + right.length, left.length + right.length + NOTE_SIZE);
    const offset = bufferToInt(offsetBuffer);
    const remainder = path.slice(left.length + right.length + offsetBuffer.length);
    const pathHash = await hash([
        await hash(left),
        await hash(right),
        await hash(offsetBuffer),
    ]);
    if (exports.arrayCompare(id, pathHash)) {
        if (dest < offset) {
            return await validatePath(left, dest, leftBound, Math.min(rightBound, offset), remainder);
        }
        return await validatePath(right, dest, Math.max(leftBound, offset), rightBound, remainder);
    }
    return false;
}
exports.validatePath = validatePath;
/**
 * Inspect an arweave chunk proof.
 * Takes proof, parses, reads and displays the values for console logging.
 * One proof section per line
 * Format: left,right,offset => hash
 */
async function debug(proof, output = "") {
    if (proof.byteLength < 1) {
        return output;
    }
    const left = proof.slice(0, HASH_SIZE);
    const right = proof.slice(left.length, left.length + HASH_SIZE);
    const offsetBuffer = proof.slice(left.length + right.length, left.length + right.length + NOTE_SIZE);
    const offset = bufferToInt(offsetBuffer);
    const remainder = proof.slice(left.length + right.length + offsetBuffer.length);
    const pathHash = await hash([
        await hash(left),
        await hash(right),
        await hash(offsetBuffer),
    ]);
    const updatedOutput = `${output}\n${util_1.inspect(Buffer.from(left))},${util_1.inspect(Buffer.from(right))},${offset} => ${util_1.inspect(pathHash)}`;
    return debug(remainder, updatedOutput);
}
exports.debug = debug;
//# sourceMappingURL=merkle.js.map

/***/ }),

/***/ 93420:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionUploader = void 0;
const transaction_1 = __webpack_require__(24129);
const ArweaveUtils = __webpack_require__(94509);
const error_1 = __webpack_require__(78503);
const merkle_1 = __webpack_require__(77093);
// Maximum amount of chunks we will upload in the body.
const MAX_CHUNKS_IN_BODY = 1;
// We assume these errors are intermitment and we can try again after a delay:
// - not_joined
// - timeout
// - data_root_not_found (we may have hit a node that just hasn't seen it yet)
// - exceeds_disk_pool_size_limit
// We also try again after any kind of unexpected network errors
// Errors from /chunk we should never try and continue on.
const FATAL_CHUNK_UPLOAD_ERRORS = [
    "invalid_json",
    "chunk_too_big",
    "data_path_too_big",
    "offset_too_big",
    "data_size_too_big",
    "chunk_proof_ratio_not_attractive",
    "invalid_proof",
];
// Amount we will delay on receiving an error response but do want to continue.
const ERROR_DELAY = 1000 * 40;
class TransactionUploader {
    constructor(api, transaction) {
        this.api = api;
        this.chunkIndex = 0;
        this.txPosted = false;
        this.lastRequestTimeEnd = 0;
        this.totalErrors = 0; // Not serialized.
        this.lastResponseStatus = 0;
        this.lastResponseError = "";
        if (!transaction.id) {
            throw new Error(`Transaction is not signed`);
        }
        if (!transaction.chunks) {
            throw new Error(`Transaction chunks not prepared`);
        }
        // Make a copy of transaction, zeroing the data so we can serialize.
        this.data = transaction.data;
        this.transaction = new transaction_1.default(Object.assign({}, transaction, { data: new Uint8Array(0) }));
    }
    get isComplete() {
        return (this.txPosted &&
            this.chunkIndex === this.transaction.chunks.chunks.length);
    }
    get totalChunks() {
        return this.transaction.chunks.chunks.length;
    }
    get uploadedChunks() {
        return this.chunkIndex;
    }
    get pctComplete() {
        return Math.trunc((this.uploadedChunks / this.totalChunks) * 100);
    }
    /**
     * Uploads the next part of the transaction.
     * On the first call this posts the transaction
     * itself and on any subsequent calls uploads the
     * next chunk until it completes.
     */
    async uploadChunk() {
        if (this.isComplete) {
            throw new Error(`Upload is already complete`);
        }
        if (this.lastResponseError !== "") {
            this.totalErrors++;
        }
        else {
            this.totalErrors = 0;
        }
        // We have been trying for about an hour receiving an
        // error every time, so eventually bail.
        if (this.totalErrors === 100) {
            throw new Error(`Unable to complete upload: ${this.lastResponseStatus}: ${this.lastResponseError}`);
        }
        let delay = this.lastResponseError === ""
            ? 0
            : Math.max(this.lastRequestTimeEnd + ERROR_DELAY - Date.now(), ERROR_DELAY);
        if (delay > 0) {
            // Jitter delay bcoz networks, subtract up to 30% from 40 seconds
            delay = delay - delay * Math.random() * 0.3;
            await new Promise((res) => setTimeout(res, delay));
        }
        this.lastResponseError = "";
        if (!this.txPosted) {
            await this.postTransaction();
            return;
        }
        const chunk = this.transaction.getChunk(this.chunkIndex, this.data);
        const chunkOk = await merkle_1.validatePath(this.transaction.chunks.data_root, parseInt(chunk.offset), 0, parseInt(chunk.data_size), ArweaveUtils.b64UrlToBuffer(chunk.data_path));
        if (!chunkOk) {
            throw new Error(`Unable to validate chunk ${this.chunkIndex}`);
        }
        // Catch network errors and turn them into objects with status -1 and an error message.
        const resp = await this.api
            .post(`chunk`, this.transaction.getChunk(this.chunkIndex, this.data))
            .catch((e) => {
            console.error(e.message);
            return { status: -1, data: { error: e.message } };
        });
        this.lastRequestTimeEnd = Date.now();
        this.lastResponseStatus = resp.status;
        if (this.lastResponseStatus == 200) {
            this.chunkIndex++;
        }
        else {
            this.lastResponseError = error_1.getError(resp);
            if (FATAL_CHUNK_UPLOAD_ERRORS.includes(this.lastResponseError)) {
                throw new Error(`Fatal error uploading chunk ${this.chunkIndex}: ${this.lastResponseError}`);
            }
        }
    }
    /**
     * Reconstructs an upload from its serialized state and data.
     * Checks if data matches the expected data_root.
     *
     * @param serialized
     * @param data
     */
    static async fromSerialized(api, serialized, data) {
        if (!serialized ||
            typeof serialized.chunkIndex !== "number" ||
            typeof serialized.transaction !== "object") {
            throw new Error(`Serialized object does not match expected format.`);
        }
        // Everything looks ok, reconstruct the TransactionUpload,
        // prepare the chunks again and verify the data_root matches
        const upload = new TransactionUploader(api, new transaction_1.default(serialized.transaction));
        // Copy the serialized upload information, and data passed in.
        upload.chunkIndex = serialized.chunkIndex;
        upload.lastRequestTimeEnd = serialized.lastRequestTimeEnd;
        upload.lastResponseError = serialized.lastResponseError;
        upload.lastResponseStatus = serialized.lastResponseStatus;
        upload.txPosted = serialized.txPosted;
        upload.data = data;
        await upload.transaction.prepareChunks(data);
        if (upload.transaction.data_root !== serialized.transaction.data_root) {
            throw new Error(`Data mismatch: Uploader doesn't match provided data.`);
        }
        return upload;
    }
    /**
     * Reconstruct an upload from the tx metadata, ie /tx/<id>.
     *
     * @param api
     * @param id
     * @param data
     */
    static async fromTransactionId(api, id) {
        const resp = await api.get(`tx/${id}`);
        if (resp.status !== 200) {
            throw new Error(`Tx ${id} not found: ${resp.status}`);
        }
        const transaction = resp.data;
        transaction.data = new Uint8Array(0);
        const serialized = {
            txPosted: true,
            chunkIndex: 0,
            lastResponseError: "",
            lastRequestTimeEnd: 0,
            lastResponseStatus: 0,
            transaction,
        };
        return serialized;
    }
    toJSON() {
        return {
            chunkIndex: this.chunkIndex,
            transaction: this.transaction,
            lastRequestTimeEnd: this.lastRequestTimeEnd,
            lastResponseStatus: this.lastResponseStatus,
            lastResponseError: this.lastResponseError,
            txPosted: this.txPosted,
        };
    }
    // POST to /tx
    async postTransaction() {
        const uploadInBody = this.totalChunks <= MAX_CHUNKS_IN_BODY;
        if (uploadInBody) {
            // Post the transaction with data.
            this.transaction.data = this.data;
            const resp = await this.api.post(`tx`, this.transaction).catch((e) => {
                console.error(e);
                return { status: -1, data: { error: e.message } };
            });
            this.lastRequestTimeEnd = Date.now();
            this.lastResponseStatus = resp.status;
            this.transaction.data = new Uint8Array(0);
            if (resp.status >= 200 && resp.status < 300) {
                // We are complete.
                this.txPosted = true;
                this.chunkIndex = MAX_CHUNKS_IN_BODY;
                return;
            }
            this.lastResponseError = error_1.getError(resp);
            throw new Error(`Unable to upload transaction: ${resp.status}, ${this.lastResponseError}`);
        }
        // Post the transaction with no data.
        const resp = await this.api.post(`tx`, this.transaction);
        this.lastRequestTimeEnd = Date.now();
        this.lastResponseStatus = resp.status;
        if (!(resp.status >= 200 && resp.status < 300)) {
            this.lastResponseError = error_1.getError(resp);
            throw new Error(`Unable to upload transaction: ${resp.status}, ${this.lastResponseError}`);
        }
        this.txPosted = true;
    }
}
exports.TransactionUploader = TransactionUploader;
//# sourceMappingURL=transaction-uploader.js.map

/***/ }),

/***/ 24129:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tag = void 0;
const ArweaveUtils = __webpack_require__(94509);
const deepHash_1 = __webpack_require__(98884);
const merkle_1 = __webpack_require__(77093);
class BaseObject {
    get(field, options) {
        if (!Object.getOwnPropertyNames(this).includes(field)) {
            throw new Error(`Field "${field}" is not a property of the Arweave Transaction class.`);
        }
        // Handle fields that are Uint8Arrays.
        // To maintain compat we encode them to b64url
        // if decode option is not specificed.
        if (this[field] instanceof Uint8Array) {
            if (options && options.decode && options.string) {
                return ArweaveUtils.bufferToString(this[field]);
            }
            if (options && options.decode && !options.string) {
                return this[field];
            }
            return ArweaveUtils.bufferTob64Url(this[field]);
        }
        if (options && options.decode == true) {
            if (options && options.string) {
                return ArweaveUtils.b64UrlToString(this[field]);
            }
            return ArweaveUtils.b64UrlToBuffer(this[field]);
        }
        return this[field];
    }
}
class Tag extends BaseObject {
    constructor(name, value, decode = false) {
        super();
        this.name = name;
        this.value = value;
    }
}
exports.Tag = Tag;
class Transaction extends BaseObject {
    constructor(attributes = {}) {
        super();
        this.format = 2;
        this.id = "";
        this.last_tx = "";
        this.owner = "";
        this.tags = [];
        this.target = "";
        this.quantity = "0";
        this.data_size = "0";
        this.data = new Uint8Array();
        this.data_root = "";
        this.reward = "0";
        this.signature = "";
        Object.assign(this, attributes);
        // If something passes in a Tx that has been toJSON'ed and back,
        // or where the data was filled in from /tx/data endpoint.
        // data will be b64url encoded, so decode it.
        if (typeof this.data === "string") {
            this.data = ArweaveUtils.b64UrlToBuffer(this.data);
        }
        if (attributes.tags) {
            this.tags = attributes.tags.map((tag) => {
                return new Tag(tag.name, tag.value);
            });
        }
    }
    addTag(name, value) {
        this.tags.push(new Tag(ArweaveUtils.stringToB64Url(name), ArweaveUtils.stringToB64Url(value)));
    }
    toJSON() {
        return {
            format: this.format,
            id: this.id,
            last_tx: this.last_tx,
            owner: this.owner,
            tags: this.tags,
            target: this.target,
            quantity: this.quantity,
            data: ArweaveUtils.bufferTob64Url(this.data),
            data_size: this.data_size,
            data_root: this.data_root,
            data_tree: this.data_tree,
            reward: this.reward,
            signature: this.signature,
        };
    }
    setOwner(owner) {
        this.owner = owner;
    }
    setSignature({ id, owner, tags, signature, }) {
        this.id = id;
        this.owner = owner;
        if (tags)
            this.tags = tags;
        this.signature = signature;
    }
    async prepareChunks(data) {
        // Note: we *do not* use `this.data`, the caller may be
        // operating on a transaction with an zero length data field.
        // This function computes the chunks for the data passed in and
        // assigns the result to this transaction. It should not read the
        // data *from* this transaction.
        if (!this.chunks && data.byteLength > 0) {
            this.chunks = await merkle_1.generateTransactionChunks(data);
            this.data_root = ArweaveUtils.bufferTob64Url(this.chunks.data_root);
        }
        if (!this.chunks && data.byteLength === 0) {
            this.chunks = {
                chunks: [],
                data_root: new Uint8Array(),
                proofs: [],
            };
            this.data_root = "";
        }
    }
    // Returns a chunk in a format suitable for posting to /chunk.
    // Similar to `prepareChunks()` this does not operate `this.data`,
    // instead using the data passed in.
    getChunk(idx, data) {
        if (!this.chunks) {
            throw new Error(`Chunks have not been prepared`);
        }
        const proof = this.chunks.proofs[idx];
        const chunk = this.chunks.chunks[idx];
        return {
            data_root: this.data_root,
            data_size: this.data_size,
            data_path: ArweaveUtils.bufferTob64Url(proof.proof),
            offset: proof.offset.toString(),
            chunk: ArweaveUtils.bufferTob64Url(data.slice(chunk.minByteRange, chunk.maxByteRange)),
        };
    }
    async getSignatureData() {
        switch (this.format) {
            case 1:
                let tags = this.tags.reduce((accumulator, tag) => {
                    return ArweaveUtils.concatBuffers([
                        accumulator,
                        tag.get("name", { decode: true, string: false }),
                        tag.get("value", { decode: true, string: false }),
                    ]);
                }, new Uint8Array());
                return ArweaveUtils.concatBuffers([
                    this.get("owner", { decode: true, string: false }),
                    this.get("target", { decode: true, string: false }),
                    this.get("data", { decode: true, string: false }),
                    ArweaveUtils.stringToBuffer(this.quantity),
                    ArweaveUtils.stringToBuffer(this.reward),
                    this.get("last_tx", { decode: true, string: false }),
                    tags,
                ]);
            case 2:
                await this.prepareChunks(this.data);
                const tagList = this.tags.map((tag) => [
                    tag.get("name", { decode: true, string: false }),
                    tag.get("value", { decode: true, string: false }),
                ]);
                return await deepHash_1.default([
                    ArweaveUtils.stringToBuffer(this.format.toString()),
                    this.get("owner", { decode: true, string: false }),
                    this.get("target", { decode: true, string: false }),
                    ArweaveUtils.stringToBuffer(this.quantity),
                    ArweaveUtils.stringToBuffer(this.reward),
                    this.get("last_tx", { decode: true, string: false }),
                    tagList,
                    ArweaveUtils.stringToBuffer(this.data_size),
                    this.get("data_root", { decode: true, string: false }),
                ]);
            default:
                throw new Error(`Unexpected transaction format: ${this.format}`);
        }
    }
}
exports["default"] = Transaction;
//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 94509:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.b64UrlDecode = exports.b64UrlEncode = exports.bufferTob64Url = exports.bufferTob64 = exports.b64UrlToBuffer = exports.stringToB64Url = exports.stringToBuffer = exports.bufferToString = exports.b64UrlToString = exports.concatBuffers = void 0;
const B64js = __webpack_require__(26446);
function concatBuffers(buffers) {
    let total_length = 0;
    for (let i = 0; i < buffers.length; i++) {
        total_length += buffers[i].byteLength;
    }
    let temp = new Uint8Array(total_length);
    let offset = 0;
    temp.set(new Uint8Array(buffers[0]), offset);
    offset += buffers[0].byteLength;
    for (let i = 1; i < buffers.length; i++) {
        temp.set(new Uint8Array(buffers[i]), offset);
        offset += buffers[i].byteLength;
    }
    return temp;
}
exports.concatBuffers = concatBuffers;
function b64UrlToString(b64UrlString) {
    let buffer = b64UrlToBuffer(b64UrlString);
    // TextEncoder will be available in browsers, but not in node
    if (typeof TextDecoder == "undefined") {
        const TextDecoder = (__webpack_require__(65754).TextDecoder);
        return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
    }
    return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
}
exports.b64UrlToString = b64UrlToString;
function bufferToString(buffer) {
    // TextEncoder will be available in browsers, but not in node
    if (typeof TextDecoder == "undefined") {
        const TextDecoder = (__webpack_require__(65754).TextDecoder);
        return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
    }
    return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
}
exports.bufferToString = bufferToString;
function stringToBuffer(string) {
    // TextEncoder will be available in browsers, but not in node
    if (typeof TextEncoder == "undefined") {
        const TextEncoder = (__webpack_require__(65754).TextEncoder);
        return new TextEncoder().encode(string);
    }
    return new TextEncoder().encode(string);
}
exports.stringToBuffer = stringToBuffer;
function stringToB64Url(string) {
    return bufferTob64Url(stringToBuffer(string));
}
exports.stringToB64Url = stringToB64Url;
function b64UrlToBuffer(b64UrlString) {
    return new Uint8Array(B64js.toByteArray(b64UrlDecode(b64UrlString)));
}
exports.b64UrlToBuffer = b64UrlToBuffer;
function bufferTob64(buffer) {
    return B64js.fromByteArray(new Uint8Array(buffer));
}
exports.bufferTob64 = bufferTob64;
function bufferTob64Url(buffer) {
    return b64UrlEncode(bufferTob64(buffer));
}
exports.bufferTob64Url = bufferTob64Url;
function b64UrlEncode(b64UrlString) {
    return b64UrlString
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/\=/g, "");
}
exports.b64UrlEncode = b64UrlEncode;
function b64UrlDecode(b64UrlString) {
    b64UrlString = b64UrlString.replace(/\-/g, "+").replace(/\_/g, "/");
    let padding;
    b64UrlString.length % 4 == 0
        ? (padding = 0)
        : (padding = 4 - (b64UrlString.length % 4));
    return b64UrlString.concat("=".repeat(padding));
}
exports.b64UrlDecode = b64UrlDecode;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 40372:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Network {
    constructor(api) {
        this.api = api;
    }
    getInfo() {
        return this.api.get(`info`).then((response) => {
            return response.data;
        });
    }
    getPeers() {
        return this.api.get(`peers`).then((response) => {
            return response.data;
        });
    }
}
exports["default"] = Network;
//# sourceMappingURL=network.js.map

/***/ }),

/***/ 91942:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SiloResource = void 0;
const ArweaveUtils = __webpack_require__(94509);
class Silo {
    constructor(api, crypto, transactions) {
        this.api = api;
        this.crypto = crypto;
        this.transactions = transactions;
    }
    async get(siloURI) {
        if (!siloURI) {
            throw new Error(`No Silo URI specified`);
        }
        const resource = await this.parseUri(siloURI);
        const ids = await this.transactions.search("Silo-Name", resource.getAccessKey());
        if (ids.length == 0) {
            throw new Error(`No data could be found for the Silo URI: ${siloURI}`);
        }
        const transaction = await this.transactions.get(ids[0]);
        if (!transaction) {
            throw new Error(`No data could be found for the Silo URI: ${siloURI}`);
        }
        const encrypted = transaction.get("data", { decode: true, string: false });
        return this.crypto.decrypt(encrypted, resource.getEncryptionKey());
    }
    async readTransactionData(transaction, siloURI) {
        if (!siloURI) {
            throw new Error(`No Silo URI specified`);
        }
        const resource = await this.parseUri(siloURI);
        const encrypted = transaction.get("data", { decode: true, string: false });
        return this.crypto.decrypt(encrypted, resource.getEncryptionKey());
    }
    async parseUri(siloURI) {
        const parsed = siloURI.match(/^([a-z0-9-_]+)\.([0-9]+)/i);
        if (!parsed) {
            throw new Error(`Invalid Silo name, must be a name in the format of [a-z0-9]+.[0-9]+, e.g. 'bubble.7'`);
        }
        const siloName = parsed[1];
        const hashIterations = Math.pow(2, parseInt(parsed[2]));
        const digest = await this.hash(ArweaveUtils.stringToBuffer(siloName), hashIterations);
        const accessKey = ArweaveUtils.bufferTob64(digest.slice(0, 15));
        const encryptionkey = await this.hash(digest.slice(16, 31), 1);
        return new SiloResource(siloURI, accessKey, encryptionkey);
    }
    async hash(input, iterations) {
        let digest = await this.crypto.hash(input);
        for (let count = 0; count < iterations - 1; count++) {
            digest = await this.crypto.hash(digest);
        }
        return digest;
    }
}
exports["default"] = Silo;
class SiloResource {
    constructor(uri, accessKey, encryptionKey) {
        this.uri = uri;
        this.accessKey = accessKey;
        this.encryptionKey = encryptionKey;
    }
    getUri() {
        return this.uri;
    }
    getAccessKey() {
        return this.accessKey;
    }
    getEncryptionKey() {
        return this.encryptionKey;
    }
}
exports.SiloResource = SiloResource;
//# sourceMappingURL=silo.js.map

/***/ }),

/***/ 75699:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const error_1 = __webpack_require__(78503);
const transaction_1 = __webpack_require__(24129);
const ArweaveUtils = __webpack_require__(94509);
const transaction_uploader_1 = __webpack_require__(93420);
class Transactions {
    constructor(api, crypto, chunks) {
        this.api = api;
        this.crypto = crypto;
        this.chunks = chunks;
    }
    getTransactionAnchor() {
        return this.api.get(`tx_anchor`).then((response) => {
            return response.data;
        });
    }
    getPrice(byteSize, targetAddress) {
        let endpoint = targetAddress
            ? `price/${byteSize}/${targetAddress}`
            : `price/${byteSize}`;
        return this.api
            .get(endpoint, {
            transformResponse: [
                /**
                 * We need to specify a response transformer to override
                 * the default JSON.parse behaviour, as this causes
                 * winston to be converted to a number and we want to
                 * return it as a winston string.
                 * @param data
                 */
                function (data) {
                    return data;
                },
            ],
        })
            .then((response) => {
            return response.data;
        });
    }
    async get(id) {
        const response = await this.api.get(`tx/${id}`);
        if (response.status == 200) {
            const data_size = parseInt(response.data.data_size);
            if (response.data.format >= 2 &&
                data_size > 0 &&
                data_size <= 1024 * 1024 * 12) {
                const data = await this.getData(id);
                return new transaction_1.default(Object.assign(Object.assign({}, response.data), { data }));
            }
            return new transaction_1.default(Object.assign(Object.assign({}, response.data), { format: response.data.format || 1 }));
        }
        if (response.status == 202) {
            throw new error_1.default("TX_PENDING" /* TX_PENDING */);
        }
        if (response.status == 404) {
            throw new error_1.default("TX_NOT_FOUND" /* TX_NOT_FOUND */);
        }
        if (response.status == 410) {
            throw new error_1.default("TX_FAILED" /* TX_FAILED */);
        }
        throw new error_1.default("TX_INVALID" /* TX_INVALID */);
    }
    fromRaw(attributes) {
        return new transaction_1.default(attributes);
    }
    async search(tagName, tagValue) {
        return this.api
            .post(`arql`, {
            op: "equals",
            expr1: tagName,
            expr2: tagValue,
        })
            .then((response) => {
            if (!response.data) {
                return [];
            }
            return response.data;
        });
    }
    getStatus(id) {
        return this.api.get(`tx/${id}/status`).then((response) => {
            if (response.status == 200) {
                return {
                    status: 200,
                    confirmed: response.data,
                };
            }
            return {
                status: response.status,
                confirmed: null,
            };
        });
    }
    async getData(id, options) {
        // Attempt to download from /txid, fall back to downloading chunks.
        const resp = await this.api.get(`${id}`, { responseType: "arraybuffer" });
        let data = undefined;
        if (resp.status === 200) {
            data = new Uint8Array(resp.data);
        }
        if (resp.status === 400 && error_1.getError(resp) === "tx_data_too_big") {
            data = await this.chunks.downloadChunkedData(id);
        }
        // If we don't have data, throw an exception. Previously we
        // just returned an empty data object.
        if (!data) {
            if (resp.status == 202) {
                throw new error_1.default("TX_PENDING" /* TX_PENDING */);
            }
            if (resp.status == 404) {
                throw new error_1.default("TX_NOT_FOUND" /* TX_NOT_FOUND */);
            }
            if (resp.status == 410) {
                throw new error_1.default("TX_FAILED" /* TX_FAILED */);
            }
            throw new Error(`Unable to get data: ${resp.status} - ${error_1.getError(resp)}`);
        }
        if (options && options.decode && !options.string) {
            return data;
        }
        if (options && options.decode && options.string) {
            return ArweaveUtils.bufferToString(data);
        }
        // Since decode wasn't requested, caller expects b64url encoded data.
        return ArweaveUtils.bufferTob64Url(data);
    }
    async sign(transaction, jwk, options) {
        // @ts-ignore
        if (!jwk && (!window || !window.arweaveWallet)) {
            throw new Error(`A new Arweave transaction must provide the jwk parameter.`);
        }
        else if (!jwk || jwk === "use_wallet") {
            try {
                const existingPermissions = await window.arweaveWallet.getPermissions();
                if (!existingPermissions.includes("SIGN_TRANSACTION"))
                    await window.arweaveWallet.connect(["SIGN_TRANSACTION"]);
            }
            catch (_a) {
                // Permission is already granted
            }
            const signedTransaction = await window.arweaveWallet.sign(transaction, options);
            transaction.setSignature({
                id: signedTransaction.id,
                owner: signedTransaction.owner,
                tags: signedTransaction.tags,
                signature: signedTransaction.signature,
            });
        }
        else {
            transaction.setOwner(jwk.n);
            let dataToSign = await transaction.getSignatureData();
            let rawSignature = await this.crypto.sign(jwk, dataToSign, options);
            let id = await this.crypto.hash(rawSignature);
            transaction.setSignature({
                id: ArweaveUtils.bufferTob64Url(id),
                owner: jwk.n,
                signature: ArweaveUtils.bufferTob64Url(rawSignature),
            });
        }
    }
    async verify(transaction) {
        const signaturePayload = await transaction.getSignatureData();
        /**
         * The transaction ID should be a SHA-256 hash of the raw signature bytes, so this needs
         * to be recalculated from the signature and checked against the transaction ID.
         */
        const rawSignature = transaction.get("signature", {
            decode: true,
            string: false,
        });
        const expectedId = ArweaveUtils.bufferTob64Url(await this.crypto.hash(rawSignature));
        if (transaction.id !== expectedId) {
            throw new Error(`Invalid transaction signature or ID! The transaction ID doesn't match the expected SHA-256 hash of the signature.`);
        }
        /**
         * Now verify the signature is valid and signed by the owner wallet (owner field = originating wallet public key).
         */
        return this.crypto.verify(transaction.owner, signaturePayload, rawSignature);
    }
    async post(transaction) {
        if (typeof transaction === "string") {
            transaction = new transaction_1.default(JSON.parse(transaction));
        }
        else if (typeof transaction.readInt32BE === "function") {
            transaction = new transaction_1.default(JSON.parse(transaction.toString()));
        }
        else if (typeof transaction === "object" &&
            !(transaction instanceof transaction_1.default)) {
            transaction = new transaction_1.default(transaction);
        }
        if (!(transaction instanceof transaction_1.default)) {
            throw new Error(`Must be Transaction object`);
        }
        if (!transaction.chunks) {
            await transaction.prepareChunks(transaction.data);
        }
        const uploader = await this.getUploader(transaction);
        // Emulate existing error & return value behaviour.
        try {
            while (!uploader.isComplete) {
                await uploader.uploadChunk();
            }
        }
        catch (e) {
            if (uploader.lastResponseStatus > 0) {
                return {
                    status: uploader.lastResponseStatus,
                    statusText: uploader.lastResponseError,
                    data: {
                        error: uploader.lastResponseError,
                    },
                };
            }
            throw e;
        }
        return {
            status: 200,
            statusText: "OK",
            data: {},
        };
    }
    /**
     * Gets an uploader than can be used to upload a transaction chunk by chunk, giving progress
     * and the ability to resume.
     *
     * Usage example:
     *
     * ```
     * const uploader = arweave.transactions.getUploader(transaction);
     * while (!uploader.isComplete) {
     *   await uploader.uploadChunk();
     *   console.log(`${uploader.pctComplete}%`);
     * }
     * ```
     *
     * @param upload a Transaction object, a previously save progress object, or a transaction id.
     * @param data the data of the transaction. Required when resuming an upload.
     */
    async getUploader(upload, data) {
        let uploader;
        if (upload instanceof transaction_1.default) {
            uploader = new transaction_uploader_1.TransactionUploader(this.api, upload);
        }
        else {
            if (data instanceof ArrayBuffer) {
                data = new Uint8Array(data);
            }
            if (!data || !(data instanceof Uint8Array)) {
                throw new Error(`Must provide data when resuming upload`);
            }
            if (typeof upload === "string") {
                upload = await transaction_uploader_1.TransactionUploader.fromTransactionId(this.api, upload);
            }
            // upload should be a serialized upload.
            uploader = await transaction_uploader_1.TransactionUploader.fromSerialized(this.api, upload, data);
        }
        return uploader;
    }
    /**
     * Async generator version of uploader
     *
     * Usage example:
     *
     * ```
     * for await (const uploader of arweave.transactions.upload(tx)) {
     *  console.log(`${uploader.pctComplete}%`);
     * }
     * ```
     *
     * @param upload a Transaction object, a previously save uploader, or a transaction id.
     * @param data the data of the transaction. Required when resuming an upload.
     */
    upload(upload, data) {
        return __asyncGenerator(this, arguments, function* upload_1() {
            const uploader = yield __await(this.getUploader(upload, data));
            while (!uploader.isComplete) {
                yield __await(uploader.uploadChunk());
                yield yield __await(uploader);
            }
            return yield __await(uploader);
        });
    }
}
exports["default"] = Transactions;
//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 68179:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ArweaveUtils = __webpack_require__(94509);
class Wallets {
    constructor(api, crypto) {
        this.api = api;
        this.crypto = crypto;
    }
    /**
     * Get the wallet balance for the given address.
     *
     * @param {string} address - The arweave address to get the balance for.
     *
     * @returns {Promise<string>} - Promise which resolves with a winston string balance.
     */
    getBalance(address) {
        return this.api
            .get(`wallet/${address}/balance`, {
            transformResponse: [
                /**
                 * We need to specify a response transformer to override
                 * the default JSON.parse behaviour, as this causes
                 * balances to be converted to a number and we want to
                 * return it as a winston string.
                 * @param data
                 */
                function (data) {
                    return data;
                },
            ],
        })
            .then((response) => {
            return response.data;
        });
    }
    /**
     * Get the last transaction ID for the given wallet address.
     *
     * @param {string} address - The arweave address to get the balance for.
     *
     * @returns {Promise<string>} - Promise which resolves with a winston string balance.
     */
    getLastTransactionID(address) {
        return this.api.get(`wallet/${address}/last_tx`).then((response) => {
            return response.data;
        });
    }
    generate() {
        return this.crypto.generateJWK();
    }
    async jwkToAddress(jwk) {
        if (!jwk || jwk === "use_wallet") {
            return this.getAddress();
        }
        else {
            return this.getAddress(jwk);
        }
    }
    async getAddress(jwk) {
        if (!jwk || jwk === "use_wallet") {
            try {
                // @ts-ignore
                await window.arweaveWallet.connect(["ACCESS_ADDRESS"]);
            }
            catch (_a) {
                // Permission is already granted
            }
            // @ts-ignore
            return window.arweaveWallet.getActiveAddress();
        }
        else {
            return this.ownerToAddress(jwk.n);
        }
    }
    async ownerToAddress(owner) {
        return ArweaveUtils.bufferTob64Url(await this.crypto.hash(ArweaveUtils.b64UrlToBuffer(owner)));
    }
}
exports["default"] = Wallets;
//# sourceMappingURL=wallets.js.map

/***/ })

}]);