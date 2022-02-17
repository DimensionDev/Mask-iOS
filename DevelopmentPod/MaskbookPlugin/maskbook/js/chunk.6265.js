"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6265,9613],{

/***/ 86265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.1/node_modules/async-call-rpc/out/base.min.mjs
var base_min = __webpack_require__(51754);
;// CONCATENATED MODULE: ../mask-sdk/shared/serializer.ts

const serializer = (0,base_min/* JSONSerialization */.mT)([
    (key, value)=>{
        if (value instanceof ArrayBuffer) return ArrayBufferEncode(value);
        if (value instanceof Uint8Array) return U8ArrayEncode(value);
        if (value instanceof Map) return MapEncode(value);
        return value;
    },
    (key, value)=>{
        if (typeof value === 'object' && value !== null && '$type' in value) {
            return ArrayBufferDecode(value) || U8ArrayDecode(value) || MapDecode(value);
        }
        return value;
    }, 
], undefined, 'keep');
const [ArrayBufferEncode, ArrayBufferDecode] = createClassSerializer(ArrayBuffer, (e)=>[
        ...new Uint8Array(e)
    ]
, (e)=>new Uint8Array(e).buffer
);
const [U8ArrayEncode, U8ArrayDecode] = createClassSerializer(Uint8Array, (e)=>[
        ...e
    ]
, (e)=>new Uint8Array(e)
);
const [MapEncode, MapDecode] = createClassSerializer(Map, (e)=>[
        ...e.entries()
    ]
, (e)=>new Map(e)
);
function createClassSerializer(clz, encode, decode) {
    return [
        (v)=>{
            return {
                $type: clz.name,
                value: encode(v)
            };
        },
        (v)=>{
            if (v.$type === clz.name) return decode(v.value);
            return undefined;
        }, 
    ];
}

;// CONCATENATED MODULE: ../mask-sdk/shared/channel.ts
const EVENT_UserScript = '@masknet/sdk-raw/us';
const EVENT_ContentScript = '@masknet/sdk-raw/cs';
function createMaskSDKChannel(side) {
    const thisSide = side === 'content' ? EVENT_ContentScript : EVENT_UserScript;
    const otherSide = side === 'content' ? EVENT_UserScript : EVENT_ContentScript;
    return {
        on (callback) {
            const f = (e)=>{
                if (e instanceof CustomEvent) callback(e.detail);
            };
            document.addEventListener(thisSide, f);
            return ()=>document.removeEventListener(thisSide, f)
            ;
        },
        send (data) {
            document.dispatchEvent(new CustomEvent(otherSide, {
                detail: data
            }));
        }
    };
}

;// CONCATENATED MODULE: ../mask-sdk/shared/index.ts



// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.1/node_modules/async-call-rpc/out/full.js
var full = __webpack_require__(82263);
;// CONCATENATED MODULE: ../mask-sdk/server/index.ts


function createMaskSDKServer(api, signal) {
    // TODO: support AbortSignal
    return (0,full.AsyncCall)(api, {
        serializer: serializer,
        channel: createMaskSDKChannel('content'),
        log: true,
        thenable: false
    });
}

// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./utils-pure/index.ts + 3 modules
var utils_pure = __webpack_require__(49613);
;// CONCATENATED MODULE: ./src/extension/mask-sdk/hmr-sdk.ts


const { signal  } = (0,utils_pure/* startEffects */.Wu)(/* unsupported import.meta.webpackHot */ undefined);
try {
    if (false) {}
} catch  {}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/plugins/External/messages.ts
var messages = __webpack_require__(81612);
;// CONCATENATED MODULE: ./src/extension/mask-sdk/constants.ts
var constants_SDKErrors;
(function(SDKErrors) {
    SDKErrors["M1_Lack_context_identifier"] = 'MaskErr/1: This page does not tied to any SNS context.';
    SDKErrors["M2_Context_disconnected"] = 'MaskErr/2: The SNS context associated with this page has gone.';
    SDKErrors["M3_Permission_denied"] = 'MaskErr/3: Permission not granted.';
})(constants_SDKErrors || (constants_SDKErrors = {}));

;// CONCATENATED MODULE: ./src/extension/mask-sdk/bridge/sns_context.ts


