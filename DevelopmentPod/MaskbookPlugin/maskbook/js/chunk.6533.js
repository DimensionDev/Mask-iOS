"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6533],{

/***/ 79678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58921);
/* harmony import */ var _SNSAdaptor_trader_TraderDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39761);



const dashboard = {
    ..._base__WEBPACK_IMPORTED_MODULE_1__/* .base */ .u,
    init (signal) {},
    GlobalInjection: function Component() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_trader_TraderDialog__WEBPACK_IMPORTED_MODULE_2__/* .TraderDialog */ .F, {})
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboard);


/***/ }),

/***/ 39761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ TraderDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27194);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63541);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35437);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57464);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39850);
/* harmony import */ var _trader_useAllProviderTradeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34304);
/* harmony import */ var _trader_useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84686);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61274);
/* harmony import */ var _Trader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81152);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13573);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92597);
/* harmony import */ var _components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57393);
/* harmony import */ var _components_shared_NetworkTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6054);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19669);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79226);

















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_10__/* .makeStyles */ .ZL)()((theme)=>({
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        abstractTabWrapper: {
            width: '100%',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2)
        },
        tab: {
            height: 36,
            minHeight: 36
        },
        tabPaper: {
            backgroundColor: 'inherit'
        },
        tabs: {
            width: 535,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        content: {
            paddingTop: 0,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tradeRoot: {
            width: 535,
            margin: 'auto'
        }
    })
);
function TraderDialog({ open , onClose  }) {
    var ref, ref1;
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .isDashboardPage */ .K2)();
    const pluginID = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .usePluginIDContext */ .Zn)();
    const traderDefinition = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .useActivatedPlugin */ .Rc)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.Trader */ .je.Trader, 'any');
    var ref2;
    const chainIdList = (ref2 = (ref = traderDefinition === null || traderDefinition === void 0 ? void 0 : traderDefinition.enableRequirement.web3) === null || ref === void 0 ? void 0 : (ref1 = ref[pluginID]) === null || ref1 === void 0 ? void 0 : ref1.supportedChainIds) !== null && ref2 !== void 0 ? ref2 : [];
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const currentChainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .useChainId */ .xx)();
    const chainIdValid = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .useChainIdValid */ .as)();
    const [traderProps, setTraderProps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [chainId, setChainId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentChainId);
    const { open: remoteOpen , closeDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_7__/* .PluginTraderMessages.swapDialogUpdated */ .A.swapDialogUpdated, (ev)=>{
        if (ev === null || ev === void 0 ? void 0 : ev.traderProps) setTraderProps(ev.traderProps);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!chainIdValid) closeDialog();
    }, [
        chainIdValid,
        closeDialog
    ]);
    (0,react_use__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(()=>{
        if (currentChainId) {
            setChainId(currentChainId);
        }
    }, [
        currentChainId
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_trader_useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_6__/* .TargetChainIdContext.Provider */ .Z.Provider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_trader_useAllProviderTradeContext__WEBPACK_IMPORTED_MODULE_5__/* .AllProviderTradeContext.Provider */ .TX.Provider, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__/* .InjectedDialog */ .F, {
                open: open || remoteOpen,
                onClose: ()=>{
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                    setTraderProps(undefined);
                    closeDialog();
                },
                title: t('plugin_trader_swap'),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: classes.content,
                    children: [
                        !isDashboard ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.walletStatusBox,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_11__/* .WalletStatusBox */ .C, {})
                        }) : null,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.abstractTabWrapper,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_NetworkTab__WEBPACK_IMPORTED_MODULE_12__/* .NetworkTab */ .L, {
                                chainId: chainId,
                                setChainId: setChainId,
                                classes: classes,
                                chains: chainIdList
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Trader__WEBPACK_IMPORTED_MODULE_8__/* .Trader */ .A, {
                            ...traderProps,
                            chainId: chainId,
                            classes: {
                                root: classes.tradeRoot
                            }
                        })
                    ]
                })
            })
        })
    }));
}


/***/ }),

