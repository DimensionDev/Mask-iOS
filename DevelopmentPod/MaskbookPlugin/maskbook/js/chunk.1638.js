(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1638],{

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

/***/ 49357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ PinIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const PinIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('PinIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M16.5 2.75v1.833h-.917v5.5l1.834 2.75v1.834h-5.5v6.416h-1.834v-6.416h-5.5v-1.834l1.834-2.75v-5.5H5.5V2.75h11ZM8.25 4.583v6.056l-1.463 2.194h8.426L13.75 10.64V4.583h-5.5Z"
    })
}), '0 0 22 22');


/***/ }),

/***/ 35088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ VerifiedIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const VerifiedIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('VerifiedIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            clipPath: "url(#a)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M15.782 5.912V3.851l-1.79-1.033-1.028-1.785h-2.061L9.113 0 7.33 1.033H5.268L4.234 2.818 2.444 3.85v2.061L1.418 7.697 2.45 9.48v2.061l1.79 1.029 1.033 1.789h2.061l1.784 1.028 1.79-1.028h2.056l1.028-1.79 1.79-1.028V9.481l1.028-1.784-1.028-1.785Z",
                    fill: "#60DFAB"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.549 5.85a.5.5 0 0 1 0 .708L7.97 11.135a.5.5 0 0 1-.707 0l-2.14-2.14a.5.5 0 0 1 .707-.707l1.786 1.786 4.224-4.223a.5.5 0 0 1 .708 0Z",
                    fill: "#fff"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "a",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fill: "#fff",
                    transform: "translate(.75)",
                    d: "M0 0h16v16H0z"
                })
            })
        })
    ]
}), '0 0 16 16');


/***/ }),

/***/ 68836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hg": () => (/* binding */ useFriendsList),
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "fb": () => (/* binding */ useCurrentVisitingIdentity),
/* harmony export */   "FA": () => (/* binding */ useMyIdentities),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity)
/* harmony export */ });
/* unused harmony export CurrentIdentitySubscription */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21949);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87470);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29980);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79092);






function useFriendsList() {
    const ref = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__.globalUIState.friends);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[
            ...ref.values()
        ]
    , [
        ref
    ]);
}
const default_ = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__.ValueRef({
    identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier.unknown */ .WO.unknown
});
function useLastRecognizedIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__.activatedSocialNetworkUI.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useCurrentVisitingIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__.activatedSocialNetworkUI.collecting.currentVisitingIdentityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useMyIdentities() {
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__.globalUIState.profiles);
}
function useCurrentIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_4__.useSubscription)(CurrentIdentitySubscription);
}
const CurrentIdentitySubscription = {
    getCurrentValue () {
        var ref;
        const all = _social_network__WEBPACK_IMPORTED_MODULE_3__.globalUIState.profiles.value;
        const current = (((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__.activatedSocialNetworkUI.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_).value.identifier;
        return all.find((i)=>i.identifier.toText() === current.toText()
        ) || all[0];
    },
    subscribe (sub) {
        var ref;
        const a = _social_network__WEBPACK_IMPORTED_MODULE_3__.globalUIState.profiles.addListener(sub);
        const b = (ref = _social_network__WEBPACK_IMPORTED_MODULE_3__.activatedSocialNetworkUI.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized.addListener(sub);
        return ()=>{
            return [
                a(),
                b === null || b === void 0 ? void 0 : b()
            ];
        };
    }
};


/***/ }),

/***/ 24957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ SetupGuideStep),
/* harmony export */   "o": () => (/* binding */ SetupGuide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95273);
}
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50266);
}
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60822);
}
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98174);
}
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(40675);
}
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(51464);
}
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(18906);
}
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14767);
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(39419);
}
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9228);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21949);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76108);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29980);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87050);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87470);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8267);
/* harmony import */ var _DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68836);
/* harmony import */ var _resources_MaskIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8231);
if (1711 != __webpack_require__.j) {
	/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14910);
}
if (1711 != __webpack_require__.j) {
	/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(32637);
}
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_icons_material_Extension__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8561);
}
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_13__);
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35088);
}
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49357);
}



















