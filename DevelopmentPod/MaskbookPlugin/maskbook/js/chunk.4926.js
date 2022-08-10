"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4926],{

/***/ 95837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ NetworkTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50719);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44451);
/* harmony import */ var _mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92916);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65845);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21784);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77818);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme, props)=>({
        tab: {
            backgroundColor: !props.isDashboard ? `${theme.palette.background.default}!important` : `${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primaryBackground2 */ .ZN.primaryBackground2}!important`,
            marginRight: 1,
            '&:last-child': {
                marginRight: 0
            }
        },
        tabs: {
            '& .MuiTabs-flexContainer': {
                backgroundColor: theme.palette.background.paper
            },
            '& .Mui-selected': {
                color: '#ffffff',
                backgroundColor: `${theme.palette.primary.main}!important`
            },
            '& .MuiTabs-scroller': {
                margin: '0 1px'
            },
            '& .MuiTabs-scrollButtons': {
                width: 'unset',
                backgroundColor: !props.isDashboard ? `${theme.palette.background.default}!important` : `${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primaryBackground2 */ .ZN.primaryBackground2}!important`,
                '&.Mui-disabled': {
                    opacity: 1,
                    '& svg': {
                        opacity: 0.3
                    }
                }
            }
        }
    })
);
function NetworkTab(props) {
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isDashboardPage */ .K2)();
    const { chainId , setChainId , chains  } = props;
    const networks = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkDescriptors */ .px)();
    const usedNetworks = networks.filter((x)=>chains.find((c)=>c === x.chainId
        )
    );
    const networkIds = usedNetworks.map((x)=>x.chainId.toString()
    );
    const [currentTab, , , setTab] = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useTabs */ .YE)(chainId.toString() ?? networkIds[0], ...networkIds);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        value: currentTab,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskTabList */ .C3, {
            variant: "flexible",
            onChange: (e, v)=>{
                setChainId(Number.parseInt(v, 10));
                setTab(v);
            },
            "aria-label": "Network Tabs",
            children: usedNetworks.map((x)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    "aria-label": x.name,
                    value: x.chainId.toString(),
                    label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        display: "inline-flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 0.5,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .WalletIcon */ .o, {
                                mainIcon: x.icon,
                                size: 18
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                variant: "body2",
                                fontSize: 14,
                                fontWeight: currentTab === x.chainId.toString() ? 700 : 400,
                                children: x.name
                            })
                        ]
                    })
                }, x.chainId);
            })
        })
    });
}


/***/ }),

/***/ 55274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96322);
/* harmony import */ var _SNSAdaptor_trader_TraderDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40053);



const dashboard = {
    ..._base__WEBPACK_IMPORTED_MODULE_1__/* .base */ .u,
    init (signal) {},
    GlobalInjection: function Component() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_trader_TraderDialog__WEBPACK_IMPORTED_MODULE_2__/* .TraderDialog */ .F, {})
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboard);


/***/ }),

/***/ 40053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ TraderDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70226);
/* harmony import */ var _masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89239);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50719);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46715);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80226);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77818);
/* harmony import */ var _trader_useAllProviderTradeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9831);
/* harmony import */ var _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94806);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38329);
/* harmony import */ var _Trader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78973);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93455);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31939);
/* harmony import */ var _components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47919);
/* harmony import */ var _components_shared_NetworkTab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95837);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40661);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67938);



















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .makeStyles */ .ZL)()((theme)=>({
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
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .isDashboardPage */ .K2)();
    const pluginID = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const traderDefinition = (0,_masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_3__/* .useActivatedPlugin */ .Rc)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.Trader */ .je.Trader, 'any');
    const chainIdList = traderDefinition?.enableRequirement.web3?.[pluginID]?.supportedChainIds ?? [];
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const currentChainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_16__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const chainIdValid = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useChainIdValid */ .as)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_16__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const [traderProps, setTraderProps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [chainId, setChainId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentChainId);
    const { open: remoteOpen , closeDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_9__/* .PluginTraderMessages.swapDialogUpdated */ .A.swapDialogUpdated, (ev)=>{
        if (ev?.traderProps) setTraderProps(ev.traderProps);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!chainIdValid) closeDialog();
    }, [
        chainIdValid,
        closeDialog
    ]);
    (0,react_use__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(()=>{
        if (currentChainId) {
            setChainId(currentChainId);
        }
    }, [
        currentChainId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_8__/* .TargetChainIdContext.Provider */ .Zq.Provider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_trader_useAllProviderTradeContext__WEBPACK_IMPORTED_MODULE_7__/* .AllProviderTradeContext.Provider */ .TX.Provider, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .InjectedDialog */ .Fl, {
                open: open || remoteOpen,
                onClose: ()=>{
                    onClose?.();
                    setTraderProps(undefined);
                    closeDialog();
                },
                title: t('plugin_trader_swap'),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    className: classes.content,
                    children: [
                        !isDashboard ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.walletStatusBox,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_13__/* .WalletStatusBox */ .C, {})
                        }) : null,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.abstractTabWrapper,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_NetworkTab__WEBPACK_IMPORTED_MODULE_14__/* .NetworkTab */ .L, {
                                chainId: chainId,
                                /* @ts-ignore */ setChainId: setChainId,
                                classes: classes,
                                chains: chainIdList
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Trader__WEBPACK_IMPORTED_MODULE_10__/* .Trader */ .A, {
                            chainId: chainId,
                            ...traderProps,
                            classes: {
                                root: classes.tradeRoot
                            }
                        })
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 83049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName)
/* harmony export */ });
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60718);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67938);


