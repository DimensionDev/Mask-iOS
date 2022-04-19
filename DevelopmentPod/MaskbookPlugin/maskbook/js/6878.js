"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6878],{

/***/ 17902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ZRX_AFFILIATE_ADDRESS),
/* harmony export */   "q": () => (/* binding */ ZRX_BASE_URL)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65506);

const ZRX_BASE_URL = {
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Ethereum */ .td.Ethereum]: 'https://api.0x.org',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Binance */ .td.Binance]: 'https://bsc.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Polygon */ .td.Polygon]: 'https://polygon.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'https://arbitrum.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.xDai */ .td.xDai]: 'https://xdai.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Avalanche */ .td.Avalanche]: 'https://avalanche.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Celo */ .td.Celo]: 'https://celo.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Fantom */ .td.Fantom]: 'https://fantom.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Aurora */ .td.Aurora]: 'https://aurora.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Boba */ .td.Boba]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Fuse */ .td.Fuse]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Metis */ .td.Metis]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Optimistic */ .td.Optimistic]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Conflux */ .td.Conflux]: ''
};
const ZRX_AFFILIATE_ADDRESS = '0x934B510D4C9103E6a87AEf13b816fb080286D649';


/***/ }),

/***/ 2728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L4": () => (/* binding */ BALANCER_SOR_GAS_PRICE),
/* harmony export */   "qT": () => (/* binding */ BALANCER_SWAP_TYPE),
/* harmony export */   "r2": () => (/* binding */ BALANCER_MAX_NO_POOLS)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

// gasPrice is used by SOR as a factor to determine how many pools to swap against.
// i.e. higher cost means more costly to trade against lots of different pools.
// Can be changed in future using SOR.gasPrice = newPrice
const BALANCER_SOR_GAS_PRICE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())('1e11');
// This determines the max no of pools the SOR will use to swap.
const BALANCER_MAX_NO_POOLS = 4;
var BALANCER_SWAP_TYPE;
(function(BALANCER_SWAP_TYPE) {
    BALANCER_SWAP_TYPE["EXACT_IN"] = 'swapExactIn';
    BALANCER_SWAP_TYPE["EXACT_OUT"] = 'swapExactOut';
})(BALANCER_SWAP_TYPE || (BALANCER_SWAP_TYPE = {}));


/***/ }),

/***/ 43143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ MDEX_CUSTOM_BASES),
/* harmony export */   "R": () => (/* binding */ MDEX_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10466);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const MDEX_CUSTOM_BASES = {};
const MDEX_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]
    )
};


/***/ }),

/***/ 45498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ PANCAKESWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "t": () => (/* binding */ PANCAKESWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10466);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const PANCAKESWAP_CUSTOM_BASES = {};
const PANCAKESWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .BUSD */ .lz,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .BTCB */ .nB,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .UST */ .bi,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ETHER */ .c0
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]
    )
};


/***/ }),

/***/ 59463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ PANGOLIN_CUSTOM_BASES),
/* harmony export */   "h": () => (/* binding */ PANGOLIN_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10466);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const PANGOLIN_CUSTOM_BASES = {};
const PANGOLIN_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAIe */ .Lq,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .PNG */ .yI,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDTe */ ._c,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDCe */ .tB,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ETHER */ .c0,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTCe */ .MI
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]
    )
};


/***/ }),

/***/ 64210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ QUICKSWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "j": () => (/* binding */ QUICKSWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10466);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const QUICKSWAP_CUSTOM_BASES = {};
const QUICKSWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .QUICK */ .xZ,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ETHER */ .c0,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .maUSDC */ .J6
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]
    )
};


/***/ }),

/***/ 7723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ SASHIMISWAP_CUSTOM_BASES),
/* harmony export */   "y": () => (/* binding */ SASHIMISWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10466);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const SASHIMISWAP_CUSTOM_BASES = {};
const SASHIMISWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .COMP */ .TP,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .MKR */ .Ti
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]
    )
};


/***/ }),

/***/ 93688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SUSHISWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "v": () => (/* binding */ SUSHISWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10466);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const SUSHISWAP_CUSTOM_BASES = {};
const SUSHISWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .RUNE */ .uj,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NFTX */ .lK,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .STETH */ ._S
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .BUSD */ .lz,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .BTCB */ .nB
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.xDai */ .a_.xDai]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.xDai */ .a_.xDai]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Celo */ .a_.Celo]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .CUSD */ .PX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .CEUR */ .Th
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Celo */ .a_.Celo]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Fantom */ .a_.Fantom]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .fUSDT */ .Hh,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Fantom */ .a_.Fantom]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]
    )
};


/***/ }),

/***/ 57362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ TRADERJOE_BASE_AGAINST_TOKENS),
/* harmony export */   "b": () => (/* binding */ TRADERJOE_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10466);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const TRADERJOE_CUSTOM_BASES = {};
const TRADERJOE_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAIe */ .Lq,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDTe */ ._c,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDCe */ .tB,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTCe */ .MI
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]
    )
};


/***/ }),

/***/ 91722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ TRISOLARIS_CUSTOM_BASES),
/* harmony export */   "m": () => (/* binding */ TRISOLARIS_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10466);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const TRISOLARIS_CUSTOM_BASES = {};
const TRISOLARIS_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]
    )
};


/***/ }),

