"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3939],{

/***/ 88299:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(58757),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 73742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M1": () => (/* binding */ pasteText),
/* harmony export */   "Mx": () => (/* binding */ pasteImage),
/* harmony export */   "X2": () => (/* binding */ pasteInstagram),
/* harmony export */   "ed": () => (/* binding */ hookInputUploadOnce),
/* harmony export */   "iJ": () => (/* binding */ inputText),
/* harmony export */   "ju": () => (/* binding */ injectedPhantomProvider),
/* harmony export */   "pb": () => (/* binding */ injectedCoin98SolanaProvider),
/* harmony export */   "yR": () => (/* binding */ injectedSolflareProvider)
/* harmony export */ });
/* unused harmony exports injectedCoin98EVMProvider, injectedMetaMaskProvider, injectedMathWalletProvider, injectedWalletLinkProvider */
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43906);
/* harmony import */ var _Coin98__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45169);
/* harmony import */ var _Phantom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34240);
/* harmony import */ var _Solflare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14732);
/* harmony import */ var _MetaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24142);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28383);
/* harmony import */ var _MathWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42362);
/* harmony import */ var _WalletLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36859);








const injectedCoin98EVMProvider = new _Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98Provider */ .v(_Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98ProviderType.EVM */ .E.EVM);
const injectedCoin98SolanaProvider = new _Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98Provider */ .v(_Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98ProviderType.Solana */ .E.Solana);
const injectedPhantomProvider = new _Phantom__WEBPACK_IMPORTED_MODULE_2__/* .PhantomProvider */ .p();
const injectedSolflareProvider = new _Solflare__WEBPACK_IMPORTED_MODULE_3__/* .SolflareProvider */ .B();
const injectedMetaMaskProvider = new _MetaMask__WEBPACK_IMPORTED_MODULE_4__/* .MetaMaskProvider */ .Y();
const injectedMathWalletProvider = new _MathWallet__WEBPACK_IMPORTED_MODULE_6__/* .MathWalletProvider */ .W();
const injectedWalletLinkProvider = new _WalletLink__WEBPACK_IMPORTED_MODULE_7__/* .WalletLinkProvider */ .J();
function pasteText(text) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('paste', text);
}
function pasteImage(image) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('pasteImage', Array.from(image));
}
function pasteInstagram(url) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('instagramUpload', url);
}
function inputText(text) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('input', text);
}
function hookInputUploadOnce(format, fileName, image, triggerOnActiveElementNow = false) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('hookInputUploadOnce', format, fileName, Array.from(image), triggerOnActiveElementNow);
}
document.addEventListener(_shared__WEBPACK_IMPORTED_MODULE_0__/* .CustomEventId */ .OV, (e)=>{
    const r = (0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .decodeEvent */ .Vu)(e.detail);
    if (r[1].length < 1) return;
    switch(r[0]){
        case 'resolvePromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .resolvePromise */ .LD)(...r[1]);
        case 'rejectPromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .rejectPromise */ .Eu)(...r[1]);
        case 'web3BridgeEmitEvent':
            const [pathname, eventName, data] = r[1];
            const provider = [
                injectedCoin98EVMProvider,
                injectedCoin98SolanaProvider,
                injectedPhantomProvider,
                injectedMetaMaskProvider,
                injectedMathWalletProvider,
                injectedWalletLinkProvider, 
            ].find((x)=>x.pathname === pathname
            );
            provider?.emit(eventName, data);
            return;
        case 'web3BridgeBindEvent':
        case 'web3BridgeSendRequest':
        case 'web3BridgeExecute':
        case 'web3UntilBridgeOnline':
        case 'web3BridgePrimitiveAccess':
        case 'input':
        case 'paste':
        case 'pasteImage':
        case 'instagramUpload':
        case 'hookInputUploadOnce':
            break;
        default:
            const neverEvent = r[0];
            console.log('[@masknet/injected-script]', neverEvent, 'not handled');
    }
});


/***/ }),

/***/ 43906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nu": () => (/* binding */ encodeEvent),
/* harmony export */   "OV": () => (/* binding */ CustomEventId),
/* harmony export */   "Vu": () => (/* binding */ decodeEvent)
/* harmony export */ });
const CustomEventId = 'c8a6c18e-f6a3-472a-adf3-5335deb80db6';
const { parse , stringify  } = JSON;
const { isArray  } = Array;
function encodeEvent(key, args) {
    return stringify([
        key,
        args
    ]);
}
function decodeEvent(data) {
    const result = parse(data);
    // Do not throw new Error cause it requires a global lookup.
    // eslint-disable-next-line
    if (!isEventItemBeforeSerialization(result)) throw null;
    return result;
}
function isEventItemBeforeSerialization(data) {
    if (!isArray(data)) return false;
    if (data.length !== 2) return false;
    if (typeof data[0] !== 'string') return false;
    if (!isArray(data[1])) return false;
    return true;
}


/***/ }),

/***/ 61937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* reexport safe */ _download__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42886);



/***/ }),

/***/ 94670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_H": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__._H),
/* harmony export */   "ql": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "rs": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.r),
/* harmony export */   "uU": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__.uU),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.vU)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29130);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39820);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25683);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61937);






/***/ }),

/***/ 82192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.BE),
/* harmony export */   "Du": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "EJ": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.globalUIState),
/* harmony export */   "LM": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activatedSocialNetworkUI),
/* harmony export */   "ZZ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25513);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58248);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20940);






/***/ }),

/***/ 4004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3808);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76618);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);




