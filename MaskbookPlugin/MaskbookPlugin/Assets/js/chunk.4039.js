<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4039.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4039,3679],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1981,1951],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1981.js

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
const tslib_1 = __webpack_require__(64873);
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

/***/ 44582:
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
const constants_1 = __webpack_require__(44582);
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
const constants_1 = __webpack_require__(44582);
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

/***/ 73334:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(64873);
tslib_1.__exportStar(__webpack_require__(44582), exports);
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
const tslib_1 = __webpack_require__(64873);
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

/***/ 33745:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const pump_1 = __importDefault(__webpack_require__(17791));
const json_rpc_engine_1 = __webpack_require__(91743);
const json_rpc_middleware_stream_1 = __webpack_require__(9152);
const object_multiplex_1 = __importDefault(__webpack_require__(83576));
const safe_event_emitter_1 = __importDefault(__webpack_require__(35247));
const fast_deep_equal_1 = __importDefault(__webpack_require__(11203));
const eth_rpc_errors_1 = __webpack_require__(65679);
const is_stream_1 = __webpack_require__(57983);
const messages_1 = __importDefault(__webpack_require__(13443));
const utils_1 = __webpack_require__(71242);
class BaseProvider extends safe_event_emitter_1.default {
    /**
     * @param connectionStream - A Node.js duplex stream
     * @param options - An options bag
     * @param options.jsonRpcStreamName - The name of the internal JSON-RPC stream.
     * Default: metamask-provider
     * @param options.logger - The logging API to use. Default: console
     * @param options.maxEventListeners - The maximum number of event
     * listeners. Default: 100
     */
    constructor(connectionStream, { jsonRpcStreamName = 'metamask-provider', logger = console, maxEventListeners = 100, } = {}) {
        super();
        if (!is_stream_1.duplex(connectionStream)) {
            throw new Error(messages_1.default.errors.invalidDuplexStream());
        }
        this._log = logger;
        this.setMaxListeners(maxEventListeners);
        // private state
        this._state = Object.assign({}, BaseProvider._defaultState);
        // public state
        this.selectedAddress = null;
        this.chainId = null;
        // bind functions (to prevent consumers from making unbound calls)
        this._handleAccountsChanged = this._handleAccountsChanged.bind(this);
        this._handleConnect = this._handleConnect.bind(this);
        this._handleChainChanged = this._handleChainChanged.bind(this);
        this._handleDisconnect = this._handleDisconnect.bind(this);
        this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
        this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this);
        this._rpcRequest = this._rpcRequest.bind(this);
        this.request = this.request.bind(this);
        // setup connectionStream multiplexing
        const mux = new object_multiplex_1.default();
        pump_1.default(connectionStream, mux, connectionStream, this._handleStreamDisconnect.bind(this, 'MetaMask'));
        // setup own event listeners
        // EIP-1193 connect
        this.on('connect', () => {
            this._state.isConnected = true;
        });
        // setup RPC connection
        this._jsonRpcConnection = json_rpc_middleware_stream_1.createStreamMiddleware();
        pump_1.default(this._jsonRpcConnection.stream, mux.createStream(jsonRpcStreamName), this._jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, 'MetaMask RpcProvider'));
        // handle RPC requests via dapp-side rpc engine
        const rpcEngine = new json_rpc_engine_1.JsonRpcEngine();
        rpcEngine.push(json_rpc_engine_1.createIdRemapMiddleware());
        rpcEngine.push(utils_1.createErrorMiddleware(this._log));
        rpcEngine.push(this._jsonRpcConnection.middleware);
        this._rpcEngine = rpcEngine;
        this._initializeState();
        // handle JSON-RPC notifications
        this._jsonRpcConnection.events.on('notification', (payload) => {
            const { method, params } = payload;
            if (method === 'metamask_accountsChanged') {
                this._handleAccountsChanged(params);
            }
            else if (method === 'metamask_unlockStateChanged') {
                this._handleUnlockStateChanged(params);
            }
            else if (method === 'metamask_chainChanged') {
                this._handleChainChanged(params);
            }
            else if (utils_1.EMITTED_NOTIFICATIONS.includes(method)) {
                this.emit('message', {
                    type: method,
                    data: params,
                });
            }
            else if (method === 'METAMASK_STREAM_FAILURE') {
                connectionStream.destroy(new Error(messages_1.default.errors.permanentlyDisconnected()));
            }
        });
    }
    //====================
    // Public Methods
    //====================
    /**
     * Returns whether the provider can process RPC requests.
     */
    isConnected() {
        return this._state.isConnected;
    }
    /**
     * Submits an RPC request for the given method, with the given params.
     * Resolves with the result of the method call, or rejects on error.
     *
     * @param args - The RPC request arguments.
     * @param args.method - The RPC method name.
     * @param args.params - The parameters for the RPC method.
     * @returns A Promise that resolves with the result of the RPC method,
     * or rejects if an error is encountered.
     */
    async request(args) {
        if (!args || typeof args !== 'object' || Array.isArray(args)) {
            throw eth_rpc_errors_1.ethErrors.rpc.invalidRequest({
                message: messages_1.default.errors.invalidRequestArgs(),
                data: args,
            });
        }
        const { method, params } = args;
        if (typeof method !== 'string' || method.length === 0) {
            throw eth_rpc_errors_1.ethErrors.rpc.invalidRequest({
                message: messages_1.default.errors.invalidRequestMethod(),
                data: args,
            });
        }
        if (params !== undefined &&
            !Array.isArray(params) &&
            (typeof params !== 'object' || params === null)) {
            throw eth_rpc_errors_1.ethErrors.rpc.invalidRequest({
                message: messages_1.default.errors.invalidRequestParams(),
                data: args,
            });
        }
        return new Promise((resolve, reject) => {
            this._rpcRequest({ method, params }, utils_1.getRpcPromiseCallback(resolve, reject));
        });
    }
    //====================
    // Private Methods
    //====================
    /**
     * Constructor helper.
     * Populates initial state by calling 'metamask_getProviderState' and emits
     * necessary events.
     */
    async _initializeState() {
        try {
            const { accounts, chainId, isUnlocked, networkVersion, } = (await this.request({
                method: 'metamask_getProviderState',
            }));
            // indicate that we've connected, for EIP-1193 compliance
            this.emit('connect', { chainId });
            this._handleChainChanged({ chainId, networkVersion });
            this._handleUnlockStateChanged({ accounts, isUnlocked });
            this._handleAccountsChanged(accounts);
        }
        catch (error) {
            this._log.error('MetaMask: Failed to get initial state. Please report this bug.', error);
        }
        finally {
            this._state.initialized = true;
            this.emit('_initialized');
        }
    }
    /**
     * Internal RPC method. Forwards requests to background via the RPC engine.
     * Also remap ids inbound and outbound.
     *
     * @param payload - The RPC request object.
     * @param callback - The consumer's callback.
     */
    _rpcRequest(payload, callback) {
        let cb = callback;
        if (!Array.isArray(payload)) {
            if (!payload.jsonrpc) {
                payload.jsonrpc = '2.0';
            }
            if (payload.method === 'eth_accounts' ||
                payload.method === 'eth_requestAccounts') {
                // handle accounts changing
                cb = (err, res) => {
                    this._handleAccountsChanged(res.result || [], payload.method === 'eth_accounts');
                    callback(err, res);
                };
            }
            return this._rpcEngine.handle(payload, cb);
        }
        return this._rpcEngine.handle(payload, cb);
    }
    /**
     * When the provider becomes connected, updates internal state and emits
     * required events. Idempotent.
     *
     * @param chainId - The ID of the newly connected chain.
     * @emits MetaMaskInpageProvider#connect
     */
    _handleConnect(chainId) {
        if (!this._state.isConnected) {
            this._state.isConnected = true;
            this.emit('connect', { chainId });
            this._log.debug(messages_1.default.info.connected(chainId));
        }
    }
    /**
     * When the provider becomes disconnected, updates internal state and emits
     * required events. Idempotent with respect to the isRecoverable parameter.
     *
     * Error codes per the CloseEvent status codes as required by EIP-1193:
     * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
     *
     * @param isRecoverable - Whether the disconnection is recoverable.
     * @param errorMessage - A custom error message.
     * @emits MetaMaskInpageProvider#disconnect
     */
    _handleDisconnect(isRecoverable, errorMessage) {
        if (this._state.isConnected ||
            (!this._state.isPermanentlyDisconnected && !isRecoverable)) {
            this._state.isConnected = false;
            let error;
            if (isRecoverable) {
                error = new eth_rpc_errors_1.EthereumRpcError(1013, // Try again later
                errorMessage || messages_1.default.errors.disconnected());
                this._log.debug(error);
            }
            else {
                error = new eth_rpc_errors_1.EthereumRpcError(1011, // Internal error
                errorMessage || messages_1.default.errors.permanentlyDisconnected());
                this._log.error(error);
                this.chainId = null;
                this._state.accounts = null;
                this.selectedAddress = null;
                this._state.isUnlocked = false;
                this._state.isPermanentlyDisconnected = true;
            }
            this.emit('disconnect', error);
        }
    }
    /**
     * Called when connection is lost to critical streams.
     *
     * @emits MetamaskInpageProvider#disconnect
     */
    _handleStreamDisconnect(streamName, error) {
        utils_1.logStreamDisconnectWarning(this._log, streamName, error, this);
        this._handleDisconnect(false, error ? error.message : undefined);
    }
    /**
     * Upon receipt of a new chainId and networkVersion, emits corresponding
     * events and sets relevant public state.
     * Does nothing if neither the chainId nor the networkVersion are different
     * from existing values.
     *
     * @emits MetamaskInpageProvider#chainChanged
     * @param networkInfo - An object with network info.
     * @param networkInfo.chainId - The latest chain ID.
     * @param networkInfo.networkVersion - The latest network ID.
     */
    _handleChainChanged({ chainId, networkVersion, } = {}) {
        if (!chainId ||
            typeof chainId !== 'string' ||
            !chainId.startsWith('0x') ||
            !networkVersion ||
            typeof networkVersion !== 'string') {
            this._log.error('MetaMask: Received invalid network parameters. Please report this bug.', { chainId, networkVersion });
            return;
        }
        if (networkVersion === 'loading') {
            this._handleDisconnect(true);
        }
        else {
            this._handleConnect(chainId);
            if (chainId !== this.chainId) {
                this.chainId = chainId;
                if (this._state.initialized) {
                    this.emit('chainChanged', this.chainId);
                }
            }
        }
    }
    /**
     * Called when accounts may have changed. Diffs the new accounts value with
     * the current one, updates all state as necessary, and emits the
     * accountsChanged event.
     *
     * @param accounts - The new accounts value.
     * @param isEthAccounts - Whether the accounts value was returned by
     * a call to eth_accounts.
     */
    _handleAccountsChanged(accounts, isEthAccounts = false) {
        let _accounts = accounts;
        if (!Array.isArray(accounts)) {
            this._log.error('MetaMask: Received invalid accounts parameter. Please report this bug.', accounts);
            _accounts = [];
        }
        for (const account of accounts) {
            if (typeof account !== 'string') {
                this._log.error('MetaMask: Received non-string account. Please report this bug.', accounts);
                _accounts = [];
                break;
            }
        }
        // emit accountsChanged if anything about the accounts array has changed
        if (!fast_deep_equal_1.default(this._state.accounts, _accounts)) {
            // we should always have the correct accounts even before eth_accounts
            // returns
            if (isEthAccounts && this._state.accounts !== null) {
                this._log.error(`MetaMask: 'eth_accounts' unexpectedly updated accounts. Please report this bug.`, _accounts);
            }
            this._state.accounts = _accounts;
            // handle selectedAddress
            if (this.selectedAddress !== _accounts[0]) {
                this.selectedAddress = _accounts[0] || null;
            }
            // finally, after all state has been updated, emit the event
            if (this._state.initialized) {
                this.emit('accountsChanged', _accounts);
            }
        }
    }
    /**
     * Upon receipt of a new isUnlocked state, sets relevant public state.
     * Calls the accounts changed handler with the received accounts, or an empty
     * array.
     *
     * Does nothing if the received value is equal to the existing value.
     * There are no lock/unlock events.
     *
     * @param opts - Options bag.
     * @param opts.accounts - The exposed accounts, if any.
     * @param opts.isUnlocked - The latest isUnlocked value.
     */
    _handleUnlockStateChanged({ accounts, isUnlocked, } = {}) {
        if (typeof isUnlocked !== 'boolean') {
            this._log.error('MetaMask: Received invalid isUnlocked parameter. Please report this bug.');
            return;
        }
        if (isUnlocked !== this._state.isUnlocked) {
            this._state.isUnlocked = isUnlocked;
            this._handleAccountsChanged(accounts || []);
        }
    }
}
exports.default = BaseProvider;
BaseProvider._defaultState = {
    accounts: null,
    isConnected: false,
    isUnlocked: false,
    initialized: false,
    isPermanentlyDisconnected: false,
};
//# sourceMappingURL=BaseProvider.js.map

/***/ }),

/***/ 39602:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const eth_rpc_errors_1 = __webpack_require__(65679);
const siteMetadata_1 = __importDefault(__webpack_require__(98991));
const messages_1 = __importDefault(__webpack_require__(13443));
const utils_1 = __webpack_require__(71242);
const BaseProvider_1 = __importDefault(__webpack_require__(33745));
class MetaMaskInpageProvider extends BaseProvider_1.default {
    /**
     * @param connectionStream - A Node.js duplex stream
     * @param options - An options bag
     * @param options.jsonRpcStreamName - The name of the internal JSON-RPC stream.
     * Default: metamask-provider
     * @param options.logger - The logging API to use. Default: console
     * @param options.maxEventListeners - The maximum number of event
     * listeners. Default: 100
     * @param options.shouldSendMetadata - Whether the provider should
     * send page metadata. Default: true
     */
    constructor(connectionStream, { jsonRpcStreamName = 'metamask-provider', logger = console, maxEventListeners = 100, shouldSendMetadata = true, } = {}) {
        super(connectionStream, { jsonRpcStreamName, logger, maxEventListeners });
        this._sentWarnings = {
            // methods
            enable: false,
            experimentalMethods: false,
            send: false,
            // events
            events: {
                close: false,
                data: false,
                networkChanged: false,
                notification: false,
            },
        };
        this.networkVersion = null;
        this.isMetaMask = true;
        this._sendSync = this._sendSync.bind(this);
        this.enable = this.enable.bind(this);
        this.send = this.send.bind(this);
        this.sendAsync = this.sendAsync.bind(this);
        this._warnOfDeprecation = this._warnOfDeprecation.bind(this);
        this._metamask = this._getExperimentalApi();
        // handle JSON-RPC notifications
        this._jsonRpcConnection.events.on('notification', (payload) => {
            const { method } = payload;
            if (utils_1.EMITTED_NOTIFICATIONS.includes(method)) {
                // deprecated
                // emitted here because that was the original order
                this.emit('data', payload);
                // deprecated
                this.emit('notification', payload.params.result);
            }
        });
        // send website metadata
        if (shouldSendMetadata) {
            if (document.readyState === 'complete') {
                siteMetadata_1.default(this._rpcEngine, this._log);
            }
            else {
                const domContentLoadedHandler = () => {
                    siteMetadata_1.default(this._rpcEngine, this._log);
                    window.removeEventListener('DOMContentLoaded', domContentLoadedHandler);
                };
                window.addEventListener('DOMContentLoaded', domContentLoadedHandler);
            }
        }
    }
    //====================
    // Public Methods
    //====================
    /**
     * Submits an RPC request per the given JSON-RPC request object.
     *
     * @param payload - The RPC request object.
     * @param cb - The callback function.
     */
    sendAsync(payload, callback) {
        this._rpcRequest(payload, callback);
    }
    /**
     * We override the following event methods so that we can warn consumers
     * about deprecated events:
     *   addListener, on, once, prependListener, prependOnceListener
     */
    addListener(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.addListener(eventName, listener);
    }
    on(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.on(eventName, listener);
    }
    once(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.once(eventName, listener);
    }
    prependListener(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.prependListener(eventName, listener);
    }
    prependOnceListener(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.prependOnceListener(eventName, listener);
    }
    //====================
    // Private Methods
    //====================
    /**
     * When the provider becomes disconnected, updates internal state and emits
     * required events. Idempotent with respect to the isRecoverable parameter.
     *
     * Error codes per the CloseEvent status codes as required by EIP-1193:
     * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
     *
     * @param isRecoverable - Whether the disconnection is recoverable.
     * @param errorMessage - A custom error message.
     * @emits MetaMaskInpageProvider#disconnect
     */
    _handleDisconnect(isRecoverable, errorMessage) {
        super._handleDisconnect(isRecoverable, errorMessage);
        if (this.networkVersion && !isRecoverable) {
            this.networkVersion = null;
        }
    }
    /**
     * Warns of deprecation for the given event, if applicable.
     */
    _warnOfDeprecation(eventName) {
        var _a;
        if (((_a = this._sentWarnings) === null || _a === void 0 ? void 0 : _a.events[eventName]) === false) {
            this._log.warn(messages_1.default.warnings.events[eventName]);
            this._sentWarnings.events[eventName] = true;
        }
    }
    //====================
    // Deprecated Methods
    //====================
    /**
     * Equivalent to: ethereum.request('eth_requestAccounts')
     *
     * @deprecated Use request({ method: 'eth_requestAccounts' }) instead.
     * @returns A promise that resolves to an array of addresses.
     */
    enable() {
        if (!this._sentWarnings.enable) {
            this._log.warn(messages_1.default.warnings.enableDeprecation);
            this._sentWarnings.enable = true;
        }
        return new Promise((resolve, reject) => {
            try {
                this._rpcRequest({ method: 'eth_requestAccounts', params: [] }, utils_1.getRpcPromiseCallback(resolve, reject));
            }
            catch (error) {
                reject(error);
            }
        });
    }
    send(methodOrPayload, callbackOrArgs) {
        if (!this._sentWarnings.send) {
            this._log.warn(messages_1.default.warnings.sendDeprecation);
            this._sentWarnings.send = true;
        }
        if (typeof methodOrPayload === 'string' &&
            (!callbackOrArgs || Array.isArray(callbackOrArgs))) {
            return new Promise((resolve, reject) => {
                try {
                    this._rpcRequest({ method: methodOrPayload, params: callbackOrArgs }, utils_1.getRpcPromiseCallback(resolve, reject, false));
                }
                catch (error) {
                    reject(error);
                }
            });
        }
        else if (methodOrPayload &&
            typeof methodOrPayload === 'object' &&
            typeof callbackOrArgs === 'function') {
            return this._rpcRequest(methodOrPayload, callbackOrArgs);
        }
        return this._sendSync(methodOrPayload);
    }
    /**
     * Internal backwards compatibility method, used in send.
     *
     * @deprecated
     */
    _sendSync(payload) {
        let result;
        switch (payload.method) {
            case 'eth_accounts':
                result = this.selectedAddress ? [this.selectedAddress] : [];
                break;
            case 'eth_coinbase':
                result = this.selectedAddress || null;
                break;
            case 'eth_uninstallFilter':
                this._rpcRequest(payload, utils_1.NOOP);
                result = true;
                break;
            case 'net_version':
                result = this.networkVersion || null;
                break;
            default:
                throw new Error(messages_1.default.errors.unsupportedSync(payload.method));
        }
        return {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            result,
        };
    }
    /**
     * Constructor helper.
     * Gets experimental _metamask API as Proxy, so that we can warn consumers
     * about its experiment nature.
     */
    _getExperimentalApi() {
        return new Proxy({
            /**
             * Determines if MetaMask is unlocked by the user.
             *
             * @returns Promise resolving to true if MetaMask is currently unlocked
             */
            isUnlocked: async () => {
                if (!this._state.initialized) {
                    await new Promise((resolve) => {
                        this.on('_initialized', () => resolve());
                    });
                }
                return this._state.isUnlocked;
            },
            /**
             * Make a batch RPC request.
             */
            requestBatch: async (requests) => {
                if (!Array.isArray(requests)) {
                    throw eth_rpc_errors_1.ethErrors.rpc.invalidRequest({
                        message: 'Batch requests must be made with an array of request objects.',
                        data: requests,
                    });
                }
                return new Promise((resolve, reject) => {
                    this._rpcRequest(requests, utils_1.getRpcPromiseCallback(resolve, reject));
                });
            },
        }, {
            get: (obj, prop, ...args) => {
                if (!this._sentWarnings.experimentalMethods) {
                    this._log.warn(messages_1.default.warnings.experimentalMethods);
                    this._sentWarnings.experimentalMethods = true;
                }
                return Reflect.get(obj, prop, ...args);
            },
        });
    }
}
exports.default = MetaMaskInpageProvider;
//# sourceMappingURL=MetaMaskInpageProvider.js.map

/***/ }),

/***/ 46954:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const extension_port_stream_1 = __importDefault(__webpack_require__(47331));
const detect_browser_1 = __webpack_require__(6080);
const BaseProvider_1 = __importDefault(__webpack_require__(33745));
const external_extension_config_json_1 = __importDefault(__webpack_require__(91050));
const browser = detect_browser_1.detect();
function createMetaMaskExternalExtensionProvider() {
    let provider;
    try {
        const currentMetaMaskId = getMetaMaskId();
        const metamaskPort = chrome.runtime.connect(currentMetaMaskId);
        const pluginStream = new extension_port_stream_1.default(metamaskPort);
        provider = new BaseProvider_1.default(pluginStream);
    }
    catch (e) {
        console.dir(`Metamask connect error `, e);
        throw e;
    }
    return provider;
}
exports.default = createMetaMaskExternalExtensionProvider;
function getMetaMaskId() {
    switch (browser === null || browser === void 0 ? void 0 : browser.name) {
        case 'chrome':
            return external_extension_config_json_1.default.CHROME_ID;
        case 'firefox':
            return external_extension_config_json_1.default.FIREFOX_ID;
        default:
            return external_extension_config_json_1.default.CHROME_ID;
    }
}
//# sourceMappingURL=createExternalExtensionProvider.js.map

/***/ }),

/***/ 64758:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createExternalExtensionProvider = exports.shimWeb3 = exports.setGlobalProvider = exports.BaseProvider = exports.MetaMaskInpageProvider = exports.initializeProvider = void 0;
const MetaMaskInpageProvider_1 = __importDefault(__webpack_require__(39602));
exports.MetaMaskInpageProvider = MetaMaskInpageProvider_1.default;
const createExternalExtensionProvider_1 = __importDefault(__webpack_require__(46954));
exports.createExternalExtensionProvider = createExternalExtensionProvider_1.default;
const BaseProvider_1 = __importDefault(__webpack_require__(33745));
exports.BaseProvider = BaseProvider_1.default;
const initializeInpageProvider_1 = __webpack_require__(1731);
Object.defineProperty(exports, "initializeProvider", ({ enumerable: true, get: function () { return initializeInpageProvider_1.initializeProvider; } }));
Object.defineProperty(exports, "setGlobalProvider", ({ enumerable: true, get: function () { return initializeInpageProvider_1.setGlobalProvider; } }));
const shimWeb3_1 = __importDefault(__webpack_require__(43314));
exports.shimWeb3 = shimWeb3_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1731:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setGlobalProvider = exports.initializeProvider = void 0;
const MetaMaskInpageProvider_1 = __importDefault(__webpack_require__(39602));
const shimWeb3_1 = __importDefault(__webpack_require__(43314));
/**
 * Initializes a MetaMaskInpageProvider and (optionally) assigns it as window.ethereum.
 *
 * @param options - An options bag.
 * @param options.connectionStream - A Node.js stream.
 * @param options.jsonRpcStreamName - The name of the internal JSON-RPC stream.
 * @param options.maxEventListeners - The maximum number of event listeners.
 * @param options.shouldSendMetadata - Whether the provider should send page metadata.
 * @param options.shouldSetOnWindow - Whether the provider should be set as window.ethereum.
 * @param options.shouldShimWeb3 - Whether a window.web3 shim should be injected.
 * @returns The initialized provider (whether set or not).
 */
function initializeProvider({ connectionStream, jsonRpcStreamName, logger = console, maxEventListeners = 100, shouldSendMetadata = true, shouldSetOnWindow = true, shouldShimWeb3 = false, }) {
    let provider = new MetaMaskInpageProvider_1.default(connectionStream, {
        jsonRpcStreamName,
        logger,
        maxEventListeners,
        shouldSendMetadata,
    });
    provider = new Proxy(provider, {
        // some common libraries, e.g. web3@1.x, mess with our API
        deleteProperty: () => true,
    });
    if (shouldSetOnWindow) {
        setGlobalProvider(provider);
    }
    if (shouldShimWeb3) {
        shimWeb3_1.default(provider, logger);
    }
    return provider;
}
exports.initializeProvider = initializeProvider;
/**
 * Sets the given provider instance as window.ethereum and dispatches the
 * 'ethereum#initialized' event on window.
 *
 * @param providerInstance - The provider instance.
 */
function setGlobalProvider(providerInstance) {
    window.ethereum = providerInstance;
    window.dispatchEvent(new Event('ethereum#initialized'));
}
exports.setGlobalProvider = setGlobalProvider;
//# sourceMappingURL=initializeInpageProvider.js.map

/***/ }),

