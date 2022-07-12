(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1290],{

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

/***/ 16240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ NextIdPersonaWarningIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const NextIdPersonaWarningIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('NextIdPersonaWarning', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.2",
            d: "M8.00004 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6819 4.31814 14.6666 8.00004 14.6666Z",
            fill: "#FFB915"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.66671 4.85472C8.66671 4.48653 8.36823 4.18805 8.00004 4.18805C7.63185 4.18805 7.33337 4.48653 7.33337 4.85472V8.18805C7.33337 8.55624 7.63185 8.85472 8.00004 8.85472C8.36823 8.85472 8.66671 8.55624 8.66671 8.18805V4.85472Z",
            fill: "#FFB915"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.66671 10.6667C8.66671 10.2985 8.36823 10 8.00004 10C7.63185 10 7.33337 10.2985 7.33337 10.6667C7.33337 11.0349 7.63185 11.3333 8.00004 11.3333C8.36823 11.3333 8.66671 11.0349 8.66671 10.6667Z",
            fill: "#FFB915"
        })
    ]
}), '0 0 16 16');


/***/ }),

/***/ 40615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SuccessIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const SuccessIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Success', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".2",
            d: "M32 58.667c14.727 0 26.667-11.94 26.667-26.667 0-14.728-11.94-26.667-26.667-26.667C17.272 5.333 5.333 17.273 5.333 32c0 14.728 11.94 26.667 26.667 26.667z",
            fill: "#77E0B5"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.46 22.027c1.09.99 1.17 2.677.18 3.767L31.306 40.46a2.667 2.667 0 01-3.708.23l-9.333-8a2.667 2.667 0 113.47-4.049l7.367 6.314 11.591-12.75a2.667 2.667 0 013.767-.18z",
            fill: "#77E0B5"
        })
    ]
}), '0 0 64 64');


/***/ }),

/***/ 82251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../plugins/GoPlusSecurity/src/base.ts + 7 modules
var base = __webpack_require__(53110);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(43133);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "io.gopluslabs.security", ...props })
function useI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("io.gopluslabs.security")
    return (0,react.useMemo)(
        function proxyBasedHooks() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = t.bind(null, key));
        },
    });
},
        [t],
    )
}
const Translate = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(11087);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(29324);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/KeyboardArrowDown.js
var KeyboardArrowDown = __webpack_require__(76410);
// EXTERNAL MODULE: ../icons/general/Search.tsx
var Search = __webpack_require__(68488);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(19769);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/SearchBox.tsx