const SNSMethods = {
    async sns_appendComposition (message, payload = new Map()) {
        const context = await __validateRemoteContext();
        const url = currentBaseURL.replace(/^https?:\/\//, '');
        const namespacedPayload = new Map();
        for (const key of payload.keys()){
            // plugin:dimensiondev.github.io/Mask-Plugin-Example/@v1
            namespacedPayload.set(`plugin:${url}@${key}`, payload.get(key));
        }
        messages/* ExternalPluginMessages.appendComposition.sendToContentScripts */.M.appendComposition.sendToContentScripts({
            payload: namespacedPayload,
            context,
            appendText: message
        });
    }
};
const currentSNSContext = new URL(location.href).searchParams.get('mask_context');
const currentBaseURL = new URL('./', location.href).toString();
async function __assertLocalContext() {
    if (!currentSNSContext) throw new Error(SDKErrors.M1_Lack_context_identifier);
}
function __validateRemoteContext() {
    if (isContextDisconnected) return Promise.reject(new Error(constants_SDKErrors.M2_Context_disconnected));
    return new Promise((resolve, reject)=>{
        if (!currentSNSContext) throw onContextDisconnected();
        const challenge = Math.random();
        const f = messages/* ExternalPluginMessages.pong.on */.M.pong.on((i)=>{
            if (i !== challenge) return;
            resolve(currentSNSContext);
            f();
        });
        messages/* ExternalPluginMessages.ping.sendToContentScripts */.M.ping.sendToContentScripts({
            context: currentSNSContext,
            challenge
        });
        setTimeout(()=>reject(onContextDisconnected())
        , 2000);
    });
}
let isContextDisconnected = false;
function onContextDisconnected() {
    isContextDisconnected = true;
    document.dispatchEvent(new Event('mask-sdk-disconnected'));
    return new Error(constants_SDKErrors.M2_Context_disconnected);
}

;// CONCATENATED MODULE: ./src/extension/mask-sdk/bridge/index.ts


const maskSDKServer = {
    async persona_sign_web3 (message) {
        const result = await service/* default.Identity.signWithPersona */.ZP.Identity.signWithPersona({
            message: String(message),
            method: 'eth'
        });
        return result.signature.signature;
    },
    ...SNSMethods
};

;// CONCATENATED MODULE: ./src/extension/mask-sdk/hmr-bridge.ts

const hmr_sdkServer = {
    ...maskSDKServer
};
if (false) {}

;// CONCATENATED MODULE: ./src/extension/mask-sdk/index.ts





const maskSDK = createMaskSDKServer(hmr_sdkServer);
async function start() {
    var ref;
    let meta = undefined;
    if (currentSNSContext) meta = (ref = await service/* default.ThirdPartyPlugin.getHostedMeta */.ZP.ThirdPartyPlugin.getHostedMeta(currentSNSContext)) === null || ref === void 0 ? void 0 : ref[1];
    // TODO: listen to SNSContext connected status
    return maskSDK.request_init({
        SNSContext: {
            connected: Boolean(currentSNSContext),
            meta
        }
    });
}
start();


/***/ }),

/***/ 81612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ExternalPluginMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);


const ExternalPluginMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)('io.mask.external', _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM);


/***/ }),

/***/ 94165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ assertNonNull)
/* harmony export */ });
/**
 * Ensure a value not null or undefined.
 */ function assertNonNull(val, message = 'Unexpected nil value detected') {
    if (val === null || val === undefined) throw new Error(message);
    return val;
}


/***/ }),

/***/ 23720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ CryptoKeyToJsonWebKey)
/* harmony export */ });
function CryptoKeyToJsonWebKey(key) {
    return crypto.subtle.exportKey('jwk', key);
}


/***/ }),

/***/ 69370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ startEffects)
/* harmony export */ });
function startEffects(hot) {
    const ac = new AbortController();
    hot === null || hot === void 0 ? void 0 : hot.dispose(()=>ac.abort()
    );
    return {
        signal: ac.signal,
        run (callback) {
            try {
                ac.signal.addEventListener('abort', callback());
            } catch (error) {
                console.error(error);
            }
        }
    };
}


/***/ }),

/***/ 49613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iV": () => (/* reexport */ utils_pure_crypto/* CryptoKeyToJsonWebKey */.i),
  "rP": () => (/* reexport */ EMPTY_LIST),
  "G1": () => (/* reexport */ OnDemandWorker),
  "Cq": () => (/* reexport */ assertion/* assertNonNull */.C),
  "J3": () => (/* reexport */ memoizePromise),
  "mS": () => (/* reexport */ type/* restorePrototype */.mS),
  "Yo": () => (/* reexport */ type/* restorePrototypeArray */.Yo),
  "Wu": () => (/* reexport */ hmr/* startEffects */.W)
});

// UNUSED EXPORTS: EMPTY_OBJECT, assert, nonNullable

// EXTERNAL MODULE: ./utils-pure/type/index.ts + 1 modules
var type = __webpack_require__(76871);
// EXTERNAL MODULE: ./utils-pure/assertion/index.ts
var assertion = __webpack_require__(94165);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(77184);
;// CONCATENATED MODULE: ./utils-pure/memoize.ts

