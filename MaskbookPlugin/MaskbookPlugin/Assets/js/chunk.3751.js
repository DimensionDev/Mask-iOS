(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2862],{

/***/ 97379:
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

/***/ 99983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ef": () => (/* binding */ DashboardDialogCore),
/* harmony export */   "dd": () => (/* binding */ useModal),
/* harmony export */   "ge": () => (/* binding */ DashboardDialogWrapper),
/* harmony export */   "iD": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_11__.useSnackbarCallback)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82215);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22593);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69476);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49283);
}
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53688);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71629);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11042);
}
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37186);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80050);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            userSelect: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        close: {
            color: theme.palette.text.primary,
            position: 'absolute',
            right: 10,
            top: 10
        }
    })
);
function DashboardDialogCore(props) {
    const { fullScreen , children , CloseIconProps , CloseButtonProps , ...dialogProps } = props;
    const { classes  } = useStyles();
    const xsMatched = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useMatchXS */ .IN)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        className: classes.root,
        fullScreen: fullScreen !== null && fullScreen !== void 0 ? fullScreen : xsMatched,
        hideBackdrop: true,
        ...dialogProps,
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                className: classes.close,
                onClick: (e)=>{
                    var ref;
                    return (ref = dialogProps.onClose) === null || ref === void 0 ? void 0 : ref.call(dialogProps, e, 'backdropClick');
                },
                size: "small",
                ...CloseButtonProps,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    ...CloseIconProps
                })
            })
        ]
    }));
}
var DialogState;
(function(DialogState1) {
    DialogState1[DialogState1["Opened"] = 1] = "Opened";
    DialogState1[DialogState1["Closing"] = 2] = "Closing";
    DialogState1[DialogState1["Destroyed"] = 3] = "Destroyed";
})(DialogState || (DialogState = {
}));
function reducer(state, action) {
    if (action.type === 'open') return {
        state: DialogState.Opened,
        props: action.props
    };
    if (action.type === 'close') return {
        state: DialogState.Closing,
        props: state.props
    };
    return {
        state: DialogState.Destroyed
    };
}
function useModal(Modal, ComponentProps) {
    const [status, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, {
        state: DialogState.Destroyed
    });
    const showModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'open'
        })
    , []);
    const showStatefulModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((props)=>dispatch({
            type: 'open',
            props
        })
    , []);
    // TODO: prevent onClose on some cases (e.g, click away while loading)
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'close'
        })
    , []);
    const onExited = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'destroy'
        })
    , []);
    const { state , props  } = status;
    const compositeProps = ComponentProps || props ? {
        ComponentProps: {
            ...ComponentProps,
            ...props
        }
    } : {
    };
    const modalProps = {
        TransitionProps: {
            onExited
        },
        ...compositeProps,
        open: state === DialogState.Opened,
        onClose
    };
    const theme = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useClassicMaskTheme */ .Uk)();
    const renderedComponent = state === DialogState.Destroyed ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        theme: theme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Modal, {
            ...modalProps
        })
    });
    return [
        renderedComponent,
        showModal,
        showStatefulModal
    ];
}
const useDashboardDialogWrapperStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme, props)=>({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: props.size === 'small' ? 280 : 440,
            padding: props.size === 'small' ? '40px 24px !important' : '40px 36px !important',
            margin: '0 auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        header: {
            textAlign: 'center',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        content: {
            flex: 1,
            textAlign: 'center'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: theme.spacing(3)
        },
        primary: {
            margin: theme.spacing(2, 0, 1),
            fontWeight: 500,
            fontSize: 20,
            lineHeight: '30px'
        },
        secondary: {
            lineHeight: 1.75,
            fontSize: 14,
            textAlign: 'center',
            wordBreak: 'break-word',
            marginBottom: 18
        },
        confineSecondary: {
            paddingLeft: props.size === 'small' ? 24 : 46,
            paddingRight: props.size === 'small' ? 24 : 46
        }
    })
);
const dialogTheme = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .extendsTheme */ .Ql)((theme)=>({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    input: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5
                    },
                    multiline: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5
                    }
                }
            },
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        marginTop: theme.spacing(2)
                    },
                    inputRoot: {
                        paddingTop: '5px !important',
                        paddingBottom: '5px !important'
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        marginTop: theme.spacing(2),
                        marginBottom: 0,
                        '&:first-child': {
                            marginTop: 0
                        }
                    }
                },
                defaultProps: {
                    fullWidth: true,
                    variant: 'outlined',
                    margin: 'normal'
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&[hidden]': {
                            visibility: 'hidden'
                        }
                    }
                },
                defaultProps: {
                    size: 'medium'
                }
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        minHeight: 38
                    },
                    indicator: {
                        height: 1
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        minHeight: 38,
                        borderBottom: `solid 1px ${theme.palette.divider}`
                    }
                }
            }
        }
    })
);
function DashboardDialogWrapper(props) {
    const { size , icon , iconColor , primary , secondary , constraintSecondary =true , content , footer  } = props;
    const { classes  } = useDashboardDialogWrapperStyles(props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        theme: dialogTheme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: classes.header,
                    children: [
                        icon && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(icon, {
                            width: 64,
                            height: 64,
                            stroke: iconColor
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            className: classes.primary,
                            variant: "h5",
                            children: primary
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.secondary, size !== 'small' && constraintSecondary ? classes.confineSecondary : ''),
                            color: "textSecondary",
                            variant: "body2",
                            dangerouslySetInnerHTML: {
                                __html: secondary !== null && secondary !== void 0 ? secondary : ''
                            }
                        })
                    ]
                }),
                content ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                    className: classes.content,
                    children: content
                }) : null,
                footer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                    className: classes.footer,
                    children: footer
                }) : null
            ]
        })
    }));
}



/***/ }),

/***/ 99466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ./src/plugins/Trader/base.ts
var base = __webpack_require__(59342);
// EXTERNAL MODULE: ./src/plugins/Trader/base-deferred.ts + 1 modules
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3751.js
var base_deferred = __webpack_require__(38589);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/SettingsDialog.tsx + 1 modules
var SettingsDialog = __webpack_require__(56994);
=======
var base_deferred = __webpack_require__(25997);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/SettingsDialog.tsx + 1 modules
var SettingsDialog = __webpack_require__(88867);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.2862.js
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TraderDialog.tsx
var TraderDialog = __webpack_require__(66105);
// EXTERNAL MODULE: ./src/plugins/Trader/trending/useAvailableDataProviders.ts
var useAvailableDataProviders = __webpack_require__(77489);
// EXTERNAL MODULE: ./src/plugins/Trader/trending/useAvailableTraderProviders.ts
var useAvailableTraderProviders = __webpack_require__(89819);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useSearchedKeyword.ts


function useSearchedKeyword() {
    const [keyword, setKeyword] = (0,react.useState)('');
    const onLocationChange = (0,react.useCallback)(()=>{
        var ref;
        if (social_network.activatedSocialNetworkUI === null || social_network.activatedSocialNetworkUI === void 0 ? void 0 : (ref = social_network.activatedSocialNetworkUI.collecting) === null || ref === void 0 ? void 0 : ref.getSearchedKeyword) {
            var ref1;
            setKeyword(social_network.activatedSocialNetworkUI === null || social_network.activatedSocialNetworkUI === void 0 ? void 0 : (ref1 = social_network.activatedSocialNetworkUI.collecting) === null || ref1 === void 0 ? void 0 : ref1.getSearchedKeyword());
        }
    }, []);
    (0,react.useEffect)(()=>{
        onLocationChange();
        window.addEventListener('locationchange', onLocationChange);
        return ()=>window.removeEventListener('locationchange', onLocationChange)
        ;
    }, [
        onLocationChange
    ]);
    return keyword;
}

// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3751.js
var types = __webpack_require__(26428);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(46440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(41362);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(72052);
=======
var types = __webpack_require__(66632);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(57652);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(20261);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.2862.js
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var public_api_src = __webpack_require__(95142);
// EXTERNAL MODULE: ./src/plugins/Trader/pipes.ts
var pipes = __webpack_require__(36039);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(62323);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var Trader_settings = __webpack_require__(67047);
;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useCurrentCurrency.ts





function useCurrentCurrency(dataProvider) {
    const [currency, setCurrency] = (0,react.useState)(null);
    const generalSettings = (0,shared_src.useValueRef)((0,Trader_settings/* getCurrentDataProviderGeneralSettings */.rn)(dataProvider));
    // TODO:
    // support multiple crcurrencies
    const { value: currencies = [] , loading , error ,  } = (0,useAsync/* default */.Z)(()=>messages/* PluginTraderRPC.getLimitedCurrenies */.V.getLimitedCurrenies(dataProvider)
    , [
        dataProvider
    ]);
    (0,react.useEffect)(()=>{
        if (!currencies.length) return;
        try {
            const parsed = JSON.parse(generalSettings || '{}');
            if (parsed.currency && currencies.some((x)=>x.id === parsed.currency.id
            )) setCurrency(parsed.currency);
            else setCurrency(currencies[0]);
        } catch  {
            setCurrency(null);
        }
    }, [
        dataProvider,
        generalSettings,
        currencies.map((x)=>x.id
        ).join()
    ]);
    return {
        value: loading ? null : currency,
        loading,
        error
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useTrending.ts




function useTrendingByKeyword(tagType, keyword, dataProvider) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const currencyAsyncResult = useCurrentCurrency(dataProvider);
    const trendingAsyncResult = (0,useAsync/* default */.Z)(async ()=>{
        if (!keyword) return null;
        if (!currencyAsyncResult.value) return null;
        return messages/* PluginTraderRPC.getCoinTrendingByKeyword */.V.getCoinTrendingByKeyword(keyword, tagType, currencyAsyncResult.value, dataProvider);
    }, [
        chainId,
        dataProvider,
        currencyAsyncResult.value,
        keyword
    ]);
    return {
        value: {
            currency: currencyAsyncResult.value,
            trending: trendingAsyncResult.value
        },
        loading: currencyAsyncResult.loading || trendingAsyncResult.loading,
        error: currencyAsyncResult.error || trendingAsyncResult.error
    };
}
function useTrendingById(id, dataProvider) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const currencyAsyncResult = useCurrentCurrency(dataProvider);
    const trendingAsyncResult = (0,useAsync/* default */.Z)(async ()=>{
        if (!id) return null;
        if (!currencyAsyncResult.value) return null;
        return messages/* PluginTraderRPC.getCoinTrendingById */.V.getCoinTrendingById(id, currencyAsyncResult.value, dataProvider);
    }, [
        chainId,
        dataProvider,
        currencyAsyncResult.value,
        id
    ]);
    return {
        value: {
            currency: currencyAsyncResult.value,
            trending: trendingAsyncResult.value
        },
        loading: currencyAsyncResult.loading || trendingAsyncResult.loading,
        error: currencyAsyncResult.error || trendingAsyncResult.error
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(32789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(18292);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(48237);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Table/Table.js + 1 modules
var Table = __webpack_require__(44695);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(8919);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(85473);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ./src/plugins/Wallet/formatter.ts
var formatter = __webpack_require__(57093);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TickersTable.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            maxHeight: 266,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        cell: {
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1),
            whiteSpace: 'nowrap'
        },
        logo: {
            width: 18,
            height: 18,
            verticalAlign: 'bottom',
            marginRight: theme.spacing(0.5)
        },
        placeholder: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            borderStyle: 'none'
        }
    })
);
function TickersTable(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const rows = [
        t('plugin_trader_table_exchange'),
        t('plugin_trader_table_pair'),
        props.dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? t('plugin_trader_table_price') : null,
        t('plugin_trader_table_volume'),
        t('plugin_trader_table_updated'), 
    ];
    const tickers = props.tickers.map((ticker, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                    className: classes.cell,
                    children: [
                        ticker.logo_url ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.logo,
                            src: ticker.logo_url
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: ticker.market_name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                    className: classes.cell,
                    children: (()=>{
                        const formated = (0,web3_shared_src/* formatEthereumAddress */.j8w)(ticker.base_name, 2);
                        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                            color: "primary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: ticker.trade_url,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    title: formated !== ticker.base_name ? ticker.base_name : '',
                                    children: formated
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "/"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: (0,web3_shared_src/* formatEthereumAddress */.j8w)(ticker.target_name, 2)
                                })
                            ]
                        }));
                    })()
                }),
                ticker.price ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                    className: classes.cell,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedCurrency, {
                        value: ticker.price,
                        sign: "$"
                    })
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                    className: classes.cell,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedCurrency, {
                        value: ticker.volume,
                        sign: "$"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                    className: classes.cell,
                    children: (0,formatter/* formatElapsed */.Q)(ticker.updated.getTime())
                })
            ]
        }, index)
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: rows.map((x)=>x ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: x
                            }, x) : null
                        )
                    })
                }),
                tickers.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: tickers
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            className: classes.cell,
                            colSpan: 5,
                            style: {
                                borderStyle: 'none'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.placeholder,
                                align: "center",
                                color: "textSecondary",
                                children: t('plugin_trader_no_data')
                            })
                        })
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/utils/theme.ts
var theme = __webpack_require__(44713);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ArrowDropUp.js
var ArrowDropUp = __webpack_require__(97431);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(80784);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/PriceChanged.tsx






