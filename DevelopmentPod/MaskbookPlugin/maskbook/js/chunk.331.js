"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[331],{

/***/ 79656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ArrowDownRound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


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

/***/ 60534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ NetworkSelector)
/* harmony export */ });
/* unused harmony export NetworkSelectorUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11087);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96436);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94670);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72499);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50719);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77818);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79656);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91788);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67938);












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
    const networks = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .getRegisteredWeb3Networks */ .Rm)().filter((x)=>x.networkSupporterPluginID === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM
    );
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useAccount */ .mA)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const chainId1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const providerType = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useProviderType */ ._o)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const onChainChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (chainId)=>{
        if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .ProviderType.MaskWallet */ .lP.MaskWallet) {
            await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.updateMaskAccount */ .V.updateMaskAccount({
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NetworkSelectorUI, {
        currentNetwork: networks.find((x)=>x.chainId === chainId1
        ) ?? networks[0],
        onChainChange: onChainChange,
        networks: networks
    });
});
const NetworkSelectorUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ currentNetwork , onChainChange , networks  })=>{
    const { classes  } = useStyles();
    const [menu, openMenu] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useMenuConfig */ ._X)(networks?.filter((x)=>x.networkSupporterPluginID === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM
    ).filter((x)=>_shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.support_testnet_switch */ .vU.support_testnet_switch ? true : x.isMainnet
    ).map((network)=>{
        const chainId = network.chainId;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            onClick: ()=>onChainChange(chainId)
            ,
            selected: chainId === currentNetwork.chainId,
            children: [
                network.isMainnet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                    size: 20,
                    mainIcon: network.icon
                }) : _shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.support_testnet_switch */ .vU.support_testnet_switch ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ChainIcon */ .fq, {
                    color: network.iconColor
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    sx: {
                        marginLeft: 1
                    },
                    children: network.name
                })
            ]
        }, chainId);
    }) ?? [], {
        classes: {
            paper: classes.menu
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
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
                                mainIcon: currentNetwork.icon
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: classes.iconWrapper,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ChainIcon */ .fq, {
                                    color: currentNetwork.iconColor
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.title,
                                children: currentNetwork.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_13__/* .ArrowDownRound */ .l, {
                        className: classes.arrow
                    })
                ]
            }),
            menu
        ]
    });
});


/***/ }),

