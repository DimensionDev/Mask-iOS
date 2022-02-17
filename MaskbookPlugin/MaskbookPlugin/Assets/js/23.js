(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1330],{

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

/***/ 93569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hg": () => (/* binding */ useFriendsList),
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "FA": () => (/* binding */ useMyIdentities),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71299);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45513);





function useFriendsList() {
    const ref = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_social_network__WEBPACK_IMPORTED_MODULE_3__.globalUIState.friends);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            ...ref.values()
        ]
    , [
        ref
    ]);
}
const default_ = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.ValueRef({
    identifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier.unknown
});
function useLastRecognizedIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__.activatedSocialNetworkUI.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.lastRecognized) || default_);
}
function useMyIdentities() {
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_social_network__WEBPACK_IMPORTED_MODULE_3__.globalUIState.profiles);
}
function useCurrentIdentity(noDefault) {
    const all = useMyIdentities();
    const current = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentSelectedIdentity */ .G[_social_network__WEBPACK_IMPORTED_MODULE_3__.activatedSocialNetworkUI.networkIdentifier]);
    return all.find((i)=>i.identifier.toText() === current
    ) || (noDefault ? null : all[0]);
}


/***/ }),

/***/ 317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ SetupGuideStep),
/* harmony export */   "o": () => (/* binding */ SetupGuide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(30699);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77504);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(76900);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71629);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87872);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88460);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(49283);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(52259);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(22593);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(97448);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(55312);
}
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(27513);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_icons_AlternateEmail__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(27566);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11042);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_icons_ArrowBackIosOutlined__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(86935);
}
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83071);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80050);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37186);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45513);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71299);
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29573);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25830);
/* harmony import */ var _DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93569);
/* harmony import */ var _protocols_typed_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65570);





