/***/ 48793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QQ": () => (/* binding */ UNISWAP_CUSTOM_BASES),
/* harmony export */   "Ru": () => (/* binding */ BETTER_TRADE_LESS_HOPS_THRESHOLD),
/* harmony export */   "fI": () => (/* binding */ ZERO_PERCENT),
/* harmony export */   "jg": () => (/* binding */ DEFAULT_MULTICALL_GAS_LIMIT),
/* harmony export */   "s9": () => (/* binding */ MAX_HOP),
/* harmony export */   "u7": () => (/* binding */ UNISWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "yC": () => (/* binding */ ONE_HUNDRED_PERCENT)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65506);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10466);
/* harmony import */ var _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59800);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24994);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsbi__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const UNISWAP_CUSTOM_BASES = {
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet]: {
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .AMPL */ .s5[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet].address]: [
            _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
            _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE */ .FX
        ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet]
        )
    },
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic]: {
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .AMPL */ .s5[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic].address]: [
            _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
            _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE */ .FX
        ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic]
        )
    }
};
const UNISWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic]
    )
};
const MAX_HOP = 3;
const DEFAULT_MULTICALL_GAS_LIMIT = 2_000_000;
// used to ensure the user doesn't send so much ETH so they end up with <.01
const BETTER_TRADE_LESS_HOPS_THRESHOLD = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent(jsbi__WEBPACK_IMPORTED_MODULE_1___default().BigInt(50), jsbi__WEBPACK_IMPORTED_MODULE_1___default().BigInt(10000));
const ZERO_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent('0');
const ONE_HUNDRED_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent('1');


/***/ }),

/***/ 44814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ WANNASWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "z": () => (/* binding */ WANNASWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10466);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const WANNASWAP_CUSTOM_BASES = {};
const WANNASWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WANNA */ .lB,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]
    )
};


/***/ }),

/***/ 99192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useI18N),
/* harmony export */   "Z": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43966);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97096);


/**
 * Enhanced version of useTranslation
 * @param opt Options
 */ function useI18N(opt) {
    return (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)('mask', opt);
}
function useLanguage() {
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)();
    const lang = i18n.language;
    if (lang in _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .SupportedLanguages */ .iu) return lang;
    return _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .SupportedLanguages.enUS */ .iu.enUS;
}


/***/ }),

/***/ 71172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sc": () => (/* binding */ Web3Context)
/* harmony export */ });
/* unused harmony exports PopupWeb3Context, SwapWeb3Context */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21122);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30083);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65506);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2239);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3858);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80526);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55678);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39230);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94232);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84797);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62481);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5027);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89260);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92820);
/* harmony import */ var _masknet_web3_contracts_abis_ERC721_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78322);
/* harmony import */ var _masknet_web3_contracts_abis_CryptoPunks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28053);












