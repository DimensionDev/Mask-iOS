(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3132],{

/***/ 53753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.29.0_react@18.0.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(7631);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.29.0/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.29.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
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

/***/ 6490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ RightIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


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

/***/ 3687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7284);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);
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
                marginLeft: 0
            }
        }
    });
}));


/***/ }),

/***/ 36707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_Transfer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(24294);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallets.ts
var useWallets = __webpack_require__(39677);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletContext.ts
var useWalletContext = __webpack_require__(32828);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(67376);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNetworkType.ts
var useNetworkType = __webpack_require__(96151);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(38443);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2239);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useGasLimit.ts
var useGasLimit = __webpack_require__(40566);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(52813);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var token = __webpack_require__(33690);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTokenTransferCallback.ts + 3 modules
var useTokenTransferCallback = __webpack_require__(19136);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.14.4/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(74368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(93618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(30688);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.29.0_react@18.0.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(7631);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.29.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(53753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(92760);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(24446);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(46995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(3687);
// EXTERNAL MODULE: ../icons/general/Right.tsx
var Right = __webpack_require__(6490);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(15679);
;// CONCATENATED MODULE: ../icons/general/User.tsx


const UserIcon = (0,icons_utils/* createIcon */.I)('UserIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M16.667 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H6.667a3.333 3.333 0 00-3.334 3.333V17.5M10 9.167A3.333 3.333 0 1010 2.5a3.333 3.333 0 000 6.667z",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0/node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__(52860);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(15004);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0_react@18.0.0/node_modules/react-router/index.js
var react_router = __webpack_require__(10459);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(61098);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(41106);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
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
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(account.address, entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
        className: classes.menuItem,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                display: "flex",
                children: [
                    account.name,
                    domain && Utils?.formatDomainName ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        className: classes.domain,
                        children: Utils.formatDomainName(domain)
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

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/type.ts
var type = __webpack_require__(41410);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/Transfer/Transfer1559.tsx




























const Transfer1559_useStyles = (0,entry/* makeStyles */.ZL)()({
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
    expand: {
        backgroundColor: '#F7F9FA',
        padding: 10
    },
    title: {
        fontSize: 12,
        lineHeight: '16px',
        color: '#15181B'
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
    }
});
const MIN_GAS_LIMIT = 21000;
const HIGH_FEE_WARNING_MULTIPLIER = 1.5;
const Transfer1559 = /*#__PURE__*/ (0,react.memo)(({ selectedAsset , openAssetMenu , otherWallets  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Transfer1559_useStyles();
    const wallet = (0,useWallet/* useWallet */.O)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const network = (0,useNetworkType/* useNetworkType */.b)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [minGasLimitContext, setMinGasLimitContext] = (0,react.useState)(0);
    const [addressTip, setAddressTip] = (0,react.useState)();
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const etherPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(nativeToken?.chainId);
    const { value: estimateGasFees  } = (0,useAsync/* default */.Z)(async ()=>messages/* WalletRPC.getEstimateGasFees */.V.getEstimateGasFees(chainId)
    , [
        chainId
    ]);
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            address: lib.z.string().min(1, t('wallet_transfer_error_address_absence')).refine((address)=>dist.EthereumAddress.isValid(address) || Utils?.isValidDomain?.(address)
            , t('wallet_transfer_error_invalid_address')),
            amount: lib.z.string().refine((amount)=>{
                const transferAmount = (0,base_src/* rightShift */.pu)(amount || '0', selectedAsset?.token.decimals);
                return !!transferAmount || !(0,base_src/* isZero */.Fr)(transferAmount);
            }, t('wallet_transfer_error_amount_absence')).refine((amount)=>{
                const transferAmount = (0,base_src/* rightShift */.pu)(amount || '0', selectedAsset?.token.decimals);
                return !(0,base_src/* isGreaterThan */.T1)(transferAmount, selectedAsset?.balance ?? 0);
            }, t('wallet_transfer_error_insufficient_balance', {
                token: selectedAsset?.token.symbol
            })),
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>(0,base_src/* isGreaterThanOrEqualTo */.KH)(gasLimit, minGasLimitContext)
            , t('popups_wallet_gas_fee_settings_min_gas_limit_tips', {
                limit: minGasLimitContext
            })),
            maxPriorityFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_priority_fee_absence')).refine(base_src/* isPositive */.xP, t('wallet_transfer_error_max_priority_gas_fee_positive')).refine((value)=>{
                return (0,base_src/* isGreaterThanOrEqualTo */.KH)(value, estimateGasFees?.low?.suggestedMaxPriorityFeePerGas ?? 0);
            }, t('wallet_transfer_error_max_priority_gas_fee_too_low')).refine((value)=>(0,base_src/* isLessThan */.FI)(value, (0,base_src/* multipliedBy */.$q)(estimateGasFees?.high?.suggestedMaxPriorityFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))
            , t('wallet_transfer_error_max_priority_gas_fee_too_high')),
            maxFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_fee_absence')).refine((value)=>(0,base_src/* isGreaterThanOrEqualTo */.KH)(value, estimateGasFees?.low?.suggestedMaxFeePerGas ?? 0)
            , t('wallet_transfer_error_max_fee_too_low')).refine((value)=>(0,base_src/* isLessThan */.FI)(value, (0,base_src/* multipliedBy */.$q)(estimateGasFees?.high?.suggestedMaxFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))
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
        Utils
    ]);
    const methods = (0,index_esm/* useForm */.cI)({
        shouldUnregister: false,
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            address: '',
            amount: '',
            gasLimit: selectedAsset?.token.type === types/* EthereumTokenType.Native */.Dr.Native ? '21000' : '0',
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
    const { value: registeredAddress = '' , error: resolveDomainError , loading: resolveDomainLoading ,  } = (0,entry_web3/* useLookupAddress */.hn)(address1, entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
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
        if (Utils?.isValidDomain?.(address1) && (resolveDomainError || !registeredAddress)) {
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
        if ((0,utils_address/* isSameAddress */.Wr)(address1, wallet?.address) || (0,utils_address/* isSameAddress */.Wr)(registeredAddress, wallet?.address)) {
            setAddressTip({
                type: type/* TransferAddressError.SAME_ACCOUNT */.VM.SAME_ACCOUNT,
                message: t('wallet_transfer_error_same_address_with_current_account')
            });
            return;
        }
        const result = await service/* default.Ethereum.getCode */.ZP.Ethereum.getCode(address1);
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
        Utils, 
    ]);
    // #endregion
    // #region Get min gas limit with amount and recipient address
    const { value: minGasLimit  } = (0,useGasLimit/* useGasLimit */.x)(selectedAsset?.token.type, selectedAsset?.token.address, (0,base_src/* rightShift */.pu)(amount1 ?? 0, selectedAsset?.token.decimals).toFixed(), dist.EthereumAddress.isValid(address1) ? address1 : registeredAddress);
    // #endregion
    const { value: tokenBalance = '0'  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(selectedAsset?.token?.type ?? types/* EthereumTokenType.Native */.Dr.Native, selectedAsset?.token?.address ?? '');
    const maxAmount = (0,react.useMemo)(()=>{
        const gasFee = (0,formatter/* formatGweiToWei */.nU)(maxFeePerGas ?? 0).multipliedBy((0,token/* addGasMargin */.bu)(minGasLimit ?? MIN_GAS_LIMIT));
        let amount_ = new (bignumber_default())(tokenBalance ?? 0);
        amount_ = selectedAsset?.token.type === types/* EthereumTokenType.Native */.Dr.Native ? amount_.minus(gasFee) : amount_;
        return (0,formatter/* formatBalance */.az)(bignumber_default().max(0, amount_).toFixed(), selectedAsset?.token.decimals);
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
        const { medium  } = estimateGasFees;
        methods.setValue('maxFeePerGas', new (bignumber_default())(medium?.suggestedMaxFeePerGas ?? 0).toString());
        methods.setValue('maxPriorityFeePerGas', new (bignumber_default())(medium?.suggestedMaxPriorityFeePerGas ?? 0).toString());
    }, [
        estimateGasFees,
        methods.setValue
    ]);
    // #endregion
    const [_, transferCallback] = (0,useTokenTransferCallback/* useTokenTransferCallback */.z)(selectedAsset?.token.type ?? types/* EthereumTokenType.Native */.Dr.Native, selectedAsset?.token.address ?? '');
    const handleMaxClick = (0,react.useCallback)(()=>{
        methods.setValue('amount', maxAmount);
    }, [
        methods.setValue,
        maxAmount
    ]);
    const [{ loading , error  }, onSubmit] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        const transferAmount = (0,base_src/* rightShift */.pu)(data.amount || '0', selectedAsset?.token.decimals).toFixed();
        // If input address is ens domain, use registeredAddress to transfer
        if (Utils?.isValidDomain?.(data.address)) {
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
        Utils
    ]);
    const [menu, openMenu] = (0,src/* useMenu */.H9)(/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
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
    }, "expand"), /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
        in: true,
        children: otherWallets.map((account, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AccountItem, {
                account: account,
                onClick: ()=>methods.setValue('address', account.address)
            }, index)
        )
    }));
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
        if (registeredAddress && !resolveDomainError && Utils?.resolveDomainLink) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2.5,
            px: 1.5,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: Utils.resolveDomainLink(address1),
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
        Utils?.resolveDomainLink,
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
                etherPrice: etherPrice,
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
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Transfer1559_useStyles();
    const [popoverOpen, setPopoverOpen] = (0,react.useState)(false);
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>({
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${selectedAsset?.token.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${selectedAsset?.token.decimals}}$`)
        })
    , [
        selectedAsset?.token.decimals
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
                                        decimals: selectedAsset?.token?.decimals,
                                        symbol: selectedAsset?.token?.symbol,
                                        significant: 6,
                                        formatter: formatter/* formatBalance */.az
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
                                                    address: selectedAsset?.token.address ?? '',
                                                    name: selectedAsset?.token.name,
                                                    logoURI: selectedAsset?.token.logoURI
                                                }),
                                                deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* default */.Z, {
                                                    className: classes.icon
                                                }),
                                                color: "default",
                                                size: "small",
                                                variant: "outlined",
                                                clickable: true,
                                                label: selectedAsset?.token.symbol,
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
        color: '#15181B'
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
    }
});
const Prior1559Transfer = /*#__PURE__*/ (0,react.memo)(({ selectedAsset , openAssetMenu , otherWallets  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Prior1559Transfer_useStyles();
    const wallet = (0,useWallet/* useWallet */.O)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [minGasLimitContext, setMinGasLimitContext] = (0,react.useState)(0);
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [addressTip, setAddressTip] = (0,react.useState)();
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            address: lib.z.string().min(1, t('wallet_transfer_error_address_absence')).refine(dist.EthereumAddress.isValid, t('wallet_transfer_error_invalid_address')),
            amount: lib.z.string().refine((amount)=>{
                const transferAmount = (0,base_src/* rightShift */.pu)(amount || '0', selectedAsset?.token.decimals);
                return !!transferAmount || !(0,base_src/* isZero */.Fr)(transferAmount);
            }, t('wallet_transfer_error_amount_absence')).refine((amount)=>{
                const transferAmount = (0,base_src/* rightShift */.pu)(amount || '0', selectedAsset?.token.decimals);
                return !(0,base_src/* isGreaterThan */.T1)(transferAmount, selectedAsset?.balance ?? 0);
            }, t('wallet_transfer_error_insufficient_balance', {
                token: selectedAsset?.token.symbol
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
        if ((0,utils_address/* isSameAddress */.Wr)(address, wallet?.address)) {
            setAddressTip({
                type: type/* TransferAddressError.SAME_ACCOUNT */.VM.SAME_ACCOUNT,
                message: t('wallet_transfer_error_same_address_with_current_account')
            });
            return;
        }
        const result = await service/* default.Ethereum.getCode */.ZP.Ethereum.getCode(address);
        if (result !== '0x') {
            setAddressTip({
                type: type/* TransferAddressError.CONTRACT_ADDRESS */.VM.CONTRACT_ADDRESS,
                message: t('wallet_transfer_error_is_contract_address')
            });
        }
    }, [
        address,
        dist.EthereumAddress.isValid,
        methods.clearErrors
    ]);
    // #region Set default gas price
    (0,useAsync/* default */.Z)(async ()=>{
        const gasOptions = await messages/* WalletRPC.getGasPriceDictFromDeBank */.V.getGasPriceDictFromDeBank(chainId);
        const gasPrice = methods.getValues('gasPrice');
        if (gasOptions && !gasPrice) {
            const gasPrice = new (bignumber_default())(gasOptions.data.fast.price);
            methods.setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)(gasPrice).toString());
        }
    }, [
        methods.setValue,
        methods.getValues,
        chainId
    ]);
    // #endregion
    // #region Get min gas limit with amount and recipient address
    const { value: minGasLimit , error  } = (0,useGasLimit/* useGasLimit */.x)(selectedAsset?.token.type, selectedAsset?.token.address, (0,base_src/* rightShift */.pu)(amount1 ? amount1 : 0, selectedAsset?.token.decimals).toFixed(), dist.EthereumAddress.isValid(address) ? address : '');
    // #endregion
    const { value: tokenBalance = '0'  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(selectedAsset?.token?.type ?? types/* EthereumTokenType.Native */.Dr.Native, selectedAsset?.token?.address ?? '');
    const maxAmount = (0,react.useMemo)(()=>{
        let amount_ = new (bignumber_default())(tokenBalance || '0');
        amount_ = selectedAsset?.token.type === types/* EthereumTokenType.Native */.Dr.Native ? amount_.minus((0,base_src/* multipliedBy */.$q)(30000, gasPrice1)) : amount_;
        return bignumber_default().max(0, amount_).toFixed();
    }, [
        selectedAsset?.balance,
        gasPrice1,
        selectedAsset?.token.type,
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
    const [_, transferCallback] = (0,useTokenTransferCallback/* useTokenTransferCallback */.z)(selectedAsset?.token.type ?? types/* EthereumTokenType.Native */.Dr.Native, selectedAsset?.token.address ?? '');
    const handleMaxClick = (0,react.useCallback)(()=>{
        methods.setValue('amount', (0,formatter/* formatBalance */.az)(maxAmount, selectedAsset?.token.decimals));
    }, [
        methods.setValue,
        selectedAsset,
        maxAmount
    ]);
    const [{ loading  }, onSubmit] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        const transferAmount = (0,base_src/* rightShift */.pu)(data.amount || '0', selectedAsset?.token.decimals).toFixed();
        await transferCallback(transferAmount, data.address, {
            gasPrice: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.gasPrice).toString()),
            gas: new (bignumber_default())(data.gasLimit).toNumber()
        });
    }, [
        selectedAsset
    ]);
    const [menu, openMenu] = (0,src/* useMenu */.H9)(/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
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
    }, "expand"), /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
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
    }));
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
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Prior1559Transfer_useStyles();
    const anchorEl = (0,react.useRef)(null);
    const [popoverOpen, setPopoverOpen] = (0,react.useState)(false);
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>({
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${selectedAsset?.token.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${selectedAsset?.token.decimals}}$`)
        })
    , [
        selectedAsset?.token.decimals
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
                                        decimals: selectedAsset?.token?.decimals,
                                        symbol: selectedAsset?.token?.symbol,
                                        significant: 6,
                                        formatter: formatter/* formatBalance */.az
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
                                                    address: selectedAsset?.token.address ?? '',
                                                    name: selectedAsset?.token.name,
                                                    logoURI: selectedAsset?.token.logoURI
                                                }),
                                                deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* default */.Z, {
                                                    className: classes.icon
                                                }),
                                                color: "default",
                                                size: "small",
                                                variant: "outlined",
                                                clickable: true,
                                                label: selectedAsset?.token.symbol,
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
    const { classes  } = Transfer_useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const wallets = (0,useWallets/* useWallets */.r)(types/* ProviderType.MaskWallet */.lP.MaskWallet);
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
                            address: asset.token.address
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: asset.token.symbol
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedBalance */.BV, {
                        value: asset.balance,
                        decimals: asset.token.decimals,
                        significant: 4,
                        formatter: formatter/* formatBalance */.az
                    })
                })
            ]
        }, index);
    }));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            (0,chainDetailed/* isEIP1559Supported */.U1)(chainId) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Transfer1559, {
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


/***/ }),

