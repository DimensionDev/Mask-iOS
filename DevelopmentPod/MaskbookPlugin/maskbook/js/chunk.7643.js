(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7643],{

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

/***/ 26721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ LinkOutIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const LinkOutIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('LinkOutIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12.6667 13.1667H13.1667V12.6667V8.5H13.5V12.6667C13.5 13.1239 13.1239 13.5 12.6667 13.5H3.33333C2.8711 13.5 2.5 13.1255 2.5 12.6667V3.33333C2.5 2.87451 2.8711 2.5 3.33333 2.5H7.5V2.83333H3.33333H2.83333V3.33333V12.6667V13.1667H3.33333H12.6667ZM13.1667 6.16667V4.27333V3.06623L12.3131 3.91978L6.11333 10.1196L5.88044 9.88667L12.0802 3.68689L12.9338 2.83333H11.7267H9.83333V2.5H13.5V6.16667H13.1667Z",
        fill: "#07101B"
    })
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12.6667 13.1667H13.1667V12.6667V8.5H13.5V12.6667C13.5 13.1239 13.1239 13.5 12.6667 13.5H3.33333C2.8711 13.5 2.5 13.1255 2.5 12.6667V3.33333C2.5 2.87451 2.8711 2.5 3.33333 2.5H7.5V2.83333H3.33333H2.83333V3.33333V12.6667V13.1667H3.33333H12.6667ZM13.1667 6.16667V4.27333V3.06623L12.3131 3.91978L6.11333 10.1196L5.88044 9.88667L12.0802 3.68689L12.9338 2.83333H11.7267H9.83333V2.5H13.5V6.16667H13.1667Z",
        fill: "#F5F5F5"
    })
}), undefined, '0 0 16 16');


/***/ }),

/***/ 60733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ SettingsIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const SettingsIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Settings', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12 23l-9.5-5.5v-11L12 1l9.5 5.5v11L12 23zm0-19.688L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311v.001zM12 16a4 4 0 112.828-1.172A4.027 4.027 0 0112 16zm0-6a2 2 0 10-.001 4A2 2 0 0012 10z"
    })
}), '0 0 24 24');


/***/ }),

/***/ 23397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "Ol": () => (/* binding */ useCurrentLinkedPersona),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity),
/* harmony export */   "fb": () => (/* binding */ useCurrentVisitingIdentity)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80226);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82192);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14257);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23587);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70981);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78778);







const default_ = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.ValueRef({}, lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
function useLastRecognizedIdentity() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized || default_);
}
function useCurrentVisitingIdentity() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.currentVisitingIdentityProvider */ .LM.collecting.currentVisitingIdentityProvider?.recognized || default_);
}
function useCurrentIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(CurrentIdentitySubscription);
}
function useCurrentLinkedPersona() {
    const currentIdentity = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(CurrentIdentitySubscription);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(async ()=>{
        if (!currentIdentity?.linkedPersona) return;
        return _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(currentIdentity.linkedPersona);
    }, [
        currentIdentity?.linkedPersona
    ]);
}
const CurrentIdentitySubscription = {
    getCurrentValue () {
        const all = _social_network__WEBPACK_IMPORTED_MODULE_1__/* .globalUIState.profiles.value */ .EJ.profiles.value;
        const current = (_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized || default_).value.identifier;
        return all.find((i)=>i.identifier === current
        ) || all[0];
    },
    subscribe (sub) {
        const a = _social_network__WEBPACK_IMPORTED_MODULE_1__/* .globalUIState.profiles.addListener */ .EJ.profiles.addListener(sub);
        const b = _social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized.addListener(sub);
        return ()=>[
                a(),
                b?.()
            ]
        ;
    }
};


/***/ }),

/***/ 40545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ SignSteps),
  "R": () => (/* binding */ Steps)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/external-link.js
var external_link = __webpack_require__(12718);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./src/components/shared/VerifyWallet/CurrentWalletBox.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        currentAccount: {
            padding: '12px 8px 12px 12px',
            width: '100%',
            background: theme.palette.background.input,
            boxSizing: 'border-box',
            marginBottom: theme.spacing(2),
            display: 'flex',
            borderRadius: 8,
            alignItems: 'center'
        },
        accountInfo: {
            flexGrow: 1,
            marginLeft: theme.spacing(1)
        },
        accountName: {
            fontSize: 14,
            marginRight: 4,
            fontWeight: 'bold',
            lineHeight: '18px'
        },
        infoRow: {
            display: 'flex',
            alignItems: 'center'
        },
        connectButton: {
            fontSize: 12,
            marginLeft: theme.spacing(1),
            padding: theme.spacing(1, 2)
        },
        actionButton: {
            boxSizing: 'border-box',
            fontSize: 12,
            lineHeight: '16px',
            padding: '8px 12px',
            fontWeight: 'bold',
            background: theme.palette.text.primary,
            color: theme.palette.background.paper,
            borderRadius: '6px',
            minWidth: 'unset',
            width: '69px'
        },
        address: {
            fontSize: 10,
            lineHeight: 1,
            marginRight: theme.spacing(1),
            display: 'inline-block',
            color: theme.palette.text.secondary
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
function CurrentWalletBox(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const { wallet , walletName , notInPop , changeWallet  } = props;
    const { providerType  } = wallet;
    const providerDescriptor = (0,entry_web3/* useProviderDescriptor */.fY)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, providerType);
    const networkDescriptor = (0,entry_web3/* useNetworkDescriptor */.Vw)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const frontAccount = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = notInPop ? frontAccount : wallet.account;
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, wallet.account);
    return account ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.currentAccount,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* WalletIcon */.o, {
                size: 30,
                badgeSize: 12,
                mainIcon: providerDescriptor?.icon,
                badgeIcon: networkDescriptor?.icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.accountInfo,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.infoRow,
                        children: providerType !== types/* ProviderType.MaskWallet */.lP.MaskWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            children: domain && Others?.formatDomainName ? Others.formatDomainName(domain) : providerDescriptor?.name
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.accountName,
                                children: walletName ?? providerDescriptor?.name
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.infoRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.address,
                                variant: "body2",
                                title: account,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedAddress */.Kv, {
                                    address: account,
                                    size: 4,
                                    formatter: Others?.formatAddress
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: Others?.explorerResolver.addressLink?.(wallet.chainId, account) ?? '',
                                target: "_blank",
                                title: t('plugin_wallet_view_on_explorer'),
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                    className: classes.linkIcon,
                                    size: 14
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.actionButton,
                variant: "contained",
                size: "small",
                onClick: changeWallet,
                children: t('wallet_status_button_change')
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: classes.connectButtonWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            className: classes.connectButton,
            color: "primary",
            variant: "contained",
            size: "small",
            onClick: changeWallet,
            children: t('plugin_wallet_on_connect')
        })
    });
}

;// CONCATENATED MODULE: ./src/components/shared/VerifyWallet/constants.ts
const step1ActiveIcon = new URL(/* asset import */ __webpack_require__(60439), __webpack_require__.b);
const step2DisableIcon = new URL(/* asset import */ __webpack_require__(5895), __webpack_require__.b);
const step2ActiveIcon = new URL(/* asset import */ __webpack_require__(20864), __webpack_require__.b);
const stepSuccessIcon = new URL(/* asset import */ __webpack_require__(83946), __webpack_require__.b);
const dividerDisableIcon = new URL(/* asset import */ __webpack_require__(26623), __webpack_require__.b);
const dividerActiveIcon = new URL(/* asset import */ __webpack_require__(40634), __webpack_require__.b);
const dividerSuccessIcon = new URL(/* asset import */ __webpack_require__(54778), __webpack_require__.b);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(80875);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
;// CONCATENATED MODULE: ./src/components/shared/VerifyWallet/Steps.tsx










