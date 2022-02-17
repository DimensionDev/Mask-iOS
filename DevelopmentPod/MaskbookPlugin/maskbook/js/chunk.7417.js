"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7417],{

/***/ 12127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useMyPersonas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(21949);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
;// CONCATENATED MODULE: ./src/utils/comparer.ts
function PersonaComparer(a, b) {
    if (a.createdAt.getTime() !== b.createdAt.getTime()) return false;
    if (a.updatedAt.getTime() !== b.updatedAt.getTime()) return false;
    if (a.fingerprint !== b.fingerprint) return false;
    if (a.hasPrivateKey !== b.hasPrivateKey) return false;
    if (!a.identifier.equals(b.identifier)) return false;
    // simple check
    if (a.linkedProfiles.size !== b.linkedProfiles.size) return false;
    if (a.nickname !== b.nickname) return false;
    return true;
}
function PersonaArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    if (Object.getOwnPropertySymbols(a) || Object.getOwnPropertySymbols(b)) return false;
    return a.every((persona, index)=>PersonaComparer(persona, b[index])
    );
}

// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(86865);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js
var debounce = __webpack_require__(89208);
;// CONCATENATED MODULE: ./src/components/DataSource/useMyPersonas.ts






let isLoading;
const independentRef = {
    myPersonasRef: new umd.ValueRef([], PersonaArrayComparer)
};
{
    const query = ()=>{
        return service/* default.Identity.queryMyPersonas */.ZP.Identity.queryMyPersonas().then((p)=>{
            independentRef.myPersonasRef.value = p.filter((x)=>!x.uninitialized
            );
            isLoading = null;
            service/* default.Helper.__deprecated__setStorage */.ZP.Helper.__deprecated__setStorage('mobileIsMyPersonasInitialized', independentRef.myPersonasRef.value.length > 0);
        });
    };
    const debounceQuery = (0,debounce/* default */.Z)(query, 500, {
        trailing: true
    });
    isLoading = query();
    messages/* MaskMessages.events.ownPersonaChanged.on */.q.events.ownPersonaChanged.on(debounceQuery);
}function useMyPersonas() {
    if (isLoading) throw isLoading;
    return (0,src/* useValueRef */.E)(independentRef.myPersonasRef);
}


/***/ }),

/***/ 38394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ usePersonaConnectStatus)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8267);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87050);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29980);
/* harmony import */ var _InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24957);
/* harmony import */ var _useActivatedUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68836);
/* harmony import */ var _useMyPersonas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12127);









const createPersona = ()=>{
    _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Welcome.openOptionsPage */ .ZP.Welcome.openOptionsPage(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .DashboardRoutes.Setup */ .vq.Setup);
};
const connectPersona = async ()=>{
    const currentPersonaIdentifier = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier();
    _settings_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentSetupGuideStatus */ .AI[_social_network__WEBPACK_IMPORTED_MODULE_5__.activatedSocialNetworkUI.networkIdentifier].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
        status: _InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_6__/* .SetupGuideStep.FindUsername */ .s.FindUsername,
        persona: currentPersonaIdentifier === null || currentPersonaIdentifier === void 0 ? void 0 : currentPersonaIdentifier.toText()
    });
};
function usePersonaConnectStatus() {
    const personas = (0,_useMyPersonas__WEBPACK_IMPORTED_MODULE_8__/* .useMyPersonas */ .n)();
    const lastRecognized = (0,_useActivatedUI__WEBPACK_IMPORTED_MODULE_7__/* .useLastRecognizedIdentity */ .FB)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const id = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(_social_network__WEBPACK_IMPORTED_MODULE_5__.activatedSocialNetworkUI.networkIdentifier, lastRecognized.identifier.userId);
        let connected = false;
        personas.forEach((p)=>{
            p.identifier;
            if (p.linkedProfiles.get(id)) {
                connected = true;
            }
        });
        const action = !personas.length ? createPersona : !connected ? connectPersona : null;
        return {
            connected,
            action,
            hasPersona: !!personas.length
        };
    }, [
        personas,
        lastRecognized,
        _social_network__WEBPACK_IMPORTED_MODULE_5__.activatedSocialNetworkUI
    ]);
}