var SetupGuideStep;
(function(SetupGuideStep1) {
    SetupGuideStep1["FindUsername"] = 'find-username';
    SetupGuideStep1["SayHelloWorld"] = 'say-hello-world';
})(SetupGuideStep || (SetupGuideStep = {
}));
//#region wizard dialog
const wizardTheme = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .extendsTheme */ .Ql)((theme)=>({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    input: {
                        paddingTop: 10.5,
                        paddingBottom: 10.5
                    },
                    multiline: {
                        paddingTop: 10.5,
                        paddingBottom: 10.5
                    }
                }
            },
            MuiTextField: {
                defaultProps: {
                    fullWidth: true,
                    variant: 'outlined',
                    margin: 'normal'
                },
                styleOverrides: {
                    root: {
                        marginTop: theme.spacing(2),
                        marginBottom: 0,
                        '&:first-child': {
                            marginTop: 0
                        }
                    }
                }
            },
            MuiButton: {
                defaultProps: {
                    size: 'medium'
                },
                styleOverrides: {
                    root: {
                        '&[hidden]': {
                            visibility: 'hidden'
                        }
                    },
                    text: {
                        height: 28,
                        lineHeight: 1,
                        paddingTop: 0,
                        paddingBottom: 0
                    }
                }
            }
        }
    })
);
const useWizardDialogStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            padding: '56px 20px 48px',
            position: 'relative',
            boxShadow: theme.palette.mode === 'dark' ? 'none' : theme.shadows[4],
            border: `${theme.palette.mode === 'dark' ? 'solid' : 'none'} 1px ${theme.palette.divider}`,
            borderRadius: 12,
            [theme.breakpoints.down('sm')]: {
                padding: '35px 20px 16px',
                position: 'fixed',
                bottom: 0,
                left: 0,
                margin: 0,
                alignSelf: 'center',
                borderRadius: 0,
                boxShadow: 'none',
                border: `solid 1px ${theme.palette.divider}`,
                width: '100%'
            },
            userSelect: 'none',
            boxSizing: 'border-box',
            width: 320,
            overflow: 'hidden'
        },
        button: {
            width: 200,
            height: 40,
            marginLeft: 0,
            marginTop: 0,
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                height: '45px !important',
                marginTop: 20,
                borderRadius: 0
            },
            fontSize: 16,
            wordBreak: 'keep-all'
        },
        back: {
            color: theme.palette.text.primary,
            position: 'absolute',
            left: 10,
            top: 10
        },
        close: {
            color: theme.palette.text.primary,
            position: 'absolute',
            right: 10,
            top: 10
        },
        primary: {
            fontSize: 30,
            fontWeight: 500,
            lineHeight: '37px'
        },
        secondary: {
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 1.75,
            marginTop: 2
        },
        sandbox: {
            marginTop: 16
        },
        tip: {
            fontSize: 16,
            lineHeight: 1.75,
            marginBottom: 24
        },
        textButton: {
            fontSize: 14,
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(-2)
        },
        header: {
            marginBottom: 0
        },
        content: {
        },
        footer: {
        },
        progress: {
            left: 0,
            right: 0,
            bottom: 0,
            height: 8,
            position: 'absolute'
        }
    })
);
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    root: {
        alignItems: 'center'
    },
    content: {
        marginRight: 16
    },
    footer: {
        marginLeft: 0,
        marginTop: 0,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    tip: {
    }
});
function ContentUI(props) {
    const { classes  } = useStyles();
    const xsMatch = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .useMatchXS */ .IN)();
    const onlyXS = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z)((theme)=>theme.breakpoints.only('xs')
    );
    switch(props.dialogType){
        case SetupGuideStep.FindUsername:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                sx: {
                    display: 'block'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                        sx: {
                            display: xsMatch ? 'flex' : 'block'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                                className: classes.content,
                                children: props.content
                            }),
                            onlyXS ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                children: props.tip
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer", {
                                className: classes.footer,
                                children: props.footer
                            })
                        ]
                    }),
                    !onlyXS ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: props.tip
                    }) : null
                ]
            }));
        case SetupGuideStep.SayHelloWorld:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                        className: classes.content,
                        children: props.content
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: props.tip
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer", {
                        className: classes.footer,
                        children: props.footer
                    })
                ]
            }));
        default:
            return null;
    }
}
function WizardDialog(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .useI18N */ .M1)();
    const { title , dialogType , optional =false , completion , status , content , tip , footer , onBack , onClose  } = props;
    const { classes  } = useWizardDialogStyles();
    const onlyXS = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z)((theme)=>theme.breakpoints.only('xs')
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
        theme: wizardTheme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
            theme: (theme)=>{
                const getSecondaryColor = ()=>{
                    switch(status){
                        case true:
                            return theme.palette.success;
                        case false:
                            return theme.palette.error;
                        default:
                            return theme.palette.warning;
                    }
                };
                return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z)({
                    ...theme,
                    palette: {
                        ...theme.palette,
                        secondary: getSecondaryColor()
                    }
                });
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                variant: "h1",
                                children: title
                            }),
                            optional ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
                                className: classes.secondary,
                                color: "textSecondary",
                                variant: "body2",
                                children: t('setup_guide_optional')
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContentUI, {
                        dialogType: dialogType,
                        content: content,
                        tip: tip,
                        footer: footer
                    }),
                    onlyXS ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
                        className: classes.progress,
                        color: "secondary",
                        variant: "determinate",
                        value: completion
                    }) : null,
                    onBack ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, {
                        className: classes.back,
                        size: "small",
                        onClick: onBack,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_ArrowBackIosOutlined__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
                            cursor: "pointer"
                        })
                    }) : null,
                    onClose ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, {
                        className: classes.close,
                        size: "small",
                        onClick: onClose,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, {
                            cursor: "pointer"
                        })
                    }) : null
                ]
            })
        })
    }));
}
//#endregion
//#region find username
const useFindUsernameStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        input: {
            marginTop: '45px !important',
            marginBottom: 24
        },
        inputFocus: {
            '& svg': {
                color: theme.palette.primary.main
            }
        },
        button: {
            marginLeft: theme.spacing(1)
        },
        icon: {
            color: 'inherit'
        }
    })
);
function FindUsername({ username , onConnect , onDone , onClose , onUsernameChange =lodash_es__WEBPACK_IMPORTED_MODULE_6__.noop  }) {
    var ref;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .useI18N */ .M1)();
    const ui = _social_network__WEBPACK_IMPORTED_MODULE_9__.activatedSocialNetworkUI;
    const gotoProfilePageImpl = (ref = ui.automation.redirect) === null || ref === void 0 ? void 0 : ref.profilePage;
    const { classes  } = useWizardDialogStyles();
    const { classes: findUsernameClasses  } = useFindUsernameStyles();
    const onKeyDown = (e)=>{
        e.stopPropagation();
        if (e.key !== 'Enter') return;
        e.preventDefault();
        onConnect();
    };
    const xsOnly = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z)((theme)=>theme.breakpoints.only('xs')
    );
    const onJump = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((ev)=>{
        ev.preventDefault();
        gotoProfilePageImpl === null || gotoProfilePageImpl === void 0 ? void 0 : gotoProfilePageImpl(new _database_type__WEBPACK_IMPORTED_MODULE_11__/* .ProfileIdentifier */ .WO(ui.networkIdentifier, username));
    }, [
        gotoProfilePageImpl,
        ui.networkIdentifier,
        username
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WizardDialog, {
        completion: 33.33,
        dialogType: SetupGuideStep.FindUsername,
        status: "undetermined",
        title: t('setup_guide_find_username_title'),
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                className: findUsernameClasses.input,
                sx: {
                    display: 'flex',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* .default */ .Z, {
                        label: t('username'),
                        value: username,
                        InputProps: {
                            classes: {
                                focused: findUsernameClasses.inputFocus
                            },
                            startAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, {
                                position: "start",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_AlternateEmail__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z, {
                                    className: findUsernameClasses.icon
                                })
                            })
                        },
                        onChange: (e)=>onUsernameChange(e.target.value)
                        ,
                        onKeyDown: onKeyDown,
                        inputProps: {
                            'data-testid': 'username_input'
                        }
                    }),
                    gotoProfilePageImpl && xsOnly ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, {
                        size: "large",
                        className: findUsernameClasses.button,
                        color: username ? 'primary' : 'default',
                        disabled: !username,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z, {
                            className: findUsernameClasses.icon,
                            cursor: "pinter",
                            onClick: onJump
                        })
                    }) : null
                ]
            })
        }),
        tip: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
            className: classes.tip,
            variant: "body2",
            dangerouslySetInnerHTML: {
                __html: t('setup_guide_find_username_text')
            }
        }),
        footer: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* .ActionButtonPromise */ .Zc, {
            className: classes.button,
            variant: "contained",
            init: t('setup_guide_connect_auto'),
            waiting: t('connecting'),
            complete: t('done'),
            failed: t('setup_guide_connect_failed'),
            executor: onConnect,
            completeOnClick: onDone,
            disabled: !username,
            completeIcon: null,
            failIcon: null,
            failedOnClick: "use executor",
            "data-testid": "confirm_button",
            children: t('confirm')
        }),
        onClose: onClose
    }));
}
//#endregion
//#region say hello world
const useSayHelloWorldStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        primary: {
            marginTop: 24,
            marginBottom: 16
        },
        secondary: {
            color: theme.palette.text.secondary,
            fontSize: 14
        }
    })
);
function SayHelloWorld({ createStatus , onCreate , onSkip , onBack , onClose  }) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .useI18N */ .M1)();
    const { classes  } = useWizardDialogStyles();
    const { classes: sayHelloWorldClasses  } = useSayHelloWorldStyles();
    const xsOnly = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z)((theme)=>theme.breakpoints.only('xs')
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WizardDialog, {
        completion: 100,
        dialogType: SetupGuideStep.SayHelloWorld,
        status: createStatus,
        optional: true,
        title: t('setup_guide_say_hello_title'),
        tip: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.tip, sayHelloWorldClasses.primary),
                    variant: "body2",
                    children: t('setup_guide_say_hello_primary')
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.tip, sayHelloWorldClasses.secondary),
                    variant: "body2",
                    children: t('setup_guide_say_hello_secondary')
                })
            ]
        }),
        footer: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* .ActionButtonPromise */ .Zc, {
                    className: classes.button,
                    variant: "contained",
                    init: t('setup_guide_create_post_auto'),
                    waiting: t('creating'),
                    complete: t('done'),
                    failed: t('setup_guide_create_post_failed'),
                    executor: onCreate,
                    completeOnClick: onSkip,
                    completeIcon: null,
                    failIcon: null,
                    failedOnClick: "use executor",
                    "data-testid": "create_button"
                }),
                xsOnly ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* .default */ .ZP, {
                    className: classes.textButton,
                    color: "inherit",
                    variant: "text",
                    onClick: onSkip,
                    "data-testid": "skip_button",
                    children: t('skip')
                }) : null
            ]
        }),
        onBack: onBack,
        onClose: onClose
    }));
}
function SetupGuideUI(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .useI18N */ .M1)();
    const { persona  } = props;
    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(SetupGuideStep.FindUsername);
    const ui = _social_network__WEBPACK_IMPORTED_MODULE_9__.activatedSocialNetworkUI;
    //#region parse setup status
    const lastStateRef = _settings_settings__WEBPACK_IMPORTED_MODULE_10__/* .currentSetupGuideStatus */ .AI[ui.networkIdentifier];
    const lastState_ = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_7__.useValueRef)(lastStateRef);
    const lastState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        try {
            return JSON.parse(lastState_);
        } catch  {
            return {
            };
        }
    }, [
        lastState_
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!lastState.status) return;
        if (step === SetupGuideStep.FindUsername && lastState.username) setStep(lastState.status);
        else if (step === SetupGuideStep.SayHelloWorld && !lastState.username) setStep(SetupGuideStep.FindUsername);
    }, [
        step,
        setStep,
        lastState
    ]);
    //#endregion
    //#region setup username
    const lastRecognized = (0,_DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_13__/* .useLastRecognizedIdentity */ .FB)();
    const getUsername = ()=>lastState.username || (lastRecognized.identifier.isUnknown ? '' : lastRecognized.identifier.userId)
    ;
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getUsername);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref;
        return (ref = _social_network__WEBPACK_IMPORTED_MODULE_9__.activatedSocialNetworkUI.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.lastRecognized.addListener((val)=>{
            if (username === '' && !val.identifier.isUnknown) setUsername(val.identifier.userId);
        });
    }, [
        username
    ]);
    //#endregion
    //#region create post status
    const [createStatus, setCreateStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('undetermined');
    //#endregion
    const copyToClipboard = (0,react_use__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z)()[1];
    const onNext = async ()=>{
        switch(step){
            case SetupGuideStep.FindUsername:
                var ref;
                _settings_settings__WEBPACK_IMPORTED_MODULE_10__/* .currentSetupGuideStatus */ .AI[ui.networkIdentifier].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_4___default()({
                    status: SetupGuideStep.SayHelloWorld,
                    username,
                    persona: persona.toText()
                });
                if ((ref = _social_network__WEBPACK_IMPORTED_MODULE_9__.activatedSocialNetworkUI.configuration.setupWizard) === null || ref === void 0 ? void 0 : ref.disableSayHello) {
                    onConnect().then(onClose);
                } else {
                    var ref1, ref2;
                    (ref1 = ui.automation.redirect) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.newsFeed) === null || ref2 === void 0 ? void 0 : ref2.call(ref1);
                    setStep(SetupGuideStep.SayHelloWorld);
                }
                break;
            case SetupGuideStep.SayHelloWorld:
                onClose();
                break;
        }
    };
    const onBack = async ()=>{
        switch(step){
            case SetupGuideStep.SayHelloWorld:
                const username_ = getUsername();
                _settings_settings__WEBPACK_IMPORTED_MODULE_10__/* .currentSetupGuideStatus */ .AI[ui.networkIdentifier].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_4___default()({
                    status: SetupGuideStep.FindUsername,
                    username: '',
                    persona: persona.toText()
                });
                const connected = new _database_type__WEBPACK_IMPORTED_MODULE_11__/* .ProfileIdentifier */ .WO(ui.networkIdentifier, username_);
                await _extension_service__WEBPACK_IMPORTED_MODULE_12__/* .default.Identity.detachProfile */ .ZP.Identity.detachProfile(connected);
                setStep(SetupGuideStep.FindUsername);
                break;
        }
    };
    const onConnect = async ()=>{
        // attach persona with SNS profile
        await _extension_service__WEBPACK_IMPORTED_MODULE_12__/* .default.Identity.attachProfile */ .ZP.Identity.attachProfile(new _database_type__WEBPACK_IMPORTED_MODULE_11__/* .ProfileIdentifier */ .WO(ui.networkIdentifier, username), persona, {
            connectionConfirmState: 'confirmed'
        });
        // auto-finish the setup process
        const persona_ = await _extension_service__WEBPACK_IMPORTED_MODULE_12__/* .default.Identity.queryPersona */ .ZP.Identity.queryPersona(_database_type__WEBPACK_IMPORTED_MODULE_11__/* .Identifier.fromString */ .xb.fromString(persona.toText(), _database_type__WEBPACK_IMPORTED_MODULE_11__/* .ECKeyIdentifier */ .ob).unwrap());
        if (!persona_.hasPrivateKey) throw new Error('invalid persona');
        await _extension_service__WEBPACK_IMPORTED_MODULE_12__/* .default.Identity.setupPersona */ .ZP.Identity.setupPersona(persona_.identifier);
        _utils__WEBPACK_IMPORTED_MODULE_8__/* .MaskMessage.events.personaChanged.sendToAll */ .yV.events.personaChanged.sendToAll([
            {
                of: persona,
                owned: true,
                reason: 'new'
            }
        ]);
    };
    const onCreate = async ()=>{
        var ref3, ref4;
        const content = t('setup_guide_say_hello_content');
        copyToClipboard(content);
        (ref3 = ui.automation.maskCompositionDialog) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.open) === null || ref4 === void 0 ? void 0 : ref4.call(ref3, (0,_protocols_typed_message__WEBPACK_IMPORTED_MODULE_14__/* .makeTypedMessageText */ .P)(content), {
            target: 'Everyone'
        });
    };
    const onClose = ()=>{
        var ref5;
        _settings_settings__WEBPACK_IMPORTED_MODULE_10__/* .currentSetupGuideStatus */ .AI[ui.networkIdentifier].value = '';
        (ref5 = props.onClose) === null || ref5 === void 0 ? void 0 : ref5.call(props);
    };
    switch(step){
        case SetupGuideStep.FindUsername:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FindUsername, {
                username: username,
                onUsernameChange: setUsername,
                onConnect: onConnect,
                onDone: onNext,
                onBack: onBack,
                onClose: onClose
            }));
        case SetupGuideStep.SayHelloWorld:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SayHelloWorld, {
                createStatus: createStatus,
                onCreate: onCreate,
                onSkip: onNext,
                onBack: onBack,
                onClose: onClose
            }));
        default:
            return null;
    }
}
//#endregion
//#region setup guide
const useSetupGuideStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    root: {
        position: 'fixed',
        zIndex: 9999,
        maxWidth: 550,
        top: '2em',
        right: '2em'
    }
});
function SetupGuide(props) {
    const { classes  } = useSetupGuideStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SetupGuideUI, {
            ...props
        })
    }));
} //#endregion


