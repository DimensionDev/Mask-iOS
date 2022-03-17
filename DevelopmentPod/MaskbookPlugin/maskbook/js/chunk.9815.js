"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9815],{

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
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39850);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61751);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85848);






function useFriendsList() {
    const ref = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.friends */ .EJ.friends);
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
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useCurrentVisitingIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.currentVisitingIdentityProvider */ .LM.collecting.currentVisitingIdentityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useMyIdentities() {
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles */ .EJ.profiles);
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
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
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
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(65375);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(40543);
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
            ...snsId === base/* MINDS_ID */.fN || snsId === facebook_com_base/* FACEBOOK_ID */.Iz ? {
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
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* ErrorBoundary */.SV, {
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

/***/ 29047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39850);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43021);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme)=>({
        body: {
            display: 'flex',
            justifyContent: 'center'
        },
        player: {
            maxWidth: '90%',
            maxHeight: '90%',
            border: 'none'
        },
        errorPlaceholder: {
            padding: '82px 0',
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            width: '100%'
        },
        loadingPlaceholder: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '74px 0'
        },
        loadingIcon: {
            width: 36,
            height: 52
        },
        errorIcon: {
            width: 36,
            height: 36
        },
        iframe: {
            minHeight: 1,
            minWidth: 1
        }
    })
);
const ModelView = ({ source , ...rest })=>{
    const { classes  } = useStyles();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!source) return null;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ...rest,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .AssetPlayer */ .IR, {
                url: source,
                options: {
                    playsInline: true
                },
                classes: classes,
                showIframeFromInit: true
            })
        }));
    }, [
        source
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModelView);


/***/ }),

/***/ 91922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ PetDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useTimeout.js
var useTimeout = __webpack_require__(48757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(39850);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(68681);
// EXTERNAL MODULE: ./src/plugins/Pets/messages.ts
var messages = __webpack_require__(34740);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/plugins/Pets/constants.ts
var constants = __webpack_require__(72214);
;// CONCATENATED MODULE: ./src/plugins/Pets/SNSAdaptor/PetShareDialog.tsx







const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            margin: theme.spacing(0, 2.5)
        },
        shareNotice: {
            color: '#222',
            fontSize: '16px',
            fontFamily: 'TwitterChirp',
            lineHeight: '16px',
            marginTop: theme.spacing(2)
        },
        shareButton: {
            width: '100%',
            margin: theme.spacing(4, 0, 3)
        }
    })
);
function PetShareDialog({ onClose  }) {
    var _utils, ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const shareLink = (ref = (_utils = social_network/* activatedSocialNetworkUI.utils */.LM.utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, '');
    const onShareClick = (0,react.useCallback)(()=>{
        if (shareLink) {
            const search = '?text=' + constants/* Share_Twitter_TXT */.Q;
            shareLink.search = search;
            shareLink.href = shareLink.origin + shareLink.pathname + shareLink.search;
            const share = shareLink.toString();
            window.open(share, '_blank', 'noopener noreferrer');
        }
        onClose();
    }, [
        shareLink
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.shareNotice,
                children: t('plugin_pets_dialog_success')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                onClick: onShareClick,
                variant: "contained",
                size: "large",
                className: classes.shareButton,
                children: t('plugin_pets_dialog_btn_share')
            })
        ]
    }));
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(66580);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Autocomplete/Autocomplete.js + 1 modules
var Autocomplete = __webpack_require__(12170);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(56561);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(15672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(20333);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(91755);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(34433);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Snackbar/Snackbar.js + 1 modules
var Snackbar = __webpack_require__(46663);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.72_154258abcf19999eeddd92026c0a2f6c/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(16576);
// EXTERNAL MODULE: ./src/plugins/Pets/SNSAdaptor/PreviewBox.tsx
var PreviewBox = __webpack_require__(84799);
// EXTERNAL MODULE: ./src/plugins/Pets/types.ts
var types = __webpack_require__(23209);
// EXTERNAL MODULE: ./src/plugins/Pets/hooks/index.ts + 3 modules
var hooks = __webpack_require__(37759);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(83634);
;// CONCATENATED MODULE: ./src/plugins/Pets/SNSAdaptor/ImageLoader.tsx




function ImageLoader(props) {
    const [loaded, setLoaded] = (0,react.useState)(false);
    const onErrorHandle = (event)=>{
        event.currentTarget.src = constants/* DefaultIcon */.tl;
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                ...props,
                onLoad: ()=>setLoaded(Boolean(props.src))
                ,
                onError: onErrorHandle,
                style: {
                    display: loaded || !props.src ? 'block' : 'none'
                }
            }),
            !loaded && Boolean(props.src) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                size: 20
            }) : null
        ]
    }));
}

