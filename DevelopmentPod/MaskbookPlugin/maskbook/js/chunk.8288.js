(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8288],{

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

/***/ 52706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ NextIdPersonaWarningIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


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

/***/ 3328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SuccessIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


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

/***/ 18089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../plugins/GoPlusSecurity/src/base.ts + 7 modules
var base = __webpack_require__(51213);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(31008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(43966);
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


// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(24294);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(69911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/KeyboardArrowDown.js
var KeyboardArrowDown = __webpack_require__(45379);
// EXTERNAL MODULE: ../icons/general/Search.tsx
var Search = __webpack_require__(38524);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(92820);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
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
            borderColor: theme.palette.divider
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
    if (!chain) return (0,chainDetailed/* getChainDetailed */.$G)(types/* ChainId.Mainnet */.a_.Mainnet)?.chain;
    if (chain.id === types/* ChainId.BSC */.a_.BSC) return (0,chainDetailed/* getChainDetailed */.$G)(types/* ChainId.BSC */.a_.BSC)?.shortName.toUpperCase() ?? chain.name;
    return (0,chainDetailed/* getChainDetailed */.$G)(chain.id)?.chain ?? chain.name;
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
            }, chain.id);
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
                            onKeyPress: (e)=>{
                                if (e.key !== 'Enter') return;
                                onSearch(selectedChain?.id ?? DEFAULT_SEARCH_CHAIN, searchContent ?? '');
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
                        onClick: ()=>onSearch(selectedChain?.id ?? DEFAULT_SEARCH_CHAIN, searchContent ?? '')
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(30688);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(15679);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/icons/Loading.tsx


const LoadingIcon = (0,utils/* createIcon */.I)('LoadingIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: "0.2",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 16.75C13.7279 16.75 16.75 13.7279 16.75 10C16.75 6.27208 13.7279 3.25 10 3.25C6.27208 3.25 3.25 6.27208 3.25 10C3.25 13.7279 6.27208 16.75 10 16.75ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z",
            fill: "#111432"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.7422 9.82423C16.7422 6.19493 13.6293 3.2528 10 3.2528V2C14.4183 2 18 5.58172 18 10L16.7422 9.82423Z",
            fill: "#111432"
        })
    ]
}), '0 0 20 20');

;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/Loading.tsx



const Loading_useStyles = (0,entry/* makeStyles */.ZL)()({
    animated: {
        '@keyframes loadingAnimation': {
            '0%': {
                transform: 'rotate(0deg)'
            },
            '100%': {
                transform: 'rotate(360deg)'
            }
        },
        animation: 'loadingAnimation 1s linear infinite'
    }
});
const LoadingAnimation = (props)=>{
    const { classes  } = Loading_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingIcon, {
        ...props,
        className: `${classes.animated} ${props.className}`
    });
};

;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/Searching.tsx



