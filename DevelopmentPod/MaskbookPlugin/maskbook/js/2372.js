"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2372],{

/***/ 49959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ZRX_AFFILIATE_ADDRESS),
/* harmony export */   "q": () => (/* binding */ ZRX_BASE_URL)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72499);

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
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Harmony */ .td.Harmony]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Conflux */ .td.Conflux]: ''
};
const ZRX_AFFILIATE_ADDRESS = '0x934B510D4C9103E6a87AEf13b816fb080286D649';


/***/ }),

/***/ 69461:
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

/***/ 33274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ DEFIKINGDOMS_CUSTOM_BASES),
/* harmony export */   "b": () => (/* binding */ DEFIKINGDOMS_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const DEFIKINGDOMS_CUSTOM_BASES = {};
const DEFIKINGDOMS_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .JEWEL */ .aV
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]
    )
};


/***/ }),

/***/ 7294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ MDEX_CUSTOM_BASES),
/* harmony export */   "R": () => (/* binding */ MDEX_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

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

/***/ 50052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ OPENSWAP_CUSTOM_BASES),
/* harmony export */   "v": () => (/* binding */ OPENSWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const OPENSWAP_CUSTOM_BASES = {};
const OPENSWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .OPENX */ .Rb,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]
    )
};


/***/ }),

/***/ 9712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ PANCAKESWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "t": () => (/* binding */ PANCAKESWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

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

/***/ 96728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ PANGOLIN_CUSTOM_BASES),
/* harmony export */   "h": () => (/* binding */ PANGOLIN_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

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

/***/ 7214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ QUICKSWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "j": () => (/* binding */ QUICKSWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

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

/***/ 53331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ SASHIMISWAP_CUSTOM_BASES),
/* harmony export */   "y": () => (/* binding */ SASHIMISWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

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

/***/ 85394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SUSHISWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "v": () => (/* binding */ SUSHISWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

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
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]
    )
};


/***/ }),

/***/ 58864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bq": () => (/* binding */ SLIPPAGE_MIN),
/* harmony export */   "IS": () => (/* binding */ ONE_BIPS),
/* harmony export */   "Nd": () => (/* binding */ SLIPPAGE_DEFAULT),
/* harmony export */   "PM": () => (/* binding */ BIPS_BASE),
/* harmony export */   "Q9": () => (/* binding */ SLIPPAGE_MAX),
/* harmony export */   "ag": () => (/* binding */ DEFAULT_TRANSACTION_DEADLINE),
/* harmony export */   "rI": () => (/* binding */ MINIMUM_AMOUNT),
/* harmony export */   "rV": () => (/* binding */ L2_TRANSACTION_DEADLINE)
/* harmony export */ });
/* unused harmony exports PRICE_IMPACT_LOW, PRICE_IMPACT_MEDIUM, PRICE_IMPACT_HIGH, PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN, PRICE_IMPACT_NON_EXPERT_BLOCKED */
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67938);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);


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

/***/ 34103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ TRADERJOE_BASE_AGAINST_TOKENS),
/* harmony export */   "b": () => (/* binding */ TRADERJOE_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

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

/***/ 35675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ TRISOLARIS_CUSTOM_BASES),
/* harmony export */   "m": () => (/* binding */ TRISOLARIS_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

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

/***/ 18627:
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
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72499);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74404);
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

/***/ 18188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ VENOMSWAP_CUSTOM_BASES),
/* harmony export */   "j": () => (/* binding */ VENOMSWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const VENOMSWAP_CUSTOM_BASES = {};
const VENOMSWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .VIPER */ .qN,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]
    )
};


/***/ }),

/***/ 82487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ WANNASWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "z": () => (/* binding */ WANNASWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

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

/***/ 58248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateSocialNetworkUIInner": () => (/* binding */ activateSocialNetworkUIInner),
/* harmony export */   "activatedSocialNetworkUI": () => (/* binding */ activatedSocialNetworkUI),
/* harmony export */   "globalUIState": () => (/* binding */ globalUIState),
/* harmony export */   "loadSocialNetworkUI": () => (/* binding */ loadSocialNetworkUI),
/* harmony export */   "loadSocialNetworkUISync": () => (/* binding */ loadSocialNetworkUISync),
/* harmony export */   "loadSocialNetworkUIs": () => (/* binding */ loadSocialNetworkUIs)
/* harmony export */ });
/* harmony import */ var _utils_debug_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27716);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78778);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94670);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5903);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44451);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20778);
/* harmony import */ var _social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1250);
/* harmony import */ var _plugin_infra_host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22180);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20940);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93455);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46123);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77818);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66525);














