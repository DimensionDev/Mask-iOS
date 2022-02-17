"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2738],{

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8539.js
/***/ 57012:
=======
/***/ 57711:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.2738.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ActionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8539.js
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36487);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88808);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8236);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76814);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27768);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88448);



=======
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25933);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65111);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76900);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91377);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46754);



>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.2738.js
const ActionCardIcon = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP)('div')(({ theme  })=>`
    width: 36px;
    height: 36px;

    & > svg {
        width: 100%;
        height: 100%;
    }
`
);
const ActionCardButton = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP)('div')(({ theme  })=>`
    font-size: 14px;

    & > button {
        width: 140px;
        border-radius: ${theme.spacing(2)};
    }
`
);
const ActionCard = ({ icon , title , subtitle , action  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        variant: "outlined",
        sx: {
            padding: (theme)=>theme.spacing(2.5)
            ,
            marginBottom: (theme)=>theme.spacing(2.5)
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
            spacing: 2,
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionCardIcon, {
                    children: icon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    flex: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            variant: "body1",
                            paragraph: true,
                            sx: {
                                marginBottom: 0
                            },
                            children: title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            variant: "body2",
                            paragraph: true,
                            sx: {
                                marginBottom: 0
                            },
                            children: subtitle
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionCardButton, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                        size: "small",
                        variant: "contained",
                        color: action.type,
                        onClick: action.handler,
                        children: action.text
                    })
                })
            ]
        })
    }));
};
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8539.js
=======


/***/ }),

/***/ 31813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ SOCIAL_MEDIA_ICON_MAPPING)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(92131);
;// CONCATENATED MODULE: ../icons/general/FacebookColored.tsx


const FacebookColoredIcon = (0,utils/* createIcon */.I)('FacebookColoredIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z",
            fill: "#4267B2"
        }),
        ","
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/general/TwitterColored.tsx


const TwitterColoredIcon = (0,utils/* createIcon */.I)('TwitterColoredIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M20.661 6.68799C21.5575 6.15208 22.2282 5.30823 22.548 4.31399C21.7057 4.81379 20.7841 5.16587 19.823 5.35499C18.4906 3.94552 16.3795 3.60251 14.6694 4.51764C12.9593 5.43277 12.0735 7.37948 12.507 9.26999C9.05664 9.09676 5.842 7.4669 3.66303 4.78599C2.52587 6.74741 3.10698 9.25477 4.99103 10.516C4.30974 10.4941 3.64356 10.3096 3.04803 9.97799C3.04803 9.99599 3.04803 10.014 3.04803 10.032C3.04843 12.0751 4.4884 13.8351 6.49103 14.24C5.8591 14.4119 5.19624 14.4372 4.55303 14.314C5.11623 16.0613 6.72658 17.2583 8.56203 17.294C7.04186 18.4871 5.16451 19.1342 3.23203 19.131C2.8895 19.1315 2.54724 19.1118 2.20703 19.072C4.16942 20.333 6.4534 21.0023 8.78603 21C12.0313 21.0223 15.1501 19.7429 17.4448 17.448C19.7395 15.1531 21.0186 12.0342 20.996 8.78899C20.996 8.60299 20.9917 8.41799 20.983 8.23399C21.8235 7.62659 22.5488 6.87414 23.125 6.01199C22.342 6.35905 21.5115 6.58691 20.661 6.68799Z",
        fill: "#2CA4EF"
    })
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/general/Minds.tsx


