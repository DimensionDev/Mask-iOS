(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6141],{

/***/ 69157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ TabContext),
/* harmony export */   "_i": () => (/* binding */ useTabContext),
/* harmony export */   "pQ": () => (/* binding */ getTabId),
/* harmony export */   "uU": () => (/* binding */ getPanelId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71999);


/**
 * @type {React.Context<{ idPrefix: string; value: string } | null>}
 */


const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

function useUniquePrefix() {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}

function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, {
    value: context,
    children: children
  });
}
 false ? 0 : void 0;
/**
 * @returns {unknown}
 */

function useTabContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-T-${value}`;
}

/***/ }),

/***/ 37101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(51911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(2633);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(88516);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.76_31fee5138b61bcdeb416e3946f47cd38/node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(44007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.76_31fee5138b61bcdeb416e3946f47cd38/node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72755);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.76_31fee5138b61bcdeb416e3946f47cd38/node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(94282);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(69157);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabPanelUtilityClass, classes);
};

const TabPanelRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
const TabPanel = /*#__PURE__*/react.forwardRef(function TabPanel(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabPanel'
  });

  const {
    children,
    className,
    value
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(ownerState);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m["default"])(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    ownerState: ownerState
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ }),

/***/ 44309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ detectScrollType),
/* harmony export */   "T": () => (/* binding */ getNormalizedScrollLeft)
/* harmony export */ });
// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ 35886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(80480);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


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

/***/ 77522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30232);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2921);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6823);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27536);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85139);




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
                    height: height,
                    minHeight: height
                }
            }) : null
        ]
    });
};


/***/ }),

/***/ 51257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ WalletStatusBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90869);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56911);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(78216);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(65506);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37253);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93775);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37731);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30232);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78144);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53242);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67071);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2666);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84797);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6955);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5027);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83463);
















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme, { isDashboard  })=>({
        content: {
            padding: theme.spacing(2, 3, 3)
        },
        currentAccount: {
            padding: theme.spacing(1.5),
            marginBottom: theme.spacing(2),
            display: 'flex',
            backgroundColor: isDashboard ? (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .nb)(theme).primaryBackground2 : theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center'
        },
        dashboardBackground: {
            background: theme.palette.background.default
        },
        accountInfo: {
            fontSize: 16,
            flexGrow: 1,
            marginLeft: theme.spacing(1)
        },
        accountName: {
            fontSize: 16,
            marginRight: 6
        },
        infoRow: {
            display: 'flex',
            alignItems: 'center'
        },
        actionButton: {
            fontSize: 12,
            marginLeft: theme.spacing(1),
            padding: theme.spacing(1, 2)
        },
        address: {
            fontSize: 16,
            marginRight: theme.spacing(1),
            display: 'inline-block'
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
        twitterProviderBorder: {
            width: 14,
            height: 14
        },
        connectButtonWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: theme.spacing(2, 0)
        },
        domain: {
            fontSize: 16,
            lineHeight: '18px',
            marginLeft: 6,
            padding: 4,
            borderRadius: 8,
            backgroundColor: '#ffffff',
            color: theme.palette.common.black
        }
    })
);
function WalletStatusBox(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .useI18N */ .M1)();
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isDashboardPage */ .K2)();
    const { classes  } = useStyles({
        isDashboard
    });
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useChainId */ .xx)();
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useAccount */ .mA)();
    const wallet = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useWallet */ .Os)();
    const providerType = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useProviderType */ ._o)();
    const providerDescriptor = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useProviderDescriptor */ .fY)();
    const networkDescriptor = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useNetworkDescriptor */ .Vw)();
    const { Utils  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3State */ .dM)() ?? {};
    const { value: domain  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useReverseAddress */ .$q)(account);
    // #region copy addr to clipboard
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const onCopy = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_7__/* .useSnackbarCallback */ .iD)(async (ev)=>{
        ev.stopPropagation();
        copyToClipboard(account);
    }, [], undefined, undefined, undefined, t('copy_success_of_wallet_addr'));
    // #endregion
    // #region change provider
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // #endregion
    // #region walletconnect
    const { setDialog: setWalletConnectDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.walletConnectQRCodeDialogUpdated */ .R.events.walletConnectQRCodeDialogUpdated);
    // #endregion
    const onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        switch(providerType){
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect:
                setWalletConnectDialog({
                    open: true,
                    uri: await _extension_service__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Ethereum.createConnectionURI */ .ZP.Ethereum.createConnectionURI()
                });
                break;
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.Fortmatic */ .lP.Fortmatic:
                await _extension_service__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Ethereum.disconnectFortmatic */ .ZP.Ethereum.disconnectFortmatic(chainId);
                break;
        }
    }, [
        chainId,
        providerType,
        setWalletConnectDialog
    ]);
    return account ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.currentAccount, props.isDashboard ? classes.dashboardBackground : ''),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_7__/* .WalletIcon */ .o, {
                size: 48,
                badgeSize: 16,
                networkIcon: providerDescriptor?.icon,
                providerIcon: networkDescriptor?.icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.accountInfo,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.infoRow,
                        style: {
                            marginBottom: 6
                        },
                        children: providerType !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.MaskWallet */ .lP.MaskWallet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            className: classes.accountName,
                            children: domain && Utils?.formatDomainName ? Utils.formatDomainName(domain) : providerDescriptor?.name
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    className: classes.accountName,
                                    children: wallet?.name ?? providerDescriptor?.name
                                }),
                                domain && Utils?.formatDomainName ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    className: classes.domain,
                                    children: Utils.formatDomainName(domain)
                                }) : null
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.infoRow,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                className: classes.address,
                                variant: "body2",
                                title: account,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_7__/* .FormattedAddress */ .Kv, {
                                    address: account,
                                    size: 4,
                                    formatter: Utils?.formatAddress
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                className: classes.link,
                                underline: "none",
                                component: "button",
                                title: t('wallet_status_button_copy_address'),
                                onClick: onCopy,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    className: classes.linkIcon,
                                    size: 14
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                className: classes.link,
                                href: Utils?.resolveAddressLink?.(chainId, account) ?? '',
                                target: "_blank",
                                title: t('plugin_wallet_view_on_explorer'),
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    className: classes.linkIcon,
                                    size: 14
                                })
                            })
                        ]
                    })
                ]
            }),
            !props.disableChange && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                children: [
                    providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect || providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.Fortmatic */ .lP.Fortmatic ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_11__/* .ActionButtonPromise */ .Zc, {
                        className: classes.actionButton,
                        color: "primary",
                        size: "small",
                        variant: "contained",
                        init: t('wallet_status_button_disconnect'),
                        waiting: t('wallet_status_button_disconnecting'),
                        failed: t('failed'),
                        complete: t('done'),
                        executor: onDisconnect,
                        completeIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                        failIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.actionButton),
                        variant: "contained",
                        size: "small",
                        onClick: openSelectProviderDialog,
                        children: t('wallet_status_button_change')
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: classes.connectButtonWrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.actionButton),
            color: "primary",
            variant: "contained",
            size: "small",
            onClick: openSelectProviderDialog,
            children: t('plugin_wallet_on_connect')
        })
    });
}


/***/ }),

/***/ 3178:
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
// EXTERNAL MODULE: ./src/plugins/FindTruman/base.ts
var base = __webpack_require__(29676);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(35555);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(81148);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/context.ts

const FindTrumanContext = (0,react.createContext)(null);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(48672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(3543);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTrumanCard.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            minHeight: 120,
            padding: 0,
            border: `solid 1px ${theme.palette.divider}`,
            margin: `${theme.spacing(2)} auto`,
            marginBottom: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        },
        header: {
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
        },
        title: {
            display: 'flex',
            alignItems: 'center'
        }
    };
});
function FindTrumanCard(props) {
    const { title , children  } = props;
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        variant: "outlined",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                className: classes.header,
                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                className: classes.content,
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/LoadingFailCard.tsx




class LoadingFailCard extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return this.props.isFullPluginDown ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to FindTruman API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "outlined",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(FindTrumanCard, {
                title: this.props.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to FindTruman API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "outlined",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardMedia/CardMedia.js + 1 modules
var CardMedia = __webpack_require__(13723);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(26405);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(30103);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(46995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(80579);
// EXTERNAL MODULE: ./src/plugins/FindTruman/types.ts
var types = __webpack_require__(9098);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(23501);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/LinearProgress/linearProgressClasses.js
var linearProgressClasses = __webpack_require__(88989);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/Adjust.js
var Adjust = __webpack_require__(94584);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/CheckCircle.js
var CheckCircle = __webpack_require__(34792);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/ResultCard.tsx







const BorderLinearProgress = (0,styled/* default */.ZP)(LinearProgress/* default */.Z)(({ theme  })=>({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses/* default.colorPrimary */.Z.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
        },
        [`& .${linearProgressClasses/* default.bar */.Z.bar}`]: {
            borderRadius: 5
        }
    })
);
const useResultStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        answerChip: {
            backgroundColor: theme.palette.mode === 'light' ? '#2e7d32' : '#66bb6a',
            color: theme.palette.mode === 'light' ? '#fff' : '#EFF3F4'
        }
    };
});
function ResultCard(props) {
    const { type , userStatus , result  } = props;
    const { classes  } = useResultStyles();
    const [choice] = (0,react.useState)(userStatus ? userStatus.choice : -1);
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const total1 = result?.count && result.count.length > 0 ? result.count.reduce((total, e)=>{
        return {
            choice: -1,
            value: total.value + e.value
        };
    }).value : 1;
    const answer = result ? type === types/* PostType.PuzzleResult */.hQ.PuzzleResult ? result.correct : result.result : -1;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
        children: [
            answer === -1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                severity: "info",
                children: t(type === types/* PostType.PuzzleResult */.hQ.PuzzleResult ? 'plugin_find_truman_puzzle_underway' : 'plugin_find_truman_voting_underway')
            }),
            answer !== -1 && result && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: result.question
                    }),
                    result.options.map((option, index)=>{
                        const value = result.count.find((e)=>e.choice === index
                        )?.value || 0;
                        const percent = (total1 > 0 ? value * 100 / total1 : 0).toFixed(2);
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                            variant: "outlined",
                            sx: {
                                padding: '12px 18px',
                                borderRadius: '16px',
                                marginBottom: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        display: 'flex',
                                        rowGap: '8px',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        marginBottom: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'top'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                    sx: {
                                                        marginRight: '8px'
                                                    },
                                                    size: "small",
                                                    label: `${value} ${t(value > 1 ? 'plugin_find_truman_votes' : 'plugin_find_truman_vote')}`
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    color: "textPrimary",
                                                    sx: {
                                                        fontSize: '13px',
                                                        lineHeight: '24px'
                                                    },
                                                    children: option
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                            direction: "row",
                                            spacing: 1,
                                            children: [
                                                choice === index && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Adjust/* default */.Z, {}),
                                                    size: "small",
                                                    color: "primary",
                                                    label: t('plugin_find_truman_selected')
                                                }),
                                                answer === index && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircle/* default */.Z, {}),
                                                    className: classes.answerChip,
                                                    color: "success",
                                                    size: "small",
                                                    label: t(type === types/* PostType.PuzzleResult */.hQ.PuzzleResult ? 'plugin_find_truman_answer' : 'plugin_find_truman_result')
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        columnGap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            sx: {
                                                flex: 1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderLinearProgress, {
                                                value: Number(percent),
                                                variant: "determinate"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            sx: {
                                                width: 54
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: [
                                                    percent,
                                                    "%"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, option);
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Snackbar/Snackbar.js + 1 modules
var Snackbar = __webpack_require__(47393);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/RadioButtonChecked.js
var RadioButtonChecked = __webpack_require__(41592);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/RadioButtonUnchecked.js
var RadioButtonUnchecked = __webpack_require__(2444);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/DoneOutlined.js
var DoneOutlined = __webpack_require__(83120);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/Send.js
var Send = __webpack_require__(21671);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/RefreshOutlined.js
var RefreshOutlined = __webpack_require__(17441);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(63258);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/NoNftCard.tsx





const NoNftCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        card: {
            borderRadius: '6px',
            ':not(:last-child)': {
                marginBottom: '8px'
            },
            display: 'flex',
            flexDirection: 'column'
        },
        content: {
            flex: 1
        },
        title: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#fff',
            textTransform: 'uppercase'
        }
    };
});
function NoNftCard(props) {
    const { conditions , sx  } = props;
    const { classes  } = NoNftCard_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const renderNftCard = (title, img, url, count, address)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
            item: true,
            xs: 6,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.card,
                variant: "outlined",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardMedia/* default */.Z, {
                        component: "img",
                        image: img
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                gutterBottom: true,
                                variant: "h5",
                                component: "div",
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                color: "textSecondary",
                                children: t('plugin_find_truman_buy_nft_tip', {
                                    count,
                                    name: title
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        sx: {
                            justifyContent: 'flex-end'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            onClick: (e)=>{
                                e.stopPropagation();
                            },
                            component: "a",
                            href: url,
                            variant: "contained",
                            target: "_blank",
                            size: "small",
                            children: t('plugin_find_truman_buy')
                        })
                    })
                ]
            }, address)
        }, title);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        justifyContent: "space-around",
        sx: {
            ...sx || {}
        },
        children: conditions.map((condition)=>renderNftCard(condition.name, condition.img, condition.url, condition.minAmount, condition.address)
        )
    });
};

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/OptionsCard.tsx









const useOptionsStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        progressOption: {
            transition: 'all .5s',
            padding: '12px 18px',
            borderRadius: '16px',
            '&:hover': {
                background: `rgba(28, 23, 26, ${theme.palette.mode === 'dark' ? '.75' : '.05'})`
            },
            '&:active': {
                background: `rgba(28, 23, 26, ${theme.palette.mode === 'dark' ? '.15' : '.15'})`
            },
            ':not(:last-child)': {
                marginBottom: '8px'
            }
        },
        blockChip: {
            width: '100%',
            marginBottom: 8,
            justifyContent: 'space-between',
            minHeight: '39px',
            height: 'fit-content',
            fontSize: '13px',
            padding: '8px',
            transition: 'all .3s'
        },
        blockChipSelected: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main
            }
        },
        checkIcon: {},
        horizontalScrollBar: {
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                height: '8px'
            },
            '::-webkit-scrollbar-thumb:horizontal': {
                backgroundColor: theme.palette.divider,
                borderRadius: '16px',
                border: `6px solid ${theme.palette.divider}`
            }
        },
        verticalScrollBar: {
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: '6px'
            },
            '::-webkit-scrollbar-thumb:vertical': {
                backgroundColor: theme.palette.divider,
                borderRadius: '16px',
                border: `6px solid ${theme.palette.divider}`
            }
        }
    };
});
function OptionsCard(props) {
    const { userStatus: userStatus1 , onSubmit  } = props;
    const [selected, setSelected] = (0,react.useState)(true);
    const [choice, setChoice] = (0,react.useState)(userStatus1 ? userStatus1.choice : -1);
    const [submitting, setSubmitting] = (0,react.useState)(false);
    const [error1, setError] = (0,react.useState)('');
    const [snackVisible, setSnackVisible] = (0,react.useState)(false);
    const { classes , cx  } = useOptionsStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const parentRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        setError('');
        userStatus1 && userStatus1.notMeetConditions.length > 0 && setError('insufficient-nft');
    }, [
        userStatus1
    ]);
    (0,react.useEffect)(()=>{
        setChoice(userStatus1 ? userStatus1.choice : -1);
        setSelected(userStatus1 ? userStatus1.choice !== -1 : true);
    }, [
        userStatus1
    ]);
    const renderOptions = (userStatus)=>{
        const showCount = !!userStatus.count;
        const total1 = userStatus.count ? userStatus.count.reduce((total, e)=>{
            return {
                choice: -1,
                value: total.value + e.value
            };
        }).value : 0;
        return userStatus.options.map((option, index)=>{
            const count = userStatus.count ? userStatus.count.find((e)=>e.choice === index
            )?.value || 0 : 0;
            const percent = (total1 > 0 ? count * 100 / total1 : 0).toFixed(2);
            const isSelected = choice === index;
            return userStatus.count ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                sx: choice !== index ? {
                    cursor: 'pointer'
                } : {},
                className: classes.progressOption,
                variant: "outlined",
                onClick: !submitting && !selected && !error1 && userStatus.status !== 0 ? ()=>{
                    setChoice(index);
                } : undefined,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            rowGap: '8px',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            marginBottom: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'top'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                        sx: {
                                            marginRight: '8px'
                                        },
                                        size: "small",
                                        label: `${count} ${t(count > 1 ? 'plugin_find_truman_votes' : 'plugin_find_truman_vote')}`
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        color: "textPrimary",
                                        sx: {
                                            fontSize: '13px',
                                            lineHeight: '24px'
                                        },
                                        children: option
                                    })
                                ]
                            }),
                            isSelected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButtonChecked/* default */.Z, {}),
                                size: "small",
                                color: "primary",
                                label: t('plugin_find_truman_selected')
                            }) : selected ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                sx: {
                                    cursor: 'pointer'
                                },
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButtonUnchecked/* default */.Z, {}),
                                size: "small",
                                color: "default",
                                label: t('plugin_find_truman_unselect')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    flex: 1
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderLinearProgress, {
                                    value: Number(percent),
                                    variant: "determinate"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    width: 54
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: [
                                        percent,
                                        "%"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }, option) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    position: 'relative'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                    id: "submit",
                    className: cx(classes.blockChip, isSelected && classes.blockChipSelected),
                    label: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-all'
                        },
                        children: option
                    }),
                    onClick: !selected && !error1 && userStatus.status !== 0 ? ()=>{
                        setChoice(index);
                    } : undefined,
                    disabled: submitting,
                    deleteIcon: isSelected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DoneOutlined/* default */.Z, {}) : undefined,
                    onDelete: isSelected ? ()=>{} : undefined,
                    color: showCount ? 'default' : isSelected ? 'primary' : 'default',
                    variant: showCount ? 'outlined' : isSelected ? 'filled' : 'outlined'
                })
            }, index);
        });
    };
    const handleSubmit = (0,react.useCallback)(async ()=>{
        setSubmitting(true);
        try {
            await onSubmit(choice);
        } catch (error) {
            throw error;
        } finally{
            setSubmitting(false);
        }
    }, [
        choice
    ]);
    const renderSubmitButton = (userStatus)=>{
        const isClosed = userStatus.status === 0;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            style: {
                textAlign: 'right',
                marginTop: '8px',
                paddingBottom: '8px'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                color: selected ? 'success' : 'primary',
                variant: "contained",
                disabled: selected || isClosed || choice === -1,
                init: t(selected ? 'plugin_find_truman_submitted' : isClosed ? 'plugin_find_truman_vote_finish' : 'plugin_find_truman_submit'),
                waiting: t('plugin_find_truman_submitting'),
                failed: t('plugin_find_truman_submit_failed'),
                complete: t('plugin_find_truman_submitted'),
                executor: handleSubmit,
                failedOnClick: "use executor",
                startIcon: isClosed || selected ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(Send/* default */.Z, {}),
                completeIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoneOutlined/* default */.Z, {}),
                failIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RefreshOutlined/* default */.Z, {})
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
        ref: parentRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.Z, {
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                },
                open: snackVisible,
                onClose: ()=>setSnackVisible(false)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                    onClose: ()=>setSnackVisible(false)
                    ,
                    variant: "filled",
                    severity: "error",
                    sx: {
                        width: '100%'
                    },
                    children: t('plugin_find_truman_submit_failed')
                })
            }),
            userStatus1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: userStatus1.question
                    }),
                    renderOptions(userStatus1),
                    !error1 && renderSubmitButton(userStatus1),
                    userStatus1.notMeetConditions.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                                severity: "info",
                                sx: {
                                    mb: 1
                                },
                                children: t('plugin_find_truman_insufficient_nft')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NoNftCard, {
                                conditions: userStatus1.notMeetConditions
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/Footer.tsx





const Footer_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        footer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            minHeight: '48px',
            flexWrap: 'wrap',
            rowGap: '8px'
        },
        chip: {
            ':not(:last-child)': {
                marginRight: '8px'
            }
        }
    };
});
function Footer() {
    const { const: consts  } = (0,react.useContext)(FindTrumanContext);
    const { classes  } = Footer_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.footer,
        children: [
            consts && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                rel: "noopener noreferrer",
                component: "a",
                target: "_blank",
                href: consts.faqUrl,
                variant: "body2",
                sx: {
                    fontWeight: 'bold',
                    fontSize: '12px'
                },
                children: consts.faqLabel
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                flexWrap: "wrap",
                rowGap: 1,
                direction: "row",
                children: consts?.icons.map((e)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        className: classes.chip,
                        size: "small",
                        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            alt: "FindTruman",
                            src: e.icon
                        }),
                        label: e.label,
                        variant: "outlined",
                        clickable: true,
                        component: "a",
                        target: "_blank",
                        href: e.url
                    }, e.label)
                )
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/StageCard.tsx





function StageCard(props) {
    const { userStoryStatus  } = props;
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const renderProgress = (total, success, color)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    sx: {
                        width: '100%',
                        mr: 1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderLinearProgress, {
                        color: color,
                        value: total > 0 ? success * 100 / total : 0,
                        variant: "determinate"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        justifyContent: 'flex-end'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        color: "text.secondary",
                        children: [
                            success,
                            "/",
                            total
                        ]
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
        children: userStoryStatus && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            sx: {
                                padding: '0 24px'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "h6",
                                    color: "text.primary",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_dialog_critical')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        t('plugin_find_truman_puzzle_rate'),
                                        userStoryStatus.critical.total > 0 ? (userStoryStatus.critical.correct * 100 / userStoryStatus.critical.total).toFixed(2) : '0.00',
                                        "%"
                                    ]
                                }),
                                renderProgress(userStoryStatus.critical.total, userStoryStatus.critical.correct, 'success'),
                                userStoryStatus.critical.waiting === 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.critical.waiting,
                                        t('plugin_find_truman_puzzle_to_be_revealed')
                                    ]
                                }),
                                userStoryStatus.critical.waiting > 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.critical.waiting,
                                        t('plugin_find_truman_polls_to_be_revealed')
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            sx: {
                                padding: '0 24px'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "h6",
                                    color: "text.primary",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_dialog_noncritical')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        t('plugin_find_truman_voting_rate'),
                                        userStoryStatus.nonCritical.total > 0 ? (userStoryStatus.nonCritical.correct * 100 / userStoryStatus.nonCritical.total).toFixed(2) : '0.00',
                                        "%"
                                    ]
                                }),
                                renderProgress(userStoryStatus.nonCritical.total, userStoryStatus.nonCritical.correct, 'secondary'),
                                userStoryStatus.nonCritical.waiting === 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.nonCritical.waiting,
                                        t('plugin_find_truman_poll_to_be_revealed')
                                    ]
                                }),
                                userStoryStatus.nonCritical.waiting > 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.nonCritical.waiting,
                                        t('plugin_find_truman_polls_to_be_revealed')
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(24);
// EXTERNAL MODULE: ./src/plugins/FindTruman/Worker/apis/index.ts
var apis = __webpack_require__(60784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FlipCard.tsx


var FlipCardChildType;
(function(FlipCardChildType) {
    FlipCardChildType[FlipCardChildType["FRONT"] = 0] = "FRONT";
    FlipCardChildType[FlipCardChildType["BACK"] = 1] = "BACK";
})(FlipCardChildType || (FlipCardChildType = {}));
const FlipCardRotateDegree = {
    noFlipped: 0,
    frontRotate: 180,
    backRotate: -180
};
const FlipCard = (props)=>{
    const { cardStyles , cardZIndex , containerStyle , flipDirection , flipSpeedFrontToBack , flipSpeedBackToFront , infinite ,  } = props;
    const [isFlipped, setFlipped] = (0,react.useState)(props.isFlipped);
    const [rotation, setRotation] = (0,react.useState)(FlipCardRotateDegree.noFlipped);
    (0,react.useEffect)(()=>{
        if (props.isFlipped === isFlipped) return;
        setFlipped(props.isFlipped);
        setRotation((c)=>c + FlipCardRotateDegree.frontRotate
        );
    }, [
        props.isFlipped
    ]);
    const getComponent = (key)=>{
        return props.children[key];
    };
    const frontRotateY = `rotateY(${infinite ? rotation : isFlipped ? FlipCardRotateDegree.frontRotate : FlipCardRotateDegree.noFlipped}deg)`;
    const backRotateY = `rotateY(${infinite ? rotation + FlipCardRotateDegree.frontRotate : isFlipped ? FlipCardRotateDegree.noFlipped : FlipCardRotateDegree.backRotate}deg)`;
    const frontRotateX = `rotateX(${infinite ? rotation : isFlipped ? FlipCardRotateDegree.frontRotate : FlipCardRotateDegree.noFlipped}deg)`;
    const backRotateX = `rotateX(${infinite ? rotation + FlipCardRotateDegree.frontRotate : isFlipped ? FlipCardRotateDegree.noFlipped : FlipCardRotateDegree.backRotate}deg)`;
    const styles = {
        back: {
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            height: '100%',
            left: '0',
            position: isFlipped ? 'relative' : 'absolute',
            top: '0',
            transform: flipDirection === 'horizontal' ? backRotateY : backRotateX,
            transformStyle: 'preserve-3d',
            transition: `${flipSpeedFrontToBack}s`,
            width: '100%',
            ...cardStyles?.back
        },
        container: {
            perspective: '1000px',
            zIndex: cardZIndex
        },
        flipper: {
            height: '100%',
            position: 'relative',
            width: '100%'
        },
        front: {
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            height: '100%',
            left: '0',
            position: isFlipped ? 'absolute' : 'relative',
            top: '0',
            transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
            transformStyle: 'preserve-3d',
            transition: `${flipSpeedBackToFront}s`,
            width: '100%',
            zIndex: '2',
            ...cardStyles?.front
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            ...styles.container,
            ...containerStyle
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: styles.flipper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: styles.front,
                    children: getComponent(FlipCardChildType.FRONT)
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: styles.back,
                    children: getComponent(FlipCardChildType.BACK)
                })
            ]
        })
    });
};
FlipCard.defaultProps = {
    cardStyles: {
        back: {},
        front: {}
    },
    cardZIndex: 'auto',
    containerStyle: {},
    flipDirection: 'horizontal',
    flipSpeedBackToFront: 0.6,
    flipSpeedFrontToBack: 0.6,
    infinite: false,
    isFlipped: false
};
/* harmony default export */ const SNSAdaptor_FlipCard = (FlipCard);

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/EncryptionCard.tsx









const EncryptionCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            color: 'inherit',
            fontSize: 'inherit',
            fontFamily: 'sans-serif',
            '& p': {
                margin: 0
            },
            '& p + p': {
                marginTop: theme.spacing(0.5)
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
                fontSize: 14
            },
            '& img': {
                maxWidth: '100%'
            },
            '& a': {
                color: theme.palette.text.primary
            }
        },
        card: {
            borderRadius: '6px',
            ':not(:last-child)': {
                marginBottom: '8px'
            },
            display: 'flex',
            flexDirection: 'column'
        }
    };
});
function EncryptionCard(props) {
    const { clueId  } = props;
    const { classes  } = EncryptionCard_useStyles();
    const { address , t  } = (0,react.useContext)(FindTrumanContext);
    const [flipped, setFlipped] = (0,react.useState)(false);
    const [backImgHeight, setBackImgHeight] = (0,react.useState)(0);
    const { value: clue , error  } = (0,useAsync/* default */.Z)(async ()=>{
        return clueId ? (0,apis/* fetchClue */.aE)(clueId, address) : {
            decrypted: false,
            conditions: undefined,
            frontImg: '',
            backImg: ''
        };
    }, [
        clueId,
        address
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
        children: [
            clue && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "text.secondary",
                        children: t('plugin_find_truman_decrypted_by')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                        sx: {
                            margin: '8px 0'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                        sx: {
                            display: 'flex',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            style: {
                                width: 250
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SNSAdaptor_FlipCard, {
                                isFlipped: flipped,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        onLoad: ({ currentTarget  })=>{
                                            setBackImgHeight(currentTarget.parentElement?.offsetHeight || 0);
                                        },
                                        onClick: ({ currentTarget  })=>{
                                            setBackImgHeight(currentTarget.parentElement?.offsetHeight || 0);
                                            backImgHeight && setFlipped(true);
                                        },
                                        src: clue.backImg,
                                        style: {
                                            width: '100%',
                                            objectFit: 'cover',
                                            cursor: 'pointer'
                                        }
                                    }),
                                    clue.decrypted ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        onClick: ()=>setFlipped(false)
                                        ,
                                        src: clue.frontImg,
                                        style: {
                                            width: '100%',
                                            objectFit: 'cover',
                                            cursor: 'pointer'
                                        }
                                    }) : clue.conditions ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ClueConditionCard, {
                                        cardHeight: backImgHeight,
                                        onClick: ()=>setFlipped(false)
                                        ,
                                        conditions: clue.conditions
                                    }) : null
                                ]
                            })
                        })
                    })
                ]
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                severity: "info",
                children: t('plugin_find_truman_decrypt_error_clue_id')
            })
        ]
    });
};
function ClueConditionCard(props) {
    const { cardHeight , onClick , conditions  } = props;
    const { classes  } = EncryptionCard_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.card,
        variant: "outlined",
        onClick: onClick,
        sx: {
            height: cardHeight || 'auto',
            cursor: 'pointer'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h6",
                    component: "div",
                    children: t('plugin_find_truman_decrypt_tip')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                    sx: {
                        margin: '8px 0'
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: conditions.conditions?.map((condition, index)=>{
                        switch(condition.type){
                            case types/* ClueConditionType.Erc721 */.Ym.Erc721:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        variant: "body1",
                                        fontWeight: "bold",
                                        color: "text.primary",
                                        gutterBottom: true,
                                        children: [
                                            index + 1,
                                            ". ",
                                            condition.minAmount,
                                            " ",
                                            condition.name
                                        ]
                                    })
                                }, index);
                            case types/* ClueConditionType.Or */.Ym.Or:
                                return condition.conditions && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            variant: "body1",
                                            fontWeight: "bold",
                                            color: "text.primary",
                                            children: [
                                                index + 1,
                                                ". ",
                                                t('plugin_find_truman_decrypt_tip_community')
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                            children: condition.conditions.map((c, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                        variant: "body2",
                                                        color: "text.primary",
                                                        children: [
                                                            c.minAmount,
                                                            " ",
                                                            c.name
                                                        ]
                                                    }, c.name)
                                                }, c.name)
                                            )
                                        })
                                    ]
                                }, index);
                            default:
                                return null;
                        }
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(7284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/KeyRounded.js
var KeyRounded = __webpack_require__(15675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/CheckRounded.js
var CheckRounded = __webpack_require__(97260);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/ClearRounded.js
var ClearRounded = __webpack_require__(53884);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/CompletionCard.tsx








const CompletionCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        successButton: {
            backgroundColor: theme.palette.mode === 'light' ? '#2e7d32' : '#66bb6a',
            color: theme.palette.mode === 'light' ? '#fff' : 'rgba(0, 0, 0, .87)',
            '&:hover': {
                backgroundColor: theme.palette.mode === 'light' ? '#1B5E20' : '#388E3C'
            }
        },
        errorButton: {},
        helperText: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(1)
        },
        helperTextIcon: {
            marginRight: '8px',
            fontSize: '20px'
        },
        helperTextContent: {
            fontSize: '14px'
        }
    })
);
function CompletionCard(props) {
    const { completionStatus , onSubmit  } = props;
    const [submitted, setSubmitted] = (0,react.useState)(completionStatus?.answered);
    const [questions, setQuestions] = (0,react.useState)(completionStatus?.questions ?? []);
    const [submitting, setSubmitting] = (0,react.useState)(false);
    const [error1, setError] = (0,react.useState)('');
    const [snackVisible, setSnackVisible] = (0,react.useState)(false);
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const { classes  } = CompletionCard_useStyles();
    (0,react.useEffect)(()=>{
        setError('');
        if (!completionStatus) return;
        setQuestions(completionStatus.questions);
        setSubmitted(completionStatus.answered);
        !!completionStatus.notMeetConditions.length && setError('insufficient-nft');
    }, [
        completionStatus
    ]);
    const handleSubmit = (0,react.useCallback)(async ()=>{
        setSubmitting(true);
        try {
            await onSubmit(completionStatus?.id ?? '', questions.map((e)=>({
                    id: e.id,
                    answer: e.answer || ''
                })
            ));
        } catch (error) {
            throw error;
        } finally{
            setSubmitting(false);
        }
    }, [
        questions.map((e)=>e.answer
        ).join(',')
    ]);
    const enabled = (0,react.useMemo)(()=>{
        return completionStatus && !completionStatus.answersPublished && !submitting && completionStatus.notMeetConditions.length === 0;
    }, [
        completionStatus,
        submitting
    ]);
    const isClosed = (0,react.useMemo)(()=>!!completionStatus?.answersPublished
    , [
        completionStatus
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.Z, {
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                },
                open: snackVisible,
                onClose: ()=>setSnackVisible(false)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                    onClose: ()=>setSnackVisible(false)
                    ,
                    variant: "filled",
                    severity: "error",
                    sx: {
                        width: '100%'
                    },
                    children: t('plugin_find_truman_submit_failed')
                })
            }),
            completionStatus && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: completionStatus.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        marginBottom: 2,
                        children: questions.map((question, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                marginBottom: 2,
                                children: completionStatus.answersPublished ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    fullWidth: true,
                                    InputProps: {
                                        readOnly: true
                                    },
                                    size: "small",
                                    focused: true,
                                    variant: "outlined",
                                    color: question.correct ? 'success' : 'error',
                                    error: !question.correct,
                                    value: question.answer ?? '',
                                    label: question.title,
                                    helperText: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: classes.helperText,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyRounded/* default */.Z, {
                                                className: classes.helperTextIcon
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: classes.helperTextContent,
                                                children: question.correctAnswer ?? ''
                                            })
                                        ]
                                    })
                                }) : completionStatus.answered ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    fullWidth: true,
                                    InputProps: {
                                        readOnly: true
                                    },
                                    size: "small",
                                    variant: "outlined",
                                    label: question.title,
                                    value: question.answer ?? ''
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    fullWidth: true,
                                    required: true,
                                    disabled: !enabled && !submitted,
                                    InputProps: {
                                        readOnly: submitted
                                    },
                                    size: "small",
                                    variant: "outlined",
                                    placeholder: t('plugin_find_truman_completion_placeholder'),
                                    label: question.title,
                                    value: questions[index].answer ?? '',
                                    onChange: ({ currentTarget  })=>{
                                        const ques = [
                                            ...questions
                                        ];
                                        ques[index].answer = currentTarget.value;
                                        setQuestions(ques);
                                    }
                                })
                            }, question.id)
                        )
                    }),
                    !error1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        textAlign: "right",
                        marginTop: 1,
                        paddingBottom: 1,
                        children: submitted ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: completionStatus.correct ? classes.successButton : classes.errorButton,
                            variant: "contained",
                            startIcon: completionStatus.correct ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckRounded/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ClearRounded/* default */.Z, {}),
                            color: completionStatus.correct ? 'success' : 'error',
                            children: completionStatus.correct ? t('plugin_find_truman_completion_correct') : t('plugin_find_truman_completion_wrong')
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                            color: "primary",
                            variant: "contained",
                            disabled: !enabled,
                            init: t(isClosed ? 'plugin_find_truman_completion_closed' : 'plugin_find_truman_completion_submit'),
                            waiting: t('plugin_find_truman_completion_submitting'),
                            failed: t('plugin_find_truman_submit_failed'),
                            complete: t('plugin_find_truman_completion_submitted'),
                            executor: handleSubmit,
                            failedOnClick: "use executor",
                            startIcon: isClosed ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(Send/* default */.Z, {}),
                            completeIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoneOutlined/* default */.Z, {}),
                            failIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RefreshOutlined/* default */.Z, {})
                        })
                    }),
                    completionStatus.notMeetConditions.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                                severity: "info",
                                sx: {
                                    mb: 1
                                },
                                children: t('plugin_find_truman_insufficient_nft')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NoNftCard, {
                                conditions: completionStatus.notMeetConditions
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTruman.tsx












const FindTruman_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            '--contentHeight': '400px',
            '--tabHeight': '35px',
            width: '100%',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0,
            position: 'relative'
        },
        content: {
            width: '100%',
            minHeight: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important'
        },
        body: {
            flex: 1,
            maxHeight: 'calc(var(--contentHeight) - var(--tabHeight))',
            overflow: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tabs: {
            height: 'var(--tabHeight)',
            width: '100%',
            minHeight: 'unset',
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        tab: {
            height: 'var(--tabHeight)',
            minHeight: 'unset',
            minWidth: 'unset'
        },
        subtitle: {
            fontSize: 12,
            marginRight: theme.spacing(0.5)
        },
        title: {
            fontSize: '1.25rem'
        },
        subheader: {
            fontSize: '0.875rem'
        },
        tip: {
            padding: theme.spacing(1),
            backgroundColor: '#fff'
        },
        tipArrow: {
            color: '#fff'
        },
        critical: {
            color: 'rgba(255,255,255,.9)',
            fontWeight: 500,
            fontSize: 14,
            width: 24,
            height: 24,
            backgroundImage: 'linear-gradient( 135deg, #FDD819 10%, #E80505 100%)',
            cursor: 'pointer'
        },
        nonCritical: {
            color: 'rgba(255,255,255,.9)',
            fontWeight: 500,
            fontSize: 14,
            width: 24,
            height: 24,
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            cursor: 'pointer'
        },
        chip: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main
            }
        }
    };
});
function getPostTypeTitle(t, postType) {
    switch(postType){
        case types/* PostType.Poll */.hQ.Poll:
            return t('plugin_find_truman_status_poll');
        case types/* PostType.Puzzle */.hQ.Puzzle:
            return t('plugin_find_truman_status_puzzle');
        case types/* PostType.Completion */.hQ.Completion:
            return t('plugin_find_truman_status_completion');
        case types/* PostType.PuzzleResult */.hQ.PuzzleResult:
            return t('plugin_find_truman_status_puzzle_result');
        case types/* PostType.PollResult */.hQ.PollResult:
            return t('plugin_find_truman_status_poll_result');
        case types/* PostType.Status */.hQ.Status:
            return t('plugin_find_truman_status_result');
        default:
            return '';
    }
}
function FindTruman(props) {
    const { classes  } = FindTruman_useStyles();
    const { address , t  } = (0,react.useContext)(FindTrumanContext);
    const { postType , clueId , storyInfo , userStoryStatus , userPuzzleStatus , userPollStatus , userCompletionStatus , puzzleResult , pollResult , onSubmitPoll , onSubmitCompletion ,  } = props;
    const [loadImg, setLoadImg] = (0,react.useState)(true);
    const isCritical = userPuzzleStatus?.critical || userPollStatus?.critical || userCompletionStatus?.critical;
    const isNoncritical = userPuzzleStatus && !userPuzzleStatus.critical || userPollStatus && !userPollStatus.critical || userCompletionStatus && !userCompletionStatus.critical;
    const renderCard = ()=>{
        if (postType === types/* PostType.Status */.hQ.Status) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StageCard, {
                userStoryStatus: userStoryStatus
            });
        } else if (postType === types/* PostType.Puzzle */.hQ.Puzzle && userPuzzleStatus) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard, {
                onSubmit: onSubmitPoll,
                userStatus: userPuzzleStatus
            });
        } else if (postType === types/* PostType.Poll */.hQ.Poll && userPollStatus) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard, {
                onSubmit: onSubmitPoll,
                userStatus: userPollStatus
            });
        } else if (postType === types/* PostType.Completion */.hQ.Completion) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CompletionCard, {
                onSubmit: (_, answers)=>onSubmitCompletion(answers)
                ,
                completionStatus: userCompletionStatus
            });
        } else if (postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult && puzzleResult) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard, {
                type: types/* PostType.PuzzleResult */.hQ.PuzzleResult,
                userStatus: userPuzzleStatus,
                result: puzzleResult
            });
        } else if (postType === types/* PostType.PollResult */.hQ.PollResult && pollResult) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard, {
                type: types/* PostType.PollResult */.hQ.PollResult,
                userStatus: userPollStatus,
                result: pollResult
            });
        }
        return null;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: [
            postType !== types/* PostType.Encryption */.hQ.Encryption ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardMedia/* default */.Z, {
                        onLoad: ()=>{
                            setLoadImg(false);
                        },
                        alt: "",
                        component: "img",
                        height: 140,
                        sx: {
                            visibility: loadImg ? 'hidden' : 'unset'
                        },
                        image: storyInfo?.img
                    }),
                    loadImg && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "rectangular",
                            height: 140,
                            width: "100%"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        title: storyInfo && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    component: "b",
                                    sx: {
                                        marginRight: 0.5
                                    },
                                    children: storyInfo.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    display: "flex",
                                    columnGap: 1,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                                            PopperProps: {
                                                disablePortal: true
                                            },
                                            arrow: true,
                                            placement: "top",
                                            title: isCritical ? t('plugin_find_truman_status_critical') : isNoncritical ? t('plugin_find_truman_status_noncritical') : '',
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                children: [
                                                    isCritical && /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                                        className: classes.critical,
                                                        children: "C"
                                                    }),
                                                    isNoncritical && /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                                        className: classes.nonCritical,
                                                        children: "N"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                            className: classes.chip,
                                            color: "primary",
                                            size: "small",
                                            label: getPostTypeTitle(t, postType)
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    renderCard()
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EncryptionCard, {
                clueId: clueId
            }),
            !address && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    padding: '0 16px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                    severity: "info",
                    children: t('plugin_find_truman_connect_wallet_tip')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {})
        ]
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/getUnixTime/index.js + 1 modules
var getUnixTime = __webpack_require__(4975);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/plugins/FindTruman/constants.ts + 1 modules
var constants = __webpack_require__(64188);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/hooks/useConst.ts




function renderString(template, data) {
    return template.replace(/{{([^}]+)}}/g, (match, p1)=>data[p1]?.toString() ?? match
    );
}
function useConst() {
    const { i18n  } = (0,utils/* useI18N */.M1)();
    const [consts, setConsts] = (0,react.useState)();
    (0,react.useEffect)(()=>{
        if (!constants/* FindTruman_Const.initialized */.Oh.initialized) {
            constants/* FindTruman_Const.init */.Oh.init((resolve, reject)=>{
                (0,apis/* fetchConst */.oM)(i18n.language).then(resolve).catch(reject);
            });
        }
        constants/* FindTruman_Const.then */.Oh.then((res)=>{
            setConsts(res);
        });
    }, []);
    const t = (0,react.useCallback)((id, options = {})=>{
        return renderString(consts?.locales?.[id] ?? '', options);
    }, [
        consts
    ]);
    return {
        consts,
        t
    };
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/PostInspector.tsx










function PostInspector(props) {
    const { url  } = props;
    const account = (0,useAccount/* useAccount */.m)().toLowerCase();
    const { consts , t  } = useConst();
    const [, , , _storyId, , _targetId] = new URL(url).hash.split('/');
    const storyId = _storyId ? _storyId : '';
    const targetId = _targetId ? _targetId : '';
    const postType = url.includes('/encryption?') ? types/* PostType.Encryption */.hQ.Encryption : url.includes('/puzzles/') ? types/* PostType.Puzzle */.hQ.Puzzle : url.includes('/polls/') ? types/* PostType.Poll */.hQ.Poll : url.includes('/completions/') ? types/* PostType.Completion */.hQ.Completion : url.includes('/puzzle_result') ? types/* PostType.PuzzleResult */.hQ.PuzzleResult : url.includes('/poll_result/') ? types/* PostType.PollResult */.hQ.PollResult : types/* PostType.Status */.hQ.Status;
    const [storyInfo, setStoryInfo] = (0,react.useState)();
    const [userStoryStatus, setUserStoryStatus] = (0,react.useState)();
    const [userPuzzleStatus, setUserPuzzleStatus] = (0,react.useState)();
    const [userPollStatus, setUserPollStatus] = (0,react.useState)();
    const [userCompletionStatus, setUserCompletionStatus] = (0,react.useState)();
    const [puzzleResult, setPuzzleResult] = (0,react.useState)();
    const [pollResult, setPollResult] = (0,react.useState)();
    const [clueId, setClueId] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        fetchData();
    }, [
        account
    ]);
    const fetchData = async ()=>{
        if (postType === types/* PostType.Encryption */.hQ.Encryption) {
            const searchParams = new URLSearchParams(url.split('?')[1]);
            const payload = searchParams.get('clueId') || '';
            setClueId(payload);
            return;
        }
        setStoryInfo(await (0,apis/* fetchStoryInfo */.dr)(storyId));
        if (!account) return;
        if (postType === types/* PostType.Status */.hQ.Status) {
            setUserStoryStatus(await (0,apis/* fetchUserStoryStatus */.cz)(storyId, account));
        } else if (postType === types/* PostType.Puzzle */.hQ.Puzzle || postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult) {
            setUserPuzzleStatus(await (0,apis/* fetchUserPuzzleStatus */.JJ)(targetId, account));
        } else if (postType === types/* PostType.Poll */.hQ.Poll || postType === types/* PostType.PollResult */.hQ.PollResult) {
            setUserPollStatus(await (0,apis/* fetchUserPollStatus */.K1)(targetId, account));
        } else if (postType === types/* PostType.Completion */.hQ.Completion) {
            setUserCompletionStatus(await (0,apis/* fetchUserCompletionStatus */.$G)(targetId, account));
        }
        if (postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult) {
            setPuzzleResult(await (0,apis/* fetchPuzzleResult */.He)(targetId));
        } else if (postType === types/* PostType.PollResult */.hQ.PollResult) {
            setPollResult(await (0,apis/* fetchPollResult */.mf)(targetId));
        }
    };
    const handleSubmitPoll = async (choice)=>{
        const from = account;
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        if (postType === types/* PostType.Puzzle */.hQ.Puzzle) {
            const target = userPuzzleStatus?.id ?? '';
            await (0,apis/* submitPuzzle */.yR)(account, {
                target,
                from,
                timestamp,
                choice
            });
        } else if (postType === types/* PostType.Poll */.hQ.Poll) {
            const target = userPollStatus?.id ?? '';
            await (0,apis/* submitPoll */.LP)(account, {
                target,
                from,
                timestamp,
                choice
            });
        }
        await fetchData();
    };
    const handleSubmitCompletion = async (answers)=>{
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        const quesId = userCompletionStatus?.id ?? '';
        await (0,apis/* submitCompletion */.$F)(account, {
            quesId,
            answers,
            timestamp
        });
        await fetchData();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanContext.Provider, {
        value: {
            address: account,
            const: consts,
            t
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
            title: "",
            isFullPluginDown: true,
            retry: ()=>{
                fetchData();
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTruman, {
                storyInfo: storyInfo,
                clueId: clueId,
                userStoryStatus: userStoryStatus,
                userPuzzleStatus: userPuzzleStatus,
                userPollStatus: userPollStatus,
                userCompletionStatus: userCompletionStatus,
                puzzleResult: puzzleResult,
                pollResult: pollResult,
                postType: postType,
                onSubmitPoll: handleSubmitPoll,
                onSubmitCompletion: handleSubmitCompletion
            })
        })
    });
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(69157);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(37101);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox.tsx
var WalletStatusBox = __webpack_require__(51257);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(77522);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/PoapPanel.tsx








const PoapPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        skeleton: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        poap: {
            width: '120px',
            height: '120px',
            borderRadius: '8px'
        },
        poapCover: {
            width: '150px',
            height: '150px',
            borderRadius: '8px',
            border: 'none',
            filter: 'grayscale(100%)',
            background: 'rgba(255, 255, 255, 0.15)',
            transition: 'all .3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        }
    })
);
function PoapPanel(props) {
    const { classes  } = PoapPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    const account = (0,useAccount/* useAccount */.m)();
    const { value: poaps , loading  } = (0,useAsync/* default */.Z)(async ()=>{
        return account ? (0,apis/* fetchUserPoap */.oJ)(account) : undefined;
    }, [
        account
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.skeleton,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    variant: "rectangular",
                    animation: "wave",
                    width: 120,
                    height: 120
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    width: 120
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    width: 36
                })
            ]
        }) : poaps && poaps.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
            container: true,
            spacing: 2,
            justifyContent: "center",
            children: poaps.map((poap)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    xs: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.poap,
                            src: poap.img
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            textAlign: "center",
                            children: poap.name
                        })
                    ]
                }, poap.id)
            )
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    textAlign: "center",
                    variant: "body1",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: t('plugin_find_truman_dialog_no_poap_tip')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: consts?.poapImg,
                    className: classes.poapCover
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    component: "a",
                    href: consts?.getPoapUrl,
                    target: "_blank",
                    sx: {
                        mt: 1
                    },
                    color: "primary",
                    variant: "text",
                    children: t('plugin_find_truman_dialog_get_poap_tip')
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(12536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(61098);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/PartsPanel.tsx














const PartsPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        skeleton: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        ribbonWrapper: {
            position: 'relative'
        },
        ribbon: {
            position: 'absolute',
            width: '70px',
            height: '70px',
            overflow: 'hidden',
            top: '-6px',
            left: '-6px',
            '&:before': {
                position: 'absolute',
                content: '""',
                display: 'block',
                border: '3px solid #0359a3',
                top: 0,
                right: 0,
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent'
            },
            '&:after': {
                position: 'absolute',
                content: '""',
                display: 'block',
                border: '3px solid #0359a3',
                bottom: 0,
                left: 0,
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent'
            }
        },
        ribbonGray: {
            '&:before': {
                border: '3px solid #595959'
            },
            '&:after': {
                border: '3px solid #595959'
            }
        },
        ribbonContent: {
            position: 'absolute',
            display: 'block',
            width: '100px',
            padding: '2px 0',
            backgroundColor: 'rgb(29,155,240)',
            boxShadow: '0 5px 10px rgba(0,0,0,.1)',
            color: '#fff',
            textAlign: 'center',
            right: '-6px',
            top: '16px',
            transform: 'rotate(-45deg)',
            zIndex: 1
        },
        ribbonContentGray: {
            backgroundColor: '#8c8c8c'
        },
        cover: {
            width: '100%',
            objectFit: 'contain',
            borderRadius: '8px',
            position: 'relative',
            trans: 'all .3s',
            background: 'rgba(255, 255, 255, .15)'
        }
    })
);
function PartsPanel(props) {
    const { classes  } = PartsPanel_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const account = (0,useAccount/* useAccount */.m)();
    const { value: partsInfo , loading , retry ,  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return account ? (0,apis/* fetchUserPartsInfo */.kc)(account) : undefined;
    }, [
        account
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PartSkeleton, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PartSkeleton, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PartSkeleton, {})
            ]
        }) : partsInfo ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            alignItems: "center",
            container: true,
            spacing: 2,
            children: [
                partsInfo.quests.map((quest)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestItem, {
                            quest: quest
                        })
                    }, quest.id)
                ),
                partsInfo.boxes.map((box)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MysteryBoxItem, {
                            account: account,
                            onOpened: ()=>retry()
                            ,
                            box: box
                        })
                    }, box.id)
                ),
                partsInfo.parts.map((part)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PartItem, {
                            part: part
                        })
                    }, part.tokenId)
                )
            ]
        }) : null
    });
};
function PoapLabel(props) {
    const { id , poapImg , size  } = props;
    return id ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
            src: poapImg ?? ''
        }),
        label: `#${id}`,
        size: size ?? 'small',
        variant: "filled"
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        src: poapImg,
        style: {
            width: '24px',
            height: '24px',
            borderRadius: '100%'
        }
    });
}
function PartSkeleton() {
    const { classes  } = PartsPanel_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        className: classes.skeleton,
        item: true,
        xs: 4,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                width: 80,
                height: 24
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                variant: "rectangular",
                animation: "wave",
                width: 168,
                height: 168
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                width: 168,
                height: 30
            })
        ]
    });
}
function getPartName(t, type) {
    switch(type){
        case types/* PartType.Background */.pX.Background:
            return t('plugin_find_truman_dialog_ftg_part_background');
        case types/* PartType.Clothes */.pX.Clothes:
            return t('plugin_find_truman_dialog_ftg_part_clothes');
        case types/* PartType.Skin */.pX.Skin:
            return t('plugin_find_truman_dialog_ftg_part_face');
        case types/* PartType.Head */.pX.Head:
            return t('plugin_find_truman_dialog_ftg_part_head');
        case types/* PartType.Mask */.pX.Mask:
            return t('plugin_find_truman_dialog_ftg_part_mask');
    }
}
function PartItem(props) {
    const { part  } = props;
    const { classes  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                PopperProps: {
                    disablePortal: true
                },
                arrow: true,
                title: part.name,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    lineHeight: "24px",
                    noWrap: true,
                    textAlign: "center",
                    variant: "body1",
                    color: "text.primary",
                    children: part.name
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'relative'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: classes.cover,
                    src: part.img
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "30px",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        size: "small",
                        label: getPartName(t, part.type),
                        color: "primary"
                    }),
                    part.fromBox?.completedQuest?.needPoap && !!part.fromBox.completedQuest.tokenId && /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                        poapImg: consts?.poapImg ?? '',
                        id: part.fromBox.completedQuest.tokenId
                    })
                ]
            })
        ]
    });
}
function QuestItem(props) {
    const { quest  } = props;
    const { classes , cx  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    const { open: isQuestDialogOpen , onOpen: onQuestDialogOpen , onClose: onQuestDialogClose  } = (0,utils/* useControlledDialog */.D2)();
    const meetPoap = (0,react.useMemo)(()=>{
        return !quest.needPoap || !!quest.poaps.find((e)=>!e.used
        );
    }, [
        quest
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    height: '24px'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.ribbonWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: consts?.boxImg
                    }),
                    quest.needPoap && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        position: "absolute",
                        top: "4px",
                        right: "4px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                            size: "medium",
                            poapImg: consts?.poapImg ?? ''
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: cx(classes.ribbon, classes.ribbonGray),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: cx(classes.ribbonContent, classes.ribbonContentGray),
                            variant: "body2",
                            children: t('plugin_find_truman_dialog_ribbon_lacked')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                size: "small",
                color: "primary",
                variant: "outlined",
                fullWidth: true,
                onClick: onQuestDialogOpen,
                children: meetPoap ? t('plugin_find_truman_dialog_get') : t('plugin_find_truman_poap_required_title_simple')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestDialog, {
                quest: quest,
                open: isQuestDialogOpen,
                onClose: onQuestDialogClose
            })
        ]
    });
}
function MysteryBoxItem(props) {
    const { account , box , onOpened  } = props;
    const { classes , cx  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    const [loading, setLoading] = (0,react.useState)(box.isOpened && !box.isMinted);
    const handleOpenBox = async ()=>{
        try {
            setLoading(true);
            await (0,apis/* openMysteryBox */.UN)(account, {
                timestamp: (0,getUnixTime/* default */.Z)(Date.now()),
                address: account,
                rawdata: {
                    boxId: box.id
                }
            });
        } finally{
            setLoading(false);
            onOpened();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    height: '24px'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.ribbonWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: box.isOpened ? box.img : consts?.boxImg
                    }),
                    !box.isOpened && box.completedQuest?.needPoap && !!box.completedQuest.tokenId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        position: "absolute",
                        top: "4px",
                        right: "4px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                            size: "medium",
                            id: box.completedQuest.tokenId,
                            poapImg: consts?.poapImg ?? ''
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: box.isOpened ? cx(classes.ribbon, classes.ribbonGray) : classes.ribbon,
                        children: box.isOpened ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: cx(classes.ribbonContent, classes.ribbonContentGray),
                            variant: "body2",
                            children: t('plugin_find_truman_dialog_ribbon_minted')
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.ribbonContent,
                            variant: "body2",
                            children: t('plugin_find_truman_dialog_ribbon_openable')
                        })
                    })
                ]
            }),
            box.isOpened ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "30px",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        size: "small",
                        label: getPartName(t, box.partType),
                        color: "primary"
                    }),
                    box.completedQuest?.needPoap && !!box.completedQuest.tokenId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        position: "absolute",
                        top: "4px",
                        right: "4px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                            size: "medium",
                            id: box.completedQuest.tokenId,
                            poapImg: consts?.poapImg ?? ''
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: loading,
                size: "small",
                color: "primary",
                variant: "contained",
                fullWidth: true,
                onClick: handleOpenBox,
                children: t('plugin_find_truman_dialog_open')
            })
        ]
    });
}
function QuestDialog(props) {
    const { quest , open , onClose  } = props;
    const { classes  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    const poapIds = (0,react.useMemo)(()=>{
        return quest.poaps.map((e)=>(0,formatter/* formatNFT_TokenId */.uu)(e.tokenId.toString(), 2)
        ).join(', ');
    }, [
        quest
    ]);
    const availablePoap = (0,react.useMemo)(()=>{
        return quest.poaps.find((e)=>!e.used
        );
    }, [
        quest
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('plugin_find_truman_dialog_get_box_title'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 4
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: classes.cover,
                    style: {
                        width: '250px',
                        height: '250px',
                        marginBottom: '8px'
                    },
                    src: consts?.boxImg
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    textAlign: "center",
                    variant: "body2",
                    color: "text.secondary",
                    sx: {
                        mb: 2
                    },
                    children: (0,format/* default */.Z)(new Date(quest.startFrom), 'yyyy-MM-dd')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h6",
                    color: "text.primary",
                    gutterBottom: true,
                    children: quest.title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "text.primary",
                    sx: {
                        whiteSpace: 'pre-wrap'
                    },
                    children: quest.desc
                }),
                quest.needPoap && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.Z, {
                    severity: availablePoap ? 'success' : 'error',
                    sx: {
                        marginTop: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AlertTitle/* default */.Z, {
                            children: t('plugin_find_truman_poap_required_title')
                        }),
                        quest.poaps.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_poap_required_empty')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    rel: "noopener noreferrer",
                                    component: "a",
                                    target: "_blank",
                                    href: consts?.getPoapUrl,
                                    variant: "body2",
                                    sx: {
                                        fontWeight: 'bold',
                                        fontSize: '12px'
                                    },
                                    children: t('plugin_find_truman_poap_required_get')
                                })
                            ]
                        }) : availablePoap ? t('plugin_find_truman_poap_required_meet', {
                            id: `#${availablePoap.tokenId}`
                        }) : quest.poaps.length > 1 ? t('plugin_find_truman_poap_required_used_pl', {
                            id: poapIds
                        }) : t('plugin_find_truman_poap_required_used', {
                            id: poapIds
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(85010);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FusionFtg.tsx




const FusionFtg_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        box: {
            width: '200px',
            height: '200px',
            borderRadius: '8px',
            position: 'relative',
            background: 'rgba(255, 255, 255, .15)',
            transition: 'all .3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        },
        part: {
            width: '200px',
            height: '200px',
            position: 'absolute',
            top: 0,
            left: 0
        }
    })
);
const PartZIndex = {
    [types/* PartType.Background */.pX.Background]: 1,
    [types/* PartType.Skin */.pX.Skin]: 2,
    [types/* PartType.Clothes */.pX.Clothes]: 3,
    [types/* PartType.Head */.pX.Head]: 4,
    [types/* PartType.Mask */.pX.Mask]: 5
};
function FusionFtg(props) {
    const { parts , sx  } = props;
    const { classes  } = FusionFtg_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.box,
        sx: {
            ...sx
        },
        children: parts.map((part)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.part,
                src: part.img,
                style: {
                    zIndex: PartZIndex[part.type]
                }
            }, part.tokenId)
        )
    });
};

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FtgPanel.tsx










const FtgPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        ftgCover: {
            width: '150px',
            height: '150px',
            borderRadius: '8px',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.15)',
            transition: 'all .3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        },
        ftgRow: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            columnGap: theme.spacing(4),
            ':first-child': {
                marginTop: theme.spacing(2)
            },
            ':not(:last-child)': {
                marginBottom: theme.spacing(4),
                paddingBottom: theme.spacing(4),
                borderBottom: '1px solid rgba(255, 255, 255, .15)'
            }
        },
        ftgInfoRow: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            columnGap: theme.spacing(2),
            ':not(:last-child)': {
                marginBottom: theme.spacing(1)
            }
        }
    })
);
function FtgPanel(props) {
    const { classes  } = FtgPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    const account = (0,useAccount/* useAccount */.m)();
    const ftgContract = (0,useERC721TokenContract/* useERC721TokenContract */.n)(consts?.ftgAddress);
    const { value: ftgs1  } = (0,useAsync/* default */.Z)(async ()=>{
        try {
            if (account && ftgContract) {
                const ftgs = [];
                const balance = await ftgContract.methods.balanceOf(account).call();
                for(let i = 0; i < (balance || 0); i += 1){
                    const tokenId = await ftgContract.methods.tokenOfOwnerByIndex(account, i).call();
                    const uri = await ftgContract.methods.tokenURI(tokenId).call();
                    if (uri) {
                        const res = await fetch(uri);
                        const nft = await res.json();
                        const tokenId = uri.split('/').at(-1);
                        ftgs.push({
                            ...nft,
                            tokenId
                        });
                    }
                }
                return ftgs;
            }
        } catch (error) {}
        return [];
    }, [
        account,
        ftgContract
    ]);
    const { value: fusion  } = (0,useAsync/* default */.Z)(async ()=>{
        return account ? (0,apis/* fetchExchangeStatus */.PN)(account) : undefined;
    }, [
        account
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: ftgs1 && ftgs1.length > 0 || fusion ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                ftgs1?.map((ftg)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FtgItem, {
                        ftg: ftg
                    }, ftg.tokenId)
                ),
                fusion?.parts && /*#__PURE__*/ (0,jsx_runtime.jsx)(FusionItem, {
                    parts: fusion.parts
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    textAlign: "center",
                    variant: "body1",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: t('plugin_find_truman_dialog_buy_ftg_tip')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: consts?.ftgImg,
                    className: classes.ftgCover
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    component: "a",
                    href: "https://findtruman.io/#/buy",
                    target: "_blank",
                    sx: {
                        mt: 1,
                        width: '150px'
                    },
                    color: "primary",
                    variant: "contained",
                    children: t('plugin_find_truman_dialog_buy_ftg')
                })
            ]
        })
    });
};
function FtgInfoRow(props) {
    const { title , value  } = props;
    const { classes  } = FtgPanel_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.ftgInfoRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontWeight: "bold",
                variant: "body1",
                color: "text.primary",
                children: title
            }),
            typeof value === 'string' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                color: "text.secondary",
                children: value
            }) : value
        ]
    });
}
function FtgItem(props) {
    const { ftg  } = props;
    const { classes  } = FtgPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.ftgRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.ftgCover,
                src: ftg.image
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    width: '250px'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "center",
                        variant: "h6",
                        color: "text.primary",
                        gutterBottom: true,
                        children: ftg.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_token'),
                        value: (0,formatter/* formatNFT_TokenId */.uu)(ftg.tokenId, 2)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_blockchain'),
                        value: "Ethereum"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_standard'),
                        value: "ERC721 Enumerable"
                    }),
                    consts && /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_contract'),
                        value: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "text.secondary",
                                    mr: 1,
                                    children: [
                                        consts.ftgAddress.substring(0, 7),
                                        "...",
                                        consts.ftgAddress.substring(38, 42)
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: `https://etherscan.io/address/${consts.ftgAddress}`,
                                    variant: "body1",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "view"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function FusionItem(props) {
    const { parts  } = props;
    const { classes  } = FtgPanel_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.ftgRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FusionFtg, {
                parts: parts
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    width: '250px'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "center",
                        variant: "h6",
                        color: "text.primary",
                        gutterBottom: true,
                        children: "FindTruman Genesis"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_token'),
                        value: t('plugin_find_truman_dialog_ftg_no_minted')
                    }),
                    parts.map((part)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                            title: getPartName(t, part.type),
                            value: part.name
                        }, part.type)
                    )
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/AssetsPanel.tsx








const AssetsPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        box: {
            display: 'flex',
            flexDirection: 'column'
        },
        row: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'baseline'
        }
    })
);
function AssetsPanel(props) {
    const { classes  } = AssetsPanel_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.box,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.row,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "h5",
                        color: "text.primary",
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_assets_ftg')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "body2",
                        color: "text.secondary",
                        ml: 1,
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_ethereum_mainnet')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgPanel, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.row,
                mt: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "h5",
                        color: "text.primary",
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_assets_POAP')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "body2",
                        color: "text.secondary",
                        ml: 1,
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_ethereum_polygon')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapPanel, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 2,
                mb: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                textAlign: "left",
                                variant: "h5",
                                color: "text.primary",
                                children: t('plugin_find_truman_dialog_assets_parts')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                textAlign: "left",
                                variant: "body2",
                                color: "text.secondary",
                                ml: 1,
                                gutterBottom: true,
                                children: t('plugin_find_truman_dialog_ethereum_polygon')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "primary",
                        size: "small",
                        component: "a",
                        href: "https://findtruman.io/#/assets",
                        target: "_blank",
                        children: t('plugin_find_truman_dialog_fusion_fusion')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PartsPanel, {})
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/ParticipatePanel.tsx



















const ParticipatePanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        panel: {},
        cover: {
            width: '100%',
            objectFit: 'cover',
            marginBottom: theme.spacing(2),
            borderRadius: '8px'
        },
        title: {
            marginBottom: theme.spacing(2)
        },
        buttons: {
            padding: theme.spacing(2)
        },
        wrapper: {
            '&:not(:last-child)': {
                marginBottom: theme.spacing(2)
            }
        },
        abstractTabWrapper: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 2,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        tabPaneWrapper: {
            width: '100%',
            marginBottom: '24px'
        },
        tabPane: {
            width: 535,
            margin: '0 auto',
            padding: 0
        },
        dialogWrapper: {
            paddingBottom: '0px !important',
            paddingTop: '0px !important'
        }
    })
);
function ParticipatePanel(props) {
    const { storyId  } = props;
    const { classes  } = ParticipatePanel_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const account = (0,useAccount/* useAccount */.m)();
    const { open: isDialogOpen , onOpen: onDialogOpen , onClose: onDialogClose  } = (0,utils/* useControlledDialog */.D2)();
    const { value: userStoryStatus , retry: onUpdate  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return account && storyId ? (0,apis/* fetchUserStoryStatus */.cz)(storyId, account) : undefined;
    }, [
        account,
        storyId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.panel,
        children: [
            userStoryStatus && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: userStoryStatus.img
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StageCard, {
                        userStoryStatus: userStoryStatus
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                        className: classes.buttons,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            fullWidth: true,
                            color: "primary",
                            variant: "contained",
                            onClick: ()=>{
                                onDialogOpen();
                            },
                            children: t('plugin_find_truman_dialog_view_all')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipateDialog, {
                account: account,
                open: isDialogOpen,
                onClose: onDialogClose,
                onUpdate: onUpdate
            })
        ]
    });
};
var ParticipationType;
(function(ParticipationType) {
    ParticipationType["Critical"] = 'critical';
    ParticipationType["NonCritical"] = 'non-critical';
})(ParticipationType || (ParticipationType = {}));
const ParticipationTabValues = [
    ParticipationType.Critical,
    ParticipationType.NonCritical
];
function ParticipateDialog(props) {
    const { account , open , onClose , onUpdate  } = props;
    const { classes  } = ParticipatePanel_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const [currentTab, onChange, tabs] = (0,entry/* useTabs */.YE)(ParticipationType.Critical, ParticipationType.NonCritical);
    const [questions1, setQuestions] = (0,react.useState)();
    const updateQuestions = (0,react.useCallback)(async ()=>{
        if (!account) return;
        const questions = await (0,apis/* fetchQuestions */.Oz)(account);
        questions.fills = questions.fills.map((f)=>{
            return {
                ...f,
                type: types/* PostType.Completion */.hQ.Completion
            };
        });
        questions.polls = questions.polls.map((f)=>{
            return {
                ...f,
                type: types/* PostType.Poll */.hQ.Poll
            };
        });
        questions.puzzles = questions.puzzles.map((f)=>{
            return {
                ...f,
                type: types/* PostType.Puzzle */.hQ.Puzzle
            };
        });
        setQuestions(questions);
    }, [
        account,
        open
    ]);
    (0,react.useEffect)(()=>{
        updateQuestions();
    }, [
        account,
        open
    ]);
    const handleSubmitPoll = async (postType, pollId, choice)=>{
        const target = pollId;
        const from = account;
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        if (postType === types/* PostType.Puzzle */.hQ.Puzzle) {
            await (0,apis/* submitPuzzle */.yR)(account, {
                target,
                from,
                timestamp,
                choice
            });
        } else if (postType === types/* PostType.Poll */.hQ.Poll) {
            await (0,apis/* submitPoll */.LP)(account, {
                target,
                from,
                timestamp,
                choice
            });
        }
        await updateQuestions();
        onUpdate();
    };
    const handleSubmitCompletion = async (quesId, answers)=>{
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        await (0,apis/* submitCompletion */.$F)(account, {
            quesId,
            answers,
            timestamp
        });
        await updateQuestions();
        onUpdate();
    };
    const renderItem = (question)=>{
        if (question.type === types/* PostType.Completion */.hQ.Completion) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CompletionCard, {
                    onSubmit: handleSubmitCompletion,
                    completionStatus: question
                })
            }, `${question.type}_${question.id}`);
        } else {
            const poll = question;
            return poll.status ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard, {
                    userStatus: poll,
                    onSubmit: async (choice)=>{
                        return handleSubmitPoll(poll.type, poll.id, choice);
                    }
                })
            }, `${poll.type}_${poll.id}`) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard, {
                    type: poll.type,
                    userStatus: poll,
                    result: {
                        ...poll,
                        correct: poll.result,
                        count: poll.count || []
                    }
                })
            }, `${poll.type}_${poll.id}`);
        }
    };
    const itemsCritical = (0,react.useMemo)(()=>[
            ...(questions1?.fills || []).filter((d)=>d.critical
            ),
            ...(questions1?.polls || []).filter((d)=>d.critical
            ),
            ...(questions1?.puzzles || []).filter((d)=>d.critical
            ), 
        ].sort((a, b)=>b.order - a.order
        )
    , [
        questions1
    ]);
    const itemsNonCritical = (0,react.useMemo)(()=>[
            ...(questions1?.fills || []).filter((d)=>!d.critical
            ),
            ...(questions1?.polls || []).filter((d)=>!d.critical
            ),
            ...(questions1?.puzzles || []).filter((d)=>!d.critical
            ), 
        ].sort((a, b)=>b.order - a.order
        )
    , [
        questions1
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('plugin_find_truman_dialog_participation_title'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.dialogWrapper,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: currentTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.abstractTabWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanDialogTabs, {
                            currentTab: currentTab,
                            setTab: (tab)=>onChange(null, tab)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.tabPaneWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                className: classes.tabPane,
                                value: ParticipationType.Critical,
                                sx: {
                                    height: '522px'
                                },
                                children: !itemsCritical.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyTip, {}) : itemsCritical.map((e)=>renderItem(e)
                                )
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                className: classes.tabPane,
                                value: ParticipationType.NonCritical,
                                sx: {
                                    height: '522px'
                                },
                                children: !itemsNonCritical.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyTip, {}) : itemsNonCritical.map((e)=>renderItem(e)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function FindTrumanDialogTabs(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useTabsStyles({
        columns: 'repeat(2, 50%)'
    }), props);
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const { currentTab , setTab  } = props;
    const tabProps = {
        tabs: [
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_find_truman_dialog_critical')
                }),
                sx: {
                    p: 0
                },
                cb: ()=>setTab(ParticipationType.Critical)
            },
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_find_truman_dialog_noncritical')
                }),
                sx: {
                    p: 0
                },
                cb: ()=>setTab(ParticipationType.NonCritical)
            }, 
        ],
        index: ParticipationTabValues.indexOf(currentTab),
        classes,
        hasOnlyOneChild: true
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
        ...tabProps
    });
}
function EmptyTip() {
    const { t  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        display: "flex",
        height: "100%",
        alignItems: "center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            margin: "auto",
            textAlign: "center",
            variant: "h6",
            color: "textSecondary",
            children: t('plugin_find_truman_coming_soon')
        })
    });
}

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/ArrowForwardRounded.js
var ArrowForwardRounded = __webpack_require__(26760);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/IntroductionPanel.tsx






const IntroductionPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        section: {},
        bannerImg: {
            width: '40%',
            objectFit: 'contain',
            float: 'left',
            marginRight: theme.spacing(2)
        },
        stepCard: {
            display: 'flex',
            marginBottom: theme.spacing(1)
        },
        stepImg: {
            width: '83px',
            objectFit: 'contain',
            borderRadius: '8px',
            marginRight: theme.spacing(2)
        },
        communityRow: {
            display: 'flex',
            columnGap: theme.spacing(1.5)
        },
        communityItem: {
            cursor: 'pointer'
        },
        divider: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1)
        }
    })
);
function IntroductionPanel(props) {
    const { classes  } = IntroductionPanel_useStyles();
    const { const: consts  } = (0,react.useContext)(FindTrumanContext);
    return consts ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.banner.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.bannerImg,
                                src: consts.introduction.banner.img
                            }),
                            consts.introduction.banner.desc.map((e, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: e
                                }, index)
                            )
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                className: classes.divider
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.step.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: consts.introduction.step.steps.map((step, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.stepCard,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        className: classes.stepImg,
                                        src: step.img
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body1",
                                                children: step.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: step.desc
                                            }),
                                            step.link && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                href: step.link.url,
                                                target: "_blank",
                                                variant: "body2",
                                                rel: "noopener noreferrer",
                                                children: step.link.label
                                            })
                                        ]
                                    })
                                ]
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                className: classes.divider
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.community.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.communityRow,
                        children: consts.introduction.community.channels.map((channel, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                className: classes.communityItem,
                                avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    alt: channel.label,
                                    src: channel.img
                                }),
                                label: channel.label,
                                component: "a",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: channel.url
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                className: classes.divider
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.plot.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: consts.introduction.plot.img,
                        style: {
                            width: '100%',
                            objectFit: 'contain',
                            marginBottom: '-5px'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowForwardRounded/* default */.Z, {}),
                        fullWidth: true,
                        variant: "outlined",
                        component: "a",
                        href: consts.introduction.plot.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: consts.introduction.plot.label
                    })
                ]
            })
        ]
    }) : null;
};

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTrumanDialog.tsx














const FindTrumanDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        wrapper: {
            paddingBottom: '0px !important',
            paddingTop: '0px !important'
        },
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        abstractTabWrapper: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 2,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        tabPaneWrapper: {
            width: '100%',
            marginBottom: '24px'
        },
        tabPane: {
            width: 535,
            margin: '0 auto',
            padding: 0
        }
    })
);
function FindTrumanDialog(props) {
    const { open , onClose  } = props;
    const { classes  } = FindTrumanDialog_useStyles();
    const account = (0,entry_web3/* useAccount */.mA)();
    const { consts , t  } = useConst();
    const [currentTab, onChange, tabs] = (0,entry/* useTabs */.YE)(FindTrumanDialogTab.Introduction, FindTrumanDialogTab.Assets, FindTrumanDialogTab.Participate);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanContext.Provider, {
        value: {
            address: account,
            const: consts,
            t
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
            open: open,
            onClose: onClose,
            title: "FindTruman",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.walletStatusBox,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {})
                    }),
                    consts && /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                        value: currentTab,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.abstractTabWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanDialog_FindTrumanDialogTabs, {
                                    currentTab: currentTab,
                                    setTab: (tab)=>onChange(null, tab)
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.tabPaneWrapper,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        className: classes.tabPane,
                                        value: FindTrumanDialogTab.Introduction,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IntroductionPanel, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        className: classes.tabPane,
                                        value: FindTrumanDialogTab.Assets,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetsPanel, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        className: classes.tabPane,
                                        value: FindTrumanDialogTab.Participate,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipatePanel, {
                                            storyId: consts.storyId
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
const useTabsStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300,
            backgroundColor: `${theme.palette.background.default}!important`,
            marginRight: 1,
            '&:last-child': {
                marginRight: 0
            }
        },
        tabs: {
            width: 535,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4,
            backgroundColor: theme.palette.background.paper,
            '& .Mui-selected': {
                color: theme.palette.primary.contrastText,
                backgroundColor: `${theme.palette.primary.main}!important`
            },
            '& .MuiTabs-flexContainer': {
                display: 'grid',
                gridTemplateColumns: props.columns,
                backgroundColor: theme.palette.background.paper
            }
        },
        indicator: {
            display: 'none'
        }
    })
);
var FindTrumanDialogTab;
(function(FindTrumanDialogTab) {
    FindTrumanDialogTab["Introduction"] = 'introduction';
    FindTrumanDialogTab["Assets"] = 'assets';
    FindTrumanDialogTab["Participate"] = 'participate';
})(FindTrumanDialogTab || (FindTrumanDialogTab = {}));
const FindTrumanDialogTabValues = [
    FindTrumanDialogTab.Introduction,
    FindTrumanDialogTab.Assets,
    FindTrumanDialogTab.Participate, 
];
function getFindTrumanDialogTabName(t, type) {
    switch(type){
        case FindTrumanDialogTab.Introduction:
            return t('plugin_find_truman_dialog_tab_introduction');
        case FindTrumanDialogTab.Assets:
            return t('plugin_find_truman_dialog_tab_assets');
        case FindTrumanDialogTab.Participate:
            return t('plugin_find_truman_dialog_tab_participate');
    }
}
function FindTrumanDialog_FindTrumanDialogTabs(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useTabsStyles({
        columns: 'repeat(3, 33.33%)'
    }), props);
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const { currentTab , setTab  } = props;
    const createTabItem = (type)=>({
            label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: getFindTrumanDialogTabName(t, type)
            }),
            sx: {
                p: 0
            },
            cb: ()=>setTab(type)
        })
    ;
    const tabProps = {
        tabs: [
            createTabItem(FindTrumanDialogTab.Introduction),
            createTabItem(FindTrumanDialogTab.Assets),
            createTabItem(FindTrumanDialogTab.Participate), 
        ],
        index: FindTrumanDialogTabValues.indexOf(currentTab),
        classes,
        hasOnlyOneChild: true
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
        ...tabProps
    });
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/index.tsx











