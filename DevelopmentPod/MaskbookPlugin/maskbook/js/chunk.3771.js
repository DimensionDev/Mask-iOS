"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3771],{

/***/ 25993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfirmDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35878);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85792);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14820);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46715);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21948);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51502);




const StyledButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(()=>({
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].root */ .Z.root}`]: {
            minWidth: 100
        }
    })
);
function ConfirmDialog(props) {
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_2__/* .useDashboardI18N */ .x)();
    const { title , open , onClose , onConfirm , children , maxWidth ='sm' , cancelText =t.settings_button_cancel() , confirmText =t.settings_button_confirm() , confirmDisabled =false ,  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskDialog */ .Df, {
        title: title,
        fullWidth: true,
        maxWidth: maxWidth,
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton, {
                        onClick: onClose,
                        color: "secondary",
                        children: cancelText
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton, {
                        onClick: onConfirm,
                        disabled: confirmDisabled,
                        children: confirmText
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 77327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FileUpload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84026);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1689);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46123);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '100%',
        borderRadius: 8
    },
    container: {
        textAlign: 'center'
    },
    file: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        opacity: 0,
        cursor: 'pointer'
    },
    text: {
        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
        fontSize: 13
    }
});
function FileUpload({ width , height , readAsText , onChange , accept , icon  }) {
    const { classes  } = useStyles();
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const handleChange = ({ target  })=>{
        if (target.files) {
            setFile(target.files[0]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (file) {
            if (readAsText) {
                (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .blobToText */ .Gx)(file).then((result)=>onChange(file, result)
                );
            } else {
                onChange(file);
            }
        }
    }, [
        file,
        readAsText,
        onChange
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        variant: "background",
        className: classes.root,
        style: {
            width,
            height
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.container,
                children: [
                    icon ?? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .File */ .$, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: classes.text,
                        children: "Please click or drag the file to here"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                type: "file",
                className: classes.file,
                accept: accept,
                onChange: handleChange
            })
        ]
    });
};


/***/ }),

/***/ 477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29324);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48941);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72585);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13316);





const PasswordField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref)=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskTextField */ .FU, {
        ...props,
        ref: ref,
        type: showPassword ? 'text' : 'password',
        InputProps: {
            ...props.InputProps,
            endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    "aria-label": "toggle password visibility",
                    onClick: ()=>setShowPassword(!showPassword)
                    ,
                    onMouseDown: (event)=>event.preventDefault()
                    ,
                    edge: "end",
                    size: "small",
                    children: showPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .EyeOffIcon */ .X, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .EyeIcon */ .t, {})
                })
            })
        }
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordField);


/***/ }),

/***/ 73771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Personas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../dashboard/src/components/PageFrame/index.tsx + 1 modules
var PageFrame = __webpack_require__(13254);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/capitalize.js
var capitalize = __webpack_require__(22353);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/Link.tsx


const LinkIcon = (0,utils/* createIcon */.I)('Link', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16 19.25C16.5368 19.9676 17.2217 20.5614 18.0082 20.9911C18.7947 21.4208 19.6644 21.6764 20.5583 21.7404C21.4522 21.8044 22.3495 21.6754 23.1892 21.3622C24.0289 21.049 24.7914 20.5588 25.425 19.925L29.175 16.175C30.3135 14.9962 30.9435 13.4174 30.9292 11.7787C30.915 10.14 30.2577 8.57239 29.0989 7.41359C27.9401 6.25479 26.3725 5.59748 24.7338 5.58324C23.095 5.569 21.5163 6.19897 20.3375 7.33746L18.1875 9.47496",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M20.9988 16.7498C20.462 16.0321 19.7771 15.4383 18.9906 15.0086C18.2041 14.5789 17.3344 14.3234 16.4405 14.2594C15.5465 14.1954 14.6493 14.3243 13.8096 14.6376C12.9699 14.9508 12.2074 15.441 11.5738 16.0748L7.82379 19.8248C6.6853 21.0036 6.05533 22.5823 6.06957 24.2211C6.08381 25.8598 6.74112 27.4274 7.89992 28.5862C9.05872 29.745 10.6263 30.4023 12.265 30.4165C13.9038 30.4307 15.4825 29.8008 16.6613 28.6623L18.7988 26.5248",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "currentColor"
        })
    ]
}), '0 0 20 20');

// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(51502);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaSetup/index.tsx






const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        },
        iconContainer: {
            width: 90,
            height: 90,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 36,
            backgroundColor: entry/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground
        },
        button: {
            borderRadius: Number(theme.shape.borderRadius) * 4.5,
            padding: theme.spacing(0.75, 4)
        }
    })
);
const PersonaSetup = /*#__PURE__*/ (0,react.memo)(({ networkIdentifier , onConnect  })=>{
    const { classes  } = useStyles();
    const t = (0,locales/* useDashboardI18N */.x)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.iconContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkIcon, {
                    color: "primary",
                    fontSize: "inherit",
                    style: {
                        fill: 'none'
                    },
                    viewBox: "0 0 36 36"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                sx: {
                    marginTop: 2.5,
                    marginBottom: 2.5
                },
                children: t.personas_setup_connect_tips({
                    type: networkIdentifier.split('.')[0]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.button,
                onClick: onConnect,
                children: t.personas_setup_connect()
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Drawer/Drawer.js
var Drawer = __webpack_require__(53400);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 3 modules
var usePersonaContext = __webpack_require__(16386);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../icons/general/Warning.tsx
var Warning = __webpack_require__(42417);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/DisconnectProfileDialog/index.tsx







const DisconnectProfileDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        svg: {
            '& path': {
                fill: (0,entry/* getMaskColor */.nb)(theme).orangeMain
            }
        },
        personaTextZone: {
            margin: theme.spacing(4, 0),
            fontSize: '13px'
        }
    })
);
var steps;
(function(steps) {
    steps[steps["selection"] = 1] = "selection";
    steps[steps["action"] = 2] = "action";
})(steps || (steps = {}));
const DisconnectProfileDialog = ({ open , onClose , networkIdentifier , profileIdentifiers , onDisconnect , personaIdentifier  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = DisconnectProfileDialog_useStyles();
    const [currentStep, setCurrentStep] = (0,react.useState)(steps.selection);
    const [profileIdentifier, setProfileIdentifier] = (0,react.useState)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        open: open,
        title: t.personas_disconnect(),
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            sx: {
                width: 480
            },
            children: [
                currentStep === steps.selection && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    minHeight: "100px",
                    justifyContent: "center",
                    children: profileIdentifiers.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 1,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                    direction: "row",
                                    alignItems: "center",
                                    gap: 1,
                                    children: [
                                        src/* SOCIAL_MEDIA_ICON_MAPPING */.I4[networkIdentifier],
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            variant: "caption",
                                            sx: {
                                                color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary,
                                                fontSize: 13,
                                                mr: 1
                                            },
                                            children: [
                                                "@",
                                                x.userId
                                            ]
                                        }, x.userId)
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        sx: {
                                            color: (theme)=>(0,entry/* getMaskColor */.nb)(theme).redMain
                                        },
                                        component: "button",
                                        variant: "caption",
                                        onClick: ()=>{
                                            setProfileIdentifier(x);
                                            setCurrentStep(steps.action);
                                        },
                                        children: t.personas_disconnect_raw()
                                    })
                                })
                            ]
                        }, x.userId)
                    )
                }),
                currentStep === steps.action && profileIdentifier && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            textAlign: "center",
                            py: 2,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning/* WarningIcon */.a, {
                                className: classes.svg,
                                sx: {
                                    fontSize: 64
                                },
                                color: "warning"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "caption",
                            sx: {
                                color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary,
                                fontSize: 13,
                                mr: 1
                            },
                            children: t.personas_disconnect_warning()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.personaTextZone,
                            children: [
                                "persona: ",
                                personaIdentifier.rawPublicKey
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            mt: 3,
                            mb: 1,
                            direction: "row",
                            justifyContent: "space-around",
                            gap: 4,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    sx: {
                                        flex: 1
                                    },
                                    onClick: onClose,
                                    color: "secondary",
                                    children: t.cancel()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    sx: {
                                        flex: 1
                                    },
                                    variant: "contained",
                                    onClick: ()=>{
                                        onDisconnect(profileIdentifier);
                                        setCurrentStep(steps.selection);
                                        onClose();
                                    },
                                    children: t.confirm()
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
;// CONCATENATED MODULE: ../icons/general/NextIdPersonaVerified.tsx


const NextIdPersonaVerifiedIcon = (0,utils/* createIcon */.I)('NextIdPersonaVerified', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.18617 1.49397C7.61225 0.991107 8.38783 0.991107 8.81391 1.49397L9.32729 2.09995C9.58857 2.40831 10.0016 2.54254 10.3943 2.44663L11.1658 2.25816C11.8061 2.10176 12.4335 2.55764 12.4827 3.21488L12.5418 4.00691C12.5719 4.40994 12.8272 4.76135 13.2012 4.91453L13.9362 5.21556C14.5461 5.46534 14.7858 6.20299 14.4392 6.76358L14.0215 7.4391C13.809 7.78288 13.809 8.21723 14.0215 8.56102L14.4392 9.23654C14.7858 9.79712 14.5461 10.5348 13.9362 10.7845L13.2012 11.0856C12.8272 11.2388 12.5719 11.5902 12.5418 11.9932L12.4827 12.7852C12.4335 13.4425 11.8061 13.8983 11.1658 13.742L10.3943 13.5535C10.0016 13.4576 9.58857 13.5918 9.32729 13.9002L8.81391 14.5061C8.38783 15.009 7.61225 15.009 7.18617 14.5061L6.67279 13.9002C6.41151 13.5918 5.99844 13.4576 5.6058 13.5535L4.83427 13.742C4.19402 13.8983 3.56655 13.4425 3.51744 12.7852L3.45828 11.9932C3.42816 11.5902 3.17286 11.2388 2.79885 11.0856L2.06388 10.7845C1.45397 10.5348 1.2143 9.79712 1.56089 9.23654L1.97856 8.56102C2.1911 8.21723 2.1911 7.78288 1.97856 7.4391L1.56089 6.76358C1.2143 6.20299 1.45397 5.46534 2.06388 5.21556L2.79885 4.91453C3.17286 4.76135 3.42816 4.40994 3.45828 4.00691L3.51744 3.21488C3.56655 2.55764 4.19402 2.10176 4.83427 2.25816L5.6058 2.44663C5.99844 2.54254 6.41151 2.40831 6.67279 2.09995L7.18617 1.49397Z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.19992 9.40003L5.79992 8.00003L5.33325 8.4667L7.19992 10.3334L11.1999 6.33337L10.7333 5.8667L7.19992 9.40003Z",
            fill: "white",
            stroke: "white",
            strokeWidth: "0.4"
        })
    ]
}), '0 0 16 16');

// EXTERNAL MODULE: ../icons/general/NextIdPersonaWarning.tsx
var NextIdPersonaWarning = __webpack_require__(16240);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaLine/index.tsx










const PersonaLine_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        connect: {
            '& svg': {
                fontSize: '18px',
                marginRight: theme.spacing(1.5)
            }
        },
        link: {
            height: 28
        },
        disabled: {
            opacity: 0.6,
            pointerEvents: 'none'
        },
        userIdBox: {
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(0.5)
        },
        proofIconBox: {
            display: 'flex',
            alignItems: 'center',
            ':hover': {
                opacity: 0.8
            }
        }
    })
);
const UnconnectedPersonaLine = /*#__PURE__*/ (0,react.memo)(({ onConnect , networkIdentifier  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = PersonaLine_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.connect,
        sx: {
            display: 'flex',
            alignItems: 'center'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
            underline: "none",
            classes: {
                button: classes.link
            },
            onClick: (e)=>{
                e.stopPropagation();
                onConnect();
            },
            sx: {
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer'
            },
            children: [
                src/* SOCIAL_MEDIA_ICON_MAPPING */.I4[networkIdentifier],
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "caption",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "text",
                        size: "small",
                        sx: {
                            fontSize: 13,
                            p: 0
                        },
                        children: t.personas_connect_to({
                            internalName: networkIdentifier
                        })
                    })
                })
            ]
        })
    });
});
const ConnectedPersonaLine = /*#__PURE__*/ (0,react.memo)(({ profileIdentifiers , onConnect , onDisconnect , onDeleteBound , networkIdentifier , isHideOperations , disableAdd , personaIdentifier , proof: proof1 ,  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { openProfilePage  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const { classes  } = PersonaLine_useStyles();
    const [openDisconnectDialog, setOpenDisconnectDialog] = (0,react.useState)(false);
    const handleUserIdClick = async (network, userId)=>{
        await openProfilePage(network, userId);
    };
    const handleProofIconClick = (e, proof, profile)=>{
        e.stopPropagation();
        if (!proof || !proof.is_valid) {
            onConnect('nextID', profile);
        }
    };
    const handleDisconnect = (profile)=>{
        const isProved = proof1.value?.proofs.find((x)=>{
            return x.platform === shared_base_src/* NextIDPlatform.Twitter */.Vd.Twitter && x.identity === profile.userId.toLowerCase();
        });
        if (isProved && onDeleteBound) {
            onDeleteBound(profile);
            return;
        }
        onDisconnect(profile);
    };
    const userIdBox = (profile)=>{
        const isProved = proof1.value?.proofs.find((x)=>{
            return x.platform === shared_base_src/* NextIDPlatform.Twitter */.Vd.Twitter && x.identity === profile.userId.toLowerCase();
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.userIdBox,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "caption",
                    sx: {
                        fontSize: 13
                    },
                    children: [
                        "@",
                        profile.userId
                    ]
                }),
                profile.network === shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.proofIconBox,
                    onClick: (e)=>handleProofIconClick(e, isProved, profile)
                    ,
                    children: proof1.loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* LoadingAnimation */.p6, {}) : isProved?.is_valid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NextIdPersonaVerifiedIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NextIdPersonaWarning/* NextIdPersonaWarningIcon */.W, {})
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.connect,
        sx: {
            display: 'flex',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                underline: "none",
                sx: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'inline-flex',
                            alignItems: 'center'
                        },
                        children: [
                            src/* SOCIAL_MEDIA_ICON_MAPPING */.I4[networkIdentifier],
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                flexWrap: "wrap",
                                flexDirection: "row",
                                children: profileIdentifiers.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "caption",
                                        onClick: ()=>handleUserIdClick(networkIdentifier, x.userId)
                                        ,
                                        sx: {
                                            color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary,
                                            fontSize: 13,
                                            mr: 1,
                                            cursor: 'pointer'
                                        },
                                        children: userIdBox(x)
                                    }, x.userId)
                                )
                            })
                        ]
                    }),
                    !isHideOperations && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                component: "button",
                                classes: {
                                    button: classes.link,
                                    root: disableAdd ? classes.disabled : undefined
                                },
                                variant: "caption",
                                sx: {
                                    mr: 1
                                },
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onConnect('local');
                                },
                                children: t.personas_add()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                sx: {
                                    color: (theme)=>(0,entry/* getMaskColor */.nb)(theme).redMain
                                },
                                component: "button",
                                classes: {
                                    button: classes.link
                                },
                                variant: "caption",
                                onClick: ()=>setOpenDisconnectDialog(true)
                                ,
                                children: t.personas_disconnect_raw()
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DisconnectProfileDialog, {
                personaIdentifier: personaIdentifier,
                networkIdentifier: networkIdentifier,
                onDisconnect: (profileIdentifier)=>handleDisconnect(profileIdentifier)
                ,
                profileIdentifiers: profileIdentifiers,
                open: openDisconnectDialog,
                onClose: ()=>setOpenDisconnectDialog(false)
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(81267);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaProof.ts




function usePersonaProof(publicHexKey) {
    const res = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return web3_providers_src/* NextIDProof.queryExistedBindingByPersona */.q7.queryExistedBindingByPersona(publicHexKey);
    }, [
        publicHexKey
    ]);
    (0,react.useEffect)(()=>API/* Messages.events.ownProofChanged.on */.Vm.events.ownProofChanged.on(res.retry)
    , [
        res.retry
    ]);
    return res;
}

// EXTERNAL MODULE: ../icons/general/Settings.tsx
var Settings = __webpack_require__(60733);
;// CONCATENATED MODULE: ../icons/general/PublicKey.tsx


const PublicKeyIcon = (0,utils/* createPaletteAwareIcon */.t)('PublicKeyIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M12.9159 6.25008L15.8326 3.33341M17.4993 1.66675L15.8326 3.33341L17.4993 1.66675ZM9.49092 9.67508C9.9212 10.0996 10.2633 10.6051 10.4974 11.1624C10.7315 11.7197 10.8531 12.3178 10.8551 12.9223C10.8571 13.5267 10.7396 14.1256 10.5092 14.6845C10.2788 15.2433 9.94014 15.7511 9.51271 16.1785C9.08528 16.606 8.57752 16.9446 8.01867 17.175C7.45982 17.4054 6.86092 17.523 6.25645 17.5209C5.65197 17.5189 5.05387 17.3973 4.49658 17.1632C3.93928 16.9291 3.43381 16.587 3.00925 16.1567C2.17436 15.2923 1.71239 14.1346 1.72283 12.9328C1.73327 11.7311 2.2153 10.5815 3.06508 9.73175C3.91487 8.88196 5.06443 8.39993 6.26616 8.38949C7.4679 8.37905 8.62566 8.84102 9.49008 9.67591L9.49092 9.67508ZM9.49092 9.67508L12.9159 6.25008L9.49092 9.67508ZM12.9159 6.25008L15.4159 8.75008L18.3326 5.83341L15.8326 3.33341L12.9159 6.25008Z",
        stroke: "#111432",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M12.9159 6.25008L15.8326 3.33341M17.4993 1.66675L15.8326 3.33341L17.4993 1.66675ZM9.49092 9.67508C9.9212 10.0996 10.2633 10.6051 10.4974 11.1624C10.7315 11.7197 10.8531 12.3178 10.8551 12.9223C10.8571 13.5267 10.7396 14.1256 10.5092 14.6845C10.2788 15.2433 9.94014 15.7511 9.51271 16.1785C9.08528 16.606 8.57752 16.9446 8.01867 17.175C7.45982 17.4054 6.86092 17.523 6.25645 17.5209C5.65197 17.5189 5.05387 17.3973 4.49658 17.1632C3.93928 16.9291 3.43381 16.587 3.00925 16.1567C2.17436 15.2923 1.71239 14.1346 1.72283 12.9328C1.73327 11.7311 2.2153 10.5815 3.06508 9.73175C3.91487 8.88196 5.06443 8.39993 6.26616 8.38949C7.4679 8.37905 8.62566 8.84102 9.49008 9.67591L9.49092 9.67508ZM9.49092 9.67508L12.9159 6.25008L9.49092 9.67508ZM12.9159 6.25008L15.4159 8.75008L18.3326 5.83341L15.8326 3.33341L12.9159 6.25008Z",
        stroke: "#ffffff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), undefined, '0 0 20 20');

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(11087);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.16.0/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(7055);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(33953);
;// CONCATENATED MODULE: ../dashboard/src/utils/checkLengthExceed.ts
/* eslint @dimensiondev/unicode/specific-set: ["error", { "only": "code" }] */ const PERSONA_NAME_MAX_LENGTH = 24;
function isPersonaNameLengthValid(value) {
    // Array.from(string).length is not equal to string.length.
    // you can take 👩‍👩‍👦‍👦 as an example
    return Array.from(value).length < PERSONA_NAME_MAX_LENGTH;
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/RenameDialog/index.tsx









const RenameDialog = /*#__PURE__*/ (0,react.memo)(({ open , nickname , onClose , onConfirm  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const schema = lib.z.object({
        nickname: lib.z.string().max(PERSONA_NAME_MAX_LENGTH, t.personas_name_maximum_tips({
            length: String(PERSONA_NAME_MAX_LENGTH)
        }))
    });
    const { control , handleSubmit , setError , formState: { errors , isDirty , isValid , isSubmitting  } ,  } = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            nickname
        }
    });
    const handleFormSubmit = (0,react.useCallback)((event)=>{
        handleSubmit((data)=>onConfirm(data.nickname.trim())
        )(event).catch(()=>{
            setError('nickname', {
                type: 'value',
                message: t.personas_name_existed()
            });
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        open: open,
        title: t.personas_rename(),
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
            name: "persona-rename-form",
            onSubmit: handleFormSubmit,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                                ...field,
                                placeholder: t.personas_rename_placeholder(),
                                style: {
                                    width: '100%'
                                },
                                error: !!errors.nickname?.message,
                                helperText: errors.nickname?.message,
                                InputProps: {
                                    disableUnderline: true
                                }
                            })
                        ,
                        name: "nickname"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            color: "secondary",
                            onClick: onClose,
                            children: t.personas_cancel()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            disabled: !isDirty || !isValid || isSubmitting,
                            type: "submit",
                            children: t.personas_confirm()
                        })
                    ]
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useToggle.js
var useToggle = __webpack_require__(44120);
;// CONCATENATED MODULE: ../icons/general/Document.tsx


const DocumentIcon = (0,utils/* createIcon */.I)('DocumentIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: "0.5",
            d: "M8.08789 12.9375C8.08789 9.62379 10.4003 6.9375 13.2528 6.9375H28.7477C31.6002 6.9375 33.9126 9.62379 33.9126 12.9375V36.9375C33.9126 40.2512 31.6002 42.9375 28.7477 42.9375H13.2528C10.4003 42.9375 8.08789 40.2512 8.08789 36.9375V12.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: "0.1",
            d: "M33.9123 20.3906V12.9375C33.9123 9.62379 31.5999 6.9375 28.7474 6.9375H22.3315L33.9123 20.3906Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M22.3318 6.9375L22.3318 14.3906C22.3318 17.7043 24.6442 20.3906 27.4968 20.3906L33.9126 20.3906L22.3318 6.9375Z",
            fill: "#AFC3E1"
        })
    ]
}), '0 0 42 48', [
    42,
    48
]);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Slider/Slider.js
var Slider = __webpack_require__(4612);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-avatar-editor@13.0.0_@babel+core@7.18.5/node_modules/react-avatar-editor/dist/index.js
var dist = __webpack_require__(61495);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useStateList.js
var useStateList = __webpack_require__(11882);
// EXTERNAL MODULE: ../dashboard/src/components/FileUpload/index.tsx
var FileUpload = __webpack_require__(77327);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/UploadAvatarDialog/index.tsx










const uploadSteps = [
    'upload',
    'pick'
];
const UploadAvatarDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { state: step , next  } = (0,useStateList/* default */.Z)(uploadSteps);
    const [file1, setFile] = (0,react.useState)();
    const [scale, setScale] = (0,react.useState)(1);
    const [editor, setEditor] = (0,react.useState)(null);
    const onSave = (0,react.useCallback)(()=>{
        if (!editor || !file1) return;
        editor.getImage().toBlob((blob)=>{
            if (blob) {
                API/* Services.Settings.getCurrentPersonaIdentifier */.K9.Settings.getCurrentPersonaIdentifier().then((identifier)=>API/* Services.Identity.updatePersonaAvatar */.K9.Identity.updatePersonaAvatar(identifier, blob)
                );
            }
        }, file1.type);
        onClose();
    }, [
        editor,
        file1
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        open: open,
        title: t.personas_upload_avatar(),
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            sx: {
                width: 440
            },
            children: [
                step === 'upload' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    sx: {
                        mb: 2
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileUpload/* default */.Z, {
                        height: 300,
                        onChange: (file)=>{
                            setFile(file);
                            next();
                        },
                        accept: "image/png, image/jpeg",
                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocumentIcon, {})
                    })
                }),
                step === 'pick' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((dist_default()), {
                            ref: (e)=>setEditor(e)
                            ,
                            image: file1,
                            border: 50,
                            style: {
                                width: '100%',
                                height: '100%'
                            },
                            scale: scale ?? 1,
                            rotate: 0,
                            borderRadius: 300
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
                            max: 2,
                            min: 0.5,
                            step: 0.1,
                            defaultValue: 1,
                            onChange: (_, value)=>setScale(value)
                            ,
                            "aria-label": "Scale"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            fullWidth: true,
                            sx: {
                                mb: 2
                            },
                            variant: "contained",
                            onClick: onSave,
                            children: t.save()
                        })
                    ]
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../icons/menus/MenuPersonasActive.tsx
var MenuPersonasActive = __webpack_require__(50986);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/api.ts
var api = __webpack_require__(62205);
;// CONCATENATED MODULE: ../dashboard/src/components/MaskAvatar/index.tsx






const MaskAvatar_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        author: {
            fill: entry/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground,
            cursor: 'pointer'
        }
    })
);
const MaskAvatar = /*#__PURE__*/ (0,react.memo)(({ size =36 , onClick  })=>{
    const { classes  } = MaskAvatar_useStyles();
    const avatar = (0,api/* usePersonaAvatar */.wp)();
    const commonProps = {
        sx: {
            width: size,
            height: size,
            display: 'inline-block',
            background: entry/* MaskColorVar.lightBackground */.ZN.lightBackground,
            borderRadius: '50%'
        },
        onClick,
        className: classes.author
    };
    if (!avatar) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
            justifyContent: "center",
            width: "100%",
            height: size,
            flexDirection: "row",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuPersonasActive/* MenuPersonasActiveIcon */.G, {
                ...commonProps
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        src: avatar,
        ...commonProps
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(80875);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/LogoutPersonaDialog/index.tsx











const LogoutPersonaDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        svg: {
            '& path': {
                fill: (0,entry/* getMaskColor */.nb)(theme).redMain
            }
        }
    })
);
const LogoutPersonaDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose , identifier  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { classes  } = LogoutPersonaDialog_useStyles();
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const handleLogout = (0,react.useCallback)(async ()=>{
        await API/* Services.Identity.logoutPersona */.K9.Identity.logoutPersona(identifier);
        const lastCreatedPersona = await API/* Services.Identity.queryLastPersonaCreated */.K9.Identity.queryLastPersonaCreated();
        if (lastCreatedPersona) {
            await changeCurrentPersona(lastCreatedPersona);
            onClose();
        } else {
            onClose();
            navigate(shared_base_src/* DashboardRoutes.Setup */.vq.Setup);
        }
    }, [
        identifier,
        onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(entry/* MaskDialog */.Df, {
        open: open,
        title: t.personas_logout(),
        onClose: onClose,
        maxWidth: "xs",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            textAlign: "center",
                            py: 2,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning/* WarningIcon */.a, {
                                className: classes.svg,
                                sx: {
                                    fontSize: 64
                                },
                                color: "warning"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "error",
                        variant: "body2",
                        fontSize: 13,
                        children: t.personas_logout_warning()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        onClick: onClose,
                        sx: {
                            minWidth: 150
                        },
                        children: t.personas_cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                        color: "error",
                        onClick: handleLogout,
                        sx: {
                            minWidth: 150
                        },
                        variant: "contained",
                        children: t.personas_logout()
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/hooks/UserContext.tsx + 1 modules
var UserContext = __webpack_require__(77778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../dashboard/src/pages/SignUp/steps/PreviewDialog.tsx
var PreviewDialog = __webpack_require__(84732);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useExportPrivateKey.ts


function useExportPrivateKey(identifier) {
    return (0,useAsync/* default */.Z)(async ()=>{
        return API/* Services.Backup.backupPersonaPrivateKey */.K9.Backup.backupPersonaPrivateKey(identifier);
    }, [
        identifier
    ]);
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useExportMnemonicWords.ts


function useExportMnemonicWords(identifier) {
    return (0,useAsync/* default */.Z)(async ()=>{
        return API/* Services.Backup.backupPersonaMnemonicWords */.K9.Backup.backupPersonaMnemonicWords(identifier);
    }, [
        identifier
    ]);
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaCard/Row.tsx






















const Row_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        setting: {
            fontSize: 18,
            padding: 0,
            position: 'absolute',
            right: '-1rem',
            top: '-1rem',
            [theme.breakpoints.down('md')]: {
                right: 0,
                top: 0
            }
        },
        icon: {
            cursor: 'pointer',
            '&>svg': {
                fontSize: '96px'
            }
        },
        accountIcon: {
            '&>svg': {
                fontSize: '18px'
            }
        },
        avatar: {
            marginRight: theme.spacing(6),
            [theme.breakpoints.down('md')]: {
                marginRight: theme.spacing(3)
            }
        }
    })
);
const MenuText = (0,styled/* default */.ZP)('span')(`
    font-size: 14px;
`);
const PersonaRowCard = /*#__PURE__*/ (0,react.memo)(()=>{
    const { currentPersona , connectPersona , disconnectPersona , renamePersona , deleteBound , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    if (!currentPersona || !currentPersona.identifier.publicKeyAsHex) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaRowCardUI, {
        publicKey: currentPersona.identifier.publicKeyAsHex,
        nickname: currentPersona.nickname,
        identifier: currentPersona.identifier,
        profiles: currentPersona.linkedProfiles,
        onConnect: connectPersona,
        onDisconnect: disconnectPersona,
        onDeleteBound: deleteBound,
        onRename: renamePersona,
        definedSocialNetworks: definedSocialNetworks
    });
});
const PersonaRowCardUI = /*#__PURE__*/ (0,react.memo)((props)=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = Row_useStyles();
    const { confirmPassword  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const { nickname , definedSocialNetworks , identifier , profiles , publicKey  } = props;
    const { onConnect , onDisconnect , onRename , onDeleteBound  } = props;
    const { value: privateKey  } = useExportPrivateKey(identifier);
    const { value: words  } = useExportMnemonicWords(identifier);
    const proof = usePersonaProof(publicKey);
    const [avatarOn, toggleAvatar] = (0,useToggle/* default */.Z)(false);
    const [renameDialogOpen, setRenameDialogOpen] = (0,react.useState)(false);
    const [logoutDialogOpen, setLogoutDialogOpen] = (0,react.useState)(false);
    const [exportPersonaDialogOpen, setExportPersonaDialogOpen] = (0,react.useState)(false);
    const logoutConfirmedPasswordCallback = ()=>confirmPassword(()=>setLogoutDialogOpen(true)
        , {
            tipTitle: t.personas_logout(),
            tipContent: t.personas_logout_confirm_password_tip(),
            confirmTitle: t.personas_logout(),
            force: false
        })
    ;
    const exportPersonaConfirmedPasswordCallback = ()=>confirmPassword(()=>setExportPersonaDialogOpen(true)
        , {
            tipTitle: t.personas_export_persona(),
            tipContent: t.personas_export_persona_confirm_password_tip(),
            confirmTitle: t.personas_export_persona()
        })
    ;
    const [menu, openMenu] = (0,src/* useMenu */.H9)(/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: ()=>setRenameDialogOpen(true)
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuText, {
            children: t.personas_rename()
        })
    }), /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: exportPersonaConfirmedPasswordCallback,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuText, {
            children: t.personas_export_persona()
        })
    }), /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: ()=>navigate(shared_base_src/* DashboardRoutes.Settings */.vq.Settings, {
                state: {
                    open: 'setting'
                }
            })
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuText, {
            children: t.settings_global_backup_title()
        })
    }), /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: logoutConfirmedPasswordCallback,
        style: {
            color: entry/* MaskColorVar.redMain */.ZN.redMain
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuText, {
            children: t.personas_logout()
        })
    }));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-around",
        position: "relative",
        children: [
            avatarOn && /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadAvatarDialog, {
                open: avatarOn,
                onClose: ()=>toggleAvatar(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                onClick: (e)=>{
                    e.stopPropagation();
                    openMenu(e);
                },
                className: classes.setting,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* SettingsIcon */.e, {
                    fontSize: "inherit",
                    style: {
                        fill: entry/* MaskColorVar.textPrimary */.ZN.textPrimary
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "240px",
                className: classes.avatar,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    textAlign: "center",
                    className: classes.icon,
                    onClick: ()=>toggleAvatar(true)
                    ,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAvatar, {
                            size: 96
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            sx: {
                                cursor: 'pointer'
                            },
                            children: nickname
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    flex: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        height: 22,
                        sx: {
                            display: 'inline-flex',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    mr: 1.5,
                                    py: '2px',
                                    height: '100%'
                                },
                                className: classes.accountIcon,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PublicKeyIcon, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                sx: {
                                    fontSize: 13
                                },
                                component: "span",
                                children: identifier.rawPublicKey
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: definedSocialNetworks.map(({ networkIdentifier  })=>{
                            const currentNetworkProfiles = profiles.filter((x)=>x.identifier.network === networkIdentifier
                            );
                            currentNetworkProfiles.map(()=>{});
                            if (!currentNetworkProfiles.length) {
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(UnconnectedPersonaLine, {
                                    onConnect: ()=>onConnect(identifier, networkIdentifier)
                                    ,
                                    networkIdentifier: networkIdentifier
                                }, networkIdentifier);
                            } else {
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedPersonaLine, {
                                    proof: proof,
                                    disableAdd: currentNetworkProfiles.length >= 5,
                                    isHideOperations: false,
                                    onConnect: (type, profile)=>onConnect(identifier, networkIdentifier, type, profile)
                                    ,
                                    onDisconnect: onDisconnect,
                                    onDeleteBound: (profile)=>{
                                        onDeleteBound(identifier, profile, networkIdentifier, shared_base_src/* NextIDAction.Delete */.BU.Delete);
                                    },
                                    profileIdentifiers: currentNetworkProfiles.map((x)=>x.identifier
                                    ),
                                    networkIdentifier: networkIdentifier,
                                    personaIdentifier: identifier
                                }, networkIdentifier);
                            }
                        })
                    })
                ]
            }),
            menu,
            renameDialogOpen && /*#__PURE__*/ (0,jsx_runtime.jsx)(RenameDialog, {
                open: renameDialogOpen,
                nickname: nickname,
                onClose: ()=>setRenameDialogOpen(false)
                ,
                onConfirm: async (name)=>{
                    await onRename(identifier, name);
                    setRenameDialogOpen(false);
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LogoutPersonaDialog, {
                open: logoutDialogOpen,
                identifier: identifier,
                onClose: ()=>setLogoutDialogOpen(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewDialog/* PreviewDialog */.g, {
                type: "download",
                open: exportPersonaDialogOpen,
                onClose: ()=>setExportPersonaDialogOpen(false)
                ,
                personaName: nickname || '',
                id: identifier.toText(),
                words: words?.split(' '),
                privateKey: privateKey || ''
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaCard/index.tsx









const PersonaCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        card: {
            borderRadius: Number(theme.shape.borderRadius) * 3,
            backgroundColor: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            display: 'flex',
            padding: theme.spacing(1.25),
            minWidth: 320
        },
        status: {
            width: 10,
            height: 10,
            borderRadius: '50%',
            marginRight: theme.spacing(1.25),
            marginTop: theme.spacing(0.625)
        },
        statusInactivated: {
            backgroundColor: entry/* MaskColorVar.iconLight */.ZN.iconLight
        },
        statusActivated: {
            backgroundColor: entry/* MaskColorVar.greenMain */.ZN.greenMain
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: theme.typography.caption.fontSize
        },
        content: {
            marginTop: theme.spacing(1.25),
            paddingRight: theme.spacing(1.25)
        },
        line: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: theme.typography.caption.fontSize
        },
        setting: {
            fontSize: theme.typography.caption.fontSize,
            padding: 0
        }
    })
);
const PersonaCard = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { connectPersona , disconnectPersona , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCardUI, {
        ...props,
        onConnect: connectPersona,
        onDisconnect: disconnectPersona,
        definedSocialNetworks: definedSocialNetworks
    });
});
const PersonaCardUI = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { nickname , active =false , definedSocialNetworks , identifier , profiles , publicKey  } = props;
    const { onConnect , onDisconnect , onClick  } = props;
    const { classes  } = PersonaCard_useStyles();
    const proof = usePersonaProof(publicKey);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()(classes.status, active ? classes.statusActivated : classes.statusInactivated)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "subtitle2",
                                sx: {
                                    cursor: 'pointer'
                                },
                                onClick: onClick,
                                children: nickname
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "caption",
                                sx: {
                                    cursor: 'pointer'
                                },
                                onClick: onClick,
                                children: (0,shared_base_src/* formatPersonaFingerprint */.Nb)(identifier.rawPublicKey, 4)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.content,
                        children: definedSocialNetworks.map(({ networkIdentifier  })=>{
                            const currentNetworkProfiles = profiles.filter((x)=>x.identifier.network === networkIdentifier
                            );
                            if (!currentNetworkProfiles.length) {
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(UnconnectedPersonaLine, {
                                    onConnect: ()=>onConnect(identifier, networkIdentifier)
                                    ,
                                    networkIdentifier: networkIdentifier
                                }, networkIdentifier);
                            } else {
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedPersonaLine, {
                                    proof: proof,
                                    isHideOperations: true,
                                    onConnect: (type, profile)=>onConnect(identifier, networkIdentifier, type, profile)
                                    ,
                                    onDisconnect: onDisconnect,
                                    profileIdentifiers: currentNetworkProfiles.map((x)=>x.identifier
                                    ),
                                    networkIdentifier: networkIdentifier,
                                    personaIdentifier: identifier
                                }, networkIdentifier);
                            }
                        })
                    })
                ]
            })
        ]
    });
});


;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaDrawer/index.tsx









const PersonaDrawer_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        paper: {
            // material-ui toolbar height
            top: '64px',
            padding: theme.spacing(3, 3.75, 11.25, 3.75),
            background: entry/* MaskColorVar.suspensionBackground */.ZN.suspensionBackground
        },
        backdrop: {
            background: 'none',
            top: 64
        },
        buttons: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridColumnGap: theme.spacing(3.5)
        },
        backup: {
            backgroundColor: entry/* MaskColorVar.warning */.ZN.warning,
            '&:hover': {
                backgroundColor: entry/* MaskColorVar.warning */.ZN.warning,
                boxShadow: `0 0 5px ${entry/* MaskColorVar.warning */.ZN.warning}`
            }
        }
    })
);
const PersonaDrawer = /*#__PURE__*/ (0,react.memo)(({ personas  })=>{
    const { drawerOpen , toggleDrawer , currentPersona , createPersona , changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaDrawerUI, {
        personas: personas,
        currentPersonaIdentifier: currentPersona?.identifier,
        open: drawerOpen,
        toggleDrawer: toggleDrawer,
        onChangeCurrentPersona: changeCurrentPersona,
        onCreatePersona: createPersona
    });
});
const PersonaDrawerUI = /*#__PURE__*/ (0,react.memo)(({ open , currentPersonaIdentifier , toggleDrawer , personas , onChangeCurrentPersona , onCreatePersona  })=>{
    const { classes  } = PersonaDrawer_useStyles();
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Drawer/* default */.ZP, {
        anchor: "right",
        open: open,
        onClose: toggleDrawer,
        variant: "temporary",
        ModalProps: {
            BackdropProps: {
                className: classes.backdrop
            }
        },
        elevation: 0,
        classes: {
            paper: classes.paper
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            justifyContent: "space-between",
            gap: 2,
            height: "100%",
            maxHeight: "100%",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    overflow: "auto",
                    children: [
                        personas.map((item)=>{
                            const { identifier , nickname , linkedProfiles  } = item;
                            const publicHexKey = identifier.publicKeyAsHex;
                            if (!publicHexKey) return null;
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                mb: 2.5,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCard, {
                                    publicKey: publicHexKey,
                                    identifier: identifier,
                                    active: identifier === currentPersonaIdentifier,
                                    nickname: nickname,
                                    profiles: [
                                        ...linkedProfiles.values()
                                    ],
                                    onClick: ()=>onChangeCurrentPersona(identifier)
                                })
                            }, identifier.toText());
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.buttons,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    onClick: ()=>navigate(shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp)
                                    ,
                                    disabled: personas.length >= shared_base_src/* MAX_PERSONA_LIMIT */.LM,
                                    children: t.personas_add_persona()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    color: "warning",
                                    onClick: ()=>navigate(shared_base_src/* DashboardRoutes.SignIn */.vq.SignIn, {
                                            state: {
                                                from: shared_base_src/* DashboardRoutes.Personas */.vq.Personas
                                            }
                                        })
                                    ,
                                    children: t.recovery()
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        fullWidth: true,
                        sx: {
                            mb: 2
                        },
                        color: "warning",
                        onClick: ()=>navigate(shared_base_src/* DashboardRoutes.Settings */.vq.Settings, {
                                state: {
                                    open: 'setting'
                                }
                            })
                        ,
                        children: t.settings_global_backup_title()
                    })
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ../dashboard/src/components/ContentContainer/index.tsx
var ContentContainer = __webpack_require__(83646);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(40661);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(7683);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useContacts.ts





function useContacts(network, page, size = 20) {
    const cache = (0,react.useRef)(new Map([]));
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    // If the network type be changed, clean cache
    (0,useUpdateEffect/* default */.Z)(()=>{
        cache.current = new Map();
    }, [
        network,
        currentPersona
    ]);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const lastValue = cache.current.get(page - 1);
        const values = await API/* Services.Identity.queryRelationPaged */.K9.Identity.queryRelationPaged(currentPersona?.identifier, {
            network,
            after: lastValue,
            pageOffset: page * size
        }, size);
        // Cache the last record of  each page
        cache.current.set(page, (0,last/* default */.Z)(values));
        if (values.length === 0) return [];
        const identifiers = values.map((x)=>x.profile
        );
        const [avatars, profiles] = await Promise.all([
            API/* Services.Identity.queryAvatarsDataURL */.K9.Identity.queryAvatarsDataURL(identifiers),
            API/* Services.Identity.queryProfilesInformation */.K9.Identity.queryProfilesInformation(identifiers), 
        ]);
        return profiles.map((profile)=>{
            const favor = values.find((x)=>x.profile === profile.identifier
            )?.favor;
            return {
                ...profile,
                favor,
                avatar: avatars.get(profile.identifier)
            };
        });
    }, [
        page,
        size,
        network,
        currentPersona
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(51399);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(34085);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(9293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TablePagination/TablePagination.js + 3 modules
var TablePagination = __webpack_require__(81890);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FilledInput/FilledInput.js
var FilledInput = __webpack_require__(44489);
// EXTERNAL MODULE: ../icons/general/Empty.tsx
var Empty = __webpack_require__(10581);
// EXTERNAL MODULE: ../dashboard/src/locales/i18n_generated.js
var i18n_generated = __webpack_require__(28074);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(39969);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/EmptyContactPlaceholder/index.tsx








const EmptyContactPlaceholder_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        prompt: {
            color: entry/* MaskColorVar.textLight */.ZN.textLight,
            fontSize: theme.typography.pxToRem(12),
            lineHeight: theme.typography.pxToRem(16),
            marginTop: theme.spacing(2.5)
        },
        icon: {
            width: 96,
            height: 96,
            fill: 'none'
        },
        download: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20
        },
        input: {
            fontSize: 12,
            paddingTop: 8,
            width: 280
        },
        button: {
            marginLeft: 20
        }
    })
);
const downloadUrl = 'https://mask.io/download-links/';
const EmptyContactPlaceholder = /*#__PURE__*/ (0,react.memo)(()=>{
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const copyDownloadLink = (0,src/* useSnackbarCallback */.iD)({
        executor: async ()=>copyToClipboard(downloadUrl)
        ,
        deps: []
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyContactPlaceholderUI, {
        onCopy: copyDownloadLink
    });
});
const EmptyContactPlaceholderUI = /*#__PURE__*/ (0,react.memo)(({ onCopy  })=>{
    const { classes  } = EmptyContactPlaceholder_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Empty/* EmptyIcon */.t, {
                className: classes.icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.prompt,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(i18n_generated/* DashboardTrans.personas_empty_contact_tips */.K.personas_empty_contact_tips, {
                    components: {
                        i: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            href: downloadUrl
                        })
                    },
                    values: {
                        name: 'Mask Network'
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.download,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FilledInput/* default */.Z, {
                        value: downloadUrl,
                        disabled: true,
                        classes: {
                            input: classes.input
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.button,
                        onClick: onCopy,
                        children: "Copy"
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ../dashboard/src/components/LoadingPlaceholder/index.tsx
var LoadingPlaceholder = __webpack_require__(57475);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sortBy.js
var sortBy = __webpack_require__(5043);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(9051);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(82302);
;// CONCATENATED MODULE: ../icons/general/Star.tsx


const StarIcon = (0,utils/* createIcon */.I)('StartIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M11.742 17.426a.5.5 0 01.516 0l4.908 2.962a.5.5 0 00.745-.542l-1.302-5.582a.5.5 0 01.16-.492l4.337-3.758a.5.5 0 00-.284-.876l-5.712-.492a.5.5 0 01-.418-.303L12.46 3.084a.5.5 0 00-.92 0l-2.232 5.26a.5.5 0 01-.418.302l-5.713.493a.5.5 0 00-.285.875l4.33 3.759a.5.5 0 01.16.49l-1.295 5.585a.5.5 0 00.746.54l4.909-2.962z"
    })
}), '0 0 24 24');

// EXTERNAL MODULE: ../icons/brands/MaskBlue.tsx
var MaskBlue = __webpack_require__(38521);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useFavoriteContact.ts



function useAddContactToFavorite() {
    return (0,useAsyncFn/* default */.Z)(async (identifier, currentPersona)=>{
        await API/* Services.Identity.updateRelation */.K9.Identity.updateRelation(identifier, currentPersona.identifier, shared_base_src/* RelationFavor.COLLECTED */.Kn.COLLECTED);
    }, []);
}
function useRemoveContactFromFavorite() {
    return (0,useAsyncFn/* default */.Z)(async (identifier, currentPersona)=>{
        await API/* Services.Identity.updateRelation */.K9.Identity.updateRelation(identifier, currentPersona.identifier, shared_base_src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED);
    });
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/ContactTableRow/index.tsx












const ContactTableRow_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        favorite: {
            marginLeft: 16,
            marginRight: 26,
            width: 24,
            height: 24
        },
        avatarContainer: {
            position: 'relative'
        },
        maskIcon: {
            position: 'absolute',
            width: 16,
            height: 16,
            right: 0,
            bottom: 0
        },
        button: {
            padding: '3px 24px',
            borderRadius: 14
        },
        info: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 17,
            justifyContent: 'space-between'
        },
        userId: {
            fontSize: 12,
            color: entry/* MaskColorVar.normalText */.ZN.normalText
        },
        tableRow: {
            '&:hover': {
                backgroundColor: theme.palette.background.default
            }
        }
    })
);
const ContactTableRow = /*#__PURE__*/ (0,react.memo)(({ network , contact , index , onReset  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const [, addContactToFavorite] = useAddContactToFavorite();
    const [, removeContactFromFavorite] = useRemoveContactFromFavorite();
    const theme = (0,useTheme/* default */.Z)().palette.mode;
    const handleClickStar = (0,react.useCallback)(async ()=>{
        if (!currentPersona) return;
        contact.favorite ? await removeContactFromFavorite(contact.identifier, currentPersona) : await addContactToFavorite(contact.identifier, currentPersona);
        onReset();
    }, [
        contact,
        currentPersona,
        onReset
    ]);
    const [{ loading  }, handleClickInvite] = (0,useAsyncFn/* default */.Z)(async ()=>{
        return API/* Services.SocialNetwork.openShareLink */.K9.SocialNetwork.openShareLink(network, t.personas_invite_post({
            identifier: contact.identifier.userId
        }));
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactTableRowUI, {
        handleClickInvite: handleClickInvite,
        handleClickStar: handleClickStar,
        theme: theme,
        loading: loading,
        contact: contact,
        index: index
    });
});
// https://unicode-table.com/en/0020/
const SPACE_POINT = 0x0020;
const ContactTableRowUI = /*#__PURE__*/ (0,react.memo)(({ contact , index , handleClickStar , handleClickInvite , theme , loading  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = ContactTableRow_useStyles();
    const [first, last] = contact.name.split(' ');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        className: classes.tableRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                align: "left",
                variant: "body",
                sx: {
                    border: 'none',
                    p: 1.5
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: index
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.favorite,
                            children: contact.fingerprint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(StarIcon, {
                                sx: {
                                    fill: contact.favorite ? entry/* MaskColorVar.warning */.ZN.warning : entry/* MaskColorVar.iconLight */.ZN.iconLight,
                                    cursor: 'pointer'
                                },
                                onClick: handleClickStar
                            }) : null
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.avatarContainer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    "aria-label": contact.name,
                                    src: contact.avatar,
                                    sx: {
                                        backgroundColor: (0,shared_base_src/* generateContactAvatarColor */.eP)(contact.identifier.toText(), theme),
                                        width: 48,
                                        height: 48
                                    },
                                    children: String.fromCodePoint(first.codePointAt(0) ?? SPACE_POINT, last?.codePointAt(0) ?? SPACE_POINT)
                                }),
                                contact.fingerprint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskBlue/* MaskBlueIcon */.I, {
                                    className: classes.maskIcon
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.info,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: contact.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.userId,
                                    children: [
                                        "@",
                                        contact.identifier.userId
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                align: "center",
                sx: {
                    border: 'none'
                },
                children: !contact.fingerprint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                    loading: loading,
                    color: "secondary",
                    size: "small",
                    variant: "contained",
                    className: classes.button,
                    onClick: handleClickInvite,
                    children: t.personas_contacts_invite()
                }) : null
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/ContactsTable/index.tsx















const ContactsTable_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        header: {
            color: entry/* MaskColorVar.normalText */.ZN.normalText,
            fontWeight: theme.typography.fontWeightRegular,
            padding: '24px 28px',
            backgroundColor: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground
        },
        footer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paginationItem: {
            borderRadius: 4,
            border: `1px solid ${entry/* MaskColorVar.lineLight */.ZN.lineLight}`,
            color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary,
            '&.Mui-selected': {
                backgroundColor: entry/* MaskColorVar.blue */.ZN.blue,
                color: '#ffffff',
                border: 'none',
                '&:hover': {
                    backgroundColor: entry/* MaskColorVar.blue */.ZN.blue
                }
            }
        }
    })
);
const PageSize = 20;
const ContactsTable = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const [page, setPage] = (0,react.useState)(0);
    const { currentPersona  } = (0,unstated_next/* useContainer */.u)(usePersonaContext/* PersonaContext */.m);
    const { value , error , loading , retry  } = useContacts(network, page, PageSize);
    const dataSource = (0,react.useMemo)(()=>{
        if (!value) return [];
        return (0,sortBy/* default */.Z)(value.map((profile)=>({
                favorite: profile.favor === shared_base_src/* RelationFavor.COLLECTED */.Kn.COLLECTED,
                name: profile.nickname || profile.identifier.userId || '',
                fingerprint: profile.linkedPersona?.rawPublicKey,
                identifier: profile.identifier,
                avatar: profile.avatar
            })
        ), (item)=>!item.favorite
        );
    }, [
        value,
        page
    ]);
    (0,react.useEffect)(()=>{
        setPage(0);
    }, [
        network
    ]);
    (0,react.useEffect)(()=>{
        return API/* Messages.events.relationsChanged.on */.Vm.events.relationsChanged.on(retry);
    }, [
        retry
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPage(0);
    }, [
        currentPersona
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactsTableUI, {
        isEmpty: !!error || !dataSource.length,
        isLoading: loading,
        network: network,
        dataSource: dataSource,
        page: page,
        onPageChange: setPage,
        showPagination: !loading && !error && !!value?.length,
        onReset: ()=>setPage(0)
    });
});
const ContactsTableUI = /*#__PURE__*/ (0,react.memo)(({ showPagination , page , onPageChange , network , dataSource , isEmpty , isLoading , onReset  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = ContactsTable_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "space-between",
        height: "100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                flex: 1,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                    className: classes.container,
                    children: isEmpty || isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        flex: 1,
                        children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}) : isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyContactPlaceholder, {}) : null
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
                        stickyHeader: true,
                        children: dataSource.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                            children: dataSource.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ContactTableRow, {
                                    contact: item,
                                    index: page * PageSize + index + 1,
                                    network: network,
                                    onReset: onReset
                                }, index)
                            )
                        }) : null
                    })
                })
            }),
            showPagination && !isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                    count: -1,
                    component: "div",
                    onPageChange: ()=>{},
                    page: page,
                    rowsPerPage: PageSize,
                    rowsPerPageOptions: [
                        PageSize
                    ],
                    labelDisplayedRows: ()=>null
                    ,
                    backIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev - 1
                            )
                        ,
                        size: 'small',
                        disabled: page === 0
                    },
                    nextIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev + 1
                            )
                        ,
                        disabled: dataSource.length < PageSize,
                        size: 'small'
                    }
                })
            }) : null
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/usePostHistory.ts





const usePostHistory = (network, page, size = 20)=>{
    const cache = (0,react.useRef)(new Map([]));
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    (0,useUpdateEffect/* default */.Z)(()=>{
        cache.current = new Map();
    }, [
        network,
        currentPersona
    ]);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const lastValue = cache.current.get(page - 1);
        const values = !currentPersona ? [] : await API/* Services.Crypto.queryPagedPostHistory */.K9.Crypto.queryPagedPostHistory(currentPersona.identifier, {
            network,
            userIds: currentPersona?.linkedProfiles.map((profile)=>profile.identifier.userId
            ) ?? [],
            after: lastValue?.identifier,
            pageOffset: page
        }, size);
        cache.current.set(page, (0,last/* default */.Z)(values));
        return values;
    }, [
        page,
        size,
        network,
        currentPersona
    ]);
};

;// CONCATENATED MODULE: ../icons/general/Message.tsx


const MessageIcon = (0,utils/* createIcon */.I)('MessageIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M4.5 6.46875C4.5 4.8119 5.84315 3.46875 7.5 3.46875H16.5C18.1569 3.46875 19.5 4.8119 19.5 6.46875V18.4688C19.5 20.1256 18.1569 21.4688 16.5 21.4688H7.5C5.84315 21.4688 4.5 20.1256 4.5 18.4688V6.46875Z",
            fill: "#FBB03B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.5 10.1953V6.46875C19.5 4.8119 18.1569 3.46875 16.5 3.46875H12.7734L19.5 10.1953Z",
            fill: "#FCDA21"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.7734 3.46875L12.7734 7.19531C12.7734 8.85217 14.1166 10.1953 15.7734 10.1953L19.5 10.1953L12.7734 3.46875Z",
            fill: "#F7931E"
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/general/FileMessage.tsx


const FileMessageIcon = (0,utils/* createIcon */.I)('FileMessageIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M3 7C3 6.44772 3.44772 6 4 6H10C10.3148 6 10.6111 6.14819 10.8 6.4L13.8 10.4C14.2944 11.0592 13.824 12 13 12H4C3.44772 12 3 11.5523 3 11V7Z",
            fill: "#F7931E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            opacity: "0.8",
            x: "4.5",
            y: "7.33594",
            width: "15",
            height: "10.5",
            rx: "1",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            opacity: "0.8",
            x: "4.5",
            y: "8.08594",
            width: "15",
            height: "10.5",
            rx: "1",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "3",
            y: "9",
            width: "18",
            height: "10.5",
            rx: "1",
            fill: "#FFB915"
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../icons/general/RedPacket.tsx
var RedPacket = __webpack_require__(42829);
// EXTERNAL MODULE: ../icons/general/NFTRedPacket.tsx
var NFTRedPacket = __webpack_require__(97986);
// EXTERNAL MODULE: ../icons/general/ITO.tsx
var ITO = __webpack_require__(63954);
;// CONCATENATED MODULE: ../icons/general/Poll.tsx


const PollIcon = (0,utils/* createIcon */.I)('PollIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "21",
            y: "11.25",
            width: "9.5625",
            height: "17.2031",
            rx: "1",
            transform: "rotate(90 21 11.25)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "8.39062",
            y: "13.6323",
            width: "8.01562",
            height: "1.40625",
            rx: "0.703125",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "17.1689",
            y: "2.88165",
            width: "7.31515",
            height: "10.8654",
            rx: "1",
            transform: "rotate(55.808 17.1689 2.88165)",
            fill: "#63EF92"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.5036 5.76682C16.7876 5.90741 16.9038 6.25159 16.7632 6.53555L14.5759 10.9592C14.554 11.0036 14.503 11.0252 14.4558 11.0102L12.1338 10.2674C11.8352 10.1613 11.6791 9.83332 11.7852 9.53473C11.8912 9.23613 12.2193 9.08005 12.5179 9.18611L13.9233 9.68531L15.7349 6.02641C15.8755 5.74245 16.2197 5.62622 16.5036 5.76682Z",
            fill: "white"
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var src_entry = __webpack_require__(70226);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PostHistory/PostHistoryRow.tsx










const MSG_DELIMITER = '2c1aca02';
const PostHistoryRow_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        hover: {
            '&:hover': {
                backgroundColor: theme.palette.background.default
            },
            alignItems: 'center',
            padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
            borderRadius: '8px'
        }
    };
});
const parseFileServiceMessage = (body)=>{
    const link = `https://arweave.net/${body.landingTxID}/#${body.key}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        underline: "none",
        target: "_blank",
        rel: "noopener noreferrer",
        href: link,
        children: body.name
    });
};
const SUPPORT_PLUGIN = {
    text: {
        pluginId: null,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageIcon, {}),
        messageParse: ()=>null
    },
    'com.maskbook.fileservice:1': {
        pluginId: null,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileMessageIcon, {}),
        messageParse: parseFileServiceMessage
    },
    'com.maskbook.fileservice:2': {
        pluginId: null,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileMessageIcon, {}),
        messageParse: parseFileServiceMessage
    },
    'com.maskbook.red_packet:1': {
        pluginId: src_entry/* PluginId.RedPacket */.je.RedPacket,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacket/* RedPacketIcon */.t, {}),
        messageParse: (body)=>body.sender.message
    },
    'com.maskbook.red_packet_nft:1': {
        pluginId: src_entry/* PluginId.RedPacket */.je.RedPacket,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTRedPacket/* NFTRedPacketIcon */.G, {}),
        messageParse: (body)=>body.message
    },
    'com.maskbook.ito:1': {
        pluginId: src_entry/* PluginId.ITO */.je.ITO,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO/* ITOIcon */.J, {}),
        messageParse: (body)=>body.message.split(MSG_DELIMITER)[1]
    },
    'com.maskbook.ito:2': {
        pluginId: src_entry/* PluginId.ITO */.je.ITO,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO/* ITOIcon */.J, {}),
        messageParse: (body)=>body.message.split(MSG_DELIMITER)[1]
    },
    'com.maskbook.poll:1': {
        pluginId: src_entry/* PluginId.Poll */.je.Poll,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(PollIcon, {}),
        messageParse: (body)=>body.question
    }
};
const PostHistoryRow = /*#__PURE__*/ (0,react.memo)(({ post , network  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { openProfilePage  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const recipientClickHandler = (0,react.useCallback)(async (event, userId)=>{
        event.stopPropagation();
        await openProfilePage(network, userId);
    }, []);
    const rowClickHandler = (0,react.useCallback)((event)=>{
        if (event.target.tagName !== 'A') {
            (0,shared_base_ui_src/* openWindow */.xw)(post?.url, '_blank');
        }
    }, []);
    const postIcon = (0,react.useMemo)(()=>{
        const { interestedMeta  } = post;
        const plugin = interestedMeta?.keys().next().value ?? 'text';
        return SUPPORT_PLUGIN[plugin]?.icon ?? /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageIcon, {});
    }, [
        post.interestedMeta
    ]);
    const postMessage = (0,react.useMemo)(()=>{
        const { interestedMeta  } = post;
        const meta = Array.from(interestedMeta ?? []);
        if (!meta.length) return null;
        const [pluginName, pluginInfo] = meta[0];
        return SUPPORT_PLUGIN[pluginName]?.messageParse(pluginInfo) ?? '';
    }, [
        post.interestedMeta
    ]);
    const postOperation = (0,react.useMemo)(()=>{
        const { identifier , interestedMeta  } = post;
        const meta = Array.from(interestedMeta ?? []);
        if (!meta.length) return null;
        const pluginName = meta[0][0];
        const pluginId = SUPPORT_PLUGIN[pluginName]?.pluginId;
        if (!pluginId) return null;
        const handler = ()=>API/* Services.SocialNetwork.openSNSAndActivatePlugin */.K9.SocialNetwork.openSNSAndActivatePlugin(`https://${identifier.network}`, pluginId)
        ;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            color: "secondary",
            variant: "rounded",
            onClick: handler,
            sx: {
                fontSize: 12
            },
            children: t.manage()
        });
    }, [
        post.identifier
    ]);
    const allRecipients = (0,react.useMemo)(()=>{
        const { recipients , postBy  } = post;
        if (recipients === 'everyone') return [
            'Everyone'
        ];
        const userIds = Array.from(recipients.keys()).map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                onClick: (e)=>recipientClickHandler(e, x.userId)
                ,
                children: [
                    "@",
                    x.userId
                ]
            }, x.userId)
        );
        return userIds.length ? userIds : [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                onClick: (e)=>recipientClickHandler(e, postBy.userId)
                ,
                children: "Myself"
            }, postBy.userId), 
        ];
    }, [
        post.recipients,
        post.postBy
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostHistoryRowUI, {
        operation: postOperation,
        message: postMessage,
        icon: postIcon,
        recipients: allRecipients,
        post: post,
        onClick: rowClickHandler
    });
});
const PostHistoryRowUI = /*#__PURE__*/ (0,react.memo)(({ post , message , icon , operation , onClick , recipients  })=>{
    const { classes  } = PostHistoryRow_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        gap: 1.5,
        className: classes.hover,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: 48,
                height: 48,
                sx: {
                    background: ()=>entry/* MaskColorVar.primary.alpha */.ZN.primary.alpha(0.1)
                },
                children: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                flex: 1,
                justifyContent: "space-around",
                sx: {
                    cursor: 'pointer'
                },
                gap: 0.3,
                onClick: onClick,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "p",
                        variant: "body2",
                        children: (post.summary?.length ?? 0) > 40 ? post.summary.slice(0, 40) + '...' : post.summary ?? ''
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "p",
                        variant: "body2",
                        children: message
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "p",
                        variant: "body2",
                        sx: {
                            color: (theme)=>(0,entry/* getMaskColor */.nb)(theme).textSecondary
                        },
                        children: recipients.map((recipient, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                variant: "body2",
                                sx: {
                                    mr: 1
                                },
                                children: recipient
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                children: operation
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var urlcat_dist = __webpack_require__(19802);
var urlcat_dist_default = /*#__PURE__*/__webpack_require__.n(urlcat_dist);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PostHistory/Placeholder.tsx








const Placeholder = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const url = urlcat_dist_default()('https://www.:network', {
        network
    });
    const handleClick = ()=>(0,shared_base_ui_src/* openWindow */.xw)(url)
    ;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        mt: -3.5,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            textAlign: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Empty/* EmptyIcon */.t, {
                    sx: {
                        fontSize: 100
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body2",
                    mb: 3,
                    sx: {
                        color: entry/* MaskColorVar.textSecondary */.ZN.textSecondary
                    },
                    children: t.personas_post_is_empty()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: handleClick,
                    children: t.personas_post_create()
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PostHistory/index.tsx






const DEFAULT_PAGE_SIZE = 20;
const PostHistory = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const [page, setPage] = (0,react.useState)(0);
    const { value , error , loading  } = usePostHistory(network, page, DEFAULT_PAGE_SIZE);
    if (!value?.length && !loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Placeholder, {
        network: network
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "space-between",
        height: "100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                flex: 1,
                mt: 1,
                children: value?.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PostHistoryRow, {
                        network: network,
                        post: x
                    }, x.url)
                )
            }),
            !loading && !error && !!value?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                justifyContent: "center",
                direction: "row",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                    sx: {
                        display: 'inline-block'
                    },
                    count: -1,
                    component: "div",
                    onPageChange: ()=>{},
                    page: page,
                    rowsPerPage: DEFAULT_PAGE_SIZE,
                    rowsPerPageOptions: [
                        DEFAULT_PAGE_SIZE
                    ],
                    labelDisplayedRows: ()=>null
                    ,
                    backIconButtonProps: {
                        onClick: ()=>setPage((prev)=>prev - 1
                            )
                        ,
                        size: 'small',
                        disabled: page === 0
                    },
                    nextIconButtonProps: {
                        onClick: ()=>setPage((prev)=>prev + 1
                            )
                        ,
                        disabled: value.length < DEFAULT_PAGE_SIZE,
                        size: 'small'
                    }
                })
            }) : null
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaContent/index.tsx







