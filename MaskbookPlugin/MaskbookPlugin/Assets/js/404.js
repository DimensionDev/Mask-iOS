"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[899],{

/***/ 62323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71765);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3, ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(3758), __webpack_require__.e(7604), __webpack_require__.e(211), __webpack_require__.e(1626), __webpack_require__.e(3375), __webpack_require__.e(5480)]).then(__webpack_require__.bind(__webpack_require__, 88105))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 67047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "It": () => (/* binding */ currentSlippageSettings),
/* harmony export */   "DG": () => (/* binding */ currentSingleHopOnlySettings),
/* harmony export */   "gG": () => (/* binding */ currentDataProviderSettings),
/* harmony export */   "de": () => (/* binding */ currentTradeProviderSettings),
/* harmony export */   "SN": () => (/* binding */ ethereumNetworkTradeProviderSettings),
/* harmony export */   "hn": () => (/* binding */ polygonNetworkTradeProviderSettings),
/* harmony export */   "gk": () => (/* binding */ binanceNetworkTradeProviderSettings),
/* harmony export */   "We": () => (/* binding */ arbitrumNetworkTradeProviderSettings),
/* harmony export */   "EH": () => (/* binding */ xdaiNetworkTradeProviderSettings),
/* harmony export */   "Aj": () => (/* binding */ getCurrentTradeProviderGeneralSettings),
/* harmony export */   "rn": () => (/* binding */ getCurrentDataProviderGeneralSettings),
/* harmony export */   "Lc": () => (/* binding */ getCurrentPreferredCoinIdSettings),
/* harmony export */   "EG": () => (/* binding */ approvedTokensFromUniSwap)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/404.js
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37131);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95001);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86705);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34513);
=======
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45154);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93002);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71765);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95142);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/899.js





/**
 * The slippage tolerance of trader
 */ const currentSlippageSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+slippageTolerance`, _constants__WEBPACK_IMPORTED_MODULE_3__/* .SLIPPAGE_DEFAULT */ .Nd, {
    primary: ()=>''
});
/**
 * Single Hop
 */ const currentSingleHopOnlySettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+singleHopOnly`, false, {
    primary: ()=>''
});
/**
 * The default data provider
 */ const currentDataProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+dataProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_primary')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_secondary')
});
/**
 * The default trader provider
 */ const currentTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_trade_provider_primary')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_trade_provider_secondary')
});
const ethereumNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+ethereum+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2, {
    primary: ()=>''
});
const polygonNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+polygon+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP, {
    primary: ()=>''
});
const binanceNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+binance+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP, {
    primary: ()=>''
});
const arbitrumNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+arbitrum+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3, {
    primary: ()=>''
});
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/404.js
=======
const xdaiNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+xdai+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP, {
    primary: ()=>''
});
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/899.js
const uniswapV2Settings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+uniswap+v2`, '');
const uniswapV3Settings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+uniswap+v3`, '');
const zrxSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+zrx`, '');
const sushiswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+sushiswap`, '');
const sashimiswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+sashimiswap`, '');
const qucikswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+quickswap`, '');
const pancakeswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+pancakeswap`, '');
const balancerSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+balancer`, '');
const dodoSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+dodo`, '');
/**
 * The general settings of specific tarde provider
 */ function getCurrentTradeProviderGeneralSettings(tradeProvider) {
    switch(tradeProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
            return uniswapV2Settings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
            return uniswapV3Settings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.ZRX */ .z4.ZRX:
            return zrxSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
            return sushiswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
            return sashimiswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
            return qucikswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return pancakeswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return balancerSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.DODO */ .z4.DODO:
            return dodoSettings;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(tradeProvider);
    }
}
//#endregion
//#region data provider general settings
const coinGeckoSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinGeckoSettings`, '');
const coinMarketCapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinMarketCapSettings`, '');
const coinUniswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinUniswapSettings`, '');
/**
 * The general settings of specific data provider
 */ function getCurrentDataProviderGeneralSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapSettings;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