const MindsIcon = (0,utils/* createIcon */.I)('MindsIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            clipPath: "url(#clip0)",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M6.08588 23.9151C5.15758 23.9047 4.23801 23.7344 3.36753 23.4118C2.73187 23.1768 2.15676 22.8027 1.68424 22.3169C1.19712 21.8454 0.822514 21.2701 0.588235 20.6339C0.265824 19.7634 0.0958076 18.8439 0.0856471 17.9158C0.0143529 16.3727 0 15.9099 0 12C0 8.09012 0.0157647 7.62894 0.0849412 6.08471C0.0963347 5.15689 0.26656 4.23788 0.588235 3.36753C0.823654 2.73176 1.19773 2.15642 1.68329 1.68329C2.15523 1.19662 2.73061 0.822358 3.36682 0.588235C4.2373 0.265557 5.15687 0.0953008 6.08518 0.0849412C7.62871 0.0143529 8.09224 0 12 0C15.9078 0 16.3711 0.0157647 17.9153 0.0849412C18.8433 0.0962542 19.7626 0.266481 20.6332 0.588235C21.2691 0.822667 21.8443 1.1968 22.3165 1.68306C22.8029 2.15535 23.1772 2.73073 23.4118 3.36682C23.7345 4.23729 23.9049 5.15686 23.9153 6.08518C23.9859 7.62941 24.0002 8.09176 24.0002 12.0005C24.0002 15.9092 23.9859 16.3715 23.9153 17.9158C23.9041 18.8439 23.7338 19.7633 23.4118 20.6339C23.1682 21.2652 22.7951 21.8386 22.3166 22.317C21.838 22.7954 21.2646 23.1683 20.6332 23.4118C19.7627 23.7345 18.8431 23.9049 17.9148 23.9153C16.372 23.9859 15.9082 24.0002 11.9995 24.0002C8.09082 24.0002 7.62847 23.9866 6.08565 23.9153",
                    fill: "#21252A"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M10.791 18.7554L10.6973 20.0932L10.791 18.7554Z",
                    fill: "#656565"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.64062 19.6319L10.8008 18.6631L11.9611 20.5546L9.64062 19.6319Z",
                    fill: "#656565"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.64062 16.772V19.6323L10.8008 18.6634L9.64062 16.772Z",
                    fill: "#787778"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M13.1212 18.6631L11.9609 20.5546L14.2814 19.6319L13.1212 18.6631Z",
                    fill: "#5C5C5C"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M14.2813 19.632L13.1211 18.6632L14.2813 16.7717V19.632Z",
                    fill: "#787778"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.64062 16.772H14.2815L11.9611 20.5549L9.64062 16.772Z",
                    fill: "#4A4A4A"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M10.1035 8.05249L15.0228 10.0824L11.4958 12.8965L10.1035 8.05249Z",
                    fill: "#FED12F"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M13.8164 4.63843L16.6009 7.49871L15.023 10.0822L13.8164 4.63843Z",
                    fill: "#FED12F"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.64062 16.7717L14.7456 15.2954L14.2815 16.7717H9.64062Z",
                    fill: "#FED12F"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.17578 15.2954L11.4962 12.8965L9.63987 16.7717L9.17578 15.2954Z",
                    fill: "#FED12F"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M7.32031 7.49871L10.1048 4.63843V8.05231L7.32031 7.49871Z",
                    fill: "#FED12F"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M11.498 12.8964L14.7467 15.2954L15.0251 10.0823L11.498 12.8964Z",
                    fill: "#FFF3CB"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M11.4962 12.8965L7.04102 12.1122L9.17581 15.2954L11.4962 12.8965Z",
                    fill: "#FFF3CB"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M10.1035 8.05249L13.8162 4.63861L15.0228 10.0824L10.1035 8.05249Z",
                    fill: "#FFDD63"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M7.04102 12.1121L10.104 8.05231L11.4962 12.8963L7.04102 12.1121Z",
                    fill: "#FFEDAC"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.63948 16.7718L11.4958 12.8966L14.7444 15.2955L9.63948 16.7718Z",
                    fill: "#FFDD63"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M14.744 15.2953L15.0224 10.0822L16.8788 12.1121L14.744 15.2953Z",
                    fill: "#FFDD63"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M7.04167 12.1122L7.32012 7.49888L10.1046 8.05248L7.04167 12.1122Z",
                    fill: "#FFDD63"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M15.0249 10.0824L16.6028 7.49897L16.8813 12.1123L15.0249 10.0824Z",
                    fill: "#FEE382"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M13.8176 4.63866L10.1049 8.05255L10.1049 4.63866L13.8176 4.63866Z",
                    fill: "#FEF1C0"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: "clip0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                    width: "24",
                    height: "24",
                    fill: "white"
                })
            })
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../dashboard/src/constants.tsx


const SOCIAL_MEDIA_ICON_MAPPING = {
    'facebook.com': /*#__PURE__*/ (0,jsx_runtime.jsx)(FacebookColoredIcon, {
    }),
    'twitter.com': /*#__PURE__*/ (0,jsx_runtime.jsx)(TwitterColoredIcon, {
    }),
    'minds.com': /*#__PURE__*/ (0,jsx_runtime.jsx)(MindsIcon, {
    })
};
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.2738.js