const Steps_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        stepBox: {
            marginTop: 12,
            display: 'flex',
            alignItems: 'flex-start',
            flexGrow: 'grow'
        },
        stepLine: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 12
        },
        stepRowBox: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 200
        },
        stepRow: {
            color: theme.palette.text.secondary,
            minHeight: 100
        },
        stepTitle: {
            fontSize: 14,
            fontWeight: 700
        },
        stepIntro: {
            marginTop: 12,
            fontSize: 12
        },
        divider: {
            margin: '4px 0'
        },
        actionBox: {
            width: 'calc(100% - 32px)',
            gap: 12,
            position: 'absolute',
            bottom: 16,
            display: 'flex',
            alignItems: 'center'
        },
        roundBtn: {
            borderRadius: 99
        },
        cancelBtn: {
            padding: '8px 22px',
            borderRadius: 99,
            border: '1px solid #EBEEF0',
            color: '#1C68F3',
            fontSize: 14
        },
        disableBtn: {
            pointerEvents: 'none',
            opacity: 0.5
        },
        hasBound: {
            fontSize: 14,
            width: '100%',
            textAlign: 'left',
            color: theme.palette.error.main
        }
    })
);
var SignSteps;
(function(SignSteps) {
    SignSteps[SignSteps["Ready"] = 0] = "Ready";
    SignSteps[SignSteps["FirstStepDone"] = 1] = "FirstStepDone";
    SignSteps[SignSteps["SecondStepDone"] = 2] = "SecondStepDone";
})(SignSteps || (SignSteps = {}));
function Steps(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Steps_useStyles();
    const { changeWallet , nickname , wallet , disableConfirm , onConfirm , step , confirmLoading , notInPop , notEvm , isBound , notConnected , walletName , onCustomCancel ,  } = props;
    const { showSnackbar  } = (0,entry/* usePopupCustomSnackbar */.D9)();
    const stepIconMap = {
        [SignSteps.Ready]: {
            step1: step1ActiveIcon,
            divider: dividerDisableIcon,
            step2: step2DisableIcon
        },
        [SignSteps.FirstStepDone]: {
            step1: stepSuccessIcon,
            divider: dividerActiveIcon,
            step2: step2ActiveIcon
        },
        [SignSteps.SecondStepDone]: {
            step1: stepSuccessIcon,
            divider: dividerSuccessIcon,
            step2: stepSuccessIcon
        }
    };
    (0,react.useEffect)(()=>{
        if (disableConfirm && !notInPop) {
            showSnackbar(t('wallet_verify_has_bound'), {
                variant: 'error'
            });
        }
    }, [
        disableConfirm
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CurrentWalletBox, {
                notInPop: notInPop,
                walletName: walletName,
                wallet: wallet,
                changeWallet: changeWallet
            }),
            notEvm && wallet.account && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.hasBound,
                children: t('plugin_tips_not_evm_alert')
            }),
            isBound && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.hasBound,
                children: t('wallet_verify_has_bound')
            }),
            notConnected && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.hasBound,
                style: {
                    textAlign: 'center'
                },
                children: t('wallet_verify_empty_alert')
            }),
            !notConnected && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.stepBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.stepLine,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ImageIcon */.XB, {
                                size: 22,
                                icon: stepIconMap[step].step1
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.divider,
                                src: stepIconMap[step].divider.toString()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ImageIcon */.XB, {
                                size: 22,
                                icon: stepIconMap[step].step2
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.stepRowBox,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.stepRow,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.stepTitle,
                                        children: t('wallet_verify_persona_name', {
                                            personaName: nickname ?? 'Persona Name'
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.stepIntro,
                                        children: t('wallet_verify_persona_sign_intro')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.stepRow,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        className: classes.stepTitle,
                                        children: [
                                            walletName ?? t('wallet'),
                                            " Sign"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.stepIntro,
                                        children: t('waller_verify_wallet_sign_intro')
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.actionBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        className: notInPop ? '' : classes.cancelBtn,
                        variant: "roundedFlat",
                        fullWidth: true,
                        color: "secondary",
                        onClick: onCustomCancel,
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                        className: notInPop ? '' : classes.roundBtn,
                        color: notInPop ? 'inherit' : 'primary',
                        loading: confirmLoading,
                        size: notInPop ? 'medium' : 'large',
                        disabled: disableConfirm,
                        variant: notInPop ? 'roundedContained' : 'contained',
                        fullWidth: true,
                        onClick: onConfirm,
                        children: disableConfirm ? t('wallet_verify_persona_sign') : step === 2 ? t('done') : t('confirm')
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 22933:
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
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/Tips.tsx


const TipsIcon = (0,utils/* createIcon */.I)('TipIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.5 3C10.2157 3 3.5 9.71573 3.5 18V30.757C3.5 31.9958 4.50422 33 5.74299 33H18.5C26.7843 33 33.5 26.2843 33.5 18C33.5 9.71573 26.7843 3 18.5 3Z",
            fill: "url(#tips_paint0_linear_2324_1469)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.0108 25.077C11.8171 24.8813 11.7087 24.6168 11.709 24.3409C11.7093 24.065 11.8184 23.7999 12.0125 23.603L13.117 22.4986L13.0333 22.3591C12.7183 21.8498 12.4913 21.291 12.3617 20.7058C12.2506 20.2594 12.2054 19.7989 12.2274 19.3389C12.2518 19.066 12.3824 18.8132 12.591 18.6348C12.7996 18.4565 13.0696 18.3669 13.3428 18.3854C13.616 18.404 13.8706 18.5291 14.0516 18.7339C14.2327 18.9386 14.3258 19.2067 14.3109 19.4802C14.3069 19.735 14.3359 19.9891 14.3972 20.2361C14.5285 20.8374 14.8285 21.3881 15.2621 21.8237C15.4839 22.0634 15.7526 22.2548 16.0516 22.3864C16.3506 22.518 16.6736 22.5868 17.0008 22.5886C17.1554 22.587 17.3081 22.5525 17.4486 22.4875C17.5892 22.4225 17.7145 22.3285 17.8163 22.2116C18.2288 21.6983 18.1742 20.9742 17.5882 19.1096L17.4507 18.6811C17.0902 17.7144 16.879 16.6979 16.8245 15.6665C16.841 14.8771 17.1453 14.1197 17.6801 13.5367C18.215 12.9537 18.9435 12.5852 19.7288 12.5004C20.6278 12.4224 21.527 12.6343 22.2946 13.105L22.4315 13.186L23.5416 12.0759C23.7415 11.8984 24.0014 11.8036 24.2682 11.811C24.5349 11.8184 24.7884 11.9274 24.9767 12.1157C25.165 12.304 25.274 12.5575 25.2814 12.8242C25.2888 13.091 25.194 13.3509 25.0165 13.5508L23.912 14.6553L23.9969 14.7935C24.3107 15.3034 24.5376 15.862 24.6686 16.4468C24.7789 16.8933 24.8241 17.3537 24.8028 17.8136C24.7957 17.9521 24.7611 18.0879 24.7009 18.2131C24.6407 18.3383 24.5563 18.4503 24.4525 18.5426C24.3486 18.635 24.2275 18.7057 24.0962 18.7508C23.9649 18.7959 23.826 18.8144 23.6877 18.8053C23.5494 18.7961 23.4144 18.7594 23.2906 18.6974C23.1669 18.6354 23.0568 18.5493 22.9669 18.4441C22.877 18.3389 22.809 18.2168 22.7669 18.0848C22.7249 17.9529 22.7096 17.8138 22.7219 17.6756C22.7262 17.4202 22.6969 17.1656 22.6346 16.9181C22.5058 16.3158 22.2066 15.7637 21.7727 15.3275C21.5508 15.0879 21.282 14.8966 20.9827 14.7653C20.6835 14.634 20.3603 14.5656 20.0331 14.5643C19.8784 14.566 19.7257 14.6004 19.585 14.6652C19.4442 14.7299 19.3186 14.8236 19.2163 14.94C18.8051 15.452 18.858 16.1777 19.4467 18.0416L19.5828 18.4689C19.9426 19.4361 20.1533 20.453 20.2078 21.4848C20.1927 22.2743 19.8891 23.0322 19.3542 23.6153C18.8193 24.1983 18.0903 24.5662 17.3047 24.6495C16.4066 24.7276 15.5082 24.5157 14.7416 24.045L14.6034 23.9626L13.492 25.074C13.3949 25.1715 13.2795 25.2489 13.1526 25.3018C13.0257 25.3547 12.8897 25.3821 12.7524 25.3824C12.6151 25.3827 12.4792 25.3558 12.3525 25.3034C12.2258 25.251 12.1108 25.1741 12.014 25.077L12.0108 25.077Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                id: "tips_paint0_linear_2324_1469",
                x1: "18.5",
                y1: "3",
                x2: "18.5",
                y2: "33",
                gradientUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        stopColor: "#F7931E"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "1",
                        stopColor: "#FBB03B"
                    })
                ]
            })
        })
    ]
}), '0 0 37 36');

// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ./src/plugins/Tips/base.ts + 7 modules
var base = __webpack_require__(2358);
// EXTERNAL MODULE: ./src/plugins/Tips/components/index.ts + 14 modules
var components = __webpack_require__(11940);
// EXTERNAL MODULE: ./src/plugins/Tips/contexts/index.ts + 8 modules
var contexts = __webpack_require__(19600);
// EXTERNAL MODULE: ./src/plugins/Tips/storage/index.ts
var storage = __webpack_require__(32581);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(10503);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(80875);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js
var cloneDeep = __webpack_require__(46440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.js
var isEqual = __webpack_require__(23587);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ./src/plugins/Tips/locales/index.ts + 1 modules
var locales = __webpack_require__(39761);
// EXTERNAL MODULE: ./src/plugins/Tips/hooks/useKv.ts
var useKv = __webpack_require__(34893);
// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var src_entry = __webpack_require__(70226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sortBy.js
var sortBy = __webpack_require__(5043);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
;// CONCATENATED MODULE: ./src/plugins/Tips/hooks/useTipsWalletsList.ts




function useTipsWalletsList(proofList, identity, kv) {
    if (!proofList || !proofList.length) return shared_base_src/* EMPTY_LIST */.rP;
    const proofs = (0,sortBy/* default */.Z)(proofList, (x)=>-Number.parseInt(x.last_checked_at, 10)
    ).map((wallet, index, list)=>({
            ...wallet,
            rawIdx: list.length - index - 1
        })
    );
    if (kv && kv.proofs.length > 0 && proofs.length > 0) {
        const kvCache = kv.proofs.find((x)=>x.identity === identity
        );
        if (!kvCache) return shared_base_src/* EMPTY_LIST */.rP;
        const result = proofs.map((x)=>{
            x.isDefault = 0;
            x.isPublic = 1;
            const matched = kvCache?.content[src_entry/* PluginId.Tips */.je.Tips]?.find((proof)=>(0,base_src/* isSameAddress */.Wr)(x.identity, proof.identity)
            );
            if (matched) {
                x.isDefault = matched.isDefault;
                x.isPublic = matched.isPublic;
            }
            return x;
        });
        const idx = result.findIndex((i)=>i.isDefault
        );
        if (idx !== -1) {
            result.unshift(result.splice(idx, 1)[0]);
        } else {
            result[0].isDefault = 1;
        }
        return result;
    }
    proofs.forEach((x, idx)=>{
        x.isPublic = 1;
        x.isDefault = 0;
        if (idx === 0) {
            x.isDefault = 1;
        }
    });
    return proofs;
}

;// CONCATENATED MODULE: ./src/plugins/Tips/hooks/useProvedWallets.ts




function useProvedWallets(personaIdentifier) {
    const res = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!personaIdentifier) return shared_base_src/* EMPTY_LIST */.rP;
        const currentPersona = await service/* default.Identity.queryPersona */.ZP.Identity.queryPersona(personaIdentifier);
        if (!currentPersona) return shared_base_src/* EMPTY_LIST */.rP;
        const { proofs  } = await web3_providers_src/* NextIDProof.queryExistedBindingByPersona */.q7.queryExistedBindingByPersona(currentPersona.identifier.publicKeyAsHex);
        return proofs.filter((x)=>x.platform === shared_base_src/* NextIDPlatform.Ethereum */.Vd.Ethereum
        );
    }, [
        personaIdentifier
    ]);
    return res;
}

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ./src/components/shared/VerifyWallet/Steps.tsx + 2 modules
var Steps = __webpack_require__(40545);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/bodyViews/AddWallet.tsx















