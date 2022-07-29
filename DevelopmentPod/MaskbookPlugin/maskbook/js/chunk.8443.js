"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8443],{

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

/***/ 75464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_GasSetting)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.16.0/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(7055);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(40661);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(33953);
// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(11877);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(80875);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useUnConfirmedRequest.ts
var useUnConfirmedRequest = __webpack_require__(22720);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/GasSetting/GasSetting1559.tsx





















const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        options: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 10,
            cursor: 'pointer',
            width: '100%',
            overflowX: 'scroll',
            '& > *': {
                backgroundColor: '#f7f9fa',
                borderRadius: 8,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }
        },
        optionsTitle: {
            color: '#7B8192',
            fontSize: 16,
            lineHeight: '22px'
        },
        optionsContent: {
            fontSize: 11
        },
        gasPrice: {
            fontSize: 12,
            lineHeight: '16px'
        },
        gasUSD: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '14px',
            wordBreak: 'break-all'
        },
        or: {
            display: 'flex',
            justifyContent: 'center'
        },
        label: {
            color: theme.palette.primary.main,
            fontSize: 12,
            lineHeight: '16px',
            margin: '10px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        selected: {
            backgroundColor: theme.palette.primary.main,
            '& > *': {
                color: theme.palette.primary.contrastText
            }
        },
        button: {
            fontWeight: 600,
            marginTop: 10,
            padding: '9px 10px',
            borderRadius: 20
        },
        unit: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '16px',
            flex: 1,
            marginLeft: '0.5em'
        },
        price: {
            fontSize: 12,
            lineHeight: '16px',
            color: '#15181B'
        },
        disabled: {
            opacity: 0.5,
            backgroundColor: '#1C68F3!important',
            color: '#ffffff!important'
        }
    })
);
const HIGH_FEE_WARNING_MULTIPLIER = 1.5;
const GasSetting1559 = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [selected, setOption] = (0,react.useState)(null);
    const [getGasLimitError, setGetGasLimitError] = (0,react.useState)(false);
    const { value: nativeToken  } = (0,entry_web3/* useNativeToken */.u0)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: nativeTokenPrice = 0  } = (0,entry_web3/* useNativeTokenPrice */.lb)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId: nativeToken?.chainId
    });
    const { value , loading: getValueLoading  } = (0,useUnConfirmedRequest/* useUnconfirmedRequest */.d)();
    const { value: gasOptions , loading: getGasOptionsLoading  } = (0,entry_web3/* useGasOptions */.oj)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    // #region Gas options
    const options = (0,react.useMemo)(()=>[
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                content: gasOptions?.[base_src/* GasOptionType.SLOW */.Qd.SLOW]
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                content: gasOptions?.[base_src/* GasOptionType.NORMAL */.Qd.NORMAL]
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                content: gasOptions?.[base_src/* GasOptionType.FAST */.Qd.FAST]
            }, 
        ]
    , [
        gasOptions
    ]);
    // #endregion
    // #region If the payload type be TRANSFER or INTERACTION, get the gas from the payload
    const gas = (0,react.useMemo)(()=>{
        if (value && (value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.TRANSFER */.vt.TRANSFER || value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.INTERACTION */.vt.INTERACTION)) {
            return new (bignumber_default())(value?.formatterTransaction?._tx.gas ?? 0).toNumber();
        }
        return 0;
    }, [
        value
    ]);
    // #endregion
    // #region If the payload type be TRANSFER or INTERACTION, estimate min gas limit by tx data
    const { value: minGasLimit  } = (0,useAsync/* default */.Z)(async ()=>{
        if (value && (value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.TRANSFER */.vt.TRANSFER || value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.INTERACTION */.vt.INTERACTION)) {
            try {
                if (!web3) return 0;
                return web3.eth.estimateGas({
                    data: value.formatterTransaction._tx.data,
                    from: value.formatterTransaction._tx.from,
                    to: value.formatterTransaction._tx.to,
                    value: value.formatterTransaction._tx.value
                });
            } catch  {
                setGetGasLimitError(true);
                return 0;
            }
        }
        return 0;
    }, [
        value,
        web3
    ]);
    // #endregion
    // #region Form field define schema
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>(0,base_src/* isGreaterThanOrEqualTo */.KH)(gasLimit, minGasLimit ?? 0)
            , t('popups_wallet_gas_fee_settings_min_gas_limit_tips', {
                limit: minGasLimit
            })),
            maxPriorityFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_priority_fee_absence')).refine(base_src/* isPositive */.xP, t('wallet_transfer_error_max_priority_gas_fee_positive')),
            maxFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_fee_absence'))
        }).refine((data)=>(0,base_src/* isLessThanOrEqualTo */.PW)(data.maxPriorityFeePerGas, data.maxFeePerGas)
        , {
            message: t('wallet_transfer_error_max_priority_gas_fee_imbalance'),
            path: [
                'maxFeePerGas'
            ]
        });
    }, [
        minGasLimit,
        gasOptions
    ]);
    // #endregion
    const { control , handleSubmit , setValue , setError , watch , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            gasLimit: new (bignumber_default())(gas).toString(),
            maxPriorityFeePerGas: '',
            maxFeePerGas: '0'
        },
        context: {
            minGasLimit,
            gasOptions
        }
    });
    // #region If the payload type be TRANSFER or INTERACTION and there are maxFeePerGas and maxPriorityFeePerGas parameters on tx, set them to the form data
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.TRANSFER */.vt.TRANSFER || value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.INTERACTION */.vt.INTERACTION) {
            if (value?.formatterTransaction._tx.maxFeePerGas && value?.formatterTransaction._tx.maxPriorityFeePerGas) {
                setValue('maxPriorityFeePerGas', (0,web3_utils_lib.fromWei)((0,base_src/* toFixed */.FH)(value.formatterTransaction._tx.maxPriorityFeePerGas), 'gwei'));
                setValue('maxFeePerGas', (0,web3_utils_lib.fromWei)((0,base_src/* toFixed */.FH)(value.formatterTransaction._tx.maxFeePerGas), 'gwei'));
            } else {
                setOption(1);
            }
        }
    }, [
        value,
        setValue
    ]);
    // #endregion
    // #region Set gas on tx to form data
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (gas) setValue('gasLimit', new (bignumber_default())(gas).toString());
    }, [
        gas,
        setValue
    ]);
    // #endregion
    // #region If the selected changed, set the value on the option to the form data
    (0,react.useEffect)(()=>{
        if (selected === null) return;
        const { content  } = options[selected];
        setValue('maxPriorityFeePerGas', new (bignumber_default())(content?.suggestedMaxPriorityFeePerGas ?? 0).toString() ?? '');
        setValue('maxFeePerGas', new (bignumber_default())(content?.suggestedMaxFeePerGas ?? 0).toString() ?? '');
    }, [
        selected,
        setValue,
        options
    ]);
    // #endregion
    const [{ loading  }, handleConfirm] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        if (!value) return;
        const config = value.payload.params.map((param)=>({
                ...param,
                gas: (0,web3_utils_lib.toHex)(new (bignumber_default())(data.gasLimit).toString()),
                maxPriorityFeePerGas: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.maxPriorityFeePerGas).toFixed(0)),
                maxFeePerGas: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.maxFeePerGas).toFixed(0))
            })
        );
        await messages/* WalletRPC.updateUnconfirmedRequest */.V.updateUnconfirmedRequest({
            ...value.payload,
            params: config
        });
        navigate(-1);
    }, [
        value,
        history
    ]);
    const onSubmit = handleSubmit((data)=>handleConfirm(data)
    );
    const [maxPriorityFeePerGas, maxFeePerGas, gasLimit1] = watch([
        'maxPriorityFeePerGas',
        'maxFeePerGas',
        'gasLimit'
    ]);
    // #region These are additional form rules that need to be prompted for but do not affect the validation of the form
    const maxPriorFeeHelperText = (0,react.useMemo)(()=>{
        if (getGasOptionsLoading) return undefined;
        if ((0,base_src/* isLessThan */.FI)(maxPriorityFeePerGas, gasOptions?.[base_src/* GasOptionType.SLOW */.Qd.SLOW]?.suggestedMaxPriorityFeePerGas ?? 0)) return t('wallet_transfer_error_max_priority_gas_fee_too_low');
        if ((0,base_src/* isGreaterThan */.T1)(maxPriorityFeePerGas, (0,base_src/* multipliedBy */.$q)(gasOptions?.[base_src/* GasOptionType.FAST */.Qd.FAST]?.suggestedMaxPriorityFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_priority_gas_fee_too_high');
        return undefined;
    }, [
        maxPriorityFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    const maxFeeGasHelperText = (0,react.useMemo)(()=>{
        if (getGasOptionsLoading) return undefined;
        if ((0,base_src/* isLessThan */.FI)(maxFeePerGas, gasOptions?.[base_src/* GasOptionType.SLOW */.Qd.SLOW]?.estimatedBaseFee ?? 0)) return t('wallet_transfer_error_max_fee_too_low');
        if ((0,base_src/* isGreaterThan */.T1)(maxFeePerGas, (0,base_src/* multipliedBy */.$q)(gasOptions?.[base_src/* GasOptionType.FAST */.Qd.FAST]?.suggestedMaxFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_fee_too_high');
        return undefined;
    }, [
        maxFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    // #endregion
    // #region If the payload is consumed it needs to be redirected
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!value && !getValueLoading) {
            navigate(src/* PopupRoutes.Wallet */.mZ.Wallet, {
                replace: true
            });
        }
    }, [
        value,
        getValueLoading
    ]);
    // #endregion
    // #region If the estimate gas be 0, Set error
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!getGasLimitError) setError('gasLimit', {
            message: 'Cant not get estimate gas from contract'
        });
    }, [
        getGasLimitError
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title , content  }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>setOption(index)
                        ,
                        className: selected === index ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "div",
                                className: classes.optionsContent,
                                children: [
                                    (0,base_src/* toFixed */.FH)(content?.suggestedMaxFeePerGas, 2),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "inherit",
                                        component: "span",
                                        children: t('wallet_transfer_gwei')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(content?.suggestedMaxFeePerGas ?? 0).times(nativeTokenPrice).times(21000).toPrecision(3)
                                })
                            })
                        ]
                    }, index)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_fee_settings_gas_limit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.gasLimit?.message,
                                helperText: errors.gasLimit?.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            });
                        },
                        name: "gasLimit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            t('popups_wallet_gas_fee_settings_max_priority_fee'),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.unit,
                                children: [
                                    "(",
                                    t('wallet_transfer_gwei'),
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(Number(maxPriorityFeePerGas) ?? 0).times(nativeTokenPrice).times(gasLimit1).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.maxPriorityFeePerGas?.message || !!maxPriorFeeHelperText,
                                helperText: errors.maxPriorityFeePerGas?.message || maxPriorFeeHelperText,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            })
                        ,
                        name: "maxPriorityFeePerGas"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            t('popups_wallet_gas_fee_settings_max_fee'),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.unit,
                                children: [
                                    "(",
                                    t('wallet_transfer_gwei'),
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(Number(maxFeePerGas) ?? 0).times(nativeTokenPrice).times(gasLimit1).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.maxFeePerGas?.message || !!maxFeeGasHelperText,
                                helperText: errors.maxFeePerGas?.message || maxFeeGasHelperText,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            })
                        ,
                        name: "maxFeePerGas"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: loading,
                variant: "contained",
                fullWidth: true,
                classes: {
                    root: classes.button,
                    disabled: classes.disabled
                },
                disabled: !(0,isEmpty/* default */.Z)(errors),
                onClick: onSubmit,
                children: t('confirm')
            })
        ]
    });
});

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/GasSetting/Prior1559GasSetting.tsx





