//#endregion
//#region the user preferred coin id
const coinGeckoPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinGeckoPreferredCoinId`, '{}');
const coinMarketCapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinMarketCapPreferredCoinId`, '{}');
const coinUniswapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinUniswapPreferredCoinId`, '{}');
function getCurrentPreferredCoinIdSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapPreferredCoinId;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
//#endregion
/**
 * The approved tokens from uniswap
 */ const approvedTokensFromUniSwap = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+approvedTokens`, '[]');


/***/ }),

/***/ 89819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAvailableTraderProviders)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88088);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6615);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62323);



function useAvailableTraderProviders(type, keyword) {
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xxU)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        return _messages__WEBPACK_IMPORTED_MODULE_1__/* .PluginTraderRPC.getAvailableTraderProviders */ .V.getAvailableTraderProviders(type, keyword);
    }, [
        chainId,
        type,
        keyword
    ]);
}


/***/ }),

/***/ 29575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useCurrentTradeProvider)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/404.js
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26428);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22209);
/* harmony import */ var _Wallet_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6621);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24982);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34513);

=======
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67047);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66632);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);
/* harmony import */ var _Wallet_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93975);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11494);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/899.js






function useCurrentTradeProvider() {
    const networkType = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .getNetworkTypeFromChainId */ ._Te)(_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentChainIdSettings.value */ .wU.value);
    const ethNetworkTradeProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings__WEBPACK_IMPORTED_MODULE_1__/* .ethereumNetworkTradeProviderSettings */ .SN);
    const polygonNetworkTradeProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings__WEBPACK_IMPORTED_MODULE_1__/* .polygonNetworkTradeProviderSettings */ .hn);
    const binanceNetworkTradeProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings__WEBPACK_IMPORTED_MODULE_1__/* .binanceNetworkTradeProviderSettings */ .gk);
    const arbitrumNetworkTradeProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings__WEBPACK_IMPORTED_MODULE_1__/* .arbitrumNetworkTradeProviderSettings */ .We);
    const xdaiNetworkTradeProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings__WEBPACK_IMPORTED_MODULE_1__/* .xdaiNetworkTradeProviderSettings */ .EH);
    if (!networkType) return _types__WEBPACK_IMPORTED_MODULE_2__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2;
    switch(networkType){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .tds.Ethereum:
            return ethNetworkTradeProvider;
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .tds.Polygon:
            return polygonNetworkTradeProvider;
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .tds.Binance:
            return binanceNetworkTradeProvider;
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .tds.Arbitrum:
            return arbitrumNetworkTradeProvider;
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .tds.xDai:
            return xdaiNetworkTradeProvider;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .unreachable */ .t1)(networkType);
    }
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/404.js
/***/ 26428:
=======
/***/ 66632:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/899.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qy": () => (/* reexport */ TagType),
  "Vo": () => (/* reexport */ TokenPanelType),
  "z4": () => (/* reexport */ src/* TradeProvider */.z4),
  "tB": () => (/* reexport */ TradeStrategy),
  "Os": () => (/* reexport */ WarningLevel),
  "Zy": () => (/* reexport */ ZrxTradePool)
});

// UNUSED EXPORTS: NetworkType

// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var src = __webpack_require__(95142);
;// CONCATENATED MODULE: ./src/plugins/Trader/types/trader.ts

