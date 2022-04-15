(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7453],{

/***/ 3204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51911);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2633);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6823);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69157);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71999);


const _excluded = ["children"];





const TabList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TabList(props, ref) {
  const {
    children: childrenProp
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, _excluded);

  const context = (0,_TabContext__WEBPACK_IMPORTED_MODULE_3__/* .useTabContext */ ._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const children = react__WEBPACK_IMPORTED_MODULE_0__.Children.map(childrenProp, child => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
      // SOMEDAY: `Tabs` will set those themselves
      'aria-controls': (0,_TabContext__WEBPACK_IMPORTED_MODULE_3__/* .getPanelId */ .uU)(context, child.props.value),
      id: (0,_TabContext__WEBPACK_IMPORTED_MODULE_3__/* .getTabId */ .pQ)(context, child.props.value)
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, other, {
    ref: ref,
    value: context.value,
    children: children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabList);

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

/***/ 54883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ActionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34372);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(867);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85139);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37253);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37731);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32831);



const ActionCardIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    width: 36px;
    height: 36px;

    & > svg {
        width: 100%;
        height: 100%;
    }
`
);
const ActionCardButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    font-size: 14px;

    & > button {
        width: 164px;
        border-radius: ${theme.spacing(3)};
    }
`
);
const ActionCard = ({ icon , title , subtitle , action  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        variant: "outlined",
        sx: {
            padding: (theme)=>theme.spacing(2.5)
            ,
            marginBottom: (theme)=>theme.spacing(2.5)
            ,
            boxShadow: 'none'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            spacing: 2,
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionCardIcon, {
                    children: icon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    flex: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            variant: "body1",
                            paragraph: true,
                            sx: {
                                marginBottom: 0
                            },
                            children: title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            variant: "body2",
                            paragraph: true,
                            sx: {
                                marginBottom: 0
                            },
                            children: subtitle
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionCardButton, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        size: "medium",
                        variant: "contained",
                        color: action.type,
                        onClick: action.handler,
                        children: action.text
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 42864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ WalletStateBar)
});

// UNUSED EXPORTS: WalletStateBarUI

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(62490);
// EXTERNAL MODULE: ../dashboard/src/pages/Wallets/hooks/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(20833);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(13020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(24294);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(3328);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/WalletStateBar/useNetworkSelector.tsx






const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        item: {
            minWidth: 130,
            paddingLeft: 8,
            paddingRight: 8,
            '&:first-child': {
                marginTop: '12px'
            },
            '&:last-child': {
                marginBottom: '12px'
            }
        }
    })
);
const useNetworkSelector = ()=>{
    const { classes  } = useStyles();
    const currentChainId = (0,entry_web3/* useChainId */.xx)();
    const providerDescriptor = (0,entry_web3/* useProviderDescriptor */.fY)();
    const networkDescriptors = (0,entry_web3/* useNetworkDescriptors */.px)();
    const { NetworkIconClickBait  } = (0,entry_web3/* useWeb3UI */.$d)().SelectNetworkMenu ?? {};
    const networkMenu = (0,src/* useMenu */.H9)(...networkDescriptors?.filter((x)=>x.isMainnet
    ).map((network)=>{
        const menuItem = /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            sx: {
                mx: 2,
                py: 1
            },
            classes: {
                root: classes.item
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                gap: 0.5,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        justifyContent: "center",
                        width: 18,
                        children: network.chainId === currentChainId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Success/* SuccessIcon */.t, {
                            sx: {
                                fontSize: 18
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* WalletIcon */.o, {
                            networkIcon: network.icon,
                            size: 30
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        flex: 1,
                        children: network.name
                    })
                ]
            })
        }, network.ID);
        return NetworkIconClickBait && providerDescriptor ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIconClickBait, {
            network: network,
            provider: providerDescriptor,
            children: menuItem
        }) : menuItem;
    }) ?? []);
    return networkMenu;
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/WalletStateBar/index.tsx













const WalletStateBar_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        bar: {
            minWidth: 80,
            lineHeight: '28px',
            height: '28px',
            cursor: 'pointer',
            position: 'relative',
            '&::after': {
                borderRadius: 30,
                pointerEvents: 'none',
                content: '""',
                inset: 0,
                margin: 'auto',
                position: 'absolute',
                backgroundColor: 'var(--network-icon-color, transparent)',
                opacity: 0.1,
                zIndex: 0
            },
            '& > span': {
                position: 'relative',
                zIndex: 1
            }
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
        },
        domain: {
            fontSize: 14,
            marginLeft: 20,
            background: theme.palette.mode === 'dark' ? 'rgba(73, 137, 255, 0.2)' : 'rgba(28, 104, 243, 0.1)',
            padding: '2px 8px',
            borderRadius: 4
        }
    })
);
const WalletStateBar = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const wallet = (0,entry_web3/* useWallet */.Os)();
    const networkDescriptor = (0,entry_web3/* useNetworkDescriptor */.Vw)();
    const providerDescriptor = (0,entry_web3/* useProviderDescriptor */.fY)();
    const { value: pendingTransactions = shared_base_src/* EMPTY_LIST */.rP  } = (0,useRecentTransactions/* useRecentTransactions */.S)({
        status: types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND
    });
    const { openDialog: openWalletStatusDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Wallet.events.walletStatusDialogUpdated */.yC.Wallet.events.walletStatusDialogUpdated);
    const { openDialog: openConnectWalletDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Wallet.events.selectProviderDialogUpdated */.yC.Wallet.events.selectProviderDialogUpdated);
    const [menu, openMenu] = useNetworkSelector();
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(wallet?.address);
    if (!wallet) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            onClick: openConnectWalletDialog,
            children: t.wallets_connect_wallet_connect()
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStateBarUI, {
        isPending: !!pendingTransactions.length,
        wallet: wallet,
        domain: domain,
        network: networkDescriptor,
        provider: providerDescriptor,
        openConnectWalletDialog: openWalletStatusDialog,
        openMenu: openMenu,
        children: menu
    });
});
const WalletStateBarUI = ({ isPending , network , provider , wallet , domain , openConnectWalletDialog , openMenu , children ,  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = WalletStateBar_useStyles();
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    if (!wallet || !network || !provider) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "center",
        direction: "row",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    '--network-icon-color': network.iconColor,
                    px: 2,
                    mr: 1
                },
                color: network.iconColor ?? '',
                className: classes.bar,
                onClick: openMenu,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        sx: {
                            backgroundColor: network.iconColor
                        },
                        className: classes.dot
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        fontSize: 12,
                        children: network.name
                    })
                ]
            }),
            isPending && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    borderRadius: 9999,
                    px: 2,
                    background: entry/* MaskColorVar.orangeMain.alpha */.ZN.orangeMain.alpha(0.1),
                    color: entry/* MaskColorVar.orangeMain */.ZN.orangeMain
                },
                className: classes.bar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* LoadingAnimation */.p6, {
                        sx: {
                            fontSize: 12,
                            mr: 0.8,
                            color: entry/* MaskColorVar.orangeMain */.ZN.orangeMain
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        fontSize: 12,
                        display: "inline-block",
                        children: t.wallet_transactions_pending()
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
                            providerIcon: provider.icon,
                            inverse: true,
                            size: 38
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            userSelect: 'none'
                        },
                        children: [
                            provider.type !== types/* ProviderType.MaskWallet */.lP.MaskWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                fontSize: 16,
                                display: "flex",
                                alignItems: "center",
                                children: domain && Utils?.formatDomainName ? Utils.formatDomainName(domain) : provider.name
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                fontSize: 16,
                                display: "flex",
                                alignItems: "center",
                                children: [
                                    wallet.name,
                                    domain && Utils?.formatDomainName ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.domain,
                                        children: Utils.formatDomainName(domain)
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                fontSize: 12,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedAddress */.Kv, {
                                    address: wallet.address,
                                    size: 10,
                                    formatter: Utils?.formatAddress
                                })
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
};


/***/ }),

/***/ 20833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64452);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10372);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31174);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62490);




// todo: should merge in plugin infra package when plugin infra ready
function useRecentTransactions(options) {
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .m)();
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .useChainId */ .xx)();
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!account) return [];
        return _API__WEBPACK_IMPORTED_MODULE_4__/* .PluginServices.Wallet.getRecentTransactions */ .NG.Wallet.getRecentTransactions(chainId, account, options);
    }, [
        chainId,
        account,
        JSON.stringify(options)
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_API__WEBPACK_IMPORTED_MODULE_4__/* .PluginMessages.Wallet.events.transactionStateUpdated.on */ .yC.Wallet.events.transactionStateUpdated.on(result.retry)
    , [
        result.retry
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_API__WEBPACK_IMPORTED_MODULE_4__/* .PluginMessages.Wallet.events.transactionsUpdated.on */ .yC.Wallet.events.transactionsUpdated.on(result.retry)
    , [
        result.retry
    ]);
    return result;
}


/***/ }),

/***/ 12402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Wallets)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(24790);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0_react@18.0.0/node_modules/react-router/index.js
var react_router = __webpack_require__(10459);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(62490);
// EXTERNAL MODULE: ../dashboard/src/components/PageFrame/index.tsx + 1 modules
var PageFrame = __webpack_require__(62945);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(13020);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(69157);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabList/TabList.js
var TabList = __webpack_require__(3204);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(37101);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(27536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../dashboard/src/components/ContentContainer/index.tsx
var ContentContainer = __webpack_require__(8478);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(67376);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721ContractDetailed.ts
var useERC721ContractDetailed = __webpack_require__(75569);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721TokenDetailedCallback.ts
var useERC721TokenDetailedCallback = __webpack_require__(98477);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.14.4/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(74368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.29.0_react@18.0.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(7631);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.29.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(53753);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/AddCollectibleDialog/index.tsx











var FormErrorType;
(function(FormErrorType) {
    FormErrorType["Added"] = 'ADDED';
    FormErrorType["NotExist"] = 'NOT_EXIST';
})(FormErrorType || (FormErrorType = {}));
const AddCollectibleDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose  })=>{
    const wallet = (0,useWallet/* useWallet */.O)();
    const [address, setAddress] = (0,react.useState)('');
    const { value: contractDetailed , loading: contractDetailLoading  } = (0,useERC721ContractDetailed/* useERC721ContractDetailed */.P)(address);
    const [tokenId, setTokenId, erc721TokenDetailedCallback] = (0,useERC721TokenDetailedCallback/* useERC721TokenDetailedCallback */._)(contractDetailed);
    const onSubmit = (0,react.useCallback)(async ()=>{
        if (contractDetailLoading || !wallet) return;
        const tokenInDB = await API/* PluginServices.Wallet.getToken */.NG.Wallet.getToken(types/* EthereumTokenType.ERC721 */.Dr.ERC721, address, tokenId);
        if (tokenInDB) throw new Error(FormErrorType.Added);
        const tokenDetailed = await erc721TokenDetailedCallback();
        if (tokenDetailed && !(0,utils_address/* isSameAddress */.Wr)(tokenDetailed.info.owner, wallet.address) || !tokenDetailed || !tokenDetailed.info.owner) {
            throw new Error(FormErrorType.NotExist);
        } else {
            await API/* PluginServices.Wallet.addToken */.NG.Wallet.addToken(tokenDetailed);
            onClose();
        }
    }, [
        contractDetailLoading,
        wallet,
        address,
        tokenId,
        erc721TokenDetailedCallback
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AddCollectibleDialogUI, {
        open: open,
        onClose: onClose,
        address: address,
        onAddressChange: setAddress,
        onTokenIdChange: setTokenId,
        onSubmit: onSubmit
    });
});
const AddCollectibleDialogUI = /*#__PURE__*/ (0,react.memo)(({ open , onClose , onAddressChange , onTokenIdChange , onSubmit  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const schema = lib.z.object({
        address: lib.z.string().min(1, t.wallets_collectible_field_contract_require()).refine((address)=>dist.EthereumAddress.isValid(address)
        , t.wallets_incorrect_address()),
        tokenId: lib.z.string().min(1, t.wallets_collectible_field_token_id_require())
    });
    const { control , handleSubmit , setError , watch , reset , formState: { errors , isSubmitting , isDirty  } ,  } = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            address: '',
            tokenId: ''
        }
    });
    (0,react.useEffect)(()=>{
        const subscription = watch((value)=>{
            onAddressChange(value.address);
            onTokenIdChange(value.tokenId);
        });
        return ()=>subscription.unsubscribe()
        ;
    }, [
        watch
    ]);
    const handleFormSubmit = (event)=>{
        handleSubmit(onSubmit)(event).catch((error)=>{
            setError('tokenId', {
                type: 'value',
                message: error.message === FormErrorType.Added ? t.wallets_collectible_been_added() : t.wallets_collectible_error_not_exist()
            });
        });
    };
    const handleClose = ()=>{
        reset();
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        open: open,
        title: t.wallets_add_collectible(),
        onClose: handleClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
            noValidate: true,
            onSubmit: handleFormSubmit,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                control: control,
                                render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                                        ...field,
                                        label: t.wallets_collectible_address(),
                                        required: true,
                                        helperText: errors.address?.message,
                                        error: !!errors.address
                                    })
                                ,
                                name: "address"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            sx: {
                                mt: 3
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                control: control,
                                render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                                        ...field,
                                        label: t.wallets_collectible_token_id(),
                                        required: true,
                                        helperText: errors.tokenId?.message,
                                        error: !!errors.tokenId
                                    })
                                ,
                                name: "tokenId"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                    sx: {
                        pt: 3
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                minWidth: 100
                            },
                            variant: "outlined",
                            color: "primary",
                            onClick: onClose,
                            children: t.cancel()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            disabled: isSubmitting || !isDirty,
                            sx: {
                                minWidth: 100
                            },
                            color: "primary",
                            type: "submit",
                            children: t.wallets_collectible_add()
                        })
                    ]
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TablePagination/TablePagination.js + 3 modules
var TablePagination = __webpack_require__(44905);
// EXTERNAL MODULE: ../dashboard/src/components/LoadingPlaceholder/index.tsx
var LoadingPlaceholder = __webpack_require__(46598);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../icons/general/Empty.tsx
var Empty = __webpack_require__(67031);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/EmptyPlaceholder/index.tsx