/***/ 13443:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const messages = {
    errors: {
        disconnected: () => 'MetaMask: Disconnected from chain. Attempting to connect.',
        permanentlyDisconnected: () => 'MetaMask: Disconnected from MetaMask background. Page reload required.',
        sendSiteMetadata: () => `MetaMask: Failed to send site metadata. This is an internal error, please report this bug.`,
        unsupportedSync: (method) => `MetaMask: The MetaMask Ethereum provider does not support synchronous methods like ${method} without a callback parameter.`,
        invalidDuplexStream: () => 'Must provide a Node.js-style duplex stream.',
        invalidRequestArgs: () => `Expected a single, non-array, object argument.`,
        invalidRequestMethod: () => `'args.method' must be a non-empty string.`,
        invalidRequestParams: () => `'args.params' must be an object or array if provided.`,
        invalidLoggerObject: () => `'args.logger' must be an object if provided.`,
        invalidLoggerMethod: (method) => `'args.logger' must include required method '${method}'.`,
    },
    info: {
        connected: (chainId) => `MetaMask: Connected to chain with ID "${chainId}".`,
    },
    warnings: {
        // deprecated methods
        enableDeprecation: `MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102`,
        sendDeprecation: `MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
        // deprecated events
        events: {
            close: `MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect`,
            data: `MetaMask: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`,
            networkChanged: `MetaMask: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged`,
            notification: `MetaMask: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`,
        },
        // misc
        experimentalMethods: `MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning.`,
    },
};
exports.default = messages;
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 43314:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * If no existing window.web3 is found, this function injects a web3 "shim" to
 * not break dapps that rely on window.web3.currentProvider.
 *
 * @param provider - The provider to set as window.web3.currentProvider.
 * @param log - The logging API to use.
 */
function shimWeb3(provider, log = console) {
    let loggedCurrentProvider = false;
    let loggedMissingProperty = false;
    if (!window.web3) {
        const SHIM_IDENTIFIER = '__isMetaMaskShim__';
        let web3Shim = { currentProvider: provider };
        Object.defineProperty(web3Shim, SHIM_IDENTIFIER, {
            value: true,
            enumerable: true,
            configurable: false,
            writable: false,
        });
        web3Shim = new Proxy(web3Shim, {
            get: (target, property, ...args) => {
                if (property === 'currentProvider' && !loggedCurrentProvider) {
                    loggedCurrentProvider = true;
                    log.warn('You are accessing the MetaMask window.web3.currentProvider shim. This property is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3');
                }
                else if (property !== 'currentProvider' &&
                    property !== SHIM_IDENTIFIER &&
                    !loggedMissingProperty) {
                    loggedMissingProperty = true;
                    log.error(`MetaMask no longer injects web3. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3`);
                    provider
                        .request({ method: 'metamask_logWeb3ShimUsage' })
                        .catch((error) => {
                        log.debug('MetaMask: Failed to log web3 shim usage.', error);
                    });
                }
                return Reflect.get(target, property, ...args);
            },
            set: (...args) => {
                log.warn('You are accessing the MetaMask window.web3 shim. This object is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3');
                return Reflect.set(...args);
            },
        });
        Object.defineProperty(window, 'web3', {
            value: web3Shim,
            enumerable: false,
            configurable: true,
            writable: true,
        });
    }
}
exports.default = shimWeb3;
//# sourceMappingURL=shimWeb3.js.map

/***/ }),

/***/ 98991:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const messages_1 = __importDefault(__webpack_require__(13443));
const utils_1 = __webpack_require__(71242);
/**
 * Sends site metadata over an RPC request.
 *
 * @param engine - The JSON RPC Engine to send metadata over.
 * @param log - The logging API to use.
 */
async function sendSiteMetadata(engine, log) {
    try {
        const domainMetadata = await getSiteMetadata();
        // call engine.handle directly to avoid normal RPC request handling
        engine.handle({
            jsonrpc: '2.0',
            id: 1,
            method: 'metamask_sendDomainMetadata',
            params: domainMetadata,
        }, utils_1.NOOP);
    }
    catch (error) {
        log.error({
            message: messages_1.default.errors.sendSiteMetadata(),
            originalError: error,
        });
    }
}
exports.default = sendSiteMetadata;
/**
 * Gets site metadata and returns it
 *
 */
async function getSiteMetadata() {
    return {
        name: getSiteName(window),
        icon: await getSiteIcon(window),
    };
}
/**
 * Extracts a name for the site from the DOM
 */
function getSiteName(windowObject) {
    const { document } = windowObject;
    const siteName = document.querySelector('head > meta[property="og:site_name"]');
    if (siteName) {
        return siteName.content;
    }
    const metaTitle = document.querySelector('head > meta[name="title"]');
    if (metaTitle) {
        return metaTitle.content;
    }
    if (document.title && document.title.length > 0) {
        return document.title;
    }
    return window.location.hostname;
}
/**
 * Extracts an icon for the site from the DOM
 * @returns an icon URL
 */
async function getSiteIcon(windowObject) {
    const { document } = windowObject;
    const icons = document.querySelectorAll('head > link[rel~="icon"]');
    for (const icon of icons) {
        if (icon && (await imgExists(icon.href))) {
            return icon.href;
        }
    }
    return null;
}
/**
 * Returns whether the given image URL exists
 * @param url - the url of the image
 * @returns Whether the image exists.
 */
function imgExists(url) {
    return new Promise((resolve, reject) => {
        try {
            const img = document.createElement('img');
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        }
        catch (e) {
            reject(e);
        }
    });
}
//# sourceMappingURL=siteMetadata.js.map

/***/ }),

/***/ 71242:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMITTED_NOTIFICATIONS = exports.NOOP = exports.logStreamDisconnectWarning = exports.getRpcPromiseCallback = exports.createErrorMiddleware = void 0;
const eth_rpc_errors_1 = __webpack_require__(65679);
// utility functions
/**
 * json-rpc-engine middleware that logs RPC errors and and validates req.method.
 *
 * @param log - The logging API to use.
 * @returns  json-rpc-engine middleware function
 */
function createErrorMiddleware(log) {
    return (req, res, next) => {
        // json-rpc-engine will terminate the request when it notices this error
        if (typeof req.method !== 'string' || !req.method) {
            res.error = eth_rpc_errors_1.ethErrors.rpc.invalidRequest({
                message: `The request 'method' must be a non-empty string.`,
                data: req,
            });
        }
        next((done) => {
            const { error } = res;
            if (!error) {
                return done();
            }
            log.error(`MetaMask - RPC Error: ${error.message}`, error);
            return done();
        });
    };
}
exports.createErrorMiddleware = createErrorMiddleware;
// resolve response.result or response, reject errors
const getRpcPromiseCallback = (resolve, reject, unwrapResult = true) => (error, response) => {
    if (error || response.error) {
        reject(error || response.error);
    }
    else {
        !unwrapResult || Array.isArray(response)
            ? resolve(response)
            : resolve(response.result);
    }
};
exports.getRpcPromiseCallback = getRpcPromiseCallback;
/**
 * Logs a stream disconnection error. Emits an 'error' if given an
 * EventEmitter that has listeners for the 'error' event.
 *
 * @param log - The logging API to use.
 * @param remoteLabel - The label of the disconnected stream.
 * @param error - The associated error to log.
 * @param emitter - The logging API to use.
 */
function logStreamDisconnectWarning(log, remoteLabel, error, emitter) {
    let warningMsg = `MetaMask: Lost connection to "${remoteLabel}".`;
    if (error === null || error === void 0 ? void 0 : error.stack) {
        warningMsg += `\n${error.stack}`;
    }
    log.warn(warningMsg);
    if (emitter && emitter.listenerCount('error') > 0) {
        emitter.emit('error', warningMsg);
    }
}
exports.logStreamDisconnectWarning = logStreamDisconnectWarning;
const NOOP = () => undefined;
exports.NOOP = NOOP;
// constants
exports.EMITTED_NOTIFICATIONS = [
    'eth_subscription',
];
//# sourceMappingURL=utils.js.map

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
exports.default = SafeEventEmitter;
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

/***/ 77533:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
__exportStar(__webpack_require__(77533), exports);
__exportStar(__webpack_require__(61542), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 61542:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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

"use strict";

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

"use strict";

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
__exportStar(__webpack_require__(20474), exports);
__exportStar(__webpack_require__(93147), exports);
__exportStar(__webpack_require__(74538), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 74538:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
__exportStar(__webpack_require__(6325), exports);
__exportStar(__webpack_require__(30668), exports);
__exportStar(__webpack_require__(38065), exports);
__exportStar(__webpack_require__(9273), exports);
__exportStar(__webpack_require__(38393), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 38065:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 38393:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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

"use strict";

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

/***/ 84460:
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
__exportStar(__webpack_require__(7692), exports);
__exportStar(__webpack_require__(90795), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 90795:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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
__exportStar(__webpack_require__(45548), exports);
__exportStar(__webpack_require__(13989), exports);
__exportStar(__webpack_require__(84460), exports);
__exportStar(__webpack_require__(89136), exports);
__exportStar(__webpack_require__(73347), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 89136:
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
const isoRandom = __importStar(__webpack_require__(29615));
function randomBytes(length) {
    return isoRandom.randomBytes(length);
}
exports.randomBytes = randomBytes;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 39745:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
__exportStar(__webpack_require__(39745), exports);
__exportStar(__webpack_require__(78767), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 78767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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

/***/ 47759:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getClientMeta = exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = exports.isBrowser = exports.isNode = exports.isMobile = exports.isIOS = exports.detectOS = exports.detectEnv = void 0;
const tslib_1 = __webpack_require__(64873);
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
const tslib_1 = __webpack_require__(64873);
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
const tslib_1 = __webpack_require__(64873);
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
const tslib_1 = __webpack_require__(64873);
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

/***/ 62809:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERROR_QRCODE_MODAL_USER_CLOSED = exports.ERROR_QRCODE_MODAL_NOT_PROVIDED = exports.ERROR_INVALID_URI = exports.ERROR_INVALID_RESPONSE = exports.ERROR_MISSING_REQUIRED = exports.ERROR_MISSING_ID = exports.ERROR_MISSING_METHOD = exports.ERROR_MISSING_ERROR = exports.ERROR_MISSING_RESULT = exports.ERROR_MISSING_JSON_RPC = exports.ERROR_SESSION_REJECTED = exports.ERROR_SESSION_DISCONNECTED = exports.ERROR_SESSION_CONNECTED = void 0;
exports.ERROR_SESSION_CONNECTED = "Session currently connected";
exports.ERROR_SESSION_DISCONNECTED = "Session currently disconnected";
exports.ERROR_SESSION_REJECTED = "Session Rejected";
exports.ERROR_MISSING_JSON_RPC = "Missing JSON RPC response";
exports.ERROR_MISSING_RESULT = `JSON-RPC success response must include "result" field`;
exports.ERROR_MISSING_ERROR = `JSON-RPC error response must include "error" field`;
exports.ERROR_MISSING_METHOD = `JSON RPC request must have valid "method" value`;
exports.ERROR_MISSING_ID = `JSON RPC request must have valid "id" value`;
exports.ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session";
exports.ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid";
exports.ERROR_INVALID_URI = "URI format is invalid";
exports.ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided";
exports.ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal";
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ 75202:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(51139);
class EventManager {
    constructor() {
        this._eventEmitters = [];
    }
    subscribe(eventEmitter) {
        this._eventEmitters.push(eventEmitter);
    }
    trigger(payload) {
        let eventEmitters = [];
        let event;
        if (utils_1.isJsonRpcRequest(payload)) {
            event = payload.method;
        }
        else if (utils_1.isJsonRpcResponseSuccess(payload) || utils_1.isJsonRpcResponseError(payload)) {
            event = `response:${payload.id}`;
        }
        else if (utils_1.isInternalEvent(payload)) {
            event = payload.event;
        }
        else {
            event = "";
        }
        if (event) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
        }
        if ((!eventEmitters || !eventEmitters.length) &&
            !utils_1.isReservedEvent(event) &&
            !utils_1.isInternalEvent(event)) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === "call_request");
        }
        eventEmitters.forEach((eventEmitter) => {
            if (utils_1.isJsonRpcResponseError(payload)) {
                const error = new Error(payload.error.message);
                eventEmitter.callback(error, null);
            }
            else {
                eventEmitter.callback(null, payload);
            }
        });
    }
}
exports.default = EventManager;
//# sourceMappingURL=events.js.map

/***/ }),

/***/ 25046:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(64873);
const utils_1 = __webpack_require__(51139);
const socket_transport_1 = tslib_1.__importDefault(__webpack_require__(10252));
const errors_1 = __webpack_require__(62809);
const events_1 = tslib_1.__importDefault(__webpack_require__(75202));
const storage_1 = tslib_1.__importDefault(__webpack_require__(36600));
class Connector {
    constructor(opts) {
        this.protocol = "wc";
        this.version = 1;
        this._bridge = "";
        this._key = null;
        this._clientId = "";
        this._clientMeta = null;
        this._peerId = "";
        this._peerMeta = null;
        this._handshakeId = 0;
        this._handshakeTopic = "";
        this._connected = false;
        this._accounts = [];
        this._chainId = 0;
        this._networkId = 0;
        this._rpcUrl = "";
        this._eventManager = new events_1.default();
        this._clientMeta = utils_1.getClientMeta() || opts.connectorOpts.clientMeta || null;
        this._cryptoLib = opts.cryptoLib;
        this._sessionStorage = opts.sessionStorage || new storage_1.default();
        this._qrcodeModal = opts.connectorOpts.qrcodeModal;
        this._qrcodeModalOptions = opts.connectorOpts.qrcodeModalOptions;
        if (!opts.connectorOpts.bridge && !opts.connectorOpts.uri && !opts.connectorOpts.session) {
            throw new Error(errors_1.ERROR_MISSING_REQUIRED);
        }
        if (opts.connectorOpts.bridge) {
            this.bridge = opts.connectorOpts.bridge;
        }
        if (opts.connectorOpts.uri) {
            this.uri = opts.connectorOpts.uri;
        }
        const session = opts.connectorOpts.session || this._getStorageSession();
        if (session) {
            this.session = session;
        }
        if (this.handshakeId) {
            this._subscribeToSessionResponse(this.handshakeId, "Session request rejected");
        }
        this._transport =
            opts.transport ||
                new socket_transport_1.default({
                    protocol: this.protocol,
                    version: this.version,
                    url: this.bridge,
                    subscriptions: [this.clientId],
                });
        this._subscribeToInternalEvents();
        this._initTransport();
        if (opts.connectorOpts.uri) {
            this._subscribeToSessionRequest();
        }
        if (opts.pushServerOpts) {
            this._registerPushServer(opts.pushServerOpts);
        }
    }
    set bridge(value) {
        if (!value) {
            return;
        }
        this._bridge = value;
    }
    get bridge() {
        return this._bridge;
    }
    set key(value) {
        if (!value) {
            return;
        }
        const key = utils_1.convertHexToArrayBuffer(value);
        this._key = key;
    }
    get key() {
        if (this._key) {
            const key = utils_1.convertArrayBufferToHex(this._key, true);
            return key;
        }
        return "";
    }
    set clientId(value) {
        if (!value) {
            return;
        }
        this._clientId = value;
    }
    get clientId() {
        let clientId = this._clientId;
        if (!clientId) {
            clientId = this._clientId = utils_1.uuid();
        }
        return this._clientId;
    }
    set peerId(value) {
        if (!value) {
            return;
        }
        this._peerId = value;
    }
    get peerId() {
        return this._peerId;
    }
    set clientMeta(value) {
    }
    get clientMeta() {
        let clientMeta = this._clientMeta;
        if (!clientMeta) {
            clientMeta = this._clientMeta = utils_1.getClientMeta();
        }
        return clientMeta;
    }
    set peerMeta(value) {
        this._peerMeta = value;
    }
    get peerMeta() {
        const peerMeta = this._peerMeta;
        return peerMeta;
    }
    set handshakeTopic(value) {
        if (!value) {
            return;
        }
        this._handshakeTopic = value;
    }
    get handshakeTopic() {
        return this._handshakeTopic;
    }
    set handshakeId(value) {
        if (!value) {
            return;
        }
        this._handshakeId = value;
    }
    get handshakeId() {
        return this._handshakeId;
    }
    get uri() {
        const _uri = this._formatUri();
        return _uri;
    }
    set uri(value) {
        if (!value) {
            return;
        }
        const { handshakeTopic, bridge, key } = this._parseUri(value);
        this.handshakeTopic = handshakeTopic;
        this.bridge = bridge;
        this.key = key;
    }
    set chainId(value) {
        this._chainId = value;
    }
    get chainId() {
        const chainId = this._chainId;
        return chainId;
    }
    set networkId(value) {
        this._networkId = value;
    }
    get networkId() {
        const networkId = this._networkId;
        return networkId;
    }
    set accounts(value) {
        this._accounts = value;
    }
    get accounts() {
        const accounts = this._accounts;
        return accounts;
    }
    set rpcUrl(value) {
        this._rpcUrl = value;
    }
    get rpcUrl() {
        const rpcUrl = this._rpcUrl;
        return rpcUrl;
    }
    set connected(value) {
    }
    get connected() {
        return this._connected;
    }
    set pending(value) {
    }
    get pending() {
        return !!this._handshakeTopic;
    }
    get session() {
        return {
            connected: this.connected,
            accounts: this.accounts,
            chainId: this.chainId,
            bridge: this.bridge,
            key: this.key,
            clientId: this.clientId,
            clientMeta: this.clientMeta,
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            handshakeId: this.handshakeId,
            handshakeTopic: this.handshakeTopic,
        };
    }
    set session(value) {
        if (!value) {
            return;
        }
        this._connected = value.connected;
        this.accounts = value.accounts;
        this.chainId = value.chainId;
        this.bridge = value.bridge;
        this.key = value.key;
        this.clientId = value.clientId;
        this.clientMeta = value.clientMeta;
        this.peerId = value.peerId;
        this.peerMeta = value.peerMeta;
        this.handshakeId = value.handshakeId;
        this.handshakeTopic = value.handshakeTopic;
    }
    on(event, callback) {
        const eventEmitter = {
            event,
            callback,
        };
        this._eventManager.subscribe(eventEmitter);
    }
    createInstantRequest(instantRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._key = yield this._generateKey();
            const request = this._formatRequest({
                method: "wc_instantRequest",
                params: [
                    {
                        peerId: this.clientId,
                        peerMeta: this.clientMeta,
                        request: this._formatRequest(instantRequest),
                    },
                ],
            });
            this.handshakeId = request.id;
            this.handshakeTopic = utils_1.uuid();
            this._eventManager.trigger({
                event: "display_uri",
                params: [this.uri],
            });
            this.on("modal_closed", () => {
                throw new Error(errors_1.ERROR_QRCODE_MODAL_USER_CLOSED);
            });
            const endInstantRequest = () => {
                this.killSession();
            };
            try {
                const result = yield this._sendCallRequest(request);
                if (result) {
                    endInstantRequest();
                }
                return result;
            }
            catch (error) {
                endInstantRequest();
                throw error;
            }
        });
    }
    connect(opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._qrcodeModal) {
                throw new Error(errors_1.ERROR_QRCODE_MODAL_NOT_PROVIDED);
            }
            if (this.connected) {
                return {
                    chainId: this.chainId,
                    accounts: this.accounts,
                };
            }
            yield this.createSession(opts);
            return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.on("modal_closed", () => reject(new Error(errors_1.ERROR_QRCODE_MODAL_USER_CLOSED)));
                this.on("connect", (error, payload) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(payload.params[0]);
                });
            }));
        });
    }
    createSession(opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this._connected) {
                throw new Error(errors_1.ERROR_SESSION_CONNECTED);
            }
            if (this.pending) {
                return;
            }
            this._key = yield this._generateKey();
            const request = this._formatRequest({
                method: "wc_sessionRequest",
                params: [
                    {
                        peerId: this.clientId,
                        peerMeta: this.clientMeta,
                        chainId: opts && opts.chainId ? opts.chainId : null,
                    },
                ],
            });
            this.handshakeId = request.id;
            this.handshakeTopic = utils_1.uuid();
            this._sendSessionRequest(request, "Session update rejected", {
                topic: this.handshakeTopic,
            });
            this._eventManager.trigger({
                event: "display_uri",
                params: [this.uri],
            });
        });
    }
    approveSession(sessionStatus) {
        if (this._connected) {
            throw new Error(errors_1.ERROR_SESSION_CONNECTED);
        }
        this.chainId = sessionStatus.chainId;
        this.accounts = sessionStatus.accounts;
        this.networkId = sessionStatus.networkId || 0;
        this.rpcUrl = sessionStatus.rpcUrl || "";
        const sessionParams = {
            approved: true,
            chainId: this.chainId,
            networkId: this.networkId,
            accounts: this.accounts,
            rpcUrl: this.rpcUrl,
            peerId: this.clientId,
            peerMeta: this.clientMeta,
        };
        const response = {
            id: this.handshakeId,
            jsonrpc: "2.0",
            result: sessionParams,
        };
        this._sendResponse(response);
        this._connected = true;
        this._setStorageSession();
        this._eventManager.trigger({
            event: "connect",
            params: [
                {
                    peerId: this.peerId,
                    peerMeta: this.peerMeta,
                    chainId: this.chainId,
                    accounts: this.accounts,
                },
            ],
        });
    }
    rejectSession(sessionError) {
        if (this._connected) {
            throw new Error(errors_1.ERROR_SESSION_CONNECTED);
        }
        const message = sessionError && sessionError.message ? sessionError.message : errors_1.ERROR_SESSION_REJECTED;
        const response = this._formatResponse({
            id: this.handshakeId,
            error: { message },
        });
        this._sendResponse(response);
        this._connected = false;
        this._eventManager.trigger({
            event: "disconnect",
            params: [{ message }],
        });
        this._removeStorageSession();
    }
    updateSession(sessionStatus) {
        if (!this._connected) {
            throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
        }
        this.chainId = sessionStatus.chainId;
        this.accounts = sessionStatus.accounts;
        this.networkId = sessionStatus.networkId || 0;
        this.rpcUrl = sessionStatus.rpcUrl || "";
        const sessionParams = {
            approved: true,
            chainId: this.chainId,
            networkId: this.networkId,
            accounts: this.accounts,
            rpcUrl: this.rpcUrl,
        };
        const request = this._formatRequest({
            method: "wc_sessionUpdate",
            params: [sessionParams],
        });
        this._sendSessionRequest(request, "Session update rejected");
        this._eventManager.trigger({
            event: "session_update",
            params: [
                {
                    chainId: this.chainId,
                    accounts: this.accounts,
                },
            ],
        });
        this._manageStorageSession();
    }
    killSession(sessionError) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const message = sessionError ? sessionError.message : "Session Disconnected";
            const sessionParams = {
                approved: false,
                chainId: null,
                networkId: null,
                accounts: null,
            };
            const request = this._formatRequest({
                method: "wc_sessionUpdate",
                params: [sessionParams],
            });
            yield this._sendRequest(request);
            this._handleSessionDisconnect(message);
        });
    }
    sendTransaction(tx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            const parsedTx = utils_1.parseTransactionData(tx);
            const request = this._formatRequest({
                method: "eth_sendTransaction",
                params: [parsedTx],
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signTransaction(tx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            const parsedTx = utils_1.parseTransactionData(tx);
            const request = this._formatRequest({
                method: "eth_signTransaction",
                params: [parsedTx],
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signMessage(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            const request = this._formatRequest({
                method: "eth_sign",
                params,
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signPersonalMessage(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            params = utils_1.parsePersonalSign(params);
            const request = this._formatRequest({
                method: "personal_sign",
                params,
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signTypedData(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            const request = this._formatRequest({
                method: "eth_signTypedData",
                params,
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    updateChain(chainParams) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error("Session currently disconnected");
            }
            const request = this._formatRequest({
                method: "wallet_updateChain",
                params: [chainParams],
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    unsafeSend(request, options) {
        this._sendRequest(request, options);
        return new Promise((resolve, reject) => {
            this._subscribeToResponse(request.id, (error, payload) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (!payload) {
                    throw new Error(errors_1.ERROR_MISSING_JSON_RPC);
                }
                resolve(payload);
            });
        });
    }
    sendCustomRequest(request, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            switch (request.method) {
                case "eth_accounts":
                    return this.accounts;
                case "eth_chainId":
                    return utils_1.convertNumberToHex(this.chainId);
                case "eth_sendTransaction":
                case "eth_signTransaction":
                    if (request.params) {
                        request.params[0] = utils_1.parseTransactionData(request.params[0]);
                    }
                    break;
                case "personal_sign":
                    if (request.params) {
                        request.params = utils_1.parsePersonalSign(request.params);
                    }
                    break;
                default:
                    break;
            }
            const formattedRequest = this._formatRequest(request);
            const result = yield this._sendCallRequest(formattedRequest, options);
            return result;
        });
    }
    approveRequest(response) {
        if (utils_1.isJsonRpcResponseSuccess(response)) {
            const formattedResponse = this._formatResponse(response);
            this._sendResponse(formattedResponse);
        }
        else {
            throw new Error(errors_1.ERROR_MISSING_RESULT);
        }
    }
    rejectRequest(response) {
        if (utils_1.isJsonRpcResponseError(response)) {
            const formattedResponse = this._formatResponse(response);
            this._sendResponse(formattedResponse);
        }
        else {
            throw new Error(errors_1.ERROR_MISSING_ERROR);
        }
    }
    _sendRequest(request, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callRequest = this._formatRequest(request);
            const encryptionPayload = yield this._encrypt(callRequest);
            const topic = typeof (options === null || options === void 0 ? void 0 : options.topic) !== "undefined" ? options.topic : this.peerId;
            const payload = JSON.stringify(encryptionPayload);
            const silent = typeof (options === null || options === void 0 ? void 0 : options.forcePushNotification) !== "undefined"
                ? !options.forcePushNotification
                : utils_1.isSilentPayload(callRequest);
            this._transport.send(payload, topic, silent);
        });
    }
    _sendResponse(response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const encryptionPayload = yield this._encrypt(response);
            const topic = this.peerId;
            const payload = JSON.stringify(encryptionPayload);
            const silent = true;
            this._transport.send(payload, topic, silent);
        });
    }
    _sendSessionRequest(request, errorMsg, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._sendRequest(request, options);
            this._subscribeToSessionResponse(request.id, errorMsg);
        });
    }
    _sendCallRequest(request, options) {
        this._sendRequest(request, options);
        this._eventManager.trigger({
            event: "call_request_sent",
            params: [{ request, options }],
        });
        if (utils_1.isMobile() && utils_1.signingMethods.includes(request.method)) {
            const mobileLinkUrl = utils_1.getLocal(utils_1.mobileLinkChoiceKey);
            if (mobileLinkUrl) {
                window.location.href = mobileLinkUrl.href;
            }
        }
        return this._subscribeToCallResponse(request.id);
    }
    _formatRequest(request) {
        if (typeof request.method === "undefined") {
            throw new Error(errors_1.ERROR_MISSING_METHOD);
        }
        const formattedRequest = {
            id: typeof request.id === "undefined" ? utils_1.payloadId() : request.id,
            jsonrpc: "2.0",
            method: request.method,
            params: typeof request.params === "undefined" ? [] : request.params,
        };
        return formattedRequest;
    }
    _formatResponse(response) {
        if (typeof response.id === "undefined") {
            throw new Error(errors_1.ERROR_MISSING_ID);
        }
        const baseResponse = { id: response.id, jsonrpc: "2.0" };
        if (utils_1.isJsonRpcResponseError(response)) {
            const error = utils_1.formatRpcError(response.error);
            const errorResponse = Object.assign(Object.assign(Object.assign({}, baseResponse), response), { error });
            return errorResponse;
        }
        else if (utils_1.isJsonRpcResponseSuccess(response)) {
            const successResponse = Object.assign(Object.assign({}, baseResponse), response);
            return successResponse;
        }
        throw new Error(errors_1.ERROR_INVALID_RESPONSE);
    }
    _handleSessionDisconnect(errorMsg) {
        const message = errorMsg || "Session Disconnected";
        if (!this._connected) {
            if (this._qrcodeModal) {
                this._qrcodeModal.close();
            }
            utils_1.removeLocal(utils_1.mobileLinkChoiceKey);
        }
        if (this._connected) {
            this._connected = false;
        }
        if (this._handshakeId) {
            this._handshakeId = 0;
        }
        if (this._handshakeTopic) {
            this._handshakeTopic = "";
        }
        this._eventManager.trigger({
            event: "disconnect",
            params: [{ message }],
        });
        this._removeStorageSession();
        this._transport.close();
    }
    _handleSessionResponse(errorMsg, sessionParams) {
        if (sessionParams) {
            if (sessionParams.approved) {
                if (!this._connected) {
                    this._connected = true;
                    if (sessionParams.chainId) {
                        this.chainId = sessionParams.chainId;
                    }
                    if (sessionParams.accounts) {
                        this.accounts = sessionParams.accounts;
                    }
                    if (sessionParams.peerId && !this.peerId) {
                        this.peerId = sessionParams.peerId;
                    }
                    if (sessionParams.peerMeta && !this.peerMeta) {
                        this.peerMeta = sessionParams.peerMeta;
                    }
                    this._eventManager.trigger({
                        event: "connect",
                        params: [
                            {
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts,
                            },
                        ],
                    });
                }
                else {
                    if (sessionParams.chainId) {
                        this.chainId = sessionParams.chainId;
                    }
                    if (sessionParams.accounts) {
                        this.accounts = sessionParams.accounts;
                    }
                    this._eventManager.trigger({
                        event: "session_update",
                        params: [
                            {
                                chainId: this.chainId,
                                accounts: this.accounts,
                            },
                        ],
                    });
                }
                this._manageStorageSession();
            }
            else {
                this._handleSessionDisconnect(errorMsg);
            }
        }
        else {
            this._handleSessionDisconnect(errorMsg);
        }
    }
    _handleIncomingMessages(socketMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const activeTopics = [this.clientId, this.handshakeTopic];
            if (!activeTopics.includes(socketMessage.topic)) {
                return;
            }
            let encryptionPayload;
            try {
                encryptionPayload = JSON.parse(socketMessage.payload);
            }
            catch (error) {
                return;
            }
            const payload = yield this._decrypt(encryptionPayload);
            if (payload) {
                this._eventManager.trigger(payload);
            }
        });
    }
    _subscribeToSessionRequest() {
        this._transport.subscribe(this.handshakeTopic);
    }
    _subscribeToResponse(id, callback) {
        this.on(`response:${id}`, callback);
    }
    _subscribeToSessionResponse(id, errorMsg) {
        this._subscribeToResponse(id, (error, payload) => {
            if (error) {
                this._handleSessionResponse(error.message);
                return;
            }
            if (payload.result) {
                this._handleSessionResponse(errorMsg, payload.result);
            }
            else if (payload.error && payload.error.message) {
                this._handleSessionResponse(payload.error.message);
            }
            else {
                this._handleSessionResponse(errorMsg);
            }
        });
    }
    _subscribeToCallResponse(id) {
        return new Promise((resolve, reject) => {
            this._subscribeToResponse(id, (error, payload) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (payload.result) {
                    resolve(payload.result);
                }
                else if (payload.error && payload.error.message) {
                    reject(new Error(payload.error.message));
                }
                else {
                    reject(new Error(errors_1.ERROR_INVALID_RESPONSE));
                }
            });
        });
    }
    _subscribeToInternalEvents() {
        this.on("display_uri", () => {
            if (this._qrcodeModal) {
                this._qrcodeModal.open(this.uri, () => {
                    this._eventManager.trigger({
                        event: "modal_closed",
                        params: [],
                    });
                }, this._qrcodeModalOptions);
            }
        });
        this.on("connect", () => {
            if (this._qrcodeModal) {
                this._qrcodeModal.close();
            }
        });
        this.on("wc_sessionRequest", (error, payload) => {
            if (error) {
                this._eventManager.trigger({
                    event: "error",
                    params: [
                        {
                            code: "SESSION_REQUEST_ERROR",
                            message: error.toString(),
                        },
                    ],
                });
            }
            this.handshakeId = payload.id;
            this.peerId = payload.params[0].peerId;
            this.peerMeta = payload.params[0].peerMeta;
            const internalPayload = Object.assign(Object.assign({}, payload), { method: "session_request" });
            this._eventManager.trigger(internalPayload);
        });
        this.on("wc_sessionUpdate", (error, payload) => {
            if (error) {
                this._handleSessionResponse(error.message);
            }
            this._handleSessionResponse("Session disconnected", payload.params[0]);
        });
    }
    _initTransport() {
        this._transport.on("message", (socketMessage) => this._handleIncomingMessages(socketMessage));
        this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] }));
        this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] }));
        this._transport.on("error", () => this._eventManager.trigger({
            event: "transport_error",
            params: ["Websocket connection failed"],
        }));
        this._transport.open();
    }
    _formatUri() {
        const protocol = this.protocol;
        const handshakeTopic = this.handshakeTopic;
        const version = this.version;
        const bridge = encodeURIComponent(this.bridge);
        const key = this.key;
        const uri = `${protocol}:${handshakeTopic}@${version}?bridge=${bridge}&key=${key}`;
        return uri;
    }
    _parseUri(uri) {
        const result = utils_1.parseWalletConnectUri(uri);
        if (result.protocol === this.protocol) {
            if (!result.handshakeTopic) {
                throw Error("Invalid or missing handshakeTopic parameter value");
            }
            const handshakeTopic = result.handshakeTopic;
            if (!result.bridge) {
                throw Error("Invalid or missing bridge url parameter value");
            }
            const bridge = decodeURIComponent(result.bridge);
            if (!result.key) {
                throw Error("Invalid or missing key parameter value");
            }
            const key = result.key;
            return { handshakeTopic, bridge, key };
        }
        else {
            throw new Error(errors_1.ERROR_INVALID_URI);
        }
    }
    _generateKey() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this._cryptoLib) {
                const result = yield this._cryptoLib.generateKey();
                return result;
            }
            return null;
        });
    }
    _encrypt(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const key = this._key;
            if (this._cryptoLib && key) {
                const result = yield this._cryptoLib.encrypt(data, key);
                return result;
            }
            return null;
        });
    }
    _decrypt(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const key = this._key;
            if (this._cryptoLib && key) {
                const result = yield this._cryptoLib.decrypt(payload, key);
                return result;
            }
            return null;
        });
    }
    _getStorageSession() {
        let result = null;
        if (this._sessionStorage) {
            result = this._sessionStorage.getSession();
        }
        return result;
    }
    _setStorageSession() {
        if (this._sessionStorage) {
            this._sessionStorage.setSession(this.session);
        }
    }
    _removeStorageSession() {
        if (this._sessionStorage) {
            this._sessionStorage.removeSession();
        }
    }
    _manageStorageSession() {
        if (this._connected) {
            this._setStorageSession();
        }
        else {
            this._removeStorageSession();
        }
    }
    _registerPushServer(pushServerOpts) {
        if (!pushServerOpts.url || typeof pushServerOpts.url !== "string") {
            throw Error("Invalid or missing pushServerOpts.url parameter value");
        }
        if (!pushServerOpts.type || typeof pushServerOpts.type !== "string") {
            throw Error("Invalid or missing pushServerOpts.type parameter value");
        }
        if (!pushServerOpts.token || typeof pushServerOpts.token !== "string") {
            throw Error("Invalid or missing pushServerOpts.token parameter value");
        }
        const pushSubscription = {
            bridge: this.bridge,
            topic: this.clientId,
            type: pushServerOpts.type,
            token: pushServerOpts.token,
            peerName: "",
            language: pushServerOpts.language || "",
        };
        this.on("connect", (error, payload) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (error) {
                throw error;
            }
            if (pushServerOpts.peerMeta) {
                const peerName = payload.params[0].peerMeta.name;
                pushSubscription.peerName = peerName;
            }
            try {
                const response = yield fetch(`${pushServerOpts.url}/new`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(pushSubscription),
                });
                const json = yield response.json();
                if (!json.success) {
                    throw Error("Failed to register in Push Server");
                }
            }
            catch (error) {
                throw Error("Failed to register in Push Server");
            }
        }));
    }
}
exports.default = Connector;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 36600:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(51139);
class SessionStorage {
    constructor() {
        this.storageId = "walletconnect";
    }
    getSession() {
        let session = null;
        const json = utils_1.getLocal(this.storageId);
        if (json && utils_1.isWalletConnectSession(json)) {
            session = json;
        }
        return session;
    }
    setSession(session) {
        utils_1.setLocal(this.storageId, session);
        return session;
    }
    removeSession() {
        utils_1.removeLocal(this.storageId);
    }
}
exports.default = SessionStorage;
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 17424:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decrypt = exports.encrypt = exports.verifyHmac = exports.generateKey = void 0;
const tslib_1 = __webpack_require__(64873);
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
const tslib_1 = __webpack_require__(64873);
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
exports.default = SocketTransport;
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
exports.default = NetworkMonitor;
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
const tslib_1 = __webpack_require__(64873);
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
const tslib_1 = __webpack_require__(64873);
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
const tslib_1 = __webpack_require__(64873);
const encUtils = tslib_1.__importStar(__webpack_require__(18147));
const jsonRpcUtils = tslib_1.__importStar(__webpack_require__(73334));
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
const tslib_1 = __webpack_require__(64873);
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
const tslib_1 = __webpack_require__(64873);
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
const tslib_1 = __webpack_require__(64873);
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
  var isNode = typeof process !== 'undefined' && "v14.17.6";
  return isNode && {
    name: 'node',
    version: "v14.17.6".slice(1),
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
    var isNode = typeof process !== 'undefined' && "v14.17.6";
    return isNode ? new NodeInfo("v14.17.6".slice(1)) : null;
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

/***/ 96816:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

var keys = __webpack_require__(23115);
var hasBinary = __webpack_require__(34196);
var sliceBuffer = __webpack_require__(70078);
var after = __webpack_require__(29186);
var utf8 = __webpack_require__(897);

var base64encoder;
if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(96583);
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(94121);

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    exports.encodePacket({ type: packet.type, data: fr.result }, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};


/***/ }),

/***/ 23115:
/***/ ((module) => {


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};


/***/ }),

/***/ 897:
/***/ ((module) => {

/*! https://mths.be/utf8js v2.1.2 by @mathias */

var stringFromCharCode = String.fromCharCode;

// Taken from https://mths.be/punycode
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	var value;
	var extra;
	while (counter < length) {
		value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// high surrogate, and there is a next character
			extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // low surrogate
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// unmatched surrogate; only append this code unit, in case the next
				// code unit is the high surrogate of a surrogate pair
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

// Taken from https://mths.be/punycode
function ucs2encode(array) {
	var length = array.length;
	var index = -1;
	var value;
	var output = '';
	while (++index < length) {
		value = array[index];
		if (value > 0xFFFF) {
			value -= 0x10000;
			output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
			value = 0xDC00 | value & 0x3FF;
		}
		output += stringFromCharCode(value);
	}
	return output;
}

function checkScalarValue(codePoint, strict) {
	if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
		if (strict) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
		return false;
	}
	return true;
}
/*--------------------------------------------------------------------------*/

function createByte(codePoint, shift) {
	return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
}

function encodeCodePoint(codePoint, strict) {
	if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
		return stringFromCharCode(codePoint);
	}
	var symbol = '';
	if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
		symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
	}
	else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
		if (!checkScalarValue(codePoint, strict)) {
			codePoint = 0xFFFD;
		}
		symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
		symbol += createByte(codePoint, 6);
	}
	else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
		symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
		symbol += createByte(codePoint, 12);
		symbol += createByte(codePoint, 6);
	}
	symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
	return symbol;
}

function utf8encode(string, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	var codePoints = ucs2decode(string);
	var length = codePoints.length;
	var index = -1;
	var codePoint;
	var byteString = '';
	while (++index < length) {
		codePoint = codePoints[index];
		byteString += encodeCodePoint(codePoint, strict);
	}
	return byteString;
}

/*--------------------------------------------------------------------------*/

function readContinuationByte() {
	if (byteIndex >= byteCount) {
		throw Error('Invalid byte index');
	}

	var continuationByte = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	if ((continuationByte & 0xC0) == 0x80) {
		return continuationByte & 0x3F;
	}

	// If we end up here, it’s not a continuation byte
	throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
	var byte1;
	var byte2;
	var byte3;
	var byte4;
	var codePoint;

	if (byteIndex > byteCount) {
		throw Error('Invalid byte index');
	}

	if (byteIndex == byteCount) {
		return false;
	}

	// Read first byte
	byte1 = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	// 1-byte sequence (no continuation bytes)
	if ((byte1 & 0x80) == 0) {
		return byte1;
	}

	// 2-byte sequence
	if ((byte1 & 0xE0) == 0xC0) {
		byte2 = readContinuationByte();
		codePoint = ((byte1 & 0x1F) << 6) | byte2;
		if (codePoint >= 0x80) {
			return codePoint;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 3-byte sequence (may include unpaired surrogates)
	if ((byte1 & 0xF0) == 0xE0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
		if (codePoint >= 0x0800) {
			return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 4-byte sequence
	if ((byte1 & 0xF8) == 0xF0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		byte4 = readContinuationByte();
		codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
			(byte3 << 0x06) | byte4;
		if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
			return codePoint;
		}
	}

	throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	byteArray = ucs2decode(byteString);
	byteCount = byteArray.length;
	byteIndex = 0;
	var codePoints = [];
	var tmp;
	while ((tmp = decodeSymbol(strict)) !== false) {
		codePoints.push(tmp);
	}
	return ucs2encode(codePoints);
}

module.exports = {
	version: '2.1.2',
	encode: utf8encode,
	decode: utf8decode
};


/***/ }),

/***/ 71676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EthereumProviderError = exports.EthereumRpcError = void 0;
const fast_safe_stringify_1 = __webpack_require__(47268);
/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP-1474.
 * Permits any integer error code.
 */
class EthereumRpcError extends Error {
    constructor(code, message, data) {
        if (!Number.isInteger(code)) {
            throw new Error('"code" must be an integer.');
        }
        if (!message || typeof message !== 'string') {
            throw new Error('"message" must be a nonempty string.');
        }
        super(message);
        this.code = code;
        if (data !== undefined) {
            this.data = data;
        }
    }
    /**
     * Returns a plain object with all public class properties.
     */
    serialize() {
        const serialized = {
            code: this.code,
            message: this.message,
        };
        if (this.data !== undefined) {
            serialized.data = this.data;
        }
        if (this.stack) {
            serialized.stack = this.stack;
        }
        return serialized;
    }
    /**
     * Return a string representation of the serialized error, omitting
     * any circular references.
     */
    toString() {
        return fast_safe_stringify_1.default(this.serialize(), stringifyReplacer, 2);
    }
}
exports.EthereumRpcError = EthereumRpcError;
/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */
class EthereumProviderError extends EthereumRpcError {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(code, message, data) {
        if (!isValidEthProviderCode(code)) {
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        }
        super(code, message, data);
    }
}
exports.EthereumProviderError = EthereumProviderError;
// Internal
function isValidEthProviderCode(code) {
    return Number.isInteger(code) && code >= 1000 && code <= 4999;
}
function stringifyReplacer(_, value) {
    if (value === '[Circular]') {
        return undefined;
    }
    return value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUFnRDtBQVNoRDs7OztHQUlHO0FBQ0gsTUFBYSxnQkFBb0IsU0FBUSxLQUFLO0lBTTVDLFlBQVksSUFBWSxFQUFFLE9BQWUsRUFBRSxJQUFRO1FBRWpELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxLQUFLLENBQ2IsNEJBQTRCLENBQzdCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzNDLE1BQU0sSUFBSSxLQUFLLENBQ2Isc0NBQXNDLENBQ3ZDLENBQUM7U0FDSDtRQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDUCxNQUFNLFVBQVUsR0FBK0I7WUFDN0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMvQjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRO1FBQ04sT0FBTyw2QkFBYSxDQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ2hCLGlCQUFpQixFQUNqQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXRERCw0Q0FzREM7QUFFRDs7O0dBR0c7QUFDSCxNQUFhLHFCQUF5QixTQUFRLGdCQUFtQjtJQUUvRDs7O09BR0c7SUFDSCxZQUFZLElBQVksRUFBRSxPQUFlLEVBQUUsSUFBUTtRQUVqRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FDYiwyREFBMkQsQ0FDNUQsQ0FBQztTQUNIO1FBRUQsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBaEJELHNEQWdCQztBQUVELFdBQVc7QUFFWCxTQUFTLHNCQUFzQixDQUFDLElBQVk7SUFDMUMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQztBQUNoRSxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxDQUFVLEVBQUUsS0FBYztJQUNuRCxJQUFJLEtBQUssS0FBSyxZQUFZLEVBQUU7UUFDMUIsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMifQ==

/***/ }),

/***/ 90005:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.errorValues = exports.errorCodes = void 0;
exports.errorCodes = {
    rpc: {
        invalidInput: -32000,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603,
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
    },
};
exports.errorValues = {
    '-32700': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
    },
    '-32600': {
        standard: 'JSON RPC 2.0',
        message: 'The JSON sent is not a valid Request object.',
    },
    '-32601': {
        standard: 'JSON RPC 2.0',
        message: 'The method does not exist / is not available.',
    },
    '-32602': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid method parameter(s).',
    },
    '-32603': {
        standard: 'JSON RPC 2.0',
        message: 'Internal JSON-RPC error.',
    },
    '-32000': {
        standard: 'EIP-1474',
        message: 'Invalid input.',
    },
    '-32001': {
        standard: 'EIP-1474',
        message: 'Resource not found.',
    },
    '-32002': {
        standard: 'EIP-1474',
        message: 'Resource unavailable.',
    },
    '-32003': {
        standard: 'EIP-1474',
        message: 'Transaction rejected.',
    },
    '-32004': {
        standard: 'EIP-1474',
        message: 'Method not supported.',
    },
    '-32005': {
        standard: 'EIP-1474',
        message: 'Request limit exceeded.',
    },
    '4001': {
        standard: 'EIP-1193',
        message: 'User rejected the request.',
    },
    '4100': {
        standard: 'EIP-1193',
        message: 'The requested account and/or method has not been authorized by the user.',
    },
    '4200': {
        standard: 'EIP-1193',
        message: 'The requested method is not supported by this Ethereum provider.',
    },
    '4900': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from all chains.',
    },
    '4901': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from the specified chain.',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9yLWNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUF1QmEsUUFBQSxVQUFVLEdBQWU7SUFDcEMsR0FBRyxFQUFFO1FBQ0gsWUFBWSxFQUFFLENBQUMsS0FBSztRQUNwQixnQkFBZ0IsRUFBRSxDQUFDLEtBQUs7UUFDeEIsbUJBQW1CLEVBQUUsQ0FBQyxLQUFLO1FBQzNCLG1CQUFtQixFQUFFLENBQUMsS0FBSztRQUMzQixrQkFBa0IsRUFBRSxDQUFDLEtBQUs7UUFDMUIsYUFBYSxFQUFFLENBQUMsS0FBSztRQUNyQixLQUFLLEVBQUUsQ0FBQyxLQUFLO1FBQ2IsY0FBYyxFQUFFLENBQUMsS0FBSztRQUN0QixjQUFjLEVBQUUsQ0FBQyxLQUFLO1FBQ3RCLGFBQWEsRUFBRSxDQUFDLEtBQUs7UUFDckIsUUFBUSxFQUFFLENBQUMsS0FBSztLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNSLG1CQUFtQixFQUFFLElBQUk7UUFDekIsWUFBWSxFQUFFLElBQUk7UUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtRQUN2QixZQUFZLEVBQUUsSUFBSTtRQUNsQixpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLE9BQU8sRUFBRSx1R0FBdUc7S0FDakg7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsY0FBYztRQUN4QixPQUFPLEVBQUUsOENBQThDO0tBQ3hEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLGNBQWM7UUFDeEIsT0FBTyxFQUFFLCtDQUErQztLQUN6RDtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLE9BQU8sRUFBRSw4QkFBOEI7S0FDeEM7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsY0FBYztRQUN4QixPQUFPLEVBQUUsMEJBQTBCO0tBQ3BDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLGdCQUFnQjtLQUMxQjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7S0FDL0I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsdUJBQXVCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLHVCQUF1QjtLQUNqQztJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSx1QkFBdUI7S0FDakM7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUseUJBQXlCO0tBQ25DO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLDRCQUE0QjtLQUN0QztJQUNELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSwwRUFBMEU7S0FDcEY7SUFDRCxNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsa0VBQWtFO0tBQzVFO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLCtDQUErQztLQUN6RDtJQUNELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSx3REFBd0Q7S0FDbEU7Q0FDRixDQUFDIn0=

/***/ }),

/***/ 22366:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ethErrors = void 0;
const classes_1 = __webpack_require__(71676);
const utils_1 = __webpack_require__(30847);
const error_constants_1 = __webpack_require__(90005);
exports.ethErrors = {
    rpc: {
        /**
         * Get a JSON RPC 2.0 Parse (-32700) error.
         */
        parse: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg),
        /**
         * Get a JSON RPC 2.0 Invalid Request (-32600) error.
         */
        invalidRequest: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg),
        /**
         * Get a JSON RPC 2.0 Invalid Params (-32602) error.
         */
        invalidParams: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg),
        /**
         * Get a JSON RPC 2.0 Method Not Found (-32601) error.
         */
        methodNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg),
        /**
         * Get a JSON RPC 2.0 Internal (-32603) error.
         */
        internal: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg),
        /**
         * Get a JSON RPC 2.0 Server error.
         * Permits integer error codes in the [ -32099 <= -32005 ] range.
         * Codes -32000 through -32004 are reserved by EIP-1474.
         */
        server: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum RPC Server errors must provide single object argument.');
            }
            const { code } = opts;
            if (!Number.isInteger(code) || code > -32005 || code < -32099) {
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            }
            return getEthJsonRpcError(code, opts);
        },
        /**
         * Get an Ethereum JSON RPC Invalid Input (-32000) error.
         */
        invalidInput: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg),
        /**
         * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
         */
        resourceNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg),
        /**
         * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
         */
        resourceUnavailable: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg),
        /**
         * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
         */
        transactionRejected: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg),
        /**
         * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
         */
        methodNotSupported: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg),
        /**
         * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
         */
        limitExceeded: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg),
    },
    provider: {
        /**
         * Get an Ethereum Provider User Rejected Request (4001) error.
         */
        userRejectedRequest: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
        },
        /**
         * Get an Ethereum Provider Unauthorized (4100) error.
         */
        unauthorized: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
        },
        /**
         * Get an Ethereum Provider Unsupported Method (4200) error.
         */
        unsupportedMethod: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
        },
        /**
         * Get an Ethereum Provider Not Connected (4900) error.
         */
        disconnected: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
        },
        /**
         * Get an Ethereum Provider Chain Not Connected (4901) error.
         */
        chainDisconnected: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
        },
        /**
         * Get a custom Ethereum Provider error.
         */
        custom: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum Provider custom errors must provide single object argument.');
            }
            const { code, message, data } = opts;
            if (!message || typeof message !== 'string') {
                throw new Error('"message" must be a nonempty string');
            }
            return new classes_1.EthereumProviderError(code, message, data);
        },
    },
};
// Internal
function getEthJsonRpcError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumRpcError(code, message || utils_1.getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumProviderError(code, message || utils_1.getMessageFromCode(code), data);
}
function parseOpts(arg) {
    if (arg) {
        if (typeof arg === 'string') {
            return [arg];
        }
        else if (typeof arg === 'object' && !Array.isArray(arg)) {
            const { message, data } = arg;
            if (message && typeof message !== 'string') {
                throw new Error('Must specify string message.');
            }
            return [message || undefined, data];
        }
    }
    return [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBb0U7QUFDcEUsbUNBQTZDO0FBQzdDLHVEQUErQztBQWVsQyxRQUFBLFNBQVMsR0FBRztJQUN2QixHQUFHLEVBQUU7UUFFSDs7V0FFRztRQUNILEtBQUssRUFBRSxDQUFJLEdBQXFCLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUNyRCw0QkFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUMxQjtRQUVEOztXQUVHO1FBQ0gsY0FBYyxFQUFFLENBQUksR0FBcUIsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQzlELDRCQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQ25DO1FBRUQ7O1dBRUc7UUFDSCxhQUFhLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDN0QsNEJBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FDbEM7UUFFRDs7V0FFRztRQUNILGNBQWMsRUFBRSxDQUFJLEdBQXFCLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUM5RCw0QkFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUNuQztRQUVEOztXQUVHO1FBQ0gsUUFBUSxFQUFFLENBQUksR0FBcUIsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQ3hELDRCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQzdCO1FBRUQ7Ozs7V0FJRztRQUNILE1BQU0sRUFBRSxDQUFJLElBQTJCLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1RCxNQUFNLElBQUksS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7YUFDcEY7WUFDRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzdELE1BQU0sSUFBSSxLQUFLLENBQ2IsK0RBQStELENBQ2hFLENBQUM7YUFDSDtZQUNELE9BQU8sa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRDs7V0FFRztRQUNILFlBQVksRUFBRSxDQUFJLEdBQXFCLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUM1RCw0QkFBVSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUNqQztRQUVEOztXQUVHO1FBQ0gsZ0JBQWdCLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDaEUsNEJBQVUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUNyQztRQUVEOztXQUVHO1FBQ0gsbUJBQW1CLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDbkUsNEJBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUN4QztRQUVEOztXQUVHO1FBQ0gsbUJBQW1CLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDbkUsNEJBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUN4QztRQUVEOztXQUVHO1FBQ0gsa0JBQWtCLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDbEUsNEJBQVUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUN2QztRQUVEOztXQUVHO1FBQ0gsYUFBYSxFQUFFLENBQUksR0FBcUIsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQzdELDRCQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQ2xDO0tBQ0Y7SUFFRCxRQUFRLEVBQUU7UUFFUjs7V0FFRztRQUNILG1CQUFtQixFQUFFLENBQUksR0FBcUIsRUFBRSxFQUFFO1lBQ2hELE9BQU8sbUJBQW1CLENBQ3hCLDRCQUFVLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FDN0MsQ0FBQztRQUNKLENBQUM7UUFFRDs7V0FFRztRQUNILFlBQVksRUFBRSxDQUFJLEdBQXFCLEVBQUUsRUFBRTtZQUN6QyxPQUFPLG1CQUFtQixDQUN4Qiw0QkFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUN0QyxDQUFDO1FBQ0osQ0FBQztRQUVEOztXQUVHO1FBQ0gsaUJBQWlCLEVBQUUsQ0FBSSxHQUFxQixFQUFFLEVBQUU7WUFDOUMsT0FBTyxtQkFBbUIsQ0FDeEIsNEJBQVUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUMzQyxDQUFDO1FBQ0osQ0FBQztRQUVEOztXQUVHO1FBQ0gsWUFBWSxFQUFFLENBQUksR0FBcUIsRUFBRSxFQUFFO1lBQ3pDLE9BQU8sbUJBQW1CLENBQ3hCLDRCQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQ3RDLENBQUM7UUFDSixDQUFDO1FBRUQ7O1dBRUc7UUFDSCxpQkFBaUIsRUFBRSxDQUFJLEdBQXFCLEVBQUUsRUFBRTtZQUM5QyxPQUFPLG1CQUFtQixDQUN4Qiw0QkFBVSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQzNDLENBQUM7UUFDSixDQUFDO1FBRUQ7O1dBRUc7UUFDSCxNQUFNLEVBQUUsQ0FBSSxJQUF1QixFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO2FBQ3pGO1lBRUQsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBRXJDLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUMzQyxNQUFNLElBQUksS0FBSyxDQUNiLHFDQUFxQyxDQUN0QyxDQUFDO2FBQ0g7WUFDRCxPQUFPLElBQUksK0JBQXFCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsV0FBVztBQUVYLFNBQVMsa0JBQWtCLENBQUksSUFBWSxFQUFFLEdBQXFCO0lBQ2hFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sSUFBSSwwQkFBZ0IsQ0FDekIsSUFBSSxFQUNKLE9BQU8sSUFBSSwwQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFDbkMsSUFBSSxDQUNMLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBSSxJQUFZLEVBQUUsR0FBcUI7SUFDakUsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsT0FBTyxJQUFJLCtCQUFxQixDQUM5QixJQUFJLEVBQ0osT0FBTyxJQUFJLDBCQUFrQixDQUFDLElBQUksQ0FBQyxFQUNuQyxJQUFJLENBQ0wsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBSSxHQUFxQjtJQUN6QyxJQUFJLEdBQUcsRUFBRTtRQUNQLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNkO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pELE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBRTlCLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsT0FBTyxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckM7S0FDRjtJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyJ9

/***/ }),

/***/ 65679:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMessageFromCode = exports.serializeError = exports.EthereumProviderError = exports.EthereumRpcError = exports.ethErrors = exports.errorCodes = void 0;
const classes_1 = __webpack_require__(71676);
Object.defineProperty(exports, "EthereumRpcError", ({ enumerable: true, get: function () { return classes_1.EthereumRpcError; } }));
Object.defineProperty(exports, "EthereumProviderError", ({ enumerable: true, get: function () { return classes_1.EthereumProviderError; } }));
const utils_1 = __webpack_require__(30847);
Object.defineProperty(exports, "serializeError", ({ enumerable: true, get: function () { return utils_1.serializeError; } }));
Object.defineProperty(exports, "getMessageFromCode", ({ enumerable: true, get: function () { return utils_1.getMessageFromCode; } }));
const errors_1 = __webpack_require__(22366);
Object.defineProperty(exports, "ethErrors", ({ enumerable: true, get: function () { return errors_1.ethErrors; } }));
const error_constants_1 = __webpack_require__(90005);
Object.defineProperty(exports, "errorCodes", ({ enumerable: true, get: function () { return error_constants_1.errorCodes; } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQW9FO0FBVWxFLGlHQVZPLDBCQUFnQixPQVVQO0FBQ2hCLHNHQVh5QiwrQkFBcUIsT0FXekI7QUFWdkIsbUNBRWlCO0FBU2YsK0ZBVkEsc0JBQWMsT0FVQTtBQUNkLG1HQVhnQiwwQkFBa0IsT0FXaEI7QUFUcEIscUNBQXFDO0FBS25DLDBGQUxPLGtCQUFTLE9BS1A7QUFKWCx1REFBK0M7QUFHN0MsMkZBSE8sNEJBQVUsT0FHUCJ9

/***/ }),

/***/ 30847:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializeError = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
const error_constants_1 = __webpack_require__(90005);
const classes_1 = __webpack_require__(71676);
const FALLBACK_ERROR_CODE = error_constants_1.errorCodes.rpc.internal;
const FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.';
const FALLBACK_ERROR = {
    code: FALLBACK_ERROR_CODE,
    message: getMessageFromCode(FALLBACK_ERROR_CODE),
};
exports.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 */
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
    if (Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(error_constants_1.errorValues, codeString)) {
            return error_constants_1.errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
            return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
    }
    return fallbackMessage;
}
exports.getMessageFromCode = getMessageFromCode;
/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 */
function isValidCode(code) {
    if (!Number.isInteger(code)) {
        return false;
    }
    const codeString = code.toString();
    if (error_constants_1.errorValues[codeString]) {
        return true;
    }
    if (isJsonRpcServerError(code)) {
        return true;
    }
    return false;
}
exports.isValidCode = isValidCode;
/**
 * Serializes the given error to an Ethereum JSON RPC-compatible error object.
 * Merely copies the given error's values if it is already compatible.
 * If the given error is not fully compatible, it will be preserved on the
 * returned object's data.originalError property.
 */
function serializeError(error, { fallbackError = FALLBACK_ERROR, shouldIncludeStack = false, } = {}) {
    var _a, _b;
    if (!fallbackError ||
        !Number.isInteger(fallbackError.code) ||
        typeof fallbackError.message !== 'string') {
        throw new Error('Must provide fallback error with integer number code and string message.');
    }
    if (error instanceof classes_1.EthereumRpcError) {
        return error.serialize();
    }
    const serialized = {};
    if (error &&
        typeof error === 'object' &&
        !Array.isArray(error) &&
        hasKey(error, 'code') &&
        isValidCode(error.code)) {
        const _error = error;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === 'string') {
            serialized.message = _error.message;
            if (hasKey(_error, 'data')) {
                serialized.data = _error.data;
            }
        }
        else {
            serialized.message = getMessageFromCode(serialized.code);
            serialized.data = { originalError: assignOriginalError(error) };
        }
    }
    else {
        serialized.code = fallbackError.code;
        const message = (_a = error) === null || _a === void 0 ? void 0 : _a.message;
        serialized.message = (message && typeof message === 'string'
            ? message
            : fallbackError.message);
        serialized.data = { originalError: assignOriginalError(error) };
    }
    const stack = (_b = error) === null || _b === void 0 ? void 0 : _b.stack;
    if (shouldIncludeStack && error && stack && typeof stack === 'string') {
        serialized.stack = stack;
    }
    return serialized;
}
exports.serializeError = serializeError;
// Internal
function isJsonRpcServerError(code) {
    return code >= -32099 && code <= -32000;
}
function assignOriginalError(error) {
    if (error && typeof error === 'object' && !Array.isArray(error)) {
        return Object.assign({}, error);
    }
    return error;
}
function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQTREO0FBQzVELHVDQUF5RTtBQUV6RSxNQUFNLG1CQUFtQixHQUFHLDRCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNwRCxNQUFNLGdCQUFnQixHQUFHLDZEQUE2RCxDQUFDO0FBQ3ZGLE1BQU0sY0FBYyxHQUErQjtJQUNqRCxJQUFJLEVBQUUsbUJBQW1CO0lBQ3pCLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQztDQUNqRCxDQUFDO0FBRVcsUUFBQSw2QkFBNkIsR0FBRywyQkFBMkIsQ0FBQztBQUl6RTs7O0dBR0c7QUFDSCxTQUFnQixrQkFBa0IsQ0FDaEMsSUFBWSxFQUNaLGtCQUEwQixnQkFBZ0I7SUFFMUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVuQyxJQUFJLE1BQU0sQ0FBQyw2QkFBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sNkJBQVcsQ0FBQyxVQUEyQixDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixPQUFPLHFDQUE2QixDQUFDO1NBQ3RDO0tBQ0Y7SUFDRCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBZkQsZ0RBZUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFnQixXQUFXLENBQUMsSUFBWTtJQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLElBQUksNkJBQVcsQ0FBQyxVQUEyQixDQUFDLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQWRELGtDQWNDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixjQUFjLENBQzVCLEtBQWMsRUFDZCxFQUNFLGFBQWEsR0FBRyxjQUFjLEVBQzlCLGtCQUFrQixHQUFHLEtBQUssR0FDM0IsR0FBRyxFQUFFOztJQUdOLElBQ0UsQ0FBQyxhQUFhO1FBQ2QsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDckMsT0FBTyxhQUFhLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFDekM7UUFDQSxNQUFNLElBQUksS0FBSyxDQUNiLDBFQUEwRSxDQUMzRSxDQUFDO0tBQ0g7SUFFRCxJQUFJLEtBQUssWUFBWSwwQkFBZ0IsRUFBRTtRQUNyQyxPQUFPLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUMxQjtJQUVELE1BQU0sVUFBVSxHQUF3QyxFQUFFLENBQUM7SUFFM0QsSUFDRSxLQUFLO1FBQ0wsT0FBTyxLQUFLLEtBQUssUUFBUTtRQUN6QixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxLQUFnQyxFQUFFLE1BQU0sQ0FBQztRQUNoRCxXQUFXLENBQUUsS0FBb0MsQ0FBQyxJQUFJLENBQUMsRUFDdkQ7UUFDQSxNQUFNLE1BQU0sR0FBRyxLQUE0QyxDQUFDO1FBQzVELFVBQVUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUU5QixJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUN4RCxVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQixVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDL0I7U0FDRjthQUFNO1lBQ0wsVUFBVSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FDcEMsVUFBeUMsQ0FBQyxJQUFJLENBQ2hELENBQUM7WUFFRixVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDakU7S0FDRjtTQUFNO1FBQ0wsVUFBVSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBRXJDLE1BQU0sT0FBTyxTQUFJLEtBQWEsMENBQUUsT0FBTyxDQUFDO1FBRXhDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FDbkIsT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVE7WUFDcEMsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDMUIsQ0FBQztRQUNGLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztLQUNqRTtJQUVELE1BQU0sS0FBSyxTQUFJLEtBQWEsMENBQUUsS0FBSyxDQUFDO0lBRXBDLElBQUksa0JBQWtCLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDckUsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDMUI7SUFDRCxPQUFPLFVBQXdDLENBQUM7QUFDbEQsQ0FBQztBQWxFRCx3Q0FrRUM7QUFFRCxXQUFXO0FBRVgsU0FBUyxvQkFBb0IsQ0FBQyxJQUFZO0lBQ3hDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztBQUMxQyxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUFjO0lBQ3pDLElBQUksS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDL0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNqQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLEdBQTRCLEVBQUUsR0FBVztJQUN2RCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEQsQ0FBQyJ9

/***/ }),

/***/ 31971:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
const Duplex = __webpack_require__(30376).Duplex
const inherits = __webpack_require__(83020).inherits
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

/***/ 11203:
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

/***/ 47268:
/***/ ((module) => {

module.exports = stringify
stringify.default = stringify
stringify.stable = deterministicStringify
stringify.stableStringify = deterministicStringify

var arr = []
var replacerStack = []

// Regular stringify
function stringify (obj, replacer, spacer) {
  decirc(obj, '', [], undefined)
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
function decirc (val, k, stack, parent) {
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: '[Circular]' })
            arr.push([parent, k, val, propertyDescriptor])
          } else {
            replacerStack.push([val, k])
          }
        } else {
          parent[k] = '[Circular]'
          arr.push([parent, k, val])
        }
        return
      }
    }
    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, stack, val)
      }
    } else {
      var keys = Object.keys(val)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        decirc(val[key], key, stack, val)
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

function deterministicStringify (obj, replacer, spacer) {
  var tmp = deterministicDecirc(obj, '', [], undefined) || obj
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

function deterministicDecirc (val, k, stack, parent) {
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: '[Circular]' })
            arr.push([parent, k, val, propertyDescriptor])
          } else {
            replacerStack.push([val, k])
          }
        } else {
          parent[k] = '[Circular]'
          arr.push([parent, k, val])
        }
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
    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, stack, val)
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {}
      var keys = Object.keys(val).sort(compareFunction)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        deterministicDecirc(val[key], key, stack, val)
        tmp[key] = val[key]
      }
      if (parent !== undefined) {
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
// and mark them as [Circular]
function replaceGetterValues (replacer) {
  replacer = replacer !== undefined ? replacer : function (k, v) { return v }
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i]
        if (part[1] === key && part[0] === val) {
          val = '[Circular]'
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

/***/ 8685:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JsonRpcEngine = void 0;
const safe_event_emitter_1 = __importDefault(__webpack_require__(35247));
const eth_rpc_errors_1 = __webpack_require__(65679);
/**
 * A JSON-RPC request and response processor.
 * Give it a stack of middleware, pass it requests, and get back responses.
 */
class JsonRpcEngine extends safe_event_emitter_1.default {
    constructor() {
        super();
        this._middleware = [];
    }
    /**
     * Add a middleware function to the engine's middleware stack.
     *
     * @param middleware - The middleware function to add.
     */
    push(middleware) {
        this._middleware.push(middleware);
    }
    handle(req, cb) {
        if (cb && typeof cb !== 'function') {
            throw new Error('"callback" must be a function if provided.');
        }
        if (Array.isArray(req)) {
            if (cb) {
                return this._handleBatch(req, cb);
            }
            return this._handleBatch(req);
        }
        if (cb) {
            return this._handle(req, cb);
        }
        return this._promiseHandle(req);
    }
    /**
     * Returns this engine as a middleware function that can be pushed to other
     * engines.
     *
     * @returns This engine as a middleware function.
     */
    asMiddleware() {
        return async (req, res, next, end) => {
            try {
                const [middlewareError, isComplete, returnHandlers,] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
                if (isComplete) {
                    await JsonRpcEngine._runReturnHandlers(returnHandlers);
                    return end(middlewareError);
                }
                return next(async (handlerCallback) => {
                    try {
                        await JsonRpcEngine._runReturnHandlers(returnHandlers);
                    }
                    catch (error) {
                        return handlerCallback(error);
                    }
                    return handlerCallback();
                });
            }
            catch (error) {
                return end(error);
            }
        };
    }
    async _handleBatch(reqs, cb) {
        // The order here is important
        try {
            // 2. Wait for all requests to finish, or throw on some kind of fatal
            // error
            const responses = await Promise.all(
            // 1. Begin executing each request in the order received
            reqs.map(this._promiseHandle.bind(this)));
            // 3. Return batch response
            if (cb) {
                return cb(null, responses);
            }
            return responses;
        }
        catch (error) {
            if (cb) {
                return cb(error);
            }
            throw error;
        }
    }
    /**
     * A promise-wrapped _handle.
     */
    _promiseHandle(req) {
        return new Promise((resolve) => {
            this._handle(req, (_err, res) => {
                // There will always be a response, and it will always have any error
                // that is caught and propagated.
                resolve(res);
            });
        });
    }
    /**
     * Ensures that the request object is valid, processes it, and passes any
     * error and the response object to the given callback.
     *
     * Does not reject.
     */
    async _handle(callerReq, cb) {
        if (!callerReq ||
            Array.isArray(callerReq) ||
            typeof callerReq !== 'object') {
            const error = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof callerReq}`, { request: callerReq });
            return cb(error, { id: undefined, jsonrpc: '2.0', error });
        }
        if (typeof callerReq.method !== 'string') {
            const error = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof callerReq.method}`, { request: callerReq });
            return cb(error, { id: callerReq.id, jsonrpc: '2.0', error });
        }
        const req = Object.assign({}, callerReq);
        const res = {
            id: req.id,
            jsonrpc: req.jsonrpc,
        };
        let error = null;
        try {
            await this._processRequest(req, res);
        }
        catch (_error) {
            // A request handler error, a re-thrown middleware error, or something
            // unexpected.
            error = _error;
        }
        if (error) {
            // Ensure no result is present on an errored response
            delete res.result;
            if (!res.error) {
                res.error = eth_rpc_errors_1.serializeError(error);
            }
        }
        return cb(error, res);
    }
    /**
     * For the given request and response, runs all middleware and their return
     * handlers, if any, and ensures that internal request processing semantics
     * are satisfied.
     */
    async _processRequest(req, res) {
        const [error, isComplete, returnHandlers,] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
        // Throw if "end" was not called, or if the response has neither a result
        // nor an error.
        JsonRpcEngine._checkForCompletion(req, res, isComplete);
        // The return handlers should run even if an error was encountered during
        // middleware processing.
        await JsonRpcEngine._runReturnHandlers(returnHandlers);
        // Now we re-throw the middleware processing error, if any, to catch it
        // further up the call chain.
        if (error) {
            throw error;
        }
    }
    /**
     * Serially executes the given stack of middleware.
     *
     * @returns An array of any error encountered during middleware execution,
     * a boolean indicating whether the request was completed, and an array of
     * middleware-defined return handlers.
     */
    static async _runAllMiddleware(req, res, middlewareStack) {
        const returnHandlers = [];
        let error = null;
        let isComplete = false;
        // Go down stack of middleware, call and collect optional returnHandlers
        for (const middleware of middlewareStack) {
            [error, isComplete] = await JsonRpcEngine._runMiddleware(req, res, middleware, returnHandlers);
            if (isComplete) {
                break;
            }
        }
        return [error, isComplete, returnHandlers.reverse()];
    }
    /**
     * Runs an individual middleware.
     *
     * @returns An array of any error encountered during middleware exection,
     * and a boolean indicating whether the request should end.
     */
    static _runMiddleware(req, res, middleware, returnHandlers) {
        return new Promise((resolve) => {
            const end = (err) => {
                const error = err || res.error;
                if (error) {
                    res.error = eth_rpc_errors_1.serializeError(error);
                }
                // True indicates that the request should end
                resolve([error, true]);
            };
            const next = (returnHandler) => {
                if (res.error) {
                    end(res.error);
                }
                else {
                    if (returnHandler) {
                        if (typeof returnHandler !== 'function') {
                            end(new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. ` +
                                `Received "${typeof returnHandler}" for request:\n${jsonify(req)}`, { request: req }));
                        }
                        returnHandlers.push(returnHandler);
                    }
                    // False indicates that the request should not end
                    resolve([null, false]);
                }
            };
            try {
                middleware(req, res, next, end);
            }
            catch (error) {
                end(error);
            }
        });
    }
    /**
     * Serially executes array of return handlers. The request and response are
     * assumed to be in their scope.
     */
    static async _runReturnHandlers(handlers) {
        for (const handler of handlers) {
            await new Promise((resolve, reject) => {
                handler((err) => (err ? reject(err) : resolve()));
            });
        }
    }
    /**
     * Throws an error if the response has neither a result nor an error, or if
     * the "isComplete" flag is falsy.
     */
    static _checkForCompletion(req, res, isComplete) {
        if (!('result' in res) && !('error' in res)) {
            throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:\n${jsonify(req)}`, { request: req });
        }
        if (!isComplete) {
            throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:\n${jsonify(req)}`, { request: req });
        }
    }
}
exports.JsonRpcEngine = JsonRpcEngine;
function jsonify(request) {
    return JSON.stringify(request, null, 2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvblJwY0VuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Kc29uUnBjRW5naW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNGQUE0RDtBQUM1RCxtREFBOEU7QUF1RjlFOzs7R0FHRztBQUNILE1BQWEsYUFBYyxTQUFRLDRCQUFnQjtJQUdqRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLENBQU8sVUFBbUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBaUQsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUEyQ0QsTUFBTSxDQUFDLEdBQVksRUFBRSxFQUFRO1FBQzNCLElBQUksRUFBRSxJQUFJLE9BQU8sRUFBRSxLQUFLLFVBQVUsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNuQztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksRUFBRSxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQThCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBOEIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFlBQVk7UUFDVixPQUFPLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNuQyxJQUFJO2dCQUNGLE1BQU0sQ0FDSixlQUFlLEVBQ2YsVUFBVSxFQUNWLGNBQWMsRUFDZixHQUFHLE1BQU0sYUFBYSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUV0RSxJQUFJLFVBQVUsRUFBRTtvQkFDZCxNQUFNLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDdkQsT0FBTyxHQUFHLENBQUMsZUFBNkMsQ0FBQyxDQUFDO2lCQUMzRDtnQkFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUU7b0JBQ3BDLElBQUk7d0JBQ0YsTUFBTSxhQUFhLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQ3hEO29CQUFDLE9BQU8sS0FBSyxFQUFFO3dCQUNkLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMvQjtvQkFDRCxPQUFPLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQzthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkI7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBaUJPLEtBQUssQ0FBQyxZQUFZLENBQ3hCLElBQStCLEVBQy9CLEVBQXFFO1FBRXJFLDhCQUE4QjtRQUM5QixJQUFJO1lBQ0YscUVBQXFFO1lBQ3JFLFFBQVE7WUFDUixNQUFNLFNBQVMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHO1lBQ2pDLHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3pDLENBQUM7WUFFRiwyQkFBMkI7WUFDM0IsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUksRUFBRSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xCO1lBRUQsTUFBTSxLQUFLLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLGNBQWMsQ0FDcEIsR0FBNEI7UUFFNUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUM5QixxRUFBcUU7Z0JBQ3JFLGlDQUFpQztnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLEtBQUssQ0FBQyxPQUFPLENBQ25CLFNBQWtDLEVBQ2xDLEVBQWdFO1FBRWhFLElBQ0UsQ0FBQyxTQUFTO1lBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDeEIsT0FBTyxTQUFTLEtBQUssUUFBUSxFQUM3QjtZQUNBLE1BQU0sS0FBSyxHQUFHLElBQUksaUNBQWdCLENBQ2hDLDJCQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFDN0IsNkNBQTZDLE9BQU8sU0FBUyxFQUFFLEVBQy9ELEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUN2QixDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLE9BQU8sU0FBUyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxpQ0FBZ0IsQ0FDaEMsMkJBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUM3QiwyQ0FBMkMsT0FBTyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQ3BFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUN2QixDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsTUFBTSxHQUFHLHFCQUFpQyxTQUFTLENBQUUsQ0FBQztRQUN0RCxNQUFNLEdBQUcsR0FBb0M7WUFDM0MsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3JCLENBQUM7UUFDRixJQUFJLEtBQUssR0FBK0IsSUFBSSxDQUFDO1FBRTdDLElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO1FBQUMsT0FBTyxNQUFNLEVBQUU7WUFDZixzRUFBc0U7WUFDdEUsY0FBYztZQUNkLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDaEI7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNULHFEQUFxRDtZQUNyRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsR0FBRyxDQUFDLEtBQUssR0FBRywrQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7UUFFRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBK0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssS0FBSyxDQUFDLGVBQWUsQ0FDM0IsR0FBNEIsRUFDNUIsR0FBb0M7UUFFcEMsTUFBTSxDQUNKLEtBQUssRUFDTCxVQUFVLEVBQ1YsY0FBYyxFQUNmLEdBQUcsTUFBTSxhQUFhLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdEUseUVBQXlFO1FBQ3pFLGdCQUFnQjtRQUNoQixhQUFhLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV4RCx5RUFBeUU7UUFDekUseUJBQXlCO1FBQ3pCLE1BQU0sYUFBYSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXZELHVFQUF1RTtRQUN2RSw2QkFBNkI7UUFDN0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLEtBQUssQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQ3BDLEdBQTRCLEVBQzVCLEdBQW9DLEVBQ3BDLGVBQXNEO1FBUXRELE1BQU0sY0FBYyxHQUFpQyxFQUFFLENBQUM7UUFDeEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV2Qix3RUFBd0U7UUFDeEUsS0FBSyxNQUFNLFVBQVUsSUFBSSxlQUFlLEVBQUU7WUFDeEMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxDQUN0RCxHQUFHLEVBQ0gsR0FBRyxFQUNILFVBQVUsRUFDVixjQUFjLENBQ2YsQ0FBQztZQUNGLElBQUksVUFBVSxFQUFFO2dCQUNkLE1BQU07YUFDUDtTQUNGO1FBQ0QsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssTUFBTSxDQUFDLGNBQWMsQ0FDM0IsR0FBNEIsRUFDNUIsR0FBb0MsRUFDcEMsVUFBK0MsRUFDL0MsY0FBNEM7UUFFNUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLE1BQU0sR0FBRyxHQUE2QixDQUFDLEdBQWEsRUFBRSxFQUFFO2dCQUN0RCxNQUFNLEtBQUssR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsR0FBRyxDQUFDLEtBQUssR0FBRywrQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNuQztnQkFDRCw2Q0FBNkM7Z0JBQzdDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUE4QixDQUN0QyxhQUEwQyxFQUMxQyxFQUFFO2dCQUNGLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtvQkFDYixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDTCxJQUFJLGFBQWEsRUFBRTt3QkFDakIsSUFBSSxPQUFPLGFBQWEsS0FBSyxVQUFVLEVBQUU7NEJBQ3ZDLEdBQUcsQ0FDRCxJQUFJLGlDQUFnQixDQUNsQiwyQkFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQ3ZCLDJEQUEyRDtnQ0FDekQsYUFBYSxPQUFPLGFBQWEsbUJBQW1CLE9BQU8sQ0FDekQsR0FBRyxDQUNKLEVBQUUsRUFDTCxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDakIsQ0FDRixDQUFDO3lCQUNIO3dCQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQ3BDO29CQUVELGtEQUFrRDtvQkFDbEQsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3hCO1lBQ0gsQ0FBQyxDQUFDO1lBRUYsSUFBSTtnQkFDRixVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDakM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDWjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQ3JDLFFBQXNDO1FBRXRDLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQzlCLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssTUFBTSxDQUFDLG1CQUFtQixDQUNoQyxHQUE0QixFQUM1QixHQUFvQyxFQUNwQyxVQUFtQjtRQUVuQixJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsRUFBRTtZQUMzQyxNQUFNLElBQUksaUNBQWdCLENBQ3hCLDJCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFDdkIsZ0VBQWdFLE9BQU8sQ0FDckUsR0FBRyxDQUNKLEVBQUUsRUFDSCxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDakIsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE1BQU0sSUFBSSxpQ0FBZ0IsQ0FDeEIsMkJBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUN2QiwwQ0FBMEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQ3hELEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUNqQixDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0Y7QUFyWUQsc0NBcVlDO0FBRUQsU0FBUyxPQUFPLENBQUMsT0FBZ0M7SUFDL0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUMsQ0FBQyJ9

/***/ }),

