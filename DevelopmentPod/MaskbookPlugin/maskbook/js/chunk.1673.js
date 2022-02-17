"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1673],{

/***/ 61673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_SwitchWallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/List/List.js
var List = __webpack_require__(1749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(69172);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useWalletPrimary.ts

function useWalletPrimary() {
    const { walletPrimary  } = (0,context/* useWeb3StateContext */.N9)();
    return walletPrimary;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(28620);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallets.ts
var useWallets = __webpack_require__(32760);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(52646);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(80126);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(14910);
// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx
var NetworkSelector = __webpack_require__(97035);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(18274);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(54511);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(49097);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(26605);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(12976);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ./src/extension/popups/components/CopyIconButton/index.tsx
var CopyIconButton = __webpack_require__(63563);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/SwitchWallet/WalletItem.tsx









const useStyles = (0,src/* makeStyles */.ZL)()({
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
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        marginLeft: 4
    }
});
const WalletItem = /*#__PURE__*/ (0,react.memo)(({ wallet , onClick , isSelected  })=>{
    const { classes  } = useStyles();
    const { Utils  } = (0,plugin_infra_src/* useWeb3State */.dM)();
    const { value: domain  } = (0,plugin_infra_src/* useReverseAddress */.$q)(wallet.address, plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.name,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                children: wallet.name
                            }),
                            domain && (Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                children: Utils.formatDomainName(domain)
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.address,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                address: wallet.address,
                                size: 16,
                                formatter: formatter/* formatEthereumAddress */.j8
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIconButton/* CopyIconButton */.m, {
                                className: classes.copy,
                                text: wallet.address
                            })
                        ]
                    })
                ]
            }),
            isSelected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Success/* SuccessIcon */.t, {
                style: {
                    marginLeft: 8
                }
            }) : null
        ]
    }));
});

;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/SwitchWallet/index.tsx













const SwitchWallet_useStyles = (0,src/* makeStyles */.ZL)()({
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
    }
});
const SwitchWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const walletPrimary = useWalletPrimary();
    const { classes  } = SwitchWallet_useStyles();
    const history = (0,react_router/* useHistory */.k6)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const wallets = (0,useWallets/* useWallets */.r)(types/* ProviderType.MaskWallet */.lP.MaskWallet);
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const handleClickCreate = (0,react.useCallback)(()=>{
        if (!walletPrimary) {
            browser.tabs.create({
                active: true,
                url: browser.runtime.getURL('/dashboard.html#/create-mask-wallet')
            });
        } else {
            history.push(shared_base_src/* PopupRoutes.CreateWallet */.mZ.CreateWallet);
        }
    }, [
        walletPrimary,
        history
    ]);
    const handleSelect = (0,react.useCallback)(async (address)=>{
        await messages/* WalletRPC.updateMaskAccount */.V.updateMaskAccount({
            account: address
        });
        if (settings/* currentProviderSettings.value */.t1.value === types/* ProviderType.MaskWallet */.lP.MaskWallet) await messages/* WalletRPC.updateAccount */.V.updateAccount({
            account: address,
            providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
        });
        history.replace(shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet);
    }, [
        history
    ]);
    const onCopy = (0,react.useCallback)((address)=>{
        copyToClipboard(address);
    }, [
        copyToClipboard
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.header,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelector */.k, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                    dense: true,
                    className: classes.list,
                    children: wallets.map((item, index)=>{
                        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem, {
                            wallet: item,
                            onClick: ()=>handleSelect(item.address)
                            ,
                            isSelected: (0,address/* isSameAddress */.Wr)(item.address, wallet === null || wallet === void 0 ? void 0 : wallet.address)
                        }, index));
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        onClick: handleClickCreate,
                        style: {
                            backgroundColor: '#F7F9FA',
                            color: '#1C68F3'
                        },
                        children: t('create')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        onClick: ()=>history.push(shared_base_src/* PopupRoutes.ImportWallet */.mZ.ImportWallet)
                        ,
                        children: t('import')
                    })
                ]
            })
        ]
    }));
});
/* harmony default export */ const Wallet_SwitchWallet = (SwitchWallet);


/***/ })

}]);