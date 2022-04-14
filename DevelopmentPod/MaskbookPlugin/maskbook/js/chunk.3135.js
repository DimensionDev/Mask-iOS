(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3135],{

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

/***/ 20525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ DesktopMnemonicConfirm),
  "i": () => (/* reexport */ MnemonicReveal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useDrop.js
var useDrop = __webpack_require__(84489);
;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/DesktopMnemonicConfirm.tsx





const parserPastingAllMnemonic = (text)=>{
    const result = [
        ...text.matchAll(/([a-z])+/g)
    ];
    return result.length === 12 ? result : null;
};
const DesktopMnemonicConfirm = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { puzzleWords , indexes , onChange , setAll  } = props;
    (0,useDrop/* default */.Z)({
        onText: (text)=>handlePaster(text)
    });
    const handlePaster = (0,react.useCallback)((text)=>{
        if (!setAll) return;
        const words = parserPastingAllMnemonic(text);
        if (!words) return;
        setAll(words.map((x)=>x[0]
        ));
    }, [
        setAll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        children: puzzleWords.map((word, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                    sx: {
                        width: '100%',
                        userSelect: 'none'
                    },
                    placeholder: i + 1 + '.',
                    value: word,
                    InputProps: {
                        disableUnderline: true
                    },
                    disabled: indexes && !indexes.includes(i),
                    onChange: (e)=>{
                        const text = e.target.value;
                        if (e.nativeEvent.inputType === 'insertFromPaste' && parserPastingAllMnemonic(text)) {
                            return;
                        }
                        onChange(text, indexes ? indexes.indexOf(i) : i);
                    }
                })
            }, i)
        )
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/MnemonicReveal.tsx



const WordCard = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>`
    padding: ${theme.spacing(1)};
    border-radius: 6px;
    color: ${theme.palette.mode === 'dark' ? entry/* MaskColorVar.textPrimary */.ZN.textPrimary : entry/* MaskColorVar.textLink */.ZN.textLink};
    font-size: 14;
    background-color: ${entry/* MaskColorVar.blue.alpha */.ZN.blue.alpha(0.1)};
    display: flex;
    justify-content: center;
    align-items: center;
`
);
function MnemonicReveal(props) {
    const { words , indexed , wordClass  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        children: words.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(WordCard, {
                    className: wordClass,
                    children: [
                        indexed ? `${index + 1}. ` : '',
                        item
                    ]
                })
            }, index)
        )
    });
}

;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/index.tsx




/***/ }),

/***/ 93223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useMnemonicWordsPuzzle)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17299);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64452);
/* harmony import */ var _mask_src_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84797);
/**
 * TODO: use @packages/plugin-wallet instead
 */ 



// How many fields should be filled by the user?
const PUZZLE_SIZE = 5;
// The total count of mnemonic words.
const TOTAL_SIZE = 12;
function useMnemonicWordsPuzzle() {
    const [answerWords, setAnswerWords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { value: words = [] , loading: wordsLoading , retry: wordsRetry ,  } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>_mask_src_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.createMnemonicWords */ .V.createMnemonicWords()
    , []);
    // #region generate some mask indexes randomly which should be filled by the user
    const [seed, setSeed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const indexes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,lodash_unified__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(Array.from({
            length: TOTAL_SIZE
        }).fill(seed).map((_, i)=>i
        )).slice(0, PUZZLE_SIZE)
    , [
        seed,
        words
    ]);
    // #endregion
    // #region a serial of words and the user gonna complete those empty ones
    const puzzleWords = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const words_ = words.slice(0);
        for(let i = 0; i < indexes.length; i += 1)words_[indexes[i]] = answerWords[i] ?? '';
        return words_;
    }, [
        answerWords,
        indexes,
        words
    ]);
    // #endregion
    const answerCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((word, index)=>{
        setAnswerWords((x)=>{
            const words_ = x.slice(0);
            words_[index] = word;
            return words_;
        });
    }, [
        answerWords
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setAnswerWords([]);
        setSeed((x)=>(x + 1) % 3
        );
    }, []);
    const refreshCallback = wordsRetry;
    return {
        words,
        puzzleWords,
        indexes,
        answerCallback,
        resetCallback,
        refreshCallback
    };
}


/***/ }),