const AddWalletView = /*#__PURE__*/ (0,react.memo)(({ currentPersona , bindings , onCancel  })=>{
    const t = (0,locales/* useI18N */.M)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const providerType = (0,entry_web3/* useProviderType */._o)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const wallet = (0,entry_web3/* useWallet */.Os)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, account);
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const isNotEvm = (0,entry_web3/* useProviderDescriptor */.fY)()?.providerAdaptorPluginID !== base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    const nowTime = (0,react.useMemo)(()=>(0,format/* default */.Z)(new Date(), 'yyyy-MM-dd HH:mm')
    , []);
    const isBound = bindings.some((x)=>(0,base_src/* isSameAddress */.Wr)(x.identity, account)
    );
    const walletName = ()=>{
        if (isNotEvm && providerType) return `${Others?.providerResolver.providerName(providerType)} Wallet`;
        if (domain && Others?.formatDomainName) return Others.formatDomainName(domain);
        if (providerType && providerType !== types/* ProviderType.MaskWallet */.lP.MaskWallet) return `${Others?.providerResolver.providerName(providerType)} Wallet`;
        return wallet?.name ?? 'Wallet';
    };
    const { value: payload , loading: payloadLoading  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!currentPersona || !account) return;
        return web3_providers_src/* NextIDProof.createPersonaPayload */.q7.createPersonaPayload(currentPersona.identifier.publicKeyAsHex, shared_base_src/* NextIDAction.Create */.BU.Create, account, shared_base_src/* NextIDPlatform.Ethereum */.Vd.Ethereum, 'default');
    }, [
        currentPersona?.identifier,
        account
    ]);
    const [{ value: signature  }, personaSilentSign] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!payload || !currentPersona?.identifier) return;
        try {
            const signResult = await service/* default.Identity.generateSignResult */.ZP.Identity.generateSignResult(currentPersona.identifier, payload.signPayload);
            showSnackbar(t.tip_persona_sign_success(), {
                variant: 'success',
                message: nowTime
            });
            return signResult.signature.signature;
        } catch (error) {
            showSnackbar(t.tip_persona_sign_error(), {
                variant: 'error',
                message: nowTime
            });
            return;
        }
    }, [
        currentPersona?.identifier,
        payload
    ]);
    const [{ value: walletSignState  }, walletSign] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!payload || !currentPersona || !account) return false;
        try {
            const walletSig = await connection?.signMessage(payload.signPayload, 'personalSign', {
                chainId,
                account,
                providerType
            });
            if (!walletSig) throw new Error('Wallet sign failed');
            await web3_providers_src/* NextIDProof.bindProof */.q7.bindProof(payload.uuid, currentPersona.identifier.publicKeyAsHex, shared_base_src/* NextIDAction.Create */.BU.Create, shared_base_src/* NextIDPlatform.Ethereum */.Vd.Ethereum, account, payload.createdAt, {
                walletSignature: walletSig,
                signature
            });
            showSnackbar(t.tip_wallet_sign_success(), {
                variant: 'success',
                message: nowTime
            });
            return true;
        } catch (error) {
            console.log(error, 'error');
            showSnackbar(t.tip_wallet_sign_error(), {
                variant: 'error',
                message: nowTime
            });
            return false;
        }
    }, [
        currentPersona?.identifier,
        payload,
        signature,
        connection
    ]);
    const [{ loading: confirmLoading , value: step = Steps/* SignSteps.Ready */.f.Ready  }, handleConfirm] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            if (walletSignState) {
                onCancel();
                return Steps/* SignSteps.SecondStepDone */.f.SecondStepDone;
            }
            if (!signature && !walletSignState) {
                await personaSilentSign();
                return Steps/* SignSteps.FirstStepDone */.f.FirstStepDone;
            } else if (signature && !walletSignState) {
                const res = await walletSign();
                return res ? Steps/* SignSteps.SecondStepDone */.f.SecondStepDone : Steps/* SignSteps.FirstStepDone */.f.FirstStepDone;
            } else {
                onCancel();
                return Steps/* SignSteps.SecondStepDone */.f.SecondStepDone;
            }
        } catch  {
            showSnackbar('Connect error', {
                variant: 'error',
                message: nowTime
            });
            return Steps/* SignSteps.Ready */.f.Ready;
        }
    }, [
        signature,
        walletSignState,
        walletSign,
        personaSilentSign
    ]);
    const { openDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.selectProviderDialogUpdated */.R$.events.selectProviderDialogUpdated);
    if (!currentPersona || !providerType) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Steps/* Steps */.R, {
            isBound: isBound,
            notEvm: isNotEvm,
            notConnected: !account,
            wallet: {
                account,
                chainId,
                providerType
            },
            walletName: walletName(),
            nickname: currentPersona.nickname,
            step: step,
            confirmLoading: confirmLoading || payloadLoading,
            disableConfirm: isBound || !!(isNotEvm && account) || !account,
            notInPop: true,
            changeWallet: openDialog,
            onConfirm: handleConfirm,
            onCustomCancel: onCancel
        })
    });
});
/* harmony default export */ const AddWallet = (AddWalletView);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Switch/Switch.js
var Switch = __webpack_require__(23465);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/external-link.js
var external_link = __webpack_require__(12718);
;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/components/WalletSwitch.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        currentAccount: {
            padding: theme.spacing(1.5),
            display: 'flex',
            border: `1px solid ${theme.palette.background.default}`,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        accountInfo: {
            fontSize: 16,
            flexGrow: 1,
            marginLeft: theme.spacing(1)
        },
        infoRow: {
            display: 'flex',
            alignItems: 'center'
        },
        accountName: {
            fontSize: 16,
            marginRight: 6
        },
        address: {
            fontSize: 14,
            marginRight: theme.spacing(1),
            color: theme.palette.text.secondary,
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
        }
    })
);
const resolveNetworkName = (pluginId)=>{
    const walletNameByNetwork = {
        [base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM]: 'EVM wallet',
        [base_src/* NetworkPluginID.PLUGIN_SOLANA */.FF.PLUGIN_SOLANA]: 'Solana wallet',
        [base_src/* NetworkPluginID.PLUGIN_FLOW */.FF.PLUGIN_FLOW]: 'Flow wallet'
    };
    return walletNameByNetwork[pluginId];
};
function WalletSwitch({ type , address , isPublic , chainId , index , onChange  }) {
    const { classes  } = useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const onSwitch = (e)=>{
        onChange(index, e.target.checked);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.currentAccount,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.accountInfo,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.infoRow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            children: resolveNetworkName(type)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.infoRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.address,
                                variant: "body2",
                                title: address,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedAddress */.Kv, {
                                    address: address,
                                    size: 4,
                                    formatter: Others?.formatAddress
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: Others?.explorerResolver.addressLink(chainId, address) ?? '',
                                target: "_blank",
                                title: t('plugin_wallet_view_on_explorer'),
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                    className: classes.linkIcon,
                                    size: 14
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.Z, {
                    checked: isPublic,
                    onChange: onSwitch
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/bodyViews/Setting.tsx







const Setting_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            height: '100%'
        },
        titleBox: {
            display: 'flex',
            gap: 4,
            alignItems: 'center',
            marginBottom: 16
        },
        walletSwitchBox: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12
        },
        switchContainer: {
            width: 'calc(50% - 6px)'
        }
    })
);
const SettingPage = /*#__PURE__*/ (0,react.memo)(({ wallets , onSwitchChange  })=>{
    const { classes  } = Setting_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.titleBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        sx: {
                            fontWeight: 'bold',
                            fontSize: 16
                        },
                        children: "Tips"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        children: [
                            "(",
                            wallets.filter((x)=>x.isPublic === 1
                            ).length,
                            "/",
                            wallets.length,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.walletSwitchBox,
                children: wallets.map((x, idx)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.switchContainer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSwitch, {
                            chainId: types/* ChainId.Mainnet */.a_.Mainnet,
                            type: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                            index: idx,
                            address: x.identity,
                            isPublic: !!x.isPublic,
                            onChange: onSwitchChange
                        })
                    }, idx);
                })
            })
        ]
    });
});
/* harmony default export */ const Setting = (SettingPage);

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/components/DisconnectDialog.tsx











const DisconnectDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            width: '320px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            boxSizing: 'border-box',
            padding: 24,
            fontSize: 14,
            lineHeight: '18px',
            color: theme.palette.text.secondary,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: theme.palette.background.default,
            borderRadius: 14,
            textAlign: 'center'
        },
        title: {
            fontSize: 14,
            lineHeight: '22px',
            color: theme.palette.text.primary,
            fontWeight: 500,
            marginBottom: 24
        },
        actions: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 16
        },
        button: {
            padding: '8px 0',
            width: '100%',
            borderRadius: 99,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '20px'
        },
        confirmButton: {
            marginTop: 56,
            backgroundColor: '#FFB100',
            color: '#ffffff',
            '&:hover': {
                backgroundColor: '#ef9f00'
            }
        },
        cancelButton: {
            border: '1px solid rgba(47, 51, 54, 1)'
        },
        strong: {
            fontWeight: 700,
            color: theme.palette.text.primary,
            fontSize: 16
        }
    })
);
const DisconnectWalletDialog = /*#__PURE__*/ (0,react.memo)(({ open , confirmLoading , onConfirmDisconnect , onClose , address , personaName  })=>{
    const { classes  } = DisconnectDialog_useStyles();
    const t = (0,locales/* useI18N */.M)();
    const handleConfirm = (0,react.useCallback)(async ()=>{
        await onConfirmDisconnect();
        onClose();
    }, [
        onConfirmDisconnect,
        address
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* InjectedDialog */.Fl, {
        open: open,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: t.tip_disconnect_dialog_title()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                        i18nKey: "plugin_tips_disconnect_introduction",
                        components: {
                            strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.strong
                            })
                        },
                        values: {
                            persona: personaName,
                            address: (0,formatter/* formatEthereumAddress */.j8)(address ?? '', 4)
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.actions,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                            fullWidth: true,
                            onClick: handleConfirm,
                            loading: confirmLoading,
                            className: classnames_default()(classes.button, classes.confirmButton),
                            children: t.confirm()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classnames_default()(classes.button, classes.cancelButton),
                            fullWidth: true,
                            color: "secondary",
                            onClick: onClose,
                            children: t.cancel()
                        })
                    ]
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(39969);
;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/components/WalletItem.tsx










const WalletItem_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        currentAccount: {
            padding: theme.spacing(1.5),
            display: 'flex',
            border: `1px solid ${theme.palette.background.default}`,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        accountInfo: {
            fontSize: 16,
            flexGrow: 1,
            marginLeft: theme.spacing(1)
        },
        infoRow: {
            display: 'flex',
            alignItems: 'center'
        },
        accountName: {
            fontWeight: 700,
            fontSize: 14,
            marginRight: 6
        },
        address: {
            fontSize: 10,
            marginRight: theme.spacing(1),
            color: theme.palette.text.secondary,
            display: 'inline-block'
        },
        link: {
            color: theme.palette.text.primary,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center'
        },
        linkIcon: {
            width: 16,
            height: 16,
            marginRight: theme.spacing(1)
        },
        defaultBtn: {
            fontSize: 14,
            fontWeight: 'bold',
            cursor: 'pointer'
        },
        delIcon: {
            width: 20,
            cursor: 'pointer'
        },
        defaultBadge: {
            padding: '2px 4px',
            borderRadius: 4,
            fontSize: 12,
            backgroundColor: 'rgba(28, 104, 243, 0.1)',
            color: '#1C68F3',
            fontWeight: 700,
            marginLeft: 4
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
function WalletItem({ address , isDefault , canDelete , fallbackName , setAsDefault , onDelete , nowIdx  }) {
    const { classes  } = WalletItem_useStyles();
    const t = (0,locales/* useI18N */.M)();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, address);
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const onCopy = (0,src/* useSnackbarCallback */.iD)(async (ev)=>{
        ev.stopPropagation();
        copyToClipboard((0,formatter/* formatEthereumAddress */.j8)(address));
    }, [], undefined, undefined, undefined, t.tip_copy_success_of_wallet_addr());
    const wallets = (0,entry_web3/* useWallets */.rB)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const walletName = (0,react.useMemo)(()=>{
        if (domain && Others?.formatDomainName) {
            return Others.formatDomainName(domain);
        }
        const currentWallet = wallets.find((x)=>Others?.isSameAddress(x.address, address)
        );
        const name = currentWallet?.name;
        return name !== undefined && currentWallet?.hasStoredKeyInfo ? name : fallbackName;
    }, [
        address,
        domain,
        fallbackName
    ]);
    const getActionRender = ()=>{
        if (!canDelete && !isDefault) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.defaultBtn,
            onClick: ()=>{
                if (!setAsDefault) return;
                setAsDefault(nowIdx ?? 0);
            },
            children: t.tip_set_as_default()
        });
        if (canDelete) return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            onClick: onDelete,
            className: classes.delIcon,
            src: new URL(/* asset import */ __webpack_require__(90515), __webpack_require__.b).toString()
        });
        return null;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.currentAccount,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.accountInfo,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.infoRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.accountName,
                                children: walletName
                            }),
                            isDefault && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.defaultBadge,
                                children: t.default()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.infoRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.address,
                                variant: "body2",
                                title: address,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedAddress */.Kv, {
                                    address: address,
                                    size: 4,
                                    formatter: Others?.formatAddress
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                underline: "none",
                                component: "button",
                                title: t.copy_address(),
                                onClick: onCopy,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: new URL(/* asset import */ __webpack_require__(27295), __webpack_require__.b).toString(),
                                    className: classes.linkIcon
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: Others?.explorerResolver.addressLink?.(types/* ChainId.Mainnet */.a_.Mainnet, address) ?? '',
                                target: "_blank",
                                title: t.view_on_explorer(),
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: new URL(/* asset import */ __webpack_require__(79838), __webpack_require__.b).toString(),
                                    className: classes.linkIcon
                                })
                            })
                        ]
                    })
                ]
            }),
            getActionRender()
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/bodyViews/Wallets.tsx







const Wallets_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        emptyBox: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            fontSize: 14,
            color: theme.palette.text.secondary
        },
        emptyIcon: {
            width: 36
        }
    })
);
const WalletsPage = /*#__PURE__*/ (0,react.memo)(({ wallets , releaseLoading , onRelease , personaName  })=>{
    const t = (0,locales/* useI18N */.M)();
    const [open, setOpen] = (0,react.useState)(false);
    const { classes  } = Wallets_useStyles();
    const [walletToDel, setWalletToDel] = (0,react.useState)();
    const deleteWallet = (0,react.useCallback)((wallet)=>{
        setWalletToDel(wallet);
        setOpen(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            wallets.map((x, idx)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem, {
                    nowIdx: idx,
                    onDelete: ()=>deleteWallet(x)
                    ,
                    canDelete: true,
                    fallbackName: `Wallet ${x.rawIdx ?? 0 + 1}`,
                    address: x.identity,
                    isDefault: !!x.isDefault
                }, idx);
            }),
            !wallets.length && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.emptyBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.emptyIcon,
                        src: new URL(/* asset import */ __webpack_require__(21819), __webpack_require__.b).toString()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: t.tip_wallet_add()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DisconnectWalletDialog, {
                personaName: personaName,
                confirmLoading: releaseLoading,
                onConfirmDisconnect: ()=>onRelease(walletToDel)
                ,
                address: walletToDel?.identity,
                onClose: ()=>setOpen(false)
                ,
                open: open
            })
        ]
    });
});
/* harmony default export */ const Wallets = (WalletsPage);

;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/components/EmptyStatus.tsx






const EmptyStatus_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            position: 'relative',
            width: '100%',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(249, 55, 55, 0.2) 100%), #FFFFFF;',
            borderRadius: '16px',
            padding: '16px',
            boxSizing: 'border-box',
            minHeight: 200
        },
        topBox: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        tipIcon: {
            width: 20,
            height: 20
        },
        iconBox: {
            display: 'flex',
            gap: 4,
            color: 'rgba(7, 16, 27, 1)'
        },
        provided: {
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.text.secondary,
            gap: 4,
            fontSize: 14
        },
        badge: {
            cursor: 'pointer',
            fontSize: 14,
            color: 'rgba(7, 16, 27, 1)',
            fontWeight: 500
        },
        linkIcon: {
            cursor: 'pointer',
            width: 16,
            textDecoration: 'none'
        },
        emptyImg: {
            margin: '16px 0',
            width: '100%'
        },
        actionBtn: {
            width: 254,
            cursor: 'pointer',
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            minWidth: 200,
            background: 'rgba(7, 16, 27, 1)',
            borderRadius: '99px',
            padding: '11px 0',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            justifyContent: 'center',
            maxHeight: 40,
            boxSizing: 'border-box'
        },
        walletIcon: {
            width: 18
        }
    })
);
const EmptyStatus = /*#__PURE__*/ (0,react.memo)(({ toAdd  })=>{
    const t = (0,locales/* useI18N */.M)();
    const { classes  } = EmptyStatus_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.topBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.iconBox,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.tipIcon,
                                src: new URL(/* asset import */ __webpack_require__(98582), __webpack_require__.b).toString(),
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                sx: {
                                    fontSize: 16,
                                    fontWeight: 700
                                },
                                children: "Tips"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.provided,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                sx: {
                                    fontSize: 14
                                },
                                children: "Provided by"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.badge,
                                children: "Mask Network"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: "https://mask.io",
                                className: classes.linkIcon,
                                target: "_blank",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                    size: 16
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.emptyImg,
                src: new URL(/* asset import */ __webpack_require__(35698), __webpack_require__.b).toString(),
                alt: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.actionBtn,
                onClick: toAdd,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.walletIcon,
                        src: new URL(/* asset import */ __webpack_require__(72628), __webpack_require__.b).toString(),
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        sx: {
                            fontSize: 14,
                            lineHeight: 18,
                            fontWeight: 700
                        },
                        children: t.tip_connect_your_wallet()
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(7708);
;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/components/VerifyAlertLine.tsx





const VerifyAlertLine_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            width: '100%',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '9px 8px',
            boxSizing: 'border-box'
        },
        closeIcon: {
            cursor: 'pointer',
            marginRight: theme.spacing(1)
        }
    })
);
function VerifyAlertLine({ onClose  }) {
    const t = (0,locales/* useI18N */.M)();
    const { classes  } = VerifyAlertLine_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                children: t.tip_verify_line_intro()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                className: classes.closeIcon,
                onClick: ()=>onClose()
            })
        ]
    });
}

