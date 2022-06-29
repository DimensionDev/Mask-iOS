"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5255],{

/***/ 63369:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=anchor-service.js.map

/***/ }),

/***/ 96328:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ceramic-api.js.map

/***/ }),

/***/ 28330:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=context.js.map

/***/ }),

/***/ 14509:
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
__exportStar(__webpack_require__(63369), exports);
__exportStar(__webpack_require__(96328), exports);
__exportStar(__webpack_require__(28330), exports);
__exportStar(__webpack_require__(65051), exports);
__exportStar(__webpack_require__(22442), exports);
__exportStar(__webpack_require__(86280), exports);
__exportStar(__webpack_require__(10876), exports);
__exportStar(__webpack_require__(70878), exports);
__exportStar(__webpack_require__(78697), exports);
__exportStar(__webpack_require__(71606), exports);
__exportStar(__webpack_require__(45918), exports);
__exportStar(__webpack_require__(34584), exports);
__exportStar(__webpack_require__(7478), exports);
__exportStar(__webpack_require__(91776), exports);
__exportStar(__webpack_require__(64115), exports);
__exportStar(__webpack_require__(42843), exports);
__exportStar(__webpack_require__(85817), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 34584:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerProviderBase = exports.ServiceLoggerBase = exports.DiagnosticsLoggerBase = exports.LogLevel = exports.LogStyle = void 0;
var LogStyle;
(function (LogStyle) {
    LogStyle["verbose"] = "info";
    LogStyle["info"] = "info";
    LogStyle["imp"] = "imp";
    LogStyle["warn"] = "warn";
    LogStyle["err"] = "err";
})(LogStyle = exports.LogStyle || (exports.LogStyle = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["verbose"] = 0] = "verbose";
    LogLevel[LogLevel["debug"] = 1] = "debug";
    LogLevel[LogLevel["important"] = 2] = "important";
    LogLevel[LogLevel["warn"] = 3] = "warn";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class DiagnosticsLoggerBase {
    constructor(logLevel, logToFiles, fileLogger) {
        this.logLevel = logLevel;
        this.includeStackTrace = this.logLevel <= LogLevel.debug ? true : false;
        this.logToFiles = logToFiles;
        this.fileLogger = fileLogger;
    }
    write(content) {
        this.debug(content);
    }
    verbose(content) {
        if (this.logLevel > LogLevel.verbose) {
            return;
        }
        this.log(LogStyle.verbose, content);
    }
    debug(content) {
        if (this.logLevel > LogLevel.debug) {
            return;
        }
        this.log(LogStyle.info, content);
    }
    imp(content) {
        if (this.logLevel > LogLevel.important) {
            return;
        }
        this.log(LogStyle.imp, content);
    }
    warn(content) {
        this.log(LogStyle.warn, content);
    }
    err(content) {
        this.log(LogStyle.err, content);
    }
    log(style, content) {
        throw new Error('Not implmented in base class');
    }
}
exports.DiagnosticsLoggerBase = DiagnosticsLoggerBase;
class ServiceLoggerBase {
    constructor(service, logLevel, logToFiles, stream) {
        this.service = service;
        this.logLevel = logLevel;
        this.logToFiles = logToFiles;
        this.stream = stream;
        this.logToConsole = this.logLevel <= LogLevel.debug;
    }
    log(serviceLog) {
        this.write(this.format(serviceLog));
    }
    write(message) {
        const now = new Date();
        message = `[${now.toUTCString()}] service=${this.service} ${message}`;
        if (this.logToConsole) {
            console.log(message);
        }
    }
    format(serviceLog) {
        throw new Error('Not implmented in base class');
    }
}
exports.ServiceLoggerBase = ServiceLoggerBase;
const DEFAULT_LOG_CONFIG = {
    logLevel: LogLevel.important,
    logToFiles: false,
};
class LoggerProviderBase {
    constructor(config = {}, fileLoggerFactory) {
        this.config = {
            logLevel: config.logLevel !== undefined ? config.logLevel : DEFAULT_LOG_CONFIG.logLevel,
            logToFiles: config.logToFiles !== undefined ? config.logToFiles : DEFAULT_LOG_CONFIG.logToFiles,
            logDirectory: config.logDirectory,
        };
        this._fileLoggerFactory = fileLoggerFactory;
        if (this.config.logToFiles && !this._fileLoggerFactory) {
            throw new Error('Must provide a FileLoggerFactory in order to log to files');
        }
        this._diagnosticLogger = this._makeDiagnosticLogger();
    }
    _makeDiagnosticLogger() {
        throw new Error('Not implmented in base class');
    }
    getDiagnosticsLogger() {
        return this._diagnosticLogger;
    }
    makeServiceLogger(serviceName) {
        throw new Error('Not implmented in base class');
    }
}
exports.LoggerProviderBase = LoggerProviderBase;
//# sourceMappingURL=logger-base.js.map

/***/ }),