const PersonaContent_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            flex: 1,
            height: '100%'
        },
        tab: {
            maxHeight: '100%',
            height: '100%',
            overflow: 'auto',
            padding: `${theme.spacing(3)} 0`
        },
        tabs: {
            width: '288px'
        }
    })
);
var PersonaContentTab;
(function(PersonaContentTab) {
    PersonaContentTab["Posts"] = 'POST';
    PersonaContentTab["Contacts"] = "Contacts";
})(PersonaContentTab || (PersonaContentTab = {}));
const PersonaContent = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const { classes  } = PersonaContent_useStyles();
    const [tab, setTab] = (0,react.useState)(PersonaContentTab.Posts);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: String(tab),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(entry/* ButtonGroupTabList */.E1, {
                    classes: {
                        root: classes.tabs
                    },
                    onChange: (e, v)=>setTab(v)
                    ,
                    "aria-label": "persona-post-contacts-button-group",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: PersonaContentTab.Posts,
                            label: "Posts"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: PersonaContentTab.Contacts,
                            label: "Contacts"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: PersonaContentTab.Posts,
                    className: classes.tab,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostHistory, {
                        network: network
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: PersonaContentTab.Contacts,
                    className: classes.tab,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactsTable, {
                        network: network
                    })
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ../icons/general/ArrowUpRound.tsx


const ArrowUpRound = (0,utils/* createIcon */.I)('ArrowUp', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M18 15.6l-4-4-4 4",
        stroke: "#1C68F3",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 28 28');

// EXTERNAL MODULE: ../icons/general/ArrowDownRound.tsx
var ArrowDownRound = __webpack_require__(79656);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaStateBar/index.tsx







const PersonaStateBar_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        iconButton: {
            padding: 0,
            fontSize: 24,
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: `1px solid ${entry/* MaskColorVar.blue.alpha */.ZN.blue.alpha(0.1)}`
        },
        arrow: {
            fill: 'none',
            stroke: entry/* MaskColorVar.primary */.ZN.primary
        },
        nickname: {
            margin: theme.spacing(0, 1.5),
            lineHeight: 1.375
        }
    })
);
const PersonaStateBar = /*#__PURE__*/ (0,react.memo)(({ nickname , toggleDrawer , drawerOpen , fingerprint  })=>{
    const { classes  } = PersonaStateBar_useStyles();
    return(// magic number of z-index: https://next.material-ui.com/customization/z-index/#main-content
    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        alignItems: "center",
        sx: {
            zIndex: 1201
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAvatar, {
                onClick: toggleDrawer
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                sx: {
                    px: 2
                },
                justifyContent: "space-around",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        lineHeight: 1.2,
                        children: nickname
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "caption",
                        lineHeight: 1.2,
                        children: (0,shared_base_src/* formatPersonaFingerprint */.Nb)(fingerprint ?? '', 6)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                onClick: toggleDrawer,
                size: "small",
                className: classes.iconButton,
                children: drawerOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowUpRound, {
                    className: classes.arrow,
                    sx: {
                        fontSize: 28
                    }
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownRound/* ArrowDownRound */.l, {
                    className: classes.arrow,
                    sx: {
                        fontSize: 16
                    }
                })
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/index.tsx


















const Personas_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        tabPanel: {
            padding: 0,
            flex: 1
        },
        label: {
            width: 'auto'
        },
        tab: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        },
        personaCard: {
            padding: theme.spacing(4),
            marginBottom: theme.spacing(3),
            backgroundColor: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            [theme.breakpoints.down('md')]: {
                padding: theme.spacing(2)
            }
        }
    })
);
function firstProfileNetwork(x) {
    return x?.linkedProfiles[0]?.identifier?.network;
}
function Personas() {
    const { classes  } = Personas_useStyles();
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const { drawerOpen , toggleDrawer , personas , currentPersona , connectPersona , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    (0,react.useEffect)(()=>{
        if (personas?.length !== 0) return;
        showSnackbar(t.personas_setup_tip(), {
            variant: 'warning'
        });
        navigate(shared_base_src/* DashboardRoutes.Setup */.vq.Setup);
    }, [
        personas
    ]);
    const [activeTab, setActiveTab] = (0,react.useState)(firstProfileNetwork(currentPersona) ?? definedSocialNetworks[0].networkIdentifier);
    (0,react.useEffect)(()=>{
        setActiveTab(firstProfileNetwork(currentPersona) ?? definedSocialNetworks[0].networkIdentifier);
    }, [
        currentPersona,
        definedSocialNetworks
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(UserContext/* UserProvider */.d, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(PageFrame/* PageFrame */.C, {
            title: t.personas(),
            noBackgroundFill: true,
            primaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaStateBar, {
                nickname: currentPersona?.nickname,
                fingerprint: currentPersona?.identifier.rawPublicKey,
                drawerOpen: drawerOpen,
                toggleDrawer: toggleDrawer
            }),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                    variant: "rounded",
                    className: classes.personaCard,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaRowCard, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer/* ContentContainer */.O, {
                    style: {
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                        value: activeTab,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                                value: activeTab ? activeTab : false,
                                onChange: (event, tab)=>setActiveTab(tab)
                                ,
                                children: definedSocialNetworks.map(({ networkIdentifier  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                        value: networkIdentifier,
                                        // They should be localized
                                        label: (0,capitalize/* default */.Z)(networkIdentifier.split('.')[0])
                                    }, networkIdentifier)
                                )
                            }),
                            definedSocialNetworks.map(({ networkIdentifier  })=>{
                                if (!currentPersona) return null;
                                const profile = currentPersona.linkedProfiles.find((x)=>x.identifier.network === networkIdentifier
                                );
                                if (profile) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                    value: networkIdentifier,
                                    className: activeTab === networkIdentifier ? classes.tab : undefined,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaContent, {
                                        network: networkIdentifier
                                    })
                                }, networkIdentifier);
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                    value: networkIdentifier,
                                    className: activeTab === networkIdentifier ? classes.tab : undefined,
                                    sx: {
                                        flex: 1,
                                        height: 'calc(100% - 48px)'
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                        alignItems: "center",
                                        height: "100%",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaSetup, {
                                            networkIdentifier: networkIdentifier,
                                            onConnect: ()=>connectPersona(currentPersona.identifier, networkIdentifier)
                                        })
                                    })
                                }, networkIdentifier);
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaDrawer, {
                    personas: personas
                })
            ]
        })
    });
}
/* harmony default export */ const pages_Personas = (Personas);