// EXTERNAL MODULE: ./src/plugins/Pets/settings.ts
var settings = __webpack_require__(30692);
;// CONCATENATED MODULE: ./src/plugins/Pets/SNSAdaptor/PetSetDialog.tsx
















const PetSetDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        desBox: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: theme.spacing(3)
        },
        des: {
            color: '#7b8192',
            fontSize: '12px'
        },
        input: {
            margin: theme.spacing(2, 0, 0)
        },
        inputOption: {
            margin: theme.spacing(4, 0, 0)
        },
        inputBorder: {
            borderRadius: theme.spacing(1),
            padding: theme.spacing(1)
        },
        inputArea: {
            borderRadius: theme.spacing(1),
            padding: theme.spacing(2)
        },
        menuItem: {
            width: '100%'
        },
        btn: {
            margin: theme.spacing(8, 0, 2)
        },
        thumbnail: {
            width: 25,
            height: 25,
            objectFit: 'cover',
            margin: theme.spacing(0, 1, 0, 0),
            display: 'inline-block',
            borderRadius: 4
        },
        glbIcon: {
            width: 15,
            height: 18,
            marginLeft: theme.spacing(1)
        },
        itemFix: {
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        },
        itemTxt: {
            flex: 1,
            marginLeft: theme.spacing(0.5)
        },
        prevBox: {
            margin: theme.spacing(2, 0, 0),
            border: '1px dashed #ccc',
            borderRadius: 4,
            height: 'calc(100% - 16px)',
            boxSizing: 'border-box',
            padding: 4
        },
        boxPaper: {
            backgroundColor: theme.palette.mode === 'dark' ? '#1B1E38' : '#FFFFFF',
            marginBottom: 10,
            boxShadow: theme.palette.mode === 'dark' ? '0 0 5px #FFFFFF' : '0 0 5px #CCCCCC'
        }
    })
);
function PetSetDialog({ configNFTs , onClose  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,theme_src/* useStylesExtends */.Bc)(PetSetDialog_useStyles(), {});
    const { showSnackbar  } = (0,theme_src/* useCustomSnackbar */.Ii)();
    const [loading, setLoading] = (0,react.useState)(false);
    const checked = (0,src/* useValueRef */.E)(settings/* petShowSettings */.v);
    const [isReady, cancel] = (0,useTimeout/* default */.Z)(2000);
    const user = (0,hooks/* useUser */.aF)();
    const nfts = (0,hooks/* useNFTs */.a1)(user, configNFTs);
    const extraData = (0,hooks/* useNFTsExtra */.NM)(configNFTs);
    const [collection, setCollection] = (0,react.useState)(constants/* initCollection */.FI);
    const [isCollectionsError, setIsCollectionsError] = (0,react.useState)(false);
    const [metaData, setMetaData] = (0,react.useState)(constants/* initMeta */.u7);
    const [isImageError, setIsImageError] = (0,react.useState)(false);
    const [isTipShow, setIsTipShow] = (0,react.useState)(false);
    const [holderChange, setHolderChange] = (0,react.useState)(true);
    const [tokenInfoSelect, setTokenInfoSelect] = (0,react.useState)(null);
    const [inputTokenName, setInputTokenName] = (0,react.useState)('');
    const closeDialogHandle = ()=>{
        setIsTipShow(true);
        onClose();
        isReady() ? setIsTipShow(false) : cancel();
        messages/* PluginPetMessages.events.setResult.sendToAll */.s.events.setResult.sendToAll(Math.random());
    };
    const saveHandle = async ()=>{
        if (!collection.name) {
            setIsCollectionsError(true);
            return;
        }
        if (!metaData.image) {
            setIsImageError(true);
            return;
        }
        setLoading(true);
        const chosenToken = collection.tokens.find((item)=>item.mediaUrl === metaData.image
        );
        var ref;
        const meta = {
            ...metaData,
            userId: user.userId,
            contract: collection.contract,
            tokenId: (ref = chosenToken === null || chosenToken === void 0 ? void 0 : chosenToken.tokenId) !== null && ref !== void 0 ? ref : ''
        };
        try {
            await messages/* PluginPetRPC.setUserAddress */.k.setUserAddress(user);
            await messages/* PluginPetRPC.saveEssay */.k.saveEssay(user.address, meta, user.userId);
            closeDialogHandle();
        } catch  {
            showSnackbar(t('plugin_pets_dialog_fail'), {
                variant: 'error'
            });
        } finally{
            setLoading(false);
        }
    };
    const onCollectionChange = (v)=>{
        const matched = nfts.find((item)=>item.name === v
        );
        if (matched) {
            setCollection(matched);
            setTokenInfoSelect(null);
            setInputTokenName('');
            setMetaData({
                ...metaData,
                userId: user.userId,
                tokenId: '',
                image: ''
            });
        }
        setIsCollectionsError(false);
    };
    const onImageChange = (v)=>{
        setTokenInfoSelect(v);
        var ref;
        setInputTokenName((ref = v === null || v === void 0 ? void 0 : v.name) !== null && ref !== void 0 ? ref : '');
        var ref1, ref2;
        setMetaData({
            ...metaData,
            userId: user.userId,
            tokenId: (ref1 = v === null || v === void 0 ? void 0 : v.tokenId) !== null && ref1 !== void 0 ? ref1 : '',
            image: (ref2 = v === null || v === void 0 ? void 0 : v.mediaUrl) !== null && ref2 !== void 0 ? ref2 : '',
            type: (v === null || v === void 0 ? void 0 : v.glbSupport) ? types/* ImageType.GLB */._.GLB : types/* ImageType.NORMAL */._.NORMAL
        });
        setIsImageError(false);
    };
    const setMsgValueCheck = (v)=>{
        if (v.length <= 100) {
            setMetaData({
                ...metaData,
                word: v
            });
        }
    };
    const imageChose = (0,react.useMemo)(()=>{
        if (!metaData.image) return '';
        const imageChosen = collection.tokens.find((item)=>item.tokenId === metaData.tokenId
        );
        return imageChosen === null || imageChosen === void 0 ? void 0 : imageChosen.mediaUrl;
    }, [
        metaData.image,
        collection.tokens
    ]);
    const renderImg = (address)=>{
        const matched = extraData.find((item)=>(0,utils_address/* isSameAddress */.Wr)(item.address, address)
        );
        var ref;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ImageLoader, {
            className: classes.thumbnail,
            src: (ref = matched === null || matched === void 0 ? void 0 : matched.iconURL) !== null && ref !== void 0 ? ref : ''
        }));
    };
    const paperComponent = (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.boxPaper,
            children: children
        })
    ;
    const nftsRender = (0,react.useMemo)(()=>{
        var ref;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Autocomplete/* default */.Z, {
            disablePortal: true,
            id: "collection-box",
            options: nfts,
            onChange: (_event, newValue)=>{
                return onCollectionChange((ref = newValue === null || newValue === void 0 ? void 0 : newValue.name) !== null && ref !== void 0 ? ref : '');
            },
            getOptionLabel: (option)=>option.name
            ,
            PopperComponent: theme_src/* ShadowRootPopper */.sV,
            PaperComponent: ({ children  })=>paperComponent(children)
            ,
            renderOption: (props, option)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                    value: option.name,
                    disabled: !option.tokens.length,
                    className: classes.menuItem,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        ...props,
                        component: "li",
                        className: classes.itemFix,
                        children: [
                            renderImg(option.contract),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.itemTxt,
                                children: option.name
                            })
                        ]
                    })
                }, option.name)
            ,
            renderInput: (params)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    ...params,
                    label: t('plugin_pets_dialog_contract'),
                    error: isCollectionsError,
                    className: classes.input,
                    inputProps: {
                        ...params.inputProps
                    },
                    InputProps: {
                        ...params.InputProps,
                        classes: {
                            root: classes.inputBorder
                        }
                    }
                })
        }));
    }, [
        nfts,
        extraData
    ]);
    const tokensRender = (0,react.useMemo)(()=>{
        var _name;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Autocomplete/* default */.Z, {
            disablePortal: true,
            id: "token-box",
            options: collection.tokens,
            inputValue: inputTokenName,
            onChange: (_event, newValue)=>onImageChange(newValue)
            ,
            getOptionLabel: (option)=>(_name = option.name) !== null && _name !== void 0 ? _name : ''
            ,
            PaperComponent: ({ children  })=>paperComponent(children)
            ,
            PopperComponent: theme_src/* ShadowRootPopper */.sV,
            renderOption: (props, option)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    component: "li",
                    className: classes.itemFix,
                    ...props,
                    children: [
                        !option.glbSupport ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.thumbnail,
                            src: option.mediaUrl
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: option.name
                        }),
                        option.glbSupport ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.glbIcon,
                            src: constants/* GLB3DIcon */.sC
                        }) : null
                    ]
                })
            ,
            renderInput: (params)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    ...params,
                    label: t('plugin_pets_dialog_token'),
                    error: isImageError,
                    className: classes.input,
                    inputProps: {
                        ...params.inputProps
                    },
                    InputProps: {
                        ...params.InputProps,
                        classes: {
                            root: classes.inputBorder
                        }
                    }
                })
        }));
    }, [
        collection.tokens,
        tokenInfoSelect
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewBox/* PreviewBox */.$, {
                                    message: metaData.word,
                                    imageUrl: imageChose,
                                    tokenInfo: tokenInfoSelect
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                item: true,
                                xs: 8,
                                children: [
                                    nftsRender,
                                    tokensRender,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                        className: classes.inputOption,
                                        InputProps: {
                                            classes: {
                                                root: classes.inputArea
                                            }
                                        },
                                        label: holderChange ? t('plugin_pets_dialog_msg_optional') : t('plugin_pets_dialog_msg'),
                                        fullWidth: true,
                                        multiline: true,
                                        rows: 3,
                                        disabled: !collection.name,
                                        value: metaData.word,
                                        onChange: (e)=>setMsgValueCheck(e.target.value)
                                        ,
                                        onBlur: ()=>setHolderChange(true)
                                        ,
                                        onFocus: ()=>setHolderChange(false)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            checked: checked,
                            onChange: (e)=>settings/* petShowSettings.value */.v.value = e.target.checked
                        }),
                        label: t('plugin_pets_dialog_check_title'),
                        sx: {
                            marginTop: '4px'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                        loading: loading,
                        color: "inherit",
                        size: "large",
                        fullWidth: true,
                        variant: "contained",
                        className: classes.btn,
                        onClick: saveHandle,
                        disabled: !collection.name || !metaData.image,
                        children: t('plugin_pets_dialog_btn')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.desBox,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.des,
                                children: t('plugin_pets_dialog_created')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.des,
                                children: t('plugin_pets_dialog_powered')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.Z, {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                },
                open: isTipShow,
                message: t('plugin_pets_dialog_success')
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Pets/SNSAdaptor/PetDialog.tsx










var PetFriendNFTStep;
(function(PetFriendNFTStep) {
    PetFriendNFTStep["SetFriendNFT"] = 'set';
    PetFriendNFTStep["ShareFriendNFT"] = 'share';
})(PetFriendNFTStep || (PetFriendNFTStep = {}));
function PetDialog() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { open , closeDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* PluginPetMessages.events.essayDialogUpdated */.s.events.essayDialogUpdated, ()=>{});
    const [step, setStep] = (0,react.useState)(PetFriendNFTStep.SetFriendNFT);
    const [configNFTs, setConfigNFTs] = (0,react.useState)(undefined);
    const [isReady, cancel] = (0,useTimeout/* default */.Z)(500);
    (0,useAsync/* default */.Z)(async ()=>{
        setConfigNFTs(await messages/* PluginPetRPC.getConfigEssay */.k.getConfigEssay());
    }, []);
    const handleSetDialogClose = ()=>setStep(PetFriendNFTStep.ShareFriendNFT)
    ;
    const handleClose = ()=>{
        closeDialog();
        isReady() ? setStep(PetFriendNFTStep.SetFriendNFT) : cancel();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: handleClose,
        title: t(step === PetFriendNFTStep.SetFriendNFT ? 'plugin_pets_dialog_title' : 'plugin_pets_dialog_title_share'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: step === PetFriendNFTStep.SetFriendNFT ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PetSetDialog, {
                onClose: handleSetDialogClose,
                configNFTs: configNFTs
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PetShareDialog, {
                onClose: handleClose
            })
        })
    }));
}