/***/ 78697:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerProvider = void 0;
const loggers_browser_1 = __webpack_require__(71606);
const logger_base_1 = __webpack_require__(34584);
class LoggerProvider extends logger_base_1.LoggerProviderBase {
    _makeDiagnosticLogger() {
        return new loggers_browser_1.DiagnosticsLogger(this.config.logLevel);
    }
    makeServiceLogger(serviceName) {
        return new loggers_browser_1.ServiceLogger(serviceName, this.config.logLevel);
    }
}
exports.LoggerProvider = LoggerProvider;
//# sourceMappingURL=logger-provider-browser.js.map

/***/ }),

/***/ 71606:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceLogger = exports.DiagnosticsLogger = void 0;
const logger_base_1 = __webpack_require__(34584);
const flat_1 = __importDefault(__webpack_require__(47089));
const consoleLogger = {
    info: console.log,
    imp: console.log,
    warn: console.warn,
    err: console.error,
};
class DiagnosticsLogger extends logger_base_1.DiagnosticsLoggerBase {
    constructor(logLevel) {
        super(logLevel, false);
        this.logger = consoleLogger;
    }
    log(style, content) {
        this.logger[style](content);
    }
}
exports.DiagnosticsLogger = DiagnosticsLogger;
class ServiceLogger extends logger_base_1.ServiceLoggerBase {
    constructor(service, logLevel) {
        super(service, logLevel, false);
    }
    format(serviceLog) {
        return JSON.stringify(flat_1.default(serviceLog));
    }
}
exports.ServiceLogger = ServiceLogger;
//# sourceMappingURL=loggers-browser.js.map

/***/ }),

/***/ 45918:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Networks = void 0;
var Networks;
(function (Networks) {
    Networks["MAINNET"] = "mainnet";
    Networks["ELP"] = "elp";
    Networks["TESTNET_CLAY"] = "testnet-clay";
    Networks["DEV_UNSTABLE"] = "dev-unstable";
    Networks["LOCAL"] = "local";
    Networks["INMEMORY"] = "inmemory";
})(Networks = exports.Networks || (exports.Networks = {}));
//# sourceMappingURL=networks.js.map

/***/ }),

/***/ 7478:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=pinning.js.map

/***/ }),

/***/ 64115:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=running-state-like.js.map

/***/ }),

/***/ 42843:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StreamStateSubject = void 0;
const rxjs_1 = __webpack_require__(43790);
const stream_utils_1 = __webpack_require__(10876);
class StreamStateSubject extends rxjs_1.BehaviorSubject {
    next(next) {
        const current = this.value;
        if (!stream_utils_1.StreamUtils.statesEqual(current, next)) {
            super.next(next);
        }
    }
}
exports.StreamStateSubject = StreamStateSubject;
//# sourceMappingURL=stream-state-subject.js.map

/***/ }),

