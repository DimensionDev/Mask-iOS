"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6669],{

/***/ 10476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ZRX_AFFILIATE_ADDRESS),
/* harmony export */   "q": () => (/* binding */ ZRX_BASE_URL)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95130);

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
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Optimistic */ .td.Optimistic]: ''
};
const ZRX_AFFILIATE_ADDRESS = '0x934B510D4C9103E6a87AEf13b816fb080286D649';


/***/ }),

/***/ 49560:
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

/***/ 10248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ MDEX_CUSTOM_BASES),
/* harmony export */   "R": () => (/* binding */ MDEX_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82406);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);

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

/***/ 16248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ PANCAKESWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "t": () => (/* binding */ PANCAKESWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82406);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);

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

/***/ 62073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ PANGOLIN_CUSTOM_BASES),
/* harmony export */   "h": () => (/* binding */ PANGOLIN_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82406);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);

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

/***/ 61346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ QUICKSWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "j": () => (/* binding */ QUICKSWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82406);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);

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

/***/ 97071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ SASHIMISWAP_CUSTOM_BASES),
/* harmony export */   "y": () => (/* binding */ SASHIMISWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82406);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);

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

/***/ 4820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SUSHISWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "v": () => (/* binding */ SUSHISWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82406);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);

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
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .MSKA */ .uz,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .MSKB */ .mW,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .MSKC */ .Xw
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby]
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

/***/ 79290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ TRADERJOE_BASE_AGAINST_TOKENS),
/* harmony export */   "b": () => (/* binding */ TRADERJOE_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82406);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);

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

/***/ 99882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ TRISOLARIS_CUSTOM_BASES),
/* harmony export */   "m": () => (/* binding */ TRISOLARIS_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82406);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const TRISOLARIS_CUSTOM_BASES = {};
const TRISOLARIS_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .MSKA */ .uz,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .MSKB */ .mW,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .MSKC */ .Xw
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby]
    ),
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

/***/ 25929:
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
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95130);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82406);
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
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Rinkeby */ .a_.Rinkeby]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .MSKA */ .uz,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .MSKB */ .mW,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .MSKC */ .Xw
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Rinkeby */ .a_.Rinkeby]
    )
};
const MAX_HOP = 3;
const DEFAULT_MULTICALL_GAS_LIMIT = 2000000;
// used to ensure the user doesn't send so much ETH so they end up with <.01
const BETTER_TRADE_LESS_HOPS_THRESHOLD = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent(jsbi__WEBPACK_IMPORTED_MODULE_1___default().BigInt(50), jsbi__WEBPACK_IMPORTED_MODULE_1___default().BigInt(10000));
const ZERO_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent('0');
const ONE_HUNDRED_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent('1');


/***/ }),

/***/ 89179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ WANNASWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "z": () => (/* binding */ WANNASWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82406);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);

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

/***/ 47930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useI18N),
/* harmony export */   "Z": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13772);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26530);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28331);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21202);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48476);
/* harmony import */ var _shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79347);





_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* ["default"].use */ .Z.use(react_i18next__WEBPACK_IMPORTED_MODULE_4__/* .initReactI18next */ .Db);
/**
 * Enhanced version of useTranslation
 * @param opt Options
 */ function useI18N(opt) {
    return (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$)('mask', opt);
}
function useLanguage() {
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$)();
    const lang = i18n.language;
    if (lang in _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .SupportedLanguages */ .iu) return lang;
    return _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .SupportedLanguages.enUS */ .iu.enUS;
}
_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .languageSettings.addListener */ .pQ.addListener((next)=>{
    if (next === _masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .LanguageOptions.__auto__ */ .P7.__auto__) {
        const result = _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* ["default"].services.languageDetector.detect */ .Z.services.languageDetector.detect();
        for (const lng of result){
            if (lng in _shared_ui__WEBPACK_IMPORTED_MODULE_3__/* .languages */ .Mj) return void _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .Z.changeLanguage(lng);
        }
        _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .Z.changeLanguage(_masknet_public_api__WEBPACK_IMPORTED_MODULE_2__/* .LanguageOptions.enUS */ .P7.enUS);
    } else {
        _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .Z.changeLanguage(next);
    }
});


/***/ }),