/***/ }),

/***/ 65570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mC": () => (/* reexport */ metadata/* createRenderWithMetadata */.mC),
  "Bi": () => (/* reexport */ metadata/* createTypedMessageMetadataReader */.Bi),
  "r1": () => (/* reexport */ metadata/* editTypedMessageMeta */.r1),
  "Vc": () => (/* reexport */ src.extractTextFromTypedMessage),
  "vi": () => (/* reexport */ getRendererOfTypedMessage),
  "MH": () => (/* reexport */ getTypedMessageContent),
  "Jp": () => (/* reexport */ metadata/* isDataMatchJSONSchema */.Jp),
  "bj": () => (/* reexport */ src.isTypedMessageAnchor),
  "YN": () => (/* reexport */ src.isTypedMessageEmpty),
  "Rz": () => (/* reexport */ src.isTypedMessageText),
  "Jv": () => (/* reexport */ src.makeTypedMessageAnchor),
  "WM": () => (/* reexport */ src.makeTypedMessageEmpty),
  "as": () => (/* reexport */ src.makeTypedMessageImage),
  "Ng": () => (/* reexport */ src.makeTypedMessagePromise),
  "P": () => (/* reexport */ src.makeTypedMessageText),
  "Zw": () => (/* reexport */ src.makeTypedMessageTuple),
  "n_": () => (/* reexport */ src.makeTypedMessageTupleFromList),
  "fG": () => (/* reexport */ metadata/* metadataSchemaStoreReadonly */.fG),
  "vq": () => (/* reexport */ registerTypedMessageRenderer)
});