/***/ 91097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SwapPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.8.0_2f7y4c3dlygqpuszd3d43oslwi/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(93122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ../icons/general/Loading.tsx
var Loading = __webpack_require__(78258);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx
var NetworkSelector = __webpack_require__(60534);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./src/extension/popups/components/WalletStateBar/index.tsx











const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)();
    const providerDescriptor = (0,entry_web3/* useProviderDescriptor */.fY)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, types/* ProviderType.MaskWallet */.lP.MaskWallet);
    if (!providerDescriptor) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* WalletIcon */.o, {
                            mainIcon: providerDescriptor.icon,
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
                                    walletName ?? '-',
                                    domain ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: 14,
                                        marginLeft: 1,
                                        children: Others?.formatDomainName?.(domain)
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                fontSize: 12,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedAddress */.Kv, {
                                    address: walletAddress ?? '-',
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
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(40661);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/Trader.tsx + 28 modules
var Trader = __webpack_require__(78973);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Swap/SwapBox/index.tsx








function SwapBox() {
    const location = (0,react_router/* useLocation */.TH)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const coin = (0,react.useMemo)(()=>{
        if (!location.search) return undefined;
        const params = new URLSearchParams(location.search);
        return {
            id: params.get('id'),
            name: params.get('name'),
            symbol: params.get('symbol'),
            contract_address: params.get('contract_address'),
            decimals: Number.parseInt(params.get('decimals') ?? '0', 10)
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Trader/* Trader */.A, {
        coin: coin,
        chainId: chainId
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(25105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/customization/twitter-color-schema.json
var twitter_color_schema = __webpack_require__(88674);
// EXTERNAL MODULE: ./src/utils/theme/MaskTheme.ts
var MaskTheme = __webpack_require__(9956);
;// CONCATENATED MODULE: ./src/utils/theme/useSwapPageTheme.ts





/**
 * @deprecated Should migrate to \@masknet/theme
 */ function useSwapPageTheme() {
    const baseTheme = MaskTheme/* MaskLightTheme */.C;
    (0,immer_esm/* setAutoFreeze */.Fl)(false);
    const PopupTheme = (0,immer_esm/* default */.ZP)(baseTheme, (theme)=>{
        theme.palette.background.paper = '#ffffff';
        theme.palette.primary = {
            ...theme.palette.primary,
            main: '#1c68f3'
        };
        const colorSchema = twitter_color_schema.light;
        const colors = Object.keys(colorSchema);
        colors.forEach((color)=>{
            if (typeof theme.palette[color] === 'object') {
                Object.assign(theme.palette[color] ?? {}, colorSchema[color]);
            }
        });
        theme.palette.maskColor = colorSchema.maskColor;
        theme.palette.divider = colorSchema.divider;
        theme.palette.secondaryDivider = colorSchema.secondaryDivider;
        theme.components = theme.components || {};
        const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
        theme.components.MuiButton = {
            defaultProps: {
                size: 'medium',
                disableElevation: true,
                variant: 'contained'
            },
            variants: [
                {
                    props: {
                        color: 'error'
                    },
                    style: {
                        backgroundColor: theme.palette.error.main,
                        color: theme.palette.common.white,
                        '&:hover': {
                            backgroundColor: '#f53b47'
                        }
                    }
                }, 
            ],
            styleOverrides: {
                root: {
                    borderRadius: 500,
                    textTransform: 'initial',
                    fontWeight: 600,
                    minHeight: 39,
                    paddingLeft: 15,
                    paddingRight: 15,
                    boxShadow: 'none',
                    [smallQuery]: {
                        '&': {
                            height: 30,
                            minHeight: 'auto !important',
                            padding: '0 14px !important'
                        }
                    }
                },
                contained: {
                    backgroundColor: theme.palette.text.primary,
                    color: theme.palette.text.buttonText,
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        backgroundColor: theme.palette.text.primary,
                        color: theme.palette.text.buttonText
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.action.buttonHover
                    },
                    [smallQuery]: {
                        '&': {
                            height: 30,
                            minHeight: 'auto !important',
                            padding: '0 14px !important'
                        }
                    }
                },
                containedSecondary: {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.strong,
                    '&:hover': {
                        color: theme.palette.action.buttonHover,
                        backgroundColor: theme.palette.action.bgHover
                    },
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.strong
                    }
                },
                outlined: {
                    color: theme.palette.text.strong,
                    borderColor: theme.palette.secondaryDivider,
                    backgroundColor: 'transparent',
                    '&:hover': {
                        color: theme.palette.action.buttonHover,
                        borderColor: theme.palette.secondaryDivider,
                        backgroundColor: (0,entry/* parseColor */.lu)(theme.palette.text.primary).setAlpha(0.1).toRgbString()
                    },
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        color: theme.palette.text.strong,
                        backgroundColor: 'transparent'
                    }
                },
                sizeLarge: {
                    minHeight: 40,
                    paddingLeft: 30,
                    paddingRight: 30,
                    [smallQuery]: {
                        '&': {
                            height: 28,
                            minHeight: 28,
                            paddingLeft: 15,
                            paddingRight: 15
                        }
                    }
                },
                sizeSmall: {
                    minHeight: 30,
                    paddingLeft: 15,
                    paddingRight: 15,
                    [smallQuery]: {
                        '&': {
                            height: 25,
                            minHeight: 29,
                            paddingLeft: 10,
                            paddingRight: 10
                        }
                    }
                }
            }
        };
        theme.components.MuiPaper = {
            defaultProps: {
                elevation: 0
            }
        };
        theme.components.MuiTab = {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        };
        theme.components.MuiChip = {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.strong
                },
                colorPrimary: {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    '&:hover': {
                        backgroundColor: (0,entry/* parseColor */.lu)(theme.palette.text.primary).setAlpha(0.1).toRgbString()
                    }
                }
            }
        };
        theme.components.MuiBackdrop = {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.action.mask
                }
            }
        };
        theme.components.MuiTooltip = {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.background.tipMask,
                    color: theme.palette.text.buttonText,
                    borderRadius: 8
                },
                tooltipArrow: {
                    backgroundColor: theme.palette.background.tipMask
                }
            }
        };
        theme.components.MuiSnackbar = {
            styleOverrides: {
                root: {
                    filter: `drop-shadow(0 0 16px ${theme.palette.background.messageShadow});`
                }
            }
        };
    });
    return (0,createMuiStrictModeTheme/* default */.Z)(PopupTheme);
}

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts + 46 modules
var useAllProviderTradeContext = __webpack_require__(9831);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Swap/index.tsx















const Swap_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
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
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const wallet = (0,entry_web3/* useWallet */.Os)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const theme = useSwapPageTheme();
    const pendingTransactions = (0,entry_web3/* useRecentTransactions */.Sp)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, base_src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND);
    const openPopupsWindow = (0,react.useCallback)(()=>{
        service/* default.Helper.openPopupWindow */.ZP.Helper.openPopupWindow(shared_base_src/* PopupRoutes.SelectWallet */.mZ.SelectWallet, {
            chainId
        });
    }, [
        chainId
    ]);
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, wallet?.address);
    (0,entry/* applyMaskColorVars */.Dc)(document.body, entry/* Appearance.light */.um.light);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: theme,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* SharedContextProvider */.QL, {
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
                                walletName: wallet?.name,
                                domain: domain,
                                walletAddress: wallet?.address
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
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_web3_evm/* TargetChainIdContext.Provider */.Zq.Provider, {
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
    });
};


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


/***/ })

}]);