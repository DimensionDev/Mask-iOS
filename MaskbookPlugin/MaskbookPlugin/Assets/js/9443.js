<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/9443.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9443],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1367],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/1367.js

/***/ 67431:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React vundefined
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(52458);var f=__webpack_require__(34539),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:n.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 73186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ MaskUIRootWithinShadow)
/* harmony export */ });
/* unused harmony export MaskUIRoot */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42878);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80050);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93002);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44713);
/* harmony import */ var _web3_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1177);
/* harmony import */ var _extension_background_script_Jobs_PrintBuildFlags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75517);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34539);











function MaskUIRootWithinShadow(JSX) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_8__.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .Web3Provider */ .Qgv, {
            value: _web3_context__WEBPACK_IMPORTED_MODULE_6__/* .Web3Context */ .S,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_9__/* .I18nextProvider */ .a, {
                i18n: _utils_i18n_next__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundaryBuildInfoContext.Provider, {
                    value: _extension_background_script_Jobs_PrintBuildFlags__WEBPACK_IMPORTED_MODULE_7__/* .buildInfoMarkdown */ .i,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundary, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .SnackbarProvider */ .wT, {
                            maxSnack: 30,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right'
                            },
                            children: JSX
                        })
                    })
                })
            })
        })
    }));
}
/** Use this if the root is rendered the whole page (instead of content script case) */ function MaskUIRoot(JSX) {
    return MaskUIRootWithinShadow(/*#__PURE__*/ _jsx(StyledEngineProvider, {
        injectFirst: true,
        children: /*#__PURE__*/ _jsxs(ThemeProvider, {
            theme: useClassicMaskTheme(),
            children: [
                /*#__PURE__*/ _jsx(CssBaseline, {
                }),
                JSX
            ]
        })
    }));
}


/***/ }),

/***/ 33450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);



/***/ }),

/***/ 75517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ buildInfoMarkdown)
/* harmony export */ });
var ref, ref1, ref2, ref3, ref4, ref5, ref6;
console.log('Build info', {
    NODE_ENV: "production",
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/9443.js
    VERSION: "v1.29.12-905-gc5a5cecec",
    TAG_NAME: "v1.36.0",
    COMMIT_HASH: "c5a5cecec",
    COMMIT_DATE: "2021-08-31T02:49:35.000Z",
    BUILD_DATE: "2021-08-31T02:52:53.915Z",
=======
    VERSION: "v1.29.12-934-g3c26b8026",
    TAG_NAME: "v1.36.0",
    COMMIT_HASH: "3c26b8026",
    COMMIT_DATE: "2021-09-03T05:33:25.000Z",
    BUILD_DATE: "2021-09-03T05:37:26.140Z",
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/1367.js
    REMOTE_URL: "https://github.com/DimensionDev/Maskbook",
    BRANCH_NAME: "develop",
    DIRTY: false,
    TAG_DIRTY: true
});
var ref7;
const buildInfoMarkdown = `## Build info
- Version: ${(ref7 = (ref = globalThis.browser) === null || ref === void 0 ? void 0 : (ref1 = ref.runtime) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.getManifest) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.call(ref1)) === null || ref3 === void 0 ? void 0 : ref3.version) !== null && ref7 !== void 0 ? ref7 : (ref4 = "v1.36.0") === null || ref4 === void 0 ? void 0 : ref4.slice(1)}
- NODE_ENV: ${"production"}
- target: ${"safari"}
- build: ${"stable"}
- architecture: ${"app"}
- firefoxVariant: ${false}
- resolution: ${"mobile"}
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/9443.js
- BUILD_DATE: ${"2021-08-31T02:52:53.915Z"}
- VERSION: ${"v1.29.12-905-gc5a5cecec"}

## Git (${ true ? '*' : 0}):

${"c5a5cecec"} (${"develop"}) on tag "${"v1.36.0"}"
=======
- BUILD_DATE: ${"2021-09-03T05:37:26.140Z"}
- VERSION: ${"v1.29.12-934-g3c26b8026"}

## Git (${ true ? '*' : 0}):

${"3c26b8026"} (${"develop"}) on tag "${"v1.36.0"}"
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/1367.js
${((ref6 = (ref5 = "https://github.com/DimensionDev/Maskbook") === null || ref5 === void 0 ? void 0 : ref5.toLowerCase()) === null || ref6 === void 0 ? void 0 : ref6.includes('DimensionDev')) ? '' : "https://github.com/DimensionDev/Maskbook"}`;


/***/ }),

/***/ 6744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gn": () => (/* binding */ USDC),
/* harmony export */   "AA": () => (/* binding */ USDT),
/* harmony export */   "lz": () => (/* binding */ BUSD),
/* harmony export */   "TP": () => (/* binding */ COMP),
/* harmony export */   "Ti": () => (/* binding */ MKR),
/* harmony export */   "uz": () => (/* binding */ MSKA),
/* harmony export */   "mW": () => (/* binding */ MSKB),
/* harmony export */   "Xw": () => (/* binding */ MSKC),
/* harmony export */   "h1": () => (/* binding */ DAI),
/* harmony export */   "s5": () => (/* binding */ AMPL),
/* harmony export */   "bi": () => (/* binding */ UST),
/* harmony export */   "c0": () => (/* binding */ ETHER),
/* harmony export */   "xZ": () => (/* binding */ QUICK),
/* harmony export */   "ML": () => (/* binding */ WBTC),
/* harmony export */   "uj": () => (/* binding */ RUNE),
/* harmony export */   "nB": () => (/* binding */ BTCB),
/* harmony export */   "J6": () => (/* binding */ maUSDC),
/* harmony export */   "lK": () => (/* binding */ NFTX),
/* harmony export */   "_S": () => (/* binding */ STETH),
/* harmony export */   "FX": () => (/* binding */ WNATIVE),
/* harmony export */   "HL": () => (/* binding */ WNATIVE_ONLY),
/* harmony export */   "PM": () => (/* binding */ BIPS_BASE),
/* harmony export */   "IS": () => (/* binding */ ONE_BIPS),
/* harmony export */   "Bq": () => (/* binding */ SLIPPAGE_MIN),
/* harmony export */   "Nd": () => (/* binding */ SLIPPAGE_DEFAULT),
/* harmony export */   "Q9": () => (/* binding */ SLIPPAGE_MAX),
/* harmony export */   "ag": () => (/* binding */ DEFAULT_TRANSACTION_DEADLINE),
/* harmony export */   "rV": () => (/* binding */ L2_TRANSACTION_DEADLINE),
/* harmony export */   "J2": () => (/* binding */ PRICE_IMPACT_LOW),
/* harmony export */   "wh": () => (/* binding */ PRICE_IMPACT_MEDIUM),
/* harmony export */   "Wg": () => (/* binding */ PRICE_IMPACT_HIGH),
/* harmony export */   "EV": () => (/* binding */ PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN),
/* harmony export */   "lA": () => (/* binding */ PRICE_IMPACT_NON_EXPERT_BLOCKED),
/* harmony export */   "rI": () => (/* binding */ MINIMUM_AMOUNT)
/* harmony export */ });
/* unused harmony exports HUSD, MSKD, MSKE, OKB, EASY, eUSDC, eUSDT, eDAI, sUSD, UNITOKEN, TT01, TT02, IGG, OM, SUSHI, YAM, YFI, CAKE */
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6615);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);


const USDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('USDC_ADDRESS', 'USD Coin', 'USDC', 6);
const USDT = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('USDT_ADDRESS', 'Tether USD', 'USDT', 6);
const HUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('HUSD_ADDRESS', 'Huobi USD', 'HUSD', 6);
const BUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('BUSD_ADDRESS', 'Huobi USD', 'BUSD', 6);
const COMP = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('COMP_ADDRESS', 'Compound', 'COMP', 18);
const MKR = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MKR_ADDRESS', 'Maker', 'MKR', 18);
const MSKA = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKA_ADDRESS', 'Mask A', 'MSKA', 18);
const MSKB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKB_ADDRESS', 'Mask B', 'MSKB', 18);
const MSKC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKC_ADDRESS', 'Mask C', 'MSKC', 18);
const MSKD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKD_ADDRESS', 'Mask D', 'MSKD', 18);
const MSKE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKE_ADDRESS', 'Mask E', 'MSKE', 18);
const DAI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('DAI_ADDRESS', 'Dai Stablecoin', 'DAI', 18);
const AMPL = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('AMPL_ADDRESS', 'Ampleforth', 'AMPL', 18);
const OKB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('OKB_ADDRESS', 'Ampleforth', 'OKB', 18);
const UST = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('UST_ADDRESS', 'Wrapped UST Token', 'UST', 18);
const EASY = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('EASY_ADDRESS', 'EASY', 'EASY', 18);
const eUSDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eUSDC_ADDRESS', 'Easy USDC', 'eUSDC', 18);
const eUSDT = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eUSDT_ADDRESS', 'Easy USDT', 'eUSDT', 18);
const eDAI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eDAI_ADDRESS', 'Easy DAI', 'eDAI', 18);
const sUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('sUSD_ADDRESS', 'Synth sUSD', 'sUSD', 18);
const UNITOKEN = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('UNITOKEN_ADDRESS', 'Uniswap', 'UNI', 18);
const TT01 = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('TT01_ADDRESS', 'Test Token 01', 'TT01', 18);
const TT02 = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('TT02_ADDRESS', 'Test Token 02', 'TT02', 18);
const ETHER = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('ETHER_ADDRESS', 'Ether', 'ETH', 18);
const QUICK = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('QUICK_ADDRESS', 'Quickswap', 'QUICK', 18);
const WBTC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('WBTC_ADDRESS', 'Wrapped Bitcoin', 'WBTC', 18);
const IGG = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('IGG_ADDRESS', 'IG Gold', 'IGG', 18);
const OM = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('OM_ADDRESS', 'OM Token', 'OM', 18);
const SUSHI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('SUSHI_ADDRESS', 'SushiToken', 'SUSHI', 18);
const YAM = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('YAM_ADDRESS', 'YAM', 'YAM', 18);
const RUNE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('RUNE_ADDRESS', 'RUNE.ETH', 'RUNE', 18);
const YFI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('YFI_ADDRESS', 'Yearn', 'YFI', 18);
const BTCB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('BTCB_ADDRESS', 'Binance BTC', 'BTCB', 18);
const CAKE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('CAKE_ADDRESS', 'PancakeSwap Token', 'CAKE', 18);
const maUSDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('maUSDC_ADDRESS', 'Matic Aave interest bearing USDC', 'maUSDC', 6);
const NFTX = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('NFTX_ADDRESS', 'NFTX', 'NFTX', 18);
const STETH = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('stETH_ADDRESS', 'stakedETH', 'stETH', 18);
var _name, _symbol;
const WNATIVE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('WNATIVE_ADDRESS', (chainId)=>{
    var ref;
    return `Wrapped ${(_name = (ref = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .getChainDetailed */ .$Gt)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.name) !== null && _name !== void 0 ? _name : 'Ether'}`;
}, (chainId)=>{
    var ref;
    return `W${(_symbol = (ref = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .getChainDetailed */ .$Gt)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.symbol) !== null && _symbol !== void 0 ? _symbol : 'ETH'}`;
}, 18);
const WNATIVE_ONLY = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Ropsten */ .a_e.Ropsten]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Ropsten */ .a_e.Ropsten]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Kovan */ .a_e.Kovan]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Kovan */ .a_e.Kovan]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Gorli */ .a_e.Gorli]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Gorli */ .a_e.Gorli]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSCT */ .a_e.BSCT]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSCT */ .a_e.BSCT]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mumbai */ .a_e.Mumbai]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mumbai */ .a_e.Mumbai]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum */ .a_e.Arbitrum]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum */ .a_e.Arbitrum]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum_Rinkeby */ .a_e.Arbitrum_Rinkeby]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum_Rinkeby */ .a_e.Arbitrum_Rinkeby]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.xDai */ .a_e.xDai]: [
        WNATIVE[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.xDai */ .a_e.xDai]
    ]
};
const BIPS_BASE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(10000);
const ONE_BIPS = _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ONE.dividedBy */ .ryP.dividedBy(BIPS_BASE);
const SLIPPAGE_MIN = 10 // bips
;
const SLIPPAGE_DEFAULT = 50 // bips
;
const SLIPPAGE_MAX = 1000 // bips
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

/***/ 77212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZZ": () => (/* binding */ stateCreator),
/* harmony export */   "MJ": () => (/* binding */ managedStateCreator),
/* harmony export */   "Du": () => (/* binding */ creator)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);


