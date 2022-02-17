"use strict";
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.2650.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2650],{

/***/ 59027:
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8412],{

/***/ 98051:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8412.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.2650.js
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5726);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40623);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72052);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41362);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8236);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63371);
=======
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88460);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20261);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57652);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76900);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80050);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8412.js




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        }
    })
);
function AbstractTab(props) {
    const { tabs , state , index , height =200 , hasOnlyOneChild =false  } = props;
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__.useStylesExtends)(useStyles(), props);
    const [value, setValue] = state !== null && state !== void 0 ? state : [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                square: true,
                elevation: 0,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator
                    },
                    value: index ? index : value ? value : 0,
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    variant: "fullWidth",
                    indicatorColor: "primary",
                    textColor: "primary",
                    onChange: (_, newValue)=>{
                        return setValue === null || setValue === void 0 ? void 0 : setValue(newValue);
                    },
                    children: tabs.map((tab, i)=>{
                        var ref;
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            className: classes.tab,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${(ref = tab.id) === null || ref === void 0 ? void 0 : ref.toLowerCase()}_tab`
                        }, i));
                    })
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index1)=>index1 === value
                ),
                sx: {
                    height: height,
                    minHeight: height
                }
            }) : null
        ]
    }));
};


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.2650.js
/***/ 87099:
=======
/***/ 96371:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8412.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ NetworkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.2650.js
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22681);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22209);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63371);
=======
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64921);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80050);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8412.js





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    icon: {
        borderRadius: '50%',
        backgroundColor: '#F7F9FA'
    }
});
const icons = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .tds.Ethereum]: new URL(/* asset import */ __webpack_require__(9227), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .tds.Binance]: new URL(/* asset import */ __webpack_require__(3391), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .tds.Polygon]: new URL(/* asset import */ __webpack_require__(44319), __webpack_require__.b).toString(),
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.2650.js
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .tds.Arbitrum]: new URL(/* asset import */ __webpack_require__(95781), __webpack_require__.b).toString()
=======
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .tds.Arbitrum]: new URL(/* asset import */ __webpack_require__(95781), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .tds.xDai]: new URL(/* asset import */ __webpack_require__(34980), __webpack_require__.b).toString()
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8412.js
};
function NetworkIcon(props) {
    const { size =48 , networkType  } = props;
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__.useStylesExtends)(useStyles(), props);
    if (!networkType) return null;
    return icons[networkType] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
        height: size,
        width: size,
        src: icons[networkType],
        className: classes.icon
    }) : null;
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.2650.js
/***/ 46173:
=======
/***/ 30838:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8412.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.2650.js
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63371);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6621);
/* harmony import */ var _NetworkIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87099);
=======
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80050);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93975);
/* harmony import */ var _NetworkIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96371);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8412.js





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    root: {
        position: 'relative',
        display: 'flex'
    },
    mainIcon: {
        width: '100%',
        height: '100%'
    },
    badgeIcon: {
        position: 'absolute',
        right: -2,
        bottom: -2,
        backgroundColor: '#ffffff',
        borderRadius: '50%'
    }
});
const WalletIcon = ({ size =24 , badgeSize =14  })=>{
    const { classes  } = useStyles();
    const selectedNetwork = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.useValueRef)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentNetworkSettings */ .fX);
    const selectedWalletProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.useValueRef)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings */ .t1);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NetworkIcon__WEBPACK_IMPORTED_MODULE_4__/* .NetworkIcon */ .d, {
                classes: {
                    icon: classes.mainIcon
                },
                size: size,
                networkType: selectedNetwork
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.ProviderIcon, {
                classes: {
                    icon: classes.badgeIcon
                },
                size: badgeSize,
                providerType: selectedWalletProvider
            })
        ]
    }));
};


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.2650.js
/***/ 19018:
=======
/***/ 19380:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8412.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ FixedTokenList)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-window@1.8.6_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__(90882);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(54819);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(86126);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/OpenInNew.js
var OpenInNew = __webpack_require__(68682);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/TokenInList.tsx








const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 36,
            height: 36
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        primary: {
            flex: 1,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            paddingRight: theme.spacing(1)
        },
        name: {
            display: 'block'
        },
        secondary: {
            lineHeight: 1,
            paddingRight: theme.spacing(3),
            position: 'relative'
        },
        link: {
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 'auto',
            margin: 'auto'
        },
        openIcon: {
            fontSize: 16,
            width: 16,
            height: 16,
            marginLeft: theme.spacing(0.5)
        },
        symbol: {
        }
    })
);
function TokenInList({ data , index , style  }) {
    const { classes  } = useStyles();
    const { NATIVE_TOKEN_ADDRESS  } = (0,src/* useTokenConstants */.kdE)();
    const stop = (0,react.useCallback)((ev)=>ev.stopPropagation()
    , []);
    const currentAsset = data.assets[index];
    const { token , balance  } = currentAsset;
    if (!token) return null;
    const { address , name , symbol , logoURI  } = token;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
        style: style,
        disabled: data.selected.some((0,src/* currySameAddress */.DC3)(address)),
        onClick: ()=>data.onSelect(token)
        ,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                    classes: {
                        icon: classes.icon
                    },
                    address: address,
                    name: name,
                    logoURI: logoURI
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                classes: {
                    primary: classes.text
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.primary,
                        color: "textPrimary",
                        component: "span",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.symbol,
                                children: symbol
                            }),
                            !(0,src/* isSameAddress */.Wr$)(token.address, NATIVE_TOKEN_ADDRESS) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: (0,src/* resolveTokenLinkOnExplorer */.yWL)(token),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: stop,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                    className: classes.openIcon
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                color: "textSecondary",
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.secondary,
                        color: "textPrimary",
                        component: "span",
                        children: balance !== null && (0,src/* formatBalance */.azF)(balance, token.decimals, 4)
                    })
                ]
            })
        ]
    }, token.address));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/FixedTokenList.tsx









function FixedTokenList(props) {
    const classes = (0,shared_src.useStylesExtends)({
    }, props);
    const account = (0,src/* useAccount */.mAM)();
    const chainId = (0,src/* useChainId */.xxU)();
    const trustedERC20Tokens = (0,src/* useTrustedERC20Tokens */.du_)();
    const { keyword , whitelist: includeTokens = [] , blacklist: excludeTokens = [] , selectedTokens =[] , tokens =[] , onSelect , FixedSizeListProps ,  } = props;
    const [address, setAddress] = (0,react.useState)('');
    const { ERC20_TOKEN_LISTS  } = (0,src/* useEthereumConstants */.HVQ)();
    const { value: erc20TokensDetailed = [] , loading: erc20TokensDetailedLoading  } = (0,src/* useERC20TokensDetailedFromTokenLists */.mrA)(ERC20_TOKEN_LISTS, keyword, trustedERC20Tokens);
    //#region add token by address
    const matchedTokenAddress = (0,react.useMemo)(()=>{
        if (!keyword || !dist.EthereumAddress.isValid(keyword) || erc20TokensDetailed.length) return;
        return keyword;
    }, [
        keyword,
        erc20TokensDetailed.length
    ]);
    const { value: searchedToken , loading: searchedTokenLoading  } = (0,src/* useERC20TokenDetailed */.kIC)(matchedTokenAddress !== null && matchedTokenAddress !== void 0 ? matchedTokenAddress : '');
    //#endregion
    const filteredTokens = erc20TokensDetailed.filter((token)=>(!includeTokens.length || includeTokens.some((0,src/* currySameAddress */.DC3)(token.address))) && (!excludeTokens.length || !excludeTokens.some((0,src/* currySameAddress */.DC3)(token.address)))
    );
    const renderTokens = (0,lodash.uniqBy)([
        ...tokens,
        ...filteredTokens,
        ...searchedToken && searchedToken.name !== 'Unknown Token' && searchedToken.symbol !== 'Unknown' ? [
            searchedToken
        ] : [], 
    ], (x)=>x.address.toLowerCase()
    );
    const { value: assets , loading: assetsLoading , error: assetsError ,  } = (0,src/* useAssetsByTokenList */.l81)(renderTokens.filter((x)=>dist.EthereumAddress.isValid(x.address)
    ));
    const renderAssets = !account || assetsError || assetsLoading ? [
        ...renderTokens
    ].sort((0,src/* makeSortTokenFn */.I30)(chainId, {
        isMaskBoost: true
    })).map((token)=>({
            token: token,
            balance: null
        })
    ) : !!keyword ? assets : [
        ...assets
    ].sort((0,src/* makeSortAssertFn */.Siq)(chainId, {
        isMaskBoost: true
    }));
    //#region UI helpers
    const renderPlaceholder = (message)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: message
        })
    ;
    //#endregion
    if (erc20TokensDetailedLoading) return renderPlaceholder('Loading token lists...');
    if (assetsLoading) return renderPlaceholder('Loading token assets...');
    if (searchedTokenLoading) return renderPlaceholder('Loading token...');
    if (!renderAssets.length) return renderPlaceholder('No results or contract address does not meet the query criteria.');
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FixedSizeList */.t7, {
        className: classes.list,
        width: "100%",
        height: 100,
        overscanCount: 8,
        itemSize: 50,
        itemData: {
            assets: renderAssets,
            selected: [
                address,
                ...selectedTokens
            ],
            onSelect (token) {
                setAddress(token.address);
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(token);
            }
        },
        itemCount: renderAssets.length,
        ...FixedSizeListProps,
        children: TokenInList
    }));
}


/***/ }),

/***/ 78884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ SearchInput)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(92131);
;// CONCATENATED MODULE: ../icons/general/Search.tsx


const SearchIcon = (0,utils/* createIcon */.I)('Search', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.271 9.41a4.93 4.93 0 118.478 3.424.617.617 0 00-.122.123A4.93 4.93 0 014.272 9.41zm8.837 4.79a6.18 6.18 0 11.884-.884l2.596 2.596a.625.625 0 11-.884.884L13.108 14.2z",
        fill: "currentColor"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/InputBase/InputBase.js + 2 modules
var InputBase = __webpack_require__(64556);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/SearchInput.tsx





const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        searchbox: {
            display: 'block',
            width: '100%',
            border: `1px solid ${(0,src/* getMaskColor */.nb)(theme).border}`,
            alignItems: 'center',
            padding: theme.spacing(1)
        },
        search: {
            display: 'flex',
            alignItems: 'center'
        },
        input: {
            width: '100%'
        },
        iconButton: {
            padding: theme.spacing(0.5)
        },
        label: {
            width: '100%',
            paddingLeft: theme.spacing(1)
        }
    })
);
function SearchInput({ label , onChange  }) {
    const { classes  } = useStyles();
    const [visible, setVisible] = (0,react.useState)(false);
    const [keyword, setKeyword] = (0,react.useState)('');
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        className: classes.searchbox,
        elevation: 0,
        children: [
            visible ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                className: classes.label,
                children: label
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                component: "form",
                className: classes.search,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        size: "large",
                        className: classes.iconButton,
                        "aria-label": "label",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchIcon, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                        className: classes.input,
                        inputProps: {
                            'aria-label': 'select a token'
                        },
                        placeholder: label,
                        value: keyword,
                        onChange: (e)=>{
                            setKeyword(e.target.value);
                            setVisible(e.target.value.length !== 0);
                            onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
                        }
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 99983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ef": () => (/* binding */ DashboardDialogCore),
/* harmony export */   "dd": () => (/* binding */ useModal),
/* harmony export */   "ge": () => (/* binding */ DashboardDialogWrapper),
/* harmony export */   "iD": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_11__.useSnackbarCallback)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82215);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22593);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69476);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49283);
}
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53688);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71629);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11042);
}
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37186);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80050);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            userSelect: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        close: {
            color: theme.palette.text.primary,
            position: 'absolute',
            right: 10,
            top: 10
        }
    })
);
function DashboardDialogCore(props) {
    const { fullScreen , children , CloseIconProps , CloseButtonProps , ...dialogProps } = props;
    const { classes  } = useStyles();
    const xsMatched = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useMatchXS */ .IN)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        className: classes.root,
        fullScreen: fullScreen !== null && fullScreen !== void 0 ? fullScreen : xsMatched,
        hideBackdrop: true,
        ...dialogProps,
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                className: classes.close,
                onClick: (e)=>{
                    var ref;
                    return (ref = dialogProps.onClose) === null || ref === void 0 ? void 0 : ref.call(dialogProps, e, 'backdropClick');
                },
                size: "small",
                ...CloseButtonProps,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    ...CloseIconProps
                })
            })
        ]
    }));
}
var DialogState;
(function(DialogState1) {
    DialogState1[DialogState1["Opened"] = 1] = "Opened";
    DialogState1[DialogState1["Closing"] = 2] = "Closing";
    DialogState1[DialogState1["Destroyed"] = 3] = "Destroyed";
})(DialogState || (DialogState = {
}));
function reducer(state, action) {
    if (action.type === 'open') return {
        state: DialogState.Opened,
        props: action.props
    };
    if (action.type === 'close') return {
        state: DialogState.Closing,
        props: state.props
    };
    return {
        state: DialogState.Destroyed
    };
}
function useModal(Modal, ComponentProps) {
    const [status, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, {
        state: DialogState.Destroyed
    });
    const showModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'open'
        })
    , []);
    const showStatefulModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((props)=>dispatch({
            type: 'open',
            props
        })
    , []);
    // TODO: prevent onClose on some cases (e.g, click away while loading)
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'close'
        })
    , []);
    const onExited = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'destroy'
        })
    , []);
    const { state , props  } = status;
    const compositeProps = ComponentProps || props ? {
        ComponentProps: {
            ...ComponentProps,
            ...props
        }
    } : {
    };
    const modalProps = {
        TransitionProps: {
            onExited
        },
        ...compositeProps,
        open: state === DialogState.Opened,
        onClose
    };
    const theme = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useClassicMaskTheme */ .Uk)();
    const renderedComponent = state === DialogState.Destroyed ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        theme: theme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Modal, {
            ...modalProps
        })
    });
    return [
        renderedComponent,
        showModal,
        showStatefulModal
    ];
}
const useDashboardDialogWrapperStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme, props)=>({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: props.size === 'small' ? 280 : 440,
            padding: props.size === 'small' ? '40px 24px !important' : '40px 36px !important',
            margin: '0 auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        header: {
            textAlign: 'center',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        content: {
            flex: 1,
            textAlign: 'center'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: theme.spacing(3)
        },
        primary: {
            margin: theme.spacing(2, 0, 1),
            fontWeight: 500,
            fontSize: 20,
            lineHeight: '30px'
        },
        secondary: {
            lineHeight: 1.75,
            fontSize: 14,
            textAlign: 'center',
            wordBreak: 'break-word',
            marginBottom: 18
        },
        confineSecondary: {
            paddingLeft: props.size === 'small' ? 24 : 46,
            paddingRight: props.size === 'small' ? 24 : 46
        }
    })
);
const dialogTheme = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .extendsTheme */ .Ql)((theme)=>({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    input: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5
                    },
                    multiline: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5
                    }
                }
            },
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        marginTop: theme.spacing(2)
                    },
                    inputRoot: {
                        paddingTop: '5px !important',
                        paddingBottom: '5px !important'
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        marginTop: theme.spacing(2),
                        marginBottom: 0,
                        '&:first-child': {
                            marginTop: 0
                        }
                    }
                },
                defaultProps: {
                    fullWidth: true,
                    variant: 'outlined',
                    margin: 'normal'
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&[hidden]': {
                            visibility: 'hidden'
                        }
                    }
                },
                defaultProps: {
                    size: 'medium'
                }
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        minHeight: 38
                    },
                    indicator: {
                        height: 1
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        minHeight: 38,
                        borderBottom: `solid 1px ${theme.palette.divider}`
                    }
                }
            }
        }
    })
);
function DashboardDialogWrapper(props) {
    const { size , icon , iconColor , primary , secondary , constraintSecondary =true , content , footer  } = props;
    const { classes  } = useDashboardDialogWrapperStyles(props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        theme: dialogTheme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: classes.header,
                    children: [
                        icon && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(icon, {
                            width: 64,
                            height: 64,
                            stroke: iconColor
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            className: classes.primary,
                            variant: "h5",
                            children: primary
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.secondary, size !== 'small' && constraintSecondary ? classes.confineSecondary : ''),
                            color: "textSecondary",
                            variant: "body2",
                            dangerouslySetInnerHTML: {
                                __html: secondary !== null && secondary !== void 0 ? secondary : ''
                            }
                        })
                    ]
                }),
                content ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                    className: classes.content,
                    children: content
                }) : null,
                footer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                    className: classes.footer,
                    children: footer
                }) : null
            ]
        })
    }));
}



/***/ }),

/***/ 44846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28008);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64316);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35313);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);





const UPDATE_TRANSACTION_LATENCY = 30 /* seconds */  * 1000 /* milliseconds  */ ;
async function getTransactions(account, status) {
    if (!account) return [];
    const transactions = await _messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getRecentTransactionsFromChain */ .V.getRecentTransactionsFromChain(account);
    return transactions.filter((x)=>typeof status !== 'undefined' ? x.status === status : true
    );
}
function useRecentTransactions(status) {
    const account = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mAM)();
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xxU)();
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // update transactions status intervally
    const [delay, setDelay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(()=>setFlag((x)=>!x
        )
    , delay);
    // update transactions by message center
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.transactionsUpdated.on */ .R$.events.transactionsUpdated.on(()=>setFlag((x)=>!x
            )
        )
    , [
        setFlag
    ]);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(async ()=>{
        try {
            setDelay(null);
            return getTransactions(account, status);
        } catch (error) {
            throw error;
        } finally{
            setDelay(UPDATE_TRANSACTION_LATENCY);
        }
    }, [
        account,
        status,
        flag,
        chainId
    ]);
}


/***/ }),

/***/ 95781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62539d64c6df15dea819.png";

/***/ }),

/***/ 3391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "052863bc15f84754566f.png";

/***/ }),

/***/ 9227:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "381446c71c051917c70c.png";

/***/ }),

/***/ 44319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e806a6ce9e82d18c640d.png";

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.2650.js
=======
/***/ }),

/***/ 34980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d7dff5a23ed1ca80b3b.png";

>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8412.js
/***/ })

}]);