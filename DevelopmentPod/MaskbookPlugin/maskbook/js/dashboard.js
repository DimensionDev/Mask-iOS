/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 80629:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React vundefined
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(52458);var f=__webpack_require__(76342),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:n.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 18286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "Vm": () => (/* binding */ Messages),
/* harmony export */   "NG": () => (/* binding */ PluginServices),
/* harmony export */   "yC": () => (/* binding */ PluginMessages),
/* harmony export */   "Bo": () => (/* binding */ setService),
/* harmony export */   "Z": () => (/* binding */ setMessages),
/* harmony export */   "cr": () => (/* binding */ setPluginServices),
/* harmony export */   "jg": () => (/* binding */ setPluginMessages)
/* harmony export */ });
let Services = null;
let Messages = null;
let PluginServices = null;
let PluginMessages = null;
function setService(rpc) {
    Services = rpc;
    Object.assign(globalThis, {
        Services: rpc
    });
}
function setMessages(MaskMessage) {
    Messages = MaskMessage;
    Object.assign(globalThis, {
        Messages: MaskMessage
    });
}
function setPluginServices(rpc) {
    PluginServices = rpc;
    Object.assign(globalThis, {
        PluginServices: rpc
    });
}
function setPluginMessages(message) {
    PluginMessages = message;
    Object.assign(globalThis, {
        PluginMessages: message
    });
}


/***/ }),

/***/ 73613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "QG": () => (/* reexport */ IntegratedDashboard),
  "Gp": () => (/* reexport */ addDashboardI18N),
  "Z": () => (/* reexport */ API/* setMessages */.Z),
  "jg": () => (/* reexport */ API/* setPluginMessages */.jg),
  "cr": () => (/* reexport */ API/* setPluginServices */.cr),
  "Bo": () => (/* reexport */ API/* setService */.Bo)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../dashboard/src/Dashboard.tsx


const Dashboard = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(8136), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(5398)]).then(__webpack_require__.bind(__webpack_require__, 15398))
);
function IntegratedDashboard() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: "",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dashboard, {})
    }));
}

// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(18286);
// EXTERNAL MODULE: ../dashboard/src/locales/en-US.json
var en_US = __webpack_require__(62012);
// EXTERNAL MODULE: ../dashboard/src/locales/ja-JP.json
var ja_JP = __webpack_require__(97979);
// EXTERNAL MODULE: ../dashboard/src/locales/ko-KR.json
var ko_KR = __webpack_require__(75743);
// EXTERNAL MODULE: ../dashboard/src/locales/qya-AA.json
var qya_AA = __webpack_require__(59641);
// EXTERNAL MODULE: ../dashboard/src/locales/zh-CN.json
var zh_CN = __webpack_require__(32284);
// EXTERNAL MODULE: ../dashboard/src/locales/zh-TW.json
var zh_TW = __webpack_require__(39675);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
;// CONCATENATED MODULE: ../dashboard/src/locales/languages.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts







const languages = {
    en: en_US,
    ja: ja_JP,
    ko: ko_KR,
    qy: qya_AA,
    'zh-CN': zh_CN,
    zh: zh_TW
};
const addDashboardI18N = (0,src/* createI18NBundle */.C9)('dashboard', languages);
// @ts-ignore
if (false) {}

;// CONCATENATED MODULE: ../dashboard/src/entry.tsx
// This entry is for dashboard used as a package (required by the main extension).
// Should only expose necessary API for setup the Dashboard API correctly.





/***/ }),

/***/ 54993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vU": () => (/* binding */ Flags)
/* harmony export */ });
/* unused harmony exports is_iOSApp, isAndroidApp */
var ref, ref1;
const is_iOSApp =  true && "app" === 'app';
const isAndroidApp = (/* unused pure expression or super */ null && ( true && "safari" === 'firefox'));
const appOnly = "app" === 'app';
const devOnly = "production" === 'development';
const webOnly =  false || devOnly;
const insiderOnly =  false || devOnly;
const betaOrInsiderOnly = insiderOnly || "stable" === 'beta';
// TODO: In future, we can turn this object into a Proxy to receive flags from remote
const Flags = {
    __raw__: {
        target: "safari",
        architecture: "app"
    },
    mask_SDK_ready: betaOrInsiderOnly,
    /** There is no "tabs" to navigate to. We must be careful with this. */ has_no_browser_tab_ui: appOnly,
    has_no_connected_user_link: appOnly,
    has_native_nav_bar: appOnly,
    using_ShadowDOM_attach_mode: 'closed',
    /** Don't inject injected script in this mode. Native side will do the job. */ support_declarative_user_script: is_iOSApp,
    /** Don't show welcome page in this mode. Native side will do the job. */ has_native_welcome_ui: appOnly,
    /** Firefox has a special API that can inject to the document with a higher permission. */ has_firefox_xray_vision: "safari" === 'firefox',
    support_testnet_switch: betaOrInsiderOnly,
    // #region Experimental features
    image_payload_marked_as_beta: appOnly,
    transak_enabled: webOnly,
    trader_zrx_enabled: webOnly,
    trader_all_api_cached_enabled: devOnly,
    metamask_enabled: webOnly,
    injected_web3_enabled: webOnly,
    toolbox_enabled: webOnly,
    /** Prohibit the use of test networks in production */ wallet_allow_testnet: betaOrInsiderOnly || "production" !== 'production',
    wallet_mnemonic_words_backup_enabled: false,
    wallet_private_key_backup_enabled: true,
    wallet_gas_price_dialog_enable: true,
    /* construct LBP for all ERC20 tokens */ LBP_enabled: false,
    LBP_whitelist_enabled: "production" === 'production',
    plugin_switch_enabled: betaOrInsiderOnly,
    // #endregion
    EIP1559_enabled: true,
    bsc_enabled: true,
    polygon_enabled: true,
    arbitrum_enabled: true,
    xdai_enabled: true,
    avalanche_enabled: true,
    fantom_enabled: true,
    flow_enabled: true,
    celo_enabled: true,
    aurora_enabled: true,
    nft_airdrop_enabled: false,
    // #region Functionality missing / broken
    /**
     * - iOS: WebExtension polyfill didn't implemented the dynamic permission API
     */ no_web_extension_dynamic_permission_request: is_iOSApp,
    has_no_WebRTC:  true || 0,
    // #endregion
    using_emoji_flag: true
};
if (false) {}


/***/ }),

/***/ 71054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MaskMessages)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);


const MaskMessages = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.WebExtensionMessage({
    domain: 'mask'
});
MaskMessages.serialization = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .serializer */ .GM;
Object.assign(globalThis, {
    MaskMessage: MaskMessages
});


/***/ }),

/***/ 94138:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../dashboard/src/entry.tsx + 2 modules
var entry = __webpack_require__(73613);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/plugins/Transak/messages.ts
var Transak_messages = __webpack_require__(71651);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var Trader_messages = __webpack_require__(47545);
// EXTERNAL MODULE: ./src/plugins/Pets/messages.ts
var Pets_messages = __webpack_require__(58505);
// EXTERNAL MODULE: ./src/utils/messages.ts
var utils_messages = __webpack_require__(86865);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(94531);
// EXTERNAL MODULE: ./src/plugin-infra/host.ts
var host = __webpack_require__(96687);
// EXTERNAL MODULE: ./src/utils/createNormalReactRoot.tsx + 1 modules
var createNormalReactRoot = __webpack_require__(28302);
// EXTERNAL MODULE: ./shared/kv-storage.ts
var kv_storage = __webpack_require__(30377);
// EXTERNAL MODULE: ./src/setup.ui.0.ts
var setup_ui_0 = __webpack_require__(29890);
// EXTERNAL MODULE: ./src/social-network-adaptor/index.ts + 4 modules
var social_network_adaptor = __webpack_require__(15267);
// EXTERNAL MODULE: ./src/social-network/define.ts
var social_network_define = __webpack_require__(9758);
;// CONCATENATED MODULE: ./src/setup.ui.ts
// Start SNS adaptor