// By this pattern, I hope we can enforce all providers to use this pattern to init.
// const friendsRef = stateCreator.friendsRef()
// return { friendsRef }
// Therefore they may aware they have the ability to fill in the ref.
// If I design it like this:
// const state = stateCreator()
// return state
// People might not aware they need to fill the new state.
const stateCreator = {
    friends: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef(new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.IdentifierMap(new Map(), _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier))
    ,
    profiles: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef([])
};
function managedStateCreator() {
    return {
    };
}
const creator = {
    IdentityResolveProviderLastRecognized: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef({
            identifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier.unknown
        })
    ,
    PostProviderStore: ()=>new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableWeakMap()
};


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/9443.js
/***/ 98433:
=======
/***/ 56839:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/1367.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ot": () => (/* binding */ definedSocialNetworkWorkersResolved),
/* harmony export */   "C8": () => (/* binding */ getNetworkWorker),
/* harmony export */   "Bu": () => (/* binding */ getNetworkWorkerUninitialized)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/9443.js
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43670);
=======
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45513);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/1367.js


const definedSocialNetworkWorkersResolved = new Set();
async function activateNetworkWorker(id) {
    if (!(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground)) {
        throw new TypeError();
    }
    for (const each of definedSocialNetworkWorkersResolved){
        if (each.networkIdentifier === id) return each;
    }
    for (const each1 of ___WEBPACK_IMPORTED_MODULE_0__.definedSocialNetworkWorkers){
        if (each1.networkIdentifier === id) {
            const worker = (await each1.load()).default;
            definedSocialNetworkWorkersResolved.add(worker);
            return worker;
        }
    }
    throw new Error('Worker not found');
}
async function getNetworkWorker(network) {
    if (typeof network === 'string') return activateNetworkWorker(network);
    return getNetworkWorker(network.network);
}
function getNetworkWorkerUninitialized(network) {
    if (typeof network === 'string') return [
        ...___WEBPACK_IMPORTED_MODULE_0__.definedSocialNetworkWorkers
    ].find((x)=>x.networkIdentifier === network
    );
    return getNetworkWorkerUninitialized(network.network);
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/9443.js
/***/ 73405:
=======
/***/ 98332:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/1367.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* unused harmony export mapContactAvatarColor */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57703);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7931);



const mapContactAvatarColor = (string, theme)=>{
    const hash = [
        ...string
    ].reduce((prev, current)=>{
        // eslint-disable-next-line no-bitwise
        const next = current.charCodeAt(0) + (prev << 5) - prev;
        // eslint-disable-next-line no-bitwise
        return next & next;
    }, 0);
    return `hsl(${hash % 360}, ${theme === 'dark' ? `78%` : '98%'}, ${theme === 'dark' ? `50%` : '70%'})`;
};
function Avatar({ person , ...props }) {
    const { avatar , nickname , identifier  } = person;
    const name = nickname || identifier.userId || '';
    const [first, last] = name.split(' ');
    const theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)().palette.mode;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
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

/***/ 51785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98332);



/***/ }),

/***/ 44531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export createNormalReactRoot */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24204);
/* harmony import */ var _components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33450);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53688);




function createNormalReactRoot(jsx, container) {
    var ref;
    if (!container) container = (ref = document.getElementById('root')) !== null && ref !== void 0 ? ref : void 0;
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    if (false) {}
    return ReactDOM.createRoot(container).render(/*#__PURE__*/ _jsx(NoEffectUsePortalShadowRootContext.Provider, {
        value: true,
        children: /*#__PURE__*/ _jsx(ErrorBoundary, {
            children: jsx
        })
    }));
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/9443.js
/***/ 61046:
=======
/***/ 59935:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/1367.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ memoizePromise)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The promise version of lodash-es/memoize
 * @param f An async function
 * @param resolver If the function has 1 param, it can be undefined
 * as `x => x`. If it has more than 1 param, you must specify a function
 * to map the param the memoize key.
 */ function memoizePromise(f, resolver) {
    if (resolver === undefined) resolver = (x)=>x
    ;
    const memorizedFunction = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.memoize)(async function(...args) {
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


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/9443.js
/***/ 24910:
=======
/***/ 83280:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/1367.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PN": () => (/* binding */ decompressBackupFile)
/* harmony export */ });
/* unused harmony exports sanitizeBackupFile, compressBackupFile */
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);
/* harmony import */ var _SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58222);


function sanitizeBackupFile(backup) {
    return {
        ...backup,
        grantedHostPermissions: backup.grantedHostPermissions.filter((url)=>/^(http|<all_urls>)/.test(url)
        )
    };
}
function compressBackupFile(file, { profileIdentifier , personaIdentifier  } = {
}) {
    var ref, ref1, ref2, ref3;
    const { grantedHostPermissions , profiles , personas  } = file;
    var ref4;
    const personaIdentifier_ = (ref4 = personaIdentifier === null || personaIdentifier === void 0 ? void 0 : personaIdentifier.toText()) !== null && ref4 !== void 0 ? ref4 : (ref = profiles.find((x)=>{
        return x.identifier === (profileIdentifier === null || profileIdentifier === void 0 ? void 0 : profileIdentifier.toText());
    })) === null || ref === void 0 ? void 0 : ref.linkedPersona;
    const persona = personas.find((x)=>x.identifier === personaIdentifier_
    );
    if (!persona || !persona.privateKey) throw new Error('Target persona not found');
    const linkedProfile = (ref1 = persona.linkedProfiles[0]) === null || ref1 === void 0 ? void 0 : ref1[0];
    const profileIdentifier_ = (profileIdentifier !== null && profileIdentifier !== void 0 ? profileIdentifier : linkedProfile) ? Identifier.fromString(linkedProfile, ProfileIdentifier).unwrap() : undefined;
    const { localKey , nickname , privateKey  } = persona;
    return [
        '1',
        profileIdentifier_ === null || profileIdentifier_ === void 0 ? void 0 : profileIdentifier_.network,
        profileIdentifier_ === null || profileIdentifier_ === void 0 ? void 0 : profileIdentifier_.userId,
        nickname,
        (localKey === null || localKey === void 0 ? void 0 : localKey.k) || ((ref2 = profiles.filter((x)=>{
            return x.identifier === (profileIdentifier_ === null || profileIdentifier_ === void 0 ? void 0 : profileIdentifier_.toText());
        }).filter((x)=>x.localKey
        )[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.localKey) === null || ref3 === void 0 ? void 0 : ref3.k) || '',
        compressSecp256k1Key(privateKey, 'private'),
        grantedHostPermissions.join(';'), 
    ].join('🤔');
}
function decompressBackupFile(short) {
    let compressed;
    try {
        compressed = JSON.parse(short);
        if (typeof compressed === 'object') return sanitizeBackupFile(compressed);
    } catch  {
        if (!short.includes('🤔')) throw new Error('This backup is not a compressed string');
        compressed = short;
    }
    const [version, network, userID, nickname, localKey, privateKey, grantedHostPermissions] = compressed.split('🤔');
    if (version !== '1') throw new Error(`QR Code cannot be shared between different version of Mask`);
    const localKeyJWK = {
        alg: 'A256GCM',
        ext: true,
        k: localKey,
        key_ops: [
            'encrypt',
            'decrypt'
        ],
        kty: 'oct'
    };
    const publicJWK = (0,_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__/* .decompressSecp256k1Key */ .q)(privateKey, 'public');
    const privateJWK = (0,_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__/* .decompressSecp256k1Key */ .q)(privateKey, 'private');
    const profileID = network && userID ? new _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(network, userID) : undefined;
    const ECID = (0,_database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(publicJWK);
    return sanitizeBackupFile({
        _meta_: {
            createdAt: 0,
            maskbookVersion: browser.runtime.getManifest().version,
            version: 2,
            type: 'maskbook-backup'
        },
        grantedHostPermissions: grantedHostPermissions.split(';').filter(Boolean),
        posts: [],
        wallets: [],
        userGroups: [],
        personas: [
            {
                createdAt: 0,
                updatedAt: 0,
                privateKey: privateJWK,
                publicKey: publicJWK,
                identifier: ECID.toText(),
                linkedProfiles: profileID ? [
                    [
                        profileID.toText(),
                        {
                            connectionConfirmState: 'confirmed'
                        }
                    ]
                ] : [],
                nickname,
                localKey: localKeyJWK
            }, 
        ],
        profiles: profileID ? [
            {
                createdAt: 0,
                identifier: profileID.toText(),
                updatedAt: 0,
                linkedPersona: ECID.toText(),
                nickname: nickname,
                localKey: localKeyJWK
            }, 
        ] : []
    });
}


/***/ }),

