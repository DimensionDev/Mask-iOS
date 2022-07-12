"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6917],{

/***/ 48111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ EditIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const EditIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('EditIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M10 17.596h7.5M13.75 3.846a1.768 1.768 0 012.5 2.5L5.833 16.763l-3.333.833.833-3.333L13.75 3.846z",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');


/***/ }),

/***/ 36917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_SwitchWallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(51147);
// EXTERNAL MODULE: ../icons/general/Edit.tsx
var Edit = __webpack_require__(48111);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/Setting.tsx


const SettingIcon = (0,icons_utils/* createIcon */.I)('SettingIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.55 11.25a1.238 1.238 0 00.247 1.365l.045.045a1.5 1.5 0 01-1.06 2.562 1.5 1.5 0 01-1.062-.44l-.045-.044a1.238 1.238 0 00-1.365-.248 1.238 1.238 0 00-.75 1.133v.127a1.5 1.5 0 11-3 0v-.068a1.238 1.238 0 00-.81-1.132 1.238 1.238 0 00-1.365.247l-.045.045a1.5 1.5 0 11-2.123-2.122l.046-.045a1.238 1.238 0 00.247-1.365 1.238 1.238 0 00-1.132-.75H2.25a1.5 1.5 0 110-3h.067a1.237 1.237 0 001.133-.81 1.237 1.237 0 00-.248-1.365l-.044-.045A1.5 1.5 0 115.28 3.217l.045.046a1.237 1.237 0 001.365.247h.06a1.237 1.237 0 00.75-1.132V2.25a1.5 1.5 0 013 0v.067a1.238 1.238 0 00.75 1.133 1.237 1.237 0 001.365-.248l.045-.044a1.5 1.5 0 112.123 2.122l-.045.045a1.237 1.237 0 00-.248 1.365v.06a1.237 1.237 0 001.133.75h.127a1.5 1.5 0 010 3h-.068a1.238 1.238 0 00-1.132.75v0z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 18 18');

// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(40615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ./src/extension/popups/components/CopyIconButton/index.tsx + 1 modules
var CopyIconButton = __webpack_require__(22825);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletContext.ts
var useWalletContext = __webpack_require__(55921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useHover.js
var useHover = __webpack_require__(2911);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/SwitchWallet/WalletItem.tsx














const useStyles = (0,entry/* makeStyles */.ZL)()({
    item: {
        padding: 10,
        borderBottom: '1px solid #F7F9FA',
        cursor: 'pointer',
        backgroundColor: '#ffffff'
    },
    address: {
        fontSize: 12,
        color: '#1C68F3',
        display: 'flex',
        alignItems: 'center'
    },
    copy: {
        fontSize: 12,
        fill: '#1C68F3',
        marginLeft: 4,
        cursor: 'pointer'
    },
    domain: {
        marginLeft: 4
    },
    name: {
        fontSize: 14,
        color: '#1C68F3',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        marginLeft: 4
    },
    edit: {
        fontSize: 16,
        stroke: '#1C68F3',
        fill: 'none',
        marginLeft: 10,
        cursor: 'pointer'
    },
    setting: {
        fontSize: 12,
        cursor: 'pointer',
        fill: 'none',
        stroke: '#1C68F3',
        marginLeft: 4
    }
});
const WalletItem = /*#__PURE__*/ (0,react.memo)(({ wallet , onClick , isSelected  })=>{
    const { classes  } = useStyles();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)();
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, wallet.address);
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { setSelectedWallet  } = useWalletContext/* WalletContext.useContainer */.z.useContainer();
    const handleRename = (0,react.useCallback)((event)=>{
        event.stopPropagation();
        setSelectedWallet(wallet);
        navigate(shared_base_src/* PopupRoutes.WalletRename */.mZ.WalletRename);
    }, [
        wallet
    ]);
    const handleEdit = (0,react.useCallback)((event)=>{
        event.stopPropagation();
        setSelectedWallet(wallet);
        navigate(shared_base_src/* PopupRoutes.WalletSettings */.mZ.WalletSettings);
    }, [
        wallet
    ]);
    const [element] = (0,useHover/* default */.Z)((isHovering)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
            className: classes.item,
            onClick: onClick,
            style: {
                paddingRight: isSelected ? 10 : 42
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                    className: classes.text,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.name,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "span",
                                display: "flex",
                                alignItems: "center",
                                children: [
                                    wallet.name,
                                    domain && Others?.formatDomainName ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        component: "span",
                                        className: classes.domain,
                                        children: [
                                            "(",
                                            Others.formatDomainName(domain),
                                            ")"
                                        ]
                                    }) : null,
                                    isHovering ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Edit/* EditIcon */.d, {
                                        className: classes.edit,
                                        onClick: handleRename
                                    }) : null
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.address,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                    address: wallet.address,
                                    size: 4,
                                    formatter: formatter/* formatEthereumAddress */.j8
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIconButton/* CopyIconButton */.m, {
                                    className: classes.copy,
                                    text: wallet.address
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingIcon, {
                                    className: classes.setting,
                                    onClick: handleEdit
                                })
                            ]
                        })
                    ]
                }),
                isSelected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Success/* SuccessIcon */.t, {
                    style: {
                        marginLeft: 8,
                        fontSize: 18
                    }
                }) : null
            ]
        })
    );
    return element;
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/SwitchWallet/index.tsx