/***/ }),

/***/ 64165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SettingPasswordDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25993);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21784);
/* harmony import */ var _hooks_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77778);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51502);
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66270);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31939);
/* harmony import */ var _components_PasswordField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(477);









function SettingPasswordDialog({ open , onClose , onSet  }) {
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_4__/* .useDashboardI18N */ .x)();
    const { showSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .useCustomSnackbar */ .Ii)();
    const { user , updateUser  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_hooks_UserContext__WEBPACK_IMPORTED_MODULE_3__/* .UserContext */ .S);
    const [incorrectPassword, setIncorrectPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [passwordValid, setValidState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [passwordMatched, setMatchState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [repeatPassword, setRepeatPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const passwordRule = t.settings_password_rule();
    const handleClose = ()=>{
        setPassword('');
        onClose();
    };
    const handleConfirm = ()=>{
        if (user.backupPassword) {
            if (user.backupPassword !== password) {
                setIncorrectPassword(true);
                return;
            }
        }
        if (!newPassword) return setValidState(false);
        const matched = newPassword === repeatPassword;
        setMatchState(matched);
        if (passwordValid && matched) {
            const msg = user.backupPassword ? t.settings_alert_password_updated() : t.settings_alert_password_set();
            showSnackbar(msg, {
                variant: 'success'
            });
            updateUser({
                backupPassword: newPassword
            });
            onSet?.();
            onClose();
        }
    };
    const validCheck = ()=>{
        const isValid = _regexp__WEBPACK_IMPORTED_MODULE_7__/* .passwordRegexp.test */ .qH.test(newPassword);
        setValidState(isValid);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!newPassword || !repeatPassword) {
            setMatchState(true);
        }
        if (!newPassword) {
            setValidState(true);
        }
    }, [
        newPassword,
        repeatPassword
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: user.backupPassword ? t.settings_dialogs_change_backup_password() : t.settings_dialogs_setting_backup_password(),
        maxWidth: "xs",
        open: open,
        onClose: handleClose,
        onConfirm: handleConfirm,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            sx: {
                minHeight: '160px'
            },
            py: 1,
            children: [
                user.backupPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fullWidth: true,
                    value: password,
                    onChange: (event)=>setPassword(event.target.value)
                    ,
                    placeholder: t.settings_label_backup_password(),
                    sx: {
                        marginBottom: '16px'
                    },
                    error: incorrectPassword,
                    helperText: incorrectPassword ? t.settings_dialogs_incorrect_password() : ''
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fullWidth: true,
                    value: newPassword,
                    onChange: (event)=>setNewPassword(event.target.value)
                    ,
                    onBlur: validCheck,
                    placeholder: user.backupPassword ? t.settings_label_new_backup_password() : t.settings_label_backup_password(),
                    sx: {
                        marginBottom: '16px'
                    },
                    error: !passwordValid,
                    helperText: passwordValid ? '' : passwordRule
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fullWidth: true,
                    value: repeatPassword,
                    onChange: (event)=>setRepeatPassword(event.target.value)
                    ,
                    placeholder: t.settings_label_re_enter(),
                    error: !passwordMatched,
                    helperText: !passwordMatched ? t.settings_dialogs_inconsistency_password() : ''
                }),
                passwordValid && passwordMatched ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    sx: {
                        fontSize: '12px',
                        padding: '8px 0'
                    },
                    children: passwordRule
                }) : null
            ]
        })
    });
};


