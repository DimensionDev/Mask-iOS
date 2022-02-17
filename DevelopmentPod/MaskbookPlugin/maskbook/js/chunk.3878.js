"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3878],{

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

/***/ 96698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_GasSetting)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(9094);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(26901);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(48981);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(32637);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(70520);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(18228);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.11.6/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(34181);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.25.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(74221);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.25.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(87756);
// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(88143);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.61_10fe5b9cda37a48a2d94b5e38d45d618/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(9484);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useUnConfirmedRequest.ts
var useUnConfirmedRequest = __webpack_require__(99016);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(80126);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(29187);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(83317);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(91339);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/GasSetting/GasSetting1559.tsx





















const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const history = (0,react_router/* useHistory */.k6)();
    const [selected, setOption] = (0,react.useState)(null);
    const [getGasLimitError, setGetGasLimitError] = (0,react.useState)(false);
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.chainId);
    const { value , loading: getValueLoading  } = (0,useUnConfirmedRequest/* useUnconfirmedRequest */.d)();
    // #region Get suggest gas options data from meta swap api
    const { value: gasOptions , loading: getGasOptionsLoading  } = (0,useAsync/* default */.Z)(async ()=>{
        return messages/* WalletRPC.getEstimateGasFees */.V.getEstimateGasFees(chainId);
    }, [
        chainId
    ]);
    // #endregion
    // #region Gas options
    const options = (0,react.useMemo)(()=>{
        return [
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                content: gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.low
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                content: gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.medium
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                content: gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.high
            }, 
        ];
    }, [
        gasOptions
    ]);
    // #endregion
    // #region If the payload type be SEND_ETHER or CONTRACT_INTERACTION, get the gas from the payload
    const gas = (0,react.useMemo)(()=>{
        var ref, ref3;
        if (value && ((value === null || value === void 0 ? void 0 : (ref = value.computedPayload) === null || ref === void 0 ? void 0 : ref.type) === types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER || (value === null || value === void 0 ? void 0 : (ref3 = value.computedPayload) === null || ref3 === void 0 ? void 0 : ref3.type) === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION)) {
            var ref4;
            var _gas;
            return new (bignumber_default())((_gas = value === null || value === void 0 ? void 0 : (ref4 = value.computedPayload) === null || ref4 === void 0 ? void 0 : ref4._tx.gas) !== null && _gas !== void 0 ? _gas : 0).toNumber();
        }
        return 0;
    }, [
        value
    ]);
    // #endregion
    // #region If the payload type be SEND_ETHER or CONTRACT_INTERACTION, estimate min gas limit by tx data
    const { value: minGasLimit  } = (0,useAsync/* default */.Z)(async ()=>{
        var ref, ref6;
        if (value && ((value === null || value === void 0 ? void 0 : (ref = value.computedPayload) === null || ref === void 0 ? void 0 : ref.type) === types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER || (value === null || value === void 0 ? void 0 : (ref6 = value.computedPayload) === null || ref6 === void 0 ? void 0 : ref6.type) === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION)) {
            try {
                return web3.eth.estimateGas({
                    data: value.computedPayload._tx.data,
                    from: value.computedPayload._tx.from,
                    to: value.computedPayload._tx.to,
                    value: value.computedPayload._tx.value
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
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>(0,base_src/* isGreaterThanOrEqualTo */.KH)(gasLimit, minGasLimit !== null && minGasLimit !== void 0 ? minGasLimit : 0)
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
    // #region If the payload type be SEND_ETHER or CONTRACT_INTERACTION and there are maxFeePerGas and maxPriorityFeePerGas parameters on tx, set them to the form data
    (0,useUpdateEffect/* default */.Z)(()=>{
        var ref, ref7;
        if ((value === null || value === void 0 ? void 0 : (ref = value.computedPayload) === null || ref === void 0 ? void 0 : ref.type) === types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER || (value === null || value === void 0 ? void 0 : (ref7 = value.computedPayload) === null || ref7 === void 0 ? void 0 : ref7.type) === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION) {
            var ref8;
            if ((value === null || value === void 0 ? void 0 : (ref8 = value.computedPayload) === null || ref8 === void 0 ? void 0 : ref8.type) === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION && ![
                'transfer',
                'transferFrom',
                'approve'
            ].includes(value === null || value === void 0 ? void 0 : value.computedPayload.name)) {
                setOption(1);
            } else if ((value === null || value === void 0 ? void 0 : value.computedPayload._tx.maxFeePerGas) && (value === null || value === void 0 ? void 0 : value.computedPayload._tx.maxPriorityFeePerGas)) {
                setValue('maxPriorityFeePerGas', (0,web3_utils_lib.fromWei)((0,base_src/* toFixed */.FH)(value.computedPayload._tx.maxPriorityFeePerGas), 'gwei'));
                setValue('maxFeePerGas', (0,web3_utils_lib.fromWei)((0,base_src/* toFixed */.FH)(value.computedPayload._tx.maxFeePerGas), 'gwei'));
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
        var ref, ref9;
        setValue('maxPriorityFeePerGas', (ref9 = new (bignumber_default())((ref = content === null || content === void 0 ? void 0 : content.suggestedMaxPriorityFeePerGas) !== null && ref !== void 0 ? ref : 0).toString()) !== null && ref9 !== void 0 ? ref9 : '');
        var ref10, ref11;
        setValue('maxFeePerGas', (ref11 = new (bignumber_default())((ref10 = content === null || content === void 0 ? void 0 : content.suggestedMaxFeePerGas) !== null && ref10 !== void 0 ? ref10 : 0).toString()) !== null && ref11 !== void 0 ? ref11 : '');
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
        history.goBack();
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
        var ref, ref12;
        if (getGasOptionsLoading) return undefined;
        var ref13;
        if ((0,base_src/* isLessThan */.FI)(maxPriorityFeePerGas, (ref13 = gasOptions === null || gasOptions === void 0 ? void 0 : (ref = gasOptions.low) === null || ref === void 0 ? void 0 : ref.suggestedMaxPriorityFeePerGas) !== null && ref13 !== void 0 ? ref13 : 0)) return t('wallet_transfer_error_max_priority_gas_fee_too_low');
        var ref14;
        if ((0,base_src/* isGreaterThan */.T1)(maxPriorityFeePerGas, (0,base_src/* multipliedBy */.$q)((ref14 = gasOptions === null || gasOptions === void 0 ? void 0 : (ref12 = gasOptions.high) === null || ref12 === void 0 ? void 0 : ref12.suggestedMaxPriorityFeePerGas) !== null && ref14 !== void 0 ? ref14 : 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_priority_gas_fee_too_high');
        return undefined;
    }, [
        maxPriorityFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    const maxFeeGasHelperText = (0,react.useMemo)(()=>{
        var ref;
        if (getGasOptionsLoading) return undefined;
        var ref15;
        if ((0,base_src/* isLessThan */.FI)(maxFeePerGas, (ref15 = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.estimatedBaseFee) !== null && ref15 !== void 0 ? ref15 : 0)) return t('wallet_transfer_error_max_fee_too_low');
        var ref16;
        if ((0,base_src/* isGreaterThan */.T1)(maxFeePerGas, (0,base_src/* multipliedBy */.$q)((ref16 = gasOptions === null || gasOptions === void 0 ? void 0 : (ref = gasOptions.high) === null || ref === void 0 ? void 0 : ref.suggestedMaxFeePerGas) !== null && ref16 !== void 0 ? ref16 : 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_fee_too_high');
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
            history.replace(shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet);
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
    var ref5, ref1, ref2;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title , content  }, index)=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                                children: [
                                    (0,base_src/* toFixed */.FH)(content === null || content === void 0 ? void 0 : content.suggestedMaxFeePerGas, 2),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "inherit",
                                        children: t('wallet_transfer_gwei')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)((ref5 = content === null || content === void 0 ? void 0 : content.suggestedMaxFeePerGas) !== null && ref5 !== void 0 ? ref5 : 0).times(nativeTokenPrice).times(21000).toPrecision(3)
                                })
                            })
                        ]
                    }, index));
                })
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
                            var ref, ref17;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!((ref = errors.gasLimit) === null || ref === void 0 ? void 0 : ref.message),
                                helperText: (ref17 = errors.gasLimit) === null || ref17 === void 0 ? void 0 : ref17.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            }));
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
                                    usd: (0,formatter/* formatGweiToEther */.Hh)((ref1 = Number(maxPriorityFeePerGas)) !== null && ref1 !== void 0 ? ref1 : 0).times(nativeTokenPrice).times(gasLimit1).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            var ref, ref18;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!((ref = errors.maxPriorityFeePerGas) === null || ref === void 0 ? void 0 : ref.message) || !!maxPriorFeeHelperText,
                                helperText: ((ref18 = errors.maxPriorityFeePerGas) === null || ref18 === void 0 ? void 0 : ref18.message) || maxPriorFeeHelperText,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            }));
                        },
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
                                    usd: (0,formatter/* formatGweiToEther */.Hh)((ref2 = Number(maxFeePerGas)) !== null && ref2 !== void 0 ? ref2 : 0).times(nativeTokenPrice).times(gasLimit1).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            var ref, ref19;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!((ref = errors.maxFeePerGas) === null || ref === void 0 ? void 0 : ref.message) || !!maxFeeGasHelperText,
                                helperText: ((ref19 = errors.maxFeePerGas) === null || ref19 === void 0 ? void 0 : ref19.message) || maxFeeGasHelperText,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            }));
                        },
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
    }));
});