var WarningLevel;
(function(WarningLevel1) {
    WarningLevel1[WarningLevel1["LOW"] = 1] = "LOW";
    WarningLevel1[WarningLevel1["MEDIUM"] = 2] = "MEDIUM";
    WarningLevel1[WarningLevel1["HIGH"] = 3] = "HIGH";
    WarningLevel1[WarningLevel1["CONFIRMATION_REQUIRED"] = 4] = "CONFIRMATION_REQUIRED";
    WarningLevel1[WarningLevel1["BLOCKED"] = 5] = "BLOCKED";
})(WarningLevel || (WarningLevel = {
}));
var ZrxTradePool;
(function(ZrxTradePool1) {
    ZrxTradePool1["ZRX"] = '0x';
    ZrxTradePool1["ACryptoS"] = 'ACryptoS';
    ZrxTradePool1["ApeSwap"] = 'ApeSwap';
    ZrxTradePool1["BakerySwap"] = 'BakerySwap';
    ZrxTradePool1["Balancer"] = 'Balancer';
    ZrxTradePool1["BalancerV2"] = 'Balancer_V2';
    ZrxTradePool1["Bancor"] = 'Bancor';
    ZrxTradePool1["Belt"] = 'Belt';
    ZrxTradePool1["CafeSwap"] = 'CafeSwap';
    ZrxTradePool1["CheeseSwap"] = 'CheeseSwap';
    ZrxTradePool1["ComethSwap"] = 'ComethSwap';
    ZrxTradePool1["Component"] = 'Component';
    ZrxTradePool1["Cream"] = 'CREAM';
    ZrxTradePool1["CryptoCom"] = 'CryptoCom';
    ZrxTradePool1["Curve"] = 'Curve';
    ZrxTradePool1["CurveV2"] = 'Curve_V2';
    ZrxTradePool1["Dfyn"] = 'Dfyn';
    ZrxTradePool1["Dodo"] = 'DODO';
    ZrxTradePool1["DodoV2"] = 'DODO_V2';
    ZrxTradePool1["Ellipsis"] = 'Ellipsis';
    ZrxTradePool1["Eth2Dai"] = 'Eth2Dai';
    ZrxTradePool1["FirebirdOneSwap"] = 'FirebirdOneSwap';
    ZrxTradePool1["IronSwap"] = 'IronSwap';
    ZrxTradePool1["JetSwap"] = 'JetSwap';
    ZrxTradePool1["JulSwap"] = 'JulSwap';
    ZrxTradePool1["Kyber"] = 'Kyber';
    ZrxTradePool1["KyberDMM"] = 'KyberDMM';
    ZrxTradePool1["Lido"] = 'Lido';
    ZrxTradePool1["Linkswap"] = 'Linkswap';
    ZrxTradePool1["LiquidityProvider"] = 'LiquidityProvider';
    ZrxTradePool1["MStable"] = 'mStable';
    ZrxTradePool1["MakerPsm"] = 'MakerPsm';
    ZrxTradePool1["Mesh"] = 'Mesh';
    ZrxTradePool1["Mooniswap"] = 'Mooniswap';
    ZrxTradePool1["MultiBridge"] = 'MultiBridge';
    ZrxTradePool1["MultiHop"] = 'MultiHop';
    ZrxTradePool1["Native"] = 'Native';
    ZrxTradePool1["Nerve"] = 'Nerve';
    ZrxTradePool1["Oasis"] = 'Oasis';
    ZrxTradePool1["PancakeSwap"] = 'PancakeSwap';
    ZrxTradePool1["PancakeSwapV2"] = 'PancakeSwap_V2';
    ZrxTradePool1["QuickSwap"] = 'QuickSwap';
    ZrxTradePool1["Saddle"] = 'Saddle';
    ZrxTradePool1["Shell"] = 'Shell';
    ZrxTradePool1["Smoothy"] = 'Smoothy';
    ZrxTradePool1["SnowSwap"] = 'SnowSwap';
    ZrxTradePool1["SushiSwap"] = 'SushiSwap';
    ZrxTradePool1["Swerve"] = 'Swerve';
    ZrxTradePool1["Uniswap"] = 'Uniswap';
    ZrxTradePool1["UniswapV2"] = 'Uniswap_V2';
    ZrxTradePool1["UniswapV3"] = 'Uniswap_V3';
    ZrxTradePool1["WaultSwap"] = 'WaultSwap';
    ZrxTradePool1["xSigma"] = 'xSigma';
})(ZrxTradePool || (ZrxTradePool = {
}));
var TradeStrategy;
(function(TradeStrategy1) {
    TradeStrategy1[TradeStrategy1["ExactIn"] = 0] = "ExactIn";
    TradeStrategy1[TradeStrategy1["ExactOut"] = 1] = "ExactOut";
})(TradeStrategy || (TradeStrategy = {
}));
var TokenPanelType;
(function(TokenPanelType1) {
    TokenPanelType1[TokenPanelType1["Input"] = 0] = "Input";
    TokenPanelType1[TokenPanelType1["Output"] = 1] = "Output";
})(TokenPanelType || (TokenPanelType = {
}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/trending.ts
var TagType;
(function(TagType1) {
    TagType1[TagType1["CASH"] = 1] = "CASH";
    TagType1[TagType1["HASH"] = 2] = "HASH";
})(TagType || (TagType = {
}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/index.ts








/***/ }),

/***/ 75388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vA": () => (/* binding */ MaskbookTextIcon),
/* harmony export */   "LX": () => (/* binding */ MaskbookIcon),
/* harmony export */   "A4": () => (/* binding */ MaskbookIconOutlined),
/* harmony export */   "ck": () => (/* binding */ MaskbookSharpIcon),
/* harmony export */   "J6": () => (/* binding */ MaskbookSharpIconOfSize),
/* harmony export */   "Z6": () => (/* binding */ WalletSharp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12445);

/**
 * This icon should be sync with https://mask.io/img/MB--CircleCanvas--WhiteOverBlue.svg
 */ 
const MaskbookSmileFaceSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 600 600",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
        fillRule: "evenodd",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "300",
                cy: "300",
                r: "300",
                fill: "#1C68F3"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fill: "#fff",
                d: "m480 200h-360v-44c0-19.882 16.118-36 36-36h288c19.882 0 36 16.118 36 36v44zm0 30v100h-60-231-21.912c13.661 60.677 67.878 106 132.68 106 53.575 0 99.914-30.978 122.08-76h58.144v84c0 19.882-16.118 36-36 36h-288c-19.882 0-36-16.118-36-36v-214h360zm-267.78 130l175.11 5e-6c-19.092 27.914-51.184 46.232-87.555 46.232s-68.463-18.318-87.555-46.232zm-44.65-58h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48zm154 0h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48z"
            })
        ]
    })
});
const MaskbookSmileFaceSharpSVG = ({ size =20  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8 0H34.2C36.2987 0 38 1.70132 38 3.8V34.2C38 36.2987 36.2987 38 34.2 38H3.8C1.70132 38 0 36.2987 0 34.2V3.8C0 1.70132 1.70132 0 3.8 0ZM35.0939 21.6824V12.7412H2.90569V31.8753C2.90569 33.653 4.34681 35.0941 6.12451 35.0941H31.8751C33.6528 35.0941 35.0939 33.653 35.0939 31.8753V24.3648L29.8951 24.3649C27.9129 28.3903 23.7696 31.16 18.9795 31.16C13.1854 31.16 8.3378 27.1076 7.11632 21.6825L8.2704 21.6825V21.6824H35.0939ZM18.9795 28.4984C22.2314 28.4984 25.1008 26.8606 26.8078 24.3649H11.1511C12.8581 26.8606 15.7275 28.4984 18.9795 28.4984ZM7.15874 19.1789C7.50581 16.7524 9.59263 14.8871 12.1151 14.8871C14.6376 14.8871 16.7244 16.7524 17.0715 19.1789L14.3277 19.1789C14.026 18.245 13.1494 17.5694 12.1151 17.5694C11.0808 17.5694 10.2042 18.245 9.9025 19.1789L7.15874 19.1789ZM20.9282 19.1789C21.2752 16.7524 23.362 14.8871 25.8845 14.8871C28.407 14.8871 30.4938 16.7524 30.8409 19.1789L28.0971 19.1789C27.7954 18.245 26.9189 17.5694 25.8845 17.5694C24.8502 17.5694 23.9736 18.245 23.6719 19.1789L20.9282 19.1789ZM35.0939 6.12473C35.0939 4.34702 33.6528 2.90591 31.8751 2.90591H6.12451C4.34681 2.90591 2.90569 4.34702 2.90569 6.12473V10.0588H35.0939V6.12473Z"
        })
    })
