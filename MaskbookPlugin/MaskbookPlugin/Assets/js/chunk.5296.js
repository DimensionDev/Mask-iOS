"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5837],{

/***/ 71955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97448);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80050);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    textField: {
        width: '100%'
    },
    textFieldInput: {
        backgroundColor: '#F7F9FA'
    },
    input: {
        padding: '11px 9px',
        fontSize: 12
    }
});
const StyledInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.useStylesExtends)(useStyles(), props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        inputRef: ref,
        variant: "filled",
        className: classes.textField,
        inputProps: {
            className: classes.input
        },
        InputProps: {
            disableUnderline: true,
            classes: {
                root: classes.textFieldInput
            }
        },
        ...props
    }));
}));


/***/ }),

/***/ 35837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_CreateWallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx + 1 modules
var NetworkSelector = __webpack_require__(32263);
// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(71955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(27019);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletHD.ts




/** Return the wallet with mnemonic words */ function useWalletHD() {
    var ref;
    const selectedWallet = (ref = (0,web3_shared_src/* useWallet */.Osb)()) === null || ref === void 0 ? void 0 : ref.address;
    return (0,useAsync/* default */.Z)(async ()=>{
        const selected = await messages/* WalletRPC.getWallet */.V.getWallet(selectedWallet);
        if (selected === null || selected === void 0 ? void 0 : selected.mnemonic.length) return selected;
        const all = await messages/* WalletRPC.getWallets */.V.getWallets();
        return (0,lodash.first)(all.filter((x)=>x.mnemonic.length
        ).sort((a, z)=>a.createdAt.getTime() - z.createdAt.getTime()
        ));
    }, [
        selectedWallet
    ]).value;
}

// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/CreateWallet/index.tsx










const useStyles = (0,src/* makeStyles */.ZL)()({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 10px'
    },
    title: {
        color: '#15181B',
        fontSize: 12,
        fontHeight: '16px'
    },
    content: {
        padding: '16px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    label: {
        color: '#1C68F3',
        fontSize: 12,
        lineHeight: '16px',
        marginBottom: 10
    },
    button: {
        padding: '9px 0',
        borderRadius: 20
    }
});
const CreateWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const history = (0,react_router/* useHistory */.k6)();
    const { classes  } = useStyles();
    const [name, setName] = (0,react.useState)('');
    const hdWallet = useWalletHD();
    const onCreate = (0,react.useCallback)(async ()=>{
        if (hdWallet) {
            await messages/* WalletRPC.deriveWalletFromPhrase */.V.deriveWalletFromPhrase(name, hdWallet.mnemonic, hdWallet.passphrase);
            history.goBack();
        }
    }, [
        hdWallet,
        name
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: "New Wallet"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelector */.k, {
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.label,
                                children: "Wallet Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                placeholder: t('popups_wallet_enter_your_wallet_name'),
                                value: name,
                                onChange: (e)=>setName(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        disabled: !name,
                        onClick: onCreate,
                        children: t('confirm')
                    })
                ]
            })
        ]
    }));
});
/* harmony default export */ const Wallet_CreateWallet = (CreateWallet);


/***/ })

}]);