/***/ 22442:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StreamStatic = exports.Stream = exports.CommitType = exports.AnchorStatus = exports.SignatureStatus = void 0;
const lodash_clonedeep_1 = __importDefault(__webpack_require__(80022));
const streamid_1 = __webpack_require__(99609);
const rxjs_1 = __webpack_require__(43790);
const streamopts_1 = __webpack_require__(65051);
var SignatureStatus;
(function (SignatureStatus) {
    SignatureStatus[SignatureStatus["GENESIS"] = 0] = "GENESIS";
    SignatureStatus[SignatureStatus["PARTIAL"] = 1] = "PARTIAL";
    SignatureStatus[SignatureStatus["SIGNED"] = 2] = "SIGNED";
})(SignatureStatus = exports.SignatureStatus || (exports.SignatureStatus = {}));
var AnchorStatus;
(function (AnchorStatus) {
    AnchorStatus[AnchorStatus["NOT_REQUESTED"] = 0] = "NOT_REQUESTED";
    AnchorStatus[AnchorStatus["PENDING"] = 1] = "PENDING";
    AnchorStatus[AnchorStatus["PROCESSING"] = 2] = "PROCESSING";
    AnchorStatus[AnchorStatus["ANCHORED"] = 3] = "ANCHORED";
    AnchorStatus[AnchorStatus["FAILED"] = 4] = "FAILED";
})(AnchorStatus = exports.AnchorStatus || (exports.AnchorStatus = {}));
var CommitType;
(function (CommitType) {
    CommitType[CommitType["GENESIS"] = 0] = "GENESIS";
    CommitType[CommitType["SIGNED"] = 1] = "SIGNED";
    CommitType[CommitType["ANCHOR"] = 2] = "ANCHOR";
})(CommitType = exports.CommitType || (exports.CommitType = {}));
class Stream extends rxjs_1.Observable {
    constructor(state$, _context) {
        super((subscriber) => {
            state$.subscribe(subscriber);
        });
        this.state$ = state$;
        this._context = _context;
    }
    get id() {
        return new streamid_1.StreamID(this.state$.value.type, this.state$.value.log[0].cid);
    }
    get api() {
        return this._context.api;
    }
    get metadata() {
        var _a;
        const { next, metadata } = this.state$.value;
        return lodash_clonedeep_1.default((_a = next === null || next === void 0 ? void 0 : next.metadata) !== null && _a !== void 0 ? _a : metadata);
    }
    get content() {
        var _a;
        const { next, content } = this.state$.value;
        return lodash_clonedeep_1.default((_a = next === null || next === void 0 ? void 0 : next.content) !== null && _a !== void 0 ? _a : content);
    }
    get controllers() {
        return this.metadata.controllers;
    }
    get tip() {
        return this.state$.value.log[this.state$.value.log.length - 1].cid;
    }
    get commitId() {
        return this.id.atCommit(this.tip);
    }
    get allCommitIds() {
        return this.state$.value.log.map(({ cid }) => this.id.atCommit(cid));
    }
    get anchorCommitIds() {
        return this.state$.value.log
            .filter(({ type }) => type === CommitType.ANCHOR)
            .map(({ cid }) => this.id.atCommit(cid));
    }
    get state() {
        return lodash_clonedeep_1.default(this.state$.value);
    }
    async sync(opts = {}) {
        opts = { sync: streamopts_1.SyncOptions.PREFER_CACHE, ...opts };
        const stream = await this.api.loadStream(this.id, opts);
        this.state$.next(stream.state);
    }
    async requestAnchor() {
        return this.api.requestAnchor(this.id);
    }
}
exports.Stream = Stream;
function StreamStatic() {
    return (constructor) => {
        constructor;
    };
}
exports.StreamStatic = StreamStatic;
//# sourceMappingURL=stream.js.map

/***/ }),

/***/ 65051:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SyncOptions = void 0;
var SyncOptions;
(function (SyncOptions) {
    SyncOptions[SyncOptions["PREFER_CACHE"] = 0] = "PREFER_CACHE";
    SyncOptions[SyncOptions["SYNC_ALWAYS"] = 1] = "SYNC_ALWAYS";
    SyncOptions[SyncOptions["NEVER_SYNC"] = 2] = "NEVER_SYNC";
})(SyncOptions = exports.SyncOptions || (exports.SyncOptions = {}));
//# sourceMappingURL=streamopts.js.map

/***/ }),

/***/ 85817:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionSet = void 0;
class SubscriptionSet {
    constructor(subscriptions = new Set()) {
        this.subscriptions = subscriptions;
    }
    add(subscription) {
        subscription.add(() => {
            this.subscriptions.delete(subscription);
        });
        this.subscriptions.add(subscription);
    }
    unsubscribe() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
exports.SubscriptionSet = SubscriptionSet;
//# sourceMappingURL=subscription-set.js.map

/***/ }),

