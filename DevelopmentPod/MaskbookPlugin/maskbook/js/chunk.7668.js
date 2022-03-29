"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7668],{

/***/ 75426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.27.1_react@18.0.0-rc.2/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(56247);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.1/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 84258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EyeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


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

/***/ 34382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ EyeOffIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


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

/***/ 29502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PasswordField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92332);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87409);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64702);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34382);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84258);





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

/***/ 64702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15672);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43021);
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

/***/ 37668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93573);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74491);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56247);
/* harmony import */ var _components_PasswordField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29502);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43021);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1840);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63081);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92186);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79226);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16576);
/* harmony import */ var _hooks_usePasswordForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91421);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .makeStyles */ .ZL)()({
    container: {
        padding: '16px 10px',
        flex: 1
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        color: '#151818',
        lineHeight: 1.5,
        fontWeight: 500
    },
    textField: {
        marginTop: 10
    },
    form: {
        marginTop: 26,
        width: '100%'
    },
    label: {
        fontSize: 12,
        lineHeight: '16px',
        color: '#1C68F3'
    },
    tips: {
        color: '#7B8192',
        fontSize: 12,
        lineHeight: '16px',
        marginTop: 10
    },
    button: {
        fontWeight: 600,
        marginTop: 20,
        padding: '9px 10px',
        borderRadius: 20
    },
    disabled: {
        opacity: 0.5,
        backgroundColor: '#1C68F3!important',
        color: '#ffffff!important'
    },
    controller: {
        padding: '16px 10px'
    }
});
const SetPaymentPassword = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useNavigate */ .s0)();
    const { control , handleSubmit , setError , formState: { errors , isValid  } , schema ,  } = (0,_hooks_usePasswordForm__WEBPACK_IMPORTED_MODULE_8__/* .usePasswordForm */ .a)();
    const [{ loading  }, onConfirm] = (0,react_use__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(async (data)=>{
        try {
            await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletRPC.setPassword */ .V.setPassword(data.password);
            navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .PopupRoutes.ImportWallet */ .mZ.ImportWallet, {
                replace: true
            });
        } catch (error) {
            if (error instanceof Error) {
                setError('password', {
                    message: error.message
                });
            }
        }
    }, [
        history,
        setError
    ]);
    const onSubmit = handleSubmit(onConfirm);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.header,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            className: classes.title,
                            children: t('popups_wallet_set_payment_password')
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: classes.form,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    marginTop: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        className: classes.label,
                                        children: t('popups_wallet_payment_password')
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .Controller */ .Qr, {
                                        control: control,
                                        render: ({ field  })=>{
                                            var ref, ref1;
                                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_4__/* .PasswordField */ .Z, {
                                                ...field,
                                                classes: {
                                                    root: classes.textField
                                                },
                                                type: "password",
                                                variant: "filled",
                                                placeholder: t('popups_wallet_payment_password'),
                                                error: !isValid && !!((ref = errors.password) === null || ref === void 0 ? void 0 : ref.message),
                                                helperText: !isValid ? (ref1 = errors.password) === null || ref1 === void 0 ? void 0 : ref1.message : ''
                                            });
                                        },
                                        name: "password"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .Controller */ .Qr, {
                                        render: ({ field  })=>{
                                            var ref, ref2;
                                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_4__/* .PasswordField */ .Z, {
                                                classes: {
                                                    root: classes.textField
                                                },
                                                ...field,
                                                error: !isValid && !!((ref = errors.confirm) === null || ref === void 0 ? void 0 : ref.message),
                                                helperText: !isValid ? (ref2 = errors.confirm) === null || ref2 === void 0 ? void 0 : ref2.message : '',
                                                type: "password",
                                                variant: "filled",
                                                placeholder: t('popups_wallet_re_payment_password')
                                            });
                                        },
                                        name: "confirm",
                                        control: control
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.tips,
                                children: t('popups_wallet_payment_password_tip')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.controller,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    loading: loading,
                    variant: "contained",
                    fullWidth: true,
                    classes: {
                        root: classes.button,
                        disabled: classes.disabled
                    },
                    disabled: !isValid,
                    onClick: onSubmit,
                    children: t('confirm')
                })
            })
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetPaymentPassword);


/***/ }),

/***/ 91421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ usePasswordForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56382);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93573);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56247);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75426);





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