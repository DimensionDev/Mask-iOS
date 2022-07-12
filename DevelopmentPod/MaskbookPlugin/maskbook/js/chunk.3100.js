"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3100],{

/***/ 43240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75068);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96724);



function useTitle(title) {
    const { setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__/* .PageTitleContext */ .I);
    (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
        setTitle(title);
    });
}


/***/ }),

/***/ 3100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Personas_AccountDetail)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ./src/extension/popups/hook/useTitle.ts
var useTitle = __webpack_require__(43240);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/extension/popups/pages/Personas/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(78066);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ./src/extension/popups/pages/Personas/components/AccountAvatar/index.tsx + 1 modules
var AccountAvatar = __webpack_require__(39968);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(80875);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/AccountDetail/UI.tsx







const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        container: {
            padding: '8px 16px 0 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: 12,
            backgroundColor: '#F7F9FA',
            flex: 1
        },
        name: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            color: '#07101B'
        },
        warning: {
            padding: '6px 12px',
            background: 'rgba(255, 185, 21, 0.1)',
            color: '#FFB915',
            fontSize: 12,
            lineHeight: '16px'
        },
        controller: {
            position: 'fixed',
            left: 16,
            right: 16,
            bottom: 16,
            display: 'flex',
            justifyContent: 'space-between',
            columnGap: 12
        },
        button: {
            padding: '10px 0',
            display: 'flex',
            justifyContent: 'center',
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 600,
            color: '#ffffff',
            borderRadius: 99,
            flex: 1
        }
    })
);
const AccountDetailUI = /*#__PURE__*/ (0,react.memo)(({ account , personaName , onVerify , onDisconnect , disconnectLoading  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountAvatar/* AccountAvatar */.M, {
                avatar: account.avatar,
                network: account.identifier.network,
                isValid: account.is_valid
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.name,
                children: [
                    "@",
                    account.identifier.userId
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.warning,
                children: account.is_valid ? t('popups_verify_warning_alert', {
                    persona: personaName,
                    account: account.identifier.userId
                }) : t('popups_disconnect_warning_alert', {
                    account: account.identifier.userId
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.controller,
                children: account.is_valid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                    className: classes.button,
                    style: {
                        background: '#FFB915'
                    },
                    loading: disconnectLoading,
                    onClick: onDisconnect,
                    children: t('popups_persona_disconnect')
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                            className: classes.button,
                            style: {
                                background: '#FFB915'
                            },
                            loading: disconnectLoading,
                            onClick: onDisconnect,
                            children: t('popups_persona_disconnect')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.button,
                            style: {
                                background: '#1C68F3'
                            },
                            onClick: ()=>onVerify()
                            ,
                            children: t('popups_verify_account')
                        })
                    ]
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(71246);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/components/DisconnectDialog/index.tsx









const DisconnectDialog_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        title: {
            fontSize: 16,
            lineHeight: '22px',
            color: '#0F1419',
            textAlign: 'center'
        },
        content: {
            marginTop: 24,
            fontSize: 14,
            lineHeight: '20px',
            color: '#536471'
        },
        actions: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            '& > *': {
                marginLeft: '0 !important'
            }
        },
        button: {
            padding: '8px 0',
            width: '100%',
            borderRadius: 9999,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '20px'
        },
        confirmButton: {
            backgroundColor: '#FFB100',
            color: '#ffffff',
            '&:hover': {
                backgroundColor: '#ef9f00'
            }
        },
        cancelButton: {
            color: '#111418',
            border: '1px solid #CFD9DE'
        }
    })
);
const DisconnectDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose , unbundledIdentity , onConfirmDisconnect , confirmLoading  })=>{
    const { classes  } = DisconnectDialog_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    if (!unbundledIdentity) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.Z, {
        open: open,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: t('popups_persona_disconnect_confirmation')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.content,
                        children: t('popups_persona_disconnect_confirmation_description')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.content,
                        children: [
                            t('popups_persona'),
                            ":",
                            ' ',
                            (0,src/* formatPersonaFingerprint */.Nb)(currentPersona?.identifier.rawPublicKey ?? '', 10),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                            t('popups_twitter_id'),
                            ": @",
                            unbundledIdentity.userId
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                        loading: confirmLoading,
                        className: classnames_default()(classes.button, classes.confirmButton),
                        onClick: onConfirmDisconnect,
                        children: t('confirm')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classnames_default()(classes.button, classes.cancelButton),
                        onClick: onClose,
                        children: t('cancel')
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/AccountDetail/index.tsx














const AccountDetail = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { selectedAccount , currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const [open, setOpen] = (0,react.useState)(false);
    const { showSnackbar  } = (0,entry/* usePopupCustomSnackbar */.D9)();
    const [disconnectState, onDisconnect] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            if (!selectedAccount?.identifier) return;
            if (shared_src/* SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID.includes */.ge.includes(selectedAccount.identifier.network) && selectedAccount.is_valid) {
                setOpen(true);
                return;
            }
            await service/* default.Identity.detachProfile */.ZP.Identity.detachProfile(selectedAccount.identifier);
            showSnackbar(t('popups_disconnect_success'), {
                variant: 'success'
            });
            navigate(-1);
        } catch  {
            showSnackbar(t('popups_disconnect_failed'), {
                variant: 'error'
            });
        }
    }, [
        selectedAccount
    ]);
    const [confirmState, onConfirmReleaseBind] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            if (!currentPersona?.identifier.publicKeyAsHex || !selectedAccount?.identity || !selectedAccount?.platform) return;
            const result = await web3_providers_src/* NextIDProof.createPersonaPayload */.q7.createPersonaPayload(currentPersona.identifier.publicKeyAsHex, src/* NextIDAction.Delete */.BU.Delete, selectedAccount.identity, selectedAccount.platform);
            if (!result) return;
            const signature = await service/* default.Identity.generateSignResult */.ZP.Identity.generateSignResult(currentPersona.identifier, result.signPayload);
            if (!signature) return;
            await service/* default.Identity.detachProfileWithNextID */.ZP.Identity.detachProfileWithNextID(result.uuid, currentPersona.identifier.publicKeyAsHex, selectedAccount.platform, selectedAccount.identity, result.createdAt, {
                signature: signature.signature.signature
            });
            await service/* default.Identity.detachProfile */.ZP.Identity.detachProfile(selectedAccount.identifier);
            showSnackbar(t('popups_disconnect_success'), {
                variant: 'success'
            });
            navigate(-1);
        } catch  {
            showSnackbar(t('popups_disconnect_failed'), {
                variant: 'error'
            });
        }
    }, [
        selectedAccount,
        currentPersona
    ]);
    const [, onVerify] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!selectedAccount?.identifier || !currentPersona?.identifier) return;
        await service/* default.SocialNetwork.connectSite */.ZP.SocialNetwork.connectSite(currentPersona.identifier, selectedAccount.identifier.network, 'nextID', selectedAccount.identifier);
        window.close();
    }, [
        selectedAccount,
        currentPersona
    ]);
    (0,useTitle/* useTitle */.Z)(t('popups_social_account'));
    (0,react.useEffect)(()=>{
        if (!selectedAccount) navigate(src/* PopupRoutes.Personas */.mZ.Personas, {
            replace: true
        });
    }, [
        selectedAccount
    ]);
    if (!selectedAccount) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountDetailUI, {
                account: selectedAccount,
                personaName: currentPersona?.nickname,
                onVerify: onVerify,
                onDisconnect: onDisconnect,
                disconnectLoading: disconnectState.loading
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DisconnectDialog, {
                unbundledIdentity: selectedAccount.identifier,
                onConfirmDisconnect: onConfirmReleaseBind,
                confirmLoading: confirmState.loading,
                onClose: ()=>setOpen(false)
                ,
                open: open
            })
        ]
    });
});
/* harmony default export */ const Personas_AccountDetail = (AccountDetail);