/***/ }),

/***/ 32364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(95501);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(28527);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(52153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(71339);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(4739);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(98174);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(39419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(83573);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx

// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated



function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(29980);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(67908);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(81223);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
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
    const overwrite = social_network.activatedSocialNetworkUI.customization.componentOverwrite || {};
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,src/* useStylesExtends */.Bc)(useStyles({
        snsId: social_network.activatedSocialNetworkUI.networkIdentifier
    }), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
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
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(IncreaseStack, {
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
        }));
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

/***/ 41071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskPluginWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40675);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40201);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80640);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29980);
/* harmony import */ var _resources_MaskIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8231);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76342);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13138);
/* harmony import */ var _components_DataSource_usePersonaConnectStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38394);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76108);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55218);










const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        card: {
            margin: theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            border: `1px solid ${theme.palette.secondaryDivider}`,
            cursor: 'default',
            ...(0,_social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__/* .isTwitter */ .L3)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI) ? {
                borderRadius: 15,
                overflow: 'hidden'
            } : null
        },
        header: {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(2)
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.spacing(1.5)
        },
        action: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        body: {
            borderTop: `1px solid ${theme.palette.secondaryDivider}`,
            padding: theme.spacing(2)
        },
        button: {
            color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.twitterButtonText */ .ZN.twitterButtonText,
            '&,&:hover': {
                background: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.twitterButton */ .ZN.twitterButton
            }
        }
    };
});
function MaskPluginWrapper(props) {
    const { classes  } = useStyles();
    const { pluginName , children , action , publisher  } = props;
    const personaConnectStatus = (0,_components_DataSource_usePersonaConnectStatus__WEBPACK_IMPORTED_MODULE_6__/* .usePersonaConnectStatus */ .x)();
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const name = !personaConnectStatus.hasPersona ? t('please_create_persona') : !personaConnectStatus.connected ? t('please_connect_persona') : pluginName;
    const actionButton = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!personaConnectStatus.action) return null;
        const button = personaConnectStatus.hasPersona ? t('connect_persona') : t('create_persona');
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            variant: "contained",
            className: classes.button,
            onClick: personaConnectStatus.action,
            children: button
        }));
    }, [
        personaConnectStatus,
        t
    ]);
    const publisherInfo = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!publisher) return null;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    variant: "h6",
                    fontSize: "1.1rem",
                    fontWeight: "400",
                    color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
                    children: "Provided by"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    href: publisher.link,
                    underline: "none",
                    target: "_blank",
                    rel: "noopener",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        variant: "h6",
                        fontSize: "1.1rem",
                        fontWeight: "400",
                        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textPrimary */ .ZN.textPrimary,
                        children: publisher.name.fallback
                    })
                })
            ]
        }));
    }, [
        publisher
    ]);
    const inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.card,
        onClick: (ev)=>ev.stopPropagation()
        ,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskIcon__WEBPACK_IMPORTED_MODULE_3__/* .MaskIcon */ .ec, {
                        size: 45
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                variant: "h6",
                                fontSize: "1.1rem",
                                fontWeight: "400",
                                children: [
                                    "Mask Plugin ",
                                    !personaConnectStatus.connected && pluginName ? `(${pluginName})` : ''
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                variant: "h6",
                                fontSize: "1.1rem",
                                fontWeight: "400",
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.action,
                        children: actionButton || action || publisherInfo
                    })
                ]
            }),
            personaConnectStatus.connected && children ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.body,
                children: children
            }) : null
        ]
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            message: "Mask is loading this plugin..."
        }),
        children: inner
    }));
};