const definedSocialNetworkUIsResolved = new Map();
let activatedSocialNetworkUI = {
    automation: {},
    collecting: {},
    customization: {},
    configuration: {},
    init: ()=>{
        throw new Error();
    },
    injection: {},
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_12__/* .SocialNetworkEnum.Unknown */ .Gq.Unknown,
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EnhanceableSite.Localhost */ .Jk.Localhost,
    shouldActivate: ()=>false
    ,
    utils: {
        createPostContext: null
    },
    notReadyForProduction: true,
    declarativePermissions: {
        origins: []
    }
};
let globalUIState = {};
async function activateSocialNetworkUIInner(ui_deferred) {
    (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.assertNotEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.Environment.ManifestBackground);
    console.log('Activating provider', ui_deferred.networkIdentifier);
    const ui = activatedSocialNetworkUI = await loadSocialNetworkUI(ui_deferred.networkIdentifier);
    _masknet_shared__WEBPACK_IMPORTED_MODULE_11__/* .sharedUINetworkIdentifier.value */ .Xr.value = ui_deferred.networkIdentifier;
    if (ui.customization.sharedComponentOverwrite) {
        _masknet_shared__WEBPACK_IMPORTED_MODULE_11__/* .sharedUIComponentOverwrite.value */ .vU.value = ui.customization.sharedComponentOverwrite;
    }
    console.log('Provider activated. You can access it by globalThis.ui', ui);
    Object.assign(globalThis, {
        ui
    });
    const abort1 = new AbortController();
    const { signal: signal1  } = abort1;
    if (false) {}
    await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_10__/* .waitDocumentReadyState */ .uL)('interactive');
    i18nOverwrite();
    globalUIState = await ui.init(signal1);
    ui.customization.paletteMode?.start(signal1);
    startIntermediateSetupGuide();
    $unknownIdentityResolution();
    ui.collecting.postsProvider?.start(signal1);
    startPostListener();
    ui.collecting.currentVisitingIdentityProvider?.start(signal1);
    ui.injection.pageInspector?.(signal1);
    if (_shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.toolbox_enabled */ .vU.toolbox_enabled) {
        ui.injection.toolbox?.(signal1, 'wallet');
        ui.injection.toolbox?.(signal1, 'application');
    }
    ui.injection.newPostComposition?.start?.(signal1);
    ui.injection.searchResult?.(signal1);
    ui.injection.userBadge?.(signal1);
    ui.injection.profileTab?.(signal1);
    ui.injection.profileTabContent?.(signal1);
    ui.injection.userAvatar?.(signal1);
    ui.injection.profileAvatar?.(signal1);
    ui.injection.profileTip?.(signal1);
    ui.injection.enhancedProfileNFTAvatar?.(signal1);
    ui.injection.openNFTAvatar?.(signal1);
    ui.injection.postAndReplyNFTAvatar?.(signal1);
    ui.injection.avatarClipNFT?.(signal1);
    // Update user avatar
    ui.collecting.currentVisitingIdentityProvider?.recognized.addListener((ref)=>{
        if (!(ref.avatar && ref.identifier)) return;
        _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Identity.updateProfileInfo */ .ZP.Identity.updateProfileInfo(ref.identifier, {
            avatarURL: ref.avatar,
            nickname: ref.nickname
        });
        const currentProfile = (0,_social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_6__/* .getCurrentIdentifier */ .T)();
        if (currentProfile?.linkedPersona) {
            _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Identity.createNewRelation */ .ZP.Identity.createNewRelation(ref.identifier, currentProfile.linkedPersona);
        }
    });
    (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_5__/* .startPluginSNSAdaptor */ .D4)((0,_social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_6__/* .getCurrentSNSNetwork */ .G)(ui.networkIdentifier), (0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_7__/* .createPluginHost */ .R)(signal1, (pluginID, signal)=>{
        const empty = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.ValueRef(undefined);
        const lastRecognizedSub = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createSubscriptionFromValueRef */ ._H)(ui.collecting.identityProvider?.recognized || empty, signal);
        const currentVisitingSub = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createSubscriptionFromValueRef */ ._H)(ui.collecting.currentVisitingIdentityProvider?.recognized || empty, signal);
        return {
            ...(0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_7__/* .createSharedContext */ .y)(pluginID, signal),
            lastRecognizedProfile: lastRecognizedSub,
            currentVisitingProfile: currentVisitingSub
        };
    }));
    (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .setupShadowRootPortal */ .Vc)();
    function i18nOverwrite() {
        const i18n = ui.customization.i18nOverwrite || {};
        for (const namespace of Object.keys(i18n)){
            const ns = i18n[namespace];
            for (const i18nKey of Object.keys(ns)){
                const pair = i18n[namespace][i18nKey];
                for (const language of Object.keys(pair)){
                    const value = pair[language];
                    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .i18NextInstance.addResource */ .BV.addResource(language, namespace, i18nKey, value);
                }
            }
        }
    }
    function $unknownIdentityResolution() {
        const provider = ui.collecting.identityProvider;
        if (!provider) return;
        provider.start(signal1);
        provider.recognized.addListener((newValue, oldValue)=>{
            if (document.visibilityState === 'hidden') return;
            if (newValue.identifier === oldValue.identifier) return;
            if (!newValue.identifier) return;
            _utils__WEBPACK_IMPORTED_MODULE_9__/* .MaskMessages.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage */ .ql.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage(newValue.identifier);
        });
        if (provider.hasDeprecatedPlaceholderName) {
            provider.recognized.addListener((id)=>{
                if (signal1.aborted) return;
                if (!id.identifier) return;
                _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Identity.resolveUnknownLegacyIdentity */ .ZP.Identity.resolveUnknownLegacyIdentity(id.identifier);
            });
        }
    }
    function startPostListener() {
        const posts = ui.collecting.postsProvider?.posts;
        if (!posts) return;
        const abortSignals = new WeakMap();
        posts.event.on('set', async (key, value)=>{
            await unmount(key);
            const abort = new AbortController();
            signal1.addEventListener('abort', ()=>abort.abort()
            );
            abortSignals.set(key, abort);
            const { signal: postSignal  } = abort;
            ui.injection.enhancedPostRenderer?.(postSignal, value);
            ui.injection.postInspector?.(postSignal, value);
            ui.injection.postActions?.(postSignal, value);
            ui.injection.commentComposition?.compositionBox(postSignal, value);
            ui.injection.commentComposition?.commentInspector(postSignal, value);
        });
        posts.event.on('delete', unmount);
        function unmount(key) {
            if (!abortSignals.has(key)) return;
            abortSignals.get(key).abort();
            // AbortSignal need an event loop
            // unmount a React root need another one.
            // let's guess a number that the React root will unmount.
            return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_10__/* .delay */ .gw)(16 * 3);
        }
    }
    function startIntermediateSetupGuide() {
        const network = ui.networkIdentifier;
        const id1 = _settings_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentSetupGuideStatus */ .AI[network].value;
        let started = false;
        const onStatusUpdate = (id)=>{
            const { persona , status  } = JSON.parse(id || '{}');
            if (persona && status && !started) {
                started = true;
                ui.injection.setupWizard?.(signal1, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ECKeyIdentifier.from */ .ob.from(persona).unwrap());
            }
        };
        _settings_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentSetupGuideStatus */ .AI[network].addListener(onStatusUpdate);
        _settings_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentSetupGuideStatus */ .AI[network].readyPromise.then(onStatusUpdate);
        onStatusUpdate(id1);
    }
}
async function loadSocialNetworkUIs() {
    const defines = [
        ..._define__WEBPACK_IMPORTED_MODULE_8__/* .definedSocialNetworkUIs.values */ .LB.values()
    ].map(async (x)=>x.load()
    );
    const uis = (await Promise.all(defines)).map((x)=>x.default
    );
    if (!defines) throw new Error('SNS adaptor load failed');
    for (const ui of uis){
        definedSocialNetworkUIsResolved.set(ui.networkIdentifier, ui);
    }
    return uis;
}
async function loadSocialNetworkUI(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    const define = _define__WEBPACK_IMPORTED_MODULE_8__/* .definedSocialNetworkUIs.get */ .LB.get(identifier);
    if (!define) throw new Error('SNS adaptor not found');
    const ui1 = (await define.load()).default;
    definedSocialNetworkUIsResolved.set(identifier, ui1);
    if (false) {}
    return ui1;
}
function loadSocialNetworkUISync(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    return null;
}


