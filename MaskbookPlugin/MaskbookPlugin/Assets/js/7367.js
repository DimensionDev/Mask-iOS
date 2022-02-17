"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7367],{

/***/ 82785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ 87591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hM": () => (/* binding */ FileServicePluginID),
/* harmony export */   "ki": () => (/* binding */ META_KEY_1),
/* harmony export */   "lw": () => (/* binding */ META_KEY_2),
/* harmony export */   "Tb": () => (/* binding */ MAX_FILE_SIZE),
/* harmony export */   "_$": () => (/* binding */ landing),
/* harmony export */   "Gm": () => (/* binding */ signing),
/* harmony export */   "oC": () => (/* binding */ mesonPrefix),
/* harmony export */   "er": () => (/* binding */ FileRouter)
/* harmony export */ });
const FileServicePluginID = 'com.maskbook.fileservice';
const META_KEY_1 = 'com.maskbook.fileservice:1';
const META_KEY_2 = 'com.maskbook.fileservice:2';
const MAX_FILE_SIZE = 10485760 // = 10 MiB
;
const landing = 'https://files.r2d2.to/partner/arweave/landing-page.html';
const signing = 'https://service.r2d2.to/arweave-remote-signing';
const mesonPrefix = 'https://coldcdn.com/api/cdn/9m5pde';
var FileRouter;
(function(FileRouter1) {
    FileRouter1["upload"] = '/upload';
    FileRouter1["uploading"] = '/uploading';
    FileRouter1["uploaded"] = '/uploaded';
})(FileRouter || (FileRouter = {
}));


/***/ }),

/***/ 35238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ZRX_BASE_URL),
/* harmony export */   "k": () => (/* binding */ ZRX_AFFILIATE_ADDRESS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);

const ZRX_BASE_URL = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Ethereum */ .tds.Ethereum]: 'https://api.0x.org',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Binance */ .tds.Binance]: 'https://bsc.api.0x.org/',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Polygon */ .tds.Polygon]: 'https://polygon.api.0x.org/',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Arbitrum */ .tds.Arbitrum]: ''
};
const ZRX_AFFILIATE_ADDRESS = '0x934B510D4C9103E6a87AEf13b816fb080286D649';


/***/ }),

/***/ 70287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L4": () => (/* binding */ BALANCER_SOR_GAS_PRICE),
/* harmony export */   "r2": () => (/* binding */ BALANCER_MAX_NO_POOLS),
/* harmony export */   "qT": () => (/* binding */ BALANCER_SWAP_TYPE)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

// gasPrice is used by SOR as a factor to determine how many pools to swap against.
// i.e. higher cost means more costly to trade against lots of different pools.
// Can be changed in future using SOR.gasPrice = newPrice
const BALANCER_SOR_GAS_PRICE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())('1e11');
// This determines the max no of pools the SOR will use to swap.
const BALANCER_MAX_NO_POOLS = 4;
var BALANCER_SWAP_TYPE;
(function(BALANCER_SWAP_TYPE1) {
    BALANCER_SWAP_TYPE1["EXACT_IN"] = 'swapExactIn';
    BALANCER_SWAP_TYPE1["EXACT_OUT"] = 'swapExactOut';
})(BALANCER_SWAP_TYPE || (BALANCER_SWAP_TYPE = {
}));


/***/ }),

/***/ 45088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DODO_BASE_URL),
/* harmony export */   "b": () => (/* binding */ networkNames)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);

const DODO_BASE_URL = 'https://dodo-route.dodoex.io';
const networkNames = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Ethereum */ .tds.Ethereum]: 'mainnet',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Binance */ .tds.Binance]: 'bsc-mainnet',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Polygon */ .tds.Polygon]: 'matic',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Arbitrum */ .tds.Arbitrum]: 'arbitrum'
};


/***/ }),

/***/ 87138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ PANCAKESWAP_CUSTOM_BASES),
/* harmony export */   "D": () => (/* binding */ PANCAKESWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43148);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const PANCAKESWAP_CUSTOM_BASES = {
};
const PANCAKESWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH_ONLY */ .Nu,
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .BUSD */ .lz,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .BTCB */ .nB,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .UST */ .bi,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .ETHER */ .c0
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]
    )
};


/***/ }),

/***/ 10775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ QUICKSWAP_CUSTOM_BASES),
/* harmony export */   "P": () => (/* binding */ QUICKSWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43148);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const QUICKSWAP_CUSTOM_BASES = {
};
const QUICKSWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH_ONLY */ .Nu,
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .QUICK */ .xZ,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .ETHER */ .c0,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .maUSDC */ .J6
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]
    )
};


/***/ }),

/***/ 40325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ SASHIMISWAP_CUSTOM_BASES),
/* harmony export */   "y": () => (/* binding */ SASHIMISWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43148);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const SASHIMISWAP_CUSTOM_BASES = {
};
const SASHIMISWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH_ONLY */ .Nu,
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .COMP */ .TP,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .MKR */ .Ti
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
    )
};


/***/ }),

/***/ 55870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ SUSHISWAP_CUSTOM_BASES),
/* harmony export */   "S": () => (/* binding */ SUSHISWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43148);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const SUSHISWAP_CUSTOM_BASES = {
};
const SUSHISWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH_ONLY */ .Nu,
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .RUNE */ .uj,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .NFTX */ .lK,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .STETH */ ._S
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
    ),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .MSKA */ .uz,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .MSKB */ .mW,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .MSKC */ .Xw
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]
    ),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]
    ),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .BUSD */ .lz,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .BTCB */ .nB
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]
    )
};


/***/ }),

/***/ 42848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QQ": () => (/* binding */ UNISWAP_CUSTOM_BASES),
/* harmony export */   "u7": () => (/* binding */ UNISWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "s9": () => (/* binding */ MAX_HOP),
/* harmony export */   "jg": () => (/* binding */ DEFAULT_MULTICALL_GAS_LIMIT),
/* harmony export */   "Ru": () => (/* binding */ BETTER_TRADE_LESS_HOPS_THRESHOLD),
/* harmony export */   "fI": () => (/* binding */ ZERO_PERCENT),
/* harmony export */   "yC": () => (/* binding */ ONE_HUNDRED_PERCENT)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59800);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24994);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsbi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43148);




/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const UNISWAP_CUSTOM_BASES = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: {
        [_trader__WEBPACK_IMPORTED_MODULE_3__/* .AMPL */ .s5[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet].address]: [
            _trader__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
            _trader__WEBPACK_IMPORTED_MODULE_3__/* .WETH */ .DX
        ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
        )
    }
};
const UNISWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_3__/* .WETH_ONLY */ .Nu,
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: [
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
    ),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]: [
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .MSKA */ .uz,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .MSKB */ .mW,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .MSKC */ .Xw
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]
    )
};
const MAX_HOP = 3;
const DEFAULT_MULTICALL_GAS_LIMIT = 2000000;
// used to ensure the user doesn't send so much ETH so they end up with <.01
const BETTER_TRADE_LESS_HOPS_THRESHOLD = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_1__.Percent(jsbi__WEBPACK_IMPORTED_MODULE_2___default().BigInt(50), jsbi__WEBPACK_IMPORTED_MODULE_2___default().BigInt(10000));
const ZERO_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_1__.Percent('0');
const ONE_HUNDRED_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_1__.Percent('1');


/***/ }),

/***/ 44737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ createContainer)
/* harmony export */ });
/* unused harmony export useContainer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


/***/ }),