const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '600px'
        },
        content: {
            width: '552px'
        },
        selectedButton: {
            width: '100%',
            height: '100%',
            fontWeight: 400,
            borderColor: theme.palette.divider,
            color: theme.palette.text.primary
        },
        searchButton: {
            borderRadius: 8
        },
        menu: {},
        search: {
            backgroundColor: 'transparent !important',
            border: `solid 1px ${entry/* MaskColorVar.twitterBorderLine */.ZN.twitterBorderLine}`,
            height: 48,
            borderColor: theme.palette.divider,
            borderRadius: 12
        }
    })
);
const DEFAULT_SEARCH_CHAIN = types/* ChainId.Mainnet */.a_.Mainnet;
function getChainName(chain) {
    if (!chain) return resolver/* chainResolver.chainName */.VU.chainName(types/* ChainId.Mainnet */.a_.Mainnet);
    if (chain.chainId === types/* ChainId.BSC */.a_.BSC) return resolver/* chainResolver.chainShortName */.VU.chainShortName(types/* ChainId.BSC */.a_.BSC)?.toUpperCase();
    if (chain.chainId === 66) return chain.name;
    return resolver/* chainResolver.chainName */.VU.chainName(chain.chainId);
}
const SearchBox = /*#__PURE__*/ (0,react.memo)(({ onSearch  })=>{
    const t = useI18N();
    const { classes  } = useStyles();
    const [selectedChain, setSelectedChain] = (0,react.useState)();
    const [searchContent, setSearchSearchContent] = (0,react.useState)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const onClose = ()=>setAnchorEl(null)
    ;
    const onOpen = (event)=>setAnchorEl(event.currentTarget)
    ;
    const { value: supportedChains = []  } = (0,useAsync/* default */.Z)(src/* GoPlusLabs.getSupportedChain */.e.getSupportedChain, []);
    const menuElements = (0,react.useMemo)(()=>{
        if (!supportedChains.length) return;
        setSelectedChain(supportedChains[0]);
        return supportedChains.map((chain)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                onClick: ()=>{
                    setSelectedChain(chain);
                    onClose();
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    sx: {
                        marginLeft: 1
                    },
                    children: getChainName(chain)
                })
            }, chain.chainId);
        }) ?? [];
    }, [
        supportedChains.length
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        spacing: 1,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                width: 110,
                height: 48,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: onOpen,
                    variant: "outlined",
                    className: classes.selectedButton,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        display: "inline-flex",
                        direction: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 16,
                                children: getChainName(selectedChain)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowDown/* default */.Z, {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                flex: 1,
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        flex: 1,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                            placeholder: t.search_input_placeholder(),
                            autoFocus: true,
                            fullWidth: true,
                            onKeyPress: (event)=>{
                                if (event.key !== 'Enter') return;
                                onSearch(selectedChain?.chainId ?? DEFAULT_SEARCH_CHAIN, searchContent ?? '');
                            },
                            onChange: (e)=>setSearchSearchContent(e.target.value)
                            ,
                            InputProps: {
                                classes: {
                                    root: classes.search
                                },
                                startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                                    position: "start",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* SearchIcon */.W, {})
                                })
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.searchButton,
                        disabled: !searchContent,
                        onClick: ()=>onSearch(selectedChain?.chainId ?? DEFAULT_SEARCH_CHAIN, searchContent ?? '')
                        ,
                        variant: "contained",
                        children: t.search()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* ShadowRootMenu */.dy, {
                open: !!anchorEl,
                onClose: onClose,
                anchorEl: anchorEl,
                children: menuElements
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/Searching.tsx



const Searching = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* LoadingBase */.Sx, {
            sx: {
                fontSize: 48
            }
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Collapse/Collapse.js
var Collapse = __webpack_require__(43857);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/external-link.js
var external_link = __webpack_require__(12718);
// EXTERNAL MODULE: ../icons/general/Risk.tsx
var Risk = __webpack_require__(95789);
// EXTERNAL MODULE: ../icons/general/NextIdPersonaWarning.tsx
var NextIdPersonaWarning = __webpack_require__(16240);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(40615);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/Common.tsx




var SecurityMessageLevel;
(function(SecurityMessageLevel) {
    SecurityMessageLevel["High"] = "High";
    SecurityMessageLevel["Medium"] = "Medium";
    SecurityMessageLevel["Safe"] = "Safe";
})(SecurityMessageLevel || (SecurityMessageLevel = {}));
const Center = /*#__PURE__*/ (0,react.memo)(({ children  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        children: children
    })
);
const DefineMapping = {
    [SecurityMessageLevel.High]: {
        i18nKey: 'high_risk',
        titleColor: '#FF5F5F',
        bgColor: 'rgba(255, 95, 95, 0.1)',
        icon: (size)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Risk/* RiskIcon */.w, {
                sx: {
                    fontSize: size ?? 24
                }
            })
    },
    [SecurityMessageLevel.Medium]: {
        i18nKey: 'medium_risk',
        titleColor: '#FFB915',
        bgColor: 'rgba(255, 185, 21, 0.1)',
        // TODO: Merge duplicate icon in a another PR.
        icon: (size)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NextIdPersonaWarning/* NextIdPersonaWarningIcon */.W, {
                sx: {
                    fontSize: size ?? 24,
                    color: '#FFB915'
                }
            })
    },
    [SecurityMessageLevel.Safe]: {
        i18nKey: 'low_risk',
        titleColor: '#60DFAB',
        bgColor: 'rgba(119, 224, 181, 0.1)',
        icon: (size)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Success/* SuccessIcon */.t, {
                sx: {
                    fontSize: size ?? 24
                }
            })
    }
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/parseInt.js
var lodash_es_parseInt = __webpack_require__(50251);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/rules.ts