const PriceChanged_useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        fontSize: 'inherit',
        position: 'relative'
    },
    icon: {
        top: 0,
        bottom: 0,
        margin: 'auto',
        position: 'absolute',
        verticalAlign: 'middle'
    },
    value: {
        marginLeft: 20
    }
});
function PriceChanged(props) {
    const { classes: color  } = (0,theme/* useColorStyles */.Nh)();
    const { classes  } = PriceChanged_useStyles();
    if (props.amount === 0) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        className: classnames_default()(classes.root, props.amount > 0 ? color.success : color.error),
        children: [
            props.amount > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropUp/* default */.Z, {
                className: classes.icon
            }) : null,
            props.amount < 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {
                className: classes.icon
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: classes.value,
                children: [
                    props.amount.toFixed(2),
                    "%"
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/PriceChangedTable.tsx




const PriceChangedTable_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        table: {
        },
        cell: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1.5),
            textAlign: 'center',
            whiteSpace: 'nowrap'
        }
    })
);
function PriceChangedTable({ market  }) {
    const { classes  } = PriceChangedTable_useStyles();
    const records = [
        {
            name: '1h',
            percentage: market.price_change_percentage_1h_in_currency
        },
        {
            name: '24h',
            percentage: market.price_change_percentage_24h_in_currency
        },
        {
            name: '7d',
            percentage: market.price_change_percentage_7d_in_currency
        },
        {
            name: '14d',
            percentage: market.price_change_percentage_14d_in_currency
        },
        {
            name: '30d',
            percentage: market.price_change_percentage_30d_in_currency
        },
        {
            name: '1y',
            percentage: market.price_change_percentage_1y_in_currency
        }, 
    ];
    const filteredRecords = records.filter((record)=>typeof record.percentage === 'number'
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            className: classes.table,
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: filteredRecords.map((x)=>x.percentage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: x.name
                            }, x.name) : null
                        )
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: filteredRecords.map((x)=>x.percentage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChanged, {
                                    amount: x.percentage
                                })
                            }, x.name) : null
                        )
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(37763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Refresh.js
var Refresh = __webpack_require__(74881);
// EXTERNAL MODULE: ./src/plugins/hooks/useDimension.ts
var useDimension = __webpack_require__(39462);
// EXTERNAL MODULE: ./src/plugins/hooks/useLineChart.ts
var useLineChart = __webpack_require__(84371);
;// CONCATENATED MODULE: ./src/plugins/hooks/usePriceLineChart.ts


function usePriceLineChart(svgRef, data, dimension, id, opts) {
    const { color ='steelblue' , sign ='$'  } = opts;
    (0,useLineChart/* useLineChart */.t)(svgRef, data, dimension, id, {
        color,
        tickFormat: `${sign},.2s`,
        formatTooltip: (value)=>(0,web3_shared_src/* formatCurrency */.xGv)(value, sign)
    });
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/PriceChart.tsx










const DEFAULT_DIMENSION = {
    top: 32,
    right: 16,
    bottom: 32,
    left: 16,
    width: 598,
    height: 200
};
const PriceChart_useStyles = (0,src/* makeStyles */.ZL)()((theme, { stats , coin  })=>{
    return {
        root: {
            position: 'relative',
            cursor: stats.length && (coin === null || coin === void 0 ? void 0 : coin.platform_url) ? 'pointer' : 'default'
        },
        svg: {
            display: 'block'
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute',
            fontSize: 15
        },
        placeholder: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            borderStyle: 'none'
        }
    };
});
function PriceChart(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(PriceChart_useStyles(props), props);
    const rootRef = (0,react.useRef)(null);
    const svgRef = (0,react.useRef)(null);
    //#region make chart responisve
    const { width  } = (0,useWindowSize/* default */.Z)();
    const [responsiveWidth, setResponsiveWidth] = (0,react.useState)(DEFAULT_DIMENSION.width);
    const [responsiveHeight, setResponsiveHeight] = (0,react.useState)(DEFAULT_DIMENSION.height);
    (0,react.useEffect)(()=>{
        if (!rootRef.current) return;
        setResponsiveWidth(rootRef.current.getBoundingClientRect().width || DEFAULT_DIMENSION.width);
        setResponsiveHeight(rootRef.current.getBoundingClientRect().height || DEFAULT_DIMENSION.height);
    }, [
        width /* redraw canvas if window width resize */ 
    ]);
    //#endregion
    const dimension = {
        ...DEFAULT_DIMENSION,
        width: responsiveWidth,
        height: responsiveHeight
    };
    (0,useDimension/* useDimension */.$)(svgRef, dimension);
    usePriceLineChart(svgRef, props.stats.map(([date, price])=>({
            date: new Date(date),
            value: price
        })
    ), dimension, 'x-trader-price-line-chart', {
        sign: props.currency.symbol
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        ref: rootRef,
        children: [
            props.loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                className: classes.progress,
                color: "primary",
                size: 15
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.Z, {
                className: classes.refresh,
                color: "primary",
                onClick: props.retry
            }),
            props.stats.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    props.children,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        className: classes.svg,
                        ref: svgRef,
                        width: dimension.width,
                        height: dimension.height,
                        viewBox: `0 0 ${dimension.width} ${dimension.height}`,
                        preserveAspectRatio: "xMidYMid meet",
                        onClick: ()=>{
                            var ref;
                            props.stats.length && ((ref = props.coin) === null || ref === void 0 ? void 0 : ref.platform_url) && window.open(props.coin.platform_url, '_blank', 'noopener noreferrer');
                        }
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.placeholder,
                align: "center",
                color: "textSecondary",
                children: t('plugin_trader_no_data')
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trending/PriceChartDaysControl.tsx
var PriceChartDaysControl = __webpack_require__(67893);
;// CONCATENATED MODULE: ./src/plugins/Trader/trending/usePriceStats.ts




function usePriceStats({ coinId , currency , days =PriceChartDaysControl/* Days.MAX */.h.MAX , dataProvider  }) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if ((0,lodash.isUndefined)(days) || (0,lodash.isUndefined)(coinId) || (0,lodash.isUndefined)(dataProvider) || (0,lodash.isUndefined)(currency)) return [];
        return messages/* PluginTraderRPC.getPriceStats */.V.getPriceStats(coinId, currency, days, dataProvider);
    }, [
        coinId,
        dataProvider,
        currency === null || currency === void 0 ? void 0 : currency.id,
        days
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/trending/useCurrentDataProvider.ts
var useCurrentDataProvider = __webpack_require__(64106);
// EXTERNAL MODULE: ./src/plugins/Trader/trending/useCurrentTradeProvider.ts
var useCurrentTradeProvider = __webpack_require__(29575);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/Trader.tsx + 56 modules
var Trader = __webpack_require__(65690);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TradeView.tsx




const TradeView_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            maxWidth: 450,
            margin: '0 auto',
            padding: theme.spacing(0, 3),
            position: 'relative',
            boxSizing: 'border-box'
        },
        actions: {
        },
        settings: {
            zIndex: 1,
            top: 0,
            right: theme.spacing(3),
            bottom: 0,
            left: theme.spacing(3),
            position: 'absolute'
        }
    };
});
function TradeView(props) {
    const { TraderProps  } = props;
    const classes = (0,shared_src.useStylesExtends)(TradeView_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trader/* Trader */.A, {
            ...TraderProps
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinMarketTable.tsx





const CoinMarketTable_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        container: {
            borderRadius: 0,
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        head: {
            padding: 0,
            border: 'none'
        },
        cell: {
            whiteSpace: 'nowrap',
            border: 'none'
        }
    })
);
function CoinMarketTable(props) {
    var ref, ref1, ref2, ref3;
    const { trending , dataProvider  } = props;
    const { classes  } = CoinMarketTable_useStyles();
    var ref4, ref5, ref6, ref7;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        component: Paper/* default */.Z,
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.head,
                                align: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textSecondary",
                                    variant: "body2",
                                    children: "Market Cap"
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.head,
                                align: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textSecondary",
                                    variant: "body2",
                                    children: "Volume (24h)"
                                })
                            }),
                            dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.head,
                                        align: "center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: "Circulating Supply"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.head,
                                        align: "center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: "Total Supply"
                                        })
                                    })
                                ]
                            }) : null
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                align: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedCurrency, {
                                    symbol: "USD",
                                    value: (ref4 = (ref = trending.market) === null || ref === void 0 ? void 0 : ref.market_cap) !== null && ref4 !== void 0 ? ref4 : 0
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                align: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedCurrency, {
                                    symbol: "USD",
                                    value: (ref5 = (ref1 = trending.market) === null || ref1 === void 0 ? void 0 : ref1.total_volume) !== null && ref5 !== void 0 ? ref5 : 0
                                })
                            }),
                            dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.cell,
                                        align: "center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedCurrency, {
                                            value: (ref6 = (ref2 = trending.market) === null || ref2 === void 0 ? void 0 : ref2.circulating_supply) !== null && ref6 !== void 0 ? ref6 : 0,
                                            symbol: trending.coin.symbol
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.cell,
                                        align: "center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedCurrency, {
                                            value: (ref7 = (ref3 = trending.market) === null || ref3 === void 0 ? void 0 : ref3.total_supply) !== null && ref7 !== void 0 ? ref7 : 0,
                                            symbol: trending.coin.symbol
                                        })
                                    })
                                ]
                            }) : null
                        ]
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(30699);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/FileCopy.js
var FileCopy = __webpack_require__(19018);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx
var Base = __webpack_require__(99983);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/Linking.tsx