var SetupGuideStep;
(function(SetupGuideStep) {
    SetupGuideStep["FindUsername"] = 'find-username';
    SetupGuideStep["PinExtension"] = 'pin-extension';
    SetupGuideStep["Close"] = 'close';
})(SetupGuideStep || (SetupGuideStep = {}));
// #region wizard dialog
const useWizardDialogStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            padding: theme.spacing(3),
            position: 'relative',
            boxShadow: theme.palette.mode === 'dark' ? 'none' : theme.shadows[4],
            border: `${theme.palette.mode === 'dark' ? 'solid' : 'none'} 1px ${theme.palette.divider}`,
            borderRadius: 20,
            [theme.breakpoints.down('sm')]: {
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
            width: 480,
            '&.small': {
                width: 384
            },
            overflow: 'hidden'
        },
        button: {
            width: 150,
            height: 40,
            minHeight: 40,
            marginLeft: 0,
            marginTop: 0,
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            },
            fontSize: 14,
            wordBreak: 'keep-all',
            '&,&:hover': {
                color: `${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.twitterButtonText */ .ZN.twitterButtonText} !important`,
                background: `${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.twitterButton */ .ZN.twitterButton} !important`
            }
        },
        close: {
            color: theme.palette.text.primary,
            position: 'absolute',
            right: 10,
            top: 10
        },
        tip: {
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '22px',
            paddingTop: 16
        },
        label: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '22px'
        },
        header: {
            height: 40
        },
        content: {},
        connection: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        connectItem: {
            flex: 1,
            height: 75,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        line: {
            width: 100,
            height: 1,
            borderTop: `dashed 1px  ${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.borderSecondary */ .ZN.borderSecondary}`
        },
        name: {
            fontSize: 16,
            fontWeight: 500
        },
        footer: {}
    })
);
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        content: {
            marginBottom: theme.spacing(2)
        },
        footer: {
            marginLeft: 0,
            marginTop: theme.spacing(3),
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        tip: {}
    })
);
function ContentUI(props) {
    const { classes  } = useStyles();
    switch(props.dialogType){
        case SetupGuideStep.FindUsername:
        case SetupGuideStep.PinExtension:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                        className: classes.content,
                        children: props.content
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: props.tip
                    }),
                    props.footer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer", {
                        className: classes.footer,
                        children: props.footer
                    }) : null,
                    props.dismiss ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: props.dismiss
                    }) : null
                ]
            }));
        default:
            return null;
    }
}
function WizardDialog(props) {
    const { small , title , dialogType , content , tip , footer , dismiss , onClose  } = props;
    const { classes  } = useWizardDialogStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(classes.root, small ? 'small' : ''),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", {
                className: classes.header,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    color: "textPrimary",
                    variant: "h3",
                    fontSize: 24,
                    children: title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContentUI, {
                dialogType: dialogType,
                content: content,
                tip: tip,
                footer: footer,
                dismiss: dismiss
            }),
            onClose ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                className: classes.close,
                size: "medium",
                onClick: onClose,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    cursor: "pointer"
                })
            }) : null
        ]
    }));
}
// #endregion
// #region find username
const useFindUsernameStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        avatar: {
            display: 'block',
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: `solid 1px ${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.border */ .ZN.border}`,
            '&.connected': {
                borderColor: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.success */ .ZN.success
            }
        },
        verified: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            fontSize: 16,
            color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.success */ .ZN.success
        }
    })
);
function FindUsername({ personaName , username , avatar , onConnect , onDone , onClose  }) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { classes  } = useWizardDialogStyles();
    const { classes: findUsernameClasses  } = useFindUsernameStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WizardDialog, {
        dialogType: SetupGuideStep.FindUsername,
        small: !username,
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            className: classes.connection,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    className: classes.connectItem,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskIcon__WEBPACK_IMPORTED_MODULE_11__/* .MaskIcon */ .ec, {
                            size: 48
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            variant: "body2",
                            className: classes.name,
                            children: personaName
                        })
                    ]
                }),
                username ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            className: classes.line
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            className: classes.connectItem,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    position: "relative",
                                    width: 48,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                            src: avatar,
                                            className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(findUsernameClasses.avatar, connected ? 'connected' : '')
                                        }),
                                        connected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_19__/* .VerifiedIcon */ .S, {
                                            className: findUsernameClasses.verified
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    className: classes.name,
                                    children: username
                                })
                            ]
                        })
                    ]
                }) : null
            ]
        }),
        tip: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            className: classes.tip,
            variant: "body2",
            dangerouslySetInnerHTML: {
                __html: !username ? t('setup_guide_login') : connected ? t('user_guide_tip_connected') : t('setup_guide_find_username_text')
            }
        }),
        footer: username ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__/* .ActionButtonPromise */ .Zc, {
            className: classes.button,
            variant: "contained",
            init: t('setup_guide_connect_auto'),
            waiting: t('connecting'),
            complete: t('ok'),
            failed: t('setup_guide_connect_failed'),
            executor: onConnect,
            completeOnClick: onDone,
            onComplete: ()=>setConnected(true)
            ,
            disabled: !username || !personaName,
            completeIcon: null,
            failIcon: null,
            failedOnClick: "use executor",
            "data-testid": "confirm_button",
            children: t('confirm')
        }) : null,
        onClose: onClose
    }));
}
function PinExtension({ onDone  }) {
    const pinImg = new URL(/* asset import */ __webpack_require__(5850), __webpack_require__.b).toString();
    const { classes  } = useWizardDialogStyles();
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WizardDialog, {
        dialogType: SetupGuideStep.PinExtension,
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            className: classes.connection,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    className: classes.connectItem,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskIcon__WEBPACK_IMPORTED_MODULE_11__/* .MaskIcon */ .ec, {
                            size: 48
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            variant: "body2",
                            className: classes.name,
                            children: "Mask Network"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    className: classes.line
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    className: classes.connectItem,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                        src: pinImg,
                        width: 100,
                        style: {
                            filter: 'drop-shadow(0px 0px 16px rgba(101, 119, 134, 0.2))'
                        }
                    })
                })
            ]
        }),
        tip: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            className: classes.tip,
            component: "div",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    children: t('setup_guide_pin_tip_0')
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                    style: {
                        paddingLeft: '24px'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                t('setup_guide_pin_tip_1'),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Extension__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                    sx: {
                                        fontSize: 16,
                                        color: '#ababab'
                                    }
                                }),
                                t('setup_guide_pin_tip_1_s')
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                t('setup_guide_pin_tip_2'),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_21__/* .PinIcon */ .q, {
                                    sx: {
                                        fontSize: 16
                                    }
                                }),
                                t('setup_guide_pin_tip_2_s')
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            children: t('setup_guide_pin_tip_3')
                        })
                    ]
                })
            ]
        }),
        footer: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            className: classes.button,
            variant: "contained",
            onClick: onDone,
            children: t('start')
        }),
        dismiss: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            classes: {
                label: classes.label
            },
            control: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                checked: checked,
                onChange: (e)=>{
                    setChecked(e.target.checked);
                    _settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .dismissPinExtensionTip.value */ .g4.value = e.target.checked;
                }
            }),
            label: t('setup_guide_pin_dismiss')
        }),
        onClose: onDone
    }));
}
function SetupGuideUI(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const { persona  } = props;
    const ui = _social_network__WEBPACK_IMPORTED_MODULE_6__.activatedSocialNetworkUI;
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)();
    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(SetupGuideStep.FindUsername);
    // #region parse setup status
    const lastStateRef = _settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .currentSetupGuideStatus */ .AI[ui.networkIdentifier];
    const lastState_ = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(lastStateRef);
    const lastState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        try {
            return JSON.parse(lastState_);
        } catch  {
            return {};
        }
    }, [
        lastState_
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var _status;
        setStep((_status = lastState.status) !== null && _status !== void 0 ? _status : SetupGuideStep.Close);
    }, [
        lastState
    ]);
    // #endregion
    // #region setup username
    const lastRecognized = (0,_DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_10__/* .useLastRecognizedIdentity */ .FB)();
    const getUsername = ()=>lastState.username || (lastRecognized.identifier.isUnknown ? '' : lastRecognized.identifier.userId)
    ;
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getUsername);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref1;
        const handler = (val)=>{
            if (username === '' && !val.identifier.isUnknown) setUsername(val.identifier.userId);
        };
        (ref1 = _social_network__WEBPACK_IMPORTED_MODULE_6__.activatedSocialNetworkUI.collecting.identityProvider) === null || ref1 === void 0 ? void 0 : ref1.recognized.addListener(handler);
        return ()=>{
            var ref;
            (ref = _social_network__WEBPACK_IMPORTED_MODULE_6__.activatedSocialNetworkUI.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized.removeListener(handler);
        };
    }, [
        username
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (username || ui.networkIdentifier !== 'twitter.com') return;
        // In order to collect user info after login, need to reload twitter once
        let reloaded = false;
        const handler = ()=>{
            // twitter will redirect to home page after login
            if (!(!reloaded && location.pathname === '/home')) return;
            reloaded = true;
            location.reload();
        };
        window.addEventListener('locationchange', handler);
        return ()=>{
            window.removeEventListener('locationchange', handler);
        };
    }, [
        username
    ]);
    // #endregion
    const { value: persona_  } = (0,react_use__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z)(async ()=>{
        return _extension_service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .Identifier.fromString */ .xb.fromString(persona.toText(), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .ECKeyIdentifier */ .ob).unwrap());
    }, [
        persona
    ]);
    const onConnect = async ()=>{
        // attach persona with SNS profile
        await _extension_service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Identity.attachProfile */ .ZP.Identity.attachProfile(new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .ProfileIdentifier */ .WO(ui.networkIdentifier, username), persona, {
            connectionConfirmState: 'confirmed'
        });
        // auto-finish the setup process
        if (!(persona_ === null || persona_ === void 0 ? void 0 : persona_.hasPrivateKey)) throw new Error('invalid persona');
        await _extension_service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Identity.setupPersona */ .ZP.Identity.setupPersona(persona_ === null || persona_ === void 0 ? void 0 : persona_.identifier);
        _utils__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages.events.ownPersonaChanged.sendToAll */ .ql.events.ownPersonaChanged.sendToAll(undefined);
    };
    const onClose = ()=>{
        _settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .currentSetupGuideStatus */ .AI[ui.networkIdentifier].value = '';
        setStep(SetupGuideStep.Close);
    };
    const onDone = ()=>{
        // check pin tip status
        if (step === SetupGuideStep.FindUsername && !_settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .dismissPinExtensionTip.value */ .g4.value) {
            _settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .currentSetupGuideStatus */ .AI[ui.networkIdentifier].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_13___default()({
                status: SetupGuideStep.PinExtension
            });
            return setStep(SetupGuideStep.PinExtension);
        }
        // check user guide status
        const network = ui.networkIdentifier;
        if (network === 'twitter.com' && _settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .userGuideStatus */ .Ct[network].value !== 'completed') {
            _settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .userGuideStatus */ .Ct[network].value = '1';
        } else {
            onCreate();
        }
        onClose();
    };
    const onCreate = async ()=>{
        var ref, ref2;
        let content = t('setup_guide_say_hello_content');
        if (ui.networkIdentifier === 'twitter.com') {
            content += t('setup_guide_say_hello_follow', {
                account: '@realMaskNetwork'
            });
        } else if (ui.networkIdentifier === 'facebook.com') {
            content += t('setup_guide_say_hello_follow', {
                account: '@masknetwork'
            });
        }
        (ref = ui.automation.maskCompositionDialog) === null || ref === void 0 ? void 0 : (ref2 = ref.open) === null || ref2 === void 0 ? void 0 : ref2.call(ref, (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .makeTypedMessageText */ .P)(content), {
            target: 'Everyone'
        });
    };
    switch(step){
        case SetupGuideStep.FindUsername:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FindUsername, {
                personaName: persona_ === null || persona_ === void 0 ? void 0 : persona_.nickname,
                username: username,
                avatar: lastRecognized.avatar,
                onUsernameChange: setUsername,
                onConnect: onConnect,
                onDone: onDone,
                onClose: onClose
            }));
        case SetupGuideStep.PinExtension:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PinExtension, {
                onDone: onDone
            }));
        default:
            return null;
    }
}
// #endregion
// #region setup guide
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
} // #endregion