const PUNK_CONTRACT_ADDRESS = '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb';
async function getTokenOwner(address, tokenId) {
    const web3 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .createWeb3 */ .N)(_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Ethereum.request */ .ZP.Ethereum.request, ()=>({
            chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ChainId.Mainnet */ .a_.Mainnet
        })
    );
    if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .isSameAddress */ .Wr)(address, PUNK_CONTRACT_ADDRESS)) {
        const PUNKContract = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .createContract */ .OP)(web3, PUNK_CONTRACT_ADDRESS, _masknet_web3_contracts_abis_CryptoPunks_json__WEBPACK_IMPORTED_MODULE_9__);
        return PUNKContract?.methods.punkIndexToAddress(tokenId).call();
    }
    const ERC721Contract = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .createContract */ .OP)(web3, address, _masknet_web3_contracts_abis_ERC721_json__WEBPACK_IMPORTED_MODULE_8__);
    return ERC721Contract?.methods.ownerOf(tokenId).call();
}
function createWeb3Context(disablePopup = false, isMask = false) {
    return {
        allowTestnet: createStaticSubscription(()=>_shared__WEBPACK_IMPORTED_MODULE_4__/* .Flags.wallet_allow_testnet */ .vU.wallet_allow_testnet
        ),
        chainId: createSubscriptionFromSettings(isMask ? _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletChainIdSettings */ .DT : _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentChainIdSettings */ .wU),
        account: createSubscriptionFromAsync(async ()=>{
            try {
                await _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentAccountSettings.readyPromise */ .aK.readyPromise;
                await _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletAccountSettings.readyPromise */ .T_.readyPromise;
                await _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentProviderSettings.readyPromise */ .t1.readyPromise;
            } catch (error) {
            // do nothing
            }
            const account = isMask ? _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletAccountSettings.value */ .T_.value : _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentAccountSettings.value */ .aK.value;
            const providerType = _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentProviderSettings.value */ .t1.value;
            if ((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .isPopupPage */ .N6)()) return account;
            if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ProviderType.Fortmatic */ .lP.Fortmatic) return account;
            if (!(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .isInjectedProvider */ .sR)(providerType)) return account;
            try {
                const bridgedProvider = providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ProviderType.Coin98 */ .lP.Coin98 ? _masknet_injected_script__WEBPACK_IMPORTED_MODULE_1__/* .bridgedCoin98Provider */ .A9 : _masknet_injected_script__WEBPACK_IMPORTED_MODULE_1__/* .bridgedEthereumProvider */ .j3;
                const injectedKey = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__/* .resolveProviderInjectedKey */ .YU)(providerType);
                if (!injectedKey) return '';
                const propertyValue = await bridgedProvider.getProperty(injectedKey);
                if (propertyValue === true) return account;
                return '';
            } catch (error1) {
                return '';
            }
        }, '', (callback)=>{
            const a = _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentAccountSettings.addListener */ .aK.addListener(callback);
            const b = _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletAccountSettings.addListener */ .T_.addListener(callback);
            const c = _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentProviderSettings.addListener */ .t1.addListener(callback);
            return ()=>void [
                    a(),
                    b(),
                    c()
                ]
            ;
        }),
        tokenPrices: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentTokenPricesSettings */ .JC),
        walletPrimary: createSubscriptionFromAsync(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getWalletPrimary */ .V.getWalletPrimary, null, _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletsUpdated.on */ .R.events.walletsUpdated.on),
        wallets: createSubscriptionFromAsync(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getWallets */ .V.getWallets, [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletsUpdated.on */ .R.events.walletsUpdated.on),
        providerType: isMask ? createStaticSubscription(()=>_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ProviderType.MaskWallet */ .lP.MaskWallet
        ) : createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentProviderSettings */ .t1),
        networkType: createSubscriptionFromSettings(isMask ? _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletNetworkSettings */ .br : _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentNetworkSettings */ .fX),
        erc20Tokens: createSubscriptionFromAsync(()=>_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getTokens */ .V.getTokens(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .EthereumTokenType.ERC20 */ .Dr.ERC20)
        , [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.erc20TokensUpdated.on */ .R.events.erc20TokensUpdated.on),
        erc721Tokens: createSubscriptionFromAsync(()=>_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getTokens */ .V.getTokens(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .EthereumTokenType.ERC721 */ .Dr.ERC721)
        , [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.erc721TokensUpdated.on */ .R.events.erc721TokensUpdated.on),
        erc1155Tokens: createSubscriptionFromAsync(()=>_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getTokens */ .V.getTokens(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .EthereumTokenType.ERC1155 */ .Dr.ERC1155)
        , [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.erc1155TokensUpdated.on */ .R.events.erc1155TokensUpdated.on),
        portfolioProvider: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentFungibleAssetDataProviderSettings */ .rI),
        addToken: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.addToken */ .V.addToken,
        removeToken: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.removeToken */ .V.removeToken,
        trustToken: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trustToken */ .V.trustToken,
        blockToken: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.blockToken */ .V.blockToken,
        request: _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Ethereum.request */ .ZP.Ethereum.request,
        getSendOverrides: ()=>isMask ? {
                account: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletAccountSettings.value */ .T_.value,
                chainId: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentMaskWalletChainIdSettings.value */ .DT.value,
                providerType: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ProviderType.MaskWallet */ .lP.MaskWallet
            } : {
                account: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentAccountSettings.value */ .aK.value,
                chainId: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentChainIdSettings.value */ .wU.value,
                providerType: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentProviderSettings.value */ .t1.value
            }
        ,
        getRequestOptions: ()=>({
                popupsWindow: !disablePopup
            })
        ,
        getAssetsList: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getAssetsList */ .V.getAssetsList,
        getAssetsListNFT: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getAssetsListNFT */ .V.getAssetsListNFT,
        getCollectionsNFT: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getCollectionsNFT */ .V.getCollectionsNFT,
        getAddressNamesList: async (identity)=>{
            const addressNames = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getAddressNames */ .V.getAddressNames(identity);
            if (identity.identifier.network === 'twitter.com') {
                const result = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_7__/* .Twitter.getUserNftContainer */ .tL.getUserNftContainer(identity.identifier.userId ?? '');
                if (result?.type_name.toUpperCase() === 'ERC721') {
                    const contractAddress = await getTokenOwner(result.address, result.token_id);
                    if (contractAddress) return [
                        ...addressNames,
                        {
                            type: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .AddressNameType.TWITTER_BLUE */ .Lv.TWITTER_BLUE,
                            label: contractAddress,
                            resolvedAddress: contractAddress
                        }, 
                    ];
                }
            }
            return addressNames;
        },
        getTransactionList: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getTransactionList */ .V.getTransactionList,
        fetchERC20TokensFromTokenLists: _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_7__/* .TokenList.fetchERC20TokensFromTokenLists */ .no.fetchERC20TokensFromTokenLists,
        providerSocket: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .getProxyWebsocketInstance */ .bu)((info)=>_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.socketMessageUpdated.sendToAll */ .R.events.socketMessageUpdated.sendToAll(info)
        )
    };
}
const Web3Context = createWeb3Context(false, false);
const PopupWeb3Context = createWeb3Context(true, true);
const SwapWeb3Context = createWeb3Context(false, true);
// utils
function createSubscriptionFromSettings(settings) {
    const { trigger , subscribe  } = getEventTarget();
    settings.readyPromise.finally(trigger);
    return {
        getCurrentValue: ()=>{
            if (!settings.ready) throw settings.readyPromise;
            return settings.value;
        },
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
function createStaticSubscription(getter) {
    return {
        getCurrentValue: getter,
        subscribe: ()=>lodash_unified__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z
    };
}
function createSubscriptionFromAsync(f, defaultValue, onChange) {
    // 0 - idle, 1 - updating state, > 1 - waiting state
    let beats = 0;
    let state = defaultValue;
    let isLoading = true;
    const { subscribe , trigger  } = getEventTarget();
    const init = f().then((v)=>{
        state = v;
    }).finally(trigger).finally(()=>isLoading = false
    );
    const flush = async ()=>{
        state = await f();
        beats -= 1;
        if (beats > 0) {
            beats = 1;
            setTimeout(flush, 0);
        } else if (beats < 0) {
            beats = 0;
        }
        trigger();
    };
    return {
        getCurrentValue: _shared__WEBPACK_IMPORTED_MODULE_4__/* .isAndroidApp */ .S_ ? ()=>state
         : ()=>{
            if (isLoading) throw init;
            return state;
        },
        subscribe: (sub)=>{
            const a = subscribe(sub);
            const b = onChange(_shared__WEBPACK_IMPORTED_MODULE_4__/* .isAndroidApp */ .S_ ? async ()=>{
                beats += 1;
                if (beats === 1) await flush();
            } : ()=>{
                beats += 1;
                if (beats === 1) flush();
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

/***/ 14157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50361);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52928);


const base = {
    ID: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu,
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

/***/ 94919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ LightColor),
/* harmony export */   "I": () => (/* binding */ DarkColor)
/* harmony export */ });
const LightColor = {
    primary: '#1c68f3',
    primaryContrastText: '#ffffff',
    background: '#FFFFFF',
    secondary: '#e8f0fe',
    secondaryContrastText: '#1c68f3',
    input: '#F6F6F8',
    primaryBackground: '#ffffff',
    primaryBackground2: '#FBFBFC',
    secondaryBackground: '#f9fafa',
    lightBackground: '#F9FAFA',
    mainBackground: '#ffffff',
    suspensionBackground: 'rgba(249, 250, 250, 0.8)',
    normalBackground: '#F3F3F4',
    twitterBackground: '#F7F9FA',
    twitterBackgroundHover: '#EFF1F2',
    twitterInputBackground: '#F6F8F8',
    twitterButton: '#111418',
    twitterButtonText: '#ffffff',
    twitterBlue: '#1C68F3',
    twitterBorderLine: '#EDF1F2',
    twitterSecond: '#7B8192',
    twitterMain: '#0F1419',
    twitterBottom: '#ffffff',
    twitterInfoBackground: '#AFC3E1',
    twitterInfo: '#8CA3C7',
    twitterBg: '#F6F8F8',
    twitterTooltipBg: 'rgba(0,0,0,.6)',
    twitterInput: '#EDF1F2',
    twitterLine: '#EBEEF0',
    redMain: '#ff5f5f',
    redLight: '#ffafaf',
    redContrastText: '#ffffff',
    greenMain: '#77e0b5',
    greenLight: '#e6f6f0',
    orangeMain: '#ffb915',
    orangeLight: '#faf0d8',
    iconLight: '#a6a9b6',
    divider: '#eff3f4',
    border: '#F3F3F4',
    borderSecondary: '#536471',
    textPrimary: '#111432',
    textSecondary: '#7b8192',
    secondaryInfoText: '#AFC3E1',
    normalText: '#7B8192',
    infoBackground: 'rgba(175, 195, 225, 0.15)',
    success: '#60DFAB',
    warning: '#FFB915',
    blue: '#1C68F3',
    textLink: '#1C68F3',
    lineLight: '#E4E8F1',
    lineLighter: '#E9E9EA',
    textLight: '#A6A9B6',
    lightestBackground: '#FFFFFF',
    linkText: '#1C68F3',
    twitter: '#2CA4EF',
    facebook: '#4267B2',
    white: '#ffffff',
    bottom: '#F9FAFA',
    main: '#1C68F3',
    errorBackground: 'rgba(255, 95, 95, 0.15)',
    tooltipBackground: '#ffffff',
    warningBackground: 'rgba(255, 185, 21, 0.1)',
    cyberconnectPrimary: '#000000'
};
const DarkColor = {
    primary: '#1c68f3',
    primaryContrastText: '#ffffff',
    background: '#15171A',
    secondary: '#242e57',
    secondaryContrastText: '#ffffff',
    input: '#282B49',
    primaryBackground: '#212442',
    primaryBackground2: '#212442',
    secondaryBackground: '#252846',
    lightBackground: '#2E314F',
    mainBackground: '#111432',
    suspensionBackground: 'rgba(27, 30, 60, 0.8)',
    normalBackground: '#262947',
    twitterInputBackground: '#17191D',
    twitterBackground: '#17191D',
    twitterBackgroundHover: '#17191D',
    twitterButton: '#EFF3F4',
    twitterButtonText: '#0F1419',
    twitterBlue: '#4989FF',
    twitterBorderLine: '#2F3336',
    twitterInput: '#1D2023',
    twitterSecond: '#636B72',
    twitterMain: '#D9D9D9',
    twitterBottom: '#000000',
    twitterInfoBackground: '#AFC3E1',
    twitterInfo: '#8CA3C7',
    twitterLine: '#2F3336',
    twitterBg: '#15171A',
    twitterTooltipBg: 'rgba(91,112,131,.6)',
    redMain: '#ff5f5f',
    redLight: '#46304a',
    redContrastText: '#ffffff',
    greenMain: '#77e0b5',
    greenLight: '#314457',
    orangeMain: '#ffb915',
    orangeLight: '#463e3f',
    iconLight: '#a6a9b6',
    divider: '#3e455e',
    border: '#3E455E',
    borderSecondary: '#6e767d',
    // TODO: ?
    textPrimary: '#ffffff',
    // TODO: ?
    textSecondary: 'ghostwhite',
    secondaryInfoText: '#AFC3E1',
    normalText: 'rgba(255, 255, 255, 0.8)',
    infoBackground: 'rgba(175, 195, 225, 0.15)',
    success: '#60DFAB',
    warning: '#FFB915',
    blue: '#1C68F3',
    textLink: '#ffffff',
    lineLight: '#32365B',
    lineLighter: '#32365B',
    textLight: '#A6A9B6',
    lightestBackground: '#212422',
    linkText: '#ffffff',
    twitter: '#2CA4EF',
    facebook: '#4267B2',
    white: '#ffffff',
    bottom: '#000000',
    main: '#D4D4D4',
    errorBackground: 'rgba(255, 95, 95, 0.1)',
    tooltipBackground: '#1A1D20',
    warningBackground: 'rgba(255, 185, 21, 0.1)',
    cyberconnectPrimary: '#ffffff'
};


/***/ }),

/***/ 53637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ MaskDialog)
/* harmony export */ });
/* unused harmony export useMaskDialog */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30397);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82502);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22581);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57208);