function Avatar({ person , ...props }) {
    const { avatar , nickname , identifier  } = person;
    const name = identifier.userId || nickname || '';
    const [first, last] = name.split(' ');
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)().palette.mode;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        "aria-label": name,
        src: avatar,
        style: {
            backgroundColor: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .generateContactAvatarColor */ .eP)(identifier.toText(), theme)
        },
        ...props,
        children: [
            first[0],
            (last || '')[0]
        ]
    });
}


/***/ }),

/***/ 49723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useLocationChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);

function useLocationChange(handler) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener('locationchange', handler);
        return ()=>window.removeEventListener('locationchange', handler)
        ;
    }, [
        handler
    ]);
}


/***/ }),

/***/ 93455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qE": () => (/* reexport */ Avatar/* Avatar */.q),
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
  "aW": () => (/* reexport */ collectNodeText/* collectNodeText */.a),
  "_r": () => (/* reexport */ collectNodeText/* collectTwitterEmoji */._),
  "ou": () => (/* reexport */ renderInShadowRoot/* createReactRootShadowed */.o),
  "GR": () => (/* reexport */ utils/* downloadUrl */.GR),
  "$I": () => (/* reexport */ suspends/* getAssetAsBlobURL */.$),
  "dF": () => (/* reexport */ theme/* getBackgroundColor */.dF),
  "c_": () => (/* reexport */ getTextUILength/* getTextUILength */.c),
  "sC": () => (/* reexport */ type_transform/* hasPayloadLike */.s),
  "bF": () => (/* reexport */ utils/* pasteImageToActiveElements */.bF),
  "Vc": () => (/* reexport */ renderInShadowRoot/* setupShadowRootPortal */.V),
  "cc": () => (/* reexport */ getTextUILength/* sliceTextByUILength */.L),
  "fy": () => (/* reexport */ watcher/* startWatch */.f),
  "ft": () => (/* reexport */ dom/* untilElementAvailable */.f),
  "JN": () => (/* reexport */ theme/* useClassicMaskSNSPluginTheme */.JN),
  "D2": () => (/* reexport */ useControlledDialog/* useControlledDialog */.D),
  "M1": () => (/* reexport */ i18n_next_ui/* useI18N */.M),
  "ZK": () => (/* reexport */ i18n_next_ui/* useLanguage */.Z),
  "SL": () => (/* reexport */ useLocationChange/* useLocationChange */.S),
  "IN": () => (/* reexport */ useMatchXS/* useMatchXS */.I),
  "H9": () => (/* reexport */ useMenu/* useMenu */.H),
  "eD": () => (/* reexport */ useQueryNavigatorPermission),
  "Ei": () => (/* reexport */ useSettingSwitcher/* useSwitcher */.E)
});

// UNUSED EXPORTS: MaskDarkTheme, MaskLightTheme, asyncIteratorToArray, createNormalReactRoot, extraPermissions, fromRGB, getForegroundColor, isDark, isDarkTheme, nthChild, regexMatch, selectElementContents, shade, toRGB, useClassicMaskSNSTheme, useColorStyles, useErrorStyles, useSettingsSwitcher, useSuspense, useThemeLanguage

// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(4004);
;// CONCATENATED MODULE: ./src/utils/components/index.ts


// EXTERNAL MODULE: ./src/utils/debug/index.ts
var debug = __webpack_require__(55802);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(45908);
// EXTERNAL MODULE: ./src/utils/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(9178);
// EXTERNAL MODULE: ./src/utils/hooks/useMenu.tsx
var useMenu = __webpack_require__(78831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/hasIn.js + 2 modules
var hasIn = __webpack_require__(61451);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/utils/hooks/useQueryNavigatorPermission.ts
/** This file is published under MIT License */ 


const q = [
    'query',
    'request',
    'revoke'
];
function checkPermissionApiUsability(type) {
    const r = {};
    for (const v of q){
        r[v] = (0,hasIn/* default */.Z)(navigator, `permissions.${v}`);
    }
    if (type) {
        return r[type];
    }
    return r;
}
function useQueryNavigatorPermission(needRequest, name) {
    const [permission, updatePermission] = (0,react.useState)('prompt');
    (0,react.useEffect)(()=>{
        // TODO: Only camera related APi need to check Flags.has_no_WebRTC
        if (!needRequest || permission !== 'prompt' || shared/* Flags.has_no_WebRTC */.vU.has_no_WebRTC) return;
        let permissionStatus;
        const handleChange = function() {
            updatePermission(this.state);
        };
        if (checkPermissionApiUsability('query')) {
            navigator.permissions// @ts-expect-error https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-898868275
            .query({
                name
            }).then((p)=>{
                permissionStatus = p;
                permissionStatus.addEventListener('change', handleChange);
                updatePermission(permissionStatus.state);
            }).catch(()=>{
                // for some user agents which implemented `query` method
                // but rise an error if specific permission name dose not supported
                updatePermission('granted');
            });
        } else if (checkPermissionApiUsability('request')) {
            navigator.permissions// @ts-expect-error https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-898868275
            .request({
                name
            }).then((p)=>{
                updatePermission(p.state);
            }).catch(()=>{
                updatePermission('granted');
            });
        } else {
            updatePermission('granted');
        }
        return ()=>permissionStatus?.removeEventListener('change', handleChange)
        ;
    }, [
        name,
        needRequest,
        permission
    ]);
    return permission;
}

// EXTERNAL MODULE: ./src/utils/hooks/useSettingSwitcher.tsx
var useSettingSwitcher = __webpack_require__(70236);
// EXTERNAL MODULE: ./src/utils/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(49723);
;// CONCATENATED MODULE: ./src/utils/hooks/index.ts








// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
;// CONCATENATED MODULE: ./src/utils/shadow-root/index.ts


// EXTERNAL MODULE: ./src/utils/suspends/index.ts + 1 modules
var suspends = __webpack_require__(94201);
// EXTERNAL MODULE: ./src/utils/type-transform/index.ts
var type_transform = __webpack_require__(44887);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(21158);
// EXTERNAL MODULE: ./src/utils/getTextUILength.ts
var getTextUILength = __webpack_require__(58379);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(97926);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(95175);
// EXTERNAL MODULE: ./src/utils/createNormalReactRoot.tsx
var createNormalReactRoot = __webpack_require__(54409);
// EXTERNAL MODULE: ./src/utils/theme/index.ts
var theme = __webpack_require__(17784);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(47675);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(93995);
// EXTERNAL MODULE: ./src/utils/collectNodeText.ts
var collectNodeText = __webpack_require__(25986);
;// CONCATENATED MODULE: ./src/utils/index.ts


















/***/ }),

