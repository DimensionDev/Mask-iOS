"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6612],{

/***/ 69366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   "M1": () => (/* binding */ pasteText),
/* harmony export */   "Mx": () => (/* binding */ pasteImage),
/* harmony export */   "X2": () => (/* binding */ pasteInstagram),
/* harmony export */   "ed": () => (/* binding */ hookInputUploadOnce),
/* harmony export */   "i1": () => (/* reexport safe */ _bridgedSolana__WEBPACK_IMPORTED_MODULE_3__.i),
/* harmony export */   "iJ": () => (/* binding */ inputText),
/* harmony export */   "j3": () => (/* reexport safe */ _bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__.j)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29850);
/* harmony import */ var _bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58157);
/* harmony import */ var _bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74301);
/* harmony import */ var _bridgedSolana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68292);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71793);








function pasteText(text) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .sendEvent */ .qP)('paste', text);
}
function pasteImage(image) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .sendEvent */ .qP)('pasteImage', Array.from(image));
}
function pasteInstagram(url) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .sendEvent */ .qP)('instagramUpload', url);
}
function inputText(text) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .sendEvent */ .qP)('input', text);
}
function hookInputUploadOnce(format, fileName, image, triggerOnActiveElementNow = false) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .sendEvent */ .qP)('hookInputUploadOnce', format, fileName, Array.from(image), triggerOnActiveElementNow);
}
document.addEventListener(_shared__WEBPACK_IMPORTED_MODULE_0__/* .CustomEventId */ .OV, (e)=>{
    const r = (0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .decodeEvent */ .Vu)(e.detail);
    if (r[1].length < 1) return;
    switch(r[0]){
        case 'resolvePromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .resolvePromise */ .LD)(...r[1]);
        case 'rejectPromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .rejectPromise */ .Eu)(...r[1]);
        case 'ethBridgeOnEvent':
            return (0,_bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__/* .onEthEvent */ .t)(...r[1]);
        case 'coin98BridgeOnEvent':
            return (0,_bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__/* .onCoin98Event */ .$)(...r[1]);
        case 'solanaBridgeOnEvent':
            return (0,_bridgedSolana__WEBPACK_IMPORTED_MODULE_3__/* .onSolanaEvent */ .C)(...r[1]);
        case 'ethBridgeSendRequest':
        case 'ethBridgePrimitiveAccess':
        case 'ethBridgeRequestListen':
        case 'coin98BridgeSendRequest':
        case 'coin98BridgePrimitiveAccess':
        case 'coin98BridgeRequestListen':
        case 'solanaBridgeSendRequest':
        case 'solanaBridgePrimitiveAccess':
        case 'solanaBridgeRequestListen':
        case 'solanaBridgeExecute':
        case 'input':
        case 'paste':
        case 'pasteImage':
        case 'instagramUpload':
        case 'untilEthBridgeOnline':
        case 'untilCoin98BridgeOnline':
        case 'untilSolanaBridgeOnline':
        case 'hookInputUploadOnce':
            break;
        default:
            const neverEvent = r[0];
            console.log('[@masknet/injected-script]', neverEvent, 'not handled');
    }
});


/***/ }),

/***/ 23032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* unused harmony export mapContactAvatarColor */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _mui_material_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63190);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99537);



function mapContactAvatarColor(string, theme) {
    const hash = [
        ...string
    ].reduce((prev, current)=>{
        // eslint-disable-next-line no-bitwise
        const next = current.charCodeAt(0) + (prev << 5) - prev;
        // eslint-disable-next-line no-bitwise
        return next & next;
    }, 0);
    return `hsl(${hash % 360}, ${theme === 'dark' ? '78%' : '98%'}, ${theme === 'dark' ? '50%' : '70%'})`;
}
function Avatar({ person , ...props }) {
    const { avatar , nickname , identifier  } = person;
    const name = nickname || identifier.userId || '';
    const [first, last] = name.split(' ');
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().palette.mode;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        "aria-label": name,
        src: avatar,
        style: {
            backgroundColor: mapContactAvatarColor(identifier.toText(), theme)
        },
        ...props,
        children: [
            first[0],
            (last || '')[0]
        ]
    }));
}