/***/ 21957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName)
/* harmony export */ });
/* unused harmony exports resolveCurrencyName, resolveTradeProviderLink, resolveTradePairLink, resolveUniswapWarningLevel, resolveUniswapWarningLevelColor, resolveZrxTradePoolName */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41391);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48476);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66559);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43545);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88486);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_4__);






function resolveCurrencyName(currency) {
    return [
        currency.name,
        currency.symbol ? `"${currency.symbol}"` : '',
        currency.description ? `(${currency.description})` : '', 
    ].join(' ');
}
const resolveDataProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'CoinGecko',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'CoinMarketCap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'Uniswap Info'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveDataProviderLink = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'https://www.coingecko.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'https://coinmarketcap.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'https://info.uniswap.org/'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveTradeProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2]: 'Uniswap V2',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3]: 'Uniswap V3',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX]: '0x',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP]: 'SushiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP]: 'SashimiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER]: 'Balancer',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP]: 'QuickSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP]: 'PancakeSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO]: 'DODO',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BANCOR */ .z4.BANCOR]: 'Bancor',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.OPENOCEAN */ .z4.OPENOCEAN]: 'OpenOcean',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.TRADERJOE */ .z4.TRADERJOE]: 'TraderJoe',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANGOLIN */ .z4.PANGOLIN]: 'PangolinDex',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.TRISOLARIS */ .z4.TRISOLARIS]: 'Trisolaris',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.WANNASWAP */ .z4.WANNASWAP]: 'WannaSwap'
}, (tradeProvider)=>{
    throw new Error(`Unknown provider type: ${tradeProvider}`);
});
function resolveTradeProviderLink(tradeProvider, networkType) {
    switch(tradeProvider){
        case TradeProvider.UNISWAP_V2:
            return 'https://uniswap.org/';
        case TradeProvider.UNISWAP_V3:
            return 'https://uniswap.org/';
        case TradeProvider.ZRX:
            switch(networkType){
                case NetworkType.Ethereum:
                    return 'https://api.0x.org/';
                case NetworkType.Binance:
                    return 'https://bsc.api.0x.org/';
                case NetworkType.Polygon:
                    return 'https://polygon.api.0x.org/';
                case NetworkType.Arbitrum:
                    return 'https://aribitrum.api.0x.org/';
                case NetworkType.xDai:
                    return 'https://xdai.api.0x.org/';
                case NetworkType.Celo:
                    return 'https://celo.api.0x.org/';
                case NetworkType.Fantom:
                    return 'https://fantom.api.0x.org/';
                case NetworkType.Avalanche:
                    return 'https://avalanche.api.0x.org/';
                case NetworkType.Aurora:
                    return 'https://aurora.api.0x.org/';
                case NetworkType.Boba:
                case NetworkType.Fuse:
                case NetworkType.Metis:
                case NetworkType.Avalanche:
                case NetworkType.Optimistic:
                    console.error('To be implement network: ', networkType);
                    return '';
                default:
                    safeUnreachable(networkType);
                    return '';
            }
        case TradeProvider.SUSHISWAP:
            return 'https://sushiswapclassic.org/';
        case TradeProvider.SASHIMISWAP:
            return 'https://sashimi.cool/';
        case TradeProvider.BALANCER:
            return 'https://balancer.exchange/';
        case TradeProvider.QUICKSWAP:
            return 'https://quickswap.exchange/';
        case TradeProvider.PANCAKESWAP:
            return 'https://exchange.pancakeswap.finance/#/swap';
        case TradeProvider.DODO:
            return 'https://app.dodoex.io';
        case TradeProvider.BANCOR:
            return 'https://app.bancor.network/eth/swap';
        case TradeProvider.OPENOCEAN:
            return 'https://openocean.finance/classic';
        case TradeProvider.TRADERJOE:
            return 'https://traderjoexyz.com/#/trade';
        case TradeProvider.PANGOLIN:
            return 'https://app.pangolin.exchange/#/swap';
        case TradeProvider.TRISOLARIS:
            return 'https://www.trisolaris.io/#/swap';
        case TradeProvider.WANNASWAP:
            return 'https://wannaswap.finance/exchange/swap';
        default:
            unreachable(tradeProvider);
    }
}
function resolveTradePairLink(tradeProvider, address, networkType) {
    switch(tradeProvider){
        case TradeProvider.UNISWAP_V2:
            return `https://v2.info.uniswap.org/pair/${address}`;
        case TradeProvider.UNISWAP_V3:
            return `https://info.uniswap.org/pair/${address}`;
        case TradeProvider.ZRX:
            return '';
        case TradeProvider.DODO:
            {
                if (!networkNames[networkType]) {
                    console.error('Unsupported network: ', networkType);
                    return '';
                }
                return urlcat('https://app.dodoex.io/exchange/:address', {
                    address,
                    network: networkNames[networkType],
                    forced: true
                });
            }
        case TradeProvider.SUSHISWAP:
            switch(networkType){
                case NetworkType.Ethereum:
                    return `https://analytics.sushi.com/pairs/${address}`;
                case NetworkType.Binance:
                    return `https://analytics-bsc.sushi.com/pairs/${address}`;
                case NetworkType.Polygon:
                    return `https://analytics-polygon.sushi.com/pairs/${address}`;
                case NetworkType.Arbitrum:
                    return `https://analytics-aribtrum.sushi.com/pairs/${address}`;
                case NetworkType.xDai:
                    return `https://analytics-xdai.sushi.com/pairs/${address}`;
                case NetworkType.Celo:
                    return `https://analytics-celo.sushi.com/pairs/${address}`;
                case NetworkType.Fantom:
                    return `https://analytics-ftm.sushi.com/pairs/${address}`;
                case NetworkType.Avalanche:
                    return `https://analytics-avx.sushi.com/pairs/${address}`;
                case NetworkType.Aurora:
                    return `https://analytics-aurora.sushi.com/pairs/${address}`;
                case NetworkType.Boba:
                case NetworkType.Fuse:
                case NetworkType.Metis:
                case NetworkType.Optimistic:
                    console.error('To be implement network: ', networkType);
                    return '';
                default:
                    safeUnreachable(networkType);
                    return '';
            }
        case TradeProvider.SASHIMISWAP:
            return `https://info.sashimi.cool/pair/${address}`;
        case TradeProvider.BALANCER:
            return `https://pools.balancer.exchange/#/pool/${address}/`;
        case TradeProvider.QUICKSWAP:
            return `https://info.quickswap.exchange/pair/${address}`;
        case TradeProvider.PANCAKESWAP:
            return `https://pancakeswap.info/pool/${address}`;
        case TradeProvider.BANCOR:
            // TODO - Bancor analytics should be available with V3
            return '';
        case TradeProvider.OPENOCEAN:
            // TODO - OpenOcean
            return '';
        case TradeProvider.TRADERJOE:
            return `https://analytics.traderjoexyz.com/pairs/${address}`;
        case TradeProvider.PANGOLIN:
            return `https://info.pangolin.exchange/pair/${address}`;
        case TradeProvider.TRISOLARIS:
            // TODO - add Trisolaris Analytics
            return '';
        case TradeProvider.WANNASWAP:
            // TODO - add WannaSwap analytics
            return '';
        default:
            unreachable(tradeProvider);
    }
}
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}y`;
    if (days >= 30) return `${Math.floor(days / 30)}m`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    return `${days}d`;
}
function resolveUniswapWarningLevel(priceImpact) {
    const priceImpact_ = priceImpact.multipliedBy(BIPS_BASE);
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_NON_EXPERT_BLOCKED)) return WarningLevel.BLOCKED;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN)) return WarningLevel.CONFIRMATION_REQUIRED;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_HIGH)) return WarningLevel.HIGH;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_MEDIUM)) return WarningLevel.MEDIUM;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_LOW)) return WarningLevel.LOW;
    return WarningLevel.LOW;
}
const resolveUniswapWarningLevelColor = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.LOW */ .Os.LOW]: 'inherit',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.MEDIUM */ .Os.MEDIUM]: '#f3841e',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.HIGH */ .Os.HIGH]: '#f3841e',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.CONFIRMATION_REQUIRED */ .Os.CONFIRMATION_REQUIRED]: '#ff6871',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.BLOCKED */ .Os.BLOCKED]: '#ff6871'
}, '#27ae60');
const resolveZrxTradePoolName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ZRX */ .Zy.ZRX]: '0x',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ACryptoS */ .Zy.ACryptoS]: 'ACryptoS',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ApeSwap */ .Zy.ApeSwap]: 'ApeSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BakerySwap */ .Zy.BakerySwap]: 'BakerySwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Balancer */ .Zy.Balancer]: 'Balancer',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BalancerV2 */ .Zy.BalancerV2]: 'Balancer V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Bancor */ .Zy.Bancor]: 'Bancor',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Belt */ .Zy.Belt]: 'Belt',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CafeSwap */ .Zy.CafeSwap]: 'CafeSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CheeseSwap */ .Zy.CheeseSwap]: 'CheeseSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ComethSwap */ .Zy.ComethSwap]: 'ComethSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Component */ .Zy.Component]: 'Component',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Cream */ .Zy.Cream]: 'CREAM',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CryptoCom */ .Zy.CryptoCom]: 'CryptoCom',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Curve */ .Zy.Curve]: 'Curve',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CurveV2 */ .Zy.CurveV2]: 'Curve V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dfyn */ .Zy.Dfyn]: 'Dfyn',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dodo */ .Zy.Dodo]: 'DODO',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.DodoV2 */ .Zy.DodoV2]: 'DODO V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Ellipsis */ .Zy.Ellipsis]: 'Ellipsis',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Eth2Dai */ .Zy.Eth2Dai]: 'Eth2Dai',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.FirebirdOneSwap */ .Zy.FirebirdOneSwap]: 'FirebirdOneSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.IronSwap */ .Zy.IronSwap]: 'IronSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JetSwap */ .Zy.JetSwap]: 'JetSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JulSwap */ .Zy.JulSwap]: 'JulSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Kyber */ .Zy.Kyber]: 'Kyber',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.KyberDMM */ .Zy.KyberDMM]: 'KyberDMM',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Lido */ .Zy.Lido]: 'Lido',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Linkswap */ .Zy.Linkswap]: 'Linkswap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.LiquidityProvider */ .Zy.LiquidityProvider]: 'LiquidityProvider',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MStable */ .Zy.MStable]: 'mStable',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MakerPsm */ .Zy.MakerPsm]: 'MakerPsm',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mesh */ .Zy.Mesh]: 'Mesh',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mooniswap */ .Zy.Mooniswap]: 'Mooniswap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiBridge */ .Zy.MultiBridge]: 'MultiBridge',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiHop */ .Zy.MultiHop]: 'MultiHop',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Native */ .Zy.Native]: 'Native',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Nerve */ .Zy.Nerve]: 'Nerve',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Oasis */ .Zy.Oasis]: 'Oasis',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwap */ .Zy.PancakeSwap]: 'PancakeSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwapV2 */ .Zy.PancakeSwapV2]: 'PancakeSwap V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.QuickSwap */ .Zy.QuickSwap]: 'QuickSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Saddle */ .Zy.Saddle]: 'Saddle',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Shell */ .Zy.Shell]: 'Shell',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Smoothy */ .Zy.Smoothy]: 'Smoothy',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SnowSwap */ .Zy.SnowSwap]: 'SnowSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SushiSwap */ .Zy.SushiSwap]: 'SushiSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Swerve */ .Zy.Swerve]: 'Swerve',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Uniswap */ .Zy.Uniswap]: 'Uniswap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV2 */ .Zy.UniswapV2]: 'Uniswap V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV3 */ .Zy.UniswapV3]: 'Uniswap V3',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.WaultSwap */ .Zy.WaultSwap]: 'WaultSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.xSigma */ .Zy.xSigma]: 'xSigma',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.TraderJoe */ .Zy.TraderJoe]: 'TraderJoe',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PangolinDex */ .Zy.PangolinDex]: 'PangolinDex',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Trisolaris */ .Zy.Trisolaris]: 'Trisolaris',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.WannaSwap */ .Zy.WannaSwap]: 'WannaSwap'
}, 'Unknown');


/***/ })

}]);