const setup_ui_status = (0,social_network_define/* activateSocialNetworkUI */.Ps)();

;// CONCATENATED MODULE: ./src/extension/dashboard/index.tsx

// @ts-ignore in case circle dependency make typescript complains












const msg = {
    Wallet: messages/* WalletMessages */.R,
    Swap: Trader_messages/* PluginTraderMessages */.A,
    Transak: Transak_messages/* PluginTransakMessages */.l,
    Pets: Pets_messages/* PluginPetMessages */.s
};
const rpc = {
    Wallet: messages/* WalletRPC */.V,
    Swap: Trader_messages/* PluginTraderRPC */.V
};
// @ts-ignore To avoid build failure due to the circular project reference
(0,entry/* setService */.Bo)(service/* default */.ZP);
// @ts-ignore
(0,entry/* setMessages */.Z)(utils_messages/* MaskMessages */.q);
// @ts-ignore
(0,entry/* setPluginServices */.cr)(rpc);
// @ts-ignore
(0,entry/* setPluginMessages */.jg)(msg);
(0,src/* startPluginDashboard */.CB)((0,host/* createPluginHost */.R)(undefined, (pluginID, signal)=>{
    return {
        createKVStorage (type, defaultValues) {
            if (type === 'memory') return kv_storage/* InMemoryStorages.Plugin.createSubScope */.uU.Plugin.createSubScope(pluginID, defaultValues, signal);
            else return kv_storage/* PersistentStorages.Plugin.createSubScope */._H.Plugin.createSubScope(pluginID, defaultValues, signal);
        },
        personaSign: service/* default.Identity.signWithPersona */.ZP.Identity.signWithPersona,
        walletSign: service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign
    };
}));
setup_ui_status.then(()=>(0,createNormalReactRoot/* createNormalReactRoot */.j)(/*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* IntegratedDashboard */.QG, {}))
);


/***/ }),

/***/ 58505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ PluginPetMessages),
/* harmony export */   "k": () => (/* binding */ PluginPetRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50942);



if (false) {}
const PluginPetMessages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PetsPluginID */ .Dt, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const PluginPetRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PetsPluginID */ .Dt, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(5629)]).then(__webpack_require__.bind(__webpack_require__, 92857))
, PluginPetMessages.events.rpc);


/***/ }),

/***/ 4150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gn": () => (/* binding */ USDC),
/* harmony export */   "tB": () => (/* binding */ USDCe),
/* harmony export */   "AA": () => (/* binding */ USDT),
/* harmony export */   "_c": () => (/* binding */ USDTe),
/* harmony export */   "Hh": () => (/* binding */ fUSDT),
/* harmony export */   "lz": () => (/* binding */ BUSD),
/* harmony export */   "TP": () => (/* binding */ COMP),
/* harmony export */   "Ti": () => (/* binding */ MKR),
/* harmony export */   "uz": () => (/* binding */ MSKA),
/* harmony export */   "mW": () => (/* binding */ MSKB),
/* harmony export */   "Xw": () => (/* binding */ MSKC),
/* harmony export */   "h1": () => (/* binding */ DAI),
/* harmony export */   "Lq": () => (/* binding */ DAIe),
/* harmony export */   "s5": () => (/* binding */ AMPL),
/* harmony export */   "bi": () => (/* binding */ UST),
/* harmony export */   "c0": () => (/* binding */ ETHER),
/* harmony export */   "xZ": () => (/* binding */ QUICK),
/* harmony export */   "lB": () => (/* binding */ WANNA),
/* harmony export */   "ML": () => (/* binding */ WBTC),
/* harmony export */   "MI": () => (/* binding */ WBTCe),
/* harmony export */   "uj": () => (/* binding */ RUNE),
/* harmony export */   "nB": () => (/* binding */ BTCB),
/* harmony export */   "J6": () => (/* binding */ maUSDC),
/* harmony export */   "lK": () => (/* binding */ NFTX),
/* harmony export */   "_S": () => (/* binding */ STETH),
/* harmony export */   "PX": () => (/* binding */ CUSD),
/* harmony export */   "Th": () => (/* binding */ CEUR),
/* harmony export */   "yI": () => (/* binding */ PNG),
/* harmony export */   "FX": () => (/* binding */ WNATIVE),
/* harmony export */   "HL": () => (/* binding */ WNATIVE_ONLY),
/* harmony export */   "PM": () => (/* binding */ BIPS_BASE),
/* harmony export */   "IS": () => (/* binding */ ONE_BIPS),
/* harmony export */   "Bq": () => (/* binding */ SLIPPAGE_MIN),
/* harmony export */   "Nd": () => (/* binding */ SLIPPAGE_DEFAULT),
/* harmony export */   "Q9": () => (/* binding */ SLIPPAGE_MAX),
/* harmony export */   "ag": () => (/* binding */ DEFAULT_TRANSACTION_DEADLINE),
/* harmony export */   "rV": () => (/* binding */ L2_TRANSACTION_DEADLINE),
/* harmony export */   "rI": () => (/* binding */ MINIMUM_AMOUNT)
/* harmony export */ });
/* unused harmony exports HUSD, MSKD, MSKE, OKB, EASY, eUSDC, eUSDT, eDAI, sUSD, UNITOKEN, TT01, TT02, IGG, OM, SUSHI, YAM, YFI, CAKE, JOE, PRICE_IMPACT_LOW, PRICE_IMPACT_MEDIUM, PRICE_IMPACT_HIGH, PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN, PRICE_IMPACT_NON_EXPERT_BLOCKED */
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11304);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9094);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25071);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91339);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);



