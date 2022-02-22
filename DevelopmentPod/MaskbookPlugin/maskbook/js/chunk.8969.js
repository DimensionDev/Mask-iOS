"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8969],{

/***/ 4103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ hasNativeAPI),
  "Nz": () => (/* binding */ nativeAPI)
});

// UNUSED EXPORTS: sharedNativeAPI

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(73302);
;// CONCATENATED MODULE: ./shared/native-rpc/iOS.channel.ts
// cspell:disable-next-line
const key = 'maskbookjsonrpc';
class iOSWebkitChannel {
    on(cb) {
        this.listener.add(cb);
        return ()=>void this.listener.delete(cb)
        ;
    }
    send(data) {
        globalThis.webkit.messageHandlers[key].postMessage(data);
    }
    constructor(){
        this.listener = new Set();
        document.addEventListener(key, (e)=>{
            const detail = e.detail;
            for (const f of this.listener){
                try {
                    f(detail);
                } catch  {}
            }
        });
    }
}

;// CONCATENATED MODULE: ./shared/native-rpc/index.ts



// This module won't be used in Web. Let it not effecting HMR.
if (false) {}
const hasNativeAPI = "app" === 'app';
let nativeAPI = undefined;
let sharedNativeAPI = (/* unused pure expression or super */ null && (undefined));
if (true) {
    const options = {
        key: 'native',
        parameterStructures: 'by-name'
    };
    if (true) {
        const api = sharedNativeAPI = (0,full/* AsyncCall */.LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 1990).then(__webpack_require__.bind(__webpack_require__, 31990)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new iOSWebkitChannel()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 81048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GuideStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78037);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84879);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89902);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39541);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67020);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76342);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3087);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44131);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7282);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        container: {
            position: 'absolute',
            boxShadow: `0 0 0 3000px ${theme.palette.mode === 'light' ? 'rgba(0,0,0,.3)' : 'rgba(110,118,125,.3)'}`,
            borderRadius: 8
        },
        target: {
            background: 'transparent'
        },
        mask: {
            position: 'fixed',
            top: 0,
            width: '100vw',
            height: '100vh',
            background: 'transparent',
            zIndex: 1000
        },
        card: {
            position: 'absolute',
            left: 0,
            width: 256,
            padding: '16px',
            borderRadius: '16px',
            background: 'rgba(0,0,0,.85)',
            boxShadow: '0 4px 8px rgba(0,0,0,.1)',
            boxSizing: 'border-box',
            color: '#fff',
            '&.arrow-top:after': {
                content: '""',
                display: 'inline-block',
                width: 0,
                height: 0,
                border: 'solid 8px transparent',
                borderBottomColor: 'rgba(0,0,0,.85)',
                borderBottomWidth: '13px',
                borderTopWidth: 0,
                position: 'absolute',
                top: '-13px',
                left: '24px'
            },
            '&.arrow-bottom:after': {
                content: '""',
                display: 'inline-block',
                width: 0,
                height: 0,
                border: 'solid 8px transparent',
                borderTopColor: 'rgba(0,0,0,.85)',
                borderTopWidth: '13px',
                borderBottomWidth: 0,
                position: 'absolute',
                bottom: '-13px',
                left: '24px'
            }
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '16px'
        }
    })
);
const ActionButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)('div')(({ theme  })=>({
        boxSizing: 'border-box',
        width: 104,
        height: 32,
        lineHeight: '32px',
        borderRadius: 16,
        textAlign: 'center',
        border: 'solid 1px #000',
        borderColor: '#fff',
        cursor: 'pointer',
        fontFamily: 'PingFang SC'
    })
);
const NextButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)(ActionButton)({
    border: 'none',
    color: '#111418',
    background: '#fff'
});
function GuideStep({ total , step , tip , children , arrow =true , disabled =false , onComplete  }) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const childrenRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const [clientRect, setClientRect] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});
    const [open1, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [bottomAvailable1, setBottomAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    const ui = _social_network__WEBPACK_IMPORTED_MODULE_6__/* .activatedSocialNetworkUI */ .LM;
    const lastStepRef = _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .userGuideStatus */ .Ct[ui.networkIdentifier];
    const lastStep = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(lastStepRef);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (disabled) return;
        const open = +lastStep === step;
        setOpen(open);
    }, [
        lastStep
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (disabled) return;
        document.body.style.overflow = open1 ? 'hidden' : '';
    }, [
        open1
    ]);
    const onSkip = ()=>{
        setOpen(false);
        _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .userGuideStatus */ .Ct[ui.networkIdentifier].value = 'completed';
        _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .sayHelloShowed */ .Pg[ui.networkIdentifier].value = true;
    };
    const onNext = ()=>{
        setOpen(false);
        if (step !== total) {
            _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .userGuideStatus */ .Ct[ui.networkIdentifier].value = String(step + 1);
        }
    };
    const onTry = ()=>{
        setOpen(false);
        _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .userGuideStatus */ .Ct[ui.networkIdentifier].value = 'completed';
        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const onResize = ()=>{
            var ref;
            const cr = (ref = childrenRef.current) === null || ref === void 0 ? void 0 : ref.getBoundingClientRect();
            if (cr) {
                const bottomAvailable = window.innerHeight - cr.height - cr.top > 200;
                setBottomAvailable(bottomAvailable);
                if (!cr.width) {
                    setClientRect({
                        ...cr,
                        top: 30,
                        left: 'calc(100vw - 300px)'
                    });
                } else {
                    setClientRect(cr);
                }
            } else {
                setClientRect(cr);
            }
        };
        onResize();
        window.addEventListener('resize', onResize);
        return ()=>{
            window.removeEventListener('resize', onResize);
        };
    }, [
        childrenRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.cloneElement)(children, {
                ref: childrenRef
            }),
            (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .usePortalShadowRoot */ .ad)((container)=>{
                if (!open1) return null;
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    container: container,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.mask,
                        onClick: (e)=>e.stopPropagation()
                        ,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.container,
                            style: {
                                top: clientRect.top,
                                left: clientRect.left
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                className: classes.target,
                                style: {
                                    width: clientRect.width,
                                    height: clientRect.height
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.card, arrow ? bottomAvailable1 ? 'arrow-top' : 'arrow-bottom' : ''),
                                    style: {
                                        left: clientRect.width < 50 ? -clientRect.width / 2 : 0,
                                        [bottomAvailable1 ? 'top' : 'bottom']: clientRect.height + 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            style: {
                                                paddingBottom: '16px'
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                sx: {
                                                    fontSize: 20
                                                },
                                                children: [
                                                    step,
                                                    "/",
                                                    total
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                fontSize: 14,
                                                fontWeight: 600,
                                                children: tip
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: classes.buttonContainer,
                                            children: step === total ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NextButton, {
                                                style: {
                                                    width: '100%'
                                                },
                                                onClick: onTry,
                                                children: t('try')
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionButton, {
                                                        onClick: onSkip,
                                                        children: t('skip')
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NextButton, {
                                                        onClick: onNext,
                                                        children: t('next')
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                }));
            })
        ]
    }));
};