/***/ 95175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_0__.ql)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94670);



/***/ }),

/***/ 16660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ setupShadowRootPortal),
/* harmony export */   "o": () => (/* binding */ createReactRootShadowed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _UIRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4597);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17784);




const captureEvents = [
    'paste',
    'keydown',
    'keypress',
    'keyup',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'change', 
];
const setupShadowRootPortal = ()=>{
    const shadow = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .setupPortalShadowRoot */ .d_)({
        mode: 'closed'
    });
    createReactRootShadowed(shadow, {
        key: 'css-vars'
    }).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}));
};
// https://github.com/DimensionDev/Maskbook/issues/3265 with fast refresh or import order?
const createReactRootShadowed_raw = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .createReactRootShadowedPartial */ .zV)({
    preventEventPropagationList: captureEvents,
    wrapJSX (jsx) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UIRoot__WEBPACK_IMPORTED_MODULE_2__/* .MaskUIRoot */ .Y, {
            useTheme: _theme__WEBPACK_IMPORTED_MODULE_3__/* .useClassicMaskSNSTheme */ .VJ,
            kind: "sns",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}),
                jsx
            ]
        });
    }
});
function createReactRootShadowed(...args) {
    return createReactRootShadowed_raw(...args);
}


/***/ }),

/***/ 47675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* binding */ downloadUrl),
/* harmony export */   "Ms": () => (/* binding */ selectElementContents),
/* harmony export */   "ZB": () => (/* binding */ regexMatch),
/* harmony export */   "bF": () => (/* binding */ pasteImageToActiveElements)
/* harmony export */ });
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73742);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32139);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78778);
/**
 * Prefer function declaration than const f = () => ...
 * in this file please.
 */ 


/**
 * Download given url return as Blob
 */ async function downloadUrl(url) {
    try {
        if (url.startsWith(browser.runtime.getURL(''))) {
            return _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Helper.fetch */ .ZP.Helper.fetch(url);
        }
    } catch  {}
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed.');
    return res.blob();
}
/**
 * paste image to activeElements
 * @param image
 */ async function pasteImageToActiveElements(image) {
    (0,_masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__/* .pasteImage */ .Mx)(new Uint8Array(await image.arrayBuffer()));
}
/**
 * Select all text in a node
 * @param el Element
 */ function selectElementContents(el) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = globalThis.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    return sel;
}
function regexMatch(input, pattern, index = 1) {
    const r = input.match(pattern);
    if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(r)) return null;
    if (index === null) {
        return r;
    }
    return r[index];
}


/***/ }),

/***/ 26675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useChainColor)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);


function useChainColor(pluginID, expectedChainId) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID, expectedChainId);
    const { Others  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return Others?.chainResolver.chainColor?.(chainId) ?? 'transparent';
}


/***/ }),

/***/ 75080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useChainIdMainnet)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);


function useChainIdMainnet(pluginID, expectedChainId) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID, expectedChainId);
    const { Others  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return Others?.chainResolver.isMainnet?.(chainId) ?? false;
}


/***/ }),

/***/ 3307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useChainIdValid)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72128);



function useChainIdValid(pluginID, expectedChainId) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID, expectedChainId);
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)(pluginID);
    const { Others  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return (!account || Others?.chainResolver.isValid?.(chainId, "production" === 'development')) ?? false;
}


/***/ }),

/***/ 19199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40969);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46390);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93996);



function useNetworkDescriptor(expectedPluginID, expectedChainIdOrNetworkTypeOrID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)(expectedPluginID);
    const networkType = (0,_useNetworkType__WEBPACK_IMPORTED_MODULE_0__/* .useNetworkType */ .b)(pluginID);
    return (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(pluginID)?.declareWeb3Networks?.find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes((expectedChainIdOrNetworkTypeOrID ?? networkType) ?? '')
    );
}


/***/ }),

/***/ 45428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useNonFungibleAssets)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67938);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72128);
/* harmony import */ var _useWeb3Hub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94227);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58757);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44451);
/* harmony import */ var _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3859);