const USDC = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('USDC_ADDRESS', 'USD Coin', 'USDC', 6);
const USDCe = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('USDC_ADDRESS', 'USD Coin', 'USDCe', 6);
const USDT = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('USDT_ADDRESS', 'Tether USD', 'USDT', 6);
const USDTe = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('USDT_ADDRESS', 'Tether USD', 'USDT.e', 6);
const fUSDT = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('fUSDT_ADDRESS', 'Frapped USDT', 'fUSDT', 6);
const HUSD = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('HUSD_ADDRESS', 'Huobi USD', 'HUSD', 6);
const BUSD = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('BUSD_ADDRESS', 'Huobi USD', 'BUSD', 6);
const COMP = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('COMP_ADDRESS', 'Compound', 'COMP', 18);
const MKR = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MKR_ADDRESS', 'Maker', 'MKR', 18);
const MSKA = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MSKA_ADDRESS', 'Mask A', 'MSKA', 18);
const MSKB = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MSKB_ADDRESS', 'Mask B', 'MSKB', 18);
const MSKC = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MSKC_ADDRESS', 'Mask C', 'MSKC', 18);
const MSKD = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MSKD_ADDRESS', 'Mask D', 'MSKD', 18);
const MSKE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('MSKE_ADDRESS', 'Mask E', 'MSKE', 18);
const DAI = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('DAI_ADDRESS', 'Dai Stablecoin', 'DAI', 18);
const DAIe = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('DAI_ADDRESS', 'Dai Stablecoin', 'DAI.e', 18);
const AMPL = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('AMPL_ADDRESS', 'Ampleforth', 'AMPL', 18);
const OKB = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('OKB_ADDRESS', 'Ampleforth', 'OKB', 18);
const UST = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('UST_ADDRESS', 'Wrapped UST Token', 'UST', 18);
const EASY = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('EASY_ADDRESS', 'EASY', 'EASY', 18);
const eUSDC = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('eUSDC_ADDRESS', 'Easy USDC', 'eUSDC', 18);
const eUSDT = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('eUSDT_ADDRESS', 'Easy USDT', 'eUSDT', 18);
const eDAI = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('eDAI_ADDRESS', 'Easy DAI', 'eDAI', 18);
const sUSD = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('sUSD_ADDRESS', 'Synth sUSD', 'sUSD', 18);
const UNITOKEN = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('UNITOKEN_ADDRESS', 'Uniswap', 'UNI', 18);
const TT01 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('TT01_ADDRESS', 'Test Token 01', 'TT01', 18);
const TT02 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('TT02_ADDRESS', 'Test Token 02', 'TT02', 18);
const ETHER = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('ETHER_ADDRESS', 'Ether', 'ETH', 18);
const QUICK = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('QUICK_ADDRESS', 'Quickswap', 'QUICK', 18);
const WANNA = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('WANNA_ADDRESS', 'Wannaswap', 'WANNA', 18);
const WBTC = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('WBTC_ADDRESS', 'Wrapped Bitcoin', 'WBTC', 18);
const WBTCe = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('WBTC_ADDRESS', 'Wrapped Bitcoin', 'WBTCe', 18);
const IGG = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('IGG_ADDRESS', 'IG Gold', 'IGG', 18);
const OM = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('OM_ADDRESS', 'OM Token', 'OM', 18);
const SUSHI = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('SUSHI_ADDRESS', 'SushiToken', 'SUSHI', 18);
const YAM = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('YAM_ADDRESS', 'YAM', 'YAM', 18);
const RUNE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('RUNE_ADDRESS', 'RUNE.ETH', 'RUNE', 18);
const YFI = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('YFI_ADDRESS', 'Yearn', 'YFI', 18);
const BTCB = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('BTCB_ADDRESS', 'Binance BTC', 'BTCB', 18);
const CAKE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('CAKE_ADDRESS', 'PancakeSwap Token', 'CAKE', 18);
const maUSDC = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('maUSDC_ADDRESS', 'Matic Aave interest bearing USDC', 'maUSDC', 6);
const NFTX = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('NFTX_ADDRESS', 'NFTX', 'NFTX', 18);
const STETH = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('stETH_ADDRESS', 'stakedETH', 'stETH', 18);
const CUSD = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('cUSD_ADDRESS', 'Celo Dollar', 'cUSD', 18);
const CEUR = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('cEUR_ADDRESS', 'Celo Euro', 'cEUR', 18);
const JOE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('JOE_ADDRESS', 'JoeToken', 'JOE', 18);
const PNG = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('PNG_ADDRESS', 'Pangolin', 'PNG', 18);
var _name, _symbol;
const WNATIVE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .createERC20Tokens */ .vs)('WNATIVE_ADDRESS', (chainId)=>{
    var ref;
    return `Wrapped ${(_name = (ref = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .getChainDetailed */ .$G)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.name) !== null && _name !== void 0 ? _name : 'Ether'}`;
}, (chainId)=>{
    var ref;
    return `W${(_symbol = (ref = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .getChainDetailed */ .$G)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.symbol) !== null && _symbol !== void 0 ? _symbol : 'ETH'}`;
}, 18);
const WNATIVE_ONLY = {
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Mainnet */ .a_.Mainnet]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Ropsten */ .a_.Ropsten]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Ropsten */ .a_.Ropsten]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Rinkeby */ .a_.Rinkeby]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Rinkeby */ .a_.Rinkeby]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Kovan */ .a_.Kovan]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Kovan */ .a_.Kovan]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Gorli */ .a_.Gorli]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Gorli */ .a_.Gorli]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.BSC */ .a_.BSC]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.BSC */ .a_.BSC]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.BSCT */ .a_.BSCT]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.BSCT */ .a_.BSCT]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Matic */ .a_.Matic]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Matic */ .a_.Matic]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Mumbai */ .a_.Mumbai]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Mumbai */ .a_.Mumbai]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Arbitrum */ .a_.Arbitrum]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Arbitrum */ .a_.Arbitrum]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Arbitrum_Rinkeby */ .a_.Arbitrum_Rinkeby]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Arbitrum_Rinkeby */ .a_.Arbitrum_Rinkeby]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.xDai */ .a_.xDai]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.xDai */ .a_.xDai]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Avalanche */ .a_.Avalanche]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Avalanche_Fuji */ .a_.Avalanche_Fuji]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Avalanche_Fuji */ .a_.Avalanche_Fuji]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Celo */ .a_.Celo]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Celo */ .a_.Celo]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Fantom */ .a_.Fantom]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Fantom */ .a_.Fantom]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Aurora */ .a_.Aurora]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Aurora */ .a_.Aurora]
    ],
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Aurora_Testnet */ .a_.Aurora_Testnet]: [
        WNATIVE[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .ChainId.Aurora_Testnet */ .a_.Aurora_Testnet]
    ]
};
const BIPS_BASE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(10000);
const ONE_BIPS = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ONE.dividedBy */ .ry.dividedBy(BIPS_BASE);
const SLIPPAGE_MIN = 10 // bips
;
const SLIPPAGE_DEFAULT = 50 // bips
;
const SLIPPAGE_MAX = 2000 // bips
;
const DEFAULT_TRANSACTION_DEADLINE = 30 /* minutes */  * 60 /* seconds */ ;
const L2_TRANSACTION_DEADLINE = 60 /* minutes */  * 5 /* seconds */ ;
const PRICE_IMPACT_LOW = 100 // 1%
;
const PRICE_IMPACT_MEDIUM = 300 // 3%
;
const PRICE_IMPACT_HIGH = 500 // 5%
;
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = 1000 // 10%
;
// for non expert mode disable swaps above this
const PRICE_IMPACT_NON_EXPERT_BLOCKED = 1500 // 15%
;
const MINIMUM_AMOUNT = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())('1e-6');


/***/ }),

/***/ 47545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22487);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(187), __webpack_require__.e(3758), __webpack_require__.e(211), __webpack_require__.e(7604), __webpack_require__.e(3375), __webpack_require__.e(1626), __webpack_require__.e(3751)]).then(__webpack_require__.bind(__webpack_require__, 25657))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 71651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57887);


if (false) {}
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);


/***/ }),

/***/ 28302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ createNormalReactRoot)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.0.0-rc.0_react@18.0.0-rc.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(15621);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(21949);
;// CONCATENATED MODULE: ./src/components/shared/ErrorBoundary.tsx


// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(14767);
;// CONCATENATED MODULE: ./src/utils/createNormalReactRoot.tsx




function createNormalReactRoot(jsx, container) {
    var ref;
    if (!container) container = (ref = document.getElementById('root')) !== null && ref !== void 0 ? ref : void 0;
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    if (false) {}
    return react_dom.createRoot(container).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* NoEffectUsePortalShadowRootContext.Provider */.XR.Provider, {
        value: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ErrorBoundary */.SV, {
            children: jsx
        })
    }));
}


/***/ }),

/***/ 67429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);

function useControlledDialog() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        open,
        setOpen,
        onClose: ()=>setOpen(false)
        ,
        onOpen: ()=>setOpen(true)
    };
}


/***/ }),

/***/ 16220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91480);
/* harmony import */ var _shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18119);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32337);