/***/ }),

/***/ 22738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignUp)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/RowLayout.tsx
var RowLayout = __webpack_require__(30248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.2_2dbba68b7ac16965ba4a12f4e1c41a15/node_modules/react-router/index.js
var react_router = __webpack_require__(18875);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentLayout.tsx + 1 modules
var ColumnContentLayout = __webpack_require__(66549);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ../dashboard/src/type.ts
var type = __webpack_require__(51987);
// EXTERNAL MODULE: ../dashboard/src/components/MaskAlert/index.tsx + 1 modules
var MaskAlert = __webpack_require__(99304);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentHeader.tsx
var ColumnContentHeader = __webpack_require__(74331);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Stack/Stack.js
var Stack = __webpack_require__(65111);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(76591);
// EXTERNAL MODULE: ../dashboard/src/components/Mnemonic/index.tsx + 2 modules
var Mnemonic = __webpack_require__(64110);
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/routePath.ts
var SignUpRoutePath;
(function(SignUpRoutePath1) {
    SignUpRoutePath1["MnemonicReveal"] = 'mnemonic-reveal';
    SignUpRoutePath1["PersonaCreate"] = 'persona-create';
    SignUpRoutePath1["ConnectSocialMedia"] = 'connect-social-media';
})(SignUpRoutePath || (SignUpRoutePath = {
}));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Refresh.js
var Refresh = __webpack_require__(74881);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/some.js + 1 modules
var some = __webpack_require__(14626);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ButtonContainer.tsx
var ButtonContainer = __webpack_require__(20317);
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/MnemonicRevealForm.tsx
















var CreateWalletStep;
(function(CreateWalletStep1) {
    CreateWalletStep1[CreateWalletStep1["NameAndWords"] = 0] = "NameAndWords";
    CreateWalletStep1[CreateWalletStep1["Verify"] = 1] = "Verify";
})(CreateWalletStep || (CreateWalletStep = {
}));
const MnemonicRevealForm = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { enqueueSnackbar  } = (0,theme_src/* useSnackbar */.Ds)();
    const [words, puzzleWords, indexes, answerCallback, resetCallback, refreshCallback] = (0,src/* useMnemonicWordsPuzzle */.hx3)();
    const [step, setStep] = (0,react.useState)(CreateWalletStep.NameAndWords);
    const onSubmit = async ()=>{
        if (words.join(' ') !== puzzleWords.join(' ')) {
            enqueueSnackbar(t.create_account_mnemonic_confirm_failed(), {
                variant: 'error'
            });
        } else {
            navigate(`${SignUpRoutePath.PersonaCreate}`, {
                replace: true,
                state: {
                    mnemonic: words
                }
            });
        }
    };
    const onBack = ()=>{
        setStep(CreateWalletStep.NameAndWords);
        resetCallback();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                title: t.create_account_identity_title(),
                action: {
                    name: t.create_account_sign_in_button(),
                    callback: ()=>navigate(type/* RoutePaths.SignIn */.s2.SignIn)
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* Body */.uT, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {
                    }),
                    step === CreateWalletStep.NameAndWords && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                direction: "row",
                                justifyContent: "flex-end",
                                sx: {
                                    marginBottom: (theme)=>theme.spacing(2)
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "text",
                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.Z, {
                                    }),
                                    onClick: refreshCallback,
                                    children: t.refresh()
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Mnemonic/* MnemonicReveal */.i, {
                                words: words
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "rounded",
                                    color: "primary",
                                    onClick: ()=>setStep(CreateWalletStep.Verify)
                                    ,
                                    children: t.verify()
                                })
                            })
                        ]
                    }),
                    step === CreateWalletStep.Verify && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Mnemonic/* DesktopMnemonicConfirm */.q, {
                                indexes: indexes,
                                puzzleWords: puzzleWords,
                                onChange: answerCallback
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonContainer/* ButtonContainer */.q, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        variant: "rounded",
                                        color: "secondary",
                                        onClick: onBack,
                                        children: t.back()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        sx: {
                                            width: '224px'
                                        },
                                        variant: "rounded",
                                        color: "primary",
                                        disabled: (0,some/* default */.Z)(puzzleWords, (word)=>!word
                                        ),
                                        onClick: onSubmit,
                                        children: t.confirm()
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                        description: t.create_account_identity_warning(),
                        type: "error"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Footer */.$_, {
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(11922);
;// CONCATENATED MODULE: ../dashboard/src/hooks/useCreatePersonaV2.ts



function useCreatePersonaV2() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    return async (mnemonicWord, nickName)=>{
        try {
            const identifier = await API/* Services.Identity.createPersonaByMnemonicV2 */.K9.Identity.createPersonaByMnemonicV2(mnemonicWord, nickName, '');
            await (0,shared_src.delay)(300);
            API/* Messages.events.personaChanged.sendToAll */.Vm.events.personaChanged.sendToAll([
                {
                    of: identifier,
                    owned: true,
                    reason: 'new'
                }
            ]);
        } catch  {
            throw new Error(t.create_account_failed());
        }
    };
}

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/PersonaCreate.tsx














const Label = ({ value  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        variant: "body2",
        sx: {
            marginBottom: '8px',
            fontWeight: 'bolder',
            color: (theme)=>theme.palette.primary.main
        },
        children: value
    })
;
const PersonaCreate = ()=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const createPersona = useCreatePersonaV2();
    const { state: { mnemonic  } ,  } = (0,react_router/* useLocation */.TH)();
    const [personaName, setPersonaName] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        if (!mnemonic || !API/* Services.Identity.validateMnemonic */.K9.Identity.validateMnemonic(mnemonic.join(' '))) {
            navigate(type/* RoutePaths.SignUp */.s2.SignUp, {
                replace: true
            });
        }
    }, [
        mnemonic
    ]);
    const handleCreatePersona = (0,shared_src.useSnackbarCallback)({
        executor: ()=>createPersona(mnemonic.join(' '), personaName)
        ,
        onSuccess: ()=>navigate(`${type/* RoutePaths.SignUp */.s2.SignUp}/${SignUpRoutePath.ConnectSocialMedia}`)
        ,
        onError: ()=>navigate(`${type/* RoutePaths.SignUp */.s2.SignUp}`)
        ,
        successText: t.create_account_persona_successfully(),
        deps: []
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                title: t.create_account_persona_title(),
                subtitle: t.create_account_persona_subtitle(),
                action: {
                    name: t.create_account_sign_in_button(),
                    callback: ()=>navigate(type/* RoutePaths.SignIn */.s2.SignIn)
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* Body */.uT, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* MaskTextField */.FU, {
                                required: true,
                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                                    value: t.persona()
                                }),
                                InputProps: {
                                    disableUnderline: true
                                },
                                onChange: (e)=>setPersonaName(e.currentTarget.value)
                                ,
                                inputProps: {
                                    maxLength: 24
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "rounded",
                                    color: "primary",
                                    onClick: handleCreatePersona,
                                    disabled: !personaName,
                                    children: t.next()
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Footer */.$_, {
            })
        ]
    }));
};

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(87049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/upperFirst.js + 7 modules
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8539.js
var upperFirst = __webpack_require__(83506);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(12162);
;// CONCATENATED MODULE: ../icons/general/FacebookColored.tsx


const FacebookColoredIcon = (0,utils/* createIcon */.I)('FacebookColoredIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z",
            fill: "#4267B2"
        }),
        ","
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/general/TwitterColored.tsx


