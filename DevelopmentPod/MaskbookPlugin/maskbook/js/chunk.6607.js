"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6607],{

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

/***/ 76607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18271);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16562);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(21784);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5326);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7055);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93455);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11627);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72261);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33953);
/* harmony import */ var _components_StyledInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11877);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(80875);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(67127);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70981);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(32588);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44737);
/* harmony import */ var _hooks_useWalletContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55921);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50719);
/* harmony import */ var _hook_useTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43240);






















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()({
    container: {
        padding: 16
    },
    label: {
        color: '#1C68F3',
        fontSize: 12,
        lineHeight: '16px',
        margin: '10px 0'
    },
    unit: {
        color: '#7B8192',
        fontSize: 12,
        lineHeight: '16px',
        flex: 1,
        marginLeft: '0.5em'
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
});
const ReplaceTransaction = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { classes  } = useStyles();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__/* .useNavigate */ .s0)();
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__/* .useLocation */ .TH)();
    const search = new URLSearchParams(location.search);
    const type = search.get('type');
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { transaction  } = (0,unstated_next__WEBPACK_IMPORTED_MODULE_13__/* .useContainer */ .u)(_hooks_useWalletContext__WEBPACK_IMPORTED_MODULE_8__/* .WalletContext */ .z);
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_10__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { TransactionFormatter  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_10__/* .useWeb3State */ .dM)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const connection = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_10__/* .useWeb3Connection */ .Tv)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { value: formatterTransaction  } = (0,react_use__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(async ()=>{
        if (!TransactionFormatter?.formatTransaction || !transaction) return;
        return TransactionFormatter.formatTransaction(chainId, transaction);
    }, [
        transaction,
        TransactionFormatter,
        chainId
    ]);
    const { value: transactionContext  } = (0,react_use__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(async ()=>{
        if (!TransactionFormatter?.createContext || !transaction) return;
        return TransactionFormatter.createContext(chainId, transaction);
    }, [
        transaction,
        TransactionFormatter,
        chainId
    ]);
    const defaultGas = transaction?._tx.gas ?? 0;
    const defaultGasPrice = transaction?._tx.gasPrice ?? 0;
    const defaultMaxFeePerGas = transaction?._tx.maxFeePerGas ?? 0;
    const defaultMaxPriorityFeePerGas = transaction?._tx.maxPriorityFeePerGas ?? 0;
    const { value: nativeToken  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_10__/* .useNativeToken */ .u0)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { value: nativeTokenPrice  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_10__/* .useNativeTokenPrice */ .lb)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const is1559 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_10__/* .useChainIdSupport */ .UY)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, chainId, 'EIP1559');
    const schema = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return zod__WEBPACK_IMPORTED_MODULE_15__.z.object({
            gas: zod__WEBPACK_IMPORTED_MODULE_15__.z.string().refine((gas)=>new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(gas).gte((0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.hexToNumber)((0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.toHex)(defaultGas)) ?? 0)
            , t('popups_wallet_gas_fee_settings_min_gas_limit_tips', {
                limit: (0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.hexToNumber)((0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.toHex)(defaultGas))
            })),
            gasPrice: is1559 ? zod__WEBPACK_IMPORTED_MODULE_15__.z.string().optional() : zod__WEBPACK_IMPORTED_MODULE_15__.z.string().min(1, t('wallet_transfer_error_gas_price_absence')),
            maxPriorityFeePerGas: is1559 ? zod__WEBPACK_IMPORTED_MODULE_15__.z.string().min(1, t('wallet_transfer_error_max_priority_fee_absence')).refine(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .isPositive */ .xP, t('wallet_transfer_error_max_priority_gas_fee_positive')) : zod__WEBPACK_IMPORTED_MODULE_15__.z.string().optional(),
            maxFeePerGas: is1559 ? zod__WEBPACK_IMPORTED_MODULE_15__.z.string().min(1, t('wallet_transfer_error_max_fee_absence')) : zod__WEBPACK_IMPORTED_MODULE_15__.z.string().optional()
        }).refine((data)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .isLessThanOrEqualTo */ .PW)(data.maxPriorityFeePerGas ?? 0, data.maxFeePerGas ?? 0)
        , {
            message: t('wallet_transfer_error_max_priority_gas_fee_imbalance'),
            path: [
                'maxFeePerGas'
            ]
        });
    }, [
        defaultGas,
        is1559
    ]);
    const { control , formState: { errors  } , handleSubmit , watch ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_16__/* .useForm */ .cI)({
        mode: 'onBlur',
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_17__/* .zodResolver */ .F)(schema),
        defaultValues: {
            gas: new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())((0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.hexToNumber)((0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.toHex)(defaultGas))).toString(),
            gasPrice: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .formatWeiToGwei */ .f1)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(defaultGasPrice, 16)).plus(1).toString(),
            maxFeePerGas: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .formatWeiToGwei */ .f1)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(defaultMaxFeePerGas, 16)).plus(1).toString(),
            maxPriorityFeePerGas: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .formatWeiToGwei */ .f1)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(defaultMaxPriorityFeePerGas, 16)).toString()
        },
        context: {
            is1559
        }
    });
    const [gas1, gasPrice, maxFeePerGas] = watch([
        'gas',
        'gasPrice',
        'maxFeePerGas'
    ]);
    const gasPriceEIP1559 = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(maxFeePerGas ? maxFeePerGas : 0);
    const gasPricePrior1559 = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(gasPrice ? gasPrice : 0);
    const gasFee = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .multipliedBy */ .$q)(is1559 ? gasPriceEIP1559 : gasPricePrior1559, gas1 ? gas1 : 0).integerValue().toFixed();
    const [{ loading  }, handleConfirm] = (0,react_use__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(async (data)=>{
        try {
            const config = {
                ...transaction?._tx,
                gas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.toHex)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(data.gas).toString()),
                ...is1559 ? {
                    maxPriorityFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.toHex)((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .formatGweiToWei */ .nU)(data.maxPriorityFeePerGas ?? 0).toString()),
                    maxFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.toHex)((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .formatGweiToWei */ .nU)(data.maxFeePerGas ?? 0).toString())
                } : {
                    gasPrice: (0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.toHex)((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .formatGweiToWei */ .nU)(data.gasPrice ?? 0).toString())
                }
            };
            if (!transaction || !formatterTransaction) return;
            if (type === _type__WEBPACK_IMPORTED_MODULE_2__/* .ReplaceType.CANCEL */ .uM.CANCEL) {
                await connection?.cancelTransaction(transaction?.id, config);
            } else {
                await connection?.requestTransaction(transaction?.id, config);
            }
            navigate(-1);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('maxFeePerGas cannot be less thant maxPriorityFeePerGas')) {
                    setErrorMessage(t('wallet_transfer_error_max_fee_too_low'));
                    return;
                }
                setErrorMessage(error.message);
            }
        }
    }, [
        transactionContext,
        is1559,
        type,
        transaction
    ]);
    const onSubmit = handleSubmit((data)=>handleConfirm(data)
    );
    (0,_hook_useTitle__WEBPACK_IMPORTED_MODULE_11__/* .useTitle */ .Z)(type === _type__WEBPACK_IMPORTED_MODULE_2__/* .ReplaceType.CANCEL */ .uM.CANCEL ? t('cancel') : t('speed_up'));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            component: "main",
            p: 2,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    fontSize: 18,
                    lineHeight: "24px",
                    fontWeight: 500,
                    children: type === _type__WEBPACK_IMPORTED_MODULE_2__/* .ReplaceType.CANCEL */ .uM.CANCEL ? t('popups_cancel_transaction') : t('popups_speed_up_transaction')
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    style: {
                        padding: '14.5px 0'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                            fontWeight: 500,
                            fontSize: 24,
                            lineHeight: "30px",
                            children: [
                                (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .formatGweiToEther */ .Hh)(gasFee ?? 0).toString(),
                                " ",
                                nativeToken?.symbol
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                            children: t('popups_wallet_gas_fee_settings_usd', {
                                usd: (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .formatGweiToEther */ .Hh)(gasFee).times(nativeTokenPrice ?? 0).toPrecision(3)
                            })
                        })
                    ]
                }),
                is1559 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: onSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                            className: classes.label,
                            children: t('popups_wallet_gas_fee_settings_gas_limit')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_16__/* .Controller */ .Qr, {
                            control: control,
                            render: ({ field  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_7__/* .StyledInput */ .F, {
                                    ...field,
                                    error: !!errors.gas?.message,
                                    helperText: errors.gas?.message,
                                    inputProps: {
                                        pattern: '^[0-9]*[.,]?[0-9]*$'
                                    }
                                })
                            ,
                            name: "gas"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                            className: classes.label,
                            children: [
                                t('popups_wallet_gas_fee_settings_max_priority_fee'),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                    component: "span",
                                    className: classes.unit,
                                    children: [
                                        "(",
                                        t('wallet_transfer_gwei'),
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_16__/* .Controller */ .Qr, {
                            control: control,
                            render: ({ field  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_7__/* .StyledInput */ .F, {
                                    ...field,
                                    error: !!errors.maxPriorityFeePerGas?.message,
                                    helperText: errors.maxPriorityFeePerGas?.message,
                                    inputProps: {
                                        pattern: '^[0-9]*[.,]?[0-9]*$'
                                    }
                                })
                            ,
                            name: "maxPriorityFeePerGas"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                            className: classes.label,
                            children: [
                                t('popups_wallet_gas_fee_settings_max_fee'),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                    component: "span",
                                    className: classes.unit,
                                    children: [
                                        "(",
                                        t('wallet_transfer_gwei'),
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_16__/* .Controller */ .Qr, {
                            control: control,
                            render: ({ field  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_7__/* .StyledInput */ .F, {
                                    ...field,
                                    error: !!errors.maxFeePerGas?.message,
                                    helperText: errors.maxFeePerGas?.message,
                                    inputProps: {
                                        pattern: '^[0-9]*[.,]?[0-9]*$'
                                    }
                                })
                            ,
                            name: "maxFeePerGas"
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    style: {
                        display: 'flex',
                        gap: 10
                    },
                    onSubmit: onSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                    className: classes.label,
                                    children: [
                                        t('popups_wallet_gas_price'),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                            component: "span",
                                            className: classes.unit,
                                            children: [
                                                "(",
                                                t('wallet_transfer_gwei'),
                                                ")"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_16__/* .Controller */ .Qr, {
                                    control: control,
                                    name: "gasPrice",
                                    render: ({ field  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_7__/* .StyledInput */ .F, {
                                            ...field,
                                            error: !!errors.gasPrice?.message,
                                            helperText: errors.gasPrice?.message,
                                            inputProps: {
                                                pattern: '^[0-9]*[.,]?[0-9]*$'
                                            }
                                        })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                    className: classes.label,
                                    children: t('popups_wallet_gas_fee_settings_gas_limit')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_16__/* .Controller */ .Qr, {
                                    control: control,
                                    name: "gas",
                                    render: ({ field  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_7__/* .StyledInput */ .F, {
                                            ...field,
                                            error: !!errors.gas?.message,
                                            helperText: errors.gas?.message,
                                            inputProps: {
                                                pattern: '^[0-9]*[.,]?[0-9]*$'
                                            }
                                        })
                                })
                            ]
                        })
                    ]
                }),
                errorMessage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    color: "#FF5F5F",
                    fontSize: 12,
                    py: 0.5,
                    children: errorMessage
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    loading: loading,
                    variant: "contained",
                    fullWidth: true,
                    classes: {
                        root: classes.button,
                        disabled: classes.disabled
                    },
                    disabled: !(0,lodash_unified__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(errors),
                    onClick: onSubmit,
                    children: t('confirm')
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReplaceTransaction);


/***/ })

}]);