/**
 * This component is used to provide a most common dialog practice in Mask design.
 *
 * But all the primitives are tweaked to fit the design
 * Therefore it also OK to not use this component if you need a special one.
 */ const MaskDialog = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { title , onBack , onClose , open , children , DialogProps , ...inferredDialogProps } = props;
    const dialogProps = {
        onBackdropClick: onClose,
        onClose,
        open,
        ...inferredDialogProps,
        ...DialogProps
    };
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,_DialogStack__WEBPACK_IMPORTED_MODULE_4__/* .useDialogStackActor */ .t)(open);
    return (0,_ShadowRoot__WEBPACK_IMPORTED_MODULE_2__/* .usePortalShadowRoot */ .ad)((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IncreaseStack, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                container: container,
                ...dialogProps,
                ...extraProps,
                children: [
                    shouldReplaceExitWithBack ? // replace onClose with onBack when and only when there is no onBack
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DialogTitle__WEBPACK_IMPORTED_MODULE_3__/* .MaskDialogTitle */ .K, {
                        onBack: onBack || onClose,
                        onClose: onBack ? onClose : undefined,
                        children: title
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DialogTitle__WEBPACK_IMPORTED_MODULE_3__/* .MaskDialogTitle */ .K, {
                        onBack: onBack,
                        onClose: onClose,
                        children: title
                    }),
                    children
                ]
            })
        })
    );
});
function useMaskDialog(title, content, actions) {
    const [isOpen, setOpen] = useState(false);
    const onClose = useCallback(()=>setOpen(false)
    , []);
    return /*#__PURE__*/ _jsxs(MaskDialog, {
        onClose: onClose,
        open: isOpen,
        title: title,
        children: [
            /*#__PURE__*/ _jsx(DialogContent, {
                children: content
            }),
            /*#__PURE__*/ _jsx(DialogActions, {
                children: actions
            })
        ]
    });
}