/***/ 60027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sc": () => (/* binding */ Web3Context)
/* harmony export */ });
/* unused harmony exports PopupWeb3Context, SwapWeb3Context */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21122);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59531);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95130);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66580);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42340);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22229);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(83468);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69366);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63361);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63081);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70609);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45925);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26618);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54492);
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
        return PUNKContract === null || PUNKContract === void 0 ? void 0 : PUNKContract.methods.punkIndexToAddress(tokenId).call();
    }
    const ERC721Contract = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .createContract */ .OP)(web3, address, _masknet_web3_contracts_abis_ERC721_json__WEBPACK_IMPORTED_MODULE_8__);
    return ERC721Contract === null || ERC721Contract === void 0 ? void 0 : ERC721Contract.methods.ownerOf(tokenId).call();
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
                var _userId;
                const result = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_7__/* .Twitter.getUserNftContainer */ .tL.getUserNftContainer((_userId = identity.identifier.userId) !== null && _userId !== void 0 ? _userId : '');
                if ((result === null || result === void 0 ? void 0 : result.type_name.toUpperCase()) === 'ERC721') {
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

/***/ 80847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PopupRoutes)
/* harmony export */ });
var PopupRoutes;
(function(PopupRoutes) {
    PopupRoutes["Root"] = '/';
    PopupRoutes["Wallet"] = '/wallet';
    PopupRoutes["ImportWallet"] = '/wallet/import';
    PopupRoutes["AddDeriveWallet"] = '/wallet/addDerive';
    PopupRoutes["WalletSettings"] = '/wallet/settings';
    PopupRoutes["WalletRename"] = '/wallet/rename';
    PopupRoutes["DeleteWallet"] = '/wallet/delete';
    PopupRoutes["CreateWallet"] = '/wallet/create';
    PopupRoutes["SwitchWallet"] = '/wallet/switch';
    PopupRoutes["SelectWallet"] = '/wallet/select';
    PopupRoutes["WalletRecovered"] = '/wallet/recovered';
    PopupRoutes["LegacyWalletRecovered"] = '/wallet/legacy-recovered';
    PopupRoutes["BackupWallet"] = '/wallet/backup';
    PopupRoutes["AddToken"] = '/wallet/addToken';
    PopupRoutes["WalletSignRequest"] = '/wallet/sign';
    PopupRoutes["GasSetting"] = '/wallet/gas';
    PopupRoutes["TokenDetail"] = '/wallet/tokenDetail';
    PopupRoutes["ContractInteraction"] = '/wallet/contract-interaction';
    PopupRoutes["Unlock"] = '/wallet/unlock';
    PopupRoutes["Transfer"] = '/wallet/transfer';
    PopupRoutes["SetPaymentPassword"] = '/wallet/password';
    PopupRoutes["ReplaceTransaction"] = '/wallet/replace';
    PopupRoutes["Personas"] = '/personas';
    PopupRoutes["Logout"] = '/personas/logout';
    PopupRoutes["PersonaRename"] = '/personas/rename';
    PopupRoutes["PersonaSignRequest"] = '/personas/sign-request';
    PopupRoutes["PermissionAwareRedirect"] = '/redirect';
    PopupRoutes["RequestPermission"] = '/request-permission';
    PopupRoutes["ThirdPartyRequestPermission"] = '/3rd-request-permission';
    PopupRoutes["SignRequest"] = '/sign-request';
    PopupRoutes["Swap"] = '/swap';
})(PopupRoutes || (PopupRoutes = {}));


/***/ }),

/***/ 48083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I4": () => (/* binding */ SOCIAL_MEDIA_ICON_MAPPING),
/* harmony export */   "LM": () => (/* binding */ MAX_PERSONA_LIMIT),
/* harmony export */   "n2": () => (/* binding */ mediaViewerUrl)
/* harmony export */ });
/* unused harmony export MAX_WALLET_LIMIT */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5096);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22807);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37127);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97066);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69166);


const SOCIAL_MEDIA_ICON_MAPPING = {
    'twitter.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .TwitterColoredIcon */ .g, {}),
    'facebook.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .FacebookColoredIcon */ .W, {}),
    'minds.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__/* .MindsIcon */ .G, {}),
    'instagram.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .InstagramColoredIcon */ .$, {}),
    'opensea.io': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .OpenSeaColoredIcon */ .w, {})
};
const mediaViewerUrl = 'https://media-viewer.r2d2.to/index.html';
const MAX_WALLET_LIMIT = 100;
const MAX_PERSONA_LIMIT = 10;


/***/ }),