/***/ 13790:
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Ethereum Mainnet","chainId":1,"fullName":"Ethereum","shortName":"eth","chain":"ETH","network":"mainnet","networkId":1,"nativeCurrency":{"name":"Ether","symbol":"ETH","decimals":18,"logoURI":"https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png"},"faucets":[],"features":["EIP1159"],"explorers":[{"name":"etherscan","url":"https://etherscan.io","standard":"EIP3091"}],"infoURL":"https://ethereum.org"},{"name":"Ethereum Testnet Ropsten","chainId":3,"fullName":"Ethereum","shortName":"rop","chain":"ETH","network":"ropsten","networkId":3,"nativeCurrency":{"name":"Ropsten Ether","symbol":"ROP","decimals":18},"faucets":["https://faucet.ropsten.be?${ADDRESS}"],"features":["EIP1159"],"explorers":[{"name":"etherscan","url":"https://ropsten.etherscan.io","standard":"EIP3091"}],"infoURL":"https://github.com/ethereum/ropsten"},{"name":"Ethereum Testnet Rinkeby","chainId":4,"fullName":"Ethereum","shortName":"rin","chain":"ETH","network":"rinkeby","networkId":4,"nativeCurrency":{"name":"Rinkeby Ether","symbol":"RIN","decimals":18},"faucets":["https://faucet.rinkeby.io"],"features":[],"explorers":[{"name":"etherscan","url":"https://rinkeby.etherscan.io","standard":"EIP3091"}],"infoURL":"https://www.rinkeby.io"},{"name":"Ethereum Testnet Kovan","chainId":42,"fullName":"Ethereum","shortName":"kov","chain":"ETH","network":"kovan","networkId":42,"nativeCurrency":{"name":"Kovan Ether","symbol":"KOV","decimals":18},"faucets":["https://faucet.kovan.network","https://gitter.im/kovan-testnet/faucet"],"features":[],"explorers":[{"name":"etherscan","url":"https://kovan.etherscan.io","standard":"EIP3091"}],"infoURL":"https://kovan-testnet.github.io/website"},{"name":"Ethereum Testnet Görli","chainId":5,"fullName":"Ethereum","shortName":"gor","chain":"ETH","network":"goerli","networkId":5,"nativeCurrency":{"name":"Görli Ether","symbol":"GOR","decimals":18},"faucets":["https://goerli-faucet.slock.it/?address=${ADDRESS}","https://faucet.goerli.mudit.blog"],"features":[],"explorers":[{"name":"etherscan","url":"https://goerli.etherscan.io","standard":"EIP3091"}],"infoURL":"https://goerli.net/#about"},{"name":"Binance Smart Chain Mainnet","chainId":56,"fullName":"Binance","shortName":"bnb","chain":"BSC","network":"mainnet","networkId":56,"nativeCurrency":{"name":"Binance Chain Native Token","symbol":"BNB","decimals":18,"logoURI":"https://static.debank.com/image/bsc_token/logo_url/bsc/8bfdeaa46fe9be8f5cd43a53b8d1eea1.png"},"faucets":[],"features":[],"explorers":[{"name":"bscscan","url":"https://bscscan.com","standard":"EIP3091"}],"infoURL":"https://www.binance.org"},{"name":"Binance Smart Chain Testnet","chainId":97,"fullName":"Binance","shortName":"bnbt","chain":"BSC","network":"chapel","networkId":97,"nativeCurrency":{"name":"Binance Chain Native Token","symbol":"tBNB","decimals":18},"faucets":["https://testnet.binance.org/faucet-smart"],"features":[],"explorers":[{"name":"bscscan-testnet","url":"https://testnet.bscscan.com","standard":"EIP3091"}],"infoURL":"https://testnet.binance.org/"},{"name":"Matic Mainnet","chainId":137,"fullName":"Polygon","shortName":"matic","chain":"Matic","network":"mainnet","networkId":137,"nativeCurrency":{"name":"Matic","symbol":"MATIC","decimals":18,"logoURI":"https://static.debank.com/image/matic_token/logo_url/matic/e5a8a2860ba5cf740a474dcab796dc63.png"},"faucets":[],"features":[],"explorers":[{"name":"matic","url":"https://polygonscan.com","standard":"EIP3091"}],"infoURL":"https://matic.network/"},{"name":"Matic Testnet Mumbai","chainId":80001,"fullName":"Polygon","shortName":"maticmum","chain":"Matic","network":"testnet","networkId":80001,"nativeCurrency":{"name":"Matic","symbol":"tMATIC","decimals":18},"faucets":["https://faucet.matic.network/"],"features":[],"explorers":[{"name":"matic","url":"https://explorer-mumbai.maticvigil.com","standard":"EIP3091"}],"infoURL":"https://matic.network/"},{"name":"Arbitrum One","chainId":42161,"fullName":"Arbitrum","shortName":"arb","chain":"Arbitrum","network":"mainnet","networkId":42161,"nativeCurrency":{"name":"Arbitrum Ether","symbol":"ARETH","decimals":18,"logoURI":"https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png"},"faucets":[],"features":[],"explorers":[{"name":"arbitrum","url":"https://explorer.arbitrum.io","standard":"EIP3091"}],"infoURL":"https://arbitrum.io"},{"name":"Arbitrum Testnet Rinkeby","chainId":421611,"fullName":"Arbitrum","shortName":"arb-rinkeby","chain":"Arbitrum","network":"rinkeby","networkId":421611,"nativeCurrency":{"name":"Arbitrum Rinkeby Ether","symbol":"ARETH","decimals":18},"faucets":[],"features":[],"explorers":[{"name":"arbitrum-rinkeby","url":"https://rinkeby-explorer.arbitrum.io","standard":"EIP3091"}],"infoURL":"https://arbitrum.io"},{"name":"Expanse Network","chain":"EXP","network":"mainnet","rpc":["https://node.expanse.tech"],"faucets":[],"features":[],"nativeCurrency":{"name":"Expanse Network Ether","symbol":"EXP","decimals":18},"infoURL":"https://expanse.tech","shortName":"exp","chainId":2,"networkId":1,"slip44":40},{"name":"ThaiChain","chain":"TCH","network":"mainnet","rpc":["https://rpc.dome.cloud"],"faucets":[],"features":[],"nativeCurrency":{"name":"ThaiChain Ether","symbol":"TCH","decimals":18},"infoURL":"https://thaichain.io","shortName":"tch","chainId":7,"networkId":7},{"name":"Ubiq Network Mainnet","chain":"UBQ","network":"mainnet","rpc":["https://rpc.octano.dev","https://pyrus2.ubiqscan.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ubiq Ether","symbol":"UBQ","decimals":18},"infoURL":"https://ubiqsmart.com","shortName":"ubq","chainId":8,"networkId":88,"slip44":108},{"name":"Ubiq Network Testnet","chain":"UBQ","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Ubiq Testnet Ether","symbol":"TUBQ","decimals":18},"infoURL":"https://ethersocial.org","shortName":"tubq","chainId":9,"networkId":2},{"name":"Optimistic Ethereum","chain":"OPT","network":"mainnet","rpc":["https://mainnet.optimism.io/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ether","symbol":"OETH","decimals":18},"infoURL":"https://optimism.io","shortName":"oeth","chainId":10,"networkId":10},{"name":"Metadium Mainnet","chain":"META","network":"mainnet","rpc":["https://api.metadium.com/prod"],"faucets":[],"features":[],"nativeCurrency":{"name":"Metadium Mainnet Ether","symbol":"META","decimals":18},"infoURL":"https://metadium.com","shortName":"meta","chainId":11,"networkId":11,"slip44":916},{"name":"Metadium Testnet","chain":"META","network":"testnet","rpc":["https://api.metadium.com/dev"],"faucets":[],"features":[],"nativeCurrency":{"name":"Metadium Testnet Ether","symbol":"KAL","decimals":18},"infoURL":"https://metadium.com","shortName":"kal","chainId":12,"networkId":12},{"name":"Diode Testnet Staging","chain":"DIODE","network":"testnet","rpc":["https://staging.diode.io:8443/","wss://staging.diode.io:8443/ws"],"faucets":[],"features":[],"nativeCurrency":{"name":"Staging Diodes","symbol":"sDIODE","decimals":18},"infoURL":"https://diode.io/staging","shortName":"dstg","chainId":13,"networkId":13},{"name":"Flare Mainnet","chain":"FLR","network":"flare","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Spark","symbol":"FLR","decimals":18},"infoURL":"https://flare.xyz","shortName":"flr","chainId":14,"networkId":14},{"name":"Diode Prenet","chain":"DIODE","network":"mainnet","rpc":["https://prenet.diode.io:8443/","wss://prenet.diode.io:8443/ws"],"faucets":[],"features":[],"nativeCurrency":{"name":"Diodes","symbol":"DIODE","decimals":18},"infoURL":"https://diode.io/prenet","shortName":"diode","chainId":15,"networkId":15},{"name":"Flare Testnet Coston","chain":"FLR","network":"coston","rpc":[],"faucets":["https://faucet.towolabs.com"],"features":[],"nativeCurrency":{"name":"Coston Spark","symbol":"CFLR","decimals":18},"infoURL":"https://github.com/flare-eng/coston","shortName":"cflr","chainId":16,"networkId":16},{"name":"ThaiChain 2.0 ThaiFi","chain":"TCH","network":"thaifi","rpc":["https://rpc.thaifi.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Thaifi Ether","symbol":"TFI","decimals":18},"infoURL":"https://exp.thaifi.com","shortName":"tfi","chainId":17,"networkId":17},{"name":"ThunderCore Testnet","chain":"TST","network":"testnet","rpc":["https://testnet-rpc.thundercore.com"],"faucets":["https://faucet-testnet.thundercore.com"],"features":[],"nativeCurrency":{"name":"ThunderCore Testnet Ether","symbol":"TST","decimals":18},"infoURL":"https://thundercore.com","shortName":"TST","chainId":18,"networkId":18},{"name":"ELA-ETH-Sidechain Mainnet","chain":"ELA-ETH","network":"mainnet","rpc":["https://mainrpc.elaeth.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Elastos","symbol":"ELA","decimals":18},"infoURL":"https://www.elastos.org/","shortName":"elaeth","chainId":20,"networkId":20},{"name":"ELA-ETH-Sidechain Testnet","chain":"ELA-ETH","network":"testnet","rpc":["https://rpc.elaeth.io"],"faucets":["https://faucet.elaeth.io/"],"features":[],"nativeCurrency":{"name":"Elastos","symbol":"tELA","decimals":18},"infoURL":"https://elaeth.io/","shortName":"elaetht","chainId":21,"networkId":21},{"name":"ELA-DID-Sidechain Mainnet","chain":"ELA-ETH","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Elastos","symbol":"ELA","decimals":18},"infoURL":"https://www.elastos.org/","shortName":"eladid","chainId":22,"networkId":22},{"name":"ELA-DID-Sidechain Testnet","chain":"ELA-ETH","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Elastos","symbol":"tELA","decimals":18},"infoURL":"https://elaeth.io/","shortName":"eladidt","chainId":23,"networkId":23},{"name":"RSK Mainnet","chain":"RSK","network":"mainnet","rpc":["https://public-node.rsk.co","https://mycrypto.rsk.co"],"faucets":[],"features":[],"nativeCurrency":{"name":"RSK Mainnet Ether","symbol":"RBTC","decimals":18},"infoURL":"https://rsk.co","shortName":"rsk","chainId":30,"networkId":30,"slip44":137},{"name":"RSK Testnet","chain":"RSK","network":"testnet","rpc":["https://public-node.testnet.rsk.co","https://mycrypto.testnet.rsk.co"],"faucets":["https://faucet.testnet.rsk.co"],"features":[],"nativeCurrency":{"name":"RSK Testnet Ether","symbol":"tRBTC","decimals":18},"infoURL":"https://rsk.co","shortName":"trsk","chainId":31,"networkId":31},{"name":"GoodData Testnet","chain":"GooD","network":"testnet","rpc":["https://test2.goodata.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"GoodData Testnet Ether","symbol":"GooD","decimals":18},"infoURL":"https://www.goodata.org","shortName":"GooDT","chainId":32,"networkId":32},{"name":"GoodData Mainnet","chain":"GooD","network":"mainnet","rpc":["https://rpc.goodata.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"GoodData Mainnet Ether","symbol":"GooD","decimals":18},"infoURL":"https://www.goodata.org","shortName":"GooD","chainId":33,"networkId":33},{"name":"TBWG Chain","chain":"TBWG","network":"mainnet","rpc":["https://rpc.tbwg.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"TBWG Ether","symbol":"TBG","decimals":18},"infoURL":"https://tbwg.io","shortName":"tbwg","chainId":35,"networkId":35},{"name":"Valorbit","chain":"VAL","network":"mainnet","rpc":["https://rpc.valorbit.com/v2"],"faucets":[],"features":[],"nativeCurrency":{"name":"Valorbit","symbol":"VAL","decimals":18},"infoURL":"https://valorbit.com","shortName":"val","chainId":38,"networkId":38,"slip44":538},{"name":"Telos EVM Mainnet","chain":"TLOS","network":"mainnet","rpc":["https://mainnet.telos.net/evm"],"faucets":[],"features":[],"nativeCurrency":{"name":"Telos","symbol":"TLOS","decimals":18},"infoURL":"https://telos.net","shortName":"Telos EVM","chainId":40,"networkId":40},{"name":"Telos EVM Testnet","chain":"TLOS","network":"testnet","rpc":["https://testnet.telos.net/evm"],"faucets":["https://app.telos.net/testnet/developers"],"features":[],"nativeCurrency":{"name":"Telos","symbol":"TLOS","decimals":18},"infoURL":"https://telos.net","shortName":"Telos EVM Testnet","chainId":41,"networkId":41},{"name":"Darwinia Pangolin Testnet","chain":"pangolin","network":"free testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Pangolin RING","symbol":"PRING","decimals":9},"infoURL":"https://darwinia.network/","shortName":"darwinia","chainId":43,"networkId":43},{"name":"Darwinia Crab Network","chain":"crab","network":"Crab network","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Crab Token","symbol":"CRING","decimals":9},"infoURL":"https://crab.network/","shortName":"crab","chainId":44,"networkId":44},{"name":"XinFin Network Mainnet","chain":"XDC","network":"mainnet","rpc":["https://rpc.xinfin.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"XinFin","symbol":"XDC","decimals":18},"infoURL":"https://xinfin.org","shortName":"xdc","chainId":50,"networkId":50},{"name":"XinFin Apothem Testnet","chain":"TXDC","network":"testnet","rpc":["https://rpc.apothem.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"XinFinTest","symbol":"TXDC","decimals":18},"infoURL":"https://xinfin.org","shortName":"TXDC","chainId":51,"networkId":51},{"name":"CoinEx Smart Chain Mainnet","chain":"CSC","network":"mainnet","rpc":["https://rpc-mainnet.coinex.net"],"faucets":[],"features":[],"nativeCurrency":{"name":"CoinEx Chain Native Token","symbol":"cet","decimals":18},"infoURL":"http://www.coinex.org/","shortName":"cet","chainId":52,"networkId":52},{"name":"CoinEx Smart Chain Testnet","chain":"CSC","network":"testnet","rpc":["https://rpc-testnet.coinex.net"],"faucets":[],"features":[],"nativeCurrency":{"name":"CoinEx Chain Test Native Token","symbol":"cett","decimals":18},"infoURL":"http://www.coinex.org/","shortName":"tcet","chainId":53,"networkId":53},{"name":"Ontology Mainnet","chain":"Ontology","network":"mainnet","rpc":["https://dappnode1.ont.io:20339","https://dappnode2.ont.io:20339","https://dappnode3.ont.io:20339","https://dappnode4.ont.io:20339"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONG","symbol":"ONG","decimals":9},"infoURL":"https://ont.io/","shortName":"Ontology Mainnet","chainId":58,"networkId":58,"explorers":[{"name":"explorer","url":"https://explorer.ont.io/","standard":"EIP3091"}]},{"name":"EOS Mainnet","chain":"EOS","network":"mainnet","rpc":["https://api.eosargentina.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"EOS","symbol":"EOS","decimals":18},"infoURL":"https://eoscommunity.org/","shortName":"EOS Mainnet","chainId":59,"networkId":59,"explorers":[{"name":"bloks","url":"https://api.eosargentina.io","standard":"EIP3091"}]},{"name":"GoChain","chain":"GO","network":"mainnet","rpc":["https://rpc.gochain.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"GoChain Ether","symbol":"GO","decimals":18},"infoURL":"https://gochain.io","shortName":"go","chainId":60,"networkId":60,"slip44":6060},{"name":"Ethereum Classic Mainnet","chain":"ETC","network":"mainnet","rpc":["https://ethereumclassic.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ethereum Classic Ether","symbol":"ETC","decimals":18},"infoURL":"https://ethereumclassic.org","shortName":"etc","chainId":61,"networkId":1,"slip44":61},{"name":"Ethereum Classic Testnet Morden","chain":"ETC","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Ethereum Classic Testnet Ether","symbol":"TETC","decimals":18},"infoURL":"https://ethereumclassic.org","shortName":"tetc","chainId":62,"networkId":2},{"name":"Ethereum Classic Testnet Mordor","chain":"ETC","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Mordor Classic Testnet Ether","symbol":"METC","decimals":18},"infoURL":"https://github.com/eth-classic/mordor/","shortName":"metc","chainId":63,"networkId":7},{"name":"Ellaism","chain":"ELLA","network":"mainnet","rpc":["https://jsonrpc.ellaism.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ellaism Ether","symbol":"ELLA","decimals":18},"infoURL":"https://ellaism.org","shortName":"ella","chainId":64,"networkId":64,"slip44":163},{"name":"OKExChain Testnet","chain":"okexchain","network":"testnet","rpc":["https://exchaintestrpc.okex.org"],"faucets":["https://www.okex.com/drawdex"],"features":[],"nativeCurrency":{"name":"OKExChain Global Utility Token in testnet","symbol":"OKT","decimals":18},"infoURL":"https://www.okex.com/okexchain","shortName":"tokt","chainId":65,"networkId":65,"explorers":[{"name":"OKLink","url":"https://www.oklink.com/okexchain-test","standard":"EIP3091"}]},{"name":"OKExChain Mainnet","chain":"okexchain","network":"mainnet","rpc":["https://exchainrpc.okex.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"OKExChain Global Utility Token","symbol":"OKT","decimals":18},"infoURL":"https://www.okex.com/okexchain","shortName":"okt","chainId":66,"networkId":66,"explorers":[{"name":"OKLink","url":"https://www.oklink.com/okexchain","standard":"EIP3091"}]},{"name":"DBChain Testnet","chain":"DBM","network":"testnet","rpc":["http://test-rpc.dbmbp.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"DBChain Testnet","symbol":"DBM","decimals":18},"infoURL":"http://test.dbmbp.com","shortName":"dbm","chainId":67,"networkId":67},{"name":"SoterOne Mainnet","chain":"SOTER","network":"mainnet","rpc":["https://rpc.soter.one"],"faucets":[],"features":[],"nativeCurrency":{"name":"SoterOne Mainnet Ether","symbol":"SOTER","decimals":18},"infoURL":"https://www.soterone.com","shortName":"SO1","chainId":68,"networkId":68},{"name":"Optimistic Ethereum Testnet Kovan","chain":"OPT","network":"kovan","rpc":["https://kovan.optimism.io/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Kovan Ether","symbol":"KOR","decimals":18},"infoURL":"https://optimism.io","shortName":"okov","chainId":69,"networkId":69},{"name":"Mix","chain":"MIX","network":"mainnet","rpc":["https://rpc2.mix-blockchain.org:8647"],"faucets":[],"features":[],"nativeCurrency":{"name":"Mix Ether","symbol":"MIX","decimals":18},"infoURL":"https://mix-blockchain.org","shortName":"mix","chainId":76,"networkId":76,"slip44":76},{"name":"POA Network Sokol","chain":"POA","network":"sokol","rpc":["https://sokol.poa.network","wss://sokol.poa.network/wss","ws://sokol.poa.network:8546"],"faucets":["https://faucet-sokol.herokuapp.com"],"features":[],"nativeCurrency":{"name":"POA Sokol Ether","symbol":"POA","decimals":18},"infoURL":"https://poa.network","shortName":"poa","chainId":77,"networkId":77},{"name":"PrimusChain mainnet","chain":"PC","network":"mainnet","rpc":["https://ethnode.primusmoney.com/mainnet"],"faucets":[],"features":[],"nativeCurrency":{"name":"Primus Ether","symbol":"PETH","decimals":18},"infoURL":"https://primusmoney.com","shortName":"primuschain","chainId":78,"networkId":78},{"name":"GeneChain","chain":"GeneChain","network":"mainnet","rpc":["https://rpc.genechain.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"RNA","symbol":"RNA","decimals":18},"infoURL":"https://scan.genechain.io/","shortName":"GeneChain","chainId":80,"networkId":80,"explorers":[{"name":"GeneChain Scan","url":"https://scan.genechain.io","standard":"EIP3091"}]},{"name":"Meter Mainnet","chain":"METER","network":"mainnet","rpc":["https://rpc.meter.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Meter","symbol":"MTR","decimals":18},"infoURL":"https://www.meter.io","shortName":"Meter","chainId":82,"networkId":82},{"name":"GateChain Testnet","chainId":85,"shortName":"gttest","chain":"GTTEST","network":"testnet","networkId":85,"nativeCurrency":{"name":"GateToken","symbol":"GT","decimals":18},"rpc":["https://testnet.gatenode.cc"],"faucets":["https://www.gatescan.org/testnet/faucet"],"features":[],"explorers":[{"name":"GateScan","url":"https://www.gatescan.org/testnet","standard":"EIP3091"}],"infoURL":"https://www.gatechain.io"},{"name":"GateChain Mainnet","chainId":86,"shortName":"gt","chain":"GT","network":"mainnet","networkId":86,"nativeCurrency":{"name":"GateToken","symbol":"GT","decimals":18},"rpc":["https://evm.gatenode.cc"],"faucets":["https://www.gatescan.org/faucet"],"features":[],"explorers":[{"name":"GateScan","url":"https://www.gatescan.org","standard":"EIP3091"}],"infoURL":"https://www.gatechain.io"},{"name":"TomoChain","chain":"TOMO","network":"mainnet","rpc":["https://rpc.tomochain.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"TomoChain Ether","symbol":"TOMO","decimals":18},"infoURL":"https://tomocoin.io","shortName":"tomo","chainId":88,"networkId":88},{"name":"CryptoKylin Testnet","chain":"EOS","network":"testnet","rpc":["https://kylin.eosargentina.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"EOS","symbol":"EOS","decimals":18},"infoURL":"https://www.cryptokylin.io/","shortName":"Kylin Testnet","chainId":95,"networkId":95,"explorers":[{"name":"eosq","url":"https://kylin.eosargentina.io","standard":"EIP3091"}]},{"name":"POA Network Core","chain":"POA","network":"core","rpc":["https://core.poanetwork.dev","http://core.poanetwork.dev:8545","https://core.poa.network","ws://core.poanetwork.dev:8546"],"faucets":[],"features":[],"nativeCurrency":{"name":"POA Network Core Ether","symbol":"SKL","decimals":18},"infoURL":"https://poa.network","shortName":"skl","chainId":99,"networkId":99},{"name":"xDAI Chain","chain":"XDAI","network":"mainnet","rpc":["https://rpc.xdaichain.com","https://xdai.poanetwork.dev","wss://rpc.xdaichain.com/wss","wss://xdai.poanetwork.dev/wss","http://xdai.poanetwork.dev","https://dai.poa.network","ws://xdai.poanetwork.dev:8546"],"faucets":[],"features":[],"nativeCurrency":{"name":"xDAI","symbol":"xDAI","decimals":18},"infoURL":"https://forum.poa.network/c/xdai-chain","shortName":"xdai","chainId":100,"networkId":100,"slip44":700},{"name":"EtherInc","chain":"ETI","network":"mainnet","rpc":["https://api.einc.io/jsonrpc/mainnet"],"faucets":[],"features":[],"nativeCurrency":{"name":"EtherInc Ether","symbol":"ETI","decimals":18},"infoURL":"https://einc.io","shortName":"eti","chainId":101,"networkId":1,"slip44":464},{"name":"Web3Games Testnet","chain":"Web3Games","network":"testnet","rpc":["https://substrate.org.cn"],"faucets":[],"features":[],"nativeCurrency":{"name":"Web3Games","symbol":"W3G","decimals":18},"infoURL":"https://web3games.org/","shortName":"w3g","chainId":102,"networkId":102},{"name":"ThunderCore Mainnet","chain":"TT","network":"mainnet","rpc":["https://mainnet-rpc.thundercore.com"],"faucets":["https://faucet.thundercore.com"],"features":[],"nativeCurrency":{"name":"ThunderCore Mainnet Ether","symbol":"TT","decimals":18},"infoURL":"https://thundercore.com","shortName":"TT","chainId":108,"networkId":108},{"name":"Proton Testnet","chain":"XPR","network":"testnet","rpc":["https://protontestnet.greymass.com/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Proton","symbol":"XPR","decimals":4},"infoURL":"https://protonchain.com","shortName":"xpr","chainId":110,"networkId":110},{"name":"EtherLite Chain","chain":"ETL","network":"mainnet","rpc":["https://rpc.etherlite.org"],"faucets":["https://etherlite.org/faucets"],"features":[],"nativeCurrency":{"name":"EtherLite","symbol":"ETL","decimals":18},"infoURL":"https://etherlite.org","shortName":"ETL","chainId":111,"networkId":111,"icon":"etherlite"},{"name":"Fuse Mainnet","chain":"FUSE","network":"mainnet","rpc":["https://rpc.fuse.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Fuse","symbol":"FUSE","decimals":18},"infoURL":"https://fuse.io/","shortName":"fuse","chainId":122,"networkId":122},{"name":"Decentralized Web Mainnet","shortName":"dwu","chain":"DWU","network":"mainnet","chainId":124,"networkId":124,"rpc":["https://decentralized-web.tech/dw_rpc.php"],"faucets":[],"features":[],"infoURL":"https://decentralized-web.tech/dw_chain.php","nativeCurrency":{"name":"Decentralized Web Utility","symbol":"DWU","decimals":18}},{"name":"Factory 127 Mainnet","chain":"FETH","network":"factory127 mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Factory 127 Token","symbol":"FETH","decimals":18},"infoURL":"https://www.factory127.com","shortName":"feth","chainId":127,"networkId":127,"slip44":127},{"name":"Huobi ECO Chain Mainnet","chain":"Heco","network":"mainnet","rpc":["https://http-mainnet.hecochain.com","wss://ws-mainnet.hecochain.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Huobi ECO Chain Native Token","symbol":"HT","decimals":18},"infoURL":"https://www.hecochain.com","shortName":"heco","chainId":128,"networkId":128,"explorers":[{"name":"hecoinfo","url":"https://hecoinfo.com","standard":"EIP3091"}]},{"name":"Lightstreams Testnet","chain":"PHT","network":"sirius","rpc":["https://node.sirius.lightstreams.io"],"faucets":["https://discuss.lightstreams.network/t/request-test-tokens"],"features":[],"nativeCurrency":{"name":"Lightstreams PHT","symbol":"PHT","decimals":18},"infoURL":"https://explorer.sirius.lightstreams.io","shortName":"tpht","chainId":162,"networkId":162},{"name":"Lightstreams Mainnet","chain":"PHT","network":"mainnet","rpc":["https://node.mainnet.lightstreams.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Lightstreams PHT","symbol":"PHT","decimals":18},"infoURL":"https://explorer.lightstreams.io","shortName":"pht","chainId":163,"networkId":163},{"name":"HOO Smart Chain Testnet","chain":"HOO","network":"testnet","rpc":["https://http-testnet.hoosmartchain.com"],"faucets":["https://faucet-testnet.hscscan.com/"],"features":[],"nativeCurrency":{"name":"HOO","symbol":"HOO","decimals":18},"infoURL":"https://www.hoosmartchain.com","shortName":"hoosmartchain","chainId":170,"networkId":170},{"name":"Freight Trust Network","chain":"EDI","network":"freight & trade network","rpc":["http://13.57.207.168:3435","https://app.freighttrust.net/ftn/${API_KEY}"],"faucets":["http://faucet.freight.sh"],"features":[],"nativeCurrency":{"name":"Freight Trust Native","symbol":"0xF","decimals":18},"infoURL":"https://freighttrust.com","shortName":"EDI","chainId":211,"networkId":0},{"name":"Energy Web Chain","chain":"Energy Web Chain","network":"mainnet","rpc":["https://rpc.energyweb.org","wss://rpc.energyweb.org/ws"],"faucets":["https://faucet.carbonswap.exchange"],"features":[],"nativeCurrency":{"name":"Energy Web Token","symbol":"EWT","decimals":18},"infoURL":"https://energyweb.org","shortName":"ewt","chainId":246,"networkId":246,"slip44":246},{"name":"Fantom Opera","chain":"FTM","network":"mainnet","rpc":["https://rpcapi.fantom.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Fantom","symbol":"FTM","decimals":18},"infoURL":"https://fantom.foundation","shortName":"ftm","chainId":250,"networkId":250,"icon":"fantom","explorers":[{"name":"ftmscan","url":"https://ftmscan.com","icon":"ftmscan","standard":"EIP3091"}]},{"name":"Huobi ECO Chain Testnet","chain":"Heco","network":"testnet","rpc":["https://http-testnet.hecochain.com","wss://ws-testnet.hecochain.com"],"faucets":["https://scan-testnet.hecochain.com/faucet"],"features":[],"nativeCurrency":{"name":"Huobi ECO Chain Test Native Token","symbol":"htt","decimals":18},"infoURL":"https://testnet.hecoinfo.com","shortName":"hecot","chainId":256,"networkId":256},{"name":"High Performance Blockchain","chain":"HPB","network":"mainnet","rpc":["https://hpb.app"],"faucets":[],"features":[],"nativeCurrency":{"name":"High Performance Blockchain Ether","symbol":"HPB","decimals":18},"infoURL":"https://hpbscan.org/","shortName":"hpb","chainId":269,"networkId":100,"slip44":269},{"name":"KuCoin Community Chain Mainnet","chain":"KCC","network":"mainnet","rpc":["https://rpc-mainnet.kcc.network","wss://rpc-ws-mainnet.kcc.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"KuCoin Token","symbol":"KCS","decimals":18},"infoURL":"https://kcc.io","shortName":"kcs","chainId":321,"networkId":321,"explorers":[{"name":"KCC Explorer","url":"https://explorer.kcc.io/en","standard":"EIP3091"}]},{"name":"KuCoin Community Chain Testnet","chain":"KCC","network":"testnet","rpc":["https://rpc-testnet.kcc.network"],"faucets":["https://faucet-testnet.kcc.network"],"features":[],"nativeCurrency":{"name":"KuCoin Testnet Token","symbol":"tKCS","decimals":18},"infoURL":"https://scan-testnet.kcc.network","shortName":"kcst","chainId":322,"networkId":322,"explorers":[{"name":"kcc-scan","url":"https://scan-testnet.kcc.network","standard":"EIP3091"}]},{"name":"Lisinski","chain":"CRO","network":"mainnet","rpc":["https://rpc-bitfalls1.lisinski.online"],"faucets":["https://pipa.lisinski.online"],"features":[],"nativeCurrency":{"name":"Lisinski Ether","symbol":"LISINSKI","decimals":18},"infoURL":"https://lisinski.online","shortName":"lisinski","chainId":385,"networkId":385},{"name":"Optimistic Ethereum Testnet Goerli","chain":"OPT","network":"goerli","rpc":["https://goerli.optimism.io/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Görli Ether","symbol":"GOR","decimals":18},"infoURL":"https://optimism.io","shortName":"ogor","chainId":420,"networkId":420},{"name":"Rupaya","chain":"RUPX","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Rupaya","symbol":"RUPX","decimals":18},"infoURL":"https://www.rupx.io","shortName":"rupx","chainId":499,"networkId":499,"slip44":499},{"name":"Tao Network","chain":"TAO","network":"core","rpc":["https://rpc.testnet.tao.network","http://rpc.testnet.tao.network:8545","https://rpc.tao.network","wss://rpc.tao.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Tao","symbol":"TAO","decimals":18},"infoURL":"https://tao.network","shortName":"tao","chainId":558,"networkId":558},{"name":"Acala Mandala Testnet","chain":"mACA","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Acala Mandala Token","symbol":"mACA","decimals":18},"infoURL":"https://acala.network","shortName":"maca","chainId":595,"networkId":595},{"name":"Karura Network","chain":"KAR","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Karura Token","symbol":"KAR","decimals":18},"infoURL":"https://karura.network","shortName":"kar","chainId":686,"networkId":686,"slip44":686},{"name":"Factory 127 Testnet","chain":"FETH","network":"factory127 testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Factory 127 Token","symbol":"FETH","decimals":18},"infoURL":"https://www.factory127.com","shortName":"tfeth","chainId":721,"networkId":721,"slip44":721},{"name":"Ethermint Testnet","chain":"ETHERMINT","network":"testnet","rpc":["http://54.210.246.165:8545"],"faucets":[],"features":[],"nativeCurrency":{"name":"Photon","symbol":"Photon","decimals":18},"infoURL":"https://docs.ethermint.zone","shortName":"emint","chainId":777,"networkId":777},{"name":"Acala Network","chain":"ACA","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Acala Token","symbol":"ACA","decimals":18},"infoURL":"https://acala.network","shortName":"aca","chainId":787,"networkId":787,"slip44":787},{"name":"Haic","chain":"Haic","network":"mainnet","rpc":["https://orig.haichain.io/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Haicoin","symbol":"HAIC","decimals":18},"infoURL":"https://www.haichain.io/","shortName":"haic","chainId":803,"networkId":803},{"name":"Callisto Mainnet","chain":"CLO","network":"mainnet","rpc":["https://clo-geth.0xinfra.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Callisto Mainnet Ether","symbol":"CLO","decimals":18},"infoURL":"https://callisto.network","shortName":"clo","chainId":820,"networkId":1,"slip44":820},{"name":"Callisto Testnet","chain":"CLO","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Callisto Testnet Ether","symbol":"TCLO","decimals":18},"infoURL":"https://callisto.network","shortName":"tclo","chainId":821,"networkId":2},{"name":"Wanchain","chain":"WAN","network":"mainnet","rpc":["https://gwan-ssl.wandevs.org:56891/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Wancoin","symbol":"WAN","decimals":18},"infoURL":"https://www.wanscan.org","shortName":"wan","chainId":888,"networkId":888},{"name":"Nepal Blockchain Network","chain":"YETI","network":"mainnet","rpc":["https://api.nepalblockchain.dev","https://api.nepalblockchain.network"],"faucets":["https://faucet.nepalblockchain.network"],"features":[],"nativeCurrency":{"name":"Nepal Blockchain Network Ether","symbol":"YETI","decimals":18},"infoURL":"https://nepalblockchain.network","shortName":"yeti","chainId":977,"networkId":977},{"name":"Wanchain Testnet","chain":"WAN","network":"testnet","rpc":["https://gwan-ssl.wandevs.org:46891/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Wancoin","symbol":"WAN","decimals":18},"infoURL":"https://testnet.wanscan.org","shortName":"twan","chainId":999,"networkId":999},{"name":"Klaytn Testnet Baobab","chain":"KLAY","network":"baobab","rpc":["https://node-api.klaytnapi.com/v1/klaytn"],"faucets":["https://baobab.wallet.klaytn.com/access?next=faucet"],"features":[],"nativeCurrency":{"name":"KLAY","symbol":"KLAY","decimals":18},"infoURL":"https://www.klaytn.com/","shortName":"Baobab","chainId":1001,"networkId":1001},{"name":"Newton Testnet","chain":"NEW","network":"testnet","rpc":["https://rpc1.newchain.newtonproject.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Newton","symbol":"NEW","decimals":18},"infoURL":"https://www.newtonproject.org/","shortName":"tnew","chainId":1007,"networkId":1007},{"name":"Evrice Network","chain":"EVC","network":"Evrice","rpc":["https://meta.evrice.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Evrice","symbol":"EVC","decimals":18},"infoURL":"https://evrice.com","shortName":"EVC","chainId":1010,"networkId":1010},{"name":"Newton","chain":"NEW","network":"mainnet","rpc":["https://global.rpc.mainnet.newtonproject.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Newton","symbol":"NEW","decimals":18},"infoURL":"https://www.newtonproject.org/","shortName":"new","chainId":1012,"networkId":1012},{"name":"Sakura","chain":"Sakura","network":"sakura","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Sakura","symbol":"SKU","decimals":18},"infoURL":"https://clover.finance/sakura","shortName":"sku","chainId":1022,"networkId":1022},{"name":"Clover Testnet","chain":"Clover","network":"clover testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Clover","symbol":"CLV","decimals":18},"infoURL":"https://clover.finance","shortName":"tclv","chainId":1023,"networkId":1023},{"name":"Clover Mainnet","chain":"Clover","network":"clover mainnet","rpc":["https://rpc-ivy.clover.finance","https://rpc-ivy-2.clover.finance","https://rpc-ivy-3.clover.finance"],"faucets":[],"features":[],"nativeCurrency":{"name":"Clover","symbol":"CLV","decimals":18},"infoURL":"https://clover.finance","shortName":"clv","chainId":1024,"networkId":1024},{"name":"MathChain","chain":"MATH","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"MathChain","symbol":"MATH","decimals":18},"infoURL":"https://mathchain.org","shortName":"MATH","chainId":1139,"networkId":1139},{"name":"MathChain Testnet","chain":"MATH","network":"testnet","rpc":["https://galois-hk.maiziqianbao.net/rpc"],"faucets":["https://scan.boka.network/#/Galois/faucet"],"features":[],"nativeCurrency":{"name":"MathChain","symbol":"MATH","decimals":18},"infoURL":"https://mathchain.org","shortName":"tMATH","chainId":1140,"networkId":1140},{"name":"Moonbeam Polkadot","chain":"MOON","network":"moonbeam","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Glimmer","symbol":"GLMR","decimals":18},"infoURL":"https://moonbeam.network/networks/moonbeam/","shortName":"mbeam","chainId":1284,"networkId":1284},{"name":"Moonriver Kusama","chain":"MOON","network":"moonriver","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"River","symbol":"RIVER","decimals":18},"infoURL":"https://moonbeam.network/networks/moonriver/","shortName":"mriver","chainId":1285,"networkId":1285},{"name":"Moonrock Rococo","chain":"MOON","network":"moonrock","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Rocs","symbol":"ROC","decimals":18},"infoURL":"","shortName":"mrock","chainId":1286,"networkId":1286},{"name":"Moonbeam Testnet Moonbase Alpha","chain":"MOON","network":"moonbase","rpc":["https://rpc.testnet.moonbeam.network","wss://wss.testnet.moonbeam.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Dev","symbol":"DEV","decimals":18},"infoURL":"https://docs.moonbeam.network/networks/testnet/","shortName":"mbase","chainId":1287,"networkId":1287},{"name":"Catecoin Chain Mainnet","chain":"Catechain","network":"mainnet","rpc":["https://send.catechain.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Catecoin","symbol":"CATE","decimals":18},"infoURL":"https://catechain.com","shortName":"cate","chainId":1618,"networkId":1618},{"name":"Atheios","chain":"ATH","network":"mainnet","rpc":["https://wallet.atheios.com:8797"],"faucets":[],"features":[],"nativeCurrency":{"name":"Atheios Ether","symbol":"ATH","decimals":18},"infoURL":"https://atheios.com","shortName":"ath","chainId":1620,"networkId":11235813,"slip44":1620},{"name":"Teslafunds","chain":"TSF","network":"mainnet","rpc":["https://tsfapi.europool.me"],"faucets":[],"features":[],"nativeCurrency":{"name":"Teslafunds Ether","symbol":"TSF","decimals":18},"infoURL":"https://teslafunds.io","shortName":"tsf","chainId":1856,"networkId":1},{"name":"EtherGem","chain":"EGEM","network":"mainnet","rpc":["https://jsonrpc.egem.io/custom"],"faucets":[],"features":[],"nativeCurrency":{"name":"EtherGem Ether","symbol":"EGEM","decimals":18},"infoURL":"https://egem.io","shortName":"egem","chainId":1987,"networkId":1987,"slip44":1987},{"name":"420coin","chain":"420","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Fourtwenty","symbol":"420","decimals":18},"infoURL":"https://420integrated.com","shortName":"420","chainId":2020,"networkId":2020},{"name":"Edgeware Mainnet","chain":"EDG","network":"mainnet","rpc":["https://mainnet1.edgewa.re"],"faucets":[],"features":[],"nativeCurrency":{"name":"Edge","symbol":"EDG","decimals":18},"infoURL":"http://edgewa.re","shortName":"edg","chainId":2021,"networkId":2021},{"name":"Beresheet Testnet","chain":"EDG","network":"beresheet","rpc":["https://beresheet1.edgewa.re"],"faucets":[],"features":[],"nativeCurrency":{"name":"Testnet Edge","symbol":"tEDG","decimals":18},"infoURL":"http://edgewa.re","shortName":"edgt","chainId":2022,"networkId":2022},{"name":"Kortho Mainnet","chain":"Kortho Chain","network":"mainnet","rpc":["https://www.kortho-chain.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"KorthoChain","symbol":"KTO","decimals":11},"infoURL":"https://www.kortho.io/","shortName":"ktoc","chainId":2559,"networkId":2559},{"name":"IoTeX Network Mainnet","chain":"iotex.io","network":"mainnet","rpc":["https://babel-api.mainnet.iotex.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"IoTeX","symbol":"IOTX","decimals":18},"infoURL":"https://iotex.io","shortName":"iotex-mainnet","chainId":4689,"networkId":4689},{"name":"IoTeX Network Testnet","chain":"iotex.io","network":"testnet","rpc":["https://babel-api.testnet.iotex.io"],"faucets":["https://faucet.iotex.io/"],"features":[],"nativeCurrency":{"name":"IoTeX","symbol":"IOTX","decimals":18},"infoURL":"https://iotex.io","shortName":"iotex-testnet","chainId":4690,"networkId":4690},{"name":"EraSwap Mainnet","chain":"ESN","network":"mainnet","icon":"eraswap","rpc":["https://mainnet.eraswap.network","https://rpc-mumbai.mainnet.eraswap.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"EraSwap","symbol":"ES","decimals":18},"infoURL":"https://eraswap.info/","shortName":"es","chainId":5197,"networkId":5197},{"name":"Ontology Testnet","chain":"Ontology","network":"testnet","rpc":["https://polaris1.ont.io:20339","https://polaris2.ont.io:20339","https://polaris3.ont.io:20339","https://polaris4.ont.io:20339"],"faucets":["https://developer.ont.io/"],"features":[],"nativeCurrency":{"name":"ONG","symbol":"ONG","decimals":9},"infoURL":"https://ont.io/","shortName":"Ontology Testnet","chainId":5851,"networkId":5851,"explorers":[{"name":"explorer","url":"https://explorer.ont.io/testnet","standard":"EIP3091"}]},{"name":"Wegochain Rubidium Mainnet","chain":"RBD","network":"mainnet","rpc":["https://proxy.wegochain.io","http://wallet.wegochain.io:7764"],"faucets":[],"features":[],"nativeCurrency":{"name":"Rubid","symbol":"RBD","decimals":18},"infoURL":"http://wegochain.io","shortName":"rbd","chainId":5869,"networkId":5869},{"name":"MDGL Testnet","chain":"MDGL","network":"testnet","rpc":["https://testnet.mdgl.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"MDGL Token","symbol":"MDGLT","decimals":18},"infoURL":"https://mdgl.io","shortName":"mdgl","chainId":8029,"networkId":8029},{"name":"GeneChain Adenine Testnet","chain":"GeneChain","network":"adenine","rpc":["https://rpc-testnet.genechain.io"],"faucets":["https://faucet.genechain.io"],"features":[],"nativeCurrency":{"name":"Testnet RNA","symbol":"tRNA","decimals":18},"infoURL":"https://scan-testnet.genechain.io/","shortName":"GeneChainAdn","chainId":8080,"networkId":8080,"explorers":[{"name":"GeneChain Adenine Testnet Scan","url":"https://scan-testnet.genechain.io","standard":"EIP3091"}]},{"name":"Klaytn Mainnet Cypress","chain":"KLAY","network":"cypress","rpc":["https://node-api.klaytnapi.com/v1/klaytn"],"faucets":[],"features":[],"nativeCurrency":{"name":"KLAY","symbol":"KLAY","decimals":18},"infoURL":"https://www.klaytn.com/","shortName":"Cypress","chainId":8217,"networkId":8217,"slip44":8217},{"name":"KorthoTest","chain":"Kortho","network":"Test","rpc":["https://www.krotho-test.net"],"faucets":[],"features":[],"nativeCurrency":{"name":"Kortho Test","symbol":"KTO","decimals":11},"infoURL":"https://www.kortho.io/","shortName":"Kortho","chainId":8285,"networkId":8285},{"name":"TOOL Global Testnet","chain":"OLO","network":"testnet","rpc":["https://testnet-web3.wolot.io"],"faucets":["https://testnet-explorer.wolot.io"],"features":[],"nativeCurrency":{"name":"TOOL Global","symbol":"OLO","decimals":18},"infoURL":"https://testnet-explorer.wolot.io","shortName":"olo","chainId":8724,"networkId":8724,"slip44":479},{"name":"bloxberg","chain":"bloxberg","network":"mainnet","rpc":["https://core.bloxberg.org"],"faucets":["https://faucet.bloxberg.org/"],"features":[],"nativeCurrency":{"name":"BERG","symbol":"U+25B3","decimals":18},"infoURL":"https://bloxberg.org","shortName":"berg","chainId":8995,"networkId":8995},{"name":"Smart Bitcoin Cash","chain":"smartBCH","network":"mainnet","rpc":["https://rpc-mainnet.smartbch.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Bitcoin Cash","symbol":"BCH","decimals":18},"infoURL":"http://smartbch.org/","shortName":"smartbch","chainId":10000,"networkId":10000},{"name":"Smart Bitcoin Cash Testnet","chain":"smartBCHTest","network":"testnet","rpc":["https://rpc-testnet.smartbch.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Bitcoin Cash Test Token","symbol":"BCHT","decimals":18},"infoURL":"http://smartbch.org/","shortName":"smartbchtest","chainId":10001,"networkId":10001},{"name":"Blockchain Genesis Mainnet","chain":"GEN","network":"mainnet","rpc":["https://eu.mainnet.xixoio.com","https://us.mainnet.xixoio.com","https://asia.mainnet.xixoio.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"GEN","symbol":"GEN","decimals":18},"infoURL":"https://www.xixoio.com/","shortName":"GEN","chainId":10101,"networkId":10101},{"name":"Webchain","chain":"WEB","network":"mainnet","rpc":["https://node1.webchain.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Webchain Ether","symbol":"WEB","decimals":18},"infoURL":"https://webchain.network","shortName":"web","chainId":24484,"networkId":37129},{"name":"MintMe.com Coin","chain":"MINTME","network":"mainnet","rpc":["https://node1.mintme.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"MintMe.com Coin","symbol":"MINTME","decimals":18},"infoURL":"https://www.mintme.com","shortName":"mintme","chainId":24734,"networkId":37480},{"name":"Ethersocial Network","chain":"ESN","network":"mainnet","rpc":["https://api.esn.gonspool.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ethersocial Network Ether","symbol":"ESN","decimals":18},"infoURL":"https://ethersocial.org","shortName":"esn","chainId":31102,"networkId":1,"slip44":31102},{"name":"Fusion Mainnet","chain":"FSN","network":"mainnet","rpc":["https://mainnet.anyswap.exchange","https://fsn.dev/api"],"faucets":[],"features":[],"nativeCurrency":{"name":"Fusion","symbol":"FSN","decimals":18},"infoURL":"https://www.fusion.org/","shortName":"fsn","chainId":32659,"networkId":32659},{"name":"Energi Mainnet","chain":"NRG","network":"mainnet","rpc":["https://nodeapi.gen3.energi.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Energi","symbol":"NRG","decimals":18},"infoURL":"https://www.energi.world/","shortName":"nrg","chainId":39797,"networkId":39797,"slip44":39797},{"name":"pegglecoin","chain":"42069","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"pegglecoin","symbol":"peggle","decimals":18},"infoURL":"https://teampeggle.com","shortName":"PC","chainId":42069,"networkId":42069},{"name":"Celo Mainnet","chainId":42220,"shortName":"CELO","chain":"CELO","network":"Mainnet","networkId":42220,"nativeCurrency":{"name":"CELO","symbol":"CELO","decimals":18},"rpc":["https://forno.celo.org","wss://forno.celo.org/ws"],"faucets":[],"features":[],"infoURL":"https://docs.celo.org/"},{"name":"Athereum","chain":"ATH","network":"athereum","rpc":["https://ava.network:21015/ext/evm/rpc"],"faucets":["http://athfaucet.ava.network//?address=${ADDRESS}"],"features":[],"nativeCurrency":{"name":"Athereum Ether","symbol":"ATH","decimals":18},"infoURL":"https://athereum.ava.network","shortName":"avaeth","chainId":43110,"networkId":43110},{"name":"Avalanche Fuji Testnet","chain":"AVAX","network":"testnet","rpc":["https://api.avax-test.network/ext/bc/C/rpc"],"faucets":["https://faucet.avax-test.network/"],"features":[],"nativeCurrency":{"name":"Avalanche","symbol":"AVAX","decimals":18},"infoURL":"https://cchain.explorer.avax-test.network","shortName":"Fuji","chainId":43113,"networkId":1},{"name":"Avalanche Mainnet","chain":"AVAX","network":"mainnet","rpc":["https://api.avax.network/ext/bc/C/rpc"],"faucets":[],"features":[],"nativeCurrency":{"name":"Avalanche","symbol":"AVAX","decimals":18},"infoURL":"https://cchain.explorer.avax.network/","shortName":"Avalanche","chainId":43114,"networkId":1},{"name":"Celo Alfajores Testnet","chainId":44787,"shortName":"ALFA","chain":"CELO","network":"Alfajores","networkId":44787,"nativeCurrency":{"name":"CELO","symbol":"CELO","decimals":18},"rpc":["https://alfajores-forno.celo-testnet.org","wss://alfajores-forno.celo-testnet.org/ws"],"faucets":["https://celo.org/developers/faucet","https://cauldron.pretoriaresearchlab.io/alfajores-faucet"],"features":[],"infoURL":"https://docs.celo.org/"},{"name":"Energi Testnet","chain":"NRG","network":"testnet","rpc":["https://nodeapi.test3.energi.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Energi","symbol":"tNRG","decimals":18},"infoURL":"https://www.energi.world/","shortName":"tnrg","chainId":49797,"networkId":49797,"slip44":49797},{"name":"Celo Baklava Testnet","chainId":62320,"shortName":"BKLV","chain":"CELO","network":"Baklava","networkId":62320,"nativeCurrency":{"name":"CELO","symbol":"CELO","decimals":18},"rpc":["https://baklava-forno.celo-testnet.org"],"faucets":["https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform","https://cauldron.pretoriaresearchlab.io/baklava-faucet"],"features":[],"infoURL":"https://docs.celo.org/"},{"name":"Energy Web Volta Testnet","chain":"Volta","network":"testnet","rpc":["https://volta-rpc.energyweb.org","wss://volta-rpc.energyweb.org/ws"],"faucets":["https://voltafaucet.energyweb.org"],"features":[],"nativeCurrency":{"name":"Volta Token","symbol":"VT","decimals":18},"infoURL":"https://energyweb.org","shortName":"vt","chainId":73799,"networkId":73799},{"name":"Firenze test network","chain":"FIR","network":"testnet","rpc":["https://ethnode.primusmoney.com/firenze"],"faucets":[],"features":[],"nativeCurrency":{"name":"Firenze Ether","symbol":"FIN","decimals":18},"infoURL":"https://primusmoney.com","shortName":"firenze","chainId":78110,"networkId":78110},{"name":"QuarkChain Mainnet Root","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:38391/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-r","chainId":100000,"networkId":100000},{"name":"QuarkChain Mainnet Shard 0","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39000/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s0","chainId":100001,"networkId":100001,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 1","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39001/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s1","chainId":100002,"networkId":100002,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 2","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39002/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s2","chainId":100003,"networkId":100003,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 3","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39003/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s3","chainId":100004,"networkId":100004,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 4","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39004/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s4","chainId":100005,"networkId":100005,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 5","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39005/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s5","chainId":100006,"networkId":100006,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 6","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39006/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s6","chainId":100007,"networkId":100007,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 7","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39007/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s7","chainId":100008,"networkId":100008,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Devnet Root","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:38391/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-r","chainId":110000,"networkId":110000},{"name":"QuarkChain Devnet Shard 0","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39000/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s0","chainId":110001,"networkId":110001,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 1","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39001/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s1","chainId":110002,"networkId":110002,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 2","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39002/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s2","chainId":110003,"networkId":110003,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 3","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39003/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s3","chainId":110004,"networkId":110004,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 4","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39004/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s4","chainId":110005,"networkId":110005,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 5","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39005/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s5","chainId":110006,"networkId":110006,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 6","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39006/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s6","chainId":110007,"networkId":110007,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 7","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39007/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s7","chainId":110008,"networkId":110008,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"Akroma","chain":"AKA","network":"mainnet","rpc":["https://remote.akroma.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Akroma Ether","symbol":"AKA","decimals":18},"infoURL":"https://akroma.io","shortName":"aka","chainId":200625,"networkId":200625,"slip44":200625},{"name":"ARTIS sigma1","chain":"ARTIS","network":"sigma1","rpc":["https://rpc.sigma1.artis.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"ARTIS sigma1 Ether","symbol":"ATS","decimals":18},"infoURL":"https://artis.eco","shortName":"ats","chainId":246529,"networkId":246529,"slip44":246529},{"name":"ARTIS Testnet tau1","chain":"ARTIS","network":"tau1","rpc":["https://rpc.tau1.artis.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"ARTIS tau1 Ether","symbol":"tATS","decimals":18},"infoURL":"https://artis.network","shortName":"atstau","chainId":246785,"networkId":246785},{"name":"Ether-1","chain":"ETHO","network":"mainnet","rpc":["https://rpc.ether1.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ether-1 Ether","symbol":"ETHO","decimals":18},"infoURL":"https://ether1.org","shortName":"etho","chainId":1313114,"networkId":1313114,"slip44":1313114},{"name":"Xerom","chain":"XERO","network":"mainnet","rpc":["https://rpc.xerom.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Xerom Ether","symbol":"XERO","decimals":18},"infoURL":"https://xerom.org","shortName":"xero","chainId":1313500,"networkId":1313500},{"name":"Musicoin","chain":"MUSIC","network":"mainnet","rpc":["https://mewapi.musicoin.tw"],"faucets":[],"features":[],"nativeCurrency":{"name":"Musicoin","symbol":"MUSIC","decimals":18},"infoURL":"https://musicoin.tw","shortName":"music","chainId":7762959,"networkId":7762959,"slip44":184},{"name":"PepChain Churchill","chain":"PEP","network":"testnet","rpc":["https://churchill-rpc.pepchain.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"PepChain Churchill Ether","symbol":"TPEP","decimals":18},"infoURL":"https://pepchain.io","shortName":"tpep","chainId":13371337,"networkId":13371337},{"name":"IOLite","chain":"ILT","network":"mainnet","rpc":["https://net.iolite.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"IOLite Ether","symbol":"ILT","decimals":18},"infoURL":"https://iolite.io","shortName":"ilt","chainId":18289463,"networkId":18289463},{"name":"quarkblockchain","chain":"QKI","network":"mainnet","rpc":["https://hz.rpc.qkiscan.cn","https://jp.rpc.qkiscan.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"quarkblockchain Native Token","symbol":"QKI","decimals":18},"infoURL":"https://quarkblockchain.org/","shortName":"qki","chainId":20181205,"networkId":20181205},{"name":"Auxilium Network Mainnet","chain":"AUX","network":"mainnet","rpc":["https://rpc.auxilium.global"],"faucets":[],"features":[],"nativeCurrency":{"name":"Auxilium coin","symbol":"AUX","decimals":18},"infoURL":"https://auxilium.global","shortName":"auxi","chainId":28945486,"networkId":28945486,"slip44":344},{"name":"Joys Digital Mainnet","chain":"JOYS","network":"mainnet","rpc":["https://node.joys.digital"],"faucets":[],"features":[],"nativeCurrency":{"name":"JOYS","symbol":"JOYS","decimals":18},"infoURL":"https://joys.digital","shortName":"JOYS","chainId":35855456,"networkId":35855456},{"name":"Aquachain","chain":"AQUA","network":"mainnet","rpc":["https://c.onical.org","https://tx.aquacha.in/api"],"faucets":["https://aquacha.in/faucet"],"features":[],"nativeCurrency":{"name":"Aquachain Ether","symbol":"AQUA","decimals":18},"infoURL":"https://aquachain.github.io","shortName":"aqua","chainId":61717561,"networkId":61717561,"slip44":61717561},{"name":"Joys Digital TestNet","chain":"TOYS","network":"testnet","rpc":["https://toys.joys.cash/"],"faucets":["https://faucet.joys.digital/"],"features":[],"nativeCurrency":{"name":"TOYS","symbol":"TOYS","decimals":18},"infoURL":"https://joys.digital","shortName":"TOYS","chainId":99415706,"networkId":99415706},{"name":"IPOS Network","chain":"IPOS","network":"mainnet","rpc":["https://rpc.iposlab.com","https://rpc2.iposlab.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"IPOS Network Ether","symbol":"IPOS","decimals":18},"infoURL":"https://iposlab.com","shortName":"ipos","chainId":1122334455,"networkId":1122334455},{"name":"Aurora MainNet","chain":"NEAR","network":"mainnet","rpc":["https://rpc.mainnet.aurora.dev:8545"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ether","symbol":"aETH","decimals":18},"infoURL":"https://aurora.dev","shortName":"aurora","chainId":1313161554,"networkId":1313161554},{"name":"Aurora TestNet","chain":"NEAR","network":"testnet","rpc":["https://rpc.testnet.aurora.dev:8545"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ether","symbol":"aETH","decimals":18},"infoURL":"https://aurora.dev","shortName":"aurora-testnet","chainId":1313161555,"networkId":1313161555},{"name":"Aurora BetaNet","chain":"NEAR","network":"betanet","rpc":["https://rpc.betanet.aurora.dev:8545"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ether","symbol":"aETH","decimals":18},"infoURL":"https://aurora.dev","shortName":"aurora-betanet","chainId":1313161556,"networkId":1313161556},{"name":"Harmony Mainnet Shard 0","chain":"Harmony","network":"mainnet","rpc":["https://api.harmony.one"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-s0","chainId":1666600000,"networkId":1666600000},{"name":"Harmony Mainnet Shard 1","chain":"Harmony","network":"mainnet","rpc":["https://s1.api.harmony.one"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-s1","chainId":1666600001,"networkId":1666600001},{"name":"Harmony Mainnet Shard 2","chain":"Harmony","network":"mainnet","rpc":["https://s2.api.harmony.one"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-s2","chainId":1666600002,"networkId":1666600002},{"name":"Harmony Mainnet Shard 3","chain":"Harmony","network":"mainnet","rpc":["https://s3.api.harmony.one"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-s3","chainId":1666600003,"networkId":1666600003},{"name":"Harmony Testnet Shard 0","chain":"Harmony","network":"testnet","rpc":["https://api.s0.b.hmny.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-b-s0","chainId":1666700000,"networkId":1666700000},{"name":"Harmony Testnet Shard 1","chain":"Harmony","network":"testnet","rpc":["https://api.s1.b.hmny.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-b-s1","chainId":1666700001,"networkId":1666700001},{"name":"Harmony Testnet Shard 2","chain":"Harmony","network":"testnet","rpc":["https://api.s2.b.hmny.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-b-s2","chainId":1666700002,"networkId":1666700002},{"name":"Harmony Testnet Shard 3","chain":"Harmony","network":"testnet","rpc":["https://api.s3.b.hmny.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-b-s3","chainId":1666700003,"networkId":1666700003},{"name":"Pirl","chain":"PIRL","network":"mainnet","rpc":["https://wallrpc.pirl.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Pirl Ether","symbol":"PIRL","decimals":18},"infoURL":"https://pirl.io","shortName":"pirl","chainId":3125659152,"networkId":3125659152,"slip44":164},{"name":"Palm Testnet","chain":"Palm","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"PALM","symbol":"PALM","decimals":18},"infoURL":"https://palm.io","shortName":"tpalm","chainId":11297108099,"networkId":11297108099},{"name":"Palm Mainnet","chain":"Palm","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"PALM","symbol":"PALM","decimals":18},"infoURL":"https://palm.io","shortName":"palm","chainId":11297108109,"networkId":11297108109}]');

/***/ })

}]);