/***/ }),

/***/ 55900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PostDialogHint)
/* harmony export */ });
/* unused harmony export PostDialogHintUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2473);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82591);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7282);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78037);
/* harmony import */ var _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54802);
/* harmony import */ var _resources_MaskIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51155);
/* harmony import */ var _DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17047);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3087);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44131);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _GuideStep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81048);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            // TODO: is it correct? (what about twitter?)
            padding: _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_5__/* .isMobileFacebook */ .q ? 0 : '8px'
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
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const { size , tooltip  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GuideStep__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        step: 3,
        total: 3,
        tip: t('user_guide_tip_3'),
        onComplete: props.onHintButtonClicked,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            title: "Mask Network",
            classes: {
                tooltip: classes.tooltip
            },
            placement: tooltip === null || tooltip === void 0 ? void 0 : tooltip.placement,
            disableHoverListener: tooltip === null || tooltip === void 0 ? void 0 : tooltip.disabled,
            PopperProps: {
                disablePortal: true
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                size: "large",
                className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes.button, classes.iconButton),
                onClick: props.onHintButtonClicked,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskIcon__WEBPACK_IMPORTED_MODULE_6__/* .MaskSharpIcon */ .LT, {
                    size: size,
                    color: "primary"
                })
            })
        })
    }));
});
const PostDialogHintUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PostDialogHintUI(props) {
    const { onHintButtonClicked , size , ...others } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    return _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_5__/* .isMobileFacebook */ .q ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.wrapper,
        onClick: onHintButtonClicked,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EntryIconButton, {
                size: size,
                onHintButtonClicked: ()=>undefined
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes.text,
                children: t('post_modal_hint__button')
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.buttonTransform,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EntryIconButton, {
            size: size,
            onHintButtonClicked: onHintButtonClicked,
            ...others
        })
    });
});
function PostDialogHint(props) {
    const identities = (0,_DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_7__/* .useMyIdentities */ .FA)();
    const connecting = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(_settings_settings__WEBPACK_IMPORTED_MODULE_8__/* .currentSetupGuideStatus */ .AI[_social_network__WEBPACK_IMPORTED_MODULE_9__/* .activatedSocialNetworkUI.networkIdentifier */ .LM.networkIdentifier]);
    if (connecting || identities.length === 0) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PostDialogHintUI, {
        onHintButtonClicked: ()=>{},
        ...props
    }));
}