const SNSAdaptor_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(2),
            '&:first-child': {
                marginTop: theme.spacing(3)
            }
        }
    };
});
/**
 * https://findtruman.io/#/encryption?clueId={clueId}
 * https://findtruman.io/#/findtruman/stories/{storyId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/puzzles/{puzzleId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/polls/{pollId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/completions/{completionId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/puzzle_result/{pollId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/poll_result/{pollId}
 */ const isFindTrumanURL = (input)=>{
    if (!input.startsWith('https://findtruman.io')) {
        return false;
    }
    const { pathname , hash  } = new URL(input);
    if (pathname !== '/') {
        return false;
    }
    if (hash.startsWith('#/encryption')) {
        return /^#\/encryption\?clueid=[\da-z]+$/i.test(hash);
    }
    if (hash.startsWith('#/findtruman/stories')) {
        return /^#\/findtruman\/stories\/[\da-z]+(\/|\/(puzzle|poll|completion)(s|_result)\/[\da-z]+\/?)?$/i.test(hash);
    }
    return false;
};
function Renderer({ url  }) {
    const { classes  } = SNSAdaptor_useStyles();
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    const fallbackUI = Array.from({
        length: 2
    }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
            className: classes.skeleton,
            animation: "wave",
            variant: "rectangular",
            width: i === 0 ? '80%' : '60%',
            height: 15
        }, i)
    );
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: fallbackUI,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            url: url
        })
    });
}
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,src/* parseURL */.Lk)(x.val).find(isFindTrumanURL);
        }, [
            props.message
        ]);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    PostInspector: function Component() {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isFindTrumanURL);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    ApplicationEntries: [
        {
            RenderEntryComponent ({ disabled  }) {
                const [open, setOpen] = (0,react.useState)(false);
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                            disabled: disabled,
                            title: "FindTruman",
                            icon: new URL(/* asset import */ __webpack_require__(45584), __webpack_require__.b).toString(),
                            onClick: ()=>setOpen(true)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanDialog, {
                            open: open,
                            onClose: ()=>setOpen(false)
                        })
                    ]
                });
            },
            defaultSortingPriority: 11
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 60784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$F": () => (/* binding */ submitCompletion),
/* harmony export */   "$G": () => (/* binding */ fetchUserCompletionStatus),
/* harmony export */   "He": () => (/* binding */ fetchPuzzleResult),
/* harmony export */   "JJ": () => (/* binding */ fetchUserPuzzleStatus),
/* harmony export */   "K1": () => (/* binding */ fetchUserPollStatus),
/* harmony export */   "LP": () => (/* binding */ submitPoll),
/* harmony export */   "Oz": () => (/* binding */ fetchQuestions),
/* harmony export */   "PN": () => (/* binding */ fetchExchangeStatus),
/* harmony export */   "UN": () => (/* binding */ openMysteryBox),
/* harmony export */   "aE": () => (/* binding */ fetchClue),
/* harmony export */   "cz": () => (/* binding */ fetchUserStoryStatus),
/* harmony export */   "dr": () => (/* binding */ fetchStoryInfo),
/* harmony export */   "du": () => (/* binding */ fetchUserParticipatedStoryStatus),
/* harmony export */   "j9": () => (/* binding */ fetchMysteryBoxInfo),
/* harmony export */   "kc": () => (/* binding */ fetchUserPartsInfo),
/* harmony export */   "mf": () => (/* binding */ fetchPollResult),
/* harmony export */   "oJ": () => (/* binding */ fetchUserPoap),
/* harmony export */   "oM": () => (/* binding */ fetchConst),
/* harmony export */   "pU": () => (/* binding */ fetchAllPollsOrPuzzles),
/* harmony export */   "v_": () => (/* binding */ exchangeFtgWhitelist),
/* harmony export */   "yR": () => (/* binding */ submitPuzzle)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5027);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9098);



