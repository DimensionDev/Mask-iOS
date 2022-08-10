"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2488],{

/***/ 32488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.1.0/node_modules/async-call-rpc/out/base.min.mjs
var base_min = __webpack_require__(11991);
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



// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.1.0/node_modules/async-call-rpc/out/full.js
var full = __webpack_require__(91147);
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

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./utils-pure/hmr.ts
function startEffects(hot) {
    const ac = new AbortController();
    hot?.dispose(()=>ac.abort()
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

;// CONCATENATED MODULE: ./src/extension/mask-sdk/hmr-sdk.ts


const { signal  } = startEffects(/* unsupported import.meta.webpackHot */ undefined);
try {
    if (false) {}
} catch  {}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(70226);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./src/plugins/External/messages.ts


const ExternalPluginMessages = (0,entry/* createPluginMessage */.I4)('io.mask.external', src/* serializer */.GM);

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
        ExternalPluginMessages.appendComposition.sendToContentScripts({
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
        const f = ExternalPluginMessages.pong.on((i)=>{
            if (i !== challenge) return;
            resolve(currentSNSContext);
            f();
        });
        ExternalPluginMessages.ping.sendToContentScripts({
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
    let meta = undefined;
    if (currentSNSContext) meta = (await service/* default.ThirdPartyPlugin.getHostedMeta */.ZP.ThirdPartyPlugin.getHostedMeta(currentSNSContext))?.[1];
    // TODO: listen to SNSContext connected status
    return maskSDK.request_init({
        SNSContext: {
            connected: Boolean(currentSNSContext),
            meta
        }
    });
}
start();


/***/ })

}]);