/***/ 95367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u0": () => (/* reexport */ AddressViewer/* AddressViewer */.u),
  "IR": () => (/* reexport */ AssetPlayer/* AssetPlayer */.I),
  "T3": () => (/* reexport */ ERC20TokenList/* ERC20TokenList */.T),
  "Kv": () => (/* reexport */ wallet/* FormattedAddress */.Kv),
  "BV": () => (/* reexport */ wallet/* FormattedBalance */.BV),
  "bO": () => (/* reexport */ wallet/* FormattedCurrency */.bO),
  "qy": () => (/* reexport */ I18NextProviderHMR/* I18NextProviderHMR */.q),
  "XB": () => (/* reexport */ ImageIcon/* ImageIcon */.X),
  "p6": () => (/* reexport */ LoadingAnimation/* LoadingAnimation */.p),
  "LM": () => (/* reexport */ constants/* MAX_PERSONA_LIMIT */.LM),
  "jq": () => (/* reexport */ MiniNetworkSelector/* MiniNetworkSelector */.j),
  "yC": () => (/* reexport */ NFTCardStyledAssetPlayer/* NFTCardStyledAssetPlayer */.y),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "il": () => (/* reexport */ ReversedAddress/* ReversedAddress */.i),
  "I4": () => (/* reexport */ constants/* SOCIAL_MEDIA_ICON_MAPPING */.I4),
  "xR": () => (/* reexport */ SelectTokenChip/* SelectTokenChip */.x),
  "xl": () => (/* reexport */ TokenAmountPanel/* TokenAmountPanel */.x),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "o": () => (/* reexport */ WalletIcon/* WalletIcon */.o),
  "zr": () => (/* reexport */ languages/* addSharedI18N */.z),
  "R": () => (/* reexport */ utils/* formatFingerprint */.R),
  "n2": () => (/* reexport */ constants/* mediaViewerUrl */.n2),
  "H9": () => (/* reexport */ useMenu),
  "B_": () => (/* reexport */ locales/* useSharedI18N */.B),
  "iD": () => (/* reexport */ useSnackbarCallback/* useSnackbarCallback */.i)
});

// UNUSED EXPORTS: ChainIcon, MAX_WALLET_LIMIT, SharedTrans, TokenIconUI, languages, useImageFailOver, useMenuConfig, useMenuContext

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Menu/Menu.js + 3 modules
var Menu = __webpack_require__(64765);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useUpdate.js
var useUpdate = __webpack_require__(52781);
;// CONCATENATED MODULE: ../shared/src/hooks/useMenu.tsx




/** Provide ShadowRootMenu for useMenu in content script. */ const useMenuContext = /*#__PURE__*/ (0,react.createContext)(Menu/* default */.Z);
/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {});
}
function useMenuConfig(elements, config) {
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [status, setOpen] = (0,react.useState)(false);
    const open = (0,react.useCallback)((anchorElOrEvent)=>{
        let element;
        if (anchorElOrEvent instanceof HTMLElement) {
            element = anchorElOrEvent;
        } else {
            element = anchorElOrEvent.currentTarget;
        }
        setAnchorEl(element);
        setOpen(true);
        // HACK: it seems like anchor doesn't work correctly
        // but a force repaint can solve the problem.
        window.requestAnimationFrame(update);
    }, []);
    const update = (0,useUpdate/* default */.Z)();
    const close = (0,react.useCallback)(()=>setOpen(false)
    , []);
    const Menu1 = (0,react.useContext)(useMenuContext);
    return [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Menu1, {
            open: status,
            onClose: close,
            onClick: close,
            anchorEl: anchorEl,
            ...config,
            children: elements === null || elements === void 0 ? void 0 : elements.map((element, key)=>/*#__PURE__*/ (0,react.isValidElement)(element) ? /*#__PURE__*/ (0,react.cloneElement)(element, {
                    ...element.props,
                    key
                }) : element
            )
        }, "menu"),
        open,
        close, 
    ];
}

// EXTERNAL MODULE: ../shared/src/hooks/useSnackbarCallback.tsx
var useSnackbarCallback = __webpack_require__(43931);
;// CONCATENATED MODULE: ../shared/src/hooks/index.ts