/***/ }),

/***/ 17417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(5521);
;// CONCATENATED MODULE: ../icons/plugins/Unlock.tsx


const UnlockIcon = (0,utils/* createIcon */.I)('UnlockIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M14.12 1.297h-3.4v3.416H5.287V1.297h-3.4v3.416H.965v1.623h.922v2.557c0 3.2 2.755 5.81 6.136 5.81 3.36 0 6.097-2.61 6.097-5.81V6.336h.915V4.713h-.915V1.297Zm-3.4 7.596c0 1.511-1.192 2.748-2.697 2.748a2.738 2.738 0 0 1-1.932-.807 2.762 2.762 0 0 1-.804-1.941V6.336h5.433v2.557Z",
        fill: "#FF5C66"
    })
}), '0 0 16 16');

// EXTERNAL MODULE: ./src/plugins/UnlockProtocol/base.ts
var base = __webpack_require__(86121);
// EXTERNAL MODULE: ./src/plugins/UnlockProtocol/constants.ts
var constants = __webpack_require__(30680);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"iv":{"type":"string","title":"iv"},"unlockLocks":{"type":"array","additionalProperties":true,"title":"unlockLocks","properties":{"unlocklock":{"type":"string","title":"unlocklock"},"chainid":{"type":"number","title":"chainid"}}},"post":{"type":"string","title":"post"}}}');
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/helpers.ts



const UnlockProtocolMetadataReader = (0,src/* createTypedMessageMetadataReader */.Bi)(constants/* pluginMetaKey */.rx, schema_namespaceObject);
const renderWithUnlockProtocolMetadata = (0,src/* createRenderWithMetadata */.mC)(UnlockProtocolMetadataReader);

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(36190);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(52153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Chip/Chip.js
var Chip = __webpack_require__(57277);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(32364);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var src_utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/plugins/UnlockProtocol/messages.ts
var messages = __webpack_require__(11443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.5.3/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(46149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/List/List.js
var List = __webpack_require__(1749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(26605);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(12976);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(18906);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/SNSAdaptor/LockInList.tsx





const useStyle = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        cursor: 'pointer',
        paddingLeft: 8
    },
    overflow: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    highlighted: {
        backgroundColor: 'inherit',
        color: 'inherit',
        fontWeight: 'bold'
    }
});
function LockInList(props) {
    var ref;
    const { classes  } = useStyle();
    const lock = props.item;
    const name = lock.lock.name;
    const secondary = lock.lock.address;
    const onClick = (0,react.useCallback)((ev)=>props.onChange(ev, !props.checked)
    , [
        props
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        button: true,
        onClick: onClick,
        disabled: props.disabled,
        ...props.ListItemProps,
        className: classnames_default()(classes.root, (ref = props.ListItemProps) === null || ref === void 0 ? void 0 : ref.className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                checked: props.checked,
                color: "primary",
                ...props.CheckboxProps
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                classes: {
                    primary: classes.overflow,
                    secondary: classes.overflow
                },
                primary: name,
                secondary: secondary
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.3_5f1f718baae1643018ff61bbe4484af0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(69961);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/SNSAdaptor/SelectRecipientsUnlockDialog.tsx








function SelectRecipientsUnlockDialogUI(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const [search, setSearch] = (0,react.useState)('');
    const LIST_ITEM_HEIGHT = 40;
    const { items , disabledItems  } = props;
    const itemsAfterSearch = (0,react.useMemo)(()=>{
        const fuse = new fuse_esm/* default */.Z(items, {
            keys: [
                'lock.name',
                'lock.address'
            ],
            isCaseSensitive: false,
            ignoreLocation: true,
            threshold: 0
        });
        return search === '' ? items : fuse.search(search).map((item)=>item.item
        );
    }, [
        search,
        items
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        open: props.open,
        title: t('plugin_unlockprotocol_select_unlock_lock'),
        onClose: props.onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                        value: search,
                        onChange: (e)=>setSearch(e.target.value)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        style: {
                            height: items.length * LIST_ITEM_HEIGHT || 40
                        },
                        dense: true,
                        children: itemsAfterSearch.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_unlockprotocol_no_lock_found",
                                        components: {
                                            dashboard: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                color: "primary",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://app.unlock-protocol.com/dashboard"
                                            })
                                        }
                                    })
                                })
                            })
                        }) : itemsAfterSearch.map((item, i)=>{
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LockInList, {
                                item: item,
                                search: search,
                                checked: props.selected.some((x)=>x.lock.address === item.lock.address
                                ),
                                disabled: props.disabled || (disabledItems === null || disabledItems === void 0 ? void 0 : disabledItems.includes(item)),
                                onChange: (_, checked)=>{
                                    if (checked) {
                                        props.onSelect(item);
                                    } else {
                                        props.onDeselect(item);
                                    }
                                }
                            }, i));
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    style: {
                        marginLeft: 'auto'
                    },
                    variant: "contained",
                    onClick: props.onClose,
                    children: t('plugin_unlockprotocol_submit_post')
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/SNSAdaptor/UnlockProtocolDialog.tsx











const useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        actions: {
            flexDirection: 'row'
        }
    })
);
function UnlockProtocolDialog(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const [open, setOpen] = (0,react.useState)(false);
    const address = (0,useAccount/* useAccount */.m)();
    const { classes  } = useStyles();
    const [currentUnlockChain, setCurrentUnlockChain] = (0,react.useState)((0,useChainId/* useChainId */.xx)());
    const [currentUnlockPost, setCurrentUnlockPost] = (0,react.useState)('');
    const [currentUnlockTarget, setCurrentUnlockTarget] = (0,react.useState)(()=>[]
    );
    const [availableUnlockTarget, setAvailableUnlockTarget] = (0,react.useState)(()=>[]
    );
    const { attachMetadata , dropMetadata  } = (0,plugin_infra_src/* useCompositionContext */.Cp)();
    (0,react.useEffect)(()=>{
        messages/* PluginUnlockProtocolRPC.getLocks */.T.getLocks(address).then((value)=>{
            if (value.length) {
                setAvailableUnlockTarget(value);
            }
        }).catch((error)=>{
            console.error(error);
            setAvailableUnlockTarget([
                {
                    lock: {
                        name: error.message || 'Some error occurred.',
                        chain: currentUnlockChain,
                        address: '0x0',
                        price: '0'
                    }
                }, 
            ]);
        });
    }, [
        address
    ]);
    const onInsert = ()=>{
        if (!!currentUnlockTarget.length && !!currentUnlockPost) {
            messages/* PluginUnlockProtocolRPC.encryptUnlockData */.T.encryptUnlockData(currentUnlockPost).then((encryption)=>{
                const uploadData = {
                    identifier: encryption.iv,
                    unlockLocks: currentUnlockTarget.map((x)=>{
                        return {
                            unlocklock: x.lock.address,
                            chainid: x.lock.chain
                        };
                    }),
                    unlockKey: encryption.key
                };
                messages/* PluginUnlockProtocolRPC.postUnlockData */.T.postUnlockData(uploadData).then((res)=>{
                    if (res === 200) {
                        const data = {
                            iv: uploadData.identifier,
                            unlockLocks: uploadData.unlockLocks,
                            post: encryption.encrypted
                        };
                        if (data) {
                            attachMetadata(constants/* pluginMetaKey */.rx, JSON.parse(JSON.stringify(data)));
                        } else {
                            dropMetadata(constants/* pluginMetaKey */.rx);
                        }
                        props.onClose();
                    } else {
                        return;
                    }
                });
            });
        } else {
            return;
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        open: props.open,
        onClose: props.onClose,
        title: t('plugin_unlockprotocol_title'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                    id: "outlined-multiline-static",
                    placeholder: t('post_dialog__placeholder'),
                    rows: 4,
                    // variant="outlined"
                    multiline: true,
                    fullWidth: true,
                    onChange: (e)=>setCurrentUnlockPost(e.target.value)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        label: t('plugin_unlockprotocol_select_unlock_lock'),
                        onClick: ()=>setOpen(true)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectRecipientsUnlockDialogUI, {
                        onSelect: (item)=>setCurrentUnlockTarget([
                                ...currentUnlockTarget,
                                item
                            ])
                        ,
                        onDeselect: (item)=>setCurrentUnlockTarget(currentUnlockTarget.filter((x)=>x.lock.address !== item.lock.address
                            ))
                        ,
                        open: open,
                        selected: currentUnlockTarget,
                        disabled: false,
                        chain: currentUnlockChain,
                        setChain: (chain)=>setCurrentUnlockChain(chain)
                        ,
                        items: availableUnlockTarget,
                        onClose: ()=>setOpen(false)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            marginLeft: 'auto'
                        },
                        variant: "contained",
                        disabled: !(!!currentUnlockTarget.length && !!currentUnlockPost),
                        onClick: onInsert,
                        children: t('plugin_unlockprotocol_submit_post')
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/plugins/MaskPluginWrapper.tsx
var MaskPluginWrapper = __webpack_require__(41071);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(41460);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/SNSAdaptor/UnlockProtocolInPost.tsx










function UnlockProtocolInPost(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { message  } = props;
    const [content1, setContent] = (0,react.useState)('');
    const address = (0,useAccount/* useAccount */.m)();
    const chain = (0,useChainId/* useChainId */.xx)();
    const [redirectUrl, setRedirectUrl] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        const metadata = UnlockProtocolMetadataReader(props.message.meta);
        if (metadata.ok) {
            if (address) {
                const data = {
                    locks: {}
                };
                metadata.val.unlockLocks.forEach((locks)=>{
                    messages/* PluginUnlockProtocolRPC.verifyPurchase */.T.verifyPurchase(address, locks.unlocklock, locks.chainid).then((res)=>{
                        if (!res) return;
                        const requestData = {
                            lock: locks.unlocklock,
                            address: address,
                            chain: locks.chainid,
                            identifier: metadata.val.iv
                        };
                        messages/* PluginUnlockProtocolRPC.getKey */.T.getKey(requestData).catch((error)=>{
                            if (error.code === -1) {
                                setContent(t('plugin_unlockprotocol_server_error'));
                            }
                        }).then((response)=>{
                            setContent(response.message);
                            messages/* PluginUnlockProtocolRPC.decryptUnlockData */.T.decryptUnlockData(metadata.val.iv, response.post.unlockKey, metadata.val.post).then((content)=>{
                                setContent(content.content);
                            });
                        });
                    });
                    data.locks[locks.unlocklock] = {
                        network: locks.chainid
                    };
                });
                setRedirectUrl(constants/* paywallUrl */.mo + encodeURI(JSON.stringify(data)));
            }
        }
    }, [
        chain,
        address
    ]);
    if (content1) {
        const jsx = message ? renderWithUnlockProtocolMetadata(props.message.meta, (r)=>{
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPluginWrapper/* default */.Z, {
                    width: 300,
                    pluginName: "Unlock Protocol",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                        chainId: chain,
                        noSwitchNetworkTip: false,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: content1
                        })
                    })
                })
            }));
        }) : null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: jsx
        }));
    } else if (redirectUrl) {
        const jsx = message ? renderWithUnlockProtocolMetadata(props.message.meta, (r)=>{
            return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(MaskPluginWrapper/* default */.Z, {
                width: 300,
                pluginName: "Unlock Protocol",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: [
                            "\"",
                            t('plugin_unlockprotocol_no_access'),
                            "\""
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: [
                            "\"",
                            t('plugin_unlockprotocol_buy_lock_alert'),
                            "\""
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        target: "_blank",
                        href: redirectUrl,
                        children: t('plugin_unlockprotocol_buy_lock')
                    })
                ]
            }));
        }) : null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: jsx
        }));
    } else {
        const jsx = message ? renderWithUnlockProtocolMetadata(props.message.meta, (r)=>{
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPluginWrapper/* default */.Z, {
                width: 300,
                pluginName: "Unlock Protocol",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                    chainId: chain,
                    noSwitchNetworkTip: false,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: [
                                "\"",
                                t('loading'),
                                "\""
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                    ]
                })
            }));
        }) : null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: jsx
        }));
    }
};