/***/ }),

/***/ 39968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ AccountAvatar)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/GrayMasks.tsx


const GrayMasks = (0,utils/* createIcon */.I)('GrayMasks', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Z",
            fill: "#F7F9FA"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "3.033",
            y: "10.905",
            width: "1.25",
            height: "6.25",
            rx: ".625",
            transform: "rotate(-30 3.033 10.905)",
            fill: "url(#gray_masks_a)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.362 10.787c-.808.258-1.682.122-2.475-.371a.361.361 0 0 0-.309-.037.371.371 0 0 0-.235.219c-.355.85-.997 1.47-1.804 1.729-1.293.412-2.76-.204-3.66-1.536a4.585 4.585 0 0 1-.57-1.174 5.638 5.638 0 0 1-.156-.62l-.138-.778.645.455a.478.478 0 0 0 .42.07.623.623 0 0 0 .111-.053l.163-.18.01-.02.022-.04a3.537 3.537 0 0 1 4.122-1.4 3.537 3.537 0 0 1 1.807-1.323 3.561 3.561 0 0 1 2.363.076l.04.02c.031.016.07.03.108.043l.01.005a.46.46 0 0 0 .268-.01.467.467 0 0 0 .303-.3l.254-.742.338.714c.098.198.17.396.233.596.135.423.206.858.216 1.287.053 1.602-.794 2.957-2.086 3.37ZM6.385 10.3c-.108.034-.22.053-.336.064-.631.04-1.218-.39-1.488-.626.194-.215.582-.593 1.066-.748a1.56 1.56 0 0 1 .336-.065c.631-.04 1.218.391 1.488.627-.202.217-.59.595-1.066.748ZM9.02 9.05c.283.063.826.144 1.303-.009a1.5 1.5 0 0 0 .31-.141c.53-.33.767-1.025.85-1.374-.282-.062-.825-.143-1.302.01a1.501 1.501 0 0 0-.31.141c-.531.33-.767 1.024-.85 1.373Z",
            fill: "url(#gray_masks_b)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#gray_masks_c)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "m11.691 7.184.136-.226 6.382 2.107-.027.262a7.5 7.5 0 0 1-.362 1.7c-.443 1.328-1.202 2.467-2.133 3.208-.696.552-1.447.841-2.16.841-.281 0-.552-.036-.814-.127-.94-.316-1.637-1.147-1.953-2.35-.307-1.148-.235-2.513.208-3.842.18-.56.425-1.084.723-1.573Zm.814 3.734c.135.063.28.09.443.09.144 0 .307-.027.479-.072.185-.062.333-.139.398-.172l.036-.018.18-.108-.099-.19c-.009-.027-.298-.579-.868-.832-.57-.253-1.175-.09-1.202-.081l-.208.054.045.208c.003.003.008.022.018.053.023.078.068.232.145.4.163.325.38.56.633.668Zm2.811.958a.91.91 0 0 0 .226.027c.217 0 .452-.063.678-.18.235-.118.389-.254.398-.263l.163-.144-.127-.172c-.018-.027-.407-.524-1.012-.66-.561-.125-1.083.098-1.179.139a.356.356 0 0 1-.015.006l-.19.09.082.199c0 .009.081.208.235.416.217.29.47.479.741.542Z",
                fill: "url(#gray_masks_d)",
                fillOpacity: ".3"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "gray_masks_a",
                    x1: "3.033",
                    y1: "17.155",
                    x2: "4.283",
                    y2: "17.155",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#AFC3E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#C3D7F5"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "gray_masks_b",
                    x1: "2.444",
                    y1: "12.774",
                    x2: "13.862",
                    y2: "11.699",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#AFC3E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#C3D7F5"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "gray_masks_d",
                    x1: "10.573",
                    y1: "15.076",
                    x2: "18.209",
                    y2: "15.076",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#B0CFEB"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#C4E1FB"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "gray_masks_c",
                    x: "6.573",
                    y: "2.958",
                    width: "15.636",
                    height: "16.118",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 20 20');

// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/components/AccountAvatar/index.tsx






const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        container: {
            position: 'relative',
            width: 60,
            height: 60
        },
        avatar: {
            width: 60,
            height: 60,
            fontSize: 60,
            borderRadius: 99,
            border: '1px solid #e6e7e8'
        },
        network: {
            height: 24,
            width: 24,
            borderRadius: 99,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            right: -10,
            bottom: 2
        },
        valid: {
            width: 10,
            height: 10,
            borderRadius: 99,
            border: '1px solid #ffffff',
            position: 'absolute',
            top: 3,
            right: -3,
            backgroundColor: '#FFB100'
        }
    })
);
const AccountAvatar = /*#__PURE__*/ (0,react.memo)(({ avatar , network , isValid  })=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                className: classes.avatar,
                src: avatar
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(GrayMasks, {
                className: classes.avatar
            }),
            network ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.network,
                children: src/* SOCIAL_MEDIA_ROUND_ICON_MAPPING */.q_[network]
            }) : null,
            !isValid ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.valid
            }) : null
        ]
    });
});


/***/ })

}]);