/**
 * The promise version of lodash-es/memoize
 * @param f An async function
 * @param resolver If the function has 1 param, it can be undefined
 * as `x => x`. If it has more than 1 param, you must specify a function
 * to map the param the memoize key.
 */ function memoizePromise(f, resolver) {
    if (resolver === undefined) resolver = (x)=>x
    ;
    const memorizedFunction = (0,memoize/* default */.Z)(async function(...args) {
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

;// CONCATENATED MODULE: ./utils-pure/misc.ts
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

// EXTERNAL MODULE: ./utils-pure/hmr.ts
var hmr = __webpack_require__(69370);
// EXTERNAL MODULE: ./utils-pure/crypto/index.ts
var utils_pure_crypto = __webpack_require__(23720);
;// CONCATENATED MODULE: ./utils-pure/OnDemandWorker/index.ts
// Implementation detail
/**
 * A Worker-like class that create/destory Worker on demand.
 *
 * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
 * This "Alive" MUST be the first message.
 */ class OnDemandWorker extends EventTarget {
    watchUsage() {
        const i = setInterval(()=>{
            if (!this.worker) {
                clearInterval(i);
                return;
            }
            if (Date.now() - this.lastUsed > this.inactiveTimeToTerminate) {
                this.log('inactive for', this.inactiveTimeToTerminate / 1000, 'sec');
                this.terminate();
                clearInterval(i);
            }
        }, Math.min(this.inactiveTimeToTerminate, 60 * 1000));
    }
    log(...args) {
    // console.log(`OnDemandWorker ${this.init[1]?.name}`, ...args)
    }
    use(onReady) {
        this.keepAlive();
        if (this.worker) return onReady();
        this.worker = new Worker(...this.__init);
        // TODO: what if the worker does not start successfully?
        this.worker.addEventListener('message', ()=>{
            this.worker.addEventListener('message', (e)=>this.dispatchEvent(cloneEvent(e))
            );
            onReady();
        }, {
            once: true
        });
        this.worker.addEventListener('error', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.worker.addEventListener('messageerror', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.watchUsage();
    }
    terminate() {
        var ref;
        (ref = this.worker) === null || ref === void 0 ? void 0 : ref.terminate();
        this.worker = undefined;
        this.log('terminated');
        this.dispatchEvent(new Event('terminated'));
    }
    keepAlive() {
        this.log('keep alive');
        this.lastUsed = Date.now();
    }
    onTerminated(callback) {
        this.addEventListener('terminated', callback, {
            once: true
        });
        return ()=>this.removeEventListener('terminated', callback)
        ;
    }
    postMessage(...args) {
        this.use(()=>{
            var ref;
            return (ref = this.worker) === null || ref === void 0 ? void 0 : ref.postMessage(...args);
        });
    }
    set onmessage(_) {
        OnDemandWorker_throws();
    }
    set onerror(_) {
        OnDemandWorker_throws();
    }
    set onmessageerror(_) {
        OnDemandWorker_throws();
    }
    /**
     * A Worker-like class that create/destory Worker on demand.
     *
     * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
     * This "Alive" MUST be the first message.
     */ constructor(...init){
        var ref;
        super();
        this.worker = undefined;
        this.lastUsed = Date.now();
        this.__init = init;
        this.inactiveTimeToTerminate = 15 * 60 * 1000;
        var ref1;
        this.log((ref1 = (ref = init[1]) === null || ref === void 0 ? void 0 : ref.name) !== null && ref1 !== void 0 ? ref1 : 'anonymous Worker', 'created with', ...init);
    }
}
function OnDemandWorker_throws() {
    throw new TypeError('Please use addEventListener');
}
function cloneEvent(e) {
    // @ts-ignore
    return new e.constructor(e.type, e);
}

;// CONCATENATED MODULE: ./utils-pure/index.ts









/***/ }),

/***/ 76871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mS": () => (/* reexport */ restorePrototype),
  "Yo": () => (/* reexport */ restorePrototypeArray)
});

// UNUSED EXPORTS: assert, nonNullable

;// CONCATENATED MODULE: ./utils-pure/type/prototype.ts
/**
 * @description Restore prototype on an object. This does not work with classes that uses ES private field.
 * @example
 * restorePrototype({ value: 1 }, SomeClass.prototype)
 * @param obj The prototype-less object.
 * @param prototype The prototype object
 * @returns The original object with prototype restored.
 */ function restorePrototype(obj, prototype) {
    if (!obj) return obj;
    Object.setPrototypeOf(obj, prototype);
    return obj;
}
function restorePrototypeArray(arr, prototype) {
    if (!arr) return arr;
    arr.forEach((x)=>Object.setPrototypeOf(x, prototype)
    );
    return arr;
}

;// CONCATENATED MODULE: ./utils-pure/type/index.ts

function assert(x, ...args) {
    console.assert(x, ...args);
    if (!x) throw new Error('Assert failed!');
}
function nonNullable(x) {
    return x !== undefined && x !== null;
}


/***/ })

}]);