const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        prompt: {
            color: entry/* MaskColorVar.textLight */.ZN.textLight,
            fontSize: theme.typography.pxToRem(12),
            lineHeight: theme.typography.pxToRem(16),
            marginTop: theme.spacing(2.5)
        },
        icon: {
            width: 96,
            height: 96,
            fill: 'none'
        }
    })
);
const EmptyPlaceholder = /*#__PURE__*/ (0,react.memo)(({ children  })=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Empty/* EmptyIcon */.t, {
                className: classes.icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.prompt,
                children: children
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(26405);
// EXTERNAL MODULE: ../icons/brands/MiniMask.tsx
var MiniMask = __webpack_require__(48078);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/CollectiblePlaceHolder/index.tsx








const CollectiblePlaceHolder_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        position: 'relative',
        borderRadius: 8,
        width: 140,
        height: 186,
        backgroundColor: entry/* MaskColorVar.lineLight */.ZN.lineLight,
        display: 'flex',
        flexDirection: 'column'
    },
    placeholder: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        flex: 1,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    chainIcon: {
        position: 'absolute',
        right: 8,
        top: 8,
        height: 20,
        width: 20
    }
});
const CollectiblePlaceholder = /*#__PURE__*/ (0,react.memo)(({ chainId  })=>{
    const { classes  } = CollectiblePlaceHolder_useStyles();
    const t = (0,locales/* useDashboardI18N */.x)();
    const networkDescriptor = (0,entry_web3/* useNetworkDescriptor */.Vw)(chainId);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.chainIcon,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* WalletIcon */.o, {
                    networkIcon: networkDescriptor?.icon,
                    size: 20
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.placeholder,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MiniMask/* MiniMaskIcon */.q, {
                    viewBox: "0 0 48 48",
                    sx: {
                        fontSize: 48,
                        opacity: 0.5
                    }
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useHoverDirty.js
var useHoverDirty = __webpack_require__(1869);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/FungibleTokenTableRow/ChangeNetworkTip.tsx






const ChangeNetworkTip = /*#__PURE__*/ (0,react.memo)(({ chainId  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const providerDescriptor = (0,entry_web3/* useProviderDescriptor */.fY)();
    const { NetworkIconClickBait  } = (0,entry_web3/* useWeb3UI */.$d)().SelectNetworkMenu ?? {};
    const networkDescriptors = (0,entry_web3/* useNetworkDescriptors */.px)();
    const targetNetwork = networkDescriptors.find((x)=>x.chainId === chainId
    );
    if (!chainId) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        component: "span",
        sx: {
            background: '#111432',
            color: entry/* MaskColorVar.white */.ZN.white
        },
        variant: "body2",
        children: [
            t.wallets_assets_token_sent_not_connect_tip({
                chainName: targetNetwork?.name ?? 'Unknown Network'
            }),
            ' ',
            NetworkIconClickBait && providerDescriptor && targetNetwork && /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIconClickBait, {
                network: targetNetwork,
                provider: providerDescriptor,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    sx: {
                        cursor: 'pointer',
                        color: entry/* MaskColorVar.white */.ZN.white,
                        textDecoration: 'underline'
                    },
                    onClick: ()=>{},
                    children: t.wallets_assets_token_sent_switch_network_tip()
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/CollectibleCard/index.tsx










const CollectibleCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            paddingTop: 8,
            paddingBottom: 8
        },
        hover: {
            paddingTop: 0,
            paddingBottom: 0,
            transform: 'scale(1.1)',
            filter: 'drop-shadow(0px 12px 28px rgba(0, 0, 0, 0.1))'
        },
        card: {
            position: 'relative',
            borderRadius: 8,
            width: 140,
            minHeight: 215,
            backgroundColor: theme.palette.mode === 'dark' ? entry/* MaskColorVar.lineLight */.ZN.lineLight : entry/* MaskColorVar.lightestBackground */.ZN.lightestBackground,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        },
        mediaContainer: {
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: 186,
            backgroundColor: theme.palette.mode === 'dark' ? entry/* MaskColorVar.lineLight */.ZN.lineLight : '#f6f6f7'
        },
        description: {
            flex: 1,
            flexGrow: 1
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: 12
        },
        chainIcon: {
            position: 'absolute',
            right: 8,
            top: 8,
            height: 20,
            width: 20,
            zIndex: 20
        },
        tip: {
            padding: theme.spacing(1),
            background: '#111432'
        },
        tipArrow: {
            color: '#111432'
        },
        loadingFailImage: {
            minHeight: '0px !important',
            maxWidth: 'none',
            transform: 'translateY(10px)',
            width: 64,
            height: 64
        },
        wrapper: {
            width: '100%',
            minWidth: 140,
            height: '100%',
            minHeight: 186
        },
        linkWrapper: {
            position: 'relative',
            width: 140,
            height: 186
        },
        blocker: {
            position: 'absolute',
            zIndex: 2,
            width: 140,
            height: 186
        }
    })
);
const CollectibleCard = /*#__PURE__*/ (0,react.memo)(({ chainId , token , onSend , renderOrder  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    const { classes  } = CollectibleCard_useStyles();
    const ref = (0,react.useRef)(null);
    const [isHoveringTooltip, setHoveringTooltip] = (0,react.useState)(false);
    const isHovering = (0,useHoverDirty/* default */.Z)(ref);
    const networkDescriptor = (0,entry_web3/* useNetworkDescriptor */.Vw)(token.contract?.chainId);
    const isOnCurrentChain = (0,react.useMemo)(()=>chainId === token.contract?.chainId
    , [
        chainId,
        token
    ]);
    const currentPluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    (0,react.useEffect)(()=>{
        setHoveringTooltip(false);
    }, [
        chainId
    ]);
    // Sending NFT is only available on EVM currently.
    const sendable = currentPluginId === entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    const showSendButton = (isHovering || isHoveringTooltip) && sendable;
    let nftLink;
    if (Utils?.resolveNonFungibleTokenLink && token.contract) {
        nftLink = Utils?.resolveNonFungibleTokenLink?.(token.contract?.chainId, token.contract.address, token.tokenId);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: `${classes.container} ${isHovering || isHoveringTooltip ? classes.hover : ''}`,
        ref: ref,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.card,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.chainIcon,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* WalletIcon */.o, {
                        networkIcon: networkDescriptor?.icon,
                        size: 20
                    })
                }),
                (token.metadata?.assetURL || token.metadata?.iconURL) && token.contract ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    target: nftLink ? '_blank' : '_self',
                    rel: "noopener noreferrer",
                    className: classes.linkWrapper,
                    href: nftLink,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.blocker
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.mediaContainer,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                                contractAddress: token.contract.address,
                                chainId: token.contract.chainId,
                                renderOrder: renderOrder,
                                url: token.metadata.assetURL || token.metadata.iconURL,
                                tokenId: token.tokenId,
                                classes: {
                                    loadingFailImage: classes.loadingFailImage,
                                    wrapper: classes.wrapper
                                }
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectiblePlaceholder, {
                        chainId: token.contract?.chainId
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.description,
                    py: 1,
                    px: 3,
                    children: showSendButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                            onOpen: ()=>setHoveringTooltip(true)
                            ,
                            onClose: ()=>setHoveringTooltip(false)
                            ,
                            disableHoverListener: isOnCurrentChain,
                            title: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChangeNetworkTip, {
                                chainId: token.contract?.chainId
                            }),
                            placement: "top",
                            classes: {
                                tooltip: classes.tip,
                                arrow: classes.tipArrow
                            },
                            arrow: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    fullWidth: true,
                                    disabled: !isOnCurrentChain,
                                    onClick: onSend,
                                    variant: "rounded",
                                    style: {
                                        boxShadow: 'none'
                                    },
                                    sx: {
                                        fontWeight: 'bolder',
                                        height: '28px'
                                    },
                                    children: t.send()
                                })
                            })
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.name,
                        color: "textPrimary",
                        variant: "body2",
                        onClick: onSend,
                        children: token.name || token.tokenId
                    })
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ../icons/general/Right.tsx
var Right = __webpack_require__(6490);
// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(97096);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useGasPrice.ts
var useGasPrice = __webpack_require__(34790);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var hooks_useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(52813);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var hooks_useNativeTokenDetailed = __webpack_require__(38443);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useGasLimit.ts
var useGasLimit = __webpack_require__(40566);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var utils_token = __webpack_require__(33690);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTokenTransferCallback.ts + 3 modules
var useTokenTransferCallback = __webpack_require__(19136);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Tune.js
var Tune = __webpack_require__(20058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(24446);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(93618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var Wallet_src = __webpack_require__(19841);
;// CONCATENATED MODULE: ../dashboard/src/hooks/useGasOptions.ts





const { Wallet: WalletRPC  } = API/* PluginServices */.NG;
function useGasOptions() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const chainId = (0,hooks_useChainId/* useChainId */.xx)();
    const is1559Supported = (0,react.useMemo)(()=>(0,chainDetailed/* isEIP1559Supported */.U1)(chainId)
    , [
        chainId
    ]);
    const { value: gasFromMetaMask , loading: getFromMetaMaskLoading  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!is1559Supported) return;
        return WalletRPC.getEstimateGasFees(chainId);
    }, [
        is1559Supported,
        chainId
    ]);
    // #region Get gas options from debank
    const { value: gasFromDebank , loading: getFromDebankLoading  } = (0,useAsync/* default */.Z)(async ()=>{
        if (is1559Supported) return;
        const response = await WalletRPC.getGasPriceDictFromDeBank(chainId);
        if (!response) return null;
        return {
            low: response.data.slow.price,
            medium: response.data.normal.price,
            high: response.data.fast.price
        };
    }, [
        is1559Supported,
        chainId
    ]);
    // #endregion
    const gasOptions = is1559Supported ? gasFromMetaMask : gasFromDebank;
    const options = (0,react.useMemo)(()=>{
        return [
            {
                title: t.wallet_gas_fee_settings_low(),
                gasOption: types/* GasOption.Low */.TP.Low,
                gasPrice: gasOptions?.low ?? 0
            },
            {
                title: t.wallet_gas_fee_settings_medium(),
                gasOption: types/* GasOption.Medium */.TP.Medium,
                gasPrice: gasOptions?.medium ?? 0
            },
            {
                title: t.wallet_gas_fee_settings_high(),
                gasOption: types/* GasOption.High */.TP.High,
                gasPrice: gasOptions?.high ?? 0
            }, 
        ];
    }, [
        is1559Supported,
        gasOptions
    ]);
    return {
        value: options,
        loading: is1559Supported ? getFromMetaMaskLoading : getFromDebankLoading,
        gasOptions
    };
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/hooks/useGasConfig.ts