// EXTERNAL MODULE: ../shared/src/wallet/index.ts + 3 modules
var wallet = __webpack_require__(49546);
// EXTERNAL MODULE: ../shared/src/UI/hooks/index.ts + 1 modules
var hooks = __webpack_require__(35046);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 2 modules
var TokenIcon = __webpack_require__(93116);
// EXTERNAL MODULE: ../shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(5979);
// EXTERNAL MODULE: ../shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(91750);
// EXTERNAL MODULE: ../shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(29125);
// EXTERNAL MODULE: ../shared/src/UI/components/ERC20TokenList/index.tsx + 5 modules
var ERC20TokenList = __webpack_require__(50484);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(77188);
// EXTERNAL MODULE: ../shared/src/UI/components/SelectTokenChip/index.tsx
var SelectTokenChip = __webpack_require__(16006);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenAmountPanel/index.tsx
var TokenAmountPanel = __webpack_require__(30180);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var LoadingAnimation = __webpack_require__(15350);
// EXTERNAL MODULE: ../shared/src/UI/components/MiniNetworkSelector/index.tsx
var MiniNetworkSelector = __webpack_require__(44917);
// EXTERNAL MODULE: ../shared/src/UI/components/AddressViewer/index.tsx
var AddressViewer = __webpack_require__(5011);
// EXTERNAL MODULE: ../shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(58299);
// EXTERNAL MODULE: ../shared/src/UI/components/AssetPlayer/index.tsx + 2 modules
var AssetPlayer = __webpack_require__(85796);
// EXTERNAL MODULE: ../shared/src/UI/components/NFTCardStyledAssetPlayer/index.tsx
var NFTCardStyledAssetPlayer = __webpack_require__(58398);
// EXTERNAL MODULE: ../shared/src/UI/components/ReversedAddress/index.tsx
var ReversedAddress = __webpack_require__(25614);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts
















;// CONCATENATED MODULE: ../shared/src/UI/index.ts



// EXTERNAL MODULE: ../shared/src/locales/index.ts + 1 modules
var locales = __webpack_require__(66324);
// EXTERNAL MODULE: ../shared/src/locales/languages.ts + 6 modules
var languages = __webpack_require__(72314);
// EXTERNAL MODULE: ../shared/src/utils/index.ts + 1 modules
var utils = __webpack_require__(78115);
// EXTERNAL MODULE: ../shared/src/constants.tsx
var constants = __webpack_require__(48083);
;// CONCATENATED MODULE: ../shared/src/index.ts









/***/ }),

/***/ 91898:
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
        var ref;
        if (cache && !this.isExpired(cache)) return (ref = this.getResult(message.id)) !== null && ref !== void 0 ? ref : [];
        const innerMessagePromise = ()=>new Promise((resolve, reject)=>{
                message.notify = (info)=>{
                    if (info.done) resolve(info);
                    if (info.error) reject(info);
                };
                this.send(message);
            })
        ;
        await innerMessagePromise();
        var ref1;
        return (ref1 = this.getResult(message.id)) !== null && ref1 !== void 0 ? ref1 : [];
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
            var ref;
            const dataInPool = (ref = itemInPoll === null || itemInPoll === void 0 ? void 0 : itemInPoll.data) !== null && ref !== void 0 ? ref : [];
            const patchData = [
                ...dataInPool,
                ...results !== null && results !== void 0 ? results : []
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
 true ? 'wss://hyper-proxy.r2d2.to' : 0;
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
    const socket = new WebSocket(endPoint !== null && endPoint !== void 0 ? endPoint : SOCKET_POINT);
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
    const socket = await getWebSocketInstance(SOCKET_POINT !== null && SOCKET_POINT !== void 0 ? SOCKET_POINT : endPoint);
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

/***/ 22229:
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
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83317);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88486);
/* harmony import */ var _assets_chains_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2545);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24403);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);






function isChainIdValid(chainId, allowTestnet = false) {
    const chainDetailed = getChainDetailed(chainId);
    return !!getNetworkTypeFromChainId(chainId) && ((chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) === 'mainnet' || allowTestnet);
}
function isChainIdMainnet(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) === 'mainnet';
}
function isEIP1559Supported(chainId) {
    var ref;
    var ref1;
    const features = (ref1 = (ref = getChainDetailed(chainId)) === null || ref === void 0 ? void 0 : ref.features) !== null && ref1 !== void 0 ? ref1 : [];
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
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.name) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainShortName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.shortName) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainFullName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.fullName) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainIdFromName(name) {
    if (!name) return;
    var _fullName;
    const chainDetailed = _assets_chains_json__WEBPACK_IMPORTED_MODULE_2__.find((x)=>[
            x.chain,
            x.network,
            x.name,
            x.shortName,
            (_fullName = x.fullName) !== null && _fullName !== void 0 ? _fullName : ''
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
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Aurora */ .td.Aurora]: _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora
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
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Optimistic */ .td.Optimistic]: 'Optimistic'
};
function getNetworkTypeFromChainId(chainId, value1) {
    const chainDetailed = getChainDetailed(chainId);
    const entry = Object.entries(chainNameMap).find(([_, value])=>{
        if (value === (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.chain)) return true;
        return false;
    });
    if (value1) return entry === null || entry === void 0 ? void 0 : entry[1];
    return entry === null || entry === void 0 ? void 0 : entry[0];
}
function getChainFromChainId(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.chain;
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