var SecurityType;
(function(SecurityType) {
    SecurityType["Contract"] = 'contract-security';
    SecurityType["Transaction"] = 'transaction-security';
    SecurityType["Info"] = 'info-security';
})(SecurityType || (SecurityType = {}));
const percentageToNumber = (value)=>(0,lodash_es_parseInt/* default */.Z)((value ?? '').replace('%', '')) * 100
;
const isUnset = (name)=>(info)=>info[name] === undefined
;
const SecurityMessages = [
    // open source
    {
        type: SecurityType.Contract,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.is_open_source === '1'
        ,
        titleKey: 'risk_contract_source_code_verified_title',
        messageKey: 'risk_contract_source_code_verified_body',
        shouldHide: isUnset('is_open_source')
    },
    {
        type: SecurityType.Contract,
        level: SecurityMessageLevel.High,
        condition: (info)=>info.is_open_source === '0'
        ,
        titleKey: 'risk_contract_source_code_not_verified_title',
        messageKey: 'risk_contract_source_code_not_verified_body',
        shouldHide: isUnset('is_open_source')
    },
    // proxy
    {
        type: SecurityType.Contract,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>info.is_proxy === '1'
        ,
        titleKey: 'risk_proxy_contract_title',
        messageKey: 'risk_proxy_contract_body',
        shouldHide: isUnset('is_proxy')
    },
    {
        type: SecurityType.Contract,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.is_proxy === '0'
        ,
        titleKey: 'risk_no_proxy_title',
        messageKey: 'risk_no_proxy_body',
        shouldHide: isUnset('is_proxy')
    },
    // mint
    {
        type: SecurityType.Contract,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.is_mintable === '0'
        ,
        titleKey: 'risk_no_mint_function_title',
        messageKey: 'risk_no_mint_function_body',
        shouldHide: isUnset('is_mintable')
    },
    {
        type: SecurityType.Contract,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>info.is_mintable === '1'
        ,
        titleKey: 'risk_mint_function_title',
        messageKey: 'risk_mint_function_body',
        shouldHide: isUnset('is_mintable')
    },
    // owner change balance
    {
        type: SecurityType.Contract,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.owner_change_balance === '0'
        ,
        titleKey: 'risk_owner_can_not_change_balance_title',
        messageKey: 'risk_owner_can_not_change_balance_body',
        shouldHide: isUnset('owner_change_balance')
    },
    {
        type: SecurityType.Contract,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>info.owner_change_balance === '1'
        ,
        titleKey: 'risk_owner_change_balance_title',
        messageKey: 'risk_owner_change_balance_body',
        shouldHide: isUnset('owner_change_balance')
    },
    // can take back ownership
    {
        type: SecurityType.Contract,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.can_take_back_ownership === '0'
        ,
        titleKey: 'risk_no_can_take_back_ownership_title',
        messageKey: 'risk_no_can_take_back_ownership_body',
        shouldHide: isUnset('can_take_back_ownership')
    },
    {
        type: SecurityType.Contract,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>info.can_take_back_ownership === '1'
        ,
        titleKey: 'risk_can_take_back_ownership_title',
        messageKey: 'risk_can_take_back_ownership_body',
        shouldHide: isUnset('can_take_back_ownership')
    },
    // buy tax
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>percentageToNumber(info.buy_tax) < 10
        ,
        titleKey: 'risk_buy_tax_title',
        messageKey: 'risk_buy_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.buy_tax)}%`,
                quantity: ''
            })
        ,
        shouldHide: isUnset('buy_tax')
    },
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>percentageToNumber(info.buy_tax) >= 10 && percentageToNumber(info.buy_tax) < 50
        ,
        titleKey: 'risk_buy_tax_title',
        messageKey: 'risk_buy_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.buy_tax)}%`,
                quantity: ''
            })
        ,
        shouldHide: isUnset('buy_tax')
    },
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.High,
        condition: (info)=>percentageToNumber(info.buy_tax) >= 50
        ,
        titleKey: 'risk_buy_tax_title',
        messageKey: 'risk_buy_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.buy_tax)}%`,
                quantity: ''
            })
        ,
        shouldHide: isUnset('buy_tax')
    },
    // sell tax
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>percentageToNumber(info.sell_tax) < 10
        ,
        titleKey: 'risk_sell_tax_title',
        messageKey: 'risk_sell_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.sell_tax)}%`,
                quantity: ''
            })
        ,
        shouldHide: isUnset('sell_tax')
    },
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>percentageToNumber(info.sell_tax) >= 10 && percentageToNumber(info.sell_tax) < 50
        ,
        titleKey: 'risk_sell_tax_title',
        messageKey: 'risk_sell_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.sell_tax)}%`,
                quantity: ''
            })
        ,
        shouldHide: isUnset('sell_tax')
    },
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.High,
        condition: (info)=>percentageToNumber(info.sell_tax) >= 50
        ,
        titleKey: 'risk_sell_tax_title',
        messageKey: 'risk_sell_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.sell_tax)}%`,
                quantity: ''
            })
        ,
        shouldHide: isUnset('sell_tax')
    },
    // honeypot
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.is_honeypot === '0'
        ,
        titleKey: 'risk_is_not_honeypot_title',
        messageKey: 'risk_is_not_honeypot_body',
        shouldHide: isUnset('is_honeypot')
    },
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.High,
        condition: (info)=>info.is_honeypot === '1'
        ,
        titleKey: 'risk_is_honeypot_title',
        messageKey: 'risk_is_honeypot_body',
        shouldHide: isUnset('is_honeypot')
    },
    // transfer_pausable
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.transfer_pausable === '0'
        ,
        titleKey: 'risk_no_code_transfer_pausable_title',
        messageKey: 'risk_no_code_transfer_pausable_title',
        shouldHide: isUnset('transfer_pausable')
    },
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>info.transfer_pausable === '1'
        ,
        titleKey: 'risk_transfer_pausable_title',
        messageKey: 'risk_transfer_pausable_body',
        shouldHide: isUnset('transfer_pausable')
    },
    // anti whale
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.is_anti_whale === '0'
        ,
        titleKey: 'risk_is_no_anti_whale_title',
        messageKey: 'risk_is_no_anti_whale_body',
        shouldHide: isUnset('is_anti_whale')
    },
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>info.is_anti_whale === '1'
        ,
        titleKey: 'risk_is_anti_whale_title',
        messageKey: 'risk_is_anti_whale_body',
        shouldHide: isUnset('is_anti_whale')
    },
    // slippage modifiable
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.slippage_modifiable === '0'
        ,
        titleKey: 'risk_not_slippage_modifiable_title',
        messageKey: 'risk_not_slippage_modifiable_body',
        shouldHide: isUnset('slippage_modifiable')
    },
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>info.slippage_modifiable === '1'
        ,
        titleKey: 'risk_slippage_modifiable_title',
        messageKey: 'risk_slippage_modifiable_body',
        shouldHide: isUnset('slippage_modifiable')
    },
    // black list
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.is_blacklisted === '0'
        ,
        titleKey: 'risk_not_is_blacklisted_title',
        messageKey: 'risk_not_is_blacklisted_body',
        shouldHide: isUnset('is_blacklisted')
    },
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>info.is_blacklisted === '1'
        ,
        titleKey: 'risk_is_blacklisted_title',
        messageKey: 'risk_is_blacklisted_body',
        shouldHide: isUnset('is_blacklisted')
    },
    // white list
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.is_whitelisted === '0'
        ,
        titleKey: 'risk_not_is_whitelisted_title',
        messageKey: 'risk_not_is_whitelisted_body',
        shouldHide: isUnset('is_whitelisted')
    },
    {
        type: SecurityType.Transaction,
        level: SecurityMessageLevel.Medium,
        condition: (info)=>info.is_whitelisted === '1'
        ,
        titleKey: 'risk_is_whitelisted_title',
        messageKey: 'risk_is_whitelisted_body',
        shouldHide: isUnset('is_whitelisted')
    },
    // true token
    {
        type: SecurityType.Info,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.is_true_token === '1'
        ,
        titleKey: 'risk_is_true_token_title',
        messageKey: 'risk_is_true_token_body',
        shouldHide: isUnset('is_true_token')
    },
    {
        type: SecurityType.Info,
        level: SecurityMessageLevel.High,
        condition: (info)=>info.is_true_token === '0'
        ,
        titleKey: 'risk_not_is_true_token_title',
        messageKey: 'risk_not_is_true_token_body',
        shouldHide: isUnset('is_true_token')
    },
    // Airdrop scam
    {
        type: SecurityType.Info,
        level: SecurityMessageLevel.Safe,
        condition: (info)=>info.is_airdrop_scam === '0'
        ,
        titleKey: 'risk_is_airdrop_scam_title',
        messageKey: 'risk_is_airdrop_scam_body',
        shouldHide: isUnset('is_airdrop_scam')
    },
    {
        type: SecurityType.Info,
        level: SecurityMessageLevel.High,
        condition: (info)=>info.is_airdrop_scam === '1'
        ,
        titleKey: 'risk_not_is_airdrop_scam_title',
        messageKey: 'risk_not_is_airdrop_scam_body',
        shouldHide: isUnset('is_airdrop_scam')
    }, 
];