/***/ 41106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useNativeTokenPrice),
/* harmony export */   "p": () => (/* binding */ useTokenPrice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19841);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84797);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94232);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65506);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80526);






const task = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .pollingTask */ .s_)(async ()=>{
    await _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.kickToUpdateTokenPrices */ .V.kickToUpdateTokenPrices();
    return false;
}, {
    autoStart: false,
    delay: _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_CHAIN_STATE_DELAY */ .js
});
function useTokenPrice(chainId, contractAddress, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    let platformId = undefined;
    let coinId = undefined;
    if (chainId) {
        platformId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoPlatformId */ .AQ)(chainId);
        coinId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoCoinId */ .vM)(chainId);
    }
    const category = (contractAddress || coinId)?.toLowerCase();
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
            const value = newVal[category]?.[currencyType] ?? 0;
            setPrice(value);
        });
    }, [
        platformId,
        category,
        contractAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!category) return;
        const currentTokenPrices = _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.value */ .JC.value;
        setPrice(currentTokenPrices[category]?.[currencyType] ?? 0);
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


/***/ }),

/***/ 58498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useERC20TokenBalance)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11627);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89260);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10372);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91690);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31174);





/**
 * Fetch token balance from chain
 * @param address
 * @param targetChainId
 */ function useERC20TokenBalance(address, targetChainId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)();
    const defaultChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    const chainId = targetChainId ?? defaultChainId;
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC20TokenContract */ .x)(address);
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .useBeatRetry */ .ND)(async ()=>{
        if (!account || !address || !erc20Contract) return undefined;
        return erc20Contract.methods.balanceOf(account).call({
            from: account,
            chainId: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(chainId)
        });
    }, 30 * 1000, [
        account,
        chainId,
        address,
        erc20Contract
    ]);
}