/***/ 21612:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createAsyncMiddleware = void 0;
/**
 * JsonRpcEngine only accepts callback-based middleware directly.
 * createAsyncMiddleware exists to enable consumers to pass in async middleware
 * functions.
 *
 * Async middleware have no "end" function. Instead, they "end" if they return
 * without calling "next". Rather than passing in explicit return handlers,
 * async middleware can simply await "next", and perform operations on the
 * response object when execution resumes.
 *
 * To accomplish this, createAsyncMiddleware passes the async middleware a
 * wrapped "next" function. That function calls the internal JsonRpcEngine
 * "next" function with a return handler that resolves a promise when called.
 *
 * The return handler will always be called. Its resolution of the promise
 * enables the control flow described above.
 */
function createAsyncMiddleware(asyncMiddleware) {
    return async (req, res, next, end) => {
        // nextPromise is the key to the implementation
        // it is resolved by the return handler passed to the
        // "next" function
        let resolveNextPromise;
        const nextPromise = new Promise((resolve) => {
            resolveNextPromise = resolve;
        });
        let returnHandlerCallback = null;
        let nextWasCalled = false;
        // This will be called by the consumer's async middleware.
        const asyncNext = async () => {
            nextWasCalled = true;
            // We pass a return handler to next(). When it is called by the engine,
            // the consumer's async middleware will resume executing.
            // eslint-disable-next-line node/callback-return
            next((runReturnHandlersCallback) => {
                // This callback comes from JsonRpcEngine._runReturnHandlers
                returnHandlerCallback = runReturnHandlersCallback;
                resolveNextPromise();
            });
            await nextPromise;
        };
        try {
            await asyncMiddleware(req, res, asyncNext);
            if (nextWasCalled) {
                await nextPromise; // we must wait until the return handler is called
                returnHandlerCallback(null);
            }
            else {
                end(null);
            }
        }
        catch (error) {
            if (returnHandlerCallback) {
                returnHandlerCallback(error);
            }
            else {
                end(error);
            }
        }
    };
}
exports.createAsyncMiddleware = createAsyncMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQXN5bmNNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZUFzeW5jTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSCxTQUFnQixxQkFBcUIsQ0FDbkMsZUFBNkM7SUFFN0MsT0FBTyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDbkMsK0NBQStDO1FBQy9DLHFEQUFxRDtRQUNyRCxrQkFBa0I7UUFDbEIsSUFBSSxrQkFBOEIsQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUkscUJBQXFCLEdBQVksSUFBSSxDQUFDO1FBQzFDLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUxQiwwREFBMEQ7UUFDMUQsTUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDM0IsYUFBYSxHQUFHLElBQUksQ0FBQztZQUVyQix1RUFBdUU7WUFDdkUseURBQXlEO1lBQ3pELGdEQUFnRDtZQUNoRCxJQUFJLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFO2dCQUNqQyw0REFBNEQ7Z0JBQzVELHFCQUFxQixHQUFHLHlCQUF5QixDQUFDO2dCQUNsRCxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxXQUFXLENBQUM7UUFDcEIsQ0FBQyxDQUFDO1FBRUYsSUFBSTtZQUNGLE1BQU0sZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFM0MsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLE1BQU0sV0FBVyxDQUFDLENBQUMsa0RBQWtEO2dCQUNwRSxxQkFBK0MsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4RDtpQkFBTTtnQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDWDtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLHFCQUFxQixFQUFFO2dCQUN4QixxQkFBK0MsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDWjtTQUNGO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQS9DRCxzREErQ0MifQ==

