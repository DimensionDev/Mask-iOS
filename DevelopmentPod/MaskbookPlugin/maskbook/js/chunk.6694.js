"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6694],{

/***/ 51475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ActionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13152);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18287);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12463);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68435);



const ActionCardIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    width: 36px;
    height: 36px;

    & > svg {
        width: 100%;
        height: 100%;
    }
`
);
const ActionCardButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    font-size: 14px;

    & > button {
        width: 164px;
        border-radius: ${theme.spacing(3)};
    }
`
);
const ActionCard = ({ icon , title , subtitle , action  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        variant: "outlined",
        sx: {
            padding: (theme)=>theme.spacing(2.5)
            ,
            marginBottom: (theme)=>theme.spacing(2.5)
            ,
            boxShadow: 'none'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            spacing: 2,
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionCardIcon, {
                    children: icon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    flex: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            variant: "body1",
                            paragraph: true,
                            sx: {
                                marginBottom: 0
                            },
                            children: title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        size: "medium",
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


/***/ }),

/***/ 81072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ButtonContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68435);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13152);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58465);



const ButtonContainerUI = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(({ theme  })=>({
        margin: `${theme.spacing(3.75)} auto`,
        width: '75%',
        [`& > .${_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"].root */ .Z.root}`]: {
            width: '100%',
            fontSize: 16
        },
        [theme.breakpoints.down('md')]: {
            margin: `${theme.spacing(4)} auto`
        }
    })
);
const ButtonContainer = ({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonContainerUI, {
        my: 7,
        direction: "row",
        spacing: 2,
        justifyContent: "center",
        alignItems: "center",
        children: children
    }));
};


/***/ }),

/***/ 84542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68435);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12463);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43021);





const HeaderContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('header')(({ theme  })=>({
        width: '78%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexBasis: '240px',
        [theme.breakpoints.down('lg')]: {
            flexBasis: '350px'
        },
        [theme.breakpoints.down('md')]: {
            width: '95%',
            flexBasis: '180px'
        }
    })
);
const TitleContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
);
const Subtitle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(({ theme  })=>`
    padding-top: 30px;
    color: ${theme.palette.mode === 'dark' ? _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.textSecondary.alpha */ .ZN.textSecondary.alpha(0.8) : _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.textPrimary */ .ZN.textPrimary}
`
);
const Action = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(({ theme  })=>({
        display: 'inline-block',
        color: theme.palette.mode === 'dark' ? _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.textPrimary */ .ZN.textPrimary : _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primary */ .ZN.primary,
        fontWeight: 'bold',
        textAlign: 'right',
        '&:hover': {
            background: 'transparent'
        }
    })
);
const Header = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ title , subtitle , action  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderContainer, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TitleContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        variant: "h3",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Action, {
                        variant: "text",
                        onClick: ()=>action.callback()
                        ,
                        children: action.name
                    })
                ]
            }),
            subtitle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Subtitle, {
                variant: "h5",
                children: subtitle
            })
        ]
    }));
});


/***/ }),

/***/ 47229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uT": () => (/* binding */ Body),
  "pz": () => (/* binding */ ColumnContentLayout),
  "$_": () => (/* binding */ Footer),
  "xK": () => (/* binding */ PersonaLogoBox),
  "ud": () => (/* binding */ RestoreBlueLogo),
  "g2": () => (/* binding */ SignUpAccountLogo)
});

// UNUSED EXPORTS: LogoBoxStyled

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(46098);
;// CONCATENATED MODULE: ../icons/general/RestoreBlue.tsx