;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/RiskCard.tsx






const RiskCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        detectionCard: {
            backgroundColor: theme.palette.background.default,
            borderRadius: 8
        },
        icon: {
            display: 'inline-flex',
            lineHeight: '22px',
            height: 22,
            justifyContent: 'center',
            alignItems: 'center'
        },
        header: {
            fontSize: 14,
            lineHeight: '22px'
        },
        description: {
            fontSize: 12
        }
    })
);
const RiskCard = /*#__PURE__*/ (0,react.memo)(({ info , tokenSecurity  })=>{
    const t = useI18N();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RiskCardUI, {
        icon: DefineMapping[info.level].icon(14),
        title: t[info.titleKey]({
            quantity: '',
            rate: info.i18nParams?.(tokenSecurity).rate ?? ''
        }),
        titleColor: DefineMapping[info.level].titleColor,
        description: t[info.messageKey]({
            quantity: '',
            rate: info.i18nParams?.(tokenSecurity).rate ?? ''
        })
    });
});
const RiskCardUI = /*#__PURE__*/ (0,react.memo)(({ icon , title , titleColor , description  })=>{
    const { classes  } = RiskCard_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 1,
        p: 1.5,
        direction: "row",
        className: classes.detectionCard,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.icon,
                children: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.header,
                        color: titleColor,
                        children: title
                    }),
                    description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.description,
                        children: description
                    })
                ]
            })
        ]
    }, title);
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.8.0_2f7y4c3dlygqpuszd3d43oslwi/node_modules/@mui/system/esm/useTheme.js
var useTheme = __webpack_require__(7162);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/utils/helper.ts

