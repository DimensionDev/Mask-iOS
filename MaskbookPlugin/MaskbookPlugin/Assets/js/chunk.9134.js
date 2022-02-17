"use strict";
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9134.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9134],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3840],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.3840.js

/***/ 72981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PostDialogHint)
/* harmony export */ });
/* unused harmony export PostDialogHintUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22593);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37186);
/* harmony import */ var _DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93569);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80050);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71299);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45513);
/* harmony import */ var _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70205);
/* harmony import */ var _resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75388);











const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            // TODO: is it correct? (what about twitter?)
            padding: _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_8__/* .isMobileFacebook */ .q ? 0 : '8px'
        },
        text: {
            fontSize: 14,
            color: '#606770',
            marginLeft: theme.spacing(1)
        },
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '8px 10px',
            borderBottom: '1px solid #dadde1'
        }
    })
);
const EntryIconButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
        size: "large",
        className: classes.button,
        onClick: props.onHintButtonClicked,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_9__/* .MaskbookSharpIcon */ .ck, {
            color: "primary"
        })
    }));
});
const PostDialogHintUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PostDialogHintUI1({ onHintButtonClicked  }) {
    const { classes  } = useStyles();
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    return _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_8__/* .isMobileFacebook */ .q ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.wrapper,
        onClick: onHintButtonClicked,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EntryIconButton, {
                onHintButtonClicked: ()=>undefined
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes.text,
                children: t('post_modal_hint__button')
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EntryIconButton, {
        onHintButtonClicked: onHintButtonClicked
    });
});
function PostDialogHint(props) {
    const identities = (0,_DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_4__/* .useMyIdentities */ .FA)();
    const connecting = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_5__.useValueRef)(_settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[_social_network__WEBPACK_IMPORTED_MODULE_7__.activatedSocialNetworkUI.networkIdentifier]);
    if (connecting || identities.length === 0) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PostDialogHintUI, {
        onHintButtonClicked: ()=>{
        },
        ...props
    }));
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9134.js
/***/ 77603:
=======
/***/ 70988:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.3840.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(77504);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/useTheme.js
var useTheme = __webpack_require__(7931);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(82215);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogTitle/DialogTitle.js + 1 modules
var DialogTitle = __webpack_require__(20481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(11042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(18658);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(14840);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx






function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: (0,base/* isTwitter */.L3)(social_network.activatedSocialNetworkUI) ? 'primary' : 'inherit'
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {
    });
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogBackdropRoot: {
        }
    })
);
function InjectedDialog(props) {
    var ref, ref1, ref2;
    const overwrite = social_network.activatedSocialNetworkUI.customization.componentOverwrite || {
    };
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container , ...dialogClasses } = (0,shared_src.useStylesExtends)(useStyles(), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , ...rest } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack  } = (0,src/* useDialogStackConsumer */.N8)(open);
    return (0,utils/* usePortalShadowRoot */.ad)((container1)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
            container: container1,
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
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src.ErrorBoundary, {
                children: [
                    title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                        classes: {
                            root: dialogTitle
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
                                    style: shouldReplaceExitWithBack ? 'back' : titleBarIconStyle
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    }),
                    content,
                    actions
                ]
            })
        }));
    });
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>{
        return (child === null || child === void 0 ? void 0 : child.type) === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,shared_src.mergeClasses)(extraClasses, child.props.classes)
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 75388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vA": () => (/* binding */ MaskbookTextIcon),
/* harmony export */   "LX": () => (/* binding */ MaskbookIcon),
/* harmony export */   "A4": () => (/* binding */ MaskbookIconOutlined),
/* harmony export */   "ck": () => (/* binding */ MaskbookSharpIcon),
/* harmony export */   "J6": () => (/* binding */ MaskbookSharpIconOfSize),
/* harmony export */   "Z6": () => (/* binding */ WalletSharp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12445);

/**
 * This icon should be sync with https://mask.io/img/MB--CircleCanvas--WhiteOverBlue.svg
 */ 
const MaskbookSmileFaceSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 600 600",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
        fillRule: "evenodd",
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
});
const MaskbookSmileFaceSharpSVG = ({ size =20  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
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
const WalletSharpSVG = ({ size =20  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-alert-circle",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "14"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            })
        ]
    })
;
const MaskbookSmileFaceOutlinedSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
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
const MaskbookTextSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 80 20",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m18.902 25.67h1.82v18.33h-3.744v-10.14l-5.668 7.956-5.694-7.956v10.14h-3.718v-18.33h1.82l7.592 10.504zm15.912 4.212h3.614v14.118h-3.614v-1.04c-1.17.78-2.574 1.248-4.134 1.248-4.42 0-7.02-3.562-7.02-7.306 0-3.77 2.6-7.306 7.02-7.306 1.482 0 2.938.468 4.134 1.17zm0 9.88v-5.668c-.884-.754-2.132-1.222-3.484-1.222-2.574 0-4.186 1.924-4.186 4.03 0 2.132 1.638 4.056 4.186 4.056 1.378 0 2.6-.442 3.484-1.196zm6.084 3.094 1.352-2.678c1.742.754 3.068 1.144 4.836 1.144 1.664 0 2.314-.624 2.314-1.352 0-.806-.806-1.17-2.99-1.638-3.042-.676-5.252-1.664-5.252-4.394 0-2.548 2.106-4.316 5.382-4.316 2.21 0 3.978.52 5.512 1.144l-1.196 2.652c-1.378-.52-2.99-.91-4.394-.91-1.378 0-2.08.494-2.08 1.248 0 .78.858 1.144 3.12 1.612 3.276.676 5.174 1.82 5.174 4.394 0 2.678-2.054 4.446-5.668 4.446-2.444 0-4.03-.338-6.11-1.352zm23.062-7.462 5.226 8.606h-4.004l-3.614-5.772-2.73 2.626v3.146h-3.614v-19.604h3.614v11.544l6.032-6.058h4.238z",
        fill: "currentColor",
        transform: "translate(0 -24)"
    })
});
function MaskbookTextIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookTextSVG
    }));
}
function MaskbookIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookSmileFaceSVG
    }));
}
function MaskbookIconOutlined(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookSmileFaceOutlinedSVG
    }));
}
function MaskbookSharpIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        style: {
            transform: 'translate(2px, 1.5px)'
        },
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskbookSmileFaceSharpSVG, {
        })
    }));
}
function MaskbookSharpIconOfSize(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskbookSmileFaceSharpSVG, {
            size: props.size
        })
    }));
}
function WalletSharp(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WalletSharpSVG, {
            size: props.size
        })
    }));
}