/***/ }),

/***/ 93573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qE": () => (/* reexport */ Avatar/* Avatar */.q),
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
  "a_": () => (/* reexport */ BackupFormat/* UpgradeBackupJSONFile */.a),
  "SR": () => (/* reexport */ asyncIteratorHelpers/* asyncIteratorToArray */.S),
  "aW": () => (/* reexport */ collectNodeText/* collectNodeText */.a),
  "_r": () => (/* reexport */ collectNodeText/* collectTwitterEmoji */._),
  "lR": () => (/* reexport */ BackupFile/* convertBackupFileToObject */.l),
  "ou": () => (/* reexport */ renderInShadowRoot/* createReactRootShadowed */.o),
  "Qn": () => (/* reexport */ deconstructPayload),
  "GR": () => (/* reexport */ utils/* downloadUrl */.GR),
  "Ql": () => (/* reexport */ theme/* extendsTheme */.Ql),
  "uM": () => (/* reexport */ permissions/* extraPermissions */.u),
  "jK": () => (/* reexport */ BackupFile/* fixBackupFilePermission */.j),
  "$I": () => (/* reexport */ suspends/* getAssetAsBlobURL */.$),
  "dF": () => (/* reexport */ theme_tools/* getBackgroundColor */.dF),
  "c_": () => (/* reexport */ getTextUILength/* getTextUILength */.c),
  "bF": () => (/* reexport */ utils/* pasteImageToActiveElements */.bF),
  "Vc": () => (/* reexport */ renderInShadowRoot/* setupShadowRootPortal */.V),
  "cc": () => (/* reexport */ getTextUILength/* sliceTextByUILength */.L),
  "fy": () => (/* reexport */ watcher/* startWatch */.f),
  "ft": () => (/* reexport */ dom/* untilElementAvailable */.f),
  "Kx": () => (/* reexport */ theme/* useClassicMaskFullPageTheme */.Kx),
  "D2": () => (/* reexport */ useControlledDialog/* useControlledDialog */.D),
  "M1": () => (/* reexport */ i18n_next_ui/* useI18N */.M),
  "ZK": () => (/* reexport */ i18n_next_ui/* useLanguage */.Z),
  "IN": () => (/* reexport */ useMatchXS/* useMatchXS */.I),
  "H9": () => (/* reexport */ useMenu/* useMenu */.H),
  "ad": () => (/* reexport */ src/* usePortalShadowRoot */.ad),
  "eD": () => (/* reexport */ useQueryNavigatorPermission),
  "MN": () => (/* reexport */ useSettingSwitcher/* useSettingsSwitcher */.M),
  "Ei": () => (/* reexport */ useSettingSwitcher/* useSwitcher */.E)
});

// UNUSED EXPORTS: JWKToKey, PersonaArrayComparer, clamp, createNormalReactRoot, createShadowRootForwardedComponent, createShadowRootForwardedPopperComponent, fromRGB, getBackupPreviewInfo, getForegroundColor, isDark, isDarkTheme, keyToAddr, keyToJWK, mapContactAvatarColor, nthChild, regexMatch, selectElementContents, shade, toRGB, useClassicMaskSNSTheme, useColorStyles, useErrorStyles, usePopupsMaskFullPageTheme, useSuspense

// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(23032);
;// CONCATENATED MODULE: ./src/utils/components/index.ts


// EXTERNAL MODULE: ./src/utils/debug/index.ts
var debug = __webpack_require__(31829);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(91557);
// EXTERNAL MODULE: ./src/utils/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(50530);
// EXTERNAL MODULE: ./src/utils/hooks/useMenu.tsx
var useMenu = __webpack_require__(63098);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/hasIn.js + 2 modules
var hasIn = __webpack_require__(61451);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
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
        return ()=>{
            return permissionStatus === null || permissionStatus === void 0 ? void 0 : permissionStatus.removeEventListener('change', handleChange);
        };
    }, [
        name,
        needRequest,
        permission
    ]);
    return permission;
}