/***/ }),

/***/ 88886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ ToolboxHintUnstyled)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52867);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17060);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90056);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67020);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(39541);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(91719);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18249);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89729);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78037);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70202);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7282);
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4103);
/* harmony import */ var _plugins_Wallet_hooks_useRecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19085);
/* harmony import */ var _GuideStep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81048);
/* harmony import */ var _resources_MaskIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51155);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42421);
/* harmony import */ var _mui_icons_material_FiberManualRecord__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86150);
/* harmony import */ var _DataSource_usePersonaConnectStatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64506);















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_10__/* .makeStyles */ .ZL)()((theme)=>({
        title: {
            color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'rgb(15, 20, 25)',
            display: 'flex',
            alignItems: 'center'
        },
        paper: {
            borderRadius: 4,
            boxShadow: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px' : 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px',
            backgroundImage: 'none'
        },
        menuItem: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        },
        menuText: {
            marginLeft: 12,
            fontSize: 15,
            color: theme.palette.mode === 'dark' ? 'rgb(216, 216, 216)' : 'rgb(15, 20, 25)',
            paddingRight: theme.spacing(2)
        },
        chainIcon: {
            fontSize: 18,
            width: 18,
            height: 18
        },
        iconWrapper: {
            display: 'flex',
            alignItems: 'baseline'
        },
        maskFilledIcon: {
            marginRight: 6
        }
    })
);
function ToolboxHintUnstyled(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const { ListItemButton =_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z , ListItemText =_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z , ListItemIcon =_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z , Container ='div' , Typography =_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z , iconSize =24 , badgeSize =10 , mini ,  } = props;
    const { classes  } = useStyles();
    const { openWallet , isWalletValid , walletTitle , chainColor , shouldDisplayChainIndicator  } = useToolbox();
    const networkDescriptor = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkDescriptor */ .Vw)();
    const providerDescriptor = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useProviderDescriptor */ .fY)();
    const personaConnectStatus = (0,_DataSource_usePersonaConnectStatus__WEBPACK_IMPORTED_MODULE_11__/* .usePersonaConnectStatus */ .x)();
    const title = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return !personaConnectStatus.hasPersona ? t('create_persona') : !personaConnectStatus.connected ? t('connect_persona') : walletTitle;
    }, [
        personaConnectStatus,
        walletTitle,
        t
    ]);
    const onClick = ()=>{
        personaConnectStatus.action ? personaConnectStatus.action() : openWallet();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GuideStep__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            step: 1,
            total: 3,
            tip: t('user_guide_tip_1'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListItemButton, {
                    onClick: onClick,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListItemIcon, {
                            children: isWalletValid ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .WalletIcon */ .o, {
                                size: iconSize,
                                badgeSize: badgeSize,
                                networkIcon: providerDescriptor === null || providerDescriptor === void 0 ? void 0 : providerDescriptor.icon,
                                providerIcon: networkDescriptor === null || networkDescriptor === void 0 ? void 0 : networkDescriptor.icon,
                                isBorderColorNotDefault: true
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskIcon__WEBPACK_IMPORTED_MODULE_9__/* .MaskFilledIcon */ .x7, {
                                size: iconSize
                            })
                        }),
                        mini ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListItemText, {
                            primary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                sx: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Typography, {
                                        className: classes.title,
                                        children: title
                                    }),
                                    shouldDisplayChainIndicator ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_FiberManualRecord__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: classes.chainIcon,
                                        style: {
                                            color: chainColor
                                        }
                                    }) : null
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
}
function useToolbox() {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const account = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mA)();
    const selectedWallet = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .Os)();
    const chainColor = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useChainColor */ .x5)();
    const chainIdValid = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useChainIdValid */ .as)();
    const chainDetailed = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useChainDetailed */ .K1)();
    const { Utils  } = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .dM)();
    // #region recent pending transactions
    const { value: pendingTransactions = []  } = (0,_plugins_Wallet_hooks_useRecentTransactions__WEBPACK_IMPORTED_MODULE_7__/* .useRecentTransactions */ .S)({
        status: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .TransactionStatusType.NOT_DEPEND */ .g8.NOT_DEPEND
    });
    // #endregion
    // #region Wallet
    const { openDialog: openWalletStatusDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletMessages.events.walletStatusDialogUpdated */ .R.events.walletStatusDialogUpdated);
    // #endregion
    const isWalletValid = !!account && selectedWallet && chainIdValid;
    const { value: domain  } = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .useReverseAddress */ .$q)(account);
    function renderButtonText() {
        var ref, ref1;
        if (!account) return t('mask_network');
        if (!chainIdValid) return t('plugin_wallet_wrong_network');
        if (pendingTransactions.length <= 0) return (Utils === null || Utils === void 0 ? void 0 : (ref = Utils.formatDomainName) === null || ref === void 0 ? void 0 : ref.call(Utils, domain)) || (Utils === null || Utils === void 0 ? void 0 : (ref1 = Utils.formatAddress) === null || ref1 === void 0 ? void 0 : ref1.call(Utils, account, 4)) || account;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    style: {
                        marginRight: 12
                    },
                    children: t('plugin_wallet_pending_transactions', {
                        count: pendingTransactions.length
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    thickness: 6,
                    size: 20,
                    color: "inherit"
                })
            ]
        }));
    }
    const openWallet = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_6__/* .hasNativeAPI */ ._) return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_6__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_6__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_6__/* .nativeAPI.api.misc_openCreateWalletView */ .Nz.api.misc_openCreateWalletView();
        return openWalletStatusDialog();
    }, [
        openWalletStatusDialog,
        _shared_native_rpc__WEBPACK_IMPORTED_MODULE_6__/* .hasNativeAPI */ ._
    ]);
    const walletTitle = renderButtonText();
    const shouldDisplayChainIndicator = account && chainIdValid && (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) && chainDetailed.network !== 'mainnet';
    return {
        openWallet,
        isWalletValid,
        walletTitle,
        shouldDisplayChainIndicator,
        chainColor
    };
}