/***/ }),

/***/ 84799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ PreviewBox),
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74491);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13573);
/* harmony import */ var _ModelView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29047);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        box: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100% - 16px)',
            border: '1px dashed #bbb',
            borderRadius: '4px',
            marginTop: '16px',
            boxSizing: 'border-box',
            padding: '8px',
            overflow: 'hidden'
        },
        msgBox: {
            width: '80%',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 0 8px #ddd',
            opacity: 1,
            pointerEvents: 'none',
            transition: 'all 200ms',
            padding: '12px',
            fontSize: '12px',
            lineHeight: '16px',
            color: '#222',
            textAlign: 'center',
            marginBottom: '12px',
            '&::before': {
                content: '""',
                width: '8px',
                height: '8px',
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: '-4px',
                left: '50%',
                boxShadow: '3px 3px 6px #ccc',
                transform: 'translateX(-50%) rotate(45deg)'
            },
            '@keyframes word-show': {
                '0%': {
                    opacity: '0',
                    transform: 'scale3d(1, 1, 1)'
                },
                '30%': {
                    transform: 'scale3d(1.25, 0.75, 1)'
                },
                '40%': {
                    transform: 'scale3d(0.75, 1.25, 1)'
                },
                '50%': {
                    transform: 'scale3d(1.15, 0.85, 1)'
                },
                '65%': {
                    transform: 'scale3d(0.95, 1.05, 1)'
                },
                '75%': {
                    transform: 'scale3d(1.05, 0.95, 1)'
                },
                '100%': {
                    transform: 'scale3d(1, 1, 1)'
                }
            }
        },
        wordShow: {
            animation: 'word-show 0.9s both;',
            fontSize: '12px',
            fontFamily: 'TwitterChirp',
            lineHeight: '16px',
            color: '#222',
            textAlign: 'left',
            overflowWrap: 'break-word'
        },
        image: {
            borderRadius: '4px',
            width: '100%',
            opacity: '0',
            transition: 'all 200ms',
            '@keyframes image-show': {
                '0%': {
                    opacity: '0'
                },
                '100%': {
                    opacity: '1'
                }
            },
            animation: 'image-show 0.4s both;'
        },
        noData: {
            paddingBottom: '-12px',
            color: '#7b8192',
            fontSize: '12px',
            textAlign: 'center'
        },
        glbTransfer: {
            position: 'absolute',
            width: 45,
            height: 20,
            bottom: '-10px',
            cursor: 'pointer'
        },
        glbView: {
            width: '100%',
            height: 150
        }
    })
);
function PreviewBox(props) {
    var ref;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), {});
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.box,
        children: [
            props.message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
                    [classes.msgBox]: true,
                    [classes.wordShow]: true
                }),
                children: props.message
            }),
            props.imageUrl && (((ref = props.tokenInfo) === null || ref === void 0 ? void 0 : ref.glbSupport) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ModelView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classes.glbView,
                    source: props.imageUrl
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                className: classes.image,
                src: props.imageUrl
            })),
            !(props.message || props.imageUrl) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.noData,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    color: "textPrimary",
                    children: t('plugin_pets_dialog_preview')
                })
            })
        ]
    }));
}