// EXTERNAL MODULE: ./src/utils/hooks/useSettingSwitcher.tsx
var useSettingSwitcher = __webpack_require__(54327);
;// CONCATENATED MODULE: ./src/utils/hooks/index.ts







// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
;// CONCATENATED MODULE: ./src/utils/shadow-root/index.ts



// EXTERNAL MODULE: ./src/utils/suspends/index.ts + 1 modules
var suspends = __webpack_require__(78591);
// EXTERNAL MODULE: ./src/utils/type-transform/asyncIteratorHelpers.ts
var asyncIteratorHelpers = __webpack_require__(3266);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFile.ts
var BackupFile = __webpack_require__(51098);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/index.ts
var BackupFormat = __webpack_require__(13426);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts
var locales_legacy = __webpack_require__(28331);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(3787);
;// CONCATENATED MODULE: ./src/social-network/utils/text-payload-ui.ts

function decodeTextPayloadUI(x) {
    var ref;
    const f = (ref = ui.activatedSocialNetworkUI.utils.textPayloadPostProcessor) === null || ref === void 0 ? void 0 : ref.decoder;
    if (f) return f(x).concat(x);
    return [
        x
    ];
}

// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
;// CONCATENATED MODULE: ./src/utils/type-transform/Payload.ts





/**
 * Detect if there is version -40, -39 or -38 payload
 */ function deconstructAlpha40_Or_Alpha39_Or_Alpha38(str, throws = false) {
    // ? payload is 🎼2/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    // ? payload is 🎼3/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    // ? payload is 🎼4/4|AESKeyEncrypted|iv|encryptedText|signature|authorPublicKey?|publicShared?|authorIdentifier:||
    // ? if publicShared is true, that means AESKeyEncrypted is shared with public
    // ? "1" treated as true, "0" or not defined treated as false
    // ? authorIdentifier is encoded as `${network}/${id}`
    const isVersion40 = str.includes('\u{1F3BC}2/4');
    const isVersion39 = str.includes('\u{1F3BC}3/4');
    const isVersion38 = str.includes('\u{1F3BC}4/4');
    str = str.replace('\u{1F3BC}2/4', '\u{1F3BC}3/4');
    str = str.replace('\u{1F3BC}3/4', '\u{1F3BC}4/4');
    const [_, payloadStart] = str.split('\u{1F3BC}4/4|');
    if (!payloadStart) if (throws) throw new Error(locales_legacy/* i18n.t */.a.t('payload_not_found'));
    else return null;
    const [payload, rest] = payloadStart.split(':||');
    if (rest === undefined) if (throws) throw new Error(locales_legacy/* i18n.t */.a.t('payload_incomplete'));
    else return null;
    const [AESKeyEncrypted, iv, encryptedText, signature, ...optional] = payload.split('|');
    const [authorPublicKey, publicShared, authorID, ...extra] = optional;
    if (!(AESKeyEncrypted && iv && encryptedText)) if (throws) throw new Error(locales_legacy/* i18n.t */.a.t('payload_bad'));
    else return null;
    if (extra.length) console.warn('Found extra payload', extra);
    if (isVersion38) {
        if (!signature) throw new Error(locales_legacy/* i18n.t */.a.t('payload_bad'));
        return {
            version: -38,
            AESKeyEncrypted,
            iv,
            encryptedText,
            signature,
            authorPublicKey,
            sharedPublic: publicShared === '1',
            authorUserID: esm/* Result.wrap */.x4.wrap(()=>shared_base_src/* Identifier.fromString */.xb.fromString('person:' + atob(authorID), shared_base_src/* ProfileIdentifier */.WO).unwrap()
            ).unwrapOr(undefined)
        };
    }
    return {
        ownersAESKeyEncrypted: AESKeyEncrypted,
        iv,
        encryptedText,
        signature,
        version: isVersion39 ? -39 : -40
    };
}
function deconstructAlpha41(str, throws = false) {
    // 🎼1/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    if (str.includes('\u{1F3BC}1/4') && str.includes(':||')) if (throws) throw new Error(locales_legacy/* i18n.t */.a.t('payload_throw_in_alpha41'));
    else return null;
    return null;
}
const versions = new Set([
    deconstructAlpha40_Or_Alpha39_Or_Alpha38,
    deconstructAlpha41
]);
function deconstructPayload(str, networkDecoder) {
    if (!networkDecoder) {
        networkDecoder = (0,umd.isEnvironment)(umd.Environment.ContentScript) ? decodeTextPayloadUI : (x)=>[
                x
            ]
        ;
    }
    for (const versionDecoder of versions){
        const results = networkDecoder(str);
        for (const result of results){
            if (!result) continue;
            const payload = versionDecoder(result, false);
            if (payload) return (0,esm.Ok)(payload);
        }
    }
    if (str.includes('\u{1F3BC}') && str.includes(':||')) return (0,esm/* Err */.UG)(new TypeError(locales_legacy/* i18n.t */.a.t('service_unknown_payload')));
    return (0,esm/* Err */.UG)(new TypeError(locales_legacy/* i18n.t */.a.t('payload_not_found')));
}

