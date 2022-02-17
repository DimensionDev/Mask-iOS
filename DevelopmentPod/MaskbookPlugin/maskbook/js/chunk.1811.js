"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1811],{

/***/ 87756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.25.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(74221);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.25.1/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.25.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 15945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EyeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const EyeIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), undefined, '0 0 20 20');


/***/ }),

/***/ 25200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ EyeOffIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const EyeOffIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeOffIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#111432",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#ffffff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), undefined, '0 0 20 20');


/***/ }),

/***/ 88183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PasswordField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18405);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98174);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88143);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25200);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15945);





const PasswordField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_2__/* .StyledInput */ .F, {
        ...props,
        type: showPassword ? 'text' : 'password',
        ref: ref,
        InputProps: {
            endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    "aria-label": "toggle password visibility",
                    onClick: ()=>setShowPassword(!showPassword)
                    ,
                    onMouseDown: (event)=>event.preventDefault()
                    ,
                    edge: "end",
                    size: "small",
                    children: showPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .EyeOffIcon */ .X, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .EyeIcon */ .t, {})
                })
            })
        }
    }));
}));


/***/ }),

/***/ 88143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92498);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14767);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()(({ palette  })=>({
        textField: {
            width: '100%'
        },
        textFieldInput: {
            backgroundColor: palette.mode === 'light' ? '#F7F9FA' : palette.background.default,
            borderRadius: 6
        },
        inputFocused: {
            backgroundColor: `${palette.mode === 'light' ? '#FFFFFF' : palette.background.default} !important`,
            boxShadow: `0 0 0 2px ${palette.mode === 'dark' ? '#4F5378' : 'rgba(28, 104, 243, 0.2)'}`
        },
        input: {
            padding: '11px 9px',
            fontSize: 12,
            borderRadius: 6
        }
    })
);
const StyledInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    var ref1;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...props,
        inputRef: ref,
        variant: "filled",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.textField, props.className),
        autoComplete: "off",
        inputProps: {
            className: classes.input,
            'aria-autocomplete': 'none',
            ...props.inputProps
        },
        InputProps: {
            ...props.InputProps,
            disableUnderline: true,
            classes: {
                root: classes.textFieldInput,
                focused: classes.inputFocused,
                ...(ref1 = props.InputProps) === null || ref1 === void 0 ? void 0 : ref1.classes
            }
        },
        FormHelperTextProps: {
            ...props.FormHelperTextProps,
            style: {
                marginLeft: 0
            }
        }
    }));
}));


/***/ }),

