"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7256],{

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

/***/ 17256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_DeleteWallet)
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
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/components/WalletInfo/index.tsx + 1 modules
var WalletInfo = __webpack_require__(49021);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(92131);
;// CONCATENATED MODULE: ../icons/general/Warning.tsx


const WarningIcon = (0,utils/* createIcon */.I)('WarningIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: ".2",
            d: "M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z",
            fill: "#FF5F5F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M22 26a2 2 0 104 0V16a2 2 0 10-4 0v10zM22 32a2 2 0 104 0 2 2 0 00-4 0z",
            fill: "#FF5F5F"
        })
    ]
}), '0 0 48 48');

// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(71955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(27019);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/utils/index.ts
var src_utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/DeleteWallet/index.tsx











const useStyles = (0,src/* makeStyles */.ZL)()({
    content: {
        flex: 1,
        padding: '16px 16px 0 16px',
        display: 'flex',
        flexDirection: 'column'
    },
    warning: {
        padding: '27px 0 13px 0',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        marginTop: 14,
        color: ' #FF5F5F',
        fontSize: 18,
        fontWeight: 500,
        lineHeight: '24px'
    },
    tip: {
        color: '#7B8192',
        fontSize: 12,
        lineHeight: '16px',
        margin: '20px 0'
    },
    label: {
        color: '#1C68F3',
        fontSize: 12,
        lineHeight: '16px',
        marginBottom: 10
    },
    controller: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        padding: '0 16px 16px 16px'
    },
    cancelButton: {
        padding: '9px 0',
        borderRadius: 20,
        fontSize: 14,
        color: '#1C68F3',
        lineHeight: '20px',
        backgroundColor: '#F7F9FA'
    },
    deleteButton: {
        padding: '9px 0',
        borderRadius: 20,
        fontSize: 14,
        color: '#ffffff',
        lineHeight: '20px',
        backgroundColor: '#FF5F5F'
    }
});
//TODO: password confirm
const DeleteWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const history = (0,react_router/* useHistory */.k6)();
    const wallet = (0,web3_shared_src/* useWallet */.Osb)();
    const { classes  } = useStyles();
    const [password, setPassword] = (0,react.useState)('');
    const onConfirm = (0,react.useCallback)(async ()=>{
        if (wallet === null || wallet === void 0 ? void 0 : wallet.address) {
            await messages/* WalletRPC.removeWallet */.V.removeWallet(wallet.address);
            await messages/* WalletRPC.resetAccount */.V.resetAccount();
            history.goBack();
        }
    }, [
        wallet
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletInfo/* WalletInfo */.M, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.warning,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(WarningIcon, {
                                style: {
                                    fontSize: 48
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: "Delete Wallet"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.tip,
                        children: t('popups_wallet_delete_tip')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_confirm_payment_password')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                        placeholder: "Input your password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        color: "inherit",
                        className: classes.cancelButton,
                        onClick: ()=>history.goBack()
                        ,
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        color: "error",
                        className: classes.deleteButton,
                        onClick: onConfirm,
                        children: t('delete')
                    })
                ]
            })
        ]
    }));
});
/* harmony default export */ const Wallet_DeleteWallet = (DeleteWallet);


/***/ })

}]);