;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/GasSetting/Prior1559GasSetting.tsx





















const Prior1559GasSetting_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    [types/* ChainId.BSC */.a_.BSC]: '0x12a05f200',
    [types/* ChainId.Matic */.a_.Matic]: '0x6fc23ac00'
};
const Prior1559GasSetting = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Prior1559GasSetting_useStyles();
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { value , loading: getValueLoading  } = (0,useUnConfirmedRequest/* useUnconfirmedRequest */.d)();
    const [getGasLimitError, setGetGasLimitError] = (0,react.useState)(false);
    const history = (0,react_router/* useHistory */.k6)();
    const [selected, setOption] = (0,react.useState)(null);
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.chainId);
    // #region Get gas options from debank
    const { value: gasOptions  } = (0,useAsync/* default */.Z)(async ()=>{
        const response = await messages/* WalletRPC.getGasPriceDictFromDeBank */.V.getGasPriceDictFromDeBank(chainId);
        if (!response) return {
            slow: 0,
            standard: 0,
            fast: 0
        };
        return {
            slow: response.data.slow.price,
            standard: response.data.normal.price,
            fast: response.data.fast.price
        };
    }, [
        chainId
    ]);
    var ref5, ref1, ref2;
    // #endregion
    const options = (0,react.useMemo)(()=>{
        return [
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                gasPrice: (ref5 = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.slow) !== null && ref5 !== void 0 ? ref5 : 0
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                gasPrice: (ref1 = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.standard) !== null && ref1 !== void 0 ? ref1 : 0
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                gasPrice: (ref2 = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.fast) !== null && ref2 !== void 0 ? ref2 : 0
            }, 
        ];
    }, [
        gasOptions
    ]);
    const gas = (0,react.useMemo)(()=>{
        var ref, ref3;
        if (value && ((value === null || value === void 0 ? void 0 : (ref = value.computedPayload) === null || ref === void 0 ? void 0 : ref.type) === types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER || (value === null || value === void 0 ? void 0 : (ref3 = value.computedPayload) === null || ref3 === void 0 ? void 0 : ref3.type) === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION)) {
            var ref4;
            var _gas;
            return new (bignumber_default())((_gas = value === null || value === void 0 ? void 0 : (ref4 = value.computedPayload) === null || ref4 === void 0 ? void 0 : ref4._tx.gas) !== null && _gas !== void 0 ? _gas : 0).toNumber();
        }
        return 0;
    }, [
        value
    ]);
    const { value: minGasLimit  } = (0,useAsync/* default */.Z)(async ()=>{
        var ref, ref6;
        if (value && ((value === null || value === void 0 ? void 0 : (ref = value.computedPayload) === null || ref === void 0 ? void 0 : ref.type) === types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER || (value === null || value === void 0 ? void 0 : (ref6 = value.computedPayload) === null || ref6 === void 0 ? void 0 : ref6.type) === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION)) {
            try {
                return web3.eth.estimateGas(value.computedPayload._tx);
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
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>new (bignumber_default())(gasLimit).gte(minGasLimit !== null && minGasLimit !== void 0 ? minGasLimit : 0)
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
        var ref, ref7;
        if ((value === null || value === void 0 ? void 0 : (ref = value.computedPayload) === null || ref === void 0 ? void 0 : ref.type) === types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER || (value === null || value === void 0 ? void 0 : (ref7 = value.computedPayload) === null || ref7 === void 0 ? void 0 : ref7.type) === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION) {
            // if rpc payload contain gas price, set it to default values
            if (value === null || value === void 0 ? void 0 : value.computedPayload._tx.gasPrice) {
                const minGasPrice = minGasPriceOfChain[chainId];
                // if the gas price in payload is lower than minimum value
                if (minGasPrice && (0,base_src/* isLessThan */.FI)(value.computedPayload._tx.gasPrice, minGasPrice)) {
                    setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)(minGasPrice).toString());
                }
                setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)(value.computedPayload._tx.gasPrice).toString());
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
        if (gas) setValue('gasLimit', new (bignumber_default())(gas).toString());
    }, [
        gas,
        setValue
    ]);
    (0,react.useEffect)(()=>{
        if (selected !== null) setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)(options[selected].gasPrice).toString());
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
        history.goBack();
    }, [
        value
    ]);
    const onSubmit = handleSubmit((data)=>handleConfirm(data)
    );
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!value && !getValueLoading) {
            history.replace(shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
                                children: [
                                    (0,formatter/* formatWeiToGwei */.f1)(gasPrice !== null && gasPrice !== void 0 ? gasPrice : 0).toString(),
                                    " Gwei"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatWeiToEther */.yp)(gasPrice).times(nativeTokenPrice).times(21000).toPrecision(3)
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
                            var ref, ref8;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!((ref = errors.gasLimit) === null || ref === void 0 ? void 0 : ref.message),
                                helperText: (ref8 = errors.gasLimit) === null || ref8 === void 0 ? void 0 : ref8.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            }));
                        },
                        name: "gasLimit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_price')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            var ref, ref9;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                onChange: (e)=>{
                                    setOption(null);
                                    field.onChange(e);
                                },
                                error: !!((ref = errors.gasPrice) === null || ref === void 0 ? void 0 : ref.message),
                                helperText: (ref9 = errors.gasPrice) === null || ref9 === void 0 ? void 0 : ref9.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            }));
                        },
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
    }));
});

