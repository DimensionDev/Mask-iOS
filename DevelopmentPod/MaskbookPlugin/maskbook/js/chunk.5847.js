(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5847],{

/***/ 92304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(81758);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


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

/***/ 68402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ArrowDownRound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const ArrowDownRound = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ArrowDown', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m4 5.6 4 4 4-4",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');


/***/ }),

/***/ 84293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ NetworkSelector)
/* harmony export */ });
/* unused harmony export NetworkSelectorUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37253);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85139);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62481);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10372);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31174);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65506);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67071);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94232);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2666);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53242);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(68402);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84797);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            minWidth: 140,
            backgroundColor: theme.palette.primary.main,
            padding: '4px 12px 4px 4px',
            minHeight: 28,
            borderRadius: 18,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        iconWrapper: {
            width: 20,
            height: 20,
            borderRadius: 20,
            marginRight: 10
        },
        title: {
            color: '#ffffff',
            fontSize: 12,
            lineHeight: '16px',
            marginLeft: 4
        },
        arrow: {
            stroke: '#ffffff',
            fontSize: 16
        },
        networkName: {
            marginLeft: 10
        },
        menu: {
            maxHeight: 466,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    })
);
const NetworkSelector = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const networks = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .getRegisteredWeb3Networks */ .Rm)();
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .useAccount */ .m)();
    const chainId1 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .useChainId */ .xx)();
    const providerType = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_7__/* .useValueRef */ .E)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentProviderSettings */ .t1);
    const onChainChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (chainId)=>{
        if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ProviderType.MaskWallet */ .lP.MaskWallet) {
            await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletRPC.updateAccount */ .V.updateAccount({
                chainId
            });
        }
        return _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletRPC.updateMaskAccount */ .V.updateMaskAccount({
            chainId,
            account: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentMaskWalletAccountSettings.value */ .T_.value
        });
    }, [
        providerType,
        account
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NetworkSelectorUI, {
        currentNetwork: networks.find((x)=>x.chainId === chainId1
        ) ?? networks[0],
        onChainChange: onChainChange,
        networks: networks
    });
});
const NetworkSelectorUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ currentNetwork , onChainChange  })=>{
    const { classes  } = useStyles();
    const networks = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .getRegisteredWeb3Networks */ .Rm)();
    const [menu, openMenu] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useMenuConfig */ ._X)(networks?.filter((x)=>x.networkSupporterPluginID === _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM
    ).filter((x)=>_shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.support_testnet_switch */ .vU.support_testnet_switch ? true : x.isMainnet
    ).map((network)=>{
        const chainId = network.chainId;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            onClick: ()=>onChainChange(chainId)
            ,
            selected: chainId === currentNetwork.chainId,
            children: [
                network.isMainnet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                    size: 20,
                    networkIcon: network.icon
                }) : _shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.support_testnet_switch */ .vU.support_testnet_switch ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ChainIcon */ .fq, {
                    color: network.iconColor
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    sx: {
                        marginLeft: 1
                    },
                    children: network.name
                })
            ]
        }, chainId);
    }) ?? [], {
        classes: {
            paper: classes.menu
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: classes.root,
                onClick: openMenu,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            currentNetwork.isMainnet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                                size: 20,
                                networkIcon: currentNetwork.icon
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: classes.iconWrapper,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ChainIcon */ .fq, {
                                    color: currentNetwork.iconColor
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.title,
                                children: currentNetwork.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__/* .ArrowDownRound */ .l, {
                        className: classes.arrow
                    })
                ]
            }),
            menu
        ]
    });
});


/***/ }),

/***/ 43714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SwapPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(67376);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(24790);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.6.1_de97b6be3b01c831652fad9cf8222fb8/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(20310);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(41876);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ../icons/general/Loading.tsx
var Loading = __webpack_require__(14696);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx
var NetworkSelector = __webpack_require__(84293);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
;// CONCATENATED MODULE: ./src/extension/popups/components/WalletStateBar/index.tsx