const resolveDataProviderName = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .FG)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'CoinGecko',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'CoinMarketCap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'Uniswap Info'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveDataProviderLink = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .FG)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'https://www.coingecko.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'https://coinmarketcap.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'https://info.uniswap.org/'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveTradeProviderName = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .FG)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2]: 'Uniswap V2',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3]: 'Uniswap V3',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.ZRX */ .z4.ZRX]: '0x',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP]: 'SushiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP]: 'SashimiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.BALANCER */ .z4.BALANCER]: 'Balancer',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP]: 'QuickSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP]: 'PancakeSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.DODO */ .z4.DODO]: 'DODO',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.BANCOR */ .z4.BANCOR]: 'Bancor',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.OPENOCEAN */ .z4.OPENOCEAN]: 'OpenOcean',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.TRADERJOE */ .z4.TRADERJOE]: 'TraderJoe',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.PANGOLIN */ .z4.PANGOLIN]: 'PangolinDex',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.TRISOLARIS */ .z4.TRISOLARIS]: 'Trisolaris',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.WANNASWAP */ .z4.WANNASWAP]: 'WannaSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.VENOMSWAP */ .z4.VENOMSWAP]: 'VenomSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.OPENSWAP */ .z4.OPENSWAP]: 'OpenSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.MDEX */ .z4.MDEX]: 'Mdex',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.DEFIKINGDOMS */ .z4.DEFIKINGDOMS]: 'DefiKingdoms'
}, (tradeProvider)=>{
    throw new Error(`Unknown provider type: ${tradeProvider}`);
});
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}y`;
    if (days >= 30) return `${Math.floor(days / 30)}m`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    return `${days}d`;
}


/***/ }),

/***/ 11783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vo": () => (/* binding */ TokenPanelType),
/* harmony export */   "tB": () => (/* binding */ TradeStrategy)
/* harmony export */ });
/* unused harmony exports WarningLevel, ZrxTradePool */
var WarningLevel;
(function(WarningLevel) {
    WarningLevel[WarningLevel["LOW"] = 1] = "LOW";
    WarningLevel[WarningLevel["MEDIUM"] = 2] = "MEDIUM";
    WarningLevel[WarningLevel["HIGH"] = 3] = "HIGH";
    WarningLevel[WarningLevel["CONFIRMATION_REQUIRED"] = 4] = "CONFIRMATION_REQUIRED";
    WarningLevel[WarningLevel["BLOCKED"] = 5] = "BLOCKED";
})(WarningLevel || (WarningLevel = {}));
var ZrxTradePool;
(function(ZrxTradePool) {
    ZrxTradePool["ZRX"] = '0x';
    ZrxTradePool["ACryptoS"] = "ACryptoS";
    ZrxTradePool["ApeSwap"] = "ApeSwap";
    ZrxTradePool["BakerySwap"] = "BakerySwap";
    ZrxTradePool["Balancer"] = "Balancer";
    ZrxTradePool["BalancerV2"] = 'Balancer_V2';
    ZrxTradePool["Bancor"] = "Bancor";
    ZrxTradePool["Belt"] = "Belt";
    ZrxTradePool["CafeSwap"] = "CafeSwap";
    ZrxTradePool["CheeseSwap"] = "CheeseSwap";
    ZrxTradePool["ComethSwap"] = "ComethSwap";
    ZrxTradePool["Component"] = "Component";
    ZrxTradePool["Cream"] = 'CREAM';
    ZrxTradePool["CryptoCom"] = "CryptoCom";
    ZrxTradePool["Curve"] = "Curve";
    ZrxTradePool["CurveV2"] = 'Curve_V2';
    ZrxTradePool["Dfyn"] = "Dfyn";
    ZrxTradePool["Dodo"] = 'DODO';
    ZrxTradePool["DodoV2"] = 'DODO_V2';
    ZrxTradePool["Ellipsis"] = "Ellipsis";
    ZrxTradePool["Eth2Dai"] = "Eth2Dai";
    ZrxTradePool["FirebirdOneSwap"] = "FirebirdOneSwap";
    ZrxTradePool["IronSwap"] = "IronSwap";
    ZrxTradePool["JetSwap"] = "JetSwap";
    ZrxTradePool["JulSwap"] = "JulSwap";
    ZrxTradePool["Kyber"] = "Kyber";
    ZrxTradePool["KyberDMM"] = "KyberDMM";
    ZrxTradePool["Lido"] = "Lido";
    ZrxTradePool["Linkswap"] = "Linkswap";
    ZrxTradePool["LiquidityProvider"] = "LiquidityProvider";
    ZrxTradePool["MStable"] = 'mStable';
    ZrxTradePool["MakerPsm"] = "MakerPsm";
    ZrxTradePool["Mesh"] = "Mesh";
    ZrxTradePool["Mooniswap"] = "Mooniswap";
    ZrxTradePool["MultiBridge"] = "MultiBridge";
    ZrxTradePool["MultiHop"] = "MultiHop";
    ZrxTradePool["Native"] = "Native";
    ZrxTradePool["Nerve"] = "Nerve";
    ZrxTradePool["Oasis"] = "Oasis";
    ZrxTradePool["PancakeSwap"] = "PancakeSwap";
    ZrxTradePool["PancakeSwapV2"] = 'PancakeSwap_V2';
    ZrxTradePool["QuickSwap"] = "QuickSwap";
    ZrxTradePool["Saddle"] = "Saddle";
    ZrxTradePool["Shell"] = "Shell";
    ZrxTradePool["Smoothy"] = "Smoothy";
    ZrxTradePool["SnowSwap"] = "SnowSwap";
    ZrxTradePool["SushiSwap"] = "SushiSwap";
    ZrxTradePool["Swerve"] = "Swerve";
    ZrxTradePool["Uniswap"] = "Uniswap";
    ZrxTradePool["UniswapV2"] = 'Uniswap_V2';
    ZrxTradePool["UniswapV3"] = 'Uniswap_V3';
    ZrxTradePool["WaultSwap"] = "WaultSwap";
    ZrxTradePool["xSigma"] = "xSigma";
    ZrxTradePool["TraderJoe"] = "TraderJoe";
    ZrxTradePool["PangolinDex"] = "PangolinDex";
    ZrxTradePool["Trisolaris"] = "Trisolaris";
    ZrxTradePool["WannaSwap"] = "WannaSwap";
    ZrxTradePool["Mdex"] = "Mdex";
    ZrxTradePool["VenomSwap"] = "VenomSwap";
    ZrxTradePool["OpenSwap"] = "OpenSwap";
    ZrxTradePool["DefiKingdoms"] = "DefiKingdoms";
})(ZrxTradePool || (ZrxTradePool = {}));
var TradeStrategy;
(function(TradeStrategy) {
    TradeStrategy[TradeStrategy["ExactIn"] = 0] = "ExactIn";
    TradeStrategy[TradeStrategy["ExactOut"] = 1] = "ExactOut";
})(TradeStrategy || (TradeStrategy = {}));
var TokenPanelType;
(function(TokenPanelType) {
    TokenPanelType[TokenPanelType["Input"] = 0] = "Input";
    TokenPanelType[TokenPanelType["Output"] = 1] = "Output";
})(TokenPanelType || (TokenPanelType = {}));


/***/ }),

/***/ 44737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ createContainer),
/* harmony export */   "u": () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);


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


/***/ })

}]);