function Linking(props) {
    const { href , LinkProps , TypographyProps , children  } = props;
    try {
        const { hostname  } = new URL(href !== null && href !== void 0 ? href : '');
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            color: "primary",
            target: "_blank",
            rel: "noopener noreferrer",
            href: props.href,
            ...LinkProps,
            children: children ? children : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                component: "span",
                ...TypographyProps,
                children: hostname.replace(/^www./i, '')
            })
        }));
    } catch  {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: LinkProps === null || LinkProps === void 0 ? void 0 : LinkProps.className,
            title: LinkProps === null || LinkProps === void 0 ? void 0 : LinkProps.title,
            children: children ? children : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                component: "span",
                ...TypographyProps,
                children: href
            })
        }));
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(13622);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinMetadataTags.tsx






const CoinMetadataTags_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        tag: {
            marginRight: theme.spacing(1)
        },
        chip: {
            margin: theme.spacing(1)
        }
    })
);
function CoinMetadataTags(props) {
    const { classes  } = CoinMetadataTags_useStyles();
    const { tags  } = props;
    const [open, setOpen] = (0,react.useState)(false);
    const onClick = (0,react.useCallback)(()=>{
        setOpen((open1)=>!open1
        );
    }, []);
    const onClose = (0,react.useCallback)(()=>{
        setOpen(false);
    }, []);
    if (!tags) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            tags.slice(0, 4).map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                    href: x,
                    LinkProps: {
                        className: classes.tag
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        style: {
                            marginTop: 2,
                            marginBottom: 2
                        },
                        label: x.replace(/-/g, ' '),
                        size: "small"
                    })
                }, i)
            ),
            tags.length > 4 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                        href: "View all",
                        LinkProps: {
                            className: classes.tag
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            style: {
                                marginTop: 2,
                                marginBottom: 2
                            },
                            label: "View all",
                            color: "primary",
                            onClick: onClick,
                            size: "small"
                        })
                    }, tags.length + 1),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsDialog, {
                        open: open,
                        onClose: onClose,
                        tags: tags
                    })
                ]
            }) : null
        ]
    }));
}
function TagsDialog(props) {
    const { open , tags , onClose  } = props;
    const { classes  } = CoinMetadataTags_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: tags ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            title: "Tags",
            onClose: onClose,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: tags === null || tags === void 0 ? void 0 : tags.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                        href: x,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            label: x.replace(/-/g, ' '),
                            className: classes.chip
                        })
                    }, i)
                )
            })
        }) : null
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinMetadataTable.tsx









const CoinMetadataTable_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        container: {
            borderRadius: 0,
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        table: {
        },
        cell: {
            whiteSpace: 'nowrap',
            border: 'none'
        },
        label: {
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap'
        },
        link: {
            display: 'inline-block',
            whiteSpace: 'nowrap',
            paddingRight: theme.spacing(1),
            '&:last-child': {
                paddingRight: 0
            }
        }
    })
);
function CoinMetadataTable(props) {
    var ref;
    const { dataProvider , trending  } = props;
    const { classes  } = CoinMetadataTable_useStyles();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const onCopyAddress = (0,Base/* useSnackbarCallback */.iD)(async ()=>{
        if (!trending.coin.contract_address) return;
        copyToClipboard(trending.coin.contract_address);
    }, [
        trending.coin.contract_address
    ]);
    const metadataLinks = [
        [
            'Website',
            trending.coin.home_urls
        ],
        [
            'Announcement',
            trending.coin.announcement_urls
        ],
        [
            'Message Board',
            trending.coin.message_board_urls
        ],
        [
            'Explorer',
            trending.coin.blockchain_urls
        ],
        [
            'Tech Docs',
            trending.coin.tech_docs_urls
        ],
        [
            'Source Code',
            trending.coin.source_code_urls
        ],
        [
            'Community',
            trending.coin.community_urls
        ], 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        component: Paper/* default */.Z,
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
            className: classes.table,
            size: "small",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
                children: [
                    trending.coin.market_cap_rank ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.label,
                                    variant: "body2",
                                    children: "Market Cap"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: `Rank #${trending.coin.market_cap_rank}`
                            })
                        ]
                    }) : null,
                    metadataLinks.map(([label, links], i)=>{
                        if (!(links === null || links === void 0 ? void 0 : links.length)) return null;
                        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.label,
                                        variant: "body2",
                                        children: label
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: links.map((x, i1)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                                            href: x,
                                            LinkProps: {
                                                className: classes.link
                                            }
                                        }, i1)
                                    )
                                })
                            ]
                        }, i));
                    }),
                    trending.coin.contract_address ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.label,
                                    variant: "body2",
                                    children: "Contract"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        component: "span",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedAddress, {
                                            address: trending.coin.contract_address,
                                            size: 4
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                        color: "primary",
                                        size: "small",
                                        onClick: onCopyAddress,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileCopy/* default */.Z, {
                                            fontSize: "small"
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : null,
                    ((ref = trending.coin.tags) === null || ref === void 0 ? void 0 : ref.length) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.label,
                                    variant: "body2",
                                    children: "Tags"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMetadataTags, {
                                    tags: trending.coin.tags
                                })
                            })
                        ]
                    }) : null
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinMarketPanel.tsx




const CoinMarketPanel_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        }
    })
);
function CoinMarketPanel(props) {
    const { dataProvider , trending  } = props;
    const { classes  } = CoinMarketPanel_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMetadataTable, {
                dataProvider: dataProvider,
                trending: trending
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMarketTable, {
                dataProvider: dataProvider,
                trending: trending
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(76729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/alert-circle.js
var alert_circle = __webpack_require__(12889);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TrendingCard.tsx




const TrendingCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    };
});
function TrendingCard(props) {
    const { children  } = props;
    const classes = (0,shared_src.useStylesExtends)(TrendingCard_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        component: "article",
        children: children
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TrendingViewError.tsx





const TrendingViewError_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            paddingTop: 0,
            paddingBottom: 0
        },
        placeholder: {
            padding: theme.spacing(18, 4)
        },
        icon: {
            width: theme.spacing(8),
            height: theme.spacing(8),
            marginBottom: theme.spacing(2),
            color: theme.palette.text.secondary
        },
        message: {
            fontSize: 16
        }
    })
);
function TrendingViewError(props) {
    const { message , reaction , TrendingCardProps  } = props;
    const { classes  } = TrendingViewError_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingCard, {
        ...TrendingCardProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.placeholder,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_circle/* default */.Z, {
                        className: classes.icon
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.message,
                        color: "textSecondary",
                        children: message
                    }),
                    !!reaction && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: reaction
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(29135);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(16842);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(74454);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TrendingViewSkeleton.tsx





const TrendingViewSkeleton_useStyles = (0,src/* makeStyles */.ZL)()({
    content: {
        paddingTop: 0,
        paddingBottom: 0
    },
    footer: {
        justifyContent: 'space-between'
    }
});
function TrendingViewSkeleton(props) {
    const { TrendingCardProps  } = props;
    const classes = (0,shared_src.useStylesExtends)(TrendingViewSkeleton_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TrendingCard, {
        ...TrendingCardProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    variant: "circular",
                    width: 40,
                    height: 40
                }),
                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    height: 10,
                    width: "30%"
                }),
                subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    height: 10,
                    width: "20%"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "rectangular",
                        height: 58,
                        style: {
                            marginBottom: 8
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "rectangular",
                        height: 269
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    height: 10,
                    width: "30%"
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(57703);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/MonetizationOnOutlined.js
var MonetizationOnOutlined = __webpack_require__(68668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./src/plugins/Transak/messages.ts
var Transak_messages = __webpack_require__(29440);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TradeFooter.tsx + 10 modules
var TradeFooter = __webpack_require__(3097);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(85290);
// EXTERNAL MODULE: ./src/utils/shadow-root/ShadowRootComponents.tsx
var ShadowRootComponents = __webpack_require__(33465);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinMenu.tsx





const CoinMenu_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        symbol: {
            color: theme.palette.text.secondary,
            fontSize: 12,
            marginLeft: theme.spacing(0.5)
        }
    })
);
function CoinMenu(props) {
    const { options , selectedIndex =-1 , children , onChange  } = props;
    const { classes  } = CoinMenu_useStyles();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const onOpen = (event)=>setAnchorEl(event.currentTarget)
    ;
    const onSelect = (option)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
        onClose();
    };
    const onClose = ()=>setAnchorEl(null)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                onClick: onOpen,
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootComponents/* ShadowRootMenu */.dy, {
                open: !!anchorEl,
                onClose: onClose,
                anchorEl: anchorEl,
                PaperProps: {
                    style: {
                        maxHeight: 192
                    }
                },
                children: options.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                        selected: selectedIndex === i,
                        onClick: ()=>onSelect(x)
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: x.coin.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: classes.symbol,
                                    children: [
                                        "(",
                                        x.coin.symbol,
                                        ")"
                                    ]
                                })
                            ]
                        })
                    }, x.value)
                )
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Transak/hooks/useTransakAllowanceCoin.ts