/***/ }),

/***/ 33058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ FolderTabs),
/* harmony export */   "p": () => (/* binding */ FolderTabPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UIHelper_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21561);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36972);





const useStyles = (0,_UIHelper_makeStyles__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme, _, refs)=>{
    const { palette  } = theme;
    const isDark = palette.mode === 'dark';
    const inactiveColor = isDark ? theme.palette.grey['50'] : _CSSVariables__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.twitterBg */ .ZN.twitterBg;
    const selected = {};
    return {
        folderTabs: {},
        selected,
        tabList: {
            display: 'flex',
            gap: 8
        },
        tab: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            height: 40,
            borderRadius: '8px 8px 0 0',
            cursor: 'pointer',
            backgroundColor: inactiveColor,
            border: `1px solid ${inactiveColor}`,
            borderBottomColor: 'transparent',
            color: theme.palette.text.secondary,
            position: 'relative',
            boxSizing: 'border-box',
            [`&.${refs.selected}`]: {
                backgroundColor: theme.palette.background.paper,
                borderColor: _CSSVariables__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.twitterBorderLine */ .ZN.twitterBorderLine,
                color: theme.palette.primary.main
            },
            // cover bottom border of the active tab
            [`&.${refs.selected}::after`]: {
                position: 'absolute',
                content: '""',
                height: 2,
                borderLeft: `1px solid ${_CSSVariables__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.twitterBorderLine */ .ZN.twitterBorderLine}`,
                borderRight: `1px solid ${_CSSVariables__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.twitterBorderLine */ .ZN.twitterBorderLine}`,
                backgroundColor: theme.palette.background.paper,
                bottom: '-2px',
                left: -1,
                right: -1
            }
        },
        tabPanel: {
            backgroundColor: theme.palette.background.paper
        },
        tabContent: {
            border: `1px solid ${_CSSVariables__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.twitterBorderLine */ .ZN.twitterBorderLine}`,
            padding: 12,
            borderRadius: '0 0 8px 8px'
        }
    };
});
const FolderTabPanel = ({ className , ...rest })=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tabPanel, className),
        role: "tabpanel",
        ...rest
    });
};
const FolderTabs = ({ children: childNodes , defaultValue =0 , ...rest })=>{
    const { classes  } = useStyles();
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
    const tabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.map(childNodes, (child, index)=>{
        const label = child.props.label;
        const childValue = child.props.value ?? index;
        const selected = value === childValue;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
            tabIndex: index === 0 ? 0 : -1,
            role: "tab",
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tab, selected ? classes.selected : null),
            onClick: ()=>setValue(childValue)
            ,
            children: label
        }, label);
    });
    const children = react__WEBPACK_IMPORTED_MODULE_1__.Children.map(childNodes, (child, index)=>{
        const childValue = child.props.value ?? index;
        const selected = value === childValue;
        return selected ? child : null;
    });
    if (!tabs.length) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.tabList,
                role: "tablist",
                children: tabs
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.tabContent,
                children: children
            })
        ]
    });
};