/***/ }),

/***/ 8231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$i": () => (/* binding */ MaskTextIcon),
/* harmony export */   "ec": () => (/* binding */ MaskIcon),
/* harmony export */   "$T": () => (/* binding */ MaskIconOutlined),
/* harmony export */   "LT": () => (/* binding */ MaskSharpIcon),
/* harmony export */   "Vh": () => (/* binding */ MaskSharpIconOfSize),
/* harmony export */   "x7": () => (/* binding */ MaskFilledIcon)
/* harmony export */ });
/* unused harmony export WalletSharp */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5617);
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28527);
}

/**
 * This icon should be sync with https://mask.io/img/MB--CircleCanvas--WhiteOverBlue.svg
 */ 
const MaskSmileFaceSVG = ({ size =24  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 600 600",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "300",
                cy: "300",
                r: "300",
                fill: "#1C68F3"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fill: "#fff",
                d: "m480 200h-360v-44c0-19.882 16.118-36 36-36h288c19.882 0 36 16.118 36 36v44zm0 30v100h-60-231-21.912c13.661 60.677 67.878 106 132.68 106 53.575 0 99.914-30.978 122.08-76h58.144v84c0 19.882-16.118 36-36 36h-288c-19.882 0-36-16.118-36-36v-214h360zm-267.78 130l175.11 5e-6c-19.092 27.914-51.184 46.232-87.555 46.232s-68.463-18.318-87.555-46.232zm-44.65-58h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48zm154 0h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48z"
            })
        ]
    })