;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/GasSetting/index.tsx








const GasSetting_useStyles = (0,src/* makeStyles */.ZL)()(()=>({
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
    const chainId = (0,useChainId/* useChainId */.xx)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                children: t('popups_wallet_gas_fee_settings')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.description,
                children: t('popups_wallet_gas_fee_settings_description')
            }),
            (0,chainDetailed/* isEIP1559Supported */.U1)(chainId) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting1559, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Prior1559GasSetting, {})
        ]
    }));
});
/* harmony default export */ const Wallet_GasSetting = (GasSetting);


/***/ }),

/***/ 99016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useUnconfirmedRequest)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29105);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98697);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8267);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39973);





const useUnconfirmedRequest = ()=>{
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(async ()=>{
        const payload = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__/* .WalletRPC.topUnconfirmedRequest */ .V.topUnconfirmedRequest();
        if (!payload) return;
        const computedPayload = await _service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.getComputedPayload */ .ZP.Ethereum.getComputedPayload(payload);
        return {
            payload,
            computedPayload
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        return _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.requestsUpdated.on */ .R$.events.requestsUpdated.on(result.retry);
    }, [
        result.retry
    ]);
    return result;
};


/***/ }),

/***/ 29187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useTokenPrice),
/* harmony export */   "l": () => (/* binding */ useNativeTokenPrice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39973);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98697);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18274);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25071);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9094);