/***/ }),

/***/ 76869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ facebookShared)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54061);
/* harmony import */ var _utils_parse_username__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52816);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80050);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37186);
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67561);





const getPostURL = (post)=>{
    if (post.identifier instanceof _masknet_shared__WEBPACK_IMPORTED_MODULE_2__.ProfileIdentifier) return new URL((0,_utils_parse_username__WEBPACK_IMPORTED_MODULE_1__/* .getPostUrlAtFacebook */ .tx)(post));
    return null;
};
const facebookShared = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .facebookBase */ .q,
    utils: {
        getHomePage: ()=>'https://www.facebook.com'
        ,
        isValidUsername: (v)=>!!(0,_utils_parse_username__WEBPACK_IMPORTED_MODULE_1__/* .isValidFacebookUsername */ .mt)(v)
        ,
        publicKeyEncoding: undefined,
        textPayloadPostProcessor: undefined,
        getPostURL,
        getShareLinkURL (message) {
            const url = new URL('https://www.facebook.com/sharer/sharer.php');
            url.searchParams.set('quote', message);
            url.searchParams.set('u', 'mask.io');
            return url;
        },
        createPostContext: (0,_social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_4__/* .createSNSAdaptorSpecializedPostContext */ .k)({
            payloadParser: _utils__WEBPACK_IMPORTED_MODULE_3__/* .deconstructPayload */ .Qn,
            getURLFromPostIdentifier: getPostURL
        })
    }
};


/***/ }),

/***/ 31143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/utils.ts
var utils = __webpack_require__(77212);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(54061);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/shared.ts
var shared = __webpack_require__(76869);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/utils/parse-username.ts
var parse_username = __webpack_require__(52816);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(74712);
// EXTERNAL MODULE: ./src/utils/i18n-next.ts + 1 modules
var i18n_next = __webpack_require__(93002);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils_utils = __webpack_require__(96578);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(32951);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/automation/openComposeBox.ts






const nativeComposeButtonSelector = ()=>new umd.LiveSelector().querySelector([
        '[role="region"] [role="link"]+[role="button"]',
        '#MComposer [role="button"]'
    ].join(',')).enableSingleMode()
;
const nativeComposeTextareaSelector = ()=>new umd.LiveSelector().querySelector([
        '#structured_composer_form .mentions textarea'
    ].join(',')).enableSingleMode()
;
const nativeComposeDialogIndicatorSelector = ()=>new umd.LiveSelector().querySelector([
        // PC -  the form of compose dialog
        '[role="dialog"] form[method="post"]',
        // mobile - the submit button
        '#composer-main-view-id button[type="submit"]', 
    ].join(','))