const Prior1559GasSetting_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        options: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 10,
            cursor: 'pointer',
            width: '100%',
            overflowX: 'scroll',
            '& > *': {
                backgroundColor: '#f7f9fa',
                borderRadius: 8,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }
        },
        optionsTitle: {
            color: '#7B8192',
            fontSize: 16,
            lineHeight: '22px'
        },
        optionsContent: {
            fontSize: 11
        },
        gasPrice: {
            fontSize: 12,
            lineHeight: '16px'
        },
        gasUSD: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '14px',
            wordBreak: 'break-all'
        },
        or: {
            display: 'flex',
            justifyContent: 'center'
        },
        label: {
            color: theme.palette.primary.main,
            fontSize: 12,
            lineHeight: '16px',
            margin: '10px 0'
        },
        selected: {
            backgroundColor: theme.palette.primary.main,
            '& > *': {
                color: theme.palette.primary.contrastText
            }
        },
        button: {
            fontWeight: 600,
            marginTop: 10,
            padding: '9px 10px',
            borderRadius: 20
        },
        disabled: {
            opacity: 0.5,
            backgroundColor: '#1C68F3!important',
            color: '#ffffff!important'
        }
    })
);
const minGasPriceOfChain = {
    [types/* ChainId.BSC */.a_.BSC]: (0,base_src/* pow10 */.wA)(9).multipliedBy(5),
    [types/* ChainId.Conflux */.a_.Conflux]: (0,base_src/* pow10 */.wA)(9).multipliedBy(5),
    [types/* ChainId.Matic */.a_.Matic]: (0,base_src/* pow10 */.wA)(9).multipliedBy(30)
};
const Prior1559GasSetting = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Prior1559GasSetting_useStyles();
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: gasOptions_  } = (0,entry_web3/* useGasOptions */.oj)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value , loading: getValueLoading  } = (0,useUnConfirmedRequest/* useUnconfirmedRequest */.d)();
    const [getGasLimitError, setGetGasLimitError] = (0,react.useState)(false);
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [selected, setOption] = (0,react.useState)(null);
    const { value: nativeToken  } = (0,entry_web3/* useNativeToken */.u0)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: nativeTokenPrice = 0  } = (0,entry_web3/* useNativeTokenPrice */.lb)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId: nativeToken?.chainId
    });
    // #region Get gas options from debank
    const gasOptions = (0,react.useMemo)(()=>{
        return {
            slow: gasOptions_?.[base_src/* GasOptionType.SLOW */.Qd.SLOW].suggestedMaxFeePerGas ?? 0,
            standard: gasOptions_?.[base_src/* GasOptionType.NORMAL */.Qd.NORMAL].suggestedMaxFeePerGas ?? 0,
            fast: gasOptions_?.[base_src/* GasOptionType.FAST */.Qd.FAST].suggestedMaxFeePerGas ?? 0
        };
    }, [
        chainId,
        gasOptions_
    ]);
    // #endregion
    const options = (0,react.useMemo)(()=>gasOptions ? [
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                gasPrice: gasOptions.slow
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                gasPrice: gasOptions.standard
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                gasPrice: gasOptions.fast
            }, 
        ] : null
    , [
        gasOptions
    ]);
    const gas = (0,react.useMemo)(()=>{
        if (value && (value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.TRANSFER */.vt.TRANSFER || value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.INTERACTION */.vt.INTERACTION)) {
            return new (bignumber_default())(value?.formatterTransaction?._tx.gas ?? 0).toNumber();
        }
        return 0;
    }, [
        value
    ]);
    const { value: minGasLimit  } = (0,useAsync/* default */.Z)(async ()=>{
        if (value && (value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.TRANSFER */.vt.TRANSFER || value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.INTERACTION */.vt.INTERACTION)) {
            try {
                return web3?.eth.estimateGas(value.formatterTransaction._tx) ?? 0;
            } catch  {
                return 0;
            }
        }
        return 0;
    }, [
        value,
        web3
    ]);
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>new (bignumber_default())(gasLimit).gte(minGasLimit ?? 0)
            , t('popups_wallet_gas_fee_settings_min_gas_limit_tips', {
                limit: minGasLimit
            })),
            gasPrice: lib.z.string().min(1, t('wallet_transfer_error_gas_price_absence'))
        });
    }, [
        minGasLimit
    ]);
    const { control , handleSubmit , setError , setValue , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            gasLimit: '',
            gasPrice: ''
        },
        context: {
            minGasLimit
        }
    });
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.TRANSFER */.vt.TRANSFER || value?.formatterTransaction?.type === base_src/* TransactionDescriptorType.INTERACTION */.vt.INTERACTION) {
            // if rpc payload contain gas price, set it to default values
            if (value?.formatterTransaction._tx.gasPrice) {
                const minGasPrice = minGasPriceOfChain[chainId];
                // if the gas price in payload is lower than minimum value
                if (minGasPrice && (0,base_src/* isLessThan */.FI)(value.formatterTransaction._tx.gasPrice, minGasPrice)) {
                    setValue('gasPrice', minGasPrice.toString());
                }
                setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)(value.formatterTransaction._tx.gasPrice).toString());
            } else {
                setOption(1);
            }
        }
    }, [
        value,
        setValue,
        chainId
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        const gasLimit = minGasLimit || gas;
        if (gasLimit) setValue('gasLimit', new (bignumber_default())(gasLimit).toString());
    }, [
        minGasLimit,
        gas,
        setValue
    ]);
    (0,react.useEffect)(()=>{
        if (selected !== null && options) setValue('gasPrice', options[selected].gasPrice.toString());
    }, [
        selected,
        setValue,
        options
    ]);
    const [{ loading  }, handleConfirm] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        if (!value) return;
        const config = value.payload.params.map((param)=>({
                ...param,
                gas: (0,web3_utils_lib.toHex)(new (bignumber_default())(data.gasLimit).toString()),
                gasPrice: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.gasPrice).toString())
            })
        );
        await messages/* WalletRPC.updateUnconfirmedRequest */.V.updateUnconfirmedRequest({
            ...value.payload,
            params: config
        });
        navigate(-1);
    }, [
        value
    ]);
    const onSubmit = handleSubmit((data)=>handleConfirm(data)
    );
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!value && !getValueLoading) {
            navigate(src/* PopupRoutes.Wallet */.mZ.Wallet, {
                replace: true
            });
        }
    }, [
        value,
        getValueLoading
    ]);
    // #region If the estimate gas be 0, Set error
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!getGasLimitError) setError('gasLimit', {
            message: 'Cant not get estimate gas from contract'
        });
    }, [
        getGasLimitError
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            options ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title , gasPrice  }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>setOption(index)
                        ,
                        className: selected === index ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.optionsContent,
                                children: [
                                    Number(gasPrice ?? 0).toString(),
                                    " Gwei"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(gasPrice).times(nativeTokenPrice).times(minGasLimit || 21000).toPrecision(3)
                                })
                            })
                        ]
                    }, index)
                )
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_fee_settings_gas_limit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.gasLimit?.message,
                                helperText: errors.gasLimit?.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            });
                        },
                        name: "gasLimit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_price')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!errors.gasPrice?.message,
                                helperText: errors.gasPrice?.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            })
                        ,
                        name: "gasPrice"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: loading,
                variant: "contained",
                fullWidth: true,
                classes: {
                    root: classes.button,
                    disabled: classes.disabled
                },
                disabled: !(0,isEmpty/* default */.Z)(errors),
                onClick: onSubmit,
                children: t('confirm')
            })
        ]
    });
});