;
const MaskSmileFaceSharpSVG = ({ size =19  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8 0H34.2C36.2987 0 38 1.70132 38 3.8V34.2C38 36.2987 36.2987 38 34.2 38H3.8C1.70132 38 0 36.2987 0 34.2V3.8C0 1.70132 1.70132 0 3.8 0ZM35.0939 21.6824V12.7412H2.90569V31.8753C2.90569 33.653 4.34681 35.0941 6.12451 35.0941H31.8751C33.6528 35.0941 35.0939 33.653 35.0939 31.8753V24.3648L29.8951 24.3649C27.9129 28.3903 23.7696 31.16 18.9795 31.16C13.1854 31.16 8.3378 27.1076 7.11632 21.6825L8.2704 21.6825V21.6824H35.0939ZM18.9795 28.4984C22.2314 28.4984 25.1008 26.8606 26.8078 24.3649H11.1511C12.8581 26.8606 15.7275 28.4984 18.9795 28.4984ZM7.15874 19.1789C7.50581 16.7524 9.59263 14.8871 12.1151 14.8871C14.6376 14.8871 16.7244 16.7524 17.0715 19.1789L14.3277 19.1789C14.026 18.245 13.1494 17.5694 12.1151 17.5694C11.0808 17.5694 10.2042 18.245 9.9025 19.1789L7.15874 19.1789ZM20.9282 19.1789C21.2752 16.7524 23.362 14.8871 25.8845 14.8871C28.407 14.8871 30.4938 16.7524 30.8409 19.1789L28.0971 19.1789C27.7954 18.245 26.9189 17.5694 25.8845 17.5694C24.8502 17.5694 23.9736 18.245 23.6719 19.1789L20.9282 19.1789ZM35.0939 6.12473C35.0939 4.34702 33.6528 2.90591 31.8751 2.90591H6.12451C4.34681 2.90591 2.90569 4.34702 2.90569 6.12473V10.0588H35.0939V6.12473Z"
        })
    })