const SwitchWallet_useStyles = (0,entry/* makeStyles */.ZL)()({
    header: {
        padding: 10,
        display: 'flex',
        marginBottom: 1,
        backgroundColor: '#ffffff'
    },
    content: {
        overflow: 'auto',
        backgroundColor: '#F7F9FA',
        display: 'flex',
        flexDirection: 'column'
    },
    list: {
        backgroundColor: '#ffffff',
        padding: 0,
        height: 'calc(100vh - 168px)',
        overflow: 'auto'
    },
    item: {
        padding: 10,
        borderBottom: '1px solid #F7F9FA',
        cursor: 'pointer'
    },
    address: {
        fontSize: 12,
        color: '#1C68F3',
        display: 'flex',
        alignItems: 'center'
    },
    copy: {
        fontSize: 12,
        stroke: '#1C68F3',
        marginLeft: 4,
        cursor: 'pointer'
    },
    name: {
        fontSize: 14,
        color: '#1C68F3',
        fontWeight: 500
    },
    text: {
        marginLeft: 4
    },
    controller: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        padding: 16,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    button: {
        fontWeight: 600,
        padding: '9px 0',
        borderRadius: 20,
        fontSize: 14,
        lineHeight: '20px'
    },
    secondaryButton: {
        backgroundColor: '#F7F9FA',
        color: '#1C68F3'
    }
});
const SwitchWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = SwitchWallet_useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const wallet = (0,entry_web3/* useWallet */.Os)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const wallets = (0,entry_web3/* useWallets */.rB)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const walletPrimary = (0,entry_web3/* useWalletPrimary */.Ud)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const handleClickCreate = (0,react.useCallback)(()=>{
        if (!walletPrimary) {
            browser.tabs.create({
                active: true,
                url: browser.runtime.getURL('/dashboard.html#/create-mask-wallet')
            });
        } else {
            navigate(shared_base_src/* PopupRoutes.CreateWallet */.mZ.CreateWallet);
        }
    }, [
        walletPrimary,
        history
    ]);
    const handleSelect = (0,react.useCallback)(async (address)=>{
        await messages/* WalletRPC.updateMaskAccount */.V.updateMaskAccount({
            account: address
        });
        navigate(shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet, {
            replace: true
        });
    }, [
        history
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                    dense: true,
                    className: classes.list,
                    children: wallets.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem, {
                            wallet: item,
                            onClick: ()=>handleSelect(item.address)
                            ,
                            isSelected: (0,src/* isSameAddress */.Wr)(item.address, wallet?.address)
                        }, index)
                    )
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classnames_default()(classes.button, classes.secondaryButton),
                        disabled: wallets.length >= shared_src/* MAX_WALLET_LIMIT */.hA,
                        onClick: handleClickCreate,
                        children: t('create')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        disabled: wallets.length >= shared_src/* MAX_WALLET_LIMIT */.hA,
                        className: classes.button,
                        onClick: ()=>navigate(shared_base_src/* PopupRoutes.ImportWallet */.mZ.ImportWallet)
                        ,
                        children: t('import')
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const Wallet_SwitchWallet = (SwitchWallet);


/***/ })

}]);