"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5661],{

/***/ 2498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.14.2_react@18.0.0-alpha-aecb3b6d1/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(28623);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.0_react-hook-form@7.14.2/node_modules/@hookform/resolvers/dist/resolvers.module.js
var resolvers_module_i=function(e,i){for(var a in i.fields){var f=i.fields[a];if(f&&f.ref&&"reportValidity"in f.ref){var t=(0,index_esm/* get */.U2)(e,a);f.ref.setCustomValidity(t&&t.message||""),f.ref.reportValidity()}}},resolvers_module_a=function(a,f){f.shouldUseNativeValidation&&resolvers_module_i(a,f);var t={};for(var o in a){var s=(0,index_esm/* get */.U2)(f.fields,o);(0,index_esm/* set */.t8)(t,o,Object.assign(a[o],{ref:s&&s.ref}))}return t};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.0_react-hook-form@7.14.2/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_i({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:resolvers_module_a(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 95661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76900);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97448);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91377);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32027);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89939);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28623);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2498);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18875);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51987);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76591);











const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    container: {
        padding: '120px 18%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 24,
        lineHeight: 1.25,
        fontWeight: 500
    },
    form: {
        marginTop: 70,
        width: '100%'
    },
    label: {
        fontSize: 12,
        lineHeight: '16px',
        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.blue */ .ZN.blue
    },
    input: {
        width: '100%',
        marginTop: 10
    },
    tips: {
        fontSize: 12,
        lineHeight: '16px',
        color: '#7B8192',
        marginTop: 10
    },
    controller: {
        marginTop: 24,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 33%)',
        justifyContent: 'center',
        gridColumnGap: 10,
        padding: '27px 0'
    },
    button: {
        height: 48,
        borderRadius: 24,
        fontSize: 18
    },
    alert: {
        marginTop: 24,
        padding: 24
    }
});
const CreateWalletForm = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_6__/* .useDashboardI18N */ .xF)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { classes  } = useStyles();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_7__/* .useNavigate */ .s0)();
    const schema = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return zod__WEBPACK_IMPORTED_MODULE_8__.z.object({
            name: zod__WEBPACK_IMPORTED_MODULE_8__.z.string().min(1).max(12),
            password: zod__WEBPACK_IMPORTED_MODULE_8__.z.string().min(8).max(20).refine((input)=>/[A-Z]/.test(input)
            , t.create_wallet_password_uppercase_tip()).refine((input)=>/[a-z]/.test(input)
            , t.create_wallet_password_lowercase_tip()).refine((input)=>/\d/.test(input)
            , t.create_wallet_password_number_tip()).refine((input)=>/[^\dA-Za-z]/.test(input)
            , t.create_wallet_password_special_tip()),
            confirm: zod__WEBPACK_IMPORTED_MODULE_8__.z.string().min(8).max(20)
        }).refine((data)=>data.password === data.confirm
        , {
            message: t.create_wallet_password_match_tip(),
            path: [
                'confirm'
            ]
        });
    }, []);
    const { control , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .cI)({
        mode: 'onChange',
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__/* .zodResolver */ .F)(schema),
        defaultValues: {
            name: '',
            password: '',
            confirm: ''
        }
    });
    const onSubmit = handleSubmit((data)=>{
        const params = new URLSearchParams();
        params.set('name', data.name);
        navigate({
            pathname: _type__WEBPACK_IMPORTED_MODULE_5__/* .RoutePaths.CreateMaskWalletMnemonic */ .s2.CreateMaskWalletMnemonic,
            search: `?${params.toString()}`
        });
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                className: classes.title,
                children: t.create_wallet_form_title()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: classes.form,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                                className: classes.label,
                                children: t.create_wallet_wallet_name()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .Controller */ .Qr, {
                                render: ({ field  })=>{
                                    var ref, ref1;
                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                                        ...field,
                                        error: !!((ref = errors.name) === null || ref === void 0 ? void 0 : ref.message),
                                        helperText: (ref1 = errors.name) === null || ref1 === void 0 ? void 0 : ref1.message,
                                        variant: "filled",
                                        placeholder: t.create_wallet_name_placeholder(),
                                        className: classes.input,
                                        InputProps: {
                                            disableUnderline: true
                                        }
                                    }));
                                },
                                control: control,
                                name: "name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                        style: {
                            marginTop: 24
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                                className: classes.label,
                                children: t.create_wallet_payment_password()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .Controller */ .Qr, {
                                control: control,
                                render: ({ field  })=>{
                                    var ref5, ref6;
                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                                        ...field,
                                        type: "password",
                                        variant: "filled",
                                        placeholder: t.create_wallet_payment_password(),
                                        error: !!((ref5 = errors.password) === null || ref5 === void 0 ? void 0 : ref5.message),
                                        helperText: (ref6 = errors.password) === null || ref6 === void 0 ? void 0 : ref6.message,
                                        className: classes.input,
                                        InputProps: {
                                            disableUnderline: true
                                        }
                                    }));
                                },
                                name: "password"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .Controller */ .Qr, {
                                render: ({ field  })=>{
                                    var ref7, ref8;
                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                                        ...field,
                                        error: !!((ref7 = errors.confirm) === null || ref7 === void 0 ? void 0 : ref7.message),
                                        helperText: (ref8 = errors.confirm) === null || ref8 === void 0 ? void 0 : ref8.message,
                                        type: "password",
                                        variant: "filled",
                                        placeholder: t.create_wallet_re_enter_payment_password(),
                                        className: classes.input,
                                        InputProps: {
                                            disableUnderline: true
                                        }
                                    }));
                                },
                                name: "confirm",
                                control: control
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                        className: classes.tips,
                        children: t.create_wallet_payment_password_tip()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                        className: classes.controller,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
                                color: "secondary",
                                className: classes.button,
                                onClick: ()=>navigate(-1)
                                ,
                                children: t.cancel()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
                                className: classes.button,
                                onClick: onSubmit,
                                children: t.next()
                            })
                        ]
                    }),
                    open ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
                        severity: "error",
                        onClose: ()=>setOpen(false)
                        ,
                        className: classes.alert,
                        children: t.create_wallet_mnemonic_tip()
                    }) : null
                ]
            })
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateWalletForm);


/***/ })

}]);