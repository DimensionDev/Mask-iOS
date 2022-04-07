"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4013],{

/***/ 88233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 41529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FA": () => (/* binding */ useMyIdentities),
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity),
/* harmony export */   "fb": () => (/* binding */ useCurrentVisitingIdentity),
/* harmony export */   "hg": () => (/* binding */ useFriendsList)
/* harmony export */ });
/* unused harmony export CurrentIdentitySubscription */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98193);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61751);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85848);






function useFriendsList() {
    const ref = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.friends */ .EJ.friends);
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
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useCurrentVisitingIdentity() {
    var ref;
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.currentVisitingIdentityProvider */ .LM.collecting.currentVisitingIdentityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useMyIdentities() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles */ .EJ.profiles);
}
function useCurrentIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_4__.useSubscription)(CurrentIdentitySubscription);
}
const CurrentIdentitySubscription = {
    getCurrentValue () {
        var ref;
        const all = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles.value */ .EJ.profiles.value;
        const current = (((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_).value.identifier;
        return all.find((i)=>i.identifier.toText() === current.toText()
        ) || all[0];
    },
    subscribe (sub) {
        var ref;
        const a = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles.addListener */ .EJ.profiles.addListener(sub);
        const b = (ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized.addListener(sub);
        return ()=>{
            return [
                a(),
                b === null || b === void 0 ? void 0 : b()
            ];
        };
    }
};


/***/ }),

/***/ 51758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30592);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40158);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50585);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18287);




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
    const [value, setValue] = state !== null && state !== void 0 ? state : [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length && !scrollable ? {
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
                    indicatorColor: "primary",
                    textColor: "primary",
                    variant: scrollable ? 'scrollable' : 'fullWidth',
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    scrollButtons: scrollable,
                    allowScrollButtonsMobile: scrollable,
                    onChange: (_, newValue)=>{
                        return setValue === null || setValue === void 0 ? void 0 : setValue(newValue);
                    },
                    children: tabs.map((tab, i)=>{
                        var ref;
                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
                        }, i);
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

/***/ 57464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(90171);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(99537);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(72212);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(68681);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(24218);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(18082);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(87409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var dist = __webpack_require__(98193);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(41457);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(15193);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx




function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx









const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogContent: {
            overscrollBehavior: 'contain'
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogCloseButton: {
            color: theme.palette.text.primary
        },
        paper: {
            ...snsId === shared_base_src/* EnhanceableSite.Minds */.Jk.Minds || snsId === shared_base_src/* EnhanceableSite.Facebook */.Jk.Facebook ? {
                width: 'auto',
                backgroundImage: 'none'
            } : {}
        }
    })
);
function InjectedDialog(props) {
    var ref, ref1, ref2;
    const overwrite = social_network/* activatedSocialNetworkUI.customization.componentOverwrite */.LM.customization.componentOverwrite || {};
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,src/* useStylesExtends */.Bc)(useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    }), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , disableTitleBorder , ...rest } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,src/* useDialogStackActor */.tE)(open);
    return (0,utils/* usePortalShadowRoot */.ad)((container)=>{
        /*#__PURE__*/ return (0,jsx_runtime.jsx)(IncreaseStack, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
                container: container,
                fullScreen: fullScreen,
                classes: dialogClasses,
                scroll: "paper",
                fullWidth: true,
                maxWidth: "sm",
                disableAutoFocus: true,
                disableEnforceFocus: true,
                onClose: (event, reason)=>{
                    if (reason === 'backdropClick' && disableBackdropClick) return;
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                },
                onBackdropClick: disableBackdropClick ? void 0 : onClose,
                BackdropProps: {
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...rest,
                ...extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* ErrorBoundary */.SV, {
                    children: [
                        title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            className: "dashboard-dialog-title-hook",
                            classes: {
                                root: dialogTitle
                            },
                            style: {
                                border: isDashboard || disableTitleBorder ? 'none' : undefined,
                                fontSize: isDashboard ? 24 : undefined
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "large",
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t('post_dialog__dismiss_aria'),
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIconUI, {
                                        style: shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        });
    });
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>{
        return (child === null || child === void 0 ? void 0 : child.type) === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,src/* mergeClasses */.ze)(extraClasses, child.props.classes)
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 63521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ./src/plugins/Polls/base.ts
var base = __webpack_require__(69038);
// EXTERNAL MODULE: ./src/plugins/Polls/constants.ts
var constants = __webpack_require__(74440);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(65631);
;// CONCATENATED MODULE: ./src/plugins/Polls/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"question":{"type":"string","title":"question"},"key":{"type":"string","title":"key"},"start_time":{"type":"number","title":"start_time"},"end_time":{"type":"number","title":"end_time"},"options":{"type":"array","title":"options"},"results":{"type":"array","title":"results"},"sender":{"type":"string","title":"sender"},"id":{"type":"string","title":"id"}},"required":["question","key","start_time","end_time","options","results","sender","id"]}');
;// CONCATENATED MODULE: ./src/plugins/Polls/helpers.ts



const PollMetadataReader = (0,typed_message_base/* createTypedMessageMetadataReader */.Bi)(constants/* PLUGIN_META_KEY */.um, schema_namespaceObject);
const renderWithPollMetadata = (0,typed_message_base/* createRenderWithMetadata */.mC)(PollMetadataReader);
if (false) {}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Select/Select.js + 3 modules
var Select = __webpack_require__(5630);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(56561);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(14561);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(15672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(87409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(11784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(4983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(83634);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(68681);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(6107);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/add/index.js
var add = __webpack_require__(80146);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(51758);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(22234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(66552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isValid/index.js + 1 modules
var isValid = __webpack_require__(32526);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/formatDistance/index.js + 2 modules
var formatDistance = __webpack_require__(58550);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/en-US/index.js + 5 modules
var en_US = __webpack_require__(14235);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/ja/index.js + 5 modules
var ja = __webpack_require__(3976);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/zh-TW/index.js + 5 modules
var zh_TW = __webpack_require__(92998);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/zh-CN/index.js + 6 modules
var zh_CN = __webpack_require__(92120);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/locale/ko/index.js + 5 modules
var ko = __webpack_require__(10916);
;// CONCATENATED MODULE: ./src/plugins/Polls/types.ts
var PollStatus;
(function(PollStatus) {
    PollStatus["Inactive"] = "Inactive";
    PollStatus["Voted"] = "Voted";
    PollStatus["Voting"] = "Voting";
    PollStatus["Closed"] = "Closed";
})(PollStatus || (PollStatus = {}));

// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(48476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ./src/plugins/Polls/SNSAdaptor/Polls.tsx










const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        card: {
            borderRadius: theme.spacing(1),
            margin: theme.spacing(2, 0),
            padding: theme.spacing(2)
        },
        line: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        status: {
            display: 'flex',
            alignItems: 'center'
        },
        statusText: {
            margin: '3px',
            fontSize: '13px',
            color: theme.palette.primary.main
        },
        option: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            margin: theme.spacing(1, 0),
            padding: theme.spacing(0, 1),
            height: '28px'
        },
        bar: {
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: 100,
            backgroundColor: theme.palette.primary.main,
            opacity: 0.6,
            minWidth: theme.spacing(1),
            height: '28px',
            borderRadius: theme.spacing(0.8)
        },
        text: {
            zIndex: 101,
            lineHeight: '28px',
            margin: '0 4px'
        },
        deadline: {
            color: '#657786'
        }
    })
);
function PollCardUI(props) {
    const { poll , onClick , vote , status: status1  } = props;
    const { classes  } = useStyles();
    const isClosed = Date.now() > poll.end_time;
    const { t  } = (0,utils/* useI18N */.M1)();
    const lang = (0,utils/* useLanguage */.ZK)();
    const totalVotes = poll.results.reduce((accumulator, currentValue)=>accumulator + currentValue
    );
    const getDeadline = (date)=>{
        const deadline = new Date(date);
        if ((0,isValid/* default */.Z)(deadline)) {
            const localeMapping = ()=>{
                if (lang === public_api_src/* SupportedLanguages.enUS */.iu.enUS) return en_US/* default */.Z;
                if (lang === public_api_src/* SupportedLanguages.jaJP */.iu.jaJP) return ja/* default */.Z;
                if (lang === public_api_src/* SupportedLanguages.zhTW */.iu.zhTW) return zh_TW/* default */.Z;
                if (lang === public_api_src/* SupportedLanguages.zhCN */.iu.zhCN) return zh_CN/* default */.Z;
                if (lang === public_api_src/* SupportedLanguages.koKR */.iu.koKR) return ko/* default */.Z;
                (0,esm/* safeUnreachable */.P)(lang);
                return en_US/* default */.Z;
            };
            const time = (0,formatDistance/* default */.Z)(poll.start_time, poll.end_time, {
                locale: localeMapping()
            });
            return t('plugin_poll_deadline', {
                time
            });
        } else {
            return t('plugin_poll_length_unknown');
        }
    };
    const renderPollStatusI18n = (status)=>{
        switch(status){
            case PollStatus.Voting:
                return t('plugin_poll_status_voting');
            case PollStatus.Voted:
                return t('plugin_poll_status_voted');
            default:
                return t('plugin_poll_status_closed');
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.card,
        onClick: ()=>{
            return onClick === null || onClick === void 0 ? void 0 : onClick();
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                variant: "h5",
                className: classes.line,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            fontSize: '16px'
                        },
                        children: poll.question
                    }),
                    !status1 || status1 === PollStatus.Inactive ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.status,
                        children: [
                            status1 === PollStatus.Voting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                size: 18
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.statusText,
                                children: renderPollStatusI18n(status1)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                children: poll.options.map((option, index)=>{
                    /*#__PURE__*/ return (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        className: classes.option,
                        onClick: ()=>{
                            vote === null || vote === void 0 ? void 0 : vote(poll, index);
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    display: 'flex'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.bar,
                                        style: {
                                            width: `${poll.results[index] / totalVotes * 100}%`
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.text,
                                        children: option
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.text,
                                children: poll.results[index]
                            })
                        ]
                    }, index);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                classes: {
                    root: classes.deadline
                },
                children: isClosed ? t('plugin_poll_status_closed') : getDeadline(poll.end_time)
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
// EXTERNAL MODULE: ./src/plugins/Polls/messages.ts
var messages = __webpack_require__(89597);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(63151);
;// CONCATENATED MODULE: ./src/plugins/Polls/SNSAdaptor/PollsDialog.tsx














const useNewPollStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        menuPaper: {
            height: 200
        },
        line: {
            display: 'flex',
            margin: theme.spacing(1)
        },
        item: {
            flex: 1,
            margin: theme.spacing(1)
        },
        pollWrap: {
            border: '1px solid #ccd6dd',
            borderRadius: '10px',
            margin: theme.spacing(1),
            padding: theme.spacing(1)
        },
        optionsWrap: {
            position: 'relative',
            '& >div': {
                width: '80%',
                margin: theme.spacing(2)
            }
        },
        addButton: {
            position: 'absolute',
            bottom: '0',
            right: '10px'
        },
        loading: {
            position: 'absolute',
            left: '50%',
            top: '50%'
        },
        whiteColor: {
            color: '#fff'
        }
    })
);
function NewPollUI(props) {
    const classes = (0,src/* useStylesExtends */.Bc)(useNewPollStyles(), props);
    const [loading, setLoading] = props.loading;
    const [question, setQuestion] = (0,react.useState)('');
    const [options1, setOptions] = (0,react.useState)([
        '',
        ''
    ]);
    const [days, setDays] = (0,react.useState)(1);
    const [hours, setHours] = (0,react.useState)(0);
    const [minutes, setMinutes] = (0,react.useState)(0);
    const { t  } = (0,utils/* useI18N */.M1)();
    const handleOptionsInput = (index, value)=>{
        setOptions(options1.map((option, i)=>i === index ? value : option
        ));
    };
    const addNewOption = ()=>{
        setOptions(options1.concat([
            ''
        ]));
    };
    const sendPoll = async ()=>{
        const start_time = new Date();
        const end_time = (0,add/* default */.Z)(start_time, {
            days,
            hours,
            minutes
        });
        setLoading(true);
        messages/* PluginPollRPC.createNewPoll */.p.createNewPoll({
            question,
            options: options1,
            start_time,
            end_time,
            sender: props.senderName,
            id: props.senderFingerprint
        }).then((res)=>{
            setLoading(false);
            props.switchToCreateNewPoll();
        });
    };
    // react hooks are not bound with the function identity but hooks order
    const useSelect = (count, fn, defaultIndex = 0)=>{
        const options = Array.from({
            length: count
        }).fill('');
        return (0,src/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.Z, {
                variant: "standard",
                MenuProps: {
                    container,
                    anchorOrigin: {
                        horizontal: 'left',
                        vertical: 'bottom'
                    },
                    classes: {
                        paper: classes.menuPaper
                    }
                },
                value: defaultIndex,
                onChange: (e)=>fn(e.target.value)
                ,
                children: options.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                        value: index,
                        children: index
                    }, index)
                )
            })
        );
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                variant: "standard",
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    label: t('plugin_poll_question_hint'),
                    variant: "filled",
                    onChange: (e)=>{
                        var ref;
                        setQuestion((ref = e.target) === null || ref === void 0 ? void 0 : ref.value);
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.pollWrap,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.optionsWrap,
                        children: [
                            options1.map((option, index)=>{
                                /*#__PURE__*/ return (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                                    variant: "standard",
                                    className: classes.line,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                        label: `${t('plugin_poll_options_hint')}${index + 1}`,
                                        variant: "filled",
                                        onChange: (e)=>{
                                            var ref;
                                            handleOptionsInput(index, (ref = e.target) === null || ref === void 0 ? void 0 : ref.value);
                                        }
                                    })
                                }, index);
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                size: "large",
                                onClick: addNewOption,
                                classes: {
                                    root: classes.addButton
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {
                                    color: "primary"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                        light: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        className: classes.line,
                        children: t('plugin_poll_length')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.line,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                variant: "filled",
                                className: classes.item,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                        children: t('plugin_poll_length_days')
                                    }),
                                    useSelect(8, setDays, days)
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                variant: "filled",
                                className: classes.item,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                        children: t('plugin_poll_length_hours')
                                    }),
                                    useSelect(25, setHours, hours)
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                variant: "filled",
                                className: classes.item,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                        children: t('plugin_poll_length_minutes')
                                    }),
                                    useSelect(61, setMinutes, minutes)
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.line,
                style: {
                    justifyContent: 'flex-end'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    color: "primary",
                    variant: "contained",
                    startIcon: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                        classes: {
                            root: classes.whiteColor
                        },
                        size: 24
                    }) : null,
                    style: {
                        color: '#fff'
                    },
                    onClick: sendPoll,
                    children: t('plugin_poll_send_poll')
                })
            })
        ]
    }));
}
function ExistingPollsUI(props) {
    const [polls1, setPolls] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(false);
    const classes = (0,src/* useStylesExtends */.Bc)(useNewPollStyles(), props);
    (0,react.useEffect)(()=>{
        setLoading(true);
        messages/* PluginPollRPC.getAllExistingPolls */.p.getAllExistingPolls().then((polls)=>{
            setLoading(false);
            const myPolls = [];
            polls.map((poll)=>{
                if (poll.id === props.senderFingerprint) {
                    myPolls.push(poll);
                }
            });
            setPolls(myPolls.reverse());
        });
    }, [
        props.senderFingerprint
    ]);
    const insertPoll = (poll)=>{
        props.onSelectExistingPoll(poll);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.wrapper,
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: 35,
            classes: {
                root: classes.loading
            }
        }) : polls1.map((p)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PollCardUI, {
                onClick: ()=>insertPoll(p)
                ,
                poll: p
            }, p.key)
        )
    }));
}
function PollsDialog(props) {
    var ref, ref1, ref2, ref3;
    const state = (0,react.useState)(0);
    const [, setTabState] = state;
    const loading = (0,react.useState)(false);
    const { t  } = (0,utils/* useI18N */.M1)();
    const { attachMetadata , dropMetadata  } = (0,plugin_infra_src/* useCompositionContext */.Cp)();
    const createNewPoll = ()=>{
        setTabState(1);
    };
    const insertPoll = (data)=>{
        if (data) attachMetadata(constants/* PLUGIN_META_KEY */.um, data);
        else dropMetadata(constants/* PLUGIN_META_KEY */.um);
        props.onClose();
    };
    const senderName = (ref = (0,useActivatedUI/* useCurrentIdentity */.Ud)()) === null || ref === void 0 ? void 0 : (ref1 = ref.linkedPersona) === null || ref1 === void 0 ? void 0 : ref1.nickname;
    const senderFingerprint = (ref2 = (0,useActivatedUI/* useCurrentIdentity */.Ud)()) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.linkedPersona) === null || ref3 === void 0 ? void 0 : ref3.fingerprint;
    const tabProps = {
        tabs: [
            {
                label: t('plugin_poll_create_new'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NewPollUI, {
                    ...props,
                    loading: loading,
                    switchToCreateNewPoll: createNewPoll,
                    senderName: senderName,
                    senderFingerprint: senderFingerprint
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: t('plugin_poll_select_existing'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExistingPollsUI, {
                    ...props,
                    onSelectExistingPoll: insertPoll,
                    senderFingerprint: senderFingerprint
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: props.open,
        onClose: props.onClose,
        title: t('plugin_poll_display_name'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                height: 450,
                ...tabProps
            })
        })
    }));
};

