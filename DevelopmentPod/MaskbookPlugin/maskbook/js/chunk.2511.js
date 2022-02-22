(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2511,4859],{

/***/ 89723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { MetaMaskInpageProvider } = __webpack_require__(64758)
const PortStream = __webpack_require__(31971)
const { detect } = __webpack_require__(59827)
const browser = detect()
const config = __webpack_require__(60759)

function getMetaMaskId () {
  switch (browser && browser.name) {
    case 'chrome':
      return config.CHROME_ID
    case 'firefox':
      return config.FIREFOX_ID
    default:
      return config.CHROME_ID
  }
}

function createMetaMaskProvider() {
  const currentMetaMaskId = getMetaMaskId()
  const metamaskPort = chrome.runtime.connect(currentMetaMaskId)
  const pluginStream = new PortStream(metamaskPort)
  return new MetaMaskInpageProvider(pluginStream)
}

module.exports = createMetaMaskProvider

/***/ }),

/***/ 31730:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IBlockchainProvider = exports.IBlockchainAuthenticator = exports.IPendingRequests = void 0;
const misc_1 = __webpack_require__(44645);
const provider_1 = __webpack_require__(29887);
class IPendingRequests {
    constructor(storage) {
        this.storage = storage;
    }
}
exports.IPendingRequests = IPendingRequests;
class IBlockchainAuthenticator extends misc_1.IEvents {
    constructor(config) {
        super();
        this.config = config;
    }
}
exports.IBlockchainAuthenticator = IBlockchainAuthenticator;
class IBlockchainProvider extends provider_1.IJsonRpcProvider {
    constructor(connection, config) {
        super(connection);
    }
}
exports.IBlockchainProvider = IBlockchainProvider;
//# sourceMappingURL=blockchain.js.map

/***/ }),

/***/ 2535:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(78951);
tslib_1.__exportStar(__webpack_require__(31730), exports);
tslib_1.__exportStar(__webpack_require__(58199), exports);
tslib_1.__exportStar(__webpack_require__(44645), exports);
tslib_1.__exportStar(__webpack_require__(95802), exports);
tslib_1.__exportStar(__webpack_require__(29887), exports);
tslib_1.__exportStar(__webpack_require__(85952), exports);
tslib_1.__exportStar(__webpack_require__(61722), exports);
tslib_1.__exportStar(__webpack_require__(19289), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 58199:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=jsonrpc.js.map

/***/ }),

/***/ 44645:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IEvents = void 0;
class IEvents {
}
exports.IEvents = IEvents;
//# sourceMappingURL=misc.js.map

/***/ }),

/***/ 95802:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IMultiServiceProvider = void 0;
const provider_1 = __webpack_require__(29887);
class IMultiServiceProvider extends provider_1.IBaseJsonRpcProvider {
    constructor(config) {
        super();
        this.config = config;
    }
}
exports.IMultiServiceProvider = IMultiServiceProvider;
//# sourceMappingURL=multi.js.map

/***/ }),

/***/ 29887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IJsonRpcProvider = exports.IBaseJsonRpcProvider = exports.IJsonRpcConnection = void 0;
const misc_1 = __webpack_require__(44645);
class IJsonRpcConnection extends misc_1.IEvents {
    constructor(opts) {
        super();
    }
}
exports.IJsonRpcConnection = IJsonRpcConnection;
class IBaseJsonRpcProvider extends misc_1.IEvents {
    constructor() {
        super();
    }
}
exports.IBaseJsonRpcProvider = IBaseJsonRpcProvider;
class IJsonRpcProvider extends IBaseJsonRpcProvider {
    constructor(connection) {
        super();
    }
}
exports.IJsonRpcProvider = IJsonRpcProvider;
//# sourceMappingURL=provider.js.map

/***/ }),

/***/ 85952:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IJsonRpcRouter = void 0;
class IJsonRpcRouter {
    constructor(routes) {
        this.routes = routes;
    }
}
exports.IJsonRpcRouter = IJsonRpcRouter;
//# sourceMappingURL=router.js.map

/***/ }),

/***/ 61722:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=schema.js.map

/***/ }),

/***/ 19289:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IJsonRpcValidator = void 0;
class IJsonRpcValidator {
    constructor(schemas) {
        this.schemas = schemas;
    }
}
exports.IJsonRpcValidator = IJsonRpcValidator;
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ 54048:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STANDARD_ERROR_MAP = exports.SERVER_ERROR_CODE_RANGE = exports.RESERVED_ERROR_CODES = exports.SERVER_ERROR = exports.INTERNAL_ERROR = exports.INVALID_PARAMS = exports.METHOD_NOT_FOUND = exports.INVALID_REQUEST = exports.PARSE_ERROR = void 0;
exports.PARSE_ERROR = "PARSE_ERROR";
exports.INVALID_REQUEST = "INVALID_REQUEST";
exports.METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
exports.INVALID_PARAMS = "INVALID_PARAMS";
exports.INTERNAL_ERROR = "INTERNAL_ERROR";
exports.SERVER_ERROR = "SERVER_ERROR";
exports.RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
exports.SERVER_ERROR_CODE_RANGE = [-32000, -32099];
exports.STANDARD_ERROR_MAP = {
    [exports.PARSE_ERROR]: { code: -32700, message: "Parse error" },
    [exports.INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
    [exports.METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
    [exports.INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
    [exports.INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
    [exports.SERVER_ERROR]: { code: -32000, message: "Server error" },
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 52469:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateJsonRpcError = exports.getErrorByCode = exports.getError = exports.isValidErrorCode = exports.isReservedErrorCode = exports.isServerErrorCode = void 0;
const constants_1 = __webpack_require__(54048);
function isServerErrorCode(code) {
    return code <= constants_1.SERVER_ERROR_CODE_RANGE[0] && code >= constants_1.SERVER_ERROR_CODE_RANGE[1];
}
exports.isServerErrorCode = isServerErrorCode;
function isReservedErrorCode(code) {
    return constants_1.RESERVED_ERROR_CODES.includes(code);
}
exports.isReservedErrorCode = isReservedErrorCode;
function isValidErrorCode(code) {
    return isServerErrorCode(code) || isReservedErrorCode(code);
}
exports.isValidErrorCode = isValidErrorCode;
function getError(type) {
    if (!Object.keys(constants_1.STANDARD_ERROR_MAP).includes(type)) {
        return constants_1.STANDARD_ERROR_MAP[constants_1.INTERNAL_ERROR];
    }
    return constants_1.STANDARD_ERROR_MAP[type];
}
exports.getError = getError;
function getErrorByCode(code) {
    const match = Object.values(constants_1.STANDARD_ERROR_MAP).find(e => e.code === code);
    if (!match) {
        return constants_1.STANDARD_ERROR_MAP[constants_1.INTERNAL_ERROR];
    }
    return match;
}
exports.getErrorByCode = getErrorByCode;
function validateJsonRpcError(response) {
    if (typeof response.error.code === "undefined") {
        return { valid: false, error: "Missing code for JSON-RPC error" };
    }
    if (typeof response.error.message === "undefined") {
        return { valid: false, error: "Missing message for JSON-RPC error" };
    }
    if (!isValidErrorCode(response.error.code)) {
        return {
            valid: false,
            error: `Invalid error code for JSON-RPC error code: ${response.error.code}`,
        };
    }
    if (isReservedErrorCode(response.error.code)) {
        const error = getErrorByCode(response.error.code);
        if (error.message !== constants_1.STANDARD_ERROR_MAP[constants_1.INTERNAL_ERROR].message &&
            response.error.message === error.message) {
            return {
                valid: false,
                error: `Invalid error message for JSON-RPC error code: ${response.error.code}`,
            };
        }
    }
    return { valid: true };
}
exports.validateJsonRpcError = validateJsonRpcError;
//# sourceMappingURL=error.js.map

/***/ }),

/***/ 33861:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatErrorMessage = exports.formatJsonRpcError = exports.formatJsonRpcResult = exports.formatJsonRpcRequest = exports.payloadId = void 0;
const error_1 = __webpack_require__(52469);
const constants_1 = __webpack_require__(54048);
function payloadId() {
    const date = Date.now() * Math.pow(10, 3);
    const extra = Math.floor(Math.random() * Math.pow(10, 3));
    return date + extra;
}
exports.payloadId = payloadId;
function formatJsonRpcRequest(method, params, id) {
    return {
        id: id || payloadId(),
        jsonrpc: "2.0",
        method,
        params,
    };
}
exports.formatJsonRpcRequest = formatJsonRpcRequest;
function formatJsonRpcResult(id, result) {
    return {
        id,
        jsonrpc: "2.0",
        result,
    };
}
exports.formatJsonRpcResult = formatJsonRpcResult;
function formatJsonRpcError(id, error) {
    return {
        id,
        jsonrpc: "2.0",
        error: formatErrorMessage(error),
    };
}
exports.formatJsonRpcError = formatJsonRpcError;
function formatErrorMessage(error) {
    if (typeof error === "undefined") {
        return error_1.getError(constants_1.INTERNAL_ERROR);
    }
    if (typeof error === "string") {
        error = Object.assign(Object.assign({}, error_1.getError(constants_1.SERVER_ERROR)), { message: error });
    }
    if (error_1.isReservedErrorCode(error.code)) {
        error = error_1.getErrorByCode(error.code);
    }
    if (!error_1.isServerErrorCode(error.code)) {
        throw new Error("Error code is not in server code range");
    }
    return error;
}
exports.formatErrorMessage = formatErrorMessage;
//# sourceMappingURL=format.js.map

/***/ }),

/***/ 66449:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(78951);
tslib_1.__exportStar(__webpack_require__(54048), exports);
tslib_1.__exportStar(__webpack_require__(52469), exports);
tslib_1.__exportStar(__webpack_require__(33861), exports);
tslib_1.__exportStar(__webpack_require__(41735), exports);
tslib_1.__exportStar(__webpack_require__(91472), exports);
tslib_1.__exportStar(__webpack_require__(94476), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 41735:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidTrailingWildcardRoute = exports.isValidLeadingWildcardRoute = exports.isValidWildcardRoute = exports.isValidDefaultRoute = exports.isValidRoute = void 0;
function isValidRoute(route) {
    if (route.includes("*")) {
        return isValidWildcardRoute(route);
    }
    if (/\W/g.test(route)) {
        return false;
    }
    return true;
}
exports.isValidRoute = isValidRoute;
function isValidDefaultRoute(route) {
    return route === "*";
}
exports.isValidDefaultRoute = isValidDefaultRoute;
function isValidWildcardRoute(route) {
    if (isValidDefaultRoute(route)) {
        return true;
    }
    if (!route.includes("*")) {
        return false;
    }
    if (route.split("*").length !== 2) {
        return false;
    }
    if (route.split("*").filter(x => x.trim() === "").length !== 1) {
        return false;
    }
    return true;
}
exports.isValidWildcardRoute = isValidWildcardRoute;
function isValidLeadingWildcardRoute(route) {
    return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
exports.isValidLeadingWildcardRoute = isValidLeadingWildcardRoute;
function isValidTrailingWildcardRoute(route) {
    return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}
exports.isValidTrailingWildcardRoute = isValidTrailingWildcardRoute;
//# sourceMappingURL=routing.js.map

/***/ }),

/***/ 91472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(78951);
tslib_1.__exportStar(__webpack_require__(2535), exports);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 94476:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isJsonRpcValidationInvalid = exports.isJsonRpcError = exports.isJsonRpcResult = exports.isJsonRpcResponse = exports.isJsonRpcRequest = exports.isJsonRpcPayload = void 0;
function isJsonRpcPayload(payload) {
    return "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
exports.isJsonRpcPayload = isJsonRpcPayload;
function isJsonRpcRequest(payload) {
    return isJsonRpcPayload(payload) && "method" in payload;
}
exports.isJsonRpcRequest = isJsonRpcRequest;
function isJsonRpcResponse(payload) {
    return isJsonRpcPayload(payload) && ("result" in payload || "error" in payload);
}
exports.isJsonRpcResponse = isJsonRpcResponse;
function isJsonRpcResult(payload) {
    return "result" in payload;
}
exports.isJsonRpcResult = isJsonRpcResult;
function isJsonRpcError(payload) {
    return "error" in payload;
}
exports.isJsonRpcError = isJsonRpcError;
function isJsonRpcValidationInvalid(validation) {
    return "error" in validation && validation.valid === false;
}
exports.isJsonRpcValidationInvalid = isJsonRpcValidationInvalid;
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ 12556:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectMultiplex = void 0;
const readable_stream_1 = __webpack_require__(30376);
const end_of_stream_1 = __importDefault(__webpack_require__(59806));
const once_1 = __importDefault(__webpack_require__(36219));
const Substream_1 = __webpack_require__(53132);
const IGNORE_SUBSTREAM = Symbol('IGNORE_SUBSTREAM');
class ObjectMultiplex extends readable_stream_1.Duplex {
    constructor(opts = {}) {
        super(Object.assign(Object.assign({}, opts), { objectMode: true }));
        this._substreams = {};
    }
    createStream(name) {
        // guard stream against destroyed already
        if (this.destroyed) {
            throw new Error(`ObjectMultiplex - parent stream for name "${name}" already destroyed`);
        }
        // guard stream against ended already
        if (this._readableState.ended || this._writableState.ended) {
            throw new Error(`ObjectMultiplex - parent stream for name "${name}" already ended`);
        }
        // validate name
        if (!name) {
            throw new Error('ObjectMultiplex - name must not be empty');
        }
        if (this._substreams[name]) {
            throw new Error(`ObjectMultiplex - Substream for name "${name}" already exists`);
        }
        // create substream
        const substream = new Substream_1.Substream({ parent: this, name });
        this._substreams[name] = substream;
        // listen for parent stream to end
        anyStreamEnd(this, (_error) => {
            return substream.destroy(_error || undefined);
        });
        return substream;
    }
    // ignore streams (dont display orphaned data warning)
    ignoreStream(name) {
        // validate name
        if (!name) {
            throw new Error('ObjectMultiplex - name must not be empty');
        }
        if (this._substreams[name]) {
            throw new Error(`ObjectMultiplex - Substream for name "${name}" already exists`);
        }
        // set
        this._substreams[name] = IGNORE_SUBSTREAM;
    }
    _read() {
        return undefined;
    }
    _write(chunk, _encoding, callback) {
        const { name, data } = chunk;
        if (!name) {
            console.warn(`ObjectMultiplex - malformed chunk without name "${chunk}"`);
            return callback();
        }
        // get corresponding substream
        const substream = this._substreams[name];
        if (!substream) {
            console.warn(`ObjectMultiplex - orphaned data for stream "${name}"`);
            return callback();
        }
        // push data into substream
        if (substream !== IGNORE_SUBSTREAM) {
            substream.push(data);
        }
        return callback();
    }
}
exports.ObjectMultiplex = ObjectMultiplex;
// util
function anyStreamEnd(stream, _cb) {
    const cb = once_1.default(_cb);
    end_of_stream_1.default(stream, { readable: false }, cb);
    end_of_stream_1.default(stream, { writable: false }, cb);
}
//# sourceMappingURL=ObjectMultiplex.js.map

/***/ }),

/***/ 53132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Substream = void 0;
const readable_stream_1 = __webpack_require__(30376);
class Substream extends readable_stream_1.Duplex {
    constructor({ parent, name }) {
        super({ objectMode: true });
        this._parent = parent;
        this._name = name;
    }
    /**
     * Explicitly sets read operations to a no-op.
     */
    _read() {
        return undefined;
    }
    /**
     * Called when data should be written to this writable stream.
     *
     * @param chunk - Arbitrary object to write
     * @param encoding - Encoding to use when writing payload
     * @param callback - Called when writing is complete or an error occurs
     */
    _write(chunk, _encoding, callback) {
        this._parent.push({
            name: this._name,
            data: chunk,
        });
        callback();
    }
}
exports.Substream = Substream;
//# sourceMappingURL=Substream.js.map

/***/ }),

/***/ 83576:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const ObjectMultiplex_1 = __webpack_require__(12556);
module.exports = ObjectMultiplex_1.ObjectMultiplex;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 35247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(47324);
function safeApply(handler, context, args) {
    try {
        Reflect.apply(handler, context, args);
    }
    catch (err) {
        // Throw error after timeout so as not to interrupt the stack
        setTimeout(() => {
            throw err;
        });
    }
}
function arrayClone(arr) {
    const n = arr.length;
    const copy = new Array(n);
    for (let i = 0; i < n; i += 1) {
        copy[i] = arr[i];
    }
    return copy;
}
class SafeEventEmitter extends events_1.EventEmitter {
    emit(type, ...args) {
        let doError = type === 'error';
        const events = this._events;
        if (events !== undefined) {
            doError = doError && events.error === undefined;
        }
        else if (!doError) {
            return false;
        }
        // If there is no 'error' event listener then throw.
        if (doError) {
            let er;
            if (args.length > 0) {
                [er] = args;
            }
            if (er instanceof Error) {
                // Note: The comments on the `throw` lines are intentional, they show
                // up in Node's output if this results in an unhandled exception.
                throw er; // Unhandled 'error' event
            }
            // At least give some kind of context to the user
            const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ''}`);
            err.context = er;
            throw err; // Unhandled 'error' event
        }
        const handler = events[type];
        if (handler === undefined) {
            return false;
        }
        if (typeof handler === 'function') {
            safeApply(handler, this, args);
        }
        else {
            const len = handler.length;
            const listeners = arrayClone(handler);
            for (let i = 0; i < len; i += 1) {
                safeApply(listeners[i], this, args);
            }
        }
        return true;
    }
}
exports["default"] = SafeEventEmitter;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 99711:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
function getBrowerCrypto() {
    return (__webpack_require__.g === null || __webpack_require__.g === void 0 ? void 0 : __webpack_require__.g.crypto) || (__webpack_require__.g === null || __webpack_require__.g === void 0 ? void 0 : __webpack_require__.g.msCrypto) || {};
}
exports.getBrowerCrypto = getBrowerCrypto;
function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
}
exports.getSubtleCrypto = getSubtleCrypto;
function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ 34403:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
function isReactNative() {
    return (typeof document === 'undefined' &&
        typeof navigator !== 'undefined' &&
        navigator.product === 'ReactNative');
}
exports.isReactNative = isReactNative;
function isNode() {
    return (typeof process !== 'undefined' &&
        typeof process.versions !== 'undefined' &&
        typeof process.versions.node !== 'undefined');
}
exports.isNode = isNode;
function isBrowser() {
    return !isReactNative() && !isNode();
}
exports.isBrowser = isBrowser;
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 14635:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
__exportStar(__webpack_require__(99711), exports);
__exportStar(__webpack_require__(34403), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 29615:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const env = __importStar(__webpack_require__(14635));
const shared_1 = __webpack_require__(8538);
function randomBytes(length) {
    const browserCrypto = env.getBrowerCrypto();
    if (typeof browserCrypto.getRandomValues !== 'undefined') {
        return browserCrypto.getRandomValues(new Uint8Array(length));
    }
    return shared_1.fallbackRandomBytes(length);
}
exports.randomBytes = randomBytes;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8538:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fallbackRandomBytes = void 0;
const randombytes_1 = __importDefault(__webpack_require__(98773));
function fallbackRandomBytes(length) {
    return randombytes_1.default(length);
}
exports.fallbackRandomBytes = fallbackRandomBytes;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1461:
/***/ ((module) => {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),

/***/ 86604:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),

/***/ 71986:
/***/ ((module) => {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),

/***/ 93644:
/***/ ((module) => {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),

/***/ 14813:
/***/ ((module) => {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),

/***/ 68964:
/***/ ((module) => {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),

/***/ 88413:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),

/***/ 47759:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getClientMeta = exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = exports.isBrowser = exports.isNode = exports.isMobile = exports.isIOS = exports.detectOS = exports.detectEnv = void 0;
const tslib_1 = __webpack_require__(78951);
const windowMetadata = tslib_1.__importStar(__webpack_require__(37199));
const windowGetters = tslib_1.__importStar(__webpack_require__(88672));
const detect_browser_1 = __webpack_require__(6080);
function detectEnv(userAgent) {
    return detect_browser_1.detect(userAgent);
}
exports.detectEnv = detectEnv;
function detectOS() {
    const env = detectEnv();
    return env && env.os ? env.os : undefined;
}
exports.detectOS = detectOS;
function isIOS() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("ios") : false;
}
exports.isIOS = isIOS;
function isMobile() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("android") || os.toLowerCase().includes("ios") : false;
}
exports.isMobile = isMobile;
function isNode() {
    const env = detectEnv();
    const result = env && env.name ? env.name.toLowerCase() === "node" : false;
    return result;
}
exports.isNode = isNode;
function isBrowser() {
    const result = !isNode() && !!exports.getNavigator();
    return result;
}
exports.isBrowser = isBrowser;
exports.getFromWindow = windowGetters.getFromWindow;
exports.getFromWindowOrThrow = windowGetters.getFromWindowOrThrow;
exports.getDocumentOrThrow = windowGetters.getDocumentOrThrow;
exports.getDocument = windowGetters.getDocument;
exports.getNavigatorOrThrow = windowGetters.getNavigatorOrThrow;
exports.getNavigator = windowGetters.getNavigator;
exports.getLocationOrThrow = windowGetters.getLocationOrThrow;
exports.getLocation = windowGetters.getLocation;
exports.getCryptoOrThrow = windowGetters.getCryptoOrThrow;
exports.getCrypto = windowGetters.getCrypto;
exports.getLocalStorageOrThrow = windowGetters.getLocalStorageOrThrow;
exports.getLocalStorage = windowGetters.getLocalStorage;
function getClientMeta() {
    return windowMetadata.getWindowMetadata();
}
exports.getClientMeta = getClientMeta;
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 58458:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(78951);
tslib_1.__exportStar(__webpack_require__(47759), exports);
tslib_1.__exportStar(__webpack_require__(14951), exports);
tslib_1.__exportStar(__webpack_require__(78307), exports);
tslib_1.__exportStar(__webpack_require__(45316), exports);
tslib_1.__exportStar(__webpack_require__(56069), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 14951:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.safeJsonStringify = exports.safeJsonParse = void 0;
const tslib_1 = __webpack_require__(78951);
const safeJsonUtils = tslib_1.__importStar(__webpack_require__(57765));
exports.safeJsonParse = safeJsonUtils.safeJsonParse;
exports.safeJsonStringify = safeJsonUtils.safeJsonStringify;
//# sourceMappingURL=json.js.map

/***/ }),

/***/ 78307:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeLocal = exports.getLocal = exports.setLocal = void 0;
const json_1 = __webpack_require__(14951);
const browser_1 = __webpack_require__(47759);
function setLocal(key, data) {
    const raw = json_1.safeJsonStringify(data);
    const local = browser_1.getLocalStorage();
    if (local) {
        local.setItem(key, raw);
    }
}
exports.setLocal = setLocal;
function getLocal(key) {
    let data = null;
    let raw = null;
    const local = browser_1.getLocalStorage();
    if (local) {
        raw = local.getItem(key);
    }
    data = json_1.safeJsonParse(raw);
    return data;
}
exports.getLocal = getLocal;
function removeLocal(key) {
    const local = browser_1.getLocalStorage();
    if (local) {
        local.removeItem(key);
    }
}
exports.removeLocal = removeLocal;
//# sourceMappingURL=local.js.map

/***/ }),

/***/ 45316:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMobileLinkRegistry = exports.getMobileRegistryEntry = exports.saveMobileLinkInfo = exports.formatIOSMobile = exports.mobileLinkChoiceKey = void 0;
const local_1 = __webpack_require__(78307);
exports.mobileLinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE";
function formatIOSMobile(uri, entry) {
    const encodedUri = encodeURIComponent(uri);
    return entry.universalLink
        ? `${entry.universalLink}/wc?uri=${encodedUri}`
        : entry.deepLink
            ? `${entry.deepLink}${entry.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}`
            : "";
}
exports.formatIOSMobile = formatIOSMobile;
function saveMobileLinkInfo(data) {
    const focusUri = data.href.split("?")[0];
    local_1.setLocal(exports.mobileLinkChoiceKey, Object.assign(Object.assign({}, data), { href: focusUri }));
}
exports.saveMobileLinkInfo = saveMobileLinkInfo;
function getMobileRegistryEntry(registry, name) {
    return registry.filter((entry) => entry.name.toLowerCase().includes(name.toLowerCase()))[0];
}
exports.getMobileRegistryEntry = getMobileRegistryEntry;
function getMobileLinkRegistry(registry, whitelist) {
    let links = registry;
    if (whitelist && whitelist.length) {
        links = whitelist.map((name) => getMobileRegistryEntry(registry, name));
    }
    return links;
}
exports.getMobileLinkRegistry = getMobileLinkRegistry;
//# sourceMappingURL=mobile.js.map

/***/ }),

/***/ 56069:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatMobileRegistry = exports.formatMobileRegistryEntry = exports.getAppLogoUrl = exports.getDappRegistryUrl = exports.getWalletRegistryUrl = void 0;
const API_URL = "https://registry.walletconnect.org";
function getWalletRegistryUrl() {
    return API_URL + "/data/wallets.json";
}
exports.getWalletRegistryUrl = getWalletRegistryUrl;
function getDappRegistryUrl() {
    return API_URL + "/data/dapps.json";
}
exports.getDappRegistryUrl = getDappRegistryUrl;
function getAppLogoUrl(id) {
    return API_URL + "/logo/sm/" + id + ".jpeg";
}
exports.getAppLogoUrl = getAppLogoUrl;
function formatMobileRegistryEntry(entry) {
    return {
        name: entry.name || "",
        shortName: entry.metadata.shortName || "",
        color: entry.metadata.colors.primary || "",
        logo: entry.id ? getAppLogoUrl(entry.id) : "",
        universalLink: entry.mobile.universal || "",
        deepLink: entry.mobile.native || "",
    };
}
exports.formatMobileRegistryEntry = formatMobileRegistryEntry;
function formatMobileRegistry(registry) {
    return Object.values(registry)
        .filter(entry => !!entry.mobile.universal || !!entry.mobile.native)
        .map(formatMobileRegistryEntry);
}
exports.formatMobileRegistry = formatMobileRegistry;
//# sourceMappingURL=registry.js.map

/***/ }),

/***/ 60487:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const tslib_1 = __webpack_require__(78951);
const core_1 = tslib_1.__importDefault(__webpack_require__(25046));
const cryptoLib = tslib_1.__importStar(__webpack_require__(17424));
class WalletConnect extends core_1.default {
    constructor(connectorOpts, pushServerOpts) {
        super({
            cryptoLib,
            connectorOpts,
            pushServerOpts,
        });
    }
}
exports.Z = WalletConnect;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 17424:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decrypt = exports.encrypt = exports.verifyHmac = exports.generateKey = void 0;
const tslib_1 = __webpack_require__(78951);
const isoCrypto = tslib_1.__importStar(__webpack_require__(17342));
const encUtils = tslib_1.__importStar(__webpack_require__(18147));
const utils_1 = __webpack_require__(51139);
function generateKey(length) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const _length = (length || 256) / 8;
        const bytes = isoCrypto.randomBytes(_length);
        const result = utils_1.convertBufferToArrayBuffer(encUtils.arrayToBuffer(bytes));
        return result;
    });
}
exports.generateKey = generateKey;
function verifyHmac(payload, key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const cipherText = encUtils.hexToArray(payload.data);
        const iv = encUtils.hexToArray(payload.iv);
        const hmac = encUtils.hexToArray(payload.hmac);
        const hmacHex = encUtils.arrayToHex(hmac, false);
        const unsigned = encUtils.concatArrays(cipherText, iv);
        const chmac = yield isoCrypto.hmacSha256Sign(key, unsigned);
        const chmacHex = encUtils.arrayToHex(chmac, false);
        if (encUtils.removeHexPrefix(hmacHex) === encUtils.removeHexPrefix(chmacHex)) {
            return true;
        }
        return false;
    });
}
exports.verifyHmac = verifyHmac;
function encrypt(data, key, providedIv) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const _key = encUtils.bufferToArray(utils_1.convertArrayBufferToBuffer(key));
        const ivArrayBuffer = providedIv || (yield generateKey(128));
        const iv = encUtils.bufferToArray(utils_1.convertArrayBufferToBuffer(ivArrayBuffer));
        const ivHex = encUtils.arrayToHex(iv, false);
        const contentString = JSON.stringify(data);
        const content = encUtils.utf8ToArray(contentString);
        const cipherText = yield isoCrypto.aesCbcEncrypt(iv, _key, content);
        const cipherTextHex = encUtils.arrayToHex(cipherText, false);
        const unsigned = encUtils.concatArrays(cipherText, iv);
        const hmac = yield isoCrypto.hmacSha256Sign(_key, unsigned);
        const hmacHex = encUtils.arrayToHex(hmac, false);
        return {
            data: cipherTextHex,
            hmac: hmacHex,
            iv: ivHex,
        };
    });
}
exports.encrypt = encrypt;
function decrypt(payload, key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const _key = encUtils.bufferToArray(utils_1.convertArrayBufferToBuffer(key));
        if (!_key) {
            throw new Error("Missing key: required for decryption");
        }
        const verified = yield verifyHmac(payload, _key);
        if (!verified) {
            return null;
        }
        const cipherText = encUtils.hexToArray(payload.data);
        const iv = encUtils.hexToArray(payload.iv);
        const buffer = yield isoCrypto.aesCbcDecrypt(iv, _key, cipherText);
        const utf8 = encUtils.arrayToUtf8(buffer);
        let data;
        try {
            data = JSON.parse(utf8);
        }
        catch (error) {
            return null;
        }
        return data;
    });
}
exports.decrypt = decrypt;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 10252:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(78951);
const utils_1 = __webpack_require__(51139);
const network_1 = tslib_1.__importDefault(__webpack_require__(79514));
const WS = typeof __webpack_require__.g.WebSocket !== "undefined" ? __webpack_require__.g.WebSocket : __webpack_require__(83876);
class SocketTransport {
    constructor(opts) {
        this._queue = [];
        this._events = [];
        this._subscriptions = [];
        this._protocol = opts.protocol;
        this._version = opts.version;
        this._url = "";
        this._netMonitor = null;
        this._socket = null;
        this._nextSocket = null;
        this._subscriptions = opts.subscriptions || [];
        this._netMonitor = opts.netMonitor || new network_1.default();
        if (!opts.url || typeof opts.url !== "string") {
            throw new Error("Missing or invalid WebSocket url");
        }
        this._url = opts.url;
        this._netMonitor.on("online", () => this._socketCreate());
    }
    set readyState(value) {
    }
    get readyState() {
        return this._socket ? this._socket.readyState : -1;
    }
    set connecting(value) {
    }
    get connecting() {
        return this.readyState === 0;
    }
    set connected(value) {
    }
    get connected() {
        return this.readyState === 1;
    }
    set closing(value) {
    }
    get closing() {
        return this.readyState === 2;
    }
    set closed(value) {
    }
    get closed() {
        return this.readyState === 3;
    }
    open() {
        this._socketCreate();
    }
    close() {
        this._socketClose();
    }
    send(message, topic, silent) {
        if (!topic || typeof topic !== "string") {
            throw new Error("Missing or invalid topic field");
        }
        this._socketSend({
            topic: topic,
            type: "pub",
            payload: message,
            silent: !!silent,
        });
    }
    subscribe(topic) {
        this._socketSend({
            topic: topic,
            type: "sub",
            payload: "",
            silent: true,
        });
    }
    on(event, callback) {
        this._events.push({ event, callback });
    }
    _socketCreate() {
        if (this._nextSocket) {
            return;
        }
        const url = getWebSocketUrl(this._url, this._protocol, this._version);
        this._nextSocket = new WS(url);
        if (!this._nextSocket) {
            throw new Error("Failed to create socket");
        }
        this._nextSocket.onmessage = (event) => this._socketReceive(event);
        this._nextSocket.onopen = () => this._socketOpen();
        this._nextSocket.onerror = (event) => this._socketError(event);
        this._nextSocket.onclose = () => {
            this._nextSocket = null;
            this._socketCreate();
        };
    }
    _socketOpen() {
        this._socketClose();
        this._socket = this._nextSocket;
        this._nextSocket = null;
        this._queueSubscriptions();
        this._pushQueue();
    }
    _socketClose() {
        if (this._socket) {
            this._socket.onclose = () => {
            };
            this._socket.close();
        }
    }
    _socketSend(socketMessage) {
        const message = JSON.stringify(socketMessage);
        if (this._socket && this._socket.readyState === 1) {
            this._socket.send(message);
        }
        else {
            this._setToQueue(socketMessage);
            this._socketCreate();
        }
    }
    _socketReceive(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let socketMessage;
            try {
                socketMessage = JSON.parse(event.data);
            }
            catch (error) {
                return;
            }
            this._socketSend({
                topic: socketMessage.topic,
                type: "ack",
                payload: "",
                silent: true,
            });
            if (this._socket && this._socket.readyState === 1) {
                const events = this._events.filter(event => event.event === "message");
                if (events && events.length) {
                    events.forEach(event => event.callback(socketMessage));
                }
            }
        });
    }
    _socketError(e) {
        const events = this._events.filter(event => event.event === "error");
        if (events && events.length) {
            events.forEach(event => event.callback(e));
        }
    }
    _queueSubscriptions() {
        const subscriptions = this._subscriptions;
        subscriptions.forEach((topic) => this._queue.push({
            topic: topic,
            type: "sub",
            payload: "",
            silent: true,
        }));
        this._subscriptions = [];
    }
    _setToQueue(socketMessage) {
        this._queue.push(socketMessage);
    }
    _pushQueue() {
        const queue = this._queue;
        queue.forEach((socketMessage) => this._socketSend(socketMessage));
        this._queue = [];
    }
}
function getWebSocketUrl(_url, protocol, version) {
    var _a, _b;
    const url = _url.startsWith("https")
        ? _url.replace("https", "wss")
        : _url.startsWith("http")
            ? _url.replace("http", "ws")
            : _url;
    const splitUrl = url.split("?");
    const params = utils_1.isBrowser()
        ? {
            protocol,
            version,
            env: "browser",
            host: ((_a = utils_1.getLocation()) === null || _a === void 0 ? void 0 : _a.host) || "",
        }
        : {
            protocol,
            version,
            env: ((_b = utils_1.detectEnv()) === null || _b === void 0 ? void 0 : _b.name) || "",
        };
    const queryString = utils_1.appendToQueryString(utils_1.getQueryString(splitUrl[1] || ""), params);
    return splitUrl[0] + "?" + queryString;
}
exports["default"] = SocketTransport;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 79514:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class NetworkMonitor {
    constructor() {
        this._eventEmitters = [];
        if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
            window.addEventListener("online", () => this.trigger("online"));
            window.addEventListener("offline", () => this.trigger("offline"));
        }
    }
    on(event, callback) {
        this._eventEmitters.push({
            event,
            callback,
        });
    }
    trigger(event) {
        let eventEmitters = [];
        if (event) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
        }
        eventEmitters.forEach((eventEmitter) => {
            eventEmitter.callback();
        });
    }
}
exports["default"] = NetworkMonitor;
//# sourceMappingURL=network.js.map

/***/ }),

/***/ 49053:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stateMethods = exports.signingMethods = exports.reservedEvents = void 0;
exports.reservedEvents = [
    "session_request",
    "session_update",
    "exchange_key",
    "connect",
    "disconnect",
    "display_uri",
    "modal_closed",
    "transport_open",
    "transport_close",
    "transport_error",
];
exports.signingMethods = [
    "eth_sendTransaction",
    "eth_signTransaction",
    "eth_sign",
    "eth_signTypedData",
    "eth_signTypedData_v1",
    "eth_signTypedData_v2",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "personal_sign",
];
exports.stateMethods = ["eth_accounts", "eth_chainId", "net_version"];
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 82872:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertNumberToHex = exports.convertNumberToUtf8 = exports.convertNumberToArrayBuffer = exports.convertNumberToBuffer = exports.convertHexToNumber = exports.convertHexToUtf8 = exports.convertHexToArrayBuffer = exports.convertHexToBuffer = exports.convertUtf8ToNumber = exports.convertUtf8ToHex = exports.convertUtf8ToBuffer = exports.convertUtf8ToArrayBuffer = exports.concatBuffers = exports.convertBufferToNumber = exports.convertBufferToHex = exports.convertBufferToUtf8 = exports.convertBufferToArrayBuffer = exports.concatArrayBuffers = exports.convertArrayBufferToNumber = exports.convertArrayBufferToHex = exports.convertArrayBufferToUtf8 = exports.convertArrayBufferToBuffer = void 0;
const tslib_1 = __webpack_require__(78951);
const bn_js_1 = tslib_1.__importDefault(__webpack_require__(28121));
const encUtils = tslib_1.__importStar(__webpack_require__(18147));
function convertArrayBufferToBuffer(arrBuf) {
    return encUtils.arrayToBuffer(new Uint8Array(arrBuf));
}
exports.convertArrayBufferToBuffer = convertArrayBufferToBuffer;
function convertArrayBufferToUtf8(arrBuf) {
    return encUtils.arrayToUtf8(new Uint8Array(arrBuf));
}
exports.convertArrayBufferToUtf8 = convertArrayBufferToUtf8;
function convertArrayBufferToHex(arrBuf, noPrefix) {
    return encUtils.arrayToHex(new Uint8Array(arrBuf), !noPrefix);
}
exports.convertArrayBufferToHex = convertArrayBufferToHex;
function convertArrayBufferToNumber(arrBuf) {
    return encUtils.arrayToNumber(new Uint8Array(arrBuf));
}
exports.convertArrayBufferToNumber = convertArrayBufferToNumber;
function concatArrayBuffers(...args) {
    return encUtils.hexToArray(args.map(b => encUtils.arrayToHex(new Uint8Array(b))).join("")).buffer;
}
exports.concatArrayBuffers = concatArrayBuffers;
function convertBufferToArrayBuffer(buf) {
    return encUtils.bufferToArray(buf).buffer;
}
exports.convertBufferToArrayBuffer = convertBufferToArrayBuffer;
function convertBufferToUtf8(buf) {
    return encUtils.bufferToUtf8(buf);
}
exports.convertBufferToUtf8 = convertBufferToUtf8;
function convertBufferToHex(buf, noPrefix) {
    return encUtils.bufferToHex(buf, !noPrefix);
}
exports.convertBufferToHex = convertBufferToHex;
function convertBufferToNumber(buf) {
    return encUtils.bufferToNumber(buf);
}
exports.convertBufferToNumber = convertBufferToNumber;
function concatBuffers(...args) {
    return encUtils.concatBuffers(...args);
}
exports.concatBuffers = concatBuffers;
function convertUtf8ToArrayBuffer(utf8) {
    return encUtils.utf8ToArray(utf8).buffer;
}
exports.convertUtf8ToArrayBuffer = convertUtf8ToArrayBuffer;
function convertUtf8ToBuffer(utf8) {
    return encUtils.utf8ToBuffer(utf8);
}
exports.convertUtf8ToBuffer = convertUtf8ToBuffer;
function convertUtf8ToHex(utf8, noPrefix) {
    return encUtils.utf8ToHex(utf8, !noPrefix);
}
exports.convertUtf8ToHex = convertUtf8ToHex;
function convertUtf8ToNumber(utf8) {
    return new bn_js_1.default(utf8, 10).toNumber();
}
exports.convertUtf8ToNumber = convertUtf8ToNumber;
function convertHexToBuffer(hex) {
    return encUtils.hexToBuffer(hex);
}
exports.convertHexToBuffer = convertHexToBuffer;
function convertHexToArrayBuffer(hex) {
    return encUtils.hexToArray(hex).buffer;
}
exports.convertHexToArrayBuffer = convertHexToArrayBuffer;
function convertHexToUtf8(hex) {
    return encUtils.hexToUtf8(hex);
}
exports.convertHexToUtf8 = convertHexToUtf8;
function convertHexToNumber(hex) {
    return new bn_js_1.default(encUtils.removeHexPrefix(hex), "hex").toNumber();
}
exports.convertHexToNumber = convertHexToNumber;
function convertNumberToBuffer(num) {
    return encUtils.numberToBuffer(num);
}
exports.convertNumberToBuffer = convertNumberToBuffer;
function convertNumberToArrayBuffer(num) {
    return encUtils.numberToArray(num).buffer;
}
exports.convertNumberToArrayBuffer = convertNumberToArrayBuffer;
function convertNumberToUtf8(num) {
    return new bn_js_1.default(num).toString();
}
exports.convertNumberToUtf8 = convertNumberToUtf8;
function convertNumberToHex(num, noPrefix) {
    const hex = encUtils.removeHexPrefix(encUtils.sanitizeHex(new bn_js_1.default(num).toString(16)));
    return noPrefix ? hex : encUtils.addHexPrefix(hex);
}
exports.convertNumberToHex = convertNumberToHex;
//# sourceMappingURL=encoding.js.map

/***/ }),

/***/ 41198:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseTransactionData = exports.parsePersonalSign = exports.isValidAddress = exports.toChecksumAddress = void 0;
const js_sha3_1 = __webpack_require__(94474);
const encoding_1 = __webpack_require__(82872);
const misc_1 = __webpack_require__(54840);
const validators_1 = __webpack_require__(75863);
const enc_utils_1 = __webpack_require__(18147);
function toChecksumAddress(address) {
    address = enc_utils_1.removeHexPrefix(address.toLowerCase());
    const hash = enc_utils_1.removeHexPrefix(js_sha3_1.keccak_256(encoding_1.convertUtf8ToBuffer(address)));
    let checksum = "";
    for (let i = 0; i < address.length; i++) {
        if (parseInt(hash[i], 16) > 7) {
            checksum += address[i].toUpperCase();
        }
        else {
            checksum += address[i];
        }
    }
    return enc_utils_1.addHexPrefix(checksum);
}
exports.toChecksumAddress = toChecksumAddress;
const isValidAddress = (address) => {
    if (!address) {
        return false;
    }
    else if (address.toLowerCase().substring(0, 2) !== "0x") {
        return false;
    }
    else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        return false;
    }
    else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        return true;
    }
    else {
        return address === toChecksumAddress(address);
    }
};
exports.isValidAddress = isValidAddress;
function parsePersonalSign(params) {
    if (!validators_1.isEmptyArray(params) && !validators_1.isHexString(params[0])) {
        params[0] = encoding_1.convertUtf8ToHex(params[0]);
    }
    return params;
}
exports.parsePersonalSign = parsePersonalSign;
function parseTransactionData(txData) {
    if (typeof txData.from === "undefined" || !exports.isValidAddress(txData.from)) {
        throw new Error(`Transaction object must include a valid 'from' value.`);
    }
    function parseHexValues(value) {
        let result = value;
        if (typeof value === "number" || (typeof value === "string" && !validators_1.isEmptyString(value))) {
            if (!validators_1.isHexString(value)) {
                result = encoding_1.convertNumberToHex(value);
            }
            else if (typeof value === "string") {
                result = misc_1.sanitizeHex(value);
            }
        }
        if (typeof result === "string") {
            result = misc_1.removeHexLeadingZeros(result);
        }
        return result;
    }
    const txDataRPC = {
        from: misc_1.sanitizeHex(txData.from),
        to: typeof txData.to === "undefined" ? "" : misc_1.sanitizeHex(txData.to),
        gasPrice: typeof txData.gasPrice === "undefined" ? "" : parseHexValues(txData.gasPrice),
        gas: typeof txData.gas === "undefined"
            ? typeof txData.gasLimit === "undefined"
                ? ""
                : parseHexValues(txData.gasLimit)
            : parseHexValues(txData.gas),
        value: typeof txData.value === "undefined" ? "" : parseHexValues(txData.value),
        nonce: typeof txData.nonce === "undefined" ? "" : parseHexValues(txData.nonce),
        data: typeof txData.data === "undefined" ? "" : misc_1.sanitizeHex(txData.data) || "0x",
    };
    const prunable = ["gasPrice", "gas", "value", "nonce"];
    Object.keys(txDataRPC).forEach((key) => {
        if (!txDataRPC[key].trim().length && prunable.includes(key)) {
            delete txDataRPC[key];
        }
    });
    return txDataRPC;
}
exports.parseTransactionData = parseTransactionData;
//# sourceMappingURL=ethereum.js.map

/***/ }),

/***/ 51139:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(78951);
tslib_1.__exportStar(__webpack_require__(58458), exports);
tslib_1.__exportStar(__webpack_require__(49053), exports);
tslib_1.__exportStar(__webpack_require__(82872), exports);
tslib_1.__exportStar(__webpack_require__(41198), exports);
tslib_1.__exportStar(__webpack_require__(54840), exports);
tslib_1.__exportStar(__webpack_require__(38616), exports);
tslib_1.__exportStar(__webpack_require__(71636), exports);
tslib_1.__exportStar(__webpack_require__(70135), exports);
tslib_1.__exportStar(__webpack_require__(75863), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 54840:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logDeprecationWarning = exports.uuid = exports.payloadId = exports.removeHexLeadingZeros = exports.removeHexPrefix = exports.addHexPrefix = exports.sanitizeHex = void 0;
const tslib_1 = __webpack_require__(78951);
const encUtils = tslib_1.__importStar(__webpack_require__(18147));
const jsonRpcUtils = tslib_1.__importStar(__webpack_require__(66449));
function sanitizeHex(hex) {
    return encUtils.sanitizeHex(hex);
}
exports.sanitizeHex = sanitizeHex;
function addHexPrefix(hex) {
    return encUtils.addHexPrefix(hex);
}
exports.addHexPrefix = addHexPrefix;
function removeHexPrefix(hex) {
    return encUtils.removeHexPrefix(hex);
}
exports.removeHexPrefix = removeHexPrefix;
function removeHexLeadingZeros(hex) {
    return encUtils.removeHexLeadingZeros(encUtils.addHexPrefix(hex));
}
exports.removeHexLeadingZeros = removeHexLeadingZeros;
exports.payloadId = jsonRpcUtils.payloadId;
function uuid() {
    const result = ((a, b) => {
        for (b = a = ""; a++ < 36; b += (a * 51) & 52 ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16) : "-") {
        }
        return b;
    })();
    return result;
}
exports.uuid = uuid;
function logDeprecationWarning() {
    console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
}
exports.logDeprecationWarning = logDeprecationWarning;
//# sourceMappingURL=misc.js.map

/***/ }),

/***/ 38616:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatRpcError = exports.promisify = void 0;
const tslib_1 = __webpack_require__(78951);
function promisify(originalFn, thisArg) {
    const promisifiedFunction = (...callArgs) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const callback = (err, data) => {
                if (err === null || typeof err === "undefined") {
                    reject(err);
                }
                resolve(data);
            };
            originalFn.apply(thisArg, [...callArgs, callback]);
        });
    });
    return promisifiedFunction;
}
exports.promisify = promisify;
function formatRpcError(error) {
    const message = error.message || "Failed or Rejected Request";
    let code = -32000;
    if (error && !error.code) {
        switch (message) {
            case "Parse error":
                code = -32700;
                break;
            case "Invalid request":
                code = -32600;
                break;
            case "Method not found":
                code = -32601;
                break;
            case "Invalid params":
                code = -32602;
                break;
            case "Internal error":
                code = -32603;
                break;
            default:
                code = -32000;
                break;
        }
    }
    const result = {
        code,
        message,
    };
    return result;
}
exports.formatRpcError = formatRpcError;
//# sourceMappingURL=payload.js.map

/***/ }),

/***/ 71636:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseWalletConnectUri = exports.isWalletConnectSession = void 0;
const url_1 = __webpack_require__(70135);
function isWalletConnectSession(object) {
    return typeof object.bridge !== "undefined";
}
exports.isWalletConnectSession = isWalletConnectSession;
function parseWalletConnectUri(str) {
    const pathStart = str.indexOf(":");
    const pathEnd = str.indexOf("?") !== -1 ? str.indexOf("?") : undefined;
    const protocol = str.substring(0, pathStart);
    const path = str.substring(pathStart + 1, pathEnd);
    function parseRequiredParams(path) {
        const separator = "@";
        const values = path.split(separator);
        const requiredParams = {
            handshakeTopic: values[0],
            version: parseInt(values[1], 10),
        };
        return requiredParams;
    }
    const requiredParams = parseRequiredParams(path);
    const queryString = typeof pathEnd !== "undefined" ? str.substr(pathEnd) : "";
    function parseQueryParams(queryString) {
        const result = url_1.parseQueryString(queryString);
        const parameters = {
            key: result.key || "",
            bridge: result.bridge || "",
        };
        return parameters;
    }
    const queryParams = parseQueryParams(queryString);
    const result = Object.assign(Object.assign({ protocol }, requiredParams), queryParams);
    return result;
}
exports.parseWalletConnectUri = parseWalletConnectUri;
//# sourceMappingURL=session.js.map

/***/ }),

/***/ 70135:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatQueryString = exports.parseQueryString = exports.appendToQueryString = exports.getQueryString = void 0;
const tslib_1 = __webpack_require__(78951);
const queryStringUtils = tslib_1.__importStar(__webpack_require__(83336));
function getQueryString(url) {
    const pathEnd = url.indexOf("?") !== -1 ? url.indexOf("?") : undefined;
    const queryString = typeof pathEnd !== "undefined" ? url.substr(pathEnd) : "";
    return queryString;
}
exports.getQueryString = getQueryString;
function appendToQueryString(queryString, newQueryParams) {
    let queryParams = parseQueryString(queryString);
    queryParams = Object.assign(Object.assign({}, queryParams), newQueryParams);
    queryString = formatQueryString(queryParams);
    return queryString;
}
exports.appendToQueryString = appendToQueryString;
function parseQueryString(queryString) {
    return queryStringUtils.parse(queryString);
}
exports.parseQueryString = parseQueryString;
function formatQueryString(queryParams) {
    return queryStringUtils.stringify(queryParams);
}
exports.formatQueryString = formatQueryString;
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 75863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSilentPayload = exports.isReservedEvent = exports.isInternalEvent = exports.isJsonRpcResponseError = exports.isJsonRpcResponseSuccess = exports.isJsonRpcRequest = exports.isJsonRpcSubscription = exports.isHexString = exports.getEncoding = exports.getType = exports.isArrayBuffer = exports.isTypedArray = exports.isBuffer = exports.isEmptyArray = exports.isEmptyString = void 0;
const tslib_1 = __webpack_require__(78951);
const encUtils = tslib_1.__importStar(__webpack_require__(18147));
const constants_1 = __webpack_require__(49053);
function isEmptyString(value) {
    return value === "" || (typeof value === "string" && value.trim() === "");
}
exports.isEmptyString = isEmptyString;
function isEmptyArray(array) {
    return !(array && array.length);
}
exports.isEmptyArray = isEmptyArray;
function isBuffer(val) {
    return encUtils.isBuffer(val);
}
exports.isBuffer = isBuffer;
function isTypedArray(val) {
    return encUtils.isTypedArray(val);
}
exports.isTypedArray = isTypedArray;
function isArrayBuffer(val) {
    return encUtils.isArrayBuffer(val);
}
exports.isArrayBuffer = isArrayBuffer;
function getType(val) {
    return encUtils.getType(val);
}
exports.getType = getType;
function getEncoding(val) {
    return encUtils.getEncoding(val);
}
exports.getEncoding = getEncoding;
function isHexString(value, length) {
    return encUtils.isHexString(value, length);
}
exports.isHexString = isHexString;
function isJsonRpcSubscription(object) {
    return typeof object.params === "object";
}
exports.isJsonRpcSubscription = isJsonRpcSubscription;
function isJsonRpcRequest(object) {
    return typeof object.method !== "undefined";
}
exports.isJsonRpcRequest = isJsonRpcRequest;
function isJsonRpcResponseSuccess(object) {
    return typeof object.result !== "undefined";
}
exports.isJsonRpcResponseSuccess = isJsonRpcResponseSuccess;
function isJsonRpcResponseError(object) {
    return typeof object.error !== "undefined";
}
exports.isJsonRpcResponseError = isJsonRpcResponseError;
function isInternalEvent(object) {
    return typeof object.event !== "undefined";
}
exports.isInternalEvent = isInternalEvent;
function isReservedEvent(event) {
    return constants_1.reservedEvents.includes(event) || event.startsWith("wc_");
}
exports.isReservedEvent = isReservedEvent;
function isSilentPayload(request) {
    if (request.method.startsWith("wc_")) {
        return true;
    }
    if (constants_1.signingMethods.includes(request.method)) {
        return false;
    }
    return true;
}
exports.isSilentPayload = isSilentPayload;
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ 29186:
/***/ ((module) => {

module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}


/***/ }),

/***/ 70078:
/***/ ((module) => {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};


/***/ }),

/***/ 5060:
/***/ ((module) => {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ 96583:
/***/ ((__unused_webpack_module, exports) => {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(chars){
  "use strict";

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i+1]);
      encoded3 = chars.indexOf(base64[i+2]);
      encoded4 = chars.indexOf(base64[i+3]);

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");


/***/ }),

/***/ 94121:
/***/ ((module) => {

/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
  typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder :
  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : 
  false;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function(chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function(part) {
    bb.append(part);
  });

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
};

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();


/***/ }),

/***/ 75864:
/***/ ((module) => {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ }),

/***/ 24482:
/***/ ((module) => {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ 50173:
/***/ ((module) => {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};

/***/ }),

/***/ 95553:
/***/ ((module, exports, __webpack_require__) => {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(89594);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ 89594:
/***/ ((module, exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(71881);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ 59827:
/***/ ((module) => {

function detect() {
  if (typeof navigator !== 'undefined') {
    return parseUserAgent(navigator.userAgent);
  }

  return getNodeVersion();
}

function detectOS(userAgentString) {
  var rules = getOperatingSystemRules();
  var detected = rules.filter(function (os) {
    return os.rule && os.rule.test(userAgentString);
  })[0];

  return detected ? detected.name : null;
}

function getNodeVersion() {
  var isNode = typeof process !== 'undefined' && "v16.14.0";
  return isNode && {
    name: 'node',
    version: "v16.14.0".slice(1),
    os: process.platform
  };
}

function parseUserAgent(userAgentString) {
  var browsers = getBrowserRules();
  if (!userAgentString) {
    return null;
  }

  var detected = browsers.map(function(browser) {
    var match = browser.rule.exec(userAgentString);
    var version = match && match[1].split(/[._]/).slice(0,3);

    if (version && version.length < 3) {
      version = version.concat(version.length == 1 ? [0, 0] : [0]);
    }

    return match && {
      name: browser.name,
      version: version.join('.')
    };
  }).filter(Boolean)[0] || null;

  if (detected) {
    detected.os = detectOS(userAgentString);
  }

  if (/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(userAgentString)) {
    detected = detected || {};
    detected.bot = true;
  }

  return detected;
}

function getBrowserRules() {
  return buildRules([
    [ 'aol', /AOLShield\/([0-9\._]+)/ ],
    [ 'edge', /Edge\/([0-9\._]+)/ ],
    [ 'yandexbrowser', /YaBrowser\/([0-9\._]+)/ ],
    [ 'vivaldi', /Vivaldi\/([0-9\.]+)/ ],
    [ 'kakaotalk', /KAKAOTALK\s([0-9\.]+)/ ],
    [ 'samsung', /SamsungBrowser\/([0-9\.]+)/ ],
    [ 'chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ],
    [ 'phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/ ],
    [ 'crios', /CriOS\/([0-9\.]+)(:?\s|$)/ ],
    [ 'firefox', /Firefox\/([0-9\.]+)(?:\s|$)/ ],
    [ 'fxios', /FxiOS\/([0-9\.]+)/ ],
    [ 'opera', /Opera\/([0-9\.]+)(?:\s|$)/ ],
    [ 'opera', /OPR\/([0-9\.]+)(:?\s|$)$/ ],
    [ 'ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ],
    [ 'ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ],
    [ 'ie', /MSIE\s(7\.0)/ ],
    [ 'bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/ ],
    [ 'android', /Android\s([0-9\.]+)/ ],
    [ 'ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/ ],
    [ 'safari', /Version\/([0-9\._]+).*Safari/ ],
    [ 'facebook', /FBAV\/([0-9\.]+)/],
    [ 'instagram', /Instagram\s([0-9\.]+)/],
    [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/]
  ]);
}

function getOperatingSystemRules() {
  return buildRules([
    [ 'iOS', /iP(hone|od|ad)/ ],
    [ 'Android OS', /Android/ ],
    [ 'BlackBerry OS', /BlackBerry|BB10/ ],
    [ 'Windows Mobile', /IEMobile/ ],
    [ 'Amazon OS', /Kindle/ ],
    [ 'Windows 3.11', /Win16/ ],
    [ 'Windows 95', /(Windows 95)|(Win95)|(Windows_95)/ ],
    [ 'Windows 98', /(Windows 98)|(Win98)/ ],
    [ 'Windows 2000', /(Windows NT 5.0)|(Windows 2000)/ ],
    [ 'Windows XP', /(Windows NT 5.1)|(Windows XP)/ ],
    [ 'Windows Server 2003', /(Windows NT 5.2)/ ],
    [ 'Windows Vista', /(Windows NT 6.0)/ ],
    [ 'Windows 7', /(Windows NT 6.1)/ ],
    [ 'Windows 8', /(Windows NT 6.2)/ ],
    [ 'Windows 8.1', /(Windows NT 6.3)/ ],
    [ 'Windows 10', /(Windows NT 10.0)/ ],
    [ 'Windows ME', /Windows ME/ ],
    [ 'Open BSD', /OpenBSD/ ],
    [ 'Sun OS', /SunOS/ ],
    [ 'Linux', /(Linux)|(X11)/ ],
    [ 'Mac OS', /(Mac_PowerPC)|(Macintosh)/ ],
    [ 'QNX', /QNX/ ],
    [ 'BeOS', /BeOS/ ],
    [ 'OS/2', /OS\/2/ ],
    [ 'Search Bot', /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/ ]
  ]);
}

function buildRules(ruleTuples) {
  return ruleTuples.map(function(tuple) {
    return {
      name: tuple[0],
      rule: tuple[1]
    };
  });
}

module.exports = {
  detect: detect,
  detectOS: detectOS,
  getNodeVersion: getNodeVersion,
  parseUserAgent: parseUserAgent
};


/***/ }),

/***/ 6080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserInfo": () => (/* binding */ BrowserInfo),
/* harmony export */   "NodeInfo": () => (/* binding */ NodeInfo),
/* harmony export */   "SearchBotDeviceInfo": () => (/* binding */ SearchBotDeviceInfo),
/* harmony export */   "BotInfo": () => (/* binding */ BotInfo),
/* harmony export */   "ReactNativeInfo": () => (/* binding */ ReactNativeInfo),
/* harmony export */   "detect": () => (/* binding */ detect),
/* harmony export */   "browserName": () => (/* binding */ browserName),
/* harmony export */   "parseUserAgent": () => (/* binding */ parseUserAgent),
/* harmony export */   "detectOS": () => (/* binding */ detectOS),
/* harmony export */   "getNodeVersion": () => (/* binding */ getNodeVersion)
/* harmony export */ });
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var BrowserInfo = /** @class */ (function () {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = 'browser';
    }
    return BrowserInfo;
}());

var NodeInfo = /** @class */ (function () {
    function NodeInfo(version) {
        this.version = version;
        this.type = 'node';
        this.name = 'node';
        this.os = process.platform;
    }
    return NodeInfo;
}());

var SearchBotDeviceInfo = /** @class */ (function () {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = 'bot-device';
    }
    return SearchBotDeviceInfo;
}());

var BotInfo = /** @class */ (function () {
    function BotInfo() {
        this.type = 'bot';
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}());

var ReactNativeInfo = /** @class */ (function () {
    function ReactNativeInfo() {
        this.type = 'react-native';
        this.name = 'react-native';
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}());

// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FBAV\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['searchbot', SEARCHBOX_UA_REGEX],
];
var operatingSystemRules = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
];
function detect(userAgent) {
    if (!!userAgent) {
        return parseUserAgent(userAgent);
    }
    if (typeof document === 'undefined' &&
        typeof navigator !== 'undefined' &&
        navigator.product === 'ReactNative') {
        return new ReactNativeInfo();
    }
    if (typeof navigator !== 'undefined') {
        return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return (ua !== '' &&
        userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0], regex = _a[1];
            if (matched) {
                return matched;
            }
            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
        }, false));
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) {
        return null;
    }
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') {
        return new BotInfo();
    }
    var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
            versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
        }
    }
    else {
        versionParts = [];
    }
    var version = versionParts.join('.');
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) {
        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
    }
    return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof process !== 'undefined' && "v16.14.0";
    return isNode ? new NodeInfo("v16.14.0".slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for (var ii = 0; ii < count; ii++) {
        output.push('0');
    }
    return output;
}


/***/ }),

/***/ 18147:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_typedarray_1 = __importDefault(__webpack_require__(48186));
const typedarray_to_buffer_1 = __importDefault(__webpack_require__(10186));
const ENC_HEX = 'hex';
const ENC_UTF8 = 'utf8';
const ENC_BIN = 'binary';
const TYPE_BUFFER = 'buffer';
const TYPE_ARRAY = 'array';
const TYPE_TYPED_ARRAY = 'typed-array';
const TYPE_ARRAY_BUFFER = 'array-buffer';
const STRING_ZERO = '0';
function bufferToArray(buf) {
    return new Uint8Array(buf);
}
exports.bufferToArray = bufferToArray;
function bufferToHex(buf, prefixed = false) {
    const hex = buf.toString(ENC_HEX);
    return prefixed ? addHexPrefix(hex) : hex;
}
exports.bufferToHex = bufferToHex;
function bufferToUtf8(buf) {
    return buf.toString(ENC_UTF8);
}
exports.bufferToUtf8 = bufferToUtf8;
function bufferToNumber(buf) {
    return buf.readUIntBE(0, buf.length);
}
exports.bufferToNumber = bufferToNumber;
function bufferToBinary(buf) {
    return arrayToBinary(bufferToArray(buf));
}
exports.bufferToBinary = bufferToBinary;
function arrayToBuffer(arr) {
    return typedarray_to_buffer_1.default(arr);
}
exports.arrayToBuffer = arrayToBuffer;
function arrayToHex(arr, prefixed = false) {
    return bufferToHex(arrayToBuffer(arr), prefixed);
}
exports.arrayToHex = arrayToHex;
function arrayToUtf8(arr) {
    return bufferToUtf8(arrayToBuffer(arr));
}
exports.arrayToUtf8 = arrayToUtf8;
function arrayToNumber(arr) {
    return bufferToNumber(arrayToBuffer(arr));
}
exports.arrayToNumber = arrayToNumber;
function arrayToBinary(arr) {
    return Array.from(arr)
        .map(numberToBinary)
        .join('');
}
exports.arrayToBinary = arrayToBinary;
function hexToBuffer(hex) {
    return Buffer.from(removeHexPrefix(hex), ENC_HEX);
}
exports.hexToBuffer = hexToBuffer;
function hexToArray(hex) {
    return bufferToArray(hexToBuffer(hex));
}
exports.hexToArray = hexToArray;
function hexToUtf8(hex) {
    return bufferToUtf8(hexToBuffer(hex));
}
exports.hexToUtf8 = hexToUtf8;
function hexToNumber(hex) {
    return arrayToNumber(hexToArray(hex));
}
exports.hexToNumber = hexToNumber;
function hexToBinary(hex) {
    return arrayToBinary(hexToArray(hex));
}
exports.hexToBinary = hexToBinary;
function utf8ToBuffer(utf8) {
    return Buffer.from(utf8, ENC_UTF8);
}
exports.utf8ToBuffer = utf8ToBuffer;
function utf8ToArray(utf8) {
    return bufferToArray(utf8ToBuffer(utf8));
}
exports.utf8ToArray = utf8ToArray;
function utf8ToHex(utf8, prefixed = false) {
    return bufferToHex(utf8ToBuffer(utf8), prefixed);
}
exports.utf8ToHex = utf8ToHex;
function utf8ToNumber(utf8) {
    const num = parseInt(utf8, 10);
    assert(isDefined(num), 'Number can only safely store up to 53 bits');
    return num;
}
exports.utf8ToNumber = utf8ToNumber;
function utf8ToBinary(utf8) {
    return arrayToBinary(utf8ToArray(utf8));
}
exports.utf8ToBinary = utf8ToBinary;
function numberToBuffer(num) {
    return binaryToBuffer(numberToBinary(num));
}
exports.numberToBuffer = numberToBuffer;
function numberToArray(num) {
    return binaryToArray(numberToBinary(num));
}
exports.numberToArray = numberToArray;
function numberToHex(num, prefixed) {
    return binaryToHex(numberToBinary(num), prefixed);
}
exports.numberToHex = numberToHex;
function numberToUtf8(num) {
    return `${num}`;
}
exports.numberToUtf8 = numberToUtf8;
function numberToBinary(num) {
    const bin = (num >>> 0).toString(2);
    return sanitizeBytes(bin);
}
exports.numberToBinary = numberToBinary;
function binaryToBuffer(bin) {
    return arrayToBuffer(binaryToArray(bin));
}
exports.binaryToBuffer = binaryToBuffer;
function binaryToArray(bin) {
    return new Uint8Array(splitBytes(bin).map(x => parseInt(x, 2)));
}
exports.binaryToArray = binaryToArray;
function binaryToHex(bin, prefixed) {
    return arrayToHex(binaryToArray(bin), prefixed);
}
exports.binaryToHex = binaryToHex;
function binaryToUtf8(bin) {
    return arrayToUtf8(binaryToArray(bin));
}
exports.binaryToUtf8 = binaryToUtf8;
function binaryToNumber(bin) {
    return arrayToNumber(binaryToArray(bin));
}
exports.binaryToNumber = binaryToNumber;
function isBinaryString(str) {
    if (typeof str !== 'string' || !new RegExp(/^[01]+$/).test(str)) {
        return false;
    }
    if (str.length % 8 !== 0) {
        return false;
    }
    return true;
}
exports.isBinaryString = isBinaryString;
function isHexString(str, length) {
    if (typeof str !== 'string' || !str.match(/^0x[0-9A-Fa-f]*$/)) {
        return false;
    }
    if (length && str.length !== 2 + 2 * length) {
        return false;
    }
    return true;
}
exports.isHexString = isHexString;
function isBuffer(val) {
    return Buffer.isBuffer(val);
}
exports.isBuffer = isBuffer;
function isTypedArray(val) {
    return is_typedarray_1.default.strict(val) && !isBuffer(val);
}
exports.isTypedArray = isTypedArray;
function isArrayBuffer(val) {
    return (!isTypedArray(val) &&
        !isBuffer(val) &&
        typeof val.byteLength !== 'undefined');
}
exports.isArrayBuffer = isArrayBuffer;
function getType(val) {
    if (isBuffer(val)) {
        return TYPE_BUFFER;
    }
    else if (isTypedArray(val)) {
        return TYPE_TYPED_ARRAY;
    }
    else if (isArrayBuffer(val)) {
        return TYPE_ARRAY_BUFFER;
    }
    else if (Array.isArray(val)) {
        return TYPE_ARRAY;
    }
    else {
        return typeof val;
    }
}
exports.getType = getType;
function getEncoding(str) {
    if (isBinaryString(str)) {
        return ENC_BIN;
    }
    if (isHexString(str)) {
        return ENC_HEX;
    }
    return ENC_UTF8;
}
exports.getEncoding = getEncoding;
function concatBuffers(...args) {
    const result = Buffer.concat(args);
    return result;
}
exports.concatBuffers = concatBuffers;
function concatArrays(...args) {
    let result = [];
    args.forEach(arg => (result = result.concat(Array.from(arg))));
    return new Uint8Array([...result]);
}
exports.concatArrays = concatArrays;
function trimLeft(data, length) {
    const diff = data.length - length;
    if (diff > 0) {
        data = data.slice(diff);
    }
    return data;
}
exports.trimLeft = trimLeft;
function trimRight(data, length) {
    return data.slice(0, length);
}
exports.trimRight = trimRight;
function calcByteLength(length, byteSize = 8) {
    const remainder = length % byteSize;
    return remainder
        ? ((length - remainder) / byteSize) * byteSize + byteSize
        : length;
}
exports.calcByteLength = calcByteLength;
function splitBytes(str, byteSize = 8) {
    const bytes = sanitizeBytes(str).match(new RegExp(`.{${byteSize}}`, 'gi'));
    return Array.from(bytes || []);
}
exports.splitBytes = splitBytes;
function swapBytes(str) {
    return splitBytes(str)
        .map(reverseString)
        .join('');
}
exports.swapBytes = swapBytes;
function swapHex(str) {
    return binaryToHex(swapBytes(hexToBinary(str)));
}
exports.swapHex = swapHex;
function sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {
    return padLeft(str, calcByteLength(str.length, byteSize), padding);
}
exports.sanitizeBytes = sanitizeBytes;
function padLeft(str, length, padding = STRING_ZERO) {
    return padString(str, length, true, padding);
}
exports.padLeft = padLeft;
function padRight(str, length, padding = STRING_ZERO) {
    return padString(str, length, false, padding);
}
exports.padRight = padRight;
function removeHexPrefix(hex) {
    return hex.replace(/^0x/, '');
}
exports.removeHexPrefix = removeHexPrefix;
function addHexPrefix(hex) {
    return hex.startsWith('0x') ? hex : `0x${hex}`;
}
exports.addHexPrefix = addHexPrefix;
function sanitizeHex(hex) {
    hex = removeHexPrefix(hex);
    hex = sanitizeBytes(hex, 2);
    if (hex) {
        hex = addHexPrefix(hex);
    }
    return hex;
}
exports.sanitizeHex = sanitizeHex;
function removeHexLeadingZeros(hex) {
    const prefixed = hex.startsWith('0x');
    hex = removeHexPrefix(hex);
    hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;
    return prefixed ? addHexPrefix(hex) : hex;
}
exports.removeHexLeadingZeros = removeHexLeadingZeros;
function isUndefined(value) {
    return typeof value === 'undefined';
}
function isDefined(value) {
    return !isUndefined(value);
}
function assert(assertion, errorMessage) {
    if (!assertion) {
        throw new Error(errorMessage);
    }
}
function reverseString(str) {
    return str
        .split('')
        .reverse()
        .join('');
}
function padString(str, length, left, padding = STRING_ZERO) {
    const diff = length - str.length;
    let result = str;
    if (diff > 0) {
        const pad = padding.repeat(diff);
        result = left ? pad + str : str + pad;
    }
    return result;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 59806:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_process_dot_nextTick = __webpack_require__(28255);
var once = __webpack_require__(36219);

var noop = function() {};

var isRequest = function(stream) {
	return stream.setHeader && typeof stream.abort === 'function';
};

var isChildProcess = function(stream) {
	return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3
};

var eos = function(stream, opts, callback) {
	if (typeof opts === 'function') return eos(stream, null, opts);
	if (!opts) opts = {};

	callback = once(callback || noop);

	var ws = stream._writableState;
	var rs = stream._readableState;
	var readable = opts.readable || (opts.readable !== false && stream.readable);
	var writable = opts.writable || (opts.writable !== false && stream.writable);
	var cancelled = false;

	var onlegacyfinish = function() {
		if (!stream.writable) onfinish();
	};

	var onfinish = function() {
		writable = false;
		if (!readable) callback.call(stream);
	};

	var onend = function() {
		readable = false;
		if (!writable) callback.call(stream);
	};

	var onexit = function(exitCode) {
		callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
	};

	var onerror = function(err) {
		callback.call(stream, err);
	};

	var onclose = function() {
		__webpack_provided_process_dot_nextTick(onclosenexttick);
	};

	var onclosenexttick = function() {
		if (cancelled) return;
		if (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error('premature close'));
		if (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error('premature close'));
	};

	var onrequest = function() {
		stream.req.on('finish', onfinish);
	};

	if (isRequest(stream)) {
		stream.on('complete', onfinish);
		stream.on('abort', onclose);
		if (stream.req) onrequest();
		else stream.on('request', onrequest);
	} else if (writable && !ws) { // legacy streams
		stream.on('end', onlegacyfinish);
		stream.on('close', onlegacyfinish);
	}

	if (isChildProcess(stream)) stream.on('exit', onexit);

	stream.on('end', onend);
	stream.on('finish', onfinish);
	if (opts.error !== false) stream.on('error', onerror);
	stream.on('close', onclose);

	return function() {
		cancelled = true;
		stream.removeListener('complete', onfinish);
		stream.removeListener('abort', onclose);
		stream.removeListener('request', onrequest);
		if (stream.req) stream.req.removeListener('finish', onfinish);
		stream.removeListener('end', onlegacyfinish);
		stream.removeListener('close', onlegacyfinish);
		stream.removeListener('finish', onfinish);
		stream.removeListener('exit', onexit);
		stream.removeListener('end', onend);
		stream.removeListener('error', onerror);
		stream.removeListener('close', onclose);
	};
};

module.exports = eos;


/***/ }),

/***/ 31971:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
const Duplex = (__webpack_require__(30376).Duplex)
const inherits = (__webpack_require__(83020).inherits)
const noop = function () {}

module.exports = PortDuplexStream

inherits(PortDuplexStream, Duplex)

/**
 * Creates a stream that's both readable and writable.
 * The stream supports arbitrary objects.
 *
 * @class
 * @param {Object} port Remote Port object
 */
function PortDuplexStream (port) {
  Duplex.call(this, {
    objectMode: true,
  })
  this._port = port
  port.onMessage.addListener(this._onMessage.bind(this))
  port.onDisconnect.addListener(this._onDisconnect.bind(this))
}

/**
 * Callback triggered when a message is received from
 * the remote Port associated with this Stream.
 *
 * @private
 * @param {Object} msg - Payload from the onMessage listener of Port
 */
PortDuplexStream.prototype._onMessage = function (msg) {
  if (Buffer.isBuffer(msg)) {
    delete msg._isBuffer
    var data = new Buffer(msg)
    this.push(data)
  } else {
    this.push(msg)
  }
}

/**
 * Callback triggered when the remote Port
 * associated with this Stream disconnects.
 *
 * @private
 */
PortDuplexStream.prototype._onDisconnect = function () {
  this.destroy()
}

/**
 * Explicitly sets read operations to a no-op
 */
PortDuplexStream.prototype._read = noop


/**
 * Called internally when data should be written to
 * this writable stream.
 *
 * @private
 * @param {*} msg Arbitrary object to write
 * @param {string} encoding Encoding to use when writing payload
 * @param {Function} cb Called when writing is complete or an error occurs
 */
PortDuplexStream.prototype._write = function (msg, encoding, cb) {
  try {
    if (Buffer.isBuffer(msg)) {
      var data = msg.toJSON()
      data._isBuffer = true
      this._port.postMessage(data)
    } else {
      this._port.postMessage(msg)
    }
  } catch (err) {
    return cb(new Error('PortDuplexStream - disconnected'))
  }
  cb()
}

/***/ }),

/***/ 47331:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

const stream_1 = __webpack_require__(96704);
module.exports = class PortDuplexStream extends stream_1.Duplex {
    /**
     * @param port - An instance of WebExtensions Runtime.Port. See:
     * {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port}
     */
    constructor(port) {
        super({ objectMode: true });
        this._port = port;
        this._port.onMessage.addListener((msg) => this._onMessage(msg));
        this._port.onDisconnect.addListener(() => this._onDisconnect());
    }
    /**
     * Callback triggered when a message is received from
     * the remote Port associated with this Stream.
     *
     * @param msg - Payload from the onMessage listener of the port
     */
    _onMessage(msg) {
        if (Buffer.isBuffer(msg)) {
            const data = Buffer.from(msg);
            this.push(data);
        }
        else {
            this.push(msg);
        }
    }
    /**
     * Callback triggered when the remote Port associated with this Stream
     * disconnects.
     */
    _onDisconnect() {
        this.destroy();
    }
    /**
     * Explicitly sets read operations to a no-op.
     */
    _read() {
        return undefined;
    }
    /**
     * Called internally when data should be written to this writable stream.
     *
     * @param msg - Arbitrary object to write
     * @param encoding - Encoding to use when writing payload
     * @param cb - Called when writing is complete or an error occurs
     */
    _write(msg, _encoding, cb) {
        try {
            if (Buffer.isBuffer(msg)) {
                const data = msg.toJSON();
                data._isBuffer = true;
                this._port.postMessage(data);
            }
            else {
                this._port.postMessage(msg);
            }
        }
        catch (error) {
            return cb(new Error('PortDuplexStream - disconnected'));
        }
        return cb();
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 87239:
/***/ ((module) => {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ 4329:
/***/ ((module) => {

module.exports = stringify
stringify.default = stringify
stringify.stable = deterministicStringify
stringify.stableStringify = deterministicStringify

var LIMIT_REPLACE_NODE = '[...]'
var CIRCULAR_REPLACE_NODE = '[Circular]'

var arr = []
var replacerStack = []

function defaultOptions () {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

// Regular stringify
function stringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  decirc(obj, '', 0, [], undefined, 0, options)
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(obj, replacer, spacer)
    } else {
      res = JSON.stringify(obj, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function setReplace (replace, val, k, parent) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
  if (propertyDescriptor.get !== undefined) {
    if (propertyDescriptor.configurable) {
      Object.defineProperty(parent, k, { value: replace })
      arr.push([parent, k, val, propertyDescriptor])
    } else {
      replacerStack.push([val, k, replace])
    }
  } else {
    parent[k] = replace
    arr.push([parent, k, val])
  }
}

function decirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      var keys = Object.keys(val)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        decirc(val[key], key, i, stack, val, depth, options)
      }
    }
    stack.pop()
  }
}

// Stable-stringify
function compareFunction (a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

function deterministicStringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  var tmp = deterministicDecirc(obj, '', 0, [], undefined, 0, options) || obj
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(tmp, replacer, spacer)
    } else {
      res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    // Ensure that we restore the object as it was.
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function deterministicDecirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }
    try {
      if (typeof val.toJSON === 'function') {
        return
      }
    } catch (_) {
      return
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {}
      var keys = Object.keys(val).sort(compareFunction)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        deterministicDecirc(val[key], key, i, stack, val, depth, options)
        tmp[key] = val[key]
      }
      if (typeof parent !== 'undefined') {
        arr.push([parent, k, val])
        parent[k] = tmp
      } else {
        return tmp
      }
    }
    stack.pop()
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues (replacer) {
  replacer =
    typeof replacer !== 'undefined'
      ? replacer
      : function (k, v) {
        return v
      }
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i]
        if (part[1] === key && part[0] === val) {
          val = part[2]
          replacerStack.splice(i, 1)
          break
        }
      }
    }
    return replacer.call(this, key, val)
  }
}


/***/ }),

/***/ 34196:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(26430);

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' ||
                        typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' ||
                        typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj)) ||
    (typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
    (withNativeBlob && obj instanceof Blob) ||
    (withNativeFile && obj instanceof File)
  ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}


/***/ }),

/***/ 22500:
/***/ ((module) => {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),

/***/ 81363:
/***/ ((module) => {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ 69546:
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ 57983:
/***/ ((module) => {

"use strict";


const isStream = stream =>
	stream !== null &&
	typeof stream === 'object' &&
	typeof stream.pipe === 'function';

isStream.writable = stream =>
	isStream(stream) &&
	stream.writable !== false &&
	typeof stream._write === 'function' &&
	typeof stream._writableState === 'object';

isStream.readable = stream =>
	isStream(stream) &&
	stream.readable !== false &&
	typeof stream._read === 'function' &&
	typeof stream._readableState === 'object';

isStream.duplex = stream =>
	isStream.writable(stream) &&
	isStream.readable(stream);

isStream.transform = stream =>
	isStream.duplex(stream) &&
	typeof stream._transform === 'function';

module.exports = isStream;


/***/ }),

/***/ 48186:
/***/ ((module) => {

module.exports      = isTypedArray
isTypedArray.strict = isStrictTypedArray
isTypedArray.loose  = isLooseTypedArray

var toString = Object.prototype.toString
var names = {
    '[object Int8Array]': true
  , '[object Int16Array]': true
  , '[object Int32Array]': true
  , '[object Uint8Array]': true
  , '[object Uint8ClampedArray]': true
  , '[object Uint16Array]': true
  , '[object Uint32Array]': true
  , '[object Float32Array]': true
  , '[object Float64Array]': true
}

function isTypedArray(arr) {
  return (
       isStrictTypedArray(arr)
    || isLooseTypedArray(arr)
  )
}

function isStrictTypedArray(arr) {
  return (
       arr instanceof Int8Array
    || arr instanceof Int16Array
    || arr instanceof Int32Array
    || arr instanceof Uint8Array
    || arr instanceof Uint8ClampedArray
    || arr instanceof Uint16Array
    || arr instanceof Uint32Array
    || arr instanceof Float32Array
    || arr instanceof Float64Array
  )
}

function isLooseTypedArray(arr) {
  return names[toString.call(arr)]
}


/***/ }),

/***/ 26430:
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 50938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const readable_stream_1 = __webpack_require__(30376);
/**
 * Takes a JsonRpcEngine and returns a Duplex stream wrapping it.
 *
 * @param opts - Options bag.
 * @param opts.engine - The JsonRpcEngine to wrap in a stream.
 * @returns The stream wrapping the engine.
 */
function createEngineStream(opts) {
    if (!opts || !opts.engine) {
        throw new Error('Missing engine parameter!');
    }
    const { engine } = opts;
    const stream = new readable_stream_1.Duplex({ objectMode: true, read, write });
    // forward notifications
    if (engine.on) {
        engine.on('notification', (message) => {
            stream.push(message);
        });
    }
    return stream;
    function read() {
        return undefined;
    }
    function write(req, _encoding, cb) {
        engine.handle(req, (_err, res) => {
            stream.push(res);
        });
        cb();
    }
}
exports["default"] = createEngineStream;
//# sourceMappingURL=createEngineStream.js.map

/***/ }),

/***/ 62944:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const safe_event_emitter_1 = __importDefault(__webpack_require__(35247));
const readable_stream_1 = __webpack_require__(30376);
/**
 * Creates a JsonRpcEngine middleware with an associated Duplex stream and
 * EventEmitter. The middleware, and by extension stream, assume that middleware
 * parameters are properly formatted. No runtime type checking or validation is
 * performed.
 *
 * @returns The event emitter, middleware, and stream.
 */
function createStreamMiddleware() {
    const idMap = {};
    const stream = new readable_stream_1.Duplex({
        objectMode: true,
        read: readNoop,
        write: processMessage,
    });
    const events = new safe_event_emitter_1.default();
    const middleware = (req, res, next, end) => {
        // write req to stream
        stream.push(req);
        // register request on id map
        idMap[req.id] = { req, res, next, end };
    };
    return { events, middleware, stream };
    function readNoop() {
        return false;
    }
    function processMessage(res, _encoding, cb) {
        let err;
        try {
            const isNotification = !res.id;
            if (isNotification) {
                processNotification(res);
            }
            else {
                processResponse(res);
            }
        }
        catch (_err) {
            err = _err;
        }
        // continue processing stream
        cb(err);
    }
    function processResponse(res) {
        const context = idMap[res.id];
        if (!context) {
            throw new Error(`StreamMiddleware - Unknown response id "${res.id}"`);
        }
        delete idMap[res.id];
        // copy whole res onto original res
        Object.assign(context.res, res);
        // run callback on empty stack,
        // prevent internal stream-handler from catching errors
        setTimeout(context.end);
    }
    function processNotification(res) {
        events.emit('notification', res);
    }
}
exports["default"] = createStreamMiddleware;
//# sourceMappingURL=createStreamMiddleware.js.map

/***/ }),

/***/ 9152:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStreamMiddleware = exports.createEngineStream = void 0;
const createEngineStream_1 = __importDefault(__webpack_require__(50938));
exports.createEngineStream = createEngineStream_1.default;
const createStreamMiddleware_1 = __importDefault(__webpack_require__(62944));
exports.createStreamMiddleware = createStreamMiddleware_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 71881:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ 36219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(42065)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 32386:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),

/***/ 89138:
/***/ ((module) => {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);

    return uri;
};

function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
        names = path.replace(regx, "/").split("/");

    if (path.substr(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.substr(path.length - 1, 1) == '/') {
        names.splice(names.length - 1, 1);
    }

    return names;
}

function queryKey(uri, query) {
    var data = {};

    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });

    return data;
}


/***/ }),

/***/ 17791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var once = __webpack_require__(36219)
var eos = __webpack_require__(59806)
var fs = __webpack_require__(95985) // we only need fs to get the ReadStream and WriteStream prototypes

var noop = function () {}
var ancient = /^v?\.0/.test("v16.14.0")

var isFn = function (fn) {
  return typeof fn === 'function'
}

var isFS = function (stream) {
  if (!ancient) return false // newer node version do not need to care about fs is a special way
  if (!fs) return false // browser
  return (stream instanceof (fs.ReadStream || noop) || stream instanceof (fs.WriteStream || noop)) && isFn(stream.close)
}

var isRequest = function (stream) {
  return stream.setHeader && isFn(stream.abort)
}

var destroyer = function (stream, reading, writing, callback) {
  callback = once(callback)

  var closed = false
  stream.on('close', function () {
    closed = true
  })

  eos(stream, {readable: reading, writable: writing}, function (err) {
    if (err) return callback(err)
    closed = true
    callback()
  })

  var destroyed = false
  return function (err) {
    if (closed) return
    if (destroyed) return
    destroyed = true

    if (isFS(stream)) return stream.close(noop) // use close for fs streams to avoid fd leaks
    if (isRequest(stream)) return stream.abort() // request.destroy just do .end - .abort is what we want

    if (isFn(stream.destroy)) return stream.destroy()

    callback(err || new Error('stream was destroyed'))
  }
}

var call = function (fn) {
  fn()
}

var pipe = function (from, to) {
  return from.pipe(to)
}

var pump = function () {
  var streams = Array.prototype.slice.call(arguments)
  var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop

  if (Array.isArray(streams[0])) streams = streams[0]
  if (streams.length < 2) throw new Error('pump requires two streams per minimum')

  var error
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1
    var writing = i > 0
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err
      if (err) destroys.forEach(call)
      if (reading) return
      destroys.forEach(call)
      callback(error)
    })
  })

  return streams.reduce(pipe)
}

module.exports = pump


/***/ }),

/***/ 83336:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const strictUriEncode = __webpack_require__(30309);
const decodeComponent = __webpack_require__(49048);
const splitOnFirst = __webpack_require__(36897);

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
				const newValue = isArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url, hash] = splitOnFirst(input, '#');

	return Object.assign(
		{
			url: url.split('?')[0] || '',
			query: parse(extract(input), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (input, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(input.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(input.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, input.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(input.url);
	if (input.fragmentIdentifier) {
		hash = `#${encode(input.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};


/***/ }),

/***/ 57765:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function safeJsonParse(value) {
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return value;
    }
}
exports.safeJsonParse = safeJsonParse;
function safeJsonStringify(value) {
    return typeof value === 'string'
        ? value
        : JSON.stringify(value, (key, value) => typeof value === 'undefined' ? null : value);
}
exports.safeJsonStringify = safeJsonStringify;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 27075:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(26430);
var isBuf = __webpack_require__(50736);
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || (typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]');
var withNativeFile = typeof File === 'function' || (typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};


/***/ }),

/***/ 67173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Module dependencies.
 */

var debug = __webpack_require__(95553)('socket.io-parser');
var Emitter = __webpack_require__(24482);
var binary = __webpack_require__(27075);
var isArray = __webpack_require__(26430);
var isBuf = __webpack_require__(50736);

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    var payload = tryStringify(obj.data);
    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch(e){
    return false;
  }
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  }

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var start = i + 1;
    while (str.charAt(++i) !== '-' && i != str.length) {}
    var buf = str.substring(start, i);
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    var start = i + 1;
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      if (i === str.length) break;
    }
    p.nsp = str.substring(start, i);
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    var start = i + 1;
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      if (i === str.length) break;
    }
    p.id = Number(str.substring(start, i + 1));
  }

  // look up json data
  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch(e){
    return false;
  }
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}


/***/ }),

/***/ 50736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

module.exports = isBuf;

var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : (obj.buffer instanceof ArrayBuffer);
};

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (withNativeBuffer && Buffer.isBuffer(obj)) ||
          (withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)));
}


/***/ }),

/***/ 36897:
/***/ ((module) => {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ 30309:
/***/ ((module) => {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 71886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28615);


const iOSFix =  true ? __webpack_require__.e(/* import() */ 426).then(__webpack_require__.bind(__webpack_require__, 40426)).then(({ default: ready  })=>ready()
) : 0;
function createDBAccess(opener) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        _shared__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.mobile_app_suspended.on */ .ql.events.mobile_app_suspended.on(clean);
        setInterval(clean, /** 1 min */ 1000 * 60);
    }
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>db = undefined
            , {
                once: true
            });
        }
        db = undefined;
    }
    return async ()=>{
        await iOSFix;
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground);
        if (db) {
            try {
                // try if the db still open
                const t = db.transaction([
                    db.objectStoreNames[0]
                ], 'readonly', {});
                t.commit();
                return db;
            } catch  {
                clean();
            }
        }
        db = await opener();
        db.addEventListener('close', clean, {
            once: true
        });
        db.addEventListener('error', clean, {
            once: true
        });
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        _shared__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.mobile_app_suspended.on */ .ql.events.mobile_app_suspended.on(clean);
        setInterval(clean, /** 1 min */ 1000 * 60);
    }
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>pendingOpen = db = undefined
            , {
                once: true
            });
        }
        pendingOpen = db = undefined;
    }
    let pendingOpen;
    async function open() {
        await iOSFix;
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground);
        if ((db === null || db === void 0 ? void 0 : db.version) === latestVersion) return db;
        let currentVersion = firstVersionThatRequiresAsyncUpgrade;
        let lastVersionData = undefined;
        while(currentVersion < latestVersion){
            try {
                db = await opener(currentVersion, lastVersionData);
                // if the open success, the stored version is small or eq than currentTryOpenVersion
                // let's call the prepare function to do all the async jobs
                lastVersionData = await asyncUpgradePrepare(db);
            } catch (error) {
                if (currentVersion >= latestVersion) throw error;
            // if the stored database version is bigger than the currentTryOpenVersion
            // It will fail and we just move to next version
            }
            currentVersion += 1;
            db === null || db === void 0 ? void 0 : db.close();
            db = undefined;
        }
        db = await opener(currentVersion, lastVersionData);
        db.addEventListener('close', (e)=>db = undefined
        , {
            once: true
        });
        if (!db) throw new Error('Invalid state');
        return db;
    }
    return ()=>{
        // Share a Promise to prevent async upgrade for multiple times
        if (pendingOpen) return pendingOpen;
        const promise = pendingOpen = open();
        promise.catch(()=>pendingOpen = undefined
        );
        return promise;
    };
}
function createTransaction(db, mode) {
    // It must be a high order function to infer the type of UsedStoreName correctly.
    return (...storeNames)=>{
        return db.transaction(storeNames, mode);
    };
}


/***/ }),

/***/ 4103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ hasNativeAPI),
  "Nz": () => (/* binding */ nativeAPI)
});

// UNUSED EXPORTS: sharedNativeAPI

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(73302);
;// CONCATENATED MODULE: ./shared/native-rpc/iOS.channel.ts
// cspell:disable-next-line
const key = 'maskbookjsonrpc';
class iOSWebkitChannel {
    on(cb) {
        this.listener.add(cb);
        return ()=>void this.listener.delete(cb)
        ;
    }
    send(data) {
        globalThis.webkit.messageHandlers[key].postMessage(data);
    }
    constructor(){
        this.listener = new Set();
        document.addEventListener(key, (e)=>{
            const detail = e.detail;
            for (const f of this.listener){
                try {
                    f(detail);
                } catch  {}
            }
        });
    }
}

;// CONCATENATED MODULE: ./shared/native-rpc/index.ts



// This module won't be used in Web. Let it not effecting HMR.
if (false) {}
const hasNativeAPI = "app" === 'app';
let nativeAPI = undefined;
let sharedNativeAPI = (/* unused pure expression or super */ null && (undefined));
if (true) {
    const options = {
        key: 'native',
        parameterStructures: 'by-name'
    };
    if (true) {
        const api = sharedNativeAPI = (0,full/* AsyncCall */.LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 1990).then(__webpack_require__.bind(__webpack_require__, 31990)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new iOSWebkitChannel()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 45380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X2": () => (/* reexport */ createPluginDatabase)
});

// UNUSED EXPORTS: createPluginDBAccess, pluginDataHasValidKeyPath, toStore

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.0/node_modules/idb/with-async-ittr.js
var with_async_ittr = __webpack_require__(20326);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts
var openDB = __webpack_require__(71886);
;// CONCATENATED MODULE: ./src/database/Plugin/base.ts


// #endregion
const db = (0,openDB/* createDBAccess */.Z_)(()=>{
    return (0,with_async_ittr/* openDB */.X3)('maskbook-plugin-data', 2, {
        async upgrade (db1, oldVersion, newVersion, transaction) {
            if (oldVersion < 1) db1.createObjectStore('PluginStore');
            if (oldVersion < 2) {
                const data = await transaction.objectStore('PluginStore').getAll();
                db1.deleteObjectStore('PluginStore');
                const os = db1.createObjectStore('PluginStore', {
                    keyPath: [
                        'plugin_id',
                        'value.type',
                        'value.id'
                    ]
                });
                // a compound index by "rec.plugin_id" + "rec.value.type"
                os.createIndex('type', [
                    'plugin_id',
                    'value.type'
                ]);
                for (const each of data){
                    if (!each.plugin_id) continue;
                    if (!pluginDataHasValidKeyPath(each.value)) continue;
                    Reflect.deleteProperty(each, 'type');
                    Reflect.deleteProperty(each, 'record_id');
                    await os.add(each);
                }
            }
        }
    });
});
// cause key path error in "add" will cause transaction fail, we need to check them first
function pluginDataHasValidKeyPath(value) {
    try {
        if (typeof value !== 'object' || value === null) return false;
        const id = Reflect.get(value, 'id');
        const type = Reflect.get(value, 'type');
        if (typeof id !== 'string' && typeof id !== 'number') return false;
        if (typeof type !== 'string' && typeof type !== 'number') return false;
        return true;
    } catch  {
        return false;
    }
}
const createPluginDBAccess = db;
function toStore(plugin_id, value) {
    return {
        plugin_id,
        value
    };
}

;// CONCATENATED MODULE: ./src/database/Plugin/wrap-plugin-database.ts

/**
 * Avoid calling it directly.
 *
 * You should get the instance from WorkerContext when the plugin is initialized.
 *
 * ```ts
 * let storage: Plugin.Worker.Storage<T | T2> | null = null
 * const worker: Plugin.Worker.Definition = {
 *     ...base,
 *     init(signal, context) {
 *         storage = context.getDatabaseStorage()
 *         // get it here, instance of calling this function directly.
 *     },
 * }
 * ```
 */ function createPluginDatabase(plugin_id, signal) {
    let livingTransaction = undefined;
    let ended = false;
    signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', ()=>{
        // give some extra time after the plugin shutdown to store data.
        setTimeout(()=>ended = true
        , 1500);
    });
    function key(data) {
        return IDBKeyRange.only([
            plugin_id,
            data.type,
            data.id
        ]);
    }
    function ensureAlive() {
        if (ended) throw new Error(`[@masknet/plugin-infra] Storage instance for ${plugin_id} has been expired.`);
    }
    return {
        async get (type, id) {
            const t = await c('r');
            const data = await t.store.get(key({
                type,
                id
            }));
            if (!data) return undefined;
            return data.value;
        },
        async has (type, id) {
            const t = await c('r');
            const count = await t.store.count(key({
                type,
                id
            }));
            return count > 0;
        },
        async add (data) {
            const t = await c('rw');
            if (!pluginDataHasValidKeyPath(data)) throw new TypeError("Data doesn't have a valid key path");
            if (await t.store.get(key(data))) await t.store.put(toStore(plugin_id, data));
            else await t.store.add(toStore(plugin_id, data));
            t.commit();
        },
        async remove (type, id) {
            const t = await c('rw');
            await t.store.delete(key({
                type,
                id
            }));
            t.commit();
        },
        async *iterate (type) {
            const db = await c('r');
            const cursor = await db.objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                const roCursor = {
                    value: each.value.value
                };
                yield roCursor;
            }
        },
        async *iterate_mutate (type) {
            const cursor = await (await c('rw')).objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                const rwCursor = {
                    value: each.value.value,
                    delete: ()=>each.delete()
                    ,
                    update: async (data)=>{
                        await each.update(toStore(plugin_id, data));
                    }
                };
                yield rwCursor;
            }
        }
    };
    async function c(usage) {
        var ref;
        ensureAlive();
        if (usage === 'rw' && ((ref = livingTransaction) === null || ref === void 0 ? void 0 : ref.mode) === 'readonly') invalidateTransaction();
        try {
            await (livingTransaction === null || livingTransaction === void 0 ? void 0 : livingTransaction.store.openCursor());
        } catch  {
            invalidateTransaction();
        }
        if (livingTransaction === undefined) {
            const db = await createPluginDBAccess();
            const tx = db.transaction('PluginStore', usage === 'r' ? 'readonly' : 'readwrite');
            livingTransaction = tx;
            // Oops, workaround for https://bugs.webkit.org/show_bug.cgi?id=216769 or https://github.com/jakearchibald/idb/issues/201
            try {
                await tx.store.openCursor();
            } catch  {
                livingTransaction = db.transaction('PluginStore', usage === 'r' ? 'readonly' : 'readwrite');
                return livingTransaction;
            }
            return tx;
        }
        return livingTransaction;
    }
    function invalidateTransaction() {
        livingTransaction = undefined;
    }
}

;// CONCATENATED MODULE: ./src/database/Plugin/index.ts




/***/ }),

/***/ 98065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addEthereumChain": () => (/* reexport */ addEthereumChain),
  "call": () => (/* reexport */ call),
  "cancelRequest": () => (/* reexport */ cancelRequest),
  "cancelWalletConnect": () => (/* reexport */ cancelWalletConnect),
  "commitNonce": () => (/* reexport */ commitNonce),
  "confirmRequest": () => (/* reexport */ confirmRequest),
  "connectCustomNetwork": () => (/* reexport */ connectCustomNetwork),
  "connectFortmatic": () => (/* reexport */ connectFortmatic),
  "connectInjected": () => (/* reexport */ connectInjected),
  "connectMaskWallet": () => (/* reexport */ connectMaskWallet),
  "connectMetaMask": () => (/* reexport */ connectMetaMask),
  "connectWalletConnect": () => (/* reexport */ connectWalletConnect),
  "createConnectionURI": () => (/* reexport */ createConnectionURI),
  "createWalletConnect": () => (/* reexport */ createWalletConnect),
  "disconnectFortmatic": () => (/* reexport */ disconnectFortmatic),
  "estimateGas": () => (/* reexport */ estimateGas),
  "fetchERC20TokensFromTokenLists": () => (/* reexport */ fetchERC20TokensFromTokenLists),
  "getAccounts": () => (/* reexport */ getAccounts),
  "getBalance": () => (/* reexport */ getBalance),
  "getBlockNumber": () => (/* reexport */ getBlockNumber),
  "getChainId": () => (/* reexport */ getChainId),
  "getCode": () => (/* reexport */ getCode),
  "getComputedPayload": () => (/* reexport */ getComputedPayload),
  "getGasPrice": () => (/* reexport */ getGasPrice),
  "getNativeTokenPrice": () => (/* reexport */ getNativeTokenPrice),
  "getNonce": () => (/* reexport */ getNonce),
  "getPastLogs": () => (/* reexport */ getPastLogs),
  "getPendingTransactions": () => (/* reexport */ getPendingTransactions),
  "getSendTransactionComputedPayload": () => (/* reexport */ getSendTransactionComputedPayload),
  "getTokenPrices": () => (/* reexport */ getTokenPrices),
  "getTransactionByHash": () => (/* reexport */ getTransactionByHash),
  "getTransactionCount": () => (/* reexport */ getTransactionCount),
  "getTransactionReceipt": () => (/* reexport */ getTransactionReceipt),
  "notifyInjectedEvent": () => (/* reexport */ notifyInjectedEvent),
  "personalSign": () => (/* reexport */ personalSign),
  "rejectRequest": () => (/* reexport */ rejectRequest),
  "replaceRequest": () => (/* reexport */ replaceRequest),
  "request": () => (/* reexport */ request),
  "resetAllNonce": () => (/* reexport */ resetAllNonce),
  "resetNonce": () => (/* reexport */ resetNonce),
  "sendTransaction": () => (/* reexport */ sendTransaction),
  "setNonce": () => (/* reexport */ setNonce),
  "sign": () => (/* reexport */ sign),
  "signTransaction": () => (/* reexport */ signTransaction),
  "switchEthereumChain": () => (/* reexport */ switchEthereumChain),
  "typedDataSign": () => (/* reexport */ typedDataSign)
});

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(12705);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ethereumjs-util@7.1.0/node_modules/ethereumjs-util/dist.browser/index.js
var dist_browser = __webpack_require__(98257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_8495c1478c7f1d196df61d0bdcd91148/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(84176);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(77031);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
;// CONCATENATED MODULE: ../web3-shared/evm/utils/payload.ts


function getPayloadChainId(payload) {
    switch(payload.method){
        // here are methods that contracts may emit
        case types/* EthereumMethodType.ETH_CALL */.W8.ETH_CALL:
        case types/* EthereumMethodType.ETH_ESTIMATE_GAS */.W8.ETH_ESTIMATE_GAS:
        case types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION:
            const config = (0,head/* default */.Z)(payload.params);
            return typeof (config === null || config === void 0 ? void 0 : config.chainId) === 'string' ? Number.parseInt(config.chainId, 16) || undefined : undefined;
        default:
            return;
    }
}
function getPayloadConfig(payload) {
    switch(payload.method){
        case types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION:
            {
                const [config] = payload.params;
                return config;
            }
        case types/* EthereumMethodType.MASK_REPLACE_TRANSACTION */.W8.MASK_REPLACE_TRANSACTION:
            {
                const [, config] = payload.params;
                return config;
            }
        default:
            return;
    }
}
function getPayloadHash(payload) {
    switch(payload.method){
        case types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION:
            {
                return '';
            }
        case types/* EthereumMethodType.MASK_REPLACE_TRANSACTION */.W8.MASK_REPLACE_TRANSACTION:
            {
                const [hash] = payload.params;
                return hash;
            }
        default:
            return '';
    }
}
function getPayloadNonce(payload) {
    const config = getPayloadConfig(payload);
    return config === null || config === void 0 ? void 0 : config.nonce;
}
function getTransactionHash(response) {
    if (!response) return '';
    const hash = response === null || response === void 0 ? void 0 : response.result;
    if (typeof hash !== 'string') return '';
    if (!/^0x([\dA-Fa-f]{64})$/.test(hash)) return '';
    return hash;
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var token = __webpack_require__(28389);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumServices/providers/MetaMask.ts
var MetaMask = __webpack_require__(33555);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumServices/providers/Injected.ts
var Injected = __webpack_require__(12298);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumServices/providers/WalletConnect.ts
var WalletConnect = __webpack_require__(44608);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumServices/providers/Fortmatic.ts
var Fortmatic = __webpack_require__(22339);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/index.ts + 35 modules
var services = __webpack_require__(86518);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumServices/web3.ts
var EthereumServices_web3 = __webpack_require__(30447);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/network.ts



async function getChainId(overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_CHAIN_ID */.W8.ETH_CHAIN_ID
    }, overrides);
}
async function getAccounts(overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_ACCOUNTS */.W8.ETH_ACCOUNTS
    }, overrides);
}
async function getCode(address, overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_GET_CODE */.W8.ETH_GET_CODE,
        params: [
            address,
            'latest'
        ]
    }, overrides);
}
async function getGasPrice(overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_GAS_PRICE */.W8.ETH_GAS_PRICE
    }, overrides);
}
async function getBlockNumber(overrides) {
    const blockNumber = await request({
        method: types/* EthereumMethodType.ETH_BLOCK_NUMBER */.W8.ETH_BLOCK_NUMBER
    }, overrides);
    return Number.parseInt(blockNumber, 16) || 0;
}
async function getBalance(address, overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_GET_BALANCE */.W8.ETH_GET_BALANCE,
        params: [
            address,
            'latest'
        ]
    }, overrides);
}
async function getTransactionByHash(hash, overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_GET_TRANSACTION_BY_HASH */.W8.ETH_GET_TRANSACTION_BY_HASH,
        params: [
            hash
        ]
    }, overrides);
}
async function getTransactionReceipt(hash, overrides) {
    return request({
        method: types/* EthereumMethodType.MASK_GET_TRANSACTION_RECEIPT */.W8.MASK_GET_TRANSACTION_RECEIPT,
        params: [
            hash
        ]
    }, overrides);
}
async function getTransactionCount(address, overrides) {
    const count = await request({
        method: types/* EthereumMethodType.ETH_GET_TRANSACTION_COUNT */.W8.ETH_GET_TRANSACTION_COUNT,
        params: [
            address,
            'latest'
        ]
    }, overrides);
    return Number.parseInt(count, 16) || 0;
}
async function getPendingTransactions(address, overrides) {
    const filterId = await request({
        method: types/* EthereumMethodType.ETH_NEW_PENDING_TRANSACTION_FILTER */.W8.ETH_NEW_PENDING_TRANSACTION_FILTER,
        params: []
    }, overrides);
    const transactions = await request({
        method: types/* EthereumMethodType.ETH_GET_FILTER_CHANGES */.W8.ETH_GET_FILTER_CHANGES,
        params: [
            filterId
        ]
    }, overrides);
    return transactions;
}
async function call(config, overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_CALL */.W8.ETH_CALL,
        params: [
            config,
            'latest'
        ]
    }, overrides);
}
async function estimateGas(config, overrides) {
    const gas = await request({
        method: types/* EthereumMethodType.ETH_ESTIMATE_GAS */.W8.ETH_ESTIMATE_GAS,
        params: [
            config
        ]
    }, overrides);
    return Number.parseInt(gas, 16) || 0;
}
async function sign(dataToSign, address, overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_SIGN */.W8.ETH_SIGN,
        params: [
            dataToSign,
            address
        ]
    }, overrides);
}
async function personalSign(dataToSign, address, password, overrides) {
    return request({
        method: types/* EthereumMethodType.PERSONAL_SIGN */.W8.PERSONAL_SIGN,
        params: [
            dataToSign,
            address,
            password
        ].filter((x)=>typeof x !== 'undefined'
        )
    }, overrides);
}
async function typedDataSign(address, dataToSign, overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_SIGN_TYPED_DATA */.W8.ETH_SIGN_TYPED_DATA,
        params: [
            address,
            dataToSign
        ]
    }, overrides);
}
async function addEthereumChain(chainDetailed, address, overrides) {
    return request({
        method: types/* EthereumMethodType.WALLET_ADD_ETHEREUM_CHAIN */.W8.WALLET_ADD_ETHEREUM_CHAIN,
        params: [
            chainDetailed,
            address
        ].filter(Boolean)
    }, overrides);
}
async function switchEthereumChain(chainId, overrides) {
    return request({
        method: types/* EthereumMethodType.WALLET_SWITCH_ETHEREUM_CHAIN */.W8.WALLET_SWITCH_ETHEREUM_CHAIN,
        params: [
            {
                chainId: (0,lib.toHex)(chainId)
            }, 
        ]
    }, overrides);
}
async function signTransaction(config, overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_SIGN_TRANSACTION */.W8.ETH_SIGN_TRANSACTION,
        params: [
            config
        ]
    }, overrides);
}
async function sendTransaction(config, overrides) {
    return request({
        method: types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION,
        params: [
            config
        ]
    }, overrides);
}
async function getPastLogs(config, overrides) {
    return new Promise((resolve, reject)=>request({
            method: types/* EthereumMethodType.ETH_GET_LOGS */.W8.ETH_GET_LOGS,
            params: [
                config
            ]
        }, overrides).then((result)=>resolve(result)
        ).catch(()=>resolve([])
        )
    );
}

;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/nonce.ts




class NonceManager {
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }
    continue() {
        var ref;
        if (!this.locked) (ref = this.tasks.shift()) === null || ref === void 0 ? void 0 : ref();
    }
    async getRemoteNonce() {
        return new Promise(async (resolve, reject)=>{
            const callback = (e, nonce)=>{
                if (e) reject(e);
                else resolve(nonce !== null && nonce !== void 0 ? nonce : 0);
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    callback(null, // Only mask wallets need to use Nonce
                    await getTransactionCount(this.address, {
                        providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet,
                        chainId: settings/* currentMaskWalletChainIdSettings.value */.DT.value
                    }));
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    async setLocalNonce(nonce) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e)=>{
                if (e) reject(e);
                else resolve();
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                this.lock();
                this.nonce = nonce;
                callback(null);
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    async getNonce() {
        const nonce = this.nonce === NonceManager.INITIAL_NONCE ? await this.getRemoteNonce() : this.nonce;
        await this.setLocalNonce(nonce);
        return nonce;
    }
    async setNonce(nonce) {
        await this.setLocalNonce(nonce);
    }
    async resetNonce() {
        const nonce = await this.getRemoteNonce();
        await this.setLocalNonce(nonce);
    }
    constructor(address){
        this.address = address;
        this.nonce = NonceManager.INITIAL_NONCE;
        this.locked = false;
        this.tasks = [];
    }
}
NonceManager.INITIAL_NONCE = -1;
const cache = new Map();
/**
 * Get current available nonce, call commitNonce() after the transaction succeed
 * @param address the account address
 */ function getNonce(address_) {
    const address = dist.EthereumAddress.checksumAddress(address_);
    if (!cache.has(address)) cache.set(address, new NonceManager(address));
    return cache.get(address).getNonce();
}
/**
 * Commit to a new nonce only call when transaction succeed
 * @param address the account address
 */ async function commitNonce(address_) {
    const address = dist.EthereumAddress.checksumAddress(address_);
    if (!cache.has(address)) cache.set(address, new NonceManager(address));
    return setNonce(address, await cache.get(address).getNonce() + 1);
}
/**
 * Set a new nonce regardless the old one
 * @param address the account address
 * @param nonce the new nonce
 */ function setNonce(address_, nonce) {
    const address = dist.EthereumAddress.checksumAddress(address_);
    if (!cache.has(address)) cache.set(address, new NonceManager(address));
    return cache.get(address).setNonce(nonce);
}
/**
 * Sync local nonce to remote one (depend on your current node)
 * @param address the account address
 */ function resetNonce(address_) {
    const address = dist.EthereumAddress.checksumAddress(address_);
    if (!cache.has(address)) cache.set(address, new NonceManager(address));
    return cache.get(address).resetNonce();
}
/**
 * Sync all nonces
 */ async function resetAllNonce() {
    await Promise.all(Array.from(cache.values()).map((m)=>m.resetNonce()
    ));
}

// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared = __webpack_require__(28615);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(4103);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-eth-abi@1.5.2/node_modules/web3-eth-abi/lib/index.js
var web3_eth_abi_lib = __webpack_require__(24278);
// EXTERNAL MODULE: ../web3-shared/evm/constants/specific.ts
var specific = __webpack_require__(27387);
// EXTERNAL MODULE: ../web3-contracts/abis/BulkCheckout.json
var BulkCheckout = __webpack_require__(29389);
// EXTERNAL MODULE: ../web3-contracts/abis/ITO2.json
var ITO2 = __webpack_require__(47744);
;// CONCATENATED MODULE: ../web3-contracts/abis/NftHappyRedPacket.json
const NftHappyRedPacket_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_token_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total_tokens","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"packet_number","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"token_ids","type":"uint256[]"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint16","name":"remaining_balance","type":"uint16"},{"indexed":false,"internalType":"uint256[]","name":"remaining_token_ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"bit_status","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"pkt_id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint16","name":"balance","type":"uint16"},{"internalType":"uint256","name":"total_pkts","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_id","type":"uint256"},{"internalType":"uint256","name":"bit_status","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_claimed_id","outputs":[{"internalType":"uint256","name":"claimed_token_id","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_erc721_remain_ids","outputs":[{"internalType":"uint256","name":"bit_status","type":"uint256"},{"internalType":"uint256[]","name":"erc721_token_ids","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"erc721_token_id_list","type":"uint256[]"},{"internalType":"address","name":"token_addr","type":"address"}],"name":"check_ownership","outputs":[{"internalType":"bool","name":"is_your_token","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"pkt_id","type":"bytes32"},{"internalType":"bytes","name":"signedMsg","type":"bytes"},{"internalType":"address payable","name":"recipient","type":"address"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_public_key","type":"address"},{"internalType":"uint64","name":"_duration","type":"uint64"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256[]","name":"_erc721_token_ids","type":"uint256[]"}],"name":"create_red_packet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-contracts/abis/HappyRedPacketV4.json
var HappyRedPacketV4 = __webpack_require__(5261);
// EXTERNAL MODULE: ../web3-contracts/abis/ERC20.json
var ERC20 = __webpack_require__(4350);
// EXTERNAL MODULE: ../web3-contracts/abis/RouterV2.json
var RouterV2 = __webpack_require__(50092);
// EXTERNAL MODULE: ../web3-contracts/abis/SwapRouter.json
var SwapRouter = __webpack_require__(75517);
// EXTERNAL MODULE: ../web3-contracts/abis/MaskBox.json
var MaskBox = __webpack_require__(7744);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/rpc/abi.ts

// built in abis








// fix the type error
const coder = web3_eth_abi_lib;
const ABI_MAP = new Map();
function readABI(sig) {
    if (!sig) return;
    return ABI_MAP.get(sig);
}
// #region construct built-in abis
function constructABI(abi) {
    abi.forEach((x)=>{
        if (x.type !== 'function') return;
        if (x.stateMutability === 'pure' || x.stateMutability === 'view') return;
        const { name , inputs =[]  } = x;
        if (!name) return;
        try {
            const sig = coder.encodeFunctionSignature(`${x.name}(${inputs.map((y)=>y.type
            ).join(',')})`);
            if (ABI_MAP.has(sig)) console.warn(`The signature of ${`${x.name}(${inputs.map((y)=>y.type
            ).join(',')})`} already exists.`);
            var ref;
            ABI_MAP.set(sig, {
                name,
                parameters: (ref = inputs.map((y)=>({
                        name: y.name,
                        type: y.type
                    })
                )) !== null && ref !== void 0 ? ref : []
            });
        } catch (error) {
            console.log('Failed to encode function signature from below ABI:');
            console.log(x);
        }
    });
}
constructABI(BulkCheckout) // donate gitcoin grants
;
constructABI(ITO2);
constructABI(NftHappyRedPacket_namespaceObject);
constructABI(HappyRedPacketV4);
constructABI(MaskBox);
constructABI(ERC20);
constructABI(RouterV2) // uniswap V2 like
;
constructABI(SwapRouter) // uniswap V3 like
 // #endregion
;

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var src = __webpack_require__(52522);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/rpc/index.ts





// fix the type error
const rpc_coder = web3_eth_abi_lib;
function isEmptyHex(hex) {
    return !hex || [
        '0x',
        '0x0'
    ].includes(hex);
}
function getData(tx) {
    const { data  } = tx;
    if (!data) return;
    if (isEmptyHex(data)) return;
    if (!data.startsWith('0x')) return `0x${data}`;
    return data;
}
function getTo(tx) {
    const { to  } = tx;
    if (!to) return specific/* ZERO_ADDRESS */.r_;
    if (isEmptyHex(to)) return specific/* ZERO_ADDRESS */.r_;
    return to;
}
function getFunctionSignature(tx) {
    const data = getData(tx);
    return data === null || data === void 0 ? void 0 : data.slice(0, 10);
}
function getFunctionParameters(tx) {
    const data = getData(tx);
    return data === null || data === void 0 ? void 0 : data.slice(10);
}
async function getComputedPayload(payload) {
    switch(payload.method){
        // sign
        case types/* EthereumMethodType.ETH_SIGN */.W8.ETH_SIGN:
        case types/* EthereumMethodType.PERSONAL_SIGN */.W8.PERSONAL_SIGN:
            return {
                type: types/* EthereumRpcType.SIGN */.Wv.SIGN,
                to: payload.params[1],
                data: payload.params[0]
            };
        case types/* EthereumMethodType.ETH_SIGN_TYPED_DATA */.W8.ETH_SIGN_TYPED_DATA:
            return {
                type: types/* EthereumRpcType.SIGN_TYPED_DATA */.Wv.SIGN_TYPED_DATA,
                to: payload.params[0],
                data: payload.params[1]
            };
        // decrypt
        case types/* EthereumMethodType.ETH_DECRYPT */.W8.ETH_DECRYPT:
            return {
                type: types/* EthereumRpcType.ETH_DECRYPT */.Wv.ETH_DECRYPT,
                to: payload.params[1],
                secret: payload.params[0]
            };
        case types/* EthereumMethodType.ETH_GET_ENCRYPTION_PUBLIC_KEY */.W8.ETH_GET_ENCRYPTION_PUBLIC_KEY:
            return {
                type: types/* EthereumRpcType.ETH_GET_ENCRYPTION_PUBLIC_KEY */.Wv.ETH_GET_ENCRYPTION_PUBLIC_KEY,
                account: payload.params[0]
            };
        // asset
        case types/* EthereumMethodType.WATCH_ASSET */.W8.WATCH_ASSET:
        case types/* EthereumMethodType.WATCH_ASSET_LEGACY */.W8.WATCH_ASSET_LEGACY:
            return {
                type: types/* EthereumRpcType.WATCH_ASSET */.Wv.WATCH_ASSET,
                asset: payload.params[0]
            };
        // wallet
        case types/* EthereumMethodType.WALLET_SWITCH_ETHEREUM_CHAIN */.W8.WALLET_SWITCH_ETHEREUM_CHAIN:
            return {
                type: types/* EthereumRpcType.WALLET_SWITCH_ETHEREUM_CHAIN */.Wv.WALLET_SWITCH_ETHEREUM_CHAIN,
                chain: (0,chainDetailed/* getChainDetailedCAIP */.EX)(Number.parseInt(payload.params[0], 16))
            };
        case types/* EthereumMethodType.WALLET_ADD_ETHEREUM_CHAIN */.W8.WALLET_ADD_ETHEREUM_CHAIN:
            return {
                type: types/* EthereumRpcType.WALLET_SWITCH_ETHEREUM_CHAIN */.Wv.WALLET_SWITCH_ETHEREUM_CHAIN,
                chain: payload.params[0]
            };
        // contract interaction
        case types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION:
            return getSendTransactionComputedPayload(payload);
        default:
            return;
    }
}
async function getSendTransactionComputedPayload(payload) {
    const config = payload.method === types/* EthereumMethodType.MASK_REPLACE_TRANSACTION */.W8.MASK_REPLACE_TRANSACTION ? payload.params[1] : payload.params[0];
    var ref;
    const from = (ref = config.from) !== null && ref !== void 0 ? ref : '';
    var ref1;
    const value = (ref1 = config.value) !== null && ref1 !== void 0 ? ref1 : '0x0';
    const data = getData(config);
    const to = getTo(config);
    const signature = getFunctionSignature(config);
    const parameters = getFunctionParameters(config);
    if (data) {
        // contract interaction
        const abi = readABI(signature);
        if (abi) {
            try {
                return {
                    type: types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION,
                    name: abi.name,
                    parameters: rpc_coder.decodeParameters(abi.parameters, parameters !== null && parameters !== void 0 ? parameters : ''),
                    _tx: config
                };
            } catch  {
            // do nothing
            }
        }
        // contract deployment
        if ((0,address/* isZeroAddress */.uO)(to)) {
            return {
                type: types/* EthereumRpcType.CONTRACT_DEPLOYMENT */.Wv.CONTRACT_DEPLOYMENT,
                code: data,
                _tx: config
            };
        }
    }
    if (to) {
        let code = '';
        try {
            code = await getCode(to);
        } catch  {
            code = '';
        }
        // cancel tx
        if ((0,address/* isSameAddress */.Wr)(from, to) && (0,src/* isZero */.Fr)(value)) {
            return {
                type: types/* EthereumRpcType.CANCEL */.Wv.CANCEL,
                _tx: config
            };
        }
        // send ether
        if (isEmptyHex(code)) {
            return {
                type: types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER,
                _tx: config
            };
        } else {
            return {
                type: types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION,
                _tx: config
            };
        }
    }
    return;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var isNil = __webpack_require__(29330);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(26218);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 3 modules
var locales_legacy = __webpack_require__(90795);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/error.ts



function getInternalError(error, response, fallback) {
    {
        const rpcError = error;
        if (rpcError instanceof Error && rpcError.message) return rpcError;
        if (rpcError && typeof rpcError.message === 'string') return new Error(rpcError.message);
        if (rpcError && typeof rpcError === 'string') return new Error(rpcError);
    }
    {
        const responseError = response === null || response === void 0 ? void 0 : response.error;
        if (responseError instanceof Error) return getError(responseError, null, fallback);
        if (responseError && typeof responseError.message === 'string') return getError(responseError, null, fallback);
        if (responseError && typeof responseError === 'string') return new Error(responseError);
    }
    if (fallback) return new Error(fallback);
    return new Error('Unknown Error.');
}
function hasError(error, response) {
    return !(0,isNil/* default */.Z)(error) || !(0,isNil/* default */.Z)(response === null || response === void 0 ? void 0 : response.error);
}
function getError(error, response, fallback) {
    const internalError = getInternalError(error, response, fallback);
    const internalErrorMessage = (()=>{
        const { code , message  } = internalError;
        if (message.includes(`"code":${Wallet_src/* JSON_RPC_ERROR_CODE.INTERNAL_ERROR */.xv.INTERNAL_ERROR}`)) return locales_legacy/* i18n.t */.a.t('plugin_wallet_transaction_server_error');
        if (message.includes('User denied message signature.')) return locales_legacy/* i18n.t */.a.t('plugin_wallet_cancel_sign');
        if (message.includes('User denied transaction signature.')) return locales_legacy/* i18n.t */.a.t('plugin_wallet_transaction_rejected');
        if (message.includes('transaction underpriced')) return locales_legacy/* i18n.t */.a.t('plugin_wallet_transaction_underpriced');
        if (typeof code === 'number' && (code === Wallet_src/* JSON_RPC_ERROR_CODE.INTERNAL_ERROR */.xv.INTERNAL_ERROR || code <= Wallet_src/* JSON_RPC_ERROR_CODE.SERVER_ERROR_RANGE_START */.xv.SERVER_ERROR_RANGE_START && code >= Wallet_src/* JSON_RPC_ERROR_CODE.SERVER_ERROR_RANGE_END */.xv.SERVER_ERROR_RANGE_END)) {
            return locales_legacy/* i18n.t */.a.t('plugin_wallet_transaction_server_error');
        }
        return internalError.message;
    })();
    return new Error(internalErrorMessage);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@metamask+eth-sig-util@4.0.0/node_modules/@metamask/eth-sig-util/dist/index.js
var eth_sig_util_dist = __webpack_require__(66058);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/send.ts



















function isReadOnlyMethod(payload) {
    return [
        types/* EthereumMethodType.ETH_GET_CODE */.W8.ETH_GET_CODE,
        types/* EthereumMethodType.ETH_GAS_PRICE */.W8.ETH_GAS_PRICE,
        types/* EthereumMethodType.ETH_BLOCK_NUMBER */.W8.ETH_BLOCK_NUMBER,
        types/* EthereumMethodType.ETH_GET_BALANCE */.W8.ETH_GET_BALANCE,
        types/* EthereumMethodType.ETH_GET_TRANSACTION_BY_HASH */.W8.ETH_GET_TRANSACTION_BY_HASH,
        types/* EthereumMethodType.ETH_GET_TRANSACTION_RECEIPT */.W8.ETH_GET_TRANSACTION_RECEIPT,
        types/* EthereumMethodType.MASK_GET_TRANSACTION_RECEIPT */.W8.MASK_GET_TRANSACTION_RECEIPT,
        types/* EthereumMethodType.ETH_GET_TRANSACTION_COUNT */.W8.ETH_GET_TRANSACTION_COUNT,
        types/* EthereumMethodType.ETH_ESTIMATE_GAS */.W8.ETH_ESTIMATE_GAS,
        types/* EthereumMethodType.ETH_CALL */.W8.ETH_CALL,
        types/* EthereumMethodType.ETH_GET_LOGS */.W8.ETH_GET_LOGS, 
    ].includes(payload.method);
}
function isSignableMethod(payload) {
    return [
        types/* EthereumMethodType.ETH_SIGN */.W8.ETH_SIGN,
        types/* EthereumMethodType.PERSONAL_SIGN */.W8.PERSONAL_SIGN,
        types/* EthereumMethodType.ETH_SIGN_TRANSACTION */.W8.ETH_SIGN_TRANSACTION,
        types/* EthereumMethodType.MASK_REPLACE_TRANSACTION */.W8.MASK_REPLACE_TRANSACTION,
        types/* EthereumMethodType.ETH_SIGN_TYPED_DATA */.W8.ETH_SIGN_TYPED_DATA,
        types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION, 
    ].includes(payload.method);
}
function send_getTo(computedPayload) {
    if (!computedPayload) return '';
    switch(computedPayload.type){
        case types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER:
            var ref;
            return (ref = computedPayload._tx.to) !== null && ref !== void 0 ? ref : '';
        case types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION:
            var ref1;
            var _name, ref2;
            if ([
                'transfer',
                'transferFrom'
            ].includes((_name = computedPayload.name) !== null && _name !== void 0 ? _name : '')) return (ref2 = (ref1 = computedPayload.parameters) === null || ref1 === void 0 ? void 0 : ref1.to) !== null && ref2 !== void 0 ? ref2 : '';
    }
    return '';
}
async function handleTransferTransaction(chainId, payload) {
    if (payload.method !== types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION) return;
    const computedPayload = await getSendTransactionComputedPayload(payload);
    if (!computedPayload) return;
    var ref;
    const from = (ref = computedPayload._tx.from) !== null && ref !== void 0 ? ref : '';
    const to = send_getTo(computedPayload);
    if (!(0,address/* isSameAddress */.Wr)(from, to) && !(0,address/* isZeroAddress */.uO)(to)) await messages/* WalletRPC.addAddress */.V.addAddress(chainId, to);
}
function handleRecentTransaction(chainId, account, payload, response) {
    const hash = getTransactionHash(response);
    if (!hash) return;
    messages/* WalletRPC.watchTransaction */.V.watchTransaction(chainId, hash, payload);
    messages/* WalletRPC.addRecentTransaction */.V.addRecentTransaction(chainId, account, hash, payload);
}
function handleReplaceRecentTransaction(chainId, previousHash, account, payload, response) {
    const hash = getTransactionHash(response);
    if (!hash) return;
    messages/* WalletRPC.watchTransaction */.V.watchTransaction(chainId, hash, payload);
    messages/* WalletRPC.replaceRecentTransaction */.V.replaceRecentTransaction(chainId, account, previousHash, hash, payload);
}
async function handleNonce(chainId, account, error, response) {
    if (chainId !== settings/* currentChainIdSettings.value */.wU.value) return;
    const error_ = error !== null && error !== void 0 ? error : response === null || response === void 0 ? void 0 : response.error;
    var ref;
    const message = (ref = error_ === null || error_ === void 0 ? void 0 : error_.message) !== null && ref !== void 0 ? ref : '';
    if (!dist.EthereumAddress.isValid(account)) return;
    // nonce too low
    // nonce too high
    // transaction too old
    const isGeneralErrorNonce = /\bnonce|transaction\b/im.test(message) && /\b(low|high|old)\b/im.test(message);
    const isAuroraErrorNonce = message.includes('ERR_INCORRECT_NONCE');
    if (isGeneralErrorNonce || isAuroraErrorNonce) resetNonce(account);
    else if (!error_) commitNonce(account);
}
/**
 * This API is only used internally. Please use requestSend instead in order to share the same payload id globally.
 * @param payload
 * @param callback
 * @param sendOverrides
 */ async function INTERNAL_send(payload, callback, { chainId =settings/* currentChainIdSettings.value */.wU.value , account =settings/* currentAccountSettings.value */.aK.value , providerType =settings/* currentProviderSettings.value */.t1.value  } = {}) {
    var ref3;
    const chainIdFinally = (ref3 = getPayloadChainId(payload)) !== null && ref3 !== void 0 ? ref3 : chainId;
    const wallet = providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet ? await (0,services.getWallet)(account) : null;
    const privKey = isSignableMethod(payload) && wallet ? await messages/* WalletRPC.exportPrivateKey */.V.exportPrivateKey(wallet.address) : undefined;
    const web3 = await (0,EthereumServices_web3/* createWeb3 */.N)({
        chainId: chainIdFinally,
        privKeys: privKey ? [
            privKey
        ] : [],
        providerType: isReadOnlyMethod(payload) ? types/* ProviderType.MaskWallet */.lP.MaskWallet : providerType
    });
    const provider = web3.currentProvider;
    // unable to create provider
    if (!provider) {
        callback(new Error('Failed to create provider.'));
        return;
    }
    // illegal payload
    if (typeof payload.id === 'undefined') {
        callback(new Error('Unknown payload id.'));
        return;
    }
    async function personalSign() {
        const [data, address] = payload.params;
        switch(providerType){
            case types/* ProviderType.MaskWallet */.lP.MaskWallet:
                try {
                    const signed = await web3.eth.sign(data, address);
                    callback(null, {
                        jsonrpc: '2.0',
                        id: payload.id,
                        result: signed
                    });
                } catch (error) {
                    callback(getError(error, null, types/* EthereumErrorType.ERR_SIGN_MESSAGE */.OO.ERR_SIGN_MESSAGE));
                }
                break;
            case types/* ProviderType.MetaMask */.lP.MetaMask:
                await MetaMask/* ensureConnectedAndUnlocked */.u8();
                provider === null || provider === void 0 ? void 0 : provider.send({
                    ...payload,
                    params: [
                        data,
                        address,
                        ''
                    ]
                }, callback);
                break;
            case types/* ProviderType.WalletConnect */.lP.WalletConnect:
                try {
                    callback(null, {
                        jsonrpc: '2.0',
                        id: payload.id,
                        result: await WalletConnect/* signPersonalMessage */.RE(data, address, '')
                    });
                } catch (error1) {
                    callback(getError(error1, null, types/* EthereumErrorType.ERR_SIGN_MESSAGE */.OO.ERR_SIGN_MESSAGE));
                }
                break;
            case types/* ProviderType.Coin98 */.lP.Coin98:
            case types/* ProviderType.WalletLink */.lP.WalletLink:
            case types/* ProviderType.MathWallet */.lP.MathWallet:
                try {
                    callback(null, {
                        jsonrpc: '2.0',
                        id: payload.id,
                        result: await Injected/* createProvider */.Qz().request({
                            method: types/* EthereumMethodType.PERSONAL_SIGN */.W8.PERSONAL_SIGN,
                            params: payload.params
                        })
                    });
                } catch (error2) {
                    callback(getError(error2, null, types/* EthereumErrorType.ERR_SIGN_MESSAGE */.OO.ERR_SIGN_MESSAGE));
                }
                break;
            case types/* ProviderType.Fortmatic */.lP.Fortmatic:
                try {
                    callback(null, {
                        jsonrpc: '2.0',
                        id: payload.id,
                        result: await Fortmatic/* createProvider */.Qz().request({
                            method: types/* EthereumMethodType.PERSONAL_SIGN */.W8.PERSONAL_SIGN,
                            params: payload.params
                        })
                    });
                } catch (error3) {
                    callback(getError(error3, null, types/* EthereumErrorType.ERR_SIGN_MESSAGE */.OO.ERR_SIGN_MESSAGE));
                }
                break;
            case types/* ProviderType.CustomNetwork */.lP.CustomNetwork:
                throw new Error('To be implemented.');
            default:
                (0,esm/* safeUnreachable */.P)(providerType);
        }
    }
    async function typedDataSign() {
        const [address, dataToSign] = payload.params;
        switch(providerType){
            case types/* ProviderType.MaskWallet */.lP.MaskWallet:
                const signed = (0,eth_sig_util_dist.signTypedData)({
                    privateKey: (0,dist_browser.toBuffer)('0x' + privKey),
                    data: JSON.parse(dataToSign),
                    version: eth_sig_util_dist.SignTypedDataVersion.V4
                });
                try {
                    callback(null, {
                        jsonrpc: '2.0',
                        id: payload.id,
                        result: signed
                    });
                } catch (error) {
                    callback(getError(error, null, types/* EthereumErrorType.ERR_SIGN_MESSAGE */.OO.ERR_SIGN_MESSAGE));
                }
                break;
            case types/* ProviderType.WalletConnect */.lP.WalletConnect:
                try {
                    callback(null, {
                        jsonrpc: '2.0',
                        id: payload.id,
                        result: await WalletConnect/* signTypedDataMessage */.SO(address, dataToSign)
                    });
                } catch (error4) {
                    callback(getError(error4, null, types/* EthereumErrorType.ERR_SIGN_MESSAGE */.OO.ERR_SIGN_MESSAGE));
                }
                break;
            default:
                provider === null || provider === void 0 ? void 0 : provider.send(payload, callback);
        }
    }
    async function sendTransaction() {
        const hash = getPayloadHash(payload);
        const config = getPayloadConfig(payload);
        if (!config) {
            callback(getError(null, null, types/* EthereumErrorType.ERR_SEND_TRANSACTION */.OO.ERR_SEND_TRANSACTION));
            return;
        }
        // add nonce
        if (providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet && config.from && !config.nonce) config.nonce = await getNonce(config.from);
        // add gas margin
        if (config.gas) config.gas = (0,token/* addGasMargin */.bu)(config.gas).toString();
        var _gas;
        config.gas = (0,lib.toHex)((_gas = config.gas) !== null && _gas !== void 0 ? _gas : '0');
        // add chain id
        if (!config.chainId) config.chainId = chainIdFinally;
        // if the transaction is eip-1559, need to remove gasPrice from the config,
        if (shared/* Flags.EIP1559_enabled */.vU.EIP1559_enabled && (0,chainDetailed/* isEIP1559Supported */.U1)(chainIdFinally)) {
            config.gasPrice = undefined;
        } else {
            config.maxFeePerGas = undefined;
            config.maxPriorityFeePerGas = undefined;
        }
        // send the transaction
        switch(providerType){
            case types/* ProviderType.MaskWallet */.lP.MaskWallet:
                if (!(wallet === null || wallet === void 0 ? void 0 : wallet.storedKeyInfo) || !privKey) {
                    callback(getError(null, null, types/* EthereumErrorType.ERR_SIGN_TRANSACTION */.OO.ERR_SIGN_TRANSACTION));
                    return;
                }
                // send the signed transaction
                const signed = await web3.eth.accounts.signTransaction(config, privKey);
                if (!signed.rawTransaction) {
                    callback(getError(null, null, types/* EthereumErrorType.ERR_SIGN_TRANSACTION */.OO.ERR_SIGN_TRANSACTION));
                    return;
                }
                provider === null || provider === void 0 ? void 0 : provider.send({
                    ...payload,
                    method: types/* EthereumMethodType.ETH_SEND_RAW_TRANSACTION */.W8.ETH_SEND_RAW_TRANSACTION,
                    params: [
                        signed.rawTransaction
                    ]
                }, (error, response)=>{
                    callback(hasError(error, response) ? getError(error, response, types/* EthereumErrorType.ERR_SEND_TRANSACTION */.OO.ERR_SEND_TRANSACTION) : null, response);
                    switch(payload.method){
                        case types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION:
                            handleNonce(chainIdFinally, account, error, response);
                            handleTransferTransaction(chainIdFinally, payload);
                            handleRecentTransaction(chainIdFinally, account, payload, response);
                            break;
                        case types/* EthereumMethodType.MASK_REPLACE_TRANSACTION */.W8.MASK_REPLACE_TRANSACTION:
                            handleReplaceRecentTransaction(chainIdFinally, hash, account, payload, response);
                            break;
                    }
                });
                break;
            case types/* ProviderType.MetaMask */.lP.MetaMask:
                try {
                    await MetaMask/* ensureConnectedAndUnlocked */.u8();
                    provider === null || provider === void 0 ? void 0 : provider.send(payload, (error, response)=>{
                        callback(hasError(error, response) ? getError(error, response, types/* EthereumErrorType.ERR_SEND_TRANSACTION */.OO.ERR_SEND_TRANSACTION) : null, response);
                        handleTransferTransaction(chainIdFinally, payload);
                        handleRecentTransaction(chainIdFinally, account, payload, response);
                    });
                } catch (error6) {
                    callback(getError(error6, null, types/* EthereumErrorType.ERR_SEND_TRANSACTION */.OO.ERR_SEND_TRANSACTION));
                    break;
                }
                break;
            case types/* ProviderType.WalletConnect */.lP.WalletConnect:
                try {
                    const response = await WalletConnect/* sendCustomRequest */.xL(payload);
                    callback(null, response);
                    handleTransferTransaction(chainIdFinally, payload);
                    handleRecentTransaction(chainIdFinally, account, payload, response);
                } catch (error5) {
                    callback(getError(error5, null, types/* EthereumErrorType.ERR_SEND_TRANSACTION */.OO.ERR_SEND_TRANSACTION));
                }
                break;
            case types/* ProviderType.Coin98 */.lP.Coin98:
            case types/* ProviderType.WalletLink */.lP.WalletLink:
            case types/* ProviderType.MathWallet */.lP.MathWallet:
                await Injected/* ensureConnectedAndUnlocked */.u8();
                Injected/* createProvider */.Qz().send(payload, (error, response)=>{
                    callback(hasError(error, response) ? getError(error, response, types/* EthereumErrorType.ERR_SEND_TRANSACTION */.OO.ERR_SEND_TRANSACTION) : null, response);
                    handleTransferTransaction(chainIdFinally, payload);
                    handleRecentTransaction(chainIdFinally, account, payload, response);
                });
                break;
            case types/* ProviderType.Fortmatic */.lP.Fortmatic:
                Fortmatic/* createProvider */.Qz().send(payload, (error, response)=>{
                    callback(hasError(error, response) ? getError(error, response, types/* EthereumErrorType.ERR_SEND_TRANSACTION */.OO.ERR_SEND_TRANSACTION) : null, response);
                    handleTransferTransaction(chainIdFinally, payload);
                    handleRecentTransaction(chainIdFinally, account, payload, response);
                });
                break;
            case types/* ProviderType.CustomNetwork */.lP.CustomNetwork:
                throw new Error('To be implemented.');
            default:
                (0,esm/* safeUnreachable */.P)(providerType);
        }
    }
    async function getTransactionReceipt() {
        const [hash] = payload.params;
        // redirect receipt queries to tx watcher
        const transaction = await messages/* WalletRPC.getRecentTransaction */.V.getRecentTransaction(chainIdFinally, account, hash, {
            receipt: true
        });
        try {
            var ref;
            callback(null, {
                id: payload.id,
                jsonrpc: payload.jsonrpc,
                result: (ref = transaction === null || transaction === void 0 ? void 0 : transaction.receipt) !== null && ref !== void 0 ? ref : null
            });
        } catch  {
            callback(null, {
                id: payload.id,
                jsonrpc: payload.jsonrpc,
                result: null
            });
        }
    }
    try {
        switch(payload.method){
            case types/* EthereumMethodType.ETH_ACCOUNTS */.W8.ETH_ACCOUNTS:
                callback(null, {
                    id: payload.id,
                    jsonrpc: payload.jsonrpc,
                    result: [
                        account
                    ]
                });
                break;
            case types/* EthereumMethodType.ETH_GET_TRANSACTION_RECEIPT */.W8.ETH_GET_TRANSACTION_RECEIPT:
                await getTransactionReceipt();
                break;
            case types/* EthereumMethodType.PERSONAL_SIGN */.W8.PERSONAL_SIGN:
                await personalSign();
                break;
            case types/* EthereumMethodType.ETH_SIGN_TYPED_DATA */.W8.ETH_SIGN_TYPED_DATA:
                await typedDataSign();
                break;
            case types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION:
                await sendTransaction();
                break;
            case types/* EthereumMethodType.MASK_GET_TRANSACTION_RECEIPT */.W8.MASK_GET_TRANSACTION_RECEIPT:
                provider.send({
                    ...payload,
                    method: types/* EthereumMethodType.ETH_GET_TRANSACTION_RECEIPT */.W8.ETH_GET_TRANSACTION_RECEIPT
                }, callback);
                break;
            case types/* EthereumMethodType.MASK_REPLACE_TRANSACTION */.W8.MASK_REPLACE_TRANSACTION:
                if (providerType !== types/* ProviderType.MaskWallet */.lP.MaskWallet) throw new Error(`Cannot replace transaction for ${providerType}.`);
                await sendTransaction();
                break;
            default:
                provider.send(payload, callback);
                break;
        }
    } catch (error) {
        callback(getError(error, null, 'Failed to send request.'));
    }
}
/**
 * This API redirects requests to the native app.
 * @param payload
 * @param callback
 * @param sendOverrides
 */ async function INTERNAL_nativeSend(payload, callback, { account =settings/* currentAccountSettings.value */.aK.value , chainId =settings/* currentChainIdSettings.value */.wU.value  } = {}) {
    var ref;
    const chainIdFinally = (ref = getPayloadChainId(payload)) !== null && ref !== void 0 ? ref : chainId;
    const config = getPayloadConfig(payload);
    if (config && !config.chainId) config.chainId = chainIdFinally;
    if (payload.method === types/* EthereumMethodType.MASK_GET_TRANSACTION_RECEIPT */.W8.MASK_GET_TRANSACTION_RECEIPT) payload.method = types/* EthereumMethodType.ETH_GET_TRANSACTION_RECEIPT */.W8.ETH_GET_TRANSACTION_RECEIPT;
    try {
        let response;
        if ((native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.type */.Nz.type) === 'Android') {
            const jsonResponse = await (native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.sendJsonString */.Nz.api.sendJsonString(JSON.stringify(payload)));
            response = JSON.parse(jsonResponse);
        } else {
            response = await (native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.send */.Nz.api.send(payload));
        }
        callback(null, response);
        if (payload.method === types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION) {
            handleNonce(chainIdFinally, account, null, response);
            handleTransferTransaction(chainIdFinally, payload);
            handleRecentTransaction(chainIdFinally, account, payload, response);
        }
    } catch (error) {
        if (!(error instanceof Error)) return;
        callback(error, undefined);
        if (payload.method === types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION) {
            handleNonce(chainIdFinally, account, error, undefined);
        }
    }
}

// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/extension/background-script/HelperService/index.ts + 2 modules
var HelperService = __webpack_require__(89242);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/request.ts










let id = 0;
const UNCONFIRMED_CALLBACK_MAP = new Map();
const RISK_METHOD_LIST = [
    types/* EthereumMethodType.ETH_SIGN */.W8.ETH_SIGN,
    types/* EthereumMethodType.PERSONAL_SIGN */.W8.PERSONAL_SIGN,
    types/* EthereumMethodType.ETH_SIGN_TYPED_DATA */.W8.ETH_SIGN_TYPED_DATA,
    types/* EthereumMethodType.ETH_DECRYPT */.W8.ETH_DECRYPT,
    types/* EthereumMethodType.ETH_GET_ENCRYPTION_PUBLIC_KEY */.W8.ETH_GET_ENCRYPTION_PUBLIC_KEY,
    types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION, 
];
function getSendMethod() {
    if (native_rpc/* hasNativeAPI */._ && native_rpc/* nativeAPI */.Nz) return INTERNAL_nativeSend;
    return INTERNAL_send;
}
function getPayloadId(payload) {
    return typeof payload.id === 'string' ? Number.parseInt(payload.id, 10) : payload.id;
}
function isRiskMethod(method) {
    return RISK_METHOD_LIST.includes(method);
}
function isSendMethod(method) {
    return method === types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION;
}
async function requestSend(payload, callback, overrides, options) {
    id += 1;
    const notifyProgress = isSendMethod(payload.method);
    const { providerType =settings/* currentProviderSettings.value */.t1.value  } = overrides !== null && overrides !== void 0 ? overrides : {};
    var ref;
    const chainId = ((ref = overrides === null || overrides === void 0 ? void 0 : overrides.chainId) !== null && ref !== void 0 ? ref : providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet) ? settings/* currentMaskWalletChainIdSettings.value */.DT.value : settings/* currentChainIdSettings.value */.wU.value;
    const { popupsWindow =true  } = options !== null && options !== void 0 ? options : {};
    const payload_ = {
        ...payload,
        id
    };
    if (payload_.method === types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION) {
        const [config] = payload_.params;
        // If the default gas config be less than low option, force reset it
        if ((0,chainDetailed/* isEIP1559Supported */.U1)(chainId)) {
            var ref1;
            const results = await messages/* WalletRPC.getEstimateGasFees */.V.getEstimateGasFees(chainId);
            if ((results === null || results === void 0 ? void 0 : (ref1 = results.low) === null || ref1 === void 0 ? void 0 : ref1.suggestedMaxFeePerGas) && (results === null || results === void 0 ? void 0 : results.medium) && ((0,src/* isLessThan */.FI)((config === null || config === void 0 ? void 0 : config.maxFeePerGas) ? (0,formatter/* formatWeiToGwei */.f1)(config.maxFeePerGas) : 0, results.low.suggestedMaxFeePerGas) || (0,src/* isLessThan */.FI)((config === null || config === void 0 ? void 0 : config.maxPriorityFeePerGas) ? (0,formatter/* formatWeiToGwei */.f1)(config.maxPriorityFeePerGas) : 0, results.low.suggestedMaxPriorityFeePerGas))) {
                payload_.params[0] = {
                    ...config,
                    maxFeePerGas: (0,lib.toHex)((0,formatter/* formatGweiToWei */.nU)(results.medium.suggestedMaxFeePerGas).toFixed(0)),
                    maxPriorityFeePerGas: (0,lib.toHex)((0,formatter/* formatGweiToWei */.nU)(results.medium.suggestedMaxPriorityFeePerGas).toFixed(0))
                };
            }
        } else {
            const results = await messages/* WalletRPC.getGasPriceDictFromDeBank */.V.getGasPriceDictFromDeBank(chainId);
            var ref2;
            if ((results === null || results === void 0 ? void 0 : results.data.slow.price) && (0,src/* isLessThan */.FI)((ref2 = config === null || config === void 0 ? void 0 : config.gasPrice) !== null && ref2 !== void 0 ? ref2 : 0, results.data.slow.price)) {
                payload_.params[0] = {
                    ...config,
                    gasPrice: (0,lib.toHex)(results.data.normal.price)
                };
            }
        }
    }
    const hijackedCallback = (error, response)=>{
        if (error && notifyProgress) messages/* WalletRPC.notifyPayloadProgress */.V.notifyPayloadProgress(payload_, {
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error
        });
        callback(error, response);
    };
    // redirect risk rpc to the mask wallet
    if (!native_rpc/* hasNativeAPI */._ && providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet && isRiskMethod(payload_.method)) {
        try {
            if (notifyProgress) messages/* WalletRPC.addProgress */.V.addProgress({
                payload: payload_,
                state: {
                    type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
                }
            });
            await messages/* WalletRPC.pushUnconfirmedRequest */.V.pushUnconfirmedRequest(payload_);
        } catch (error) {
            hijackedCallback(error instanceof Error ? error : new Error('Failed to add request.'));
            return;
        }
        UNCONFIRMED_CALLBACK_MAP.set(payload_.id, hijackedCallback);
        if (popupsWindow) (0,HelperService.openPopupWindow)();
        return;
    }
    if (notifyProgress) messages/* WalletRPC.addProgress */.V.addProgress({
        payload,
        state: {
            type: providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet ? types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN : types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        }
    });
    getSendMethod()(payload_, hijackedCallback, overrides);
}
async function request(requestArguments, overrides, options) {
    return new Promise(async (resolve, reject)=>{
        requestSend({
            jsonrpc: '2.0',
            id,
            params: [],
            ...requestArguments
        }, (error, response)=>{
            if (error || (response === null || response === void 0 ? void 0 : response.error)) reject(error !== null && error !== void 0 ? error : response === null || response === void 0 ? void 0 : response.error);
            else resolve(response === null || response === void 0 ? void 0 : response.result);
        }, overrides, options);
    });
}
async function confirmRequest(payload) {
    const pid = getPayloadId(payload);
    if (!pid) return;
    const [deferred, resolve, reject] = (0,shared_base_src/* defer */.PQ)();
    getSendMethod()(payload, (error, response)=>{
        var ref;
        (ref = UNCONFIRMED_CALLBACK_MAP.get(pid)) === null || ref === void 0 ? void 0 : ref(error, response);
        if (error) reject(error);
        else if (response === null || response === void 0 ? void 0 : response.error) reject(new Error(`Failed to send transaction: ${response.error}`));
        else {
            messages/* WalletRPC.deleteUnconfirmedRequest */.V.deleteUnconfirmedRequest(payload).then(service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow).then(()=>{
                UNCONFIRMED_CALLBACK_MAP.delete(pid);
            });
            resolve(response);
        }
    }, {
        account: settings/* currentMaskWalletAccountSettings.value */.T_.value,
        chainId: settings/* currentMaskWalletChainIdSettings.value */.DT.value,
        providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
    });
    return deferred;
}
async function rejectRequest(payload) {
    var ref;
    const pid = getPayloadId(payload);
    if (!pid) return;
    (ref = UNCONFIRMED_CALLBACK_MAP.get(pid)) === null || ref === void 0 ? void 0 : ref(new Error('User rejected!'));
    await messages/* WalletRPC.deleteUnconfirmedRequest */.V.deleteUnconfirmedRequest(payload);
    await service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow();
    UNCONFIRMED_CALLBACK_MAP.delete(pid);
}
async function replaceRequest(hash, payload, overrides) {
    const pid = getPayloadId(payload);
    if (!pid || payload.method !== types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION) return;
    const [config] = payload.params;
    return request({
        method: types/* EthereumMethodType.MASK_REPLACE_TRANSACTION */.W8.MASK_REPLACE_TRANSACTION,
        params: [
            hash,
            {
                ...config,
                ...overrides
            }, 
        ]
    }, {
        account: settings/* currentMaskWalletAccountSettings.value */.T_.value,
        chainId: settings/* currentMaskWalletChainIdSettings.value */.DT.value,
        providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
    });
}
async function cancelRequest(hash, payload, overrides) {
    const pid = getPayloadId(payload);
    if (!pid || payload.method !== types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION) return;
    const [config] = payload.params;
    return replaceRequest(hash, payload, {
        ...config,
        ...overrides,
        to: config.from,
        data: '0x',
        value: '0x0'
    });
}

// EXTERNAL MODULE: ./src/extension/background-script/EthereumServices/providers/MaskWallet.ts
var MaskWallet = __webpack_require__(33365);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/providers/CustomNetwork.ts

function createWeb3() {
    throw new Error('To be implemented.');
}
async function requestAccounts() {
    return {
        accounts: [],
        chainId: types/* ChainId.Mainnet */.a_.Mainnet
    };
}

;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/provider.ts








// #region connect WalletConnect
// step 1:
// Generate the connection URI and render a QRCode for scanning by the user
async function createConnectionURI() {
    return (await WalletConnect/* createConnector */.KX()).uri;
}
// step2:
// If user confirmed the request we will receive the 'connect' event
let resolveConnect;
let rejectConnect;
async function connectWalletConnect() {
    const [deferred, resolve, reject] = (0,shared_base_src/* defer */.PQ)();
    resolveConnect = resolve;
    rejectConnect = reject;
    createWalletConnect().then(resolve, reject);
    return deferred;
}
async function createWalletConnect() {
    const connector = await WalletConnect/* createConnectorIfNeeded */.xU();
    if (connector.connected) return {
        account: (0,head/* default */.Z)(connector.accounts),
        chainId: connector.chainId
    };
    const { accounts , chainId  } = await WalletConnect/* requestAccounts */.Wn();
    return {
        account: (0,head/* default */.Z)(accounts),
        chainId
    };
}
async function cancelWalletConnect() {
    rejectConnect === null || rejectConnect === void 0 ? void 0 : rejectConnect(new Error('Failed to connect to WalletConnect.'));
}
// #endregion
async function connectMaskWallet(networkType) {
    const { accounts , chainId  } = await MaskWallet/* requestAccounts */.Wn(networkType);
    return {
        account: (0,head/* default */.Z)(accounts),
        chainId
    };
}
async function connectMetaMask() {
    const { accounts , chainId  } = await MetaMask/* requestAccounts */.Wn();
    return {
        account: (0,head/* default */.Z)(accounts),
        chainId
    };
}
// #region fortmatic
async function connectFortmatic(expectedChainId) {
    const { accounts , chainId  } = await Fortmatic/* requestAccounts */.Wn(expectedChainId);
    return {
        account: (0,head/* default */.Z)(accounts),
        chainId
    };
}
async function disconnectFortmatic(expectedChainId) {
    await Fortmatic/* dismissAccounts */.gp(expectedChainId);
}
// #endregion
async function connectCustomNetwork() {
    const { accounts , chainId  } = await requestAccounts();
    return {
        account: (0,head/* default */.Z)(accounts),
        chainId
    };
}
// #region connect injected provider
async function connectInjected() {
    const { accounts , chainId  } = await Injected/* requestAccounts */.Wn();
    return {
        account: (0,head/* default */.Z)(accounts),
        chainId
    };
}
async function notifyInjectedEvent(name, event, providerType) {
    switch(name){
        case 'accountsChanged':
            await Injected/* onAccountsChanged */.en(event, providerType);
            break;
        case 'chainChanged':
            await Injected/* onChainIdChanged */.V9(event, providerType);
            break;
        default:
            throw new Error(`Unknown event name: ${name}.`);
    }
} // #endregion

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/groupBy.js + 1 modules
var groupBy = __webpack_require__(90474);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/tokenList.ts



const NATIVE_TOKEN_ADDRESS_IN_1INCH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const fetchTokenList = (0,esm/* memoizePromise */.J3)(async (url)=>{
    const response = await fetch(url, {
        cache: 'force-cache'
    });
    return response.json();
}, (url)=>url
);
/**
 * Fetch tokens from 1inch token list
 * @param url
 * @param chainId
 */ async function fetch1inchERC20TokensFromTokenList(url, chainId = types/* ChainId.Mainnet */.a_.Mainnet) {
    const tokens = (await fetchTokenList(url)).tokens;
    const _tokens = Object.values(tokens);
    return _tokens.filter((x)=>x.address.toLowerCase() !== NATIVE_TOKEN_ADDRESS_IN_1INCH
    ).map((x)=>({
            type: types/* EthereumTokenType.ERC20 */.Dr.ERC20,
            ...x,
            chainId: chainId,
            logoURI: x.logoURI ? [
                x.logoURI
            ] : []
        })
    );
}
/**
 * Fetch tokens from common token list
 * @param url
 * @param chainId
 */ async function fetchCommonERC20TokensFromTokenList(url, chainId = types/* ChainId.Mainnet */.a_.Mainnet) {
    return (await fetchTokenList(url)).tokens.filter((x)=>{
        var ref;
        return x.chainId === chainId && ( true ? ((ref = (0,chainDetailed/* getChainDetailed */.$G)(chainId)) === null || ref === void 0 ? void 0 : ref.network) === 'mainnet' : 0);
    }).map((x)=>({
            type: types/* EthereumTokenType.ERC20 */.Dr.ERC20,
            ...x,
            logoURI: x.logoURI ? [
                x.logoURI
            ] : []
        })
    );
}
/**
 * Fetch tokens adapter
 * @param urls
 * @param chainId
 */ async function fetchERC20TokensFromTokenList(urls, chainId = types/* ChainId.Mainnet */.a_.Mainnet) {
    const allRequest = urls.map(async (x)=>{
        if (x.includes('1inch')) {
            const tokens = await fetch1inchERC20TokensFromTokenList(x, chainId);
            return {
                tokens,
                weight: 0
            };
        }
        const tokens = await fetchCommonERC20TokensFromTokenList(x, chainId);
        return {
            tokens,
            weight: x.includes('Mask-Token-List') ? 1 : 0
        };
    });
    const allListResponse = await Promise.allSettled(allRequest);
    return allListResponse.map((x)=>x.status === 'fulfilled' ? x.value : {
            tokens: [],
            weight: 0
        }
    );
}
/**
 * Fetch tokens from multiple token lists
 * @param urls
 * @param chainId
 */ const fetchERC20TokensFromTokenLists = (0,esm/* memoizePromise */.J3)(async (urls, chainId = types/* ChainId.Mainnet */.a_.Mainnet)=>{
    const tokens = (await fetchERC20TokensFromTokenList(urls, chainId)).sort((a, b)=>b.weight - a.weight
    ).flatMap((x)=>x.tokens
    );
    const groupedToken = (0,groupBy/* default */.Z)(tokens, (x)=>x.address.toLowerCase()
    );
    return Object.values(groupedToken).map((tokenList)=>{
        const logoURIs = tokenList.map((token)=>token.logoURI
        ).flat().filter((token)=>!!token
        );
        return {
            ...tokenList[0],
            ...{
                address: (0,formatter/* formatEthereumAddress */.j8)(tokenList[0].address)
            },
            ...{
                logoURI: logoURIs
            }
        };
    });
}, (urls, chainId)=>`${chainId}-${urls.join()}`
);

;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/tokenPrice.ts
const URL_BASE = 'https://api.coingecko.com/api/v3';
async function getTokenPrices(platform, contractAddresses, currency) {
    const addressList = contractAddresses.join(',');
    const requestPath = `${URL_BASE}/simple/token_price/${platform}?contract_addresses=${addressList}&vs_currencies=${currency}`;
    const prices = await fetch(requestPath).then((r)=>r.json()
    );
    return prices;
}
async function getNativeTokenPrice(tokenIds, currency) {
    const requestPath = `${URL_BASE}/simple/price?ids=${tokenIds.join(',')}&vs_currencies=${currency}`;
    const prices = await fetch(requestPath).then((r)=>r.json()
    );
    return prices;
}

;// CONCATENATED MODULE: ./src/extension/background-script/EthereumService.ts









/***/ }),

/***/ 22339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qz": () => (/* binding */ createProvider),
/* harmony export */   "Nl": () => (/* binding */ createWeb3),
/* harmony export */   "Wn": () => (/* binding */ requestAccounts),
/* harmony export */   "gp": () => (/* binding */ dismissAccounts)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90582);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86716);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18249);
/* harmony import */ var _plugins_EVM_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56902);
/* harmony import */ var _plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86518);





// #region redirect requests to the content page
let id = 0;
async function request(requestArguments) {
    id += 1;
    const requestId = id;
    const [deferred, resolve, reject] = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .defer */ .PQ)();
    function onResponse({ payload , result , error  }) {
        if (payload.id !== requestId) return;
        if (error) reject(error);
        else resolve(result);
    }
    setTimeout(()=>reject(new Error('The request is timeout.'))
    , requestArguments.method === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .EthereumMethodType.MASK_LOGIN_FORTMATIC */ .W8.MASK_LOGIN_FORTMATIC ? 3 * 60 * 1000 : 45 * 1000);
    _plugins_EVM_messages__WEBPACK_IMPORTED_MODULE_2__/* .EVM_Messages.events.FORTMATIC_PROVIDER_RPC_RESPONSE.on */ .j.events.FORTMATIC_PROVIDER_RPC_RESPONSE.on(onResponse);
    _plugins_EVM_messages__WEBPACK_IMPORTED_MODULE_2__/* .EVM_Messages.events.FORTMATIC_PROVIDER_RPC_REQUEST.sendToVisiblePages */ .j.events.FORTMATIC_PROVIDER_RPC_REQUEST.sendToVisiblePages({
        payload: {
            jsonrpc: '2.0',
            id: requestId,
            params: [],
            ...requestArguments
        }
    });
    deferred.finally(()=>{
        _plugins_EVM_messages__WEBPACK_IMPORTED_MODULE_2__/* .EVM_Messages.events.FORTMATIC_PROVIDER_RPC_RESPONSE.off */ .j.events.FORTMATIC_PROVIDER_RPC_RESPONSE.off(onResponse);
    });
    return deferred;
}
function send(payload, callback) {
    request({
        method: payload.method,
        params: payload.params
    }).then((result)=>{
        callback(null, {
            id: payload.id,
            jsonrpc: '2.0',
            result
        });
    }).catch((error)=>{
        callback(error);
    });
}
// #endregion
let web3 = null;
function createProvider() {
    return {
        request,
        send,
        sendAsync: send
    };
}
function createWeb3() {
    if (web3) return web3;
    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(createProvider());
    return web3;
}
async function requestAccounts(expectedChainId) {
    const provider = createProvider();
    const response = await provider.request({
        method: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .EthereumMethodType.MASK_LOGIN_FORTMATIC */ .W8.MASK_LOGIN_FORTMATIC,
        params: [
            expectedChainId
        ]
    });
    return response;
}
async function dismissAccounts(expectedChainId) {
    const provider = createProvider();
    await provider.request({
        method: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .EthereumMethodType.MASK_LOGOUT_FORTMATIC */ .W8.MASK_LOGOUT_FORTMATIC,
        params: [
            expectedChainId
        ]
    });
    (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_3__.resetAccount)();
}


/***/ }),

/***/ 12298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qz": () => (/* binding */ createProvider),
/* harmony export */   "Nl": () => (/* binding */ createWeb3),
/* harmony export */   "Wn": () => (/* binding */ requestAccounts),
/* harmony export */   "u8": () => (/* binding */ ensureConnectedAndUnlocked),
/* harmony export */   "en": () => (/* binding */ onAccountsChanged),
/* harmony export */   "V9": () => (/* binding */ onChainIdChanged)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29730);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86716);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90582);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18249);
/* harmony import */ var _plugins_EVM_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56902);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12705);
/* harmony import */ var _plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86518);







// #region redirect requests to the content page
let id = 0;
async function request(requestArguments) {
    id += 1;
    const requestId = id;
    const [deferred, resolve, reject] = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .defer */ .PQ)();
    function onResponse({ payload , result , error  }) {
        if (payload.id !== requestId) return;
        if (error) reject(error);
        else resolve(result);
    }
    setTimeout(()=>reject(new Error('The request is timeout.'))
    , requestArguments.method === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .EthereumMethodType.ETH_REQUEST_ACCOUNTS */ .W8.ETH_REQUEST_ACCOUNTS ? 3 * 60 * 1000 : 45 * 1000);
    _plugins_EVM_messages__WEBPACK_IMPORTED_MODULE_2__/* .EVM_Messages.events.INJECTED_PROVIDER_RPC_RESPONSE.on */ .j.events.INJECTED_PROVIDER_RPC_RESPONSE.on(onResponse);
    _plugins_EVM_messages__WEBPACK_IMPORTED_MODULE_2__/* .EVM_Messages.events.INJECTED_PROVIDER_RPC_REQUEST.sendToVisiblePages */ .j.events.INJECTED_PROVIDER_RPC_REQUEST.sendToVisiblePages({
        payload: {
            jsonrpc: '2.0',
            id: requestId,
            params: [],
            ...requestArguments
        }
    });
    deferred.finally(()=>{
        _plugins_EVM_messages__WEBPACK_IMPORTED_MODULE_2__/* .EVM_Messages.events.INJECTED_PROVIDER_RPC_RESPONSE.off */ .j.events.INJECTED_PROVIDER_RPC_RESPONSE.off(onResponse);
    });
    return deferred;
}
function send(payload, callback) {
    request({
        method: payload.method,
        params: payload.params
    }).then((result)=>{
        callback(null, {
            id: payload.id,
            jsonrpc: '2.0',
            result
        });
    }).catch((error)=>{
        callback(error);
    });
}
// #endregion
let web3 = null;
function createProvider() {
    return {
        request,
        send,
        sendAsync: send
    };
}
function createWeb3() {
    if (web3) return web3;
    web3 = new (web3__WEBPACK_IMPORTED_MODULE_1___default())(createProvider());
    return web3;
}
async function requestAccounts() {
    const web31 = createWeb3();
    const chainId = await web31.eth.getChainId();
    const accounts = await web31.eth.requestAccounts();
    return {
        chainId,
        accounts
    };
}
async function ensureConnectedAndUnlocked() {
    const web32 = createWeb3();
    try {
        const accounts = await web32.eth.requestAccounts();
        throw accounts;
    } catch (error) {
        const accounts = error;
        if (Array.isArray(accounts)) {
            if (accounts.length === 0) throw new Error('Injected Web3 is locked or it has not connected any accounts.');
            else if (accounts.length > 0) return; // valid
        }
        // Any other error means failed to connect injected web3
        throw new Error('Failed to connect to injected Web3.');
    }
}
async function onAccountsChanged(accounts, providerType) {
    if (_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings.value */ .t1.value !== providerType) return;
    await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_4__.updateAccount)({
        account: (0,lodash_unified__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(accounts),
        providerType
    });
}
async function onChainIdChanged(id1, providerType) {
    if (_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings.value */ .t1.value !== providerType) return;
    // learn more: https://docs.metamask.io/guide/ethereum-provider.html#chain-ids and https://chainid.network/
    const chainId = Number.parseInt(id1, 16) || _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .ChainId.Mainnet */ .a_.Mainnet;
    if (_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentChainIdSettings.value */ .wU.value === chainId) return;
    await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_4__.updateAccount)({
        chainId
    });
}


/***/ }),

/***/ 33365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nl": () => (/* binding */ createWeb3),
/* harmony export */   "Wn": () => (/* binding */ requestAccounts)
/* harmony export */ });
/* unused harmony export createProvider */
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90582);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86716);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80945);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18249);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12705);
/* harmony import */ var _plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86518);
/* harmony import */ var _HelperService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89242);






// #region providers
const providerPool = new Map();
function createProvider(url) {
    var ref;
    const provider = (ref = providerPool.get(url)) !== null && ref !== void 0 ? ref : new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(url, {
        timeout: 20000,
        // @ts-ignore
        clientConfig: {
            keepalive: true,
            keepaliveInterval: 1
        },
        reconnect: {
            auto: true,
            delay: 5000,
            maxAttempts: Number.MAX_SAFE_INTEGER,
            onTimeout: true
        }
    });
    providerPool.set(url, provider);
    return provider;
}
// #endregion
// #region web3 instances
const instancePool = new Map();
const SEED = Math.floor(Math.random() * 4);
function createWeb3Instance(provider) {
    var ref;
    return (ref = instancePool.get(provider.host)) !== null && ref !== void 0 ? ref : (()=>{
        const newInstance = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
        instancePool.set(provider.host, newInstance);
        return newInstance;
    })();
}
function createWeb3({ url ='' , chainId =_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentChainIdSettings.value */ .wU.value , privKeys =[]  } = {}) {
    url = url || (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getChainRPC */ .NX)(chainId, SEED);
    const provider = createProvider(url);
    const web3 = createWeb3Instance(provider);
    if (privKeys.length) {
        web3.eth.accounts.wallet.clear();
        privKeys.forEach((k)=>k && k !== '0x' && web3.eth.accounts.wallet.add(k)
        );
    }
    return web3;
}
// #endregion
async function requestAccounts(networkType) {
    const wallets = await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_3__.getWallets)(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ProviderType.MaskWallet */ .lP.MaskWallet);
    return new Promise(async (resolve, reject)=>{
        try {
            await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_3__.selectAccountPrepare)((accounts, chainId)=>{
                resolve({
                    chainId,
                    accounts
                });
            });
            await (0,_HelperService__WEBPACK_IMPORTED_MODULE_4__.openPopupWindow)(wallets.length > 0 ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .PopupRoutes.SelectWallet */ .mZ.SelectWallet : undefined, {
                chainId: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getChainIdFromNetworkType */ .EP)(networkType)
            });
        } catch  {
            reject(new Error('Failed to connect to Mask Network.'));
        }
    });
}


/***/ }),

/***/ 33555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nl": () => (/* binding */ createWeb3),
/* harmony export */   "Wn": () => (/* binding */ requestAccounts),
/* harmony export */   "u8": () => (/* binding */ ensureConnectedAndUnlocked)
/* harmony export */ });
/* unused harmony exports createProvider, isUnlocked */
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90582);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29730);
/* harmony import */ var _dimensiondev_metamask_extension_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89723);
/* harmony import */ var _dimensiondev_metamask_extension_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_metamask_extension_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18249);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86716);
/* harmony import */ var _plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86518);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12705);
/* harmony import */ var _plugins_Wallet_services_transaction_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42900);








let provider = null;
let web3 = null;
async function onAccountsChanged(accounts) {
    if (_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentProviderSettings.value */ .t1.value !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ProviderType.MetaMask */ .lP.MetaMask) return;
    await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_3__.updateAccount)({
        account: (0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(accounts),
        providerType: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ProviderType.MetaMask */ .lP.MetaMask,
        chainId: typeof (provider === null || provider === void 0 ? void 0 : provider.chainId) === 'string' ? Number.parseInt(provider.chainId, 16) : undefined
    });
}
async function onChainIdChanged(id) {
    if (_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentProviderSettings.value */ .t1.value !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ProviderType.MetaMask */ .lP.MetaMask) return;
    // learn more: https://docs.metamask.io/guide/ethereum-provider.html#chain-ids and https://chainid.network/
    const chainId = Number.parseInt(id, 16) || _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet;
    if (_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentChainIdSettings.value */ .wU.value === chainId) return;
    await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_3__.updateAccount)({
        chainId
    });
}
async function onMessage(message) {
    if (message.type !== 'tx_replacement') return;
    await (0,_plugins_Wallet_services_transaction_database__WEBPACK_IMPORTED_MODULE_5__/* .replaceRecentTransaction */ .nq)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentChainIdSettings.value */ .wU.value, message.data.from, message.data.oldTx, message.data.newTx);
}
async function createProvider() {
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (provider && provider.chainId !== null) return provider;
    provider = _dimensiondev_metamask_extension_provider__WEBPACK_IMPORTED_MODULE_1___default()();
    // wait for building the connection
    await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .delay */ .gw)(1000);
    if (!provider || provider.chainId === null) {
        provider = null;
        throw new Error('Unable to create provider.');
    }
    provider.on('accountsChanged', onAccountsChanged);
    provider.on('chainChanged', onChainIdChanged);
    provider.on('message', onMessage);
    return provider;
}
// MetaMask provider can be wrapped into web3 lib directly.
// https://github.com/MetaMask/extension-provider
async function createWeb3() {
    const provider_ = await createProvider();
    if (!web3) web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider_);
    else web3.setProvider(provider_);
    return web3;
}
async function requestAccounts() {
    const web31 = await createWeb3();
    const chainId = await web31.eth.getChainId();
    const accounts = await web31.eth.requestAccounts();
    return {
        chainId,
        accounts
    };
}
async function ensureConnectedAndUnlocked() {
    const web32 = await createWeb3();
    try {
        const accounts = await web32.eth.requestAccounts();
        throw accounts;
    } catch (error) {
        const accounts = error;
        if (Array.isArray(accounts)) {
            if (accounts.length === 0) throw new Error('MetaMask is locked or it has not connected any accounts.');
            else if (accounts.length > 0) return; // valid
        }
        // Any other error means failed to connect MetaMask
        throw new Error('Failed to connect to MetaMask.');
    }
}
async function isUnlocked() {
    try {
        var ref;
        var ref1;
        // it's an experimental API. we should not depend on.
        return (ref1 = provider === null || provider === void 0 ? void 0 : (ref = provider._metamask) === null || ref === void 0 ? void 0 : ref.isUnlocked()) !== null && ref1 !== void 0 ? ref1 : false;
    } catch  {
        return false;
    }
}


/***/ }),

/***/ 44608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KX": () => (/* binding */ createConnector),
/* harmony export */   "xU": () => (/* binding */ createConnectorIfNeeded),
/* harmony export */   "RE": () => (/* binding */ signPersonalMessage),
/* harmony export */   "SO": () => (/* binding */ signTypedDataMessage),
/* harmony export */   "xL": () => (/* binding */ sendCustomRequest),
/* harmony export */   "Nl": () => (/* binding */ createWeb3),
/* harmony export */   "Wn": () => (/* binding */ requestAccounts)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29730);
/* harmony import */ var _walletconnect_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60487);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18249);
/* harmony import */ var _MaskWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33365);
/* harmony import */ var _plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86518);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12705);






let connector = null;
/**
 * Create a new connector and destroy the previous one if exists
 */ async function createConnector() {
    if (connector === null || connector === void 0 ? void 0 : connector.connected) return connector;
    // create a new connector
    connector = new _walletconnect_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
        bridge: 'https://uniswap.bridge.walletconnect.org',
        clientMeta: {
            name: 'Mask Network',
            description: 'Mask Network',
            url: 'https://mask.io',
            icons: [
                'https://mask.io/apple-touch-icon.png'
            ]
        }
    });
    connector.on('connect', onConnect);
    connector.on('session_update', onUpdate);
    connector.on('disconnect', onDisconnect);
    connector.on('error', onDisconnect);
    if (!connector.connected) await connector.createSession();
    return connector;
}
async function createConnectorIfNeeded() {
    if (connector) return connector;
    return createConnector();
}
// #region rpc
async function signPersonalMessage(data, address, password) {
    if (!connector) throw new Error('Connection Lost.');
    return await connector.signPersonalMessage([
        data,
        address,
        password
    ]);
}
async function signTypedDataMessage(data, address) {
    if (!connector) throw new Error('Connection Lost.');
    return await connector.signTypedData([
        data,
        address
    ]);
}
async function sendCustomRequest(payload) {
    if (!connector) throw new Error('Connection Lost.');
    return await connector.sendCustomRequest(payload);
}
// #endregion
// Wrap promise as PromiEvent because WalletConnect returns transaction hash only
// docs: https://docs.walletconnect.org/client-api
function createWeb3({ chainId =_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentChainIdSettings.value */ .wU.value  } = {}) {
    return _MaskWallet__WEBPACK_IMPORTED_MODULE_1__/* .createWeb3 */ .Nl({
        chainId
    });
}
// #endregion
/**
 * Request accounts from WalletConnect
 * @param timeout
 */ async function requestAccounts() {
    const connector_ = await createConnectorIfNeeded();
    return new Promise(async (resolve, reject)=>{
        function resolve_() {
            resolve({
                accounts: connector_.accounts,
                chainId: connector_.chainId
            });
        }
        if (connector_.accounts.length) {
            resolve_();
            return;
        }
        connector_.on('connect', resolve_);
        connector_.on('update', resolve_);
        connector_.on('error', reject);
    });
}
const onConnect = ()=>onUpdate(null)
;
const onUpdate = async (error, payload)=>{
    var ref;
    if (error) return;
    if (!(connector === null || connector === void 0 ? void 0 : connector.accounts.length)) return;
    if (_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings.value */ .t1.value !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ProviderType.WalletConnect */ .lP.WalletConnect) return;
    await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_2__.updateAccount)({
        name: (ref = connector.peerMeta) === null || ref === void 0 ? void 0 : ref.name,
        account: (0,lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(connector.accounts),
        chainId: connector.chainId,
        providerType: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ProviderType.WalletConnect */ .lP.WalletConnect
    });
};
const onDisconnect = async (error)=>{
    if (connector === null || connector === void 0 ? void 0 : connector.connected) await connector.killSession();
    connector = null;
    if (_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings.value */ .t1.value !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ProviderType.WalletConnect */ .lP.WalletConnect) return;
    await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_2__.resetAccount)({
        providerType: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ProviderType.WalletConnect */ .lP.WalletConnect
    });
};


/***/ }),

/***/ 30447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ createWeb3)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18249);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84176);
/* harmony import */ var _providers_MaskWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33365);
/* harmony import */ var _providers_MetaMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33555);
/* harmony import */ var _providers_WalletConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44608);
/* harmony import */ var _providers_Injected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12298);
/* harmony import */ var _providers_Fortmatic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22339);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12705);








async function createWeb3({ chainId =_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentChainIdSettings.value */ .wU.value , providerType =_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentProviderSettings.value */ .t1.value , privKeys =[] ,  } = {}) {
    switch(providerType){
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType.MaskWallet */ .lP.MaskWallet:
            return _providers_MaskWallet__WEBPACK_IMPORTED_MODULE_1__/* .createWeb3 */ .Nl({
                chainId,
                privKeys
            });
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType.MetaMask */ .lP.MetaMask:
            return _providers_MetaMask__WEBPACK_IMPORTED_MODULE_2__/* .createWeb3 */ .Nl();
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType.WalletConnect */ .lP.WalletConnect:
            return _providers_WalletConnect__WEBPACK_IMPORTED_MODULE_3__/* .createWeb3 */ .Nl({
                chainId
            });
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType.Coin98 */ .lP.Coin98:
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType.WalletLink */ .lP.WalletLink:
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType.MathWallet */ .lP.MathWallet:
            return _providers_Injected__WEBPACK_IMPORTED_MODULE_4__/* .createWeb3 */ .Nl();
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType.Fortmatic */ .lP.Fortmatic:
            return _providers_Fortmatic__WEBPACK_IMPORTED_MODULE_5__/* .createWeb3 */ .Nl();
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork:
            throw new Error('To be implemented.');
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(providerType);
    }
}


/***/ }),

/***/ 64884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ requestExtensionPermission),
/* harmony export */   "W": () => (/* binding */ queryExtensionPermission)
/* harmony export */ });
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33188);

async function requestExtensionPermission(permission) {
    if (await browser.permissions.contains(permission)) return true;
    try {
        return await browser.permissions.request(permission);
    } catch  {
    // which means we're on Firefox.
    // Chrome allows permission request from the background.
    }
    const popup = await browser.windows.create({
        height: 600,
        width: 350,
        type: 'popup',
        url: (0,_popups__WEBPACK_IMPORTED_MODULE_0__/* .constructRequestPermissionURL */ .km)(permission)
    });
    return new Promise((resolve)=>{
        browser.windows.onRemoved.addListener(function listener(windowID) {
            if (windowID !== popup.id) return;
            resolve(browser.permissions.contains(permission));
            browser.windows.onRemoved.removeListener(listener);
        });
    });
}
function queryExtensionPermission(permission) {
    return browser.permissions.contains(permission);
}


/***/ }),

/***/ 89242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__deprecated__getStorage": () => (/* reexport */ storage/* __deprecated__getStorage */.$),
  "__deprecated__setStorage": () => (/* reexport */ storage/* __deprecated__setStorage */.X),
  "bindProof": () => (/* reexport */ bindProof),
  "createPersonaPayload": () => (/* reexport */ createPersonaPayload),
  "fetch": () => (/* reexport */ fetch_fetch),
  "fetchJSON": () => (/* reexport */ fetchJSON),
  "fromHex": () => (/* reexport */ src/* fromHex */.H_),
  "openPopupWindow": () => (/* binding */ openPopupWindow),
  "queryExistedBinding": () => (/* reexport */ queryExistedBinding),
  "queryExtensionPermission": () => (/* reexport */ extensionPermission/* queryExtensionPermission */.W),
  "removePopupWindow": () => (/* binding */ removePopupWindow),
  "requestExtensionPermission": () => (/* reexport */ extensionPermission/* requestExtensionPermission */.r),
  "resolveTCOLink": () => (/* reexport */ shared/* resolveTCOLink */.FM),
  "toBase64URL": () => (/* reexport */ src/* toBase64URL */.wi)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(3087);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/index.ts + 35 modules
var services = __webpack_require__(86518);
// EXTERNAL MODULE: ./src/extension/background-script/HelperService/storage.ts
var storage = __webpack_require__(35152);
// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared = __webpack_require__(28615);
;// CONCATENATED MODULE: ./background/services/helper/fetch.ts
async function fetch_fetch(url) {
    const res = await globalThis.fetch(url);
    return res.blob();
}
async function fetchJSON(url) {
    const res = await globalThis.fetch(url);
    return res.json();
}

// EXTERNAL MODULE: ./src/extension/background-script/HelperService/extensionPermission.ts
var extensionPermission = __webpack_require__(64884);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
;// CONCATENATED MODULE: ./src/extension/background-script/HelperService/nextId.ts



const BASE_URL =  true ? 'https://proof-service.next.id/' : 0;
async function bindProof(persona, action, platform, identity, walletSignature, signature) {
    const publicKey = await queryPersonaHexPublicKey(persona);
    if (!publicKey) return;
    const requestBody = {
        action,
        platform,
        identity,
        public_key: publicKey,
        extra: {
            ...walletSignature ? {
                wallet_signature: (0,src/* toBase64 */.s3)((0,src/* fromHex */.H_)(walletSignature))
            } : {},
            ...signature ? {
                signature: (0,src/* toBase64 */.s3)((0,src/* fromHex */.H_)(signature))
            } : {}
        }
    };
    return fetch(dist_default()(BASE_URL, '/v1/proof'), {
        body: JSON.stringify(requestBody),
        method: 'POST',
        mode: 'cors'
    });
}
async function queryPersonaHexPublicKey(persona) {
    const key256 = (0,src/* decompressSecp256k1Key */.qX)(persona.compressedPoint.replace(/\|/g, '/'));
    if (!key256.x || !key256.y) return null;
    const arr = (0,src/* compressSecp256k1Point */.SH)(key256.x, key256.y);
    return `0x${(0,src/* toHex */.NC)(arr)}`;
}
async function queryExistedBinding(persona) {
    const publicKey = await queryPersonaHexPublicKey(persona);
    if (!publicKey) return;
    const response = await fetch(dist_default()(BASE_URL, '/v1/proof', {
        platform: 'nextid',
        identity: publicKey
    }), {
        mode: 'cors'
    });
    const result = await response.json();
    return (0,head/* default */.Z)(result.ids);
}
async function createPersonaPayload(persona, action, identity, platform) {
    const publicKey = await queryPersonaHexPublicKey(persona);
    if (!publicKey) return;
    const requestBody = {
        action,
        platform,
        identity,
        public_key: publicKey
    };
    const response = await fetch(dist_default()(BASE_URL, '/v1/proof/payload'), {
        body: JSON.stringify(requestBody),
        method: 'POST',
        mode: 'cors'
    });
    const result = await response.json();
    return JSON.stringify(JSON.parse(result.sign_payload));
}

;// CONCATENATED MODULE: ./src/extension/background-script/HelperService/index.ts










async function openPopupWindow(route, params) {
    const windows = await browser.windows.getAll();
    const popup = windows.find((win)=>win && win.type === 'popup' && win.id === settings/* currentPopupWindowId.value */.T0.value
    );
    // Focus on the pop-up window if it already exists
    if (popup) {
        await browser.windows.update(settings/* currentPopupWindowId.value */.T0.value, {
            focused: true
        });
    } else {
        const locked = await (0,services.isLocked)();
        const url = dist_default()('popups.html#', locked ? src/* PopupRoutes.Unlock */.mZ.Unlock : route !== null && route !== void 0 ? route : src/* PopupRoutes.Wallet */.mZ.Wallet, {
            toBeClose: 1,
            from: locked && route ? route : null,
            ...params
        });
        let left;
        let top;
        try {
            const lastFocused = await browser.windows.getLastFocused();
            var _top;
            // Position window in top right corner of lastFocused window.
            top = (_top = lastFocused.top) !== null && _top !== void 0 ? _top : 0;
            var _left, _width;
            left = ((_left = lastFocused.left) !== null && _left !== void 0 ? _left : 0) + ((_width = lastFocused.width) !== null && _width !== void 0 ? _width : 0) - 350;
        } catch (error_) {
            // The following properties are more than likely 0, due to being
            // opened from the background chrome process for the extension that
            // has no physical dimensions
            const { screenX , screenY , outerWidth  } = window;
            top = Math.max(screenY, 0);
            left = Math.max(screenX + (outerWidth - 350), 0);
        }
        const { id  } = await browser.windows.create({
            url: browser.runtime.getURL(url),
            width: 350,
            height: 640,
            type: 'popup',
            state: 'normal',
            left,
            top
        });
        // update currentPopupWindowId and clean event
        if (id) {
            settings/* currentPopupWindowId.value */.T0.value = id;
            browser.windows.onRemoved.addListener(function listener(windowID) {
                if (windowID === id) {
                    settings/* currentPopupWindowId.value */.T0.value = 0;
                }
            });
            // firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1271047
            if (false) {}
        }
    }
}
async function removePopupWindow() {
    if (settings/* currentPopupWindowId.value */.T0.value) {
        browser.windows.remove(settings/* currentPopupWindowId.value */.T0.value);
    }
}


/***/ }),

/***/ 35152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ __deprecated__getStorage),
/* harmony export */   "X": () => (/* binding */ __deprecated__setStorage)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97173);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86716);


/**
 * Make sure that the storage is used serially.
 */ class MutexStorage {
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }
    async continue() {
        var ref;
        if (!this.locked) (ref = this.tasks.shift()) === null || ref === void 0 ? void 0 : ref();
    }
    async getStorage(key) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e, storage1)=>{
                if (e) reject(e);
                else resolve(storage1);
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    const stored = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .timeout */ .Vs)(browser.storage.local.get(key), 3000, `Get ${key} timeout.`);
                    callback(null, (stored !== null && stored !== void 0 ? stored : {})[key]);
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    async setStorage(key, value) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e)=>{
                if (e) reject(e);
                else resolve();
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .timeout */ .Vs)(browser.storage.local.set({
                        [key]: value
                    }), 3000, `Set ${key} to ${value} timeout.`);
                    callback(null);
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    constructor(){
        this.tasks = [];
        this.locked = false;
    }
}
const storage = new MutexStorage();
/** Avoid using this. */ async function __deprecated__getStorage(key) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    const value = await storage.getStorage(key);
    return value;
}
/** Avoid using this. */ async function __deprecated__setStorage(key, value, options = {
    howToUpdate: 'replace'
}) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    var ref;
    if (options.howToUpdate === 'merge') value = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((ref = await storage.getStorage(key)) !== null && ref !== void 0 ? ref : {}, value);
    return storage.setStorage(key, value);
}


/***/ }),

/***/ 33188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uE": () => (/* binding */ PermissionAwareRedirectOf),
  "km": () => (/* reexport */ constructRequestPermissionURL)
});

// UNUSED EXPORTS: getRouteURLWithNoParam

// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/extension/popups/utils/index.ts
var utils = __webpack_require__(90845);
;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/utils.ts


function constructRequestPermissionURL(permission) {
    const { origins =[] , permissions =[]  } = permission;
    const params = new URLSearchParams();
    for (const each of origins)params.append('origins', each);
    for (const each1 of permissions)params.append('permissions', each1);
    return `${(0,utils/* getRouteURLWithNoParam */.W)(src/* PopupRoutes.RequestPermission */.mZ.RequestPermission)}?${params.toString()}`;
}

;// CONCATENATED MODULE: ./src/extension/popups/index.tsx


function PermissionAwareRedirectOf(url, context) {
    return (0,utils/* getRouteURLWithNoParam */.W)(src/* PopupRoutes.PermissionAwareRedirect */.mZ.PermissionAwareRedirect) + `?url=${encodeURIComponent(url)}&context=${context}`;
}




/***/ }),

/***/ 90845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getRouteURLWithNoParam)
/* harmony export */ });
function getRouteURLWithNoParam(kind) {
    return browser.runtime.getURL(`/popups.html#${kind}`);
}


/***/ }),

/***/ 56902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ EVM_Messages),
/* harmony export */   "k": () => (/* binding */ EVM_RPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89729);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86716);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32646);



if (false) {}
const EVM_Messages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const EVM_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(1544), __webpack_require__.e(4503)]).then(__webpack_require__.bind(__webpack_require__, 24503))
, EVM_Messages.events.rpc);


/***/ }),

/***/ 62137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ PluginDB)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84124);
/* harmony import */ var _database_Plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45380);


const PluginDB = (0,_database_Plugin__WEBPACK_IMPORTED_MODULE_1__/* .createPluginDatabase */ .X2)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);


/***/ }),

/***/ 86518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addAddress": () => (/* reexport */ addAddress),
  "addProgress": () => (/* reexport */ addProgress),
  "addRecentTransaction": () => (/* reexport */ addRecentTransaction),
  "addToken": () => (/* reexport */ token/* addToken */.Z6),
  "blockToken": () => (/* reexport */ token/* blockToken */.dr),
  "changePassword": () => (/* reexport */ changePassword),
  "clearPassword": () => (/* reexport */ clearPassword),
  "clearRecentTransactions": () => (/* reexport */ clearRecentTransactions),
  "clearUnconfirmedRequests": () => (/* reexport */ clearUnconfirmedRequests),
  "confirmRiskWarning": () => (/* reexport */ confirmRiskWarning),
  "createMnemonicWords": () => (/* reexport */ createMnemonicWords),
  "deleteUnconfirmedRequest": () => (/* reexport */ deleteUnconfirmedRequest),
  "deriveWallet": () => (/* reexport */ deriveWallet),
  "exportKeyStoreJSON": () => (/* reexport */ exportKeyStoreJSON),
  "exportMnemonic": () => (/* reexport */ wallet_exportMnemonic),
  "exportPrivateKey": () => (/* reexport */ wallet_exportPrivateKey),
  "freezeLegacyWallet": () => (/* reexport */ freezeLegacyWallet),
  "fromKeyStore": () => (/* reexport */ fromKeyStore),
  "gatLegacyWallet": () => (/* reexport */ gatLegacyWallet),
  "getAddressNames": () => (/* reexport */ getAddressNames),
  "getAllAddress": () => (/* reexport */ getAllAddress),
  "getAssetsList": () => (/* reexport */ assets_getAssetsList),
  "getAssetsListNFT": () => (/* reexport */ getAssetsListNFT),
  "getCollectionsNFT": () => (/* reexport */ getCollectionsNFT),
  "getDerivableAccounts": () => (/* reexport */ getDerivableAccounts),
  "getEstimateGasFees": () => (/* reexport */ getEstimateGasFees),
  "getGasPriceDictFromDeBank": () => (/* reexport */ getGasPriceDictFromDeBank),
  "getLegacyWalletRecords": () => (/* reexport */ getLegacyWalletRecords),
  "getLegacyWallets": () => (/* reexport */ getLegacyWallets),
  "getReceipt": () => (/* reexport */ getReceipt),
  "getRecentTransaction": () => (/* reexport */ getRecentTransaction),
  "getRecentTransactions": () => (/* reexport */ getRecentTransactions),
  "getRiskWarningConfirmed": () => (/* reexport */ getRiskWarningConfirmed),
  "getSupportedNetworks": () => (/* reexport */ getSupportedNetworks),
  "getToken": () => (/* reexport */ token/* getToken */.LP),
  "getTokens": () => (/* reexport */ token/* getTokens */.lz),
  "getTokensCount": () => (/* reexport */ token/* getTokensCount */.BD),
  "getTokensPaged": () => (/* reexport */ token/* getTokensPaged */.sc),
  "getTransactionList": () => (/* reexport */ transactions_getTransactionList),
  "getUnconfirmedRequests": () => (/* reexport */ getUnconfirmedRequests),
  "getWallet": () => (/* reexport */ getWallet),
  "getWalletPrimary": () => (/* reexport */ getWalletPrimary),
  "getWallets": () => (/* reexport */ getWallets),
  "hasPassword": () => (/* reexport */ hasPassword),
  "hasToken": () => (/* reexport */ token/* hasToken */.hA),
  "hasWallet": () => (/* reexport */ wallet/* hasWallet */.Sx),
  "isLocked": () => (/* reexport */ isLocked),
  "kickToUpdateTokenPrices": () => (/* reexport */ kickToUpdateTokenPrices),
  "lockWallet": () => (/* reexport */ lockWallet),
  "notifyPayloadProgress": () => (/* reexport */ notifyPayloadProgress),
  "notifyProgress": () => (/* reexport */ notifyProgress),
  "notifyTransactionProgress": () => (/* reexport */ notifyTransactionProgress),
  "popUnconfirmedRequest": () => (/* reexport */ popUnconfirmedRequest),
  "pushUnconfirmedRequest": () => (/* reexport */ pushUnconfirmedRequest),
  "recoverWalletFromKeyStoreJSON": () => (/* reexport */ recoverWalletFromKeyStoreJSON),
  "recoverWalletFromMnemonic": () => (/* reexport */ recoverWalletFromMnemonic),
  "recoverWalletFromPrivateKey": () => (/* reexport */ recoverWalletFromPrivateKey),
  "removeAddress": () => (/* reexport */ removeAddress),
  "removeAllProgress": () => (/* reexport */ removeAllProgress),
  "removeProgress": () => (/* reexport */ removeProgress),
  "removeRecentTransaction": () => (/* reexport */ removeRecentTransaction),
  "removeToken": () => (/* reexport */ token/* removeToken */.gy),
  "removeWallet": () => (/* reexport */ removeWallet),
  "renameWallet": () => (/* reexport */ renameWallet),
  "replaceRecentTransaction": () => (/* reexport */ replaceRecentTransaction),
  "resetAccount": () => (/* reexport */ resetAccount),
  "selectAccount": () => (/* reexport */ selectAccount),
  "selectAccountPrepare": () => (/* reexport */ selectAccountPrepare),
  "setDefaultWallet": () => (/* reexport */ setDefaultWallet),
  "setPassword": () => (/* reexport */ setPassword),
  "setRiskWarningConfirmed": () => (/* reexport */ setRiskWarningConfirmed),
  "signTransaction": () => (/* reexport */ wallet_signTransaction),
  "topUnconfirmedRequest": () => (/* reexport */ topUnconfirmedRequest),
  "trackContract": () => (/* reexport */ trackContract),
  "trackNativeToken": () => (/* reexport */ trackNativeToken),
  "trustToken": () => (/* reexport */ token/* trustToken */.om),
  "unlockWallet": () => (/* reexport */ unlockWallet),
  "unwatchTransaction": () => (/* reexport */ unwatchTransaction),
  "updateAccount": () => (/* reexport */ updateAccount),
  "updateMaskAccount": () => (/* reexport */ updateMaskAccount),
  "updateNativeTokenPrices": () => (/* reexport */ updateNativeTokenPrices),
  "updateTokenPrices": () => (/* reexport */ updateTokenPrices),
  "updateUnconfirmedRequest": () => (/* reexport */ updateUnconfirmedRequest),
  "updateWallet": () => (/* reexport */ wallet/* updateWallet */.K8),
  "updateWalletToken": () => (/* reexport */ wallet/* updateWalletToken */.Pq),
  "validatePassword": () => (/* reexport */ validatePassword),
  "verifyPassword": () => (/* reexport */ verifyPassword),
  "watchTransaction": () => (/* reexport */ watchTransaction)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var src = __webpack_require__(26218);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(77031);
// EXTERNAL MODULE: ./src/plugins/Wallet/database/Plugin.db.ts
var Plugin_db = __webpack_require__(62137);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/addressBook.ts




const MAX_ADDRESS_BOOK_SIZE = 20;
async function getAllAddress(chainId) {
    const chunk = await Plugin_db/* PluginDB.get */.O.get('address-book', chainId);
    var ref;
    return (ref = chunk === null || chunk === void 0 ? void 0 : chunk.records) !== null && ref !== void 0 ? ref : [];
}
async function addAddress(chainId, address) {
    const now = new Date();
    const address_ = (0,formatter/* formatEthereumAddress */.j8)(address);
    const chunk = await Plugin_db/* PluginDB.get */.O.get('address-book', chainId);
    var ref, ref1;
    await Plugin_db/* PluginDB.add */.O.add({
        id: chainId,
        type: 'address-book',
        records: (0,uniqBy/* default */.Z)([
            {
                name: address_,
                address: address_
            },
            // place old address last
            ...(ref = chunk === null || chunk === void 0 ? void 0 : chunk.records) !== null && ref !== void 0 ? ref : [], 
        ], (x)=>x.address
        ).slice(0, MAX_ADDRESS_BOOK_SIZE),
        createdAt: (ref1 = chunk === null || chunk === void 0 ? void 0 : chunk.createdAt) !== null && ref1 !== void 0 ? ref1 : now,
        updatedAt: now
    });
    src/* WalletMessages.events.addressBookUpdated.sendToAll */.R$.events.addressBookUpdated.sendToAll();
}
async function removeAddress(chainId, address) {
    const now = new Date();
    const chunk = await Plugin_db/* PluginDB.get */.O.get('address-book', chainId);
    if (!chunk) return;
    var ref;
    await Plugin_db/* PluginDB.add */.O.add({
        id: chainId,
        type: 'address-book',
        records: (ref = chunk.records.filter((x)=>!(0,utils_address/* isSameAddress */.Wr)(x.address, address)
        )) !== null && ref !== void 0 ? ref : [],
        createdAt: chunk.createdAt,
        updatedAt: now
    });
    src/* WalletMessages.events.addressBookUpdated.sendToAll */.R$.events.addressBookUpdated.sendToAll();
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(12705);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js
var bip39_src = __webpack_require__(68440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(7683);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_8495c1478c7f1d196df61d0bdcd91148/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(84176);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+mask-wallet-core@0.1.0-20211013082857-eb62e5f_protobufjs@6.11.2/node_modules/@dimensiondev/mask-wallet-core/proto/index.esm.js
var index_esm = __webpack_require__(23015);
// EXTERNAL MODULE: ./utils-pure/index.ts + 3 modules
var utils_pure = __webpack_require__(99990);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/wallet/maskwallet/index.ts


const Worker = new utils_pure/* OnDemandWorker */.G1(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(5258), __webpack_require__.b)), {
    name: 'MaskWallet'
});
var ErrorCode;
(function(ErrorCode) {
    ErrorCode["KdfParamsInvalid"] = '-3001';
    ErrorCode["PasswordIncorrect"] = '-3002';
    ErrorCode["InvalidKeyIvLength"] = '-3003';
    ErrorCode["InvalidCiphertext"] = '-3004';
    ErrorCode["InvalidPrivateKey"] = '-3005';
    ErrorCode["InvalidPublicKey"] = '-3006';
    ErrorCode["InvalidMnemonic"] = '-3007';
    ErrorCode["InvalidSeed"] = '-3008';
    ErrorCode["InvalidDerivationPath"] = '-3009';
    ErrorCode["InvalidKeyStoreJSON"] = '-3010';
    ErrorCode["NotSupportedPublicKeyType"] = '-3011';
    ErrorCode["NotSupportedCurve"] = '-3012';
    ErrorCode["NotSupportedCipher"] = '-3013';
})(ErrorCode || (ErrorCode = {}));
const ErrorMessage = {
    [ErrorCode.KdfParamsInvalid]: 'Invalid kdf parameters.',
    [ErrorCode.PasswordIncorrect]: 'Incorrect payment password.',
    [ErrorCode.InvalidKeyIvLength]: 'Invalid key IV length.',
    [ErrorCode.InvalidCiphertext]: 'Invalid cipher text.',
    [ErrorCode.InvalidPrivateKey]: 'Invalid private key.',
    [ErrorCode.InvalidPublicKey]: 'Invalid public key.',
    [ErrorCode.InvalidMnemonic]: 'Invalid mnemonic words.',
    [ErrorCode.InvalidSeed]: 'Invalid seed.',
    [ErrorCode.InvalidDerivationPath]: 'Invalid derivation path.',
    [ErrorCode.InvalidKeyStoreJSON]: 'Invalid keystore JSON.',
    [ErrorCode.NotSupportedPublicKeyType]: 'Not supported public key type.',
    [ErrorCode.NotSupportedCurve]: 'Not supported curve.',
    [ErrorCode.NotSupportedCipher]: 'Not supported cipher.'
};
function send(input, output) {
    return (value)=>{
        return new Promise((resolve, reject)=>{
            const req = {
                id: Math.random(),
                data: {
                    [input]: value
                }
            };
            Worker.postMessage(req);
            Worker.addEventListener('message', function f(message) {
                if (message.data.id !== req.id) return;
                Worker.removeEventListener('message', f);
                const data = message.data;
                if (data.response.error) return reject(new Error(ErrorMessage[data.response.error.errorCode] || 'Unknown Error'));
                resolve(data.response[output]);
            });
        });
    };
}
const Coin = index_esm.api.Coin;
const StoredKeyType = index_esm.api.StoredKeyType;
const StoredKeyImportType = index_esm.api.StoredKeyImportType;
const StoredKeyExportType = index_esm.api.StoredKeyExportType;
const loadStoredKey = send('param_load_stored_key', 'resp_load_stored_key');
const createStoredKey = send('param_create_stored_key', 'resp_create_stored_key');
const importPrivateKey = send('param_import_private_key', 'resp_import_private_key');
const importMnemonic = send('param_import_mnemonic', 'resp_import_mnemonic');
const importJSON = send('param_import_json', 'resp_import_json');
const createAccountOfCoinAtPath = send('param_create_account_of_coin_at_path', 'resp_create_account_of_coin_at_path');
const exportPrivateKey = send('param_export_private_key', 'resp_export_private_key');
const exportPrivateKeyOfPath = send('param_export_private_key_of_path', 'resp_export_private_key');
const exportMnemonic = send('param_export_mnemonic', 'resp_export_mnemonic');
const exportKeyStoreJSONOfAddress = send('param_export_key_store_json_of_address', 'resp_export_key_store_json');
const exportKeyStoreJSONOfPath = send('param_export_key_store_json_of_path', 'resp_export_key_store_json');
const exportUpdateKeyStorePassword = send('param_update_key_store_password', 'resp_update_key_store_password');
const signTransaction = send('param_sign_transaction', 'resp_sign_transaction');
const getLibVersion = send('param_get_version', 'resp_get_version');
const validate = send('param_validation', 'resp_validate');
const getSupportImportTypes = send('param_get_stored_key_import_type', 'resp_get_stored_key_import_type');
const getSupportExportTypes = send('param_get_stored_key_export_type', 'resp_get_stored_key_export_type');

// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/database/index.ts + 1 modules
var database = __webpack_require__(24930);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/validate.js + 1 modules
var esm_browser_validate = __webpack_require__(68317);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 3 modules
var locales_legacy = __webpack_require__(90795);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/wallet/password.ts



let password_password = '';
async function INTERNAL_getPassword() {
    return password_password ? database/* decryptSecret */.Q0(password_password) : '';
}
async function INTERNAL_getPasswordRequired() {
    const password_ = await INTERNAL_getPassword();
    if (!password_) throw new Error('No password set yet or expired.');
    return password_;
}
function INTERNAL_setPassword(newPassword) {
    validatePasswordRequired(newPassword);
    password_password = newPassword;
}
async function setPassword(newPassword) {
    validatePasswordRequired(newPassword);
    await database/* encryptSecret */.lM(newPassword);
    INTERNAL_setPassword(newPassword);
}
async function hasPassword() {
    return database/* hasSecret */.Tx();
}
async function verifyPassword(unverifiedPassword) {
    if (password_password === unverifiedPassword) return true;
    return (0,esm_browser_validate/* default */.Z)(await database/* decryptSecret */.Q0(unverifiedPassword));
}
async function verifyPasswordRequired(unverifiedPassword) {
    if (!await verifyPassword(unverifiedPassword)) throw new Error(locales_legacy/* i18n.t */.a.t('popups_wallet_unlock_error_password'));
    return true;
}
async function changePassword(newPassword) {
    validatePasswordRequired(newPassword);
    const oldPassword = await INTERNAL_getPasswordRequired();
    if (oldPassword === newPassword) throw new Error('Failed to set the same password as the old one.');
    await database/* updateSecret */.nG(oldPassword, newPassword);
}
function validatePassword(unverifiedPassword) {
    if (!unverifiedPassword) return false;
    if (unverifiedPassword.length < 8) return false;
    if (unverifiedPassword.length > 20) return false;
    return [
        /[A-Z]/,
        /[a-z]/,
        /\d/,
        /[^\dA-Za-z]/
    ].filter((x)=>x.test(unverifiedPassword)
    ).length >= 2;
}
function validatePasswordRequired(unverifiedPassword) {
    if (!validatePassword(unverifiedPassword)) throw new Error(locales_legacy/* i18n.t */.a.t('popups_wallet_password_satisfied_requirement'));
    return true;
}
function clearPassword() {
    password_password = '';
}

// EXTERNAL MODULE: ./src/extension/background-script/EthereumService.ts + 13 modules
var EthereumService = __webpack_require__(98065);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(4103);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/database/token.ts
var token = __webpack_require__(18438);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/database/wallet.ts
var wallet = __webpack_require__(94711);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/wallet/locker.ts




async function isLocked() {
    return await hasPassword() && !await INTERNAL_getPassword();
}
async function lockWallet() {
    clearPassword();
    settings/* currentMaskWalletLockStatusSettings.value */.Jg.value = types/* LockStatus.LOCKED */.Ow.LOCKED;
    messages/* WalletMessages.events.walletLockStatusUpdated.sendToAll */.R.events.walletLockStatusUpdated.sendToAll(true);
}
async function unlockWallet(unverifiedPassword) {
    if (!isLocked()) return true;
    try {
        await verifyPasswordRequired(unverifiedPassword);
        INTERNAL_setPassword(unverifiedPassword);
        settings/* currentMaskWalletLockStatusSettings.value */.Jg.value = types/* LockStatus.UNLOCK */.Ow.UNLOCK;
        messages/* WalletMessages.events.walletLockStatusUpdated.sendToAll */.R.events.walletLockStatusUpdated.sendToAll(false);
        return true;
    } catch  {
        messages/* WalletMessages.events.walletLockStatusUpdated.sendToAll */.R.events.walletLockStatusUpdated.sendToAll(true);
        return false;
    }
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/wallet/index.ts












function bumpDerivationPath(path = `${src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`) {
    const splitted = path.split('/');
    var ref;
    const index = Number.parseInt((ref = (0,last/* default */.Z)(splitted)) !== null && ref !== void 0 ? ref : '', 10);
    if (Number.isNaN(index) || index < 0 || splitted.length !== 6) throw new Error('Invalid derivation path.');
    return [
        ...splitted.slice(0, -1),
        index + 1
    ].join('/');
}
// token db

// wallet db

// password

// locker

async function getWallet(address) {
    if (native_rpc/* hasNativeAPI */._) {
        const wallets = await getWallets(types/* ProviderType.MaskWallet */.lP.MaskWallet);
        return wallets.find((x)=>(0,utils_address/* isSameAddress */.Wr)(x.address, address)
        );
    }
    return database/* getWallet */.iL(address);
}
async function getWallets(providerType) {
    if (native_rpc/* hasNativeAPI */._) {
        if (providerType && providerType !== types/* ProviderType.MaskWallet */.lP.MaskWallet) return [];
        // read wallet from rpc
        const accounts = await EthereumService.getAccounts();
        var ref;
        const address = (ref = (0,head/* default */.Z)(accounts)) !== null && ref !== void 0 ? ref : '';
        if (!address) return [];
        const now = new Date();
        const address_ = (0,formatter/* formatEthereumAddress */.j8)(address);
        return [
            {
                id: address_,
                name: 'Mask Network',
                address: address_,
                createdAt: now,
                updatedAt: now,
                erc20_token_blacklist: new Set(),
                erc20_token_whitelist: new Set(),
                erc721_token_whitelist: new Set(),
                erc721_token_blacklist: new Set(),
                erc1155_token_whitelist: new Set(),
                erc1155_token_blacklist: new Set(),
                configurable: false,
                hasStoredKeyInfo: false,
                hasDerivationPath: false
            }, 
        ];
    }
    return database/* getWallets */.MX(providerType);
}
function createMnemonicWords() {
    return bip39_src/* generateMnemonic */.OF().split(' ');
}
async function getWalletPrimary() {
    if (native_rpc/* hasNativeAPI */._) return null;
    var ref1;
    return (ref1 = (0,head/* default */.Z)((await database/* getWallets */.MX(types/* ProviderType.MaskWallet */.lP.MaskWallet)).filter((x)=>{
        var ref;
        return ((ref = x.storedKeyInfo) === null || ref === void 0 ? void 0 : ref.type) === index_esm.api.StoredKeyType.Mnemonic;
    }).sort((a, z)=>a.createdAt.getTime() - z.createdAt.getTime()
    ))) !== null && ref1 !== void 0 ? ref1 : null;
}
async function getDerivableAccounts(mnemonic, page, pageSize = 10) {
    const oneTimePassword = 'MASK';
    const imported = await importMnemonic({
        mnemonic,
        password: oneTimePassword
    });
    if (!(imported === null || imported === void 0 ? void 0 : imported.StoredKey)) throw new Error('Failed to import the wallet.');
    const accounts = [];
    for(let i = pageSize * page; i < pageSize * (page + 1); i += 1){
        var ref;
        const derivationPath = `${src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/${i}`;
        const created = await createAccountOfCoinAtPath({
            coin: index_esm.api.Coin.Ethereum,
            password: oneTimePassword,
            derivationPath,
            StoredKeyData: imported.StoredKey.data
        });
        if (!(created === null || created === void 0 ? void 0 : (ref = created.account) === null || ref === void 0 ? void 0 : ref.address)) throw new Error(`Failed to create account at path: ${derivationPath}.`);
        accounts.push({
            index: i,
            address: created.account.address,
            derivationPath
        });
    }
    return accounts;
}
async function wallet_signTransaction(address, config) {
    var ref, ref2, ref3, ref4;
    const password_ = await INTERNAL_getPasswordRequired();
    const wallet = await database/* getWalletRequired */.zr(address);
    var ref5, ref6, ref7, _maxFeePerGas, _maxFeePerGas1;
    return signTransaction({
        password: password_,
        coin: index_esm.api.Coin.Ethereum,
        storedKeyData: (ref = wallet.storedKeyInfo) === null || ref === void 0 ? void 0 : ref.data,
        sign_input: {
            amount: (ref5 = config.value) !== null && ref5 !== void 0 ? ref5 : '0x0',
            gas_limit: (ref6 = (ref2 = config.gas) === null || ref2 === void 0 ? void 0 : ref2.toString()) !== null && ref6 !== void 0 ? ref6 : '0x0',
            gas_price: (ref7 = (ref3 = config.gasPrice) === null || ref3 === void 0 ? void 0 : ref3.toString()) !== null && ref7 !== void 0 ? ref7 : '0x0',
            chain_id: config.chainId ? (0,lib.toHex)((ref4 = config.chainId) === null || ref4 === void 0 ? void 0 : ref4.toString()) : '0x1',
            max_fee_per_gas: (_maxFeePerGas = config.maxFeePerGas) !== null && _maxFeePerGas !== void 0 ? _maxFeePerGas : '0x0',
            max_inclusion_fee_per_gas: (_maxFeePerGas1 = config.maxFeePerGas) !== null && _maxFeePerGas1 !== void 0 ? _maxFeePerGas1 : '0x0',
            nonce: config.nonce ? (0,lib.toHex)(config.nonce) : '0x0',
            to_address: config.to,
            payload: config.data ? (0,esm/* encodeText */.YT)(config.data) : new Uint8Array()
        }
    });
}
async function deriveWallet(name) {
    const password_ = await INTERNAL_getPasswordRequired();
    // derive wallet base on the primary wallet
    const primaryWallet = await getWalletPrimary();
    if (!(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.storedKeyInfo)) throw new Error('Cannot find the primary wallet.');
    let derivedTimes = 0;
    var _latestDerivationPath;
    let latestDerivationPath = (_latestDerivationPath = primaryWallet.latestDerivationPath) !== null && _latestDerivationPath !== void 0 ? _latestDerivationPath : primaryWallet.derivationPath;
    if (!latestDerivationPath) throw new Error('Failed to derive wallet without derivation path.');
    // eslint-disable-next-line no-constant-condition
    while(true){
        var ref;
        derivedTimes += 1;
        // protect from endless looping
        if (derivedTimes >= src/* MAX_DERIVE_COUNT */.IX) {
            await database/* updateWallet */.K8(primaryWallet.address, {
                latestDerivationPath
            });
            throw new Error('Exceed the max derivation times.');
        }
        // bump index
        latestDerivationPath = bumpDerivationPath(latestDerivationPath);
        // derive a new wallet
        const created = await createAccountOfCoinAtPath({
            coin: index_esm.api.Coin.Ethereum,
            name,
            password: password_,
            derivationPath: latestDerivationPath,
            StoredKeyData: primaryWallet.storedKeyInfo.data
        });
        if (!(created === null || created === void 0 ? void 0 : (ref = created.account) === null || ref === void 0 ? void 0 : ref.address)) throw new Error(`Failed to create account at path: ${latestDerivationPath}.`);
        // check its existence in DB
        if (await database/* hasWallet */.Sx(created.account.address)) continue;
        // update the primary wallet
        await database/* updateWallet */.K8(primaryWallet.address, {
            latestDerivationPath
        });
        // found a valid candidate, get the private key of it
        const exported = await exportPrivateKeyOfPath({
            coin: index_esm.api.Coin.Ethereum,
            password: password_,
            derivationPath: latestDerivationPath,
            StoredKeyData: primaryWallet.storedKeyInfo.data
        });
        if (!(exported === null || exported === void 0 ? void 0 : exported.privateKey)) throw new Error(`Failed to export private key at path: ${latestDerivationPath}`);
        // import the candidate by the private key
        return recoverWalletFromPrivateKey(name, exported.privateKey);
    }
}
async function renameWallet(address, name) {
    const name_ = name.trim();
    if (name_.length <= 0 || name_.length > 12) throw new Error('Invalid wallet name.');
    await database/* updateWallet */.K8(address, {
        name: name_
    });
}
async function removeWallet(address, unverifiedPassword) {
    await verifyPasswordRequired(unverifiedPassword);
    // delete a wallet with derivationPath is not allowed
    const wallet = await database/* getWalletRequired */.zr(address);
    if (wallet.derivationPath) throw new Error('Illegal operation.');
    await database/* deleteWallet */.tJ(wallet.address);
}
async function wallet_exportMnemonic(address, unverifiedPassword) {
    var ref;
    if (unverifiedPassword) await verifyPasswordRequired(unverifiedPassword);
    const password_ = await INTERNAL_getPasswordRequired();
    const wallet = await database/* getWalletRequired */.zr(address);
    if (((ref = wallet.storedKeyInfo) === null || ref === void 0 ? void 0 : ref.type) !== index_esm.api.StoredKeyType.Mnemonic) throw new Error(`Cannot export mnemonic words of ${address}.`);
    const exported = await exportMnemonic({
        password: password_,
        StoredKeyData: wallet.storedKeyInfo.data
    });
    if (!(exported === null || exported === void 0 ? void 0 : exported.mnemonic)) throw new Error(`Failed to export mnemonic words of ${address}.`);
    return exported.mnemonic;
}
async function wallet_exportPrivateKey(address, unverifiedPassword) {
    if (unverifiedPassword) await verifyPasswordRequired(unverifiedPassword);
    const password_ = await INTERNAL_getPasswordRequired();
    const wallet = await database/* getWalletRequired */.zr(address);
    if (!wallet.storedKeyInfo) throw new Error(`Cannot export private key of ${address}.`);
    var _derivationPath;
    const exported = wallet.derivationPath ? await exportPrivateKeyOfPath({
        coin: index_esm.api.Coin.Ethereum,
        derivationPath: (_derivationPath = wallet.derivationPath) !== null && _derivationPath !== void 0 ? _derivationPath : `${src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`,
        password: password_,
        StoredKeyData: wallet.storedKeyInfo.data
    }) : await exportPrivateKey({
        coin: index_esm.api.Coin.Ethereum,
        password: password_,
        StoredKeyData: wallet.storedKeyInfo.data
    });
    if (!(exported === null || exported === void 0 ? void 0 : exported.privateKey)) throw new Error(`Failed to export private key of ${address}.`);
    return exported.privateKey;
}
async function exportKeyStoreJSON(address, unverifiedPassword) {
    if (unverifiedPassword) await verifyPasswordRequired(unverifiedPassword);
    const password_ = await INTERNAL_getPasswordRequired();
    const wallet = await database/* getWalletRequired */.zr(address);
    if (!wallet.storedKeyInfo) throw new Error(`Cannot export private key of ${address}.`);
    var _derivationPath;
    const exported = wallet.derivationPath ? await exportKeyStoreJSONOfPath({
        coin: index_esm.api.Coin.Ethereum,
        derivationPath: (_derivationPath = wallet.derivationPath) !== null && _derivationPath !== void 0 ? _derivationPath : `${src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`,
        password: password_,
        newPassword: unverifiedPassword,
        StoredKeyData: wallet.storedKeyInfo.data
    }) : await exportKeyStoreJSONOfAddress({
        coin: index_esm.api.Coin.Ethereum,
        password: password_,
        newPassword: unverifiedPassword,
        StoredKeyData: wallet.storedKeyInfo.data
    });
    if (!(exported === null || exported === void 0 ? void 0 : exported.json)) throw new Error(`Failed to export keystore JSON of ${address}.`);
    return exported.json;
}
async function recoverWalletFromMnemonic(name, mnemonic, derivationPath = `${src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`) {
    const password_ = await INTERNAL_getPasswordRequired();
    const imported = await importMnemonic({
        mnemonic,
        password: password_
    });
    if (!(imported === null || imported === void 0 ? void 0 : imported.StoredKey)) throw new Error('Failed to import the wallet.');
    if (await database/* hasStoredKeyInfo */.Ox(imported.StoredKey)) {
        const exported = await exportPrivateKeyOfPath({
            coin: index_esm.api.Coin.Ethereum,
            derivationPath,
            password: password_,
            StoredKeyData: imported.StoredKey.data
        });
        if (!(exported === null || exported === void 0 ? void 0 : exported.privateKey)) throw new Error(`Failed to export private key at path: ${derivationPath}`);
        return recoverWalletFromPrivateKey(name, exported.privateKey);
    } else {
        var ref;
        const created = await createAccountOfCoinAtPath({
            coin: index_esm.api.Coin.Ethereum,
            name,
            password: password_,
            derivationPath,
            StoredKeyData: imported.StoredKey.data
        });
        if (!(created === null || created === void 0 ? void 0 : (ref = created.account) === null || ref === void 0 ? void 0 : ref.address)) throw new Error('Failed to create the wallet.');
        return database/* addWallet */.ry(created.account.address, name, derivationPath, imported.StoredKey);
    }
}
async function recoverWalletFromPrivateKey(name, privateKey) {
    var ref;
    const password_ = await INTERNAL_getPasswordRequired();
    const imported = await importPrivateKey({
        coin: index_esm.api.Coin.Ethereum,
        name,
        password: password_,
        privateKey: privateKey.replace(/^0x/, '').trim()
    });
    if (!(imported === null || imported === void 0 ? void 0 : imported.StoredKey)) throw new Error('Failed to import the wallet.');
    const created = await createAccountOfCoinAtPath({
        coin: index_esm.api.Coin.Ethereum,
        name,
        password: password_,
        derivationPath: null,
        StoredKeyData: imported.StoredKey.data
    });
    if (!(created === null || created === void 0 ? void 0 : (ref = created.account) === null || ref === void 0 ? void 0 : ref.address)) throw new Error('Failed to create the wallet.');
    return database/* addWallet */.ry(created.account.address, name, undefined, imported.StoredKey);
}
async function recoverWalletFromKeyStoreJSON(name, json, jsonPassword) {
    var ref;
    const password_ = await INTERNAL_getPasswordRequired();
    const imported = await importJSON({
        coin: index_esm.api.Coin.Ethereum,
        json,
        keyStoreJsonPassword: jsonPassword,
        name,
        password: password_
    });
    if (!(imported === null || imported === void 0 ? void 0 : imported.StoredKey)) throw new Error('Failed to import the wallet.');
    const created = await createAccountOfCoinAtPath({
        coin: index_esm.api.Coin.Ethereum,
        derivationPath: null,
        name,
        password: password_,
        StoredKeyData: imported.StoredKey.data
    });
    if (!(created === null || created === void 0 ? void 0 : (ref = created.account) === null || ref === void 0 ? void 0 : ref.address)) throw new Error('Failed to create the wallet.');
    return database/* addWallet */.ry(created.account.address, name, undefined, imported.StoredKey);
}

// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared = __webpack_require__(28615);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/account.ts







async function updateAccount(options = {}) {
    if (options.chainId && !options.networkType) options.networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(options.chainId);
    if (!options.chainId && options.networkType) options.chainId = (0,chainDetailed/* getChainIdFromNetworkType */.EP)(options.networkType);
    // make sure account and provider type to be updating both
    if (options.account && !options.providerType || options.account === undefined && options.providerType) throw new Error('Account and provider type must be updating both');
    const { name , account , chainId , providerType , networkType  } = options;
    // update wallet in the DB
    if (account && providerType && dist.EthereumAddress.isValid(account) && providerType !== types/* ProviderType.MaskWallet */.lP.MaskWallet && !await (0,wallet/* hasWallet */.Sx)(account)) {
        await (0,wallet/* updateWallet */.K8)(account, {});
    }
    // update global settings
    if (chainId) {
        settings/* currentChainIdSettings.value */.wU.value = chainId;
        if (native_rpc/* hasNativeAPI */._) {
            native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.wallet_switchBlockChain */.Nz.api.wallet_switchBlockChain({
                networkId: chainId
            });
        }
    }
    if (networkType) settings/* currentNetworkSettings.value */.fX.value = networkType;
    if (account !== undefined) settings/* currentAccountSettings.value */.aK.value = account;
    if (providerType) settings/* currentProviderSettings.value */.t1.value = providerType;
    if (settings/* currentProviderSettings.value */.t1.value === types/* ProviderType.MaskWallet */.lP.MaskWallet) {
        await updateMaskAccount({
            account,
            chainId,
            networkType
        });
    }
}
async function updateMaskAccount(options) {
    if (options.chainId && !options.networkType) options.networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(options.chainId);
    if (!options.chainId && options.networkType) options.chainId = (0,chainDetailed/* getChainIdFromNetworkType */.EP)(options.networkType);
    const { account , chainId , networkType  } = options;
    if (chainId) settings/* currentMaskWalletChainIdSettings.value */.DT.value = chainId;
    if (networkType) settings/* currentMaskWalletNetworkSettings.value */.br.value = networkType;
    if (account && dist.EthereumAddress.isValid(account)) settings/* currentMaskWalletAccountSettings.value */.T_.value = account;
}
async function resetAccount(options = {}) {
    const { account ='' , chainId , networkType , providerType  } = options;
    settings/* currentAccountSettings.value */.aK.value = account;
    if (providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet) settings/* currentMaskWalletAccountSettings.value */.T_.value = account;
    if (chainId) settings/* currentChainIdSettings.value */.wU.value = chainId;
    if (networkType) settings/* currentNetworkSettings.value */.fX.value = networkType;
    if (providerType) settings/* currentProviderSettings.value */.t1.value = providerType;
}
// #region select wallet with popups
let callbackMemorized;
async function selectAccountPrepare(callback) {
    callbackMemorized = callback;
}
async function selectAccount(accounts, chainId) {
    callbackMemorized === null || callbackMemorized === void 0 ? void 0 : callbackMemorized(accounts, chainId);
}
// #endregion
async function setDefaultWallet() {
    var ref;
    if (settings/* currentAccountSettings.value */.aK.value) return;
    const wallets = await getWallets();
    const address = (ref = (0,head/* default */.Z)(wallets)) === null || ref === void 0 ? void 0 : ref.address;
    if (address) await updateAccount({
        account: address,
        providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
    });
}
async function getSupportedNetworks() {
    return [
        types/* NetworkType.Ethereum */.td.Ethereum,
        shared/* Flags.bsc_enabled */.vU.bsc_enabled ? types/* NetworkType.Binance */.td.Binance : undefined,
        shared/* Flags.polygon_enabled */.vU.polygon_enabled ? types/* NetworkType.Polygon */.td.Polygon : undefined,
        shared/* Flags.arbitrum_enabled */.vU.arbitrum_enabled ? types/* NetworkType.Arbitrum */.td.Arbitrum : undefined,
        shared/* Flags.xdai_enabled */.vU.xdai_enabled ? types/* NetworkType.xDai */.td.xDai : undefined,
        shared/* Flags.celo_enabled */.vU.celo_enabled ? types/* NetworkType.Celo */.td.Celo : undefined,
        shared/* Flags.fantom_enabled */.vU.fantom_enabled ? types/* NetworkType.Fantom */.td.Fantom : undefined,
        shared/* Flags.avalanche_enabled */.vU.avalanche_enabled ? types/* NetworkType.Avalanche */.td.Avalanche : undefined,
        shared/* Flags.aurora_enabled */.vU.aurora_enabled ? types/* NetworkType.Aurora */.td.Aurora : undefined, 
    ].filter(Boolean);
}

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(52522);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var utils_token = __webpack_require__(28389);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 25 modules
var constants = __webpack_require__(72873);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js
var values = __webpack_require__(56889);
// EXTERNAL MODULE: ./src/plugins/EVM/messages.ts
var EVM_messages = __webpack_require__(56902);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var urlcat_dist = __webpack_require__(19802);
var urlcat_dist_default = /*#__PURE__*/__webpack_require__.n(urlcat_dist);
;// CONCATENATED MODULE: ./src/plugins/Wallet/apis/debank.ts


const DEBANK_API = 'https://api.debank.com';
const DEBANK_OPEN_API = 'https://openapi.debank.com';
async function getTransactionList(address, chainId) {
    const { CHAIN_ID =''  } = (0,constants/* getDeBankConstants */.Bx)(chainId);
    if (!CHAIN_ID) return null;
    const response = await fetch(`${DEBANK_API}/history/list?user_addr=${address.toLowerCase()}&chain=${CHAIN_ID}`);
    return await response.json();
}
async function getAssetsList(address) {
    const response = await fetch(`${DEBANK_OPEN_API}/v1/user/token_list?is_all=true&has_balance=true&id=${address.toLowerCase()}`);
    try {
        var ref;
        return (ref = await response.json()) !== null && ref !== void 0 ? ref : [];
    } catch  {
        return [];
    }
}
async function getGasPriceDict(chainId) {
    const { CHAIN_ID =''  } = (0,constants/* getDeBankConstants */.Bx)(chainId);
    if (!CHAIN_ID) return null;
    const response = await fetch(urlcat_dist_default()(DEBANK_API, '/chain/gas_price_dict_v2', {
        chain: CHAIN_ID
    }));
    const result = await response.json();
    if (result.error_code === 0) {
        return result;
    }
    return null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/socket.io-client@2.4.0/node_modules/socket.io-client/lib/index.js
var socket_io_client_lib = __webpack_require__(99941);
var socket_io_client_lib_default = /*#__PURE__*/__webpack_require__.n(socket_io_client_lib);
;// CONCATENATED MODULE: ./src/plugins/Wallet/apis/zerion.ts

const ZERION_API = 'wss://api-v4.zerion.io';
// cspell:disable-next-line
const ZERION_TOKEN = 'Mask.yEUEfDnoxgLBwNEcYPVussxxjdrGwapj';
let socket = null;
function createSocket() {
    if (socket === null || socket === void 0 ? void 0 : socket.connected) return socket;
    if (socket) socket.removeAllListeners();
    return socket = socket_io_client_lib_default()(`${ZERION_API}/address`, {
        transports: [
            'websocket'
        ],
        query: {
            api_token: ZERION_TOKEN
        },
        // disable the auto reconnection
        reconnection: false
    });
}
function verify(request, response) {
    // each value in request payload must be found in response meta
    return Object.keys(request.payload).every((key)=>{
        const requestValue = request.payload[key];
        const responseMetaValue = response.meta[key];
        if (typeof requestValue === 'object') {
            return JSON.stringify(requestValue) === JSON.stringify(responseMetaValue);
        }
        return responseMetaValue === requestValue;
    });
}
function subscribeFromZerion(socketNamespace, requestBody) {
    return new Promise((resolve)=>{
        const { socket: socket1 , namespace  } = socketNamespace;
        const model = requestBody.scope[0];
        socket1.emit('subscribe', requestBody);
        socket1.on(`received ${namespace} ${model}`, (data)=>{
            if (verify(requestBody, data)) {
                resolve(data);
            }
        });
    });
}
async function zerion_getTransactionList(address, scope, page, size = 30) {
    return await subscribeFromZerion({
        namespace: 'address',
        socket: createSocket()
    }, {
        scope: [
            scope
        ],
        payload: {
            address,
            currency: 'usd',
            transactions_limit: size,
            transactions_offset: (page !== null && page !== void 0 ? page : 0) * size,
            transactions_search_query: ''
        }
    });
}
async function zerion_getAssetsList(address, scope) {
    return await subscribeFromZerion({
        namespace: 'address',
        socket: createSocket()
    }, {
        scope: [
            scope
        ],
        payload: {
            address,
            currency: 'usd'
        }
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/enum.ts
var utils_enum = __webpack_require__(18392);
;// CONCATENATED MODULE: ./src/plugins/Wallet/pipes/index.ts


function resolvePortfolioDataProviderName(provider) {
    switch(provider){
        case FungibleAssetProvider.ZERION:
            return 'Zerion';
        case FungibleAssetProvider.DEBANK:
            return 'Debank';
        default:
            unreachable(provider);
    }
}
function resolveDebankTransactionType(category) {
    switch(category){
        case 'send':
            return types/* FilterTransactionType.SEND */.sl.SEND;
        case 'receive':
            return types/* FilterTransactionType.RECEIVE */.sl.RECEIVE;
        default:
            return types/* FilterTransactionType.ALL */.sl.ALL;
    }
}
function resolveZerionAssetsScopeName(networkType) {
    var _ASSETS_SCOPE_NAME;
    return (_ASSETS_SCOPE_NAME = (0,constants/* getZerionConstants */.oV)((0,chainDetailed/* getChainIdFromNetworkType */.EP)(networkType)).ASSETS_SCOPE_NAME) !== null && _ASSETS_SCOPE_NAME !== void 0 ? _ASSETS_SCOPE_NAME : '';
}
function resolveZerionTransactionsScopeName(networkType) {
    var _TRANSACTIONS_SCOPE_NAME;
    return (_TRANSACTIONS_SCOPE_NAME = (0,constants/* getZerionConstants */.oV)((0,chainDetailed/* getChainIdFromNetworkType */.EP)(networkType)).TRANSACTIONS_SCOPE_NAME) !== null && _TRANSACTIONS_SCOPE_NAME !== void 0 ? _TRANSACTIONS_SCOPE_NAME : '';
}
const resolveChainByScope = (0,utils_enum/* createLookupTableResolver */.F)({
    assets: {
        chain: 'eth',
        chainId: types/* ChainId.Mainnet */.a_.Mainnet
    },
    'bsc-assets': {
        chain: 'bsc',
        chainId: types/* ChainId.BSC */.a_.BSC
    },
    'polygon-assets': {
        chain: 'matic',
        chainId: types/* ChainId.Matic */.a_.Matic
    }
}, {
    chain: 'unknown'
});

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/assets.ts










async function getCollectionsNFT(address, chainId, provider, page, size) {
    if (provider === types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA) {
        const { data , hasNextPage  } = await EVM_messages/* EVM_RPC.getCollections */.k.getCollections({
            address,
            chainId,
            provider,
            page: page !== null && page !== void 0 ? page : 0,
            size: size !== null && size !== void 0 ? size : 50
        });
        return {
            collections: data,
            hasNextPage
        };
    }
    return {
        collections: [],
        hasNextPage: false
    };
}
async function getAssetsListNFT(address, chainId, provider, page, size, collection, continuation) {
    if (!dist.EthereumAddress.isValid(address)) return {
        assets: [],
        hasNextPage: false
    };
    const pageInfo = {
        collection,
        continuation
    };
    const { data , hasNextPage  } = await EVM_messages/* EVM_RPC.getNFTsByPagination */.k.getNFTsByPagination({
        from: address,
        chainId,
        provider,
        page: page !== null && page !== void 0 ? page : 0,
        size: size !== null && size !== void 0 ? size : 50,
        pageInfo
    });
    return {
        assets: data,
        hasNextPage: hasNextPage
    };
}
const filterAssetType = [
    'compound',
    'trash',
    'uniswap',
    'uniswap-v2',
    'nft'
];
async function assets_getAssetsList(address, provider, network) {
    if (!dist.EthereumAddress.isValid(address)) return [];
    switch(provider){
        case types/* FungibleAssetProvider.ZERION */.Am.ZERION:
            let result = [];
            // xdai-assets is not support
            const scopes = network ? [
                resolveZerionAssetsScopeName(network)
            ] : [
                'assets',
                'bsc-assets',
                'polygon-assets',
                'arbitrum-assets',
                'avalanche-assets'
            ];
            for (const scope of scopes){
                const { meta , payload  } = await zerion_getAssetsList(address, scope);
                if (meta.status !== 'ok') throw new Error('Fail to load assets.');
                const assets = Object.entries(payload).map(([key, value])=>{
                    if (key === 'assets') {
                        const assetsList = (0,values/* default */.Z)(value).filter(({ asset  })=>asset.is_displayable && !filterAssetType.some((type)=>type === asset.type
                            ) && asset.icon_url
                        );
                        return formatAssetsFromZerion(assetsList, key);
                    }
                    return formatAssetsFromZerion((0,values/* default */.Z)(value), key);
                });
                result = [
                    ...result,
                    ...assets.flat()
                ];
            }
            return result;
        case types/* FungibleAssetProvider.DEBANK */.Am.DEBANK:
            const data = await getAssetsList(address);
            return formatAssetsFromDebank(data, network);
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}
function formatAssetsFromDebank(data, network) {
    return data.filter((x)=>!network || (0,chainDetailed/* getChainIdFromName */.np)(x.chain) === (0,chainDetailed/* getChainIdFromNetworkType */.EP)(network)
    ).filter((x)=>x.is_verified
    ).map((y)=>{
        var ref;
        const chainIdFromChain = (ref = (0,chainDetailed/* getChainIdFromName */.np)(y.chain)) !== null && ref !== void 0 ? ref : types/* ChainId.Mainnet */.a_.Mainnet;
        // the asset id is the token address or the name of the chain
        const chainIdFromId = (0,chainDetailed/* getChainIdFromName */.np)(y.id);
        var _price;
        return {
            chain: (0,chainDetailed/* getChainShortName */.F3)(chainIdFromChain).toLowerCase(),
            token: chainIdFromId && (0,chainDetailed/* isChainIdMainnet */.yX)(chainIdFromId) ? (0,utils_token/* createNativeToken */.$c)(chainIdFromChain) : (0,utils_token/* createERC20Token */.wY)(chainIdFromChain, (0,formatter/* formatEthereumAddress */.j8)(y.id), y.decimals, y.name, y.symbol, y.logo_url ? [
                y.logo_url
            ] : undefined),
            balance: (0,base_src/* rightShift */.pu)(y.amount, y.decimals).toFixed(),
            price: {
                [types/* CurrencyType.USD */.V2.USD]: (0,base_src/* toFixed */.FH)(y.price)
            },
            value: {
                [types/* CurrencyType.USD */.V2.USD]: (0,base_src/* multipliedBy */.$q)((_price = y.price) !== null && _price !== void 0 ? _price : 0, y.amount).toFixed()
            },
            logoURI: y.logo_url
        };
    });
}
function formatAssetsFromZerion(data, scope) {
    return data.map(({ asset , quantity  })=>{
        var ref;
        const balance = (0,base_src/* leftShift */.w5)(quantity, asset.decimals).toNumber();
        var ref1, ref2;
        const value = (ref2 = (ref1 = (ref = asset.price) === null || ref === void 0 ? void 0 : ref.value) !== null && ref1 !== void 0 ? ref1 : asset.value) !== null && ref2 !== void 0 ? ref2 : 0;
        return {
            token: {
                name: asset.name,
                symbol: asset.symbol,
                decimals: asset.decimals,
                address: (0,utils_token/* isNativeTokenSymbol */.VD)(asset.symbol) ? (0,constants/* getTokenConstants */.aV)().NATIVE_TOKEN_ADDRESS : asset.asset_code,
                chainId: resolveChainByScope(scope).chainId,
                type: (0,utils_token/* isNativeTokenSymbol */.VD)(asset.symbol) ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20,
                logoURI: asset.icon_url
            },
            chain: resolveChainByScope(scope).chain,
            balance: quantity,
            price: {
                usd: new (bignumber_default())(value).toString()
            },
            value: {
                usd: (0,base_src/* multipliedBy */.$q)(balance, value).toString()
            },
            logoURI: asset.icon_url
        };
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var isNil = __webpack_require__(29330);
;// CONCATENATED MODULE: ./src/plugins/Wallet/types/zerion.ts
var ZerionRBDTransactionType;
(function(ZerionRBDTransactionType) {
    ZerionRBDTransactionType["SEND"] = 'send';
    ZerionRBDTransactionType["RECEIVE"] = 'receive';
    ZerionRBDTransactionType["TRADE"] = 'trade';
    ZerionRBDTransactionType["AUTHORIZE"] = 'authorize';
    ZerionRBDTransactionType["EXECUTION"] = 'execution';
    ZerionRBDTransactionType["DEPLOYMENT"] = 'deployment';
    ZerionRBDTransactionType["CANCEL"] = 'cancel';
    ZerionRBDTransactionType["DEPOSIT"] = 'deposit';
    ZerionRBDTransactionType["WITHDRAW"] = 'withdraw';
    ZerionRBDTransactionType["BORROW"] = 'borrow';
    ZerionRBDTransactionType["REPAY"] = 'repay';
    ZerionRBDTransactionType["STAKE"] = 'stake';
    ZerionRBDTransactionType["UNSTAKE"] = 'unstake';
    ZerionRBDTransactionType["CLAIM"] = 'claim';
})(ZerionRBDTransactionType || (ZerionRBDTransactionType = {}));
var ZerionTransactionStatus;
(function(ZerionTransactionStatus) {
    ZerionTransactionStatus["CONFIRMED"] = 'confirmed';
    ZerionTransactionStatus["FAILED"] = 'failed';
    ZerionTransactionStatus["PENDING"] = 'pending';
})(ZerionTransactionStatus || (ZerionTransactionStatus = {}));
var ZerionTransactionDirection;
(function(ZerionTransactionDirection) {
    ZerionTransactionDirection["IN"] = 'in';
    ZerionTransactionDirection["OUT"] = 'out';
    ZerionTransactionDirection["SELF"] = 'self';
})(ZerionTransactionDirection || (ZerionTransactionDirection = {}));

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/debank.ts
var DebankTransactionDirection;
(function(DebankTransactionDirection) {
    DebankTransactionDirection["SEND"] = 'send';
    DebankTransactionDirection["RECEIVE"] = 'receive';
})(DebankTransactionDirection || (DebankTransactionDirection = {}));

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/portfolio.ts
var FilterTransactionType;
(function(FilterTransactionType) {
    FilterTransactionType["ALL"] = 'all';
    FilterTransactionType["SEND"] = 'send';
    FilterTransactionType["RECEIVE"] = 'receive';
})(FilterTransactionType || (FilterTransactionType = {}));

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/index.ts




;// CONCATENATED MODULE: ./src/plugins/Wallet/services/transactions.ts







async function transactions_getTransactionList(address, network, provider, page, size = 30) {
    if (provider === types/* FungibleAssetProvider.DEBANK */.Am.DEBANK) {
        const response = await getTransactionList(address, (0,chainDetailed/* getChainIdFromNetworkType */.EP)(network));
        if (!response) return {
            transactions: [],
            hasNextPage: false
        };
        const { data , error_code  } = response;
        if (error_code !== 0) throw new Error('Fail to load transactions.');
        return {
            transactions: fromDeBank(data),
            hasNextPage: false
        };
    } else if (provider === types/* FungibleAssetProvider.ZERION */.Am.ZERION) {
        const scope = resolveZerionTransactionsScopeName(network);
        if (!scope) return {
            transactions: [],
            hasNextPage: false
        };
        const { payload , meta  } = await zerion_getTransactionList(address, scope, page);
        if (meta.status !== 'ok') throw new Error('Fail to load transactions.');
        return {
            transactions: fromZerion(payload.transactions),
            hasNextPage: payload.transactions.length === size
        };
    }
    return {
        transactions: [],
        hasNextPage: false
    };
}
function fromDeBank({ cate_dict , history_list , token_dict  }) {
    return history_list.filter((transaction)=>{
        var ref;
        return ((ref = transaction.tx) === null || ref === void 0 ? void 0 : ref.name) || transaction.cate_id;
    }).filter(({ cate_id  })=>cate_id !== 'approve'
    ).map((transaction)=>{
        var ref3, ref1;
        let type = (ref3 = transaction.tx) === null || ref3 === void 0 ? void 0 : ref3.name;
        if (!type && !(0,isNil/* default */.Z)(transaction.cate_id)) {
            type = cate_dict[transaction.cate_id].name;
        } else if (type === '') {
            type = 'contract interaction';
        }
        return {
            type,
            id: transaction.id,
            timeAt: new Date(transaction.time_at * 1000),
            toAddress: transaction.other_addr,
            failed: ((ref1 = transaction.tx) === null || ref1 === void 0 ? void 0 : ref1.status) === 0,
            pairs: [
                ...transaction.sends.map(({ amount , token_id  })=>{
                    var ref, ref2;
                    return {
                        name: (ref = token_dict[token_id]) === null || ref === void 0 ? void 0 : ref.name,
                        symbol: (ref2 = token_dict[token_id]) === null || ref2 === void 0 ? void 0 : ref2.optimized_symbol,
                        address: token_id,
                        direction: DebankTransactionDirection.SEND,
                        amount,
                        logoURI: token_dict[token_id].logo_url
                    };
                }),
                ...transaction.receives.map(({ amount , token_id  })=>{
                    var ref, ref4, ref5;
                    return {
                        name: (ref = token_dict[token_id]) === null || ref === void 0 ? void 0 : ref.name,
                        symbol: (ref4 = token_dict[token_id]) === null || ref4 === void 0 ? void 0 : ref4.optimized_symbol,
                        address: token_id,
                        direction: DebankTransactionDirection.RECEIVE,
                        amount,
                        logoURI: (ref5 = token_dict[token_id]) === null || ref5 === void 0 ? void 0 : ref5.logo_url
                    };
                }), 
            ],
            gasFee: transaction.tx ? {
                eth: transaction.tx.eth_gas_fee,
                usd: transaction.tx.usd_gas_fee
            } : undefined,
            transactionType: resolveDebankTransactionType(transaction.cate_id)
        };
    });
}
function fromZerion(data) {
    return data.filter(({ type  })=>type !== ZerionRBDTransactionType.AUTHORIZE
    ).map((transaction)=>{
        var ref, ref6, ref7;
        var ref8;
        const ethGasFee = (0,base_src/* leftShift */.w5)((ref8 = (ref = transaction.fee) === null || ref === void 0 ? void 0 : ref.value) !== null && ref8 !== void 0 ? ref8 : 0, 18).toString();
        var ref9;
        const usdGasFee = (0,base_src/* multipliedBy */.$q)(ethGasFee, (ref9 = (ref6 = transaction.fee) === null || ref6 === void 0 ? void 0 : ref6.price) !== null && ref9 !== void 0 ? ref9 : 0).toString();
        var _address_to, ref10;
        return {
            type: transaction.type,
            id: transaction.hash,
            timeAt: new Date(transaction.mined_at * 1000),
            toAddress: (_address_to = transaction.address_to) !== null && _address_to !== void 0 ? _address_to : '',
            failed: transaction.status === ZerionTransactionStatus.FAILED,
            pairs: (ref10 = (ref7 = transaction.changes) === null || ref7 === void 0 ? void 0 : ref7.map(({ asset , direction , value  })=>{
                return {
                    name: asset.name,
                    symbol: asset.symbol,
                    address: asset.asset_code,
                    direction,
                    amount: (0,base_src/* leftShift */.w5)(value, asset.decimals).toNumber(),
                    logoURI: asset.icon_url
                };
            })) !== null && ref10 !== void 0 ? ref10 : [],
            gasFee: {
                eth: Number(ethGasFee),
                usd: Number(usdGasFee)
            },
            transactionType: transaction.type
        };
    });
}

// EXTERNAL MODULE: ./src/plugins/Wallet/services/transaction/database.ts
var transaction_database = __webpack_require__(42900);
// EXTERNAL MODULE: ../web3-providers/src/index.ts + 21 modules
var web3_providers_src = __webpack_require__(41544);
// EXTERNAL MODULE: ../web3-shared/evm/utils/transaction.ts
var transaction = __webpack_require__(35655);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/transaction/helpers.ts



function toReceipt(status, transaction) {
    var _transactionIndex, _blockHash, _blockNumber, _to;
    return {
        status: [
            '1',
            '0x1',
            true
        ].includes(status),
        transactionHash: transaction.hash,
        transactionIndex: (_transactionIndex = transaction.transactionIndex) !== null && _transactionIndex !== void 0 ? _transactionIndex : 0,
        blockHash: (_blockHash = transaction.blockHash) !== null && _blockHash !== void 0 ? _blockHash : '',
        blockNumber: (_blockNumber = transaction.blockNumber) !== null && _blockNumber !== void 0 ? _blockNumber : 0,
        from: transaction.from,
        to: (_to = transaction.to) !== null && _to !== void 0 ? _to : '',
        cumulativeGasUsed: 0,
        gasUsed: 0,
        logs: [],
        logsBloom: ''
    };
}
function toPayload(transaction) {
    return {
        jsonrpc: '2.0',
        id: '0',
        method: types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION,
        params: [
            {
                from: transaction.from,
                to: transaction.to,
                value: transaction.value,
                gas: transaction.gas,
                gasPrice: transaction.gasPrice,
                data: transaction.input,
                nonce: transaction.nonce
            }, 
        ]
    };
}
function getPayloadConfig(payload) {
    if (!payload.id || payload.method !== types/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8.ETH_SEND_TRANSACTION) return;
    const [config] = payload.params;
    return config;
}
function getPayloadFrom(payload) {
    const config = getPayloadConfig(payload);
    return config === null || config === void 0 ? void 0 : config.from;
}
function getPayloadTo(payload) {
    const config = getPayloadConfig(payload);
    return config === null || config === void 0 ? void 0 : config.to;
}
function getPayloadId(payload) {
    const config = getPayloadConfig(payload);
    if (!config) return '';
    const { from , to , data ='0x0' , value ='0x0'  } = config;
    if (!from || !to) return '';
    var ref;
    return (ref = (0,lib.sha3)([
        from,
        to,
        data,
        value
    ].join('_'))) !== null && ref !== void 0 ? ref : '';
}
function getTransactionId(transaction) {
    if (!transaction) return '';
    const { from , to , input , value  } = transaction;
    var ref;
    return (ref = (0,lib.sha3)([
        from,
        to,
        input || '0x0',
        (0,lib.toHex)(value || '0x0') || '0x0'
    ].join('_'))) !== null && ref !== void 0 ? ref : '';
}
function getReceiptStatus(receipt) {
    if (!receipt) return types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND;
    const status = receipt.status;
    if (receipt.status === false || [
        '0',
        '0x',
        '0x0'
    ].includes(status)) return types/* TransactionStatusType.FAILED */.g8.FAILED;
    if (receipt.status === true || [
        '1',
        '0x1'
    ].includes(status)) {
        if ((0,utils_address/* isSameAddress */.Wr)(receipt.from, receipt.to)) return types/* TransactionStatusType.CANCELLED */.g8.CANCELLED;
        return types/* TransactionStatusType.SUCCEED */.g8.SUCCEED;
    }
    return types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND;
}
function getTransactionHash(state) {
    if (!state) return '';
    switch(state === null || state === void 0 ? void 0 : state.type){
        case TransactionStateType.HASH:
            return state.hash;
        case TransactionStateType.RECEIPT:
            return state.receipt.transactionHash;
        case TransactionStateType.CONFIRMED:
            return state.receipt.transactionHash;
        case TransactionStateType.FAILED:
            var ref;
            var ref1;
            return (ref1 = (ref = state.receipt) === null || ref === void 0 ? void 0 : ref.transactionHash) !== null && ref1 !== void 0 ? ref1 : '';
        default:
            return '';
    }
}
function getTransactionState(receipt) {
    if (receipt.blockNumber) {
        const status = getReceiptStatus(receipt);
        switch(status){
            case types/* TransactionStatusType.SUCCEED */.g8.SUCCEED:
                return {
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                };
            case types/* TransactionStatusType.FAILED */.g8.FAILED:
                return {
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    receipt,
                    error: new Error('FAILED')
                };
            case types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND:
                return {
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    receipt,
                    error: new Error('Invalid transaction status.')
                };
            case types/* TransactionStatusType.CANCELLED */.g8.CANCELLED:
                return {
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    receipt,
                    error: new Error('CANCELLED')
                };
            default:
                (0,esm/* unreachable */.t1)(status);
        }
    }
    return {
        type: types/* TransactionStateType.RECEIPT */.n$.RECEIPT,
        receipt
    };
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/transaction/progress.ts



const watched = new Map();
function addProgress({ state , payload  }) {
    const progressId = getPayloadId(payload);
    if (!progressId) return;
    if (watched.has(progressId)) return;
    watched.set(progressId, {
        payload,
        state
    });
    updateProgressState(progressId, state);
}
function removeProgress(progressId) {
    watched.delete(progressId);
}
function removeAllProgress() {
    watched.clear();
}
function updateProgressState(progressId, state) {
    const progress = watched.get(progressId);
    if (!progress) return;
    progress.state = state;
    src/* WalletMessages.events.transactionProgressUpdated.sendToAll */.R$.events.transactionProgressUpdated.sendToAll(progress);
    // stop watch progress
    if ((0,transaction/* isFinalState */.ir)(progress.state.type)) removeProgress(progressId);
}
function notifyProgress(progressId, state) {
    const progress = watched.get(progressId);
    if (!progress) return;
    if ((0,transaction/* isNextStateAvailable */.NU)(progress.state.type, state.type)) updateProgressState(progressId, state);
}
function notifyPayloadProgress(payload, state) {
    const progressId = getPayloadId(payload);
    notifyProgress(progressId, state);
}
function notifyTransactionProgress(transaction, state) {
    const progressId = getTransactionId(transaction);
    notifyProgress(progressId, state);
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/transaction/watcher.ts









class Storage {
    getStorage(chainId) {
        if (!this.map.has(chainId)) this.map.set(chainId, new Map());
        return this.map.get(chainId);
    }
    hasItem(chainId, hash) {
        return this.getStorage(chainId).has(hash);
    }
    getItem(chainId, hash) {
        return this.getStorage(chainId).get(hash);
    }
    setItem(chainId, hash, transaction) {
        this.getStorage(chainId).set(hash, transaction);
    }
    removeItem(chainId, hash) {
        this.getStorage(chainId).delete(hash);
    }
    getItems(chainId) {
        const map = this.getStorage(chainId);
        return map ? [
            ...map.entries()
        ].sort(([, a], [, z])=>z.at - a.at
        ) : [];
    }
    getWatched(chainId) {
        return this.getItems(chainId).slice(0, Storage.MAX_ITEM_SIZE);
    }
    getUnwatched(chainId) {
        return this.getItems(chainId).slice(Storage.MAX_ITEM_SIZE);
    }
    getWatchedAccounts(chainId) {
        return (0,uniqBy/* default */.Z)(this.getWatched(chainId).map(([_, transaction])=>getPayloadFrom(transaction.payload)
        ).filter(Boolean), (x)=>x.toLowerCase()
        );
    }
    getUnwatchedAccounts(chainId) {
        return (0,uniqBy/* default */.Z)(this.getUnwatched(chainId).map(([_, transaction])=>getPayloadFrom(transaction.payload)
        ).filter(Boolean), (x)=>x.toLowerCase()
        );
    }
    constructor(){
        this.map = new Map();
    }
}
Storage.MAX_ITEM_SIZE = 40;
let timer = null;
const storage = new Storage();
const CHECK_TIMES = 30;
const CHECK_DELAY = 30 * 1000 // seconds
;
const CHECK_LATEST_SIZE = 5;
async function getTransactionReceipt(chainId, hash) {
    try {
        const transaction = await EthereumService.getTransactionByHash(hash, {
            chainId
        });
        if (!transaction) return null;
        notifyTransactionProgress(transaction, {
            type: types/* TransactionStateType.HASH */.n$.HASH,
            hash
        });
        const receipt = await EthereumService.getTransactionReceipt(hash, {
            chainId
        });
        if (!receipt) return null;
        const transactionState = getTransactionState(receipt);
        notifyTransactionProgress(transaction, transactionState);
        src/* WalletMessages.events.transactionStateUpdated.sendToAll */.R$.events.transactionStateUpdated.sendToAll(transactionState);
        return receipt;
    } catch  {
        return null;
    }
}
async function checkReceipt(chainId) {
    await Promise.allSettled(storage.getWatched(chainId).map(async ([hash, transaction])=>{
        var ref;
        const receipt = await ((ref = storage.getItem(chainId, hash)) === null || ref === void 0 ? void 0 : ref.receipt);
        if (receipt) return;
        storage.setItem(chainId, hash, {
            ...transaction,
            receipt: getTransactionReceipt(chainId, hash)
        });
    }));
}
async function checkAccount(chainId, account) {
    const { API_KEYS =[] , EXPLORER_API =''  } = (0,constants/* getExplorerConstants */.i1)(chainId);
    const watchedTransactions = storage.getWatched(chainId);
    const latestTransactions = await web3_providers_src/* Explorer.getLatestTransactions */.bC.getLatestTransactions(account, EXPLORER_API, {
        offset: CHECK_LATEST_SIZE,
        apikey: (0,head/* default */.Z)(API_KEYS)
    });
    for (const latestTransaction of latestTransactions){
        var ref;
        const [watchedHash, watchedTransaction] = (ref = watchedTransactions.find(([hash, transaction])=>{
            // the transaction hash exact matched
            if (latestTransaction.hash === hash) return true;
            // the transaction signature id exact matched
            if (!transaction.payload) return false;
            if (getTransactionId(latestTransaction) === getPayloadId(transaction.payload)) return true;
            // the transaction nonce exact matched
            const config = getPayloadConfig(transaction.payload);
            if (!config) return false;
            return (0,utils_address/* isSameAddress */.Wr)(latestTransaction.from, config.from) && latestTransaction.nonce === config.nonce;
        })) !== null && ref !== void 0 ? ref : [];
        if (!watchedHash || !(watchedTransaction === null || watchedTransaction === void 0 ? void 0 : watchedTransaction.payload) || watchedHash === latestTransaction.hash) continue;
        // replace the original transaction in DB
        await messages/* WalletRPC.replaceRecentTransaction */.V.replaceRecentTransaction(chainId, account, watchedHash, latestTransaction.hash, watchedTransaction.payload);
        // update receipt in cache
        storage.removeItem(chainId, watchedHash);
        storage.setItem(chainId, latestTransaction.hash, {
            ...watchedTransaction,
            payload: toPayload(latestTransaction),
            receipt: getTransactionReceipt(chainId, latestTransaction.hash)
        });
    }
}
async function check() {
    // stop any pending task
    stopCheck();
    const chainId = settings/* currentChainIdSettings.value */.wU.value;
    // unwatch legacy transactions
    storage.getUnwatched(chainId).forEach(([hash])=>unwatchTransaction(chainId, hash)
    );
    // update limits
    storage.getWatched(chainId).forEach(([hash, transaction])=>{
        storage.setItem(chainId, hash, {
            ...transaction,
            limits: Math.max(0, transaction.limits - 1)
        });
    });
    try {
        await checkReceipt(chainId);
        for (const account of storage.getWatchedAccounts(chainId))await checkAccount(chainId, account);
    } catch (error) {
    // do nothing
    }
    // check if all transaction receipts were found
    const allSettled = await Promise.allSettled(storage.getWatched(chainId).map(([, transaction])=>transaction.receipt
    ));
    if (allSettled.every((x)=>x.status === 'fulfilled' && x.value
    )) return;
    // kick to the next round
    startCheck(true);
}
function startCheck(force) {
    if (force) stopCheck();
    if (timer === null) {
        timer = setTimeout(check, CHECK_DELAY);
    }
}
function stopCheck() {
    if (timer !== null) clearTimeout(timer);
    timer = null;
}
async function getReceipt(chainId, hash) {
    var ref;
    var ref1;
    return (ref1 = (ref = storage.getItem(chainId, hash)) === null || ref === void 0 ? void 0 : ref.receipt) !== null && ref1 !== void 0 ? ref1 : null;
}
async function watchTransaction(chainId, hash, payload) {
    if (!storage.hasItem(chainId, hash)) {
        storage.setItem(chainId, hash, {
            at: Date.now(),
            payload,
            limits: CHECK_TIMES,
            receipt: Promise.resolve(null)
        });
    }
    startCheck(false);
}
function unwatchTransaction(chainId, hash) {
    storage.removeItem(chainId, hash);
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/transaction/index.ts






async function addRecentTransaction(chainId, address, hash, payload) {
    await transaction_database/* addRecentTransaction */.ah(chainId, address, hash, payload);
}
async function removeRecentTransaction(chainId, address, hash) {
    await transaction_database/* removeRecentTransaction */.Wr(chainId, address, hash);
}
async function replaceRecentTransaction(chainId, address, hash, newHash, payload) {
    await transaction_database/* replaceRecentTransaction */.nq(chainId, address, hash, newHash, payload);
}
async function clearRecentTransactions(chainId, address) {
    await transaction_database/* clearRecentTransactions */.zG(chainId, address);
}
async function getRecentTransaction(chainId, address, hash, options) {
    const transactions = await getRecentTransactions(chainId, address, options);
    return transactions.find((x)=>x.hash === hash
    );
}
async function getRecentTransactions(chainId, address, options) {
    const transactions = await transaction_database/* getRecentTransactions */.tU(chainId, address);
    const allSettled = await Promise.allSettled(transactions.map(async ({ at , hash , hashReplacement , payload , payloadReplacement  })=>{
        const receipt = await getReceipt(chainId, hash) || await (hashReplacement ? getReceipt(chainId, hashReplacement) : null);
        // if it cannot found receipt, then start the watching progress
        // in case the user just refreshed the background page
        if (!receipt) {
            watchTransaction(chainId, hash, payload);
            if (hashReplacement && payloadReplacement) watchTransaction(chainId, hashReplacement, payloadReplacement);
        }
        const tx = {
            at,
            hash,
            hashReplacement,
            payload,
            payloadReplacement,
            status: getReceiptStatus(receipt),
            receipt: receipt
        };
        if (!(options === null || options === void 0 ? void 0 : options.receipt)) {
            delete tx.receipt;
        }
        if (options === null || options === void 0 ? void 0 : options.computedPayload) {
            tx.computedPayload = await (0,EthereumService.getSendTransactionComputedPayload)(payloadReplacement !== null && payloadReplacement !== void 0 ? payloadReplacement : payload);
        }
        return tx;
    }));
    // compose result
    const transaction_ = [];
    allSettled.forEach((x)=>{
        return x.status === 'fulfilled' && (typeof (options === null || options === void 0 ? void 0 : options.status) !== 'undefined' ? x.value.status === (options === null || options === void 0 ? void 0 : options.status) : true) ? transaction_.push(x.value) : undefined;
    });
    return transaction_;
}

// EXTERNAL MODULE: ./background/database/utils/openDB.ts
var openDB = __webpack_require__(71886);
// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.0/node_modules/idb/with-async-ittr.js
var with_async_ittr = __webpack_require__(20326);
;// CONCATENATED MODULE: ./src/plugins/Wallet/database/Wallet.db.ts


function path(x) {
    return x;
}
const createWalletDBAccess = (0,openDB/* createDBAccess */.Z_)(()=>{
    return (0,with_async_ittr/* openDB */.X3)('maskbook-plugin-wallet', 9, {
        async upgrade (db, oldVersion, newVersion, tx) {
            function v0_v1() {
                db.createObjectStore('ERC20Token', {
                    keyPath: path('address')
                });
                db.createObjectStore('Wallet', {
                    keyPath: path('address')
                });
            }
            function v5_v6() {
                db.createObjectStore('ERC721Token', {
                    keyPath: path('record_id')
                });
                db.createObjectStore('ERC1155Token', {
                    keyPath: path('record_id')
                });
            }
            function v7_v8() {
                db.createObjectStore('TransactionChunk', {
                    keyPath: path('record_id')
                });
            }
            function v8_v9() {
                const pluginStore = 'PluginStore';
                db.objectStoreNames.contains(pluginStore) && db.deleteObjectStore(pluginStore);
                db.createObjectStore('UnconfirmedRequestChunk', {
                    keyPath: path('record_id')
                });
            }
            if (oldVersion < 1) v0_v1();
            if (oldVersion < 6) v5_v6();
            if (oldVersion < 8) v7_v8();
            if (oldVersion < 9) v8_v9();
        }
    });
});

// EXTERNAL MODULE: ./src/extension/background-script/HelperService/index.ts + 2 modules
var HelperService = __webpack_require__(89242);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/rpc.ts





const MAX_UNCONFIRMED_REQUESTS_SIZE = 1;
const MAIN_RECORD_ID = '0';
function requestSorter(a, z) {
    var ref, ref1;
    return (ref1 = (ref = a.id) !== null && ref !== void 0 ? ref : 0 - z.id) !== null && ref1 !== void 0 ? ref1 : 0;
}
async function getUnconfirmedRequests() {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('UnconfirmedRequestChunk');
    const chunk = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    if (!chunk) return [];
    return chunk.requests.slice(0, MAX_UNCONFIRMED_REQUESTS_SIZE).sort(requestSorter);
}
async function topUnconfirmedRequest() {
    return (0,head/* default */.Z)(await getUnconfirmedRequests());
}
async function popUnconfirmedRequest() {
    const now = new Date();
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    var ref;
    const requests = ((ref = chunk_ === null || chunk_ === void 0 ? void 0 : chunk_.requests) !== null && ref !== void 0 ? ref : []).sort(requestSorter);
    if (!chunk_) return;
    if (!requests.length) return;
    const payload = (0,head/* default */.Z)(requests);
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests: requests.slice(1)
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    // TODO: hasRequest is not the best definition
    src/* WalletMessages.events.requestsUpdated.sendToAll */.R$.events.requestsUpdated.sendToAll({
        hasRequest: false
    });
    return payload;
}
async function pushUnconfirmedRequest(payload) {
    const now = new Date();
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    var ref;
    const requests = (ref = chunk_ === null || chunk_ === void 0 ? void 0 : chunk_.requests) !== null && ref !== void 0 ? ref : [];
    // validate if it's still possible to push a new request
    if (requests.length >= MAX_UNCONFIRMED_REQUESTS_SIZE) {
        await (0,HelperService.openPopupWindow)();
        throw new Error('Unable to add more request.');
    }
    const chunk = chunk_ ? {
        ...chunk_,
        updatedAt: now,
        requests: requests.concat(payload)
    } : {
        record_id: MAIN_RECORD_ID,
        createdAt: now,
        updatedAt: now,
        requests: [
            payload
        ]
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    src/* WalletMessages.events.requestsUpdated.sendToAll */.R$.events.requestsUpdated.sendToAll({
        hasRequest: true
    });
    return payload;
}
async function updateUnconfirmedRequest(payload) {
    var ref;
    const now = new Date();
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    if (!(chunk_ === null || chunk_ === void 0 ? void 0 : chunk_.requests.length)) throw new Error('No request to update.');
    var ref2;
    const requests = (ref2 = chunk_ === null || chunk_ === void 0 ? void 0 : (ref = chunk_.requests) === null || ref === void 0 ? void 0 : ref.map((item)=>{
        if (item.id !== payload.id) return item;
        return payload;
    })) !== null && ref2 !== void 0 ? ref2 : [];
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    src/* WalletMessages.events.requestsUpdated.sendToAll */.R$.events.requestsUpdated.sendToAll({
        hasRequest: true
    });
    return payload;
}
async function deleteUnconfirmedRequest(payload) {
    const now = new Date();
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    var ref;
    const requests = ((ref = chunk_ === null || chunk_ === void 0 ? void 0 : chunk_.requests) !== null && ref !== void 0 ? ref : []).filter((x)=>x.id !== payload.id
    );
    if (!chunk_) return;
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests: requests
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    src/* WalletMessages.events.requestsUpdated.sendToAll */.R$.events.requestsUpdated.sendToAll({
        hasRequest: false
    });
    return payload;
}
async function clearUnconfirmedRequests() {
    const now = new Date();
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    var ref;
    const requests = (ref = chunk_ === null || chunk_ === void 0 ? void 0 : chunk_.requests) !== null && ref !== void 0 ? ref : [];
    if (!chunk_) return;
    if (!requests.length) return;
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests: []
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    src/* WalletMessages.events.requestsUpdated.sendToAll */.R$.events.requestsUpdated.sendToAll({
        hasRequest: false
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js
var buffer = __webpack_require__(15313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/scrypt-js@3.0.1/node_modules/scrypt-js/scrypt.js
var scrypt = __webpack_require__(37508);
var scrypt_default = /*#__PURE__*/__webpack_require__.n(scrypt);
// EXTERNAL MODULE: ../../node_modules/.pnpm/z-schema@5.0.2/node_modules/z-schema/src/ZSchema.js
var ZSchema = __webpack_require__(32002);
var ZSchema_default = /*#__PURE__*/__webpack_require__.n(ZSchema);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/keystore/schema.json
const schema_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","type":"object","required":["version","id","address","crypto"],"properties":{"version":{"const":3},"id":{"type":"string"},"address":{"$ref":"#/definitions/address"},"crypto":{"type":"object","allOf":[{"$ref":"#/definitions/aes-cipher"},{"$ref":"#/definitions/key-derivation"},{"$ref":"#/definitions/authentication"}]}},"definitions":{"address":{"type":"string","pattern":"^[a-fA-F0-9]{40}$"},"aes-cipher":{"type":"object","properties":{"cipher":{"enum":["aes-128-ctr","aes-128-cbc"]},"cipherparams":{"type":"object","properties":{"iv":{"type":"string","pattern":"^[a-fA-F0-9]{32}$"}},"required":["iv"],"additionalProperties":false},"ciphertext":{"$ref":"#/definitions/encoded-string"}},"required":["cipher","ciphertext","cipherparams"]},"key-derivation":{"oneOf":[{"$ref":"#/definitions/pbkdf2"},{"$ref":"#/definitions/scrypt"}],"required":["kdf","kdfparams"]},"pbkdf2":{"type":"object","properties":{"kdf":{"const":"pbkdf2"},"kdfparams":{"type":"object","properties":{"c":{"type":"number","minimum":1000},"prf":{"const":"hmac-sha256"},"dklen":{"type":"number","minimum":16},"salt":{"$ref":"#/definitions/encoded-string"}},"required":["c","prf","dklen","salt"],"additionalProperties":false}}},"scrypt":{"type":"object","properties":{"kdf":{"const":"scrypt"},"kdfparams":{"type":"object","properties":{"n":{"type":"number","minimum":1},"p":{"type":"number","minimum":1},"r":{"type":"number","minimum":1},"dklen":{"type":"number","minimum":16},"salt":{"$ref":"#/definitions/encoded-string"}},"required":["n","p","r","dklen","salt"],"additionalProperties":false}}},"authentication":{"type":"object","properties":{"mac":{"$ref":"#/definitions/encoded-string"}},"required":["mac"]},"encoded-string":{"type":"string","pattern":"^[a-fA-F0-9]{64}$"}}}');
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/keystore/utils.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];



function loadKeyStore(input) {
    let store;
    try {
        store = JSON.parse(input);
    } catch  {
        throw new Error('JSON file is incorrect');
    }
    const validator = new (ZSchema_default())({
        strictMode: true,
        breakOnFirstError: true
    });
    validator.validate(input, schema_namespaceObject);
    return store;
}
function assertKeyDerivation(keystore, derivedKey) {
    const payload = Buffer.concat([
        derivedKey.slice(16, 32),
        Buffer.from(keystore.ciphertext, 'hex')
    ]);
    const valid = (0,lib.sha3)(`0x${payload.toString('hex')}`) === `0x${keystore.mac}`;
    if (!valid) {
        throw new Error('Password is incorrect');
    }
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/keystore/index.ts



async function fromKeyStore(input, password) {
    const { crypto , address  } = loadKeyStore(input);
    const derivedKey = await makeDerivedKey(crypto, password);
    assertKeyDerivation(crypto, derivedKey);
    const seed = await decrypt(crypto.cipher, derivedKey, buffer.Buffer.from(crypto.ciphertext, 'hex'), buffer.Buffer.from(crypto.cipherparams.iv, 'hex'));
    return {
        address: `0x${address}`,
        privateKey: `0x${seed}`
    };
}
async function decrypt(cipher, derivedKey, cipherText, iv) {
    const name = cipher === 'aes-128-ctr' ? 'AES-CTR' : 'AES-CBC';
    derivedKey = derivedKey.slice(0, 16);
    const length = 128;
    const key = await crypto.subtle.importKey('raw', derivedKey, {
        name,
        length
    }, false, [
        'decrypt'
    ]);
    const aes_ctr_params = {
        name,
        counter: iv,
        length
    };
    const aes_cbc_params = {
        name,
        iv
    };
    const seed = await crypto.subtle.decrypt(cipher === 'aes-128-ctr' ? aes_ctr_params : aes_cbc_params, key, cipherText);
    return buffer.Buffer.from(seed).toString('hex');
}
async function makeDerivedKey(keystore, password) {
    const salt = buffer.Buffer.from(keystore.kdfparams.salt, 'hex');
    if (keystore.kdf === 'scrypt') {
        const { n , r , p , dklen  } = keystore.kdfparams;
        return scrypt_default().scrypt(password, salt, n, r, p, dklen);
    } else if (keystore.kdf === 'pbkdf2') {
        const iterations = keystore.kdfparams.c;
        const key = await crypto.subtle.importKey('raw', password, {
            name: 'PBKDF2'
        }, false, [
            'deriveBits'
        ]);
        const params = {
            name: 'PBKDF2',
            salt,
            iterations,
            hash: 'SHA-256'
        };
        return new Uint8Array(await crypto.subtle.deriveBits(params, key, 256));
    }
    throw new Error('Unsupported key derivation scheme');
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/gasPrice.ts

function getGasPriceDictFromDeBank(chainId) {
    return getGasPriceDict(chainId);
}

// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
;// CONCATENATED MODULE: ./src/plugins/Wallet/apis/ens.ts

const subgraphURL = 'https://api.thegraph.com/subgraphs/name/dimensiondev/ens-text-resolver-subgraph';
async function fetchFromENSTextResolverSubgraph(query) {
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
async function fetchAddressNamesByTwitterId(twitterId) {
    if (!twitterId) return [];
    const data = await fetchFromENSTextResolverSubgraph(`
        query twitterHandle {
            twitterHandle(id: "${twitterId}") {
                id
                raw
                domains {
                    id
                    owner
                }
            }
        }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.twitterHandle)) return [];
    return data.twitterHandle.domains;
}

// EXTERNAL MODULE: ./src/extension/background-script/EthereumServices/web3.ts
var EthereumServices_web3 = __webpack_require__(30447);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
;// CONCATENATED MODULE: ./src/plugins/Profile/constants.ts

const PLUGIN_ID = plugin_infra_src/* PluginId.Profile */.je.Profile;
const PLUGIN_NAME = 'Profile';
const PLUGIN_DESCRIPTION = 'Profile';

;// CONCATENATED MODULE: ./src/plugins/Profile/messages.ts


const PluginProfileMessages = (0,plugin_infra_src/* createPluginMessage */.I4)(PLUGIN_ID);
const PluginProfileRPC = (0,plugin_infra_src/* createPluginRPC */.V8)(PLUGIN_ID, ()=>__webpack_require__.e(/* import() */ 6938).then(__webpack_require__.bind(__webpack_require__, 66938))
, PluginProfileMessages.rpc);

// EXTERNAL MODULE: ./src/plugins/Avatar/messages.ts
var Avatar_messages = __webpack_require__(7341);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/domain.ts







const ENS_RE = /\S{1,256}\.(eth|kred|xyz|luxe)\b/;
const ADDRESS_FULL = /0x\w+/;
const RSS3_URL_RE = /https?:\/\/(?<name>[\w.]+)\.rss3\.bio/;
const RSS3_RNS_RE = /(?<name>[\w.]+)\.rss3/;
function isValidAddress(address) {
    return address && dist.EthereumAddress.isValid(address) && !(0,utils_address/* isZeroAddress */.uO)(address);
}
function getEthereumName(twitterId, nickname, bio) {
    var ref, ref1;
    const [matched] = (ref1 = (ref = nickname.match(ENS_RE)) !== null && ref !== void 0 ? ref : bio.match(ENS_RE)) !== null && ref1 !== void 0 ? ref1 : [];
    if (matched) return matched;
    return twitterId && !twitterId.endsWith('.eth') ? `${twitterId}.eth` : '';
}
function getRSS3Id(nickname, profileURL, bio) {
    var ref;
    const matched = nickname.match(RSS3_RNS_RE) || profileURL.match(RSS3_URL_RE) || bio.match(RSS3_URL_RE) || bio.match(RSS3_RNS_RE);
    var ref2;
    return (ref2 = matched === null || matched === void 0 ? void 0 : (ref = matched.groups) === null || ref === void 0 ? void 0 : ref.name) !== null && ref2 !== void 0 ? ref2 : '';
}
function getAddress(text) {
    var ref;
    const [matched] = (ref = text.match(ADDRESS_FULL)) !== null && ref !== void 0 ? ref : [];
    if (matched && dist.EthereumAddress.isValid(matched)) return matched;
    return '';
}
async function getResolvedENS(label) {
    const web3 = await (0,EthereumServices_web3/* createWeb3 */.N)({
        chainId: types/* ChainId.Mainnet */.a_.Mainnet,
        providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
    });
    return web3.eth.ens.getAddress(label);
}
async function getAddressNames(identity) {
    const { identifier , bio ='' , nickname ='' , homepage =''  } = identity;
    const twitterId = identifier.network === 'twitter.com' ? identifier.userId : '';
    const address = getAddress(bio);
    const ethereumName = getEthereumName(twitterId !== null && twitterId !== void 0 ? twitterId : '', nickname, bio);
    const RSS3Id = getRSS3Id(nickname, homepage, bio);
    var ref4, ref3;
    const allSettled = await Promise.allSettled([
        getResolvedENS(ethereumName),
        PluginProfileRPC.getRSS3AddressById(RSS3Id),
        (0,shared_base_src/* timeout */.Vs)(fetchAddressNamesByTwitterId((ref4 = twitterId === null || twitterId === void 0 ? void 0 : twitterId.toLowerCase()) !== null && ref4 !== void 0 ? ref4 : '').then((result)=>{
            var ref;
            return (ref3 = (ref = result.find((x)=>x.owner
            )) === null || ref === void 0 ? void 0 : ref.owner) !== null && ref3 !== void 0 ? ref3 : '';
        }), 3000),
        Avatar_messages/* PluginNFTAvatarRPC.getAddress */.B.getAddress(twitterId !== null && twitterId !== void 0 ? twitterId : '', identifier.network), 
    ]);
    const getSettledAddress = (result)=>{
        return result.status === 'fulfilled' ? result.value : '';
    };
    const addressENS = getSettledAddress(allSettled[0]);
    const addressRSS3 = getSettledAddress(allSettled[1]);
    const addressTheGraph = getSettledAddress(allSettled[2]);
    const addressGUN = getSettledAddress(allSettled[3]);
    return [
        isValidAddress(address) ? {
            type: types/* AddressNameType.ADDRESS */.Lv.ADDRESS,
            label: address,
            resolvedAddress: address
        } : null,
        isValidAddress(addressENS) ? {
            type: types/* AddressNameType.ENS */.Lv.ENS,
            label: ethereumName,
            resolvedAddress: addressENS
        } : null,
        isValidAddress(addressRSS3) ? {
            type: types/* AddressNameType.RSS3 */.Lv.RSS3,
            label: `${RSS3Id}.rss3`,
            resolvedAddress: addressRSS3
        } : null,
        isValidAddress(addressGUN) ? {
            type: types/* AddressNameType.GUN */.Lv.GUN,
            label: addressGUN,
            resolvedAddress: addressGUN
        } : null,
        isValidAddress(addressTheGraph) ? {
            type: types/* AddressNameType.THE_GRAPH */.Lv.THE_GRAPH,
            label: addressTheGraph,
            resolvedAddress: addressTheGraph
        } : null, 
    ].filter(Boolean);
}

// EXTERNAL MODULE: ./src/extension/background-script/HelperService/storage.ts
var HelperService_storage = __webpack_require__(35152);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/cloud.ts

const HOST_MAP = {
    production: 'https://backup.mask.io/api',
    development: 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api',
    test: 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api'
};
const COULD_BASE_URL = HOST_MAP["production"];
const RISK_WARNING_KEY = 'com.maskbook.agreement+riskWarning';
const setRiskWarningConfirmed = (address, confirmed)=>(0,HelperService_storage/* __deprecated__setStorage */.X)(RISK_WARNING_KEY, {
        [address]: confirmed
    }, {
        howToUpdate: 'merge'
    })
;
const getRiskWarningConfirmed = async (address)=>{
    const allStatus = await (0,HelperService_storage/* __deprecated__getStorage */.$)(RISK_WARNING_KEY);
    return allStatus === null || allStatus === void 0 ? void 0 : allStatus[address];
};
const sendRiskWarningConfirm = (address, pluginId)=>fetch(`${COULD_BASE_URL}/v1/risk_warning/confirm`, {
        method: 'POST',
        body: JSON.stringify({
            address,
            plugin_id: pluginId !== null && pluginId !== void 0 ? pluginId : ''
        })
    })
;
const confirmRiskWarning = async (address, pluginId)=>{
    await setRiskWarningConfirmed(address, true);
    await sendRiskWarningConfirm(address, pluginId);
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/apis/metaswap.ts

const METASWAP_API = 'https://gas-api.metaswap.codefi.network/';
async function getSuggestedGasFees(chainId) {
    if (chainId) {
        const response = await fetch(urlcat_dist_default()(METASWAP_API, '/networks/:chainId/suggestedGasFees', {
            chainId
        }));
        return await response.json();
    }
    return undefined;
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/estimateGasFee.ts

async function getEstimateGasFees(chainId) {
    return getSuggestedGasFees(chainId);
}

// EXTERNAL MODULE: ./src/plugins/Wallet/constants.ts
var Wallet_constants = __webpack_require__(84124);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/tokenPrice.ts







const { run  } = (0,utils_pure/* startEffects */.Wu)(/* unsupported import.meta.webpackHot */ undefined);
function updateCurrentPrices(data) {
    const currentPrices = {
        ...settings/* currentTokenPricesSettings.value */.JC.value
    };
    Object.keys(data).forEach((category)=>{
        Object.keys(data[category]).forEach((currency)=>{
            currentPrices[category] = {
                ...currentPrices[category],
                [currency]: data[category][currency]
            };
        });
    });
    settings/* currentTokenPricesSettings.value */.JC.value = currentPrices;
}
let tokenTrackingCount = 0;
let nativeTokenCount = 0;
function kickToUpdateTokenPrices() {
    tokenTrackingCount += 1;
    nativeTokenCount += 1;
}
const trackingContracts = Object.create(null);
function trackContract(platform, address) {
    var _platform;
    trackingContracts[platform] = (0,uniq/* default */.Z)([
        ...(_platform = trackingContracts[platform]) !== null && _platform !== void 0 ? _platform : [],
        address
    ]);
}
async function updateTokenPrices() {
    // reset the polling task cause it will be called from service call
    resetPoolTask();
    // forget those passed beats
    tokenTrackingCount = 0;
    // update chain state
    try {
        const platforms = Object.keys(trackingContracts);
        await Promise.allSettled(platforms.map(async (platform)=>{
            const prices = await (0,EthereumService.getTokenPrices)(platform, trackingContracts[platform], types/* CurrencyType.USD */.V2.USD);
            updateCurrentPrices(prices);
        }));
    } finally{
        // reset the polling if chain state updated successfully
        resetPoolTask();
    }
}
const trackingNativeTokenIds = [];
function trackNativeToken(id) {
    if (!trackingNativeTokenIds.includes(id)) {
        trackingNativeTokenIds.push(id);
    }
}
async function updateNativeTokenPrices() {
    // reset the polling task cause it will be called from service call
    resetPoolTask();
    // forget those passed beats
    nativeTokenCount = 0;
    // update chain state
    try {
        const prices = await (0,EthereumService.getNativeTokenPrice)(trackingNativeTokenIds, types/* CurrencyType.USD */.V2.USD);
        updateCurrentPrices(prices);
    } catch  {
    // do nothing
    } finally{
        // reset the polling if chain state updated successfully
        resetPoolTask();
    }
}
let resetPoolTask = ()=>{};
// poll the newest chain state
run(()=>{
    const { reset , cancel  } = (0,shared_base_src/* pollingTask */.s_)(async ()=>{
        if (tokenTrackingCount > 0) {
            await updateTokenPrices();
        }
        if (nativeTokenCount > 0) {
            await updateNativeTokenPrices();
        }
        return false;
    }, {
        delay: Wallet_constants/* UPDATE_CHAIN_STATE_DELAY */.js
    });
    resetPoolTask = reset;
    return cancel;
});
const ETH_PRICE_POLLING_DELAY = 30 /* seconds */  * 1000 /* milliseconds */ ;
run(()=>{
    trackNativeToken('ethereum');
    const { cancel  } = (0,shared_base_src/* pollingTask */.s_)(async ()=>{
        updateNativeTokenPrices();
        return false;
    }, {
        autoStart: true,
        delay: ETH_PRICE_POLLING_DELAY
    });
    return cancel;
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/elliptic@6.5.4/node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(75367);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/helpers.ts


async function getWalletByAddress(t, address) {
    const record = await t.objectStore('Wallet').get(formatEthereumAddress(address));
    return record ? LegacyWalletRecordOutDB(record) : null;
}
function LegacyWalletRecordIntoDB(x) {
    const record = x;
    record.address = formatEthereumAddress(x.address);
    return record;
}
function LegacyWalletRecordOutDB(x) {
    const record = x;
    record.address = (0,formatter/* formatEthereumAddress */.j8)(record.address);
    var _erc20_token_whitelist;
    record.erc20_token_whitelist = (_erc20_token_whitelist = x.erc20_token_whitelist) !== null && _erc20_token_whitelist !== void 0 ? _erc20_token_whitelist : new Set();
    var _erc20_token_blacklist;
    record.erc20_token_blacklist = (_erc20_token_blacklist = x.erc20_token_blacklist) !== null && _erc20_token_blacklist !== void 0 ? _erc20_token_blacklist : new Set();
    var _erc721_token_whitelist;
    record.erc721_token_whitelist = (_erc721_token_whitelist = x.erc721_token_whitelist) !== null && _erc721_token_whitelist !== void 0 ? _erc721_token_whitelist : new Set();
    var _erc721_token_blacklist;
    record.erc721_token_blacklist = (_erc721_token_blacklist = x.erc721_token_blacklist) !== null && _erc721_token_blacklist !== void 0 ? _erc721_token_blacklist : new Set();
    var _erc1155_token_whitelist;
    record.erc1155_token_whitelist = (_erc1155_token_whitelist = x.erc1155_token_whitelist) !== null && _erc1155_token_whitelist !== void 0 ? _erc1155_token_whitelist : new Set();
    var _erc1155_token_blacklist;
    record.erc1155_token_blacklist = (_erc1155_token_blacklist = x.erc1155_token_blacklist) !== null && _erc1155_token_blacklist !== void 0 ? _erc1155_token_blacklist : new Set();
    return record;
}
function ERC20TokenRecordIntoDB(x) {
    x.address = formatEthereumAddress(x.address);
    return x;
}
function ERC20TokenRecordOutDB(x) {
    const record = x;
    {
        // fix: network has been renamed to chainId
        const record_ = record;
        var ref;
        if (!record.chainId) record.chainId = (ref = getChainIdFromName(record_.network)) !== null && ref !== void 0 ? ref : ChainId.Mainnet;
    }
    record.address = formatEthereumAddress(record.address);
    return record;
}
function getERC721TokenRecordIntoDBKey(address, tokenId) {
    return `${formatEthereumAddress(address)}_${tokenId}`;
}
function ERC721TokenRecordIntoDB(x) {
    const record = {
        ...x,
        // NFT cannot be divided and store each token separately
        record_id: getERC721TokenRecordIntoDBKey(x.contractDetailed.address, x.tokenId)
    };
    return record;
}
function ERC721TokenRecordOutDB(x) {
    const record = omit(x, 'record_id');
    return record;
}
function ERC1155TokenRecordIntoDB(x) {
    const record = {
        ...x,
        // NFT cannot be divided and store each token separately
        record_id: `${formatEthereumAddress(x.address)}_${x.tokenId}`
    };
    return record;
}
function ERC1155TokenRecordOutDB(x) {
    const record = omit(x, 'record_id');
    return record;
}
function TransactionChunkRecordIntoDB(x) {
    const record = {
        ...x,
        record_id: `${x.chain_id}_${formatEthereumAddress(x.address)}`
    };
    return record;
}
function TransactionChunkRecordOutDB(x) {
    const record = omit(x, 'record_id');
    return record;
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/legacyWallet.ts














function sortWallet(a, b) {
    const address = settings/* currentAccountSettings.value */.aK.value;
    if (a.address === address) return -1;
    if (b.address === address) return 1;
    if (a.updatedAt > b.updatedAt) return -1;
    if (a.updatedAt < b.updatedAt) return 1;
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    return 0;
}
function createWalletRecord(address, name) {
    const now = new Date();
    return {
        address,
        name,
        erc20_token_whitelist: new Set(),
        erc20_token_blacklist: new Set(),
        erc721_token_whitelist: new Set(),
        erc721_token_blacklist: new Set(),
        erc1155_token_whitelist: new Set(),
        erc1155_token_blacklist: new Set(),
        mnemonic: [],
        passphrase: '',
        createdAt: now,
        updatedAt: now
    };
}
async function gatLegacyWallet(address = settings/* currentAccountSettings.value */.aK.value) {
    const wallets = await getLegacyWallets();
    return wallets.find((0,utils_address/* currySameAddress */.DC)(address));
}
async function getLegacyWallets(provider) {
    if (native_rpc/* hasNativeAPI */._) {
        const accounts = await (0,EthereumService.getAccounts)();
        var ref;
        const address = (ref = (0,head/* default */.Z)(accounts)) !== null && ref !== void 0 ? ref : '';
        if (!address) return [];
        return [
            createWalletRecord(address, 'Mask Network')
        ];
    }
    const wallets = await getAllWalletRecords();
    if (provider === types/* ProviderType.MaskWallet */.lP.MaskWallet) return wallets.filter((x)=>x._private_key_ || x.mnemonic.length
    );
    if (provider === settings/* currentProviderSettings.value */.t1.value) return wallets.filter((0,utils_address/* currySameAddress */.DC)(settings/* currentAccountSettings.value */.aK.value));
    if (provider) return [];
    return wallets;
}
async function getLegacyWalletRecords() {
    const wallets = await getAllWalletRecords();
    return wallets.filter((x)=>x._private_key_ || x.mnemonic.length
    );
}
async function getAllWalletRecords() {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('Wallet');
    const records = await t.objectStore('Wallet').getAll();
    const wallets = (await Promise.all(records.map(async (record)=>{
        const walletRecord = LegacyWalletRecordOutDB(record);
        return {
            ...walletRecord,
            _private_key_: await makePrivateKey(walletRecord)
        };
    }))).sort(sortWallet);
    return wallets;
}
async function makePrivateKey(record) {
    // not a managed wallet
    if (!record._private_key_ && !record.mnemonic.length) return '';
    const { privateKey  } = record._private_key_ ? await legacyWallet_recoverWalletFromPrivateKey(record._private_key_) : await recoverWalletFromMnemonicWords(record.mnemonic, record.passphrase, record.path);
    return `0x${(0,shared_base_src/* toHex */.NC)(privateKey)}`;
}
async function freezeLegacyWallet(address) {
    const walletStore = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('Wallet').objectStore('Wallet');
    for await (const cursor of walletStore){
        const wallet = cursor.value;
        if ((0,utils_address/* isSameAddress */.Wr)(wallet.address, address)) {
            await cursor.update({
                ...wallet,
                updatedAt: new Date(9999, 1, 1)
            });
            break;
        }
    }
}
async function recoverWalletFromMnemonicWords(mnemonic, passphrase, path = `${Wallet_constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`) {
    const seed = await bip39_src/* mnemonicToSeed */.OI(mnemonic.join(' '), passphrase);
    const masterKey = dist.HDKey.parseMasterSeed(seed);
    const extendedPrivateKey = masterKey.derive(path).extendedPrivateKey;
    const childKey = dist.HDKey.parseExtendedKey(extendedPrivateKey);
    const wallet = childKey.derive('');
    const walletPublicKey = wallet.publicKey;
    const walletPrivateKey = wallet.privateKey;
    return {
        address: dist.EthereumAddress.from(walletPublicKey).address,
        privateKey: walletPrivateKey,
        privateKeyValid: true,
        privateKeyInHex: `0x${(0,shared_base_src/* toHex */.NC)(walletPrivateKey)}`,
        path,
        mnemonic,
        passphrase
    };
}
async function legacyWallet_recoverWalletFromPrivateKey(privateKey) {
    const ec = new elliptic.ec('secp256k1');
    const privateKey_ = privateKey.replace(/^0x/, '').trim() // strip 0x
    ;
    const key1 = ec.keyFromPrivate(privateKey_);
    return {
        address: dist.EthereumAddress.from(key1.getPublic(false, 'array')).address,
        privateKey: (0,shared_base_src/* fromHex */.H_)(privateKey_),
        privateKeyValid: privateKeyVerify(privateKey_),
        privateKeyInHex: privateKey.startsWith('0x') ? privateKey : `0x${privateKey}`,
        mnemonic: []
    };
    function privateKeyVerify(key) {
        if (!/[\da-f]{64}/i.test(key)) return false;
        const k = new bignumber.BigNumber(key, 16);
        const n = new bignumber.BigNumber('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
        return !k.isZero() && k.isLessThan(n);
    }
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/index.ts
















/***/ }),

/***/ 42900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ah": () => (/* binding */ addRecentTransaction),
/* harmony export */   "nq": () => (/* binding */ replaceRecentTransaction),
/* harmony export */   "Wr": () => (/* binding */ removeRecentTransaction),
/* harmony export */   "tU": () => (/* binding */ getRecentTransactions),
/* harmony export */   "zG": () => (/* binding */ clearRecentTransactions)
/* harmony export */ });
/* unused harmony export MAX_RECENT_TRANSACTIONS_SIZE */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18443);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26218);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71831);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12705);
/* harmony import */ var _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62137);





const MAX_RECENT_TRANSACTIONS_SIZE = 20;
function getRecordId(chainId, address) {
    return `${chainId}_${(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .formatEthereumAddress */ .j8)(address)}`;
}
async function addRecentTransaction(chainId, address, hash, payload) {
    const now = new Date();
    const recordId = getRecordId(chainId, address);
    const chunk = await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.get */ .O.get('recent-transactions', recordId);
    var ref, ref1;
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.add */ .O.add({
        type: 'recent-transactions',
        id: recordId,
        chainId,
        address: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .formatEthereumAddress */ .j8)(address),
        transactions: (0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)([
            {
                at: now,
                hash,
                payload
            },
            // place old transactions last
            ...(ref = chunk === null || chunk === void 0 ? void 0 : chunk.transactions) !== null && ref !== void 0 ? ref : [], 
        ], (x)=>x.hash
        ).slice(0, MAX_RECENT_TRANSACTIONS_SIZE),
        createdAt: (ref1 = chunk === null || chunk === void 0 ? void 0 : chunk.createdAt) !== null && ref1 !== void 0 ? ref1 : now,
        updatedAt: now
    });
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.transactionsUpdated.sendToAll */ .R$.events.transactionsUpdated.sendToAll();
}
async function replaceRecentTransaction(chainId, address, oldHash, newHash, newPayload) {
    const now = new Date();
    const recordId = getRecordId(chainId, address);
    const chunk = await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.get */ .O.get('recent-transactions', recordId);
    const transaction = chunk === null || chunk === void 0 ? void 0 : chunk.transactions.find((x)=>x.hash === oldHash
    );
    if (!transaction) throw new Error('Failed to find the old transaction.');
    if (transaction.hash === newHash) return;
    transaction.hashReplacement = newHash;
    if (newPayload) {
        transaction.payloadReplacement = newPayload;
    }
    var ref, ref2;
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.add */ .O.add({
        type: 'recent-transactions',
        id: recordId,
        chainId,
        address: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .formatEthereumAddress */ .j8)(address),
        transactions: (ref = chunk === null || chunk === void 0 ? void 0 : chunk.transactions) !== null && ref !== void 0 ? ref : [],
        createdAt: (ref2 = chunk === null || chunk === void 0 ? void 0 : chunk.createdAt) !== null && ref2 !== void 0 ? ref2 : now,
        updatedAt: now
    });
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.transactionsUpdated.sendToAll */ .R$.events.transactionsUpdated.sendToAll();
}
async function removeRecentTransaction(chainId, address, hash) {
    const now = new Date();
    const recordId = getRecordId(chainId, address);
    const chunk = await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.get */ .O.get('recent-transactions', recordId);
    if (!chunk) return;
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.add */ .O.add({
        type: 'recent-transactions',
        id: recordId,
        chainId: _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentChainIdSettings.value */ .wU.value,
        address: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .formatEthereumAddress */ .j8)(address),
        transactions: chunk.transactions.filter((x)=>x.hash !== hash
        ),
        createdAt: chunk.createdAt,
        updatedAt: now
    });
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.transactionsUpdated.sendToAll */ .R$.events.transactionsUpdated.sendToAll();
}
async function getRecentTransactions(chainId, address) {
    const recordId = getRecordId(chainId, address);
    const chunk = await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.get */ .O.get('recent-transactions', recordId);
    var ref;
    return (ref = chunk === null || chunk === void 0 ? void 0 : chunk.transactions) !== null && ref !== void 0 ? ref : [];
}
async function clearRecentTransactions(chainId, address) {
    const recordId = getRecordId(chainId, address);
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.remove */ .O.remove('recent-transactions', recordId);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.transactionsUpdated.sendToAll */ .R$.events.transactionsUpdated.sendToAll();
}


/***/ }),

/***/ 24930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ry": () => (/* reexport */ wallet/* addWallet */.ry),
  "Q0": () => (/* reexport */ decryptSecret),
  "tJ": () => (/* reexport */ wallet/* deleteWallet */.tJ),
  "lM": () => (/* reexport */ encryptSecret),
  "iL": () => (/* reexport */ wallet/* getWallet */.iL),
  "zr": () => (/* reexport */ wallet/* getWalletRequired */.zr),
  "MX": () => (/* reexport */ wallet/* getWallets */.MX),
  "Tx": () => (/* reexport */ hasSecret),
  "Ox": () => (/* reexport */ wallet/* hasStoredKeyInfo */.Ox),
  "Sx": () => (/* reexport */ wallet/* hasWallet */.Sx),
  "nG": () => (/* reexport */ updateSecret),
  "K8": () => (/* reexport */ wallet/* updateWallet */.K8)
});

// UNUSED EXPORTS: addToken, blockToken, getSecret, getToken, getTokens, getTokensCount, getTokensPaged, hasStoredKeyInfoRequired, hasToken, hasWalletRequired, removeToken, trustToken, updateWalletToken

// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/database/token.ts
var token = __webpack_require__(18438);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/database/wallet.ts
var wallet = __webpack_require__(94711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_8495c1478c7f1d196df61d0bdcd91148/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(84176);
// EXTERNAL MODULE: ./src/plugins/Wallet/database/Plugin.db.ts
var Plugin_db = __webpack_require__(62137);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/wallet/database/secret.ts



const SECRET_ID = '0';
function derivePBKDF2(password) {
    return crypto.subtle.importKey('raw', (0,esm/* encodeText */.YT)(password).buffer, 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
}
function deriveAES(key, iv) {
    return crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: iv,
        iterations: 100000,
        hash: 'SHA-256'
    }, key, {
        name: 'AES-KW',
        length: 256
    }, false, [
        'wrapKey',
        'unwrapKey'
    ]);
}
function createAES() {
    return crypto.subtle.generateKey({
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
}
function encrypt(message, key, iv) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, message);
}
function decrypt(message, key, iv) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, message);
}
function wrapKey(key, wrapKey1) {
    return crypto.subtle.wrapKey('raw', key, wrapKey1, 'AES-KW');
}
function unwrapKey(key, wrapKey2) {
    return crypto.subtle.unwrapKey('raw', key, wrapKey2, 'AES-KW', 'AES-GCM', false, [
        'encrypt',
        'decrypt'
    ]);
}
function getIV() {
    return crypto.getRandomValues(new Uint8Array(16)).buffer;
}
async function deriveKey(iv, password) {
    return deriveAES(await derivePBKDF2(password), iv);
}
async function getSecret() {
    return Plugin_db/* PluginDB.get */.O.get('secret', SECRET_ID);
}
async function hasSecret() {
    return !!await getSecret();
}
async function encryptSecret(password) {
    const secret = await getSecret();
    if (secret) throw new Error('Failed to encrypt secret.');
    const iv = getIV();
    const key = await deriveKey(iv, password);
    const primaryKey = await createAES();
    const primaryKeyWrapped = await wrapKey(primaryKey, key);
    const message = (0,v4/* default */.Z)() // the primary key never change
    ;
    await Plugin_db/* PluginDB.add */.O.add({
        id: SECRET_ID,
        type: 'secret',
        iv,
        key: primaryKeyWrapped,
        encrypted: await encrypt((0,esm/* encodeText */.YT)(message), primaryKey, iv)
    });
}
async function updateSecret(oldPassword, newPassword) {
    const secret = await getSecret();
    if (!secret) throw new Error('Failed to update secret.');
    const iv = getIV();
    const message = await decryptSecret(oldPassword);
    const key = await deriveKey(iv, newPassword);
    const primaryKey = await createAES();
    const primaryKeyWrapped = await wrapKey(primaryKey, key);
    await Plugin_db/* PluginDB.add */.O.add({
        id: SECRET_ID,
        type: 'secret',
        iv,
        key: primaryKeyWrapped,
        encrypted: await encrypt((0,esm/* encodeText */.YT)(message), primaryKey, iv)
    });
}
async function decryptSecret(password) {
    const secret = await getSecret();
    if (!secret) throw new Error('Failed to decrypt secret.');
    try {
        const key = await deriveKey(secret.iv, password);
        const primaryKey = await unwrapKey(secret.key, key);
        return (0,esm/* decodeText */.rj)(await decrypt(secret.encrypted, primaryKey, secret.iv));
    } catch  {
        return '';
    }
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/wallet/database/index.ts





/***/ }),

/***/ 18438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hA": () => (/* binding */ hasToken),
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "lz": () => (/* binding */ getTokens),
/* harmony export */   "BD": () => (/* binding */ getTokensCount),
/* harmony export */   "sc": () => (/* binding */ getTokensPaged),
/* harmony export */   "Z6": () => (/* binding */ addToken),
/* harmony export */   "gy": () => (/* binding */ removeToken),
/* harmony export */   "om": () => (/* binding */ trustToken),
/* harmony export */   "dr": () => (/* binding */ blockToken)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53580);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18249);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84176);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26218);
/* harmony import */ var _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62137);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7282);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12705);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94711);








const MAX_TOKEN_COUNT = 49;
function getRecordId(address, tokenId) {
    const recordId = `${_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentChainIdSettings.value */ .wU.value}_${address}`;
    return tokenId ? `${recordId}_${tokenId}` : recordId;
}
function getTokenId(tokenDetailed) {
    return tokenDetailed.tokenId;
}
function getTokenAddress(tokenDetailed) {
    return tokenDetailed.address || tokenDetailed.contractDetailed.address;
}
function getTokenType(tokenDetailed) {
    return tokenDetailed.type || tokenDetailed.contractDetailed.type;
}
function getDatabaseType(type) {
    switch(type){
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return 'erc20';
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC721 */ .Dr.ERC721:
            return 'erc721';
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC1155 */ .Dr.ERC1155:
            return 'erc1155';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type);
    }
}
function getEventMessage(type) {
    switch(type){
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.erc20TokensUpdated */ .R$.events.erc20TokensUpdated;
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC721 */ .Dr.ERC721:
            return _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.erc721TokensUpdated */ .R$.events.erc721TokensUpdated;
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC1155 */ .Dr.ERC1155:
            return _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.erc1155TokensUpdated */ .R$.events.erc1155TokensUpdated;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type);
    }
}
function TokenRecordOutDatabase(type, token) {
    const token_ = {
        ...(0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(token, [
            'id',
            'type',
            'created',
            'updated'
        ]),
        type
    };
    switch(type){
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return token_;
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC721 */ .Dr.ERC721:
            return token_;
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC1155 */ .Dr.ERC1155:
            return token_;
        default:
            throw new Error('Unknown token type.');
    }
}
async function hasToken(type, address, tokenId) {
    return _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.has */ .O.has(getDatabaseType(type), getRecordId(address, tokenId));
}
async function getToken(type, address, tokenId) {
    return _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.get */ .O.get(getDatabaseType(type), getRecordId(address, tokenId));
}
async function getTokens(type) {
    const tokens = await (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .asyncIteratorToArray */ .SR)(_database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.iterate */ .O.iterate(getDatabaseType(type)));
    return tokens.map((x)=>x.value
    ).sort((a, z)=>z.createdAt.getTime() - a.createdAt.getTime()
    ).slice(0, MAX_TOKEN_COUNT).map((x)=>TokenRecordOutDatabase(type, x)
    );
}
async function getTokensCount(type) {
    return (await getTokens(type)).length;
}
async function getTokensPaged(type, index, count) {
    let read = 0;
    const records = [];
    for await (const { value: record  } of _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.iterate */ .O.iterate(getDatabaseType(type))){
        if (read > (index + 1) * count) break;
        if (read < index * count) continue;
        records.push(record);
        read += 1;
    }
    return records.map((x)=>TokenRecordOutDatabase(type, x)
    );
}
async function addToken(token) {
    const type = getTokenType(token);
    const tokenId = getTokenId(token);
    const address = getTokenAddress(token);
    if (await hasToken(type, address)) throw new Error(`Token ${address} already exists.`);
    const now = new Date();
    // @ts-ignore
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.add */ .O.add({
        ...token,
        id: getRecordId(address, tokenId),
        type: getDatabaseType(type),
        createdAt: now,
        updatedAt: now
    });
    getEventMessage(type).sendToAll();
}
async function removeToken(token) {
    const type = getTokenType(token);
    const tokenId = getTokenId(token);
    const address = getTokenAddress(token);
    if (!await hasToken(type, address, tokenId)) throw new Error(`Failed to remove token ${address}.`);
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_2__/* .PluginDB.remove */ .O.remove(getDatabaseType(type), getRecordId(address, tokenId));
    getEventMessage(type).sendToAll();
}
function trustToken(address, token) {
    return _wallet__WEBPACK_IMPORTED_MODULE_5__/* .updateWalletToken */ .Pq(address, token, {
        strategy: 'trust'
    });
}
function blockToken(address, token) {
    return _wallet__WEBPACK_IMPORTED_MODULE_5__/* .updateWalletToken */ .Pq(address, token, {
        strategy: 'block'
    });
}


/***/ }),

/***/ 94711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iL": () => (/* binding */ getWallet),
/* harmony export */   "zr": () => (/* binding */ getWalletRequired),
/* harmony export */   "Sx": () => (/* binding */ hasWallet),
/* harmony export */   "Ox": () => (/* binding */ hasStoredKeyInfo),
/* harmony export */   "MX": () => (/* binding */ getWallets),
/* harmony export */   "ry": () => (/* binding */ addWallet),
/* harmony export */   "K8": () => (/* binding */ updateWallet),
/* harmony export */   "tJ": () => (/* binding */ deleteWallet),
/* harmony export */   "Pq": () => (/* binding */ updateWalletToken)
/* harmony export */ });
/* unused harmony exports hasWalletRequired, hasStoredKeyInfoRequired */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53580);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46428);
/* harmony import */ var _dimensiondev_mask_wallet_core_proto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23015);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26218);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71831);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18249);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77031);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7282);
/* harmony import */ var _database_Plugin_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62137);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12705);








function WalletRecordOutDB(record) {
    var ref;
    return {
        ...(0,lodash_unified__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(record, 'type'),
        configurable: ((ref = record.storedKeyInfo) === null || ref === void 0 ? void 0 : ref.type) ? record.storedKeyInfo.type !== _dimensiondev_mask_wallet_core_proto__WEBPACK_IMPORTED_MODULE_0__.api.StoredKeyType.Mnemonic : true,
        hasStoredKeyInfo: !!record.storedKeyInfo,
        hasDerivationPath: !!record.derivationPath
    };
}
async function getWallet(address = _settings__WEBPACK_IMPORTED_MODULE_5__/* .currentMaskWalletAccountSettings.value */ .T_.value) {
    if (!address) return null;
    if (!wallet_ts__WEBPACK_IMPORTED_MODULE_2__.EthereumAddress.isValid(address)) throw new Error('Not a valid address.');
    var ref;
    const wallet = (ref = await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_4__/* .PluginDB.get */ .O.get('wallet', (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address))) !== null && ref !== void 0 ? ref : null;
    return wallet ? WalletRecordOutDB(wallet) : null;
}
async function getWalletRequired(address) {
    const wallet = await getWallet(address);
    if (!wallet) throw new Error('The wallet does not exist.');
    return wallet;
}
async function hasWallet(address) {
    return _database_Plugin_db__WEBPACK_IMPORTED_MODULE_4__/* .PluginDB.has */ .O.has('wallet', (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address));
}
async function hasWalletRequired(address) {
    const has = await hasWallet(address);
    if (!has) throw new Error('The wallet does not exist.');
    return has;
}
async function hasStoredKeyInfo(storedKeyInfo) {
    const wallets = await getWallets();
    if (!storedKeyInfo) return false;
    return wallets.filter((x)=>{
        var ref;
        return (ref = x.storedKeyInfo) === null || ref === void 0 ? void 0 : ref.hash;
    }).some((x)=>{
        var ref;
        return ((ref = x.storedKeyInfo) === null || ref === void 0 ? void 0 : ref.hash) === (storedKeyInfo === null || storedKeyInfo === void 0 ? void 0 : storedKeyInfo.hash);
    });
}
async function hasStoredKeyInfoRequired(storedKeyInfo) {
    const has = await hasStoredKeyInfo(storedKeyInfo);
    if (!has) throw new Error('The stored key info does not exist.');
    return has;
}
async function getWallets(provider) {
    const wallets = (await (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .asyncIteratorToArray */ .SR)(_database_Plugin_db__WEBPACK_IMPORTED_MODULE_4__/* .PluginDB.iterate */ .O.iterate('wallet'))).map((x)=>x.value
    );
    const address = provider === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .ProviderType.MaskWallet */ .lP.MaskWallet ? _settings__WEBPACK_IMPORTED_MODULE_5__/* .currentMaskWalletAccountSettings.value */ .T_.value : _settings__WEBPACK_IMPORTED_MODULE_5__/* .currentAccountSettings.value */ .aK.value;
    wallets.sort((a, z)=>{
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isSameAddress */ .Wr)(a.address, address)) return -1;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isSameAddress */ .Wr)(z.address, address)) return 1;
        if (a.updatedAt > z.updatedAt) return -1;
        if (a.updatedAt < z.updatedAt) return 1;
        if (a.createdAt > z.createdAt) return -1;
        if (a.createdAt < z.createdAt) return 1;
        return 0;
    });
    if (provider === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .ProviderType.MaskWallet */ .lP.MaskWallet) return wallets.filter((x)=>x.storedKeyInfo
    ).map(WalletRecordOutDB);
    if (provider === _settings__WEBPACK_IMPORTED_MODULE_5__/* .currentProviderSettings.value */ .t1.value) return wallets.filter((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .currySameAddress */ .DC)(address)).map(WalletRecordOutDB);
    if (provider) return [];
    return wallets.map(WalletRecordOutDB);
}
async function addWallet(address, name, derivationPath, storedKeyInfo) {
    var ref;
    const wallet = await getWallet(address);
    // overwrite mask wallet is not allowed
    if (wallet === null || wallet === void 0 ? void 0 : (ref = wallet.storedKeyInfo) === null || ref === void 0 ? void 0 : ref.data) throw new Error('The wallet already exists.');
    const now = new Date();
    const address_ = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address);
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_4__/* .PluginDB.add */ .O.add({
        id: address_,
        type: 'wallet',
        address: address_,
        name: (name === null || name === void 0 ? void 0 : name.trim()) || `Account ${(await getWallets()).length + 1}`,
        derivationPath,
        storedKeyInfo,
        erc20_token_whitelist: new Set(),
        erc20_token_blacklist: new Set(),
        erc721_token_whitelist: new Set(),
        erc721_token_blacklist: new Set(),
        erc1155_token_whitelist: new Set(),
        erc1155_token_blacklist: new Set(),
        createdAt: now,
        updatedAt: now
    });
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll(undefined);
    return address_;
}
async function updateWallet(address, updates) {
    const wallet = await getWallet(address);
    const now = new Date();
    const address_ = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address);
    var ref;
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_4__/* .PluginDB.add */ .O.add({
        type: 'wallet',
        id: address_,
        address: address_,
        name: `Account ${(await getWallets()).length + 1}`,
        erc20_token_whitelist: new Set(),
        erc20_token_blacklist: new Set(),
        erc721_token_whitelist: new Set(),
        erc721_token_blacklist: new Set(),
        erc1155_token_whitelist: new Set(),
        erc1155_token_blacklist: new Set(),
        ...wallet,
        ...updates,
        createdAt: (ref = wallet === null || wallet === void 0 ? void 0 : wallet.createdAt) !== null && ref !== void 0 ? ref : now,
        updatedAt: now
    });
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll(undefined);
}
async function deleteWallet(address) {
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_4__/* .PluginDB.remove */ .O.remove('wallet', address);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll(undefined);
}
async function updateWalletToken(address, token, { strategy  }) {
    const wallet = await getWalletRequired(address);
    const tokenAddress = token.address || token.contractDetailed.address;
    const tokenAddressChecksummed = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(tokenAddress);
    const tokenType = token.type || token.contractDetailed.type;
    const operationMap = {
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .EthereumTokenType.ERC20 */ .Dr.ERC20]: {
            block: wallet.erc20_token_blacklist,
            trust: wallet.erc20_token_whitelist
        },
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .EthereumTokenType.ERC721 */ .Dr.ERC721]: {
            block: wallet.erc721_token_blacklist,
            trust: wallet.erc721_token_whitelist
        },
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .EthereumTokenType.ERC1155 */ .Dr.ERC1155]: {
            block: wallet.erc1155_token_blacklist,
            trust: wallet.erc1155_token_whitelist
        }
    };
    const set = operationMap[tokenType][strategy];
    const reverseSet = operationMap[tokenType][strategy === 'block' ? 'trust' : 'block'];
    let updated = false;
    if (!set.has(tokenAddressChecksummed)) {
        set.add(tokenAddressChecksummed);
        updated = true;
    }
    if (reverseSet.has(tokenAddressChecksummed)) {
        set.delete(tokenAddressChecksummed);
        updated = true;
    }
    if (!updated) return;
    await updateWallet(address, (0,lodash_unified__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(wallet, [
        'erc20_token_blacklist',
        'erc20_token_whitelist',
        'erc721_token_blacklist',
        'erc721_token_whitelist',
        'erc1155_token_blacklist',
        'erc1155_token_whitelist', 
    ]));
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll(undefined);
}


/***/ }),

/***/ 35655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ir": () => (/* binding */ isFinalState),
/* harmony export */   "NU": () => (/* binding */ isNextStateAvailable)
/* harmony export */ });
/* unused harmony export isEIP1559Transaction */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84176);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);


function isEIP1559Transaction(receipt) {
    return typeof receipt.maxFeePerGas !== 'undefined' && typeof receipt.maxPriorityFeePerGas !== 'undefined';
}
function isFinalState(type) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED
    ].includes(type);
}
/**
 * UNKNOWN -> WAIT_FOR_CONFIRMING
 * UNKNOWN, WAIT_FOR_CONFIRMING -> HASH
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH -> RECEIPT
 * WAIT_FOR_CONFIRMING, HASH, RECEIPT -> CONFIRMED
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH, RECEIPT -> FAILED
 */ function isNextStateAvailable(type, nextType) {
    switch(nextType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN:
            return false;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(nextType);
    }
}


/***/ }),

/***/ 80305:
/***/ ((module) => {

module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}


/***/ }),

/***/ 54328:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(33799)["Buffer"];
// Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
(function(root, f) {
  'use strict';
  if ( true && module.exports) module.exports = f();
  else if (root.nacl) root.nacl.util = f();
  else {
    root.nacl = {};
    root.nacl.util = f();
  }
}(this, function() {
  'use strict';

  var util = {};

  function validateBase64(s) {
    if (!(/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(s))) {
      throw new TypeError('invalid encoding');
    }
  }

  util.decodeUTF8 = function(s) {
    if (typeof s !== 'string') throw new TypeError('expected string');
    var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
    for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
    return b;
  };

  util.encodeUTF8 = function(arr) {
    var i, s = [];
    for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
    return decodeURIComponent(escape(s.join('')));
  };

  if (typeof atob === 'undefined') {
    // Node.js

    if (typeof Buffer.from !== 'undefined') {
       // Node v6 and later
      util.encodeBase64 = function (arr) { // v6 and later
          return Buffer.from(arr).toString('base64');
      };

      util.decodeBase64 = function (s) {
        validateBase64(s);
        return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));
      };

    } else {
      // Node earlier than v6
      util.encodeBase64 = function (arr) { // v6 and later
        return (new Buffer(arr)).toString('base64');
      };

      util.decodeBase64 = function(s) {
        validateBase64(s);
        return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
      };
    }

  } else {
    // Browsers

    util.encodeBase64 = function(arr) {
      var i, s = [], len = arr.length;
      for (i = 0; i < len; i++) s.push(String.fromCharCode(arr[i]));
      return btoa(s.join(''));
    };

    util.decodeBase64 = function(s) {
      validateBase64(s);
      var i, d = atob(s), b = new Uint8Array(d.length);
      for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
      return b;
    };

  }

  return util;

}));


/***/ }),

/***/ 10186:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
/**
 * Convert a typed array to a Buffer without a copy
 *
 * Author:   Feross Aboukhadijeh <https://feross.org>
 * License:  MIT
 *
 * `npm install typedarray-to-buffer`
 */

var isTypedArray = (__webpack_require__(48186).strict)

module.exports = function typedarrayToBuffer (arr) {
  if (isTypedArray(arr)) {
    // To avoid a copy, use the typed array's underlying ArrayBuffer to back new Buffer
    var buf = Buffer.from(arr.buffer)
    if (arr.byteLength !== arr.buffer.byteLength) {
      // Respect the "view", i.e. byteOffset and byteLength, without doing a copy
      buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength)
    }
    return buf
  } else {
    // Pass through all other types to `Buffer.from`
    return Buffer.from(arr)
  }
}


/***/ }),

/***/ 88672:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function getFromWindow(name) {
    let res = undefined;
    if (typeof window !== 'undefined' && typeof window[name] !== 'undefined') {
        res = window[name];
    }
    return res;
}
exports.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
    const res = getFromWindow(name);
    if (!res) {
        throw new Error(`${name} is not defined in Window`);
    }
    return res;
}
exports.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
    return getFromWindowOrThrow('document');
}
exports.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
    return getFromWindow('document');
}
exports.getDocument = getDocument;
function getNavigatorOrThrow() {
    return getFromWindowOrThrow('navigator');
}
exports.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
    return getFromWindow('navigator');
}
exports.getNavigator = getNavigator;
function getLocationOrThrow() {
    return getFromWindowOrThrow('location');
}
exports.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
    return getFromWindow('location');
}
exports.getLocation = getLocation;
function getCryptoOrThrow() {
    return getFromWindowOrThrow('crypto');
}
exports.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
    return getFromWindow('crypto');
}
exports.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
    return getFromWindowOrThrow('localStorage');
}
exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
    return getFromWindow('localStorage');
}
exports.getLocalStorage = getLocalStorage;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 37199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const window_getters_1 = __webpack_require__(88672);
function getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
    }
    catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName('link');
        const icons = [];
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            const rel = link.getAttribute('rel');
            if (rel) {
                if (rel.toLowerCase().indexOf('icon') > -1) {
                    const href = link.getAttribute('href');
                    if (href) {
                        if (href.toLowerCase().indexOf('https:') === -1 &&
                            href.toLowerCase().indexOf('http:') === -1 &&
                            href.indexOf('//') !== 0) {
                            let absoluteHref = loc.protocol + '//' + loc.host;
                            if (href.indexOf('/') === 0) {
                                absoluteHref += href;
                            }
                            else {
                                const path = loc.pathname.split('/');
                                path.pop();
                                const finalPath = path.join('/');
                                absoluteHref += finalPath + '/' + href;
                            }
                            icons.push(absoluteHref);
                        }
                        else if (href.indexOf('//') === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        }
                        else {
                            icons.push(href);
                        }
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName('meta');
        for (let i = 0; i < metaTags.length; i++) {
            const tag = metaTags[i];
            const attributes = ['itemprop', 'property', 'name']
                .map((target) => tag.getAttribute(target))
                .filter((attr) => {
                if (attr) {
                    return args.includes(attr);
                }
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute('content');
                if (content) {
                    return content;
                }
            }
        }
        return '';
    }
    function getName() {
        let name = getWindowMetadataOfAny('name', 'og:site_name', 'og:title', 'twitter:title');
        if (!name) {
            name = doc.title;
        }
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny('description', 'og:description', 'twitter:description', 'keywords');
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description,
        url,
        icons,
        name,
    };
    return meta;
}
exports.getWindowMetadata = getWindowMetadata;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 42065:
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 83876:
/***/ ((module) => {

"use strict";


module.exports = function() {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ }),

/***/ 20003:
/***/ ((module) => {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),

/***/ 29036:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 73911:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 95985:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 33799:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 23938:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46517:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85621);


const advanceMethodProps = ['continue', 'continuePrimaryKey', 'advance'];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get(target, prop) {
        if (!advanceMethodProps.includes(prop))
            return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function (...args) {
                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
        }
        return cachedFunc;
    },
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
        cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
        return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.a.set(proxiedCursor, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u)(cursor));
    while (cursor) {
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return ((prop === Symbol.asyncIterator &&
        (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.i)(target, [IDBIndex, IDBObjectStore, IDBCursor])) ||
        (prop === 'iterate' && (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.i)(target, [IDBIndex, IDBObjectStore])));
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get(target, prop, receiver) {
        if (isIteratorProp(target, prop))
            return iterate;
        return oldTraps.get(target, prop, receiver);
    },
    has(target, prop) {
        return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    },
}));


/***/ }),

/***/ 60759:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"CHROME_ID":"nkbihfbeogaeaoehlefnkodbefgpgknn","FIREFOX_ID":"webextension@metamask.io"}');

/***/ }),

/***/ 29389:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"dest","type":"address"},{"indexed":true,"internalType":"address","name":"donor","type":"address"}],"name":"DonationSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"dest","type":"address"}],"name":"TokenWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"dest","type":"address"}],"internalType":"struct BulkCheckout.Donation[]","name":"_donations","type":"tuple[]"}],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_dest","type":"address"}],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_dest","type":"address"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 5261:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"},{"indexed":false,"internalType":"bool","name":"ifrandom","type":"bool"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes","name":"signedMsg","type":"bytes"},{"internalType":"address payable","name":"recipient","type":"address"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_public_key","type":"address"},{"internalType":"uint256","name":"_number","type":"uint256"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 47744:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"end","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"indexed":false,"internalType":"uint128[]","name":"ratios","type":"uint128[]"},{"indexed":false,"internalType":"address","name":"qualification","type":"address"},{"indexed":false,"internalType":"uint256","name":"limit","type":"uint256"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"uint128","name":"input_total","type":"uint128"},{"indexed":false,"internalType":"bool","name":"claimed","type":"bool"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[],"name":"base_time","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"destructed","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"end_time","type":"uint256"},{"internalType":"address","name":"qualification_addr","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_base_time","type":"uint64"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint32","name":"_unlock_time","type":"uint32"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 7744:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"}],"name":"CancelSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ClaimPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"address","name":"nft_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint32","name":"start_time","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"end_time","type":"uint32"},{"indexed":false,"internalType":"bool","name":"sell_all","type":"bool"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"customer","type":"address"},{"indexed":true,"internalType":"address","name":"nft_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OpenSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"name":"addNftIntoBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"cancelBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"box_ids","type":"uint256[]"}],"name":"claimPayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nft_address","type":"address"},{"internalType":"string","name":"name","type":"string"},{"components":[{"internalType":"address","name":"token_addr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MysteryBox.PaymentOption[]","name":"payment","type":"tuple[]"},{"internalType":"uint32","name":"personal_limit","type":"uint32"},{"internalType":"uint32","name":"start_time","type":"uint32"},{"internalType":"uint32","name":"end_time","type":"uint32"},{"internalType":"bool","name":"sell_all","type":"bool"},{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"},{"internalType":"address","name":"qualification","type":"address"},{"internalType":"address","name":"holder_token_addr","type":"address"},{"internalType":"uint256","name":"holder_min_token_amount","type":"uint256"}],"name":"createBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"getBoxInfo","outputs":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"address","name":"nft_address","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint32","name":"personal_limit","type":"uint32"},{"internalType":"address","name":"qualification","type":"address"},{"internalType":"address","name":"holder_token_addr","type":"address"},{"internalType":"uint256","name":"holder_min_token_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"getBoxStatus","outputs":[{"components":[{"internalType":"address","name":"token_addr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"receivable_amount","type":"uint256"}],"internalType":"struct MysteryBox.PaymentInfo[]","name":"payment","type":"tuple[]"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getNftListForSale","outputs":[{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"address","name":"customer","type":"address"}],"name":"getPurchasedNft","outputs":[{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint8","name":"amount","type":"uint8"},{"internalType":"uint8","name":"payment_token_index","type":"uint8"},{"internalType":"bytes","name":"proof","type":"bytes"}],"name":"openBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"removeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');

/***/ })

}]);