;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/SNSAdaptor/index.tsx







const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector (props) {
        const metadata = UnlockProtocolMetadataReader(props.message.meta);
        if (!metadata.ok) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UnlockProtocolInPost, {
            ...props
        }));
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* pluginMetaKey */.rx,
            (meta)=>'An Unlock Protocol post has been added'
        ], 
    ]),
    CompositionDialogEntry: {
        label: {
            fallback: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlockIcon, {
                        style: {
                            width: 16,
                            height: 16
                        }
                    }),
                    constants/* pluginName */.oy
                ]
            })
        },
        dialog: UnlockProtocolDialog
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 11443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ PluginUnlockProtocolRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30680);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94531);


const UnlockProtocolMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .pluginId */ .aw);
const PluginUnlockProtocolRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .pluginId */ .aw, ()=>Promise.all(/* import() */[__webpack_require__.e(5229), __webpack_require__.e(551), __webpack_require__.e(6593)]).then(__webpack_require__.bind(__webpack_require__, 56593))
, UnlockProtocolMessage.rpc);


/***/ }),

/***/ 67908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "Sf": () => (/* binding */ isMinds),
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

/***/ 41460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ EthereumChainBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(69172);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAllowTestnet.ts

function useAllowTestnet() {
    return (0,context/* useWeb3StateContext */.N9)().allowTestnet;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(9094);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(54575);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(9228);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(18274);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(87050);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumChainBoundary.tsx














const useStyles = (0,src/* makeStyles */.ZL)()(()=>({})
);
function EthereumChainBoundary(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const pluginID = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const plugin = (0,plugin_infra_src/* useActivatedPlugin */.Rc)(pluginID, 'any');
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const allowTestnet = useAllowTestnet();
    const providerType = (0,shared_src/* useValueRef */.E)(settings/* currentProviderSettings */.t1);
    const { noSwitchNetworkTip =false  } = props;
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const expectedChainId = props.chainId;
    const expectedNetwork = (0,chainDetailed/* getChainName */.qz)(expectedChainId);
    const actualChainId = chainId;
    const actualNetwork = (0,chainDetailed/* getChainName */.qz)(actualChainId);
    // if false then it will not guide the user to switch the network
    const isAllowed = (0,chainDetailed/* isChainIdValid */.Ji)(expectedChainId, allowTestnet) && !!account && providerType !== types/* ProviderType.Coin98 */.lP.Coin98;
    // is the actual chain id matched with the expected one?
    const isChainMatched = actualChainId === expectedChainId;
    const isPluginMatched = pluginID === plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    var ref1;
    // is the actual chain id a valid one even if it does not match with the expected one?
    const isValid = (ref1 = props === null || props === void 0 ? void 0 : (ref = props.isValidChainId) === null || ref === void 0 ? void 0 : ref.call(props, actualChainId, expectedChainId)) !== null && ref1 !== void 0 ? ref1 : false;
    const onSwitchChain = (0,react.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,shared_base_src/* delay */.gw)(1000);
        if (!isAllowed) return;
        const switchToChain = async ()=>{
            // read the chain detailed from the built-in chain list
            const chainDetailedCAIP = (0,chainDetailed/* getChainDetailedCAIP */.EX)(expectedChainId);
            if (!chainDetailedCAIP) throw new Error('Unknown network type.');
            // if mask wallet was used it can switch network automatically
            if (providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet) {
                await messages/* WalletRPC.updateAccount */.V.updateAccount({
                    chainId: expectedChainId
                });
                return;
            }
            // request ethereum-compatible network
            const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(expectedChainId);
            if (!networkType) return;
            try {
                const overrides = {
                    chainId: expectedChainId,
                    providerType
                };
                await Promise.race([
                    (async ()=>{
                        await (0,shared_base_src/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
                        throw new Error('Timeout!');
                    })(),
                    networkType === types/* NetworkType.Ethereum */.td.Ethereum ? service/* default.Ethereum.switchEthereumChain */.ZP.Ethereum.switchEthereumChain(expectedChainId, overrides) : service/* default.Ethereum.addEthereumChain */.ZP.Ethereum.addEthereumChain(chainDetailedCAIP, account, overrides), 
                ]);
                // recheck
                const chainIdHex = await service/* default.Ethereum.getChainId */.ZP.Ethereum.getChainId(overrides);
                if (Number.parseInt(chainIdHex, 16) !== expectedChainId) throw new Error('Failed to switch chain.');
            } catch  {
                throw new Error(`Switch Chain Error: Make sure your wallet is on the ${(0,pipes/* resolveNetworkName */.nW)(networkType)} network.`);
            }
        };
        const switchToPlugin = async ()=>{
            settings_settings/* pluginIDSettings.value */.tR.value = plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
        };
        if (!isChainMatched) await switchToChain();
        if (!isPluginMatched) await switchToPlugin();
    }, [
        account,
        isAllowed,
        isChainMatched,
        isPluginMatched,
        providerType,
        expectedChainId
    ]);
    const { openDialog: openSelectProviderDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    const renderBox = (children)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            sx: !props.disablePadding ? {
                paddingTop: 1,
                paddingBottom: 1
            } : null,
            children: children
        }));
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_connect_wallet_tip')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                size: "small",
                sx: {
                    marginTop: 1.5
                },
                onClick: openSelectProviderDialog,
                children: t('plugin_wallet_connect_wallet')
            })
        ]
    }));
    if (isChainMatched && isPluginMatched || isValid) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    }));
    if (!isAllowed) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: t('plugin_wallet_not_available_on', {
                network: actualNetwork
            })
        })
    }));
    if (pluginID !== plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
        var ref2;
        var ref3, _switchButtonStyle;
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: (ref3 = plugin === null || plugin === void 0 ? void 0 : (ref2 = plugin.name) === null || ref2 === void 0 ? void 0 : ref2.fallback) !== null && ref3 !== void 0 ? ref3 : 'Unknown Plugin'
                        })
                    })
                }) : null,
                isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    variant: "contained",
                    size: "small",
                    className: classes.switchButton,
                    sx: (_switchButtonStyle = props.switchButtonStyle) !== null && _switchButtonStyle !== void 0 ? _switchButtonStyle : {
                        marginTop: 1.5
                    },
                    init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_switch_network', {
                            network: expectedNetwork
                        })
                    }),
                    waiting: t('plugin_wallet_switch_network_under_going', {
                        network: expectedNetwork
                    }),
                    complete: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...props.ActionButtonPromiseProps
                }) : null
            ]
        }));
    }
    var _switchButtonStyle1;
    return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualNetwork
                    })
                })
            }) : null,
            isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                variant: "contained",
                size: "small",
                className: classes.switchButton,
                sx: (_switchButtonStyle1 = props.switchButtonStyle) !== null && _switchButtonStyle1 !== void 0 ? _switchButtonStyle1 : {
                    marginTop: 1.5
                },
                init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedNetwork
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedNetwork
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...props.ActionButtonPromiseProps
            }) : null
        ]
    }));
}


/***/ })

}]);