const useGasConfig = (gasLimit, minGasLimit)=>{
    const chainId = (0,hooks_useChainId/* useChainId */.xx)();
    const [gasLimit_, setGasLimit_] = (0,react.useState)(0);
    const [customGasPrice, setCustomGasPrice] = (0,react.useState)(0);
    const [gasOption, setGasOption] = (0,react.useState)(types/* GasOption.Medium */.TP.Medium);
    const [maxFee, setMaxFee] = (0,react.useState)(0);
    const [priorityFee, setPriorityFee] = (0,react.useState)(0);
    const is1559Supported = (0,react.useMemo)(()=>(0,chainDetailed/* isEIP1559Supported */.U1)(chainId)
    , [
        chainId
    ]);
    const { value: defaultGasPrice = '0'  } = (0,useGasPrice/* useGasPrice */.F)();
    const gasPrice = customGasPrice || defaultGasPrice;
    const { gasOptions  } = useGasOptions();
    const { setDialog: setGasSettingDialog , closeDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.gasSettingDialogUpdated */.R$.events.gasSettingDialogUpdated);
    (0,react.useEffect)(()=>closeDialog
    , [
        closeDialog
    ]);
    (0,react.useEffect)(()=>{
        setGasLimit_(gasLimit);
    }, [
        gasLimit
    ]);
    (0,react.useEffect)(()=>{
        return Wallet_src/* WalletMessages.events.gasSettingDialogUpdated.on */.R$.events.gasSettingDialogUpdated.on((evt)=>{
            if (evt.open) return;
            if (evt.gasPrice) setCustomGasPrice(evt.gasPrice);
            if (evt.gasOption) setGasOption(evt.gasOption);
            if (evt.gasLimit) setGasLimit_(evt.gasLimit);
            if (evt.maxFee) setMaxFee(evt.maxFee);
        });
    }, []);
    (0,react.useEffect)(()=>{
        if (!gasOptions) return;
        if (is1559Supported) {
            const gasLevel = gasOptions.medium;
            setMaxFee((oldVal)=>{
                return !oldVal ? (0,formatter/* formatGweiToWei */.nU)(gasLevel?.suggestedMaxFeePerGas ?? 0) : oldVal;
            });
            setPriorityFee((oldVal)=>{
                return !oldVal ? (0,formatter/* formatGweiToWei */.nU)(gasLevel?.suggestedMaxPriorityFeePerGas ?? 0) : oldVal;
            });
        } else {
            setCustomGasPrice((oldVal)=>!oldVal ? gasOptions.medium : oldVal
            );
        }
    }, [
        is1559Supported,
        gasOptions?.medium
    ]);
    (0,react.useEffect)(()=>{
        if (!gasOptions) return;
        if (is1559Supported) {
            const gasLevel = gasOptions.medium;
            setMaxFee((0,formatter/* formatGweiToWei */.nU)(gasLevel?.suggestedMaxFeePerGas ?? 0));
            setPriorityFee((0,formatter/* formatGweiToWei */.nU)(gasLevel?.suggestedMaxPriorityFeePerGas ?? 0));
        } else {
            setCustomGasPrice(gasOptions.medium);
        }
    }, [
        chainId,
        gasOptions?.medium
    ]);
    const gasConfig = (0,react.useMemo)(()=>{
        return is1559Supported ? {
            gas: gasLimit_,
            maxFeePerGas: (0,web3_utils_lib.toHex)(new (bignumber_default())(maxFee).integerValue().toFixed()),
            maxPriorityFeePerGas: (0,web3_utils_lib.toHex)(new (bignumber_default())(priorityFee).integerValue().toFixed())
        } : {
            gas: gasLimit_,
            gasPrice: new (bignumber_default())(gasPrice).toNumber()
        };
    }, [
        is1559Supported,
        gasLimit_,
        maxFee,
        priorityFee,
        gasPrice,
        chainId
    ]);
    return {
        gasConfig,
        gasLimit: gasLimit_,
        maxFee,
        onCustomGasSetting: ()=>setGasSettingDialog({
                open: true,
                gasLimit: gasLimit_,
                gasOption,
                minGasLimit
            })
    };
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useInterval.js
var useInterval = __webpack_require__(81630);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Transfer/useNativeTokenPrice.ts




const URL_BASE = 'https://api.coingecko.com/api/v3';
async function getNativeTokenPrice(tokenId, currency) {
    const requestPath = `${URL_BASE}/simple/price?ids=${tokenId}&vs_currencies=${currency}`;
    const prices = await fetch(requestPath).then((r)=>r.json()
    );
    return prices;
}
const USD = types/* CurrencyType.USD */.V2.USD;
function useNativeTokenPrice() {
    const chainId = (0,hooks_useChainId/* useChainId */.xx)();
    const coinId = (0,chainDetailed/* getCoinGeckoCoinId */.vM)(chainId);
    const [price, setPrice] = (0,react.useState)(0);
    const trackPrice = (0,react.useCallback)(()=>{
        if (!coinId) return;
        getNativeTokenPrice(coinId, USD).then((result)=>setPrice(result[coinId][USD])
        );
    }, [
        coinId
    ]);
    (0,react.useEffect)(trackPrice, [
        trackPrice
    ]);
    (0,useInterval/* default */.Z)(trackPrice, Wallet_src/* UPDATE_CHAIN_STATE_DELAY */.js);
    return price;
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Transfer/TransferERC20.tsx

















const GAS_LIMIT = 21000;
const TransferERC20 = /*#__PURE__*/ (0,react.memo)(({ token  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const anchorEl = (0,react.useRef)(null);
    const [amount, setAmount] = (0,react.useState)('');
    const [address, setAddress] = (0,react.useState)('');
    const [memo1, setMemo] = (0,react.useState)('');
    const [popoverOpen, setPopoverOpen] = (0,react.useState)(false);
    const [minPopoverWidth, setMinPopoverWidth] = (0,react.useState)(0);
    const network = (0,entry_web3/* useNetworkDescriptor */.Vw)();
    const [gasLimit_, setGasLimit_] = (0,react.useState)(0);
    const { value: defaultGasPrice = '0'  } = (0,useGasPrice/* useGasPrice */.F)();
    const [selectedToken, setSelectedToken] = (0,react.useState)(token);
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const chainId = (0,hooks_useChainId/* useChainId */.xx)();
    const is1559Supported = (0,react.useMemo)(()=>(0,chainDetailed/* isEIP1559Supported */.U1)(chainId)
    , [
        chainId
    ]);
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    (0,react.useEffect)(()=>{
        setSelectedToken(token);
    }, [
        token
    ]);
    // workaround: transferERC20 should support non-evm network
    const isNativeToken = (0,utils_address/* isSameAddress */.Wr)(selectedToken?.address, NATIVE_TOKEN_ADDRESS);
    const tokenType = isNativeToken ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20;
    // balance
    const { value: tokenBalance = '0' , retry: tokenBalanceRetry  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(tokenType, selectedToken?.address ?? '');
    const nativeToken = (0,hooks_useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const nativeTokenPrice = useNativeTokenPrice();
    // #region resolve ENS domain
    const { value: registeredAddress = '' , error: resolveDomainError , loading: resolveDomainLoading ,  } = (0,entry_web3/* useLookupAddress */.hn)(address, entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    // #endregion
    // transfer amount
    const transferAmount = (0,base_src/* rightShift */.pu)(amount || '0', selectedToken.decimals).toFixed();
    const erc20GasLimit = (0,useGasLimit/* useGasLimit */.x)(selectedToken.type === entry_web3/* TokenType.Fungible */.iv.Fungible ? selectedToken.symbol === nativeToken.value?.symbol ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20 : selectedToken.type, selectedToken.address, transferAmount, dist.EthereumAddress.isValid(address) ? address : registeredAddress);
    const { gasConfig , onCustomGasSetting , gasLimit , maxFee  } = useGasConfig(gasLimit_, GAS_LIMIT);
    const gasPrice = gasConfig.gasPrice || defaultGasPrice;
    (0,react.useEffect)(()=>{
        setGasLimit_(isNativeToken ? GAS_LIMIT : erc20GasLimit.value ?? 0);
    }, [
        isNativeToken,
        erc20GasLimit.value
    ]);
    const gasFee1 = (0,react.useMemo)(()=>{
        const price = is1559Supported && maxFee ? new (bignumber_default())(maxFee) : gasPrice;
        return (0,base_src/* multipliedBy */.$q)(gasLimit, price);
    }, [
        gasLimit,
        gasPrice,
        maxFee,
        is1559Supported
    ]);
    const gasFeeInUsd = (0,formatter/* formatWeiToEther */.yp)(gasFee1).multipliedBy(nativeTokenPrice);
    const maxAmount = (0,react.useMemo)(()=>{
        const price = is1559Supported && maxFee ? new (bignumber_default())(maxFee) : gasPrice;
        const gasFee = (0,base_src/* multipliedBy */.$q)((0,utils_token/* addGasMargin */.bu)(gasLimit), price);
        let amount_ = new (bignumber_default())(tokenBalance || '0');
        amount_ = selectedToken.type === types/* EthereumTokenType.Native */.Dr.Native ? amount_.minus(gasFee) : amount_;
        return bignumber_default().max(0, amount_).toFixed();
    }, [
        tokenBalance,
        gasPrice,
        selectedToken?.type,
        amount,
        gasLimit,
        maxFee,
        is1559Supported
    ]);
    const [transferState, transferCallback, resetTransferCallback] = (0,useTokenTransferCallback/* useTokenTransferCallback */.z)(tokenType, selectedToken.address);
    const onTransfer = (0,react.useCallback)(async ()=>{
        if (dist.EthereumAddress.isValid(address)) {
            await transferCallback(transferAmount, address, gasConfig, memo1);
            return;
        } else if (Utils?.isValidDomain?.(address)) {
            await transferCallback(transferAmount, registeredAddress, gasConfig, memo1);
            return;
        }
        return;
    }, [
        transferAmount,
        address,
        memo1,
        selectedToken.decimals,
        transferCallback,
        gasConfig,
        registeredAddress,
        Utils
    ]);
    // #region validation
    const validationMessage = (0,react.useMemo)(()=>{
        if (!transferAmount || (0,base_src/* isZero */.Fr)(transferAmount)) return t.wallets_transfer_error_amount_absence();
        if ((0,base_src/* isGreaterThan */.T1)((0,base_src/* rightShift */.pu)(amount, selectedToken.decimals), maxAmount)) return t.wallets_transfer_error_insufficient_balance({
            symbol: selectedToken.symbol ?? ''
        });
        if (!address) return t.wallets_transfer_error_address_absence();
        if (!(dist.EthereumAddress.isValid(address) || Utils?.isValidDomain?.(address))) return t.wallets_transfer_error_invalid_address();
        if (Utils?.isValidDomain?.(address) && (resolveDomainError || !registeredAddress)) {
            if (network?.type !== public_api_src/* NetworkType.Ethereum */.td.Ethereum) return t.wallet_transfer_error_no_ens_support();
            return t.wallet_transfer_error_no_address_has_been_set_name();
        }
        return '';
    }, [
        transferAmount,
        maxAmount,
        address,
        tokenBalance,
        selectedToken,
        amount,
        Utils,
        registeredAddress,
        resolveDomainError,
        network, 
    ]);
    // #endregion
    (0,react.useEffect)(()=>{
        const ALLOWED_TYPES = [
            types/* TransactionStateType.FAILED */.n$.FAILED,
            types/* TransactionStateType.HASH */.n$.HASH
        ];
        if (!ALLOWED_TYPES.includes(transferState.type)) return;
        setMemo('');
        setAddress('');
        setAmount('');
        resetTransferCallback();
    }, [
        transferState
    ]);
    const ensContent = (0,react.useMemo)(()=>{
        if (resolveDomainLoading) return;
        if (registeredAddress) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                style: {
                    padding: 10,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        href: Utils?.resolveDomainLink?.(address),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        underline: "none",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 16,
                                lineHeight: "22px",
                                fontWeight: 500,
                                marginBottom: "10px",
                                style: {
                                    color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary
                                },
                                children: address
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                style: {
                                    color: entry/* MaskColorVar.textSecondary */.ZN.textSecondary
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                    address: registeredAddress,
                                    size: 4,
                                    formatter: Utils?.formatAddress
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Right/* RightIcon */.m, {})
                ]
            });
        }
        if (address.includes('.eth')) {
            if (network?.type !== public_api_src/* NetworkType.Ethereum */.td.Ethereum) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    style: {
                        padding: '25px 10px'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "#FF5F5F",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22px",
                        children: t.wallet_transfer_error_no_ens_support()
                    })
                });
            }
            if (Utils?.isValidDomain?.(address) && resolveDomainError) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    style: {
                        padding: '25px 10px'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "#FF5F5F",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22px",
                        children: t.wallet_transfer_error_no_address_has_been_set_name()
                    })
                });
            }
        }
        return;
    }, [
        registeredAddress,
        address,
        Utils?.isValidDomain,
        entry/* MaskColorVar */.ZN,
        resolveDomainError,
        network?.type,
        resolveDomainLoading, 
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPopoverOpen(!!ensContent && !!anchorEl.current);
    }, [
        ensContent
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        direction: "row",
        justifyContent: "center",
        mt: 4,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            width: 640,
            minWidth: 500,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                            required: true,
                            value: address,
                            InputProps: {
                                onClick: (event)=>{
                                    if (!anchorEl.current) anchorEl.current = event.currentTarget;
                                    if (ensContent) setPopoverOpen(true);
                                    setMinPopoverWidth(event.currentTarget.clientWidth);
                                },
                                spellCheck: false
                            },
                            onChange: (e)=>setAddress(e.currentTarget.value)
                            ,
                            label: t.wallets_transfer_to_address()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* default */.ZP, {
                            anchorEl: anchorEl.current,
                            onClose: ()=>setPopoverOpen(false)
                            ,
                            PaperProps: {
                                style: {
                                    minWidth: `${minPopoverWidth}px`,
                                    borderRadius: 4
                                }
                            },
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left'
                            },
                            open: popoverOpen,
                            children: ensContent
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    mt: 2,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenAmountPanel */.xl, {
                        amount: amount,
                        maxAmount: maxAmount,
                        balance: tokenBalance,
                        label: t.wallets_transfer_amount(),
                        token: selectedToken,
                        onAmountChange: setAmount,
                        SelectTokenChip: {
                            loading: false,
                            ChipProps: {
                                onClick: async ()=>{
                                    const pickedToken = await pickToken({
                                        disableNativeToken: false
                                    });
                                    if (pickedToken) setSelectedToken(pickedToken);
                                }
                            }
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "16px",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: "12px",
                            fontWeight: "bold",
                            children: t.gas_fee()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    fontSize: "14px",
                                    title: `$${gasFeeInUsd.toString()}`,
                                    children: t.transfer_cost({
                                        gasFee: (0,formatter/* formatWeiToEther */.yp)(gasFee1).toFixed(6),
                                        symbol: nativeToken.value?.symbol ?? '',
                                        usd: gasFeeInUsd.toFixed(2)
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "small",
                                    onClick: onCustomGasSetting,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tune/* default */.Z, {
                                        fontSize: "small"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                isNativeToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    mt: 2,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                        value: memo1,
                        placeholder: t.wallets_transfer_memo_placeholder(),
                        onChange: (e)=>setMemo(e.currentTarget.value)
                        ,
                        label: t.wallets_transfer_memo()
                    })
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    mt: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        sx: {
                            width: 240
                        },
                        disabled: !!validationMessage || transferState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING,
                        onClick: onTransfer,
                        children: validationMessage || t.wallets_transfer_send()
                    })
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(92820);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ImageListItem/ImageListItem.js + 1 modules
var ImageListItem = __webpack_require__(29143);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ImageList/ImageList.js + 1 modules
var ImageList = __webpack_require__(9405);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ImageListItemBar/ImageListItemBar.js
var ImageListItemBar = __webpack_require__(60836);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(41197);
// EXTERNAL MODULE: ../icons/general/CheckboxBorder.tsx
var CheckboxBorder = __webpack_require__(6529);
// EXTERNAL MODULE: ../icons/general/Checkbox.tsx
var general_Checkbox = __webpack_require__(43904);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Transfer/NFTCard.tsx






const NFTCard_useStyles = (0,entry/* makeStyles */.ZL)()({
    card: {
        position: 'relative'
    },
    checkbox: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    container: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: '100%',
        backgroundColor: entry/* MaskColorVar.lineLight */.ZN.lineLight,
        display: 'flex',
        flexDirection: 'column'
    },
    placeholder: {
        width: '100%',
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        flex: 1
    },
    disabled: {
        filter: 'opacity(0.5)',
        cursor: 'not-allowed'
    },
    barTitle: {
        padding: 0,
        lineHeight: '16px'
    },
    wrapper: {
        borderTopRightRadius: '12px',
        borderTopLeftRadius: '12px',
        width: '140px !important',
        height: '186px !important'
    },
    loadingPlaceholder: {
        width: '140px !important',
        height: '186px !important'
    },
    loadingFailImage: {
        minHeight: '0px !important',
        maxWidth: 'none',
        transform: 'translateY(10px)',
        width: 64,
        height: 64
    }
});
const NFTCard = /*#__PURE__*/ (0,react.memo)(({ token , selectedTokenId , onSelect , renderOrder  })=>{
    const { classes  } = NFTCard_useStyles();
    const [checked, setChecked] = (0,react.useState)(!!selectedTokenId && selectedTokenId === token.tokenId);
    const [name, setName] = (0,react.useState)(token.tokenId);
    const isDisabled = (0,react.useMemo)(()=>!!selectedTokenId && selectedTokenId !== token.tokenId
    , [
        selectedTokenId,
        token.tokenId
    ]);
    const NFTNameBar = (0,react.useMemo)(()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItemBar/* default */.Z, {
            sx: {
                px: 1,
                py: 1.5,
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                background: (theme)=>theme.palette.mode === 'dark' ? entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground : '#F9F9FA'
            },
            classes: {
                titleWrap: classes.barTitle
            },
            subtitle: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: name
            }),
            position: "below"
        });
    }, [
        name
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ImageListItem/* default */.Z, {
        sx: {
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            mb: 6,
            maxWidth: '140px',
            background: (theme)=>theme.palette.mode === 'dark' ? (0,entry/* getMaskColor */.nb)(theme).white : '#F9F9FA'
        },
        className: isDisabled ? classes.disabled : '',
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                contractAddress: token.contractDetailed.address,
                chainId: token.contractDetailed.chainId,
                tokenId: token.tokenId,
                setERC721TokenName: setName,
                renderOrder: renderOrder,
                classes: {
                    loadingFailImage: classes.loadingFailImage,
                    loadingPlaceholder: classes.loadingPlaceholder,
                    wrapper: classes.wrapper
                }
            }),
            NFTNameBar,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.checkbox,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                    defaultChecked: selectedTokenId === token.tokenId,
                    value: checked,
                    size: "small",
                    disabled: isDisabled,
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxBorder/* CheckedBorderIcon */.G, {
                        sx: {
                            fontSize: '18px',
                            stroke: '#D0D4DD'
                        }
                    }),
                    checkedIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(general_Checkbox/* CheckedIcon */.Y, {
                        sx: {
                            fontSize: '18px'
                        }
                    }),
                    onChange: (e)=>{
                        const value = e.target.checked;
                        onSelect(value ? token.tokenId : '');
                        setChecked(value);
                    }
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Transfer/SelectNFTList.tsx