;// CONCATENATED MODULE: ./src/plugins/Polls/SNSAdaptor/PollsInPost.tsx







function PollsInPost(props) {
    const [status, setStatus] = (0,react.useState)(PollStatus.Inactive);
    const [updatedPoll, setUpdatedPoll] = (0,react.useState)(undefined);
    const vote = (poll, index)=>{
        if (Date.now() <= poll.end_time) {
            setStatus(PollStatus.Voting);
            messages/* PluginPollRPC.vote */.p.vote({
                poll,
                index
            }).then((res)=>{
                setStatus(PollStatus.Voted);
                setUpdatedPoll(res);
            });
        } else {
            setStatus(PollStatus.Closed);
        }
    };
    (0,react.useEffect)(()=>{
        const metadata = PollMetadataReader(props.message.meta);
        if (metadata.ok) {
            const key = metadata.val.key;
            messages/* PluginPollRPC.getPollByKey */.p.getPollByKey({
                key
            }).then((res)=>{
                setUpdatedPoll(res);
            });
        }
    }, [
        props.message.meta
    ]);
    return renderWithPollMetadata(props.message.meta, (r)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(C, {
            poll: updatedPoll !== null && updatedPoll !== void 0 ? updatedPoll : r,
            vote: vote,
            status: status
        }));
    });
};
const C = (props)=>{
    (0,plugin_infra_src/* usePluginWrapper */.fI)(true, {
        width: 400
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PollCardUI, {
            ...props
        })
    }));
};

;// CONCATENATED MODULE: ./src/plugins/Polls/SNSAdaptor/index.tsx






const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Comp(props) {
        const metadata = PollMetadataReader(props.message.meta);
        if (!metadata.ok) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PollsInPost, {
            ...props
        }));
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* PLUGIN_META_KEY */.um,
            (meta)=>`a poll of '${meta.question}' from ${meta.sender}`
        ], 
    ]),
    CompositionDialogEntry: {
        label: '\u{1F5F3}\uFE0F Poll',
        dialog: PollsDialog
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 89597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ PluginPollRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74440);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63151);


const PollMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginPollRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(3693), __webpack_require__.e(5237)]).then(__webpack_require__.bind(__webpack_require__, 35237))
, PollMessage.rpc, true);


/***/ })

}]);