const TwitterColoredIcon = (0,utils/* createIcon */.I)('TwitterColoredIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M20.661 6.68799C21.5575 6.15208 22.2282 5.30823 22.548 4.31399C21.7057 4.81379 20.7841 5.16587 19.823 5.35499C18.4906 3.94552 16.3795 3.60251 14.6694 4.51764C12.9593 5.43277 12.0735 7.37948 12.507 9.26999C9.05664 9.09676 5.842 7.4669 3.66303 4.78599C2.52587 6.74741 3.10698 9.25477 4.99103 10.516C4.30974 10.4941 3.64356 10.3096 3.04803 9.97799C3.04803 9.99599 3.04803 10.014 3.04803 10.032C3.04843 12.0751 4.4884 13.8351 6.49103 14.24C5.8591 14.4119 5.19624 14.4372 4.55303 14.314C5.11623 16.0613 6.72658 17.2583 8.56203 17.294C7.04186 18.4871 5.16451 19.1342 3.23203 19.131C2.8895 19.1315 2.54724 19.1118 2.20703 19.072C4.16942 20.333 6.4534 21.0023 8.78603 21C12.0313 21.0223 15.1501 19.7429 17.4448 17.448C19.7395 15.1531 21.0186 12.0342 20.996 8.78899C20.996 8.60299 20.9917 8.41799 20.983 8.23399C21.8235 7.62659 22.5488 6.87414 23.125 6.01199C22.342 6.35905 21.5115 6.58691 20.661 6.68799Z",
        fill: "#2CA4EF"
    })
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/general/Minds.tsx


