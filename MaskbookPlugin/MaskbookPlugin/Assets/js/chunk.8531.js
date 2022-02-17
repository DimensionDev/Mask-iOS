"use strict";
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8531.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8531],{

/***/ 77603:
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[210],{

/***/ 70988:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.210.js
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

/***/ 48017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ instagramShared)
/* harmony export */ });
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67561);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37186);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95415);



const instagramShared = {
    ..._base__WEBPACK_IMPORTED_MODULE_2__/* .instagramBase */ .j,
    utils: {
        getHomePage: ()=>'https://www.instagram.com/'
        ,
        createPostContext: (0,_social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_0__/* .createSNSAdaptorSpecializedPostContext */ .k)({
            payloadParser: _utils__WEBPACK_IMPORTED_MODULE_1__/* .deconstructPayload */ .Qn
        })
    }
};


/***/ }),

/***/ 58392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/shared.ts
var shared = __webpack_require__(48017);
// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/base.ts
var base = __webpack_require__(95415);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@5.0.8/node_modules/idb/build/esm/index.js
var esm = __webpack_require__(57145);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/collecting/identity-provider.ts




const IdentityProviderInstagram = {
    async start (signal) {
        const ref = this.lastRecognized;
        update();
        async function update() {
            if (signal.aborted) return;
            const val = await query();
            if (val) ref.value = val;
            setTimeout(update, 10 * 1000);
        }
    },
    lastRecognized: social_network.creator.IdentityResolveProviderLastRecognized()
};
async function query() {
    const db = await (0,esm/* openDB */.X3)('redux', 1, {
        upgrade: ()=>{
            db.createObjectStore('paths');
        }
    });
    const tx = db.transaction('paths', 'readonly');
    const id = await tx.store.get('users.viewerId');
    if (!id) return null;
    const detail = (await tx.store.get('users.users'))[id];
    db.close();
    return {
        identifier: new src.ProfileIdentifier(base/* instagramBase.networkIdentifier */.j.networkIdentifier, detail.username),
        avatar: detail.profilePictureUrl,
        nickname: detail.fullName
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/social-network/utils.ts
var utils = __webpack_require__(77212);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(19439);
// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts
var create_post_context = __webpack_require__(67561);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/collecting/posts.ts








const posts = new umd.LiveSelector().querySelectorAll('main[role="main"] article[role="presentation"][tabindex="-1"]');
const PostProviderInstagram = {
    posts: utils/* creator.PostProviderStore */.Du.PostProviderStore(),
    start (signal) {
        collectPostsInstagramInner(this.posts, signal);
    }
};
function collectPostsInstagramInner(store, signal) {
    (0,watcher/* startWatch */.f)(new umd.MutationObserverWatcher(posts).useForeach((node, key, metadata)=>{
        const { subscriptions , ...info } = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = shared/* instagramShared.utils.createPostContext */.U.utils.createPostContext({
            comments: undefined,
            rootElement: metadata,
            suggestedInjectionPoint: metadata.realCurrent.querySelector('header+div+div') || metadata.realCurrent,
            ...subscriptions
        });
        store.set(metadata, postInfo);
        function collectPostInfo() {
            const nextTypedMessage = [];
            info.postBy.value = getPostBy(metadata);
            info.postID.value = getPostID(metadata);
            const img = node.querySelectorAll('img')[1];
            if (img) {
                nextTypedMessage.push((0,typed_message/* makeTypedMessageImage */.as)(img.src, img));
                info.postMetadataImages.add(img.src);
            } else nextTypedMessage.push((0,typed_message/* makeTypedMessageImage */.as)(''));
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
function getPostBy(node) {
    // the first a
    const author = node.current.querySelector('a');
    if (!author) return src.ProfileIdentifier.unknown;
    const href = new URL(author.href).pathname;
    if (href.startsWith('/') && href.endsWith('/') && href.slice(1, -1).includes('/') === false) {
        return new src.ProfileIdentifier(base/* instagramBase.networkIdentifier */.j.networkIdentifier, href.slice(1, -1));
    }
    return src.ProfileIdentifier.unknown;
}
function getPostID(node) {
    var ref, ref1, ref2;
    return ((ref2 = (ref1 = (ref = node.current) === null || ref === void 0 ? void 0 : ref.querySelector('a[href^="/p/"]')) === null || ref1 === void 0 ? void 0 : ref1.href.match(/\/p\/(.+)\/.+/)) === null || ref2 === void 0 ? void 0 : ref2[1]) || null;
}

// EXTERNAL MODULE: ./src/social-network/defaults/index.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8531.js
var defaults = __webpack_require__(53239);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts + 1 modules
var sdk = __webpack_require__(83156);
=======
var defaults = __webpack_require__(57243);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts + 1 modules
var sdk = __webpack_require__(83554);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.210.js
// EXTERNAL MODULE: ./src/utils/flags.ts
var flags = __webpack_require__(55);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/post-inspector.ts


const map = new WeakMap();
function getShadowRoot(node) {
    if (map.has(node)) return map.get(node);
    const dom = node.attachShadow({
        mode: flags/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
    });
    map.set(node, dom);
    return dom;
}
function injectPostInspectorInstagram(signal, current) {
    return (0,defaults/* injectPostInspectorDefault */.Jg)({
        injectionPoint: (post)=>getShadowRoot(post.postContentNode)
    }, ()=>({
            slotPosition: 'after'
        })
    )(current, signal);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(20807);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/esm/Create.js
var Create = __webpack_require__(70029);
// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 14 modules
var Composition = __webpack_require__(50269);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/index.ts
var src_utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/Entry.tsx







const Container = (0,styled/* default */.ZP)('div')`
    position: fixed;
    right: 2.5em;
    bottom: 5em;
`;
const appearsWith = '[data-testid="new-post-button"]';
function Entry() {
    const [display, setDisplay] = (0,react.useState)(!!document.querySelector(appearsWith));
    (0,react.useEffect)(()=>{
        const watch = new umd.MutationObserverWatcher(new umd.LiveSelector().querySelector(appearsWith).enableSingleMode()).startWatch({
            childList: true,
            subtree: true
        });
        watch.on('onAdd', ()=>setDisplay(true)
        );
        watch.on('onRemove', ()=>setDisplay(false)
        );
        return ()=>watch.stopWatch()
        ;
    });
    if (!display) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Fab/* default */.Z, {
                variant: "extended",
                onClick: ()=>{
                    src_utils/* MaskMessage.events.requestComposition.sendToLocal */.yV.events.requestComposition.sendToLocal({
                        open: true,
                        reason: 'timeline'
                    });
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Create/* default */.Z, {
                    }),
                    "Create with Mask"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
                type: "timeline"
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/injection/newPostComposition.tsx




function newPostCompositionInstagram(signal) {
    const container = document.createElement('div');
    const shadow = container.attachShadow({
        mode: flags/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
    });
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(shadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {
    }));
    document.body.appendChild(container);
    signal.addEventListener('abort', ()=>container.remove()
    );
}

// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(79328);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/ui-provider.ts










const ui_provider_define = {
    ...shared/* instagramShared */.U,
    ...base/* instagramBase */.j,
    automation: {
        nativeCompositionDialog: {
            attachImage (url, options) {
                if (url instanceof Blob) url = URL.createObjectURL(url);
                (0,sdk/* pasteInstagram */.X2)(url);
            }
        }
    },
    collecting: {
        identityProvider: IdentityProviderInstagram,
        postsProvider: PostProviderInstagram
    },
    configuration: {
        setupWizard: {
            disableSayHello: true
        }
    },
    customization: {
    },
    init (signal) {
        const friends = social_network.stateCreator.friends();
        const profiles = social_network.stateCreator.profiles();
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, base/* instagramBase.networkIdentifier */.j.networkIdentifier);
        // No need to init cause this network is not going to support those features now.
        return {
            friends,
            profiles
        };
    },
    injection: {
        setupWizard: (0,defaults/* createTaskStartSetupGuideDefault */.Zh)(base/* instagramBase.networkIdentifier */.j.networkIdentifier),
        postInspector: injectPostInspectorInstagram,
        newPostComposition: {
            start: newPostCompositionInstagram,
            supportedInputTypes: {
                text: true,
                image: true
            },
            supportedOutputTypes: {
                text: false,
                image: true
            }
        }
    }
};
/* harmony default export */ const ui_provider = (ui_provider_define);


/***/ }),

/***/ 57243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SA": () => (/* reexport safe */ _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   "MF": () => (/* reexport safe */ _inject_Comments__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   "Jg": () => (/* reexport safe */ _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__.J),
/* harmony export */   "Zh": () => (/* reexport safe */ _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__.Z)
/* harmony export */ });
/* harmony import */ var _automation_AttachImageToComposition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67162);
/* harmony import */ var _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63024);
/* harmony import */ var _inject_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51134);
/* harmony import */ var _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89177);
/* harmony import */ var _state_InitFriends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46016);
/* harmony import */ var _state_InitProfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79328);
/* harmony import */ var _inject_PageInspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12582);
/* harmony import */ var _inject_PostReplacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20351);
/* harmony import */ var _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58963);











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