// EXTERNAL MODULE: ../icons/general/Settings.tsx
var Settings = __webpack_require__(60733);
;// CONCATENATED MODULE: ../icons/brands/EVMChains.tsx


const EVMChainsIcon = (0,utils/* createIcon */.I)('EVMChainsIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z",
            fill: "#627EEA"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.99817 4.20312L8.93262 4.42191V10.7702L8.99817 10.8345L11.9974 9.09265L8.99817 4.20312Z",
            fill: "#C0CBF6"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.99937 4.20312L6 9.09265L8.99937 10.8345V7.75321V4.20312Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.99887 11.3894L8.96191 11.4336V13.695L8.99887 13.801L12 9.64844L8.99887 11.3894Z",
            fill: "#C0CBF6"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.99937 13.801V11.3894L6 9.64844L8.99937 13.801Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.99854 10.8313L11.9978 9.08944L8.99854 7.75V10.8313Z",
            fill: "#8197EE"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M6 9.08944L8.99937 10.8313V7.75L6 9.08944Z",
            fill: "#C0CBF6"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "18",
            cy: "9",
            r: "9",
            fill: "#212936"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.3192 1.69304L11.9947 4.76841C11.7922 4.88528 11.6241 5.05339 11.5073 5.25584C11.3905 5.45828 11.329 5.68792 11.3291 5.92167L11.3324 12.0792C11.3326 12.3125 11.3941 12.5418 11.5108 12.7439C11.6275 12.946 11.7953 13.1139 11.9973 13.2307L17.328 16.3122C17.5304 16.4291 17.7599 16.4906 17.9936 16.4906C18.2272 16.4906 18.4568 16.4291 18.6591 16.3122L23.9836 13.2378C24.1861 13.1209 24.3541 12.9528 24.471 12.7504C24.5878 12.5479 24.6493 12.3183 24.6492 12.0845L24.6459 5.92706C24.6457 5.6937 24.5842 5.46448 24.4675 5.26239C24.3508 5.0603 24.183 4.89244 23.981 4.77564L18.6503 1.69396C18.4479 1.57713 18.2184 1.51562 17.9847 1.51562C17.7511 1.51562 17.5215 1.57713 17.3192 1.69396V1.69304Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M15.5617 14.23C15.5699 14.1898 15.5879 14.1524 15.614 14.1208C17.2068 11.4182 18.7998 8.71566 20.3931 6.01324C20.4153 5.97572 20.4358 5.93716 20.4546 5.90354C20.4406 5.8791 20.4247 5.88414 20.4112 5.88414C19.7304 5.88655 19.0497 5.89092 18.3686 5.89011C18.3394 5.88959 18.3109 5.89801 18.2867 5.91421C18.2625 5.93042 18.2439 5.95365 18.2333 5.98077C17.7198 6.82994 17.2056 7.67887 16.6909 8.52758C15.6003 10.3268 14.5097 12.126 13.4189 13.9252C13.4093 13.9411 13.3992 13.9567 13.3906 13.9731C13.3713 14.0103 13.3494 14.0162 13.3103 13.9935C13.141 13.8935 12.9699 13.7968 12.7901 13.6934L17.6441 5.90836C17.6337 5.87669 17.6122 5.88461 17.5957 5.88403C17.3355 5.87623 17.0753 5.86499 16.8154 5.86269C16.4503 5.85187 16.0864 5.91052 15.7431 6.03551C15.4305 6.15126 15.1649 6.36694 14.9874 6.64909C14.1005 8.03238 13.2103 9.41355 12.3166 10.7926C12.3026 10.8144 12.2877 10.8357 12.2733 10.8573C12.2221 10.8573 12.2296 10.8151 12.2249 10.7856C12.2204 10.7411 12.2194 10.6965 12.2217 10.6519C12.2217 9.12659 12.227 7.6013 12.217 6.07613C12.209 5.94471 12.2406 5.81391 12.3078 5.70065C12.3749 5.58739 12.4745 5.49689 12.5937 5.44086C13.7665 4.7722 14.9318 4.08977 16.1009 3.41434C16.6227 3.11288 17.1461 2.8143 17.6641 2.50653C17.7615 2.44116 17.8762 2.40625 17.9935 2.40625C18.1109 2.40625 18.2256 2.44116 18.323 2.50653C19.2754 3.06549 20.2364 3.61148 21.1937 4.16252C21.9158 4.5783 22.6383 4.99336 23.3611 5.4077C23.4128 5.43719 23.4632 5.46874 23.5152 5.49777C23.5997 5.54269 23.6696 5.61086 23.7166 5.69423C23.7636 5.7776 23.7858 5.8727 23.7805 5.96826C23.7819 7.62743 23.7819 9.28659 23.7805 10.9458C23.7839 10.9866 23.7794 11.0277 23.7674 11.0668C23.71 11.1222 23.6893 11.06 23.6684 11.0306C23.5823 10.9095 23.5051 10.782 23.4251 10.6567C22.7846 9.65414 22.142 8.65293 21.4973 7.65305C21.2806 7.31511 21.0612 6.97854 20.8469 6.63922C20.7968 6.56004 20.7878 6.55889 20.7377 6.64392C20.4143 7.19121 20.091 7.73862 19.768 8.28614C19.7502 8.31658 19.7426 8.35184 19.7461 8.38688C19.7497 8.42193 19.7642 8.45495 19.7877 8.48122C20.0541 8.91101 20.3199 9.3411 20.5853 9.7715L21.946 11.9724C22.1296 12.2699 22.3135 12.567 22.4977 12.864C22.5319 12.9038 22.5511 12.9542 22.5521 13.0067C22.5152 13.0799 22.4385 13.1005 22.3745 13.1337C22.2697 13.2095 22.1544 13.2697 22.0323 13.3124C21.9664 13.296 21.9431 13.2366 21.9119 13.1879C21.4906 12.5308 21.0748 11.8704 20.6563 11.2117C20.2258 10.5347 19.7975 9.85515 19.3652 9.1788C19.3098 9.09204 19.3009 9.09147 19.2488 9.1788C18.8728 9.81143 18.5019 10.447 18.1249 11.079C18.1057 11.1086 18.0962 11.1435 18.0978 11.1788C18.0995 11.2141 18.1123 11.248 18.1342 11.2757C18.642 12.0583 19.1381 12.8478 19.6405 13.6343C19.7806 13.8535 19.9217 14.0718 20.0593 14.2926C20.0862 14.3355 20.1229 14.3783 20.0986 14.4364C19.9667 14.539 19.8244 14.6275 19.674 14.7003C19.2047 14.9734 18.7352 15.246 18.2655 15.5183C18.1903 15.5669 18.1026 15.5927 18.013 15.5927C17.9235 15.5927 17.8358 15.5669 17.7606 15.5183C17.0687 15.118 16.3756 14.7196 15.6812 14.3229C15.6333 14.3039 15.5919 14.2717 15.5617 14.23Z",
            fill: "#2D374B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.7471 11.0862C23.7482 11.0452 23.7502 11.0044 23.7502 10.9635C23.7502 9.30812 23.7508 7.65278 23.7518 5.99752C23.7577 5.89713 23.7342 5.79722 23.684 5.71003C23.6339 5.62285 23.5595 5.55218 23.4698 5.50672C21.7315 4.51021 19.9945 3.51145 18.2588 2.51043C18.1806 2.45958 18.0894 2.4324 17.9962 2.43215C17.903 2.43191 17.8116 2.45861 17.7332 2.50905C16.7693 3.06927 15.8041 3.62804 14.8378 4.18536C14.0624 4.63419 13.2871 5.08314 12.5119 5.5322C12.4291 5.57515 12.3604 5.6411 12.3142 5.72211C12.268 5.80313 12.2461 5.89578 12.2513 5.98891C12.2552 7.57731 12.2575 9.16571 12.258 10.7541C12.258 10.7895 12.2437 10.8288 12.2746 10.86C12.0909 11.1657 11.8892 11.4595 11.6959 11.7587C11.599 11.9084 11.5018 12.058 11.4042 12.2072C11.3886 12.2311 11.3705 12.2531 11.3397 12.2957C11.3374 12.2457 11.335 12.218 11.335 12.1905C11.335 10.0958 11.3353 8.00109 11.3361 5.90641C11.331 5.67392 11.39 5.44452 11.5067 5.24337C11.6234 5.04223 11.7932 4.8771 11.9975 4.76611C12.6716 4.36586 13.3546 3.98052 14.0331 3.58738C14.6056 3.25586 15.1762 2.92182 15.7483 2.58972C16.2819 2.27989 16.8101 1.96077 17.3528 1.6678C17.5606 1.55207 17.7957 1.49427 18.0335 1.50045C18.2713 1.50662 18.5031 1.57655 18.7047 1.70292C19.1407 1.95032 19.575 2.20232 20.0098 2.45225C20.4187 2.68764 20.8277 2.92319 21.2366 3.1589C21.6134 3.37585 21.9904 3.59258 22.3675 3.80908C22.7413 4.02382 23.1152 4.23844 23.4892 4.45295C23.6535 4.54739 23.8177 4.64195 23.981 4.73811C24.1613 4.84011 24.3163 4.98139 24.4345 5.15148C24.5527 5.32157 24.6311 5.5161 24.6638 5.72062C24.6715 5.77969 24.6739 5.83933 24.6709 5.89883C24.6709 7.96001 24.6712 10.0212 24.6717 12.0825C24.6728 12.2783 24.6305 12.472 24.5479 12.6496C24.4654 12.8272 24.3445 12.9843 24.1941 13.1098C24.1083 13.1752 24.016 13.2318 23.9187 13.2786C23.3602 13.6044 22.801 13.9288 22.2409 14.252C21.6458 14.5962 21.0504 14.9399 20.4548 15.283C19.8825 15.6146 19.3108 15.9474 18.7397 16.2814C18.5975 16.377 18.4375 16.443 18.2692 16.4754C17.9897 16.53 17.7 16.4931 17.443 16.3703C17.1582 16.2176 16.8807 16.0519 16.5999 15.891C16.2228 15.6747 15.846 15.4579 15.4693 15.2407C15.3628 15.1795 15.2563 15.1186 15.1498 15.0581C15.1106 15.0359 15.0839 15.0133 15.1144 14.9622C15.2554 14.7262 15.3941 14.4887 15.5343 14.2522C15.5392 14.2436 15.5519 14.2396 15.5609 14.2333C15.6916 14.2943 15.8181 14.3639 15.9396 14.4416C16.5549 14.7935 17.1693 15.1471 17.7827 15.5024C17.8535 15.5473 17.9358 15.5706 18.0197 15.5697C18.1035 15.5688 18.1853 15.5437 18.2552 15.4974C18.8378 15.1556 19.4234 14.8186 20.0077 14.48C20.0366 14.4633 20.0662 14.448 20.0956 14.4322C20.1507 14.3618 20.2243 14.3081 20.3081 14.2771C20.836 13.9746 21.3599 13.6662 21.8877 13.3645C21.9317 13.3394 21.9714 13.3006 22.0288 13.3071L22.5459 13.0076C22.5775 12.9415 22.6448 12.9202 22.7013 12.8876C22.9614 12.7374 23.2192 12.583 23.4816 12.4376C23.5576 12.3977 23.6203 12.3366 23.6624 12.2618C23.7046 12.1871 23.7242 12.1017 23.719 12.016C23.7217 11.7528 23.719 11.4894 23.7203 11.2261C23.7111 11.1777 23.7208 11.1277 23.7471 11.0862Z",
            fill: "#96BEDC"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.7473 11.0853C23.7487 11.4121 23.7559 11.7394 23.7486 12.0657C23.7506 12.1422 23.7314 12.2177 23.6931 12.284C23.6549 12.3502 23.599 12.4045 23.5318 12.441C23.2027 12.6273 22.8795 12.8242 22.5474 13.0056C22.4154 12.7646 22.2628 12.5351 22.1185 12.301C21.3688 11.0858 20.6182 9.87137 19.8668 8.65759C19.8219 8.58484 19.7806 8.50933 19.7304 8.4406C19.714 8.42087 19.7051 8.39605 19.7051 8.37042C19.7051 8.3448 19.714 8.31998 19.7304 8.30025C19.9097 8.00029 20.0861 7.69861 20.2637 7.39738L20.7564 6.56153C20.7651 6.54165 20.7805 6.52543 20.7999 6.51562C20.8856 6.6477 20.972 6.78093 21.0583 6.91427C21.5767 7.72137 22.0949 8.52846 22.6131 9.33555C22.9644 9.88315 23.3158 10.4308 23.6671 10.9785C23.6864 11.0191 23.7136 11.0554 23.7473 11.0853Z",
            fill: "#28A0F0"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M22.0305 13.3105C21.8165 13.451 21.5895 13.5704 21.369 13.7007C20.9691 13.9358 20.5666 14.1666 20.1653 14.3991C20.1424 14.412 20.1194 14.4242 20.0973 14.4367C20.0922 14.3996 20.0762 14.3648 20.0514 14.3367C19.6941 13.7751 19.3367 13.2137 18.9793 12.6523C18.6856 12.1913 18.391 11.7308 18.0956 11.2707C18.0756 11.2468 18.0641 11.217 18.0626 11.1859C18.0612 11.1548 18.0701 11.1241 18.0879 11.0985C18.4827 10.4336 18.8759 9.76765 19.2674 9.10071C19.2767 9.08534 19.2841 9.06743 19.3072 9.0625C19.3393 9.06973 19.3471 9.10186 19.3624 9.12584C20.0739 10.2465 20.7853 11.3673 21.4968 12.4881C21.6482 12.7267 21.7988 12.9658 21.9511 13.2039C21.9705 13.2442 21.9974 13.2805 22.0303 13.3107L22.0305 13.3105Z",
            fill: "#28A0F0"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M35.7307 11.1784C34.5286 16.0004 29.6446 18.935 24.822 17.7326C20.0015 16.5304 17.0669 11.6462 18.2696 6.82455C19.4712 2.002 24.3551 -0.93281 29.1762 0.269341C33.9985 1.47149 36.9329 6.35625 35.7306 11.1785L35.7307 11.1784H35.7307Z",
            fill: "#F3BA2F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M27.0005 5.71231L24.6698 8.04307L24.6698 8.04297L23.3137 6.68682L27.0005 3L30.6886 6.68792L29.3324 8.04407L27.0005 5.71231ZM22.3562 7.64502L21 9.00141L22.3561 10.3573L23.7123 9.00112L22.3562 7.64502ZM24.6702 9.95911L27.001 12.2897L29.3328 9.95801L30.6897 11.3134L30.689 11.3142L27.001 15.002L23.3142 11.3152L23.3123 11.3133L24.6702 9.95911ZM31.6455 7.64502L30.2893 9.00122L31.6455 10.3573L33.0016 9.00112L31.6455 7.64502Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M28.3768 9.00112H28.3774L27.0014 7.625L25.9843 8.6418L25.8674 8.7587L25.6264 8.99973L25.6245 9.0016L25.6264 9.00357L27.0014 10.3787L28.3775 9.00256L28.3781 9.0018L28.3769 9.00112",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M31.5 7.5C30.675 7.5 30 8.175 30 9C30 9.825 30.675 10.5 31.5 10.5C32.325 10.5 33 9.825 33 9C33 8.175 32.325 7.5 31.5 7.5ZM40.5 7.5C39.675 7.5 39 8.175 39 9C39 9.825 39.675 10.5 40.5 10.5C41.325 10.5 42 9.825 42 9C42 8.175 41.325 7.5 40.5 7.5ZM36 7.5C35.175 7.5 34.5 8.175 34.5 9C34.5 9.825 35.175 10.5 36 10.5C36.825 10.5 37.5 9.825 37.5 9C37.5 8.175 36.825 7.5 36 7.5Z",
            fill: "#536471"
        })
    ]
}), '0 0 45 18');

