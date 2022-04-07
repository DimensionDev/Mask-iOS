"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8489],{

/***/ 68489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_SwitchWallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(67937);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useWalletPrimary.ts

function useWalletPrimary() {
    const { walletPrimary  } = (0,context/* useWeb3StateContext */.N9)();
    return walletPrimary;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(51596);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallets.ts
var useWallets = __webpack_require__(95219);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.2.2_react@18.0.0-rc.2/node_modules/react-router/index.js
var react_router = __webpack_require__(92186);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(63081);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(35750);
// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx
var NetworkSelector = __webpack_require__(1968);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(63361);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(63151);
// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(12605);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(57214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(66552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(81396);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../shared/src/index.ts + 4 modules
var shared_src = __webpack_require__(95367);
// EXTERNAL MODULE: ./src/extension/popups/components/CopyIconButton/index.tsx
var CopyIconButton = __webpack_require__(82666);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
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
    },
    secondaryButton: {
        backgroundColor: '#F7F9FA',
        color: '#1C68F3'
    }
});
const SwitchWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const walletPrimary = useWalletPrimary();
    const { classes  } = SwitchWallet_useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
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
        if (settings/* currentProviderSettings.value */.t1.value === types/* ProviderType.MaskWallet */.lP.MaskWallet) await messages/* WalletRPC.updateAccount */.V.updateAccount({
            account: address,
            providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
        });
        navigate(shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet, {
            replace: true
        });
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
                        /*#__PURE__*/ return (0,jsx_runtime.jsx)(WalletItem, {
                            wallet: item,
                            onClick: ()=>handleSelect(item.address)
                            ,
                            isSelected: (0,address/* isSameAddress */.Wr)(item.address, wallet === null || wallet === void 0 ? void 0 : wallet.address)
                        }, index);
                    })
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
    }));
});
/* harmony default export */ const Wallet_SwitchWallet = (SwitchWallet);


/***/ })

}]);