;
const WalletSharpSVG = ({ size =20  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-alert-circle",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "14"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            })
        ]
    })
;
const MaskbookSmileFaceOutlinedSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 42 42",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            stroke: "#fff",
            strokeWidth: "3",
            d: "M39.55 21a18.55 18.55 0 11-37.1 0 18.55 18.55 0 0137.1 0z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M32.45 16.55v6.36H12.54a8.66 8.66 0 0016.21 1.9h3.7v5.35a2.3 2.3 0 01-2.29 2.3H11.84a2.3 2.3 0 01-2.3-2.3V16.55h22.91zm-5.9 8.27a6.74 6.74 0 01-11.14 0h11.15zM16.1 18.07a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm9.8 0a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm4.26-8.52a2.3 2.3 0 012.3 2.29v2.8H9.54v-2.8a2.3 2.3 0 012.29-2.3h18.32z",
            clipRule: "evenodd"
        })
    ]
});
const MaskbookTextSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 80 20",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m18.902 25.67h1.82v18.33h-3.744v-10.14l-5.668 7.956-5.694-7.956v10.14h-3.718v-18.33h1.82l7.592 10.504zm15.912 4.212h3.614v14.118h-3.614v-1.04c-1.17.78-2.574 1.248-4.134 1.248-4.42 0-7.02-3.562-7.02-7.306 0-3.77 2.6-7.306 7.02-7.306 1.482 0 2.938.468 4.134 1.17zm0 9.88v-5.668c-.884-.754-2.132-1.222-3.484-1.222-2.574 0-4.186 1.924-4.186 4.03 0 2.132 1.638 4.056 4.186 4.056 1.378 0 2.6-.442 3.484-1.196zm6.084 3.094 1.352-2.678c1.742.754 3.068 1.144 4.836 1.144 1.664 0 2.314-.624 2.314-1.352 0-.806-.806-1.17-2.99-1.638-3.042-.676-5.252-1.664-5.252-4.394 0-2.548 2.106-4.316 5.382-4.316 2.21 0 3.978.52 5.512 1.144l-1.196 2.652c-1.378-.52-2.99-.91-4.394-.91-1.378 0-2.08.494-2.08 1.248 0 .78.858 1.144 3.12 1.612 3.276.676 5.174 1.82 5.174 4.394 0 2.678-2.054 4.446-5.668 4.446-2.444 0-4.03-.338-6.11-1.352zm23.062-7.462 5.226 8.606h-4.004l-3.614-5.772-2.73 2.626v3.146h-3.614v-19.604h3.614v11.544l6.032-6.058h4.238z",
        fill: "currentColor",
        transform: "translate(0 -24)"
    })
});
function MaskbookTextIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookTextSVG
    }));
}
function MaskbookIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookSmileFaceSVG
    }));
}
function MaskbookIconOutlined(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookSmileFaceOutlinedSVG
    }));
}
function MaskbookSharpIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        style: {
            transform: 'translate(2px, 1.5px)'
        },
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskbookSmileFaceSharpSVG, {
        })
    }));
}
function MaskbookSharpIconOfSize(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskbookSmileFaceSharpSVG, {
            size: props.size
        })
    }));
}
function WalletSharp(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WalletSharpSVG, {
            size: props.size
        })
    }));
}


