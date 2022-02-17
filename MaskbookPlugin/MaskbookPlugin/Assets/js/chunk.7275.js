"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4219],{

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

/***/ 44612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LoadingButton_LoadingButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(81987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/utils/capitalize.js
var capitalize = __webpack_require__(85568);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/useThemeProps.js
var useThemeProps = __webpack_require__(51765);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(75477);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(19119);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/LoadingButton/loadingButtonClasses.js

function getLoadingButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiLoadingButton', slot);
}
const loadingButtonClasses = (0,generateUtilityClasses/* default */.Z)('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
/* harmony default export */ const LoadingButton_loadingButtonClasses = (loadingButtonClasses);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/LoadingButton/LoadingButton.js


const _excluded = ["children", "disabled", "loading", "loadingIndicator", "loadingPosition"];












const useUtilityClasses = styleProps => {
  const {
    loading,
    loadingPosition,
    classes
  } = styleProps;
  const slots = {
    root: ['root', loading && 'loading'],
    startIcon: [loading && `startIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    loadingIndicator: ['loadingIndicator', loading && `loadingIndicator${(0,capitalize/* default */.Z)(loadingPosition)}`]
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getLoadingButtonUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
}; // TODO use `import { rootShouldForwardProp } from '../styles/styled';` once move to core


const rootShouldForwardProp = prop => prop !== 'styleProps' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const LoadingButtonRoot = (0,styled/* default */.ZP)(Button/* default */.Z, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiLoadingButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  styleProps,
  theme
}) => (0,esm_extends/* default */.Z)({
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, styleProps.loadingPosition === 'center' && {
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
    duration: theme.transitions.duration.short
  }),
  [`&.${LoadingButton_loadingButtonClasses.loading}`]: {
    color: 'transparent'
  }
}));
const LoadingButtonLoadingIndicator = (0,styled/* default */.ZP)('div', {
  name: 'MuiLoadingButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => {
    const {
      styleProps
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${(0,capitalize/* default */.Z)(styleProps.loadingPosition)}`]];
  }
})(({
  theme,
  styleProps
}) => (0,esm_extends/* default */.Z)({
  position: 'absolute',
  visibility: 'visible',
  display: 'flex'
}, styleProps.loadingPosition === 'start' && {
  left: 14
}, styleProps.loadingPosition === 'center' && {
  left: '50%',
  transform: 'translate(-50%)',
  color: theme.palette.action.disabled
}, styleProps.loadingPosition === 'end' && {
  right: 14
}));

const LoadingIndicator = /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
  color: "inherit",
  size: 16
});