/***/ }),

/***/ 20351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ injectPostReplacer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(83250);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(66751);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(64614);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(71299);
// EXTERNAL MODULE: ./src/components/InjectedComponents/TypedMessageRenderer.tsx + 1 modules
var TypedMessageRenderer = __webpack_require__(34209);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostReplacer.tsx









const useStyles = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        overflowWrap: 'break-word'
    }
});
function PostReplacer(props) {
    const { classes  } = useStyles();
    const postMessage = usePostInfo/* usePostInfoDetails.postMessage */.H9.postMessage();
    const postPayload = usePostInfo/* usePostInfoDetails.postPayload */.H9.postPayload();
    const allPostReplacement = (0,shared_src.useValueRef)(settings/* allPostReplacementSettings */.zs);
    const plugins = (0,src/* useActivatedPluginsSNSAdaptor */.Pz)();
    const processedPostMessage = (0,react.useMemo)(()=>{
        return plugins.reduce((x, plugin)=>{
            var ref;
            const result = esm/* Result.wrap */.x4.wrap(()=>{
                var ref1;
                return (ref = (ref1 = plugin.typedMessageTransformer) === null || ref1 === void 0 ? void 0 : ref1.call(plugin, x)) !== null && ref !== void 0 ? ref : x;
            }).unwrapOr(x);
            if ((0,shared_src.isTypedMessageTuple)(result)) return result;
            console.warn('[TypedMessage] typedMessageTransformer that return a non TypedMessageTuple is not supported yet. This transform is ignored', result);
            return x;
        }, postMessage);
    }, [
        plugins.map((x)=>x.ID
        ).join(),
        postMessage
    ]);
    const shouldReplacePost = // replace all posts
    allPostReplacement || // replace posts which enhanced by plugins
    processedPostMessage.items.some((x)=>!(0,shared_src.isWellKnownTypedMessages)(x)
    ) || // replace posts which encrypted by Mask
    postPayload.ok;
    // zip/unzip original post
    (0,react.useEffect)(()=>{
        var ref5, ref6;
        if (shouldReplacePost) (ref5 = props.zip) === null || ref5 === void 0 ? void 0 : ref5.call(props);
        else (ref6 = props.unzip) === null || ref6 === void 0 ? void 0 : ref6.call(props);
    }, [
        shouldReplacePost
    ]);
    return shouldReplacePost ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderer/* DefaultTypedMessageRenderer */.sF, {
            message: (0,shared_src.makeTypedMessageTuple)(processedPostMessage.items.filter((x)=>!(0,shared_src.isTypedMessagePromise)(x)
            ))
        })
    }) : null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx







function injectPostReplacer(config = {
}, additionalPropsToPostReplacer = ()=>({
    })
, useCustomStyles = (0,theme_src/* makeStyles */.ZL)()({
})) {
    const PostReplacerDefault = /*#__PURE__*/ (0,react.memo)(function PostReplacerDefault1(props) {
        const { classes  } = useCustomStyles();
        const additionalProps = additionalPropsToPostReplacer(classes);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacer, {
            ...additionalProps,
            zip: props.zipPost,
            unzip: props.unZipPost
        }));
    });
    const { zipPost , unzipPost  } = config;
    const zipPostF = zipPost || lodash.noop;
    const unzipPostF = unzipPost || lodash.noop;
    return function injectPostReplacer1(current, signal) {
        signal.addEventListener('abort', unzipPostF);
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(current.rootNodeProxy.afterShadow, {
            key: 'post-replacer',
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacerDefault, {
                zipPost: ()=>zipPostF(current.rootNodeProxy)
                ,
                unZipPost: ()=>unzipPostF(current.rootNodeProxy)
                ,
                ...current
            })
        }));
    };
}


/***/ })

}]);