const RestoreBlueIcon = (0,utils/* createIcon */.I)('RestoreBlue', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M4 11.0952C4 9.93807 4.98806 9 6.2069 9H17.7931C19.0119 9 20 9.93807 20 11.0952V17.9048C20 19.0619 19.0119 20 17.7931 20H6.2069C4.98806 20 4 19.0619 4 17.9048V11.0952Z",
                fill: "#1C68F3",
                fillOpacity: "0.1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.58743 4.19336C6.78674 4.19336 6.94831 4.35493 6.94831 4.55423V7.08034H9.47441C9.67372 7.08034 9.83528 7.24191 9.83528 7.44121C9.83528 7.64051 9.67372 7.80208 9.47441 7.80208H6.58743C6.38813 7.80208 6.22656 7.64051 6.22656 7.44121V4.55423C6.22656 4.35493 6.38813 4.19336 6.58743 4.19336Z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: "0.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.166 9.45706C14.166 9.25776 14.3276 9.09619 14.5269 9.09619H17.4139C17.6132 9.09619 17.7747 9.25776 17.7747 9.45706V12.344C17.7747 12.5433 17.6132 12.7049 17.4139 12.7049C17.2146 12.7049 17.053 12.5433 17.053 12.344V9.81794H14.5269C14.3276 9.81794 14.166 9.65637 14.166 9.45706Z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: "0.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.672 3.59451C11.4494 3.35731 12.2712 3.33171 13.0606 3.5201C13.85 3.70848 14.5812 4.10471 15.1862 4.67181C15.7911 5.23891 16.25 5.9584 16.5199 6.76314C16.5878 6.96553 16.4873 7.18765 16.2955 7.25927C16.1036 7.33089 15.893 7.22488 15.8251 7.02249C15.5966 6.34156 15.2083 5.73276 14.6965 5.25291C14.1846 4.77306 13.5659 4.43779 12.8979 4.27838C12.23 4.11898 11.5346 4.14064 10.8768 4.34134C10.2189 4.54204 9.62 4.91525 9.13588 5.42612C9.13316 5.429 9.13039 5.43183 9.12759 5.43461L6.84749 7.6944C6.69915 7.84141 6.46591 7.83376 6.32653 7.67731C6.18715 7.52085 6.19441 7.27484 6.34274 7.12783L8.61871 4.87213C9.19012 4.27061 9.8964 3.83112 10.672 3.59451ZM17.6745 9.21813C17.8139 9.37458 17.8066 9.62059 17.6583 9.76761L15.3823 12.0233C14.8109 12.6248 14.1046 13.0643 13.3291 13.3009C12.5516 13.5381 11.7298 13.5637 10.9405 13.3753C10.1511 13.187 9.4198 12.7907 8.81488 12.2236C8.20995 11.6565 7.75108 10.937 7.48109 10.1323C7.41319 9.92991 7.5137 9.70778 7.70558 9.63616C7.89747 9.56455 8.10807 9.67056 8.17597 9.87294C8.40442 10.5539 8.79269 11.1627 9.30456 11.6425C9.81642 12.1224 10.4352 12.4577 11.1031 12.6171C11.7711 12.7765 12.4664 12.7548 13.1243 12.5541C13.7821 12.3534 14.381 11.9802 14.8652 11.4693C14.8679 11.4664 14.8706 11.4636 14.8735 11.4608L17.1535 9.20104C17.3019 9.05402 17.5351 9.06168 17.6745 9.21813Z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: "0.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M4 12.8947C4 11.8483 4.98806 11 6.2069 11H17.7931C19.0119 11 20 11.8483 20 12.8947V18.1053C20 19.1517 19.0119 20 17.7931 20H6.2069C4.98806 20 4 19.1517 4 18.1053V12.8947Z",
                fill: "#1C68F3",
                fillOpacity: "0.05"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter0_b",
                    x: "0",
                    y: "5",
                    width: "24",
                    height: "19",
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
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter1_b",
                    x: "1",
                    y: "8",
                    width: "22",
                    height: "15",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "1.5"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../icons/general/SignUpAccount.tsx
var SignUpAccount = __webpack_require__(35385);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(68435);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(21692);
;// CONCATENATED MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentLayout.tsx






const ColumnContentLayout = (0,styled/* default */.ZP)('div')`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;
const Body = (0,styled/* default */.ZP)('main')(({ theme  })=>({
        flex: '1 5',
        width: '78%',
        [theme.breakpoints.down('md')]: {
            width: '95%'
        }
    })
);
const Footer = (0,styled/* default */.ZP)('footer')(({ theme  })=>({
        flex: 1,
        width: '78%',
        [theme.breakpoints.down('md')]: {
            width: '95%'
        }
    })
);
const LogoBoxStyled = (0,styled/* default */.ZP)(Box/* default */.Z)(({ theme  })=>({
        marginBottom: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(2)
        }
    })
);
const SignUpAccountLogo = (0,styled/* default */.ZP)(SignUpAccount/* SignUpAccountIcon */.B)(({ theme  })=>({
        width: '100%',
        height: '96px'
    })
);
const RestoreBlueLogo = (0,styled/* default */.ZP)(RestoreBlueIcon)(({ theme  })=>({
        width: '100%',
        height: '96px'
    })
);
const PersonaLogoBox = /*#__PURE__*/ (0,react.memo)(({ children  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(LogoBoxStyled, {
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "h3",
                textAlign: "center",
                children: t.persona()
            })
        ]
    }));
});


/***/ }),

/***/ 9764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ RowLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39556);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68435);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93665);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43021);






const LayoutContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primaryBackground */ .ZN.primaryBackground}
`
);
const LeftSide = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('div')(({ theme  })=>({
        padding: theme.spacing(5),
        width: '30%',
        maxWidth: '400px',
        background: theme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
            width: '25%',
            padding: theme.spacing(3)
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    })
);
const RightContent = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    flex: 1;
    display: flex;
    justify-content: center;
    max-height: 100%;
    overflow: auto;
    background: transparent;