;
const WalletSharpSVG = ({ size  })=>/*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-alert-circle",
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ _jsx("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "14"
            }),
            /*#__PURE__*/ _jsx("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            })
        ]
    })
;
const MaskFilledSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z",
            fill: "#0F1419"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.8466 9.8044V14.1215H7.68749L7.12132 14.1216C7.72056 16.7411 10.0987 18.6977 12.9412 18.6977C15.2911 18.6977 17.3237 17.3604 18.2961 15.4168L20.8466 15.4167V19.0431C20.8466 19.9014 20.1396 20.5973 19.2675 20.5973H6.63476C5.76265 20.5973 5.05566 19.9014 5.05566 19.0431V9.8044H20.8466ZM16.7816 15.4168C15.9442 16.6218 14.5365 17.4126 12.9412 17.4126C11.3458 17.4126 9.93816 16.6218 9.10072 15.4168H16.7816ZM9.57363 10.8405C8.33615 10.8405 7.3124 11.7411 7.14213 12.9128L8.48817 12.9128C8.63617 12.4618 9.0662 12.1357 9.57363 12.1357C10.0811 12.1357 10.5111 12.4618 10.6591 12.9128L12.0051 12.9128C11.8349 11.7411 10.8111 10.8405 9.57363 10.8405ZM16.3287 10.8405C15.0912 10.8405 14.0674 11.7411 13.8972 12.9128L15.2432 12.9128C15.3912 12.4618 15.8212 12.1357 16.3287 12.1357C16.8361 12.1357 17.2661 12.4618 17.4141 12.9128L18.7601 12.9128C18.5899 11.7411 17.5661 10.8405 16.3287 10.8405ZM19.2675 5.05554C20.1396 5.05554 20.8466 5.75137 20.8466 6.60971V8.50926H5.05566V6.60971C5.05566 5.75137 5.76265 5.05554 6.63476 5.05554H19.2675Z",
            fill: "white"
        })
    ]
});
const MaskSmileFaceOutlinedSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 42 42",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            stroke: "#fff",
            strokeWidth: "3",
            d: "M39.55 21a18.55 18.55 0 11-37.1 0 18.55 18.55 0 0137.1 0z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M32.45 16.55v6.36H12.54a8.66 8.66 0 0016.21 1.9h3.7v5.35a2.3 2.3 0 01-2.29 2.3H11.84a2.3 2.3 0 01-2.3-2.3V16.55h22.91zm-5.9 8.27a6.74 6.74 0 01-11.14 0h11.15zM16.1 18.07a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm9.8 0a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm4.26-8.52a2.3 2.3 0 012.3 2.29v2.8H9.54v-2.8a2.3 2.3 0 012.29-2.3h18.32z",
            clipRule: "evenodd"
        })
    ]
});
const MaskTextSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 80 20",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m18.902 25.67h1.82v18.33h-3.744v-10.14l-5.668 7.956-5.694-7.956v10.14h-3.718v-18.33h1.82l7.592 10.504zm15.912 4.212h3.614v14.118h-3.614v-1.04c-1.17.78-2.574 1.248-4.134 1.248-4.42 0-7.02-3.562-7.02-7.306 0-3.77 2.6-7.306 7.02-7.306 1.482 0 2.938.468 4.134 1.17zm0 9.88v-5.668c-.884-.754-2.132-1.222-3.484-1.222-2.574 0-4.186 1.924-4.186 4.03 0 2.132 1.638 4.056 4.186 4.056 1.378 0 2.6-.442 3.484-1.196zm6.084 3.094 1.352-2.678c1.742.754 3.068 1.144 4.836 1.144 1.664 0 2.314-.624 2.314-1.352 0-.806-.806-1.17-2.99-1.638-3.042-.676-5.252-1.664-5.252-4.394 0-2.548 2.106-4.316 5.382-4.316 2.21 0 3.978.52 5.512 1.144l-1.196 2.652c-1.378-.52-2.99-.91-4.394-.91-1.378 0-2.08.494-2.08 1.248 0 .78.858 1.144 3.12 1.612 3.276.676 5.174 1.82 5.174 4.394 0 2.678-2.054 4.446-5.668 4.446-2.444 0-4.03-.338-6.11-1.352zm23.062-7.462 5.226 8.606h-4.004l-3.614-5.772-2.73 2.626v3.146h-3.614v-19.604h3.614v11.544l6.032-6.058h4.238z",
        fill: "currentColor",
        transform: "translate(0 -24)"
    })
});
function MaskTextIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: MaskTextSVG
    }));
}
function MaskIcon(props) {
    const { size =24  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        ...props,
        viewBox: `0 0 ${size} ${size}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSVG, {
            size: props.size
        })
    }));
}
function MaskIconOutlined(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: MaskSmileFaceOutlinedSVG
    }));
}
function MaskSharpIcon(props) {
    const { size =17 , color  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        color: color,
        viewBox: "0 0 38 38",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8 0H34.2C36.2987 0 38 1.70132 38 3.8V34.2C38 36.2987 36.2987 38 34.2 38H3.8C1.70132 38 0 36.2987 0 34.2V3.8C0 1.70132 1.70132 0 3.8 0ZM35.0939 21.6824V12.7412H2.90569V31.8753C2.90569 33.653 4.34681 35.0941 6.12451 35.0941H31.8751C33.6528 35.0941 35.0939 33.653 35.0939 31.8753V24.3648L29.8951 24.3649C27.9129 28.3903 23.7696 31.16 18.9795 31.16C13.1854 31.16 8.3378 27.1076 7.11632 21.6825L8.2704 21.6825V21.6824H35.0939ZM18.9795 28.4984C22.2314 28.4984 25.1008 26.8606 26.8078 24.3649H11.1511C12.8581 26.8606 15.7275 28.4984 18.9795 28.4984ZM7.15874 19.1789C7.50581 16.7524 9.59263 14.8871 12.1151 14.8871C14.6376 14.8871 16.7244 16.7524 17.0715 19.1789L14.3277 19.1789C14.026 18.245 13.1494 17.5694 12.1151 17.5694C11.0808 17.5694 10.2042 18.245 9.9025 19.1789L7.15874 19.1789ZM20.9282 19.1789C21.2752 16.7524 23.362 14.8871 25.8845 14.8871C28.407 14.8871 30.4938 16.7524 30.8409 19.1789L28.0971 19.1789C27.7954 18.245 26.9189 17.5694 25.8845 17.5694C24.8502 17.5694 23.9736 18.245 23.6719 19.1789L20.9282 19.1789ZM35.0939 6.12473C35.0939 4.34702 33.6528 2.90591 31.8751 2.90591H6.12451C4.34681 2.90591 2.90569 4.34702 2.90569 6.12473V10.0588H35.0939V6.12473Z"
        })
    }));
}
function MaskSharpIconOfSize(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSharpSVG, {
            size: props.size
        })
    }));
}
function WalletSharp(props) {
    const { size =20  } = props;
    return(/*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ _jsx(WalletSharpSVG, {
            size: size
        })
    }));
}
function MaskFilledIcon(props) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const icon = new URL(/* asset import */ __webpack_require__(33265), __webpack_require__.b).toString();
    const icon_dark = new URL(/* asset import */ __webpack_require__(1164), __webpack_require__.b).toString();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: theme.palette.mode === 'light' ? icon : icon_dark,
        style: {
            width: props.size,
            height: props.size
        }
    }));
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


/***/ }),

/***/ 5850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c2f272344e8d26b14517.png";

/***/ }),

/***/ 33265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b68c952c4aa8ca96564a.png";

/***/ }),

/***/ 1164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c3a84345cc92a169d393.png";

/***/ })

}]);