function useNonFungibleAssets(pluginID, schemaType, options) {
    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
    const [done, setDone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [loading, toggleLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .m)(pluginID);
    const hub = (0,_useWeb3Hub__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Hub */ .h)(pluginID, options);
    const networks = (0,_useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkDescriptors */ .p)(pluginID);
    // create iterator
    const iterator = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (!account && !options?.account || !hub?.getNonFungibleTokens || !networks) return;
        setAssets(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
        setDone(false);
        return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .flattenAsyncIterator */ .DA)(networks.filter((x)=>x.isMainnet
        ).filter((x)=>options?.chainId ? x.chainId === options?.chainId : true
        ).map((x)=>{
            return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .pageableToIterator */ .J)(async (indicator)=>{
                if (!hub?.getNonFungibleTokens) return;
                return hub?.getNonFungibleTokens(options?.account ?? account, {
                    indicator,
                    size: 50,
                    ...options,
                    chainId: x.chainId
                });
            });
        }));
    }, [
        hub?.getNonFungibleTokens,
        account,
        JSON.stringify(options),
        networks.length
    ]);
    const next = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        if (!iterator || done) return;
        const batchResult = [];
        toggleLoading(true);
        try {
            for (const v of Array.from({
                length: options?.size ?? 36
            })){
                const { value , done: iteratorDone  } = await iterator.next();
                if (value instanceof Error) {
                    // Controlled error
                    setError(value.message);
                    break;
                } else {
                    if (iteratorDone) {
                        setDone(true);
                        break;
                    }
                    if (!iteratorDone && value) {
                        batchResult.push(value);
                    }
                }
            }
        } catch (error_) {
            // Uncontrolled error
            setError(error_);
            setDone(true);
        }
        toggleLoading(false);
        setAssets((pred)=>[
                ...pred,
                ...batchResult
            ]
        );
    }, [
        iterator,
        done
    ]);
    // Execute once after next update
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (next) next();
    }, [
        next
    ]);
    const retry = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        setAssets(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
        setDone(false);
    }, []);
    return {
        value: assets.filter((x)=>options?.chainId ? x.chainId === options?.chainId : true
        ),
        next,
        loading,
        done,
        retry,
        error
    };
}


/***/ }),

/***/ 41623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52892);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46390);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93996);



function useProviderDescriptor(expectedPluginID, expectedProviderTypeOrID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)(expectedPluginID);
    const providerType = (0,_useProviderType__WEBPACK_IMPORTED_MODULE_0__/* .useProviderType */ ._)(pluginID);
    return (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(pluginID)?.declareWeb3Providers?.find((x)=>[
            x.type,
            x.ID
        ].includes((expectedProviderTypeOrID ?? providerType) ?? '')
    );
}


/***/ }),

/***/ 84702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useSocialAddressListAll)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67938);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85478);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58500);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12368);





const addressCache = new (lru_cache__WEBPACK_IMPORTED_MODULE_2___default())({
    max: 500,
    ttl: 2 * 60 * 1000
});
/**
 * Get all social addresses under of all networks.
 */ function useSocialAddressListAll(identity, sorter) {
    // TODO: to add flow
    const { IdentityService: EVM_IdentityService  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { IdentityService: SolanaIdentityService  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID.PLUGIN_SOLANA */ .FF.PLUGIN_SOLANA);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(async ()=>{
        const userId = identity?.identifier?.userId;
        if (!userId || userId === '$unknown') return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_LIST */ .rP;
        let cached = addressCache.get(userId);
        if (!cached) {
            cached = Promise.allSettled([
                EVM_IdentityService,
                SolanaIdentityService
            ].map((x)=>x?.lookup(identity) ?? []
            ));
            addressCache.set(userId, cached);
        }
        const allSettled = await cached;
        const listOfAddress = allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : []
        );
        return sorter && listOfAddress.length ? listOfAddress.sort(sorter) : listOfAddress;
    }, [
        identity,
        sorter,
        EVM_IdentityService?.lookup,
        SolanaIdentityService?.lookup
    ]);
}


/***/ }),

/***/ 21627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fb": () => (/* binding */ FileInfoV1ToV2),
/* harmony export */   "Gd": () => (/* binding */ makeFileKeySigned),
/* harmony export */   "ri": () => (/* binding */ FileInfoMetadataReader),
/* harmony export */   "u": () => (/* binding */ resolveGatewayAPI)
/* harmony export */ });
/* harmony import */ var _masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30003);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94529);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8634);
/* harmony import */ var _schema_v1_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30460);
/* harmony import */ var _schema_v2_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10857);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29330);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46123);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67938);








const reader_v1 = (0,_masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_0__/* .createTypedMessageMetadataReader */ .Bi)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .META_KEY_1 */ .ki, _schema_v1_json__WEBPACK_IMPORTED_MODULE_3__);
const reader_v2 = (0,_masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_0__/* .createTypedMessageMetadataReader */ .Bi)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .META_KEY_2 */ .lw, _schema_v2_json__WEBPACK_IMPORTED_MODULE_4__);
function FileInfoMetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta).map(FileInfoV1ToV2);
}
function FileInfoV1ToV2(info) {
    return {
        ...info,
        type: 'file',
        provider: 'arweave'
    };
}
async function makeFileKeySigned(fileKey) {
    if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(fileKey)) {
        return null;
    }
    const encodedKey = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .encodeText */ .YT)(fileKey);
    const key = await crypto.subtle.generateKey({
        name: 'HMAC',
        hash: {
            name: 'SHA-256'
        }
    }, true, [
        'sign',
        'verify'
    ]);
    const exportedKey = await crypto.subtle.exportKey('raw', key);
    const signed = await crypto.subtle.sign({
        name: 'HMAC'
    }, key, encodedKey);
    return [
        signed,
        exportedKey
    ].map(_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .encodeArrayBuffer */ .ll);
}
const resolveGatewayAPI = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .createLookupTableResolver */ .FG)({
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .Provider.arweave */ .z.arweave]: 'https://arweave.net',
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .Provider.ipfs */ .z.ipfs]: 'https://infura-ipfs.io/ipfs',
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .Provider.swarm */ .z.swarm]: 'https://bee-2.gateway.ethswarm.org/bzz'
}, ()=>'Unknown provider'
);


/***/ }),

/***/ 58044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N)
});

// UNUSED EXPORTS: CrashUI, withErrorBoundary