/**
 * A util hooks for easier to use `<Menu>`s.
 * @param menus Material UI `<MenuItem />` elements
 */ function useMenu(elements, anchorSibling = false, props, useShadowRoot = true) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const close = ()=>{
        setOpen(false);
        setAnchorEl(null);
    };
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useShadowRoot ? _shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_1__/* .ShadowRootMenu */ .dy : _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            PaperProps: props === null || props === void 0 ? void 0 : props.paperProps,
            MenuListProps: props === null || props === void 0 ? void 0 : props.menuListProps,
            open,
            anchorEl,
            onClose: close,
            onClick: close,
            anchorOrigin: props === null || props === void 0 ? void 0 : props.anchorOrigin,
            transformOrigin: props === null || props === void 0 ? void 0 : props.transformOrigin
        }, elements === null || elements === void 0 ? void 0 : elements.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
                ...element.props,
                key
            }) : element
        )),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((anchorElOrEvent)=>{
            let element;
            if (anchorElOrEvent instanceof HTMLElement) {
                element = anchorElOrEvent;
            } else {
                element = anchorElOrEvent.currentTarget;
            }
            var ref;
            // when the essential content of currentTarget would be closed over,
            //  we can set the anchorEl with currentTarget's bottom sibling to avoid it.
            const finalAnchor = anchorSibling ? (ref = element.nextElementSibling) !== null && ref !== void 0 ? ref : undefined : element;
            setAnchorEl(finalAnchor);
            setOpen(true);
            // HACK: it seems like anchor doesn't work correctly
            // but a force repaint can solve the problem.
            window.requestAnimationFrame(update);
        }, []), 
    ];
}


/***/ }),

/***/ 11:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useSettingsSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21949);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9228);




function useSettingsSwitcher(settings, options, resolver) {
    const currentOption = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .useValueRef */ .E)(settings);
    const nextOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (options.length === 0) return;
        if (typeof currentOption === 'undefined') return options[0];
        const indexOf = options.indexOf(currentOption);
        if (indexOf === -1) return;
        return indexOf === options.length - 1 ? options[0] : options[indexOf + 1];
    }, [
        currentOption,
        options
    ]);
    const onSwitch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (typeof nextOption !== 'undefined') settings.value = nextOption;
    }, [
        nextOption
    ]);
    if (options.length <= 1) return null;
    if (typeof nextOption === 'undefined') return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        sx: {
            marginTop: 1
        },
        color: "primary",
        variant: "contained",
        onClick: onSwitch,
        children: [
            "Switch to ",
            resolver(nextOption)
        ]
    }));
}


/***/ }),

/***/ 18119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "dy": () => (/* binding */ ShadowRootMenu),
/* harmony export */   "sV": () => (/* binding */ ShadowRootPopper)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54648);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91480);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37674);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14767);


const ShadowRootTooltip = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const ShadowRootMenu = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
const ShadowRootPopper = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);


/***/ }),

/***/ 42894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ getAssetAsBlobURL)
});

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
;// CONCATENATED MODULE: ./src/utils/suspends/getAssetAsBlobURL.ts

const cache = new Map();
/**
 * Fetch a file and turn it into blob URL.
 * This function must run in React concurrent mode.
 */ function getAssetAsBlobURL(url) {
    url = url.toString();
    if (!cache.has(url)) throw toBlob(url);
    return cache.get(url);
}
async function toBlob(url) {
    const blobURL = URL.createObjectURL(await service/* default.Helper.fetch */.ZP.Helper.fetch(url));
    cache.set(url, blobURL);
    return blobURL;
}

;// CONCATENATED MODULE: ./src/utils/suspends/index.ts



/***/ }),

/***/ 19847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ UpgradeBackupJSONFile),
/* harmony export */   "V": () => (/* binding */ getBackupPreviewInfo)
/* harmony export */ });
/* harmony import */ var _version_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59250);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);
/* harmony import */ var _version_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57711);
/* harmony import */ var _version_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99367);
/* eslint-disable import/no-deprecated */ 



function UpgradeBackupJSONFile(json, identity) {
    if ((0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .isBackupJSONFileVersion2 */ .GI)(json)) return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .patchNonBreakingUpgradeForBackupJSONFileVersion2 */ .a6)(json);
    if ((0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .isBackupJSONFileVersion1 */ .RV)(json)) return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .upgradeFromBackupJSONFileVersion1 */ .nl)((0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .patchNonBreakingUpgradeForBackupJSONFileVersion1 */ .z2)(json));
    if ((0,_version_0__WEBPACK_IMPORTED_MODULE_3__/* .isBackupJSONFileVersion0 */ .m)(json) && identity) {
        const upgraded = (0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .upgradeFromBackupJSONFileVersion0 */ .Bd)(json, identity);
        if (upgraded === null) return null;
        return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .upgradeFromBackupJSONFileVersion1 */ .nl)(upgraded);
    }
    return null;
}
function getBackupPreviewInfo(json) {
    var ref, ref1;
    return {
        personas: json.personas.length,
        accounts: json.personas.reduce((a, b)=>a + b.linkedProfiles.length
        , 0),
        posts: json.posts.length,
        contacts: json.profiles.length,
        relations: json.relations.length,
        files: ((ref = json.plugin) === null || ref === void 0 ? void 0 : (ref1 = ref[_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService]) === null || ref1 === void 0 ? void 0 : ref1.length) || 0,
        wallets: json.wallets.length,
        createdAt: json._meta_.createdAt
    };
}


/***/ }),

/***/ 10519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _JSON_latest__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _JSON_latest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19847);



/***/ }),

/***/ 86503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ CompositionContext),
/* harmony export */   "C": () => (/* binding */ useCompositionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);

const CompositionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    attachMetadata () {},
    dropMetadata () {}
});
const useCompositionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionContext)
;
/* unsupported import.meta.webpackHot */ undefined && 0;


/***/ }),

/***/ 56843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eT": () => (/* binding */ PostInfoProvider),
/* harmony export */   "oQ": () => (/* binding */ usePostInfo),
/* harmony export */   "H9": () => (/* binding */ usePostInfoDetails),
/* harmony export */   "FT": () => (/* binding */ usePostInfoSharedPublic)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21949);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47175);





const Context = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const PostInfoProvider = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(Context.Provider, {
        value: props.post,
        children: props.children
    });
});
function usePostInfo() {
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);
}
const usePostInfoDetails = new Proxy({
    __proto__: null
}, {
    get (_, key) {
        if (typeof key === 'symbol') throw new Error();
        if (_[key]) return _[key];
        _[key] = function usePostInfoDetails() {
            const postInfo = usePostInfo();
            if (!postInfo) throw new TypeError('No post context');
            if (!(key in postInfo)) throw new TypeError();
            const k = postInfo[key];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.ValueRef) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ObservableMap */ .vP) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .useObservableValues */ .pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ObservableSet */ .n7) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .useObservableValues */ .pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (isSubscription(k)) return (0,use_subscription__WEBPACK_IMPORTED_MODULE_3__.useSubscription)(k);
            return k;
        };
        return _[key];
    }
});
function isSubscription(x) {
    return typeof x === 'object' && x !== null && Boolean(x.getCurrentValue && x.subscribe);
}
function usePostInfoSharedPublic() {
    const info = usePostInfoDetails.containingMaskPayload();
    if (info.err) return false;
    const payload = info.val;
    if (payload.version !== -38) return false;
    return !!payload.sharedPublic;
}


/***/ }),