const task = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .pollingTask */ .s_)(async ()=>{
    await _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.kickToUpdateTokenPrices */ .V.kickToUpdateTokenPrices();
    return false;
}, {
    autoStart: false,
    delay: _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_CHAIN_STATE_DELAY */ .js
});
function useTokenPrice(chainId, contractAddress, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    var ref2;
    let platformId = undefined;
    let coinId = undefined;
    if (chainId) {
        platformId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoPlatformId */ .AQ)(chainId);
        coinId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoCoinId */ .vM)(chainId);
    }
    const category = (ref2 = contractAddress || coinId) === null || ref2 === void 0 ? void 0 : ref2.toLowerCase();
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // start the polling task
        task.reset();
        return ()=>task.cancel()
        ;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!category) return;
        if (contractAddress && platformId) {
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trackContract */ .V.trackContract(platformId, contractAddress);
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateTokenPrices */ .V.updateTokenPrices();
        }
        if (!contractAddress) {
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trackNativeToken */ .V.trackNativeToken(category);
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateNativeTokenPrices */ .V.updateNativeTokenPrices();
        }
        return _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.addListener */ .JC.addListener((newVal)=>{
            var ref;
            var ref1;
            const value = (ref1 = (ref = newVal[category]) === null || ref === void 0 ? void 0 : ref[currencyType]) !== null && ref1 !== void 0 ? ref1 : 0;
            setPrice(value);
        });
    }, [
        platformId,
        category,
        contractAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        var ref;
        if (!category) return;
        const currentTokenPrices = _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.value */ .JC.value;
        var ref3;
        setPrice((ref3 = (ref = currentTokenPrices[category]) === null || ref === void 0 ? void 0 : ref[currencyType]) !== null && ref3 !== void 0 ? ref3 : 0);
    }, [
        category,
        currencyType
    ]);
    if (!category) return 0;
    return price;
}
function useNativeTokenPrice(chainId, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    return useTokenPrice(chainId, undefined, currencyType);
}


/***/ })

}]);