const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        bar: {
            minWidth: 80,
            borderRadius: 30,
            lineHeight: '28px',
            height: '28px',
            cursor: 'pointer'
        },
        dot: {
            position: 'relative',
            top: 0,
            display: 'inline-block',
            marginRight: theme.spacing(0.8),
            lineHeight: '28px',
            width: 10,
            height: 10,
            borderRadius: 5
        }
    })
);
const WalletStateBarUI = /*#__PURE__*/ (0,react.memo)(({ isPending , walletAddress , walletName , openConnectWalletDialog , children , domain , ...rest })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    const providerDescriptor = (0,entry_web3/* useProviderDescriptor */.fY)(types/* ProviderType.MaskWallet */.lP.MaskWallet, entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    if (!providerDescriptor) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "center",
        direction: "row",
        alignItems: "center",
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelector */.k, {}),
            isPending && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    px: 2,
                    color: '#ffb915',
                    backgroundColor: 'rgba(255, 185, 21, 0.1)'
                },
                className: classes.bar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Loading/* LoadingIcon */.H, {
                        sx: {
                            fontSize: 12,
                            mr: 0.8,
                            color: '#ffb915',
                            backgroundColor: 'rgba(255, 185, 21, 0.1)'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        fontSize: 12,
                        display: "inline-block",
                        children: t('popups_wallet_transactions_pending')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                onClick: openConnectWalletDialog,
                sx: {
                    cursor: 'pointer'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        mx: 1,
                        justifyContent: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* WalletIcon */.o, {
                            providerIcon: providerDescriptor.icon,
                            inverse: true,
                            size: 38
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            userSelect: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                fontSize: 16,
                                display: "flex",
                                alignItems: "center",
                                children: [
                                    walletName ?? '-',
                                    domain ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: 14,
                                        marginLeft: 1,
                                        children: Utils?.formatDomainName?.(domain)
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                fontSize: 12,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedAddress */.Kv, {
                                    address: walletAddress ?? '-',
                                    size: 10,
                                    formatter: formatter/* formatEthereumAddress */.j8
                                })
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0_react@18.0.0/node_modules/react-router/index.js
var react_router = __webpack_require__(10459);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(93618);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/Trader.tsx + 27 modules
var Trader = __webpack_require__(43877);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Swap/SwapBox/index.tsx







function SwapBox() {
    const location = (0,react_router/* useLocation */.TH)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const coin = (0,react.useMemo)(()=>{
        if (!location.search) return undefined;
        const params = new URLSearchParams(location.search);
        return {
            id: params.get('id'),
            name: params.get('name'),
            symbol: params.get('symbol'),
            contract_address: params.get('contract_address'),
            decimals: Number.parseInt(params.get('decimals') ?? '0', 10)
        };
    }, [
        location
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        navigate(shared_base_src/* PopupRoutes.Swap */.mZ.Swap, {
            replace: true
        });
    }, [
        chainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Trader/* Trader */.A, {
        coin: coin,
        chainId: chainId
    });
}

// EXTERNAL MODULE: ./src/web3/context.ts
var web3_context = __webpack_require__(71172);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(25689);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/customization/twitter-color-schema.json
var twitter_color_schema = __webpack_require__(88674);
// EXTERNAL MODULE: ./src/utils/theme/MaskTheme.ts
var MaskTheme = __webpack_require__(33092);
;// CONCATENATED MODULE: ./src/utils/theme/useSwapPageTheme.ts





/**
 * @deprecated Should migrate to \@masknet/theme
 */ function useSwapPageTheme() {
    const baseTheme = MaskTheme/* MaskLightTheme */.C;
    (0,immer_esm/* setAutoFreeze */.Fl)(false);
    const PopupTheme = (0,immer_esm/* default */.ZP)(baseTheme, (theme)=>{
        theme.palette.background.paper = '#ffffff';
        theme.palette.primary = {
            ...theme.palette.primary,
            main: '#1c68f3'
        };
        const colorSchema = twitter_color_schema.light;
        const colors = Object.keys(colorSchema);
        colors.forEach((color)=>{
            if (typeof theme.palette[color] === 'object') {
                Object.assign(theme.palette[color], colorSchema[color]);
            }
        });
        theme.palette.divider = colorSchema.divider;
        theme.palette.secondaryDivider = colorSchema.secondaryDivider;
        theme.components = theme.components || {};
        const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
        theme.components.MuiButton = {
            defaultProps: {
                size: 'medium',
                disableElevation: true,
                variant: 'contained'
            },
            variants: [
                {
                    props: {
                        variant: 'sns'
                    },
                    style: {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.common.white
                        },
                        '&.Mui-disabled': {
                            opacity: 0.5,
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.common.white
                        }
                    }
                },
                {
                    props: {
                        color: 'error'
                    },
                    style: {
                        backgroundColor: theme.palette.error.main,
                        color: theme.palette.common.white,
                        '&:hover': {
                            backgroundColor: '#f53b47'
                        }
                    }
                }, 
            ],
            styleOverrides: {
                root: {
                    borderRadius: 500,
                    textTransform: 'initial',
                    fontWeight: 600,
                    minHeight: 39,
                    paddingLeft: 15,
                    paddingRight: 15,
                    boxShadow: 'none',
                    [smallQuery]: {
                        '&': {
                            height: 30,
                            minHeight: 'auto !important',
                            padding: '0 14px !important'
                        }
                    }
                },
                contained: {
                    backgroundColor: theme.palette.text.primary,
                    color: theme.palette.text.buttonText,
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        backgroundColor: theme.palette.text.primary,
                        color: theme.palette.text.buttonText
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.action.buttonHover
                    },
                    [smallQuery]: {
                        '&': {
                            height: 30,
                            minHeight: 'auto !important',
                            padding: '0 14px !important'
                        }
                    }
                },
                containedSecondary: {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.strong,
                    '&:hover': {
                        color: theme.palette.action.buttonHover,
                        backgroundColor: theme.palette.action.bgHover
                    },
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.strong
                    }
                },
                outlined: {
                    color: theme.palette.text.strong,
                    borderColor: theme.palette.secondaryDivider,
                    backgroundColor: 'transparent',
                    '&:hover': {
                        color: theme.palette.action.buttonHover,
                        borderColor: theme.palette.secondaryDivider,
                        backgroundColor: (0,entry/* parseColor */.lu)(theme.palette.text.primary).setAlpha(0.1).toRgbString()
                    },
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        color: theme.palette.text.strong,
                        backgroundColor: 'transparent'
                    }
                },
                sizeLarge: {
                    minHeight: 40,
                    paddingLeft: 30,
                    paddingRight: 30,
                    [smallQuery]: {
                        '&': {
                            height: 28,
                            minHeight: 28,
                            paddingLeft: 15,
                            paddingRight: 15
                        }
                    }
                },
                sizeSmall: {
                    minHeight: 30,
                    paddingLeft: 15,
                    paddingRight: 15,
                    [smallQuery]: {
                        '&': {
                            height: 25,
                            minHeight: 29,
                            paddingLeft: 10,
                            paddingRight: 10
                        }
                    }
                }
            }
        };
        theme.components.MuiPaper = {
            defaultProps: {
                elevation: 0
            }
        };
        theme.components.MuiTab = {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        };
        theme.components.MuiChip = {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.strong
                },
                colorPrimary: {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    '&:hover': {
                        backgroundColor: (0,entry/* parseColor */.lu)(theme.palette.text.primary).setAlpha(0.1).toRgbString()
                    }
                }
            }
        };
        theme.components.MuiBackdrop = {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.action.mask
                }
            }
        };
        theme.components.MuiTooltip = {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.background.tipMask,
                    color: theme.palette.text.buttonText,
                    borderRadius: 8
                },
                tooltipArrow: {
                    backgroundColor: theme.palette.background.tipMask
                }
            }
        };
        theme.components.MuiSnackbar = {
            styleOverrides: {
                root: {
                    filter: `drop-shadow(0px 0px 16px ${theme.palette.background.messageShadow});`
                }
            }
        };
    });
    return (0,createMuiStrictModeTheme/* default */.Z)(PopupTheme);
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(32925);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts + 46 modules
var useAllProviderTradeContext = __webpack_require__(39850);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Swap/index.tsx

