// EXTERNAL MODULE: ./src/utils/type-transform/SECP256k1-ETH.ts
var SECP256k1_ETH = __webpack_require__(37790);
;// CONCATENATED MODULE: ./src/utils/type-transform/index.ts






// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(717);
// EXTERNAL MODULE: ./src/utils/getTextUILength.ts
var getTextUILength = __webpack_require__(68220);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(47930);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(2214);
// EXTERNAL MODULE: ./src/utils/permissions.ts
var permissions = __webpack_require__(56291);
// EXTERNAL MODULE: ./src/utils/createNormalReactRoot.tsx
var createNormalReactRoot = __webpack_require__(72234);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(11062);
// EXTERNAL MODULE: ./src/utils/theme.ts
var theme = __webpack_require__(45606);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(79304);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(84749);
// EXTERNAL MODULE: ./src/utils/collectNodeText.ts
var collectNodeText = __webpack_require__(66205);
;// CONCATENATED MODULE: ./src/utils/index.ts




















/***/ }),

/***/ 2214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_0__.ql)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70609);



/***/ }),

/***/ 78632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ setupShadowRootPortal),
/* harmony export */   "o": () => (/* binding */ createReactRootShadowed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70609);
/* harmony import */ var _UIRoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93747);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45606);





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
        mode: _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
    });
    createReactRootShadowed(shadow, {
        key: 'css-vars'
    }).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}));
};
// https://github.com/DimensionDev/Maskbook/issues/3265 with fast refresh or import order?
const createReactRootShadowed_raw = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .createReactRootShadowedPartial */ .zV)({
    preventEventPropagationList: captureEvents,
    wrapJSX (jsx) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UIRoot__WEBPACK_IMPORTED_MODULE_3__/* .MaskUIRoot */ .Y, {
            useTheme: _theme__WEBPACK_IMPORTED_MODULE_4__/* .useClassicMaskSNSTheme */ .VJ,
            kind: "sns",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}),
                jsx
            ]
        }));
    }
});
function createReactRootShadowed(...args) {
    return createReactRootShadowed_raw(...args);
}


/***/ }),

/***/ 79304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* binding */ downloadUrl),
/* harmony export */   "Ms": () => (/* binding */ selectElementContents),
/* harmony export */   "ZB": () => (/* binding */ regexMatch),
/* harmony export */   "bF": () => (/* binding */ pasteImageToActiveElements)
/* harmony export */ });
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69366);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32139);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45925);
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
function regexMatch(str, regexp, index = 1) {
    const r = str.match(regexp);
    if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(r)) return null;
    if (index === null) {
        return r;
    }
    return r[index];
}


