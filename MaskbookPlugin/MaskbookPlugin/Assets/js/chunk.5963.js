(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9146],{

/***/ 44612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LoadingButton_LoadingButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(81987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/utils/capitalize.js
var capitalize = __webpack_require__(85568);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/useThemeProps.js
var useThemeProps = __webpack_require__(51765);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(75477);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(19119);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/LoadingButton/loadingButtonClasses.js

function getLoadingButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiLoadingButton', slot);
}
const loadingButtonClasses = (0,generateUtilityClasses/* default */.Z)('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
/* harmony default export */ const LoadingButton_loadingButtonClasses = (loadingButtonClasses);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/LoadingButton/LoadingButton.js


const _excluded = ["children", "disabled", "loading", "loadingIndicator", "loadingPosition"];












const useUtilityClasses = styleProps => {
  const {
    loading,
    loadingPosition,
    classes
  } = styleProps;
  const slots = {
    root: ['root', loading && 'loading'],
    startIcon: [loading && `startIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    loadingIndicator: ['loadingIndicator', loading && `loadingIndicator${(0,capitalize/* default */.Z)(loadingPosition)}`]
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getLoadingButtonUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
}; // TODO use `import { rootShouldForwardProp } from '../styles/styled';` once move to core


const rootShouldForwardProp = prop => prop !== 'styleProps' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const LoadingButtonRoot = (0,styled/* default */.ZP)(Button/* default */.Z, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiLoadingButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  styleProps,
  theme
}) => (0,esm_extends/* default */.Z)({
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, styleProps.loadingPosition === 'center' && {
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
    duration: theme.transitions.duration.short
  }),
  [`&.${LoadingButton_loadingButtonClasses.loading}`]: {
    color: 'transparent'
  }
}));
const LoadingButtonLoadingIndicator = (0,styled/* default */.ZP)('div', {
  name: 'MuiLoadingButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => {
    const {
      styleProps
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${(0,capitalize/* default */.Z)(styleProps.loadingPosition)}`]];
  }
})(({
  theme,
  styleProps
}) => (0,esm_extends/* default */.Z)({
  position: 'absolute',
  visibility: 'visible',
  display: 'flex'
}, styleProps.loadingPosition === 'start' && {
  left: 14
}, styleProps.loadingPosition === 'center' && {
  left: '50%',
  transform: 'translate(-50%)',
  color: theme.palette.action.disabled
}, styleProps.loadingPosition === 'end' && {
  right: 14
}));

const LoadingIndicator = /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
  color: "inherit",
  size: 16
});

const LoadingButton = /*#__PURE__*/react.forwardRef(function LoadingButton(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiLoadingButton'
  });

  const {
    children,
    disabled = false,
    loading = false,
    loadingIndicator = LoadingIndicator,
    loadingPosition = 'center'
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const styleProps = (0,esm_extends/* default */.Z)({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition
  });

  const classes = useUtilityClasses(styleProps);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(LoadingButtonRoot, (0,esm_extends/* default */.Z)({
    disabled: disabled || loading,
    ref: ref
  }, other, {
    classes: classes,
    styleProps: styleProps,
    children: [loading && /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingButtonLoadingIndicator, {
      className: classes.loadingIndicator,
      styleProps: styleProps,
      children: loadingIndicator
    }), children]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const LoadingButton_LoadingButton = (LoadingButton);

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

/***/ 64110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ DesktopMnemonicConfirm),
  "i": () => (/* reexport */ MnemonicReveal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/DesktopMnemonicConfirm.tsx



const DesktopMnemonicConfirm = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { puzzleWords , indexes , onChange  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        children: puzzleWords.map((word, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    sx: {
                        width: '100%',
                        userSelect: 'none'
                    },
                    label: i + 1 + '.',
                    variant: "filled",
                    size: "small",
                    value: word,
                    InputProps: {
                        disableUnderline: true
                    },
                    disabled: indexes && !indexes.includes(i),
                    onChange: (e)=>onChange(e.target.value, indexes ? indexes.indexOf(i) : i)
                })
            }, i)
        )
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/MnemonicReveal.tsx



const WordCard = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>`
    padding: ${theme.spacing(1)};
    border-radius: 6px;
    color: ${theme.palette.mode === 'dark' ? src/* MaskColorVar.textPrimary */.ZN.textPrimary : src/* MaskColorVar.textLink */.ZN.textLink};
    font-size: 14;
    background-color: ${src/* MaskColorVar.blue.alpha */.ZN.blue.alpha(0.1)};
    display: flex;
    justify-content: center;
    align-items: center;
`
);
function MnemonicReveal(props) {
    const { words  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        children: words.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WordCard, {
                    children: item
                })
            }, index + item)
        )
    }));
}

;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/index.tsx




/***/ }),