const SelectNFTList = /*#__PURE__*/ (0,react.memo)(({ list , onSelect , selectedTokenId , loading , error  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const renderStatus = (0,react.useMemo)(()=>{
        if (loading) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItem/* default */.Z, {
                sx: {
                    height: '30px !important'
                },
                cols: 4,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    direction: "row",
                    justifyContent: "center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {})
                })
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItem/* default */.Z, {
            sx: {
                height: '30px !important'
            },
            cols: 4,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                direction: "row",
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    component: "span",
                    variant: "body2",
                    children: t.wallets_collectible_load_end()
                })
            })
        });
    }, [
        loading
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        sx: {
            width: 640,
            borderRadius: '12px',
            ...error ? {
                boxShadow: `0 0 0 4px ${entry/* MaskColorVar.redMain.alpha */.ZN.redMain.alpha(0.2)}`,
                border: `1px solid ${entry/* MaskColorVar.redMain.alpha */.ZN.redMain.alpha(0.8)}`
            } : {},
            background: (theme)=>theme.palette.mode === 'dark' ? entry/* MaskColorVar.lightBackground */.ZN.lightBackground : entry/* MaskColorVar.normalBackground */.ZN.normalBackground
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ImageList/* default */.Z, {
            variant: "quilted",
            cols: 4,
            gap: 12,
            rowHeight: 186,
            sx: {
                width: '100%',
                height: 'auto',
                maxHeight: '400px',
                p: 2,
                pb: 0.5
            },
            children: [
                list.map((token, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTCard, {
                        token: token,
                        selectedTokenId: selectedTokenId,
                        onSelect: onSelect,
                        renderOrder: index
                    }, token.tokenId)
                ),
                renderStatus
            ]
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/KeyboardArrowDown.js
var KeyboardArrowDown = __webpack_require__(45379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/unionBy.js
var unionBy = __webpack_require__(60398);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Transfer/types.ts
var TransferTab;
(function(TransferTab) {
    TransferTab["Token"] = "Token";
    TransferTab["Collectibles"] = "Collectibles";
})(TransferTab || (TransferTab = {}));

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Transfer/TransferERC721.tsx































const TransferERC721_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        disabled: {
            opacity: 1
        }
    })
);
const TransferERC721_GAS_LIMIT = 30000;
const TransferERC721 = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const chainId = (0,hooks_useChainId/* useChainId */.xx)();
    const anchorEl = (0,react.useRef)(null);
    const { state  } = (0,react_router/* useLocation */.TH)();
    const { classes  } = TransferERC721_useStyles();
    const [defaultToken, setDefaultToken] = (0,react.useState)(null);
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [popoverOpen, setPopoverOpen] = (0,react.useState)(false);
    const [recipientError, setRecipientError] = (0,react.useState)(null);
    const [minPopoverWidth, setMinPopoverWidth] = (0,react.useState)(0);
    const [contract, setContract] = (0,react.useState)();
    const [id] = (0,react.useState)(v4/* default */.Z);
    const [gasLimit_, setGasLimit_] = (0,react.useState)(0);
    const network = (0,entry_web3/* useNetworkDescriptor */.Vw)();
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    // form
    const schema = lib.z.object({
        recipient: lib.z.string().refine((address)=>dist.EthereumAddress.isValid(address) || Utils?.isValidDomain?.(address)
        , t.wallets_incorrect_address()),
        contract: lib.z.string().min(1, t.wallets_collectible_contract_is_empty()),
        tokenId: lib.z.string().min(1, t.wallets_collectible_token_id_is_empty())
    });
    const { control , handleSubmit , setValue , watch , setError , clearErrors , formState: { errors , isSubmitting  } ,  } = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            recipient: '',
            contract: '',
            tokenId: ''
        }
    });
    (0,react.useEffect)(()=>{
        if (!state) return;
        if (!state.erc721Token || state.type !== TransferTab.Collectibles) return;
        if (state.erc721Token.contractDetailed.chainId !== chainId) return;
        if (contract && !(0,utils_address/* isSameAddress */.Wr)(contract.address, state.erc721Token.contractDetailed.address)) return;
        setContract(state.erc721Token.contractDetailed);
        setValue('contract', state.erc721Token.contractDetailed.name);
        setValue('tokenId', state.erc721Token.tokenId);
        setDefaultToken(state.erc721Token);
    }, [
        state
    ]);
    const allFormFields = watch();
    // #region resolve ENS domain
    const { value: registeredAddress = '' , error: resolveDomainError , loading: resolveDomainLoading ,  } = (0,entry_web3/* useLookupAddress */.hn)(allFormFields.recipient, entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    // #endregion
    // #region check contract address and account address
    (0,useAsync/* default */.Z)(async ()=>{
        const recipient = allFormFields.recipient;
        setRecipientError(null);
        if (!recipient && !registeredAddress) return;
        if (!(0,utils_address/* isValidAddress */.At)(recipient) && !(0,utils_address/* isValidAddress */.At)(registeredAddress)) return;
        clearErrors();
        if ((0,utils_address/* isSameAddress */.Wr)(recipient, account) || (0,utils_address/* isSameAddress */.Wr)(registeredAddress, account)) {
            setRecipientError({
                type: 'account',
                message: t.wallets_transfer_error_same_address_with_current_account()
            });
        }
        const result = await API/* Services.Ethereum.getCode */.K9.Ethereum.getCode(recipient);
        if (result !== '0x') {
            setRecipientError({
                type: 'contractAddress',
                message: t.wallets_transfer_error_is_contract_address()
            });
        }
    }, [
        allFormFields.recipient,
        clearErrors,
        registeredAddress
    ]);
    // #endregion
    const erc721GasLimit = (0,useGasLimit/* useGasLimit */.x)(types/* EthereumTokenType.ERC721 */.Dr.ERC721, contract?.address, undefined, dist.EthereumAddress.isValid(allFormFields.recipient) ? allFormFields.recipient : registeredAddress, allFormFields.tokenId);
    (0,react.useEffect)(()=>{
        setGasLimit_(erc721GasLimit.value ? erc721GasLimit.value : TransferERC721_GAS_LIMIT);
    }, [
        erc721GasLimit.value
    ]);
    const { gasConfig , onCustomGasSetting , gasLimit  } = useGasConfig(gasLimit_, TransferERC721_GAS_LIMIT);
    const account = (0,useAccount/* useAccount */.m)();
    const nativeToken = (0,hooks_useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const nativeTokenPrice = useNativeTokenPrice();
    const [transferState, transferCallback, resetTransferCallback] = (0,useTokenTransferCallback/* useTokenTransferCallback */.z)(types/* EthereumTokenType.ERC721 */.Dr.ERC721, contract?.address ?? '');
    // gas price
    const { value: defaultGasPrice = '0'  } = (0,useGasPrice/* useGasPrice */.F)();
    const gasPrice = gasConfig.gasPrice || defaultGasPrice;
    const gasFee = (0,react.useMemo)(()=>(0,base_src/* multipliedBy */.$q)(gasLimit, gasPrice)
    , [
        gasLimit,
        gasPrice
    ]);
    const gasFeeInUsd = (0,formatter/* formatWeiToEther */.yp)(gasFee).multipliedBy(nativeTokenPrice);
    // dialog
    const { setDialog: setSelectContractDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.selectNftContractDialogUpdated */.R$.events.selectNftContractDialogUpdated, (ev)=>{
        if (ev.open || !ev.contract || ev.uuid !== id) return;
        if (!contract || contract && !(0,utils_address/* isSameAddress */.Wr)(contract.address, ev.contract.address)) {
            if (contract && defaultToken && !(0,utils_address/* isSameAddress */.Wr)(contract.address, defaultToken.contractDetailed.address)) {
                setDefaultToken(null);
            }
            setValue('contract', ev.contract.name || ev.contract.address, {
                shouldValidate: true
            });
            setContract(ev.contract);
            setValue('tokenId', '');
        }
    });
    const { asyncRetry: { loading: loadingOwnerList  } , tokenDetailedOwnerList =[] , refreshing ,  } = (0,web3_providers_src/* useERC721TokenDetailedOwnerList */.t9)(contract, account);
    (0,react.useEffect)(()=>{
        if (transferState.type === types/* TransactionStateType.HASH */.n$.HASH) {
            navigate(shared_base_src/* DashboardRoutes.WalletsHistory */.vq.WalletsHistory);
        }
    }, [
        transferState
    ]);
    const onTransfer = (0,react.useCallback)(async (data)=>{
        if (dist.EthereumAddress.isValid(data.recipient)) {
            await transferCallback(data.tokenId, data.recipient, gasConfig);
            return;
        } else if (Utils?.isValidDomain?.(data.recipient) && dist.EthereumAddress.isValid(registeredAddress)) {
            await transferCallback(data.tokenId, registeredAddress, gasConfig);
        }
        return;
    }, [
        transferCallback,
        contract?.address,
        gasConfig,
        registeredAddress,
        Utils?.isValidDomain
    ]);
    const ensContent = (0,react.useMemo)(()=>{
        if (resolveDomainLoading) return;
        if (registeredAddress) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                style: {
                    padding: 10,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        href: Utils?.resolveDomainLink?.(allFormFields.recipient),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        underline: "none",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 16,
                                lineHeight: "22px",
                                fontWeight: 500,
                                style: {
                                    color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary
                                },
                                children: allFormFields.recipient
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                style: {
                                    color: entry/* MaskColorVar.textSecondary */.ZN.textSecondary
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                    address: registeredAddress,
                                    size: 4,
                                    formatter: Utils?.formatAddress
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Right/* RightIcon */.m, {})
                ]
            });
        }
        if (allFormFields.recipient.includes('.eth')) {
            if (network?.type !== public_api_src/* NetworkType.Ethereum */.td.Ethereum) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    style: {
                        padding: '25px 10px'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "#FF5F5F",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22px",
                        children: t.wallet_transfer_error_no_ens_support()
                    })
                });
            }
            if (Utils?.isValidDomain?.(allFormFields.recipient) && resolveDomainError) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    style: {
                        padding: '25px 10px'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "#FF5F5F",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22px",
                        children: t.wallet_transfer_error_no_address_has_been_set_name()
                    })
                });
            }
        }
        return;
    }, [
        allFormFields.recipient,
        resolveDomainError,
        Utils?.isValidDomain,
        resolveDomainLoading,
        network,
        registeredAddress, 
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPopoverOpen(!!ensContent && !!anchorEl.current);
    }, [
        ensContent
    ]);
    const contractIcon = (0,react.useMemo)(()=>{
        if (!contract?.iconURL) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            width: 20,
            height: 20,
            mr: 1,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                style: {
                    borderRadius: 10
                },
                width: "20px",
                height: "20px",
                src: contract.iconURL,
                alt: ""
            })
        });
    }, [
        contract
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        direction: "row",
        justifyContent: "center",
        mt: 4,
        maxHeight: "100%",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
            onSubmit: handleSubmit(onTransfer),
            noValidate: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                width: 640,
                minWidth: 500,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        width: "100%",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                control: control,
                                render: (field)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                                        ...field,
                                        required: true,
                                        onChange: (e)=>setValue('recipient', e.currentTarget.value)
                                        ,
                                        helperText: errors.recipient?.message || recipientError?.message,
                                        error: !!errors.recipient || !!recipientError && recipientError.type === 'contractAddress',
                                        value: field.field.value,
                                        InputProps: {
                                            onClick: (event)=>{
                                                if (!anchorEl.current) anchorEl.current = event.currentTarget;
                                                if (ensContent) setPopoverOpen(true);
                                                setMinPopoverWidth(event.currentTarget.clientWidth);
                                            },
                                            spellCheck: false
                                        },
                                        label: t.wallets_transfer_to_address()
                                    })
                                ,
                                name: "recipient"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* default */.ZP, {
                                anchorEl: anchorEl.current,
                                onClose: ()=>setPopoverOpen(false)
                                ,
                                PaperProps: {
                                    style: {
                                        minWidth: `${minPopoverWidth}px`,
                                        borderRadius: 4
                                    }
                                },
                                anchorOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                },
                                open: popoverOpen,
                                children: ensContent
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        width: "100%",
                        mt: 2,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                            control: control,
                            render: (field)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    onClick: ()=>setSelectContractDialog({
                                            open: true,
                                            uuid: id
                                        })
                                    ,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                                        ...field,
                                        error: !!errors.contract || !!errors.tokenId,
                                        helperText: errors.contract?.message || errors.tokenId?.message,
                                        placeholder: t.wallets_transfer_contract_placeholder(),
                                        disabled: true,
                                        InputProps: {
                                            classes: {
                                                disabled: classes.disabled
                                            },
                                            startAdornment: contractIcon,
                                            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowDown/* default */.Z, {})
                                        },
                                        inputProps: {
                                            sx: {
                                                cursor: 'pointer'
                                            }
                                        },
                                        label: t.wallets_transfer_contract(),
                                        value: field.field.value
                                    })
                                })
                            ,
                            name: "contract"
                        })
                    }),
                    (loadingOwnerList && tokenDetailedOwnerList.length === 0 || refreshing) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        pt: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        width: "100%",
                        mt: 2,
                        children: tokenDetailedOwnerList.length > 0 && !refreshing && /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                            control: control,
                            render: (field)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SelectNFTList, {
                                    error: !!errors.tokenId,
                                    onSelect: (value)=>setValue('tokenId', value)
                                    ,
                                    list: defaultToken ? (0,unionBy/* default */.Z)([
                                        defaultToken,
                                        ...tokenDetailedOwnerList
                                    ], 'tokenId') : tokenDetailedOwnerList,
                                    selectedTokenId: field.field.value,
                                    loading: loadingOwnerList
                                })
                            ,
                            name: "tokenId"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "16px",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: "12px",
                                fontWeight: "bold",
                                children: t.gas_fee()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: "14px",
                                        children: t.transfer_cost({
                                            gasFee: (0,formatter/* formatWeiToEther */.yp)(gasFee).toFixed(6),
                                            symbol: nativeToken.value?.symbol ?? '',
                                            usd: gasFeeInUsd.toFixed(2)
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                        size: "small",
                                        onClick: onCustomGasSetting,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tune/* default */.Z, {
                                            fontSize: "small"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        mt: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                width: 240
                            },
                            type: "submit",
                            disabled: isSubmitting || transferState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING,
                            children: t.wallets_transfer_send()
                        })
                    })
                ]
            })
        })
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Transfer/index.tsx