const PREFIX = 'https://findtruman.io/api';
async function request(url, options) {
    const response = await fetch(urlcat__WEBPACK_IMPORTED_MODULE_0___default()(PREFIX, url), {
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        ...options
    });
    const { data , code , msg  } = await response.json();
    if (code !== 0) {
        throw new _types__WEBPACK_IMPORTED_MODULE_2__/* .FindTrumanRemoteError */ .$T(msg, code, data);
    }
    return data;
}
function fetchConst(lang) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/consts', {
        l: lang
    }));
}
function fetchStoryInfo(storyId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/stories/:storyId', {
        storyId
    }));
}
function fetchUserStoryStatus(storyId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/stories/:storyId/status', {
        storyId,
        uaddr
    }));
}
function fetchUserPuzzleStatus(puzzleId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/puzzles/:puzzleId/status', {
        puzzleId,
        uaddr
    }));
}
function fetchUserPollStatus(pollId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls/:pollId/status', {
        pollId,
        uaddr
    }));
}
function fetchUserCompletionStatus(quesId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/subjective_questions/:quesId', {
        quesId,
        uaddr
    }));
}
function fetchPuzzleResult(puzzleId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/puzzles/:puzzleId/result', {
        puzzleId
    }));
}
function fetchPollResult(pollId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls/:pollId/result', {
        pollId
    }));
}
async function submitPuzzle(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/puzzles/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
async function submitPoll(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/polls/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
async function submitCompletion(address, params) {
    const { timestamp , quesId , answers  } = params;
    const data = {
        timestamp,
        address,
        rawdata: {
            quesId,
            answers
        }
    };
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/subjective_questions/_/answer', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
function fetchUserParticipatedStoryStatus(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/participated_story_status', {
        uaddr
    }));
}
function fetchClue(clueId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/clues/:clueId', {
        clueId,
        uaddr
    }));
}
function fetchUserPoap(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/ftpoap', {
        uaddr
    }));
}
function fetchMysteryBoxInfo(id) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/mystery-boxes/:id', {
        id
    }));
}
async function openMysteryBox(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/mystery-boxes/_/open', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
function fetchUserPartsInfo(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/parts_with_additional', {
        uaddr
    }));
}
function fetchExchangeStatus(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_status', {
        uaddr
    }));
}
function fetchAllPollsOrPuzzles(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls_or_puzzles', {
        uaddr
    }));
}
function fetchQuestions(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/questions', {
        uaddr
    }));
}
function exchangeFtgWhitelist() {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_ftg_airdrop_whitelist', {}), {
        method: 'POST',
        body: JSON.stringify({})
    });
}