/***/ }),

/***/ 77778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ UserContext),
  "d": () => (/* binding */ UserProvider)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/components/dialogs/SettingPasswordDialog.tsx
var SettingPasswordDialog = __webpack_require__(64165);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(51502);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../dashboard/src/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(477);
;// CONCATENATED MODULE: ../dashboard/src/components/BackupPasswordConfirmDialog/index.tsx









const BackupPasswordConfirmDialog = /*#__PURE__*/ (0,react.memo)(({ onConfirmed , onClose , open , option  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { user  } = (0,react.useContext)(UserContext);
    const [password, setPassword] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const onSubmitPassword = ()=>{
        if (user.backupPassword === password) {
            onConfirmed();
        } else {
            setError(t.settings_dialogs_incorrect_password());
        }
    };
    const title = (0,react.useMemo)(()=>{
        return (user.backupPassword ? option?.confirmTitle : option?.tipTitle) ?? t.confirm_password();
    }, [
        option?.tipTitle,
        option?.confirmTitle
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(entry/* MaskDialog */.Df, {
        open: open,
        title: title,
        onClose: onClose,
        maxWidth: "xs",
        children: [
            !user.backupPassword && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                        sx: {
                            py: 0,
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            fontSize: 13,
                            children: option?.tipContent
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "secondary",
                                onClick: onClose,
                                children: t.personas_cancel()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                onClick: ()=>navigate(src/* DashboardRoutes.Settings */.vq.Settings, {
                                        state: {
                                            open: 'password'
                                        }
                                    })
                                ,
                                children: t.settings()
                            })
                        ]
                    })
                ]
            }),
            user.backupPassword && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                        sx: {
                            py: 0,
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                            sx: {
                                flex: 1
                            },
                            onChange: (e)=>{
                                setPassword(e.currentTarget.value);
                                setError('');
                            },
                            placeholder: t.settings_label_backup_password(),
                            error: !!error,
                            helperText: error
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "secondary",
                                onClick: onClose,
                                children: t.personas_cancel()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                disabled: !!error,
                                onClick: onSubmitPassword,
                                children: t.personas_confirm()
                            })
                        ]
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/hooks/UserContext.tsx




