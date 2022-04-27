(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6557],{

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

/***/ 12385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_TokenDetail)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0/node_modules/react-feather/dist/icons/arrow-down-circle.js
var arrow_down_circle = __webpack_require__(74606);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0/node_modules/react-feather/dist/icons/arrow-up-circle.js
var arrow_up_circle = __webpack_require__(91223);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0_react@18.0.0/node_modules/react-router/index.js
var react_router = __webpack_require__(10459);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletContext.ts
var useWalletContext = __webpack_require__(32828);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
;// CONCATENATED MODULE: ./src/plugins/Wallet/helpers.ts

function ERC20TokenComparer(a, b) {
    if (!a || !b) return false;
    return isSameAddress(a.address, b.address);
}
function ERC20TokenArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((token, index)=>ERC20TokenComparer(token, b[index])
    );
}
function ERC721TokenComparer(a, b) {
    if (!a || !b) return false;
    return a.tokenId === b.tokenId;
}
function ERC721TokenArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((token, index)=>ERC721TokenComparer(token, b[index])
    );
}
function ERC1155TokenComparer(a, b) {
    if (!a || !b) return false;
    return a.tokenId === b.tokenId;
}
function ERC1155TokenArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((token, index)=>ERC1155TokenComparer(token, b[index])
    );
}
const getTokenUSDValue = (token)=>token.value ? Number.parseFloat(token.value[types/* CurrencyType.USD */.V2.USD]) : 0
;

// EXTERNAL MODULE: ../icons/general/InteractionCircle.tsx
var InteractionCircle = __webpack_require__(80136);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/plugins/Transak/messages.ts
var messages = __webpack_require__(93229);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(67376);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(38443);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(27862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/intersectionWith.js + 2 modules
var intersectionWith = __webpack_require__(45675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/components/ActivityList/index.tsx + 3 modules
var ActivityList = __webpack_require__(20204);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/TokenDetail/index.tsx





















const useStyles = (0,entry/* makeStyles */.ZL)()({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 18
    },
    tokenIcon: {
        width: 24,
        height: 24,
        marginBottom: 4
    },
    balance: {
        fontSize: 14,
        lineHeight: '20px',
        color: '#1C68F3',
        fontWeight: 600
    },
    text: {
        fontSize: 12,
        lineHeight: 1,
        color: '#7B8192'
    },
    controller: {
        display: 'grid',
        justifyContent: 'center',
        gap: 20,
        gridTemplateColumns: 'repeat(3,1fr)',
        marginTop: 20,
        '& > *': {
            textAlign: 'center',
            cursor: 'pointer'
        }
    },
    icon: {
        stroke: '#1C68F3',
        fill: 'none'
    }
});
const TokenDetail = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const wallet = (0,useWallet/* useWallet */.O)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { currentToken  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const { value: isActiveSocialNetwork  } = (0,useAsync/* default */.Z)(async ()=>{
        const urls = (0,compact/* default */.Z)((await browser.tabs.query({
            active: true
        })).map((tab)=>tab.url
        ));
        const definedSocialNetworkUrls = (await service/* default.SocialNetwork.getDefinedSocialNetworkUIs */.ZP.SocialNetwork.getDefinedSocialNetworkUIs()).map(({ networkIdentifier  })=>networkIdentifier
        );
        return !!(0,intersectionWith/* default */.Z)(urls, definedSocialNetworkUrls, (a, b)=>a.includes(b)
        ).length;
    }, []);
    const openBuyDialog = (0,react.useCallback)(async ()=>{
        if (isActiveSocialNetwork) {
            messages/* PluginTransakMessages.buyTokenDialogUpdated.sendToVisiblePages */.l.buyTokenDialogUpdated.sendToVisiblePages({
                open: true,
                address: wallet?.address ?? '',
                code: currentToken?.token.symbol ?? currentToken?.token.name
            });
        } else {
            const url = dist_default()('dashboard.html#', 'labs', {
                open: 'Transak',
                code: currentToken?.token.symbol ?? currentToken?.token.name
            });
            (0,shared_base_ui_src/* openWindow */.xw)(browser.runtime.getURL(url), 'BUY_DIALOG');
        }
    }, [
        wallet?.address,
        isActiveSocialNetwork,
        currentToken
    ]);
    const openSwapDialog = (0,react.useCallback)(async ()=>{
        const url = dist_default()('popups.html#/', src/* PopupRoutes.Swap */.mZ.Swap, !(0,address/* isSameAddress */.Wr)(nativeToken?.address, currentToken?.token.address) ? {
            id: currentToken?.token.address,
            name: currentToken?.token.name,
            symbol: currentToken?.token.symbol,
            contract_address: currentToken?.token.address,
            decimals: currentToken?.token.decimals
        } : {});
        (0,shared_base_ui_src/* openWindow */.xw)(browser.runtime.getURL(url), 'SWAP_DIALOG');
    }, [
        currentToken,
        nativeToken
    ]);
    if (!currentToken) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                        classes: {
                            icon: classes.tokenIcon
                        },
                        address: currentToken.token.address,
                        name: currentToken.token.name,
                        chainId: currentToken.token.chainId,
                        logoURI: currentToken.token.logoURI,
                        AvatarProps: {
                            sx: {
                                width: 24,
                                height: 24
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.balance,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                            value: currentToken.balance,
                            decimals: currentToken.token.decimals,
                            symbol: currentToken.token.symbol,
                            significant: 4,
                            formatter: formatter/* formatBalance */.az
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.text,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedCurrency */.bO, {
                            value: getTokenUSDValue(currentToken),
                            sign: "$",
                            formatter: formatter/* formatCurrency */.xG
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.controller,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                onClick: openBuyDialog,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down_circle/* default */.Z, {
                                        className: classes.icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.text,
                                        children: t('popups_wallet_token_buy')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                onClick: ()=>navigate(src/* PopupRoutes.Transfer */.mZ.Transfer)
                                ,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_circle/* default */.Z, {
                                        className: classes.icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.text,
                                        children: t('popups_wallet_token_send')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                onClick: openSwapDialog,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InteractionCircle/* InteractionCircleIcon */.w, {
                                        className: classes.icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.text,
                                        children: t('popups_wallet_token_swap')
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityList/* ActivityList */.b, {
                tokenAddress: currentToken.token.address
            })
        ]
    });
});
/* harmony default export */ const Wallet_TokenDetail = (TokenDetail);


/***/ }),

/***/ 93229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62386);


if (false) {}
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);


/***/ })

}]);