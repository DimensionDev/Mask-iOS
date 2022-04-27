(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8346],{

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

/***/ 91956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ NetworkTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30232);
/* harmony import */ var _AbstractTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77522);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80526);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78144);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme, props)=>({
        tab: {
            backgroundColor: !props.isDashboard ? `${theme.palette.background.default}!important` : `${_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.primaryBackground2 */ .ZN.primaryBackground2}!important`,
            marginRight: 1,
            '&:last-child': {
                marginRight: 0
            }
        },
        tabs: {
            '& .MuiTabs-flexContainer': {
                backgroundColor: theme.palette.background.paper
            },
            '& .Mui-selected': {
                color: '#ffffff',
                backgroundColor: `${theme.palette.primary.main}!important`
            },
            '& .MuiTabs-scroller': {
                margin: '0 1px'
            },
            '& .MuiTabs-scrollButtons': {
                width: 'unset',
                backgroundColor: !props.isDashboard ? `${theme.palette.background.default}!important` : `${_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.primaryBackground2 */ .ZN.primaryBackground2}!important`,
                '&.Mui-disabled': {
                    opacity: 1,
                    '& svg': {
                        opacity: 0.3
                    }
                }
            }
        }
    })
);
function NetworkTab(props) {
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isDashboardPage */ .K2)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles({
        chainLength: props.chains.length,
        isDashboard
    }), props);
    const { chainId: chainId1 , setChainId , chains  } = props;
    const createTabItem = (name, chainId)=>({
            label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: name
            }),
            sx: {
                p: 0
            },
            cb: ()=>setChainId(chainId)
        })
    ;
    const tabProps = {
        tabs: chains.map((chainId)=>createTabItem((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId)?.chain ?? 'Unknown', chainId)
        ),
        index: chains.indexOf(chainId1),
        classes,
        hasOnlyOneChild: true,
        scrollable: true
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AbstractTab__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...tabProps
    });
}


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


/***/ })

}]);