/***/ }),

/***/ 99685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ii": () => (/* binding */ useCustomSnackbar),
/* harmony export */   "YO": () => (/* binding */ CustomSnackbarProvider),
/* harmony export */   "wT": () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_3__.wT)
/* harmony export */ });
/* unused harmony export CustomSnackbarContent */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13442);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86610);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(589);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37253);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8166);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15520);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64751);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73377);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(141);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14696);
/* harmony import */ var _UIHelper_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21561);
/* harmony import */ var _UIHelper_custom_ui_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22993);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36972);















const useStyles = (0,_UIHelper_makeStyles__WEBPACK_IMPORTED_MODULE_5__/* .makeStyles */ .Z)()((theme, { offsetY  }, refs)=>{
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
            transform: typeof offsetY !== undefined ? `translateY(${offsetY}px)` : 'none',
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
    default: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    success: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    error: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_9__/* .RiskIcon */ .w, {}),
    warning: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    info: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        color: "inherit"
    })
};
const CustomSnackbarContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const classes = (0,_UIHelper_custom_ui_helper__WEBPACK_IMPORTED_MODULE_11__/* .useStylesExtends */ .B)(useStyles({
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
        offsetY: offsetY
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

/***/ 76584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ MaskThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20310);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20288);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96154);
/* harmony import */ var _Components_Snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99685);




function compose(init, ...f) {
    return f.reduceRight((prev, curr)=>curr(prev)
    , /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: init
    }));
}
function MaskThemeProvider(props) {
    const { children , useTheme , useMaskIconPalette , CustomSnackbarOffsetY  } = props;
    const theme = useTheme();
    const MaskIconPalette = useMaskIconPalette(theme);
    return compose(children, (jsx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .MaskIconPaletteContext.Provider */ .v.Provider, {
            value: MaskIconPalette,
            children: jsx
        })
    , (jsx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            theme: theme,
            children: jsx
        })
    , (jsx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_Snackbar__WEBPACK_IMPORTED_MODULE_1__/* .CustomSnackbarProvider */ .YO, {
            disableWindowBlurListener: false,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            children: jsx,
            offsetY: CustomSnackbarOffsetY
        })
    , (jsx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {}),
                jsx
            ]
        })
    );
}


/***/ }),

/***/ 45548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ useTabs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
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

/***/ 19296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bu": () => (/* binding */ getProxyWebsocketInstance)
/* harmony export */ });
/* unused harmony exports ProviderProxy, getWebSocketInstance, sendMessageToProxy */
/* harmony import */ var date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23131);
/* harmony import */ var date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10671);
/* harmony import */ var reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10568);