const UserContext = /*#__PURE__*/ (0,react.createContext)({
    user: {
        backupPassword: '',
        email: '',
        phone: '',
        backupMethod: '',
        backupAt: ''
    },
    updateUser: ()=>{
        throw new Error('Context not provided.');
    },
    ensurePasswordSet: ()=>{
        throw new Error('Context not provided.');
    },
    confirmPassword: ()=>{
        throw new Error('Context not provided.');
    }
});
function UserProvider({ children  }) {
    const backupPassword = localStorage.getItem('backupPassword');
    const [user, setUser] = (0,react.useState)({
        backupPassword: backupPassword && atob(backupPassword),
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        backupMethod: localStorage.getItem('backupMethod'),
        backupAt: localStorage.getItem('backupAt')
    });
    const [callback, setCallback] = (0,react.useState)(null);
    const [confirmCallback, setConfirmCallback] = (0,react.useState)(null);
    const [confirmOption, setConfirmOption] = (0,react.useState)();
    const updateUser = (obj)=>{
        const updated = {
            ...user,
            ...obj
        };
        setUser(updated);
        localStorage.setItem('backupPassword', btoa(updated.backupPassword ?? ''));
        localStorage.setItem('email', updated.email || '');
        localStorage.setItem('phone', updated.phone || '');
        localStorage.setItem('backupMethod', updated.backupMethod || '');
        localStorage.setItem('backupAt', updated.backupAt || '');
    };
    const ensurePasswordSet = (f)=>{
        if (user.backupPassword) f();
        else setCallback([
            f
        ]);
    };
    const confirmPassword = (f, option)=>{
        const { force =true  } = option ?? {};
        if (!force && !user.backupPassword) {
            f();
        } else {
            setConfirmCallback([
                f
            ]);
            setConfirmOption(option);
        }
    };
    const onSet = ()=>{
        callback?.[0]?.();
    };
    const onConfirmed = ()=>{
        confirmCallback?.[0]?.();
        setConfirmCallback(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(UserContext.Provider, {
        value: {
            user,
            updateUser,
            ensurePasswordSet,
            confirmPassword
        },
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingPasswordDialog/* default */.Z, {
                open: !!callback,
                onSet: onSet,
                onClose: ()=>setCallback(null)
            }),
            !!confirmCallback && /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupPasswordConfirmDialog, {
                option: confirmOption,
                open: !!confirmCallback,
                onConfirmed: onConfirmed,
                onClose: ()=>setConfirmCallback(null)
            })
        ]
    });
}