// EXTERNAL MODULE: ../shared-base-ui/src/components/ErrorBoundary/CrashUI.tsx + 2 modules
var CrashUI = __webpack_require__(53747);
// EXTERNAL MODULE: ../shared-base-ui/src/components/ErrorBoundary/context.ts
var context = __webpack_require__(49831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../shared-base-ui/src/components/ErrorBoundary/ErrorBoundary.tsx



const map = new WeakMap();
/**
 * Return the ErrorBoundary wrapped version of given Component
 * @param Component The component that need to be wrapped with ErrorBoundary
 */ function withErrorBoundary(Component1) {
    if (map.has(Component1)) return map.get(Component1);
    const C = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ _jsx(ErrorBoundary, {
            children: /*#__PURE__*/ _jsx(Component1, {
                ...props,
                ref: ref
            })
        })
    );
    map.set(Component1, C);
    return C;
}
class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (!this.state.error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: this.props.children
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CrashUI/* CrashUI */.O, {
            subject: "Mask",
            onRetry: ()=>this.setState({
                    error: null
                })
            ,
            ...this.props,
            ...this.normalizedError
        });
    }
    get normalizedError() {
        let stack = '<stack not available>';
        let type = 'UnknownError';
        let message = 'unknown error';
        try {
            stack = String(this.state.error.stack) || '<stack not available>';
            stack = stack.replace(/webpack-internal:.+node_modules\//g, 'npm:');
            // remove webpack-internal:///
            stack = stack.replace(/webpack-internal:\/{3}/g, '');
        } catch  {}
        try {
            type = String(this.state.error.name) || '<type not available>';
        } catch  {}
        try {
            message = String(this.state.error.message) || '<message not available>';
        } catch  {}
        return {
            stack,
            type,
            message
        };
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

;// CONCATENATED MODULE: ../shared-base-ui/src/components/ErrorBoundary/index.ts




;// CONCATENATED MODULE: ../shared-base-ui/src/components/index.ts



/***/ }),

/***/ 526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32513);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event1, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z) // create an uuid for every hook
    ;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event1.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote?.(_ev);
        })
    , [
        onUpdateByRemote,
        event1,
        HOOK_ID
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onUpdateByLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event1.sendToLocal(payload) : event1.sendToVisiblePages(payload);
        }, 100);
    }, [
        event1,
        tabType,
        HOOK_ID
    ]);
    const openDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: false
        });
    }, []);
    return {
        open,
        openDialog,
        closeDialog,
        setDialog: onUpdateByLocal
    };
}


/***/ }),

/***/ 13339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* binding */ serializer),
/* harmony export */   "tr": () => (/* binding */ registerSerializableClass)
/* harmony export */ });
/* unused harmony export __DEBUG__ONLY__enableCryptoKeySerialization */
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14084);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48160);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeson_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78874);
/* harmony import */ var _Identifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57041);
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16761);
/* harmony import */ var _readableStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40025);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5294);
/// <reference path="./typeson.d.ts" />



// @ts-ignore





const pendingRegister = new Set();
let typeson;
function setup() {
    const { default: BigNumber  } = bignumber_js__WEBPACK_IMPORTED_MODULE_2__;
    // https://github.com/dfahlander/typeson-registry/issues/27
    typeson = new typeson__WEBPACK_IMPORTED_MODULE_0__/* .Typeson */ .oy({
        cyclic: false
    });
    typeson.register(typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .builtin */ .j0);
    typeson.register(typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .specialNumbers */ .so);
    typeson.register([
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .blob */ .Ik,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .file */ .tP,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .filelist */ .Jj,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .imagebitmap */ .xA
    ]);
    typeson.register({
        None: [
            (x)=>x === ts_results__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq
            ,
            ()=>'None'
            ,
            ()=>ts_results__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq
        ]
    });
    addClass('Ok', ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok);
    addClass('Err', ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG);
    addClass('Some', ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Some */ .bD);
    addClass('BigNumber', BigNumber);
    typeson.register({
        Identifier: [
            (x)=>x instanceof _Identifier__WEBPACK_IMPORTED_MODULE_4__/* .Identifier */ .xb
            ,
            (x)=>x.toText()
            ,
            (x)=>_Identifier__WEBPACK_IMPORTED_MODULE_4__/* .Identifier.from */ .xb.from(x).unwrap()
        ],
        ReadableStream: [
            ..._readableStream__WEBPACK_IMPORTED_MODULE_6__/* .readableStreamRegedit */ .t5
        ],
        Response: [
            ..._response__WEBPACK_IMPORTED_MODULE_5__/* .responseRegedit */ .R7
        ],
        Request: [
            ..._request__WEBPACK_IMPORTED_MODULE_7__/* .requestRegedit */ .qf
        ]
    });
    for (const a of pendingRegister)a();
}
const serializer = {
    serialization (from) {
        if (!typeson) setup();
        return typeson.encapsulate(from);
    },
    // cspell:disable-next-line
    deserialization (to) {
        if (!typeson) setup();
        return typeson.revive(to);
    }
};
/** THIS MUST NOT BE USED OUTSIDE OF A DEBUGGER CONTEXT */ function __DEBUG__ONLY__enableCryptoKeySerialization() {
    if (!typeson) setup();
    typeson.register(cryptokey);
}
function registerSerializableClass(name, a, b, c) {
    if (typeson) {
        if (b) typeson.register({
            [name]: [
                a,
                b,
                c
            ]
        });
        else addClass(name, a);
    } else {
        if (b) pendingRegister.add(()=>typeson.register({
                [name]: [
                    a,
                    b,
                    c
                ]
            })
        );
        else pendingRegister.add(()=>addClass(name, a)
        );
    }
}
function addClass(name, constructor) {
    Object.defineProperty(constructor, 'name', {
        configurable: true,
        enumerable: false,
        writable: false,
        value: name
    });
    typeson.register({
        [name]: [
            (x)=>x instanceof constructor
            ,
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            (x1)=>{
                const y = Object.assign({}, x1);
                Object.getOwnPropertySymbols(y).forEach((x)=>Reflect.deleteProperty(y, x)
                );
                return typeson.encapsulate(y);
            },
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            (x)=>{
                const y = typeson.revive(x);
                Object.setPrototypeOf(y, constructor.prototype);
                return y;
            }, 
        ]
    });
}