;
async function taskOpenComposeBoxFacebook(content, options) {
    await (0,dom/* untilDocumentReady */.Hx)();
    await (0,utils_utils/* delay */.gw)(800);
    // active the compose dialog
    const composeTextarea = nativeComposeTextareaSelector().evaluate();
    const composeButton = nativeComposeButtonSelector().evaluate();
    if (composeTextarea) composeTextarea.focus();
    if (composeButton) composeButton.click();
    await (0,utils_utils/* delay */.gw)(800);
    // the indicator only available when compose dialog opened successfully
    const composeIndicator = nativeComposeDialogIndicatorSelector().evaluate();
    if (!composeIndicator) {
        alert(i18n_next/* i18n.t */.a.t('automation_request_click_post_button'));
        return;
    }
    await (0,utils_utils/* delay */.gw)(800);
    messages/* MaskMessage.events.requestComposition.sendToLocal */.y.events.requestComposition.sendToLocal({
        reason: 'popup',
        open: true,
        content: typeof content === 'string' ? (0,typed_message/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/utils/isMobile.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9134.js
var isMobile = __webpack_require__(38719);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts + 1 modules
var sdk = __webpack_require__(83156);
=======
var isMobile = __webpack_require__(70205);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts + 1 modules
var sdk = __webpack_require__(83554);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.3840.js
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/automation/pasteTextToComposition.ts






async function openPostDialogFacebook() {
    await untilDocumentReady();
    const notActivated = isMobileFacebook ? new LiveSelector().querySelector('[role="textbox"]') : new LiveSelector().querySelector(`[role="region"]`).querySelector('textarea, [aria-multiline="true"]').closest(1);
    const activated = new LiveSelector().querySelector(isMobileFacebook ? 'form textarea' : '.notranslate');
    const dialog = new LiveSelector().querySelector('[role=main] [role=dialog]');
    if (notActivated.evaluate()[0]) {
        if (isMobileFacebook) {
            try {
                notActivated.evaluate()[0].click();
                await timeout(new MutationObserverWatcher(activated), 2000);
                await delay(1000);
            } catch (error) {
                clickFailed(error);
            }
        } else {
            try {
                console.log('Awaiting to click the post box');
                const [dom1] = await timeout(new MutationObserverWatcher(notActivated), 1000);
                dom1.click();
                console.log('Non-activated post box found Stage 1', dom1);
                const [dom2] = await timeout(new IntervalWatcher(notActivated.clone().filter((x)=>x !== dom1
                )), 3000);
                console.log('Non-activated post box found Stage 2', dom2);
                dom2.click();
                await timeout(new MutationObserverWatcher(activated), 1000);
                if (!dialog.evaluate()[0]) throw new Error('Click not working');
            } catch (error) {
                clickFailed(error);
            }
            console.log('Awaiting dialog');
        }
    }
    await delay(500);
    try {
        await timeout(new MutationObserverWatcher(isMobileFacebook ? activated : dialog), 2000);
        console.log('Dialog appeared');
    } catch  {
    // ignore
    }
    function clickFailed(error) {
        console.warn(error);
        if (!dialog.evaluate()[0]) alert('Click the input box, please.');
    }
}
/**
 * Access: https://(www|m).facebook.com/
 */ async function pasteTextToCompositionFacebook(text, options) {
    const { recover  } = options;
    await (0,dom/* untilDocumentReady */.Hx)();
    // Save the scrolling position
    const scrolling = document.scrollingElement || document.documentElement;
    const scrollBack = ((top)=>()=>scrolling.scroll({
                top
            })
    )(scrolling.scrollTop);
    const activated = new umd.LiveSelector().querySelectorAll(isMobile/* isMobileFacebook */.q ? 'form textarea' : '.notranslate[aria-describedby]');
    if (isMobile/* isMobileFacebook */.q) activated.filter((x)=>x.getClientRects().length > 0
    );
    // If page is just loaded
    // if (shouldOpenPostDialog) {
    //     await openPostDialogFacebook()
    // }
    try {
        const [element] = activated.evaluate();
        element.focus();
        await (0,utils_utils/* delay */.gw)(100);
        if ('value' in document.activeElement) (0,sdk/* inputText */.iJ)(text);
        else (0,sdk/* pasteText */.M1)(text);
        await (0,utils_utils/* delay */.gw)(400);
        if (isMobile/* isMobileFacebook */.q) {
            const e = document.querySelector('.mentions-placeholder');
            if (e) e.style.display = 'none';
        }
        // Prevent Custom Paste failed, this will cause service not available to user.
        if (!element.innerText.includes(text) || 'value' in element && !element.value.includes(text)) copyFailed('Not detected');
    } catch (error) {
        copyFailed(error);
    }
    scrollBack();
    function copyFailed(error) {
        console.warn('Text not pasted to the text area', error);
        if (recover) messages/* MaskMessage.events.autoPasteFailed.sendToLocal */.y.events.autoPasteFailed.sendToLocal({
            text
        });
    }
}

// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(29573);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/getProfileIdentifier.ts


/**
 *
 * @param allowCollectInfo
 * @param links
 *  Could be a group of anchor element. Seems like this:
 *  [
 *      <a class="_2nlw _2nlv" href="https://www.facebook.com/xxx">
 *          [USERNAME HERE]
 *          <span class="alternate_name">
 *              ([USER SCREEN NAME HERE])
 *          </span>
 *      </a>
 *  ]
 */ function getProfileIdentifierAtFacebook(links, allowCollectInfo) {
    const unknown = {
        identifier: type/* ProfileIdentifier.unknown */.WO.unknown,
        avatar: undefined,
        nickname: undefined
    };
    try {
        if (!Array.isArray(links)) links = [
            links
        ];
        const result = links.filter((x)=>x
        ).map((x)=>({
                nickname: x.innerText,
                id: getUserID(x.href),
                dom: x
            })
        ).filter((x)=>x.id
        );
        const { dom , id , nickname  } = result[0] || {
        };
        if (id) {
            const result1 = new type/* ProfileIdentifier */.WO('facebook.com', id);
            let avatar = null;
            try {
                const image = dom.closest('.clearfix').parentElement.querySelector('img');
                avatar = image.src;
                if (allowCollectInfo && image.getAttribute('aria-label') === nickname && nickname) {
                    service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(result1, {
                        nickname,
                        avatarURL: image.src
                    });
                }
            } catch  {
            }
            try {
                const image1 = dom.querySelector('img');
                avatar = image1.src;
                if (allowCollectInfo && avatar) {
                    service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(result1, {
                        nickname,
                        avatarURL: image1.src
                    });
                }
            } catch  {
            }
            try {
                const image2 = dom.querySelector('image');
                avatar = image2.getAttribute('xlink:href');
            } catch  {
            }
            return {
                identifier: result1,
                avatar: avatar !== null && avatar !== void 0 ? avatar : undefined,
                nickname: nickname
            };
        }
        return unknown;
    } catch (error) {
        console.error(error);
    }
    return unknown;
}
function getUserID(x) {
    if (!x) return null;
    const relative = !x.startsWith('https://') && !x.startsWith('http://');
    const url = relative ? new URL(x, location.host) : new URL(x);
    if (url.hostname !== 'www.facebook.com' && url.hostname !== 'm.facebook.com') return null;
    if (url.pathname.endsWith('.php')) {
        if (!url.search) return null;
        const search = new URLSearchParams(url.search);
        return search.get('id');
    }
    const val = url.pathname.replace(/^\//, '').replace(/\/$/, '').split('/')[0];
    if (val === 'me') return null;
    return val;
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/collecting/identity.ts





const IdentityProviderFacebook = {
    hasDeprecatedPlaceholderName: true,
    lastRecognized: utils/* creator.IdentityResolveProviderLastRecognized */.Du.IdentityResolveProviderLastRecognized(),
    start (signal) {
        resolveLastRecognizedIdentityFacebookInner(this.lastRecognized, signal);
    }
};
function resolveLastRecognizedIdentityFacebookInner(ref, signal) {
    const self = (isMobile/* isMobileFacebook */.q ? myUsernameLiveSelectorMobile : myUsernameLiveSelectorPC).clone().map((x)=>getProfileIdentifierAtFacebook(x, false)
    );
    const watcher = new umd.MutationObserverWatcher(self).setComparer(undefined, (a, b)=>a.identifier.equals(b.identifier)
    ).addListener('onAdd', (e)=>assign(e.value)
    ).addListener('onChange', (e)=>assign(e.newValue)
    ).startWatch({
        childList: true,
        subtree: true,
        characterData: true
    });
    signal.addEventListener('abort', ()=>watcher.stopWatch()
    );
    function assign(i) {
        if (!i.identifier.isUnknown) ref.value = i;
    }
    fetch('/me', {
        method: 'HEAD',
        signal
    }).then((x)=>x.url
    ).then(getUserID).then((id)=>id && assign({
            ...ref.value,
            identifier: new type/* ProfileIdentifier */.WO('facebook.com', id)
        })
    );
}
//#region LS
// Try to resolve my identities
const myUsernameLiveSelectorPC = new umd.LiveSelector().querySelectorAll(`[data-pagelet="LeftRail"] > [data-visualcompletion="ignore-dynamic"]:first-child > div:first-child > ul [role="link"]`).filter((x)=>x.innerText
);
const myUsernameLiveSelectorMobile = new umd.LiveSelector().querySelector('#bookmarks_flyout .mSideMenu > div > ul > li:first-child a, #MComposer a');

// EXTERNAL MODULE: ./src/social-network/defaults/state/InitFriends.ts
var InitFriends = __webpack_require__(46016);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(79328);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 14 modules
var Composition = __webpack_require__(50269);
// EXTERNAL MODULE: ./src/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(72981);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(19439);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/Composition.tsx









let composeBox;
if (isMobile/* isMobileFacebook */.q) {
    composeBox = new umd.LiveSelector().querySelector('#structured_composer_form');
} else {
    composeBox = new umd.LiveSelector().querySelector('[role="dialog"] form').querySelectorAll('[role="button"][tabindex="0"], [role="button"][tabindex="-1"]').map((x)=>x.parentElement
    ).at(-1).map((x)=>x.parentElement
    );
}
function injectCompositionFacebook(signal) {
    const watcher = new umd.MutationObserverWatcher(composeBox.clone());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(UI, {
    }));
}
function UI() {
    const onHintButtonClicked = (0,react.useCallback)(()=>messages/* MaskMessage.events.requestComposition.sendToLocal */.y.events.requestComposition.sendToLocal({
            reason: 'popup',
            open: true
        })
    , []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        style: {
            display: 'block',
            padding: 0,
            marginTop: 0
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
                onHintButtonClicked: onHintButtonClicked
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
                type: "popup"
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/components/shared/NotSetupYetPrompt.tsx + 1 modules
var NotSetupYetPrompt = __webpack_require__(77766);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/SetupPrompt.tsx






let SetupPrompt_composeBox;
if (isMobile/* isMobileFacebook */.q) {
    SetupPrompt_composeBox = new umd.LiveSelector().querySelector('#structured_composer_form');
} else {
    SetupPrompt_composeBox = new umd.LiveSelector().querySelector('[role="dialog"] form').querySelectorAll('[role="button"][tabindex="0"], [role="button"][tabindex="-1"]').map((x)=>x.parentElement
    ).at(-1);
}
function injectSetupPromptFacebook(signal) {
    const watcher = new umd.MutationObserverWatcher(SetupPrompt_composeBox.clone());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        style: {
            display: 'block',
            padding: '0 16px',
            marginTop: 0
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NotSetupYetPrompt/* NotSetupYetPrompt */.N, {
        })
    }));
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/Comments.tsx + 1 modules
var Comments = __webpack_require__(51134);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/automation/pasteToCommentBoxFacebook.ts




async function pasteToCommentBoxFacebook(encryptedComment, current, dom) {
    const fail = ()=>{
        messages/* MaskMessage.events.autoPasteFailed.sendToLocal */.y.events.autoPasteFailed.sendToLocal({
            text: encryptedComment
        });
    };
    if (isMobile/* isMobileFacebook */.q) {
        const root = dom || current.commentBoxSelector.evaluate()[0];
        if (!root) return fail();
        const textarea = root.querySelector('textarea');
        if (!textarea) return fail();
        textarea.focus();
        (0,sdk/* inputText */.iJ)(encryptedComment);
        textarea.dispatchEvent(new CustomEvent('input', {
            bubbles: true,
            cancelable: false,
            composed: true
        }));
        await (0,utils_utils/* delay */.gw)(200);
        if (!root.innerText.includes(encryptedComment)) return fail();
    } else {
        const root = dom || current.rootNode;
        if (!root) return fail();
        const input = root.querySelector('[contenteditable]');
        if (!input) return fail();
        (0,utils_utils/* selectElementContents */.Ms)(input);
        (0,sdk/* pasteText */.M1)(encryptedComment);
        await (0,utils_utils/* delay */.gw)(200);
        if (!root.innerText.includes(encryptedComment)) return fail();
    }
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/CommentBox.tsx + 1 modules
var CommentBox = __webpack_require__(63024);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostInspector.tsx + 12 modules
var PostInspector = __webpack_require__(89177);
// EXTERNAL MODULE: ./src/utils/flags.ts
var flags = __webpack_require__(55);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/injection/PostInspector.tsx



const map = new WeakMap();
function getShadowRoot(node) {
    if (map.has(node)) return map.get(node);
    const dom = node.attachShadow({
        mode: flags/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
    });
    map.set(node, dom);
    return dom;
}
function injectPostInspectorFacebook(signal, current) {
    var ref;
    clickSeeMore((ref = current.rootNodeProxy.current) === null || ref === void 0 ? void 0 : ref.parentElement);
    return (0,PostInspector/* injectPostInspectorDefault */.J)({
        zipPost (node) {
            zipEncryptedPostContent(node);
            zipPostLinkPreview(node);
        },
        injectionPoint: (post)=>getShadowRoot(post.postContentNode)
    })(current, signal);
}
function zipPostLinkPreview(node) {
    const parentEle = node.current.parentElement;
    if (!parentEle) return;
    if (isMobile/* isMobileFacebook */.q) {
        var ref, ref1;
        const img = (ref1 = (ref = parentEle.querySelector('a[href*="maskbook.io"]')) !== null && ref !== void 0 ? ref : parentEle.querySelector('a[href*="mask.io"]')) !== null && ref1 !== void 0 ? ref1 : parentEle.querySelector('a[href*="maskbook.com"]');
        const parent = img === null || img === void 0 ? void 0 : img.closest('section');
        if (img && parent) {
            parent.style.display = 'none';
        }
    } else {
        var ref5, ref6;
        const img = (ref6 = (ref5 = parentEle.querySelector('a[href*="maskbook.io"] img')) !== null && ref5 !== void 0 ? ref5 : parentEle.querySelector('a[href*="mask.io"] img')) !== null && ref6 !== void 0 ? ref6 : parentEle.querySelector('a[href*="maskbook.com"] img');
        const parent = img === null || img === void 0 ? void 0 : img.closest('span');
        if (img && parent) {
            parent.style.display = 'none';
        }
    }
}
function zipEncryptedPostContent(node) {
    const parent = node.current.parentElement;
    // It's image based encryption, skip zip post.
    if (!node.current.innerText.includes('🎼')) return;
    // Style modification for repost
    if (!node.current.className.includes('userContent') && node.current.innerText.length > 0) {
        node.after.setAttribute('style', `border: 1px solid #ebedf0;
display: block;
border-top: none;
border-bottom: none;
margin-bottom: 0px;
padding: 0px 10px;`);
    }
    if (parent) {
        // post content
        const p = parent.querySelector('p');
        if (p) {
            p.style.display = 'block';
            p.style.maxHeight = '20px';
            p.style.overflow = 'hidden';
            p.style.marginBottom = '0';
        }
    }
}
function clickSeeMore(node) {
    if (!node) return;
    const more = node.querySelector(isMobile/* isMobileFacebook */.q ? '[data-sigil="more"] a' : '[role=article] span[dir="auto"] div[dir="auto"] [role="button"]');
    if (more && node.querySelector('img[alt="🎼"]')) {
        const trap = (e)=>{
            e.preventDefault();
        };
        more.parentNode.addEventListener('click', trap);
        more.click();
        setTimeout(()=>{
            if (more.parentNode) more.parentNode.removeEventListener('click', trap);
        }, 0);
    }
}

// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts
var create_post_context = __webpack_require__(67561);
// EXTERNAL MODULE: ./src/utils/index.ts
var src_utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(64614);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/collecting/posts.tsx












const posts = new umd.LiveSelector().querySelectorAll(isMobile/* isMobileFacebook */.q ? '.story_body_container > div' : '[role=article] [data-ad-preview="message"]');
const PostProviderFacebook = {
    posts: utils/* creator.PostProviderStore */.Du.PostProviderStore(),
    start (signal) {
        collectPostsFacebookInner(this.posts, signal);
    }
};
function collectPostsFacebookInner(store, signal) {
    (0,utils_watcher/* startWatch */.f)(new umd.MutationObserverWatcher(posts).useForeach((node, key, metadata)=>{
        clickSeeMore(node);
    }), signal);
    (0,utils_watcher/* startWatch */.f)(new umd.MutationObserverWatcher(posts).useForeach((node1, key, metadata)=>{
        const root = new umd.LiveSelector().replace(()=>[
                metadata.realCurrent
            ]
        ).closest('[role=article]').map((x)=>{
            var ref, ref1;
            return (ref = x.parentElement) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : ref1.parentElement;
        });
        const rootProxy = (0,umd.DOMProxy)({
            afterShadowRootInit: {
                mode: src_utils/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
            },
            beforeShadowRootInit: {
                mode: src_utils/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
            }
        });
        rootProxy.realCurrent = root.evaluate()[0];
        // ? inject after comments
        const commentSelectorPC = root.clone().querySelectorAll('[role=article] [aria-label] span[dir="auto"]').closest(3);
        const commentSelectorMobile = root.clone().map((x)=>x.parentElement
        ).querySelectorAll('[data-commentid]');
        const commentsSelector = isMobile/* isMobileFacebook */.q ? commentSelectorMobile : commentSelectorPC;
        // ? inject comment text field
        const commentBoxSelectorPC = root.clone().querySelectorAll('[role="article"] [role="presentation"]').map((x)=>x.parentElement
        );
        const commentBoxSelectorMobile = root.clone().map((x)=>x.parentElement
        ).querySelectorAll('textarea').map((x)=>x.parentElement
        ).filter((x)=>x.innerHTML.includes('comment')
        );
        const commentBoxSelector = isMobile/* isMobileFacebook */.q ? commentBoxSelectorMobile : commentBoxSelectorPC;
        const { subscriptions , ...info } = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = shared/* facebookShared.utils.createPostContext */.T.utils.createPostContext({
            rootElement: rootProxy,
            suggestedInjectionPoint: metadata.realCurrent,
            signal,
            comments: {
                commentBoxSelector,
                commentsSelector
            },
            ...subscriptions
        });
        store.set(metadata, postInfo);
        function collectPostInfo() {
            rootProxy.realCurrent = root.evaluate()[0];
            const nextTypedMessage = [];
            info.postBy.value = getPostBy(metadata, postInfo.postPayload.getCurrentValue() !== null).identifier;
            info.postID.value = getPostID(metadata);
            // parse text
            const text = (0,src_utils/* collectNodeText */.aW)(node1, {
                onHTMLAnchorElement (node) {
                    const href = node.getAttribute('href');
                    if (!href) {
                        return esm/* None */.Hq;
                    }
                    return (0,esm/* Some */.bD)('\n' + (href.includes('l.facebook.com') ? new URL(href).searchParams.get('u') : node.innerText));
                }
            });
            nextTypedMessage.push((0,typed_message/* makeTypedMessageText */.P)(text));
            // parse image
            const images = getMetadataImages(metadata);
            for (const url of images){
                info.postMetadataImages.add(url);
                nextTypedMessage.push((0,typed_message/* makeTypedMessageImage */.as)(url));
            }
            // parse post content
            info.postMessage.value = (0,typed_message/* makeTypedMessageTuple */.Zw)(nextTypedMessage);
        }
        collectPostInfo();
        return {
            onNodeMutation: collectPostInfo,
            onTargetChanged: collectPostInfo,
            onRemove: ()=>store.delete(metadata)
        };
    }), signal);
}
function getPostBy(node, allowCollectInfo) {
    var ref5;
    const dom = isMobile/* isMobileFacebook */.q ? node.current.querySelectorAll('a') : [
        ((ref5 = node.current.closest('[role="article"]')) !== null && ref5 !== void 0 ? ref5 : node.current.parentElement).querySelectorAll('a')[1]
    ];
    // side effect: save to service
    return getProfileIdentifierAtFacebook(Array.from(dom), allowCollectInfo);
}
function getPostID(node) {
    if (isMobile/* isMobileFacebook */.q) {
        const abbr = node.current.querySelector('abbr');
        if (!abbr) return null;
        const idElement = abbr.closest('a');
        if (!idElement) return null;
        const id = new URL(idElement.href);
        return id.searchParams.get('id') || '';
    } else {
        // In single url
        if (location.href.match(/plugins.+(perma.+story_fbid%3D|posts%2F)?/)) {
            const url = new URL(location.href);
            return url.searchParams.get('id');
        } else {
            // In timeline
            const parent = node.current.parentElement;
            if (!parent) return null;
            const idNode = Array.from(parent.querySelectorAll('[id]')).map((x)=>x.id.split(';')
            ).filter((x)=>x.length > 1
            );
            if (!idNode.length) return null;
            return idNode[0][2];
        }
    }
}
function getMetadataImages(node) {
    var ref5;
    const parent = (ref5 = node.current.parentElement) === null || ref5 === void 0 ? void 0 : ref5.parentElement;
    if (!parent) return [];
    const imgNodes = isMobile/* isMobileFacebook */.q ? parent.querySelectorAll('div>div>div>a>div>div>i.img') : parent.querySelectorAll('img') || [];
    if (!imgNodes.length) return [];
    const imgUrls = isMobile/* isMobileFacebook */.q ? (getComputedStyle(imgNodes[0]).backgroundImage || '').slice(4, -1).replace(/["']/g, '').split(',').filter(Boolean) : Array.from(imgNodes).map((node1)=>node1.src
    ).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
}

// EXTERNAL MODULE: ./src/social-network/defaults/automation/AttachImageToComposition.ts
var AttachImageToComposition = __webpack_require__(67162);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PageInspector.tsx + 3 modules
var PageInspector = __webpack_require__(12582);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx
var StartSetupGuide = __webpack_require__(58963);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+stego-js@0.11.1-20201027083223-8ab41be/node_modules/@dimensiondev/stego-js/esm/grayscale.js + 1 modules
var grayscale = __webpack_require__(45930);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(71299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var kit_esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/ui-provider.ts
























const facebookUI = {
    ...base/* facebookBase */.q,
    ...shared/* facebookShared */.T,
    automation: {
        redirect: {
            profilePage (profile) {
                // there is no PWA way on Facebook desktop.
                // mobile not tested
                location.href = (0,parse_username/* getProfilePageUrlAtFacebook */.tg)(profile);
            },
            newsFeed () {
                const homeLink = document.querySelector([
                    '[data-click="bluebar_logo"] a[href]',
                    '#feed_jewel a[href]'
                ].join(','));
                if (homeLink) homeLink.click();
                else if (location.pathname !== '/') location.pathname = '/';
            }
        },
        maskCompositionDialog: {
            open: taskOpenComposeBoxFacebook
        },
        nativeCompositionDialog: {
            appendText: pasteTextToCompositionFacebook,
            // TODO: make a better way to detect
            attachImage: (0,AttachImageToComposition/* pasteImageToCompositionDefault */.f)(()=>false
            )
        },
        nativeCommentBox: {
            appendText: pasteToCommentBoxFacebook
        }
    },
    collecting: {
        identityProvider: IdentityProviderFacebook,
        postsProvider: PostProviderFacebook
    },
    customization: {
    },
    init (signal) {
        const friends = utils/* stateCreator.friends */.ZZ.friends();
        const profiles = utils/* stateCreator.profiles */.ZZ.profiles();
        (0,InitFriends/* InitAutonomousStateFriends */.f)(signal, friends, shared/* facebookShared.networkIdentifier */.T.networkIdentifier);
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, shared/* facebookShared.networkIdentifier */.T.networkIdentifier);
        return {
            friends,
            profiles
        };
    },
    injection: {
        newPostComposition: {
            start: injectCompositionFacebook,
            supportedOutputTypes: {
                text: true,
                image: true
            },
            supportedInputTypes: {
                text: true,
                image: true
            }
        },
        // Not supported yet
        enhancedPostRenderer: undefined,
        userBadge: undefined,
        searchResult: undefined,
        setupPrompt: injectSetupPromptFacebook,
        commentComposition: {
            compositionBox: (0,Comments/* injectPostCommentsDefault */.M)(),
            commentInspector: (0,CommentBox/* injectCommentBoxDefaultFactory */.S)(pasteToCommentBoxFacebook)
        },
        postInspector: injectPostInspectorFacebook,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        setupWizard: (0,StartSetupGuide/* createTaskStartSetupGuideDefault */.Z)(base/* facebookBase.networkIdentifier */.q.networkIdentifier)
    },
    configuration: {
        steganography: {
            // ! the color image cannot compression resistance in Facebook
            grayscaleAlgorithm: grayscale/* GrayscaleAlgorithm.LUMINANCE */.Ft.LUMINANCE,
            password () {
                // ! Change this might be a breaking change !
                return new src.ProfileIdentifier('facebook.com', src.ProfileIdentifier.getUserName(IdentityProviderFacebook.lastRecognized.value.identifier) || src.ProfileIdentifier.getUserName(settings/* currentSelectedIdentity */.G[base/* facebookBase.networkIdentifier */.q.networkIdentifier].value) || src.ProfileIdentifier.getUserName(social_network.globalUIState.profiles.value[0].identifier) || (0,kit_esm/* unreachable */.t1)('Cannot figure out password')).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (facebookUI);


/***/ }),

/***/ 70205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ isMobileFacebook),
/* harmony export */   "x": () => (/* binding */ facebookDomain)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

const isMobileFacebook = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ContentScript) ? location.hostname === 'm.facebook.com' : navigator.userAgent.match(/Mobile|mobile/);
const facebookDomain = isMobileFacebook ? 'https://m.facebook.com/' : 'https://facebook.com/';


/***/ }),

/***/ 52816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mt": () => (/* binding */ isValidFacebookUsername),
/* harmony export */   "tx": () => (/* binding */ getPostUrlAtFacebook),
/* harmony export */   "tg": () => (/* binding */ getProfilePageUrlAtFacebook)
/* harmony export */ });
/* unused harmony export getFacebookHostName */
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70205);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93002);


/**
 * @see https://www.facebook.com/help/105399436216001#What-are-the-guidelines-around-creating-a-custom-username?
 * ! Start to use this in a breaking change!
 */ function isValidFacebookUsername(name) {
    if (!name) return null;
    // Avoid common mistake
    if (name === 'photo.php') return null;
    const n = name.toLowerCase().replace(/\./g, '');
    if (n.match(/^[\da-z]{5,}$/)) {
        return n;
    }
    return null;
}
/**
 * Normalize post url
 */ function getPostUrlAtFacebook(post) {
    const id = post.identifier;
    const { postId  } = post;
    const { userId  } = id;
    const host = getFacebookHostName();
    if (!isValidFacebookUsername(userId)) throw new TypeError(_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('service_username_invalid'));
    if (parseFloat(userId)) return `${host}/permalink.php?story_fbid=${postId}&id=${userId}`;
    return `${host}/${userId}/posts/${postId}`;
}
/**
 * Normalize profile url
 */ function getProfilePageUrlAtFacebook(user) {
    if (user.network !== 'facebook.com') throw new Error('Wrong origin');
    const host = getFacebookHostName();
    const username = user.userId;
    if (!isValidFacebookUsername(username)) throw new TypeError(_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('service_username_invalid'));
    if (parseFloat(username)) return `${host}/profile.php?id=${username}`;
    return `${host}/${username}`;
}
function getFacebookHostName() {
    if (_isMobile__WEBPACK_IMPORTED_MODULE_0__/* .isMobileFacebook */ .q) return 'https://m.facebook.com';
    return 'https://www.facebook.com';
}


/***/ }),