// UNUSED EXPORTS: editMetadata, isSerializableTypedMessage, isTypedMessageEqual, isTypedMessageImage, isTypedMessageImageV1, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownCoreTypedMessages, isWellKnownTypedMessages, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped

// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/protocols/typed-message/helpers.ts


// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
;// CONCATENATED MODULE: ./src/protocols/typed-message/types.ts


function getTypedMessageContent(message) {
    if ((0,src.isTypedMessageText)(message)) return message.content;
    if ((0,src.isTypedMessageAnchor)(message)) return message.href;
    return '';
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/render-registry.tsx
const registry = new Map();
// TODO: before metadata, after metadata, ...
function registerTypedMessageRenderer(matching, config) {
    const set = registry.get(matching) || new Set();
    // No overwrite in production
    if (false) {}
    set.add(config);
    registry.set(matching, set);
}
// TODO: add settings for "selected" renderer
function getRendererOfTypedMessage(message) {
    const list = [
        ...registry.get(message.type) || [],
        ...registry.get('*') || []
    ].sort((x, y)=>x.priority - y.priority
    );
    return list;
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/index.ts






/***/ }),

/***/ 49970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fG": () => (/* binding */ metadataSchemaStoreReadonly),
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "Jp": () => (/* binding */ isDataMatchJSONSchema),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata),
/* harmony export */   "r1": () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports registerMetadataSchema, readTypedMessageMetadataUntyped, editMetadata, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64614);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20391);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98723);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
const metadataSchemaStore = new Map();
const metadataSchemaStoreReadonly = (/* runtime-dependent pure expression or super */ !/^(1680|964)$/.test(__webpack_require__.j) ? (metadataSchemaStore) : null);
/**
 * Register your metadata with a JSON Schema so Mask can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key)
    ;
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (!meta.has(key)) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({
    });
    if (!validator.validate(data, jsonSchema)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(validator.getLastErrors());
    return ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.ok) return render(message.val);
        return null;
    };
}
function editMetadata(metadata, edit) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(metadata || new Map(), (e)=>void edit(e)
    );
}
function editTypedMessageMeta(typedMessage, edit) {
    const meta = editMetadata(typedMessage.meta, edit);
    return {
        ...typedMessage,
        meta: meta.size === 0 ? undefined : meta
    };
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.ok) return render(message.val);
    return null;
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