/***/ 58222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ compressSecp256k1Key),
/* harmony export */   "q": () => (/* binding */ decompressSecp256k1Key)
/* harmony export */ });
/* harmony import */ var tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23033);
/* harmony import */ var tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34987);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pvtsutils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28504);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15313);




/**
 * Compress x & y into a single x
 */ function compressSecp256k1Point(x, y) {
    const xb = pvtsutils__WEBPACK_IMPORTED_MODULE_1__.Convert.FromBase64Url(x);
    const yb = pvtsutils__WEBPACK_IMPORTED_MODULE_1__.Convert.FromBase64Url(y);
    const point = buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from((0,pvtsutils__WEBPACK_IMPORTED_MODULE_1__.combine)(new Uint8Array([
        4
    ]), xb, yb));
    if (tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().isPoint(point)) {
        return tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().pointCompress(point, true);
    } else {
        throw new TypeError('Not a point on secp256k1!');
    }
}
/**
 * Decompress x into x & y
 */ function decompressSecp256k1Point(point) {
    const p = buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from(point);
    if (!tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().isPoint(p)) throw new TypeError('Not a point on secp256k1!');
    const uncompressed = tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().isPointCompressed(p) ? tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().pointCompress(p, false) : p;
    const len = (uncompressed.length - 1) / 2;
    const x = uncompressed.slice(1, len + 1);
    const y = uncompressed.slice(len + 1);
    return {
        x: pvtsutils__WEBPACK_IMPORTED_MODULE_1__.Convert.ToBase64Url(x),
        y: pvtsutils__WEBPACK_IMPORTED_MODULE_1__.Convert.ToBase64Url(y)
    };
}
function compressSecp256k1Key(key, type) {
    if (type === 'private' && !key.d) throw new Error('Private key does not contain secret');
    const arr = compressSecp256k1Point(key.x, key.y);
    return (0,_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_2__/* .encodeArrayBuffer */ .ll)(arr) + (type === 'private' ? '🙈' + key.d : '');
}
function decompressSecp256k1Key(compressed, type) {
    const [compressedPublic, privateKey] = compressed.split('🙈');
    if (type === 'private' && privateKey.length < 1) throw new Error('Private key does not contain secret');
    const arr = (0,_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_2__/* .decodeArrayBuffer */ .xe)(compressedPublic);
    const key = decompressSecp256k1Point(arr);
    const jwk = {
        crv: 'K-256',
        ext: true,
        x: key.x,
        y: key.y,
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC',
        d: type === 'private' ? privateKey : undefined
    };
    return jwk;
}


/***/ }),

/***/ 28504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YT": () => (/* reexport safe */ _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__.YT),
/* harmony export */   "rj": () => (/* reexport safe */ _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__.rj),
/* harmony export */   "ll": () => (/* reexport safe */ _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__.ll),
/* harmony export */   "xe": () => (/* reexport safe */ _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__.xe)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);



/***/ }),

/***/ 1177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Web3Context)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35313);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93975);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37186);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47413);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25830);







