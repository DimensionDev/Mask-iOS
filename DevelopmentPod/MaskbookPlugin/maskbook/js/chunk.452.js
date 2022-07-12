(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[452],{

/***/ 33953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 58277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(43147);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 69480:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(58277)();
}


/***/ }),

/***/ 43147:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 79162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ RightIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const RightIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('RightIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m3.749 10 4.168 4.167 8.334-8.334",
        stroke: "#60DFAB",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');


/***/ }),

/***/ 11877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 73902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_Transfer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(11087);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletContext.ts
var useWalletContext = __webpack_require__(55921);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../web3-shared/evm/utils/payload.ts
var payload = __webpack_require__(2046);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.16.0/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(7055);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(40661);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(33953);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Collapse/Collapse.js
var Collapse = __webpack_require__(43857);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(73551);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(11142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(11877);
// EXTERNAL MODULE: ../icons/general/Right.tsx
var Right = __webpack_require__(79162);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/User.tsx


const UserIcon = (0,utils/* createIcon */.I)('UserIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M16.667 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H6.667a3.333 3.333 0 00-3.334 3.333V17.5M10 9.167A3.333 3.333 0 1010 2.5a3.333 3.333 0 000 6.667z",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__(42213);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(25984);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(80875);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/Transfer/AccountItem.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()({
    menuItem: {
        padding: 8,
        display: 'flex',
        justifyContent: 'space-between',
        '&>*': {
            fontSize: 12,
            lineHeight: '16px'
        }
    },
    domain: {
        fontSize: 12,
        color: '#7B8192',
        lineHeight: '16px',
        marginLeft: 10,
        maxWidth: 80,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
});
const AccountItem = /*#__PURE__*/ (0,react.memo)(({ account , onClick  })=>{
    const { classes  } = useStyles();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)();
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, account.address);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
        className: classes.menuItem,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                display: "flex",
                children: [
                    account.name,
                    domain && Others?.formatDomainName ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        className: classes.domain,
                        children: Others.formatDomainName(domain)
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedAddress */.Kv, {
                    address: account.address ?? '',
                    size: 4,
                    formatter: formatter/* formatEthereumAddress */.j8
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/type.ts
var type = __webpack_require__(16562);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/Transfer/Transfer1559.tsx


























const Transfer1559_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        padding: '16px 16px 0 16px',
        flex: 1
    },
    label: {
        color: '#1C68F3',
        fontSize: 12,
        fontWeight: 600,
        lineHeight: '16px',
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    accountName: {
        fontSize: 16,
        fontWeight: 600,
        linHeight: '16px',
        color: '#15181B'
    },
    user: {
        stroke: '#15181B',
        fill: 'none',
        fontSize: 20,
        cursor: 'pointer'
    },
    expand: {
        backgroundColor: '#F7F9FA',
        padding: 10
    },
    title: {
        fontSize: 12,
        lineHeight: '16px',
        color: '#15181B',
        fontWeight: 700
    },
    balance: {
        color: '#7B8192',
        fontSize: 12,
        lineHeight: '16px'
    },
    max: {
        height: 20,
        borderRadius: 4
    },
    maxLabel: {
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 12
    },
    chip: {
        marginLeft: 6,
        border: 'none'
    },
    icon: {
        fontSize: 20,
        width: 20,
        height: 20
    },
    gasInput: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 10
    },
    unit: {
        color: '#7B8192',
        fontSize: 12,
        fontWeight: 600,
        lineHeight: '16px',
        flex: 1
    },
    price: {
        fontSize: 12,
        lineHeight: '16px',
        color: '#15181B'
    },
    controller: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        padding: '10px 16px'
    },
    button: {
        fontWeight: 600,
        padding: '9px 0',
        borderRadius: 20,
        fontSize: 14,
        lineHeight: '20px'
    },
    popover: {
        width: '100%'
    },
    errorMessage: {
        color: '#FF5F5F',
        fontSize: 16,
        lineHeight: '22px',
        fontWeight: 500
    },
    normalMessage: {
        color: '#111432',
        fontSize: 16,
        lineHeight: '22px',
        fontWeight: 500
    },
    domainName: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: '20px',
        color: '#000000'
    },
    registeredAddress: {
        color: '#7B8192',
        fontSize: 14,
        lineHeight: '20px'
    },
    menu: {
        left: '16px !important',
        width: '100%'
    }
});
const MIN_GAS_LIMIT = 21000;
const HIGH_FEE_WARNING_MULTIPLIER = 1.5;
const Transfer1559 = /*#__PURE__*/ (0,react.memo)(({ selectedAsset , openAssetMenu , otherWallets  })=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = Transfer1559_useStyles();
    const wallet = (0,entry_web3/* useWallet */.Os)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const network = (0,entry_web3/* useNetworkType */.bL)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: nativeToken  } = (0,entry_web3/* useFungibleToken */.cf)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [minGasLimitContext, setMinGasLimitContext] = (0,react.useState)(0);
    const [addressTip, setAddressTip] = (0,react.useState)();
    const { value: etherPrice  } = (0,entry_web3/* useNativeTokenPrice */.lb)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId: nativeToken?.chainId
    });
    const { value: estimateGasFees  } = (0,entry_web3/* useGasOptions */.oj)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            address: lib.z.string().min(1, t('wallet_transfer_error_address_absence')).refine((address)=>dist.EthereumAddress.isValid(address) || Others?.isValidDomain?.(address)
            , t('wallet_transfer_error_invalid_address')),
            amount: lib.z.string().refine((amount)=>{
                const transferAmount = (0,base_src/* rightShift */.pu)(amount || '0', selectedAsset?.decimals);
                return !!transferAmount || !(0,base_src/* isZero */.Fr)(transferAmount);
            }, t('wallet_transfer_error_amount_absence')).refine((amount)=>{
                const transferAmount = (0,base_src/* rightShift */.pu)(amount || '0', selectedAsset?.decimals);
                return !(0,base_src/* isGreaterThan */.T1)(transferAmount, selectedAsset?.balance ?? 0);
            }, t('wallet_transfer_error_insufficient_balance', {
                symbol: selectedAsset?.symbol
            })),
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>(0,base_src/* isGreaterThanOrEqualTo */.KH)(gasLimit, minGasLimitContext)
            , t('popups_wallet_gas_fee_settings_min_gas_limit_tips', {
                limit: minGasLimitContext
            })),
            maxPriorityFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_priority_fee_absence')).refine(base_src/* isPositive */.xP, t('wallet_transfer_error_max_priority_gas_fee_positive')).refine((value)=>{
                return (0,base_src/* isGreaterThanOrEqualTo */.KH)(value, estimateGasFees?.slow?.suggestedMaxPriorityFeePerGas ?? 0);
            }, t('wallet_transfer_error_max_priority_gas_fee_too_low')).refine((value)=>(0,base_src/* isLessThan */.FI)(value, (0,base_src/* multipliedBy */.$q)(estimateGasFees?.fast?.suggestedMaxPriorityFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))
            , t('wallet_transfer_error_max_priority_gas_fee_too_high')),
            maxFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_fee_absence')).refine((value)=>(0,base_src/* isGreaterThanOrEqualTo */.KH)(value, estimateGasFees?.slow?.suggestedMaxFeePerGas ?? 0)
            , t('wallet_transfer_error_max_fee_too_low')).refine((value)=>(0,base_src/* isLessThan */.FI)(value, (0,base_src/* multipliedBy */.$q)(estimateGasFees?.fast?.suggestedMaxFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))
            , t('wallet_transfer_error_max_fee_too_high'))
        }).refine((data)=>(0,base_src/* isLessThanOrEqualTo */.PW)(data.maxPriorityFeePerGas, data.maxFeePerGas)
        , {
            message: t('wallet_transfer_error_max_priority_gas_fee_imbalance'),
            path: [
                'maxFeePerGas'
            ]
        });
    }, [
        wallet,
        selectedAsset,
        minGasLimitContext,
        estimateGasFees,
        Others
    ]);
    const methods = (0,index_esm/* useForm */.cI)({
        shouldUnregister: false,
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            address: '',
            amount: '',
            gasLimit: selectedAsset?.schema === types/* SchemaType.Native */.XQ.Native ? '21000' : '0',
            maxPriorityFeePerGas: '',
            maxFeePerGas: ''
        },
        context: {
            wallet,
            minGasLimitContext,
            estimateGasFees,
            selectedAsset
        }
    });
    const [address1, amount1, maxFeePerGas] = methods.watch([
        'address',
        'amount',
        'maxFeePerGas'
    ]);
    // #region resolve ENS domain
    const { value: registeredAddress = '' , error: resolveDomainError , loading: resolveDomainLoading ,  } = (0,entry_web3/* useLookupAddress */.hn)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, address1);
    // #endregion
    // #region check address or registered address type
    (0,useAsync/* default */.Z)(async ()=>{
        // Only ethereum currently supports ens
        if (address1.includes('.eth') && network !== types/* NetworkType.Ethereum */.td.Ethereum) {
            setAddressTip({
                type: type/* TransferAddressError.NETWORK_NOT_SUPPORT */.VM.NETWORK_NOT_SUPPORT,
                message: t('wallet_transfer_error_no_support_ens')
            });
            return;
        }
        // The input is ens domain but the binding address cannot be found
        if (Others?.isValidDomain?.(address1) && (resolveDomainError || !registeredAddress)) {
            setAddressTip({
                type: type/* TransferAddressError.RESOLVE_FAILED */.VM.RESOLVE_FAILED,
                message: t('wallet_transfer_error_no_address_has_been_set_name')
            });
            return;
        }
        // clear error tip
        setAddressTip(null);
        if (!address1 && !registeredAddress) return;
        if (!dist.EthereumAddress.isValid(address1) && !dist.EthereumAddress.isValid(registeredAddress)) return;
        methods.clearErrors('address');
        if ((0,base_src/* isSameAddress */.Wr)(address1, wallet?.address) || (0,base_src/* isSameAddress */.Wr)(registeredAddress, wallet?.address)) {
            setAddressTip({
                type: type/* TransferAddressError.SAME_ACCOUNT */.VM.SAME_ACCOUNT,
                message: t('wallet_transfer_error_same_address_with_current_account')
            });
            return;
        }
        const result = await connection?.getCode?.(address1);
        if (result !== '0x') {
            setAddressTip({
                type: type/* TransferAddressError.CONTRACT_ADDRESS */.VM.CONTRACT_ADDRESS,
                message: t('wallet_transfer_error_is_contract_address')
            });
        }
    }, [
        address1,
        dist.EthereumAddress.isValid,
        registeredAddress,
        methods.clearErrors,
        wallet?.address,
        resolveDomainError,
        Others, 
    ]);
    // #endregion
    // #region Get min gas limit with amount and recipient address
    const { value: minGasLimit  } = (0,entry_web3_evm/* useGasLimit */.xf)(selectedAsset?.schema, selectedAsset?.address, (0,base_src/* rightShift */.pu)(amount1 ?? 0, selectedAsset?.decimals).toFixed(), dist.EthereumAddress.isValid(address1) ? address1 : registeredAddress);
    // #endregion
    const { value: tokenBalance = '0'  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, selectedAsset?.address ?? '');
    const maxAmount = (0,react.useMemo)(()=>{
        const gasFee = (0,formatter/* formatGweiToWei */.nU)(maxFeePerGas ?? 0).multipliedBy((0,payload/* addGasMargin */.bu)(minGasLimit ?? MIN_GAS_LIMIT));
        let amount_ = new (bignumber_default())(tokenBalance ?? 0);
        amount_ = selectedAsset?.schema === types/* SchemaType.Native */.XQ.Native ? amount_.minus(gasFee) : amount_;
        return (0,base_src/* formatBalance */.az)(bignumber_default().max(0, amount_).toFixed(), selectedAsset?.decimals);
    }, [
        selectedAsset,
        maxFeePerGas,
        minGasLimit,
        tokenBalance
    ]);
    // #region set default gasLimit
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!minGasLimit) return;
        methods.setValue('gasLimit', minGasLimit.toString());
        setMinGasLimitContext(minGasLimit);
    }, [
        minGasLimit,
        methods.setValue
    ]);
    // #endregion
    // #region set default Max priority gas fee and max fee
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!estimateGasFees) return;
        const { normal  } = estimateGasFees;
        methods.setValue('maxFeePerGas', new (bignumber_default())(normal?.suggestedMaxFeePerGas ?? 0).toString());
        methods.setValue('maxPriorityFeePerGas', new (bignumber_default())(normal?.suggestedMaxPriorityFeePerGas ?? 0).toString());
    }, [
        estimateGasFees,
        methods.setValue
    ]);
    // #endregion
    const [_, transferCallback] = (0,entry_web3_evm/* useTokenTransferCallback */.z7)(selectedAsset?.schema ?? types/* SchemaType.Native */.XQ.Native, selectedAsset?.address ?? '');
    const handleMaxClick = (0,react.useCallback)(()=>{
        methods.setValue('amount', maxAmount);
    }, [
        methods.setValue,
        maxAmount
    ]);
    const [{ loading , error  }, onSubmit] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        const transferAmount = (0,base_src/* rightShift */.pu)(data.amount || '0', selectedAsset?.decimals).toFixed();
        // If input address is ens domain, use registeredAddress to transfer
        if (Others?.isValidDomain?.(data.address)) {
            await transferCallback(transferAmount, registeredAddress, {
                maxFeePerGas: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.maxFeePerGas).toFixed(0)),
                maxPriorityFeePerGas: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.maxPriorityFeePerGas).toFixed(0)),
                gas: new (bignumber_default())(data.gasLimit).toNumber()
            });
            return;
        }
        await transferCallback(transferAmount, data.address, {
            maxFeePerGas: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.maxFeePerGas).toFixed(0)),
            maxPriorityFeePerGas: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.maxPriorityFeePerGas).toFixed(0)),
            gas: new (bignumber_default())(data.gasLimit).toNumber()
        });
    }, [
        selectedAsset,
        transferCallback,
        registeredAddress,
        Others
    ]);
    const [menu, openMenu] = (0,src/* useMenuConfig */._X)([
        /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            className: classes.expand,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t('wallet_transfer_between_my_accounts')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                    style: {
                        fontSize: 20
                    }
                })
            ]
        }, "expand"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
            in: true,
            children: otherWallets.map((account, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AccountItem, {
                    account: account,
                    onClick: ()=>methods.setValue('address', account.address)
                }, index)
            )
        }, "collapse"), 
    ], {
        classes: {
            paper: classes.menu
        }
    });
    const popoverContent = (0,react.useMemo)(()=>{
        if (resolveDomainLoading) return;
        if (addressTip) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                py: 2.5,
                px: 1.5,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: addressTip.type === type/* TransferAddressError.SAME_ACCOUNT */.VM.SAME_ACCOUNT ? classes.normalMessage : classes.errorMessage,
                    children: addressTip.message
                })
            });
        }
        if (registeredAddress && !resolveDomainError) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2.5,
            px: 1.5,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: resolver/* explorerResolver.domainLink */.Nb.domainLink(types/* ChainId.Mainnet */.a_.Mainnet, address1),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    underline: "none",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.domainName,
                                children: address1
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.registeredAddress,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedAddress */.Kv, {
                                    address: registeredAddress,
                                    size: 4,
                                    formatter: formatter/* formatEthereumAddress */.j8
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Right/* RightIcon */.m, {})
            ]
        });
        return;
    }, [
        address1,
        addressTip,
        registeredAddress,
        methods.formState.errors.address?.type,
        resolveDomainLoading,
        resolveDomainError, 
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(index_esm/* FormProvider */.RV, {
        ...methods,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Transfer1559TransferUI, {
                accountName: wallet?.name ?? '',
                openAccountMenu: openMenu,
                openAssetMenu: openAssetMenu,
                handleMaxClick: handleMaxClick,
                etherPrice: etherPrice ?? 0,
                selectedAsset: selectedAsset,
                handleCancel: ()=>navigate(-1)
                ,
                handleConfirm: methods.handleSubmit(onSubmit),
                confirmLoading: loading,
                popoverContent: popoverContent
            }),
            otherWallets.length ? menu : null
        ]
    });
});
const Transfer1559TransferUI = /*#__PURE__*/ (0,react.memo)(({ accountName , openAssetMenu , openAccountMenu , handleMaxClick , selectedAsset , etherPrice , handleCancel , handleConfirm , confirmLoading , popoverContent ,  })=>{
    const anchorEl = (0,react.useRef)(null);
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = Transfer1559_useStyles();
    const [popoverOpen, setPopoverOpen] = (0,react.useState)(false);
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>({
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${selectedAsset?.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${selectedAsset?.decimals}}$`)
        })
    , [
        selectedAsset?.decimals
    ]);
    const { watch , formState: { errors  } ,  } = (0,index_esm/* useFormContext */.Gc)();
    const [maxPriorityFeePerGas, maxFeePerGas, gasLimit] = watch([
        'maxPriorityFeePerGas',
        'maxFeePerGas',
        'gasLimit', 
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPopoverOpen(!!popoverContent && !!anchorEl.current);
    }, [
        popoverContent
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        style: {
                            marginTop: 0
                        },
                        children: t('wallet_transfer_account')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.accountName,
                        children: accountName
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('wallet_transfer_receiving_account')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                placeholder: t('wallet_transfer_1559_placeholder'),
                                error: !!errors.address?.message,
                                helperText: errors.address?.message,
                                InputProps: {
                                    endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        onClick: openAccountMenu,
                                        style: {
                                            marginLeft: 12
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UserIcon, {
                                            className: classes.user
                                        })
                                    }),
                                    onClick: (event)=>{
                                        if (!anchorEl.current) anchorEl.current = event.currentTarget;
                                        if (popoverContent) setPopoverOpen(true);
                                    }
                                }
                            })
                        ,
                        name: "address"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* default */.ZP, {
                        open: popoverOpen,
                        classes: {
                            paper: classes.popover
                        },
                        anchorEl: anchorEl.current,
                        onClose: ()=>setPopoverOpen(false)
                        ,
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        },
                        children: popoverContent
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: t('popups_wallet_choose_token')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.balance,
                                component: "span",
                                children: [
                                    t('wallet_balance'),
                                    ":",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedBalance */.BV, {
                                        value: selectedAsset?.balance,
                                        decimals: selectedAsset?.decimals,
                                        symbol: selectedAsset?.symbol,
                                        significant: 6,
                                        formatter: base_src/* formatBalance */.az
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                type: "text",
                                onChange: (ev)=>{
                                    const amount_ = ev.currentTarget.value.replace(/,/g, '.');
                                    if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) {
                                        ev.currentTarget.value = `0${amount_}`;
                                        field.onChange(ev);
                                    } else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) {
                                        ev.currentTarget.value = amount_;
                                        field.onChange(ev);
                                    }
                                },
                                error: !!errors.amount?.message,
                                helperText: errors.amount?.message,
                                InputProps: {
                                    autoComplete: 'off',
                                    autoCorrect: 'off',
                                    title: 'Token Amount',
                                    inputMode: 'decimal',
                                    spellCheck: false,
                                    endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                size: "small",
                                                label: "MAX",
                                                clickable: true,
                                                color: "primary",
                                                classes: {
                                                    root: classes.max,
                                                    label: classes.maxLabel
                                                },
                                                onClick: handleMaxClick
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                className: classes.chip,
                                                onClick: openAssetMenu,
                                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                                                    classes: {
                                                        icon: classes.icon
                                                    },
                                                    address: selectedAsset?.address ?? '',
                                                    name: selectedAsset?.name,
                                                    logoURL: selectedAsset?.logoURL
                                                }),
                                                deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* default */.Z, {
                                                    className: classes.icon
                                                }),
                                                color: "default",
                                                size: "small",
                                                variant: "outlined",
                                                clickable: true,
                                                label: selectedAsset?.symbol,
                                                onDelete: noop/* default */.Z
                                            })
                                        ]
                                    })
                                },
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$',
                                    min: 0,
                                    minLength: 1,
                                    maxLength: 79
                                }
                            });
                        },
                        name: "amount"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('gas_limit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                error: !!errors.gasLimit?.message,
                                helperText: errors.gasLimit?.message,
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                }
                            })
                        ,
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
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(Number(maxPriorityFeePerGas) ?? 0).times(etherPrice).times(gasLimit).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
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
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(Number(maxFeePerGas) ?? 0).times(etherPrice).times(gasLimit).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
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
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        style: {
                            backgroundColor: '#F7F9FA',
                            color: '#1C68F3'
                        },
                        onClick: handleCancel,
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                        loading: confirmLoading,
                        variant: "contained",
                        className: classes.button,
                        onClick: handleConfirm,
                        children: t('confirm')
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/Transfer/Prior1559Transfer.tsx

























const Prior1559Transfer_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        padding: 16,
        flex: 1
    },
    label: {
        color: '#1C68F3',
        fontSize: 12,
        fontWeight: 600,
        lineHeight: '16px',
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    accountName: {
        fontSize: 16,
        fontWeight: 600,
        linHeight: '16px',
        color: '#15181B'
    },
    user: {
        stroke: '#15181B',
        fill: 'none',
        fontSize: 20,
        cursor: 'pointer'
    },
    title: {
        fontSize: 12,
        lineHeight: '16px',
        color: '#15181B',
        fontWeight: 700
    },
    balance: {
        color: '#7B8192',
        fontSize: 12,
        lineHeight: '16px'
    },
    max: {
        height: 20,
        borderRadius: 4
    },
    maxLabel: {
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 12
    },
    chip: {
        marginLeft: 6,
        border: 'none'
    },
    icon: {
        fontSize: 20,
        width: 20,
        height: 20
    },
    gasInput: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 10
    },
    expand: {
        backgroundColor: '#F7F9FA',
        padding: 10
    },
    menuItem: {
        padding: 8,
        display: 'flex',
        justifyContent: 'space-between',
        '&>*': {
            fontSize: 12,
            lineHeight: '16px'
        }
    },
    controller: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        padding: 16
    },
    button: {
        fontWeight: 600,
        padding: '9px 0',
        borderRadius: 20,
        fontSize: 14,
        lineHeight: '20px'
    },
    popover: {
        width: '100%'
    },
    errorMessage: {
        color: '#FF5F5F',
        fontSize: 16,
        lineHeight: '22px',
        fontWeight: 500
    },
    normalMessage: {
        color: '#111432',
        fontSize: 16,
        lineHeight: '22px',
        fontWeight: 500
    },
    menu: {
        left: '16px !important',
        width: '100%'
    }
});
const Prior1559Transfer = /*#__PURE__*/ (0,react.memo)(({ selectedAsset , openAssetMenu , otherWallets  })=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = Prior1559Transfer_useStyles();
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const wallet = (0,entry_web3/* useWallet */.Os)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const hub = (0,entry_web3/* useWeb3Hub */.hh)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [minGasLimitContext, setMinGasLimitContext] = (0,react.useState)(0);
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [addressTip, setAddressTip] = (0,react.useState)();
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            address: lib.z.string().min(1, t('wallet_transfer_error_address_absence')).refine(dist.EthereumAddress.isValid, t('wallet_transfer_error_invalid_address')),
            amount: lib.z.string().refine((amount)=>{
                const transferAmount = (0,base_src/* rightShift */.pu)(amount || '0', selectedAsset?.decimals);
                return !!transferAmount || !(0,base_src/* isZero */.Fr)(transferAmount);
            }, t('wallet_transfer_error_amount_absence')).refine((amount)=>{
                const transferAmount = (0,base_src/* rightShift */.pu)(amount || '0', selectedAsset?.decimals);
                return !(0,base_src/* isGreaterThan */.T1)(transferAmount, selectedAsset?.balance ?? 0);
            }, t('wallet_transfer_error_insufficient_balance', {
                symbol: selectedAsset?.symbol
            })),
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>(0,base_src/* isGreaterThanOrEqualTo */.KH)(gasLimit, minGasLimitContext)
            , t('popups_wallet_gas_fee_settings_min_gas_limit_tips', {
                limit: minGasLimitContext
            })),
            gasPrice: lib.z.string().min(1, t('wallet_transfer_error_gas_price_absence'))
        });
    }, [
        selectedAsset,
        minGasLimitContext
    ]);
    const methods = (0,index_esm/* useForm */.cI)({
        shouldUnregister: false,
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            address: '',
            amount: '',
            gasPrice: '',
            gasLimit: '0'
        },
        context: {
            minGasLimitContext,
            selectedAsset
        }
    });
    const [address, amount1, gasPrice1] = methods.watch([
        'address',
        'amount',
        'gasPrice'
    ]);
    (0,useAsync/* default */.Z)(async ()=>{
        setAddressTip(null);
        if (!address || !dist.EthereumAddress.isValid(address)) return;
        methods.clearErrors('address');
        if (address.includes('.eth')) {
            setAddressTip({
                type: type/* TransferAddressError.NETWORK_NOT_SUPPORT */.VM.NETWORK_NOT_SUPPORT,
                message: t('wallet_transfer_error_no_support_ens')
            });
            return;
        }
        if ((0,base_src/* isSameAddress */.Wr)(address, wallet?.address)) {
            setAddressTip({
                type: type/* TransferAddressError.SAME_ACCOUNT */.VM.SAME_ACCOUNT,
                message: t('wallet_transfer_error_same_address_with_current_account')
            });
            return;
        }
        const result = await connection?.getCode(address);
        if (result !== '0x') {
            setAddressTip({
                type: type/* TransferAddressError.CONTRACT_ADDRESS */.VM.CONTRACT_ADDRESS,
                message: t('wallet_transfer_error_is_contract_address')
            });
        }
    }, [
        address,
        dist.EthereumAddress.isValid,
        methods.clearErrors,
        connection
    ]);
    // #region Set default gas price
    (0,useAsync/* default */.Z)(async ()=>{
        const gasOptions = await hub?.getGasOptions?.(chainId);
        const gasPrice = methods.getValues('gasPrice');
        if (gasOptions && !gasPrice) {
            const gasPrice = new (bignumber_default())(gasOptions[base_src/* GasOptionType.FAST */.Qd.FAST].suggestedMaxFeePerGas);
            methods.setValue('gasPrice', gasPrice.toString());
        }
    }, [
        methods.setValue,
        methods.getValues,
        chainId,
        hub
    ]);
    // #endregion
    // #region Get min gas limit with amount and recipient address
    const { value: minGasLimit , error  } = (0,entry_web3_evm/* useGasLimit */.xf)(selectedAsset?.schema, selectedAsset?.address, (0,base_src/* rightShift */.pu)(amount1 ? amount1 : 0, selectedAsset?.decimals).toFixed(), dist.EthereumAddress.isValid(address) ? address : '');
    // #endregion
    const { value: tokenBalance = '0'  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, selectedAsset?.address ?? '');
    const maxAmount = (0,react.useMemo)(()=>{
        let amount_ = new (bignumber_default())(tokenBalance || '0');
        amount_ = selectedAsset?.schema === types/* SchemaType.Native */.XQ.Native ? amount_.minus((0,base_src/* multipliedBy */.$q)(30000, gasPrice1)) : amount_;
        return bignumber_default().max(0, amount_).toFixed();
    }, [
        selectedAsset?.balance,
        gasPrice1,
        selectedAsset?.type,
        tokenBalance
    ]);
    // #region set default gasLimit
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!minGasLimit) return;
        methods.setValue('gasLimit', minGasLimit.toString());
        setMinGasLimitContext(minGasLimit);
    }, [
        minGasLimit,
        methods.setValue
    ]);
    // #endregion
    const [_, transferCallback] = (0,entry_web3_evm/* useTokenTransferCallback */.z7)(selectedAsset?.schema ?? types/* SchemaType.Native */.XQ.Native, selectedAsset?.address ?? '');
    const handleMaxClick = (0,react.useCallback)(()=>{
        methods.setValue('amount', (0,base_src/* formatBalance */.az)(maxAmount, selectedAsset?.decimals));
    }, [
        methods.setValue,
        selectedAsset,
        maxAmount
    ]);
    const [{ loading  }, onSubmit] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        const transferAmount = (0,base_src/* rightShift */.pu)(data.amount || '0', selectedAsset?.decimals).toFixed();
        await transferCallback(transferAmount, data.address, {
            gasPrice: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.gasPrice).toString()),
            gas: new (bignumber_default())(data.gasLimit).toNumber()
        });
    }, [
        selectedAsset,
        transferCallback
    ]);
    const [menu, openMenu] = (0,src/* useMenuConfig */._X)([
        /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            className: classes.expand,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t('wallet_transfer_between_my_accounts')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                    style: {
                        fontSize: 20
                    }
                })
            ]
        }, "expand"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
            in: true,
            children: otherWallets.map((account, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
                    className: classes.menuItem,
                    onClick: ()=>methods.setValue('address', account.address)
                    ,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: account.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedAddress */.Kv, {
                                address: account.address ?? '',
                                size: 4,
                                formatter: formatter/* formatEthereumAddress */.j8
                            })
                        })
                    ]
                }, index)
            )
        }, "collapse"), 
    ], {
        classes: {
            paper: classes.menu
        }
    });
    const popoverContent = (0,react.useMemo)(()=>{
        if (!addressTip) return;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            py: 2.5,
            px: 1.5,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: addressTip.type === type/* TransferAddressError.SAME_ACCOUNT */.VM.SAME_ACCOUNT ? classes.normalMessage : classes.errorMessage,
                children: addressTip.message
            })
        });
    }, [
        address,
        addressTip
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(index_esm/* FormProvider */.RV, {
        ...methods,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Prior1559TransferUI, {
                accountName: wallet?.name ?? '',
                selectedAsset: selectedAsset,
                openAccountMenu: openMenu,
                openAssetMenu: openAssetMenu,
                handleMaxClick: handleMaxClick,
                handleCancel: ()=>navigate(-1)
                ,
                handleConfirm: methods.handleSubmit(onSubmit),
                confirmLoading: loading,
                maxAmount: maxAmount,
                popoverContent: popoverContent
            }),
            otherWallets ? menu : null
        ]
    });
});
const Prior1559TransferUI = /*#__PURE__*/ (0,react.memo)(({ accountName , openAccountMenu , openAssetMenu , handleMaxClick , selectedAsset , handleConfirm , handleCancel , confirmLoading , maxAmount , popoverContent ,  })=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = Prior1559Transfer_useStyles();
    const anchorEl = (0,react.useRef)(null);
    const [popoverOpen, setPopoverOpen] = (0,react.useState)(false);
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>({
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${selectedAsset?.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${selectedAsset?.decimals}}$`)
        })
    , [
        selectedAsset?.decimals
    ]);
    const { formState: { errors  } ,  } = (0,index_esm/* useFormContext */.Gc)();
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPopoverOpen(Boolean(popoverContent && anchorEl.current));
    }, [
        popoverContent
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                className: classes.container,
                onSubmit: handleConfirm,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        style: {
                            marginTop: 0
                        },
                        children: t('wallet_transfer_account')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.accountName,
                        children: accountName
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('wallet_transfer_receiving_account')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                error: !!errors.address?.message,
                                helperText: errors.address?.message,
                                InputProps: {
                                    endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        onClick: openAccountMenu,
                                        style: {
                                            marginLeft: 12
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UserIcon, {
                                            className: classes.user
                                        })
                                    }),
                                    onClick: (event)=>{
                                        if (!anchorEl.current) anchorEl.current = event.currentTarget;
                                        if (popoverContent) setPopoverOpen(true);
                                    }
                                }
                            })
                        ,
                        name: "address"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* default */.ZP, {
                        open: popoverOpen,
                        classes: {
                            paper: classes.popover
                        },
                        anchorEl: anchorEl.current,
                        onClose: ()=>setPopoverOpen(false)
                        ,
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        },
                        children: popoverContent
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.label,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: t('popups_wallet_choose_token')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.balance,
                                component: "span",
                                children: [
                                    t('wallet_balance'),
                                    ":",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedBalance */.BV, {
                                        value: maxAmount,
                                        decimals: selectedAsset?.decimals,
                                        symbol: selectedAsset?.symbol,
                                        significant: 6,
                                        formatter: base_src/* formatBalance */.az
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                ...field,
                                type: "text",
                                onChange: (ev)=>{
                                    const amount_ = ev.currentTarget.value.replace(/,/g, '.');
                                    if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) {
                                        ev.currentTarget.value = `0${amount_}`;
                                        field.onChange(ev);
                                    } else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) {
                                        ev.currentTarget.value = amount_;
                                        field.onChange(ev);
                                    }
                                },
                                error: !!errors.amount?.message,
                                helperText: errors.amount?.message,
                                InputProps: {
                                    autoComplete: 'off',
                                    autoCorrect: 'off',
                                    title: 'Token Amount',
                                    inputMode: 'decimal',
                                    spellCheck: false,
                                    endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                size: "small",
                                                label: "MAX",
                                                clickable: true,
                                                color: "primary",
                                                classes: {
                                                    root: classes.max,
                                                    label: classes.maxLabel
                                                },
                                                onClick: handleMaxClick
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                className: classes.chip,
                                                onClick: openAssetMenu,
                                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                                                    classes: {
                                                        icon: classes.icon
                                                    },
                                                    address: selectedAsset?.address ?? '',
                                                    name: selectedAsset?.name,
                                                    logoURL: selectedAsset?.logoURL
                                                }),
                                                deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* default */.Z, {
                                                    className: classes.icon
                                                }),
                                                color: "default",
                                                size: "small",
                                                variant: "outlined",
                                                clickable: true,
                                                label: selectedAsset?.symbol,
                                                onDelete: noop/* default */.Z
                                            })
                                        ]
                                    })
                                },
                                inputProps: {
                                    pattern: '^[0-9]*[.,]?[0-9]*$',
                                    min: 0,
                                    minLength: 1,
                                    maxLength: 79
                                }
                            });
                        },
                        name: "amount"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.gasInput,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.label,
                                        children: t('gas_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                                ...field,
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
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.label,
                                        children: t('gas_limit')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                                ...field,
                                                error: !!errors.gasLimit?.message,
                                                helperText: errors.gasLimit?.message,
                                                inputProps: {
                                                    pattern: '^[0-9]*[.,]?[0-9]*$'
                                                }
                                            })
                                        ,
                                        name: "gasLimit"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        style: {
                            backgroundColor: '#F7F9FA',
                            color: '#1C68F3'
                        },
                        onClick: handleCancel,
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                        loading: confirmLoading,
                        variant: "contained",
                        className: classes.button,
                        onClick: handleConfirm,
                        children: t('confirm')
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./src/extension/popups/hook/useTitle.ts
var useTitle = __webpack_require__(43240);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/Transfer/index.tsx