const assetTabs = [
    TransferTab.Token,
    TransferTab.Collectibles
];

const Transfer = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { state  } = (0,react_router/* useLocation */.TH)();
    const { value: nativeToken  } = (0,hooks_useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const transferTabsLabel = {
        [TransferTab.Token]: t.wallets_assets_token(),
        [TransferTab.Collectibles]: t.wallets_assets_collectibles()
    };
    const [currentTab, onChange, , setTab] = (0,entry/* useTabs */.YE)(TransferTab.Token, TransferTab.Collectibles);
    (0,react.useEffect)(()=>{
        if (!state) return;
        if (!state.erc721Token || state.type !== TransferTab.Collectibles) return;
        setTab(TransferTab.Collectibles);
    }, [
        state
    ]);
    if (!nativeToken && !state?.token) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer/* ContentContainer */.O, {
        sx: {
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: currentTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabList/* default */.Z, {
                        onChange: onChange,
                        children: assetTabs.map((key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                value: key,
                                label: transferTabsLabel[key]
                            }, key)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: TransferTab.Token,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransferERC20, {
                            token: state?.token || nativeToken
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: TransferTab.Collectibles,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransferERC721, {})
                    })
                ]
            })
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var esm_useAsyncRetry = __webpack_require__(64452);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/CollectibleList/index.tsx














const CollectibleList_useStyles = (0,entry/* makeStyles */.ZL)()({
    root: {
        flex: 1,
        padding: '24px 26px 0px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 140px)',
        gridGap: '20px',
        justifyContent: 'space-between'
    },
    card: {},
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
const ITEM_SIZE = {
    width: 150,
    height: 250
};
const CollectibleList = /*#__PURE__*/ (0,react.memo)(({ selectedNetwork  })=>{
    const [page, setPage] = (0,react.useState)(0);
    const navigate = (0,react_router/* useNavigate */.s0)();
    const account = (0,entry_web3/* useAccount */.mA)();
    const { Asset  } = (0,entry_web3/* useWeb3State */.dM)();
    const network = (0,entry_web3/* useNetworkDescriptor */.Vw)();
    const [loadingSize, setLoadingSize] = (0,react.useState)(0);
    const [renderData, setRenderData] = (0,react.useState)([]);
    const { value ={
        data: shared_base_src/* EMPTY_LIST */.rP,
        hasNextPage: false
    } , error: collectiblesError , loading: isQuerying , retry ,  } = (0,esm_useAsyncRetry/* default */.Z)(async ()=>Asset?.getNonFungibleAssets?.(account, {
            page: page,
            size: 20
        }, undefined, selectedNetwork || undefined)
    , [
        account,
        Asset?.getNonFungibleAssets,
        network,
        selectedNetwork
    ]);
    (0,react.useEffect)(()=>{
        const unsubscribeTokens = API/* PluginMessages.Wallet.events.erc721TokensUpdated.on */.yC.Wallet.events.erc721TokensUpdated.on(()=>retry()
        );
        const unsubscribeSocket = API/* PluginMessages.Wallet.events.socketMessageUpdated.on */.yC.Wallet.events.socketMessageUpdated.on((info)=>{
            if (!info.done) {
                retry();
            }
        });
        return ()=>{
            unsubscribeTokens();
            unsubscribeSocket();
        };
    }, [
        retry
    ]);
    (0,react.useEffect)(()=>{
        if (!loadingSize) return;
        const render = value.data.slice(page * loadingSize, (page + 1) * loadingSize);
        setRenderData(render);
    }, [
        value.data,
        loadingSize,
        page
    ]);
    const currentPluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const onSend = (0,react.useCallback)((detail)=>{
        // Sending NFT is only available on EVM currently.
        if (currentPluginId !== entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) return;
        navigate(shared_base_src/* DashboardRoutes.WalletsTransfer */.vq.WalletsTransfer, {
            state: {
                type: TransferTab.Collectibles,
                erc721Token: detail
            }
        });
    }, [
        currentPluginId
    ]);
    const hasNextPage = (page + 1) * loadingSize < value.data.length;
    const isLoading = renderData.length === 0 && isQuerying;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleListUI, {
        isLoading: isLoading,
        isEmpty: !!collectiblesError || renderData.length === 0,
        page: page,
        onPageChange: setPage,
        hasNextPage: hasNextPage,
        showPagination: !isQuerying && !(page === 0 && !hasNextPage),
        dataSource: renderData,
        chainId: network?.chainId ?? 1,
        onSend: onSend,
        setLoadingSize: (size)=>setLoadingSize(size)
    });
});
const CollectibleListUI = /*#__PURE__*/ (0,react.memo)(({ page , onPageChange , isLoading , isEmpty , hasNextPage , showPagination , chainId , dataSource , onSend , setLoadingSize ,  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = CollectibleList_useStyles();
    const ref = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (!ref.current) return;
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight - 60;
        const baseSize = Math.floor(width / ITEM_SIZE.width) * Math.floor(height / ITEM_SIZE.height);
        // Ensure load 10 NFTs at least.
        setLoadingSize((prev)=>prev || Math.max(Math.floor(baseSize * 0.8), 10)
        );
    }, [
        ref.current
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        ref: ref,
        children: [
            isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}) : isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyPlaceholder, {
                children: t.wallets_empty_collectible_tip()
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.root,
                    children: dataSource.map((x, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.card,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
                                chainId: chainId,
                                token: x,
                                renderOrder: index,
                                // TODO: transfer not support multi chain, should remove is after supported
                                onSend: ()=>onSend(x)
                            })
                        }, index)
                    )
                })
            }),
            showPagination ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                    count: -1,
                    component: "div",
                    onPageChange: ()=>{},
                    page: page,
                    rowsPerPage: 20,
                    rowsPerPageOptions: [
                        20
                    ],
                    labelDisplayedRows: ()=>null
                    ,
                    backIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev - 1
                            )
                        ,
                        size: 'small',
                        disabled: page === 0
                    },
                    nextIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev + 1
                            )
                        ,
                        disabled: !hasNextPage,
                        size: 'small'
                    }
                })
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(55694);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(80804);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(56125);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(16296);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(76492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(76594);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/utils/getTokenUSDValue.tsx

const getTokenUSDValue = (value)=>value ? Number.parseFloat(value[entry_web3/* CurrencyType.USD */.V2.USD] ?? '') : 0
;

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/FungibleTokenTableRow/index.tsx












const FungibleTokenTableRow_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 36,
            height: 36
        },
        symbol: {
            marginLeft: 14,
            fontSize: theme.typography.pxToRem(14),
            maxWidth: '100px',
            textOverflow: 'ellipsis',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        row: {
            '&:hover': {
                backgroundColor: theme.palette.background.default
            }
        },
        cell: {
            padding: theme.spacing(2),
            border: 'none'
        },
        button: {
            color: theme.palette.mode === 'dark' ? (0,entry/* getMaskColor */.nb)(theme).white : (0,entry/* getMaskColor */.nb)(theme).primary,
            '&:disabled': {
                color: theme.palette.mode === 'dark' ? (0,entry/* getMaskColor */.nb)(theme).white : (0,entry/* getMaskColor */.nb)(theme).primary
            }
        },
        chainIcon: {
            position: 'absolute',
            right: -9,
            bottom: 0,
            height: 18,
            width: 18,
            border: `1px solid ${theme.palette.background.default}`,
            borderRadius: '50%'
        },
        tip: {
            padding: theme.spacing(1),
            background: '#111432'
        },
        tipArrow: {
            color: '#111432'
        }
    })
);
const FungibleTokenTableRow = /*#__PURE__*/ (0,react.memo)(({ asset , onSend , onSwap  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = FungibleTokenTableRow_useStyles();
    const currentChainId = (0,entry_web3/* useChainId */.xx)();
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    const networkDescriptors = (0,entry_web3/* useNetworkDescriptors */.px)();
    const currentPluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const isOnCurrentChain = (0,react.useMemo)(()=>currentChainId === asset.token.chainId
    , [
        asset,
        currentChainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        className: classes.row,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                variant: "body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            position: "relative",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                                    classes: {
                                        icon: classes.icon
                                    },
                                    address: asset.token.address,
                                    name: asset.token.name,
                                    chainId: asset.token.chainId,
                                    logoURI: asset.logoURI || asset.token.logoURI,
                                    AvatarProps: {
                                        sx: {
                                            width: 36,
                                            height: 36
                                        }
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.chainIcon,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* WalletIcon */.o, {
                                        size: 16,
                                        networkIcon: networkDescriptors.find((x)=>x.chainId === asset.token.chainId
                                        )?.icon
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.symbol,
                            children: asset.token.symbol
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                variant: "body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: (0,base_src/* toFixed */.FH)(Utils?.formatBalance?.(asset.balance, asset.token.decimals) ?? '', 6)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                variant: "body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: asset.price?.[entry_web3/* CurrencyType.USD */.V2.USD] ? new (bignumber_default())(asset.price[entry_web3/* CurrencyType.USD */.V2.USD] ?? '').gt((0,base_src/* pow10 */.wA)(-6)) ? Utils?.formatCurrency?.(Number.parseFloat(asset.price[entry_web3/* CurrencyType.USD */.V2.USD] ?? ''), '$') : '<0.000001' : '-'
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: getTokenUSDValue(asset.value) < 0.01 ? '<0.01' : /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedCurrency */.bO, {
                        value: getTokenUSDValue(asset.value).toFixed(2),
                        sign: "$",
                        formatter: Utils?.formatCurrency
                    })
                })
            }),
            currentPluginId === entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM && /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                sx: {
                    minWidth: '200px'
                },
                className: classes.cell,
                align: "center",
                variant: "body",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                        disableHoverListener: isOnCurrentChain,
                        disableTouchListener: true,
                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChangeNetworkTip, {
                            chainId: asset.token.chainId
                        }),
                        placement: "top",
                        classes: {
                            tooltip: classes.tip,
                            arrow: classes.tipArrow
                        },
                        arrow: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                size: "small",
                                style: !isOnCurrentChain ? {
                                    pointerEvents: 'none'
                                } : {},
                                disabled: !isOnCurrentChain,
                                variant: "outlined",
                                color: "secondary",
                                sx: {
                                    marginRight: 1
                                },
                                className: classes.button,
                                onClick: onSend,
                                children: t.wallets_balance_Send()
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                        disableHoverListener: isOnCurrentChain || asset.token.chainId !== types/* ChainId.Conflux */.a_.Conflux,
                        disableTouchListener: true,
                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChangeNetworkTip, {
                            chainId: asset.token.chainId
                        }),
                        placement: "top",
                        classes: {
                            tooltip: classes.tip,
                            arrow: classes.tipArrow
                        },
                        arrow: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                size: "small",
                                style: !isOnCurrentChain || asset.token.chainId === types/* ChainId.Conflux */.a_.Conflux ? {
                                    pointerEvents: 'none'
                                } : {},
                                disabled: !isOnCurrentChain || asset.token.chainId === types/* ChainId.Conflux */.a_.Conflux,
                                variant: "outlined",
                                color: "secondary",
                                onClick: onSwap,
                                className: classes.button,
                                children: t.wallets_balance_Swap()
                            })
                        })
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/FungibleTokenTable/index.tsx
















const FungibleTokenTable_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        table: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
            [theme.breakpoints.down('lg')]: {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2)
            }
        },
        header: {
            color: entry/* MaskColorVar.normalText */.ZN.normalText,
            fontWeight: theme.typography.fontWeightRegular,
            padding: '12px 0 12px',
            backgroundColor: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            border: 'none'
        },
        footer: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paginationItem: {
            borderRadius: 4,
            border: `1px solid ${entry/* MaskColorVar.lineLight */.ZN.lineLight}`,
            color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary,
            '&.Mui-selected': {
                backgroundColor: entry/* MaskColorVar.blue */.ZN.blue,
                color: '#ffffff',
                border: 'none',
                '&:hover': {
                    backgroundColor: entry/* MaskColorVar.blue */.ZN.blue
                }
            }
        }
    })
);
const FungibleTokenTable = /*#__PURE__*/ (0,react.memo)(({ selectedChainId  })=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const account = (0,entry_web3/* useAccount */.mA)();
    const { Asset  } = (0,entry_web3/* useWeb3State */.dM)();
    const { portfolioProvider  } = (0,context/* useWeb3State */.dM)();
    const network = (0,entry_web3/* useNetworkDescriptor */.Vw)();
    const [tokenUpdateCount, setTokenUpdateCount] = (0,react.useState)(0);
    const { setDialog: openSwapDialog  } = (0,src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Swap.swapDialogUpdated */.yC.Swap.swapDialogUpdated);
    const { error: detailedTokensError , loading: detailedTokensLoading , value: detailedTokens ,  } = (0,useAsync/* default */.Z)(async ()=>Asset?.getFungibleAssets?.(account, portfolioProvider, network)
    , [
        account,
        Asset,
        portfolioProvider,
        tokenUpdateCount
    ]);
    (0,react.useEffect)(()=>{
        API/* PluginMessages.Wallet.events.erc20TokensUpdated.on */.yC.Wallet.events.erc20TokensUpdated.on(()=>setTimeout(()=>setTokenUpdateCount((prev)=>prev + 1
                )
            , 100)
        );
    }, []);
    const onSwap = (0,react.useCallback)((token)=>{
        openSwapDialog({
            open: true,
            traderProps: {
                defaultInputCoin: {
                    id: token.id,
                    name: token.name || '',
                    symbol: token.symbol || '',
                    contract_address: token.address,
                    decimals: token.decimals
                }
            }
        });
    }, []);
    const onSend = (0,react.useCallback)((token)=>navigate(shared_base_src/* DashboardRoutes.WalletsTransfer */.vq.WalletsTransfer, {
            state: {
                token
            }
        })
    , []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenTableUI, {
        isLoading: detailedTokensLoading,
        isEmpty: !detailedTokensLoading && (!!detailedTokensError || !detailedTokens?.length),
        dataSource: (detailedTokens ?? []).filter((x)=>!selectedChainId || x.chainId === selectedChainId
        ),
        onSwap: onSwap,
        onSend: onSend
    });
});
const TokenTableUI = /*#__PURE__*/ (0,react.memo)(({ onSwap , onSend , isLoading , isEmpty , dataSource  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = FungibleTokenTable_useStyles();
    const currentPluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        children: isLoading || isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}) : null,
                isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyPlaceholder, {
                    children: t.wallets_empty_tokens_tip()
                }) : null
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            stickyHeader: true,
            className: classes.table,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "head",
                                className: classes.header,
                                children: t.wallets_assets_asset()
                            }, "Asset"),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "head",
                                className: classes.header,
                                children: t.wallets_assets_balance()
                            }, "Balance"),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "head",
                                className: classes.header,
                                children: t.wallets_assets_price()
                            }, "Price"),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "head",
                                className: classes.header,
                                children: t.wallets_assets_value()
                            }, "Value"),
                            currentPluginId === entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM && /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "center",
                                variant: "head",
                                className: classes.header,
                                children: t.wallets_assets_operation()
                            }, "Operation")
                        ]
                    })
                }),
                dataSource.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: dataSource.sort((first, second)=>{
                        const firstValue = new (bignumber_default())(Utils?.formatBalance?.(first.balance, first.token.decimals) ?? '');
                        const secondValue = new (bignumber_default())(Utils?.formatBalance?.(second.balance, second.token.decimals) ?? '');
                        if (firstValue.isEqualTo(secondValue)) return 0;
                        return Number(firstValue.lt(secondValue));
                    }).map((asset, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenTableRow, {
                            onSend: ()=>onSend(asset.token)
                            ,
                            onSwap: ()=>onSwap(asset.token)
                            ,
                            asset: asset
                        }, index)
                    )
                }) : null
            ]
        })
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Assets/index.tsx