`
);
const RowLayout = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LayoutContainer, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LeftSide, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .MaskBannerIcon */ .i, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RightContent, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    maxWidth: "md",
                    children: children
                })
            })
        ]
    }));
});


/***/ }),

/***/ 1253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useMnemonicWordsPuzzle)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65535);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28577);
/* harmony import */ var _mask_src_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63081);
/**
 * TODO: use @packages/plugin-wallet instead
 */ 



// How many fields should be filled by the user?
const PUZZLE_SIZE = 5;
// The total count of mnemonic words.
const TOTAL_SIZE = 12;
function useMnemonicWordsPuzzle() {
    const [answerWords, setAnswerWords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { value: words = [] , loading: wordsLoading , retry: wordsRetry ,  } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>_mask_src_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.createMnemonicWords */ .V.createMnemonicWords()
    , []);
    // #region generate some mask indexes randomly which should be filled by the user
    const [seed, setSeed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const indexes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,lodash_unified__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(Array.from({
            length: TOTAL_SIZE
        }).fill(seed).map((_, i)=>i
        )).slice(0, PUZZLE_SIZE)
    , [
        seed,
        words
    ]);
    // #endregion
    // #region a serial of words and the user gonna complete those empty ones
    const puzzleWords = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const words_ = words.slice(0);
        var _i;
        for(let i = 0; i < indexes.length; i += 1)words_[indexes[i]] = (_i = answerWords[i]) !== null && _i !== void 0 ? _i : '';
        return words_;
    }, [
        answerWords,
        indexes,
        words
    ]);
    // #endregion
    const answerCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((word, index)=>{
        setAnswerWords((x)=>{
            const words_ = x.slice(0);
            words_[index] = word;
            return words_;
        });
    }, [
        answerWords
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setAnswerWords([]);
        setSeed((x)=>(x + 1) % 3
        );
    }, []);
    const refreshCallback = wordsRetry;
    return {
        words,
        puzzleWords,
        indexes,
        answerCallback,
        resetCallback,
        refreshCallback
    };
}


/***/ }),

/***/ 36694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignUp)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/RowLayout.tsx
var RowLayout = __webpack_require__(9764);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.2.2_react@18.0.0-rc.2/node_modules/react-router/index.js
var react_router = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(13152);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(91755);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(34433);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(87409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Refresh.js
var Refresh = __webpack_require__(67472);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentHeader.tsx
var ColumnContentHeader = __webpack_require__(84542);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentLayout.tsx + 1 modules
var ColumnContentLayout = __webpack_require__(47229);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(21692);
// EXTERNAL MODULE: ../dashboard/src/components/Mnemonic/index.tsx + 2 modules
var Mnemonic = __webpack_require__(39900);
// EXTERNAL MODULE: ../dashboard/src/pages/SignUp/routePath.ts
var routePath = __webpack_require__(37808);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ButtonContainer.tsx
var ButtonContainer = __webpack_require__(81072);
// EXTERNAL MODULE: ../dashboard/src/hooks/useMnemonicWordsPuzzle.ts
var useMnemonicWordsPuzzle = __webpack_require__(1253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(85971);
;// CONCATENATED MODULE: ../dashboard/src/hooks/useCreatePersonaV2.ts


function useCreatePersonaV2() {
    return async (mnemonicWord, nickName)=>{
        const identifier = await API/* Services.Identity.createPersonaByMnemonicV2 */.K9.Identity.createPersonaByMnemonicV2(mnemonicWord, nickName, '');
        await (0,esm/* delay */.gw)(300);
        API/* Messages.events.ownPersonaChanged.sendToAll */.Vm.events.ownPersonaChanged.sendToAll(undefined);
        return identifier;
    };
}
function useCreatePersonaByPrivateKey() {
    return async (privateKey, nickName)=>{
        const identifier = await API/* Services.Identity.createPersonaByPrivateKey */.K9.Identity.createPersonaByPrivateKey(privateKey, nickName);
        await (0,esm/* delay */.gw)(300);
        API/* Messages.events.ownPersonaChanged.sendToAll */.Vm.events.ownPersonaChanged.sendToAll(undefined);
        return identifier;
    };
}

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(2138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Print.js
var Print = __webpack_require__(84104);
// EXTERNAL MODULE: ../dashboard/src/pages/SignUp/steps/PreviewDialog.tsx
var PreviewDialog = __webpack_require__(33541);
// EXTERNAL MODULE: ../icons/general/Download.tsx
var Download = __webpack_require__(1894);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/MnemonicRevealForm.tsx





















const MnemonicRevealForm = /*#__PURE__*/ (0,react.memo)(()=>{
    const createPersona = useCreatePersonaV2();
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { state  } = (0,react_router/* useLocation */.TH)();
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const { words , refreshCallback  } = (0,useMnemonicWordsPuzzle/* useMnemonicWordsPuzzle */.h)();
    const [preview, setPreview] = (0,react.useState)({
        open: false,
        type: 'print'
    });
    const [id, setId] = (0,react.useState)(null);
    const [privateKey1, setPrivateKey] = (0,react.useState)('');
    const [checked, setChecked] = (0,react.useState)(false);
    const create = async ()=>{
        try {
            const identifier = await createPersona(words.join(' '), state.personaName);
            setId(identifier);
            const privateKey = await API/* Services.Identity.exportPersonaPrivateKey */.K9.Identity.exportPersonaPrivateKey(identifier);
            setPrivateKey(privateKey);
            await changeCurrentPersona(identifier);
        } catch (error) {
            showSnackbar(error.message, {
                variant: 'error'
            });
        }
    };
    const onConfirm = async ()=>{
        if (!id) {
            await create();
        }
        navigate(`${shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.ConnectSocialMedia */.X.ConnectSocialMedia}`);
    };
    const onPreview = async (type)=>{
        if (!id) {
            await create();
        }
        setPreview({
            open: true,
            type
        });
    };
    (0,react.useEffect)(()=>{
        // handle refresh words
        if (!id) return;
        setId(null);
        API/* Services.Identity.deletePersona */.K9.Identity.deletePersona(id, 'delete even with private');
    }, [
        words
    ]);
    (0,useAsync/* default */.Z)(async ()=>{
        // handle refresh page after create
        const personas = await API/* Services.Identity.queryMyPersonas */.K9.Identity.queryMyPersonas();
        const persona = personas.find((p)=>p.nickname === state.personaName
        );
        if (!persona) return;
        API/* Services.Identity.deletePersona */.K9.Identity.deletePersona(persona.identifier, 'delete even with private');
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                        title: t.create_account_identity_title(),
                        action: {
                            name: t.create_account_sign_in_button(),
                            callback: ()=>navigate(shared_base_src/* DashboardRoutes.SignIn */.vq.SignIn)
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* Body */.uT, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* PersonaLogoBox */.xK, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                        direction: "row",
                                        justifyContent: "flex-end",
                                        sx: {
                                            marginBottom: (theme)=>theme.spacing(2)
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            variant: "text",
                                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.Z, {}),
                                            onClick: refreshCallback,
                                            children: t.refresh()
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Mnemonic/* MnemonicReveal */.i, {
                                        words: words
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                            checked: checked,
                                            onChange: (e)=>setChecked(e.target.checked)
                                        }),
                                        label: t.create_account_mnemonic_download_or_print(),
                                        sx: {
                                            marginTop: '8px',
                                            color: src/* MaskColorVar.textSecondary */.ZN.textSecondary
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonContainer/* ButtonContainer */.q, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                size: "large",
                                                variant: "rounded",
                                                color: "primary",
                                                onClick: onConfirm,
                                                disabled: !checked,
                                                children: t.next()
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                                onClick: ()=>onPreview('print')
                                                ,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Print/* default */.Z, {
                                                    style: {
                                                        stroke: src/* MaskColorVar.textLink */.ZN.textLink,
                                                        fill: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                                onClick: ()=>onPreview('download')
                                                ,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Download/* DownloadIcon */._, {
                                                    color: "primary",
                                                    style: {
                                                        stroke: src/* MaskColorVar.textLink */.ZN.textLink,
                                                        fill: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewDialog/* PreviewDialog */.g, {
                type: preview.type,
                open: preview.open,
                onClose: ()=>setPreview({
                        ...preview,
                        open: false
                    })
                ,
                personaName: state.personaName,
                id: id === null || id === void 0 ? void 0 : id.toText(),
                words: words,
                privateKey: privateKey1
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/PersonaNameUI.tsx










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
const PersonaNameUI = ({ onNext , error  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [personaName, setPersonaName] = (0,react.useState)('');
    const [helper, setHelper] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        setHelper('');
    }, [
        personaName
    ]);
    (0,react.useEffect)(()=>{
        if (error) setHelper(error);
    }, [
        error
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                title: t.create_account_persona_title(),
                subtitle: t.create_account_persona_subtitle(),
                action: {
                    name: t.create_account_sign_in_button(),
                    callback: ()=>navigate(shared_base_src/* DashboardRoutes.SignIn */.vq.SignIn)
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* Body */.uT, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* PersonaLogoBox */.xK, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
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
                                },
                                error: !!helper,
                                helperText: helper
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "large",
                                    variant: "rounded",
                                    color: "primary",
                                    onClick: ()=>onNext(personaName)
                                    ,
                                    disabled: !personaName,
                                    children: t.next()
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Footer */.$_, {})
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/PersonaCreate.tsx








const PersonaCreate = ()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [error, setError] = (0,react.useState)('');
    const onNext = async (personaName)=>{
        setError('');
        const personas = await API/* Services.Identity.queryMyPersonas */.K9.Identity.queryMyPersonas();
        const existing = personas.some((x)=>x.nickname === personaName
        );
        if (existing) {
            return setError(t.create_account_persona_exists());
        }
        navigate(`${shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.MnemonicReveal */.X.MnemonicReveal}`, {
            replace: true,
            state: {
                personaName
            }
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaNameUI, {
        onNext: onNext,
        error: error
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/upperFirst.js + 1 modules
var upperFirst = __webpack_require__(75272);
// EXTERNAL MODULE: ../shared/src/index.ts + 4 modules
var shared_src = __webpack_require__(95367);
// EXTERNAL MODULE: ../dashboard/src/components/ActionCard/index.tsx
var ActionCard = __webpack_require__(51475);
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/ConnectSocialMedia.tsx












const ConnectSocialMedia = ()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { currentPersona , connectPersona , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    (0,react.useEffect)(()=>{
        if (currentPersona && (currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.linkedProfiles.length) > 0) {
            navigate(shared_base_src/* DashboardRoutes.Personas */.vq.Personas, {
                replace: true
            });
        }
    }, [
        currentPersona
    ]);
    const handleConnect = async (networkIdentifier)=>{
        if (currentPersona) {
            await connectPersona(currentPersona.identifier, networkIdentifier);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                title: t.create_account_connect_social_media_title(),
                subtitle: t.create_account_persona_subtitle(),
                action: {
                    name: t.create_account_sign_in_button(),
                    callback: ()=>navigate(shared_base_src/* DashboardRoutes.SignIn */.vq.SignIn)
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* Body */.uT, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* PersonaLogoBox */.xK, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {})
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
                                    onClick: ()=>navigate(shared_base_src/* DashboardRoutes.Setup */.vq.Setup)
                                    ,
                                    children: t.go_back()
                                })
                            }),
                            definedSocialNetworks.map(({ networkIdentifier  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                                    title: t.create_account_connect_social_media({
                                        type: (0,upperFirst/* default */.Z)(networkIdentifier)
                                    }),
                                    icon: shared_src/* SOCIAL_MEDIA_ICON_MAPPING */.I4[networkIdentifier],
                                    action: {
                                        type: 'primary',
                                        text: t.connect(),
                                        handler: ()=>handleConnect(networkIdentifier)
                                    }
                                }, networkIdentifier)
                            )
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Footer */.$_, {})
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/PersonaRecovery.tsx













const PersonaRecovery = ()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const createPersona = useCreatePersonaV2();
    const createPersonaByPrivateKey = useCreatePersonaByPrivateKey();
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const { state  } = (0,react_router/* useLocation */.TH)();
    const [error1, setError] = (0,react.useState)('');
    (0,useAsync/* default */.Z)(async ()=>{
        if (// eslint-disable-next-line @typescript-eslint/await-thenable
        (!(state === null || state === void 0 ? void 0 : state.mnemonic) || await (!API/* Services.Identity.validateMnemonic */.K9.Identity.validateMnemonic(state === null || state === void 0 ? void 0 : state.mnemonic.join(' ')))) && !(state === null || state === void 0 ? void 0 : state.privateKey)) {
            navigate(shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp, {
                replace: true
            });
        }
    }, [
        state === null || state === void 0 ? void 0 : state.mnemonic,
        state === null || state === void 0 ? void 0 : state.privateKey
    ]);
    const onNext = (0,react.useCallback)(async (personaName)=>{
        setError('');
        try {
            const identifier = (state === null || state === void 0 ? void 0 : state.mnemonic) ? await createPersona(state === null || state === void 0 ? void 0 : state.mnemonic.join(' '), personaName) : await createPersonaByPrivateKey(state === null || state === void 0 ? void 0 : state.privateKey, personaName);
            await changeCurrentPersona(identifier);
            showSnackbar(t.create_account_persona_successfully(), {
                variant: 'success'
            });
            await (0,esm/* delay */.gw)(300);
            navigate(`${shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.ConnectSocialMedia */.X.ConnectSocialMedia}`);
        } catch (error) {
            setError(error.message);
        }
    }, [
        state === null || state === void 0 ? void 0 : state.mnemonic,
        state === null || state === void 0 ? void 0 : state.privateKey
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaNameUI, {
        onNext: onNext,
        error: error1
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/index.ts





;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/routes.tsx




const Actions = ()=>{
    const { action  } = (0,react_router/* useParams */.UO)();
    switch(action){
        case routePath/* SignUpRoutePath.MnemonicReveal */.X.MnemonicReveal:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicRevealForm, {}));
        case routePath/* SignUpRoutePath.PersonaCreate */.X.PersonaCreate:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCreate, {}));
        case routePath/* SignUpRoutePath.PersonaRecovery */.X.PersonaRecovery:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaRecovery, {}));
        case routePath/* SignUpRoutePath.ConnectSocialMedia */.X.ConnectSocialMedia:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectSocialMedia, {}));
        default:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicRevealForm, {}));
    }
};
const SignUpRoutes = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                path: ":action",
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Actions, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                path: "*",
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCreate, {})
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/index.tsx



function SignUp() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RowLayout/* RowLayout */.V, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUpRoutes, {})
    }));
};


/***/ }),

/***/ 37808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ SignUpRoutePath)
/* harmony export */ });
var SignUpRoutePath;
(function(SignUpRoutePath) {
    SignUpRoutePath["MnemonicReveal"] = 'mnemonic-reveal';
    SignUpRoutePath["PersonaCreate"] = 'persona-create';
    SignUpRoutePath["PersonaRecovery"] = 'persona-recovery';
    SignUpRoutePath["ConnectSocialMedia"] = 'connect-social-media';
})(SignUpRoutePath || (SignUpRoutePath = {}));


/***/ }),

/***/ 1894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ DownloadIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const DownloadIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('DownloadIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M14 10v2.667A1.334 1.334 0 0112.667 14H3.333A1.334 1.334 0 012 12.667V10M4.667 6.667L8 10l3.333-3.333M8 10V2",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');


/***/ }),

/***/ 35385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ SignUpAccountIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const SignUpAccountIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('SignUpAccount', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            x: "7",
            y: "26.5",
            width: "3",
            height: "15",
            rx: "1.5",
            transform: "rotate(-30 7 26.5)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M27.6522 26.1312C25.4873 26.8222 23.1442 26.4569 21.0187 25.1362C20.7879 24.9826 20.4804 24.9445 20.1917 25.0366C19.9031 25.1288 19.6745 25.338 19.5614 25.6241C18.6082 27.9049 16.8895 29.5668 14.7246 30.2579C11.2607 31.3636 7.32552 29.7117 4.9138 26.1422C4.26886 25.1894 3.7485 24.1287 3.38651 22.9947C3.21538 22.4586 3.07891 21.8887 2.96965 21.3329L2.59926 19.2474L4.32911 20.4673C4.65464 20.7042 5.085 20.7712 5.45613 20.6528C5.55922 20.6199 5.65573 20.5663 5.75224 20.5128L6.18959 20.0324L6.21766 19.978L6.27381 19.8692C7.46739 18.0569 9.237 16.6968 11.3194 16.0321C13.2782 15.4068 15.3791 15.4405 17.3212 16.1155C18.5131 14.4401 20.2059 13.1954 22.1647 12.5701C24.2265 11.9119 26.4774 11.9886 28.5003 12.7742L28.6091 12.8303C28.6907 12.8724 28.7929 12.9079 28.8951 12.9435L28.8951 12.9435L28.9223 12.9575C29.1474 13.022 29.3939 13.0114 29.6414 12.9325C30.0331 12.8074 30.3244 12.51 30.4525 12.1283L31.1349 10.1383L32.0414 12.0527C32.3016 12.5831 32.4933 13.1126 32.6644 13.6487C33.0264 14.7827 33.2169 15.9487 33.2433 17.099C33.387 21.3925 31.1161 25.0254 27.6522 26.1312ZM14.3081 24.8247C14.0195 24.9169 13.7176 24.9678 13.4092 24.9981C11.7172 25.1065 10.144 23.9502 9.41964 23.3181C9.94034 22.743 10.98 21.7295 12.2789 21.3149C12.5882 21.2161 12.8694 21.1718 13.1778 21.1415C14.8699 21.0331 16.4431 22.1894 17.1674 22.8215C16.6261 23.4032 15.5864 24.4167 14.3081 24.8247ZM21.3738 21.4788C22.1314 21.6459 23.5866 21.8629 24.8649 21.4549C25.1742 21.3562 25.4497 21.2228 25.698 21.0754C27.1193 20.19 27.7522 18.3294 27.9763 17.3946C27.2187 17.2275 25.7635 17.0104 24.4852 17.4185C24.1759 17.5172 23.9004 17.6506 23.6521 17.798C22.2308 18.6834 21.5979 20.5439 21.3738 21.4788Z",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.5306 16.4749L28.894 15.8691L45.9996 21.5145L45.9269 22.2171C45.7816 23.7435 45.4666 25.27 44.9578 26.7722C43.7706 30.3338 41.7353 33.3867 39.2397 35.3734C37.3741 36.8514 35.3631 37.6267 33.449 37.6267C32.6979 37.6267 31.9711 37.5298 31.2684 37.2875C28.7486 36.4395 26.883 34.2104 26.035 30.988C25.2112 27.9109 25.405 24.2524 26.5922 20.6907C27.0768 19.1885 27.731 17.7832 28.5306 16.4749ZM30.7116 26.4814C31.0751 26.651 31.4627 26.7237 31.8988 26.7237C32.2865 26.7237 32.7226 26.651 33.183 26.5299C33.678 26.3649 34.0759 26.1583 34.2507 26.0675C34.3069 26.0383 34.3401 26.0211 34.346 26.0211L34.8305 25.7303L34.564 25.2215C34.5398 25.1488 33.7645 23.6709 32.238 22.9924C30.7116 22.314 29.0883 22.7501 29.0156 22.7744L28.4583 22.9198L28.5795 23.477C28.5864 23.484 28.6014 23.5348 28.626 23.6186C28.6872 23.827 28.8083 24.2392 29.0156 24.6885C29.4517 25.5607 30.0332 26.1907 30.7116 26.4814ZM38.2468 29.0497C38.4407 29.0981 38.6345 29.1224 38.8525 29.1224C39.434 29.1224 40.064 28.9528 40.6697 28.6378C41.2997 28.3228 41.7116 27.9594 41.7358 27.9351L42.1719 27.5475L41.8327 27.0871C41.7842 27.0144 40.7424 25.6819 39.1191 25.3184C37.6165 24.982 36.2177 25.5797 35.9603 25.6897C35.9396 25.6986 35.9263 25.7043 35.9208 25.7061L35.412 25.9484L35.6301 26.4814C35.6301 26.5056 35.8482 27.0387 36.26 27.5959C36.8415 28.3713 37.52 28.8801 38.2468 29.0497Z",
                fill: "#1C68F3",
                fillOpacity: "0.1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "21.5332",
                    y: "11.8691",
                    width: "28.4664",
                    height: "29.7576",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "3",
                    y1: "21.4999",
                    x2: "32.5",
                    y2: "11.9999",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 48 48');


/***/ })

}]);