/***/ 35665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ CurrentSNSNetwork),
/* harmony export */   "j": () => (/* binding */ PluginId)
/* harmony export */ });
var CurrentSNSNetwork;
(function(CurrentSNSNetwork) {
    CurrentSNSNetwork[CurrentSNSNetwork["Unknown"] = 0] = "Unknown";
    CurrentSNSNetwork[CurrentSNSNetwork["Facebook"] = 1] = "Facebook";
    CurrentSNSNetwork[CurrentSNSNetwork["Twitter"] = 2] = "Twitter";
    CurrentSNSNetwork[CurrentSNSNetwork["Instagram"] = 3] = "Instagram";
    CurrentSNSNetwork[CurrentSNSNetwork["Minds"] = 4] = "Minds";
})(CurrentSNSNetwork || (CurrentSNSNetwork = {}));
var PluginId;
(function(PluginId) {
    PluginId["Avatar"] = 'com.maskbook.avatar';
    PluginId["Collectible"] = 'com.maskbook.collectibles';
    PluginId["CryptoArtAI"] = 'com.maskbook.cryptoartai';
    PluginId["dHEDGE"] = 'org.dhedge';
    PluginId["EVM"] = 'com.mask.evm';
    PluginId["NextID"] = 'com.mask.next_id';
    PluginId["External"] = 'io.mask.external';
    PluginId["Furucombo"] = 'app.furucombo';
    PluginId["Gitcoin"] = 'co.gitcoin';
    PluginId["GoodGhosting"] = 'co.good_ghosting';
    PluginId["MaskBox"] = 'com.maskbook.box';
    PluginId["Poll"] = 'com.maskbook.poll';
    PluginId["Profile"] = 'com.mask.profile';
    PluginId["Trader"] = 'com.maskbook.trader';
    PluginId["Transak"] = 'com.maskbook.transak';
    PluginId["Valuables"] = 'com.maskbook.tweet';
    PluginId["DAO"] = 'money.juicebox';
    PluginId["Debugger"] = 'io.mask.debugger';
    PluginId["Example"] = 'io.mask.example';
    PluginId["Flow"] = 'com.mask.flow';
    PluginId["RSS3"] = 'bio.rss3';
    PluginId["RedPacket"] = 'com.maskbook.red_packet';
    PluginId["Pets"] = 'com.maskbook.pets';
    PluginId["Snapshot"] = 'org.snapshot';
    PluginId["ITO"] = 'com.maskbook.ito';
    PluginId["Wallet"] = 'com.maskbook.wallet';
    PluginId["PoolTogether"] = 'com.pooltogether';
    PluginId["UnlockProtocol"] = 'com.maskbook.unlockprotocol';
    PluginId["FileService"] = 'com.maskbook.fileservice';
})(PluginId || (PluginId = {}));


/***/ }),

/***/ 61260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useChainColor)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73327);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56964);


function useChainColor(pluginID) {
    var ref;
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID);
    const { Utils  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    var ref1;
    return (ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.resolveChainColor) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId)) !== null && ref1 !== void 0 ? ref1 : 'transparent';
}


/***/ }),

/***/ 59270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useChainDetailed)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73327);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56964);


function useChainDetailed(pluginID) {
    var ref;
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID);
    const { Utils  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    var ref1;
    return (ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.getChainDetailed) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId)) !== null && ref1 !== void 0 ? ref1 : null;
}


/***/ }),

/***/ 24434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useChainIdValid)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73327);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56964);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99599);



function useChainIdValid(pluginID) {
    var ref;
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)(pluginID);
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID);
    const { Utils  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    var ref1;
    return !account || ((ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.isChainIdValid) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId, "production" === 'development')) !== null && ref1 !== void 0 ? ref1 : false);
}


/***/ }),

/***/ 85123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.FW),
/* harmony export */   "P7": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.P7),
/* harmony export */   "td": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.td),
/* harmony export */   "iu": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.iu),
/* harmony export */   "z4": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.z4)
/* harmony export */ });
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42693);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17442);
// Following is the API that can be called from the native side.

// Following is the API that implemented by the native side.




/***/ }),

/***/ 36978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ DashboardRoutes)
/* harmony export */ });
var DashboardRoutes;
(function(DashboardRoutes) {
    DashboardRoutes["Welcome"] = '/welcome';
    DashboardRoutes["Setup"] = '/setup';
    DashboardRoutes["SignUp"] = '/sign-up';
    DashboardRoutes["SignIn"] = '/sign-in';
    DashboardRoutes["PrivacyPolicy"] = '/privacy-policy';
    DashboardRoutes["Personas"] = '/personas';
    DashboardRoutes["Wallets"] = '/wallets';
    DashboardRoutes["WalletsTransfer"] = '/wallets/transfer';
    DashboardRoutes["WalletsSwap"] = '/wallets/swap';
    DashboardRoutes["WalletsRedPacket"] = '/wallets/red-packet';
    DashboardRoutes["WalletsSell"] = '/wallets/sell';
    DashboardRoutes["WalletsHistory"] = '/wallets/history';
    DashboardRoutes["CreateMaskWallet"] = '/create-mask-wallet';
    DashboardRoutes["CreateMaskWalletForm"] = '/create-mask-wallet/form';
    DashboardRoutes["CreateMaskWalletMnemonic"] = '/create-mask-wallet/mnemonic';
    DashboardRoutes["Settings"] = '/settings';
    DashboardRoutes["Labs"] = '/labs';
})(DashboardRoutes || (DashboardRoutes = {}));


/***/ }),

/***/ 18911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ parseURL)
/* harmony export */ });
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5670);

function parseURL(text) {
    const lib = anchorme__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    // CJS-ESM compatibility
    return lib.list(text).map((x)=>x.string
    ).filter((y)=>{
        // See https://github.com/alexcorvi/anchorme.js/issues/109
        try {
            new URL(y);
            return true;
        } catch  {
            return false;
        }
    });
}


/***/ }),

/***/ 70395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ I18NextProviderHMR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85468);


const I18NextProviderHMR =  false ? 0 : react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .I18nextProvider */ .a;


/***/ }),

/***/ 47153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32513);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event1, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()) // create an uuid for every hook
    ;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return event1.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote === null || onUpdateByRemote === void 0 ? void 0 : onUpdateByRemote(_ev);
        });
    }, [
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

/***/ 75666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "US": () => (/* reexport */ CSSVariableInjector/* CSSVariableInjector */.U),
  "XR": () => (/* reexport */ NoEffectUsePortalShadowRootContext),
  "zV": () => (/* reexport */ createReactRootShadowed/* createReactRootShadowedPartial */.z),
  "lr": () => (/* reexport */ createShadowRootForwardedComponent),
  "vg": () => (/* reexport */ createShadowRootForwardedPopperComponent),
  "d_": () => (/* reexport */ setupPortalShadowRoot),
  "ad": () => (/* reexport */ usePortalShadowRoot)
});

// UNUSED EXPORTS: useCurrentShadowRootStyles