/***/ }),

/***/ 68043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ getLocalImplementation),
/* harmony export */   "k": () => (/* binding */ getLocalImplementationExotic)
/* harmony export */ });
// key = channel; value = local implementation
const RPCCache = new WeakMap();
/**
 * This function provides a localImplementation that is HMR ready.
 * To update, call this function with the SAME CHANNEL object.
 * It will "clone" all methods that impl returns.
 * @param isBackground If the current environment is background.
 * @param name The name of the local implementation, used for logging
 * @param impl The implementation. Can be an async function.
 * @param ref The reference object that must be the same if you're updating.
 */ async function getLocalImplementation(isBackground, name, impl, ref) {
    if (!isBackground) return {};
    const isUpdate = RPCCache.has(ref);
    const localImpl = RPCCache.get(ref) || {};
    RPCCache.set(ref, localImpl);
    const result = await impl();
    for (const key of Object.keys(localImpl)){
        if (!Reflect.has(result, key)) {
            delete localImpl[key];
            isUpdate && console.log(`[HMR] ${name}.${key} removed.`);
        } else if (result[key] !== localImpl[key]) {
            isUpdate && console.log(`[HMR] ${name}.${key} updated.`);
        }
    }
    for (const key1 of Object.keys(result)){
        if (!Reflect.has(localImpl, key1)) isUpdate && console.log(`[HMR] ${name}.${key1} added.`);
        Object.defineProperty(localImpl, key1, {
            configurable: true,
            enumerable: true,
            value: result[key1]
        });
    }
    return localImpl;
}
async function getLocalImplementationExotic(isBackground, name, impl, ref) {
    if (!isBackground) return {};
    RPCCache.set(ref, await impl());
    return new Proxy({}, {
        get (_, key) {
            if (key === 'then') return;
            // @ts-ignore
            return RPCCache.get(ref)?.[key];
        }
    });
}


/***/ }),

/***/ 37245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ I18NextProviderHMR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94282);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51344);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);



react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .initReactI18next.init */ .Db.init(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .i18NextInstance */ .BV);
const I18NextProviderHMR =  false ? 0 : react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .I18nextProvider */ .a;


/***/ }),

/***/ 7736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SharedContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22017);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64781);
/* harmony import */ var _evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15285);




const SharedContextProvider = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base__WEBPACK_IMPORTED_MODULE_1__/* .BaseSharedUIProvider */ .bP, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonUIProvider */ .ci, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_evm__WEBPACK_IMPORTED_MODULE_3__/* .EvmSharedUIProvider */ .QQ, {
                children: children
            })
        })
    });
};


/***/ }),

/***/ 8600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskColorVar),
/* harmony export */   "n": () => (/* binding */ getMaskColor)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46768);


function getMaskColor(theme) {
    if (theme.palette.mode === 'dark') return _constants__WEBPACK_IMPORTED_MODULE_0__/* .DarkColor */ .I;
    return _constants__WEBPACK_IMPORTED_MODULE_0__/* .LightColor */ .C;
}
const MaskColorVar = new Proxy({
    __proto__: null
}, {
    get (target, key) {
        if (target[key]) return target[key];
        if (typeof key !== 'string') throw new TypeError();
        const cssVar = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key);
        target[key] = (defaultValue)=>{
            // it might be an object when used in styled components.
            if (typeof defaultValue !== 'string') defaultValue = undefined;
            const x = `var(--mask-${cssVar}${defaultValue ? ', ' + defaultValue : ''})`;
            return x;
        };
        target[key][Symbol.toPrimitive] = ()=>`var(--mask-${cssVar})`
        ;
        target[key].alpha = (alpha)=>`rgba(var(--mask-${cssVar}-fragment), ${alpha})`
        ;
        return target[key];
    }
});


/***/ }),

/***/ 95499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* reexport safe */ _Dialog__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "tE": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.t),
/* harmony export */   "yu": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.y)
/* harmony export */ });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13217);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49433);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70950);





/***/ }),

/***/ 48054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ LoadingBase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60989);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84432);



const useStyles = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    animated: {
        '@keyframes loadingAnimation': {
            '0%': {
                transform: 'rotate(0deg)'
            },
            '100%': {
                transform: 'rotate(360deg)'
            }
        },
        animation: 'loadingAnimation 1s linear infinite'
    }
});
const LoadingBase = (props)=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .LoadingBaseIcon */ .N, {
        ...props,
        className: `${classes.animated} ${props.className}`
    });
};


/***/ }),

/***/ 18822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D9": () => (/* reexport safe */ _PopupSnackbar__WEBPACK_IMPORTED_MODULE_7__.D9),
/* harmony export */   "Ii": () => (/* binding */ useCustomSnackbar),
/* harmony export */   "YO": () => (/* binding */ CustomSnackbarProvider),
/* harmony export */   "wT": () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_3__.wT)
/* harmony export */ });
/* unused harmony export CustomSnackbarContent */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82737);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27466);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48941);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21784);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27692);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37341);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80922);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31363);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95789);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78258);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84432);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88762);
/* harmony import */ var _PopupSnackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15938);