/***/ }),

/***/ 3507:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createScaffoldMiddleware = void 0;
function createScaffoldMiddleware(handlers) {
    return (req, res, next, end) => {
        const handler = handlers[req.method];
        // if no handler, return
        if (handler === undefined) {
            return next();
        }
        // if handler is fn, call as middleware
        if (typeof handler === 'function') {
            return handler(req, res, next, end);
        }
        // if handler is some other value, use as result
        res.result = handler;
        return end();
    };
}
exports.createScaffoldMiddleware = createScaffoldMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NhZmZvbGRNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZVNjYWZmb2xkTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxTQUFnQix3QkFBd0IsQ0FBQyxRQUV4QztJQUNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUM3QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDekIsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNmO1FBQ0QsdUNBQXVDO1FBQ3ZDLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ2pDLE9BQU8sT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsZ0RBQWdEO1FBQy9DLEdBQStCLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUNsRCxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWpCRCw0REFpQkMifQ==

/***/ }),

/***/ 98324:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUniqueId = void 0;
// uint32 (two's complement) max
// more conservative than Number.MAX_SAFE_INTEGER
const MAX = 4294967295;
let idCounter = Math.floor(Math.random() * MAX);
function getUniqueId() {
    idCounter = (idCounter + 1) % MAX;
    return idCounter;
}
exports.getUniqueId = getUniqueId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VW5pcXVlSWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0VW5pcXVlSWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0NBQWdDO0FBQ2hDLGlEQUFpRDtBQUNqRCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUM7QUFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFFaEQsU0FBZ0IsV0FBVztJQUN6QixTQUFTLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFIRCxrQ0FHQyJ9

/***/ }),

/***/ 25080:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createIdRemapMiddleware = void 0;
const getUniqueId_1 = __webpack_require__(98324);
function createIdRemapMiddleware() {
    return (req, res, next, _end) => {
        const originalId = req.id;
        const newId = getUniqueId_1.getUniqueId();
        req.id = newId;
        res.id = newId;
        next((done) => {
            req.id = originalId;
            res.id = originalId;
            done();
        });
    };
}
exports.createIdRemapMiddleware = createIdRemapMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRSZW1hcE1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaWRSZW1hcE1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQTRDO0FBRzVDLFNBQWdCLHVCQUF1QjtJQUNyQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDOUIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUMxQixNQUFNLEtBQUssR0FBRyx5QkFBVyxFQUFFLENBQUM7UUFDNUIsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDZixHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNmLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1osR0FBRyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDcEIsR0FBRyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDcEIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUM7QUFaRCwwREFZQyJ9

/***/ }),

/***/ 91743:
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
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(25080), exports);
__exportStar(__webpack_require__(21612), exports);
__exportStar(__webpack_require__(3507), exports);
__exportStar(__webpack_require__(98324), exports);
__exportStar(__webpack_require__(8685), exports);
__exportStar(__webpack_require__(43111), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQW9DO0FBQ3BDLDBEQUF3QztBQUN4Qyw2REFBMkM7QUFDM0MsZ0RBQThCO0FBQzlCLGtEQUFnQztBQUNoQyxvREFBa0MifQ==

/***/ }),

/***/ 43111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeMiddleware = void 0;
const JsonRpcEngine_1 = __webpack_require__(8685);
function mergeMiddleware(middlewareStack) {
    const engine = new JsonRpcEngine_1.JsonRpcEngine();
    middlewareStack.forEach((middleware) => engine.push(middleware));
    return engine.asMiddleware();
}
exports.mergeMiddleware = mergeMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21lcmdlTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBbUU7QUFFbkUsU0FBZ0IsZUFBZSxDQUFDLGVBQXNEO0lBQ3BGLE1BQU0sTUFBTSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0lBQ25DLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNqRSxPQUFPLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBSkQsMENBSUMifQ==

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
exports.default = createEngineStream;
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
exports.default = createStreamMiddleware;
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
var ancient = /^v?\.0/.test("v14.17.6")

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

/***/ 99941:
/***/ ((module, exports, __webpack_require__) => {


/**
 * Module dependencies.
 */

var url = __webpack_require__(53835);
var parser = __webpack_require__(67173);
var Manager = __webpack_require__(13590);
var debug = __webpack_require__(95553)('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(13590);
exports.Socket = __webpack_require__(85605);


/***/ }),

/***/ 13590:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Module dependencies.
 */

var eio = __webpack_require__(5395);
var Socket = __webpack_require__(85605);
var Emitter = __webpack_require__(24482);
var parser = __webpack_require__(67173);
var on = __webpack_require__(21409);
var bind = __webpack_require__(75864);
var debug = __webpack_require__(95553)('socket.io-client:manager');
var indexOf = __webpack_require__(81363);
var Backoff = __webpack_require__(5060);

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    if (timeout === 0) {
      openSub.destroy(); // prevents a race condition with the 'open' event
    }

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};


/***/ }),

/***/ 21409:
/***/ ((module) => {


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}


/***/ }),

/***/ 85605:
/***/ ((module, exports, __webpack_require__) => {


/**
 * Module dependencies.
 */

var parser = __webpack_require__(67173);
var Emitter = __webpack_require__(24482);
var toArray = __webpack_require__(80305);
var on = __webpack_require__(21409);
var bind = __webpack_require__(75864);
var debug = __webpack_require__(95553)('socket.io-client:socket');
var parseqs = __webpack_require__(32386);
var hasBin = __webpack_require__(34196);

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  if (!this.io.reconnecting) this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';

  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};

/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */

Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};


/***/ }),

/***/ 53835:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(89138);
var debug = __webpack_require__(95553)('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || (typeof location !== 'undefined' && location);
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}


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

/***/ 70682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sf": () => (/* binding */ pluginDataHasValidKeyPath),
/* harmony export */   "HN": () => (/* binding */ createPluginDBAccess),
/* harmony export */   "tB": () => (/* binding */ toStore)
/* harmony export */ });
/* harmony import */ var idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79930);
/* harmony import */ var _helpers_openDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77046);
/// <reference path="../global.d.ts" />