const Web3Provider = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__/* .createExternalProvider */ .z)();
const Web3Context = {
    provider: {
        getCurrentValue: ()=>Web3Provider
        ,
        subscribe: ()=>lodash_es__WEBPACK_IMPORTED_MODULE_0__.noop
    },
    allowTestnet: {
        getCurrentValue: ()=>_utils__WEBPACK_IMPORTED_MODULE_4__/* .Flags.wallet_allow_testnet */ .vU.wallet_allow_testnet
        ,
        subscribe: ()=>lodash_es__WEBPACK_IMPORTED_MODULE_0__.noop
    },
    chainId: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentChainIdSettings */ .wU),
    account: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentAccountSettings */ .aK),
    balance: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentBalanceSettings */ .NH),
    gasPrice: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentGasPriceSettings */ .rP),
    blockNumber: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentBlockNumberSettings */ .gi),
    nonce: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentNonceSettings */ .U8),
    etherPrice: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentEtherPriceSettings */ .cK),
    wallets: createSubscriptionFromAsync(getWallets, [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.walletsUpdated.on */ .R.events.walletsUpdated.on),
    providerType: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings */ .t1),
    networkType: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentNetworkSettings */ .fX),
    erc20Tokens: createSubscriptionFromAsync(getERC20Tokens, [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.erc20TokensUpdated.on */ .R.events.erc20TokensUpdated.on),
    erc20TokensCount: createSubscriptionFromAsync(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getERC20TokensCount */ .V.getERC20TokensCount, 0, _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.erc20TokensUpdated.on */ .R.events.erc20TokensUpdated.on),
    getERC20TokensPaged,
    portfolioProvider: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentPortfolioDataProviderSettings */ .a4),
    getAssetsList: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getAssetsList */ .V.getAssetsList,
    getAssetsListNFT: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getAssetsListNFT */ .V.getAssetsListNFT,
    getERC721TokensPaged,
    fetchERC20TokensFromTokenLists: _extension_service__WEBPACK_IMPORTED_MODULE_6__/* .default.Ethereum.fetchERC20TokensFromTokenLists */ .ZP.Ethereum.fetchERC20TokensFromTokenLists,
    getTransactionList: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getTransactionList */ .V.getTransactionList,
    createMnemonicWords: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.createMnemonicWords */ .V.createMnemonicWords
};
async function getWallets() {
    const raw = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getWallets */ .V.getWallets();
    return raw.map((record)=>({
            ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.pick)(record, [
                'address',
                'name',
                'erc1155_token_whitelist',
                'erc1155_token_blacklist',
                'erc20_token_whitelist',
                'erc20_token_blacklist',
                'erc721_token_whitelist',
                'erc721_token_blacklist', 
            ]),
            hasPrivateKey: Boolean(record._private_key_ || record.mnemonic.length)
        })
    );
}
async function getERC20Tokens() {
    const raw = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getERC20Tokens */ .V.getERC20Tokens();
    return raw.map((x)=>({
            type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Drc.ERC20,
            ...x
        })
    );
}
async function getERC20TokensPaged(index, count, query) {
    const raw = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getERC20TokensPaged */ .V.getERC20TokensPaged(index, count, query);
    return raw.map((x)=>({
            type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Drc.ERC20,
            ...x
        })
    );
}
async function getERC721TokensPaged(index, count, query) {
    return _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getERC721TokensPaged */ .V.getERC721TokensPaged(index, count, query);
}
// utils
function createSubscriptionFromSettings(settings) {
    const { trigger , subscribe  } = getEventTarget();
    settings.readyPromise.finally(trigger);
    return {
        getCurrentValue: ()=>settings.value
        ,
        subscribe: (f)=>{
            const a = subscribe(f);
            const b = settings.addListener(()=>trigger()
            );
            return ()=>void [
                    a(),
                    b()
                ]
            ;
        }
    };
}
function createSubscriptionFromAsync(f, defaultValue, onChange) {
    let state = defaultValue;
    const { subscribe , trigger  } = getEventTarget();
    f().then((v)=>state = v
    ).finally(trigger);
    return {
        getCurrentValue: ()=>state
        ,
        subscribe: (sub)=>{
            const a = subscribe(sub);
            const b = onChange(async ()=>{
                state = await f();
                sub();
            });
            return ()=>void [
                    a(),
                    b()
                ]
            ;
        }
    };
}
function getEventTarget() {
    const event = new EventTarget();
    const EVENT = 'event';
    let timer;
    function trigger() {
        clearTimeout(timer);
        // delay to update state to ensure that all settings to be synced globally
        timer = setTimeout(()=>event.dispatchEvent(new Event(EVENT))
        , 600);
    }
    function subscribe(f) {
        event.addEventListener(EVENT, f);
        return ()=>event.removeEventListener(EVENT, f)
        ;
    }
    return {
        trigger,
        subscribe
    };
}


/***/ }),

/***/ 25906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ serialize),
/* harmony export */   "G": () => (/* binding */ serializer)
/* harmony export */ });
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72421);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12080);
/* harmony import */ var typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76374);
/* harmony import */ var typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4357);
/* harmony import */ var typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19004);
/* harmony import */ var typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71967);
/* harmony import */ var typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82689);
/* harmony import */ var typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8__);
/// <reference path="./typeson.d.ts" />



// @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore

/** @internal */ function serialize(name, ser, des) {
    return (constructor)=>{
        Object.defineProperty(constructor, 'name', {
            configurable: true,
            enumerable: false,
            writable: false,
            value: name
        });
        typeson.register({
            [name]: ser && des ? [
                (x)=>x instanceof constructor
                ,
                ser,
                des
            ] : [
                (x)=>x instanceof constructor
                ,
                (x)=>{
                    const y = Object.assign({
                    }, x);
                    Object.getOwnPropertySymbols(y).forEach((x1)=>Reflect.deleteProperty(y, x1)
                    );
                    return typeson.encapsulate(y);
                },
                (x)=>{
                    const y = typeson.revive(x);
                    Object.setPrototypeOf(y, constructor.prototype);
                    return y;
                }, 
            ]
        });
        return constructor;
    };
}
const typeson = new (typeson__WEBPACK_IMPORTED_MODULE_0___default())({
});
typeson.register((typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3___default()));
typeson.register((typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default()));
typeson.register([
    (typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4___default()),
    (typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5___default()),
    (typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6___default()),
    (typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7___default()),
    (typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default())
]);
serialize('Ok')(ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok);
serialize('Err')(ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG);
serialize('BigNumber')(bignumber_js__WEBPACK_IMPORTED_MODULE_2__.BigNumber);
const serializer = {
    serialization (from) {
        return typeson.encapsulate(from);
    },
    deserialization (to) {
        try {
            return typeson.revive(to);
        } catch (error) {
            console.error(error);
        }
        return {
        };
    }
};


/***/ }),

/***/ 99134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* reexport */ getLocalImplementation),
  "k": () => (/* reexport */ getLocalImplementationExotic)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
;// CONCATENATED MODULE: ../shared/src/utils/getLocalImplementation.tsx

// key = channel; value = local implementation
const RPCCache = new WeakMap();
/**
 * This function provides a localImplementation that is HMR ready.
 * To update, call this function with the SAME CHANNEL object.
 * It will "clone" all methods that impl returns.
 * @param name The name of the local implementation, used for logging
 * @param impl The implementation. Can be an async function.
 * @param ref The reference object that must be the same if you're updating.
 */ async function getLocalImplementation(name, impl, ref) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    if (!isBackground) return {
    };
    const isUpdate = RPCCache.has(ref);
    const localImpl = RPCCache.get(ref) || {
    };
    RPCCache.set(ref, localImpl);
    const result = await impl();
    for(const key in localImpl){
        if (!Reflect.has(result, key)) {
            delete localImpl[key];
            isUpdate && console.log(`[HMR] ${name}.${key} removed.`);
        } else if (result[key] !== localImpl[key]) {
            isUpdate && console.log(`[HMR] ${name}.${key} updated.`);
        }
    }
    for(const key1 in result){
        if (key1 === 'then') console.error('!!! Do not use "then" as your method name !!!');
        if (!Reflect.has(localImpl, key1)) isUpdate && console.log(`[HMR] ${name}.${key1} added.`);
        Object.defineProperty(localImpl, key1, {
            configurable: true,
            enumerable: true,
            value: result[key1]
        });
    }
    return localImpl;
}
async function getLocalImplementationExotic(name, impl, ref) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    if (!isBackground) return {
    };
    RPCCache.set(ref, await impl());
    return new Proxy({
    }, {
        get (_, key) {
            var ref1;
            if (key === 'then') return;
            // @ts-ignore
            return (ref1 = RPCCache.get(ref)) === null || ref1 === void 0 ? void 0 : ref1[key];
        }
    });
}