/***/ 63024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ injectCommentBoxDefaultFactory)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/InputBase/InputBase.js + 2 modules
var InputBase = __webpack_require__(64556);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/CommentBox.tsx




const useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        fontSize: 13,
        background: '#3a3b3c',
        width: '100%',
        height: 34,
        borderRadius: 20,
        padding: '2px 1em',
        boxSizing: 'border-box',
        marginTop: 6,
        color: '#e4e6eb'
    },
    input: {
        '&::placeholder': {
            color: '#b0b3b8',
            opacity: 1
        },
        '&:focus::placeholder': {
            color: '#d0d2d6'
        }
    }
});
function CommentBox(props) {
    const { classes  } = useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
        className: classes.root,
        inputProps: {
            className: classes.input,
            'data-testid': 'comment_input'
        },
        placeholder: t('comment_box__placeholder'),
        onKeyDownCapture: (e)=>{
            const node = e.target;
            if (!node.value) return;
            if (e.key === 'Enter') {
                props.onSubmit(node.value);
                node.value = '';
            }
        },
        ...props.inputProps
    }));
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(83250);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(74712);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(19439);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/CommentBox.tsx












const defaultOnPasteToCommentBox = async (encryptedComment, _current, _realCurrent)=>{
    messages/* MaskMessage.events.autoPasteFailed.sendToLocal */.y.events.autoPasteFailed.sendToLocal({
        text: encryptedComment
    });
};
// TODO: should not rely on onPasteToCommentBoxFacebook.
// Use automation.nativeCommentBox.appendText
const injectCommentBoxDefaultFactory = function(onPasteToCommentBox = defaultOnPasteToCommentBox, additionPropsToCommentBox = ()=>({
    })
, useCustomStyles = (0,src/* makeStyles */.ZL)()({
})) {
    const CommentBoxUI = /*#__PURE__*/ (0,react.memo)(function CommentBoxUI1({ dom  }) {
        const info = (0,usePostInfo/* usePostInfo */.oQ)();
        const payload = usePostInfo/* usePostInfoDetails.postPayload */.H9.postPayload();
        const postContent = usePostInfo/* usePostInfoDetails.transformedPostContent */.H9.transformedPostContent();
        const { classes  } = useCustomStyles();
        const iv = usePostInfo/* usePostInfoDetails.iv */.H9.iv();
        const props = additionPropsToCommentBox(classes);
        const onCallback = (0,react.useCallback)(async (content)=>{
            const postIV = iv || payload.unwrap().iv;
            const decryptedText = (0,typed_message/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
            const encryptedComment = await service/* default.Crypto.encryptComment */.ZP.Crypto.encryptComment(postIV, decryptedText, content);
            onPasteToCommentBox(encryptedComment, info, dom).catch(console.error);
        }, [
            payload,
            postContent,
            info,
            dom,
            iv
        ]);
        if (!(payload && postContent)) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBox, {
            onSubmit: onCallback,
            ...props
        }));
    });
    return (signal, current)=>{
        if (!current.commentBoxSelector) return lodash.noop;
        const commentBoxWatcher = new umd.MutationObserverWatcher(current.commentBoxSelector.clone(), current.rootNode || void 0).useForeach((node, key, meta)=>{
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
                post: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBoxUI, {
                    ...current,
                    dom: meta.realCurrent
                })
            }));
            return root.destory;
        });
        (0,watcher/* startWatch */.f)(commentBoxWatcher, signal);
        return ()=>commentBoxWatcher.stopWatch()
        ;
    };
};