;// CONCATENATED MODULE: ../icons/brands/FLow.tsx


const FlowIcon = (0,utils/* createIcon */.I)('FlowIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z",
            fill: "#00EF8B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.9493 7.59375H10.4077V10.1354H12.9493V7.59375Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.86772 11.0875C7.86772 11.2762 7.81177 11.4607 7.70694 11.6176C7.60212 11.7744 7.45312 11.8967 7.2788 11.9689C7.10448 12.0411 6.91267 12.06 6.72761 12.0232C6.54255 11.9864 6.37256 11.8955 6.23914 11.7621C6.10572 11.6287 6.01486 11.4587 5.97805 11.2737C5.94124 11.0886 5.96014 10.8968 6.03234 10.7225C6.10455 10.5481 6.22682 10.3992 6.38371 10.2943C6.54059 10.1895 6.72504 10.1335 6.91372 10.1335H7.86772V7.59375H6.91372C6.22271 7.59375 5.54722 7.79866 4.97267 8.18256C4.39812 8.56646 3.95031 9.11212 3.68587 9.75053C3.42144 10.3889 3.35225 11.0914 3.48706 11.7692C3.62186 12.4469 3.95462 13.0694 4.44323 13.558C4.93185 14.0467 5.55439 14.3794 6.23212 14.5142C6.90985 14.649 7.61233 14.5798 8.25074 14.3154C8.88915 14.051 9.43481 13.6032 9.81871 13.0286C10.2026 12.454 10.4075 11.7786 10.4075 11.0875V10.1335H7.86772V11.0875Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M11.3615 6.32285H14.2199V3.78125H11.3615C10.4352 3.7822 9.54705 4.1506 8.89204 4.80561C8.23703 5.46062 7.86863 6.34873 7.86768 7.27505V7.59365H10.4075V7.27505C10.408 7.02235 10.5087 6.78015 10.6875 6.60163C10.8664 6.42311 11.1088 6.32285 11.3615 6.32285Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.86768 10.1335H10.4075V7.59375H7.86768V10.1335Z",
            fill: "#16FF99"
        })
    ]
}), '0 0 45 18');