/***/ 93703:
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(80579);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../icons/general/Refresh.tsx
var Refresh = __webpack_require__(29339);
// EXTERNAL MODULE: ../icons/general/Info.tsx
var Info = __webpack_require__(76520);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(13020);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../dashboard/src/components/Mnemonic/index.tsx + 2 modules
var Mnemonic = __webpack_require__(20525);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(30397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(17282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(61098);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(3328);
// EXTERNAL MODULE: ../icons/general/Copy.tsx
var Copy = __webpack_require__(44215);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(90869);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0_react@18.0.0/node_modules/react-router/index.js
var react_router = __webpack_require__(10459);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
;// CONCATENATED MODULE: ../dashboard/src/pages/CreateMaskWallet/components/VerifyMnemonicDialog/index.tsx












const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        dialogTitle: {
            backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff'
        },
        container: {
            padding: '40px 60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff'
        },
        title: {
            fontSize: 24,
            lineHeight: 1.25
        },
        confirm: {
            marginTop: 24
        },
        tips: {
            marginTop: 40,
            color: entry/* MaskColorVar.redMain */.ZN.redMain,
            fontSize: 18,
            lineHeight: '24px',
            alignSelf: 'flex-start'
        },
        button: {
            height: 48,
            borderRadius: 24,
            fontSize: 18,
            marginTop: 24
        },
        addressTitle: {
            color: entry/* MaskColorVar.normalText */.ZN.normalText,
            fontSize: 14,
            lineHeight: '20px'
        },
        address: {
            display: 'flex',
            alignItems: 'center',
            marginTop: 12,
            fontSize: 14,
            lineHeight: '20px'
        },
        copy: {
            fontSize: 20,
            marginLeft: 12,
            cursor: 'pointer',
            stroke: entry/* MaskColorVar.textPrimary */.ZN.textPrimary
        }
    })
);
const SuccessTitle = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>({
        fontSize: theme.typography.h5.fontSize,
        color: theme.palette.success.main,
        fontWeight: theme.typography.fontWeightMedium,
        margin: theme.spacing(2, 0)
    })
);
const VerifyMnemonicDialog = /*#__PURE__*/ (0,react.memo)(({ matched , open , onClose , puzzleWords , indexes , onUpdateAnswerWords , onSubmit , loading , address: address1  })=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const copyWalletAddress = (0,src/* useSnackbarCallback */.iD)({
        executor: async (address)=>copyToClipboard(address)
        ,
        deps: [],
        successText: t.wallets_address_copied()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyMnemonicDialogUI, {
        matched: matched,
        open: open,
        onClose: onClose,
        puzzleWords: puzzleWords,
        indexes: indexes,
        onUpdateAnswerWords: onUpdateAnswerWords,
        onSubmit: onSubmit,
        loading: loading,
        address: address1,
        onCopy: copyWalletAddress,
        onDoneClick: ()=>navigate(shared_base_src/* DashboardRoutes.Wallets */.vq.Wallets)
    });
});
const VerifyMnemonicDialogUI = /*#__PURE__*/ (0,react.memo)(({ matched , open , onClose , puzzleWords , indexes , onUpdateAnswerWords , onSubmit , loading , address , onCopy , onDoneClick ,  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = useStyles();
    const [verified, setVerified] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.Z, {
        open: open,
        onClose: !address ? onClose : undefined,
        maxWidth: "md",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.Z, {
                className: classes.dialogTitle,
                children: t.wallets_create_wallet_verification()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                style: {
                    padding: 0
                },
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
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
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
                            !matched && verified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.tips,
                                children: t.create_wallet_mnemonic_word_not_match()
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                                variant: "contained",
                                loading: loading,
                                fullWidth: true,
                                className: classes.button,
                                onClick: ()=>{
                                    if (!verified) setVerified(true);
                                    if (matched) onSubmit();
                                },
                                children: t.verify()
                            })
                        ]
                    })
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(30688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.0.0+react@18.0.0/node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(44111);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(62490);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var Wallet_src = __webpack_require__(19841);
// EXTERNAL MODULE: ../dashboard/src/hooks/useMnemonicWordsPuzzle.ts
var useMnemonicWordsPuzzle = __webpack_require__(93223);
;// CONCATENATED MODULE: ../dashboard/src/pages/CreateMaskWallet/components/CreateMnemonic/index.tsx















// Private key at m/purpose'/coin_type'/account'/change
const HD_PATH_WITHOUT_INDEX_ETHEREUM = "m/44'/60'/0'/0";
const CreateMnemonic_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
            color: entry/* MaskColorVar.linkText */.ZN.linkText
        },
        words: {
            marginTop: 24,
            backgroundColor: entry/* MaskColorVar.bottom */.ZN.bottom,
            padding: 30,
            width: '100%',
            borderRadius: 8
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
        cancelButton: {
            height: 48,
            borderRadius: 24,
            fontSize: 18,
            background: theme.palette.mode === 'dark' ? '#1A1D20' : '#F7F9FA'
        },
        alert: {
            marginTop: 24,
            padding: 24,
            backgroundColor: entry/* MaskColorVar.errorBackground */.ZN.errorBackground,
            color: entry/* MaskColorVar.redMain */.ZN.redMain
        }
    })
);
const CreateMnemonic = /*#__PURE__*/ (0,react.memo)(()=>{
    const location = (0,react_router/* useLocation */.TH)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [open, setOpen] = (0,react.useState)(false);
    const { words , puzzleWords , indexes , answerCallback , resetCallback , refreshCallback  } = (0,useMnemonicWordsPuzzle/* useMnemonicWordsPuzzle */.h)();
    const [searchParams] = (0,react_router_dom/* useSearchParams */.lr)();
    const { value: hasPassword , loading , retry  } = (0,useAsyncRetry/* default */.Z)(API/* PluginServices.Wallet.hasPassword */.NG.Wallet.hasPassword, []);
    (0,react.useEffect)(()=>{
        Wallet_src/* WalletMessages.events.walletLockStatusUpdated.on */.R$.events.walletLockStatusUpdated.on(retry);
    }, [
        retry
    ]);
    const onVerifyClick = (0,react.useCallback)(()=>{
        setOpen(true);
    }, []);
    const [walletState, onSubmit] = (0,useAsyncFn/* default */.Z)(async ()=>{
        const name = new URLSearchParams(location.search).get('name');
        const password = location.state?.password;
        // if the name doesn't exist, navigate to form page
        if (!name) {
            resetCallback();
            navigate(shared_base_src/* DashboardRoutes.CreateMaskWalletForm */.vq.CreateMaskWalletForm);
            return;
        }
        if (!hasPassword) {
            await API/* PluginServices.Wallet.setPassword */.NG.Wallet.setPassword(password);
        }
        const address_ = await API/* PluginServices.Wallet.recoverWalletFromMnemonic */.NG.Wallet.recoverWalletFromMnemonic(name, words.join(' '), `${HD_PATH_WITHOUT_INDEX_ETHEREUM}/0`);
        await API/* PluginServices.Wallet.updateMaskAccount */.NG.Wallet.updateMaskAccount({
            account: address_
        });
        const account = await API/* Services.Settings.getSelectedWalletAddress */.K9.Settings.getSelectedWalletAddress();
        if (!account) {
            await API/* PluginServices.Wallet.updateAccount */.NG.Wallet.updateAccount({
                account: address_,
                providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
            });
            const chainId = searchParams.get('chainId');
            if (chainId) {
                await API/* PluginServices.Wallet.selectAccount */.NG.Wallet.selectAccount([
                    address_
                ], Number(chainId));
            }
        }
        return address_;
    }, [
        location.search,
        words,
        resetCallback,
        hasPassword,
        searchParams
    ]);
    const onClose = (0,react.useCallback)(()=>{
        refreshCallback();
        resetCallback();
        setOpen(false);
    }, [
        refreshCallback,
        resetCallback
    ]);
    (0,react.useEffect)(()=>{
        if (!location.state?.password && !hasPassword && !loading) navigate(-1);
    }, [
        location.state,
        hasPassword,
        loading
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                onClose: onClose,
                onSubmit: onSubmit,
                loading: walletState.loading,
                address: walletState.value
            })
        ]
    });
});
const CreateMnemonicUI = /*#__PURE__*/ (0,react.memo)(({ words , onRefreshWords , onVerifyClick  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = CreateMnemonic_useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [open, setOpen] = (0,react.useState)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {}),
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
                        className: classes.cancelButton,
                        onClick: ()=>navigate(-1)
                        ,
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
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info/* InfoIcon */.s, {}),
                severity: "error",
                onClose: ()=>setOpen(false)
                ,
                className: classes.alert,
                children: t.create_wallet_mnemonic_tip()
            }) : null
        ]
    });
});
/* harmony default export */ const components_CreateMnemonic = (CreateMnemonic);


/***/ }),

/***/ 44215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CopyIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


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

/***/ 76520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ InfoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const InfoIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Info', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.2",
            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V11Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z",
            fill: "currentColor"
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 29339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const RefreshIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Refresh', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.433 7.174l.975.683a.5.5 0 01-.13.884L5.89 9.858a.5.5 0 01-.657-.461L5.136 5.84a.5.5 0 01.787-.423l.806.564A8 8 0 114 12h2.001a6 6 0 102.433-4.826z",
        fill: "#1C68F3"
    })
}), '0 0 24 24');


/***/ }),

/***/ 3328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SuccessIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


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