;// CONCATENATED MODULE: ../shared/src/utils/index.ts



/***/ }),

/***/ 29168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d_": () => (/* binding */ setupPortalShadowRoot),
/* harmony export */   "XR": () => (/* binding */ NoEffectUsePortalShadowRootContext),
/* harmony export */   "ad": () => (/* binding */ usePortalShadowRoot),
/* harmony export */   "lr": () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   "vg": () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86753);



/**
 * ! Do not export !
 *
 * You SHOULD NOT use this in React directly
 */ let mountingPoint = null;
function setupPortalShadowRoot(init, preventEventPropagationList) {
    if (mountingPoint) return;
    const shadow = document.body.appendChild(document.createElement('div')).attachShadow(init);
    for (const each of preventEventPropagationList){
        shadow.addEventListener(each, (e)=>e.stopPropagation()
        );
    }
    mountingPoint = shadow.appendChild(document.createElement('div'));
}
/** usePortalShadowRoot under this context does not do anything. (And it will return an empty container). */ const NoEffectUsePortalShadowRootContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
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
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NoEffectUsePortalShadowRootContext)).current;
    if (disabled) return renderer(undefined);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [findMountingShadowRef, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
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
    const { container  } = doms;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IsolatedRender, {
        ...doms,
        findMountingShadowRef: findMountingShadowRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                style: {
                    display: 'none'
                },
                ref: (ref)=>findMountingShadowRef !== ref && setRef(ref)
            }),
            renderer(container)
        ]
    }));
}
const IsolatedRender = ({ container , root , style , children , findMountingShadowRef  })=>{
    const update = useUpdate();
    const css = (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentShadowRootStyles */ .I3)(findMountingShadowRef);
    const containerInUse = container.children.length !== 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        container.appendChild = bind(container.appendChild, container, update);
        container.removeChild = bind(container.removeChild, container, update);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!containerInUse) return root.remove();
        const shadow = PortalShadowRoot();
        if (root.parentElement === shadow) return;
        shadow.appendChild(root);
    }, [
        containerInUse,
        root
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (findMountingShadowRef && style.innerHTML !== css) style.innerHTML = css;
    }, [
        style,
        css,
        findMountingShadowRef
    ]);
    return children;
};
function createShadowRootForwardedComponent(Component) {
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    }));
}
function createShadowRootForwardedPopperComponent(Component) {
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                PopperProps: {
                    container
                },
                ...props,
                ref: ref
            })
        );
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
    const [, _update] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return ()=>_update((i)=>i + 1
        )
    ;
}
function useSideEffectRef(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 99528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$c": () => (/* binding */ createNativeToken),
/* harmony export */   "wY": () => (/* binding */ createERC20Token),
/* harmony export */   "ek": () => (/* binding */ createERC721ContractDetailed),
/* harmony export */   "Of": () => (/* binding */ createERC721Token),
/* harmony export */   "vs": () => (/* binding */ createERC20Tokens),
/* harmony export */   "bu": () => (/* binding */ addGasMargin),
/* harmony export */   "mO": () => (/* binding */ decodeOutputString),
/* harmony export */   "UZ": () => (/* binding */ parseStringOrBytes32),
/* harmony export */   "pL": () => (/* binding */ getTokenUSDValue),
/* harmony export */   "I3": () => (/* binding */ makeSortTokenFn),
/* harmony export */   "Si": () => (/* binding */ makeSortAssertFn)
/* harmony export */ });
/* unused harmony exports createERC1155Token, getBalanceValue */
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74950);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11494);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24492);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24402);
/* harmony import */ var _chainDetailed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21440);
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13413);
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29140);