/***/ }),

/***/ 68708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* reexport */ Banner)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(17047);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(51155);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(43470);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(64506);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(4103);
;// CONCATENATED MODULE: ./src/components/Welcomes/Banner.tsx












const useStyles = (0,src/* makeStyles */.ZL)()({
    buttonText: {
        width: 38,
        height: 38,
        margin: '10px 0'
    },
    span: {
        paddingLeft: 8
    }
});
function BannerUI(props) {
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    return props.nextStep === 'hidden' ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        size: "large",
        className: classes.buttonText,
        onClick: props.nextStep.onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskSharpIcon */.LT, {
            color: "primary"
        })
    });
}
function Banner(props) {
    const lastRecognizedIdentity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const { nextStep  } = props;
    const networkIdentifier = social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier;
    const identities = (0,useActivatedUI/* useMyIdentities */.FA)();
    const [value, onChange] = (0,react.useState)('');
    const defaultNextStep = (0,react.useCallback)(()=>{
        if (nextStep === 'hidden') return;
        if (!networkIdentifier) {
            nextStep === null || nextStep === void 0 ? void 0 : nextStep.onClick();
            nextStep !== null && nextStep !== void 0 ? nextStep : console.warn('You must provide one of networkIdentifier or nextStep.onClick');
            return;
        }
        native_rpc/* hasNativeAPI */._ ? native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.misc_openDashboardView */.Nz.api.misc_openDashboardView() : service/* default.Welcome.openOptionsPage */.ZP.Welcome.openOptionsPage(personaConnectStatus.hasPersona ? shared_base_src/* DashboardRoutes.Personas */.vq.Personas : shared_base_src/* DashboardRoutes.Setup */.vq.Setup);
    }, [
        networkIdentifier,
        nextStep
    ]);
    const defaultUserName = networkIdentifier ? {
        defaultValue: lastRecognizedIdentity.identifier.isUnknown ? '' : lastRecognizedIdentity.identifier.userId,
        value,
        onChange,
        isValid: social_network/* activatedSocialNetworkUI.utils.isValidUsername */.LM.utils.isValidUsername || (()=>true
        )
    } : 'hidden';
    const [mounted, setMounted] = (0,react.useState)(false);
    (0,useMount/* default */.Z)(()=>setMounted(true)
    );
    var _username, _nextStep;
    return identities.length === 0 && mounted ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BannerUI, {
        ...props,
        username: (_username = props.username) !== null && _username !== void 0 ? _username : defaultUserName,
        nextStep: (_nextStep = props.nextStep) !== null && _nextStep !== void 0 ? _nextStep : {
            onClick: defaultNextStep
        }
    }) : null;
}

;// CONCATENATED MODULE: ./src/components/shared/NotSetupYetPrompt.tsx



/***/ }),

/***/ 19085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19149);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81409);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92971);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70202);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26218);





function useRecentTransactions(options) {
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .m)();
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .useChainId */ .xx)();
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        if (!account) return [];
        return _messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.getRecentTransactions */ .V.getRecentTransactions(chainId, account, options);
    }, [
        chainId,
        account,
        JSON.stringify(options)
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.transactionStateUpdated.on */ .R$.events.transactionStateUpdated.on(result.retry)
    , [
        result.retry
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.transactionsUpdated.on */ .R$.events.transactionsUpdated.on(result.retry)
    , [
        result.retry
    ]);
    return result;
}


/***/ }),

/***/ 54802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ isMobileFacebook)
/* harmony export */ });
/* unused harmony export facebookDomain */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

const isMobileFacebook = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ContentScript) ? location.hostname === 'm.facebook.com' : navigator.userAgent.match(/Mobile|mobile/);
const facebookDomain = (/* unused pure expression or super */ null && (isMobileFacebook ? 'https://m.facebook.com/' : 'https://facebook.com/'));


/***/ })

}]);