/***/ 51811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14767);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76565);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76108);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80126);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32637);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18228);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(13443);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8267);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21863);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60822);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21949);
/* harmony import */ var _hook_useHasPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55624);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74221);
/* harmony import */ var _hooks_usePasswordForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17403);
/* harmony import */ var _components_PasswordField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88183);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(98697);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9484);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87050);



















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 10px 80px 10px'
    },
    textField: {
        marginTop: 10
    },
    form: {
        width: '100%'
    },
    label: {
        fontSize: 12,
        lineHeight: '16px',
        color: '#1C68F3',
        marginBottom: 10
    },
    tips: {
        color: '#7B8192',
        fontSize: 12,
        lineHeight: '16px',
        marginTop: 10
    },
    wallet: {
        marginBottom: 20
    },
    address: {
        fontSize: 12,
        lineHeight: '16px',
        color: '#15181B',
        fontWeight: 600
    },
    controller: {
        padding: '20px 10px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    button: {
        fontWeight: 600,
        padding: '9px 10px',
        borderRadius: 20
    },
    disabled: {
        opacity: 0.5,
        backgroundColor: '#1C68F3!important',
        color: '#ffffff!important'
    }
});
const WalletRecovery = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__/* .useLocation */ .TH)();
    const currentPersona = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_7__/* .useValueRef */ .E)(_settings_settings__WEBPACK_IMPORTED_MODULE_13__/* .currentPersonaIdentifier */ .cn);
    const backupId = new URLSearchParams(location.search).get('backupId');
    const { loading , value  } = (0,react_use__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(async ()=>{
        if (backupId) return _service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.getUnconfirmedBackup */ .ZP.Welcome.getUnconfirmedBackup(backupId);
        return undefined;
    }, [
        backupId
    ]);
    const { hasPassword , loading: getHasPasswordLoading  } = (0,_hook_useHasPassword__WEBPACK_IMPORTED_MODULE_8__/* .useHasPassword */ .T)();
    const { control , handleSubmit , setError , formState: { errors , isValid  } , schema ,  } = (0,_hooks_usePasswordForm__WEBPACK_IMPORTED_MODULE_10__/* .usePasswordForm */ .a)();
    const [{ loading: setPasswordLoading  }, handleSetPassword] = (0,react_use__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(async (data)=>{
        try {
            await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_12__/* .WalletRPC.setPassword */ .V.setPassword(data.password);
        } catch (error) {
            if (error instanceof Error) {
                setError('password', {
                    message: error.message
                });
            }
        }
    }, [
        setError
    ]);
    const onSubmit = handleSubmit(handleSetPassword);
    const [{ loading: confirmLoading  }, onConfirm] = (0,react_use__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(async ()=>{
        // If the payment password does not exist, set it first
        if (!hasPassword) {
            await onSubmit();
        }
        if (backupId) {
            const json = await _service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.getUnconfirmedBackup */ .ZP.Welcome.getUnconfirmedBackup(backupId);
            if (json) {
                await _service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.restoreBackup */ .ZP.Welcome.restoreBackup(json);
                // Set default wallet
                if (json.wallets) await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_12__/* .WalletRPC.setDefaultWallet */ .V.setDefaultWallet();
                // Send event after successful recovery
                _utils__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages.events.restoreSuccess.sendToAll */ .ql.events.restoreSuccess.sendToAll(undefined);
                await _service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Helper.removePopupWindow */ .ZP.Helper.removePopupWindow();
            }
        }
    }, [
        onSubmit,
        hasPassword,
        currentPersona,
        backupId
    ]);
    return loading || getHasPasswordLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_6__/* .LoadingPlaceholder */ .u, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_3__/* .PageHeader */ .m, {
                        title: t('popups_wallet_recovered')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            padding: 6
                        },
                        children: [
                            value === null || value === void 0 ? void 0 : value.wallets.map((wallet)=>{
                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classes.wallet,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            className: classes.label,
                                            children: wallet.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            className: classes.address,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_7__/* .FormattedAddress */ .Kv, {
                                                address: wallet.address,
                                                size: 16,
                                                formatter: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .formatEthereumAddress */ .j8
                                            })
                                        })
                                    ]
                                }, wallet.address));
                            }),
                            !hasPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: classes.form,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            marginTop: 16
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                className: classes.label,
                                                children: t('popups_wallet_set_up_payment_password')
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .Controller */ .Qr, {
                                                control: control,
                                                render: ({ field  })=>{
                                                    var ref, ref1;
                                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_11__/* .PasswordField */ .Z, {
                                                        ...field,
                                                        classes: {
                                                            root: classes.textField
                                                        },
                                                        type: "password",
                                                        variant: "filled",
                                                        placeholder: t('popups_wallet_payment_password'),
                                                        error: !isValid && !!((ref = errors.password) === null || ref === void 0 ? void 0 : ref.message),
                                                        helperText: !isValid ? (ref1 = errors.password) === null || ref1 === void 0 ? void 0 : ref1.message : ''
                                                    }));
                                                },
                                                name: "password"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .Controller */ .Qr, {
                                                render: ({ field  })=>{
                                                    var ref, ref2;
                                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_11__/* .PasswordField */ .Z, {
                                                        classes: {
                                                            root: classes.textField
                                                        },
                                                        ...field,
                                                        error: !isValid && !!((ref = errors.confirm) === null || ref === void 0 ? void 0 : ref.message),
                                                        helperText: !isValid ? (ref2 = errors.confirm) === null || ref2 === void 0 ? void 0 : ref2.message : '',
                                                        type: "password",
                                                        variant: "filled",
                                                        placeholder: t('popups_wallet_re_payment_password')
                                                    }));
                                                },
                                                name: "confirm",
                                                control: control
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: classes.tips,
                                        children: t('popups_wallet_payment_password_tip')
                                    })
                                ]
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.controller,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    loading: setPasswordLoading || confirmLoading,
                    fullWidth: true,
                    loadingPosition: "end",
                    disabled: !hasPassword ? !isValid : false,
                    classes: {
                        root: classes.button,
                        disabled: classes.disabled
                    },
                    variant: "contained",
                    onClick: onConfirm,
                    children: t('confirm')
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletRecovery);


/***/ }),

/***/ 76565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14767);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60822);
/* harmony import */ var _components_NetworkSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97035);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        color: '#151818',
        lineHeight: 1.5,
        fontWeight: 600
    }
});
const PageHeader = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ title  })=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.header,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.title,
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NetworkSelector__WEBPACK_IMPORTED_MODULE_3__/* .NetworkSelector */ .k, {})
        ]
    }));
});


/***/ }),

/***/ 17403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ usePasswordForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34181);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76108);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74221);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87756);





function defineSchema(refine, t) {
    return zod__WEBPACK_IMPORTED_MODULE_4__.z.object({
        password: zod__WEBPACK_IMPORTED_MODULE_4__.z.string().min(8, t('popups_wallet_password_length_error')).max(20, t('popups_wallet_password_length_error')).refine((input)=>[
                /[A-Z]/,
                /[a-z]/,
                /\d/,
                /[^\dA-Za-z]/
            ].filter((regex)=>regex.test(input)
            ).length >= 2
        , t('popups_wallet_password_satisfied_requirement')),
        confirm: zod__WEBPACK_IMPORTED_MODULE_4__.z.string().optional()
    }).refine((data)=>!refine || data.password === data.confirm
    , {
        message: t('popups_wallet_password_dont_match'),
        path: [
            'confirm'
        ]
    });
}
function usePasswordForm(refine = true) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .useI18N */ .M1)();
    const schema = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return defineSchema(refine, t);
    }, [
        refine,
        t
    ]);
    const formValue = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__/* .useForm */ .cI)({
        mode: 'onBlur',
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__/* .zodResolver */ .F)(schema),
        defaultValues: {
            password: '',
            confirm: ''
        }
    });
    return {
        ...formValue,
        schema
    };
}


/***/ })

}]);