function resolveGoLabLink(chainId, address) {
    return dist_default()('https://gopluslabs.io/token-security/:chainId/:address', {
        chainId,
        address
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(13231);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/TokenPanel.tsx










const TokenPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        card: {
            borderColor: theme.palette.divider,
            borderStyle: 'solid',
            borderWidth: 1,
            padding: theme.spacing(1.5),
            borderRadius: 9
        },
        subtitle: {
            color: theme.palette.text.secondary,
            fontWeight: 400,
            fontSize: 14
        },
        cardValue: {
            color: theme.palette.text.primary,
            fontSize: 14
        },
        tooltip: {
            color: theme.palette.text.buttonText,
            fontSize: 12
        }
    })
);
const DEFAULT_PLACEHOLDER = '--';
function formatTotalSupply(total) {
    if (!total) return DEFAULT_PLACEHOLDER;
    return (0,base_src/* formatCurrency */.xG)(total);
}
const TokenPanel = /*#__PURE__*/ react.forwardRef(({ tokenSecurity , securityMessageLevel  }, ref)=>{
    const t = useI18N();
    const { classes  } = TokenPanel_useStyles();
    const theme1 = (0,useTheme/* default */.Z)();
    const totalSupply = (0,entry/* usePortalShadowRoot */.ad)((container)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
            PopperProps: {
                container
            },
            arrow: true,
            title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: (theme)=>theme.palette.text.buttonText
                ,
                className: classes.tooltip,
                children: tokenSecurity.total_supply
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.cardValue,
                children: formatTotalSupply(tokenSecurity.total_supply)
            })
        });
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            direction: "row",
            className: classes.card,
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    spacing: 1.5,
                    borderRadius: 0.5,
                    sx: {
                        background: DefineMapping[securityMessageLevel].bgColor
                    },
                    width: 128,
                    height: 128,
                    justifyContent: "center",
                    alignItems: "center",
                    children: [
                        DefineMapping[securityMessageLevel].icon(33),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: DefineMapping[securityMessageLevel].titleColor,
                            fontSize: 14,
                            children: t[DefineMapping[securityMessageLevel].i18nKey]({
                                quantity: '',
                                rate: ''
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    height: 128,
                    justifyContent: "space-between",
                    flex: 1,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subtitle,
                                    children: t.token_info_token_name()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.cardValue,
                                    children: [
                                        tokenSecurity.token_symbol,
                                        "(",
                                        tokenSecurity.token_name,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subtitle,
                                    children: t.token_info_token_contract_address()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                    display: "inline-flex",
                                    direction: "row",
                                    alignItems: "center",
                                    spacing: 0.625,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.cardValue,
                                            children: tokenSecurity.contract ? (0,formatter/* formatEthereumAddress */.j8)(tokenSecurity.contract, 4) : DEFAULT_PLACEHOLDER
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                            lineHeight: "14px",
                                            href: resolver/* explorerResolver.fungibleTokenLink */.Nb.fungibleTokenLink(tokenSecurity.chainId, tokenSecurity.contract),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                                color: theme1.palette.text.strong,
                                                size: 14
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subtitle,
                                    children: t.token_info_contract_creator()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                    display: "inline-flex",
                                    direction: "row",
                                    alignItems: "center",
                                    spacing: 0.625,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.cardValue,
                                            children: tokenSecurity.creator_address ? (0,formatter/* formatEthereumAddress */.j8)(tokenSecurity.creator_address ?? '', 4) : DEFAULT_PLACEHOLDER
                                        }),
                                        tokenSecurity.creator_address && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                            lineHeight: "14px",
                                            href: resolver/* explorerResolver.addressLink */.Nb.addressLink(tokenSecurity.chainId, tokenSecurity.creator_address),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                                color: theme1.palette.text.strong,
                                                size: 14
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subtitle,
                                    children: t.token_info_contract_owner()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                    display: "inline-flex",
                                    direction: "row",
                                    alignItems: "center",
                                    spacing: 0.625,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.cardValue,
                                            children: tokenSecurity.owner_address ? (0,formatter/* formatEthereumAddress */.j8)(tokenSecurity.owner_address ?? '', 4) : DEFAULT_PLACEHOLDER
                                        }),
                                        tokenSecurity.owner_address && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                            lineHeight: "14px",
                                            href: resolver/* explorerResolver.addressLink */.Nb.addressLink(tokenSecurity.chainId, tokenSecurity.owner_address),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                                color: theme1.palette.text.strong,
                                                size: 14
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subtitle,
                                    children: t.token_info_total_supply()
                                }),
                                totalSupply
                            ]
                        })
                    ]
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/SecurityPanel.tsx













const SecurityPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        header: {
            fontWeight: 500,
            fontSize: 18
        },
        root: {
            width: '600px'
        },
        detectionCard: {
            backgroundColor: theme.palette.background.default
        },
        detectionCollection: {
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    })
);
const LIST_HEIGHT = {
    min: 154,
    max: 308
};
const SecurityPanel = /*#__PURE__*/ (0,react.memo)(({ tokenSecurity  })=>{
    const { classes  } = SecurityPanel_useStyles();
    const t = useI18N();
    const theme = (0,useTheme/* default */.Z)();
    const [isCollapse, setCollapse] = (0,react.useState)(false);
    const makeMessageList = tokenSecurity.is_whitelisted === '1' ? [] : SecurityMessages.filter((x)=>x.condition(tokenSecurity) && x.level !== SecurityMessageLevel.Safe && !x.shouldHide(tokenSecurity)
    ).sort((a)=>a.level === SecurityMessageLevel.High ? -1 : 1
    );
    const riskyFactors = makeMessageList.filter((x)=>x.level === SecurityMessageLevel.High
    ).length;
    const attentionFactors = makeMessageList.filter((x)=>x.level === SecurityMessageLevel.Medium
    ).length;
    const securityMessageLevel = (0,react.useMemo)(()=>{
        if (riskyFactors) return SecurityMessageLevel.High;
        if (attentionFactors) return SecurityMessageLevel.Medium;
        return SecurityMessageLevel.Safe;
    }, [
        riskyFactors,
        attentionFactors
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        direction: "row",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                display: "inline-flex",
                                direction: "row",
                                alignItems: "center",
                                spacing: 0.6,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "h6",
                                        className: classes.header,
                                        children: t.token_info()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowDown/* default */.Z, {
                                        onClick: ()=>setCollapse(!isCollapse)
                                        ,
                                        sx: {
                                            fontSize: 15,
                                            cursor: 'pointer'
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                direction: "row",
                                alignItems: "center",
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        component: "span",
                                        lineHeight: "14px",
                                        fontSize: 12,
                                        children: t.more_details()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        lineHeight: "14px",
                                        href: resolveGoLabLink(tokenSecurity.chainId, tokenSecurity.contract),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                            color: theme.palette.text.strong,
                                            size: 14
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
                        in: !isCollapse,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPanel, {
                            tokenSecurity: tokenSecurity,
                            securityMessageLevel: securityMessageLevel
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                spacing: 1.5,
                flex: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        direction: "row",
                        alignItems: "center",
                        spacing: 3.5,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                className: classes.header,
                                children: t.security_detection()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                direction: "row",
                                alignItems: "center",
                                spacing: 1.5,
                                children: [
                                    riskyFactors !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                        direction: "row",
                                        alignItems: "center",
                                        spacing: 0.5,
                                        children: [
                                            DefineMapping[SecurityMessageLevel.High].icon(14),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                component: "span",
                                                children: riskyFactors > 1 ? t.risky_factors({
                                                    quantity: riskyFactors.toString()
                                                }) : t.risky_factor({
                                                    quantity: riskyFactors.toString()
                                                })
                                            })
                                        ]
                                    }),
                                    attentionFactors !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                        direction: "row",
                                        alignItems: "center",
                                        spacing: 0.5,
                                        children: [
                                            DefineMapping[SecurityMessageLevel.Medium].icon(14),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                component: "span",
                                                children: attentionFactors > 1 ? t.attention_factors({
                                                    quantity: attentionFactors.toString()
                                                }) : t.attention_factor({
                                                    quantity: attentionFactors.toString()
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
                        in: isCollapse,
                        timeout: {
                            enter: 1200,
                            exit: 10
                        },
                        collapsedSize: LIST_HEIGHT.min,
                        className: classes.detectionCollection,
                        sx: {
                            maxHeight: LIST_HEIGHT.max,
                            overflowY: 'auto'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            spacing: 1,
                            children: [
                                makeMessageList.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RiskCard, {
                                        tokenSecurity: tokenSecurity,
                                        info: x
                                    }, i)
                                ),
                                (!makeMessageList.length || securityMessageLevel === SecurityMessageLevel.Safe) && /*#__PURE__*/ (0,jsx_runtime.jsx)(RiskCardUI, {
                                    icon: DefineMapping[SecurityMessageLevel.Safe].icon(14),
                                    title: t.risk_safe_description(),
                                    titleColor: DefineMapping[SecurityMessageLevel.Safe].titleColor
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/icons/Logo.tsx


const GoPlusLabLogo = (0,utils/* createIcon */.I)('GoPlusLabLogo', /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            clipPath: "url(#clip0_379_11689)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M28.6938 4.359H26.8859V6.32659C26.8859 6.49572 26.7488 6.63283 26.5796 6.63283H24.947C24.7782 6.63236 24.6416 6.49539 24.6416 6.32659V4.359H22.8781C22.7969 4.35923 22.7188 4.32709 22.6612 4.26969C22.6037 4.21229 22.5713 4.13434 22.5713 4.05305V2.57348C22.5713 2.40435 22.7084 2.26724 22.8776 2.26724H24.6416V0.306237C24.6416 0.137219 24.7785 0.000158256 24.9475 0H26.5802C26.7494 0 26.8865 0.137107 26.8865 0.306237V2.26724H28.6943C28.8633 2.26756 29 2.40457 29 2.57348V4.05305C29 4.13424 28.9677 4.2121 28.9103 4.26949C28.8529 4.32687 28.775 4.35907 28.6938 4.359ZM17.5156 5.95613H10.8919C6.76947 5.95613 3.42725 9.29663 3.42725 13.4173C3.42725 17.5381 6.76976 20.8789 10.8922 20.8789H15.7547C16.2946 20.8863 16.7968 20.6026 17.0689 20.1362C17.3411 19.6698 17.3411 19.093 17.0689 18.6266C16.7968 18.1602 16.2946 17.8764 15.7547 17.8839H11.4703C8.7428 17.8839 6.52918 15.8968 6.52918 13.4311C6.52918 10.9654 8.7428 8.94595 11.4703 8.94595L14.8251 8.95656C14.8251 8.95455 14.8251 8.95254 14.8251 8.95054H18.9865C18.9865 10.6925 17.4482 12.1047 15.5505 12.1047C15.4869 12.1047 15.4272 12.1029 15.3702 12.0998V12.1047H10.971C10.231 12.1047 9.63112 12.7046 9.63112 13.4446C9.63112 14.1846 10.231 14.7845 10.971 14.7845H15.7547C17.3973 14.7845 18.915 15.6608 19.7363 17.0833C20.5576 18.5058 20.5576 20.2584 19.7363 21.6809C18.915 23.1034 17.3973 23.9796 15.7547 23.9796H10.8922C5.05735 23.9799 0.326172 19.2513 0.326172 13.4185C0.326172 7.58566 5.05735 2.85735 10.8922 2.85735H20.5645C20.5637 4.54908 19.2071 5.92797 17.5156 5.95613Z",
                fill: "url(#paint0_linear_379_11689)"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint0_linear_379_11689",
                    x1: "1.00541",
                    y1: "17.3293",
                    x2: "27.784",
                    y2: "1.68515",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#00D9FF"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#00FFC5"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                    id: "clip0_379_11689",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                        width: "28.6738",
                        height: "24",
                        fill: "white",
                        transform: "translate(0.326172)"
                    })
                })
            ]
        })
    ]
}), '0 0 29 24', [
    29,
    24
]);