/***/ }),

/***/ 37759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qT": () => (/* reexport */ useCurrentVisitingUser),
  "Lo": () => (/* reexport */ useDefaultEssay),
  "$n": () => (/* reexport */ useEssay),
  "a1": () => (/* reexport */ useNFTs),
  "NM": () => (/* reexport */ useNFTsExtra),
  "aF": () => (/* reexport */ useUser)
});

// EXTERNAL MODULE: ./src/plugins/Pets/types.ts
var types = __webpack_require__(23209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
// EXTERNAL MODULE: ./src/plugins/Pets/messages.ts
var messages = __webpack_require__(34740);
// EXTERNAL MODULE: ./src/plugins/Pets/constants.ts
var constants = __webpack_require__(72214);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(51596);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
;// CONCATENATED MODULE: ./src/plugins/Pets/hooks/useUser.ts





function useUser() {
    const [user, setUser] = (0,react.useState)({
        userId: '',
        address: ''
    });
    const wallet = (0,useWallet/* useWallet */.O)();
    const whoAmI = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    (0,react.useEffect)(()=>{
        var ref;
        if (!((wallet === null || wallet === void 0 ? void 0 : wallet.address) && (whoAmI === null || whoAmI === void 0 ? void 0 : (ref = whoAmI.identifier) === null || ref === void 0 ? void 0 : ref.userId))) return;
        setUser({
            userId: whoAmI.identifier.userId,
            address: wallet === null || wallet === void 0 ? void 0 : wallet.address
        });
    }, [
        wallet,
        whoAmI
    ]);
    return user;
}
function useCurrentVisitingUser(flag) {
    const [user, setUser] = (0,react.useState)({
        userId: '',
        address: ''
    });
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    (0,useAsync/* default */.Z)(async ()=>{
        let address = '';
        try {
            var _userId;
            const response = await messages/* PluginPetRPC.getUserAddress */.k.getUserAddress((_userId = identity.identifier.userId) !== null && _userId !== void 0 ? _userId : '');
            if (response) address = response;
        } finally{
            var _userId1;
            setUser({
                userId: (_userId1 = identity.identifier.userId) !== null && _userId1 !== void 0 ? _userId1 : '',
                address: address
            });
        }
    }, [
        identity,
        flag
    ]);
    return user;
}

;// CONCATENATED MODULE: ./src/plugins/Pets/hooks/useEssay.ts






function useEssay(user, refresh) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!user.address) return null;
        const metaData = await messages/* PluginPetRPC.getEssay */.k.getEssay(user.address);
        return (metaData === null || metaData === void 0 ? void 0 : metaData.userId) === user.userId ? metaData : null;
    }, [
        user,
        refresh
    ]).value;
}
function useDefaultEssay(user) {
    const [essayMeta, setEssayMeta] = (0,react.useState)(undefined);
    const profileUser = useUser();
    (0,react.useEffect)(()=>{
        if ((user === null || user === void 0 ? void 0 : user.userId) || (user === null || user === void 0 ? void 0 : user.userId) !== '$unknown') {
            const isProfile = user.userId === profileUser.userId;
            const isMASK = user.userId === constants/* MASK_TWITTER */.qF;
            setEssayMeta({
                image: isMASK ? constants/* Punk3D.url */.jW.url : isProfile ? constants/* PunkIcon */.Dk : '',
                word: isMASK ? constants/* DEFAULT_PUNK_MASK_WORD */.tJ : constants/* DEFAULT_SET_WORD */.zi,
                type: isMASK ? types/* ImageType.GLB */._.GLB : types/* ImageType.NORMAL */._.NORMAL
            });
        } else {
            setEssayMeta(undefined);
        }
    }, [
        user,
        profileUser
    ]);
    return essayMeta;
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts + 2 modules
var src = __webpack_require__(54492);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(63653);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useSocket.ts
var useSocket = __webpack_require__(23070);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(83468);
// EXTERNAL MODULE: ../web3-shared/evm/constants/utils.ts
var utils = __webpack_require__(91213);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js
var cloneDeep = __webpack_require__(46440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/findLastIndex.js
var findLastIndex = __webpack_require__(86049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ./src/plugins/Pets/hooks/useNfts.ts








function useInitNFTs(config) {
    return (0,react.useMemo)(()=>{
        if (!config) return [];
        const nftList = (0,utils/* transform */.vs)(config)();
        return Object.keys(nftList).map((i)=>{
            const value = nftList[i];
            return {
                name: i,
                contract: value,
                tokens: []
            };
        });
    }, [
        config
    ]);
}
function useNFTs(user, configNFTs) {
    const initContracts = useInitNFTs(configNFTs);
    const [nfts, setNfts] = (0,react.useState)(initContracts);
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [fetchTotal, setFetchTotal] = (0,react.useState)([]);
    var ref2;
    const { data: collectibles , state  } = (0,useCollectibles/* useCollectibles */.d)((ref2 = user === null || user === void 0 ? void 0 : user.address) !== null && ref2 !== void 0 ? ref2 : '', chainId);
    (0,react.useEffect)(()=>{
        if (!initContracts.length) return;
        const tempNFTs = (0,cloneDeep/* default */.Z)(initContracts);
        if (collectibles.length && (state === useSocket/* SocketState.done */.d.done || state === useSocket/* SocketState.sent */.d.sent)) {
            const total = [
                ...fetchTotal,
                ...collectibles
            ];
            setFetchTotal(total);
            for (const NFT of total){
                var ref, ref1;
                const sameNFT = tempNFTs.find((temp)=>(0,address/* isSameAddress */.Wr)(temp.contract, NFT.contractDetailed.address)
                );
                if (!sameNFT) continue;
                const isPunk = (0,address/* isSameAddress */.Wr)(NFT.contractDetailed.address, constants/* Punk3D.contract */.jW.contract) && NFT.tokenId === constants/* Punk3D.tokenId */.jW.tokenId;
                if (isPunk) {
                    NFT.info.mediaUrl = constants/* Punk3D.url */.jW.url;
                }
                const glbSupport = ((ref = NFT.info.mediaUrl) === null || ref === void 0 ? void 0 : ref.endsWith('.glb')) || isPunk;
                if ((ref1 = NFT.info.mediaUrl) === null || ref1 === void 0 ? void 0 : ref1.includes('ipfs://')) {
                    NFT.info.mediaUrl = (0,pipes/* resolveIPFSLink */.r5)(NFT.info.mediaUrl.replace('ipfs://', ''));
                }
                const item = {
                    ...NFT.info,
                    tokenId: NFT.tokenId,
                    glbSupport
                };
                const sameTokenIndex = (0,findLastIndex/* default */.Z)(sameNFT.tokens, (v)=>v.tokenId === NFT.tokenId
                );
                if (sameTokenIndex === -1) {
                    sameNFT.tokens.push(item);
                } else {
                    sameNFT.tokens[sameTokenIndex] = item;
                }
            }
        }
        setNfts(tempNFTs);
        return ()=>{};
    }, [
        JSON.stringify(user),
        JSON.stringify(collectibles),
        state,
        JSON.stringify(initContracts)
    ]);
    return nfts;
}
function useNFTsExtra(configNFTs) {
    const initContracts = useInitNFTs(configNFTs);
    const [retry, setRetry] = (0,react.useState)(0);
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [extra, setExtra] = (0,react.useState)([]);
    (0,useAsync/* default */.Z)(async ()=>{
        if (!initContracts.length) return;
        if (retry > 2) return;
        let requests = [];
        if (!extra.length) {
            requests = initContracts.map((nft)=>src/* OpenSea.getContract */.Nn.getContract(nft.contract, chainId)
            );
        } else {
            // openSea api request should not immediately
            await (0,esm/* delay */.gw)(3000);
            requests = extra.map((nft, index)=>{
                if (nft.symbol && nft.name !== 'Unknown Token') {
                    return Promise.resolve(nft);
                }
                return src/* OpenSea.getContract */.Nn.getContract(initContracts[index].contract, chainId);
            });
        }
        const lists = await Promise.all(requests);
        setExtra(lists);
        setRetry(retry + 1);
    }, [
        retry,
        JSON.stringify(initContracts)
    ]);
    return extra;
}

;// CONCATENATED MODULE: ./src/plugins/Pets/hooks/index.ts





/***/ }),

/***/ 34740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PluginPetRPC),
/* harmony export */   "s": () => (/* binding */ PluginPetMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63151);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72214);



