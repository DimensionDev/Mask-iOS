(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8449],{

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

/***/ 6871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DeleteIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const DeleteIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('DeleteIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.334 1.334 0 011.334 1.334V4m2 0v9.333a1.334 1.334 0 01-1.334 1.334H4.667a1.333 1.333 0 01-1.334-1.334V4h9.334zM6.667 7.333v4M9.333 7.333v4",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');


/***/ }),

/***/ 87169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MasksIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const MasksIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('MasksIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            x: "3.594",
            y: "13.04",
            width: "1.5",
            height: "7.5",
            rx: ".75",
            transform: "rotate(-30 3.594 13.04)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.635 12.944c-.97.31-2.018.146-2.97-.445a.434.434 0 00-.37-.045.446.446 0 00-.282.263c-.427 1.021-1.196 1.765-2.166 2.075-1.55.495-3.312-.245-4.392-1.843a5.502 5.502 0 01-.684-1.409 6.763 6.763 0 01-.187-.744l-.165-.934.774.546a.574.574 0 00.505.084c.046-.015.09-.04.132-.063l.196-.215.013-.025.025-.048a4.253 4.253 0 012.259-1.718 4.244 4.244 0 012.687.037 4.244 4.244 0 012.168-1.587 4.274 4.274 0 012.837.091l.049.025c.036.02.082.035.128.051l.012.006c.1.03.211.024.322-.011a.56.56 0 00.363-.36l.305-.89.406.856c.117.238.203.475.28.715.161.507.246 1.03.258 1.544.065 1.923-.952 3.55-2.503 4.044zm-5.973-.585c-.129.042-.264.065-.402.078-.758.049-1.462-.47-1.786-.752.233-.258.698-.711 1.28-.897.138-.044.264-.064.402-.078.758-.048 1.462.47 1.786.752-.242.261-.707.715-1.28.897zm3.164-1.498c.34.075.991.172 1.563-.01.139-.045.262-.104.373-.17.637-.397.92-1.23 1.02-1.648-.339-.075-.99-.172-1.563.01a1.802 1.802 0 00-.373.17c-.636.397-.92 1.23-1.02 1.648z",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.03 8.621l.162-.27 7.659 2.527-.033.314a9.007 9.007 0 01-.434 2.04c-.531 1.594-1.443 2.96-2.56 3.85-.835.662-1.736 1.01-2.593 1.01-.336 0-.661-.044-.976-.153-1.128-.38-1.963-1.377-2.343-2.82-.369-1.378-.282-3.016.25-4.61.217-.673.51-1.302.867-1.888zm.976 4.48c.163.076.336.109.532.109.173 0 .368-.033.575-.087.221-.074.4-.166.477-.207.026-.013.04-.02.043-.02l.217-.13-.12-.229c-.01-.032-.357-.694-1.04-.998-.684-.303-1.41-.108-1.443-.097l-.25.065.055.25c.003.002.01.025.02.063.028.093.082.278.175.479.195.39.455.672.759.803zm3.374 1.15c.086.022.173.033.27.033.261 0 .543-.076.814-.217.282-.141.467-.304.478-.315l.195-.173-.152-.206c-.022-.033-.488-.63-1.215-.792-.673-.15-1.299.117-1.414.166-.01.004-.015.007-.018.007l-.228.109.098.239c0 .01.098.249.282.498.26.348.564.575.89.651z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "2.598",
                    y1: "10.871",
                    x2: "15.806",
                    y2: "6.618",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "8.688",
                    y: "4.35",
                    width: "17.163",
                    height: "17.741",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 30318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7666);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80231);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65845);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96436);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(1)
        },
        disabledTab: {
            opacity: 0.5
        },
        flexContainer: {}
    })
);
function AbstractTab(props) {
    const { tabs , state , index: index1 , height =200 , hasOnlyOneChild =false , scrollable =false  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [value, setValue] = state ?? [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length && !scrollable ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                square: true,
                elevation: 0,
                className: classes.tabPaper,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator,
                        flexContainer: classes.flexContainer
                    },
                    value: index1 ? index1 : value ? value : 0,
                    indicatorColor: "primary",
                    textColor: "primary",
                    variant: scrollable ? 'scrollable' : 'fullWidth',
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    scrollButtons: scrollable,
                    allowScrollButtonsMobile: scrollable,
                    onChange: (_, newValue)=>setValue?.(newValue)
                    ,
                    children: tabs.map((tab, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: tab.disabled,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tab, [
                                index1,
                                value
                            ].includes(i) ? classes.focusTab : '', tab.disabled ? classes.disabledTab : ''),
                            disableFocusRipple: tab.disableFocusRipple,
                            disableRipple: tab.disableRipple,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${tab.id?.toLowerCase()}_tab`
                        }, i)
                    )
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index)=>index === value
                ),
                sx: {
                    height,
                    minHeight: height
                }
            }) : null
        ]
    });
};


/***/ }),

/***/ 19613:
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
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ./src/plugins/NextID/base.ts + 7 modules
var base = __webpack_require__(13304);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(23397);
// EXTERNAL MODULE: ./src/components/DataSource/useNextID.ts
var useNextID = __webpack_require__(360);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(9987);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/plugins/NextID/constants.ts
var constants = __webpack_require__(27707);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(43133);
;// CONCATENATED MODULE: ./src/plugins/NextID/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "com.mask.next_id", ...props })
function useI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("com.mask.next_id")
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
;// CONCATENATED MODULE: ./src/plugins/NextID/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts


// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../icons/general/Masks.tsx
var Masks = __webpack_require__(87169);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox/index.tsx + 3 modules
var WalletStatusBox = __webpack_require__(47919);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(80875);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Done.js
var Done = __webpack_require__(31363);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/BindPanelUI.tsx













const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        persona: {
            padding: theme.spacing(1.7),
            marginBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center'
        },
        iconContainer: {
            display: 'flex',
            alignItems: 'center',
            marginRight: '4px',
            width: 48,
            height: 48
        },
        name: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            color: theme.palette.text.primary,
            fontWeight: 500
        },
        identifier: {
            fontSize: 12,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            wordBreak: 'break-all'
        },
        subTitle: {
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 600,
            color: theme.palette.text.primary
        },
        deneText: {
            color: '#60DFAB'
        },
        done: {
            background: '#60DFAB !important',
            color: `${entry/* MaskColorVar.white */.ZN.white} !important`,
            opacity: '1 !important'
        },
        loadingIcon: {
            position: 'relative',
            right: -6
        },
        error: {
            marginTop: '14px',
            color: (0,entry/* getMaskColor */.nb)(theme).redMain,
            paddingLeft: theme.spacing(0.5),
            borderLeft: `solid 2px ${(0,entry/* getMaskColor */.nb)(theme).redMain}`
        }
    })
);
const SUPPORTED_PLUGINS = [
    base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
];
const BindPanelUI = /*#__PURE__*/ (0,react.memo)(({ onPersonaSign , onWalletSign , currentPersona , signature , isBound , title , onClose , open , isCurrentAccount  })=>{
    const t = useI18N();
    const { classes  } = useStyles();
    const pluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const isSupported = SUPPORTED_PLUGINS.includes(pluginId);
    const isWalletSigned = !!signature.wallet.value;
    const isPersonaSigned = !!signature.persona.value;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        title: title,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            style: {
                padding: '24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            alignItems: "center",
                            direction: "row",
                            justifyContent: "space-between",
                            mb: 1.25,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subTitle,
                                    children: t.wallet()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            className: isWalletSigned ? classes.deneText : '',
                                            component: "span",
                                            children: "1"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            variant: "body2",
                                            component: "span",
                                            children: [
                                                ' ',
                                                "/ 2",
                                                ' '
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {}),
                        isBound && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.error,
                            children: t.bind_wallet_bound_error()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            mt: 3,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                                fullWidth: true,
                                classes: {
                                    loadingIndicatorEnd: classes.loadingIcon
                                },
                                loadingPosition: "end",
                                disabled: !isCurrentAccount || isBound || !!isWalletSigned || !isSupported,
                                className: isWalletSigned ? classes.done : '',
                                loading: signature.wallet.loading,
                                variant: "contained",
                                onClick: onWalletSign,
                                endIcon: isWalletSigned ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                                    sx: {
                                        color: entry/* MaskColorVar.white */.ZN.white
                                    }
                                }) : null,
                                loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {}),
                                children: isWalletSigned ? t.done() : t.wallet_sign()
                            })
                        })
                    ]
                }),
                !isSupported && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.error,
                    children: t.unsupported_network()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    mt: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            alignItems: "center",
                            direction: "row",
                            justifyContent: "space-between",
                            mb: 1.25,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subTitle,
                                    children: t.persona()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            className: isPersonaSigned ? classes.deneText : '',
                                            component: "span",
                                            children: "2"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            component: "span",
                                            variant: "body2",
                                            children: [
                                                ' ',
                                                "/ 2",
                                                ' '
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            className: classes.persona,
                            mb: 3,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.iconContainer,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Masks/* MasksIcon */.s, {
                                        style: {
                                            fontSize: '48px'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.name,
                                            children: currentPersona?.nickname
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.identifier,
                                            children: (0,src/* formatPersonaFingerprint */.Nb)(currentPersona?.identifier.rawPublicKey ?? '', 10)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            mt: 3,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                                fullWidth: true,
                                disabled: isBound || !!isPersonaSigned || !isSupported,
                                classes: {
                                    loadingIndicatorEnd: classes.loadingIcon
                                },
                                loadingPosition: "end",
                                className: isPersonaSigned ? classes.done : '',
                                loading: signature.persona.loading,
                                variant: "contained",
                                onClick: onPersonaSign,
                                endIcon: isPersonaSigned ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                                    sx: {
                                        color: entry/* MaskColorVar.white */.ZN.white
                                    }
                                }) : null,
                                loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {}),
                                children: isPersonaSigned ? t.done() : t.persona_sign()
                            })
                        })
                    ]
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
;// CONCATENATED MODULE: ./src/plugins/NextID/hooks/useBindPayload.ts



const useBindPayload = (action, address, currentIdentifier)=>{
    return (0,useAsyncRetry/* default */.Z)(()=>{
        if (!address) return Promise.resolve(undefined);
        if (!currentIdentifier || !address) return Promise.resolve(undefined);
        return web3_providers_src/* NextIDProof.createPersonaPayload */.q7.createPersonaPayload(currentIdentifier, action, address, src/* NextIDPlatform.Ethereum */.Vd.Ethereum);
    }, [
        currentIdentifier,
        address
    ]);
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
;// CONCATENATED MODULE: ./src/plugins/NextID/hooks/usePersonaSign.ts


function usePersonaSign(message, currentIdentifier) {
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!message || !currentIdentifier) return;
        try {
            const result = await service/* default.Identity.signWithPersona */.ZP.Identity.signWithPersona({
                method: 'eth',
                message,
                identifier: currentIdentifier
            });
            return result;
        } catch  {
            return;
        }
    }, [
        message,
        currentIdentifier
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(40661);
;// CONCATENATED MODULE: ./src/plugins/NextID/hooks/useWalletSign.ts





const useWalletSign = (message, address)=>{
    const t = useI18N();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [state, fn] = (0,useAsyncFn/* default */.Z)(async (changed)=>{
        if (changed) return undefined;
        if (!address || !message) return;
        try {
            showSnackbar(t.notify_wallet_sign(), {
                processing: true,
                message: t.notify_wallet_sign_confirm()
            });
            const result = await connection.signMessage(message, 'personalSign', {
                account: address
            });
            return result;
        } catch  {
            showSnackbar(t.notify_wallet_sign(), {
                variant: 'error',
                message: t.notify_wallet_sign_cancel()
            });
            return;
        }
    }, [
        address,
        message,
        address,
        connection
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        fn(true);
    }, [
        address
    ]);
    return [
        state,
        ()=>fn(false)
    ];
};

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/BindDialog.tsx















const BindDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose , persona , onBound , bounds  })=>{
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const t = useI18N();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const currentIdentifier = persona.identifier;
    const isBound = !!bounds.find((x)=>(0,base_src/* isSameAddress */.Wr)(x.identity, account)
    );
    const { value: message  } = useBindPayload(src/* NextIDAction.Create */.BU.Create, account, persona.identifier.publicKeyAsHex);
    const [personaSignState, handlePersonaSign] = usePersonaSign(message?.signPayload, currentIdentifier);
    const [walletSignState, handleWalletSign] = useWalletSign(message?.signPayload, account);
    (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!personaSignState.value || !walletSignState.value || isBound || !message || !persona.identifier.publicKeyAsHex) return;
        try {
            await web3_providers_src/* NextIDProof.bindProof */.q7.bindProof(message.uuid, persona.identifier.publicKeyAsHex, src/* NextIDAction.Create */.BU.Create, src/* NextIDPlatform.Ethereum */.Vd.Ethereum, account, message.createdAt, {
                walletSignature: walletSignState.value,
                signature: personaSignState.value.signature.signature
            });
            showSnackbar(t.notify_wallet_sign_request_title(), {
                variant: 'success',
                message: t.notify_wallet_sign_request_success()
            });
            shared/* MaskMessages.events.ownProofChanged.sendToAll */.ql.events.ownProofChanged.sendToAll();
            await (0,esm/* delay */.gw)(2000);
            onBound();
            onClose();
        } catch  {
            showSnackbar(t.notify_wallet_sign_request_title(), {
                variant: 'error',
                message: t.notify_wallet_sign_request_failed()
            });
        }
    }, [
        walletSignState.value,
        personaSignState.value,
        isBound
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BindPanelUI, {
        title: t.verify_wallet_dialog_title(),
        onClose: onClose,
        open: open,
        currentPersona: persona,
        onPersonaSign: handlePersonaSign,
        onWalletSign: handleWalletSign,
        isCurrentAccount: true,
        signature: {
            persona: {
                value: personaSignState.value?.signature.signature,
                loading: personaSignState.loading
            },
            wallet: walletSignState
        },
        isBound: isBound
    });
});

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../icons/general/Delete.tsx
var Delete = __webpack_require__(6871);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(13231);
// EXTERNAL MODULE: ../icons/general/Copy.tsx
var Copy = __webpack_require__(28839);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(39969);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/CopyIconButton/index.tsx







const CopyIconButton = /*#__PURE__*/ (0,react.memo)(({ text , ...props })=>{
    const t = useI18N();
    const theme = (0,useTheme/* default */.Z)();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const [open, setOpen] = (0,react.useState)(false);
    const onCopy = (0,shared_src/* useSnackbarCallback */.iD)({
        executor: async ()=>copyToClipboard(text)
        ,
        deps: [],
        successText: t.copy_success_of_wallet_address()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            style: {
                color: theme.palette.text.primary
            },
            children: t.copied()
        }),
        open: open,
        onMouseLeave: ()=>setOpen(false)
        ,
        disableFocusListener: true,
        disableTouchListener: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Copy/* CopyIcon */.T, {
            onClick: onCopy,
            className: props.className
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/external-link.js
var external_link = __webpack_require__(12718);
// EXTERNAL MODULE: ./src/plugins/Tips/components/index.ts + 14 modules
var components = __webpack_require__(11940);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/BindingItem.tsx















const BindingItem_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        item: {
            padding: theme.spacing(1.5),
            marginBottom: theme.spacing(1),
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center'
        },
        copy: {
            color: theme.palette.text.primary,
            fontSize: 16,
            cursor: 'pointer'
        },
        address: {
            color: theme.palette.text.primary
        },
        link: {
            color: theme.palette.text.primary,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center'
        },
        linkIcon: {
            marginRight: theme.spacing(1)
        },
        tipButton: {
            display: 'inline-flex',
            alignItems: 'center',
            color: theme.palette.text.primary,
            marginRight: theme.spacing(0.5)
        },
        tipButtonLabel: {
            color: theme.palette.text.primary,
            fontSize: 14,
            marginLeft: theme.spacing(0.5)
        },
        delButton: {
            fontSize: 20,
            stroke: theme.palette.text.primary,
            cursor: 'pointer',
            marginLeft: theme.spacing(1)
        }
    })
);
const BindingItem = /*#__PURE__*/ (0,react.memo)(({ platform , identity , tipable , deletable , onUnBind  })=>{
    const t = useI18N();
    const { classes  } = BindingItem_useStyles();
    const networkDescriptor = (0,entry_web3/* useNetworkDescriptor */.Vw)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, types/* ChainId.Mainnet */.a_.Mainnet);
    const visitingPersona = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    if (platform === src/* NextIDPlatform.Ethereum */.Vd.Ethereum) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
            className: classes.item,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    alignItems: "center",
                    gap: "12px",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                            size: 18,
                            icon: networkDescriptor?.icon
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.address,
                            children: (0,formatter/* formatEthereumAddress */.j8)(identity, 4)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIconButton, {
                            text: identity,
                            className: classes.copy
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            className: classes.link,
                            href: resolver/* explorerResolver.addressLink */.Nb.addressLink(types/* ChainId.Mainnet */.a_.Mainnet, identity) ?? '',
                            target: "_blank",
                            title: t.view_on_explorer(),
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                className: classes.linkIcon,
                                size: 14
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        tipable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(components/* TipButton */.X, {
                            addresses: [
                                identity
                            ],
                            receiver: visitingPersona.identifier,
                            className: classes.tipButton,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.tipButtonLabel,
                                children: t.tips()
                            })
                        }) : null,
                        deletable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* DeleteIcon */.p, {
                            className: classes.delButton,
                            onClick: ()=>onUnBind(identity)
                        }) : null
                    ]
                })
            ]
        });
    }
    return null;
});

// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(30318);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/UnbindPanelUI.tsx














const UnbindPanelUI_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        persona: {
            padding: theme.spacing(1.7),
            marginBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center'
        },
        iconContainer: {
            display: 'flex',
            alignItems: 'center',
            marginRight: '4px',
            width: 48,
            height: 48
        },
        name: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            color: theme.palette.text.primary,
            fontWeight: 500
        },
        identifier: {
            fontSize: 12,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            wordBreak: 'break-all'
        },
        subTitle: {
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 600,
            marginBottom: 11.5,
            color: theme.palette.text.primary
        },
        done: {
            background: '#60DFAB !important',
            color: `${entry/* MaskColorVar.white */.ZN.white} !important`
        },
        loadingIcon: {
            position: 'relative',
            right: -6
        },
        error: {
            color: (0,entry/* getMaskColor */.nb)(theme).redMain,
            paddingLeft: theme.spacing(0.5),
            borderLeft: `solid 2px ${(0,entry/* getMaskColor */.nb)(theme).redMain}`
        }
    })
);
const UnbindPanelUI_SUPPORTED_PLUGINS = [
    base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
];
var DialogTabs;
(function(DialogTabs) {
    DialogTabs[DialogTabs["persona"] = 0] = "persona";
    DialogTabs[DialogTabs["wallet"] = 1] = "wallet";
})(DialogTabs || (DialogTabs = {}));
const UnbindPanelUI = /*#__PURE__*/ (0,react.memo)(({ onPersonaSign , onWalletSign , currentPersona , signature , isBound , title , onClose , open , isCurrentAccount  })=>{
    const t = useI18N();
    const { classes  } = UnbindPanelUI_useStyles();
    const pluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const isSupported = UnbindPanelUI_SUPPORTED_PLUGINS.includes(pluginId);
    const isWalletSigned = !!signature.wallet.value;
    const isPersonaSigned = !!signature.persona.value;
    const state = (0,react.useState)(DialogTabs.persona);
    const tabProps = {
        tabs: [
            {
                label: t.persona(),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    mt: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.subTitle,
                            children: t.persona()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            className: classes.persona,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.iconContainer,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Masks/* MasksIcon */.s, {
                                        style: {
                                            fontSize: '48px'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.name,
                                            children: currentPersona?.nickname
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.identifier,
                                            children: (0,src/* formatPersonaFingerprint */.Nb)(currentPersona?.identifier.rawPublicKey ?? '', 10)
                                        })
                                    ]
                                })
                            ]
                        }),
                        !isSupported && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.error,
                            children: t.unsupported_network()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            my: 3,
                            children: t.unbind_persona_tip()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                            fullWidth: true,
                            disabled: !isBound || !!isPersonaSigned || !isSupported,
                            classes: {
                                loadingIndicatorEnd: classes.loadingIcon
                            },
                            loadingPosition: "end",
                            className: isPersonaSigned ? classes.done : '',
                            loading: signature.persona.loading,
                            variant: "contained",
                            onClick: onPersonaSign,
                            endIcon: isPersonaSigned ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                                sx: {
                                    color: entry/* MaskColorVar.white */.ZN.white
                                }
                            }) : null,
                            loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {}),
                            children: isPersonaSigned ? t.done() : t.persona_sign()
                        })
                    ]
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: t.wallet(),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    mt: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.subTitle,
                            children: t.wallet()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {
                            disableChange: true
                        }),
                        !isSupported && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.error,
                            children: t.unsupported_network()
                        }),
                        !isCurrentAccount && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.error,
                            children: t.unbind_wallet_same_account_error()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            my: 3,
                            children: t.unbind_wallet_tip()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                            fullWidth: true,
                            classes: {
                                loadingIndicatorEnd: classes.loadingIcon
                            },
                            loadingPosition: "end",
                            disabled: !isCurrentAccount || !!isWalletSigned || !isSupported,
                            className: isWalletSigned ? classes.done : '',
                            loading: signature.wallet.loading,
                            variant: "contained",
                            onClick: onWalletSign,
                            endIcon: isWalletSigned ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                                sx: {
                                    color: entry/* MaskColorVar.white */.ZN.white
                                }
                            }) : null,
                            loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {}),
                            children: isWalletSigned ? t.done() : t.wallet_sign()
                        })
                    ]
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        title: title,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            style: {
                padding: '24px'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                height: "auto",
                ...tabProps
            })
        })
    });
});

;// CONCATENATED MODULE: ./src/plugins/NextID/components/UnbindConfirm.tsx







const UnbindConfirm_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '24px !important'
        },
        title: {
            fontSize: '16px',
            fontWeight: 500,
            marginBottom: '24px'
        },
        content: {
            marginBottom: '36px',
            color: theme.palette.grey[700]
        },
        confirmButton: {
            width: '100%',
            marginBottom: '16px',
            backgroundColor: 'red',
            color: theme.palette.common.white
        },
        cancelButton: {
            width: '100%',
            marginBottom: '16px'
        }
    })
);
var UnbindConfirm_DialogTabs;
(function(DialogTabs) {
    DialogTabs[DialogTabs["persona"] = 0] = "persona";
    DialogTabs[DialogTabs["wallet"] = 1] = "wallet";
})(UnbindConfirm_DialogTabs || (UnbindConfirm_DialogTabs = {}));
const UnbindConfirm = /*#__PURE__*/ (0,react.memo)(({ onClose , unbindAddress , onConfirm  })=>{
    const t = useI18N();
    const { classes  } = UnbindConfirm_useStyles();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [isVisible, setVisible] = (0,react.useState)(true);
    const handleConfirm = ()=>{
        onConfirm();
        setVisible(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        open: !!unbindAddress && isVisible,
        maxWidth: "xs",
        title: "",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.title,
                    children: [
                        t.delete(),
                        " ",
                        Others?.formatAddress?.(unbindAddress, 4),
                        " \uFF1F"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.content,
                    children: t.disconnect_warning()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.confirmButton,
                    onClick: handleConfirm,
                    children: t.confirm()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.cancelButton,
                    onClick: onClose,
                    children: t.cancel()
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./src/plugins/NextID/components/UnbindDialog.tsx
















const UnbindDialog = /*#__PURE__*/ (0,react.memo)(({ unbindAddress , onClose , persona , onUnBound , bounds  })=>{
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const t = useI18N();
    const [openSecondDialog, setSecondDialog] = (0,react.useState)(false);
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const currentIdentifier = persona.identifier;
    const isBound = !!bounds.find((x)=>(0,base_src/* isSameAddress */.Wr)(x.identity, unbindAddress)
    );
    const { value: message  } = useBindPayload(src/* NextIDAction.Delete */.BU.Delete, unbindAddress, persona.identifier.publicKeyAsHex);
    const [personaSignState, handlePersonaSign] = usePersonaSign(message?.signPayload, currentIdentifier);
    const [walletSignState, handleWalletSign] = useWalletSign(message?.signPayload, unbindAddress);
    (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!personaSignState.value && !walletSignState.value) return;
        if (!message || !persona.identifier.publicKeyAsHex) return;
        try {
            await web3_providers_src/* NextIDProof.bindProof */.q7.bindProof(message.uuid, persona.identifier.publicKeyAsHex, src/* NextIDAction.Delete */.BU.Delete, src/* NextIDPlatform.Ethereum */.Vd.Ethereum, unbindAddress, message.createdAt, {
                walletSignature: walletSignState?.value,
                signature: personaSignState?.value?.signature.signature
            });
            showSnackbar(t.notify_wallet_sign_request_title(), {
                variant: 'success',
                message: t.notify_wallet_sign_request_success()
            });
            shared/* MaskMessages.events.ownProofChanged.sendToAll */.ql.events.ownProofChanged.sendToAll();
            await (0,esm/* delay */.gw)(2000);
            onUnBound();
            onClose();
        } catch  {
            showSnackbar(t.notify_wallet_sign_request_title(), {
                variant: 'error',
                message: t.notify_wallet_sign_request_failed()
            });
        }
    }, [
        walletSignState.value,
        personaSignState.value,
        unbindAddress
    ]);
    const handleConfirm = (0,react.useCallback)(()=>setSecondDialog(true)
    , []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UnbindConfirm, {
                unbindAddress: unbindAddress,
                onConfirm: handleConfirm,
                onClose: onClose
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UnbindPanelUI, {
                title: t.unbind_dialog_title(),
                onClose: onClose,
                open: !!unbindAddress && openSecondDialog,
                currentPersona: persona,
                onPersonaSign: handlePersonaSign,
                onWalletSign: handleWalletSign,
                isCurrentAccount: (0,base_src/* isSameAddress */.Wr)(account, unbindAddress),
                signature: {
                    persona: {
                        value: personaSignState.value?.signature.signature,
                        loading: personaSignState.loading
                    },
                    wallet: walletSignState
                },
                isBound: isBound
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/plugins/NextID/components/NextIdPage.tsx


















const NextIdPage_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        tip: {
            padding: theme.spacing(1.5),
            marginBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center',
            color: theme.palette.text.primary
        },
        verifyIntro: {
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '12px'
        },
        verifyDetail: {
            fontSize: '14px',
            fontWeight: 400,
            color: theme.palette.grey[700]
        },
        verifyInstruction: {
            fontSize: '14px',
            fontWeight: 400,
            color: theme.palette.grey[700]
        },
        skeleton: {
            borderRadius: 8,
            margin: theme.spacing(1),
            marginTop: 0,
            backgroundColor: theme.palette.background.default,
            height: '48px'
        }
    })
);
function NextIdPage({ personaList  }) {
    const t = useI18N();
    const { classes  } = NextIdPage_useStyles();
    const currentProfileIdentifier = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const visitingPersonaIdentifier = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const { reset , isVerified  } = (0,useNextID/* useNextIDConnectStatus */.EP)();
    const [openBindDialog, toggleBindDialog] = (0,react.useState)(false);
    const [unbindAddress, setUnBindAddress] = (0,react.useState)();
    const platform = social_network/* activatedSocialNetworkUI.configuration.nextIDConfig */.LM.configuration.nextIDConfig?.platform;
    const isOwn = currentProfileIdentifier.identifier === visitingPersonaIdentifier.identifier;
    const tipable = !isOwn;
    const personaActionButton = (0,react.useMemo)(()=>{
        if (!personaConnectStatus.action) return null;
        const button = personaConnectStatus.hasPersona ? t.connect_persona() : t.create_persona();
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            variant: "contained",
            onClick: personaConnectStatus.action,
            children: button
        });
    }, [
        personaConnectStatus,
        t
    ]);
    const { value: currentPersona , loading: loadingPersona  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!visitingPersonaIdentifier?.identifier) return;
        return service/* default.Identity.queryPersonaByProfile */.ZP.Identity.queryPersonaByProfile(visitingPersonaIdentifier.identifier);
    }, [
        visitingPersonaIdentifier,
        personaConnectStatus.hasPersona
    ]);
    const publicKeyAsHex = currentPersona?.identifier.publicKeyAsHex;
    const { value: isAccountVerified , loading: loadingVerifyInfo  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!publicKeyAsHex) return;
        if (!visitingPersonaIdentifier.identifier) return;
        return web3_providers_src/* NextIDProof.queryIsBound */.q7.queryIsBound(publicKeyAsHex, platform, visitingPersonaIdentifier.identifier.userId);
    }, [
        publicKeyAsHex,
        visitingPersonaIdentifier,
        isVerified
    ]);
    const { value: bindings , loading: loadingBindings , retry: retryQueryBinding ,  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!publicKeyAsHex) return;
        return web3_providers_src/* NextIDProof.queryExistedBindingByPersona */.q7.queryExistedBindingByPersona(publicKeyAsHex);
    }, [
        publicKeyAsHex
    ]);
    const onVerify = async ()=>{
        reset();
        const firstTab = constants/* TAB_SELECTOR */.tt?.[platform]?.evaluate()?.querySelector('div')?.parentNode?.firstChild;
        firstTab.click();
    };
    const ethereumProofs = (0,react.useMemo)(()=>{
        const proofs = bindings?.proofs.filter((proof)=>proof.platform === src/* NextIDPlatform.Ethereum */.Vd.Ethereum
        );
        return proofs ? (0,uniqBy/* default */.Z)(proofs, (v)=>v.identity
        ) : src/* EMPTY_LIST */.rP;
    }, [
        bindings?.proofs
    ]);
    if (personaActionButton && isOwn) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
            justifyContent: "center",
            direction: "row",
            mt: "24px",
            children: personaActionButton
        });
    }
    if (loadingBindings || loadingPersona || loadingVerifyInfo) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: Array.from({
                length: 2
            }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        className: classes.skeleton,
                        animation: "wave",
                        variant: "rectangular"
                    })
                }, i)
            )
        });
    }
    if (!isAccountVerified && isOwn) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.tip,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.verifyIntro,
                            children: t.verify_Twitter_ID_intro()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.verifyDetail,
                            children: t.verify_Twitter_ID()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    justifyContent: "center",
                    direction: "row",
                    mt: "24px",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        onClick: onVerify,
                        children: t.verify_Twitter_ID_button()
                    })
                })
            ]
        });
    }
    if (ethereumProofs.length) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            children: ethereumProofs.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(BindingItem, {
                                    deletable: isOwn,
                                    tipable: tipable,
                                    platform: x.platform,
                                    identity: x.identity,
                                    onUnBind: setUnBindAddress
                                }, x.identity)
                            )
                        }),
                        isOwn && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                            justifyContent: "center",
                            direction: "row",
                            mt: "24px",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "contained",
                                onClick: ()=>toggleBindDialog(true)
                                ,
                                children: t.add_wallet_button()
                            })
                        })
                    ]
                }),
                openBindDialog && currentPersona && isOwn && /*#__PURE__*/ (0,jsx_runtime.jsx)(BindDialog, {
                    open: openBindDialog,
                    onClose: ()=>toggleBindDialog(false)
                    ,
                    persona: currentPersona,
                    bounds: bindings?.proofs ?? src/* EMPTY_LIST */.rP,
                    onBound: retryQueryBinding
                }),
                unbindAddress && currentPersona && isOwn && /*#__PURE__*/ (0,jsx_runtime.jsx)(UnbindDialog, {
                    unbindAddress: unbindAddress,
                    onClose: ()=>setUnBindAddress(undefined)
                    ,
                    persona: currentPersona,
                    onUnBound: retryQueryBinding,
                    bounds: bindings?.proofs ?? src/* EMPTY_LIST */.rP
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    isOwn ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.tip,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.verifyIntro,
                                children: t.verify_wallet_intro()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.verifyDetail,
                                children: t.verify_wallet()
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.tip,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.verifyIntro,
                                children: t.connect_wallet__other_user_tip_intro()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.verifyInstruction,
                                children: t.connect_wallet_other_user_instruction()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.verifyDetail,
                                children: t.connect_wallet_other_user_tip1()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.verifyDetail,
                                children: t.connect_wallet_other_user_tip2()
                            })
                        ]
                    }),
                    isOwn && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        justifyContent: "center",
                        direction: "row",
                        mt: "24px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "contained",
                            onClick: ()=>toggleBindDialog(true)
                            ,
                            children: t.verify_wallet_button()
                        })
                    })
                ]
            }),
            openBindDialog && currentPersona && isOwn && /*#__PURE__*/ (0,jsx_runtime.jsx)(BindDialog, {
                open: openBindDialog,
                onClose: ()=>toggleBindDialog(false)
                ,
                persona: currentPersona,
                bounds: bindings?.proofs ?? src/* EMPTY_LIST */.rP,
                onBound: retryQueryBinding
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/NextID/SNSAdaptor/index.tsx





const sns = {
    ...base/* base */.u,
    init () {},
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_tabContent`,
            label: 'Wallets',
            priority: 10,
            UI: {
                TabContent: ({ personaList =src/* EMPTY_LIST */.rP  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NextIdPage, {
                        personaList: personaList
                    })
            }
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ })

}]);