// EXTERNAL MODULE: ./src/extension/popups/hook/useTitle.ts
var useTitle = __webpack_require__(43240);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/GasSetting/index.tsx











const GasSetting_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        container: {
            padding: 16,
            '& > *': {
                marginTop: 10
            }
        },
        title: {
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 500
        },
        description: {
            fontSize: 12,
            lineHeight: '18px',
            color: '#7B8192'
        }
    })
);
const GasSetting = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = GasSetting_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    (0,useTitle/* useTitle */.Z)(t('popups_gas_fee_settings'));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                style: {
                    marginTop: 0
                },
                children: t('popups_wallet_gas_fee_settings')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.description,
                children: t('popups_wallet_gas_fee_settings_description')
            }),
            resolver/* chainResolver.isSupport */.VU.isSupport(chainId, 'EIP1559') ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting1559, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Prior1559GasSetting, {})
        ]
    });
});
/* harmony default export */ const Wallet_GasSetting = (GasSetting);


/***/ }),

/***/ 22720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useUnconfirmedRequest)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58500);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91788);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10503);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2046);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67938);







const useUnconfirmedRequest = ()=>{
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { TransactionFormatter  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        const payload = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__/* .WalletRPC.topUnconfirmedRequest */ .V.topUnconfirmedRequest();
        if (!payload) return;
        const computedPayload = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getPayloadConfig */ .is)(payload);
        if (!computedPayload) return {
            payload
        };
        const formatterTransaction = await TransactionFormatter?.formatTransaction(chainId, computedPayload);
        const transactionContext = await TransactionFormatter?.createContext(chainId, computedPayload);
        return {
            payload,
            computedPayload,
            formatterTransaction,
            transactionContext
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.requestsUpdated.on */ .R$.events.requestsUpdated.on(result.retry);
    }, [
        result.retry
    ]);
    return result;
};


/***/ })

}]);