const ENV = {
    production: 'https://api.transak.com/api/v2/currencies/crypto-currencies',
    development: 'https://staging-api.transak.com/api/v2/currencies/crypto-currencies',
    test: 'https://development-api.transak.com/api/v2/currencies/crypto-currencies'
};
const URL1 = ENV["production"];
function useTransakAllowanceCoin(coin) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (coin.contract_address) {
            const allowanceList = await fetch(URL1, {
                method: 'GET'
            }).then((res)=>res.json()
            ).then((res)=>res.response
            );
            return allowanceList.map((val)=>val.symbol
            ).includes(coin.symbol);
        }
        return false;
    }).value;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(32027);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(87505);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts
var constants = __webpack_require__(71765);
;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useApprovedTokens.ts





function useApprovedTokens(token_address) {
    const [approvedTokens, setApprovedTokens] = (0,react.useState)([]);
    const tokens = (0,shared_src.useValueRef)(Trader_settings/* approvedTokensFromUniSwap */.EG);
    const onApprove = (0,react.useCallback)(()=>{
        if (!token_address || !token_address.length) return;
        const parsed = JSON.parse(tokens);
        if (parsed.length === constants/* APPROVED_TOKENS_MAX */.xh) parsed.shift();
        parsed.push(token_address);
        Trader_settings/* approvedTokensFromUniSwap.value */.EG.value = json_stable_stringify_default()(parsed);
    }, [
        tokens,
        token_address
    ]);
    (0,react.useEffect)(()=>{
        try {
            if (!tokens) Trader_settings/* approvedTokensFromUniSwap.value */.EG.value = json_stable_stringify_default()([]);
            else setApprovedTokens(JSON.parse(tokens));
        } catch  {
            setApprovedTokens([]);
        }
    }, [
        tokens
    ]);
    return {
        approvedTokens,
        onApprove
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinSaftyAlert.tsx






const CoinSaftyAlert_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            padding: theme.spacing(0, 2, 2, 2)
        },
        approve: {
            marginLeft: theme.spacing(1),
            whiteSpace: 'nowrap',
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            '&:hover': {
                backgroundColor: theme.palette.error.main
            }
        }
    };
});
function CoinSaftyAlert(props) {
    const { coin  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CoinSaftyAlert_useStyles();
    const { approvedTokens , onApprove  } = useApprovedTokens(coin.contract_address);
    if (!coin.contract_address) return null;
    if (approvedTokens.some((address)=>address === coin.contract_address
    )) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.Z, {
            variant: "outlined",
            severity: "error",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AlertTitle/* default */.Z, {
                    children: "Token Safety Alert"
                }),
                "Anyone can create and name any ERC20 token on Ethereum, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token. Similar to Etherscan, this site automatically tracks analytics for all ERC20 tokens independent of token integrity. Please do your own research before interacting with any ERC20 token.",
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            color: "primary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: (0,web3_shared_src/* resolveTokenLinkOnExplorer */.yWL)({
                                type: web3_shared_src/* EthereumTokenType.Native */.Drc.Native,
                                address: coin.contract_address,
                                chainId: web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet
                            }),
                            children: "View on Etherscan"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "contained",
                            className: classes.approve,
                            onClick: onApprove,
                            children: "I understand"
                        })
                    ]
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Transak/constants.ts
var Transak_constants = __webpack_require__(80165);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(66751);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TrendingViewDeck.tsx