function createNativeToken(chainId) {
    const chainDetailed = (0,_chainDetailed__WEBPACK_IMPORTED_MODULE_5__/* .getChainDetailed */ .$G)(chainId);
    if (!chainDetailed) throw new Error('Unknown chain id.');
    const { NATIVE_TOKEN_ADDRESS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)();
    if (!NATIVE_TOKEN_ADDRESS) throw new Error('Failed to create token.');
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.Native */ .Dr.Native,
        chainId,
        address: NATIVE_TOKEN_ADDRESS,
        ...chainDetailed.nativeCurrency
    };
}
function createERC20Token(chainId, address, decimals, name, symbol) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.ERC20 */ .Dr.ERC20,
        chainId,
        address,
        decimals,
        name,
        symbol
    };
}
function createERC721ContractDetailed(chainId, address, name, symbol, baseURI, iconURL) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.ERC721 */ .Dr.ERC721,
        chainId,
        address,
        name,
        symbol,
        baseURI,
        iconURL
    };
}
function createERC721Token(contractDetailed, info, tokenId) {
    return {
        contractDetailed,
        info,
        tokenId
    };
}
function createERC1155Token(chainId, tokenId, address, name, uri, asset) {
    return {
        type: EthereumTokenType.ERC1155,
        chainId,
        tokenId,
        address,
        name,
        uri,
        asset
    };
}
function createERC20Tokens(key, name, symbol, decimals) {
    const base = {
    };
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .getEnumAsArray */ .Yl)(_types__WEBPACK_IMPORTED_MODULE_4__/* .ChainId */ .a_).reduce((accumulator, { value: chainId  })=>{
        const evaludator = (f)=>typeof f === 'function' ? f(chainId) : f
        ;
        var _key;
        accumulator[chainId] = {
            type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.ERC20 */ .Dr.ERC20,
            chainId,
            address: (_key = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)(chainId)[key]) !== null && _key !== void 0 ? _key : '',
            name: evaludator(name),
            symbol: evaludator(symbol),
            decimals: evaludator(decimals)
        };
        return accumulator;
    }, base);
}
//#endregion
function addGasMargin(value, scale = 3000) {
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(value).multipliedBy(new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(10000).plus(scale)).dividedToIntegerBy(10000);
}
function decodeOutputString(web3, abis, output) {
    if (abis.length === 1) return web3.eth.abi.decodeParameter(abis[0], output);
    if (abis.length > 1) return web3.eth.abi.decodeParameters(abis, output);
    return;
}
// parse a name or symbol from a token response
const BYTES32_REGEX = /^0x[\dA-Fa-f]{64}$/;
function parseStringOrBytes32(str, bytes32, defaultValue) {
    return str && str.length > 0 ? str : bytes32 && BYTES32_REGEX.test(bytes32) && (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(bytes32)[31] === 0 ? (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toAscii)(bytes32) : defaultValue;
}
//#region asset sort
const getTokenUSDValue = (token)=>token.value ? Number.parseFloat(token.value[_types__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyType.USD */ .V2.USD]) : 0
;
const getBalanceValue = (asset)=>parseFloat((0,_formatter__WEBPACK_IMPORTED_MODULE_6__/* .formatBalance */ .az)(asset.balance, asset.token.decimals))
;
const makeSortTokenFn = (chainId, options = {
})=>{
    const { isMaskBoost =false  } = options;
    const { MASK_ADDRESS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)(chainId);
    return (a, b)=>{
        // The native token goes first
        if (a.type === _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.Native */ .Dr.Native) return -1;
        if (b.type === _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.Native */ .Dr.Native) return 1;
        // The mask token second
        if (isMaskBoost) {
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(a.address, MASK_ADDRESS !== null && MASK_ADDRESS !== void 0 ? MASK_ADDRESS : '')) return -1;
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(b.address, MASK_ADDRESS !== null && MASK_ADDRESS !== void 0 ? MASK_ADDRESS : '')) return 1;
        }
        return 0;
    };
};
const makeSortAssertFn = (chainId, options = {
})=>{
    const { isMaskBoost =false  } = options;
    const { MASK_ADDRESS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)(chainId);
    return (a, b)=>{
        // The tokens with the current chain id goes first
        if (a.chain !== b.chain) {
            if ((0,_chainDetailed__WEBPACK_IMPORTED_MODULE_5__/* .getChainIdFromName */ .np)(a.chain) === chainId) return -1;
            if ((0,_chainDetailed__WEBPACK_IMPORTED_MODULE_5__/* .getChainIdFromName */ .np)(b.chain) === chainId) return 1;
        }
        // native token sort
        const nativeTokenDifference = makeSortTokenFn(chainId, {
            isMaskBoost: false
        })(a.token, b.token);
        if (nativeTokenDifference !== 0) return nativeTokenDifference;
        // Mask token at second if value > 0
        if (isMaskBoost) {
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(a.token.address, MASK_ADDRESS) && getBalanceValue(a) > 0) return -1;
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(b.token.address, MASK_ADDRESS) && getBalanceValue(b) > 0) return 1;
        }
        // Token with high usd value estimation has priority
        const valueDifference = getTokenUSDValue(b) - getTokenUSDValue(a);
        if (valueDifference !== 0) return valueDifference;
        // Token with big balance has priority
        if (getBalanceValue(a) > getBalanceValue(b)) return -1;
        if (getBalanceValue(a) < getBalanceValue(b)) return 1;
        // mask token behind all valuable tokens if value = 0 and balance = 0
        if (isMaskBoost) {
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(a.token.address, MASK_ADDRESS)) return -1;
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(b.token.address, MASK_ADDRESS)) return 1;
        }
        var _name, _name1;
        // Sorted by alphabet
        if (((_name = a.token.name) !== null && _name !== void 0 ? _name : '') > ((_name1 = b.token.name) !== null && _name1 !== void 0 ? _name1 : '')) return 1;
        var _name5, _name6;
        if (((_name5 = a.token.name) !== null && _name5 !== void 0 ? _name5 : '') < ((_name6 = b.token.name) !== null && _name6 !== void 0 ? _name6 : '')) return -1;
        return 0;
    };
} //#endregion
;


/***/ }),

/***/ 23033:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
const BN = __webpack_require__(28891)
const EC = __webpack_require__(75367).ec
const secp256k1 = new EC('secp256k1')
const deterministicGenerateK = __webpack_require__(94738)

