(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6240],{

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

/***/ 43240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75068);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96724);



function useTitle(title) {
    const { setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__/* .PageTitleContext */ .I);
    (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
        setTitle(title);
    });
}


/***/ }),

/***/ 53181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95736);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(70981);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(32588);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18271);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44451);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31939);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19769);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72499);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94861);
/* harmony import */ var _components_shared_VerifyWallet_Steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40545);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78778);
/* harmony import */ var _hooks_usePersonaContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78066);
/* harmony import */ var _hook_useTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43240);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93455);
/* harmony import */ var _Wallet_hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22720);
/* harmony import */ var _hook_usePopupContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8701);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50719);


















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            background: 'rgba(247, 249, 250, 1)',
            padding: '8px 16px 16px 16px'
        }
    })
);
const VerifyWallet = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const { currentPersona , refreshProofs  } = _hooks_usePersonaContext__WEBPACK_IMPORTED_MODULE_8__/* .PersonaContext.useContainer */ .m.useContainer();
    const { signed , setSigned  } = _hook_usePopupContext__WEBPACK_IMPORTED_MODULE_12__/* .PopupContext.useContainer */ .t.useContainer();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__/* .useNavigate */ .s0)();
    const location = (0,react_use__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
    const wallet = location.state.usr;
    const { showSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .usePopupCustomSnackbar */ .D9)();
    const { value: request  } = (0,_Wallet_hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_11__/* .useUnconfirmedRequest */ .d)();
    const { Others  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_14__/* .useWeb3State */ .dM)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const wallets = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_14__/* .useWallets */ .rB)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const connection = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_14__/* .useWeb3Connection */ .Tv)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { value: domain  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_14__/* .useReverseAddress */ .$q)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, wallet?.account);
    const { value: isBound  } = (0,react_use__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(async ()=>{
        if (!wallet.account || !currentPersona?.identifier.publicKeyAsHex) return false;
        return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_5__/* .NextIDProof.queryIsBound */ .q7.queryIsBound(currentPersona.identifier.publicKeyAsHex, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NextIDPlatform.Ethereum */ .Vd.Ethereum, wallet.account);
    }, [
        wallet.account,
        currentPersona?.identifier.publicKeyAsHex
    ]);
    const walletName = ()=>{
        if (domain && Others?.formatDomainName) return Others.formatDomainName(domain);
        if (wallet.providerType !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .ProviderType.MaskWallet */ .lP.MaskWallet) return `${_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__/* .providerResolver.providerName */ .bN.providerName(wallet.providerType)} Wallet`;
        return wallets.find((x)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .isSameAddress */ .Wr)(x.address, wallet.account)
        )?.name ?? 'Wallet';
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (request?.payload.method !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .EthereumMethodType.ETH_SIGN */ .W8.ETH_SIGN && request?.payload.method !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .EthereumMethodType.PERSONAL_SIGN */ .W8.PERSONAL_SIGN) return;
        navigate(urlcat__WEBPACK_IMPORTED_MODULE_1___default()(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .PopupRoutes.WalletSignRequest */ .mZ.WalletSignRequest, {
            goBack: true
        }), {
            state: wallet
        });
    }, [
        request,
        wallet
    ]);
    const { value: payload  } = (0,react_use__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(async ()=>{
        if (!currentPersona?.identifier.publicKeyAsHex || !wallet) return;
        return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_5__/* .NextIDProof.createPersonaPayload */ .q7.createPersonaPayload(currentPersona.identifier.publicKeyAsHex, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NextIDAction.Create */ .BU.Create, wallet.account, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NextIDPlatform.Ethereum */ .Vd.Ethereum, 'default');
    }, [
        currentPersona?.identifier.publicKeyAsHex,
        wallet
    ]);
    const [{ value: signature  }, personaSilentSign] = (0,react_use__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(async ()=>{
        if (!payload || !currentPersona?.identifier) return;
        try {
            const signResult = await _service__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Identity.generateSignResult */ .ZP.Identity.generateSignResult(currentPersona.identifier, payload.signPayload);
            showSnackbar(t('popups_verify_persona_sign_success'), {
                variant: 'success'
            });
            return signResult.signature.signature;
        } catch (error) {
            showSnackbar(t('popups_verify_persona_sign_failed'), {
                variant: 'error'
            });
            console.error(error);
            return;
        }
    }, [
        currentPersona?.identifier,
        payload?.signPayload
    ]);
    const [{ value: walletSignState  }, walletSign] = (0,react_use__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(async ()=>{
        if (!payload || !currentPersona?.identifier.publicKeyAsHex) return false;
        try {
            const walletSignature = await connection?.signMessage(payload.signPayload, 'personalSign', {
                chainId: wallet.chainId,
                account: wallet.account,
                providerType: wallet.providerType
            });
            if (!walletSignature) throw new Error('Wallet sign failed');
            await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_5__/* .NextIDProof.bindProof */ .q7.bindProof(payload.uuid, currentPersona.identifier.publicKeyAsHex, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NextIDAction.Create */ .BU.Create, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NextIDPlatform.Ethereum */ .Vd.Ethereum, wallet.account, payload.createdAt, {
                walletSignature,
                signature
            });
            showSnackbar(t('popups_verify_wallet_sign_success'), {
                variant: 'success'
            });
            setSigned(true);
            refreshProofs();
            return true;
        } catch (error) {
            showSnackbar(t('popups_verify_wallet_sign_failed'), {
                variant: 'error'
            });
            return false;
        }
    }, [
        currentPersona?.identifier.publicKeyAsHex,
        payload,
        wallet,
        signature,
        connection
    ]);
    const changeWallet = ()=>{
        navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .PopupRoutes.ConnectWallet */ .mZ.ConnectWallet);
    };
    const [{ loading: confirmLoading , value: step = _components_shared_VerifyWallet_Steps__WEBPACK_IMPORTED_MODULE_6__/* .SignSteps.Ready */ .f.Ready  }, handleConfirm] = (0,react_use__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(async ()=>{
        try {
            if (signed) _service__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Helper.removePopupWindow */ .ZP.Helper.removePopupWindow();
            if (!signature && !walletSignState) {
                await personaSilentSign();
                return _components_shared_VerifyWallet_Steps__WEBPACK_IMPORTED_MODULE_6__/* .SignSteps.FirstStepDone */ .f.FirstStepDone;
            } else if (signature && !walletSignState) {
                const walletSignRes = await walletSign();
                return walletSignRes ? _components_shared_VerifyWallet_Steps__WEBPACK_IMPORTED_MODULE_6__/* .SignSteps.SecondStepDone */ .f.SecondStepDone : _components_shared_VerifyWallet_Steps__WEBPACK_IMPORTED_MODULE_6__/* .SignSteps.FirstStepDone */ .f.FirstStepDone;
            } else {
                await _service__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Helper.removePopupWindow */ .ZP.Helper.removePopupWindow();
                return;
            }
        } catch  {
            showSnackbar('Connect error', {
                variant: 'error'
            });
            return _components_shared_VerifyWallet_Steps__WEBPACK_IMPORTED_MODULE_6__/* .SignSteps.Ready */ .f.Ready;
        }
    }, [
        signature,
        walletSignState,
        walletSign,
        personaSilentSign,
        signed
    ]);
    (0,_hook_useTitle__WEBPACK_IMPORTED_MODULE_9__/* .useTitle */ .Z)(t('popups_add_wallet'));
    if (!currentPersona || !wallet) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.container,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_VerifyWallet_Steps__WEBPACK_IMPORTED_MODULE_6__/* .Steps */ .R, {
            walletName: walletName(),
            disableConfirm: isBound && !signed,
            nickname: currentPersona.nickname,
            wallet: wallet,
            step: signed ? _components_shared_VerifyWallet_Steps__WEBPACK_IMPORTED_MODULE_6__/* .SignSteps.SecondStepDone */ .f.SecondStepDone : step,
            changeWallet: changeWallet,
            onConfirm: handleConfirm,
            confirmLoading: confirmLoading,
            onCustomCancel: ()=>navigate(-1)
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyWallet);


/***/ }),

/***/ 22720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useUnconfirmedRequest)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58500);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91788);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10503);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2046);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67938);







const useUnconfirmedRequest = ()=>{
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { TransactionFormatter  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        const payload = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__/* .WalletRPC.topUnconfirmedRequest */ .V.topUnconfirmedRequest();
        if (!payload) return;
        const computedPayload = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getPayloadConfig */ .is)(payload);
        if (!computedPayload) return {
            payload
        };
        const formatterTransaction = await TransactionFormatter?.formatTransaction(chainId, computedPayload);
        const transactionContext = await TransactionFormatter?.createContext(chainId, computedPayload);
        return {
            payload,
            computedPayload,
            formatterTransaction,
            transactionContext
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.requestsUpdated.on */ .R$.events.requestsUpdated.on(result.retry);
    }, [
        result.retry
    ]);
    return result;
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

/***/ })

}]);