// EXTERNAL MODULE: ../plugins/GoPlusSecurity/src/constants.ts
var constants = __webpack_require__(67606);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/Footer.tsx





const Footer = ()=>{
    const t = useI18N();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        justifyContent: "flex-end",
        direction: "row",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            direction: "row",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        mr: 1.25,
                        children: t.powered_by_go_plus()
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: constants/* PLUGIN_OFFICIAL_WEBSITE */.JS,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GoPlusLabLogo, {})
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ../icons/plugins/SecurityChecker.tsx


const SecurityCheckerIcon = (0,utils/* createIcon */.I)('SecurityChecker', /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M5.73999 25.06C5.73999 25.3323 6.56599 25.5934 8.03627 25.786C9.50656 25.9785 11.5007 26.0867 13.58 26.0867C15.6593 26.0867 17.6534 25.9785 19.1237 25.786C20.594 25.5934 21.42 25.3323 21.42 25.06C21.42 24.7877 20.594 24.5266 19.1237 24.334C17.6534 24.1415 15.6593 24.0333 13.58 24.0333C11.5007 24.0333 9.50656 24.1415 8.03627 24.334C6.56599 24.5266 5.73999 24.7877 5.73999 25.06Z",
            fill: "url(#paint0_linear_931_5268)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M13.6734 2.75332C9.33338 4.29332 4.20005 5.36665 4.20005 5.36665C3.87338 5.45999 3.59338 5.78665 3.59338 6.11332V14.7C3.59338 14.7933 3.73338 16.66 4.99338 18.8533C5.74005 20.16 7.23338 21.1867 8.44672 22.2133C9.94005 23.4267 12.0401 24.36 14.1401 25.06C14.1401 25.06 17.2667 24.3133 19.7401 22.5867C25.1067 18.8533 25.1067 14.7933 25.1067 14.7467V5.50666C25.1067 5.13332 24.8267 4.85332 24.5001 4.80665C24.5001 4.80665 19.5067 4.19999 14.6534 2.75332C14.4667 2.65999 13.8601 2.79999 13.6734 2.75332Z",
            fill: "#7DABFF",
            fillOpacity: "0.32"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M13.58 3.03333C9.38004 4.52666 4.06004 5.27332 4.06004 5.27332C3.73337 5.31999 3.45337 5.64666 3.45337 6.01999V14.3733C3.45337 14.4667 3.59337 16.2867 4.8067 18.3867C5.5067 19.6467 7.00004 20.7667 8.1667 21.7467C9.61337 22.96 11.3867 23.8933 13.44 24.5467L13.6267 24.5933L13.8134 24.5467C15.8667 23.8933 17.5934 22.96 19.04 21.7467C20.2067 20.7667 21.7 19.6467 22.4 18.3867C23.66 16.24 23.7534 14.42 23.7534 14.3267V5.97333C23.7534 5.64666 23.4734 5.27332 23.1467 5.22666C23.1 5.27332 18.48 4.52666 13.58 3.03333Z",
            fill: "#699EFF"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.6933 8.82002C12.8333 8.30668 13.3933 7.93335 13.9066 7.93335H15.3066C15.8199 7.93335 16.0533 8.30668 15.8666 8.77335L14.6999 11.5267H15.7733C17.3133 11.5267 17.7333 12.46 16.7533 13.6267L13.0199 17.92C12.6933 18.2934 12.0399 18.3867 11.7599 18.2L13.5333 14H11.8999C11.3866 14 11.1066 13.6267 11.2466 13.1134L12.6933 8.82002Z",
            fill: "#DAE9FF"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M11.76 8.82002C11.9 8.30668 12.46 7.93335 12.9734 7.93335H14.3734C14.8867 7.93335 15.12 8.30668 14.9334 8.77335L13.7667 11.5267H15.7734C16.8 11.5267 17.08 12.18 16.4267 12.9267L12.04 18.06C11.7134 18.4334 11.5267 18.3867 11.6667 17.8734L12.6 14H10.9667C10.4534 14 10.1734 13.6267 10.3134 13.1134L11.76 8.82002Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M25.48 23.9866L24.8734 23.38C25.4334 22.6333 25.76 21.7 25.76 20.6733C25.76 18.1533 23.7067 16.1 21.14 16.1C18.5734 16.1 16.52 18.1533 16.52 20.6733C16.52 23.1933 18.5734 25.2466 21.14 25.2466C22.1667 25.2466 23.1 24.8733 23.8467 24.36L24.4534 24.9666C24.7334 25.2466 25.1534 25.2466 25.4334 24.9666C25.7134 24.6866 25.7134 24.2666 25.48 23.9866Z",
            fill: "#FF5F5F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M18.2467 20.6267C18.2467 21.3817 18.5515 22.1057 19.0941 22.6396C19.6367 23.1734 20.3727 23.4734 21.14 23.4734C21.9074 23.4734 22.6433 23.1734 23.1859 22.6396C23.7285 22.1057 24.0334 21.3817 24.0334 20.6267C24.0334 19.8717 23.7285 19.1477 23.1859 18.6138C22.6433 18.0799 21.9074 17.78 21.14 17.78C20.3727 17.78 19.6367 18.0799 19.0941 18.6138C18.5515 19.1477 18.2467 19.8717 18.2467 20.6267Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.42 19.32C21.6533 19.32 21.84 19.1333 21.84 18.9C21.84 18.6666 21.6533 18.48 21.42 18.48C21.1867 18.48 21 18.6666 21 18.9C21 19.1333 21.1867 19.32 21.42 19.32Z",
            fill: "#FFD6C2"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint0_linear_931_5268",
                x1: "13.58",
                y1: "23.7752",
                x2: "13.58",
                y2: "25.1742",
                gradientUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        stopColor: "#3E7DEF",
                        stopOpacity: "0.29"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "1",
                        stopColor: "#8DB3F9",
                        stopOpacity: "0"
                    })
                ]
            })
        })
    ]
}), '0 0 28 28');