/***/ 94239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CreateMnemonicUI": () => (/* binding */ CreateMnemonicUI),
  "HD_PATH_WITHOUT_INDEX_ETHEREUM": () => (/* binding */ HD_PATH_WITHOUT_INDEX_ETHEREUM),
  "default": () => (/* binding */ components_CreateMnemonic)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(32027);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../icons/general/Refresh.tsx
var Refresh = __webpack_require__(64795);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(76591);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../dashboard/src/components/Mnemonic/index.tsx + 2 modules
var Mnemonic = __webpack_require__(64110);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(44612);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(11399);
// EXTERNAL MODULE: ../icons/general/Copy.tsx
var Copy = __webpack_require__(66769);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(30699);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.2_2dbba68b7ac16965ba4a12f4e1c41a15/node_modules/react-router/index.js
var react_router = __webpack_require__(18875);
// EXTERNAL MODULE: ../dashboard/src/type.ts
var type = __webpack_require__(51987);
;// CONCATENATED MODULE: ../dashboard/src/pages/CreateMaskWallet/components/VerifyMnemonicDialog/index.tsx













const useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        padding: '40px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 1.25
    },
    confirm: {
        marginTop: 24
    },
    button: {
        height: 48,
        borderRadius: 24,
        fontSize: 18,
        marginTop: 50
    },
    addressTitle: {
        color: src/* MaskColorVar.normalText */.ZN.normalText,
        fontSize: 14,
        lineHeight: '20px'
    },
    address: {
        display: 'flex',
        alignItems: 'center',
        color: '#111432',
        marginTop: 12,
        fontSize: 14,
        lineHeight: '20px'
    },
    copy: {
        fontSize: 20,
        marginLeft: 12,
        cursor: 'pointer',
        stroke: '#111432'
    }
});
const SuccessTitle = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>({
        fontSize: theme.typography.h5.fontSize,
        color: theme.palette.success.main,
        fontWeight: theme.typography.fontWeightMedium,
        margin: theme.spacing(2, 0)
    })
);
const VerifyMnemonicDialog = /*#__PURE__*/ (0,react.memo)(({ matched , open , onClose , puzzleWords , indexes , onUpdateAnswerWords , onSubmit , loading , address  })=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const copyWalletAddress = (0,shared_src.useSnackbarCallback)({
        executor: async (address1)=>copyToClipboard(address1)
        ,
        deps: [],
        successText: t.wallets_address_copied()
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyMnemonicDialogUI, {
        matched: matched,
        open: open,
        onClose: onClose,
        puzzleWords: puzzleWords,
        indexes: indexes,
        onUpdateAnswerWords: onUpdateAnswerWords,
        onSubmit: onSubmit,
        loading: loading,
        address: address,
        onCopy: copyWalletAddress,
        onDoneClick: ()=>navigate(type/* RoutePaths.Wallets */.s2.Wallets)
    }));
});
const VerifyMnemonicDialogUI = /*#__PURE__*/ (0,react.memo)(({ matched , open , onClose , puzzleWords , indexes , onUpdateAnswerWords , onSubmit , loading , address , onCopy , onDoneClick ,  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        title: "Verification",
        open: open,
        onClose: !address ? onClose : undefined,
        maxWidth: "md",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.container,
            children: address ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Success/* SuccessIcon */.t, {
                        sx: {
                            fontSize: 54
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SuccessTitle, {
                        children: t.wallets_create_successfully_title()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        style: {
                            width: '100%'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.addressTitle,
                            children: t.create_wallet_your_wallet_address()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.address,
                        children: [
                            address,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Copy/* CopyIcon */.T, {
                                className: classes.copy,
                                onClick: ()=>onCopy(address)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        fullWidth: true,
                        className: classes.button,
                        onClick: onDoneClick,
                        children: t.create_wallet_done()
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: t.create_wallet_verify_words()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.confirm,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Mnemonic/* DesktopMnemonicConfirm */.q, {
                            indexes: indexes,
                            puzzleWords: puzzleWords,
                            onChange: onUpdateAnswerWords
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                        loading: loading,
                        fullWidth: true,
                        className: classes.button,
                        disabled: !matched,
                        onClick: onSubmit,
                        children: t.verify()
                    })
                ]
            })
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(83693);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(11922);
;// CONCATENATED MODULE: ../dashboard/src/pages/CreateMaskWallet/components/CreateMnemonic/index.tsx














// Private key at m/purpose'/coin_type'/account'/change
const HD_PATH_WITHOUT_INDEX_ETHEREUM = "m/44'/60'/0'/0";
const CreateMnemonic_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        padding: '120px 18%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 24,
        lineHeight: 1.25,
        fontWeight: 500
    },
    refresh: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 24,
        fontSize: 14,
        lineHeight: '20px',
        width: '100%',
        color: src/* MaskColorVar.linkText */.ZN.linkText
    },
    words: {
        marginTop: 24,
        backgroundColor: src/* MaskColorVar.lightBackground */.ZN.lightBackground,
        padding: 30,
        width: '100%'
    },
    controller: {
        marginTop: 24,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 33%)',
        justifyContent: 'center',
        gridColumnGap: 10,
        padding: '27px 0',
        width: '100%'
    },
    button: {
        height: 48,
        borderRadius: 24,
        fontSize: 18
    },
    alert: {
        marginTop: 24,
        padding: 24,
        width: '100%'
    }
});
const CreateMnemonic = /*#__PURE__*/ (0,react.memo)(()=>{
    const location = (0,react_router/* useLocation */.TH)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [open, setOpen] = (0,react.useState)(false);
    const [words, puzzleWords, indexes, answerCallback, resetCallback, refreshCallback] = (0,web3_shared_src/* useMnemonicWordsPuzzle */.hx3)();
    const onVerifyClick = (0,react.useCallback)(()=>{
        setOpen(true);
    }, []);
    const [walletState, onSubmit] = (0,useAsyncFn/* default */.Z)(async ()=>{
        const name = new URLSearchParams(location.search).get('name');
        //#region if the name isn't exist, navigate to form page
        if (!name) {
            resetCallback();
            navigate(type/* RoutePaths.CreateMaskWalletForm */.s2.CreateMaskWalletForm);
        }
        const address = await API/* PluginServices.Wallet.importNewWallet */.NG.Wallet.importNewWallet({
            name,
            path: `${HD_PATH_WITHOUT_INDEX_ETHEREUM}/0`,
            mnemonic: words,
            passphrase: ''
        });
        await API/* PluginServices.Wallet.addPhrase */.NG.Wallet.addPhrase({
            path: HD_PATH_WITHOUT_INDEX_ETHEREUM,
            mnemonic: words,
            passphrase: ''
        });
        return address;
    }, [
        location.search,
        words,
        resetCallback
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateMnemonicUI, {
                words: words,
                onRefreshWords: refreshCallback,
                onVerifyClick: onVerifyClick
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyMnemonicDialog, {
                matched: words.join(' ') === puzzleWords.join(' '),
                onUpdateAnswerWords: answerCallback,
                indexes: indexes,
                puzzleWords: puzzleWords,
                open: open,
                onClose: ()=>setOpen(false)
                ,
                onSubmit: onSubmit,
                loading: walletState.loading,
                address: walletState.value
            })
        ]
    }));
});
const CreateMnemonicUI = /*#__PURE__*/ (0,react.memo)(({ words , onRefreshWords , onVerifyClick  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = CreateMnemonic_useStyles();
    const [open, setOpen] = (0,react.useState)(true);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                children: "Create a wallet"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.refresh,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    style: {
                        display: 'flex',
                        cursor: 'pointer'
                    },
                    onClick: onRefreshWords,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t.wallets_create_wallet_refresh()
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.words,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Mnemonic/* MnemonicReveal */.i, {
                    words: words
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        className: classes.button,
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.button,
                        onClick: onVerifyClick,
                        children: t.verify()
                    })
                ]
            }),
            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                severity: "error",
                onClose: ()=>setOpen(false)
                ,
                className: classes.alert,
                children: t.create_wallet_mnemonic_tip()
            }) : null
        ]
    }));
});
/* harmony default export */ const components_CreateMnemonic = (CreateMnemonic);