const useStyles = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_5__/* .makeStyles */ .ZL)()((theme, { offsetY  }, refs)=>{
    const { palette  } = theme;
    const isDark = palette.mode === 'dark';
    const spinningAnimationKeyFrames = tss_react__WEBPACK_IMPORTED_MODULE_2__/* .keyframes */ .F4`
to {
  transform: rotate(360deg)
}`;
    const title = {
        color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textPrimary */ .ZN.textPrimary,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px'
    };
    const message = {
        color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
        fontWeight: 400,
        display: 'flex',
        alignItems: 'center',
        fontSize: 12
    };
    const defaultVariant = {
        background: isDark ? '#17191D' : '#F7F9FA',
        color: isDark ? '#D9D9D9' : '#0F1419',
        [`& .${refs.title}`]: {
            color: isDark ? '#D9D9D9' : palette.grey['800']
        }
    };
    const success = {
        backgroundColor: '#60DFAB',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const error = {
        background: '#FF5F5F',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const info = {
        background: '#8CA3C7',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const warning = {
        backgroundColor: '#FFB915',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    return {
        root: {
            zIndex: 9999,
            transform: typeof offsetY !== 'undefined' ? `translateY(${offsetY}px)` : 'none',
            color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textLight */ .ZN.textLight,
            pointerEvents: 'inherit'
        },
        content: {
            alignItems: 'center',
            padding: theme.spacing(1.5, 2),
            borderRadius: 12,
            width: 380,
            flexWrap: 'nowrap !important',
            [`&.${success.ref}`]: {
                background: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.greenMain */ .ZN.greenMain,
                color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
            },
            [`&.${error.ref}`]: {
                background: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.redMain */ .ZN.redMain,
                color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground,
                title: {
                    color: 'inherit'
                }
            },
            [`&.${info.ref}`]: {
                color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
            },
            [`&.${warning.ref}`]: {
                color: '#ffffff'
            }
        },
        default: defaultVariant,
        success,
        error,
        info,
        warning,
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        spinning: {
            display: 'flex',
            animation: `${spinningAnimationKeyFrames} 2s infinite linear`
        },
        action: {
            marginLeft: 'auto'
        },
        closeButton: {
            color: 'inherit'
        },
        texts: {
            marginLeft: theme.spacing(2)
        },
        title,
        message,
        link: {
            display: 'flex',
            marginLeft: theme.spacing(0.5)
        }
    };
});
const IconMap = {
    default: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    success: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    error: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__/* .RiskIcon */ .w, {}),
    warning: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    info: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "inherit"
    })
};
const CustomSnackbarContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const classes = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_5__/* .useStylesExtends */ .Bc)(useStyles({
        offsetY: props.offsetY
    }), props);
    const snackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_3__/* .useSnackbar */ .Ds)();
    const loadingIcon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_12__/* .LoadingIcon */ .H, {
        color: "inherit",
        className: classes.spinning
    });
    const variantIcon = props.processing ? loadingIcon : props.variant ? IconMap[props.variant] : null;
    let renderedAction = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        className: classes.closeButton,
        onClick: ()=>snackbar.closeSnackbar(props.id)
        ,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
    });
    if (props.action) {
        renderedAction = typeof props.action === 'function' ? props.action(props.id) : props.action;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(notistack__WEBPACK_IMPORTED_MODULE_3__/* .SnackbarContent */ .No, {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.content, classes[props.variant]),
        children: [
            variantIcon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.icon,
                children: variantIcon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.texts,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        className: classes.title,
                        variant: "h2",
                        children: props.title
                    }),
                    props.message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        className: classes.message,
                        variant: "body1",
                        children: props.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.action,
                children: renderedAction
            })
        ]
    });
});
const CustomSnackbarProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ offsetY , ...rest })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { classes  } = useStyles({
        offsetY
    });
    const onDismiss = (key)=>()=>{
            ref.current?.closeSnackbar(key);
        }
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_3__/* .SnackbarProvider */ .wT, {
        ref: ref,
        maxSnack: 30,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        hideIconVariant: true,
        content: (key, title)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomSnackbarContent, {
                id: key,
                variant: rest.variant ?? 'default',
                title: title,
                offsetY: offsetY
            })
        ,
        action: (key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                size: "large",
                onClick: onDismiss(key),
                sx: {
                    color: 'inherit'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    color: "inherit"
                })
            })
        ,
        classes: {
            containerRoot: classes.root,
            variantSuccess: classes.success,
            variantError: classes.error,
            variantInfo: classes.info,
            variantWarning: classes.warning
        },
        ...rest
    });
});
function useCustomSnackbar() {
    const { enqueueSnackbar , closeSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_3__/* .useSnackbar */ .Ds)();
    const showSnackbar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((text, options = {
        variant: 'default'
    })=>{
        const { processing , message , variant , ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomSnackbarContent, {
                    variant: variant ?? 'default',
                    id: key,
                    title: title,
                    message: message,
                    processing: processing,
                    action: rest.action,
                    classes: rest.classes
                });
            },
            ...rest
        });
    }, [
        enqueueSnackbar
    ]);
    return {
        showSnackbar,
        closeSnackbar
    };
}


/***/ }),

/***/ 59728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ad": () => (/* binding */ usePortalShadowRoot),
/* harmony export */   "d_": () => (/* binding */ setupPortalShadowRoot),
/* harmony export */   "lr": () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   "vg": () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6414);

/* eslint-disable react-hooks/rules-of-hooks */ 