// EXTERNAL MODULE: ../theme/src/ShadowRoot/ShadowRootStyleProvider.tsx
var ShadowRootStyleProvider = __webpack_require__(39225);
// EXTERNAL MODULE: ../theme/src/ShadowRoot/createReactRootShadowed.tsx
var createReactRootShadowed = __webpack_require__(79036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../theme/src/ShadowRoot/Portal.tsx



/**
 * ! Do not export !
 *
 * You SHOULD NOT use this in React directly
 */ let mountingPoint;
let mountingShadowRoot;
function setupPortalShadowRoot(init, preventEventPropagationList) {
    if (mountingPoint) return mountingShadowRoot;
    mountingShadowRoot = document.body.appendChild(document.createElement('div')).attachShadow(init);
    for (const each of preventEventPropagationList){
        mountingShadowRoot.addEventListener(each, (e)=>e.stopPropagation()
        );
    }
    mountingPoint = mountingShadowRoot.appendChild(document.createElement('div'));
    return mountingShadowRoot;
}
/** usePortalShadowRoot under this context does not do anything. (And it will return an empty container). */ const NoEffectUsePortalShadowRootContext = /*#__PURE__*/ (0,react.createContext)(false);
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
    // we ignore the changes on this property during multiple render
    // so we can violates the React hooks rule and still be safe.
    const disabled = (0,react.useRef)((0,react.useContext)(NoEffectUsePortalShadowRootContext)).current;
    if (disabled) return renderer(undefined);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [findMountingShadowRef, setRef] = (0,react.useState)(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const doms = useSideEffectRef(()=>{
        const root = document.createElement('div');
        const container = root.appendChild(document.createElement('div'));
        const style = root.appendChild(document.createElement('style'));
        return {
            root,
            container,
            style
        };
    });
    const { container: container1  } = doms;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(IsolatedRender, {
        ...doms,
        findMountingShadowRef: findMountingShadowRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    display: 'none'
                },
                ref: (ref)=>findMountingShadowRef !== ref && setRef(ref)
            }),
            renderer(container1)
        ]
    }));
}
const IsolatedRender = ({ container , root , style , children , findMountingShadowRef  })=>{
    const update = useUpdate();
    const css = (0,ShadowRootStyleProvider/* useCurrentShadowRootStyles */.I)(findMountingShadowRef);
    const containerInUse = container.children.length !== 0;
    (0,react.useEffect)(()=>{
        container.appendChild = bind(container.appendChild, container, update);
        container.removeChild = bind(container.removeChild, container, update);
    }, []);
    (0,react.useEffect)(()=>{
        if (!containerInUse) return root.remove();
        const shadow = PortalShadowRoot();
        if (root.parentElement === shadow) return;
        shadow.appendChild(root);
    }, [
        containerInUse,
        root
    ]);
    (0,react.useEffect)(()=>{
        if (findMountingShadowRef && style.textContent !== css) style.textContent = css;
    }, [
        style,
        css,
        findMountingShadowRef
    ]);
    return children;
};
function createShadowRootForwardedComponent(Component) {
    return(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    }));
}
function createShadowRootForwardedPopperComponent(Component) {
    return(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            }));
        });
    }));
}
/**
 * ! Do not export !
 */ function PortalShadowRoot() {
    if (location.protocol.includes('extension')) return document.body;
    if (globalThis.location.hostname === 'localhost') return document.body;
    if (!mountingPoint) throw new TypeError('Please call setupPortalShadowRoot first');
    return mountingPoint;
}
function bind(f, thisArg, hook) {
    return (...args)=>{
        try {
            return f.apply(thisArg, args);
        } finally{
            hook();
        }
    };
}
function useUpdate() {
    const [, _update] = (0,react.useState)(0);
    return ()=>_update((i)=>i + 1
        )
    ;
}
function useSideEffectRef(f) {
    const ref = (0,react.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}

// EXTERNAL MODULE: ../theme/src/ShadowRoot/CSSVariableInjector.tsx
var CSSVariableInjector = __webpack_require__(6985);
;// CONCATENATED MODULE: ../theme/src/ShadowRoot/index.ts






/***/ }),

/***/ 14767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "um": () => (/* binding */ Appearance),
  "E1": () => (/* reexport */ ButtonGroupTab/* ButtonGroupTabList */.E),
  "US": () => (/* reexport */ ShadowRoot/* CSSVariableInjector */.US),
  "qA": () => (/* reexport */ CountdownButton/* CountdownButton */.q),
  "YO": () => (/* reexport */ Snackbar/* CustomSnackbarProvider */.YO),
  "yu": () => (/* reexport */ DialogStack/* DialogStackingProvider */.y),
  "pL": () => (/* reexport */ FolderTabs/* FolderTabPanel */.p),
  "Jc": () => (/* reexport */ FolderTabs/* FolderTabs */.J),
  "ZN": () => (/* reexport */ constants/* MaskColorVar */.ZN),
  "Hr": () => (/* binding */ MaskDarkTheme),
  "Df": () => (/* reexport */ Dialog/* MaskDialog */.D),
  "Cp": () => (/* binding */ MaskLightTheme),
  "b4": () => (/* reexport */ LoadingButton/* MaskLoadingButton */.b),
  "FU": () => (/* reexport */ TextField/* MaskTextField */.F),
  "XR": () => (/* reexport */ ShadowRoot/* NoEffectUsePortalShadowRootContext */.XR),
  "g8": () => (/* reexport */ PhoneNumberField/* PhoneNumberField */.g),
  "xV": () => (/* reexport */ SearchableList/* SearchableList */.x),
  "oe": () => (/* reexport */ SendingCodeField/* SendingCodeField */.o),
  "wT": () => (/* reexport */ Snackbar/* SnackbarProvider */.wT),
  "Dc": () => (/* reexport */ constants/* applyMaskColorVars */.Dc),
  "zV": () => (/* reexport */ ShadowRoot/* createReactRootShadowedPartial */.zV),
  "lr": () => (/* reexport */ ShadowRoot/* createShadowRootForwardedComponent */.lr),
  "vg": () => (/* reexport */ ShadowRoot/* createShadowRootForwardedPopperComponent */.vg),
  "nb": () => (/* reexport */ constants/* getMaskColor */.nb),
  "F4": () => (/* reexport */ makeStyles/* keyframes */.F),
  "ZL": () => (/* reexport */ makeStyles/* makeStyles */.Z),
  "ze": () => (/* reexport */ custom_ui_helper/* mergeClasses */.z),
  "or": () => (/* reexport */ custom_ui_helper.or),
  "lu": () => (/* binding */ parseColor),
  "d_": () => (/* reexport */ ShadowRoot/* setupPortalShadowRoot */.d_),
  "Ii": () => (/* reexport */ Snackbar/* useCustomSnackbar */.Ii),
  "tE": () => (/* reexport */ DialogStack/* useDialogStackActor */.t),
  "ad": () => (/* reexport */ ShadowRoot/* usePortalShadowRoot */.ad),
  "Bc": () => (/* reexport */ custom_ui_helper/* useStylesExtends */.B),
  "QO": () => (/* binding */ useSystemPreferencePalette),
  "YE": () => (/* reexport */ hooks/* useTabs */.Y)
});