const Swap_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        walletStateBar: {
            color: theme.palette.grey['900']
        },
        page: {
            minHeight: '100vh',
            maxWidth: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7F9FA'
        },
        container: {
            width: 800,
            backgroundColor: theme.palette.background.paper,
            marginLeft: 'auto',
            marginRight: 'auto',
            minHeight: 720,
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            padding: '32px 0'
        },
        header: {
            width: 520,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: '22px 0'
        },
        title: {
            fontSize: 32,
            marginTop: 16,
            fontWeight: 'bold',
            color: theme.palette.grey['900']
        },
        main: {
            width: 520,
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    };
});
function SwapPage() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Swap_useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const theme = useSwapPageTheme();
    const { value: pendingTransactions = []  } = (0,useRecentTransactions/* useRecentTransactions */.S)({
        status: types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND
    });
    const wallet = (0,useWallet/* useWallet */.O)();
    const openPopupsWindow = (0,react.useCallback)(()=>{
        service/* default.Helper.openPopupWindow */.ZP.Helper.openPopupWindow(shared_base_src/* PopupRoutes.SelectWallet */.mZ.SelectWallet, {
            chainId,
            internal: true
        });
    }, [
        chainId
    ]);
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(wallet?.address, entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    (0,entry/* applyMaskColorVars */.Dc)(document.body, entry/* Appearance.light */.um.light);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* Web3Provider */.Qg, {
        value: web3_context/* SwapWeb3Context */.Mc,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: theme,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* SharedContextProvider */.QL, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.page,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.container,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                                className: classes.header,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStateBarUI, {
                                    className: classes.walletStateBar,
                                    isPending: pendingTransactions.length > 0,
                                    openConnectWalletDialog: openPopupsWindow,
                                    walletName: wallet?.name,
                                    domain: domain,
                                    walletAddress: wallet?.address
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                                className: classes.main,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "h1",
                                        className: classes.title,
                                        children: t('plugin_trader_swap')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(useTargetChainIdContext/* TargetChainIdContext.Provider */.Z.Provider, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useAllProviderTradeContext/* AllProviderTradeContext.Provider */.TX.Provider, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapBox, {})
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};


/***/ }),