/***/ }),

/***/ 84749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ startWatch)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70609);

function startWatch(watcher, signal) {
    watcher.setDOMProxyOption({
        afterShadowRootInit: {
            mode: _shared__WEBPACK_IMPORTED_MODULE_0__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
        },
        beforeShadowRootInit: {
            mode: _shared__WEBPACK_IMPORTED_MODULE_0__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
        }
    }).startWatch({
        subtree: true,
        childList: true
    });
    signal.addEventListener('abort', ()=>watcher.stopWatch()
    );
    return watcher;
}


/***/ }),

/***/ 45337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EK": () => (/* reexport */ createInjectHooksRenderer/* createInjectHooksRenderer */.E),
  "I4": () => (/* reexport */ createPluginMessage),
  "V8": () => (/* reexport */ createPluginRPC),
  "Sc": () => (/* reexport */ createPluginRPCGenerator)
});

// EXTERNAL MODULE: ../plugin-infra/src/utils/createInjectHooksRenderer.tsx
var createInjectHooksRenderer = __webpack_require__(51714);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
;// CONCATENATED MODULE: ../plugin-infra/src/utils/message.ts

/**
 * Create a plugin message emitter
 * @param pluginID The plugin ID
 *
 * @example
 * export const MyPluginMessage = createPluginMessage(PLUGIN_ID)
 */ function createPluginMessage(pluginID, serializer) {
    const domain = '@plugin/' + pluginID;
    if (cache.has(domain)) return cache.get(domain);
    const messageCenter = new umd.WebExtensionMessage({
        domain
    });
    const events = messageCenter.events;
    if (serializer) messageCenter.serialization = serializer;
    cache.set(domain, events);
    return events;
}
const cache = new Map();

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.2/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(19245);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
;// CONCATENATED MODULE: ../plugin-infra/src/utils/rpc.ts



const log = {
    beCalled: true,
    localError: true,
    remoteError: true,
    requestReplay: true,
    sendLocalStack: true,
    type: 'pretty'
};
function createPluginRPC(key, impl, message, /** Please set this to true if your implementation is a Proxy. */ exoticImplementation) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    return (0,full/* AsyncCall */.LE)((exoticImplementation ? src/* getLocalImplementationExotic */.kO : src/* getLocalImplementation */.Bb)(isBackground, `Plugin(${key})`, impl, message), {
        key,
        channel: message.bind(umd.MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer: src/* serializer */.GM,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}
function createPluginRPCGenerator(key, impl, message) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    return (0,full/* AsyncGeneratorCall */.rc)((0,src/* getLocalImplementation */.Bb)(isBackground, `Plugin(${key})`, impl, message), {
        channel: message.bind(umd.MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer: src/* serializer */.GM,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}

;// CONCATENATED MODULE: ../plugin-infra/src/utils/index.ts





/***/ }),

/***/ 88667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27039);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52918);


const base = {
    ID: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu,
    icon: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ICON */ .E0,
    name: {
        fallback: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_NAME */ .EW
    },
    description: {
        fallback: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_DESCRIPTION */ .PP
    },
    publisher: {
        name: {
            fallback: 'Mask Network'
        },
        link: 'https://mask.io/'
    },
    enableRequirement: {
        architecture: {
            app: true,
            web: true
        },
        networks: {
            type: 'opt-out',
            networks: {}
        },
        target: 'stable'
    },
    i18n: _locales_languages__WEBPACK_IMPORTED_MODULE_1__/* .languages */ .M
};


/***/ }),

/***/ 72146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N)
});

// UNUSED EXPORTS: CrashUI, withErrorBoundary

// EXTERNAL MODULE: ../shared-base-ui/dist/components/ErrorBoundary/CrashUI.js + 2 modules
var CrashUI = __webpack_require__(89283);
// EXTERNAL MODULE: ../shared-base-ui/dist/components/ErrorBoundary/context.js
var context = __webpack_require__(54694);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
;// CONCATENATED MODULE: ../shared-base-ui/dist/components/ErrorBoundary/ErrorBoundary.js