// UNUSED EXPORTS: ButtonTab, CustomSnackbarContent, MaskDialogTitle, MaskSearchableItemInList, currentSystemPreferencePalette, useCurrentShadowRootStyles, useMaskColor, useMaskDialog, useSnackbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/createTheme.js + 8 modules
var createTheme = __webpack_require__(54247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(95501);
// EXTERNAL MODULE: ../theme/src/changes.ts
var changes = __webpack_require__(43903);
// EXTERNAL MODULE: ../theme/src/component-changes.ts
var component_changes = __webpack_require__(89419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js + 2 modules
var merge = __webpack_require__(97173);
// EXTERNAL MODULE: ../theme/src/constants.ts
var constants = __webpack_require__(24969);
// EXTERNAL MODULE: ../../node_modules/.pnpm/tinycolor2@1.4.2/node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__(32086);
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);
// EXTERNAL MODULE: ../theme/src/makeStyles.ts
var makeStyles = __webpack_require__(62554);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/Dialog.tsx
var Dialog = __webpack_require__(98737);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogTitle.tsx
var DialogTitle = __webpack_require__(82085);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(34010);
;// CONCATENATED MODULE: ../theme/src/Components/Dialogs/index.ts




// EXTERNAL MODULE: ../theme/src/Components/ButtonGroupTab/index.ts + 2 modules
var ButtonGroupTab = __webpack_require__(9729);
// EXTERNAL MODULE: ../theme/src/Components/FolderTabs/index.tsx
var FolderTabs = __webpack_require__(8041);
// EXTERNAL MODULE: ../theme/src/Components/Snackbar/index.tsx
var Snackbar = __webpack_require__(88569);
// EXTERNAL MODULE: ../theme/src/Components/SearchableList/index.ts + 2 modules
var SearchableList = __webpack_require__(28631);
// EXTERNAL MODULE: ../theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(81964);
// EXTERNAL MODULE: ../theme/src/Components/CountdownButton/index.tsx
var CountdownButton = __webpack_require__(3221);
// EXTERNAL MODULE: ../theme/src/Components/SendingCodeField/index.tsx
var SendingCodeField = __webpack_require__(93693);
// EXTERNAL MODULE: ../theme/src/Components/PhoneNumberField/index.tsx
var PhoneNumberField = __webpack_require__(61478);
// EXTERNAL MODULE: ../theme/src/Components/LoadingButton/index.tsx
var LoadingButton = __webpack_require__(15480);
;// CONCATENATED MODULE: ../theme/src/Components/index.ts











// EXTERNAL MODULE: ../theme/src/hooks/index.ts + 1 modules
var hooks = __webpack_require__(25815);
// EXTERNAL MODULE: ../theme/src/ShadowRoot/index.ts + 1 modules
var ShadowRoot = __webpack_require__(75666);
// EXTERNAL MODULE: ../theme/src/UIHelper/custom-ui-helper.tsx
var custom_ui_helper = __webpack_require__(35);
;// CONCATENATED MODULE: ../theme/src/index.ts
/// <reference path="./extended.d.ts" />
// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated






const parseColor = (tinycolor_default());
const color = (mode, color1)=>({
        mode,
        primary: {
            main: color1.primary,
            contrastText: color1.primaryContrastText
        },
        secondary: {
            main: color1.primary,
            contrastText: color1.primaryContrastText
        },
        background: {
            paper: color1.primaryBackground,
            default: color1.secondaryBackground
        },
        error: {
            main: color1.redMain,
            contrastText: color1.redContrastText
        },
        success: {
            main: color1.greenMain
        },
        warning: {
            main: color1.orangeMain
        },
        divider: color1.divider,
        text: {
            primary: color1.textPrimary,
            secondary: color1.textSecondary
        }
    })
;
function MaskTheme(mode) {
    const colors = mode === 'dark' ? constants/* DarkColor */.I3 : constants/* LightColor */.Ci;
    const theme = (0,merge/* default */.Z)({
        palette: color(mode, colors)
    }, ...Object.values(changes).map(applyColors), ...Object.values(component_changes).map(applyColors));
    return (0,createTheme/* default */.Z)(theme);
    function applyColors(x) {
        if (typeof x === 'function') return x(mode, colors);
        return x;
    }
}
const MaskLightTheme = MaskTheme('light');
const MaskDarkTheme = MaskTheme('dark');






const query = '(prefers-color-scheme: dark)';
function useSystemPreferencePalette() {
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    return (0,useMediaQuery/* default */.Z)(query) ? 'dark' : 'light';
}
function currentSystemPreferencePalette() {
    return matchMedia(query).matches ? 'dark' : 'light';
}
var Appearance;
(function(Appearance) {
    Appearance["default"] = "default";
    Appearance["light"] = "light";
    Appearance["dark"] = "dark";
})(Appearance || (Appearance = {}));


/***/ }),

/***/ 62554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ makeStyles),
/* harmony export */   "F": () => (/* reexport safe */ tss_react__WEBPACK_IMPORTED_MODULE_0__.F4)
/* harmony export */ });
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28527);


const { makeStyles  } = (0,tss_react__WEBPACK_IMPORTED_MODULE_0__/* .createMakeStyles */ .a0)({
    useTheme: _mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
});



/***/ }),

/***/ 7185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UG": () => (/* binding */ Err),
/* harmony export */   "Ok": () => (/* binding */ Ok),
/* harmony export */   "x4": () => (/* binding */ Result)
/* harmony export */ });
/* unused harmony exports ErrImpl, OkImpl */
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99734);
/* harmony import */ var _option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2081);


/**
 * Contains the error value
 */
var ErrImpl = /** @class */ (function () {
    function ErrImpl(val) {
        if (!(this instanceof ErrImpl)) {
            return new ErrImpl(val);
        }
        this.ok = false;
        this.err = true;
        this.val = val;
        var stackLines = new Error().stack.split('\n').slice(2);
        if (stackLines && stackLines.length > 0 && stackLines[0].includes('ErrImpl')) {
            stackLines.shift();
        }
        this._stack = stackLines.join('\n');
    }
    ErrImpl.prototype[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: true, value: undefined };
            },
        };
    };
    /**
     * @deprecated in favor of unwrapOr
     * @see unwrapOr
     */
    ErrImpl.prototype.else = function (val) {
        return val;
    };
    ErrImpl.prototype.unwrapOr = function (val) {
        return val;
    };
    ErrImpl.prototype.expect = function (msg) {
        throw new Error(msg + " - Error: " + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + "\n" + this._stack);
    };
    ErrImpl.prototype.unwrap = function () {
        throw new Error("Tried to unwrap Error: " + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + "\n" + this._stack);
    };
    ErrImpl.prototype.map = function (_mapper) {
        return this;
    };
    ErrImpl.prototype.andThen = function (op) {
        return this;
    };
    ErrImpl.prototype.mapErr = function (mapper) {
        return new Err(mapper(this.val));
    };
    ErrImpl.prototype.toOption = function () {
        return _option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq;
    };
    ErrImpl.prototype.toString = function () {
        return "Err(" + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
    };
    Object.defineProperty(ErrImpl.prototype, "stack", {
        get: function () {
            return this + "\n" + this._stack;
        },
        enumerable: false,
        configurable: true
    });
    /** An empty Err */
    ErrImpl.EMPTY = new ErrImpl(undefined);
    return ErrImpl;
}());

// This allows Err to be callable - possible because of the es5 compilation target
var Err = ErrImpl;
/**
 * Contains the success value
 */