/***/ }),

/***/ 66769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CopyIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const CopyIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('copy', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M16.115 8h-6.23C9.12 8 8.5 8.62 8.5 9.385v6.23C8.5 16.38 9.12 17 9.885 17h6.23c.765 0 1.385-.62 1.385-1.385v-6.23C17.5 8.62 16.88 8 16.115 8z",
            fill: "none",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M5.577 12h-.692A1.385 1.385 0 013.5 10.615v-6.23A1.385 1.385 0 014.885 3h6.23A1.385 1.385 0 0112.5 4.385v.692",
            fill: "none",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 20 20');


/***/ }),

/***/ 64795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const RefreshIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Refresh', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.433 7.174l.975.683a.5.5 0 01-.13.884L5.89 9.858a.5.5 0 01-.657-.461L5.136 5.84a.5.5 0 01.787-.423l.806.564A8 8 0 114 12h2.001a6 6 0 102.433-4.826z",
        fill: "#1C68F3"
    })
}), '0 0 24 24');


/***/ }),

/***/ 11399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SuccessIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const SuccessIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Success', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".2",
            d: "M32 58.667c14.727 0 26.667-11.94 26.667-26.667 0-14.728-11.94-26.667-26.667-26.667C17.272 5.333 5.333 17.273 5.333 32c0 14.728 11.94 26.667 26.667 26.667z",
            fill: "#77E0B5"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.46 22.027c1.09.99 1.17 2.677.18 3.767L31.306 40.46a2.667 2.667 0 01-3.708.23l-9.333-8a2.667 2.667 0 113.47-4.049l7.367 6.314 11.591-12.75a2.667 2.667 0 013.767-.18z",
            fill: "#77E0B5"
        })
    ]
}), '0 0 64 64');


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