const Assets_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        caption: {
            paddingRight: theme.spacing(2.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        addCustomTokenButton: {
            borderRadius: Number(theme.shape.borderRadius) * 3.5,
            fontSize: theme.typography.caption.fontSize
        },
        tab: {
            flex: 1,
            padding: '0px',
            display: 'flex',
            flexDirection: 'column'
        }
    })
);
var AssetTab;
(function(AssetTab) {
    AssetTab["Token"] = "Token";
    AssetTab["Investment"] = "Investment";
    AssetTab["Collectibles"] = "Collectibles";
})(AssetTab || (AssetTab = {}));
const Assets_assetTabs = [
    AssetTab.Token,
    AssetTab.Collectibles
];
const Assets = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const pluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const { classes  } = Assets_useStyles();
    const assetTabsLabel = {
        [AssetTab.Token]: t.wallets_assets_token(),
        [AssetTab.Investment]: t.wallets_assets_investment(),
        [AssetTab.Collectibles]: t.wallets_assets_collectibles()
    };
    const [currentTab, onChange, , setTab] = (0,entry/* useTabs */.YE)(AssetTab.Token, AssetTab.Collectibles);
    const [addCollectibleOpen, setAddCollectibleOpen] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setTab(AssetTab.Token);
    }, [
        pluginId
    ]);
    const showCollectibles = [
        entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
        entry_web3/* NetworkPluginID.PLUGIN_SOLANA */.FF.PLUGIN_SOLANA
    ].includes(pluginId);
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer/* ContentContainer */.O, {
                sx: {
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                    value: currentTab,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.caption,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabList/* default */.Z, {
                                    onChange: onChange,
                                    children: Assets_assetTabs.filter((x)=>showCollectibles || x === AssetTab.Token
                                    ).map((key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                            value: key,
                                            label: assetTabsLabel[key]
                                        }, key)
                                    )
                                }),
                                pluginId === entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                                    size: "small",
                                    color: "secondary",
                                    className: classes.addCustomTokenButton,
                                    onClick: async ()=>{
                                        if (currentTab === AssetTab.Token) {
                                            // TODO handle result
                                            await pickToken({
                                                whitelist: [],
                                                title: t.wallets_add_token()
                                            });
                                        } else {
                                            setAddCollectibleOpen(true);
                                        }
                                    },
                                    children: [
                                        "+",
                                        ' ',
                                        currentTab === AssetTab.Token ? t.wallets_add_token() : t.wallets_assets_custom_collectible()
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: AssetTab.Token,
                            sx: {
                                minHeight: 'calc(100% - 48px)'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenTable, {
                                selectedChainId: network?.chainId ?? null
                            })
                        }, AssetTab.Token),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: AssetTab.Collectibles,
                            sx: {
                                minHeight: 'calc(100% - 48px)'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleList, {
                                selectedNetwork: network
                            })
                        }, AssetTab.Collectibles)
                    ]
                })
            }),
            addCollectibleOpen && /*#__PURE__*/ (0,jsx_runtime.jsx)(AddCollectibleDialog, {
                open: true,
                onClose: ()=>setAddCollectibleOpen(false)
            })
        ]
    });
});

// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(53698);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(15679);
;// CONCATENATED MODULE: ../icons/general/Send.tsx


const SendIcon = (0,utils/* createIcon */.I)('SendIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.488 2.513c.15.15.15.393 0 .543L7.856 8.688a.384.384 0 11-.543-.543l5.632-5.632c.15-.15.393-.15.543 0z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.486 2.515a.39.39 0 01.092.405L9.931 13.34a.39.39 0 01-.725.03L7.183 8.816 2.632 6.795a.39.39 0 01.03-.726L13.08 2.422a.39.39 0 01.405.093zM3.85 6.48l3.788 1.683c.088.04.159.11.198.199l1.683 3.787 3.053-8.722L3.85 6.48z",
            fill: "#fff"
        })
    ]
}), '0 0 16 16');

;// CONCATENATED MODULE: ../icons/general/Card.tsx


const CardIcon = (0,utils/* createIcon */.I)('CardIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            clipPath: "url(#card_clip0)",
            stroke: "#fff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M14.5 2.667h-12c-.737 0-1.333.597-1.333 1.333v8c0 .737.596 1.334 1.333 1.334h12c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333zM1.167 6.667h14.666"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: "card_clip0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#fff",
                    transform: "translate(.5)",
                    d: "M0 0h16v16H0z"
                })
            })
        })
    ]
}), '0 0 16 16');

;// CONCATENATED MODULE: ../icons/general/Swap.tsx


const SwapIcon = (0,utils/* createIcon */.I)('SwapIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.5 3.2c.221 0 .4.18.4.4v2.8h2.8a.4.4 0 110 .8H2.5a.4.4 0 01-.4-.4V3.6c0-.22.18-.4.4-.4zM10.9 9.2c0-.221.179-.4.4-.4h3.2c.22 0 .4.179.4.4v3.2a.4.4 0 01-.8 0V9.6h-2.8a.4.4 0 01-.4-.4z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.028 2.621a5.045 5.045 0 012.647-.083 5.218 5.218 0 012.356 1.277 5.626 5.626 0 011.478 2.318.437.437 0 01-.248.55.403.403 0 01-.522-.262 4.762 4.762 0 00-1.25-1.962 4.416 4.416 0 00-1.994-1.08 4.269 4.269 0 00-2.24.07 4.451 4.451 0 00-1.94 1.212L2.789 7.165a.394.394 0 01-.577-.019.448.448 0 01.018-.609l2.523-2.5a5.26 5.26 0 012.276-1.416zm7.761 6.233a.448.448 0 01-.018.61l-2.522 2.5a5.26 5.26 0 01-2.276 1.416 5.045 5.045 0 01-2.648.082 5.218 5.218 0 01-2.356-1.276 5.627 5.627 0 01-1.478-2.318.437.437 0 01.248-.55.403.403 0 01.522.262c.253.755.683 1.43 1.25 1.962a4.416 4.416 0 001.994 1.08c.74.177 1.511.152 2.24-.07a4.45 4.45 0 001.93-1.202l.01-.01 2.527-2.505a.394.394 0 01.577.02z",
            fill: "#fff"
        })
    ]
}), '0 0 16 16');

// EXTERNAL MODULE: ../icons/general/Download.tsx
var Download = __webpack_require__(61210);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/buttonClasses.js
var buttonClasses = __webpack_require__(64981);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/hooks/useAddressBook.ts