var OkImpl = /** @class */ (function () {
    function OkImpl(val) {
        if (!(this instanceof OkImpl)) {
            return new OkImpl(val);
        }
        this.ok = true;
        this.err = false;
        this.val = val;
    }
    /**
     * Helper function if you know you have an Ok<T> and T is iterable
     */
    OkImpl.prototype[Symbol.iterator] = function () {
        var obj = Object(this.val);
        return Symbol.iterator in obj
            ? obj[Symbol.iterator]()
            : {
                next: function () {
                    return { done: true, value: undefined };
                },
            };
    };
    /**
     * @see unwrapOr
     * @deprecated in favor of unwrapOr
     */
    OkImpl.prototype.else = function (_val) {
        return this.val;
    };
    OkImpl.prototype.unwrapOr = function (_val) {
        return this.val;
    };
    OkImpl.prototype.expect = function (_msg) {
        return this.val;
    };
    OkImpl.prototype.unwrap = function () {
        return this.val;
    };
    OkImpl.prototype.map = function (mapper) {
        return new Ok(mapper(this.val));
    };
    OkImpl.prototype.andThen = function (mapper) {
        return mapper(this.val);
    };
    OkImpl.prototype.mapErr = function (_mapper) {
        return this;
    };
    OkImpl.prototype.toOption = function () {
        return (0,_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(this.val);
    };
    /**
     * Returns the contained `Ok` value, but never throws.
     * Unlike `unwrap()`, this method doesn't throw and is only callable on an Ok<T>
     *
     * Therefore, it can be used instead of `unwrap()` as a maintainability safeguard
     * that will fail to compile if the error type of the Result is later changed to an error that can actually occur.
     *
     * (this is the `into_ok()` in rust)
     */
    OkImpl.prototype.safeUnwrap = function () {
        return this.val;
    };
    OkImpl.prototype.toString = function () {
        return "Ok(" + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
    };
    OkImpl.EMPTY = new OkImpl(undefined);
    return OkImpl;
}());

// This allows Ok to be callable - possible because of the es5 compilation target
var Ok = OkImpl;
var Result;
(function (Result) {
    /**
     * Parse a set of `Result`s, returning an array of all `Ok` values.
     * Short circuits with the first `Err` found, if any
     */
    function all() {
        var results = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
        }
        var okResult = [];
        for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
            var result = results_1[_a];
            if (result.ok) {
                okResult.push(result.val);
            }
            else {
                return result;
            }
        }
        return new Ok(okResult);
    }
    Result.all = all;
    /**
     * Parse a set of `Result`s, short-circuits when an input value is `Ok`.
     * If no `Ok` is found, returns an `Err` containing the collected error values
     */
    function any() {
        var results = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
        }
        var errResult = [];
        // short-circuits
        for (var _a = 0, results_2 = results; _a < results_2.length; _a++) {
            var result = results_2[_a];
            if (result.ok) {
                return result;
            }
            else {
                errResult.push(result.val);
            }
        }
        // it must be a Err
        return new Err(errResult);
    }
    Result.any = any;
    /**
     * Wrap an operation that may throw an Error (`try-catch` style) into checked exception style
     * @param op The operation function
     */
    function wrap(op) {
        try {
            return new Ok(op());
        }
        catch (e) {
            return new Err(e);
        }
    }
    Result.wrap = wrap;
    /**
     * Wrap an async operation that may throw an Error (`try-catch` style) into checked exception style
     * @param op The operation function
     */
    function wrapAsync(op) {
        try {
            return op()
                .then(function (val) { return new Ok(val); })
                .catch(function (e) { return new Err(e); });
        }
        catch (e) {
            return Promise.resolve(new Err(e));
        }
    }
    Result.wrapAsync = wrapAsync;
    function isResult(val) {
        return val instanceof Err || val instanceof Ok;
    }
    Result.isResult = isResult;
})(Result || (Result = {}));
//# sourceMappingURL=result.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 3617) return "js/npm.react-router.js";
/******/ 			if (chunkId === 4162) return "js/npm.history.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","313":"npm.ef-core","405":"npm.react-feather","551":"npm.graphql","686":"npm-ns.metaplex-foundation.mpl-token-metadata","708":"npm.socket.io-client","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1183":"npm-ns.solana.spl-token-registry","1246":"npm.eth-rpc-errors","1305":"npm-ns.metamask.inpage-provider","1432":"npm-ns.metaplex.js","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","2245":"npm.react-highlight-words","2261":"npm.wyvern-js","2299":"npm.tweetnacl","2598":"npm.react-hook-form","2735":"npm-ns.solana.web3.js","2908":"npm-ns.dimensiondev.stego-js","2939":"npm-ns.uniswap.v3-sdk","2943":"npm.bip39","3375":"npm-ns.ethersproject.abstract-signer","3850":"npm.arweave","4049":"npm.qrcode-generator","4072":"npm.d3-scale","4428":"npm-ns.uniswap.v2-sdk","4477":"npm.gun","4520":"npm-ns.metaplex-foundation.mpl-core","4554":"Plugin/Poll","4557":"npm.superstruct","5049":"Gun","5132":"npm.rss3-next","5229":"npm.cross-fetch","5258":"MaskWallet","5553":"npm.fortmatic","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","5687":"npm-ns.solana.buffer-layout","5815":"npm-ns.blocto.protobuf","5891":"npm-ns.walletconnect.core","6230":"npm.zod","6316":"npm-ns.msgpack.msgpack","6813":"npm-ns.portto.sdk","6912":"npm.react-draggable","6982":"npm-ns.improbable-eng.grpc-web","7015":"npm.d3-transition","7070":"npm.regenerator-runtime","7141":"npm.json-rpc-engine","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","7913":"npm.lodash","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","8936":"npm-ns.pedrouid.iso-crypto","9223":"npm-ns.metaplex-foundation.mpl-auction","9239":"npm-ns.blocto.fcl","9259":"npm.html-to-image","9278":"npm.axios","9447":"npm.engine.io-parser","9566":"npm.rpc-websockets","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { if (typeof browser.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { if (typeof chrome.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var __send__ = (msg) => {
/******/ 			if (isBrowser) return runtime.runtime.sendMessage(msg)
/******/ 			return new Promise(r => runtime.runtime.sendMessage(msg, r))
/******/ 		}
/******/ 		var classicLoader = (url, done, chunkId) => {
/******/ 			__send__({ type: 'WTW_INJECT', file: url }).then(done, (e) => done(Object.assign(e, { type: 'missing' })))
/******/ 		}
/******/ 		var scriptLoader = (url, done, chunkId) => {
/******/ 			var script = document.createElement('script')
/******/ 			script.src = url
/******/ 			script.onload = done
/******/ 			script.onerror = done
/******/ 			document.body.appendChild(script)
/******/ 		}
/******/ 		var workerLoader = (url, done, chunkId) => {
/******/ 			try { importScripts(url); done() } catch (e) { done(e) }
/******/ 		}
/******/ 		var isWorker = typeof importScripts === 'function'
/******/ 		if (location.protocol.includes('-extension:')) __webpack_require__.l = isWorker ? workerLoader : scriptLoader
/******/ 		else if (!isWorker) __webpack_require__.l = classicLoader
/******/ 		else { throw new TypeError('Unable to determinate the chunk loader: content script + Worker') }
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 9966;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("webpack", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { if (typeof browser.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { if (typeof chrome.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var path = "/"
/******/ 		__webpack_require__.p = typeof importScripts === 'function' ? path : runtime.runtime.getURL(path);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			9966: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [5638,2698,7871,9759,3294,8136,2486,3147,187,5737,3883,3693,4544,8019,8712,9227,2752,1440,2162,3832,71,8000,3638,8393,12,5105,6565,4570,102,8145,5313,1555,9141,4586,433,9697,3758,2619,5838,3142,3846,8129,5951,7849,7512,5178,9744,444,6160,2222,9197,4960,253,572,8547,2088,3981,1696,516,2974,7822,159,7856,6067,234,9737,79,4590,2891,5784,9855,4029,3619,8091,6671,7944,6609,6526,4028,7556,9306,6400], () => (__webpack_require__(94138)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,7871,9759,3294,8136,2486,3147,187,5737,3883,3693,4544,8019,8712,9227,2752,1440,2162,3832,71,8000,3638,8393,12,5105,6565,4570,102,8145,5313,1555,9141,4586,433,9697,3758,2619,5838,3142,3846,8129,5951,7849,7512,5178,9744,444,6160,2222,9197,4960,253,572,8547,2088,3981,1696,516,2974,7822,159,7856,6067,234,9737,79,4590,2891,5784,9855,4029,3619,8091,6671,7944,6609,6526,4028,7556,9306,6400], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;