"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7347],{

/***/ 60312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ArrowDownRound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const ArrowDownRound = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ArrowDown', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m4 5.6 4 4 4-4",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');


/***/ }),

/***/ 1968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ NetworkSelector)
/* harmony export */ });
/* unused harmony export NetworkSelectorUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56561);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18287);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43021);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70609);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98086);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63541);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95130);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63151);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63361);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39850);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60312);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63081);











const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            minWidth: 140,
            backgroundColor: theme.palette.primary.main,
            padding: '4px 12px 4px 4px',
            minHeight: 28,
            borderRadius: 18,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        iconWrapper: {
            width: 20,
            height: 20,
            borderRadius: 20,
            marginRight: 10
        },
        title: {
            color: '#ffffff',
            fontSize: 12,
            lineHeight: '16px',
            marginLeft: 4
        },
        arrow: {
            stroke: '#ffffff',
            fontSize: 16
        },
        networkName: {
            marginLeft: 10
        },
        menu: {
            maxHeight: 466,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    })
);
const NetworkSelector = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const networks = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_4__/* .getRegisteredWeb3Networks */ .Rm)();
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .useAccount */ .m)();
    const chainId1 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .useChainId */ .xx)();
    const providerType = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useValueRef */ .E)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentProviderSettings */ .t1);
    const onChainChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (chainId)=>{
        if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .ProviderType.MaskWallet */ .lP.MaskWallet) {
            await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.updateAccount */ .V.updateAccount({
                chainId
            });
        }
        return _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.updateMaskAccount */ .V.updateMaskAccount({
            chainId,
            account: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentMaskWalletAccountSettings.value */ .T_.value
        });
    }, [
        providerType,
        account
    ]);
    var ref;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NetworkSelectorUI, {
        currentNetwork: (ref = networks.find((x)=>x.chainId === chainId1
        )) !== null && ref !== void 0 ? ref : networks[0],
        onChainChange: onChainChange,
        networks: networks
    }));
});
const NetworkSelectorUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ currentNetwork , onChainChange  })=>{
    const { classes  } = useStyles();
    const networks = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_4__/* .getRegisteredWeb3Networks */ .Rm)();
    var ref;
    const [menu, openMenu] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useMenuConfig */ ._X)((ref = networks === null || networks === void 0 ? void 0 : networks.filter((x)=>x.networkSupporterPluginID === _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM
    ).filter((x)=>_shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.support_testnet_switch */ .vU.support_testnet_switch ? true : x.isMainnet
    ).map((network)=>{
        const chainId = network.chainId;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            onClick: ()=>onChainChange(chainId)
            ,
            selected: chainId === currentNetwork.chainId,
            children: [
                network.isMainnet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                    size: 20,
                    networkIcon: network.icon
                }) : _shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.support_testnet_switch */ .vU.support_testnet_switch ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ChainIcon */ .fq, {
                    color: network.iconColor
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    sx: {
                        marginLeft: 1
                    },
                    children: network.name
                })
            ]
        }, chainId));
    })) !== null && ref !== void 0 ? ref : [], {
        classes: {
            paper: classes.menu
        }
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                className: classes.root,
                onClick: openMenu,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            currentNetwork.isMainnet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                                size: 20,
                                networkIcon: currentNetwork.icon
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: classes.iconWrapper,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ChainIcon */ .fq, {
                                    color: currentNetwork.iconColor
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.title,
                                children: currentNetwork.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_14__/* .ArrowDownRound */ .l, {
                        className: classes.arrow
                    })
                ]
            }),
            menu
        ]
    }));
});


/***/ }),

