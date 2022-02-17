(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7714],{

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

/***/ 25829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50266);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52311);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43463);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95273);




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
    const { tabs , state , index: index1 , height =200 , hasOnlyOneChild =false  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [value, setValue] = state !== null && state !== void 0 ? state : [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    variant: "fullWidth",
                    indicatorColor: "primary",
                    textColor: "primary",
                    onChange: (_, newValue)=>{
                        return setValue === null || setValue === void 0 ? void 0 : setValue(newValue);
                    },
                    children: tabs.map((tab, i)=>{
                        var ref;
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: tab.disabled,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tab, [
                                index1,
                                value
                            ].includes(i) ? classes.focusTab : '', tab.disabled ? classes.disabledTab : ''),
                            disableFocusRipple: tab.disableFocusRipple,
                            disableRipple: tab.disableRipple,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${(ref = tab.id) === null || ref === void 0 ? void 0 : ref.toLowerCase()}_tab`
                        }, i));
                    })
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
    }));
};


/***/ }),

/***/ 5913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ NetworkTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _AbstractTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25829);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9094);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87470);





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
                display: 'grid',
                gridTemplateColumns: Array(props.chainLength).fill(100 / props.chainLength + '%').join(' '),
                backgroundColor: theme.palette.background.paper
            },
            '& .Mui-selected': {
                color: '#ffffff',
                backgroundColor: `${theme.palette.primary.main}!important`
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
    var ref;
    const tabProps = {
        tabs: chains.map((chainId)=>{
            var ref1;
            return createTabItem((ref = (ref1 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId)) === null || ref1 === void 0 ? void 0 : ref1.chain) !== null && ref !== void 0 ? ref : 'Unknown', chainId);
        }),
        index: chains.indexOf(chainId1),
        classes,
        hasOnlyOneChild: true
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AbstractTab__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...tabProps
    }));
}


/***/ }),

/***/ 56347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ WalletStatusBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14910);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51313);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61077);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40201);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40675);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14767);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87470);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94531);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21949);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98697);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76108);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8267);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9228);















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
    var ref;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .useI18N */ .M1)();
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isDashboardPage */ .K2)();
    const { classes  } = useStyles({
        isDashboard
    });
    const chainId = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useChainId */ .xx)();
    const account = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useAccount */ .mA)();
    const wallet = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .Os)();
    const providerType = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useProviderType */ ._o)();
    const providerDescriptor = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useProviderDescriptor */ .fY)();
    const networkDescriptor = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkDescriptor */ .Vw)();
    var ref1;
    const { Utils  } = (ref1 = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3State */ .dM)()) !== null && ref1 !== void 0 ? ref1 : {};
    const { value: domain  } = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_5__/* .useReverseAddress */ .$q)(account);
    // #region copy addr to clipboard
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const onCopy = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useSnackbarCallback */ .iD)(async (ev)=>{
        ev.stopPropagation();
        copyToClipboard(account);
    }, [], undefined, undefined, undefined, t('copy_success_of_wallet_addr'));
    // #endregion
    // #region change provider
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // #endregion
    // #region walletconnect
    const { setDialog: setWalletConnectDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletMessages.events.walletConnectQRCodeDialogUpdated */ .R.events.walletConnectQRCodeDialogUpdated);
    // #endregion
    const onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        switch(providerType){
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.WalletConnect */ .lP.WalletConnect:
                setWalletConnectDialog({
                    open: true,
                    uri: await _extension_service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Ethereum.createConnectionURI */ .ZP.Ethereum.createConnectionURI()
                });
                break;
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.Fortmatic */ .lP.Fortmatic:
                await _extension_service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Ethereum.disconnectFortmatic */ .ZP.Ethereum.disconnectFortmatic(chainId);
                break;
        }
    }, [
        chainId,
        providerType,
        setWalletConnectDialog
    ]);
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        openSelectProviderDialog();
    }, [
        openSelectProviderDialog
    ]);
    var ref2, ref3;
    return account ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.currentAccount, props.isDashboard ? classes.dashboardBackground : ''),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                size: 48,
                badgeSize: 16,
                networkIcon: providerDescriptor === null || providerDescriptor === void 0 ? void 0 : providerDescriptor.icon,
                providerIcon: networkDescriptor === null || networkDescriptor === void 0 ? void 0 : networkDescriptor.icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.accountInfo,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.infoRow,
                        style: {
                            marginBottom: 6
                        },
                        children: providerType !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.MaskWallet */ .lP.MaskWallet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            className: classes.accountName,
                            children: domain && (Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName) ? Utils.formatDomainName(domain) : providerDescriptor === null || providerDescriptor === void 0 ? void 0 : providerDescriptor.name
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    className: classes.accountName,
                                    children: (ref2 = wallet === null || wallet === void 0 ? void 0 : wallet.name) !== null && ref2 !== void 0 ? ref2 : providerDescriptor === null || providerDescriptor === void 0 ? void 0 : providerDescriptor.name
                                }),
                                domain && (Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    className: classes.domain,
                                    children: Utils.formatDomainName(domain)
                                }) : null
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.infoRow,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.address,
                                variant: "body2",
                                title: account,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .FormattedAddress */ .Kv, {
                                    address: account,
                                    size: 4,
                                    formatter: Utils === null || Utils === void 0 ? void 0 : Utils.formatAddress
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                className: classes.link,
                                underline: "none",
                                component: "button",
                                title: t('wallet_status_button_copy_address'),
                                onClick: onCopy,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: classes.linkIcon,
                                    size: 14
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                className: classes.link,
                                href: (ref3 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.resolveAddressLink) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId, account)) !== null && ref3 !== void 0 ? ref3 : '',
                                target: "_blank",
                                title: t('plugin_wallet_view_on_explorer'),
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
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
                    providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.WalletConnect */ .lP.WalletConnect || providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.Fortmatic */ .lP.Fortmatic ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_10__/* .ActionButtonPromise */ .Zc, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.actionButton),
                        variant: "contained",
                        size: "small",
                        onClick: onChange,
                        children: t('wallet_status_button_change')
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: classes.connectButtonWrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.actionButton),
            color: "primary",
            variant: "contained",
            size: "small",
            onClick: onChange,
            children: t('plugin_wallet_on_connect')
        })
    });
}


/***/ }),

/***/ 35615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ TraderDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94531);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13601);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55535);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32364);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21949);
/* harmony import */ var _trader_useAllProviderTradeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28727);
/* harmony import */ var _trader_useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17508);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47545);
/* harmony import */ var _Trader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63481);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76108);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14767);
/* harmony import */ var _components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56347);
/* harmony import */ var _components_shared_NetworkTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5913);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70520);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87470);

















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_10__/* .makeStyles */ .ZL)()((theme)=>({
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        abstractTabWrapper: {
            width: '100%',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2)
        },
        tab: {
            height: 36,
            minHeight: 36
        },
        tabPaper: {
            backgroundColor: 'inherit'
        },
        tabs: {
            width: 535,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        content: {
            paddingTop: 0,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tradeRoot: {
            width: 535,
            margin: 'auto'
        }
    })
);
function TraderDialog({ open , onClose  }) {
    var ref, ref1;
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .isDashboardPage */ .K2)();
    const pluginID = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .usePluginIDContext */ .Zn)();
    const traderDefinition = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .useActivatedPlugin */ .Rc)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.Trader */ .je.Trader, 'any');
    var ref2;
    const chainIdList = (ref2 = (ref = traderDefinition === null || traderDefinition === void 0 ? void 0 : traderDefinition.enableRequirement.web3) === null || ref === void 0 ? void 0 : (ref1 = ref[pluginID]) === null || ref1 === void 0 ? void 0 : ref1.supportedChainIds) !== null && ref2 !== void 0 ? ref2 : [];
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const currentChainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .useChainId */ .xx)();
    const chainIdValid = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .useChainIdValid */ .as)();
    const [traderProps, setTraderProps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [chainId, setChainId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentChainId);
    const { open: remoteOpen , closeDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_7__/* .PluginTraderMessages.swapDialogUpdated */ .A.swapDialogUpdated, (ev)=>{
        if (ev === null || ev === void 0 ? void 0 : ev.traderProps) setTraderProps(ev.traderProps);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!chainIdValid) closeDialog();
    }, [
        chainIdValid,
        closeDialog
    ]);
    (0,react_use__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(()=>{
        if (currentChainId) {
            setChainId(currentChainId);
        }
    }, [
        currentChainId
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_trader_useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_6__/* .TargetChainIdContext.Provider */ .Z.Provider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_trader_useAllProviderTradeContext__WEBPACK_IMPORTED_MODULE_5__/* .AllProviderTradeContext.Provider */ .TX.Provider, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__/* .InjectedDialog */ .F, {
                open: open || remoteOpen,
                onClose: ()=>{
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                    setTraderProps(undefined);
                    closeDialog();
                },
                title: t('plugin_trader_swap'),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: classes.content,
                    children: [
                        !isDashboard ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.walletStatusBox,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_11__/* .WalletStatusBox */ .C, {})
                        }) : null,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.abstractTabWrapper,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_NetworkTab__WEBPACK_IMPORTED_MODULE_12__/* .NetworkTab */ .L, {
                                chainId: chainId,
                                setChainId: setChainId,
                                classes: classes,
                                chains: chainIdList
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Trader__WEBPACK_IMPORTED_MODULE_8__/* .Trader */ .A, {
                            ...traderProps,
                            chainId: chainId,
                            classes: {
                                root: classes.tradeRoot
                            }
                        })
                    ]
                })
            })
        })
    }));
}


/***/ }),

/***/ 18254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName)
/* harmony export */ });
/* unused harmony exports resolveCurrencyName, resolveTradeProviderLink, resolveTradePairLink, resolveUniswapWarningLevel, resolveUniswapWarningLevelColor, resolveZrxTradePoolName */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46347);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85123);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14381);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22487);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11585);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_4__);






function resolveCurrencyName(currency) {
    return [
        currency.name,
        currency.symbol ? `"${currency.symbol}"` : '',
        currency.description ? `(${currency.description})` : '', 
    ].join(' ');
}
const resolveDataProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'CoinGecko',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'CoinMarketCap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'Uniswap Info'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveDataProviderLink = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO]: 'https://www.coingecko.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP]: 'https://coinmarketcap.com/',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO]: 'https://info.uniswap.org/'
}, (dataProvider)=>{
    throw new Error(`Unknown data provider: ${dataProvider}`);
});
const resolveTradeProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2]: 'Uniswap V2',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3]: 'Uniswap V3',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX]: '0x',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP]: 'SushiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP]: 'SashimiSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER]: 'Balancer',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP]: 'QuickSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP]: 'PancakeSwap',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO]: 'DODO',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BANCOR */ .z4.BANCOR]: 'Bancor',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.OPENOCEAN */ .z4.OPENOCEAN]: 'OpenOcean',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.TRADERJOE */ .z4.TRADERJOE]: 'TraderJoe',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANGOLIN */ .z4.PANGOLIN]: 'PangolinDex',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.TRISOLARIS */ .z4.TRISOLARIS]: 'Trisolaris',
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.WANNASWAP */ .z4.WANNASWAP]: 'WannaSwap'
}, (tradeProvider)=>{
    throw new Error(`Unknown provider type: ${tradeProvider}`);
});
function resolveTradeProviderLink(tradeProvider, networkType) {
    switch(tradeProvider){
        case TradeProvider.UNISWAP_V2:
            return 'https://uniswap.org/';
        case TradeProvider.UNISWAP_V3:
            return 'https://uniswap.org/';
        case TradeProvider.ZRX:
            switch(networkType){
                case NetworkType.Ethereum:
                    return 'https://api.0x.org/';
                case NetworkType.Binance:
                    return 'https://bsc.api.0x.org/';
                case NetworkType.Polygon:
                    return 'https://polygon.api.0x.org/';
                case NetworkType.Arbitrum:
                    return 'https://aribitrum.api.0x.org/';
                case NetworkType.xDai:
                    return 'https://xdai.api.0x.org/';
                case NetworkType.Celo:
                    return 'https://celo.api.0x.org/';
                case NetworkType.Fantom:
                    return 'https://fantom.api.0x.org/';
                case NetworkType.Avalanche:
                    return 'https://avalanche.api.0x.org/';
                case NetworkType.Aurora:
                    return 'https://aurora.api.0x.org/';
                case NetworkType.Boba:
                case NetworkType.Fuse:
                case NetworkType.Metis:
                case NetworkType.Avalanche:
                case NetworkType.Optimistic:
                    console.error('To be implement network: ', networkType);
                    return '';
                default:
                    safeUnreachable(networkType);
                    return '';
            }
        case TradeProvider.SUSHISWAP:
            return 'https://sushiswapclassic.org/';
        case TradeProvider.SASHIMISWAP:
            return 'https://sashimi.cool/';
        case TradeProvider.BALANCER:
            return 'https://balancer.exchange/';
        case TradeProvider.QUICKSWAP:
            return 'https://quickswap.exchange/';
        case TradeProvider.PANCAKESWAP:
            return 'https://exchange.pancakeswap.finance/#/swap';
        case TradeProvider.DODO:
            return 'https://app.dodoex.io';
        case TradeProvider.BANCOR:
            return 'https://app.bancor.network/eth/swap';
        case TradeProvider.OPENOCEAN:
            return 'https://openocean.finance/classic';
        case TradeProvider.TRADERJOE:
            return 'https://traderjoexyz.com/#/trade';
        case TradeProvider.PANGOLIN:
            return 'https://app.pangolin.exchange/#/swap';
        case TradeProvider.TRISOLARIS:
            return 'https://www.trisolaris.io/#/swap';
        case TradeProvider.WANNASWAP:
            return 'https://wannaswap.finance/exchange/swap';
        default:
            unreachable(tradeProvider);
    }
}
function resolveTradePairLink(tradeProvider, address, networkType) {
    switch(tradeProvider){
        case TradeProvider.UNISWAP_V2:
            return `https://v2.info.uniswap.org/pair/${address}`;
        case TradeProvider.UNISWAP_V3:
            return `https://info.uniswap.org/pair/${address}`;
        case TradeProvider.ZRX:
            return '';
        case TradeProvider.DODO:
            {
                if (!networkNames[networkType]) {
                    console.error('Unsupported network: ', networkType);
                    return '';
                }
                return urlcat('https://app.dodoex.io/exchange/:address', {
                    address,
                    network: networkNames[networkType],
                    forced: true
                });
            }
        case TradeProvider.SUSHISWAP:
            switch(networkType){
                case NetworkType.Ethereum:
                    return `https://analytics.sushi.com/pairs/${address}`;
                case NetworkType.Binance:
                    return `https://analytics-bsc.sushi.com/pairs/${address}`;
                case NetworkType.Polygon:
                    return `https://analytics-polygon.sushi.com/pairs/${address}`;
                case NetworkType.Arbitrum:
                    return `https://analytics-aribtrum.sushi.com/pairs/${address}`;
                case NetworkType.xDai:
                    return `https://analytics-xdai.sushi.com/pairs/${address}`;
                case NetworkType.Celo:
                    return `https://analytics-celo.sushi.com/pairs/${address}`;
                case NetworkType.Fantom:
                    return `https://analytics-ftm.sushi.com/pairs/${address}`;
                case NetworkType.Avalanche:
                    return `https://analytics-avx.sushi.com/pairs/${address}`;
                case NetworkType.Aurora:
                    return `https://analytics-aurora.sushi.com/pairs/${address}`;
                case NetworkType.Boba:
                case NetworkType.Fuse:
                case NetworkType.Metis:
                case NetworkType.Optimistic:
                    console.error('To be implement network: ', networkType);
                    return '';
                default:
                    safeUnreachable(networkType);
                    return '';
            }
        case TradeProvider.SASHIMISWAP:
            return `https://info.sashimi.cool/pair/${address}`;
        case TradeProvider.BALANCER:
            return `https://pools.balancer.exchange/#/pool/${address}/`;
        case TradeProvider.QUICKSWAP:
            return `https://info.quickswap.exchange/pair/${address}`;
        case TradeProvider.PANCAKESWAP:
            return `https://pancakeswap.info/pool/${address}`;
        case TradeProvider.BANCOR:
            // TODO - Bancor analytics should be available with V3
            return '';
        case TradeProvider.OPENOCEAN:
            // TODO - OpenOcean
            return '';
        case TradeProvider.TRADERJOE:
            return `https://analytics.traderjoexyz.com/pairs/${address}`;
        case TradeProvider.PANGOLIN:
            return `https://info.pangolin.exchange/pair/${address}`;
        case TradeProvider.TRISOLARIS:
            // TODO - add Trisolaris Analytics
            return '';
        case TradeProvider.WANNASWAP:
            // TODO - add WannaSwap analytics
            return '';
        default:
            unreachable(tradeProvider);
    }
}
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}y`;
    if (days >= 30) return `${Math.floor(days / 30)}m`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    return `${days}d`;
}
function resolveUniswapWarningLevel(priceImpact) {
    const priceImpact_ = priceImpact.multipliedBy(BIPS_BASE);
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_NON_EXPERT_BLOCKED)) return WarningLevel.BLOCKED;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN)) return WarningLevel.CONFIRMATION_REQUIRED;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_HIGH)) return WarningLevel.HIGH;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_MEDIUM)) return WarningLevel.MEDIUM;
    if (priceImpact_.isGreaterThan(PRICE_IMPACT_LOW)) return WarningLevel.LOW;
    return WarningLevel.LOW;
}
const resolveUniswapWarningLevelColor = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.LOW */ .Os.LOW]: 'inherit',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.MEDIUM */ .Os.MEDIUM]: '#f3841e',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.HIGH */ .Os.HIGH]: '#f3841e',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.CONFIRMATION_REQUIRED */ .Os.CONFIRMATION_REQUIRED]: '#ff6871',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.BLOCKED */ .Os.BLOCKED]: '#ff6871'
}, '#27ae60');
const resolveZrxTradePoolName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ZRX */ .Zy.ZRX]: '0x',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ACryptoS */ .Zy.ACryptoS]: 'ACryptoS',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ApeSwap */ .Zy.ApeSwap]: 'ApeSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BakerySwap */ .Zy.BakerySwap]: 'BakerySwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Balancer */ .Zy.Balancer]: 'Balancer',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BalancerV2 */ .Zy.BalancerV2]: 'Balancer V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Bancor */ .Zy.Bancor]: 'Bancor',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Belt */ .Zy.Belt]: 'Belt',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CafeSwap */ .Zy.CafeSwap]: 'CafeSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CheeseSwap */ .Zy.CheeseSwap]: 'CheeseSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ComethSwap */ .Zy.ComethSwap]: 'ComethSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Component */ .Zy.Component]: 'Component',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Cream */ .Zy.Cream]: 'CREAM',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CryptoCom */ .Zy.CryptoCom]: 'CryptoCom',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Curve */ .Zy.Curve]: 'Curve',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CurveV2 */ .Zy.CurveV2]: 'Curve V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dfyn */ .Zy.Dfyn]: 'Dfyn',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dodo */ .Zy.Dodo]: 'DODO',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.DodoV2 */ .Zy.DodoV2]: 'DODO V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Ellipsis */ .Zy.Ellipsis]: 'Ellipsis',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Eth2Dai */ .Zy.Eth2Dai]: 'Eth2Dai',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.FirebirdOneSwap */ .Zy.FirebirdOneSwap]: 'FirebirdOneSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.IronSwap */ .Zy.IronSwap]: 'IronSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JetSwap */ .Zy.JetSwap]: 'JetSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JulSwap */ .Zy.JulSwap]: 'JulSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Kyber */ .Zy.Kyber]: 'Kyber',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.KyberDMM */ .Zy.KyberDMM]: 'KyberDMM',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Lido */ .Zy.Lido]: 'Lido',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Linkswap */ .Zy.Linkswap]: 'Linkswap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.LiquidityProvider */ .Zy.LiquidityProvider]: 'LiquidityProvider',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MStable */ .Zy.MStable]: 'mStable',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MakerPsm */ .Zy.MakerPsm]: 'MakerPsm',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mesh */ .Zy.Mesh]: 'Mesh',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mooniswap */ .Zy.Mooniswap]: 'Mooniswap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiBridge */ .Zy.MultiBridge]: 'MultiBridge',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiHop */ .Zy.MultiHop]: 'MultiHop',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Native */ .Zy.Native]: 'Native',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Nerve */ .Zy.Nerve]: 'Nerve',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Oasis */ .Zy.Oasis]: 'Oasis',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwap */ .Zy.PancakeSwap]: 'PancakeSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwapV2 */ .Zy.PancakeSwapV2]: 'PancakeSwap V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.QuickSwap */ .Zy.QuickSwap]: 'QuickSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Saddle */ .Zy.Saddle]: 'Saddle',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Shell */ .Zy.Shell]: 'Shell',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Smoothy */ .Zy.Smoothy]: 'Smoothy',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SnowSwap */ .Zy.SnowSwap]: 'SnowSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SushiSwap */ .Zy.SushiSwap]: 'SushiSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Swerve */ .Zy.Swerve]: 'Swerve',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Uniswap */ .Zy.Uniswap]: 'Uniswap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV2 */ .Zy.UniswapV2]: 'Uniswap V2',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV3 */ .Zy.UniswapV3]: 'Uniswap V3',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.WaultSwap */ .Zy.WaultSwap]: 'WaultSwap',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.xSigma */ .Zy.xSigma]: 'xSigma',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.TraderJoe */ .Zy.TraderJoe]: 'TraderJoe',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PangolinDex */ .Zy.PangolinDex]: 'PangolinDex',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Trisolaris */ .Zy.Trisolaris]: 'Trisolaris',
    [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.WannaSwap */ .Zy.WannaSwap]: 'WannaSwap'
}, 'Unknown');


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