/***/ }),

/***/ 9098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$T": () => (/* binding */ FindTrumanRemoteError),
/* harmony export */   "Ym": () => (/* binding */ ClueConditionType),
/* harmony export */   "hQ": () => (/* binding */ PostType),
/* harmony export */   "pX": () => (/* binding */ PartType)
/* harmony export */ });
var PostType;
(function(PostType) {
    PostType["Status"] = 'result';
    PostType["Puzzle"] = 'puzzle';
    PostType["Poll"] = 'poll';
    PostType["Completion"] = 'completion';
    PostType["PuzzleResult"] = 'puzzle_result';
    PostType["PollResult"] = 'poll_result';
    PostType["Encryption"] = 'encryption';
})(PostType || (PostType = {}));
var ClueConditionType;
(function(ClueConditionType) {
    ClueConditionType["And"] = 'and';
    ClueConditionType["Or"] = 'or';
    ClueConditionType["Erc721"] = 'hold-erc721';
    ClueConditionType["Erc20"] = 'hold-erc20';
})(ClueConditionType || (ClueConditionType = {}));
var PartType;
(function(PartType) {
    PartType[PartType["Head"] = 1] = "Head";
    PartType[PartType["Skin"] = 2] = "Skin";
    PartType[PartType["Clothes"] = 3] = "Clothes";
    PartType[PartType["Mask"] = 4] = "Mask";
    PartType[PartType["Background"] = 5] = "Background";
})(PartType || (PartType = {}));
class FindTrumanRemoteError extends Error {
    constructor(message, code, data){
        super(message);
        this.code = code;
        this.data = data;
    }
}


/***/ }),

/***/ 80480:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 45584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1eca24f4e181c936b32f.png";

/***/ })

}]);