/***/ }),

/***/ 66270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LX": () => (/* binding */ emailRegexp),
/* harmony export */   "qH": () => (/* binding */ passwordRegexp),
/* harmony export */   "wZ": () => (/* binding */ phoneRegexp)
/* harmony export */ });
const passwordRegexp = /^(?=.{8,20}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\dA-Za-z]).*/;
const emailRegexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegexp = /^(\+?([ .-])?\d{1,2}([ .-])?)?(\(?\d{3}\)?|\d{3})([ .-])?(\d{3}([ .-])?\d{4})/;


/***/ }),

/***/ 38521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ MaskBlueIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const MaskBlueIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Mask', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#1C68F3",
            d: "M60 120A60 60 0 1060 0a60 60 0 000 120z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M96 46v20H33.42a27.21 27.21 0 0050.95 6H96v16.8a7.2 7.2 0 01-7.2 7.2H31.2a7.2 7.2 0 01-7.2-7.2V46h72zM77.47 72a21.18 21.18 0 01-35.03 0h35.03zM44.6 50.8a11.2 11.2 0 00-11.09 9.6h6.14a5.2 5.2 0 019.9 0h6.14a11.2 11.2 0 00-11.09-9.6zm30.8 0a11.2 11.2 0 00-11.09 9.6h6.14a5.2 5.2 0 019.9 0h6.14a11.2 11.2 0 00-11.09-9.6zM88.8 24a7.2 7.2 0 017.2 7.2V40H24v-8.8a7.2 7.2 0 017.2-7.2h57.6z",
            clipRule: "evenodd"
        })
    ]
}), '0 0 120 120');