/***/ }),

/***/ 97926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useI18N),
/* harmony export */   "Z": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43133);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60718);


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

/***/ 37500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ createPluginMessage)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Create a plugin message emitter
 * @param pluginID The plugin ID
 *
 * @example
 * export const MyPluginMessage = createPluginMessage(PLUGIN_ID)
 */ function createPluginMessage(pluginID, serializer) {
    const domain = '@plugin/' + pluginID;
    if (cache.has(domain)) return cache.get(domain);
    const messageCenter = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.WebExtensionMessage({
        domain
    });
    const events = messageCenter.events;
    if (serializer) messageCenter.serialization = serializer;
    cache.set(domain, events);
    return events;
}
const cache = new Map();


/***/ }),

/***/ 73179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ createPluginRPCGenerator),
/* harmony export */   "V": () => (/* binding */ createPluginRPC)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17889);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);



const log = {
    requestReplay: true,
    type: 'pretty'
};
function createPluginRPC(key, impl, message, /** Please set this to true if your implementation is a Proxy. */ exoticImplementation) {
    const isBackground = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.Environment.ManifestBackground);
    return (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)((exoticImplementation ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getLocalImplementationExotic */ .kO : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getLocalImplementation */ .Bb)(isBackground, `Plugin(${key})`, impl, message), {
        key,
        channel: message.bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}
function createPluginRPCGenerator(key, impl, message) {
    const isBackground = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.Environment.ManifestBackground);
    return (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getLocalImplementation */ .Bb)(isBackground, `Plugin(${key})`, impl, message), {
        channel: message.bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}


/***/ }),