;// CONCATENATED MODULE: ../icons/brands/Solana.tsx


const SolanaIcon = (0,utils/* createIcon */.I)('SolanaIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z",
            fill: "black"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.1959 11.9709L12.4626 13.7524C12.4249 13.7911 12.3793 13.822 12.3287 13.8431C12.278 13.8642 12.2233 13.875 12.1681 13.875H3.95123C3.91202 13.875 3.87367 13.864 3.84088 13.8434C3.8081 13.8228 3.7823 13.7935 3.76668 13.759C3.75105 13.7246 3.74627 13.6865 3.75291 13.6494C3.75956 13.6124 3.77736 13.578 3.8041 13.5506L5.53875 11.769C5.57634 11.7304 5.62178 11.6996 5.67227 11.6785C5.72277 11.6574 5.77725 11.6465 5.83234 11.6464H14.0488C14.088 11.6464 14.1263 11.6574 14.1591 11.678C14.1919 11.6986 14.2177 11.728 14.2334 11.7624C14.249 11.7969 14.2537 11.835 14.2471 11.872C14.2404 11.909 14.2227 11.9434 14.1959 11.9709ZM12.4626 8.38328C12.4249 8.34458 12.3793 8.31373 12.3287 8.29264C12.278 8.27156 12.2233 8.26069 12.1681 8.26072H3.95123C3.91202 8.26072 3.87367 8.27169 3.84088 8.2923C3.8081 8.31291 3.7823 8.34224 3.76668 8.3767C3.75105 8.41116 3.74627 8.44925 3.75291 8.48628C3.75956 8.5233 3.77736 8.55767 3.8041 8.58515L5.53875 10.3667C5.57634 10.4053 5.62178 10.4361 5.67227 10.4572C5.72277 10.4783 5.77725 10.4892 5.83234 10.4893H14.0488C14.088 10.4893 14.1263 10.4783 14.1591 10.4577C14.1919 10.4371 14.2177 10.4078 14.2334 10.3733C14.249 10.3388 14.2537 10.3008 14.2471 10.2637C14.2404 10.2267 14.2227 10.1923 14.1959 10.1649L12.4626 8.38328ZM3.95123 7.10357H12.1681C12.2233 7.10359 12.278 7.09273 12.3287 7.07164C12.3793 7.05056 12.4249 7.0197 12.4626 6.981L14.1959 5.19943C14.2227 5.17196 14.2404 5.13759 14.2471 5.10056C14.2537 5.06353 14.249 5.02545 14.2334 4.99099C14.2177 4.95652 14.1919 4.92719 14.1591 4.90658C14.1263 4.88598 14.088 4.875 14.0488 4.875H5.83234C5.77725 4.87509 5.72277 4.88601 5.67227 4.9071C5.62178 4.92818 5.57634 4.95897 5.53875 4.99757L3.80455 6.77914C3.77783 6.80658 3.76004 6.84092 3.75338 6.8779C3.74672 6.91489 3.75146 6.95295 3.76703 6.98739C3.78261 7.02184 3.80833 7.05117 3.84105 7.07181C3.87377 7.09245 3.91206 7.10348 3.95123 7.10357Z",
            fill: "url(#paint0_linear_46_21879)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint0_linear_46_21879",
                x1: "4.63632",
                y1: "14.0895",
                x2: "12.8454",
                y2: "4.43357",
                gradientUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "0.08",
                        stopColor: "#9945FF"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "0.3",
                        stopColor: "#8752F3"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "0.5",
                        stopColor: "#5497D5"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "0.6",
                        stopColor: "#43B4CA"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "0.72",
                        stopColor: "#28E0B9"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "0.97",
                        stopColor: "#19FB9B"
                    })
                ]
            })
        })
    ]
}), '0 0 18 18');

;// CONCATENATED MODULE: ./src/plugins/Tips/hooks/useSupportedNetworks.ts


const networkMap = {
    [base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM]: {
        name: 'EVM Chain',
        icon: EVMChainsIcon
    },
    [base_src/* NetworkPluginID.PLUGIN_FLOW */.FF.PLUGIN_FLOW]: {
        name: 'Solana Chain',
        icon: FlowIcon
    },
    [base_src/* NetworkPluginID.PLUGIN_SOLANA */.FF.PLUGIN_SOLANA]: {
        name: 'Flow Chain',
        icon: SolanaIcon
    }
} // todo provide a function to support when Next.ID supports Flow and Solana
;

;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/components/WalletsByNetwork.tsx