/***/ 91776:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnreachableCaseError = void 0;
class UnreachableCaseError extends Error {
    constructor(variant, message) {
        super(`Unhandled ${JSON.stringify(variant)}: ${message}`);
    }
}
exports.UnreachableCaseError = UnreachableCaseError;
//# sourceMappingURL=unreachable-case-error.js.map

/***/ }),

/***/ 86280:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetchJson = void 0;
const cross_fetch_1 = __importDefault(__webpack_require__(92317));
const abort_controller_1 = __importDefault(__webpack_require__(73019));
const DEFAULT_FETCH_TIMEOUT = 60 * 1000 * 3;
async function fetchJson(url, opts = {}) {
    if (opts.body) {
        Object.assign(opts, {
            body: JSON.stringify(opts.body),
            headers: { 'Content-Type': 'application/json' },
        });
    }
    const timeoutLength = opts.timeout || DEFAULT_FETCH_TIMEOUT;
    const controller = new abort_controller_1.default();
    const timeout = setTimeout(() => {
        controller.abort();
    }, timeoutLength);
    Object.assign(opts, {
        signal: controller.signal,
    });
    const res = await cross_fetch_1.default(url, opts)
        .catch((err) => {
        if (err.name == 'AbortError') {
            throw new Error(`Http request timed out after ${timeoutLength} ms`);
        }
        throw err;
    })
        .finally(() => timeout && clearTimeout(timeout));
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP request to '${url}' failed with status '${res.statusText}': ${text}`);
    }
    return res.json();
}
exports.fetchJson = fetchJson;
//# sourceMappingURL=http-utils.js.map

/***/ }),

/***/ 10876:
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StreamUtils = void 0;
const cids_1 = __importDefault(__webpack_require__(55271));
const lodash_clonedeep_1 = __importDefault(__webpack_require__(80022));
const u8a = __importStar(__webpack_require__(31605));
const stream_1 = __webpack_require__(22442);
const streamid_1 = __webpack_require__(99609);
class StreamUtils {
    static streamIdFromState(state) {
        return new streamid_1.StreamID(state.type, state.log[0].cid);
    }
    static serializeCommit(commit) {
        const cloned = lodash_clonedeep_1.default(commit);
        if (StreamUtils.isSignedCommitContainer(cloned)) {
            cloned.jws.link = cloned.jws.link.toString();
            cloned.linkedBlock = u8a.toString(cloned.linkedBlock, 'base64');
            return cloned;
        }
        if (StreamUtils.isSignedCommit(commit)) {
            cloned.link = cloned.link.toString();
        }
        if (StreamUtils.isAnchorCommit(commit)) {
            cloned.proof = cloned.proof.toString();
        }
        if (cloned.id) {
            cloned.id = cloned.id.toString();
        }
        if (cloned.prev) {
            cloned.prev = cloned.prev.toString();
        }
        return cloned;
    }
    static deserializeCommit(commit) {
        const cloned = lodash_clonedeep_1.default(commit);
        if (StreamUtils.isSignedCommitContainer(cloned)) {
            cloned.jws.link = new cids_1.default(cloned.jws.link);
            cloned.linkedBlock = u8a.fromString(cloned.linkedBlock, 'base64');
            return cloned;
        }
        if (StreamUtils.isSignedCommit(cloned)) {
            cloned.link = new cids_1.default(cloned.link);
        }
        if (StreamUtils.isAnchorCommit(cloned)) {
            cloned.proof = new cids_1.default(cloned.proof);
        }
        if (cloned.id) {
            cloned.id = new cids_1.default(cloned.id);
        }
        if (cloned.prev) {
            cloned.prev = new cids_1.default(cloned.prev);
        }
        return cloned;
    }
    static serializeState(state) {
        const cloned = lodash_clonedeep_1.default(state);
        cloned.log = cloned.log.map((entry) => ({ ...entry, cid: entry.cid.toString() }));
        if (cloned.anchorStatus != null) {
            cloned.anchorStatus = stream_1.AnchorStatus[cloned.anchorStatus];
        }
        if (cloned.anchorScheduledFor != null) {
            cloned.anchorScheduledFor = new Date(cloned.anchorScheduledFor).toISOString();
        }
        if (cloned.anchorProof != null) {
            cloned.anchorProof.txHash = cloned.anchorProof.txHash.toString();
            cloned.anchorProof.root = cloned.anchorProof.root.toString();
        }
        if (cloned.lastAnchored != null) {
            cloned.lastAnchored = cloned.lastAnchored.toString();
        }
        cloned.doctype = streamid_1.StreamType.nameByCode(cloned.type);
        return cloned;
    }
    static deserializeState(state) {
        const cloned = lodash_clonedeep_1.default(state);
        if (cloned.doctype) {
            cloned.type = streamid_1.StreamType.codeByName(cloned.doctype);
            delete cloned.doctype;
        }
        cloned.log = cloned.log.map((entry) => ({ ...entry, cid: new cids_1.default(entry.cid) }));
        if (cloned.anchorProof) {
            cloned.anchorProof.txHash = new cids_1.default(cloned.anchorProof.txHash);
            cloned.anchorProof.root = new cids_1.default(cloned.anchorProof.root);
        }
        let showScheduledFor = true;
        if (cloned.anchorStatus) {
            cloned.anchorStatus = stream_1.AnchorStatus[cloned.anchorStatus];
            showScheduledFor =
                cloned.anchorStatus !== stream_1.AnchorStatus.FAILED && cloned.anchorStatus !== stream_1.AnchorStatus.ANCHORED;
        }
        if (cloned.anchorScheduledFor) {
            if (showScheduledFor) {
                cloned.anchorScheduledFor = Date.parse(cloned.anchorScheduledFor);
            }
            else {
                delete cloned.anchorScheduledFor;
            }
        }
        if (cloned.lastAnchored) {
            cloned.lastAnchored = new cids_1.default(cloned.lastAnchored);
        }
        return cloned;
    }
    static statesEqual(state1, state2) {
        return (JSON.stringify(StreamUtils.serializeState(state1)) ===
            JSON.stringify(StreamUtils.serializeState(state2)));
    }
    static isStateSupersetOf(state, base) {
        if (state.log.length < base.log.length) {
            return false;
        }
        for (const i in base.log) {
            if (!state.log[i].cid.equals(base.log[i].cid)) {
                return false;
            }
        }
        if (state.anchorStatus != base.anchorStatus) {
            return false;
        }
        return true;
    }
    static async convertCommitToSignedCommitContainer(commit, ipfs) {
        if (StreamUtils.isSignedCommit(commit)) {
            const block = await ipfs.block.get(commit.link);
            return {
                jws: commit,
                linkedBlock: block.data,
            };
        }
        return commit;
    }
    static isSignedCommitContainer(commit) {
        return commit && commit.jws !== undefined;
    }
    static isSignedCommit(commit) {
        return commit && commit.link !== undefined;
    }
    static isAnchorCommit(commit) {
        return commit && commit.proof !== undefined;
    }
    static isSignedCommitData(commitData) {
        return commitData && commitData.envelope !== undefined;
    }
    static isAnchorCommitData(commitData) {
        return commitData && commitData.proof !== undefined;
    }
}
exports.StreamUtils = StreamUtils;
//# sourceMappingURL=stream-utils.js.map

/***/ }),

/***/ 70878:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TestUtils = void 0;
const operators_1 = __webpack_require__(37857);
const rxjs_1 = __webpack_require__(43790);
const streamid_1 = __webpack_require__(99609);
class FakeRunningState extends rxjs_1.BehaviorSubject {
    constructor(value) {
        super(value);
        this.state = this.value;
        this.id = new streamid_1.StreamID(this.state.type, this.state.log[0].cid);
    }
}
class TestUtils {
    static registerChangeListener(stream) {
        return stream.pipe(operators_1.take(1)).toPromise();
    }
    static async waitForState(stream, timeout, predicate, onFailure) {
        if (predicate(stream.state))
            return;
        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, timeout));
        const completionPromise = stream.pipe(operators_1.filter((state) => predicate(state))).toPromise();
        await Promise.race([timeoutPromise, completionPromise]);
        if (!predicate(stream.state)) {
            onFailure();
        }
    }
    static runningState(state) {
        return new FakeRunningState(state);
    }
    static async delay(ms) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), ms);
        });
    }
}
exports.TestUtils = TestUtils;
//# sourceMappingURL=test-utils.js.map

/***/ })

}]);