/***/ 58287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName)
/* harmony export */ });
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97096);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36803);


const resolveDataProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'CoinGecko',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'CoinMarketCap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'Uniswap Info'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveDataProviderLink = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'https://www.coingecko.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'https://coinmarketcap.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'https://info.uniswap.org/'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveTradeProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2]: 'Uniswap V2',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3]: 'Uniswap V3',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.ZRX */ .z4.ZRX]: '0x',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP]: 'SushiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP]: 'SashimiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.BALANCER */ .z4.BALANCER]: 'Balancer',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP]: 'QuickSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP]: 'PancakeSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.DODO */ .z4.DODO]: 'DODO',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.BANCOR */ .z4.BANCOR]: 'Bancor',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.OPENOCEAN */ .z4.OPENOCEAN]: 'OpenOcean',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.TRADERJOE */ .z4.TRADERJOE]: 'TraderJoe',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.PANGOLIN */ .z4.PANGOLIN]: 'PangolinDex',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.TRISOLARIS */ .z4.TRISOLARIS]: 'Trisolaris',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.WANNASWAP */ .z4.WANNASWAP]: 'WannaSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .TradeProvider.MDEX */ .z4.MDEX]: 'Mdex'
}, (tradeProvider)=>{
    throw new Error(`Unknown provider type: ${tradeProvider}`);
});
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}y`;
    if (days >= 30) return `${Math.floor(days / 30)}m`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    return `${days}d`;
}


/***/ }),

/***/ 41876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64452);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10372);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31174);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84797);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19841);





function useRecentTransactions(options) {
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .m)();
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .useChainId */ .xx)();
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        if (!account) return [];
        return _messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.getRecentTransactions */ .V.getRecentTransactions(chainId, account, options);
    }, [
        chainId,
        account,
        JSON.stringify(options)
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.transactionStateUpdated.on */ .R$.events.transactionStateUpdated.on(result.retry)
    , [
        result.retry
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.transactionsUpdated.on */ .R$.events.transactionsUpdated.on(result.retry)
    , [
        result.retry
    ]);
    return result;
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

/***/ 88674:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"light":{"grey":{"50":"#eff3f4","200":"#cfd9de","300":"#b9cad3","700":"#536471"},"text":{"primary":"#0f1419","secondary":"#536471","strong":"#111418","buttonText":"#FFFFFF"},"background":{"default":"#F6F8F8","input":"#EDF1F2","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)"},"error":{"main":"#F4212E"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"light_high_contrast":{"grey":{"50":"#cfd9de","200":"#697987","300":"#697987","700":"#3b4c5c"},"text":{"primary":"#0f1419","secondary":"#536471","strong":"#111418","buttonText":"#FFFFFF"},"background":{"default":"#F6F8F8","input":"#EDF1F2","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)"},"error":{"main":"#FF5555"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"dark":{"grey":{"50":"#253341","200":"#3d5466","300":"#6b7d8c","700":"#8899a6"},"text":{"primary":"#EFF3F4","secondary":"#8899A6","strong":"#FFFFFF","buttonText":"#0F1419"},"background":{"default":"#18232E","input":"#212D39","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}},"dark_high_contrast":{"grey":{"50":"#10171e","200":"#697987","300":"#92a4b3","700":"#b8cbd9"},"text":{"primary":"#EFF3F4","secondary":"#8899A6","strong":"#FFFFFF","buttonText":"#0F1419"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","background":{"default":"#18232E","input":"#212D39","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)"},"action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}},"darker":{"grey":{"50":"#202327","200":"#2f3336","300":"#3d4145","700":"#6e767d"},"text":{"primary":"#D9D9D9","secondary":"#6E767D","strong":"#EFF3F4","buttonText":"#0F1419"},"background":{"default":"#15171A","input":"#1D2023","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(255, 255, 255, 0.2)"},"error":{"main":"#FF5555"},"divider":"#2F3336","secondaryDivider":"#2F3336","action":{"buttonHover":"#D7dBDC","bgHover":"#1A1D20","mask":"rgba(91, 112, 131, 0.4)"}},"darker_high_contrast":{"grey":{"50":"#121517","200":"#3d4145","300":"#6e767d","700":"#929ca6"},"text":{"primary":"#D9D9D9","secondary":"#6E767D","strong":"#EFF3F4","buttonText":"#0F1419"},"error":{"main":"#FF5555"},"divider":"#2F3336","secondaryDivider":"#2F3336","background":{"default":"#15171A","input":"#1D2023","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(255, 255, 255, 0.2)"},"action":{"buttonHover":"#D7dBDC","bgHover":"#1A1D20","mask":"rgba(91, 112, 131, 0.4)"}}}');

/***/ })

}]);