const POOL_CACHE_EXPIRE_TIME = 30;
const POOL_CACHE_MAX_CAPACITY = 10;
class ProviderProxy {
    /**
     * Send request to proxy websocket
     * @param message
     */ send(message) {
        this.clearPool();
        const cache = this._pool.get(message.id);
        if (cache && !cache.done) return;
        if (cache && !this.isExpired(cache)) {
            const notify = message.notify || this._globalNotify;
            notify({
                id: message.id,
                done: true,
                from: 'cache'
            });
            return;
        }
        this._socket.send(JSON.stringify({
            id: message.id,
            method: message.method,
            params: message.params
        }));
        this._pool.set(message.id, {
            data: [],
            createdAt: new Date(),
            notify: message.notify || this._globalNotify
        });
    }
    /**
     * Send async request to proxy websocket, Avoid use this method
     * @param message
     */ async sendAsync(message) {
        this.clearPool();
        const cache = this._pool.get(message.id);
        if (cache && !this.isExpired(cache)) return this.getResult(message.id) ?? [];
        const innerMessagePromise = ()=>new Promise((resolve, reject)=>{
                message.notify = (info)=>{
                    if (info.done) resolve(info);
                    if (info.error) reject(info);
                };
                this.send(message);
            })
        ;
        await innerMessagePromise();
        return this.getResult(message.id) ?? [];
    }
    get socket() {
        return this._socket;
    }
    getResult(id) {
        const item = this._pool.get(id);
        if (!item) return [];
        const newItem = {
            ...item,
            pickedAt: new Date()
        };
        this._pool.set(id, newItem);
        return item.data;
    }
    /**
     * Cache is expired
     * @param item cache item
     * @returns boolean
     */ isExpired(item) {
        const now = new Date();
        return !!item.updatedAt && (0,date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(now, item.updatedAt) > POOL_CACHE_EXPIRE_TIME;
    }
    clearPool() {
        let beCleaned = [];
        const entities = Array.from(this._pool.entries());
        // clear expired
        beCleaned = entities.filter((x)=>this.isExpired(x[1])
        );
        // clear overed size
        if (entities.length > POOL_CACHE_MAX_CAPACITY) {
            const picks = entities.sort((a, b)=>(0,date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(a[1].pickedAt || a[1].createdAt, b[1].pickedAt || b[1].createdAt)
            ).slice(0, entities.length - POOL_CACHE_MAX_CAPACITY);
            beCleaned = [
                ...beCleaned,
                ...picks
            ];
        }
        beCleaned.forEach((x)=>this._pool.delete(x[0])
        );
    }
    constructor(point, notifyFn){
        this.waitingOpen = ()=>{
            return new Promise((resolve, reject)=>{
                this._socket.addEventListener('open', ()=>resolve()
                );
                this._socket.addEventListener('error', ()=>reject()
                );
            });
        };
        this.onMessage = (event)=>{
            const { id , results , error  } = JSON.parse(event.data);
            const itemInPoll = this._pool.get(id);
            if (!itemInPoll) return;
            if (error || !id) {
                itemInPoll.notify({
                    id,
                    done: true,
                    error: error,
                    from: 'remote'
                });
            }
            const updatedAt = new Date();
            if (!results || results.length === 0) {
                this._pool.set(id, {
                    ...itemInPoll,
                    done: true
                });
                itemInPoll.notify({
                    id,
                    done: true,
                    from: 'remote'
                });
                return;
            }
            const dataInPool = itemInPoll?.data ?? [];
            const patchData = [
                ...dataInPool,
                ...results ?? []
            ];
            this._pool.set(id, {
                ...itemInPoll,
                updatedAt,
                data: patchData
            });
            itemInPoll.notify({
                id,
                done: false,
                from: 'remote'
            });
        };
        this.registerMessage = ()=>{
            this._socket.removeEventListener('message', this.onMessage);
            this._socket.addEventListener('message', this.onMessage);
        };
        this._socket = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(point, undefined, {
            minUptime: 20000
        });
        this._pool = new Map();
        this._globalNotify = notifyFn;
    }
}
const SOCKET_POINT = // workaround, should create a stage env for QA testing
 true ? 'wss://hyper-proxy-production.mask-reverse-proxy.workers.dev' : 0;
var SocketState;
(function(SocketState) {
    SocketState[SocketState["CONNECTING"] = 0] = "CONNECTING";
    SocketState[SocketState["OPEN"] = 1] = "OPEN";
    SocketState[SocketState["CLOSING"] = 2] = "CLOSING";
    SocketState[SocketState["CLOSED"] = 3] = "CLOSED";
})(SocketState || (SocketState = {}));
/**
 * Provider a ProxySocket instance
 * @returns a function to operate socket instance
 */ function getProxyWebsocketInstanceWrapper() {
    let cachedInstance;
    const createNewInstance = async (notify)=>{
        cachedInstance = new ProviderProxy(SOCKET_POINT, notify);
        await cachedInstance.waitingOpen();
        cachedInstance.registerMessage();
    };
    return async (notify)=>{
        if (cachedInstance) return cachedInstance;
        await createNewInstance(notify);
        return cachedInstance;
    };
}
const getProxyWebsocketInstance = getProxyWebsocketInstanceWrapper();
/**
 * Provide a websocket instance for once, avoid use it.
 * @param endPoint websocket endpoint
 * @returns websocket instance
 */ const getWebSocketInstance = async (endPoint)=>{
    const socket = new WebSocket(endPoint ?? SOCKET_POINT);
    const waitingOpen = ()=>{
        return new Promise((resolve, reject)=>{
            socket.addEventListener('open', ()=>resolve()
            );
            socket.addEventListener('error', ()=>reject()
            );
        });
    };
    await waitingOpen();
    return socket;
};
/**
 * Provide a websocket instance for once, avoid use it.
 * @param message endPoint
 * @param [endPoint = SOCKET_POINT] endPoint
 * @returns promise of request
 */ const sendMessageToProxy = async (message, endPoint)=>{
    let data = [];
    const socket = await getWebSocketInstance(SOCKET_POINT ?? endPoint);
    const sendPromise = ()=>new Promise((resolve, reject)=>{
            socket.addEventListener('message', (event)=>{
                const { results =[] , error  } = JSON.parse(event.data);
                if (error) {
                    socket.close();
                    reject(error);
                }
                if (results.length === 0) {
                    socket.close();
                    resolve(data);
                }
                data = [
                    ...data,
                    ...results
                ];
            });
            socket.send(JSON.stringify(message));
        })
    ;
    return sendPromise();
};


/***/ }),

/***/ 80526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$G": () => (/* binding */ getChainDetailed),
/* harmony export */   "AQ": () => (/* binding */ getCoinGeckoPlatformId),
/* harmony export */   "EP": () => (/* binding */ getChainIdFromNetworkType),
/* harmony export */   "EX": () => (/* binding */ getChainDetailedCAIP),
/* harmony export */   "F3": () => (/* binding */ getChainShortName),
/* harmony export */   "Ji": () => (/* binding */ isChainIdValid),
/* harmony export */   "NX": () => (/* binding */ getChainRPC),
/* harmony export */   "U1": () => (/* binding */ isEIP1559Supported),
/* harmony export */   "_T": () => (/* binding */ getNetworkTypeFromChainId),
/* harmony export */   "np": () => (/* binding */ getChainIdFromName),
/* harmony export */   "qj": () => (/* binding */ isFortmaticSupported),
/* harmony export */   "qz": () => (/* binding */ getChainName),
/* harmony export */   "sR": () => (/* binding */ isInjectedProvider),
/* harmony export */   "vM": () => (/* binding */ getCoinGeckoCoinId),
/* harmony export */   "yX": () => (/* binding */ isChainIdMainnet)
/* harmony export */ });
/* unused harmony exports getChainFullName, getChainFromChainId, getNetworkName */
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11627);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36803);
/* harmony import */ var _assets_chains_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2545);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26223);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);