;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/DefaultPlaceholder.tsx




const DefaultPlaceholder = ()=>{
    const t = useI18N();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        alignItems: "center",
        spacing: 2.5,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SecurityCheckerIcon, {
                    sx: {
                        fontSize: 48
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body2",
                    children: t.default_placeholder()
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/NotFound.tsx




const NotFound = ()=>{
    const t = useI18N();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 12,
                color: entry/* MaskColorVar.orangeMain */.ZN.orangeMain,
                children: t.not_found_tip_title()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 12,
                color: entry/* MaskColorVar.orangeMain */.ZN.orangeMain,
                children: t.not_found_tip_network_error()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 12,
                color: entry/* MaskColorVar.orangeMain */.ZN.orangeMain,
                children: t.not_found_tip_network_chain_correct()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontSize: 12,
                color: entry/* MaskColorVar.orangeMain */.ZN.orangeMain,
                children: t.not_found_tip_network_address_not_cover()
            })
        ]
    });
};

// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/CheckSecurityDialog.tsx














const CheckSecurityDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: 600
        },
        paperRoot: {
            backgroundImage: 'none',
            '&>h2': {
                height: 30,
                border: `1px solid ${theme.palette.divider}`,
                padding: theme.spacing(1.875, 2.5, 1.875, 2.5),
                marginBottom: 24
            }
        },
        content: {
            height: 510,
            maxHeight: 510,
            paddingBottom: theme.spacing(3)
        }
    })
);
function CheckSecurityDialog(props) {
    const t = useI18N();
    const classes = (0,entry/* useStylesExtends */.Bc)(CheckSecurityDialog_useStyles(), props);
    const { open , onClose  } = props;
    const [{ value , loading: searching , error  }, onSearch] = (0,useAsyncFn/* default */.Z)(async (chainId, content)=>{
        const values = await src/* GoPlusLabs.getTokenSecurity */.e.getTokenSecurity(chainId, [
            content.trim()
        ]);
        if (!Object.keys(values ?? {}).length) throw new Error('Contract Not Found');
        return Object.entries(values ?? {}).map((x)=>({
                ...x[1],
                contract: x[0],
                chainId
            })
        )[0];
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        classes: {
            paper: classes.paperRoot
        },
        title: t.__plugin_name(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                height: "100%",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchBox, {
                            onSearch: onSearch
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        flex: 1,
                        children: [
                            searching && /*#__PURE__*/ (0,jsx_runtime.jsx)(Center, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Searching, {})
                            }),
                            error && !searching && /*#__PURE__*/ (0,jsx_runtime.jsx)(NotFound, {}),
                            !error && !searching && value && /*#__PURE__*/ (0,jsx_runtime.jsx)(SecurityPanel, {
                                tokenSecurity: value
                            }),
                            !error && !searching && !value && /*#__PURE__*/ (0,jsx_runtime.jsx)(Center, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DefaultPlaceholder, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {})
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/index.tsx







const sns = {
    ...base/* base */.u,
    init (signal) {},
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(SecurityCheckerIcon, {});
            const name = {
                i18nKey: '__plugin_name',
                fallback: 'Check Security'
            };
            const iconFilterColor = 'rgba(69, 110, 255, 0.3)';
            return {
                ApplicationEntryID: base/* base.ID */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    const [open, setOpen] = (0,react.useState)(false);
                    const clickHandler = ()=>setOpen(true)
                    ;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PluginI18NFieldRender */.KP, {
                                    field: name,
                                    pluginID: base/* base.ID */.u.ID
                                }),
                                ...EntryComponentProps,
                                iconFilterColor: iconFilterColor,
                                icon: icon,
                                onClick: EntryComponentProps.onClick ? ()=>EntryComponentProps.onClick?.(clickHandler)
                                 : clickHandler
                            }),
                            open && /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckSecurityDialog, {
                                open: open,
                                onClose: ()=>setOpen(false)
                            })
                        ]
                    });
                },
                name,
                icon,
                iconFilterColor,
                appBoardSortingDefaultPriority: 13,
                marketListSortingPriority: 16
            };
        })(), 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ })

}]);