const Transfer_useStyles = (0,entry/* makeStyles */.ZL)()({
    assetItem: {
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: 278
    },
    assetSymbol: {
        display: 'flex',
        alignItems: 'center',
        '& > p': {
            marginLeft: 10
        }
    }
});
const Transfer = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = Transfer_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const wallets = (0,entry_web3/* useWallets */.rB)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { assets , currentToken  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    const [selectedAsset, setSelectedAsset] = (0,react.useState)(currentToken);
    const otherWallets = (0,react.useMemo)(()=>wallets.map((wallet)=>({
                name: wallet.name ?? '',
                address: wallet.address
            })
        )
    , [
        wallets
    ]);
    const [assetsMenu, openAssetMenu] = (0,src/* useMenu */.H9)(...assets.map((asset, index)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            className: classes.assetItem,
            onClick: ()=>setSelectedAsset(asset)
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.assetSymbol,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                            address: asset.address
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: asset.symbol
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedBalance */.BV, {
                        value: asset.balance,
                        decimals: asset.decimals,
                        significant: 4,
                        formatter: base_src/* formatBalance */.az
                    })
                })
            ]
        }, index);
    }));
    (0,useTitle/* useTitle */.Z)(t('popups_send'));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            resolver/* chainResolver.isSupport */.VU.isSupport(chainId, 'EIP1559') ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Transfer1559, {
                selectedAsset: selectedAsset,
                otherWallets: otherWallets,
                openAssetMenu: openAssetMenu
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Prior1559Transfer, {
                selectedAsset: selectedAsset,
                otherWallets: otherWallets,
                openAssetMenu: openAssetMenu
            }),
            assetsMenu
        ]
    });
});
/* harmony default export */ const Wallet_Transfer = (Transfer);


/***/ })

}]);