/***/ }),

/***/ 51134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ injectPostCommentsDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(13622);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Lock.js
var Lock = __webpack_require__(91526);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(83250);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostComments.tsx










const useStyle = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        height: 'auto',
        padding: '6px'
    },
    label: {
        whiteSpace: 'initial'
    }
});
function PostCommentDecrypted(props) {
    const chipClasses = (0,src.useStylesExtends)(useStyle(), props.ChipProps || {
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                "data-testid": "comment_field",
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lock/* default */.Z, {
                }),
                label: props.children,
                color: "secondary",
                ...props.ChipProps,
                classes: chipClasses
            })
        ]
    }));
}
function PostComment(props) {
    const { failedComponent: Fail , waitingComponent: Wait , needZip  } = props;
    const comment = (0,src.useValueRef)(props.comment);
    const postContent = usePostInfo/* usePostInfoDetails.transformedPostContent */.H9.transformedPostContent();
    const postPayload = usePostInfo/* usePostInfoDetails.postPayload */.H9.postPayload();
    const iv = usePostInfo/* usePostInfoDetails.iv */.H9.iv();
    const postIV = postPayload.map((x)=>x.iv
    ).unwrapOr(iv);
    const dec = (0,useAsync/* default */.Z)(async ()=>{
        const decryptedText = (0,typed_message/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
        if (!postIV || !decryptedText) throw new Error('Decrypt comment failed');
        const result = await service/* default.Crypto.decryptComment */.ZP.Crypto.decryptComment(postIV, decryptedText, comment);
        if (result === null) throw new Error('Decrypt result empty');
        return result;
    }, [
        postIV,
        postContent,
        comment
    ]);
    const Success = props.successComponent || PostCommentDecrypted;
    (0,react.useEffect)(()=>void (dec.value && needZip())
    , [
        dec.value,
        needZip
    ]);
    if (dec.error) return Fail ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Fail, {
        error: dec.error
    }) : null;
    if (dec.loading) return Wait ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Wait, {
    }) : null;
    if (dec.value) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Success, {
        ...props.successComponentProps,
        children: dec.value
    }));
    return null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(19439);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/Comments.tsx