function useAddressBook() {
    const chainId = useChainId();
    const result = useAsyncRetry(async ()=>PluginServices.Wallet.getAllAddress(chainId)
    , [
        chainId
    ]);
    useEffect(()=>PluginMessages.Wallet.events.addressBookUpdated.on(result.retry)
    , [
        result.retry
    ]);
    return result;
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/hooks/useERC20TokensDetailed.ts



function useERC20TokensDetailed() {
    const { ERC20  } = useTokenListConstants();
    const { value: nativeTokenDetailed  } = useNativeTokenDetailed();
    const { value: erc20TokensDetailed = [] , loading: erc20TokensDetailedLoading  } = useERC20TokensDetailedFromTokenLists(ERC20);
    // #region mask token
    const { MASK_ADDRESS  } = useTokenConstants();
    // #endregion
    const tokens = useMemo(()=>uniqBy(nativeTokenDetailed ? [
            nativeTokenDetailed,
            ...erc20TokensDetailed
        ] : [
            ...erc20TokensDetailed
        ], (x)=>x.address.toLowerCase()
        ).sort((a, z)=>{
            if (a.type === EthereumTokenType.Native) return -1;
            if (z.type === EthereumTokenType.Native) return 1;
            if (isSameAddress(a.address, MASK_ADDRESS)) return -1;
            if (isSameAddress(z.address, MASK_ADDRESS)) return 1;
            return 0;
        })
    , [
        nativeTokenDetailed,
        erc20TokensDetailed.length
    ]);
    const { value: assetsDetailedChain = [] , loading: assetsDetailedChainLoading , error: assetsDetailedChainError ,  } = useAssetsFromChain(tokens);
    return {
        value: assetsDetailedChain,
        loading: erc20TokensDetailedLoading || assetsDetailedChainLoading,
        error: assetsDetailedChainError
    };
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/hooks/useIsMatched.ts

function useIsMatched(...args) {
    const match = (0,react_router/* useMatch */.bS)(...args);
    return match !== null;
}

// EXTERNAL MODULE: ../dashboard/src/pages/Wallets/hooks/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(20833);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/hooks/index.ts






;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Balance/index.tsx










const BalanceContainer = (0,styled/* default */.ZP)('div')(({ theme  })=>`
    display: flex;
    justify-content: space-between;
    border-radius: 16px;
    align-items: center;
    padding: ${theme.spacing(2.5)};
    background: ${entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground};
`
);
const IconContainer = (0,styled/* default */.ZP)('div')`
    width: 48px;
    height: 48px;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${entry/* MaskColorVar.infoBackground */.ZN.infoBackground};
    border-radius: 24px;
`;
const BalanceDisplayContainer = (0,styled/* default */.ZP)('div')(({ theme  })=>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: ${theme.spacing(1)};
`
);
const BalanceTitle = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>`
  font-size: ${theme.typography.subtitle2.fontSize};
  color: ${entry/* MaskColorVar.iconLight */.ZN.iconLight};
`
);
const BalanceContent = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>`
    font-size: ${theme.typography.h5.fontSize};
    color: ${entry/* MaskColorVar.textPrimary */.ZN.textPrimary};
    line-height: ${theme.typography.h2.lineHeight};
`
);
const ButtonGroup = (0,styled/* default */.ZP)('div')`
    display: inline-grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    & > * {
        font-size: 12px;
        white-space: nowrap;
        & .${buttonClasses/* default.endIcon */.Z.endIcon} > *:nth-of-type(1) {
            font-size: 16px;
            fill: none;
        }
    }
`;
const Balance = /*#__PURE__*/ (0,react.memo)(({ balance , onSend , onBuy , onSwap , onReceive , onSelectNetwork , networks , selectedNetwork , showOperations  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const isWalletTransferPath = useIsMatched(shared_base_src/* DashboardRoutes.WalletsTransfer */.vq.WalletsTransfer);
    const isWalletHistoryPath = useIsMatched(shared_base_src/* DashboardRoutes.WalletsHistory */.vq.WalletsHistory);
    const isDisabledNonCurrentChainSelect = !!isWalletTransferPath;
    const isHiddenAllButton = isWalletHistoryPath || isWalletTransferPath || networks.length <= 1;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BalanceContainer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconContainer, {
                        sx: {
                            width: 48,
                            height: 48
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {
                            viewBox: "0 0 48 48",
                            fontSize: "inherit"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(BalanceDisplayContainer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(BalanceTitle, {
                                children: [
                                    t.wallets_balance(),
                                    " ",
                                    selectedNetwork?.name ?? t.wallets_balance_all_chain()
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(BalanceContent, {
                                sx: {
                                    py: 1.5
                                },
                                children: Number.isNaN(balance) ? '$0' : balance.toLocaleString('en', {
                                    style: 'currency',
                                    currency: 'USD'
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* MiniNetworkSelector */.jq, {
                                hideAllNetworkButton: isHiddenAllButton,
                                disabledNonCurrentNetwork: isDisabledNonCurrentChainSelect,
                                selectedNetwork: selectedNetwork,
                                networks: networks,
                                onSelect: (network)=>networks.length <= 1 ? noop/* default */.Z : onSelectNetwork(network)
                            })
                        ]
                    })
                ]
            }),
            showOperations && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonGroup, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        size: "small",
                        onClick: onSend,
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {
                            fontSize: "inherit"
                        }),
                        children: t.wallets_balance_Send()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        size: "small",
                        onClick: onBuy,
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardIcon, {
                            fill: "none",
                            fontSize: "inherit"
                        }),
                        children: t.wallets_balance_Buy()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        size: "small",
                        onClick: onSwap,
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapIcon, {
                            fontSize: "inherit"
                        }),
                        children: t.wallets_balance_Swap()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        size: "small",
                        color: "secondary",
                        onClick: onReceive,
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Download/* DownloadIcon */._, {
                            fontSize: "inherit",
                            style: {
                                stroke: entry/* MaskColorVar.textLink */.ZN.textLink
                            }
                        }),
                        children: t.wallets_balance_Receive()
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useTransactions.ts





function useTransactions(address, page, size, chainId) {
    const { getTransactionList  } = (0,context/* useWeb3Context */.Z_)();
    const { portfolioProvider , chainId: currentChainId  } = (0,context/* useWeb3State */.dM)();
    return (0,esm_useAsyncRetry/* default */.Z)(async ()=>{
        const network = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(chainId || currentChainId);
        if (!address || !network) {
            return {
                transactions: [],
                hasNextPage: false
            };
        }
        switch(portfolioProvider){
            case types/* FungibleAssetProvider.DEBANK */.Am.DEBANK:
            case types/* FungibleAssetProvider.ZERION */.Am.ZERION:
                return getTransactionList(address.toLowerCase(), network, portfolioProvider, page, size);
            default:
                (0,esm/* unreachable */.t1)(portfolioProvider);
        }
    }, [
        address,
        chainId,
        portfolioProvider,
        page,
        size
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
;// CONCATENATED MODULE: ../icons/general/Close.tsx


const CloseIcon = (0,utils/* createIcon */.I)('CloseIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M15 5L5 15M5 5l10 10",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../icons/general/Upload.tsx
var Upload = __webpack_require__(53924);
// EXTERNAL MODULE: ../icons/general/RedPacket.tsx
var RedPacket = __webpack_require__(85309);
// EXTERNAL MODULE: ../icons/general/ITO.tsx
var ITO = __webpack_require__(47933);
;// CONCATENATED MODULE: ../icons/general/Interaction.tsx


const InteractionIcon = (0,utils/* createIcon */.I)('InteractionIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.1667 0.832031L17.5 4.16536L14.1667 7.4987",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M2.5 9.16797V7.5013C2.5 6.61725 2.85119 5.7694 3.47631 5.14428C4.10143 4.51916 4.94928 4.16797 5.83333 4.16797H17.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M5.83333 19.1667L2.5 15.8333L5.83333 12.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.5 10.832V12.4987C17.5 13.3828 17.1488 14.2306 16.5237 14.8557C15.8986 15.4808 15.0507 15.832 14.1667 15.832H2.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 20 20');

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/TransactionIcon/index.tsx







const TransactionIcon_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        container: {
            width: 36,
            height: 36,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: entry/* MaskColorVar.warning.alpha */.ZN.warning.alpha(0.15)
        },
        success: {
            background: entry/* MaskColorVar.greenMain.alpha */.ZN.greenMain.alpha(0.15)
        },
        error: {
            background: entry/* MaskColorVar.redMain.alpha */.ZN.redMain.alpha(0.15)
        },
        icon: {
            fontSize: 20,
            fill: 'none'
        }
    })
);
const TransactionIcon = /*#__PURE__*/ (0,react.memo)(({ address , failed , type , transactionType  })=>{
    const { HAPPY_RED_PACKET_ADDRESS_V1 , HAPPY_RED_PACKET_ADDRESS_V2 , HAPPY_RED_PACKET_ADDRESS_V3  } = (0,constants/* useRedPacketConstants */.AA)();
    const isRedPacket = (0,utils_address/* isSameAddress */.Wr)(HAPPY_RED_PACKET_ADDRESS_V1, address) || (0,utils_address/* isSameAddress */.Wr)(HAPPY_RED_PACKET_ADDRESS_V2, address) || (0,utils_address/* isSameAddress */.Wr)(HAPPY_RED_PACKET_ADDRESS_V3, address);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionIconUI, {
        transactionType: transactionType,
        isRedPacket: isRedPacket,
        isFailed: failed,
        type: type
    });
});
const TransactionIconUI = /*#__PURE__*/ (0,react.memo)(({ isFailed , isRedPacket , type , transactionType  })=>{
    const { classes  } = TransactionIcon_useStyles();
    const icon = (0,react.useMemo)(()=>{
        if (isFailed) return /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseIcon, {
            style: {
                stroke: entry/* MaskColorVar.redMain */.ZN.redMain
            },
            className: classes.icon
        });
        switch(type){
            case types/* TransactionType.SEND */.iU.SEND:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Upload/* UploadIcon */.r, {
                    style: {
                        stroke: entry/* MaskColorVar.warning */.ZN.warning
                    },
                    className: classes.icon
                });
            case types/* TransactionType.TRANSFER */.iU.TRANSFER:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Upload/* UploadIcon */.r, {
                    style: {
                        stroke: entry/* MaskColorVar.warning */.ZN.warning
                    },
                    className: classes.icon
                });
            case types/* TransactionType.RECEIVE */.iU.RECEIVE:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Download/* DownloadIcon */._, {
                    style: {
                        stroke: entry/* MaskColorVar.greenMain */.ZN.greenMain
                    },
                    className: classes.icon
                });
            case types/* TransactionType.CREATE_RED_PACKET */.iU.CREATE_RED_PACKET:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacket/* RedPacketIcon */.t, {
                    className: classes.icon
                });
            case types/* TransactionType.FILL_POOL */.iU.FILL_POOL:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO/* ITOIcon */.J, {
                    className: classes.icon
                });
            default:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(InteractionIcon, {
                    style: {
                        stroke: entry/* MaskColorVar.warning */.ZN.warning
                    },
                    className: classes.icon
                });
        }
    }, [
        isFailed,
        isRedPacket,
        type
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classnames_default()(classes.container, {
            [classes.error]: isFailed,
            [classes.success]: transactionType === types/* FilterTransactionType.RECEIVE */.sl.RECEIVE
        }),
        children: icon
    });
});

// EXTERNAL MODULE: ../icons/general/LinkOut.tsx
var LinkOut = __webpack_require__(43265);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/HistoryTableRow/index.tsx










const HistoryTableRow_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        type: {
            maxWidth: '240px',
            textOverflow: 'ellipsis',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        cell: {
            padding: `${theme.spacing(1.25)} ${theme.spacing(2.5)}`,
            border: 'none',
            fontSize: theme.typography.pxToRem(14)
        },
        link: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 21,
            color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary
        },
        linkIcon: {
            fill: 'none',
            fontSize: 16,
            marginLeft: 10
        },
        pair: {
            color: entry/* MaskColorVar.greenMain */.ZN.greenMain
        },
        send: {
            color: entry/* MaskColorVar.redMain */.ZN.redMain
        },
        hover: {
            '&:hover': {
                backgroundColor: theme.palette.background.default
            }
        }
    })
);
const HistoryTableRow = /*#__PURE__*/ (0,react.memo)(({ transaction , selectedChainId  })=>{
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(transaction.toAddress);
    const transactionType = (0,react.useMemo)(()=>{
        if (transaction.type === types/* TransactionType.CREATE_RED_PACKET */.iU.CREATE_RED_PACKET) {
            return 'Create Lucky Drop';
        }
        return (transaction.type ?? '').replace(/_/g, ' ');
    }, [
        transaction.type
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTableRowUI, {
        transaction: transaction,
        formattedType: transactionType,
        selectedChainId: selectedChainId,
        domain: domain
    });
});
const HistoryTableRowUI = /*#__PURE__*/ (0,react.memo)(({ transaction , selectedChainId , formattedType , domain  })=>{
    const { classes  } = HistoryTableRow_useStyles();
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        className: classes.hover,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                variant: "body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    style: {
                        display: 'flex',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionIcon, {
                            transactionType: transaction.transactionType,
                            type: transaction.type,
                            address: transaction.toAddress,
                            failed: transaction.failed
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            pl: 2,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    textAlign: "left",
                                    className: classes.type,
                                    variant: "body2",
                                    children: formattedType
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    fontSize: 12,
                                    textAlign: "left",
                                    color: entry/* MaskColorVar.textSecondary */.ZN.textSecondary,
                                    children: (0,format/* default */.Z)(transaction.timeAt, 'yyyy-MM-dd HH:mm')
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                children: transaction.pairs.map((pair, index)=>{
                    const direction = pair.direction === types/* DebankTransactionDirection.SEND */.Ej.SEND || pair.direction === types/* ZerionTransactionDirection.OUT */.so.OUT;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        className: classnames_default()(classes.pair, {
                            [classes.send]: direction
                        }),
                        justifyContent: "center",
                        gap: 2,
                        direction: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                width: "50%",
                                flexGrow: 0,
                                flexShrink: 0,
                                textAlign: "right",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: direction ? '-' : '+'
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: pair.amount.toFixed(pair.amount < 1 ? 6 : 2)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                width: "50%",
                                flexGrow: 0,
                                flexShrink: 0,
                                textAlign: "left",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary,
                                    children: pair.symbol
                                })
                            })
                        ]
                    }, index);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.link,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            children: domain ? Utils?.formatDomainName?.(domain) : Utils?.formatAddress?.(transaction.toAddress, 4)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            sx: {
                                height: 21
                            },
                            href: Utils?.resolveTransactionLink?.(selectedChainId, transaction.id),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkOut/* LinkOutIcon */.A, {
                                className: classes.linkIcon
                            })
                        })
                    ]
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/HistoryTable/index.tsx











const HistoryTable_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        header: {
            color: entry/* MaskColorVar.normalText */.ZN.normalText,
            fontWeight: theme.typography.fontWeightRegular,
            padding: '12px 0 12px',
            border: 'none',
            backgroundColor: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground
        },
        footer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paginationItem: {
            borderRadius: 4,
            border: `1px solid ${entry/* MaskColorVar.lineLight */.ZN.lineLight}`,
            color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary,
            '&.Mui-selected': {
                backgroundColor: entry/* MaskColorVar.blue */.ZN.blue,
                color: '#ffffff',
                border: 'none',
                '&:hover': {
                    backgroundColor: entry/* MaskColorVar.blue */.ZN.blue
                }
            }
        }
    })
);
const HistoryTable = /*#__PURE__*/ (0,react.memo)(({ selectedChainId  })=>{
    const [page, setPage] = (0,react.useState)(0);
    const account = (0,useAccount/* useAccount */.m)();
    const { value ={
        transactions: [],
        hasNextPage: false
    } , loading: transactionLoading , error: transactionError ,  } = useTransactions(account, page, 50, selectedChainId);
    const { transactions =[] , hasNextPage  } = value;
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPage(0);
    }, [
        account,
        selectedChainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTableUI, {
        page: page,
        onPageChange: setPage,
        hasNextPage: hasNextPage,
        isLoading: transactionLoading,
        isEmpty: !!transactionError || !transactions.length,
        dataSource: transactions,
        selectedChainId: selectedChainId
    });
});
const HistoryTableUI = /*#__PURE__*/ (0,react.memo)(({ isLoading , isEmpty , dataSource , page , onPageChange , hasNextPage , selectedChainId  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = HistoryTable_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                className: classes.container,
                children: isLoading || isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    flex: 1,
                    children: [
                        isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}) : null,
                        isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyPlaceholder, {
                            children: t.wallets_empty_history_tips()
                        }) : null
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
                    stickyHeader: true,
                    sx: {
                        padding: '0 44px'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_history_types()
                                    }, "Types"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_history_value()
                                    }, "Value"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_history_receiver()
                                    }, "Receiver")
                                ]
                            })
                        }),
                        dataSource.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                            children: dataSource.map((transaction, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTableRow, {
                                    transaction: transaction,
                                    selectedChainId: selectedChainId
                                }, index)
                            )
                        }) : null
                    ]
                })
            }),
            !(page === 0 && !hasNextPage) && !isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                    count: -1,
                    component: "div",
                    onPageChange: noop/* default */.Z,
                    page: page,
                    rowsPerPage: 30,
                    rowsPerPageOptions: [
                        30
                    ],
                    labelDisplayedRows: ()=>null
                    ,
                    backIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev - 1
                            )
                        ,
                        size: 'small',
                        disabled: page === 0
                    },
                    nextIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev + 1
                            )
                        ,
                        disabled: !hasNextPage,
                        size: 'small'
                    },
                    sx: {
                        overflow: 'hidden'
                    }
                })
            }) : null
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/History/index.tsx





const History_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        flex: 1,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '24px'
    }
});
const History = /*#__PURE__*/ (0,react.memo)(({ selectedChainId  })=>{
    const { classes  } = History_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer/* ContentContainer */.O, {
        sx: {
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTable, {
            selectedChainId: selectedChainId
        })
    });
});

;// CONCATENATED MODULE: ../dashboard/src/components/WalletQRCodeContainer/index.tsx



const QRCodeContainer = (0,styled/* default */.ZP)('div')(({ width , height , border: { borderWidth , borderHeight  }  })=>`
    width: ${width}px;
    height: ${height}px;
    background: linear-gradient(to right, black ${borderHeight}px, transparent ${borderHeight}px) 0 0,
    linear-gradient(to right, black ${borderHeight}px, transparent ${borderHeight}px) 0 100%,
    linear-gradient(to left, black ${borderHeight}px, transparent ${borderHeight}px) 100% 0,
    linear-gradient(to left, black ${borderHeight}px, transparent ${borderHeight}px) 100% 100%,
    linear-gradient(to bottom, black ${borderHeight}px, transparent ${borderHeight}px) 0 0,
    linear-gradient(to bottom, black ${borderHeight}px, transparent ${borderHeight}px) 100% 0,
    linear-gradient(to top, black ${borderHeight}px, transparent ${borderHeight}px) 0 100%,
    linear-gradient(to top, black ${borderHeight}px, transparent ${borderHeight}px) 100% 100%;

    background-repeat: no-repeat;
    background-size: ${borderWidth}px ${borderWidth}px;
    padding: ${borderHeight}px;
`
);
const WalletQRCodeContainer = /*#__PURE__*/ (0,react.memo)((props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeContainer, {
        ...props,
        children: props.children
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(90869);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/api.ts


const [useCurrentCollectibleDataProvider] = (0,src/* createGlobalState */.r8)(API/* Services.Settings.getCurrentCollectibleDataProvider */.K9.Settings.getCurrentCollectibleDataProvider, (x)=>API/* Messages.events.currentNonFungibleAssetDataProviderSettings.on */.Vm.events.currentNonFungibleAssetDataProviderSettings.on(x)
);
const [useCurrentSelectedWalletNetwork] = (0,src/* createGlobalState */.r8)(API/* Services.Settings.getCurrentSelectedWalletNetwork */.K9.Settings.getCurrentSelectedWalletNetwork, (x)=>API/* Messages.events.currentNetworkSettings.on */.Vm.events.currentNetworkSettings.on(x)
);

// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/ReceiveDialog/index.tsx











const ReceiveDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        paper: {
            width: '100%'
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        addressTitle: {
            marginTop: theme.spacing(1.5),
            color: entry/* MaskColorVar.normalText */.ZN.normalText
        },
        address: {
            marginTop: theme.spacing(1.5),
            fontWeight: 600
        }
    })
);
const ReceiveDialog = /*#__PURE__*/ (0,react.memo)(({ open , chainName , walletAddress , onClose  })=>{
    const currentSelectedWalletNetwork = useCurrentSelectedWalletNetwork();
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(walletAddress);
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReceiveDialogUI, {
        open: open,
        chainName: chainName,
        walletAddress: walletAddress,
        domain: domain,
        onClose: onClose,
        currentNetworkType: currentSelectedWalletNetwork,
        formatDomainName: Utils?.formatDomainName
    });
});
const ReceiveDialogUI = /*#__PURE__*/ (0,react.memo)(({ open , currentNetworkType , chainName , onClose , walletAddress , domain , formatDomainName  })=>{
    const { classes  } = ReceiveDialog_useStyles();
    const t = (0,locales/* useDashboardI18N */.x)();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const copyWalletAddress = (0,shared_src/* useSnackbarCallback */.iD)({
        executor: async (address)=>copyToClipboard(address)
        ,
        deps: [],
        successText: t.wallets_address_copied()
    });
    // TODO: The <QRCode /> text prop protocol maybe correct and requires confirmation
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(entry/* MaskDialog */.Df, {
        open: open,
        title: t.wallets_balance_Receive(),
        onClose: onClose,
        DialogProps: {
            classes: {
                paper: classes.paper
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        sx: {
                            marginBottom: 3.5
                        },
                        children: t.wallets_receive_tips({
                            chainName
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletQRCodeContainer, {
                        width: 286,
                        height: 286,
                        border: {
                            borderWidth: 15,
                            borderHeight: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* QRCode */.s_, {
                            text: `${(0,pipes/* resolveNetworkAddressPrefix */.OC)(currentNetworkType)}:${walletAddress}`,
                            options: {
                                width: 282
                            },
                            canvasProps: {
                                style: {
                                    display: 'block',
                                    margin: 'auto'
                                }
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.addressTitle,
                        children: t.wallets_address()
                    }),
                    domain && formatDomainName ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.address,
                        children: formatDomainName(domain)
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.address,
                        children: walletAddress
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    size: "medium",
                    onClick: ()=>copyWalletAddress(walletAddress)
                    ,
                    children: t.wallets_address_copy()
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ../dashboard/src/pages/Wallets/components/WalletStateBar/index.tsx + 1 modules
var WalletStateBar = __webpack_require__(42864);
// EXTERNAL MODULE: ../icons/general/CloudLink.tsx
var CloudLink = __webpack_require__(33185);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ../dashboard/src/components/ActionCard/index.tsx
var ActionCard = __webpack_require__(54883);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/StartUp.tsx








const Container = (0,styled/* default */.ZP)('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
function StartUp() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { openDialog: openConnectWalletDialog  } = (0,src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Wallet.events.selectProviderDialogUpdated */.yC.Wallet.events.selectProviderDialogUpdated);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
            variant: "background",
            sx: {
                width: '100%',
                height: '100%'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                justifyContent: "center",
                height: "100%",
                alignItems: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                        title: t.wallets_startup_connect(),
                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudLink/* CloudLinkIcon */._, {
                            fontSize: "inherit"
                        }),
                        subtitle: t.wallets_startup_connect_desc(),
                        action: {
                            type: 'primary',
                            text: t.wallets_startup_connect_action(),
                            handler: openConnectWalletDialog
                        }
                    })
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/index.tsx





















const r = (0,shared_base_src/* relativeRouteOf */.zD)(shared_base_src/* DashboardRoutes.Wallets */.vq.Wallets);
function Wallets() {
    const wallet = (0,entry_web3/* useWallet */.Os)();
    const wallets = (0,entry_web3/* useWallets */.rB)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const currentChainId = (0,entry_web3/* useChainId */.xx)();
    const { Asset  } = (0,entry_web3/* useWeb3State */.dM)();
    const account = (0,entry_web3/* useAccount */.mA)();
    const { portfolioProvider  } = (0,context/* useWeb3State */.dM)();
    const network = (0,entry_web3/* useNetworkDescriptor */.Vw)();
    const { pathname  } = (0,react_router/* useLocation */.TH)();
    const isWalletPath = useIsMatched(shared_base_src/* DashboardRoutes.Wallets */.vq.Wallets);
    const isWalletTransferPath = useIsMatched(shared_base_src/* DashboardRoutes.WalletsTransfer */.vq.WalletsTransfer);
    const isWalletHistoryPath = useIsMatched(shared_base_src/* DashboardRoutes.WalletsHistory */.vq.WalletsHistory);
    const [receiveOpen, setReceiveOpen] = (0,react.useState)(false);
    const networks = (0,entry_web3/* getRegisteredWeb3Networks */.Rm)();
    const networkDescriptor = (0,entry_web3/* useNetworkDescriptor */.Vw)();
    const pluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const [selectedNetwork, setSelectedNetwork] = (0,react.useState)(networkDescriptor ?? null);
    const { openDialog: openBuyDialog  } = (0,src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Transak.buyTokenDialogUpdated */.yC.Transak.buyTokenDialogUpdated);
    const { openDialog: openSwapDialog  } = (0,src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Swap.swapDialogUpdated */.yC.Swap.swapDialogUpdated);
    const { value: detailedTokens  } = (0,useAsync/* default */.Z)(async ()=>Asset?.getFungibleAssets?.(account, portfolioProvider, network)
    , [
        account,
        Asset,
        portfolioProvider,
        network
    ]);
    const renderNetworks = (0,react.useMemo)(()=>{
        return networks.filter((x)=>pluginId === x.networkSupporterPluginID && x.isMainnet
        );
    }, [
        networks,
        pluginId
    ]);
    // If show one network only, set it as default network
    const defaultNetwork = (0,react.useMemo)(()=>{
        if (renderNetworks.length !== 1) return null;
        return renderNetworks[0];
    }, [
        renderNetworks
    ]);
    (0,react.useEffect)(()=>{
        if (isWalletPath) return;
        setSelectedNetwork(networkDescriptor || defaultNetwork);
    }, [
        isWalletPath,
        networkDescriptor,
        defaultNetwork
    ]);
    (0,react.useEffect)(()=>{
        if (isWalletTransferPath || isWalletHistoryPath) {
            setSelectedNetwork(networkDescriptor || defaultNetwork);
            return;
        }
        setSelectedNetwork(defaultNetwork);
    }, [
        pathname,
        defaultNetwork
    ]);
    const balance = (0,react.useMemo)(()=>{
        if (!detailedTokens || !detailedTokens.length) return 0;
        const values = detailedTokens.filter((x)=>selectedNetwork ? x.chainId === selectedNetwork.chainId : true
        ).map((y)=>getTokenUSDValue(y.value)
        );
        return bignumber_default().sum(...values).toNumber();
    }, [
        selectedNetwork,
        detailedTokens
    ]);
    const pateTitle = (0,react.useMemo)(()=>{
        if (wallets.length === 0) return t.create_wallet_form_title();
        if (isWalletPath) return t.wallets_assets();
        if (isWalletTransferPath) return t.wallets_transfer();
        if (isWalletHistoryPath) return t.wallets_history();
        return t.wallets();
    }, [
        isWalletPath,
        isWalletHistoryPath,
        isWalletTransferPath,
        wallets.length
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(PageFrame/* PageFrame */.C, {
        title: pateTitle,
        noBackgroundFill: true,
        primaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStateBar/* WalletStateBar */.$, {}),
        children: [
            !wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(StartUp, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Balance, {
                        balance: balance,
                        onSend: ()=>navigate(shared_base_src/* DashboardRoutes.WalletsTransfer */.vq.WalletsTransfer)
                        ,
                        onBuy: openBuyDialog,
                        onSwap: openSwapDialog,
                        onReceive: ()=>setReceiveOpen(true)
                        ,
                        networks: renderNetworks,
                        selectedNetwork: selectedNetwork,
                        onSelectNetwork: setSelectedNetwork,
                        showOperations: pluginId === entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                path: "*",
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Assets, {
                                    network: selectedNetwork
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                path: r(shared_base_src/* DashboardRoutes.WalletsTransfer */.vq.WalletsTransfer),
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transfer, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                path: r(shared_base_src/* DashboardRoutes.WalletsHistory */.vq.WalletsHistory),
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(History, {
                                    selectedChainId: selectedNetwork?.chainId ?? currentChainId
                                })
                            })
                        ]
                    })
                ]
            }),
            wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReceiveDialog, {
                open: receiveOpen,
                chainName: "Ethereum",
                walletAddress: wallet.address ?? '',
                onClose: ()=>setReceiveOpen(false)
            }) : null
        ]
    });
}
/* harmony default export */ function pages_Wallets() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Wallets, {});
};


/***/ }),

/***/ 53698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ MaskWalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const MaskWalletIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Wallet', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M38 27.006v-.363h.819a.181.181 0 110 .363H38z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M12 19.81c0-2.104 1.606-3.81 3.586-3.81h18.828C36.394 16 38 17.706 38 19.81v12.38c0 2.104-1.606 3.81-3.586 3.81H15.586C13.606 36 12 34.294 12 32.19V19.81z",
                fill: "#1C68F3",
                fillOpacity: ".4"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M28.87 25.142a8 8 0 11-8-13.856 8 8 0 018 13.856z",
            fill: "url(#mask_wallet_paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.878 18.982l1.307 2.264 6.792-3.921.292-.17a3.557 3.557 0 01-5.375 4.01l-1.317.76 1.098 1.902c.26.45.835.604 1.286.345l6.52-3.765a.941.941 0 00.345-1.286l-2.797-4.845-8.151 4.706zm3.797 1.732a2.769 2.769 0 002.587-.098 2.768 2.768 0 001.378-2.191l-3.965 2.289zm2.335-4.548a1.465 1.465 0 011.883.362l-.695.401a.68.68 0 00-1.12.647l-.695.401a1.465 1.465 0 01.627-1.811zm-3.487 2.013a1.464 1.464 0 011.883.362l-.695.401a.68.68 0 00-1.12.647l-.695.401a1.464 1.464 0 01.627-1.811zm-3.268-2.158a.941.941 0 00-.345 1.285l.575.997 8.151-4.706-.575-.996a.941.941 0 00-1.285-.345l-6.521 3.765z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M12 23.79c0-2.093 1.606-3.79 3.586-3.79h18.828C36.394 20 38 21.697 38 23.79v10.42c0 2.093-1.606 3.79-3.586 3.79H15.586C13.606 38 12 36.303 12 34.21V23.79z",
                fill: "#1C68F3",
                fillOpacity: ".05"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".8",
            d: "M39 26.824V30.5a.5.5 0 01-.5.5H35a2 2 0 010-4h3.5c.5 0 .5-.176.5-.176z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
            cx: "35",
            cy: "29",
            r: "1",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "8",
                    y: "12",
                    width: "34",
                    height: "28",
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
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter1_b",
                    x: "8",
                    y: "16",
                    width: "34",
                    height: "26",
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
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "mask_wallet_paint0_linear",
                    x1: "31.433",
                    y1: "13.777",
                    x2: "16.29",
                    y2: "20.004",
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
                })
            ]
        })
    ]
}), '0 0 48 48');


/***/ }),

/***/ 48078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MiniMaskIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const MiniMaskIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('MiniMask', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "white"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            opacity: "0.5",
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "rgba(0,0,0,0.2)"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "rgba(0,0,0,0.2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), undefined, '0 0 48 48');


/***/ }),

/***/ 43904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ CheckedIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const CheckedIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('CheckedIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M0 4C0 1.79086 1.79086 0 4 0H14C16.2091 0 18 1.79086 18 4V14C18 16.2091 16.2091 18 14 18H4C1.79086 18 0 16.2091 0 14V4Z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.0303 5.46967C14.3232 5.76256 14.3232 6.23744 14.0303 6.53033L8.03033 12.5303C7.73744 12.8232 7.26256 12.8232 6.96967 12.5303L3.96967 9.53033C3.67678 9.23744 3.67678 8.76256 3.96967 8.46967C4.26256 8.17678 4.73744 8.17678 5.03033 8.46967L7.5 10.9393L12.9697 5.46967C13.2626 5.17678 13.7374 5.17678 14.0303 5.46967Z",
            fill: "#FCFCFD"
        })
    ]
}), '0 0 18 18');


/***/ }),

/***/ 6529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ CheckedBorderIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const CheckedBorderIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('CheckedBorderIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "0.5",
        y: "0.5",
        width: "17",
        height: "17",
        rx: "3.5",
        fill: "white"
    })
}), '0 0 18 18');


/***/ }),

/***/ 33185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ CloudLinkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const CloudLinkIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('CloudLink', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M30.798 17.565c.796.33 1.503.841 2.066 1.492a5.497 5.497 0 01.106 7.081l-3.144 3.86a5.57 5.57 0 01-7.769.77 5.503 5.503 0 01-.858-7.721l3.007-3.694.096.908c.067.638.287 1.223.62 1.723l-1.999 2.454a3.309 3.309 0 00-.724 2.432 3.303 3.303 0 001.216 2.23 3.337 3.337 0 002.445.72 3.343 3.343 0 002.24-1.21l3.145-3.864a3.306 3.306 0 00-1.947-5.337l1.502-1.844h-.002zm-1.671 6.962a5.548 5.548 0 01-2.066-1.492 5.511 5.511 0 01-1.214-4.793 5.511 5.511 0 011.108-2.288l3.144-3.86a5.542 5.542 0 013.741-2.06 5.576 5.576 0 014.103 1.197 5.53 5.53 0 012.03 3.744 5.499 5.499 0 01-1.248 4.07L35.72 22.74l-.095-.907a3.838 3.838 0 00-.62-1.725l1.998-2.452a3.303 3.303 0 00-.492-4.662 3.343 3.343 0 00-4.686.49l-3.144 3.862a3.307 3.307 0 00-.543 3.217c.196.537.528 1.015.964 1.387.437.372.962.625 1.526.735l-1.502 1.843h.002z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M32.25 27.5A9.409 9.409 0 0023 20c-3.625 0-6.75 2-8.25 5.004C10.875 25.5 8 28.622 8 32.503 8 36.625 11.375 40 15.5 40h16.25A6.19 6.19 0 0038 33.868v-.12c0-3.25-2.625-5.998-5.75-6.251",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                id: "filter0_b",
                x: "5",
                y: "17",
                width: "36",
                height: "26",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                        in: "BackgroundImage",
                        stdDeviation: "1.5"
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
        })
    ]
}), '0 0 48 48');


/***/ }),

/***/ 61210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ DownloadIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const DownloadIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('DownloadIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M14 10v2.667A1.334 1.334 0 0112.667 14H3.333A1.334 1.334 0 012 12.667V10M4.667 6.667L8 10l3.333-3.333M8 10V2",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');


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

/***/ 53924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ UploadIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const UploadIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('UploadIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5",
            stroke: "#FFB915",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1676 6.66797L10.0009 2.5013L5.83424 6.66797",
            stroke: "#FFB915",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10.0014 2.5L10.0014 12.5",
            stroke: "#FFB915",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 20 20');


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

/***/ 34790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useGasPrice)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64452);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46140);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31174);



function useGasPrice() {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)({
        chainId
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return web3.eth.getGasPrice();
    }, [
        web3,
        chainId
    ]);
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


/***/ })

}]);