/***/ 98803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SwapPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(51596);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(67937);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.5.0_b402f089c119e77071a0bfc88393bc7a/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(13122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(14417);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ../icons/general/Loading.tsx
var Loading = __webpack_require__(16787);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(63151);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(13152);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx
var NetworkSelector = __webpack_require__(1968);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
;// CONCATENATED MODULE: ./src/extension/popups/components/WalletStateBar/index.tsx










const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        bar: {
            minWidth: 80,
            borderRadius: 30,
            lineHeight: '28px',
            height: '28px',
            cursor: 'pointer'
        },
        dot: {
            position: 'relative',
            top: 0,
            display: 'inline-block',
            marginRight: theme.spacing(0.8),
            lineHeight: '28px',
            width: 10,
            height: 10,
            borderRadius: 5
        }
    })
);
const WalletStateBarUI = /*#__PURE__*/ (0,react.memo)(({ isPending , walletAddress , walletName , openConnectWalletDialog , children , domain , ...rest })=>{
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const { Utils  } = (0,plugin_infra_src/* useWeb3State */.dM)();
    const providerDescriptor = (0,plugin_infra_src/* useProviderDescriptor */.fY)(types/* ProviderType.MaskWallet */.lP.MaskWallet, plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    if (!providerDescriptor) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "center",
        direction: "row",
        alignItems: "center",
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelector */.k, {}),
            isPending && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    px: 2,
                    color: '#ffb915',
                    backgroundColor: 'rgba(255, 185, 21, 0.1)'
                },
                className: classes.bar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Loading/* LoadingIcon */.H, {
                        sx: {
                            fontSize: 12,
                            mr: 0.8,
                            color: '#ffb915',
                            backgroundColor: 'rgba(255, 185, 21, 0.1)'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        fontSize: 12,
                        display: "inline-block",
                        children: t('popups_wallet_transactions_pending')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                onClick: openConnectWalletDialog,
                sx: {
                    cursor: 'pointer'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        mx: 1,
                        justifyContent: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* WalletIcon */.o, {
                            providerIcon: providerDescriptor.icon,
                            inverse: true,
                            size: 38
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            userSelect: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                fontSize: 16,
                                display: "flex",
                                alignItems: "center",
                                children: [
                                    walletName !== null && walletName !== void 0 ? walletName : '-',
                                    domain ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: 14,
                                        marginLeft: 1,
                                        children: Utils === null || Utils === void 0 ? void 0 : (ref = Utils.formatDomainName) === null || ref === void 0 ? void 0 : ref.call(Utils, domain)
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                fontSize: 12,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                    address: walletAddress !== null && walletAddress !== void 0 ? walletAddress : '-',
                                    size: 10,
                                    formatter: formatter/* formatEthereumAddress */.j8
                                })
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.2.2_react@18.0.0-rc.2/node_modules/react-router/index.js
var react_router = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(1433);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/Trader.tsx + 28 modules
var Trader = __webpack_require__(81152);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Swap/SwapBox/index.tsx







function SwapBox() {
    const location = (0,react_router/* useLocation */.TH)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const coin = (0,react.useMemo)(()=>{
        if (!location.search) return undefined;
        const params = new URLSearchParams(location.search);
        var ref;
        return {
            id: params.get('id'),
            name: params.get('name'),
            symbol: params.get('symbol'),
            contract_address: params.get('contract_address'),
            decimals: Number.parseInt((ref = params.get('decimals')) !== null && ref !== void 0 ? ref : '0', 10)
        };
    }, [
        location
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        navigate(shared_base_src/* PopupRoutes.Swap */.mZ.Swap, {
            replace: true
        });
    }, [
        chainId
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Trader/* Trader */.A, {
        coin: coin,
        chainId: chainId
    }));
}

// EXTERNAL MODULE: ./src/web3/context.ts
var web3_context = __webpack_require__(60027);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(84686);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts + 45 modules
var useAllProviderTradeContext = __webpack_require__(35396);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Swap/index.tsx















const Swap_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        walletStateBar: {
            color: theme.palette.grey['900']
        },
        page: {
            minHeight: '100vh',
            maxWidth: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7F9FA'
        },
        container: {
            width: 800,
            backgroundColor: theme.palette.background.paper,
            marginLeft: 'auto',
            marginRight: 'auto',
            minHeight: 720,
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            padding: '32px 0'
        },
        header: {
            width: 520,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: '22px 0'
        },
        title: {
            fontSize: 32,
            marginTop: 16,
            fontWeight: 'bold',
            color: theme.palette.grey['900']
        },
        main: {
            width: 520,
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    };
});
function SwapPage() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Swap_useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const theme = (0,utils/* usePopupsMaskFullPageTheme */.Eh)();
    const { value: pendingTransactions = []  } = (0,useRecentTransactions/* useRecentTransactions */.S)({
        status: types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND
    });
    const wallet = (0,useWallet/* useWallet */.O)();
    const openPopupsWindow = (0,react.useCallback)(()=>{
        service/* default.Helper.openPopupWindow */.ZP.Helper.openPopupWindow(shared_base_src/* PopupRoutes.SelectWallet */.mZ.SelectWallet, {
            chainId,
            internal: true
        });
    }, [
        chainId
    ]);
    const { value: domain  } = (0,plugin_infra_src/* useReverseAddress */.$q)(wallet === null || wallet === void 0 ? void 0 : wallet.address, plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    (0,src/* applyMaskColorVars */.Dc)(document.body, src/* Appearance.light */.um.light);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(context/* Web3Provider */.Qg, {
        value: web3_context/* SwapWeb3Context */.Mc,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: theme,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.page,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                            className: classes.header,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStateBarUI, {
                                className: classes.walletStateBar,
                                isPending: pendingTransactions.length > 0,
                                openConnectWalletDialog: openPopupsWindow,
                                walletName: wallet === null || wallet === void 0 ? void 0 : wallet.name,
                                domain: domain,
                                walletAddress: wallet === null || wallet === void 0 ? void 0 : wallet.address
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                            className: classes.main,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "h1",
                                    className: classes.title,
                                    children: t('plugin_trader_swap')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(useTargetChainIdContext/* TargetChainIdContext.Provider */.Z.Provider, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useAllProviderTradeContext/* AllProviderTradeContext.Provider */.TX.Provider, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapBox, {})
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};


/***/ }),

/***/ 21957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName)
/* harmony export */ });
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48476);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88486);


const resolveDataProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'CoinGecko',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'CoinMarketCap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'Uniswap Info'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveDataProviderLink = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'https://www.coingecko.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'https://coinmarketcap.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'https://info.uniswap.org/'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveTradeProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
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
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.WANNASWAP */ .z4.WANNASWAP]: 'WannaSwap'
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

/***/ 14417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28577);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98086);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63541);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63081);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89987);





function useRecentTransactions(options) {
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .m)();
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .useChainId */ .xx)();
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        if (!account) return [];
        return _messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.getRecentTransactions */ .V.getRecentTransactions(chainId, account, options);
    }, [
        chainId,
        account,
        JSON.stringify(options)
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.transactionStateUpdated.on */ .R$.events.transactionStateUpdated.on(result.retry)
    , [
        result.retry
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.transactionsUpdated.on */ .R$.events.transactionsUpdated.on(result.retry)
    , [
        result.retry
    ]);
    return result;
}


/***/ })

}]);