/***/ }),

/***/ 30540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ TokenAmountPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(13622);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(90874);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(98010);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/web3/UI/SelectTokenChip.tsx









const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        chip: {
            border: 'none',
            borderRadius: 8,
            paddingLeft: theme.spacing(0.5)
        },
        loadingChip: {
            marginRight: theme.spacing(-0.5)
        },
        icon: {
            color: theme.palette.text.primary,
            pointerEvents: 'none'
        },
        tokenIcon: {
            width: 16,
            height: 16
        }
    };
});
function SelectTokenChip(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { token , error , loading =false , readonly =false , ChipProps  } = props;
    const { classes  } = useStyles();
    if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classnames_default()(classes.chip, classes.loadingChip),
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: 16
        }),
        size: "small",
        clickable: false,
        variant: "outlined"
    }));
    if (!token) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        label: t('plugin_gitcoin_select_a_token'),
        size: "small",
        clickable: !readonly,
        ...ChipProps
    }));
    if (token && error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
            address: token.address,
            name: token.name,
            logoURI: token.logoURI
        }),
        deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Error/* default */.Z, {
            className: classes.icon
        }),
        label: token.symbol,
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        // the delete icon only visible when this callback provided
        onDelete: lodash.noop,
        ...ChipProps
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
            classes: {
                icon: classes.tokenIcon
            },
            address: token.address,
            name: token.name,
            logoURI: token.logoURI
        }),
        deleteIcon: readonly ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
            className: classes.icon
        }),
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        label: token.symbol,
        // the delete icon only visible when this callback provided
        onDelete: readonly ? undefined : lodash.noop,
        ...ChipProps
    }));
}

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/web3/UI/TokenAmountPanel.tsx