const Searching = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingAnimation, {
            sx: {
                fontSize: 48
            }
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(92760);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0/node_modules/react-feather/dist/icons/external-link.js
var external_link = __webpack_require__(78216);
// EXTERNAL MODULE: ../icons/general/Risk.tsx
var Risk = __webpack_require__(141);
// EXTERNAL MODULE: ../icons/general/NextIdPersonaWarning.tsx
var NextIdPersonaWarning = __webpack_require__(52706);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(3328);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.6.1_de97b6be3b01c831652fad9cf8222fb8/node_modules/@mui/system/esm/useTheme.js
var useTheme = __webpack_require__(69380);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(26405);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
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
    return (0,formatter/* formatCurrency */.xG)(total);
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
                                            href: (0,pipes/* resolveTokenLinkOnExplorer */.yW)({
                                                chainId: tokenSecurity.chainId,
                                                address: tokenSecurity.contract
                                            }),
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
                                            href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(tokenSecurity.chainId, tokenSecurity.creator_address),
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
                                            href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(tokenSecurity.chainId, tokenSecurity.owner_address),
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
var constants = __webpack_require__(3502);
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

;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/icons/SecurityIcon.tsx


const SecurityIcon = (0,utils/* createIcon */.I)('SecurityIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.84 42.96C9.84 43.4268 11.256 43.8745 13.7765 44.2045C16.297 44.5346 19.7155 44.72 23.28 44.72C26.8445 44.72 30.263 44.5346 32.7835 44.2045C35.304 43.8745 36.72 43.4268 36.72 42.96C36.72 42.4932 35.304 42.0456 32.7835 41.7155C30.263 41.3854 26.8445 41.2 23.28 41.2C19.7155 41.2 16.297 41.3854 13.7765 41.7155C11.256 42.0456 9.84 42.4932 9.84 42.96Z",
            fill: "url(#paint0_linear_296_32169)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.44 4.72C16 7.36 7.2 9.2 7.2 9.2C6.64 9.36 6.16 9.92 6.16 10.48V25.2C6.16 25.36 6.4 28.56 8.56 32.32C9.84 34.56 12.4 36.32 14.48 38.08C17.04 40.16 20.64 41.76 24.24 42.96C24.24 42.96 29.6 41.68 33.84 38.72C43.04 32.32 43.04 25.36 43.04 25.28V9.44C43.04 8.8 42.56 8.32 42 8.24C42 8.24 33.44 7.2 25.12 4.72C24.8 4.56 23.76 4.8 23.44 4.72Z",
            fill: "#7DABFF",
            fillOpacity: "0.32"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.28 5.20001C16.08 7.76001 6.96001 9.04001 6.96001 9.04001C6.40001 9.12001 5.92001 9.68001 5.92001 10.32V24.64C5.92001 24.8 6.16001 27.92 8.24001 31.52C9.44001 33.68 12 35.6 14 37.28C16.48 39.36 19.52 40.96 23.04 42.08L23.36 42.16L23.68 42.08C27.2 40.96 30.16 39.36 32.64 37.28C34.64 35.6 37.2 33.68 38.4 31.52C40.56 27.84 40.72 24.72 40.72 24.56V10.24C40.72 9.68001 40.24 9.04001 39.68 8.96001C39.6 9.04001 31.68 7.76001 23.28 5.20001Z",
            fill: "#699EFF"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.76 15.12C22 14.24 22.96 13.6 23.84 13.6H26.24C27.12 13.6 27.52 14.24 27.2 15.04L25.2 19.76H27.04C29.68 19.76 30.4 21.36 28.72 23.36L22.32 30.72C21.76 31.36 20.64 31.52 20.16 31.2L23.2 24H20.4C19.52 24 19.04 23.36 19.28 22.48L21.76 15.12Z",
            fill: "#DAE9FF"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M20.16 15.12C20.4 14.24 21.36 13.6 22.24 13.6H24.64C25.52 13.6 25.92 14.24 25.6 15.04L23.6 19.76H27.04C28.8 19.76 29.28 20.88 28.16 22.16L20.64 30.96C20.08 31.6 19.76 31.52 20 30.64L21.6 24H18.8C17.92 24 17.44 23.36 17.68 22.48L20.16 15.12Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M43.68 41.12L42.64 40.08C43.6 38.8 44.16 37.2 44.16 35.44C44.16 31.12 40.64 27.6 36.24 27.6C31.84 27.6 28.32 31.12 28.32 35.44C28.32 39.76 31.84 43.28 36.24 43.28C38 43.28 39.6 42.64 40.88 41.76L41.92 42.8C42.4 43.28 43.12 43.28 43.6 42.8C44.08 42.32 44.08 41.6 43.68 41.12Z",
            fill: "#FF5F5F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M31.28 35.36C31.28 36.6543 31.8026 37.8955 32.7327 38.8107C33.6629 39.7259 34.9245 40.24 36.24 40.24C37.5555 40.24 38.8171 39.7259 39.7473 38.8107C40.6774 37.8955 41.2 36.6543 41.2 35.36C41.2 34.0658 40.6774 32.8245 39.7473 31.9093C38.8171 30.9942 37.5555 30.48 36.24 30.48C34.9245 30.48 33.6629 30.9942 32.7327 31.9093C31.8026 32.8245 31.28 34.0658 31.28 35.36Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M36.72 33.12C37.12 33.12 37.44 32.8 37.44 32.4C37.44 32 37.12 31.68 36.72 31.68C36.32 31.68 36 32 36 32.4C36 32.8 36.32 33.12 36.72 33.12Z",
            fill: "#FFD6C2"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint0_linear_296_32169",
                x1: "23.28",
                y1: "40.7575",
                x2: "23.28",
                y2: "43.1559",
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
}), '0 0 48 48');

;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/components/DefaultPlaceholder.tsx




const DefaultPlaceholder = ()=>{
    const t = useI18N();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        alignItems: "center",
        spacing: 2.5,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SecurityIcon, {
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
            width: 552,
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        DialogProps: {
            classes: {
                paper: classes.paperRoot
            }
        },
        title: t.dialog_title(),
        open: open,
        onBack: onClose,
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

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
;// CONCATENATED MODULE: ../plugins/GoPlusSecurity/src/SNSAdaptor/index.tsx





const sns = {
    ...base/* base */.u,
    init (signal) {},
    ApplicationEntries: [
        {
            RenderEntryComponent () {
                const [open, setOpen] = (0,react.useState)(false);
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                            title: "Check Security",
                            icon: new URL(/* asset import */ __webpack_require__(87467), __webpack_require__.b).toString(),
                            onClick: ()=>setOpen(true)
                        }),
                        open && /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckSecurityDialog, {
                            open: open,
                            onClose: ()=>setOpen(false)
                        })
                    ]
                });
            },
            defaultSortingPriority: 12
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 87467:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a26cfa5ebe7a70f47e71.png";

/***/ })

}]);