const MindsIcon = (0,utils/* createIcon */.I)('MindsIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            clipPath: "url(#clip0)",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M6.08588 23.9151C5.15758 23.9047 4.23801 23.7344 3.36753 23.4118C2.73187 23.1768 2.15676 22.8027 1.68424 22.3169C1.19712 21.8454 0.822514 21.2701 0.588235 20.6339C0.265824 19.7634 0.0958076 18.8439 0.0856471 17.9158C0.0143529 16.3727 0 15.9099 0 12C0 8.09012 0.0157647 7.62894 0.0849412 6.08471C0.0963347 5.15689 0.26656 4.23788 0.588235 3.36753C0.823654 2.73176 1.19773 2.15642 1.68329 1.68329C2.15523 1.19662 2.73061 0.822358 3.36682 0.588235C4.2373 0.265557 5.15687 0.0953008 6.08518 0.0849412C7.62871 0.0143529 8.09224 0 12 0C15.9078 0 16.3711 0.0157647 17.9153 0.0849412C18.8433 0.0962542 19.7626 0.266481 20.6332 0.588235C21.2691 0.822667 21.8443 1.1968 22.3165 1.68306C22.8029 2.15535 23.1772 2.73073 23.4118 3.36682C23.7345 4.23729 23.9049 5.15686 23.9153 6.08518C23.9859 7.62941 24.0002 8.09176 24.0002 12.0005C24.0002 15.9092 23.9859 16.3715 23.9153 17.9158C23.9041 18.8439 23.7338 19.7633 23.4118 20.6339C23.1682 21.2652 22.7951 21.8386 22.3166 22.317C21.838 22.7954 21.2646 23.1683 20.6332 23.4118C19.7627 23.7345 18.8431 23.9049 17.9148 23.9153C16.372 23.9859 15.9082 24.0002 11.9995 24.0002C8.09082 24.0002 7.62847 23.9866 6.08565 23.9153",
                    fill: "#21252A"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M10.791 18.7554L10.6973 20.0932L10.791 18.7554Z",
                    fill: "#656565"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.64062 19.6319L10.8008 18.6631L11.9611 20.5546L9.64062 19.6319Z",
                    fill: "#656565"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.64062 16.772V19.6323L10.8008 18.6634L9.64062 16.772Z",
                    fill: "#787778"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M13.1212 18.6631L11.9609 20.5546L14.2814 19.6319L13.1212 18.6631Z",
                    fill: "#5C5C5C"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M14.2813 19.632L13.1211 18.6632L14.2813 16.7717V19.632Z",
                    fill: "#787778"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.64062 16.772H14.2815L11.9611 20.5549L9.64062 16.772Z",
                    fill: "#4A4A4A"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M10.1035 8.05249L15.0228 10.0824L11.4958 12.8965L10.1035 8.05249Z",
                    fill: "#FED12F"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M13.8164 4.63843L16.6009 7.49871L15.023 10.0822L13.8164 4.63843Z",
                    fill: "#FED12F"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.64062 16.7717L14.7456 15.2954L14.2815 16.7717H9.64062Z",
                    fill: "#FED12F"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.17578 15.2954L11.4962 12.8965L9.63987 16.7717L9.17578 15.2954Z",
                    fill: "#FED12F"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M7.32031 7.49871L10.1048 4.63843V8.05231L7.32031 7.49871Z",
                    fill: "#FED12F"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M11.498 12.8964L14.7467 15.2954L15.0251 10.0823L11.498 12.8964Z",
                    fill: "#FFF3CB"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M11.4962 12.8965L7.04102 12.1122L9.17581 15.2954L11.4962 12.8965Z",
                    fill: "#FFF3CB"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M10.1035 8.05249L13.8162 4.63861L15.0228 10.0824L10.1035 8.05249Z",
                    fill: "#FFDD63"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M7.04102 12.1121L10.104 8.05231L11.4962 12.8963L7.04102 12.1121Z",
                    fill: "#FFEDAC"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.63948 16.7718L11.4958 12.8966L14.7444 15.2955L9.63948 16.7718Z",
                    fill: "#FFDD63"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M14.744 15.2953L15.0224 10.0822L16.8788 12.1121L14.744 15.2953Z",
                    fill: "#FFDD63"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M7.04167 12.1122L7.32012 7.49888L10.1046 8.05248L7.04167 12.1122Z",
                    fill: "#FFDD63"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M15.0249 10.0824L16.6028 7.49897L16.8813 12.1123L15.0249 10.0824Z",
                    fill: "#FEE382"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M13.8176 4.63866L10.1049 8.05255L10.1049 4.63866L13.8176 4.63866Z",
                    fill: "#FEF1C0"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: "clip0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                    width: "24",
                    height: "24",
                    fill: "white"
                })
            })
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../dashboard/src/components/ActionCard/index.tsx
var ActionCard = __webpack_require__(57012);
=======
var upperFirst = __webpack_require__(53816);
// EXTERNAL MODULE: ../dashboard/src/constants.tsx + 3 modules
var constants = __webpack_require__(31813);
// EXTERNAL MODULE: ../dashboard/src/components/ActionCard/index.tsx
var ActionCard = __webpack_require__(57711);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.2738.js
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/ConnectSocialMedia.tsx












