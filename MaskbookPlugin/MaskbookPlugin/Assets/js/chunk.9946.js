"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[420],{

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

/***/ 80420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _components_StyledInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71955);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6615);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35313);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27019);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37186);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    header: {
        padding: '10px 16px',
        backgroundColor: '#EFF5FF',
        color: '#1C68F3'
    },
    title: {
        fontSize: 14,
        lineHeight: '20px'
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 16
    },
    button: {
        padding: '9px 0',
        borderRadius: 20
    }
});
const WalletRename = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M1)();
    const history = (0,react_router__WEBPACK_IMPORTED_MODULE_7__/* .useHistory */ .k6)();
    const { classes  } = useStyles();
    const wallet = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .useWallet */ .Osb)();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const renameWallet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!(wallet === null || wallet === void 0 ? void 0 : wallet.address)) return;
        await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletRPC.renameWallet */ .V.renameWallet(wallet.address, name);
        return history.goBack();
    }, [
        wallet === null || wallet === void 0 ? void 0 : wallet.address
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.header,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                    className: classes.title,
                    children: t('rename')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_3__/* .StyledInput */ .F, {
                        value: name,
                        onChange: (e)=>setName(e.target.value)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                        fullWidth: true,
                        variant: "contained",
                        disabled: !name,
                        className: classes.button,
                        onClick: renameWallet,
                        children: t('confirm')
                    })
                ]
            })
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletRename);


/***/ })

}]);