if (false) {}
const PluginPetMessages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PetsPluginID */ .Dt, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const PluginPetRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PetsPluginID */ .Dt, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4074), __webpack_require__.e(7907)]).then(__webpack_require__.bind(__webpack_require__, 24895))
, PluginPetMessages.events.rpc);


/***/ }),

/***/ 30692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ petShowSettings)
/* harmony export */ });
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91296);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72214);


const petShowSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_1__/* .PetsPluginID */ .Dt}+selectedClosePet`, true, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});


/***/ }),

/***/ 65375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "Sf": () => (/* binding */ isMinds),
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "fy": () => (/* binding */ mindsWorkerBase)
/* harmony export */ });
const MINDS_ID = 'minds.com';
const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const mindsBase = {
    networkIdentifier: MINDS_ID,
    name: 'minds',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('minds.com');
    }
};
function isMinds(ui) {
    return ui.networkIdentifier === MINDS_ID;
}
const mindsWorkerBase = {
    ...mindsBase,
    gunNetworkHint: 'minds-'
};


/***/ }),

/***/ 63653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCollections),
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67937);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66580);
/* harmony import */ var _useSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23070);




function useCollections(address, chainId, dependReady) {
    const id = `mask.fetchNonFungibleCollectionAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectionAsset',
        params: {
            address: address,
            pageSize: 200
        }
    };
    return (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
}
function useCollectibles(address, chainId, dependReady) {
    const { erc721Tokens  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const id = `mask.fetchNonFungibleCollectibleAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectibleAssetV2',
        params: {
            address: address,
            pageSize: 30
        }
    };
    const { data , state , error , retry  } = (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
    const all = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        ...data !== null && data !== void 0 ? data : [],
        ...erc721Tokens.getCurrentValue().filter((x)=>(!chainId || x.contractDetailed.chainId === chainId) && (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(x.info.owner, address)
        ), 
    ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
    );
    return {
        data: all,
        state,
        error,
        retry
    };
}


/***/ }),

/***/ 23070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SocketState),
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67937);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28577);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);




var SocketState;
(function(SocketState) {
    SocketState["init"] = "init";
    SocketState["sent"] = "sent";
    SocketState["receiving"] = "receiving";
    SocketState["done"] = "done";
})(SocketState || (SocketState = {}));
const useSocket = (message)=>{
    const { providerSocket  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(SocketState.init);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
    const { value: socket , loading  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>providerSocket
    , []);
    const { retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!socket || !message.id || loading) return;
        const requestId1 = `${message.id}_${id}`;
        const notifyUpdatedHook = (info)=>{
            if (!info.done) {
                setState(SocketState.receiving);
            } else {
                // workaround for get data from cache
                setTimeout(()=>setState(SocketState.done)
                , 0);
            }
            setError(info.error);
            if (!socket) return;
            const requestId = `${message.id}_${id}`;
            setData(socket.getResult(requestId));
        };
        socket.send({
            ...message,
            notify: notifyUpdatedHook,
            id: requestId1
        });
        // Get data from cache
        setData(socket.getResult(requestId1));
        setState(SocketState.sent);
    }, [
        message.id,
        socket,
        loading,
        id
    ]);
    const handleRetry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setId((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
        setState(SocketState.sent);
        setData([]);
        retry();
    }, [
        retry
    ]);
    return {
        data: data !== null && data !== void 0 ? data : [],
        state,
        error,
        retry: handleRetry
    };
};


/***/ })

}]);