const TrendingViewDeck_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            boxShadow: 'none',
            borderRadius: 0,
            marginBottom: theme.spacing(2),
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        content: {
            paddingTop: 0,
            paddingBottom: 0
        },
        header: {
            display: 'flex',
            position: 'relative'
        },
        headline: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative'
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap'
        },
        name: {
            maxWidth: 200,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        symbol: {
            fontSize: 12,
            color: theme.palette.text.secondary,
            marginLeft: theme.spacing(0.5),
            marginRight: theme.spacing(0.5)
        },
        buy: {
            right: 0,
            position: 'absolute'
        },
        arrowIcon: {
            color: theme.palette.text.primary
        },
        rank: {
            color: theme.palette.text.secondary,
            fontWeight: 300,
            marginRight: theme.spacing(1)
        },
        avatar: {
            backgroundColor: theme.palette.common.white
        },
        avatarFallback: {
            width: 40,
            height: 40
        },
        maskbook: {
            width: 40,
            height: 10
        }
    };
});
function TrendingViewDeck(props) {
    var ref, ref1;
    const { coins , currency , trending , dataProvider , tradeProvider , stats , children , showDataProviderIcon =false , showTradeProviderIcon =false , TrendingCardProps , dataProviders =[] , tradeProviders =[] ,  } = props;
    const { coin , market  } = trending;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(TrendingViewDeck_useStyles(), props);
    //#region buy
    const transakPluginEnabled = (0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)().find((x)=>x.ID === Transak_constants/* PLUGIN_IDENTIFIER */.J3
    );
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const isAllowanceCoin = useTransakAllowanceCoin(coin);
    const { setDialog: setBuyDialog  } = (0,shared_src.useRemoteControlledDialog)(Transak_messages/* PluginTransakMessages.buyTokenDialogUpdated */.l.buyTokenDialogUpdated);
    const onBuyButtonClicked = (0,react.useCallback)(()=>{
        setBuyDialog({
            open: true,
            code: coin.symbol,
            address: account
        });
    }, [
        account,
        trending === null || trending === void 0 ? void 0 : (ref = trending.coin) === null || ref === void 0 ? void 0 : ref.symbol
    ]);
    //#endregion
    //#region sync with settings
    const onDataProviderChange = (0,react.useCallback)((option)=>{
        Trader_settings/* currentDataProviderSettings.value */.gG.value = option.value;
    }, []);
    const onTradeProviderChange = (0,react.useCallback)((option)=>{
        Trader_settings/* currentTradeProviderSettings.value */.de.value = option.value;
    }, []);
    //#endregion
    //#region switch between coins with the same symbol
    const currentPreferredCoinIdSettings = (0,shared_src.useValueRef)((0,Trader_settings/* getCurrentPreferredCoinIdSettings */.Lc)(dataProvider));
    const onCoinMenuChange = (0,react.useCallback)((option)=>{
        const settings = JSON.parse(currentPreferredCoinIdSettings);
        settings[option.coin.symbol.toLowerCase()] = option.value;
        (0,Trader_settings/* getCurrentPreferredCoinIdSettings */.Lc)(dataProvider).value = json_stable_stringify_default()(settings);
    }, [
        dataProvider,
        currentPreferredCoinIdSettings
    ]);
    var ref2, ref3, ref4, ref5;
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TrendingCard, {
        ...TrendingCardProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                className: classes.header,
                avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                    href: (0,lodash.first)(coin.home_urls),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        className: classes.avatar,
                        src: coin.image_url,
                        alt: coin.symbol,
                        children: trending.coin.contract_address ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                            classes: {
                                icon: classes.avatarFallback
                            },
                            address: trending.coin.contract_address
                        }) : null
                    })
                }),
                title: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.headline,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.title,
                            variant: "h6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                                    href: (0,lodash.first)(coin.home_urls),
                                    LinkProps: {
                                        className: classes.name,
                                        title: coin.name.toUpperCase()
                                    },
                                    children: coin.name.toUpperCase()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: classes.symbol,
                                    children: [
                                        "(",
                                        coin.symbol.toUpperCase(),
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        coins.length > 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMenu, {
                            options: coins.map((coin1)=>({
                                    coin: coin1,
                                    value: coin1.id
                                })
                            ),
                            selectedIndex: coins.findIndex((x)=>x.id === coin.id
                            ),
                            onChange: onCoinMenuChange,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                className: classes.arrowIcon,
                                size: "small",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {
                                })
                            })
                        }) : null,
                        transakPluginEnabled && account && trending.coin.symbol && isAllowanceCoin ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.buy,
                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MonetizationOnOutlined/* default */.Z, {
                            }),
                            variant: "text",
                            color: "primary",
                            onClick: onBuyButtonClicked,
                            children: t('buy_now')
                        }) : null
                    ]
                }),
                subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        component: "p",
                        variant: "body1",
                        children: [
                            market ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    typeof coin.market_cap_rank === 'number' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: classes.rank,
                                        title: "Index Cap Rank",
                                        children: [
                                            "#",
                                            coin.market_cap_rank
                                        ]
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedCurrency, {
                                            value: (ref3 = dataProvider === public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP ? (ref2 = (ref1 = (0,lodash.last)(stats)) === null || ref1 === void 0 ? void 0 : ref1[1]) !== null && ref2 !== void 0 ? ref2 : market.current_price : market.current_price) !== null && ref3 !== void 0 ? ref3 : 0,
                                            sign: currency.symbol
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: t('plugin_trader_no_data')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChanged, {
                                amount: (ref5 = (ref4 = market === null || market === void 0 ? void 0 : market.price_change_percentage_1h) !== null && ref4 !== void 0 ? ref4 : market === null || market === void 0 ? void 0 : market.price_change_percentage_24h) !== null && ref5 !== void 0 ? ref5 : 0
                            })
                        ]
                    })
                }),
                disableTypography: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                className: classes.content,
                children: [
                    dataProvider === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO && /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinSaftyAlert, {
                        coin: trending.coin
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.body,
                        elevation: 0,
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeFooter/* TradeFooter */.r, {
                classes: {
                    footer: classes.footer
                },
                showDataProviderIcon: showDataProviderIcon,
                showTradeProviderIcon: showTradeProviderIcon,
                dataProvider: dataProvider,
                tradeProvider: tradeProvider,
                dataProviders: dataProviders,
                tradeProviders: tradeProviders,
                onDataProviderChange: onDataProviderChange,
                onTradeProviderChange: onTradeProviderChange
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useAvailableCoins.ts


function useAvailableCoins(type, keyword, dataProvider) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!keyword) return [];
        return messages/* PluginTraderRPC.getAvailableCoins */.V.getAvailableCoins(keyword, type, dataProvider);
    }, [
        dataProvider,
        type,
        keyword
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useCurrentCoinId.ts



function usePreferredCoinId(keyword, dataProvider) {
    const keyword_ = keyword.toLowerCase();
    const settings = (0,shared_src.useValueRef)((0,Trader_settings/* getCurrentPreferredCoinIdSettings */.Lc)(dataProvider));
    return (0,react.useMemo)(()=>{
        try {
            const parsedSettings = JSON.parse(settings);
            var _keyword_;
            return (_keyword_ = parsedSettings[keyword_]) !== null && _keyword_ !== void 0 ? _keyword_ : '';
        } catch  {
            return '';
        }
    }, [
        keyword_,
        settings
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTradeContext.ts
var useTradeContext = __webpack_require__(25754);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(93975);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TraderView.tsx


























const TraderView_useStyles = (0,src/* makeStyles */.ZL)()((theme, props)=>{
    return {
        root: props.isPopper ? {
            width: 450,
            boxShadow: `${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px' : 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px'}`
        } : {
            width: '100%',
            boxShadow: 'none',
            borderRadius: 0,
            marginBottom: theme.spacing(2)
        },
        body: props.isPopper ? {
            minHeight: 303,
            overflow: 'hidden',
            border: `solid 1px ${theme.palette.divider}`,
            display: 'flex',
            flexDirection: 'column'
        } : {
        },
        footer: props.isPopper ? {
        } : {
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        footerSkeleton: props.isPopper ? {
        } : {
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        tabs: {
            height: props.isPopper ? 35 : 'auto',
            width: '100%',
            minHeight: 'unset',
            borderTop: props.isPopper ? 'unset' : `solid 1px ${theme.palette.divider}`,
            borderBottom: props.isPopper ? 'unset' : `solid 1px ${theme.palette.divider}`
        },
        content: props.isPopper ? {
        } : {
            padding: 0,
            border: 'none'
        },
        tab: {
            height: props.isPopper ? 35 : 'auto',
            minHeight: 'unset',
            minWidth: 'unset'
        },
        tradeViewRoot: props.isPopper ? {
            maxWidth: 380
        } : {
        },
        priceChartRoot: props.isPopper ? {
            flex: 1
        } : {
        }
    };
});
function TraderView(props) {
    const { name , tagType , dataProviders , tradeProviders , isPopper =true  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = TraderView_useStyles({
        isPopper
    });
    const dataProvider = (0,useCurrentDataProvider/* useCurrentDataProvider */.$)(dataProviders);
    const tradeProvider = (0,useCurrentTradeProvider/* useCurrentTradeProvider */.Q)();
    const [tabIndex, setTabIndex] = (0,react.useState)(dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? 1 : 0);
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    //#region track network type
    const networkType = (0,utils/* useValueRef */.E)(settings/* currentNetworkSettings */.fX);
    (0,react.useEffect)(()=>setTabIndex(0)
    , [
        networkType
    ]);
    //#endregion
    //#region multiple coins share the same symbol
    const { value: coins = []  } = useAvailableCoins(tagType, name, dataProvider);
    //#endregion
    //#region merge trending
    const coinId = usePreferredCoinId(name, dataProvider);
    const trendingById = useTrendingById(coinId, dataProvider);
    const trendingByKeyword = useTrendingByKeyword(tagType, coinId ? '' : name, dataProvider);
    const { value: { currency , trending  } , error: trendingError , loading: loadingTrending ,  } = coinId ? trendingById : trendingByKeyword;
    var _contract_address;
    //#endregion
    //#region swap
    const { value: tokenDetailed , error: tokenDetailedError , loading: loadingTokenDetailed ,  } = (0,web3_shared_src/* useFungibleTokenDetailed */.jv)((trending === null || trending === void 0 ? void 0 : trending.coin.symbol.toLowerCase()) === 'eth' ? web3_shared_src/* EthereumTokenType.Native */.Drc.Native : web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20, (trending === null || trending === void 0 ? void 0 : trending.coin.symbol.toLowerCase()) === 'eth' ? '' : (_contract_address = trending === null || trending === void 0 ? void 0 : trending.coin.contract_address) !== null && _contract_address !== void 0 ? _contract_address : '');
    //#endregion
    //#region stats
    const [days, setDays] = (0,react.useState)(PriceChartDaysControl/* Days.ONE_WEEK */.h.ONE_WEEK);
    const { value: stats = [] , loading: loadingStats , retry: retryStats ,  } = usePriceStats({
        coinId: trending === null || trending === void 0 ? void 0 : trending.coin.id,
        dataProvider: trending === null || trending === void 0 ? void 0 : trending.dataProvider,
        currency: trending === null || trending === void 0 ? void 0 : trending.currency,
        days
    });
    //#endregion
    //#region trader context
    const tradeContext = (0,useTradeContext/* useTradeContext */.I)(tradeProvider);
    //#endregion
    //#region current data provider switcher
    const DataProviderSwitcher = (0,utils/* useSettingsSwitcher */.MN)(Trader_settings/* currentDataProviderSettings */.gG, dataProviders, pipes/* resolveDataProviderName */.K7);
    //#endregion
    //#region api ready callback
    (0,react.useEffect)(()=>{
        var ref;
        (ref = props.onUpdate) === null || ref === void 0 ? void 0 : ref.call(props);
    }, [
        tabIndex,
        loadingTrending
    ]);
    //#endregion
    //#region no available providers
    if (dataProviders.length === 0) return null;
    //#endregion
    //#region error handling
    // error: unknown coin or api error
    if (trendingError) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewError, {
        message: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            children: [
                "Fail to load trending info from",
                ' ',
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    color: "primary",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: (0,pipes/* resolveDataProviderLink */.tA)(dataProvider),
                    children: (0,pipes/* resolveDataProviderName */.K7)(dataProvider)
                }),
                "."
            ]
        }),
        reaction: DataProviderSwitcher,
        TrendingCardProps: {
            classes: {
                root: classes.root
            }
        }
    }));
    var ref;
    //#endregion
    //#region if the coin is a native token or contract address exists
    const isSwapable = (!!(trending === null || trending === void 0 ? void 0 : trending.coin.contract_address) || [
        'eth',
        'matic',
        'bnb'
    ].includes((ref = trending === null || trending === void 0 ? void 0 : trending.coin.symbol.toLowerCase()) !== null && ref !== void 0 ? ref : '')) && chainIdValid && tradeProviders.length;
    //#endregion
    //#region display loading skeleton
    if (!currency || !trending || loadingTrending) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewSkeleton, {
        classes: {
            footer: classes.footerSkeleton
        },
        TrendingCardProps: {
            classes: {
                root: classes.root
            }
        }
    }));
    //#endregion
    //#region tabs
    const { coin , market , tickers  } = trending;
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_trader_tab_market')
        }, "market"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_trader_tab_price')
        }, "price"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_trader_tab_exchange')
        }, "exchange"),
        isSwapable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_trader_tab_swap')
        }, "swap") : null, 
    ].filter(Boolean);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(useTradeContext/* TradeContext.Provider */.K.Provider, {
        value: tradeContext,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TrendingViewDeck, {
            classes: {
                body: classes.body,
                footer: classes.footer,
                content: classes.content
            },
            stats: stats,
            coins: coins,
            currency: currency,
            trending: trending,
            dataProvider: dataProvider,
            tradeProvider: tradeProvider,
            showDataProviderIcon: tabIndex < 3,
            showTradeProviderIcon: tabIndex === 3,
            dataProviders: dataProviders,
            tradeProviders: tradeProviders,
            TrendingCardProps: {
                classes: {
                    root: classes.root
                }
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                    className: classes.tabs,
                    indicatorColor: "primary",
                    textColor: "primary",
                    variant: "fullWidth",
                    value: tabIndex,
                    onChange: (ev, newValue)=>setTabIndex(newValue)
                    ,
                    TabIndicatorProps: {
                        style: {
                            display: 'none'
                        }
                    },
                    children: tabs
                }),
                tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMarketPanel, {
                    dataProvider: dataProvider,
                    trending: trending
                }) : null,
                tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        market ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChangedTable, {
                            market: market
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChart, {
                            classes: {
                                root: classes.priceChartRoot
                            },
                            coin: coin,
                            currency: currency,
                            stats: stats,
                            retry: retryStats,
                            loading: loadingStats,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChartDaysControl/* PriceChartDaysControl */.P, {
                                days: days,
                                onDaysChange: setDays
                            })
                        })
                    ]
                }) : null,
                tabIndex === 2 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TickersTable, {
                    tickers: tickers,
                    dataProvider: dataProvider
                }) : null,
                tabIndex === 3 && isSwapable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeView, {
                    classes: {
                        root: classes.tradeViewRoot
                    },
                    TraderProps: {
                        coin,
                        tokenDetailed
                    }
                }) : null
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/SearchResultInspector.tsx