const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const TokenAmountPanel_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
        },
        input: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            '-moz-appearance': 'textfield'
        },
        max: {
            marginRight: theme.spacing(0.5),
            borderRadius: 8
        },
        token: {
            whiteSpace: 'pre',
            maxWidth: 300,
            paddingLeft: theme.spacing(1)
        },
        balance: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '80%',
            fontSize: 12,
            top: theme.spacing(0.5),
            position: 'absolute'
        },
        inputShrinkLabel: {
            transform: 'translate(17px, -3px) scale(0.75) !important'
        }
    };
});
function TokenAmountPanel(props) {
    var ref;
    const { amount , maxAmount , balance , token , onAmountChange , maxAmountShares =1 , label , disableToken =false , disableBalance =false , MaxChipProps ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(TokenAmountPanel_useStyles(), props);
    //#region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>{
        return {
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`)
        };
    }, [
        token === null || token === void 0 ? void 0 : token.decimals
    ]);
    const onChange = (0,react.useCallback)((ev)=>{
        const amount_ = ev.currentTarget.value.replace(/,/g, '.');
        if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) onAmountChange(`0${amount_}`);
        else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) onAmountChange(amount_);
    }, [
        onAmountChange,
        RE_MATCH_WHOLE_AMOUNT,
        RE_MATCH_FRACTION_AMOUNT
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        className: classes.root,
        label: label,
        fullWidth: true,
        required: true,
        type: "text",
        value: amount,
        variant: "outlined",
        onChange: onChange,
        placeholder: "0.0",
        InputProps: {
            inputProps: {
                autoComplete: 'off',
                autoCorrect: 'off',
                title: 'Token Amount',
                inputMode: 'decimal',
                min: 0,
                minLength: MIN_AMOUNT_LENGTH,
                maxLength: MAX_AMOUNT_LENGTH,
                pattern: '^[0-9]*[.,]?[0-9]*$',
                spellCheck: false,
                className: classes.input
            },
            endAdornment: disableToken ? null : token ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.token,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                },
                children: [
                    !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.balance,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: [
                            t('plugin_ito_list_table_got'),
                            ":",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                value: balance,
                                decimals: token.decimals,
                                significant: 6
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 2
                        },
                        children: [
                            balance !== '0' && !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                classes: {
                                    root: classnames_default()(classes.max, MaxChipProps === null || MaxChipProps === void 0 ? void 0 : (ref = MaxChipProps.classes) === null || ref === void 0 ? void 0 : ref.root),
                                    ...MaxChipProps === null || MaxChipProps === void 0 ? void 0 : MaxChipProps.classes
                                },
                                size: "small",
                                label: "MAX",
                                clickable: true,
                                color: "primary",
                                variant: "outlined",
                                onClick: ()=>{
                                    onAmountChange((0,web3_shared_src/* formatBalance */.azF)(new (bignumber_default())(maxAmount !== null && maxAmount !== void 0 ? maxAmount : balance).dividedBy(maxAmountShares).decimalPlaces(0, 1), token.decimals));
                                },
                                ...MaxChipProps
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenChip, {
                                token: token,
                                ...props.SelectTokenChip
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.token,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 2
                },
                children: [
                    !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.balance,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: "-"
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenChip, {
                        token: token,
                        ...props.SelectTokenChip
                    })
                ]
            }),
            ...props.InputProps
        },
        InputLabelProps: {
            shrink: true,
            classes: {
                shrink: classes.inputShrinkLabel
            }
        },
        ...props.TextFieldProps
    }));
}


/***/ })

}]);