/***/ 55437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dv": () => (/* binding */ FALSE),
/* harmony export */   "LZ": () => (/* binding */ EMPTY_ARRAY),
/* harmony export */   "i_": () => (/* binding */ UNDEFINED)
/* harmony export */ });
/* unused harmony exports ZERO, EMPTY_STRING, EMPTY_OBJECT, TRUE, NULL */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);

const ZERO = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(0);
const UNDEFINED = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(undefined);
const EMPTY_STRING = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)('');
const EMPTY_ARRAY = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)([]);
const EMPTY_OBJECT = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)({});
const TRUE = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(true);
const FALSE = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(false);
const NULL = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(null);


/***/ }),

/***/ 29075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainIdSupport */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);


function useChainIdSupport(pluginID, expectedChainId, feature) {
    const chainId = useChainId(pluginID, expectedChainId);
    const { Others  } = useWeb3State(pluginID);
    return Others?.chainResolver.isSupport?.(chainId, feature) ?? false;
}


/***/ }),

/***/ 68244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useTokenSchema */
/* harmony import */ var _entry_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50719);


function useTokenSchema(pluginID, address, options) {
    const connection = useWeb3Connection(pluginID, options);
    return useAsyncRetry(async ()=>{
        if (!address) return;
        return connection?.getTokenSchema?.(address, options);
    }, [
        address
    ]);
}


/***/ }),

/***/ 10668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14257);
/* harmony import */ var _utils_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55437);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72128);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12368);





function useWallet(pluginID) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .m)(pluginID);
    const { Others , Wallet  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3State */ .d)(pluginID);
    const wallets = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Wallet?.wallets ?? _utils_subscription__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return account ? wallets.find((x)=>Others?.isSameAddress?.(x.address, account)
        ) ?? null : null;
    }, [
        account,
        wallets?.map((x)=>x.address.toLowerCase()
        ).join()
    ]);
}


/***/ }),

/***/ 50360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useWalletPrimary */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14257);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);
/* harmony import */ var _utils_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55437);



function useWalletPrimary(pluginID) {
    const { Wallet  } = useWeb3State(pluginID);
    return useSubscription(Wallet?.walletPrimary ?? NULL);
}


/***/ }),

/***/ 68033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24003);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43672);


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

/***/ 15938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D9": () => (/* binding */ usePopupCustomSnackbar)
/* harmony export */ });
/* unused harmony exports PopupSnackbarProvider, PopupSnackbarContent */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31490);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21784);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27466);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84432);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