/***/ }),

/***/ 52813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useFungibleTokenBalance)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58498);
/* harmony import */ var _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43369);




function useFungibleTokenBalance(type, address, chainId) {
    const r1 = (0,_useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenBalance */ .h)(chainId);
    const r2 = (0,_useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenBalance */ .y)(type === _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : undefined, chainId);
    const type_ = type;
    switch(type_){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type_);
    }
}


/***/ }),

/***/ 40566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useGasLimit)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65506);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91690);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85010);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10372);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46140);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73570);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);






function useGasLimit(type, contractAddress, amount, recipient, tokenId) {
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)();
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)();
    const erc20Contract = (0,_contracts__WEBPACK_IMPORTED_MODULE_3__/* .useERC20TokenContract */ .x)(contractAddress);
    const erc721Contract = (0,_contracts__WEBPACK_IMPORTED_MODULE_4__/* .useERC721TokenContract */ .n)(contractAddress);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        if (!recipient || type === undefined) return 0;
        if (type === _types__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 && !amount || !contractAddress) return 0;
        if (type === _types__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC721 */ .Dr.ERC721 && !tokenId || !contractAddress) return 0;
        switch(type){
            case _types__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.Native */ .Dr.Native:
                return web3.eth.estimateGas({
                    from: account,
                    to: recipient,
                    value: amount
                });
            case _types__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
                return erc20Contract?.methods.transfer(recipient, amount ?? 0).estimateGas({
                    from: account
                });
            case _types__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC721 */ .Dr.ERC721:
                return erc721Contract?.methods.transferFrom(account, recipient, tokenId ?? '').estimateGas({
                    from: account
                });
            case _types__WEBPACK_IMPORTED_MODULE_6__/* .EthereumTokenType.ERC1155 */ .Dr.ERC1155:
                throw new Error('To be implemented');
            default:
                (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type);
        }
    }, [
        erc20Contract,
        type,
        amount,
        account,
        recipient,
        tokenId
    ]);
}