let mountingPoint;
let mountingShadowRoot;
function setupPortalShadowRoot(init) {
    if (mountingShadowRoot) return mountingShadowRoot;
    mountingShadowRoot = document.body.appendChild(document.createElement('div')).attachShadow(init);
    mountingPoint = mountingShadowRoot.appendChild(document.createElement('div'));
    return mountingShadowRoot;
}
/**
 * Render to a React Portal in to the page needs this hook. It will provide a wrapped container that provides ShadowRoot isolation and CSS support for it.
 *
 * The return value can only be used once!
 * @param renderer A function that want to use PortalShadowRoot
 * @example
 * const picker = usePortalShadowRoot((container) => (
 *      <DatePicker
 *          DialogProps={{ container }}
 *          PopperProps={{ container }}
 *          value={new Date()}
 *          onChange={() => {}}
 *          renderInput={(props) => <TextField {...props} />}
 *      />
 * ))
 */ function usePortalShadowRoot(renderer) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .DisableShadowRootContext */ .AZ)).current;
    // we ignore the changes on this property during multiple render
    // so we can violates the React hooks rule and still be safe.
    if (disabled) return renderer(undefined);
    const sheets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .StyleSheetsContext */ .EP);
    const signal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const preventEventPropagationList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .PreventEventPropagationListContext */ .gt);
    const { container: container1  } = useRefInit(()=>{
        signal.current = new AbortController();
        const portal = PortalShadowRoot();
        const root = document.createElement('div');
        root.dataset.portalShadowRoot = '';
        const shadow = root.attachShadow({
            mode: 'open'
        });
        const stop = (e)=>e.stopPropagation()
        ;
        for (const each of preventEventPropagationList){
            shadow.addEventListener(each, stop, {
                signal: signal.current.signal
            });
        }
        const container = shadow.appendChild(document.createElement('main'));
        sheets.map((x)=>x.addContainer(shadow)
        );
        // This is proved to be important to the correct portal orders...
        Object.defineProperty(container, 'appendChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                if (!root.parentElement) portal.appendChild(root);
                Node.prototype.appendChild.call(container, child);
                return child;
            }
        });
        Object.defineProperty(container, 'removeChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                Node.prototype.removeChild.call(container, child);
                if (container.childElementCount === 0) portal.removeChild(root);
                return child;
            }
        });
        return {
            container
        };
    });
    return renderer(container1);
}
function createShadowRootForwardedComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    });
}
function createShadowRootForwardedPopperComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            });
        });
    });
}
/**
 * ! Do not export !
 */ function PortalShadowRoot() {
    if (location.protocol.includes('extension')) return document.body;
    if (globalThis.location.hostname === 'localhost') return document.body;
    if (!mountingPoint) throw new TypeError('Please call setupPortalShadowRoot first');
    return mountingPoint;
}
function useRefInit(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 62998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* reexport safe */ _ShadowRootIsolation__WEBPACK_IMPORTED_MODULE_2__.Q),
/* harmony export */   "ad": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_1__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_1__.d_),
/* harmony export */   "zV": () => (/* reexport safe */ _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42519);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59728);
/* harmony import */ var _ShadowRootIsolation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18499);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6414);






/***/ }),

/***/ 99176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ useTabs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../theme/src/hooks/useTabs.tsx

/**
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <TabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </TabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ function useTabs(defaultTab, ...possibleTabs) {
    const [currentTab, setTab] = (0,react.useState)(defaultTab);
    const enum_ = {
        [defaultTab]: defaultTab
    };
    possibleTabs.forEach((t)=>enum_[t] = t
    );
    const onChange = (0,react.useCallback)((event, value)=>{
        setTab(value);
    }, []);
    return [
        currentTab,
        onChange,
        enum_,
        setTab
    ];
}

;// CONCATENATED MODULE: ../theme/src/hooks/index.ts



/***/ }),

/***/ 93179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata),
/* harmony export */   "r1": () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports getKnownMetadataKeys, getMetadataSchema, registerMetadataSchema, readTypedMessageMetadataUntyped, isDataMatchJSONSchema, editMetadata, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48160);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63740);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60232);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
const metadataSchemaStore = new Map();
function getKnownMetadataKeys() {
    return [
        ...metadataSchemaStore.keys()
    ];
}
function getMetadataSchema(key) {
    return metadataSchemaStore.has(key) ? Some(metadataSchemaStore.get(key)) : None;
}
/**
 * Register your metadata with a JSON Schema so we can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key)
    ;
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (!meta.has(key)) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({});
    if (!validator.validate(data, jsonSchema)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(validator.getLastErrors());
    return ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.ok) return render(message.val);
        return null;
    };
}
function editMetadata(metadata, edit) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(metadata || new Map(), (e)=>void edit(e)
    );
}
function editTypedMessageMeta(typedMessage, edit) {
    const meta = editMetadata(typedMessage.meta, edit);
    return {
        ...typedMessage,
        meta: meta.size === 0 ? undefined : meta
    };
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.ok) return render(message.val);
    return null;
}


/***/ }),

/***/ 6947:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(58757),g=Object.assign;
exports.useSubscription=function(a){var c=a.getCurrentValue,d=a.subscribe,b=e.useState(function(){return{getCurrentValue:c,subscribe:d,value:c()}});a=b[0];var f=b[1];b=a.value;if(a.getCurrentValue!==c||a.subscribe!==d)b=c(),f({getCurrentValue:c,subscribe:d,value:b});e.useDebugValue(b);e.useEffect(function(){function b(){if(!a){var b=c();f(function(a){return a.getCurrentValue!==c||a.subscribe!==d||a.value===b?a:g({},a,{value:b})})}}var a=!1,h=d(b);b();return function(){a=!0;h()}},[c,d]);return b};


/***/ })

}]);