function SearchResultInspector(props) {
    const keyword = useSearchedKeyword();
    var ref;
    const [_, type, name = ''] = (ref = keyword.match(/([#$])(\w+)/)) !== null && ref !== void 0 ? ref : [];
    const type_ = type === '$' ? types/* TagType.CASH */.Qy.CASH : types/* TagType.HASH */.Qy.HASH;
    const { value: dataProviders = []  } = (0,useAvailableDataProviders/* useAvailableDataProviders */.Q)(type_, name);
    const { value: traderProviders = []  } = (0,useAvailableTraderProviders/* useAvailableTraderProviders */.Z)(type_, name);
    if (!name || !(dataProviders === null || dataProviders === void 0 ? void 0 : dataProviders.length)) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderView, {
            isPopper: false,
            name: name,
            tagType: type_,
            dataProviders: dataProviders,
            tradeProviders: traderProviders
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__(80806);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Popper/Popper.js
var Popper = __webpack_require__(91371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Fade/Fade.js
var Fade = __webpack_require__(46199);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(59281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useWindowScroll.js
var useWindowScroll = __webpack_require__(53891);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TrendingPopper.tsx








function TrendingPopper(props) {
    var ref;
    const popperRef = (0,react.useRef)(null);
    const [freezed, setFreezed] = (0,react.useState)(false) // disable any click
    ;
    const [locked, setLocked] = (0,react.useState)(false) // state is updating, lock UI
    ;
    const [name, setName] = (0,react.useState)('');
    const [type, setType] = (0,react.useState)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [availableDataProviders, setAvailableDataProviders] = (0,react.useState)([]);
    const [availableTradeProviders, setAvailableTradeProviders] = (0,react.useState)([]);
    //#region select token and provider dialog could be open by trending view
    const onFreezed = (0,react.useCallback)((ev)=>setFreezed(ev.open)
    , []);
    (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, onFreezed);
    (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated, onFreezed);
    (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated, onFreezed);
    (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, onFreezed);
    (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectWalletDialogUpdated */.R.events.selectWalletDialogUpdated, onFreezed);
    (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated, onFreezed);
    (0,shared_src.useRemoteControlledDialog)(Transak_messages/* PluginTransakMessages.buyTokenDialogUpdated */.l.buyTokenDialogUpdated, onFreezed);
    (0,shared_src.useRemoteControlledDialog)(messages/* PluginTraderMessages.swapSettingsUpdated */.A.swapSettingsUpdated, onFreezed);
    //#endregion
    //#region open or close popper
    // open popper from message center
    (0,react.useEffect)(()=>messages/* PluginTraderMessages.cashTagObserved.on */.A.cashTagObserved.on((ev)=>{
            const update = ()=>{
                setLocked(true);
                setName(ev.name);
                setType(ev.type);
                setAnchorEl(ev.element);
                setAvailableDataProviders(ev.dataProviders);
                setAvailableTradeProviders(ev.tradeProviders);
                setLocked(false);
            };
            // observe the same element
            if (anchorEl === ev.element) return;
            // close popper on previous element
            if (anchorEl) {
                setAnchorEl(null);
                setTimeout(update, 400);
                return;
            }
            update();
        })
    , [
        anchorEl
    ]);
    // close popper if location was changed
    const location = (0,useLocation/* default */.Z)();
    (0,react.useEffect)(()=>setAnchorEl(null)
    , [
        (ref = location.state) === null || ref === void 0 ? void 0 : ref.key,
        location.href
    ]);
    // close popper if scroll out of visual screen
    const position = (0,useWindowScroll/* default */.Z)();
    (0,react.useEffect)(()=>{
        if (!anchorEl) return;
        const { top  } = anchorEl.getBoundingClientRect();
        if (top < 0 || top > document.documentElement.clientHeight // out off bottom bound
        ) setAnchorEl(null);
    }, [
        anchorEl,
        Math.floor(position.y / 50)
    ]);
    //#endregion
    if (locked) return null;
    if (!anchorEl || !type) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ClickAwayListener/* default */.Z, {
        onClickAway: ()=>{
            if (!freezed) setAnchorEl(null);
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Popper/* default */.Z, {
            open: Boolean(anchorEl),
            anchorEl: anchorEl,
            disablePortal: true,
            transition: true,
            style: {
                zIndex: 100,
                margin: 4
            },
            popperRef: popperRef,
            ...props.PopperProps,
            children: ({ TransitionProps  })=>{
                var ref1;
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.Z, {
                    in: Boolean(anchorEl),
                    ...TransitionProps,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: (ref1 = props.children) === null || ref1 === void 0 ? void 0 : ref1.call(props, name, type, availableDataProviders, availableTradeProviders, ()=>{
                            return setTimeout(()=>{
                                var ref2;
                                return (ref2 = popperRef.current) === null || ref2 === void 0 ? void 0 : ref2.update();
                            }, 100);
                        })
                    })
                }));
            }
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TagInspector.tsx






function TagInspector(props) {
    // build availability cache in the background page
    (0,useAvailableDataProviders/* useAvailableDataProviders */.Q)(types/* TagType.CASH */.Qy.CASH, 'BTC');
    const createTrendingView = (0,react.useCallback)((name, type, dataProviders, tradeProviders, reposition)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TraderView, {
            name: name,
            tagType: type,
            dataProviders: dataProviders,
            tradeProviders: tradeProviders,
            onUpdate: reposition
        }));
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingPopper, {
        children: createTrendingView
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/index.tsx







const sns = {
    ...base/* base */.u,
    ...base_deferred/* baseDeferred */.d,
    init (signal) {
    },
    SearchBoxComponent: SearchResultInspector,
    GlobalInjection: function Component() {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TagInspector, {
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsDialog/* SettingsDialog */.D, {
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderDialog/* TraderDialog */.F, {
                })
            ]
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 67893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Days),
/* harmony export */   "P": () => (/* binding */ PriceChartDaysControl)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93244);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49283);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36039);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            top: 0,
            right: 0,
            padding: theme.spacing(1, 2),
            position: 'absolute'
        },
        link: {
            cursor: 'pointer',
            marginRight: theme.spacing(1),
            '&:last-child': {
                marginRight: 0
            }
        },
        text: {
            fontSize: 10,
            fontWeight: 300
        }
    })
);
var Days;
(function(Days1) {
    Days1[Days1["MAX"] = 0] = "MAX";
    Days1[Days1["ONE_DAY"] = 1] = "ONE_DAY";
    Days1[Days1["ONE_WEEK"] = 7] = "ONE_WEEK";
    Days1[Days1["TWO_WEEKS"] = 14] = "TWO_WEEKS";
    Days1[Days1["ONE_MONTH"] = 30] = "ONE_MONTH";
    Days1[Days1["THREE_MONTHS"] = 90] = "THREE_MONTHS";
    Days1[Days1["ONE_YEAR"] = 365] = "ONE_YEAR";
})(Days || (Days = {
}));
function PriceChartDaysControl(props) {
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: [
            Days.ONE_DAY,
            Days.ONE_WEEK,
            Days.TWO_WEEKS,
            Days.ONE_MONTH,
            Days.THREE_MONTHS,
            Days.ONE_YEAR,
            Days.MAX, 
        ].map((days)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                className: classes.link,
                onClick: ()=>{
                    var ref;
                    return (ref = props.onDaysChange) === null || ref === void 0 ? void 0 : ref.call(props, days);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    className: classes.text,
                    component: "span",
                    color: props.days === days ? 'primary' : 'textSecondary',
                    children: (0,_pipes__WEBPACK_IMPORTED_MODULE_2__/* .resolveDaysName */ .xo)(days)
                })
            }, days));
        })
    }));
}