/***/ }),

/***/ 43369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64452);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10372);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6974);



/**
 * Fetch native token balance from chain
 */ function useNativeTokenBalance(chainId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const { value: balance = '0'  } = (0,_useBalance__WEBPACK_IMPORTED_MODULE_1__/* .useBalance */ .K)(chainId);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!account) return;
        return balance;
    }, [
        account,
        balance
    ]);
}


/***/ }),

/***/ 19136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ useTokenTransferCallback)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC20TokenContract.ts
var useERC20TokenContract = __webpack_require__(91690);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(29812);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(89260);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC20TokenTransferCallback.ts







function useERC20TokenTransferCallback(address, amount1, recipient1) {
    const account = (0,useAccount/* useAccount */.m)();
    const erc20Contract = (0,useERC20TokenContract/* useERC20TokenContract */.x)(address);
    const [transferState, setTransferState] = (0,useTransactionState/* useTransactionState */.p)();
    const transferCallback = (0,react.useCallback)(async (amount, recipient, gasConfig)=>{
        if (!account || !recipient || !amount || (0,src/* isZero */.Fr)(amount) || !erc20Contract) {
            setTransferState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!dist.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: insufficient balance
        const balance = await erc20Contract.methods.balanceOf(account).call();
        if ((0,src/* isGreaterThan */.T1)(amount, balance)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Insufficient balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.transfer(recipient, amount).estimateGas({
                from: account
            }).catch((error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc20Contract.methods.transfer(recipient, amount).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setTransferState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve(receipt.transactionHash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        address,
        amount1,
        recipient1,
        erc20Contract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    (0,react.useEffect)(()=>{
        if (transferState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
        resetCallback();
    }, [
        transferState.type
    ]);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2239);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(85010);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC721TokenTransferCallback.ts







function useERC721TokenTransferCallback(address) {
    const account = (0,useAccount/* useAccount */.m)();
    const erc721Contract = (0,useERC721TokenContract/* useERC721TokenContract */.n)(address);
    const [transferState, setTransferState] = (0,useTransactionState/* useTransactionState */.p)();
    const transferCallback = (0,react.useCallback)(async (tokenId, recipient, gasConfig)=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
        if (!account || !recipient || !tokenId || !erc721Contract) {
            return;
        }
        // error: invalid recipient address
        if (!dist.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: invalid ownership
        const ownerOf = await erc721Contract.methods.ownerOf(tokenId).call();
        if (!ownerOf || !(0,utils_address/* isSameAddress */.Wr)(ownerOf, account)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid ownership')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc721Contract.methods.transferFrom(account, recipient, tokenId).estimateGas({
                from: account
            }).catch((error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc721Contract.methods.transferFrom(account, recipient, tokenId).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setTransferState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve(receipt.transactionHash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        erc721Contract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    (0,react.useEffect)(()=>{
        if (transferState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
        resetCallback();
    }, [
        transferState.type
    ]);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(46140);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useNativeTokenTransferCallback.ts









function useNativeTransferCallback() {
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [transferState, setTransferState] = (0,useTransactionState/* useTransactionState */.p)();
    const transferCallback = (0,react.useCallback)(async (amount, recipient, gasConfig, memo)=>{
        if (!account || !recipient || !amount || (0,src/* isZero */.Fr)(amount)) {
            setTransferState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!dist.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: insufficient balance
        const balance = await web3.eth.getBalance(account);
        if ((0,src/* isGreaterThan */.T1)(amount, balance)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Insufficient balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // send transaction and wait for hash
        const config = {
            from: account,
            to: recipient,
            gas: await web3.eth.estimateGas({
                from: account,
                to: recipient,
                value: amount,
                data: memo ? (0,lib.toHex)(memo) : undefined
            }).catch((error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            value: amount,
            data: memo ? (0,lib.toHex)(memo) : undefined,
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config, (error)=>{
                if (!error) return;
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setTransferState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve(receipt.transactionHash);
            });
        });
    }, [
        web3,
        account,
        chainId
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    (0,react.useEffect)(()=>{
        if (transferState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
        resetCallback();
    }, [
        transferState.type
    ]);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useTokenTransferCallback.ts





function useTokenTransferCallback(type, address) {
    const r1 = useNativeTransferCallback();
    const r2 = useERC20TokenTransferCallback(address);
    const r3 = useERC721TokenTransferCallback(address);
    const type_ = type;
    switch(type_){
        case types/* EthereumTokenType.Native */.Dr.Native:
            return r1;
        case types/* EthereumTokenType.ERC20 */.Dr.ERC20:
            return r2;
        case types/* EthereumTokenType.ERC721 */.Dr.ERC721:
            return r3;
        case types/* EthereumTokenType.ERC1155 */.Dr.ERC1155:
            throw new Error('To be implemented.');
        default:
            (0,esm/* unreachable */.t1)(type_);
    }
}


/***/ }),

/***/ 29812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useTransactionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33703);



function txStateReducer(state, nextState) {
    const allowed = nextState.type === _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN || (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isNextStateAvailable */ .NU)(state.type, nextState.type);
    return allowed ? nextState : state;
}
function useTransactionState() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(txStateReducer, {
        type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
    });
}


/***/ }),

/***/ 33703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NU": () => (/* binding */ isNextStateAvailable),
/* harmony export */   "ir": () => (/* binding */ isFinalState)
/* harmony export */ });
/* unused harmony export isEIP1559Transaction */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);


function isEIP1559Transaction(receipt) {
    return typeof receipt.maxFeePerGas !== 'undefined' && typeof receipt.maxPriorityFeePerGas !== 'undefined';
}
function isFinalState(type) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED
    ].includes(type);
}
/**
 * UNKNOWN -> WAIT_FOR_CONFIRMING
 * UNKNOWN, WAIT_FOR_CONFIRMING -> HASH
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH -> RECEIPT
 * WAIT_FOR_CONFIRMING, HASH, RECEIPT -> CONFIRMED
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH, RECEIPT -> FAILED
 */ function isNextStateAvailable(type, nextType) {
    switch(nextType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN:
            return false;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(nextType);
    }
}


/***/ })

}]);