/***/ }),

/***/ 79656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ArrowDownRound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const ArrowDownRound = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ArrowDown', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m4 5.6 4 4 4-4",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');


/***/ }),

/***/ 13316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EyeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const EyeIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), undefined, '0 0 20 20');


/***/ }),

/***/ 72585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ EyeOffIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const EyeOffIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeOffIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#111432",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#ffffff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), undefined, '0 0 20 20');


/***/ }),

/***/ 1689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const File = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('File', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.5",
            d: "M8.08752 12.9375C8.08752 9.62379 10.4 6.9375 13.2525 6.9375H28.7473C31.5998 6.9375 33.9123 9.62379 33.9123 12.9375V36.9375C33.9123 40.2512 31.5998 42.9375 28.7473 42.9375H13.2525C10.4 42.9375 8.08752 40.2512 8.08752 36.9375V12.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.1",
            d: "M33.9122 20.3906V12.9375C33.9122 9.62379 31.5998 6.9375 28.7473 6.9375H22.3314L33.9122 20.3906Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M22.3314 6.9375L22.3314 14.3906C22.3314 17.7043 24.6439 20.3906 27.4964 20.3906L33.9122 20.3906L22.3314 6.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22.7565 22.8277C22.2814 22.2145 21.649 21.8834 21.0023 21.8834C20.3556 21.8834 19.7233 22.2145 19.2482 22.8277C18.7715 23.443 18.4959 24.2895 18.4959 25.1833V27.7068H23.5088V25.1833C23.5088 24.2895 23.2332 23.443 22.7565 22.8277ZM24.5113 27.7068V25.1833C24.5113 24.0179 24.1531 22.8894 23.5017 22.0486C22.8487 21.2057 21.951 20.7188 21.0023 20.7188C20.0536 20.7188 19.1559 21.2057 18.503 22.0486C17.8515 22.8894 17.4933 24.0179 17.4933 25.1833V27.7068H17.1007C16.2174 27.7068 15.4855 28.5263 15.4855 29.5597V34.0066C15.4855 35.0399 16.2174 35.8594 17.1007 35.8594H24.8985C25.7819 35.8594 26.5138 35.0399 26.5138 34.0066V29.5597C26.5138 28.5263 25.7819 27.7068 24.8985 27.7068H24.5113ZM25.5112 29.5597C25.5112 29.1896 25.2456 28.8715 24.8985 28.8715H17.1007C16.7536 28.8715 16.488 29.1896 16.488 29.5597V34.0066C16.488 34.3766 16.7536 34.6948 17.1007 34.6948H24.8985C25.2456 34.6948 25.5112 34.3766 25.5112 34.0066V29.5597Z",
            fill: "white"
        })
    ]
}), '0 0 42 48', [
    42,
    48
]);


/***/ }),