const WalletsByNetwork_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            boxSizing: 'border-box',
            marginBottom: theme.spacing(2.5)
        },
        topBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: theme.palette.text.primary,
            marginBottom: theme.spacing(2.5)
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 400,
            overflowY: 'auto',
            gap: 12
        },
        settingIcon: {
            fontSize: 16,
            cursor: 'pointer'
        },
        commonFlexBox: {
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(0.5)
        },
        empty: {
            height: '100px',
            fontSize: 14,
            color: theme.palette.text.secondary,
            lineHeight: '100px',
            textAlign: 'center'
        },
        networkIcon: {
            width: 'auto',
            height: 18
        }
    })
);
function WalletsByNetwork({ wallets , networkId , toSetting , setAsDefault  }) {
    const t = (0,locales/* useI18N */.M)();
    const { classes  } = WalletsByNetwork_useStyles();
    const isAllHide = wallets.every((x)=>!x.isPublic
    );
    const network = networkMap[networkId];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.topBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.commonFlexBox,
                        sx: {
                            fontWeight: 'bold'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(network.icon, {
                                className: classes.networkIcon
                            }),
                            network.name
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* SettingsIcon */.e, {
                        onClick: toSetting,
                        className: classes.settingIcon
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: isAllHide ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.empty,
                    children: t.tip_empty_list()
                }) : wallets.filter((x)=>x.isPublic
                ).map((x, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem, {
                        nowIdx: idx,
                        setAsDefault: setAsDefault,
                        fallbackName: `Wallet ${x.rawIdx}`,
                        address: x.identity,
                        isDefault: !!x.isDefault
                    }, x.identity)
                )
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/TipsEntranceDialog.tsx



























const TipsEntranceDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        walletBtn: {
            fontSize: 14
        },
        alertBox: {
            marginBottom: '20px'
        },
        actions: {
            position: 'absolute',
            bottom: 16,
            width: 'calc( 100% - 32px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing(1.5)
        },
        dialogContent: {
            minHeight: 600,
            height: 600,
            position: 'relative',
            boxSizing: 'border-box'
        },
        btnContainer: {
            position: 'absolute',
            right: 16,
            maxWidth: '30%'
        },
        loading: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        }
    })
);
var BodyViewStep;
(function(BodyViewStep) {
    BodyViewStep["Main"] = 'Tips';
    BodyViewStep["Setting"] = 'Settings';
    BodyViewStep["Wallets"] = "Wallets";
    BodyViewStep["AddWallet"] = 'Add Wallet';
})(BodyViewStep || (BodyViewStep = {}));
const WalletButton = ({ step , onClick  })=>{
    const { classes  } = TipsEntranceDialog_useStyles();
    if (step === BodyViewStep.AddWallet) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.btnContainer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            onClick: onClick,
            className: classes.walletBtn,
            variant: "contained",
            size: "small",
            children: step === BodyViewStep.Wallets ? BodyViewStep.AddWallet : BodyViewStep.Wallets
        })
    });
};
function TipsEntranceDialog({ open , onClose  }) {
    const t = (0,locales/* useI18N */.M)();
    const { classes  } = TipsEntranceDialog_useStyles();
    const [showAlert, setShowAlert] = (0,react.useState)(true);
    const [bodyViewStep, setBodyViewStep] = (0,react.useState)(BodyViewStep.Main);
    const [hasChanged, setHasChanged] = (0,react.useState)(false);
    const [rawPatchData, setRawPatchData] = (0,react.useState)([]);
    const [rawWalletList, setRawWalletList] = (0,react.useState)([]);
    const supportedNetworkIds = [
        base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
    ];
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const nowTime = (0,react.useMemo)(()=>(0,format/* default */.Z)(new Date(), 'yyyy-MM-dd HH:mm')
    , []);
    const { value: currentPersonaIdentifier  } = (0,useAsyncRetry/* default */.Z)(()=>{
        setShowAlert(true);
        return service/* default.Settings.getCurrentPersonaIdentifier */.ZP.Settings.getCurrentPersonaIdentifier();
    }, [
        open
    ]);
    const { value: currentPersona  } = (0,useAsyncRetry/* default */.Z)(()=>{
        return service/* default.Identity.queryPersona */.ZP.Identity.queryPersona(currentPersonaIdentifier);
    }, [
        currentPersonaIdentifier
    ]);
    const clickBack = ()=>{
        if (bodyViewStep === BodyViewStep.Main) {
            onClose();
        } else {
            setBodyViewStep(BodyViewStep.Main);
        }
    };
    const { value: kv , retry: retryKv  } = (0,useKv/* useKvGet */.M9)(currentPersonaIdentifier?.publicKeyAsHex);
    const { loading , value: proofRes , retry: retryProof  } = useProvedWallets(currentPersonaIdentifier);
    const list = useTipsWalletsList(proofRes, currentPersona?.identifier.publicKeyAsHex, kv?.ok ? kv.val : undefined);
    (0,react.useMemo)(()=>{
        setHasChanged(false);
        setRawPatchData(list);
        setRawWalletList(list);
    }, [
        proofRes,
        kv,
        bodyViewStep
    ]);
    const onCancel = ()=>{
        setRawPatchData((0,cloneDeep/* default */.Z)(rawWalletList));
        setHasChanged(false);
    };
    const refresh = ()=>{
        setBodyViewStep(BodyViewStep.Main);
        retryProof();
        retryKv();
    };
    const setAsDefault = (idx)=>{
        const changed = (0,cloneDeep/* default */.Z)(rawPatchData);
        changed.forEach((x)=>x.isDefault = 0
        );
        changed[idx].isDefault = 1;
        setHasChanged(!(0,isEqual/* default */.Z)(changed, rawWalletList));
        setRawPatchData(changed);
    };
    const onSwitchChange = (idx, v)=>{
        const changed = (0,cloneDeep/* default */.Z)(rawPatchData);
        changed[idx].isPublic = v ? 1 : 0;
        setRawPatchData(changed);
        setHasChanged(true);
    };
    const [kvFetchState, onConfirm] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            const payload = await (0,useKv/* getKvPayload */.nN)(rawPatchData);
            if (!payload || !payload.val) throw new Error('payload error');
            const signResult = await service/* default.Identity.generateSignResult */.ZP.Identity.generateSignResult(currentPersonaIdentifier, payload.val.signPayload);
            if (!signResult) throw new Error('sign error');
            await (0,useKv/* setKvPatchData */.rN)(payload.val, signResult.signature.signature, rawPatchData);
            showSnackbar(t.tip_persona_sign_success(), {
                variant: 'success',
                message: nowTime
            });
            retryKv();
            return true;
        } catch (error) {
            showSnackbar(t.tip_persona_sign_error(), {
                variant: 'error',
                message: nowTime
            });
            return false;
        }
    }, [
        hasChanged,
        rawPatchData
    ]);
    const { setDialog , open: providerDialogOpen  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.selectProviderDialogUpdated */.R$.events.selectProviderDialogUpdated);
    const onConnectWalletClick = (0,react.useCallback)(()=>{
        if (account) {
            setBodyViewStep(BodyViewStep.AddWallet);
        } else {
            setDialog({
                open: true
            });
        }
    }, [
        account
    ]);
    (0,react.useEffect)(()=>{
        if (!providerDialogOpen) return;
        return Wallet_src/* WalletMessages.events.walletsUpdated.on */.R$.events.walletsUpdated.on(()=>{
            setBodyViewStep(BodyViewStep.AddWallet);
        });
    }, [
        providerDialogOpen
    ]);
    const [confirmState, onConfirmRelease] = (0,useAsyncFn/* default */.Z)(async (wallet)=>{
        try {
            if (!currentPersona?.identifier.publicKeyAsHex || !wallet) throw new Error('create payload error');
            const result = await web3_providers_src/* NextIDProof.createPersonaPayload */.q7.createPersonaPayload(currentPersona.identifier.publicKeyAsHex, shared_base_src/* NextIDAction.Delete */.BU.Delete, wallet.identity, wallet.platform);
            if (!result) throw new Error('payload error');
            const signature = await service/* default.Identity.generateSignResult */.ZP.Identity.generateSignResult(currentPersona.identifier, result.signPayload);
            if (!signature) throw new Error('sign error');
            await web3_providers_src/* NextIDProof.bindProof */.q7.bindProof(result.uuid, currentPersona.identifier.publicKeyAsHex, shared_base_src/* NextIDAction.Delete */.BU.Delete, wallet.platform, wallet.identity, result.createdAt, {
                signature: signature.signature.signature
            });
            showSnackbar(t.tip_persona_sign_success(), {
                variant: 'success',
                message: nowTime
            });
        } catch (error) {
            showSnackbar(t.tip_persona_sign_error(), {
                variant: 'error',
                message: nowTime
            });
        } finally{
            retryProof();
        }
    }, [
        currentPersona,
        proofRes
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* InjectedDialog */.Fl, {
        open: open,
        onClose: clickBack,
        isOnBack: bodyViewStep !== BodyViewStep.Main,
        title: bodyViewStep,
        titleTail: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletButton, {
            className: classes.walletBtn,
            step: bodyViewStep,
            onClick: ()=>{
                setBodyViewStep(bodyViewStep === BodyViewStep.Wallets ? BodyViewStep.AddWallet : BodyViewStep.Wallets);
            }
        }),
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.dialogContent,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.loading,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* LoadingAnimation */.p6, {})
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.dialogContent,
            children: [
                showAlert && bodyViewStep === BodyViewStep.Main && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.alertBox,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyAlertLine, {
                        onClose: ()=>setShowAlert(false)
                    })
                }),
                bodyViewStep === BodyViewStep.Main && rawPatchData.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: supportedNetworkIds?.map((x, idx)=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletsByNetwork, {
                            wallets: rawPatchData,
                            toSetting: ()=>setBodyViewStep(BodyViewStep.Setting)
                            ,
                            networkId: x,
                            setAsDefault: setAsDefault
                        }, idx);
                    })
                }) : bodyViewStep === BodyViewStep.Main && rawPatchData.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus, {
                    toAdd: onConnectWalletClick
                }) : null,
                bodyViewStep === BodyViewStep.Setting && /*#__PURE__*/ (0,jsx_runtime.jsx)(Setting, {
                    onSwitchChange: onSwitchChange,
                    wallets: rawPatchData
                }),
                bodyViewStep === BodyViewStep.Wallets && /*#__PURE__*/ (0,jsx_runtime.jsx)(Wallets, {
                    personaName: currentPersona?.nickname,
                    releaseLoading: confirmState.loading,
                    onRelease: (wallet)=>onConfirmRelease(wallet)
                    ,
                    wallets: rawPatchData
                }),
                bodyViewStep === BodyViewStep.AddWallet && /*#__PURE__*/ (0,jsx_runtime.jsx)(AddWallet, {
                    onCancel: refresh,
                    bindings: rawWalletList,
                    currentPersona: currentPersona
                }),
                ![
                    BodyViewStep.AddWallet,
                    BodyViewStep.Wallets
                ].includes(bodyViewStep) && rawPatchData.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.actions,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            fullWidth: true,
                            variant: "roundedFlat",
                            color: "secondary",
                            disabled: !hasChanged,
                            onClick: onCancel,
                            children: t.cancel()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                            variant: "roundedContained",
                            loading: kvFetchState.loading,
                            fullWidth: true,
                            disabled: !hasChanged,
                            onClick: onConfirm,
                            children: t.confirm()
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Tips/SNSAdaptor/index.tsx










const sns = {
    ...base/* base */.u,
    init (_, context) {
        (0,storage/* setupStorage */.tX)(context.createKVStorage('memory', storage/* storageDefaultValue */.fq));
    },
    ApplicationEntries: [
        (()=>{
            const name = base/* base.name */.u.name;
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(TipsIcon, {});
            const iconFilterColor = 'rgba(247, 147, 30, 0.3)';
            return {
                RenderEntryComponent (EntryComponentProps) {
                    const [open, setOpen] = (0,react.useState)(false);
                    const clickHandler = ()=>setOpen(true)
                    ;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ApplicationEntry */.Tv, {
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TipsEntranceDialog, {
                                open: open,
                                onClose: ()=>setOpen(false)
                            })
                        ]
                    });
                },
                ApplicationEntryID: base/* base.ID */.u.ID,
                icon,
                name,
                iconFilterColor,
                appBoardSortingDefaultPriority: 8,
                nextIdRequired: true
            };
        })(), 
    ],
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(contexts/* RootContext */.Ti, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components/* TipTaskManager */._E, {})
        });
    },
    PostActions () {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(contexts/* RootContext */.Ti, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components/* PostTipButton */.iU, {})
        });
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


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

/***/ 40634:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/adfd421390eaf61fd7cc.png";

/***/ }),

/***/ 26623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0abc2ff2c53dac14acd2.png";

/***/ }),

/***/ 54778:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d6c9527fcb322c968bd6.png";

/***/ }),

/***/ 60439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fcbe15faab96aa0e5cd9.png";

/***/ }),

/***/ 20864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/78fc8af115becb052ee7.png";

/***/ }),

/***/ 5895:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d04b6bd4161eb992162f.png";

/***/ }),

/***/ 83946:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/14c2f11551231a320b45.png";

/***/ }),

/***/ 98582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/76729477b328cbe84474.png";

/***/ }),

/***/ 27295:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0a57eabc5b95d6475deb.png";

/***/ }),

/***/ 90515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4d67af35c3c345c60eb2.png";

/***/ }),

/***/ 21819:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d620aaa19572fe831036.png";

/***/ }),

/***/ 35698:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/77d697dbdc6f6ef8e94f.png";

/***/ }),

/***/ 79838:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6e2af989c4ceb60dda77.png";

/***/ }),

/***/ 72628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b6da3cce0cde774d2178.png";

/***/ })

}]);