/**
 * Creat a default implementation of injectPostComments
 */ function injectPostCommentsDefault(config = {
}, additionalPropsToPostComment = ()=>({
    })
, useCustomStyles = (0,theme_src/* makeStyles */.ZL)()({
})) {
    const { needZip  } = config;
    const PostCommentDefault = /*#__PURE__*/ (0,react.memo)(function PostCommentDefault1(props) {
        const { classes  } = useCustomStyles();
        const additional = additionalPropsToPostComment(classes);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostComment, {
            ...props,
            ...additional
        }));
    });
    return function injectPostComments(signal, current) {
        const selector = current.commentsSelector;
        if (!selector) return lodash.noop;
        const commentWatcher = new umd.MutationObserverWatcher(selector, current.rootNode || void 0).useForeach((commentNode, key, meta)=>{
            const commentRef = new umd.ValueRef((0,utils/* collectNodeText */.aW)(commentNode));
            const needZipF = needZip || (()=>{
                commentNode.style.whiteSpace = 'nowrap';
                commentNode.style.overflow = 'hidden';
            });
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
                post: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostCommentDefault, {
                    needZip: needZipF,
                    comment: commentRef
                })
            }));
            return {
                onNodeMutation () {
                    commentRef.value = (0,utils/* collectNodeText */.aW)(commentNode);
                },
                onTargetChanged () {
                    commentRef.value = (0,utils/* collectNodeText */.aW)(commentNode);
                },
                onRemove () {
                    root.destory();
                }
            };
        });
        (0,watcher/* startWatch */.f)(commentWatcher, signal);
        return ()=>commentWatcher.stopWatch()
        ;
    };
}


/***/ })

}]);