const ICON_MAPPING = Object.entries(constants/* SOCIAL_MEDIA_ICON_MAPPING */.I).map(([type, icon])=>({
        type,
        icon
    })
);
const ConnectSocialMedia = ()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { currentPersona , connectPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    (0,react.useEffect)(()=>{
        if (currentPersona && (currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.linkedProfiles.length) > 0) {
            navigate(type/* RoutePaths.Personas */.s2.Personas, {
                replace: true
            });
        }
    }, [
        currentPersona
    ]);
    const handleConnect = (networkIdentifier)=>{
        if (currentPersona) {
            connectPersona(currentPersona.identifier, networkIdentifier);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                title: t.create_account_connect_social_media_title(),
                subtitle: t.create_account_persona_subtitle(),
                action: {
                    name: t.create_account_sign_in_button(),
                    callback: ()=>navigate(type/* RoutePaths.SignIn */.s2.SignIn)
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* Body */.uT, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                direction: "row",
                                justifyContent: "flex-end",
                                sx: {
                                    marginBottom: (theme)=>theme.spacing(4)
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "text",
                                    onClick: ()=>navigate(type/* RoutePaths.Setup */.s2.Setup)
                                    ,
                                    children: t.go_back()
                                })
                            }),
                            ICON_MAPPING.map((d)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                                    title: t.create_account_connect_social_media({
                                        type: (0,upperFirst/* default */.Z)(d.type)
                                    }),
                                    icon: d.icon,
                                    action: {
                                        type: 'primary',
                                        text: t.connect(),
                                        handler: ()=>handleConnect(d.type)
                                    }
                                }, d.type)
                            )
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Footer */.$_, {
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/index.ts




;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/routes.tsx




const Actions = ()=>{
    const { action  } = (0,react_router/* useParams */.UO)();
    switch(action){
        case SignUpRoutePath.MnemonicReveal:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicRevealForm, {
            }));
        case SignUpRoutePath.PersonaCreate:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCreate, {
            }));
        case SignUpRoutePath.ConnectSocialMedia:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectSocialMedia, {
            }));
        default:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicRevealForm, {
            }));
    }
};
const SignUpRoutes = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                path: ":action",
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Actions, {
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                path: "*",
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicRevealForm, {
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/index.tsx



function SignUp() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RowLayout/* RowLayout */.V, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUpRoutes, {
        })
    }));
};


/***/ })

}]);