//#endregion
const db1 = (0,_helpers_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_0__.openDB)('maskbook-plugin-data', 2, {
        async upgrade (db, oldVersion, newVersion, transaction) {
            if (oldVersion < 1) db.createObjectStore('PluginStore');
            if (oldVersion < 2) {
                const data = await transaction.objectStore('PluginStore').getAll();
                db.deleteObjectStore('PluginStore');
                const os = db.createObjectStore('PluginStore', {
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
const createPluginDBAccess = db1;
function toStore(plugin_id, value) {
    return {
        plugin_id,
        value
    };
}


/***/ }),

/***/ 97834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ createPluginDatabase)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70682);

/**
 * @typeParameter Data It should be a [tagged union](https://en.wikipedia.org/wiki/Tagged_union) with an extra `id` field
 * @param plugin_id Plugin ID
 * @returns The database
 * @example
 *
 * type File = { type: 'file'; name: string; id: string }
 * type Folder = { type: 'folder'; file: string[]; id: string }
 * const pluginDatabase = createPluginDatabase<File | Folder>('id')
 * const file: File = { type: 'file', name: 'file.txt', id: uuid() }
 * const folder: Folder = { type: 'folder', file: [file.id], id: uuid() }
 * // Add new data
 * await pluginDatabase.add(file)
 * await pluginDatabase.add(folder)
 * // Remove
 * await pluginDatabase.remove('file', file.id)
 * // Query
 * const result: File | undefined = await pluginDatabase.get('file', file.id)
 * const has: boolean = await pluginDatabase.has('file', file.id)
 * // iterate
 * for await (const i of pluginDatabase.iterate('file')) {
 *     // read only during the for...await loop
 *     // !! NO: await pluginDatabase.remove('file', file.id)
 *     console.log(i.name)
 * }
 * for await (const i of pluginDatabase.iterate_mutate('folder')) {
 *     i.data // Folder
 *     await i.update({ ...i.data, file: [] })
 *     await i.delete()
 * }
 */ function createPluginDatabase(plugin_id) {
    let livingTransaction = undefined;
    function key(data) {
        return IDBKeyRange.only([
            plugin_id,
            data.type,
            data.id
        ]);
    }
    return {
        // Please keep the API minimal
        /**
         * Query an object from the database
         * @param type "type" field on the object
         * @param id "id" field on the object
         */ async get (type, id) {
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
        /**
         * Store a data into the database.
         * @param data Must be an object with "type" and "id"
         */ async add (data) {
            const t = await c('rw');
            if (!(0,___WEBPACK_IMPORTED_MODULE_0__/* .pluginDataHasValidKeyPath */ .Sf)(data)) throw new TypeError("Data doesn't have a valid key path");
            if (await t.store.get(key(data))) await t.store.put((0,___WEBPACK_IMPORTED_MODULE_0__/* .toStore */ .tB)(plugin_id, data));
            else await t.store.add((0,___WEBPACK_IMPORTED_MODULE_0__/* .toStore */ .tB)(plugin_id, data));
        },
        /**
         * Remove an object from the database
         * @param type "type" field on the object
         * @param id "id" field on the object
         */ async remove (type, id) {
            return (await c('rw')).store.delete(key({
                type,
                id
            }));
        },
        /**
         * Iterate over the database of given type (readonly!)
         *
         * !!! During the iterate, you MUST NOT do anything that writes to the store (use iterate_mutate instead)
         * !!! You MUST NOT do anything asynchronous before the iterate ends
         *
         * !!! Otherwise the transaction will be inactivate
         * @param type "type" field on the object
         */ async *iterate (type) {
            const db = await c('r');
            const cursor = await db.objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                yield each.value.value;
            }
        },
        /**
         * Iterate over the database of given type (read-write).
         *
         * !!! You MUST NOT do anything asynchronous before the iterate ends
         *
         * !!! Otherwise the transaction will be inactivate
         * @param type "type" field on the object
         */ async *iterate_mutate (type) {
            const cursor = await (await c('rw')).objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                yield {
                    data: each.value.value,
                    delete: ()=>each.delete()
                    ,
                    update: (data)=>each.update((0,___WEBPACK_IMPORTED_MODULE_0__/* .toStore */ .tB)(plugin_id, data))
                };
            }
        }
    };
    async function c(usage) {
        if (usage === 'rw' && (livingTransaction === null || livingTransaction === void 0 ? void 0 : livingTransaction.mode) === 'readonly') invalidateTransaction();
        try {
            await (livingTransaction === null || livingTransaction === void 0 ? void 0 : livingTransaction.store.openCursor());
        } catch  {
            invalidateTransaction();
        }
        if (livingTransaction === undefined) {
            const db = await (0,___WEBPACK_IMPORTED_MODULE_0__/* .createPluginDBAccess */ .HN)();
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


/***/ }),

/***/ 77046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

function createDBAccess(opener) {
    let db = undefined;
    function clean() {
        db = undefined;
    }
    return async ()=>{
        if (true) await __webpack_require__.e(/* import() */ 1545).then(__webpack_require__.bind(__webpack_require__, 31545)).then(({ default: ready  })=>ready()
        );
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ManifestBackground);
        if (db) {
            try {
                // try if the db still open
                db.transaction([], 'readonly', {
                });
                return db;
            } catch  {
                clean();
            }
        }
        db = await opener();
        db.addEventListener('close', clean);
        db.addEventListener('error', clean);
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare) {
    let db = undefined;
    let pendingOpen = undefined;
    async function open() {
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ManifestBackground);
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
        );
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

/***/ 51968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addEthereumChain": () => (/* reexport */ addEthereumChain),
  "call": () => (/* reexport */ call),
  "commitNonce": () => (/* reexport */ commitNonce),
  "confirmRequest": () => (/* reexport */ confirmRequest),
  "connectCustomNetwork": () => (/* reexport */ connectCustomNetwork),
  "connectMaskbook": () => (/* reexport */ connectMaskbook),
  "connectMetaMask": () => (/* reexport */ connectMetaMask),
  "connectWalletConnect": () => (/* reexport */ connectWalletConnect),
  "createConnectionURI": () => (/* reexport */ createConnectionURI),
  "estimateGas": () => (/* reexport */ estimateGas),
  "fetchERC20TokensFromTokenLists": () => (/* reexport */ fetchERC20TokensFromTokenLists),
  "getAccounts": () => (/* reexport */ getAccounts),
  "getBalance": () => (/* reexport */ getBalance),
  "getBlockNumber": () => (/* reexport */ getBlockNumber),
  "getCode": () => (/* reexport */ getCode),
  "getGasPrice": () => (/* reexport */ getGasPrice),
  "getJsonRpcComputed": () => (/* reexport */ getJsonRpcComputed),
  "getNonce": () => (/* reexport */ getNonce),
  "getPastLogs": () => (/* reexport */ getPastLogs),
  "getSendTransactionRpcComputed": () => (/* reexport */ getSendTransactionRpcComputed),
  "getTransactionByHash": () => (/* reexport */ getTransactionByHash),
  "getTransactionCount": () => (/* reexport */ getTransactionCount),
  "getTransactionReceipt": () => (/* reexport */ getTransactionReceipt),
  "personalSign": () => (/* reexport */ personalSign),
  "rejectRequest": () => (/* reexport */ rejectRequest),
  "request": () => (/* reexport */ request),
  "requestSend": () => (/* reexport */ requestSend),
  "requestSendWithConfirmation": () => (/* reexport */ requestSendWithConfirmation),
  "resetAllNonce": () => (/* reexport */ resetAllNonce),
  "resetNonce": () => (/* reexport */ resetNonce),
  "sendTransaction": () => (/* reexport */ sendTransaction),
  "setNonce": () => (/* reexport */ setNonce),
  "sign": () => (/* reexport */ sign),
  "signTransaction": () => (/* reexport */ signTransaction),
  "switchEthereumChain": () => (/* reexport */ switchEthereumChain)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3@1.5.2/node_modules/web3/lib/index.js
var lib = __webpack_require__(90582);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+metamask-extension-provider@3.0.6-20210519045409-1835d4d/node_modules/@dimensiondev/metamask-extension-provider/index.js
var metamask_extension_provider = __webpack_require__(89723);
var metamask_extension_provider_default = /*#__PURE__*/__webpack_require__.n(metamask_extension_provider);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/index.ts + 22 modules
var services = __webpack_require__(19657);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(93975);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/providers/MetaMask.ts






let provider = null;
let web3 = null;
async function onAccountsChanged(accounts) {
    if (settings/* currentProviderSettings.value */.t1.value !== src/* ProviderType.MetaMask */.lP_.MetaMask) return;
    if (!accounts.length) return;
    await (0,services.updateAccount)({
        account: (0,lodash.first)(accounts),
        providerType: src/* ProviderType.MetaMask */.lP_.MetaMask,
        chainId: typeof (provider === null || provider === void 0 ? void 0 : provider.chainId) === 'string' ? Number.parseInt(provider.chainId, 16) : undefined,
        networkType: undefined
    });
}
async function onChainIdChanged(id) {
    if (settings/* currentProviderSettings.value */.t1.value !== src/* ProviderType.MetaMask */.lP_.MetaMask) return;
    // learn more: https://docs.metamask.io/guide/ethereum-provider.html#chain-ids and https://chainid.network/
    const chainId = Number.parseInt(id, 16) || src/* ChainId.Mainnet */.a_e.Mainnet;
    if (settings/* currentChainIdSettings.value */.wU.value === chainId) return;
    await (0,services.updateAccount)({
        chainId,
        networkType: undefined
    });
}
async function onError(error) {
    if (typeof error !== 'string' || !error.toLowerCase().includes('Lost Connection to MetaMask'.toLowerCase())) return;
    if (settings/* currentProviderSettings.value */.t1.value !== src/* ProviderType.MetaMask */.lP_.MetaMask) return;
    await (0,services.resetAccount)({
        providerType: src/* ProviderType.MetaMask */.lP_.MetaMask
    });
}
function createProvider() {
    if (provider) return provider;
    provider = metamask_extension_provider_default()();
    if (!provider) throw new Error('Unable to create in page provider.');
    provider.on('accountsChanged', onAccountsChanged);
    provider.on('chainChanged', onChainIdChanged);
    provider.on('error', onError);
    return provider;
}
// MetaMask provider can be wrapped into web3 lib directly.
// https://github.com/MetaMask/extension-provider
function createWeb3() {
    const provider_ = createProvider();
    if (!web3) web3 = new (lib_default())(provider_);
    else web3.setProvider(provider_);
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
    const web31 = createWeb3();
    try {
        const accounts = await web31.eth.requestAccounts();
        throw accounts;
    } catch (error) {
        const accounts1 = error;
        if (Array.isArray(accounts1)) {
            if (accounts1.length === 0) throw new Error('MetaMask is locked or it has not connected any accounts.');
            else if (accounts1.length > 0) return; // valid
        }
        // Any other error means failed to connect MetaMask
        throw new Error('Failed to connect MetaMask.');
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

;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/providers/Maskbook.ts




//#region providers
const providerPool = new Map();
function Maskbook_createProvider(url) {
    var ref;
    const provider = (ref = providerPool.get(url)) !== null && ref !== void 0 ? ref : new (lib_default()).providers.HttpProvider(url, {
        timeout: 5000,
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
//#endregion
//#region web3 instances
const instancePool = new Map();
const SEED = Math.floor(Math.random() * 4);
function createWeb3Instance(provider) {
    var ref;
    return (ref = instancePool.get(provider.host)) !== null && ref !== void 0 ? ref : (()=>{
        const newInstance = new (lib_default())(provider);
        instancePool.set(provider.host, newInstance);
        return newInstance;
    })();
}
function Maskbook_createWeb3({ url ='' , chainId =settings/* currentChainIdSettings.value */.wU.value , privKeys =[]  } = {
}) {
    url = url || (0,src/* getChainRPC */.NXR)(chainId, SEED);
    const provider = Maskbook_createProvider(url);
    const web3 = createWeb3Instance(provider);
    if (privKeys.length) {
        web3.eth.accounts.wallet.clear();
        privKeys.forEach((k)=>k && k !== '0x' && web3.eth.accounts.wallet.add(k)
        );
    }
    return web3;
}
//#endregion
async function Maskbook_requestAccounts() {
    const wallets = await (0,services.getWallets)();
    const accounts = wallets.filter((x)=>x._private_key_ || x.mnemonic.length
    ).map((y)=>y.address
    );
    return {
        accounts,
        chainId: settings/* currentChainIdSettings.value */.wU.value
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@walletconnect+client@1.4.1/node_modules/@walletconnect/client/dist/cjs/index.js
var cjs = __webpack_require__(60487);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/providers/WalletConnect.ts






let connector = null;
/**
 * Create a new connector and destroy the previous one if exists
 */ async function createConnector() {
    if (connector === null || connector === void 0 ? void 0 : connector.connected) return connector;
    // create a new connector
    connector = new cjs/* default */.Z({
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
//#region rpc
async function signPersonalMessage(data, address, password) {
    if (!connector) throw new Error('Connection Lost.');
    return await connector.signPersonalMessage([
        data,
        address,
        password
    ]);
}
async function sendCustomRequest(payload) {
    if (!connector) throw new Error('Connection Lost.');
    return await connector.sendCustomRequest(payload);
}
//#endregion
// Wrap promise as PromiEvent because WalletConnect returns transaction hash only
// docs: https://docs.walletconnect.org/client-api
function WalletConnect_createWeb3({ chainId =settings/* currentChainIdSettings.value */.wU.value  } = {
}) {
    return Maskbook_createWeb3({
        chainId
    });
}
//#endregion
/**
 * Request accounts from WalletConnect
 * @param timeout
 */ async function WalletConnect_requestAccounts() {
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
    if (settings/* currentProviderSettings.value */.t1.value !== src/* ProviderType.WalletConnect */.lP_.WalletConnect) return;
    await (0,services.updateAccount)({
        name: (ref = connector.peerMeta) === null || ref === void 0 ? void 0 : ref.name,
        account: (0,lodash.first)(connector.accounts),
        chainId: connector.chainId,
        providerType: src/* ProviderType.WalletConnect */.lP_.WalletConnect,
        networkType: undefined
    });
};
const onDisconnect = async (error)=>{
    if (connector === null || connector === void 0 ? void 0 : connector.connected) await connector.killSession();
    connector = null;
    if (settings/* currentProviderSettings.value */.t1.value !== src/* ProviderType.WalletConnect */.lP_.WalletConnect) return;
    await (0,services.resetAccount)({
        providerType: src/* ProviderType.WalletConnect */.lP_.WalletConnect
    });
};

;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/web3.ts






function web3_createWeb3({ chainId =settings/* currentChainIdSettings.value */.wU.value , providerType =settings/* currentProviderSettings.value */.t1.value , privKeys =[] ,  } = {
}) {
    switch(providerType){
        case src/* ProviderType.Maskbook */.lP_.Maskbook:
            return Maskbook_createWeb3({
                chainId,
                privKeys
            });
        case src/* ProviderType.MetaMask */.lP_.MetaMask:
            return createWeb3();
        case src/* ProviderType.WalletConnect */.lP_.WalletConnect:
            return WalletConnect_createWeb3({
                chainId
            });
        case src/* ProviderType.CustomNetwork */.lP_.CustomNetwork:
            throw new Error('To be implemented.');
        default:
            (0,esm/* unreachable */.t1)(providerType);
    }
}

;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/network.ts


async function getAccounts(overrides) {
    return request({
        method: src/* EthereumMethodType.ETH_ACCOUNTS */.W8g.ETH_ACCOUNTS
    }, overrides);
}
async function getCode(address, overrides) {
    return request({
        method: src/* EthereumMethodType.ETH_GET_CODE */.W8g.ETH_GET_CODE,
        params: [
            address,
            'latest'
        ]
    }, overrides);
}
async function getGasPrice(overrides) {
    return request({
        method: src/* EthereumMethodType.ETH_GAS_PRICE */.W8g.ETH_GAS_PRICE
    }, overrides);
}
async function getBlockNumber(overrides) {
    const blockNumber = await request({
        method: src/* EthereumMethodType.ETH_BLOCK_NUMBER */.W8g.ETH_BLOCK_NUMBER
    }, overrides);
    return Number.parseInt(blockNumber, 16) || 0;
}
async function getBalance(address, overrides) {
    return request({
        method: src/* EthereumMethodType.ETH_GET_BALANCE */.W8g.ETH_GET_BALANCE,
        params: [
            address,
            'latest'
        ]
    }, overrides);
}
async function getTransactionByHash(hash, overrides) {
    return request({
        method: src/* EthereumMethodType.ETH_GET_TRANSACTION_BY_HASH */.W8g.ETH_GET_TRANSACTION_BY_HASH,
        params: [
            hash
        ]
    }, overrides);
}
async function getTransactionReceipt(hash, overrides) {
    return request({
        method: src/* EthereumMethodType.ETH_GET_TRANSACTION_RECEIPT */.W8g.ETH_GET_TRANSACTION_RECEIPT,
        params: [
            hash
        ]
    }, overrides);
}
async function getTransactionCount(address, overrides) {
    const count = await request({
        method: src/* EthereumMethodType.ETH_GET_TRANSACTION_COUNT */.W8g.ETH_GET_TRANSACTION_COUNT,
        params: [
            address,
            'latest'
        ]
    }, overrides);
    return Number.parseInt(count, 16) || 0;
}
async function call(config, overrides) {
    return request({
        method: src/* EthereumMethodType.ETH_CALL */.W8g.ETH_CALL,
        params: [
            config,
            'latest'
        ]
    }, overrides);
}
async function estimateGas(config, overrides) {
    const gas = await request({
        method: src/* EthereumMethodType.ETH_ESTIMATE_GAS */.W8g.ETH_ESTIMATE_GAS,
        params: [
            config
        ]
    }, overrides);
    return Number.parseInt(gas, 16) || 0;
}
async function sign(dataToSign, address, overrides) {
    return request({
        method: src/* EthereumMethodType.ETH_SIGN */.W8g.ETH_SIGN,
        params: [
            dataToSign,
            address
        ]
    }, overrides);
}
async function personalSign(dataToSign, address, password, overrides) {
    return request({
        method: src/* EthereumMethodType.PERSONAL_SIGN */.W8g.PERSONAL_SIGN,
        params: [
            dataToSign,
            address,
            password
        ].filter((x)=>typeof x !== 'undefined'
        )
    }, overrides);
}
async function addEthereumChain(chainDetailed, address, overrides) {
    return request({
        method: src/* EthereumMethodType.WALLET_ADD_ETHEREUM_CHAIN */.W8g.WALLET_ADD_ETHEREUM_CHAIN,
        params: [
            chainDetailed,
            address
        ].filter(Boolean)
    }, overrides);
}
async function switchEthereumChain(chainId, overrides) {
    return request({
        method: src/* EthereumMethodType.WALLET_SWITCH_ETHEREUM_CHAIN */.W8g.WALLET_SWITCH_ETHEREUM_CHAIN,
        params: [
            {
                chainId: `0x${chainId.toString(16)}`
            }, 
        ]
    }, overrides);
}
async function signTransaction(config, overrides) {
    return request({
        method: src/* EthereumMethodType.ETH_SIGN_TRANSACTION */.W8g.ETH_SIGN_TRANSACTION,
        params: [
            config
        ]
    }, overrides);
}
async function sendTransaction(config, overrides) {
    return request({
        method: src/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8g.ETH_SEND_TRANSACTION,
        params: [
            config
        ]
    }, overrides);
}
async function getPastLogs(config, overrides) {
    return new Promise((resolve, reject)=>request({
            method: src/* EthereumMethodType.ETH_GET_LOGS */.W8g.ETH_GET_LOGS,
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
    contine() {
        var _obj, ref;
        if (!this.locked) (ref = _obj = this.tasks.shift()) === null || ref === void 0 ? void 0 : ref.call(_obj);
    }
    async getRemoteNonce() {
        return new Promise(async (resolve, reject)=>{
            const callback = (e, nonce)=>{
                if (e) reject(e);
                else resolve(nonce !== null && nonce !== void 0 ? nonce : 0);
                this.unlock();
                this.contine();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    callback(null, await getTransactionCount(this.address));
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
                this.contine();
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
    const address1 = dist.EthereumAddress.checksumAddress(address_);
    if (!cache.has(address1)) cache.set(address1, new NonceManager(address1));
    return cache.get(address1).getNonce();
}
/**
 * Commit to a new nonce only call when transaction succeed
 * @param address the account address
 */ async function commitNonce(address_) {
    const address1 = dist.EthereumAddress.checksumAddress(address_);
    if (!cache.has(address1)) cache.set(address1, new NonceManager(address1));
    return setNonce(address1, await cache.get(address1).getNonce() + 1);
}
/**
 * Set a new nonce regardless the old one
 * @param address the account address
 * @param nonce the new nonce
 */ function setNonce(address_, nonce) {
    const address1 = dist.EthereumAddress.checksumAddress(address_);
    if (!cache.has(address1)) cache.set(address1, new NonceManager(address1));
    return cache.get(address1).setNonce(nonce);
}
/**
 * Sync local nonce to remote one (depend on your current node)
 * @param address the account address
 */ function resetNonce(address_) {
    const address1 = dist.EthereumAddress.checksumAddress(address_);
    if (!cache.has(address1)) cache.set(address1, new NonceManager(address1));
    return cache.get(address1).resetNonce();
}
/**
 * Sync all nonces
 */ async function resetAllNonce() {
    await Promise.all(Array.from(cache.values()).map((m)=>m.resetNonce()
    ));
}

// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(71299);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/utils/native-rpc/index.ts + 2 modules
var native_rpc = __webpack_require__(3270);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/send.ts















function parseGasPrice(price) {
    return Number.parseInt(price !== null && price !== void 0 ? price : '0x0', 16);
}
function getChainIdFromPayload(payload) {
    switch(payload.method){
        // here are methods that contracts may emit
        case src/* EthereumMethodType.ETH_CALL */.W8g.ETH_CALL:
        case src/* EthereumMethodType.ETH_ESTIMATE_GAS */.W8g.ETH_ESTIMATE_GAS:
        case src/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8g.ETH_SEND_TRANSACTION:
            const config = (0,lodash.first)(payload.params);
            return typeof (config === null || config === void 0 ? void 0 : config.chainId) === 'string' ? Number.parseInt(config.chainId, 16) || undefined : undefined;
        default:
            return undefined;
    }
}
function handleRecentTransaction(account, response) {
    const hash = response === null || response === void 0 ? void 0 : response.result;
    if (typeof hash !== 'string') return;
    if (!/^0x([\dA-Fa-f]{64})$/.test(hash)) return;
    messages/* WalletRPC.addRecentTransaction */.V.addRecentTransaction(account, hash);
}
async function handleNonce(account, error, response) {
    const error_ = error !== null && error !== void 0 ? error : response === null || response === void 0 ? void 0 : response.error;
    var ref;
    const message = (ref = error_ === null || error_ === void 0 ? void 0 : error_.message) !== null && ref !== void 0 ? ref : '';
    if (!dist.EthereumAddress.isValid(account)) return;
    if (/\bnonce\b/im.test(message) && /\b(low|high)\b/im.test(message)) resetNonce(account);
    else commitNonce(account);
}
/**
 * This API is only used internally. Please use requestSend instead in order to share the same payload id globally.
 * @param payload
 * @param callback
 * @param sendOverrides
 */ async function INTERNAL_send(payload, callback, { chainId =settings/* currentChainIdSettings.value */.wU.value , account =settings/* currentAccountSettings.value */.aK.value , providerType =settings/* currentProviderSettings.value */.t1.value  } = {
}) {
    if (false) {}
    const wallet = providerType === src/* ProviderType.Maskbook */.lP_.Maskbook ? await (0,services.getWallet)() : null;
    var ref;
    const web3 = web3_createWeb3({
        chainId: (ref = getChainIdFromPayload(payload)) !== null && ref !== void 0 ? ref : chainId,
        privKeys: (wallet === null || wallet === void 0 ? void 0 : wallet._private_key_) ? [
            wallet._private_key_
        ] : [],
        providerType
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
            case src/* ProviderType.Maskbook */.lP_.Maskbook:
                callback(null, {
                    jsonrpc: '2.0',
                    id: payload.id,
                    result: await web3.eth.sign(data, address)
                });
                break;
            case src/* ProviderType.MetaMask */.lP_.MetaMask:
                try {
                    await ensureConnectedAndUnlocked();
                } catch (error) {
                    callback(error);
                    break;
                }
                provider === null || provider === void 0 ? void 0 : provider.send({
                    ...payload,
                    params: [
                        data,
                        address,
                        ''
                    ]
                }, callback);
                break;
            case src/* ProviderType.WalletConnect */.lP_.WalletConnect:
                callback(null, {
                    jsonrpc: '2.0',
                    id: payload.id,
                    result: await signPersonalMessage(data, address, '')
                });
                break;
            case src/* ProviderType.CustomNetwork */.lP_.CustomNetwork:
                throw new Error('To be implemented.');
            default:
                (0,esm/* safeUnreachable */.P)(providerType);
        }
    }
    async function sendTransaction() {
        const [config] = payload.params;
        // add nonce
        if (providerType === src/* ProviderType.Maskbook */.lP_.Maskbook && config.from) config.nonce = await getNonce(config.from);
        // add gas margin
        if (config.gas) config.gas = `0x${(0,src/* addGasMargin */.buq)(config.gas).toString(16)}`;
        // pricing transaction
        const isGasPriceValid = parseGasPrice(config.gasPrice) > 0;
        const isEIP1159Valid = parseGasPrice(config.maxFeePerGas) > 0 && parseGasPrice(config.maxPriorityFeePerGas) > 0;
        if (utils/* Flags.EIP1159_enabled */.vU.EIP1159_enabled && (0,src/* isEIP1159Supported */.lQR)(chainId) && !isGasPriceValid && !isEIP1159Valid) {
            throw new Error('To be implemented.');
        } else {
            config.gasPrice = await getGasPrice();
        }
        // send the transaction
        switch(providerType){
            case src/* ProviderType.Maskbook */.lP_.Maskbook:
                const _private_key_ = wallet === null || wallet === void 0 ? void 0 : wallet._private_key_;
                if (!wallet || !_private_key_) throw new Error('Unable to sign transaction.');
                // send the signed transaction
                const signedTransaction = await web3.eth.accounts.signTransaction(config, _private_key_);
                provider === null || provider === void 0 ? void 0 : provider.send({
                    ...payload,
                    method: src/* EthereumMethodType.ETH_SEND_RAW_TRANSACTION */.W8g.ETH_SEND_RAW_TRANSACTION,
                    params: [
                        signedTransaction.rawTransaction
                    ]
                }, (error, response)=>{
                    callback(error, response);
                    handleNonce(account, error, response);
                    handleRecentTransaction(account, response);
                });
                break;
            case src/* ProviderType.MetaMask */.lP_.MetaMask:
                try {
                    await ensureConnectedAndUnlocked();
                } catch (error) {
                    callback(error);
                    break;
                }
                provider === null || provider === void 0 ? void 0 : provider.send(payload, (error, response)=>{
                    callback(error, response);
                    handleRecentTransaction(account, response);
                });
                break;
            case src/* ProviderType.WalletConnect */.lP_.WalletConnect:
                const response = await sendCustomRequest(payload);
                callback(null, response);
                handleRecentTransaction(account, response);
                break;
            case src/* ProviderType.CustomNetwork */.lP_.CustomNetwork:
                throw new Error('To be implemented.');
            default:
                (0,esm/* safeUnreachable */.P)(providerType);
        }
    }
    try {
        switch(payload.method){
            case src/* EthereumMethodType.PERSONAL_SIGN */.W8g.PERSONAL_SIGN:
                await personalSign();
                break;
            case src/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8g.ETH_SEND_TRANSACTION:
                await sendTransaction();
                break;
            default:
                provider.send(payload, callback);
                break;
        }
    } catch (error) {
        callback(error);
    }
}
/**
 * This API redirects requests to the native app.
 * @param payload
 * @param callback
 * @param sendOverrides
 */ async function INTERNAL_nativeSend(payload, callback, { account =settings/* currentAccountSettings.value */.aK.value  } = {
}) {
    try {
        const response = await (native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.send */.Nz.api.send(payload));
        callback(null, response);
        if (payload.method === src/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8g.ETH_SEND_TRANSACTION) {
            handleNonce(account, null, response);
            handleRecentTransaction(account, response);
        }
    } catch (error) {
        if (error instanceof Error) {
            callback(error, undefined);
            handleNonce(account, error, undefined);
        }
        console.error('internal native send error', error);
    }
}

// EXTERNAL MODULE: ./src/extension/background-script/HelperService/index.ts
var HelperService = __webpack_require__(81951);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/request.ts








let id = 0;
const UNCONFIRMED_CALLBACK_MAP = new Map();
const RISK_METHOD_LIST = [
    src/* EthereumMethodType.ETH_SIGN */.W8g.ETH_SIGN,
    src/* EthereumMethodType.PERSONAL_SIGN */.W8g.PERSONAL_SIGN,
    src/* EthereumMethodType.ETH_SIGN_TYPED_DATA */.W8g.ETH_SIGN_TYPED_DATA,
    src/* EthereumMethodType.ETH_DECRYPT */.W8g.ETH_DECRYPT,
    src/* EthereumMethodType.ETH_GET_ENCRYPTION_PUBLIC_KEY */.W8g.ETH_GET_ENCRYPTION_PUBLIC_KEY,
    src/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8g.ETH_SEND_TRANSACTION, 
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
async function request(requestArguments, overrides) {
    return new Promise(async (resolve, reject)=>{
        requestSend({
            jsonrpc: '2.0',
            id,
            params: [],
            ...requestArguments
        }, (error, response)=>{
            if (error || (response === null || response === void 0 ? void 0 : response.error)) reject(error !== null && error !== void 0 ? error : response === null || response === void 0 ? void 0 : response.error);
            else resolve(response === null || response === void 0 ? void 0 : response.result);
        }, overrides);
    });
}
async function requestSend(payload, callback, overrides) {
    id += 1;
    const { providerType =settings/* currentProviderSettings.value */.t1.value  } = overrides !== null && overrides !== void 0 ? overrides : {
    };
    const payload_ = {
        ...payload,
        id
    };
    if (utils/* Flags.v2_enabled */.vU.v2_enabled && isRiskMethod(payload_.method) && providerType === src/* ProviderType.Maskbook */.lP_.Maskbook) {
        try {
            await messages/* WalletRPC.pushUnconfirmedRequest */.V.pushUnconfirmedRequest(payload_);
        } catch (error) {
            callback(error instanceof Error ? error : new Error('Failed to add request.'));
            return;
        }
        UNCONFIRMED_CALLBACK_MAP.set(payload_.id, callback);
        return;
    }
    getSendMethod()(payload_, callback, overrides);
}
async function requestSendWithConfirmation(payload, callback, overrides) {
    requestSend(payload, callback, overrides);
    (0,HelperService.openPopupsWindow)();
}
async function confirmRequest(payload) {
    const pid = getPayloadId(payload);
    if (!pid) return;
    var ref;
    getSendMethod()(payload, (ref = UNCONFIRMED_CALLBACK_MAP.get(pid)) !== null && ref !== void 0 ? ref : lodash.noop);
    await messages/* WalletRPC.deleteUnconfirmedRequest */.V.deleteUnconfirmedRequest(payload);
    UNCONFIRMED_CALLBACK_MAP.delete(pid);
}
async function rejectRequest(payload) {
    const pid = getPayloadId(payload);
    if (!pid) return;
    await messages/* WalletRPC.deleteUnconfirmedRequest */.V.deleteUnconfirmedRequest(payload);
    UNCONFIRMED_CALLBACK_MAP.delete(pid);
}

;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/providers/CustomNetwork.ts

function CustomNetwork_createWeb3() {
    throw new Error('To be implemented.');
}
async function CustomNetwork_requestAccounts() {
    return {
        accounts: [],
        chainId: src/* ChainId.Mainnet */.a_e.Mainnet
    };
}

;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/provider.ts





//#region connect WalletConnect
// step 1:
// Generate the connection URI and render a QRCode for scanning by the user
async function createConnectionURI() {
    return (await createConnector()).uri;
}
// step2:
// If user confirmed the request we will receive the 'connect' event
async function connectWalletConnect() {
    const connector = await createConnectorIfNeeded();
    if (connector.connected) return {
        account: (0,lodash.first)(connector.accounts),
        chainId: connector.chainId
    };
    const { accounts , chainId  } = await WalletConnect_requestAccounts();
    return {
        account: (0,lodash.first)(accounts),
        chainId
    };
}
//#endregion
async function connectMetaMask() {
    const { accounts , chainId  } = await requestAccounts();
    return {
        account: (0,lodash.first)(accounts),
        chainId
    };
}
async function connectMaskbook() {
    const { accounts , chainId  } = await Maskbook_requestAccounts();
    return {
        account: (0,lodash.first)(accounts),
        chainId
    };
}
async function connectCustomNetwork() {
    const { accounts , chainId  } = await CustomNetwork_requestAccounts();
    return {
        account: (0,lodash.first)(accounts),
        chainId
    };
}

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
 */ async function fetch1inchERC20TokensFromTokenList(url, chainId = src/* ChainId.Mainnet */.a_e.Mainnet) {
    const tokens = (await fetchTokenList(url)).tokens;
    const _tokens = Object.values(tokens);
    return _tokens.filter((x)=>x.address.toLowerCase() !== NATIVE_TOKEN_ADDRESS_IN_1INCH
    ).map((x)=>({
            type: src/* EthereumTokenType.ERC20 */.Drc.ERC20,
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
 */ async function fetchCommonERC20TokensFromTokenList(url, chainId = src/* ChainId.Mainnet */.a_e.Mainnet) {
    return (await fetchTokenList(url)).tokens.filter((x)=>{
        var ref;
        return x.chainId === chainId && ( true ? ((ref = (0,src/* getChainDetailed */.$Gt)(chainId)) === null || ref === void 0 ? void 0 : ref.network) === 'mainnet' : 0);
    }).map((x)=>({
            type: src/* EthereumTokenType.ERC20 */.Drc.ERC20,
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
 */ async function fetchERC20TokensFromTokenList(urls, chainId = src/* ChainId.Mainnet */.a_e.Mainnet) {
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
 */ const fetchERC20TokensFromTokenLists = (0,esm/* memoizePromise */.J3)(async (urls, chainId = src/* ChainId.Mainnet */.a_e.Mainnet)=>{
    const tokens = (await fetchERC20TokensFromTokenList(urls, chainId)).sort((a, b)=>b.weight - a.weight
    ).flatMap((x)=>x.tokens
    );
    const groupedToken = (0,lodash.groupBy)(tokens, (x)=>x.address.toLowerCase()
    );
    return Object.values(groupedToken).map((tokenList)=>{
        const logoURIs = tokenList.map((token)=>token.logoURI
        ).flat().filter((token)=>!!token
        );
        return {
            ...tokenList[0],
            ...{
                address: (0,src/* formatEthereumAddress */.j8w)(tokenList[0].address)
            },
            ...{
                logoURI: logoURIs
            }
        };
    });
}, (urls, chainId)=>`${chainId}-${urls.join()}`
);

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-eth-abi@1.5.2/node_modules/web3-eth-abi/lib/index.js
var web3_eth_abi_lib = __webpack_require__(24278);
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/rpc/abi_list.json
const abi_list_namespaceObject = JSON.parse('[{"name":"approve","parameters":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}]},{"name":"transfer","parameters":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}]},{"name":"transferFrom","parameters":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}]}]');
;// CONCATENATED MODULE: ./src/extension/background-script/EthereumServices/rpc/index.ts




// fix the type eror
const coder = web3_eth_abi_lib;
const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
const ABI_LIST_WITH_SIGNATURE = abi_list_namespaceObject.map((x)=>({
        ...x,
        signature: coder.encodeFunctionSignature(`${x.name}(${x.parameters.join(',')})`)
    })
);
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
    if (!to) return ADDRESS_ZERO;
    if (isEmptyHex(to)) return ADDRESS_ZERO;
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
async function getJsonRpcComputed(payload) {
    switch(payload.method){
        // sign
        case src/* EthereumMethodType.ETH_SIGN */.W8g.ETH_SIGN:
        case src/* EthereumMethodType.PERSONAL_SIGN */.W8g.PERSONAL_SIGN:
            return {
                type: src/* EthereumRpcType.SIGN */.Wvq.SIGN,
                to: payload.params[1],
                data: payload.params[0]
            };
        case src/* EthereumMethodType.ETH_SIGN_TYPED_DATA */.W8g.ETH_SIGN_TYPED_DATA:
            return {
                type: src/* EthereumRpcType.SIGN_TYPED_DATA */.Wvq.SIGN_TYPED_DATA,
                to: payload.params[1],
                data: payload.params[0]
            };
        // decrypt
        case src/* EthereumMethodType.ETH_DECRYPT */.W8g.ETH_DECRYPT:
            return {
                type: src/* EthereumRpcType.ETH_DECRYPT */.Wvq.ETH_DECRYPT,
                to: payload.params[1],
                secret: payload.params[0]
            };
        case src/* EthereumMethodType.ETH_GET_ENCRYPTION_PUBLIC_KEY */.W8g.ETH_GET_ENCRYPTION_PUBLIC_KEY:
            return {
                type: src/* EthereumRpcType.ETH_GET_ENCRYPTION_PUBLIC_KEY */.Wvq.ETH_GET_ENCRYPTION_PUBLIC_KEY,
                account: payload.params[0]
            };
        // asset
        case src/* EthereumMethodType.WATCH_ASSET */.W8g.WATCH_ASSET:
        case src/* EthereumMethodType.WATCH_ASSET_LEGACY */.W8g.WATCH_ASSET_LEGACY:
            return {
                type: src/* EthereumRpcType.WATCH_ASSET */.Wvq.WATCH_ASSET,
                asset: payload.params[0]
            };
        // wallet
        case src/* EthereumMethodType.WALLET_SWITCH_ETHEREUM_CHAIN */.W8g.WALLET_SWITCH_ETHEREUM_CHAIN:
            return {
                type: src/* EthereumRpcType.WALLET_SWITCH_ETHEREUM_CHAIN */.Wvq.WALLET_SWITCH_ETHEREUM_CHAIN,
                chain: (0,src/* getChainDetailedCAIP */.EXI)(Number.parseInt(payload.params[0], 16))
            };
        case src/* EthereumMethodType.WALLET_ADD_ETHEREUM_CHAIN */.W8g.WALLET_ADD_ETHEREUM_CHAIN:
            return {
                type: src/* EthereumRpcType.WALLET_SWITCH_ETHEREUM_CHAIN */.Wvq.WALLET_SWITCH_ETHEREUM_CHAIN,
                chain: payload.params[0]
            };
        // contract interation
        case src/* EthereumMethodType.ETH_SEND_TRANSACTION */.W8g.ETH_SEND_TRANSACTION:
            return getSendTransactionRpcComputed(payload.params[0]);
        default:
            return;
    }
}
async function getSendTransactionRpcComputed(tx) {
    const data = getData(tx);
    const to = getTo(tx);
    const signature = getFunctionSignature(tx);
    const parameters = getFunctionParameters(tx);
    if (data) {
        // contract interaction
        const abi = ABI_LIST_WITH_SIGNATURE.find((x)=>x.signature === signature
        );
        if (abi) {
            try {
                return {
                    type: src/* EthereumRpcType.CONTRACT_INTERACTION */.Wvq.CONTRACT_INTERACTION,
                    name: abi.name,
                    parameters: coder.decodeParameters(abi.parameters, parameters !== null && parameters !== void 0 ? parameters : ''),
                    _tx: tx
                };
            } catch  {
            // do nothing
            }
        }
        // contract deployment
        if (to === ADDRESS_ZERO) {
            return {
                type: src/* EthereumRpcType.CONTRACT_DEPLOYMENT */.Wvq.CONTRACT_DEPLOYMENT,
                code: data,
                _tx: tx
            };
        }
    }
    if (to) {
        const code = await getCode(to);
        // send ether
        if (isEmptyHex(code)) {
            return {
                type: src/* EthereumRpcType.SEND_ETHER */.Wvq.SEND_ETHER,
                _tx: tx
            };
        } else {
            return {
                type: src/* EthereumRpcType.CONTRACT_INTERACTION */.Wvq.CONTRACT_INTERACTION,
                name: 'Unknown',
                _tx: tx
            };
        }
    }
    return;
}

;// CONCATENATED MODULE: ./src/extension/background-script/EthereumService.ts








/***/ }),

/***/ 81951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStorage": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_3__.c),
/* harmony export */   "setStorage": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_3__.p),
/* harmony export */   "resolveTCOLink": () => (/* binding */ resolveTCOLink),
/* harmony export */   "fetch": () => (/* binding */ fetch),
/* harmony export */   "fetchJson": () => (/* binding */ fetchJson),
/* harmony export */   "saveAsFileFromUrl": () => (/* binding */ saveAsFileFromUrl),
/* harmony export */   "saveAsFileFromBuffer": () => (/* binding */ saveAsFileFromBuffer),
/* harmony export */   "requestBrowserPermission": () => (/* binding */ requestBrowserPermission),
/* harmony export */   "queryPermission": () => (/* binding */ queryPermission),
/* harmony export */   "createNewWindowAndPasteShareContent": () => (/* binding */ createNewWindowAndPasteShareContent),
/* harmony export */   "openPopupsWindow": () => (/* binding */ openPopupsWindow),
/* harmony export */   "openInternalPage": () => (/* binding */ openInternalPage)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4039.js
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77287);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43670);
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9950);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62285);
=======
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37186);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45513);
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37146);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4331);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1981.js




const cache = new Map();
const resolveTCOLink = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .memoizePromise */ .J3)(async (u)=>{
    if (!u.startsWith('https://t.co/')) return null;
    if (cache.has(u)) return cache.get(u);
    const res = await globalThis.fetch(u, {
        redirect: 'error',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
    });
    const text = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const dom = doc.querySelector('noscript > meta');
    if (!dom) return null;
    const [, url] = dom.content.split('URL=');
    if (url) cache.set(u, url);
    return url !== null && url !== void 0 ? url : null;
}, (x)=>x
);
function fetch(url) {
    return globalThis.fetch(url).then((x)=>x.blob()
    );
}
function fetchJson(url) {
    return globalThis.fetch(url).then((x)=>x.json()
    );
}
function saveAsFileFromUrl(url, fileName = '') {
    browser.downloads.download({
        url,
        filename: fileName,
        saveAs: true
    });
}
function saveAsFileFromBuffer(file, mimeType, fileName = '') {
    const blob = new Blob([
        file
    ], {
        type: mimeType
    });
    const url = URL.createObjectURL(blob);
    saveAsFileFromUrl(url, fileName);
}
async function requestBrowserPermission(permission) {
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
        url: (0,_popups__WEBPACK_IMPORTED_MODULE_2__/* .constructRequestPermissionURL */ .km)(permission)
    });
    return new Promise((resolve)=>{
        browser.windows.onRemoved.addListener(function listener(windowID) {
            if (windowID === popup.id) {
                resolve(browser.permissions.contains(permission));
                browser.windows.onRemoved.removeListener(listener);
            }
        });
    });
}
function queryPermission(permission) {
    return browser.permissions.contains(permission);
}
async function createNewWindowAndPasteShareContent(SNSIdentifier, post) {
    var _utils, ref;
    const url = (ref = (_utils = (await (0,_social_network__WEBPACK_IMPORTED_MODULE_1__.getNetworkWorker)(SNSIdentifier)).utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, post);
    if (!url) return;
    browser.tabs.create({
        active: true,
        url: url.toString()
    });
}
function openPopupsWindow(route) {
    if (!!navigator.userAgent.match(/Chrome/)) {
        window.open(browser.runtime.getURL(`popups.html#${route !== null && route !== void 0 ? route : _popups__WEBPACK_IMPORTED_MODULE_2__/* .PopupRoutes.Wallet */ .mZ.Wallet}`), '', 'resizable,scrollbars,status,width=310,height=540');
    } else {
        browser.windows.create({
            url: browser.runtime.getURL(`popups.html#${route !== null && route !== void 0 ? route : _popups__WEBPACK_IMPORTED_MODULE_2__/* .PopupRoutes.Wallet */ .mZ.Wallet}`),
            width: 310,
            height: 540,
            type: 'popup'
        });
    }
}
function openInternalPage(path) {
    browser.tabs.create({
        active: true,
        url: browser.runtime.getURL(path)
    });
}


/***/ }),

/***/ 4331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ getStorage),
/* harmony export */   "p": () => (/* binding */ setStorage)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28532);


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
        var _obj, ref;
        if (!this.locked) (ref = _obj = this.tasks.shift()) === null || ref === void 0 ? void 0 : ref.call(_obj);
    }
    async getStorage(key) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e, storage)=>{
                if (e) reject(e);
                else resolve(storage);
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    const stored = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .timeout */ .Vs)(browser.storage.local.get(key), 3000, `Get ${key} timeout.`);
                    callback(null, (stored !== null && stored !== void 0 ? stored : {
                    })[key]);
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
                    await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .timeout */ .Vs)(browser.storage.local.set({
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
async function getStorage(key) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    const value = await storage.getStorage(key);
    return value;
}
async function setStorage(key, value, options = {
    howToUpdate: 'replace'
}) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    var ref;
    if (options.howToUpdate === 'merge') value = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.merge)((ref = await storage.getStorage(key)) !== null && ref !== void 0 ? ref : {
    }, value);
    return storage.setStorage(key, value);
}


/***/ }),

/***/ 37146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uE": () => (/* binding */ PermissionAwareRedirectOf),
  "mZ": () => (/* binding */ PopupRoutes),
  "km": () => (/* reexport */ constructRequestPermissionURL),
  "qy": () => (/* reexport */ constructSignRequestURL),
  "WQ": () => (/* binding */ getRouteURLWithNoParam)
});

;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/utils.ts

function constructRequestPermissionURL(permission) {
    const { origins =[] , permissions =[]  } = permission;
    const params = new URLSearchParams();
    for (const each of origins)params.append('origins', each);
    for (const each1 of permissions)params.append('permissions', each1);
    return `${getRouteURLWithNoParam(PopupRoutes.RequestPermission)}?${params.toString()}`;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/extension/popups/SignRequest/utils.ts


function constructSignRequestURL(request) {
    return dist_default()(getRouteURLWithNoParam(PopupRoutes.SignRequest), {
        message: request.message,
        id: request.requestID
    });
}

;// CONCATENATED MODULE: ./src/extension/popups/index.tsx
var PopupRoutes;
(function(PopupRoutes1) {
    PopupRoutes1["Root"] = '/';
    PopupRoutes1["Wallet"] = '/wallet';
    PopupRoutes1["ImportWallet"] = '/wallet/import';
    PopupRoutes1["AddDeriveWallet"] = '/wallet/addDerive';
    PopupRoutes1["WalletSettings"] = '/wallet/settings';
    PopupRoutes1["WalletRename"] = '/wallet/rename';
    PopupRoutes1["DeleteWallet"] = '/wallet/delete';
    PopupRoutes1["CreateWallet"] = '/wallet/create';
    PopupRoutes1["SelectWallet"] = '/wallet/select';
    PopupRoutes1["BackupWallet"] = '/wallet/backup';
    PopupRoutes1["AddToken"] = '/wallet/addToken';
    PopupRoutes1["WalletSignRequest"] = '/wallet/sign';
    PopupRoutes1["GasSetting"] = '/wallet/gas';
    PopupRoutes1["TokenDetail"] = '/wallet/tokenDetail';
    PopupRoutes1["Personas"] = '/personas';
    PopupRoutes1["PermissionAwareRedirect"] = '/redirect';
    PopupRoutes1["RequestPermission"] = '/request-permission';
    PopupRoutes1["ThirdPartyRequestPermission"] = '/3rd-request-permission';
    PopupRoutes1["SignRequest"] = '/sign-request';
})(PopupRoutes || (PopupRoutes = {
}));
function getRouteURLWithNoParam(kind) {
    return browser.runtime.getURL(`/popups.html#${kind}`);
}
function PermissionAwareRedirectOf(url, context) {
    return getRouteURLWithNoParam(PopupRoutes.PermissionAwareRedirect) + `?url=${encodeURIComponent(url)}&context=${context}`;
}




/***/ }),

/***/ 22470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hF": () => (/* binding */ resolvePortfolioDataProviderName),
/* harmony export */   "xe": () => (/* binding */ resolveDebankTransactionType),
/* harmony export */   "dW": () => (/* binding */ resolveDebankChainName),
/* harmony export */   "mJ": () => (/* binding */ resolveZerionAssetsScopeName),
/* harmony export */   "Rw": () => (/* binding */ resolveZerionTransactionsScopeName),
/* harmony export */   "uA": () => (/* binding */ resolveChainByScope)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);


function resolvePortfolioDataProviderName(provider) {
    switch(provider){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .PortfolioProvider.ZERION */ .g38.ZERION:
            return 'Zerion';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .PortfolioProvider.DEBANK */ .g38.DEBANK:
            return 'Debank';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(provider);
    }
}
function resolveDebankTransactionType(category) {
    switch(category){
        case 'send':
            return _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .FilterTransactionType.SEND */ .slS.SEND;
        case 'receive':
            return _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .FilterTransactionType.RECEIVE */ .slS.RECEIVE;
        default:
            return _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .FilterTransactionType.ALL */ .slS.ALL;
    }
}
function resolveDebankChainName(network) {
    switch(network){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .tds.Ethereum:
            return 'eth';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .tds.Binance:
            return 'bsc';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .tds.Polygon:
            return 'matic';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .tds.Arbitrum:
            return 'arbitrum';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.xDai */ .tds.xDai:
            return 'xdai';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(network);
            return '';
    }
}
function resolveZerionAssetsScopeName(network) {
    switch(network){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .tds.Ethereum:
            return 'assets';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .tds.Binance:
            return 'bsc-assets';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .tds.Polygon:
            return 'polygon-assets';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .tds.Arbitrum:
            return 'arbitrum-assets';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.xDai */ .tds.xDai:
            return 'xdai-assets';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(network);
            return '';
    }
}
function resolveZerionTransactionsScopeName(network) {
    switch(network){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .tds.Ethereum:
            return 'transactions';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .tds.Binance:
            return '';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .tds.Polygon:
            return '';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .tds.Arbitrum:
            return '';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.xDai */ .tds.xDai:
            return '';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(network);
            return '';
    }
}
function resolveChainByScope(scope) {
    switch(scope){
        case 'assets':
            return {
                chain: 'eth',
                chainId: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_e.Mainnet
            };
        case 'bsc-assets':
            return {
                chain: 'bsc',
                chainId: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_e.BSC
            };
        case 'polygon-assets':
            return {
                chain: 'matic',
                chainId: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_e.Matic
            };
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(scope);
            return {
                chain: 'unknown'
            };
    }
}


/***/ }),

/***/ 19657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addERC1155Token": () => (/* reexport */ addERC1155Token),
  "addERC20Token": () => (/* reexport */ addERC20Token),
  "addERC721Token": () => (/* reexport */ addERC721Token),
  "addPhrase": () => (/* reexport */ addPhrase),
  "addRecentTransaction": () => (/* reexport */ addRecentTransaction),
  "blockERC1155Token": () => (/* reexport */ blockERC1155Token),
  "blockERC20Token": () => (/* reexport */ blockERC20Token),
  "blockERC721Token": () => (/* reexport */ blockERC721Token),
  "clearRecentTransactions": () => (/* reexport */ clearRecentTransactions),
  "clearUnconfirmedRequests": () => (/* reexport */ clearUnconfirmedRequests),
  "confirmRiskWarning": () => (/* reexport */ confirmRiskWarning),
  "createEncryptedWalletStore": () => (/* reexport */ createEncryptedWalletStore),
  "createMnemonicWords": () => (/* reexport */ createMnemonicWords),
  "createNewWallet": () => (/* reexport */ createNewWallet),
  "decryptWallet": () => (/* reexport */ decryptWallet),
  "deleteUnconfirmedRequest": () => (/* reexport */ deleteUnconfirmedRequest),
  "deriveWalletFromIndex": () => (/* reexport */ deriveWalletFromIndex),
  "deriveWalletFromPhrase": () => (/* reexport */ deriveWalletFromPhrase),
  "fromKeyStore": () => (/* reexport */ fromKeyStore),
  "getAssetsList": () => (/* reexport */ assets_getAssetsList),
  "getAssetsListNFT": () => (/* reexport */ getAssetsListNFT),
  "getERC1155Tokens": () => (/* reexport */ getERC1155Tokens),
  "getERC20Tokens": () => (/* reexport */ getERC20Tokens),
  "getERC20TokensCount": () => (/* reexport */ getERC20TokensCount),
  "getERC20TokensPaged": () => (/* reexport */ getERC20TokensPaged),
  "getERC721Token": () => (/* reexport */ getERC721Token),
  "getERC721Tokens": () => (/* reexport */ getERC721Tokens),
  "getERC721TokensPaged": () => (/* reexport */ getERC721TokensPaged),
  "getPhrase": () => (/* reexport */ getPhrase),
  "getPhrases": () => (/* reexport */ getPhrases),
  "getRecentTransactionsFromChain": () => (/* reexport */ getRecentTransactionsFromChain),
  "getRecentTransactionsFromDB": () => (/* reexport */ getRecentTransactionsFromDB),
  "getRiskWarningConfirmed": () => (/* reexport */ getRiskWarningConfirmed),
  "getTransactionList": () => (/* reexport */ transactions_getTransactionList),
  "getUnconfirmedRequests": () => (/* reexport */ getUnconfirmedRequests),
  "getWallet": () => (/* reexport */ getWallet),
  "getWallets": () => (/* reexport */ getWallets),
  "importNewWallet": () => (/* reexport */ importNewWallet),
  "isEmptyWallets": () => (/* reexport */ isEmptyWallets),
  "kickToUpdateChainState": () => (/* reexport */ kickToUpdateChainState),
  "popUnconfirmedRequest": () => (/* reexport */ popUnconfirmedRequest),
  "pushUnconfirmedRequest": () => (/* reexport */ pushUnconfirmedRequest),
  "queryDerivableWalletFromPhrase": () => (/* reexport */ queryDerivableWalletFromPhrase),
  "recoverWalletFromMnemonicWords": () => (/* reexport */ recoverWalletFromMnemonicWords),
  "recoverWalletFromPrivateKey": () => (/* reexport */ recoverWalletFromPrivateKey),
  "removeERC1155Token": () => (/* reexport */ removeERC1155Token),
  "removeERC20Token": () => (/* reexport */ removeERC20Token),
  "removeERC721Token": () => (/* reexport */ removeERC721Token),
  "removePhrase": () => (/* reexport */ removePhrase),
  "removeWallet": () => (/* reexport */ removeWallet),
  "renameWallet": () => (/* reexport */ renameWallet),
  "resetAccount": () => (/* reexport */ resetAccount),
  "setRiskWarningConfirmed": () => (/* reexport */ setRiskWarningConfirmed),
  "topUnconfirmedRequest": () => (/* reexport */ topUnconfirmedRequest),
  "trustERC1155Token": () => (/* reexport */ trustERC1155Token),
  "trustERC20Token": () => (/* reexport */ trustERC20Token),
  "trustERC721Token": () => (/* reexport */ trustERC721Token),
  "updateAccount": () => (/* reexport */ updateAccount),
  "updateChainState": () => (/* reexport */ updateChainState),
  "updateExoticWalletFromSource": () => (/* reexport */ updateExoticWalletFromSource),
  "updatePhrase": () => (/* reexport */ updatePhrase),
  "updateTransactions": () => (/* reexport */ updateTransactions)
});

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(93975);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js
var bip39_src = __webpack_require__(68440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/elliptic@6.5.4/node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(75367);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/database/helpers/openDB.ts
var openDB = __webpack_require__(77046);
// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@5.0.8/node_modules/idb/with-async-ittr-cjs.js
var with_async_ittr_cjs = __webpack_require__(79930);
;// CONCATENATED MODULE: ./src/plugins/Wallet/database/Wallet.db.ts


function path(x) {
    return x;
}
const createWalletDBAccess = (0,openDB/* createDBAccess */.Z_)(()=>{
    return (0,with_async_ittr_cjs.openDB)('maskbook-plugin-wallet', 9, {
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
            function v6_v7() {
                db.createObjectStore('Phrase', {
                    keyPath: path('id')
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
            if (oldVersion < 7) v6_v7();
            if (oldVersion < 8) v7_v8();
            if (oldVersion < 9) v8_v9();
        }
    });
});

// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(96578);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/helpers.ts


async function getWalletByAddress(t, address) {
    const record = await t.objectStore('Wallet').get((0,src/* formatEthereumAddress */.j8w)(address));
    return record ? WalletRecordOutDB(record) : null;
}
function WalletRecordIntoDB(x) {
    const record = x;
    record.address = (0,src/* formatEthereumAddress */.j8w)(x.address);
    return record;
}
function WalletRecordOutDB(x) {
    const record = x;
    record.address = (0,src/* formatEthereumAddress */.j8w)(record.address);
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
function PhraseRecordIntoDB(x) {
    return x;
}
function PhraseRecordOutDB(x) {
    return x;
}
function ERC20TokenRecordIntoDB(x) {
    x.address = (0,src/* formatEthereumAddress */.j8w)(x.address);
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
    return `${(0,src/* formatEthereumAddress */.j8w)(address)}_${tokenId}`;
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
    const record = (0,lodash.omit)(x, 'record_id');
    return record;
}
function ERC1155TokenRecordIntoDB(x) {
    const record = {
        ...x,
        // NFT cannot be divided and store each token separately
        record_id: `${(0,src/* formatEthereumAddress */.j8w)(x.address)}_${x.tokenId}`
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
        record_id: `${x.chain_id}_${(0,src/* formatEthereumAddress */.j8w)(x.address)}`
    };
    return record;
}
function TransactionChunkRecordOutDB(x) {
    const record = (0,lodash.omit)(x, 'record_id');
    return record;
}

// EXTERNAL MODULE: ./src/plugins/Wallet/constants.ts
var constants = __webpack_require__(4111);
// EXTERNAL MODULE: ./src/utils/native-rpc/index.ts + 2 modules
var native_rpc = __webpack_require__(3270);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumService.ts + 13 modules
var EthereumService = __webpack_require__(51968);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/wallet.ts
















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
async function isEmptyWallets() {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('Wallet');
    const count = await t.objectStore('Wallet').count();
    return count === 0;
}
async function getWallet(address = settings/* currentAccountSettings.value */.aK.value) {
    const wallets = await getWallets();
    return wallets.find((0,src/* currySameAddress */.DC3)(address));
}
async function getWallets(provider) {
    if (native_rpc/* hasNativeAPI */._) {
        const accounts = await (0,EthereumService.getAccounts)();
        var ref;
        const address = (ref = (0,lodash.first)(accounts)) !== null && ref !== void 0 ? ref : '';
        if (!address) return [];
        return [
            createWalletRecord(address, 'Mask Network')
        ];
    }
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('Wallet');
    const records = await t.objectStore('Wallet').getAll();
    const wallets = (await Promise.all(records.map(async (record)=>{
        const walletRecord = WalletRecordOutDB(record);
        return {
            ...walletRecord,
            _private_key_: await makePrivateKey(walletRecord)
        };
    }))).sort(sortWallet);
    if (provider === src/* ProviderType.Maskbook */.lP_.Maskbook) return wallets.filter((x)=>x._private_key_ || x.mnemonic.length
    );
    if (provider === settings/* currentProviderSettings.value */.t1.value) return wallets.filter((0,src/* currySameAddress */.DC3)(settings/* currentAccountSettings.value */.aK.value));
    if (provider) return [];
    return wallets;
    async function makePrivateKey(record) {
        // not a managed wallet
        if (!record._private_key_ && !record.mnemonic.length) return '';
        const { privateKey  } = record._private_key_ ? await recoverWalletFromPrivateKey(record._private_key_) : await recoverWalletFromMnemonicWords(record.mnemonic, record.passphrase, record.path);
        return `0x${(0,utils/* buf2hex */.Cw)(privateKey)}`;
    }
}
async function updateExoticWalletFromSource(provider, updates) {
    const walletStore = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('Wallet').objectStore('Wallet');
    let modified = false;
    for await (const cursor of walletStore){
        const wallet = cursor.value;
        {
            if (updates.has((0,src/* formatEthereumAddress */.j8w)(wallet.address))) {
                await cursor.update(WalletRecordIntoDB({
                    ...WalletRecordOutDB(cursor.value),
                    ...updates.get(wallet.address),
                    updatedAt: new Date()
                }));
            }
            modified = true;
        }
    }
    for (const address of updates.keys()){
        const wallet = await walletStore.get((0,src/* formatEthereumAddress */.j8w)(address));
        if (wallet) continue;
        await walletStore.put(WalletRecordIntoDB({
            address,
            createdAt: new Date(),
            updatedAt: new Date(),
            erc20_token_blacklist: new Set(),
            erc20_token_whitelist: new Set(),
            erc721_token_blacklist: new Set(),
            erc721_token_whitelist: new Set(),
            erc1155_token_blacklist: new Set(),
            erc1155_token_whitelist: new Set(),
            name: (0,src/* resolveProviderName */.HwK)(provider),
            mnemonic: [],
            passphrase: '',
            ...updates.get(address)
        }));
        modified = true;
    }
    if (modified) messages/* WalletMessages.events.walletsUpdated.sendToAll */.R.events.walletsUpdated.sendToAll(undefined);
}
function createNewWallet(rec) {
    const mnemonic = bip39_src/* generateMnemonic */.OF().split(' ');
    return importNewWallet({
        mnemonic,
        ...rec
    });
}
function createMnemonicWords() {
    return bip39_src/* generateMnemonic */.OF().split(' ');
}
async function importNewWallet(rec, slient = false) {
    const { name , path , mnemonic =[] , passphrase =''  } = rec;
    const address = await getWalletAddress();
    if (!address) throw new Error('cannot get the wallet address');
    if (rec.name === null) rec.name = address.slice(0, 6);
    const record = {
        name,
        mnemonic,
        passphrase,
        address,
        erc20_token_whitelist: new Set(),
        erc20_token_blacklist: new Set(),
        erc721_token_whitelist: new Set(),
        erc721_token_blacklist: new Set(),
        erc1155_token_whitelist: new Set(),
        erc1155_token_blacklist: new Set(),
        createdAt: new Date(),
        updatedAt: new Date()
    };
    if (rec.path) record.path = path;
    if (rec._private_key_) record._private_key_ = rec._private_key_;
    {
        const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('Wallet', 'ERC20Token');
        const record_ = await t.objectStore('Wallet').get(record.address);
        if (!record_) await t.objectStore('Wallet').add(WalletRecordIntoDB(record));
        else if (!record_.mnemonic.length && !record_._private_key_) await t.objectStore('Wallet').put(WalletRecordIntoDB(record));
    }
    if (!slient) {
        messages/* WalletMessages.events.walletsUpdated.sendToAll */.R.events.walletsUpdated.sendToAll(undefined);
        await updateAccount({
            account: record.address,
            providerType: src/* ProviderType.Maskbook */.lP_.Maskbook
        });
    }
    return address;
    async function getWalletAddress() {
        if (rec.address) return rec.address;
        if (rec._private_key_) {
            const recover = await recoverWalletFromPrivateKey(rec._private_key_);
            return recover.privateKeyValid ? recover.address : '';
        }
        if (mnemonic.length) return (await recoverWalletFromMnemonicWords(mnemonic, passphrase, path)).address;
        return;
    }
}
async function renameWallet(address, name) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('Wallet');
    const wallet = await getWalletByAddress(t, (0,src/* formatEthereumAddress */.j8w)(address));
    (0,utils/* assert */.hu)(wallet);
    wallet.name = name;
    wallet.updatedAt = new Date();
    await t.objectStore('Wallet').put(WalletRecordIntoDB(wallet));
    messages/* WalletMessages.events.walletsUpdated.sendToAll */.R.events.walletsUpdated.sendToAll(undefined);
}
async function removeWallet(address) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('Wallet');
    const wallet = await getWalletByAddress(t, (0,src/* formatEthereumAddress */.j8w)(address));
    if (!wallet) return;
    await t.objectStore('Wallet').delete(wallet.address);
    messages/* WalletMessages.events.walletsUpdated.sendToAll */.R.events.walletsUpdated.sendToAll(undefined);
}
async function recoverWalletFromMnemonicWords(mnemonic, passphrase, path = `${constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`) {
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
        privateKeyInHex: `0x${(0,utils/* buf2hex */.Cw)(walletPrivateKey)}`,
        path,
        mnemonic,
        passphrase
    };
}
async function recoverWalletFromPrivateKey(privateKey) {
    const ec = new elliptic.ec('secp256k1');
    const privateKey_ = privateKey.replace(/^0x/, '') // strip 0x
    ;
    const key = ec.keyFromPrivate(privateKey_);
    return {
        address: dist.EthereumAddress.from(key.getPublic(false, 'array')).address,
        privateKey: (0,utils/* hex2buf */.Yu)(privateKey_),
        privateKeyValid: privateKeyVerify(privateKey_),
        privateKeyInHex: privateKey.startsWith('0x') ? privateKey : `0x${privateKey}`,
        mnemonic: []
    };
    function privateKeyVerify(key1) {
        if (!/[\da-f]{64}/i.test(key1)) return false;
        const k = new bignumber.BigNumber(key1, 16);
        const n = new bignumber.BigNumber('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
        return !k.isZero() && k.isLessThan(n);
    }
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/account.ts




async function updateAccount(options = {
}) {
    if (options.chainId && !options.networkType) options.networkType = (0,src/* getNetworkTypeFromChainId */._Te)(options.chainId);
    if (!options.chainId && options.networkType) options.chainId = (0,src/* getChainIdFromNetworkType */.EP9)(options.networkType);
    const { name , account , chainId , providerType , networkType  } = options;
    // update wallet in the DB
    if (account && providerType && dist.EthereumAddress.isValid(account) && providerType !== src/* ProviderType.Maskbook */.lP_.Maskbook) {
        const updates = {
            address: account
        };
        if (name) updates.name = name;
        await updateExoticWalletFromSource(providerType, new Map([
            [
                account,
                updates
            ]
        ]));
    }
    // update global settings
    if (account) settings/* currentAccountSettings.value */.aK.value = account;
    if (chainId) settings/* currentChainIdSettings.value */.wU.value = chainId;
    if (providerType) settings/* currentProviderSettings.value */.t1.value = providerType;
    if (networkType) settings/* currentNetworkSettings.value */.fX.value = networkType;
}
async function resetAccount(options = {
}) {
    const { account ='' , chainId , networkType , providerType  } = options;
    settings/* currentAccountSettings.value */.aK.value = account;
    if (chainId) settings/* currentChainIdSettings.value */.wU.value = chainId;
    if (networkType) settings/* currentNetworkSettings.value */.fX.value = networkType;
    if (providerType) settings/* currentProviderSettings.value */.t1.value = providerType;
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/utils/index.ts
var src_utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/chain.ts






const beats = [];
async function kickToUpdateChainState() {
    beats.push(true);
}
async function updateChainState() {
    // reset the polling task cause it will be called from service call
    resetPoolTask();
    // forget those passed beats
    beats.length = 0;
    // update chain state
    try {
        [settings/* currentBlockNumberSettings.value */.gi.value, settings/* currentBalanceSettings.value */.NH.value] = await Promise.all([
            (0,EthereumService.getBlockNumber)(),
            settings/* currentAccountSettings.value */.aK.value ? (0,EthereumService.getBalance)(settings/* currentAccountSettings.value */.aK.value) : settings/* currentBalanceSettings.value */.NH.value, 
        ]);
    } catch  {
    // do nothing
    } finally{
        // reset the polling if chain state updated successfully
        resetPoolTask();
    }
}
let resetPoolTask = ()=>{
};
const effect = (0,src_utils/* startEffects */.Wu)(/* unsupported import.meta.webpackHot */ undefined);
// poll the newest chain state
effect(()=>{
    const { reset , cancel  } = (0,shared_src.pollingTask)(async ()=>{
        if (beats.length <= 0) return false;
        await updateChainState();
        return false;
    }, {
        delay: constants/* UPDATE_CHAIN_STATE_DELAY */.js
    });
    resetPoolTask = reset;
    return cancel;
});
// revalidate chain state if the chainId of current provider was changed
effect(()=>settings/* currentChainIdSettings.addListener */.wU.addListener(()=>{
        updateChainState();
        if (settings/* currentProviderSettings.value */.t1.value === src/* ProviderType.Maskbook */.lP_.Maskbook) (0,EthereumService.resetAllNonce)();
    })
);
// revalidate chain state if the current wallet was changed
effect(()=>settings/* currentAccountSettings.addListener */.aK.addListener(()=>updateChainState()
    )
);

// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(90335);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/phrase.ts









async function getPhrases() {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('Phrase');
    return t.objectStore('Phrase').getAll();
}
async function getPhrase(query) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('Phrase');
    var ref;
    if (typeof query === 'string') return (ref = t.objectStore('Phrase').get(query)) !== null && ref !== void 0 ? ref : null;
    for await (const each of t.objectStore('Phrase')){
        const record = PhraseRecordOutDB(each.value);
        if (query(record)) return record;
    }
    return null;
}
async function addPhrase(rec) {
    const old = await getPhrase((x)=>x.mnemonic.join(' ') === rec.mnemonic.join(' ')
    );
    if (old) throw new Error('Add exists phrase.');
    // create a new phrase
    const now = new Date();
    const record = {
        ...rec,
        id: (0,v4/* default */.Z)(),
        index: 0,
        createdAt: now,
        updatedAt: now
    };
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('Phrase');
    await t.objectStore('Phrase').add(record);
    messages/* WalletMessages.events.phrasesUpdated.sendToAll */.R.events.phrasesUpdated.sendToAll(undefined);
    return record;
}
async function removePhrase(id) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('Phrase');
    await t.objectStore('Phrase').delete(id);
    messages/* WalletMessages.events.phrasesUpdated.sendToAll */.R.events.phrasesUpdated.sendToAll(undefined);
}
async function updatePhrase(rec) {
    const record = await getPhrase(rec.id);
    (0,utils/* assert */.hu)(record);
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('Phrase');
    await t.objectStore('Phrase').put(PhraseRecordIntoDB({
        ...record,
        ...rec,
        updatedAt: new Date()
    }));
    messages/* WalletMessages.events.phrasesUpdated.sendToAll */.R.events.phrasesUpdated.sendToAll(undefined);
}
//#region derive a new wallet from the given secret phrase
const MAX_DERIVE_COUNT = 999;
async function deriveWalletFromPhrase(name, mnemonic, passphrase, path = constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB) {
    // find or create phrase from given secret phrase
    let phrase = await getPhrase((record)=>record.mnemonic.join(' ') === mnemonic.join(' ')
    );
    if (!phrase) {
        phrase = await addPhrase({
            mnemonic,
            passphrase,
            path
        });
    }
    for(let i = phrase.index; i < MAX_DERIVE_COUNT; i += 1){
        const derivedWallet = await recoverWalletFromMnemonicWords(phrase.mnemonic, phrase.passphrase, `${path}/${i}`);
        // ensure the wallet had never created or derived before
        const walletRecord = await getWallet(derivedWallet.address);
        if (walletRecord) continue;
        // create a wallet from mnemonic words
        const address = await importNewWallet({
            name,
            path: `${constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/${i}`,
            mnemonic: phrase.mnemonic,
            passphrase: phrase.passphrase
        });
        // update the address index of phrase
        await updatePhrase({
            id: phrase.id,
            index: i + 1
        });
        return address;
    }
    throw new Error('Derive too many times.');
}
//#endregion
//#region Query derivable wallet addresses
async function queryDerivableWalletFromPhrase(mnemonic, passphrase, page, pageSize = 10, path = constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB) {
    const result = [];
    for(let i = pageSize * (page - 1); i < pageSize * page && i < MAX_DERIVE_COUNT; i += 1){
        const derivedWallet = await recoverWalletFromMnemonicWords(mnemonic, passphrase, `${path}/${i}`);
        const balance = await (0,EthereumService.getBalance)(derivedWallet.address);
        result.push({
            ...derivedWallet,
            balance
        });
    }
    return result;
}
//#endregion
//#region derive a new wallet from specified index
async function deriveWalletFromIndex(mnemonic, passphrase, index) {
    // find or create phrase
    let phrase = await getPhrase((record)=>record.mnemonic.join(' ') === mnemonic.join(' ')
    );
    if (!phrase) {
        phrase = await addPhrase({
            mnemonic,
            passphrase,
            path: constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB
        });
    }
    // create a wallet from mnemonic
    await importNewWallet({
        name: `Account${index + 1}`,
        path: `${constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/${index}`,
        mnemonic: phrase.mnemonic,
        passphrase: phrase.passphrase
    });
    // update the largest index
    if (index + 1 > phrase.index && index + 1 < MAX_DERIVE_COUNT) {
        await updatePhrase({
            id: phrase.id,
            index: index + 1
        });
    }
} //#endregion

// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.4.6/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(9614);
;// CONCATENATED MODULE: ./src/database/helpers/pagination.ts
async function queryTransactionPaged(t, storeName, options) {
    const { skip , count , predicate  } = options;
    let skipped = 0;
    let read = 0;
    const data = [];
    for await (const record of t.objectStore(storeName).iterate()){
        if (skipped < skip) {
            skipped += 1;
            continue;
        }
        var ref;
        if (read < count && ((ref = predicate === null || predicate === void 0 ? void 0 : predicate(record.value)) !== null && ref !== void 0 ? ref : true)) {
            read += 1;
            data.push(record.value);
            continue;
        }
    }
    return data;
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/erc20.ts









async function getERC20TokensCount() {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('ERC20Token', 'Wallet');
    return t.objectStore('ERC20Token').count();
}
async function getERC20Tokens() {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('ERC20Token', 'Wallet');
    return t.objectStore('ERC20Token').getAll();
}
const fuse = new fuse_esm/* default */.Z([], {
    shouldSort: true,
    threshold: 0.45,
    minMatchCharLength: 1,
    keys: [
        {
            name: 'name',
            weight: 0.8
        },
        {
            name: 'symbol',
            weight: 0.2
        }, 
    ]
});
async function getERC20TokensPaged(index, count, query) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('ERC20Token');
    return queryTransactionPaged(t, 'ERC20Token', {
        skip: index * count,
        count,
        predicate: (record)=>{
            if (!query) return true;
            if (dist.EthereumAddress.isValid(query) && !(0,src/* isSameAddress */.Wr$)(query, record.address)) return false;
            fuse.setCollection([
                record
            ]);
            return !!fuse.search(query).length;
        }
    });
}
async function addERC20Token(token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC20Token', 'Wallet');
    var _name, _symbol, _decimals;
    await t.objectStore('ERC20Token').put(ERC20TokenRecordIntoDB({
        ...token,
        name: (_name = token.name) !== null && _name !== void 0 ? _name : '',
        symbol: (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : '',
        decimals: (_decimals = token.decimals) !== null && _decimals !== void 0 ? _decimals : 0
    }));
    messages/* WalletMessages.events.erc20TokensUpdated.sendToAll */.R.events.erc20TokensUpdated.sendToAll(undefined);
}
async function removeERC20Token(token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC20Token', 'Wallet');
    await t.objectStore('ERC20Token').delete((0,src/* formatEthereumAddress */.j8w)(token.address));
    messages/* WalletMessages.events.erc20TokensUpdated.sendToAll */.R.events.erc20TokensUpdated.sendToAll(undefined);
}
async function trustERC20Token(address, token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC20Token', 'Wallet');
    const wallet = await getWalletByAddress(t, (0,src/* formatEthereumAddress */.j8w)(address));
    (0,utils/* assert */.hu)(wallet);
    const tokenAddressChecksummed = (0,src/* formatEthereumAddress */.j8w)(token.address);
    let updated = false;
    if (!wallet.erc20_token_whitelist.has(tokenAddressChecksummed)) {
        wallet.erc20_token_whitelist.add(tokenAddressChecksummed);
        updated = true;
    }
    if (wallet.erc20_token_blacklist.has(tokenAddressChecksummed)) {
        wallet.erc20_token_blacklist.delete(tokenAddressChecksummed);
        updated = true;
    }
    if (!updated) return;
    await t.objectStore('Wallet').put(WalletRecordIntoDB(wallet));
    messages/* WalletMessages.events.walletsUpdated.sendToAll */.R.events.walletsUpdated.sendToAll(undefined);
}
async function blockERC20Token(address, token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC20Token', 'Wallet');
    const wallet = await getWalletByAddress(t, (0,src/* formatEthereumAddress */.j8w)(address));
    (0,utils/* assert */.hu)(wallet);
    let updated = false;
    const tokenAddressChecksummed = (0,src/* formatEthereumAddress */.j8w)(token.address);
    if (wallet.erc20_token_whitelist.has(tokenAddressChecksummed)) {
        wallet.erc20_token_whitelist.delete(tokenAddressChecksummed);
        updated = true;
    }
    if (!wallet.erc20_token_blacklist.has(tokenAddressChecksummed)) {
        wallet.erc20_token_blacklist.add(tokenAddressChecksummed);
        updated = true;
    }
    if (!updated) return;
    await t.objectStore('Wallet').put(WalletRecordIntoDB(wallet));
    messages/* WalletMessages.events.walletsUpdated.sendToAll */.R.events.walletsUpdated.sendToAll(undefined);
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/erc721.ts









async function getERC721Tokens() {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('ERC721Token');
    return t.objectStore('ERC721Token').getAll();
}
async function getERC721Token(address, tokenId) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('ERC721Token');
    return t.objectStore('ERC721Token').get(getERC721TokenRecordIntoDBKey(address, tokenId));
}
const erc721_fuse = new fuse_esm/* default */.Z([], {
    shouldSort: true,
    threshold: 0.45,
    minMatchCharLength: 1,
    keys: [
        {
            name: 'name',
            weight: 0.8
        },
        {
            name: 'symbol',
            weight: 0.2
        }, 
    ]
});
async function getERC721TokensPaged(index, count, query) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('ERC721Token');
    const records = await queryTransactionPaged(t, 'ERC721Token', {
        skip: index * count,
        count,
        predicate: (record)=>{
            if (!query) return true;
            if (dist.EthereumAddress.isValid(query) && !(0,src/* isSameAddress */.Wr$)(query, record.contractDetailed.address)) return false;
            erc721_fuse.setCollection([
                record
            ]);
            return !!erc721_fuse.search(query).length;
        }
    });
    return records.map(ERC721TokenRecordOutDB);
}
async function addERC721Token(token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC721Token', 'Wallet');
    await t.objectStore('ERC721Token').put(ERC721TokenRecordIntoDB(token));
    messages/* WalletMessages.events.erc721TokensUpdated.sendToAll */.R.events.erc721TokensUpdated.sendToAll(undefined);
}
async function removeERC721Token(token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC721Token', 'Wallet');
    await t.objectStore('ERC721Token').delete(ERC721TokenRecordIntoDB(token).record_id);
    messages/* WalletMessages.events.erc721TokensUpdated.sendToAll */.R.events.erc721TokensUpdated.sendToAll(undefined);
}
async function trustERC721Token(address, token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC721Token', 'Wallet');
    const wallet = await getWalletByAddress(t, (0,src/* formatEthereumAddress */.j8w)(address));
    (0,utils/* assert */.hu)(wallet);
    let updated = false;
    const key = `${(0,src/* formatEthereumAddress */.j8w)(token.contractDetailed.address)}_${token.tokenId}`;
    if (!wallet.erc721_token_whitelist.has(key)) {
        wallet.erc721_token_whitelist.add(key);
        updated = true;
    }
    if (wallet.erc721_token_blacklist.has(key)) {
        wallet.erc721_token_blacklist.delete(key);
        updated = true;
    }
    if (!updated) return false;
    await t.objectStore('Wallet').put(WalletRecordIntoDB(wallet));
    messages/* WalletMessages.events.walletsUpdated.sendToAll */.R.events.walletsUpdated.sendToAll(undefined);
    return updated;
}
async function blockERC721Token(address, token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC721Token', 'Wallet');
    const wallet = await getWalletByAddress(t, (0,src/* formatEthereumAddress */.j8w)(address));
    (0,utils/* assert */.hu)(wallet);
    let updated = false;
    const key = `${(0,src/* formatEthereumAddress */.j8w)(token.contractDetailed.address)}_${token.tokenId}`;
    if (wallet.erc721_token_whitelist.has(key)) {
        wallet.erc721_token_whitelist.delete(key);
        updated = true;
    }
    if (!wallet.erc721_token_blacklist.has(key)) {
        wallet.erc721_token_blacklist.add(key);
        updated = true;
    }
    if (!updated) return;
    await t.objectStore('Wallet').put(WalletRecordIntoDB(wallet));
    messages/* WalletMessages.events.walletsUpdated.sendToAll */.R.events.walletsUpdated.sendToAll(undefined);
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/erc1155.ts






async function getERC1155Tokens() {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('ERC1155Token', 'Wallet');
    return t.objectStore('ERC1155Token').getAll();
}
async function addERC1155Token(token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC1155Token', 'Wallet');
    await t.objectStore('ERC1155Token').put(ERC1155TokenRecordIntoDB(token));
    messages/* WalletMessages.events.erc1155TokensUpdated.sendToAll */.R.events.erc1155TokensUpdated.sendToAll(undefined);
}
async function removeERC1155Token(token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC1155Token', 'Wallet');
    await t.objectStore('ERC1155Token').delete((0,src/* formatEthereumAddress */.j8w)(token.address));
    messages/* WalletMessages.events.erc1155TokensUpdated.sendToAll */.R.events.erc1155TokensUpdated.sendToAll(undefined);
}
async function trustERC1155Token(address, token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC1155Token', 'Wallet');
    const wallet = await getWalletByAddress(t, (0,src/* formatEthereumAddress */.j8w)(address));
    (0,utils/* assert */.hu)(wallet);
    let updated = false;
    const key = `${(0,src/* formatEthereumAddress */.j8w)(token.address)}_${token.tokenId}`;
    if (!wallet.erc1155_token_whitelist.has(key)) {
        wallet.erc1155_token_whitelist.add(key);
        updated = true;
    }
    if (wallet.erc1155_token_blacklist.has(key)) {
        wallet.erc1155_token_blacklist.delete(key);
        updated = true;
    }
    if (!updated) return false;
    await t.objectStore('Wallet').put(WalletRecordIntoDB(wallet));
    messages/* WalletMessages.events.walletsUpdated.sendToAll */.R.events.walletsUpdated.sendToAll(undefined);
    return updated;
}
async function blockERC1155Token(address, token) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('ERC1155Token', 'Wallet');
    const wallet = await getWalletByAddress(t, (0,src/* formatEthereumAddress */.j8w)(address));
    (0,utils/* assert */.hu)(wallet);
    let updated = false;
    const key = `${(0,src/* formatEthereumAddress */.j8w)(token.address)}_${token.tokenId}`;
    if (wallet.erc1155_token_whitelist.has(key)) {
        wallet.erc1155_token_whitelist.delete(key);
        updated = true;
    }
    if (!wallet.erc1155_token_blacklist.has(key)) {
        wallet.erc1155_token_blacklist.add(key);
        updated = true;
    }
    if (!updated) return;
    await t.objectStore('Wallet').put(WalletRecordIntoDB(wallet));
    messages/* WalletMessages.events.walletsUpdated.sendToAll */.R.events.walletsUpdated.sendToAll(undefined);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
;// CONCATENATED MODULE: ./src/plugins/Wallet/apis/debank.ts
const DEBANK_API = 'https://api.debank.com';
async function getTransactionList(address, chain) {
    const response = await fetch(`${DEBANK_API}/history/list?user_addr=${address.toLowerCase()}&chain=${chain}`);
    return await response.json();
}
async function getAssetsList(address) {
    const response = await fetch(`${DEBANK_API}/token/balance_list?is_all=true&user_addr=${address.toLowerCase()}`);
    return await response.json();
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/apis/opensea.ts


async function opensea_getAssetsList(from, opts) {
    const { chainId =src/* ChainId.Mainnet */.a_e.Mainnet , page =0 , size =50  } = opts;
    const params = new URLSearchParams();
    params.append('owner', from.toLowerCase());
    params.append('limit', String(size));
    params.append('offset', String(size * page));
    if (![
        src/* ChainId.Mainnet */.a_e.Mainnet,
        src/* ChainId.Rinkeby */.a_e.Rinkeby
    ].includes(chainId)) return {
        assets: []
    };
    const response = await fetch(`https://${chainId === src/* ChainId.Mainnet */.a_e.Mainnet ? 'api' : 'rinkeby-api'}.opensea.io/api/v1/assets?${params.toString()}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'x-api-key': constants/* OPENSEA_API_KEY */.s
        }
    });
    return await response.json();
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/socket.io-client@2.4.0/node_modules/socket.io-client/lib/index.js
var lib = __webpack_require__(99941);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/plugins/Wallet/apis/zerion.ts

const ZERION_API = 'wss://api-v4.zerion.io';
const ZERION_TOKEN = 'Mask.yEUEfDnoxgLBwNEcYPVussxxjdrGwapj';
let socket = null;
function createSocket() {
    if (socket === null || socket === void 0 ? void 0 : socket.connected) return socket;
    if (socket) socket.removeAllListeners();
    return socket = lib_default()(`${ZERION_API}/address`, {
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

// EXTERNAL MODULE: ./src/plugins/Wallet/pipes/index.ts
var pipes = __webpack_require__(22470);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/assets.ts









async function getAssetsListNFT(address, chainId, provider, page, size) {
    if (provider === src/* CollectibleProvider.OPENSEAN */.wgL.OPENSEAN) {
        const { assets  } = await opensea_getAssetsList(address, {
            chainId,
            page,
            size
        });
        var _image_url, ref;
        return {
            assets: assets.filter((x)=>[
                    'ERC721',
                    'ERC1155'
                ].includes(x.asset_contract.schema_name)
            ).map((x)=>(0,src/* createERC721Token */.OfD)({
                    chainId: src/* ChainId.Mainnet */.a_e.Mainnet,
                    type: src/* EthereumTokenType.ERC721 */.Drc.ERC721,
                    name: x.asset_contract.name,
                    symbol: x.asset_contract.symbol,
                    address: x.asset_contract.address
                }, {
                    name: x.name,
                    description: x.description,
                    image: (ref = (_image_url = x.image_url) !== null && _image_url !== void 0 ? _image_url : x.image_preview_url) !== null && ref !== void 0 ? ref : ''
                }, x.token_id)
            ),
            hasNextPage: assets.length === size
        };
    }
    return {
        assets: [],
        hasNextPage: false
    };
}
async function assets_getAssetsList(address, network, provider) {
    if (!dist.EthereumAddress.isValid(address)) return [];
    switch(provider){
        case src/* PortfolioProvider.ZERION */.g38.ZERION:
            const scope = (0,pipes/* resolveZerionAssetsScopeName */.mJ)(network);
            const { meta , payload  } = await zerion_getAssetsList(address, scope);
            if (meta.status !== 'ok') throw new Error('Fail to load assets.');
            const assets = Object.entries(payload).map(([key, value])=>{
                if (key === 'assets') {
                    const assetsList = (0,lodash.values)(value).filter(({ asset  })=>asset.is_displayable && !filterAssetType.some((type)=>type === asset.type
                        ) && asset.icon_url
                    );
                    return formatAssetsFromZerion(assetsList, key);
                }
                return formatAssetsFromZerion((0,lodash.values)(value), key);
            });
            return assets.flat();
        case src/* PortfolioProvider.DEBANK */.g38.DEBANK:
            const { data =[] , error_code  } = await getAssetsList(address);
            if (error_code === 0) return formatAssetsFromDebank(data);
            return [];
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}
function formatAssetsFromDebank(data) {
    console.log('DEBUG: formatAssetsFromDebank');
    console.log(data);
    return data.filter((x)=>(0,src/* getChainIdFromName */.npC)(x.chain)
    ).map((y)=>{
        var ref;
        const chainIdFromChain = (ref = (0,src/* getChainIdFromName */.npC)(y.chain)) !== null && ref !== void 0 ? ref : src/* ChainId.Mainnet */.a_e.Mainnet;
        // the asset id is the token address or the name of the chain
        const chainIdFromId = (0,src/* getChainIdFromName */.npC)(y.id);
        var _price, _price1;
        return {
            chain: (0,src/* getChainShortName */.F3R)(chainIdFromChain).toLowerCase(),
            token: chainIdFromId && (0,src/* isChainIdMainnet */.yXb)(chainIdFromId) ? (0,src/* createNativeToken */.$ch)(chainIdFromChain) : (0,src/* createERC20Token */.wY6)(chainIdFromChain, (0,src/* formatEthereumAddress */.j8w)(y.id), y.decimals, y.name, y.symbol),
            balance: new (bignumber_default())(y.balance).toFixed(),
            price: {
                [src/* CurrencyType.USD */.V2A.USD]: new (bignumber_default())((_price = y.price) !== null && _price !== void 0 ? _price : 0).toFixed()
            },
            value: {
                [src/* CurrencyType.USD */.V2A.USD]: new (bignumber_default())((_price1 = y.price) !== null && _price1 !== void 0 ? _price1 : 0).multipliedBy(new (bignumber_default())(y.balance).dividedBy((0,src/* pow10 */.wAG)(y.decimals))).toFixed()
            },
            logoURI: y.logo_url
        };
    });
}
const filterAssetType = [
    'compound',
    'trash',
    'uniswap',
    'uniswap-v2',
    'nft'
];
function formatAssetsFromZerion(data, scope) {
    return data.map(({ asset , quantity  })=>{
        var ref;
        const balance = Number(new (bignumber_default())(quantity).dividedBy((0,src/* pow10 */.wAG)(asset.decimals)).toString());
        var ref1, ref2;
        const value = (ref2 = (ref1 = (ref = asset.price) === null || ref === void 0 ? void 0 : ref.value) !== null && ref1 !== void 0 ? ref1 : asset.value) !== null && ref2 !== void 0 ? ref2 : 0;
        const isNativeToken = (symbol)=>[
                'ETH',
                'BNB',
                'MATIC'
            ].includes(symbol)
        ;
        return {
            token: {
                name: asset.name,
                symbol: asset.symbol,
                decimals: asset.decimals,
                address: isNativeToken(asset.symbol) ? (0,src/* getTokenConstants */.aV4)().NATIVE_TOKEN_ADDRESS : asset.asset_code,
                chainId: (0,pipes/* resolveChainByScope */.uA)(scope).chainId,
                type: isNativeToken(asset.symbol) ? src/* EthereumTokenType.Native */.Drc.Native : src/* EthereumTokenType.ERC20 */.Drc.ERC20,
                logoURI: asset.icon_url
            },
            chain: (0,pipes/* resolveChainByScope */.uA)(scope).chain,
            balance: quantity,
            price: {
                usd: new (bignumber_default())(value).toString()
            },
            value: {
                usd: new (bignumber_default())(balance).multipliedBy(value).toString()
            },
            logoURI: asset.icon_url
        };
    });
}

// EXTERNAL MODULE: ./src/plugins/Wallet/types/index.ts + 3 modules
var types = __webpack_require__(86285);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/transactions.ts







async function transactions_getTransactionList(address, network, provider, page, size = 30) {
    if (provider === src/* PortfolioProvider.DEBANK */.g38.DEBANK) {
        const name = (0,pipes/* resolveDebankChainName */.dW)(network);
        if (!name) return {
            transactions: [],
            hasNextPage: false
        };
        const { data , error_code  } = await getTransactionList(address, name);
        if (error_code !== 0) throw new Error('Fail to load transactions.');
        return {
            transactions: fromDeBank(data),
            hasNextPage: false
        };
    } else if (provider === src/* PortfolioProvider.ZERION */.g38.ZERION) {
        const scope = (0,pipes/* resolveZerionTransactionsScopeName */.Rw)(network);
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
        var ref, ref1;
        let type = (ref = transaction.tx) === null || ref === void 0 ? void 0 : ref.name;
        if (!type && !(0,lodash.isNil)(transaction.cate_id)) {
            type = cate_dict[transaction.cate_id].en;
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
                ...transaction.sends.map(({ amount , token_id  })=>({
                        name: token_dict[token_id].name,
                        symbol: token_dict[token_id].optimized_symbol,
                        address: token_id,
                        direction: types/* DebankTransactionDirection.SEND */.Ej.SEND,
                        amount,
                        logoURI: token_dict[token_id].logo_url
                    })
                ),
                ...transaction.receives.map(({ amount , token_id  })=>({
                        name: token_dict[token_id].name,
                        symbol: token_dict[token_id].optimized_symbol,
                        address: token_id,
                        direction: types/* DebankTransactionDirection.RECEIVE */.Ej.RECEIVE,
                        amount,
                        logoURI: token_dict[token_id].logo_url
                    })
                ), 
            ],
            gasFee: transaction.tx ? {
                eth: transaction.tx.eth_gas_fee,
                usd: transaction.tx.usd_gas_fee
            } : undefined,
            transactionType: (0,pipes/* resolveDebankTransactionType */.xe)(transaction.cate_id)
        };
    });
}
function fromZerion(data) {
    return data.filter(({ type  })=>type !== types/* ZerionRBDTransactionType.AUTHORIZE */.Q$.AUTHORIZE
    ).map((transaction)=>{
        var ref5, ref6, ref7;
        var ref8;
        const ethGasFee = new (bignumber_default())((ref8 = (ref5 = transaction.fee) === null || ref5 === void 0 ? void 0 : ref5.value) !== null && ref8 !== void 0 ? ref8 : 0).dividedBy((0,src/* pow10 */.wAG)(18)).toString();
        var ref9;
        const usdGasFee = new (bignumber_default())(ethGasFee).multipliedBy((ref9 = (ref6 = transaction.fee) === null || ref6 === void 0 ? void 0 : ref6.price) !== null && ref9 !== void 0 ? ref9 : 0).toString();
        var _address_to, ref10;
        return {
            type: transaction.type,
            id: transaction.hash,
            timeAt: new Date(transaction.mined_at * 1000),
            toAddress: (_address_to = transaction.address_to) !== null && _address_to !== void 0 ? _address_to : '',
            failed: transaction.status === types/* ZerionTransactionStatus.FAILED */.JH.FAILED,
            pairs: (ref10 = (ref7 = transaction.changes) === null || ref7 === void 0 ? void 0 : ref7.map(({ asset , direction , value  })=>{
                return {
                    name: asset.name,
                    symbol: asset.symbol,
                    address: asset.asset_code,
                    direction,
                    amount: Number(new (bignumber_default())(value).dividedBy((0,src/* pow10 */.wAG)(asset.decimals)).toString()),
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

// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(2905);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/recentTransactions.ts








const MAX_RECENT_TRANSACTIONS_SIZE = 10;
const getTransactionReceiptWithCache = (0,src_utils/* memoizePromise */.J3)(EthereumService.getTransactionReceipt, (hash)=>hash
);
function getRecordId(address) {
    return `${settings/* currentChainIdSettings.value */.wU.value}_${(0,src/* formatEthereumAddress */.j8w)(address)}`;
}
function getReceiptStatus(receipt) {
    if (!receipt) return src/* TransactionStatusType.NOT_DEPEND */.g8n.NOT_DEPEND;
    const status = receipt.status;
    if (receipt.status === false || [
        '0x',
        '0x0'
    ].includes(status)) return src/* TransactionStatusType.FAILED */.g8n.FAILED;
    if (receipt.status === true || [
        '0x1'
    ].includes(status)) return src/* TransactionStatusType.SUCCEED */.g8n.SUCCEED;
    return src/* TransactionStatusType.NOT_DEPEND */.g8n.NOT_DEPEND;
}
async function getRecentTransactionsFromDB(address) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readonly')('TransactionChunk');
    const chunk = await t.objectStore('TransactionChunk').get(getRecordId(address));
    if (!chunk) return [];
    var ref;
    return (ref = chunk.transactions.slice(0, MAX_RECENT_TRANSACTIONS_SIZE).reverse()) !== null && ref !== void 0 ? ref : [];
}
async function getRecentTransactionsFromChain(address) {
    const transactions = await getRecentTransactionsFromDB(address);
    const receipts = await Promise.all(transactions.filter((x)=>x.status === src/* TransactionStatusType.NOT_DEPEND */.g8n.NOT_DEPEND
    ).map((x)=>getTransactionReceiptWithCache(x.hash)
    ));
    // if the status is not depend, then clean the cache in order to fetch receipt again in the next round
    transactions.forEach((x, i)=>{
        const receipt = receipts[i];
        if (!receipt || getReceiptStatus(receipt) !== src/* TransactionStatusType.NOT_DEPEND */.g8n.NOT_DEPEND) getTransactionReceiptWithCache.cache.delete(x.hash);
    });
    return transactions.map((x)=>{
        const receipt = receipts.find((y)=>{
            return (y === null || y === void 0 ? void 0 : y.transactionHash) === x.hash;
        });
        if (!receipt) return x;
        return {
            hash: receipt.transactionHash,
            status: getReceiptStatus(receipt)
        };
    });
}
async function updateTransactions(updates) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('TransactionChunk');
    const store = t.objectStore('TransactionChunk');
    for await (const cursor of store){
        const chunk = cursor.value;
        const updates_ = updates.get((0,src/* formatEthereumAddress */.j8w)(chunk.address));
        if (!updates_) continue;
        await cursor.update(TransactionChunkRecordIntoDB({
            ...TransactionChunkRecordOutDB(chunk),
            transactions: chunk.transactions.map((x)=>({
                    ...x,
                    ...updates_.find((y)=>y.hash === x.hash
                    )
                })
            )
        }));
    }
    Wallet_src/* WalletMessages.events.transactionsUpdated.sendToAll */.R$.events.transactionsUpdated.sendToAll(undefined);
}
async function clearRecentTransactions(address) {
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('TransactionChunk');
    for await (const x of t.objectStore('TransactionChunk').iterate()){
        if (!(0,src/* isSameAddress */.Wr$)(x.value.address, address)) continue;
        x.delete();
    }
    getTransactionReceiptWithCache.cache.clear();
    Wallet_src/* WalletMessages.events.transactionsUpdated.sendToAll */.R$.events.transactionsUpdated.sendToAll(undefined);
}
async function addRecentTransaction(address, hash) {
    const now = new Date();
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('TransactionChunk');
    const chainId = settings/* currentChainIdSettings.value */.wU.value;
    const recordId = getRecordId(address);
    // compose transaction record
    const transactionIntoDB = {
        hash,
        status: src/* TransactionStatusType.NOT_DEPEND */.g8n.NOT_DEPEND
    };
    // compose chunk record
    const chunk_ = await t.objectStore('TransactionChunk').get(recordId);
    var ref;
    const transactions = (ref = chunk_ === null || chunk_ === void 0 ? void 0 : chunk_.transactions.concat(transactionIntoDB)) !== null && ref !== void 0 ? ref : [];
    const chunk = chunk_ ? {
        ...chunk_,
        updatedAt: now,
        // if the new transaction list is over the max size, then remove the overflow part
        transactions: transactions.slice(-MAX_RECENT_TRANSACTIONS_SIZE)
    } : {
        address,
        chain_id: chainId,
        record_id: recordId,
        createdAt: now,
        updatedAt: now,
        transactions: [
            transactionIntoDB
        ]
    };
    // we also need to remove overflow transactions from the cache
    transactions.slice(0, -MAX_RECENT_TRANSACTIONS_SIZE).forEach((x)=>getTransactionReceiptWithCache.cache.delete(x.hash)
    );
    // write the new transaction into DB
    await t.objectStore('TransactionChunk').put(chunk);
    Wallet_src/* WalletMessages.events.transactionsUpdated.sendToAll */.R$.events.transactionsUpdated.sendToAll(undefined);
}

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
    return (0,lodash.first)(await getUnconfirmedRequests());
}
async function popUnconfirmedRequest() {
    const now = new Date();
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    var ref;
    const requests = ((ref = chunk_ === null || chunk_ === void 0 ? void 0 : chunk_.requests) !== null && ref !== void 0 ? ref : []).sort(requestSorter);
    if (!chunk_) return;
    if (!requests.length) return;
    const payload = (0,lodash.first)(requests);
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests: requests.slice(1)
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    Wallet_src/* WalletMessages.events.requestsUpdated.sendToAll */.R$.events.requestsUpdated.sendToAll(undefined);
    return payload;
}
async function pushUnconfirmedRequest(payload) {
    const now = new Date();
    const t = (0,openDB/* createTransaction */._X)(await createWalletDBAccess(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    var ref;
    const requests = (ref = chunk_ === null || chunk_ === void 0 ? void 0 : chunk_.requests) !== null && ref !== void 0 ? ref : [];
    // validate if it's still possible to push a new request
    if (requests.length >= MAX_UNCONFIRMED_REQUESTS_SIZE) throw new Error('Unable to add more requests.');
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
    Wallet_src/* WalletMessages.events.requestsUpdated.sendToAll */.R$.events.requestsUpdated.sendToAll(undefined);
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
    if (!requests.length) return;
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests: requests
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    Wallet_src/* WalletMessages.events.requestsUpdated.sendToAll */.R$.events.requestsUpdated.sendToAll(undefined);
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
    Wallet_src/* WalletMessages.events.requestsUpdated.sendToAll */.R$.events.requestsUpdated.sendToAll(undefined);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js
var buffer = __webpack_require__(15313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/scrypt-js@3.0.1/node_modules/scrypt-js/scrypt.js
var scrypt = __webpack_require__(37508);
var scrypt_default = /*#__PURE__*/__webpack_require__.n(scrypt);
// EXTERNAL MODULE: ../../node_modules/.pnpm/z-schema@5.0.1/node_modules/z-schema/src/ZSchema.js
var ZSchema = __webpack_require__(20391);
var ZSchema_default = /*#__PURE__*/__webpack_require__.n(ZSchema);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/keystore/schema.json
const schema_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","type":"object","required":["version","id","address","crypto"],"properties":{"version":{"const":3},"id":{"type":"string"},"address":{"$ref":"#/definitions/address"},"crypto":{"type":"object","allOf":[{"$ref":"#/definitions/aes-cipher"},{"$ref":"#/definitions/key-derivation"},{"$ref":"#/definitions/authentication"}]}},"definitions":{"address":{"type":"string","pattern":"^[a-fA-F0-9]{40}$"},"aes-cipher":{"type":"object","properties":{"cipher":{"enum":["aes-128-ctr","aes-128-cbc"]},"cipherparams":{"type":"object","properties":{"iv":{"type":"string","pattern":"^[a-fA-F0-9]{32}$"}},"required":["iv"],"additionalProperties":false},"ciphertext":{"$ref":"#/definitions/encoded-string"}},"required":["cipher","ciphertext","cipherparams"]},"key-derivation":{"oneOf":[{"$ref":"#/definitions/pbkdf2"},{"$ref":"#/definitions/scrypt"}],"required":["kdf","kdfparams"]},"pbkdf2":{"type":"object","properties":{"kdf":{"const":"pbkdf2"},"kdfparams":{"type":"object","properties":{"c":{"type":"number","minimum":1000},"prf":{"const":"hmac-sha256"},"dklen":{"type":"number","minimum":16},"salt":{"$ref":"#/definitions/encoded-string"}},"required":["c","prf","dklen","salt"],"additionalProperties":false}}},"scrypt":{"type":"object","properties":{"kdf":{"const":"scrypt"},"kdfparams":{"type":"object","properties":{"n":{"type":"number","minimum":1},"p":{"type":"number","minimum":1},"r":{"type":"number","minimum":1},"dklen":{"type":"number","minimum":16},"salt":{"$ref":"#/definitions/encoded-string"}},"required":["n","p","r","dklen","salt"],"additionalProperties":false}}},"authentication":{"type":"object","properties":{"mac":{"$ref":"#/definitions/encoded-string"}},"required":["mac"]},"encoded-string":{"type":"string","pattern":"^[a-fA-F0-9]{64}$"}}}');
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(83317);
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
    const valid = (0,web3_utils_lib.sha3)(`0x${payload.toString('hex')}`) === `0x${keystore.mac}`;
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
    throw new Error('Unsupport key derivation scheme');
}

// EXTERNAL MODULE: ./src/extension/background-script/HelperService/storage.ts
var storage = __webpack_require__(4331);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/cloud.ts

const HOST_MAP = {
    production: 'https://backup.mask.io/api',
    development: 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api',
    test: 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api'
};
const COULD_BASE_URL = HOST_MAP["production"];
const RISK_WARNING_KEY = 'com.maskbook.agreement+riskWarning';
const setRiskWarningConfirmed = (address, confirmed)=>(0,storage/* setStorage */.p)(RISK_WARNING_KEY, {
        [address]: confirmed
    }, {
        howToUpdate: 'merge'
    })
;
const getRiskWarningConfirmed = async (address)=>{
    const allStatus = await (0,storage/* getStorage */.c)(RISK_WARNING_KEY);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var ts_results_esm = __webpack_require__(64614);
// EXTERNAL MODULE: ./src/database/Plugin/wrap-plugin-database.ts
var wrap_plugin_database = __webpack_require__(97834);
;// CONCATENATED MODULE: ./src/plugins/Wallet/database/decrypt.ts





let primaryKey = null;
let decrypted = null;
const EncryptedDB = (0,wrap_plugin_database/* createPluginDatabase */.X)(Wallet_src/* PLUGIN_IDENTIFIER */.J3);
var DecryptWalletError;
(function(DecryptWalletError1) {
    DecryptWalletError1[DecryptWalletError1["EncryptedStoreNotExist"] = 1] = "EncryptedStoreNotExist";
    DecryptWalletError1[DecryptWalletError1["PasswordError"] = 2] = "PasswordError";
})(DecryptWalletError || (DecryptWalletError = {
}));
var UpdateWalletError;
(function(UpdateWalletError1) {
    UpdateWalletError1[UpdateWalletError1["EncryptedStoreNotExist"] = 1] = "EncryptedStoreNotExist";
    UpdateWalletError1[UpdateWalletError1["EncryptedStoreLocked"] = 2] = "EncryptedStoreLocked";
})(UpdateWalletError || (UpdateWalletError = {
}));
/* unsupported import.meta.webpackHot */ undefined && 0;
(0,src_utils/* startEffect */.CU)(/* unsupported import.meta.webpackHot */ undefined, ()=>{
    // lock wallet after 15 mins
    const timeout = setTimeout(lockWallet, 1000 * 60 * 15);
    return ()=>{
        lockWallet();
        clearTimeout(timeout);
    };
});
/** Detect if there is an encrypted wallet store. If there is, we should use the encrypted store. */ function hasEncryptedWalletStore() {
    return EncryptedDB.has('primary-key', 'wallet');
}
/** Verify and decrypt the wallet database. If the password is correct, it will return true. */ async function decryptWallet(passwordCandidate) {
    const encryptedWallets = await EncryptedDB.get('wallet', 'wallet');
    const primaryRecord = await EncryptedDB.get('primary-key', 'wallet');
    if (!encryptedWallets || !primaryRecord) return (0,ts_results_esm/* Err */.UG)(DecryptWalletError.EncryptedStoreNotExist);
    const pbkdf2 = await derivePBKDF2(passwordCandidate);
    const aes = await deriveAES_KW(pbkdf2, primaryRecord.iv);
    primaryKey = await unwrapKey(primaryRecord.wrappedKey, aes).catch(()=>null
    );
    if (!primaryKey) return (0,ts_results_esm/* Err */.UG)(DecryptWalletError.PasswordError);
    const json = await decrypt_decrypt(encryptedWallets.encrypted, primaryKey, encryptedWallets.iv);
    // broken store is a fatal error and should not happen
    decrypted = JSON.parse((0,esm/* decodeText */.rj)(json));
    Wallet_src/* WalletMessages.events.walletLockStatusUpdated.sendToAll */.R$.events.walletLockStatusUpdated.sendToAll(false);
    return (0,ts_results_esm.Ok)(undefined);
}
async function lockWallet() {
    primaryKey = null;
    decrypted = null;
    Wallet_src/* WalletMessages.events.walletLockStatusUpdated.sendToAll */.R$.events.walletLockStatusUpdated.sendToAll(true);
}
async function updateWalletStore(newStore) {
    if (!await hasEncryptedWalletStore()) return Err(UpdateWalletError.EncryptedStoreNotExist);
    if (!primaryKey) return Err(UpdateWalletError.EncryptedStoreLocked);
    await writeStore(newStore, primaryKey);
    decrypted = newStore;
    return Ok(undefined);
}
async function createEncryptedWalletStore(password, force = false) {
    if (await hasEncryptedWalletStore()) {
        if (!force) throw new Error('Store exists. Please use "force" to overwrite.');
    }
    const pbkdf2 = await derivePBKDF2(password);
    const iv = getIV();
    const aesKW = await deriveAES_KW(pbkdf2, iv);
    const pendingPrimaryKey = await createAES();
    const wrappedKey = await wrapKey(pendingPrimaryKey, aesKW);
    try {
        await EncryptedDB.add({
            type: 'primary-key',
            id: 'wallet',
            iv,
            wrappedKey
        });
        const empty = {
        };
        await writeStore(empty, pendingPrimaryKey);
        primaryKey = pendingPrimaryKey;
        decrypted = empty;
    } catch (error) {
        await EncryptedDB.remove('primary-key', 'wallet');
        throw error;
    }
}
async function getEncryptedWalletStore() {
    if (decrypted) return Some(decrypted);
    return None;
}
async function writeStore(data, primaryKey1) {
    const store = (0,esm/* encodeText */.YT)(JSON.stringify(data)).buffer;
    const iv = getIV();
    const encrypted = await encrypt(store, primaryKey1, iv);
    await EncryptedDB.add({
        type: 'wallet',
        id: 'wallet',
        encrypted,
        iv
    });
}
function derivePBKDF2(password) {
    return crypto.subtle.importKey('raw', (0,esm/* encodeText */.YT)(password), 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
}
function deriveAES_KW(key, iv) {
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
function wrapKey(key, wrapKey1) {
    return crypto.subtle.wrapKey('raw', key, wrapKey1, 'AES-KW');
}
function unwrapKey(key, wrapKey1) {
    return crypto.subtle.unwrapKey('raw', key, wrapKey1, 'AES-KW', 'AES-GCM', false, [
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
function decrypt_decrypt(message, key, iv) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, message);
}
function getIV() {
    return crypto.getRandomValues(new Uint8Array(16));
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/index.ts

















/***/ }),

/***/ 86285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ej": () => (/* reexport */ DebankTransactionDirection),
  "Q$": () => (/* reexport */ ZerionRBDTransactionType),
  "so": () => (/* reexport */ ZerionTransactionDirection),
  "JH": () => (/* reexport */ ZerionTransactionStatus)
});

// UNUSED EXPORTS: FilterTransactionType

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/zerion.ts
var ZerionRBDTransactionType;
(function(ZerionRBDTransactionType1) {
    ZerionRBDTransactionType1["SEND"] = 'send';
    ZerionRBDTransactionType1["RECEIVE"] = 'receive';
    ZerionRBDTransactionType1["TRADE"] = 'trade';
    ZerionRBDTransactionType1["AUTHORIZE"] = 'authorize';
    ZerionRBDTransactionType1["EXECUTION"] = 'execution';
    ZerionRBDTransactionType1["DEPLOYMENT"] = 'deployment';
    ZerionRBDTransactionType1["CANCEL"] = 'cancel';
    ZerionRBDTransactionType1["DEPOSIT"] = 'deposit';
    ZerionRBDTransactionType1["WITHDRAW"] = 'withdraw';
    ZerionRBDTransactionType1["BORROW"] = 'borrow';
    ZerionRBDTransactionType1["REPAY"] = 'repay';
    ZerionRBDTransactionType1["STAKE"] = 'stake';
    ZerionRBDTransactionType1["UNSTAKE"] = 'unstake';
    ZerionRBDTransactionType1["CLAIM"] = 'claim';
})(ZerionRBDTransactionType || (ZerionRBDTransactionType = {
}));
var ZerionTransactionStatus;
(function(ZerionTransactionStatus1) {
    ZerionTransactionStatus1["CONFIRMED"] = 'confirmed';
    ZerionTransactionStatus1["FAILED"] = 'failed';
    ZerionTransactionStatus1["PENDING"] = 'pending';
})(ZerionTransactionStatus || (ZerionTransactionStatus = {
}));
var ZerionTransactionDirection;
(function(ZerionTransactionDirection1) {
    ZerionTransactionDirection1["IN"] = 'in';
    ZerionTransactionDirection1["OUT"] = 'out';
    ZerionTransactionDirection1["SELF"] = 'self';
})(ZerionTransactionDirection || (ZerionTransactionDirection = {
}));

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/debank.ts
var DebankTransactionDirection;
(function(DebankTransactionDirection1) {
    DebankTransactionDirection1["SEND"] = 'send';
    DebankTransactionDirection1["RECEIVE"] = 'receive';
})(DebankTransactionDirection || (DebankTransactionDirection = {
}));

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/portfolio.ts
var FilterTransactionType;
(function(FilterTransactionType1) {
    FilterTransactionType1["ALL"] = 'all';
    FilterTransactionType1["SEND"] = 'send';
    FilterTransactionType1["RECEIVE"] = 'receive';
})(FilterTransactionType || (FilterTransactionType = {
}));

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/index.ts





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

/***/ 64873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


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

var isTypedArray = __webpack_require__(48186).strict

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

/***/ 32007:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var swarm = __webpack_require__(52384);
var Bzz = function Bzz(provider) {
    this.givenProvider = Bzz.givenProvider;
    if (provider && provider._requestManager) {
        provider = provider.currentProvider;
    }
    // only allow file picker when in browser
    if (typeof document !== 'undefined') {
        this.pick = swarm.pick;
    }
    this.setProvider(provider);
};
// set default ethereum provider
/* jshint ignore:start */
Bzz.givenProvider = null;
if (typeof ethereum !== 'undefined' && ethereum.bzz) {
    Bzz.givenProvider = ethereum.bzz;
}
/* jshint ignore:end */
Bzz.prototype.setProvider = function (provider) {
    // is ethereum provider
    if (!!provider && typeof provider === 'object' && typeof provider.bzz === 'string') {
        provider = provider.bzz;
        // is no string, set default
    }
    // else if(!_.isString(provider)) {
    //      provider = 'http://swarm-gateways.net'; // default to gateway
    // }
    if (typeof provider === 'string') {
        this.currentProvider = provider;
    }
    else {
        this.currentProvider = null;
        var noProviderError = new Error('No provider set, please set one using bzz.setProvider().');
        this.download = this.upload = this.isAvailable = function () {
            throw noProviderError;
        };
        return false;
    }
    // add functions
    this.download = swarm.at(provider).download;
    this.upload = swarm.at(provider).upload;
    this.isAvailable = swarm.at(provider).isAvailable;
    return true;
};
module.exports = Bzz;


/***/ }),

/***/ 39944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2016
 */

var EventEmitter = __webpack_require__(15954);
/**
 * This function generates a defer promise and adds eventEmitter functionality to it
 *
 * @method eventifiedPromise
 */
var PromiEvent = function PromiEvent(justPromise) {
    var resolve, reject, eventEmitter = new Promise(function () {
        resolve = arguments[0];
        reject = arguments[1];
    });
    if (justPromise) {
        return {
            resolve: resolve,
            reject: reject,
            eventEmitter: eventEmitter
        };
    }
    // get eventEmitter
    var emitter = new EventEmitter();
    // add eventEmitter to the promise
    eventEmitter._events = emitter._events;
    eventEmitter.emit = emitter.emit;
    eventEmitter.on = emitter.on;
    eventEmitter.once = emitter.once;
    eventEmitter.off = emitter.off;
    eventEmitter.listeners = emitter.listeners;
    eventEmitter.addListener = emitter.addListener;
    eventEmitter.removeListener = emitter.removeListener;
    eventEmitter.removeAllListeners = emitter.removeAllListeners;
    return {
        resolve: resolve,
        reject: reject,
        eventEmitter: eventEmitter
    };
};
PromiEvent.resolve = function (value) {
    var promise = PromiEvent(true);
    promise.resolve(value);
    return promise.eventEmitter;
};
module.exports = PromiEvent;


/***/ }),

/***/ 24683:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file extend.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var formatters = __webpack_require__(70222).formatters;
var Method = __webpack_require__(34023);
var utils = __webpack_require__(83317);
var extend = function (pckg) {
    /* jshint maxcomplexity:5 */
    var ex = function (extension) {
        var extendedObject;
        if (extension.property) {
            if (!pckg[extension.property]) {
                pckg[extension.property] = {};
            }
            extendedObject = pckg[extension.property];
        }
        else {
            extendedObject = pckg;
        }
        if (extension.methods) {
            extension.methods.forEach(function (method) {
                if (!(method instanceof Method)) {
                    method = new Method(method);
                }
                method.attachToObject(extendedObject);
                method.setRequestManager(pckg._requestManager);
            });
        }
        return pckg;
    };
    ex.formatters = formatters;
    ex.utils = utils;
    ex.Method = Method;
    return ex;
};
module.exports = extend;


/***/ }),

/***/ 10833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */
const requestManager = __webpack_require__(27014);
const extend = __webpack_require__(24683);
const packageInit = (pkg, args) => {
    args = Array.prototype.slice.call(args);
    if (!pkg) {
        throw new Error('You need to instantiate using the "new" keyword.');
    }
    // make property of pkg._provider, which can properly set providers
    Object.defineProperty(pkg, 'currentProvider', {
        get: () => {
            return pkg._provider;
        },
        set: (value) => {
            return pkg.setProvider(value);
        },
        enumerable: true,
        configurable: true
    });
    // inherit from parent package or create a new RequestManager
    if (args[0] && args[0]._requestManager) {
        pkg._requestManager = args[0]._requestManager;
    }
    else {
        pkg._requestManager = new requestManager.Manager(args[0], args[1]);
    }
    // add givenProvider
    pkg.givenProvider = requestManager.Manager.givenProvider;
    pkg.providers = requestManager.Manager.providers;
    pkg._provider = pkg._requestManager.provider;
    // add SETPROVIDER function (don't overwrite if already existing)
    if (!pkg.setProvider) {
        pkg.setProvider = (provider, net) => {
            pkg._requestManager.setProvider(provider, net);
            pkg._provider = pkg._requestManager.provider;
            return true;
        };
    }
    pkg.setRequestManager = (manager) => {
        pkg._requestManager = manager;
        pkg._provider = manager.provider;
    };
    // attach batch request creation
    pkg.BatchRequest = requestManager.BatchManager.bind(null, pkg._requestManager);
    // attach extend function
    pkg.extend = extend(pkg);
};
const addProviders = (pkg) => {
    pkg.givenProvider = requestManager.Manager.givenProvider;
    pkg.providers = requestManager.Manager.providers;
};
module.exports = {
    packageInit,
    addProviders
};


/***/ }),

/***/ 67541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file iban.js
 *
 * Details: https://github.com/ethereum/wiki/wiki/ICAP:-Inter-exchange-Client-Address-Protocol
 *
 * @author Marek Kotewicz <marek@parity.io>
 * @date 2015
 */

const utils = __webpack_require__(83317);
const BigNumber = __webpack_require__(28891);
const leftPad = function (string, bytes) {
    let result = string;
    while (result.length < bytes * 2) {
        result = '0' + result;
    }
    return result;
};
/**
 * Prepare an IBAN for mod 97 computation by moving the first 4 chars to the end and transforming the letters to
 * numbers (A = 10, B = 11, ..., Z = 35), as specified in ISO13616.
 *
 * @method iso13616Prepare
 * @param {String} iban the IBAN
 * @returns {String} the prepared IBAN
 */
const iso13616Prepare = function (iban) {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    iban = iban.toUpperCase();
    iban = iban.substr(4) + iban.substr(0, 4);
    return iban.split('').map(function (n) {
        const code = n.charCodeAt(0);
        if (code >= A && code <= Z) {
            // A = 10, B = 11, ... Z = 35
            return code - A + 10;
        }
        else {
            return n;
        }
    }).join('');
};
/**
 * Calculates the MOD 97 10 of the passed IBAN as specified in ISO7064.
 *
 * @method mod9710
 * @param {String} iban
 * @returns {Number}
 */
const mod9710 = function (iban) {
    let remainder = iban;
    let block;
    while (remainder.length > 2) {
        block = remainder.slice(0, 9);
        remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
    }
    return parseInt(remainder, 10) % 97;
};
/**
 * This prototype should be used to create iban object from iban correct string
 *
 * @param {String} iban
 */
class Iban {
    constructor(iban) {
        this._iban = iban;
    }
    /**
     * This method should be used to create an ethereum address from a direct iban address
     *
     * @method toAddress
     * @param {String} iban address
     * @return {String} the ethereum address
     */
    static toAddress(ib) {
        ib = new Iban(ib);
        if (!ib.isDirect()) {
            throw new Error('IBAN is indirect and can\'t be converted');
        }
        return ib.toAddress();
    }
    /**
     * This method should be used to create iban address from an ethereum address
     *
     * @method toIban
     * @param {String} address
     * @return {String} the IBAN address
     */
    static toIban(address) {
        return Iban.fromAddress(address).toString();
    }
    /**
     * This method should be used to create iban object from an ethereum address
     *
     * @method fromAddress
     * @param {String} address
     * @return {Iban} the IBAN object
     */
    static fromAddress(address) {
        if (!utils.isAddress(address)) {
            throw new Error('Provided address is not a valid address: ' + address);
        }
        address = address.replace('0x', '').replace('0X', '');
        const asBn = new BigNumber(address, 16);
        const base36 = asBn.toString(36);
        const padded = leftPad(base36, 15);
        return Iban.fromBban(padded.toUpperCase());
    }
    /**
     * Convert the passed BBAN to an IBAN for this country specification.
     * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
     * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
     *
     * @method fromBban
     * @param {String} bban the BBAN to convert to IBAN
     * @returns {Iban} the IBAN object
     */
    static fromBban(bban) {
        const countryCode = 'XE';
        const remainder = mod9710(iso13616Prepare(countryCode + '00' + bban));
        const checkDigit = ('0' + (98 - remainder)).slice(-2);
        return new Iban(countryCode + checkDigit + bban);
    }
    /**
     * Should be used to create IBAN object for given institution and identifier
     *
     * @method createIndirect
     * @param {Object} options, required options are "institution" and "identifier"
     * @return {Iban} the IBAN object
     */
    static createIndirect(options) {
        return Iban.fromBban('ETH' + options.institution + options.identifier);
    }
    /**
     * This method should be used to check if given string is valid iban object
     *
     * @method isValid
     * @param {String} iban string
     * @return {Boolean} true if it is valid IBAN
     */
    static isValid(iban) {
        const i = new Iban(iban);
        return i.isValid();
    }
    ;
    /**
     * Should be called to check if iban is correct
     *
     * @method isValid
     * @returns {Boolean} true if it is, otherwise false
     */
    isValid() {
        return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban) &&
            mod9710(iso13616Prepare(this._iban)) === 1;
    }
    ;
    /**
     * Should be called to check if iban number is direct
     *
     * @method isDirect
     * @returns {Boolean} true if it is, otherwise false
     */
    isDirect() {
        return this._iban.length === 34 || this._iban.length === 35;
    }
    ;
    /**
     * Should be called to check if iban number if indirect
     *
     * @method isIndirect
     * @returns {Boolean} true if it is, otherwise false
     */
    isIndirect() {
        return this._iban.length === 20;
    }
    ;
    /**
     * Should be called to get iban checksum
     * Uses the mod-97-10 checksumming protocol (ISO/IEC 7064:2003)
     *
     * @method checksum
     * @returns {String} checksum
     */
    checksum() {
        return this._iban.substr(2, 2);
    }
    ;
    /**
     * Should be called to get institution identifier
     * eg. XREG
     *
     * @method institution
     * @returns {String} institution identifier
     */
    institution() {
        return this.isIndirect() ? this._iban.substr(7, 4) : '';
    }
    ;
    /**
     * Should be called to get client identifier within institution
     * eg. GAVOFYORK
     *
     * @method client
     * @returns {String} client identifier
     */
    client() {
        return this.isIndirect() ? this._iban.substr(11) : '';
    }
    ;
    /**
     * Should be called to get client direct address
     *
     * @method toAddress
     * @returns {String} ethereum address
     */
    toAddress() {
        if (this.isDirect()) {
            const base36 = this._iban.substr(4);
            const asBn = new BigNumber(base36, 36);
            return utils.toChecksumAddress(asBn.toString(16, 20));
        }
        return '';
    }
    ;
    toString() {
        return this._iban;
    }
    ;
}
module.exports = Iban;


/***/ }),

/***/ 33513:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var core = __webpack_require__(10833);
var Method = __webpack_require__(34023);
var utils = __webpack_require__(83317);
var Net = __webpack_require__(76932);
var formatters = __webpack_require__(70222).formatters;
var Personal = function Personal() {
    var _this = this;
    // sets _requestmanager
    core.packageInit(this, arguments);
    this.net = new Net(this);
    var defaultAccount = null;
    var defaultBlock = 'latest';
    Object.defineProperty(this, 'defaultAccount', {
        get: function () {
            return defaultAccount;
        },
        set: function (val) {
            if (val) {
                defaultAccount = utils.toChecksumAddress(formatters.inputAddressFormatter(val));
            }
            // update defaultBlock
            methods.forEach(function (method) {
                method.defaultAccount = defaultAccount;
            });
            return val;
        },
        enumerable: true
    });
    Object.defineProperty(this, 'defaultBlock', {
        get: function () {
            return defaultBlock;
        },
        set: function (val) {
            defaultBlock = val;
            // update defaultBlock
            methods.forEach(function (method) {
                method.defaultBlock = defaultBlock;
            });
            return val;
        },
        enumerable: true
    });
    var methods = [
        new Method({
            name: 'getAccounts',
            call: 'personal_listAccounts',
            params: 0,
            outputFormatter: utils.toChecksumAddress
        }),
        new Method({
            name: 'newAccount',
            call: 'personal_newAccount',
            params: 1,
            inputFormatter: [null],
            outputFormatter: utils.toChecksumAddress
        }),
        new Method({
            name: 'unlockAccount',
            call: 'personal_unlockAccount',
            params: 3,
            inputFormatter: [formatters.inputAddressFormatter, null, null]
        }),
        new Method({
            name: 'lockAccount',
            call: 'personal_lockAccount',
            params: 1,
            inputFormatter: [formatters.inputAddressFormatter]
        }),
        new Method({
            name: 'importRawKey',
            call: 'personal_importRawKey',
            params: 2
        }),
        new Method({
            name: 'sendTransaction',
            call: 'personal_sendTransaction',
            params: 2,
            inputFormatter: [formatters.inputTransactionFormatter, null]
        }),
        new Method({
            name: 'signTransaction',
            call: 'personal_signTransaction',
            params: 2,
            inputFormatter: [formatters.inputTransactionFormatter, null]
        }),
        new Method({
            name: 'sign',
            call: 'personal_sign',
            params: 3,
            inputFormatter: [formatters.inputSignFormatter, formatters.inputAddressFormatter, null]
        }),
        new Method({
            name: 'ecRecover',
            call: 'personal_ecRecover',
            params: 2,
            inputFormatter: [formatters.inputSignFormatter, null]
        })
    ];
    methods.forEach(function (method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
        method.defaultBlock = _this.defaultBlock;
        method.defaultAccount = _this.defaultAccount;
    });
};
core.addProviders(Personal);
module.exports = Personal;


/***/ }),

/***/ 76932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var core = __webpack_require__(10833);
var Method = __webpack_require__(34023);
var utils = __webpack_require__(83317);
var Net = function () {
    var _this = this;
    // sets _requestmanager
    core.packageInit(this, arguments);
    [
        new Method({
            name: 'getId',
            call: 'net_version',
            params: 0,
            outputFormatter: parseInt
        }),
        new Method({
            name: 'isListening',
            call: 'net_listening',
            params: 0
        }),
        new Method({
            name: 'getPeerCount',
            call: 'net_peerCount',
            params: 0,
            outputFormatter: utils.hexToNumber
        })
    ].forEach(function (method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });
};
core.addProviders(Net);
module.exports = Net;


/***/ }),

/***/ 83361:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file httpprovider.js
 * @authors:
 *   Marek Kotewicz <marek@parity.io>
 *   Marian Oancea
 *   Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2015
 */
var errors = __webpack_require__(70222).errors;
var XHR2 = __webpack_require__(4494)/* .XMLHttpRequest */ .h; // jshint ignore: line
var http = __webpack_require__(98651);
var https = __webpack_require__(2904);
/**
 * HttpProvider should be used to send rpc calls over http
 */
var HttpProvider = function HttpProvider(host, options) {
    options = options || {};
    this.withCredentials = options.withCredentials || false;
    this.timeout = options.timeout || 0;
    this.headers = options.headers;
    this.agent = options.agent;
    this.connected = false;
    // keepAlive is true unless explicitly set to false
    const keepAlive = options.keepAlive !== false;
    this.host = host || 'http://localhost:8545';
    if (!this.agent) {
        if (this.host.substring(0, 5) === "https") {
            this.httpsAgent = new https.Agent({ keepAlive });
        }
        else {
            this.httpAgent = new http.Agent({ keepAlive });
        }
    }
};
HttpProvider.prototype._prepareRequest = function () {
    var request;
    // the current runtime is a browser
    if (typeof XMLHttpRequest !== 'undefined') {
        request = new XMLHttpRequest();
    }
    else {
        request = new XHR2();
        var agents = { httpsAgent: this.httpsAgent, httpAgent: this.httpAgent, baseUrl: this.baseUrl };
        if (this.agent) {
            agents.httpsAgent = this.agent.https;
            agents.httpAgent = this.agent.http;
            agents.baseUrl = this.agent.baseUrl;
        }
        request.nodejsSet(agents);
    }
    request.open('POST', this.host, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.timeout = this.timeout;
    request.withCredentials = this.withCredentials;
    if (this.headers) {
        this.headers.forEach(function (header) {
            request.setRequestHeader(header.name, header.value);
        });
    }
    return request;
};
/**
 * Should be used to make async request
 *
 * @method send
 * @param {Object} payload
 * @param {Function} callback triggered on end with (err, result)
 */
HttpProvider.prototype.send = function (payload, callback) {
    var _this = this;
    var request = this._prepareRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.timeout !== 1) {
            var result = request.responseText;
            var error = null;
            try {
                result = JSON.parse(result);
            }
            catch (e) {
                error = errors.InvalidResponse(request.responseText);
            }
            _this.connected = true;
            callback(error, result);
        }
    };
    request.ontimeout = function () {
        _this.connected = false;
        callback(errors.ConnectionTimeout(this.timeout));
    };
    try {
        request.send(JSON.stringify(payload));
    }
    catch (error) {
        this.connected = false;
        callback(errors.InvalidConnection(this.host));
    }
};
HttpProvider.prototype.disconnect = function () {
    //NO OP
};
/**
 * Returns the desired boolean.
 *
 * @method supportsSubscriptions
 * @returns {boolean}
 */
HttpProvider.prototype.supportsSubscriptions = function () {
    return false;
};
module.exports = HttpProvider;


/***/ }),

/***/ 29763:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file index.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var errors = __webpack_require__(70222).errors;
var oboe = __webpack_require__(11595);
var IpcProvider = function IpcProvider(path, net) {
    var _this = this;
    this.responseCallbacks = {};
    this.notificationCallbacks = [];
    this.path = path;
    this.connected = false;
    this.connection = net.connect({ path: this.path });
    this.addDefaultEvents();
    // LISTEN FOR CONNECTION RESPONSES
    var callback = function (result) {
        /*jshint maxcomplexity: 6 */
        var id = null;
        // get the id which matches the returned id
        if (Array.isArray(result)) {
            result.forEach(function (load) {
                if (_this.responseCallbacks[load.id])
                    id = load.id;
            });
        }
        else {
            id = result.id;
        }
        // notification
        if (!id && result.method.indexOf('_subscription') !== -1) {
            _this.notificationCallbacks.forEach(function (callback) {
                if (typeof callback === 'function')
                    callback(result);
            });
            // fire the callback
        }
        else if (_this.responseCallbacks[id]) {
            _this.responseCallbacks[id](null, result);
            delete _this.responseCallbacks[id];
        }
    };
    // use oboe.js for Sockets
    if (net.constructor.name === 'Socket') {
        oboe(this.connection)
            .done(callback);
    }
    else {
        this.connection.on('data', function (data) {
            _this._parseResponse(data.toString()).forEach(callback);
        });
    }
};
/**
Will add the error and end event to timeout existing calls

@method addDefaultEvents
*/
IpcProvider.prototype.addDefaultEvents = function () {
    var _this = this;
    this.connection.on('connect', function () {
        _this.connected = true;
    });
    this.connection.on('close', function () {
        _this.connected = false;
    });
    this.connection.on('error', function () {
        _this._timeout();
    });
    this.connection.on('end', function () {
        _this._timeout();
    });
    this.connection.on('timeout', function () {
        _this._timeout();
    });
};
/**
 Will parse the response and make an array out of it.

 NOTE, this exists for backwards compatibility reasons.

 @method _parseResponse
 @param {String} data
 */
IpcProvider.prototype._parseResponse = function (data) {
    var _this = this, returnValues = [];
    // DE-CHUNKER
    var dechunkedData = data
        .replace(/\}[\n\r]?\{/g, '}|--|{') // }{
        .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
        .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
        .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
        .split('|--|');
    dechunkedData.forEach(function (data) {
        // prepend the last chunk
        if (_this.lastChunk)
            data = _this.lastChunk + data;
        var result = null;
        try {
            result = JSON.parse(data);
        }
        catch (e) {
            _this.lastChunk = data;
            // start timeout to cancel all requests
            clearTimeout(_this.lastChunkTimeout);
            _this.lastChunkTimeout = setTimeout(function () {
                _this._timeout();
                throw errors.InvalidResponse(data);
            }, 1000 * 15);
            return;
        }
        // cancel timeout and set chunk to null
        clearTimeout(_this.lastChunkTimeout);
        _this.lastChunk = null;
        if (result)
            returnValues.push(result);
    });
    return returnValues;
};
/**
Get the adds a callback to the responseCallbacks object,
which will be called if a response matching the response Id will arrive.

@method _addResponseCallback
*/
IpcProvider.prototype._addResponseCallback = function (payload, callback) {
    var id = payload.id || payload[0].id;
    var method = payload.method || payload[0].method;
    this.responseCallbacks[id] = callback;
    this.responseCallbacks[id].method = method;
};
/**
Timeout all requests when the end/error event is fired

@method _timeout
*/
IpcProvider.prototype._timeout = function () {
    for (var key in this.responseCallbacks) {
        if (this.responseCallbacks.hasOwnProperty(key)) {
            this.responseCallbacks[key](errors.InvalidConnection('on IPC'));
            delete this.responseCallbacks[key];
        }
    }
};
/**
 Try to reconnect

 @method reconnect
 */
IpcProvider.prototype.reconnect = function () {
    this.connection.connect({ path: this.path });
};
IpcProvider.prototype.send = function (payload, callback) {
    // try reconnect, when connection is gone
    if (!this.connection.writable)
        this.connection.connect({ path: this.path });
    this.connection.write(JSON.stringify(payload));
    this._addResponseCallback(payload, callback);
};
/**
Subscribes to provider events.provider

@method on
@param {String} type    'notification', 'connect', 'error', 'end' or 'data'
@param {Function} callback   the callback to call
*/
IpcProvider.prototype.on = function (type, callback) {
    if (typeof callback !== 'function')
        throw new Error('The second parameter callback must be a function.');
    switch (type) {
        case 'data':
            this.notificationCallbacks.push(callback);
            break;
        // adds error, end, timeout, connect
        default:
            this.connection.on(type, callback);
            break;
    }
};
/**
 Subscribes to provider events.provider

 @method on
 @param {String} type    'connect', 'error', 'end' or 'data'
 @param {Function} callback   the callback to call
 */
IpcProvider.prototype.once = function (type, callback) {
    if (typeof callback !== 'function')
        throw new Error('The second parameter callback must be a function.');
    this.connection.once(type, callback);
};
/**
Removes event listener

@method removeListener
@param {String} type    'data', 'connect', 'error', 'end' or 'data'
@param {Function} callback   the callback to call
*/
IpcProvider.prototype.removeListener = function (type, callback) {
    var _this = this;
    switch (type) {
        case 'data':
            this.notificationCallbacks.forEach(function (cb, index) {
                if (cb === callback)
                    _this.notificationCallbacks.splice(index, 1);
            });
            break;
        default:
            this.connection.removeListener(type, callback);
            break;
    }
};
/**
Removes all event listeners

@method removeAllListeners
@param {String} type    'data', 'connect', 'error', 'end' or 'data'
*/
IpcProvider.prototype.removeAllListeners = function (type) {
    switch (type) {
        case 'data':
            this.notificationCallbacks = [];
            break;
        default:
            this.connection.removeAllListeners(type);
            break;
    }
};
/**
Resets the providers, clears all callbacks

@method reset
*/
IpcProvider.prototype.reset = function () {
    this._timeout();
    this.notificationCallbacks = [];
    this.connection.removeAllListeners('error');
    this.connection.removeAllListeners('end');
    this.connection.removeAllListeners('timeout');
    this.addDefaultEvents();
};
/**
 * Returns the desired boolean.
 *
 * @method supportsSubscriptions
 * @returns {boolean}
 */
IpcProvider.prototype.supportsSubscriptions = function () {
    return true;
};
module.exports = IpcProvider;


/***/ }),

/***/ 63182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var core = __webpack_require__(10833);
var Subscriptions = __webpack_require__(84350).subscriptions;
var Method = __webpack_require__(34023);
// var formatters = require('web3-core-helpers').formatters;
var Net = __webpack_require__(76932);
var Shh = function Shh() {
    var _this = this;
    // sets _requestmanager
    core.packageInit(this, arguments);
    // overwrite package setRequestManager
    var setRequestManager = this.setRequestManager;
    this.setRequestManager = function (manager) {
        setRequestManager(manager);
        _this.net.setRequestManager(manager);
        return true;
    };
    // overwrite setProvider
    var setProvider = this.setProvider;
    this.setProvider = function () {
        setProvider.apply(_this, arguments);
        _this.setRequestManager(_this._requestManager);
    };
    this.net = new Net(this);
    [
        new Subscriptions({
            name: 'subscribe',
            type: 'shh',
            subscriptions: {
                'messages': {
                    params: 1
                    // inputFormatter: [formatters.inputPostFormatter],
                    // outputFormatter: formatters.outputPostFormatter
                }
            }
        }),
        new Method({
            name: 'getVersion',
            call: 'shh_version',
            params: 0
        }),
        new Method({
            name: 'getInfo',
            call: 'shh_info',
            params: 0
        }),
        new Method({
            name: 'setMaxMessageSize',
            call: 'shh_setMaxMessageSize',
            params: 1
        }),
        new Method({
            name: 'setMinPoW',
            call: 'shh_setMinPoW',
            params: 1
        }),
        new Method({
            name: 'markTrustedPeer',
            call: 'shh_markTrustedPeer',
            params: 1
        }),
        new Method({
            name: 'newKeyPair',
            call: 'shh_newKeyPair',
            params: 0
        }),
        new Method({
            name: 'addPrivateKey',
            call: 'shh_addPrivateKey',
            params: 1
        }),
        new Method({
            name: 'deleteKeyPair',
            call: 'shh_deleteKeyPair',
            params: 1
        }),
        new Method({
            name: 'hasKeyPair',
            call: 'shh_hasKeyPair',
            params: 1
        }),
        new Method({
            name: 'getPublicKey',
            call: 'shh_getPublicKey',
            params: 1
        }),
        new Method({
            name: 'getPrivateKey',
            call: 'shh_getPrivateKey',
            params: 1
        }),
        new Method({
            name: 'newSymKey',
            call: 'shh_newSymKey',
            params: 0
        }),
        new Method({
            name: 'addSymKey',
            call: 'shh_addSymKey',
            params: 1
        }),
        new Method({
            name: 'generateSymKeyFromPassword',
            call: 'shh_generateSymKeyFromPassword',
            params: 1
        }),
        new Method({
            name: 'hasSymKey',
            call: 'shh_hasSymKey',
            params: 1
        }),
        new Method({
            name: 'getSymKey',
            call: 'shh_getSymKey',
            params: 1
        }),
        new Method({
            name: 'deleteSymKey',
            call: 'shh_deleteSymKey',
            params: 1
        }),
        new Method({
            name: 'newMessageFilter',
            call: 'shh_newMessageFilter',
            params: 1
        }),
        new Method({
            name: 'getFilterMessages',
            call: 'shh_getFilterMessages',
            params: 1
        }),
        new Method({
            name: 'deleteMessageFilter',
            call: 'shh_deleteMessageFilter',
            params: 1
        }),
        new Method({
            name: 'post',
            call: 'shh_post',
            params: 1,
            inputFormatter: [null]
        }),
        new Method({
            name: 'unsubscribe',
            call: 'shh_unsubscribe',
            params: 1
        })
    ].forEach(function (method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });
};
Shh.prototype.clearSubscriptions = function () {
    this._requestManager.clearSubscriptions();
};
core.addProviders(Shh);
module.exports = Shh;


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

/***/ 60759:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"CHROME_ID":"nkbihfbeogaeaoehlefnkodbefgpgknn","FIREFOX_ID":"webextension@metamask.io"}');

/***/ }),

/***/ 91050:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"CHROME_ID":"nkbihfbeogaeaoehlefnkodbefgpgknn","FIREFOX_ID":"webextension@metamask.io"}');

/***/ })

}]);