const ZERO32 = Buffer.alloc(32, 0)
const EC_GROUP_ORDER = Buffer.from('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 'hex')
const EC_P = Buffer.from('fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f', 'hex')

const n = secp256k1.curve.n
const nDiv2 = n.shrn(1)
const G = secp256k1.curve.g

const THROW_BAD_PRIVATE = 'Expected Private'
const THROW_BAD_POINT = 'Expected Point'
const THROW_BAD_TWEAK = 'Expected Tweak'
const THROW_BAD_HASH = 'Expected Hash'
const THROW_BAD_SIGNATURE = 'Expected Signature'
const THROW_BAD_EXTRA_DATA = 'Expected Extra Data (32 bytes)'

function isScalar (x) {
  return Buffer.isBuffer(x) && x.length === 32
}

function isOrderScalar (x) {
  if (!isScalar(x)) return false
  return x.compare(EC_GROUP_ORDER) < 0 // < G
}

function isPoint (p) {
  if (!Buffer.isBuffer(p)) return false
  if (p.length < 33) return false

  const t = p[0]
  const x = p.slice(1, 33)
  if (x.compare(ZERO32) === 0) return false
  if (x.compare(EC_P) >= 0) return false
  if ((t === 0x02 || t === 0x03) && p.length === 33) {
    try { decodeFrom(p) } catch (e) { return false } // TODO: temporary
    return true
  }

  const y = p.slice(33)
  if (y.compare(ZERO32) === 0) return false
  if (y.compare(EC_P) >= 0) return false
  if (t === 0x04 && p.length === 65) return true
  return false
}

function __isPointCompressed (p) {
  return p[0] !== 0x04
}

function isPointCompressed (p) {
  if (!isPoint(p)) return false
  return __isPointCompressed(p)
}

function isPrivate (x) {
  if (!isScalar(x)) return false
  return x.compare(ZERO32) > 0 && // > 0
    x.compare(EC_GROUP_ORDER) < 0 // < G
}

function isSignature (value) {
  const r = value.slice(0, 32)
  const s = value.slice(32, 64)
  return Buffer.isBuffer(value) && value.length === 64 &&
    r.compare(EC_GROUP_ORDER) < 0 &&
    s.compare(EC_GROUP_ORDER) < 0
}

function assumeCompression (value, pubkey) {
  if (value === undefined && pubkey !== undefined) return __isPointCompressed(pubkey)
  if (value === undefined) return true
  return value
}

function fromBuffer (d) { return new BN(d) }
function toBuffer (d) { return d.toArrayLike(Buffer, 'be', 32) }
function decodeFrom (P) { return secp256k1.curve.decodePoint(P) }
function getEncoded (P, compressed) { return Buffer.from(P._encode(compressed)) }

function pointAdd (pA, pB, __compressed) {
  if (!isPoint(pA)) throw new TypeError(THROW_BAD_POINT)
  if (!isPoint(pB)) throw new TypeError(THROW_BAD_POINT)

  const a = decodeFrom(pA)
  const b = decodeFrom(pB)
  const pp = a.add(b)
  if (pp.isInfinity()) return null

  const compressed = assumeCompression(__compressed, pA)
  return getEncoded(pp, compressed)
}

function pointAddScalar (p, tweak, __compressed) {
  if (!isPoint(p)) throw new TypeError(THROW_BAD_POINT)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const compressed = assumeCompression(__compressed, p)
  const pp = decodeFrom(p)
  if (tweak.compare(ZERO32) === 0) return getEncoded(pp, compressed)

  const tt = fromBuffer(tweak)
  const qq = G.mul(tt)
  const uu = pp.add(qq)
  if (uu.isInfinity()) return null

  return getEncoded(uu, compressed)
}

function pointCompress (p, __compressed) {
  if (!isPoint(p)) throw new TypeError(THROW_BAD_POINT)

  const pp = decodeFrom(p)
  if (pp.isInfinity()) throw new TypeError(THROW_BAD_POINT)

  const compressed = assumeCompression(__compressed, p)

  return getEncoded(pp, compressed)
}

function pointFromScalar (d, __compressed) {
  if (!isPrivate(d)) throw new TypeError(THROW_BAD_PRIVATE)

  const dd = fromBuffer(d)
  const pp = G.mul(dd)
  if (pp.isInfinity()) return null

  const compressed = assumeCompression(__compressed)
  return getEncoded(pp, compressed)
}

function pointMultiply (p, tweak, __compressed) {
  if (!isPoint(p)) throw new TypeError(THROW_BAD_POINT)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const compressed = assumeCompression(__compressed, p)
  const pp = decodeFrom(p)
  const tt = fromBuffer(tweak)
  const qq = pp.mul(tt)
  if (qq.isInfinity()) return null

  return getEncoded(qq, compressed)
}

function privateAdd (d, tweak) {
  if (!isPrivate(d)) throw new TypeError(THROW_BAD_PRIVATE)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const dd = fromBuffer(d)
  const tt = fromBuffer(tweak)
  const dt = toBuffer(dd.add(tt).umod(n))
  if (!isPrivate(dt)) return null

  return dt
}

function privateSub (d, tweak) {
  if (!isPrivate(d)) throw new TypeError(THROW_BAD_PRIVATE)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const dd = fromBuffer(d)
  const tt = fromBuffer(tweak)
  const dt = toBuffer(dd.sub(tt).umod(n))
  if (!isPrivate(dt)) return null

  return dt
}

function sign (hash, x) {
  return __sign(hash, x)
}

function signWithEntropy (hash, x, addData) {
  return __sign(hash, x, addData)
}

function __sign (hash, x, addData) {
  if (!isScalar(hash)) throw new TypeError(THROW_BAD_HASH)
  if (!isPrivate(x)) throw new TypeError(THROW_BAD_PRIVATE)
  if (addData !== undefined && !isScalar(addData)) throw new TypeError(THROW_BAD_EXTRA_DATA)

  const d = fromBuffer(x)
  const e = fromBuffer(hash)

  let r, s
  const checkSig = function (k) {
    const kI = fromBuffer(k)
    const Q = G.mul(kI)

    if (Q.isInfinity()) return false

    r = Q.x.umod(n)
    if (r.isZero() === 0) return false

    s = kI
      .invm(n)
      .mul(e.add(d.mul(r)))
      .umod(n)
    if (s.isZero() === 0) return false

    return true
  }

  deterministicGenerateK(hash, x, checkSig, isPrivate, addData)

  // enforce low S values, see bip62: 'low s values in signatures'
  if (s.cmp(nDiv2) > 0) {
    s = n.sub(s)
  }

  const buffer = Buffer.allocUnsafe(64)
  toBuffer(r).copy(buffer, 0)
  toBuffer(s).copy(buffer, 32)
  return buffer
}

function verify (hash, q, signature, strict) {
  if (!isScalar(hash)) throw new TypeError(THROW_BAD_HASH)
  if (!isPoint(q)) throw new TypeError(THROW_BAD_POINT)

  // 1.4.1 Enforce r and s are both integers in the interval [1, n − 1] (1, isSignature enforces '< n - 1')
  if (!isSignature(signature)) throw new TypeError(THROW_BAD_SIGNATURE)

  const Q = decodeFrom(q)
  const r = fromBuffer(signature.slice(0, 32))
  const s = fromBuffer(signature.slice(32, 64))

  if (strict && s.cmp(nDiv2) > 0) {
    return false
  }

  // 1.4.1 Enforce r and s are both integers in the interval [1, n − 1] (2, enforces '> 0')
  if (r.gtn(0) <= 0 /* || r.compareTo(n) >= 0 */) return false
  if (s.gtn(0) <= 0 /* || s.compareTo(n) >= 0 */) return false

  // 1.4.2 H = Hash(M), already done by the user
  // 1.4.3 e = H
  const e = fromBuffer(hash)

  // Compute s^-1
  const sInv = s.invm(n)

  // 1.4.4 Compute u1 = es^−1 mod n
  //               u2 = rs^−1 mod n
  const u1 = e.mul(sInv).umod(n)
  const u2 = r.mul(sInv).umod(n)

  // 1.4.5 Compute R = (xR, yR)
  //               R = u1G + u2Q
  const R = G.mulAdd(u1, Q, u2)

  // 1.4.5 (cont.) Enforce R is not at infinity
  if (R.isInfinity()) return false

  // 1.4.6 Convert the field element R.x to an integer
  const xR = R.x

  // 1.4.7 Set v = xR mod n
  const v = xR.umod(n)

  // 1.4.8 If v = r, output "valid", and if v != r, output "invalid"
  return v.eq(r)
}

module.exports = {
  isPoint,
  isPointCompressed,
  isPrivate,
  pointAdd,
  pointAddScalar,
  pointCompress,
  pointFromScalar,
  pointMultiply,
  privateAdd,
  privateSub,
  sign,
  signWithEntropy,
  verify
}


/***/ })

}]);