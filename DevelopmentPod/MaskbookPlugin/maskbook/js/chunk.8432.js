"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8432],{

/***/ 33953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:t.rawValues?i:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 11877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48591);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
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
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                ...props.InputProps?.classes
            }
        },
        FormHelperTextProps: {
            ...props.FormHelperTextProps,
            style: {
                marginLeft: 0,
                color: '#ff5f5f'
            }
        }
    });
}));


/***/ }),

/***/ 18432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _components_StyledInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11877);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91788);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18271);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93455);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32588);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80875);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72261);
/* harmony import */ var _hooks_useSetWalletNameForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30912);
/* harmony import */ var _hooks_useWalletContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55921);
/* harmony import */ var _hook_useTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43240);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67938);















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
        fontWeight: 600,
        padding: '9px 0',
        borderRadius: 20
    },
    disabled: {
        opacity: 0.5,
        backgroundColor: '#1C68F3!important',
        color: '#ffffff!important'
    }
});
const WalletRename = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .useNavigate */ .s0)();
    const { classes  } = useStyles();
    const { selectedWallet  } = _hooks_useWalletContext__WEBPACK_IMPORTED_MODULE_7__/* .WalletContext.useContainer */ .z.useContainer();
    const currentWallet = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_9__/* .useWallet */ .Os)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const wallet = selectedWallet ?? currentWallet;
    const { control , handleSubmit , formState: { errors , isValid  } , schema ,  } = (0,_hooks_useSetWalletNameForm__WEBPACK_IMPORTED_MODULE_6__/* .useSetWalletNameForm */ .$)(wallet?.name);
    const [{ loading  }, renameWallet] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(async ({ name  })=>{
        if (!wallet?.address || !name) return;
        await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.renameWallet */ .V.renameWallet(wallet.address, name);
        return navigate(-1);
    }, [
        wallet?.address
    ]);
    const onSubmit = handleSubmit(renameWallet);
    (0,_hook_useTitle__WEBPACK_IMPORTED_MODULE_8__/* .useTitle */ .Z)(t('popups_rename'));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__/* .Controller */ .Qr, {
                    name: "name",
                    control: control,
                    render: ({ field  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_3__/* .StyledInput */ .F, {
                            ...field,
                            error: !!errors.name?.message,
                            helperText: errors.name?.message,
                            defaultValue: wallet?.name
                        })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    fullWidth: true,
                    loading: loading,
                    variant: "contained",
                    disabled: !isValid,
                    classes: {
                        root: classes.button,
                        disabled: classes.disabled
                    },
                    onClick: onSubmit,
                    children: t('confirm')
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletRename);


/***/ }),

/***/ 30912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useSetWalletNameForm)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7055);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72261);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33953);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67938);





const schema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().min(1).max(12)
});
function useSetWalletNameForm(defaultName) {
    const wallets = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_0__/* .useWallets */ .rB)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const formValue = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .cI)({
        mode: 'onChange',
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__/* .zodResolver */ .F)(schema),
        defaultValues: {
            name: defaultName ?? `account ${wallets.length + 1}`
        }
    });
    return {
        ...formValue,
        schema
    };
}


/***/ })

}]);