const LoadingButton = /*#__PURE__*/react.forwardRef(function LoadingButton(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiLoadingButton'
  });

  const {
    children,
    disabled = false,
    loading = false,
    loadingIndicator = LoadingIndicator,
    loadingPosition = 'center'
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const styleProps = (0,esm_extends/* default */.Z)({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition
  });

  const classes = useUtilityClasses(styleProps);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(LoadingButtonRoot, (0,esm_extends/* default */.Z)({
    disabled: disabled || loading,
    ref: ref
  }, other, {
    classes: classes,
    styleProps: styleProps,
    children: [loading && /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingButtonLoadingIndicator, {
      className: classes.loadingIndicator,
      styleProps: styleProps,
      children: loadingIndicator
    }), children]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const LoadingButton_LoadingButton = (LoadingButton);

/***/ }),

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

/***/ 14219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(49283);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37186);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93975);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80050);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6615);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64316);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(83693);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35313);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25830);
/* harmony import */ var _components_StyledInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71955);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89939);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2498);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28623);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44612);

















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
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
        },
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
            lineHeight: '14px'
        },
        or: {
            display: 'flex',
            justifyContent: 'center'
        },
        label: {
            color: '#1C68F3',
            fontSize: 12,
            lineHeight: '16px',
            margin: '10px 0'
        },
        selected: {
            backgroundColor: '#1C68F3',
            '& > *': {
                color: '#ffffff!important'
            }
        },
        button: {
            marginTop: 10,
            padding: '9px 10px',
            borderRadius: 20
        }
    })
);
const GasSetting = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const gasNow = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_5__.useValueRef)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentGasNowSettings */ .ak);
    const etherPrice = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_6__/* .useEtherPrice */ .ifX)();
    const [currentGasPrice, setCurrentGasPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { value  } = (0,react_use__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z)(async ()=>{
        const payload = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletRPC.topUnconfirmedRequest */ .V.topUnconfirmedRequest();
        if (!payload) return;
        const computedPayload = await _service__WEBPACK_IMPORTED_MODULE_9__/* .default.Ethereum.getJsonRpcComputed */ .ZP.Ethereum.getJsonRpcComputed(payload);
        return {
            payload,
            computedPayload
        };
    });
    var ref, ref1, ref2;
    const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return [
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                gasPrice: (ref = gasNow === null || gasNow === void 0 ? void 0 : gasNow.slow) !== null && ref !== void 0 ? ref : 0
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                gasPrice: (ref1 = gasNow === null || gasNow === void 0 ? void 0 : gasNow.standard) !== null && ref1 !== void 0 ? ref1 : 0
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                gasPrice: (ref2 = gasNow === null || gasNow === void 0 ? void 0 : gasNow.fast) !== null && ref2 !== void 0 ? ref2 : 0
            }, 
        ];
    }, [
        gasNow
    ]);
    const gas = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        var ref9;
        if (value && ((ref9 = value.computedPayload) === null || ref9 === void 0 ? void 0 : ref9.type) === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_6__/* .EthereumRpcType.CONTRACT_INTERACTION */ .Wvq.CONTRACT_INTERACTION) {
            var ref10;
            var _gas;
            return new (bignumber_js__WEBPACK_IMPORTED_MODULE_7___default())((_gas = value === null || value === void 0 ? void 0 : (ref10 = value.computedPayload) === null || ref10 === void 0 ? void 0 : ref10._tx.gas) !== null && _gas !== void 0 ? _gas : 0, 16).toNumber();
        }
        return '0';
    }, [
        value
    ]);
    const handleClickOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((option)=>{
        setCurrentGasPrice((prev)=>{
            if (prev === option) return null;
            return option;
        });
    }, []);
    const schema = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return zod__WEBPACK_IMPORTED_MODULE_14__.z.object({
            gas: zod__WEBPACK_IMPORTED_MODULE_14__.z.string().refine((data)=>new (bignumber_js__WEBPACK_IMPORTED_MODULE_7___default())(data).isLessThan(gas)
            , t('popups_wallet_gas_fee_settings_limit_lower', {
                gas
            })),
            maxPriorityFeePerGas: zod__WEBPACK_IMPORTED_MODULE_14__.z.string(),
            maxFeePerGas: zod__WEBPACK_IMPORTED_MODULE_14__.z.string()
        }).refine((data)=>{
            console.log(new (bignumber_js__WEBPACK_IMPORTED_MODULE_7___default())(data.maxFeePerGas).isGreaterThan(data.maxPriorityFeePerGas));
            return new (bignumber_js__WEBPACK_IMPORTED_MODULE_7___default())(data.maxFeePerGas).isGreaterThan(data.maxPriorityFeePerGas);
        }, {
            message: t('popups_wallet_gas_fee_settings_maxFee_lower_than_priorityFee'),
            path: [
                'maxFeePerGas'
            ]
        });
    }, [
        value === null || value === void 0 ? void 0 : value.computedPayload,
        gas
    ]);
    const { control , handleSubmit , formState: { errors , isValid  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__/* .useForm */ .cI)({
        mode: 'onChange',
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_11__/* .zodResolver */ .F)(schema),
        defaultValues: {
            gas: new (bignumber_js__WEBPACK_IMPORTED_MODULE_7___default())(gas).toString(),
            maxPriorityFeePerGas: '0',
            maxFeePerGas: '0'
        }
    });
    const [{ loading  }, handleConfirm] = (0,react_use__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z)(async (data)=>{
        if (value) {
            const [initConfig] = value.payload.params[0];
            const config = data ? {
                ...value.payload.params[0],
                gas: data.gas,
                maxPriorityFeePerGas: data === null || data === void 0 ? void 0 : data.maxPriorityFeePerGas,
                maxFeePerGas: data === null || data === void 0 ? void 0 : data.maxFeePerGas
            } : {
                ...value.payload.params[0],
                gas,
                gasPrice: currentGasPrice ? options[currentGasPrice].gasPrice : initConfig.gasPrice
            };
            await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletRPC.deleteUnconfirmedRequest */ .V.deleteUnconfirmedRequest(value.payload);
            await _service__WEBPACK_IMPORTED_MODULE_9__/* .default.Ethereum.request */ .ZP.Ethereum.request({
                ...value.payload,
                params: [
                    config,
                    ...value.payload.params
                ]
            });
        }
    }, [
        value,
        currentGasPrice,
        options
    ]);
    const onSubmit = handleSubmit((data)=>handleConfirm(data)
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                className: classes.title,
                children: t('popups_wallet_gas_fee_settings')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                className: classes.description,
                children: t('popups_wallet_gas_fee_settings_description')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.options,
                children: options.map(({ title , gasPrice  }, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>handleClickOption(index)
                        ,
                        className: currentGasPrice === index ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                                children: [
                                    (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_6__/* .formatWeiToGwei */ .f1r)(gasPrice).toString(),
                                    " Gwei"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                                className: classes.gasUSD,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: new (bignumber_js__WEBPACK_IMPORTED_MODULE_7___default())(gasPrice).div(10 ** 18).times(etherPrice).toPrecision(3)
                                })
                            })
                        ]
                    }, index)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                className: classes.or,
                children: t('popups_wallet_gas_fee_settings_or')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_fee_settings_gas_limit')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_12__/* .Controller */ .Qr, {
                        control: control,
                        render: ({ field  })=>{
                            var ref11, ref12;
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_10__/* .StyledInput */ .F, {
                                ...field,
                                value: Number(field.value) ? field.value : gas,
                                error: !!((ref11 = errors.gas) === null || ref11 === void 0 ? void 0 : ref11.message),
                                helperText: (ref12 = errors.gas) === null || ref12 === void 0 ? void 0 : ref12.message,
                                disabled: currentGasPrice !== null
                            }));
                        },
                        name: "gas"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_fee_settings_max_priority_fee')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_12__/* .Controller */ .Qr, {
                        control: control,
                        render: ({ field  })=>{
                            var ref13, ref14;
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_10__/* .StyledInput */ .F, {
                                ...field,
                                disabled: currentGasPrice !== null,
                                error: !!((ref13 = errors.maxPriorityFeePerGas) === null || ref13 === void 0 ? void 0 : ref13.message),
                                helperText: (ref14 = errors.maxPriorityFeePerGas) === null || ref14 === void 0 ? void 0 : ref14.message
                            }));
                        },
                        name: "maxPriorityFeePerGas"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_fee_settings_max_fee')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_12__/* .Controller */ .Qr, {
                        control: control,
                        render: ({ field  })=>{
                            var ref15, ref16;
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_10__/* .StyledInput */ .F, {
                                ...field,
                                disabled: currentGasPrice !== null,
                                error: !!((ref15 = errors.maxFeePerGas) === null || ref15 === void 0 ? void 0 : ref15.message),
                                helperText: (ref16 = errors.maxFeePerGas) === null || ref16 === void 0 ? void 0 : ref16.message
                            }));
                        },
                        name: "maxFeePerGas"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
                loading: loading,
                variant: "contained",
                fullWidth: true,
                className: classes.button,
                disabled: !isValid && !currentGasPrice,
                onClick: ()=>{
                    currentGasPrice ? handleConfirm() : onSubmit();
                },
                children: t('confirm')
            })
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GasSetting);


/***/ })

}]);