function isChainIdValid(chainId, allowTestnet = false) {
    const chainDetailed = getChainDetailed(chainId);
    return !!getNetworkTypeFromChainId(chainId) && (chainDetailed?.network === 'mainnet' || allowTestnet);
}
function isChainIdMainnet(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return chainDetailed?.network === 'mainnet';
}
function isEIP1559Supported(chainId) {
    const features = getChainDetailed(chainId)?.features ?? [];
    return features.includes('EIP1559');
}
function isInjectedProvider(providerType) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.Coin98 */ .lP.Coin98,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.WalletLink */ .lP.WalletLink,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.MathWallet */ .lP.MathWallet
    ].includes(providerType);
}
function isFortmaticSupported(chainId) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC
    ].includes(chainId);
}
function getChainDetailed(chainId = _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet) {
    return _assets_chains_json__WEBPACK_IMPORTED_MODULE_2__.find((x)=>x.chainId === chainId
    );
}
// Learn more: https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md
function getChainDetailedCAIP(chainId = _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet) {
    const chainDetailed = getChainDetailed(chainId);
    const { RPC =[]  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getRPCConstants */ .t0)(chainId);
    if (!chainDetailed) return;
    return {
        chainId: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(chainDetailed.chainId),
        chainName: chainDetailed.name,
        nativeCurrency: chainDetailed.nativeCurrency,
        rpcUrls: RPC,
        blockExplorerUrls: [
            chainDetailed.explorers && chainDetailed.explorers.length > 0 && chainDetailed.explorers[0].url ? chainDetailed.explorers[0].url : chainDetailed.infoURL, 
        ]
    };
}
function getChainRPC(chainId, seed) {
    const { RPC , RPC_WEIGHTS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getRPCConstants */ .t0)(chainId);
    if (!RPC || !RPC_WEIGHTS) throw new Error(`Unknown chain id: ${chainId}.`);
    return RPC[RPC_WEIGHTS[seed]];
}
function getChainName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return chainDetailed?.name ?? 'Unknown Network';
}
function getChainShortName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return chainDetailed?.shortName ?? 'Unknown Network';
}
function getChainFullName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return chainDetailed?.fullName ?? 'Unknown Network';
}
function getChainIdFromName(name) {
    if (!name) return;
    const chainDetailed = _assets_chains_json__WEBPACK_IMPORTED_MODULE_2__.find((x)=>[
            x.chain,
            x.network,
            x.name,
            x.shortName,
            x.fullName ?? ''
        ].filter(Boolean).map((y)=>y.toLowerCase()
        ).includes(name.toLowerCase())
    );
    return chainDetailed && getNetworkTypeFromChainId(chainDetailed.chainId) ? chainDetailed.chainId : undefined;
}
const getChainIdFromNetworkType = (0,_enum__WEBPACK_IMPORTED_MODULE_4__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .td.Ethereum]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .td.Arbitrum]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Arbitrum */ .a_.Arbitrum,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Avalanche */ .td.Avalanche]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .td.Binance]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Celo */ .td.Celo]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Celo */ .a_.Celo,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Fantom */ .td.Fantom]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Fantom */ .a_.Fantom,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .td.Polygon]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.xDai */ .td.xDai]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.xDai */ .a_.xDai,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Aurora */ .td.Aurora]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora,
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Conflux */ .td.Conflux]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Conflux */ .a_.Conflux
}, _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet);
// The value should be same as chain field in packages/web3-shared/evm/assets/chains.json
const chainNameMap = {
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .td.Ethereum]: 'ETH',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .td.Binance]: 'BNB Chain',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .td.Polygon]: 'Polygon',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'Arbitrum',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.xDai */ .td.xDai]: 'Gnosis',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Celo */ .td.Celo]: 'CELO',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Fantom */ .td.Fantom]: 'FTM',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Aurora */ .td.Aurora]: 'Aurora',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Avalanche */ .td.Avalanche]: 'AVAX',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Boba */ .td.Boba]: 'Boba',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Fuse */ .td.Fuse]: 'Fuse',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Metis */ .td.Metis]: 'Metis',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Optimistic */ .td.Optimistic]: 'Optimistic',
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Conflux */ .td.Conflux]: 'Conflux'
};
function getNetworkTypeFromChainId(chainId, value1) {
    const chainDetailed = getChainDetailed(chainId);
    const entry = Object.entries(chainNameMap).find(([_, value])=>{
        if (value === chainDetailed?.chain) return true;
        return false;
    });
    if (value1) return entry?.[1];
    return entry?.[0];
}
function getChainFromChainId(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return chainDetailed?.chain;
}
function getCoinGeckoPlatformId(chainId) {
    const { PLATFORM_ID =''  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getCoinGeckoConstants */ .V6)(chainId);
    return PLATFORM_ID;
}
function getCoinGeckoCoinId(chainId) {
    const { COIN_ID =''  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getCoinGeckoConstants */ .V6)(chainId);
    return COIN_ID;
}
function getNetworkName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    if (!chainDetailed) return 'Unknown Network';
    if (chainDetailed.networkId === ChainId.Matic) return chainDetailed.fullName;
    if (chainDetailed.network === 'mainnet') return chainDetailed.chain;
    return upperFirst(chainDetailed.network);
}


/***/ })

}]);