/***/ }),

/***/ 77489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useAvailableDataProviders)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88088);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6615);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62323);



function useAvailableDataProviders(type, keyword) {
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xxU)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        return _messages__WEBPACK_IMPORTED_MODULE_1__/* .PluginTraderRPC.getAvailableDataProviders */ .V.getAvailableDataProviders(type, keyword);
    }, [
        chainId,
        type,
        keyword
    ]);
}


/***/ }),

/***/ 64106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useCurrentDataProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95142);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80050);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67047);




function useCurrentDataProvider(availableDataProviders) {
    const [dataProvider, setDataProvider] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(availableDataProviders.length ? availableDataProviders[0] : _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO);
    const currentDataProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__.useValueRef)(_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentDataProviderSettings */ .gG);
    // sync data provider
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!availableDataProviders.length) return;
        setDataProvider(availableDataProviders.includes(currentDataProvider) ? currentDataProvider : availableDataProviders[0]);
    }, [
        availableDataProviders.sort().join(),
        currentDataProvider
    ]);
    return dataProvider;
}


/***/ }),

/***/ 29440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80165);


if (false) {}
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);


/***/ }),

/***/ 57093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ formatElapsed)
/* harmony export */ });
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93002);

function formatElapsed(from) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = Date.now() - from;
    if (elapsed < msPerMinute) return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_seconds_ago', {
        seconds: Math.round(elapsed / 1000)
    });
    if (elapsed < msPerHour) return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_minutes_ago', {
        minutes: Math.round(elapsed / msPerMinute)
    });
    if (elapsed < msPerDay) return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_hours_ago', {
        hours: Math.round(elapsed / msPerHour)
    });
    if (elapsed < msPerMonth) return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_days_ago', {
        days: Math.round(elapsed / msPerDay)
    });
    if (elapsed < msPerYear) return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_months_ago', {
        months: Math.round(elapsed / msPerMonth)
    });
    return _utils_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_years_ago', {
        years: Math.round(elapsed / msPerYear)
    });
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