/***/ 97986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ NFTRedPacketIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const NFTRedPacketIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('NFTRedPacketIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M4.51712 6.19485C4.51712 6.19485 3.72407 3.91086 12.638 3.91086C21.5519 3.91086 20.7588 6.19485 20.7588 6.19485V7.17823H4.51712V6.19485Z",
            fill: "#DB1919"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 15.0001H17.1377V16.5001H18.6377V15.0001Z",
            fill: "#291E20"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 15.0001H15.6377V16.5001H17.1377V15.0001Z",
            fill: "#1A1115"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 15.0001H14.1377V16.5001H15.6377V15.0001Z",
            fill: "#1B1417"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 15.0001H12.6377V16.5001H14.1377V15.0001Z",
            fill: "#1D1018"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 15.0001H11.1377V16.5001H12.6377V15.0001Z",
            fill: "#131117"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 15.0001H9.6377V16.5001H11.1377V15.0001Z",
            fill: "#1B1419"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 15.0001H8.1377V16.5001H9.6377V15.0001Z",
            fill: "#2D2529"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 13.5001H17.1377V15.0001H18.6377V13.5001Z",
            fill: "#1F1114"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 13.5001H15.6377V15.0001H17.1377V13.5001Z",
            fill: "#0F0407"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 13.5001H14.1377V15.0001H15.6377V13.5001Z",
            fill: "#130408"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 13.5001H12.6377V15.0001H14.1377V13.5001Z",
            fill: "#12060B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 13.5001H11.1377V15.0001H12.6377V13.5001Z",
            fill: "#562311"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 13.5001H9.6377V15.0001H11.1377V13.5001Z",
            fill: "#512111"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 13.5001H8.1377V15.0001H9.6377V13.5001Z",
            fill: "#211618"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 12.0001H17.1377V13.5001H18.6377V12.0001Z",
            fill: "#171112"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 12.0001H15.6377V13.5001H17.1377V12.0001Z",
            fill: "#1A0A0B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 12.0001H14.1377V13.5001H15.6377V12.0001Z",
            fill: "#270D04"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 12.0001H12.6377V13.5001H14.1377V12.0001Z",
            fill: "#E97800"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 12.0001H11.1377V13.5001H12.6377V12.0001Z",
            fill: "#ED8900"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 12.0001H9.6377V13.5001H11.1377V12.0001Z",
            fill: "#5B3311"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 12.0001H8.1377V13.5001H9.6377V12.0001Z",
            fill: "#21171D"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 10.5001H17.1377V12.0001H18.6377V10.5001Z",
            fill: "#1D1614"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 10.5001H15.6377V12.0001H17.1377V10.5001Z",
            fill: "#150706"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 10.5001H14.1377V12.0001H15.6377V10.5001Z",
            fill: "#030106"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 10.5001H12.6377V12.0001H14.1377V10.5001Z",
            fill: "#0D0808"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 10.5001H11.1377V12.0001H12.6377V10.5001Z",
            fill: "#462B10"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 10.5001H9.6377V12.0001H11.1377V10.5001Z",
            fill: "#5C310C"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 10.5001H8.1377V12.0001H9.6377V10.5001Z",
            fill: "#1C1118"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 9.00009H17.1377V10.5001H18.6377V9.00009Z",
            fill: "#2C1B19"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 9.00009H15.6377V10.5001H17.1377V9.00009Z",
            fill: "#1A0908"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 9.00009H14.1377V10.5001H15.6377V9.00009Z",
            fill: "#0E0503"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 9.00009H12.6377V10.5001H14.1377V9.00009Z",
            fill: "#0A060A"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 9.00009H11.1377V10.5001H12.6377V9.00009Z",
            fill: "#000105"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 9.00009H9.6377V10.5001H11.1377V9.00009Z",
            fill: "#10070C"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 9.00009H8.1377V10.5001H9.6377V9.00009Z",
            fill: "#4F361D"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 7.50009H17.1377V9.00009H18.6377V7.50009Z",
            fill: "#592613"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 7.50009H15.6377V9.00009H17.1377V7.50009Z",
            fill: "#190C0B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 7.50009H14.1377V9.00009H15.6377V7.50009Z",
            fill: "#7E4B08"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 7.50009H12.6377V9.00009H14.1377V7.50009Z",
            fill: "#E39B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 7.50009H11.1377V9.00009H12.6377V7.50009Z",
            fill: "#5D320C"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 7.50009H9.6377V9.00009H11.1377V7.50009Z",
            fill: "#22110E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 7.50009H8.1377V9.00009H9.6377V7.50009Z",
            fill: "#6A2C1E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 6.00009H17.1377V7.50009H18.6377V6.00009Z",
            fill: "#4F3A11"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 6.00009H15.6377V7.50009H17.1377V6.00009Z",
            fill: "#2F270E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 6.00009H14.1377V7.50009H15.6377V6.00009Z",
            fill: "#904400"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 6.00009H12.6377V7.50009H14.1377V6.00009Z",
            fill: "#341206"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 6.00009H11.1377V7.50009H12.6377V6.00009Z",
            fill: "#140E0F"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 6.00009H9.6377V7.50009H11.1377V6.00009Z",
            fill: "#4D401E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 6.00009H8.1377V7.50009H9.6377V6.00009Z",
            fill: "#3B3524"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 4.50009H17.1377V6.00009H18.6377V4.50009Z",
            fill: "#625617"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 4.50009H15.6377V6.00009H17.1377V4.50009Z",
            fill: "#333417"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 4.50009H14.1377V6.00009H15.6377V4.50009Z",
            fill: "#41160C"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 4.50009H12.6377V6.00009H14.1377V4.50009Z",
            fill: "#D47100"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 4.50009H11.1377V6.00009H12.6377V4.50009Z",
            fill: "#33190B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 4.50009H9.6377V6.00009H11.1377V4.50009Z",
            fill: "#21200E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 4.50009H8.1377V6.00009H9.6377V4.50009Z",
            fill: "#3B3B23"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 3.00009H17.1377V4.50009H18.6377V3.00009Z",
            fill: "#C29F09"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 3.00009H15.6377V4.50009H17.1377V3.00009Z",
            fill: "#83711D"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 3.00009H14.1377V4.50009H15.6377V3.00009Z",
            fill: "#461400"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 3.00009H12.6377V4.50009H14.1377V3.00009Z",
            fill: "#D17C00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 3.00009H11.1377V4.50009H12.6377V3.00009Z",
            fill: "#8A5D1B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 3.00009H9.6377V4.50009H11.1377V3.00009Z",
            fill: "#B6972C"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 3.00009H8.1377V4.50009H9.6377V3.00009Z",
            fill: "#7C6729"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 1.50009H17.1377V3.00009H18.6377V1.50009Z",
            fill: "#BD980B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 1.50009H15.6377V3.00009H17.1377V1.50009Z",
            fill: "#E2B92B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 1.50009H14.1377V3.00009H15.6377V1.50009Z",
            fill: "#020000"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 1.50009H12.6377V3.00009H14.1377V1.50009Z",
            fill: "#D68900"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 1.50009H11.1377V3.00009H12.6377V1.50009Z",
            fill: "#B38825"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 1.50009H9.6377V3.00009H11.1377V1.50009Z",
            fill: "#F4C32E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 1.50009H8.1377V3.00009H9.6377V1.50009Z",
            fill: "#C29F36"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 9.15527e-05H17.1377V1.50009H18.6377V9.15527e-05Z",
            fill: "#8D8239"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 9.15527e-05H15.6377V1.50009H17.1377V9.15527e-05Z",
            fill: "#8F732B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 9.15527e-05H14.1377V1.50009H15.6377V9.15527e-05Z",
            fill: "#AA9530"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 9.15527e-05H12.6377V1.50009H14.1377V9.15527e-05Z",
            fill: "#8F8533"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 9.15527e-05H11.1377V1.50009H12.6377V9.15527e-05Z",
            fill: "#887527"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 9.15527e-05H9.6377V1.50009H11.1377V9.15527e-05Z",
            fill: "#8F792B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 9.15527e-05H8.1377V1.50009H9.6377V9.15527e-05Z",
            fill: "#93813A"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 9.15527e-05H6.6377V1.50009H8.1377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 1.50009H6.6377V3.00009H8.1377V1.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 3.00009H6.6377V4.50009H8.1377V3.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 4.50009H6.6377V6.00009H8.1377V4.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 6.00009H6.6377V7.50009H8.1377V6.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 7.50009H6.6377V9.00009H8.1377V7.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 9.00009H6.6377V10.5001H8.1377V9.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 10.5001H6.6377V12.0001H8.1377V10.5001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 12.0001H6.6377V13.5001H8.1377V12.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 13.5001H6.6377V15.0001H8.1377V13.5001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 15.0001H6.6377V16.5001H8.1377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 15.0001H8.1377V16.5001H9.6377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 15.0001H9.6377V16.5001H11.1377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 15.0001H11.1377V16.5001H12.6377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 15.0001H12.6377V16.5001H14.1377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 15.0001H14.1377V16.5001H15.6377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 15.0001H15.6377V16.5001H17.1377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 15.0001H17.1377V16.5001H18.6377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 13.5001H17.1377V15.0001H18.6377V13.5001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 12.0001H17.1377V13.5001H18.6377V12.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 10.5001H17.1377V12.0001H18.6377V10.5001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 9.00009H17.1377V10.5001H18.6377V9.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 7.50009H17.1377V9.00009H18.6377V7.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 6.00009H17.1377V7.50009H18.6377V6.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 4.50009H17.1377V6.00009H18.6377V4.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 3.00009H17.1377V4.50009H18.6377V3.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 1.50009H17.1377V3.00009H18.6377V1.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 9.15527e-05H17.1377V1.50009H18.6377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 9.15527e-05H15.6377V1.50009H17.1377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 9.15527e-05H14.1377V1.50009H15.6377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 9.15527e-05H12.6377V1.50009H14.1377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 9.15527e-05H11.1377V1.50009H12.6377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 9.15527e-05H9.6377V1.50009H11.1377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 9.15527e-05H8.1377V1.50009H9.6377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M4.51758 6.2583C4.51758 6.2583 7.53117 7.16238 12.6226 7.16238C17.714 7.16238 20.7593 6.2583 20.7593 6.2583V21.5C20.7593 22.0523 20.3116 22.5 19.7593 22.5H5.51758C4.96529 22.5 4.51758 22.0523 4.51758 21.5V6.2583Z",
            fill: "#F93737"
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 16240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ NextIdPersonaWarningIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const NextIdPersonaWarningIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('NextIdPersonaWarning', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.2",
            d: "M8.00004 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6819 4.31814 14.6666 8.00004 14.6666Z",
            fill: "#FFB915"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.66671 4.85472C8.66671 4.48653 8.36823 4.18805 8.00004 4.18805C7.63185 4.18805 7.33337 4.48653 7.33337 4.85472V8.18805C7.33337 8.55624 7.63185 8.85472 8.00004 8.85472C8.36823 8.85472 8.66671 8.55624 8.66671 8.18805V4.85472Z",
            fill: "#FFB915"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.66671 10.6667C8.66671 10.2985 8.36823 10 8.00004 10C7.63185 10 7.33337 10.2985 7.33337 10.6667C7.33337 11.0349 7.63185 11.3333 8.00004 11.3333C8.36823 11.3333 8.66671 11.0349 8.66671 10.6667Z",
            fill: "#FFB915"
        })
    ]
}), '0 0 16 16');


/***/ }),

/***/ 60733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ SettingsIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const SettingsIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Settings', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12 23l-9.5-5.5v-11L12 1l9.5 5.5v11L12 23zm0-19.688L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311v.001zM12 16a4 4 0 112.828-1.172A4.027 4.027 0 0112 16zm0-6a2 2 0 10-.001 4A2 2 0 0012 10z"
    })
}), '0 0 24 24');


/***/ }),

/***/ 42417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ WarningIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const WarningIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('WarningIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".2",
            d: "M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z",
            fill: "#FF5F5F"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M22 26a2 2 0 104 0V16a2 2 0 10-4 0v10zM22 32a2 2 0 104 0 2 2 0 00-4 0z",
            fill: "#FF5F5F"
        })
    ]
}), '0 0 48 48');


/***/ })

}]);