const useStyles = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()(()=>({
        container: {
            width: '100%!important',
            maxWidth: '100%!important',
            top: '0!important',
            [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].wrapper */ .Z.wrapper}`]: {
                padding: '0 !important'
            }
        },
        content: {
            width: '100vw',
            padding: '8px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 14,
            lineHeight: '18px'
        },
        title: {
            fontSize: 14,
            lineHeight: '18px'
        },
        success: {
            background: 'rgba(61, 194, 51, 0.5)',
            color: '#ffffff'
        },
        error: {
            background: 'rgba(255, 53, 69, 0.5)',
            color: '#ffffff'
        },
        default: {},
        warning: {},
        info: {}
    })
);
const PopupSnackbarProvider = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ ...rest })=>{
    const ref = useRef(null);
    const { classes  } = useStyles();
    return /*#__PURE__*/ _jsx(SnackbarProvider, {
        ref: ref,
        maxSnack: 1,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        classes: {
            containerRoot: classes.container,
            variantSuccess: classes.success,
            variantError: classes.error
        },
        ...rest
    });
})));
const PopupSnackbarContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_2__/* .SnackbarContent */ .No, {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.content, classes[props.variant]),
        ref: ref,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            className: classes.title,
            children: props.title
        })
    }, props.id);
});
function usePopupCustomSnackbar() {
    const { enqueueSnackbar , closeSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_2__/* .useSnackbar */ .Ds)();
    const showSnackbar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((text, options = {
        variant: 'success',
        autoHideDuration: 2000
    })=>{
        const { processing , message , variant , ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PopupSnackbarContent, {
                    id: key,
                    title: title,
                    variant: variant
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

/***/ 6405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$q": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.$q),
/* harmony export */   "BD": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.BD),
/* harmony export */   "Ck": () => (/* reexport safe */ _function__WEBPACK_IMPORTED_MODULE_8__.C),
/* harmony export */   "DC": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "FG": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.FG),
/* harmony export */   "FH": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.FH),
/* harmony export */   "FI": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.FI),
/* harmony export */   "Fr": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.Fr),
/* harmony export */   "GN": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.GN),
/* harmony export */   "J": () => (/* reexport safe */ _pagination__WEBPACK_IMPORTED_MODULE_7__.T1),
/* harmony export */   "KH": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.KH),
/* harmony export */   "Km": () => (/* reexport safe */ _function__WEBPACK_IMPORTED_MODULE_8__.K),
/* harmony export */   "LI": () => (/* reexport safe */ _pagination__WEBPACK_IMPORTED_MODULE_7__.LI),
/* harmony export */   "P$": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.P$),
/* harmony export */   "PW": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.PW),
/* harmony export */   "Qv": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.Qv),
/* harmony export */   "RV": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.RV),
/* harmony export */   "SI": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.SI),
/* harmony export */   "SL": () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_2__.SL),
/* harmony export */   "T1": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.T1),
/* harmony export */   "Vk": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.Vk),
/* harmony export */   "Wr": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   "Xg": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.Xg),
/* harmony export */   "Xi": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.Xi),
/* harmony export */   "az": () => (/* reexport safe */ _balance__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   "gT": () => (/* reexport safe */ _pagination__WEBPACK_IMPORTED_MODULE_7__.gT),
/* harmony export */   "h9": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.h9),
/* harmony export */   "iI": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.iI),
/* harmony export */   "iu": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.iu),
/* harmony export */   "mn": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.mn),
/* harmony export */   "pu": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.pu),
/* harmony export */   "rm": () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_2__.rm),
/* harmony export */   "ry": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.ry),
/* harmony export */   "sz": () => (/* reexport safe */ _pagination__WEBPACK_IMPORTED_MODULE_7__.sz),
/* harmony export */   "ti": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.ti),
/* harmony export */   "ux": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.ux),
/* harmony export */   "vs": () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_2__.vs),
/* harmony export */   "w5": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.w5),
/* harmony export */   "wA": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.wA),
/* harmony export */   "xE": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.xE),
/* harmony export */   "xG": () => (/* reexport safe */ _currency__WEBPACK_IMPORTED_MODULE_3__.x),
/* harmony export */   "xP": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.xP)
/* harmony export */ });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77362);
/* harmony import */ var _balance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64469);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78182);
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73403);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75387);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13763);
/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31257);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60668);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40485);












/***/ })

}]);