const map = new WeakMap();
/**
 * Return the ErrorBoundary wrapped version of given Component
 * @param Component The component that need to be wrapped with ErrorBoundary
 */
function withErrorBoundary(Component) {
    if (map.has(Component))
        return map.get(Component);
    const C = forwardRef((props, ref) => _jsx(ErrorBoundary, { children: _jsx(Component, { ...props, ref: ref }) }));
    map.set(Component, C);
    return C;
}
class ErrorBoundary extends react.Component {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: { error: null }
        });
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        if (!this.state.error)
            return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: this.props.children });
        return ((0,jsx_runtime.jsx)(CrashUI/* CrashUI */.O, { subject: "Mask", onRetry: () => this.setState({ error: null }), ...this.props, ...this.normalizedError }));
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
        }
        catch { }
        try {
            type = String(this.state.error.name) || '<type not available>';
        }
        catch { }
        try {
            message = String(this.state.error.message) || '<message not available>';
        }
        catch { }
        return { stack, type, message };
    }
}
//# sourceMappingURL=ErrorBoundary.js.map
;// CONCATENATED MODULE: ../shared-base-ui/dist/components/ErrorBoundary/index.js



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../shared-base-ui/dist/components/index.js

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 88674:
/***/ ((module) => {

module.exports = JSON.parse('{"light":{"grey":{"50":"#eff3f4","200":"#cfd9de","300":"#b9cad3","700":"#536471"},"text":{"primary":"#0f1419","secondary":"#536471","strong":"#111418","buttonText":"#FFFFFF"},"background":{"default":"#F6F8F8","input":"#EDF1F2","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)"},"error":{"main":"#F4212E"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"light_high_contrast":{"grey":{"50":"#cfd9de","200":"#697987","300":"#697987","700":"#3b4c5c"},"text":{"primary":"#0f1419","secondary":"#536471","strong":"#111418","buttonText":"#FFFFFF"},"background":{"default":"#F6F8F8","input":"#EDF1F2","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)"},"error":{"main":"#FF5555"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"dark":{"grey":{"50":"#253341","200":"#3d5466","300":"#6b7d8c","700":"#8899a6"},"text":{"primary":"#EFF3F4","secondary":"#8899A6","strong":"#FFFFFF","buttonText":"#0F1419"},"background":{"default":"#18232E","input":"#212D39","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}},"dark_high_contrast":{"grey":{"50":"#10171e","200":"#697987","300":"#92a4b3","700":"#b8cbd9"},"text":{"primary":"#EFF3F4","secondary":"#8899A6","strong":"#FFFFFF","buttonText":"#0F1419"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","background":{"default":"#18232E","input":"#212D39","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)"},"action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}},"darker":{"grey":{"50":"#202327","200":"#2f3336","300":"#3d4145","700":"#6e767d"},"text":{"primary":"#D9D9D9","secondary":"#6E767D","strong":"#EFF3F4","buttonText":"#0F1419"},"background":{"default":"#15171A","input":"#1D2023","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(255, 255, 255, 0.2)"},"error":{"main":"#FF5555"},"divider":"#2F3336","secondaryDivider":"#2F3336","action":{"buttonHover":"#D7dBDC","bgHover":"#1A1D20","mask":"rgba(91, 112, 131, 0.4)"}},"darker_high_contrast":{"grey":{"50":"#121517","200":"#3d4145","300":"#6e767d","700":"#929ca6"},"text":{"primary":"#D9D9D9","secondary":"#6E767D","strong":"#EFF3F4","buttonText":"#0F1419"},"error":{"main":"#FF5555"},"divider":"#2F3336","secondaryDivider":"#2F3336","background":{"default":"#15171A","input":"#1D2023","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(255, 255, 255, 0.2)"},"action":{"buttonHover":"#D7dBDC","bgHover":"#1A1D20","mask":"rgba(91, 112, 131, 0.4)"}}}');

/***/ })

}]);